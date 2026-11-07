import { Ajv } from 'ajv';
import { resolve } from 'node:path';
import { AuthorizationContextSchema, rightNames, type AuthorizationContext, type RightName, type Metadata } from './schema.js';
import { evaluateLegal, sameScope, scopeKey, type LegalAssessment, type Condition } from './rights-policy.js';
import { validateMetadata } from './validation.js';
import { readVaultFile, verifyEvidenceRecords, verifySnapshotFiles } from './filesystem.js';
import { sha256 } from './identity.js';

type FulfillmentState = AuthorizationContext['fulfillments'][number]['state'];
const ajv = new Ajv({ strict: true, allErrors: true });
const contextValidator = ajv.compile<AuthorizationContext>(AuthorizationContextSchema);
export interface AuthorizationResult extends LegalAssessment {
  readiness: 'ready' | 'blocked' | 'unknown';
  fulfillment: Array<Condition & { state: FulfillmentState }>;
}
export function assessLegalPermission(input: unknown, component: string, snapshot: string, right: RightName): LegalAssessment {
  if (!rightNames.includes(right)) throw new Error('Unknown requested right');
  return evaluateLegal(validateMetadata(input), component, snapshot, right);
}

async function checkFulfillments(legal: LegalAssessment, context: AuthorizationContext, sourceId: string): Promise<AuthorizationResult['fulfillment']> {
  const keys = new Set<string>();
  for (const receipt of context.fulfillments) {
    const key = `${receipt.conditionId}:${scopeKey(receipt.scope)}`;
    if (keys.has(key)) throw new Error('Duplicate fulfillment receipt');
    keys.add(key);
    if (!legal.conditions.some(c => c.conditionId === receipt.conditionId && sameScope(c.scope, receipt.scope, sourceId))) throw new Error('Fulfillment outside requested condition scope');
  }
  const result: AuthorizationResult['fulfillment'] = [];
  for (const condition of legal.conditions) {
    const receipt = context.fulfillments.find(f => f.conditionId === condition.conditionId && sameScope(f.scope, condition.scope, sourceId));
    let state: FulfillmentState = receipt?.state ?? 'unknown';
    if (state === 'satisfied') {
      if (!receipt?.proof) state = 'unknown';
      else if (sha256(await readVaultFile(context.vaultRoot, receipt.proof.path)) !== receipt.proof.sha256) throw new Error('Fulfillment proof hash mismatch');
    }
    result.push({ ...condition, state });
  }
  return result;
}

// Legal permission and operation readiness are separate. No detached boolean permission token is exported.
export async function authorize(input: unknown, component: string, snapshot: string, right: RightName,
  context?: AuthorizationContext): Promise<AuthorizationResult> {
  const data: Metadata = validateMetadata(input);
  const legal = assessLegalPermission(data, component, snapshot, right);
  const base: AuthorizationResult = { ...legal, readiness: 'unknown', fulfillment: legal.conditions.map(c => ({ ...c, state: 'unknown' })) };
  if (data.fixture) return { ...base, readiness: 'blocked', reasons: [...base.reasons, 'fixture_not_authorizable'] };
  if (legal.legal !== 'allowed') return { ...base, readiness: legal.legal === 'denied' ? 'blocked' : 'unknown' };
  const snap = data.snapshots.find(s => s.componentId === component && s.snapshotId === snapshot)!;
  if (snap.archive.status !== 'archived_complete') return { ...base, reasons: [...base.reasons, 'archive_not_complete'] };
  if (context === undefined) return { ...base, reasons: [...base.reasons, 'vault_and_fulfillment_context_missing'] };
  if (!contextValidator(context)) throw new Error(ajv.errorsText(contextValidator.errors));
  try {
    await verifyEvidenceRecords(data, context.vaultRoot, legal.evidenceRefs);
    await verifySnapshotFiles(data, component, snapshot, resolve(context.vaultRoot, snap.archive.path));
    const sourceId = data.entries.find(e => e.componentId === component)!.sourceId;
    const fulfillment = await checkFulfillments(legal, context, sourceId);
    const readiness = fulfillment.some(f => f.state === 'unsatisfied') ? 'blocked' : fulfillment.some(f => f.state === 'unknown') ? 'unknown' : 'ready';
    return { ...base, readiness, fulfillment, reasons: [...base.reasons, ...(readiness === 'ready' ? [] : ['obligations_not_fulfilled'])] };
  } catch (error) {
    const missing = (error as NodeJS.ErrnoException).code === 'ENOENT';
    return { ...base, readiness: missing ? 'unknown' : 'blocked', reasons: [...base.reasons, `verification_failed:${error instanceof Error ? error.message : String(error)}`] };
  }
}
