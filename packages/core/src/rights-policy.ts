import { rightNames, type Scope, type Rights, type RightName, type LicenseEvidence, type Metadata } from './schema.js';
import { sha256 } from './identity.js';

export function covers(evidence: Scope, target: Scope, sourceId: string): boolean {
  if (evidence.kind === 'source') return evidence.sourceId === sourceId;
  if (target.kind === 'source' || evidence.componentId !== target.componentId) return false;
  if (evidence.kind === 'entry') return true;
  if (target.kind === 'entry' || evidence.snapshotId !== target.snapshotId) return false;
  return evidence.kind === 'snapshot' || (target.kind === 'file' && evidence.path === target.path);
}
export function scopeKey(scope: Scope): string {
  switch (scope.kind) {
    case 'source': return JSON.stringify([scope.kind, scope.sourceId]);
    case 'entry': return JSON.stringify([scope.kind, scope.componentId]);
    case 'snapshot': return JSON.stringify([scope.kind, scope.componentId, scope.snapshotId]);
    case 'file': return JSON.stringify([scope.kind, scope.componentId, scope.snapshotId, scope.path]);
  }
}
export function sameScope(a: Scope, b: Scope, sourceId: string): boolean {
  return covers(a, b, sourceId) && covers(b, a, sourceId);
}
export function conditionId(evidenceId: string, obligation: string): string {
  return sha256(`obligation\0${evidenceId}\0${obligation}`);
}

export function validateEvidenceRefs(refs: string[], scope: Scope, sourceId: string, evidence: Map<string, LicenseEvidence>, requiredRights: readonly RightName[] = []): void {
  for (const id of refs) {
    const record = evidence.get(id);
    if (!record || !covers(record.scope, scope, sourceId)) throw new Error(`Missing or out-of-scope evidence: ${id}`);
    if (requiredRights.some(right => !record.applicableRights.includes(right))) throw new Error('Evidence does not address requested right');
    if ((scope.kind === 'snapshot' || scope.kind === 'file') && record.upstreamVersion !== scope.snapshotId) throw new Error('Evidence version mismatch');
  }
}

export function validateRights(rights: Rights, scope: Scope, sourceId: string, evidence: Map<string, LicenseEvidence>): void {
  for (const name of rightNames) {
    const decision = rights[name];
    if (!sameScope(decision.scope, scope, sourceId)) throw new Error('Right decision scope mismatch');
    if (decision.state !== 'unknown' && !decision.evidenceRefs.length) throw new Error(`Missing evidence: ${name}`);
    validateEvidenceRefs(decision.evidenceRefs, scope, sourceId, evidence, [name]);
    const expected = [...new Set(decision.evidenceRefs.flatMap(ref => evidence.get(ref)!.obligations.map(text => conditionId(ref, text))))].sort();
    if (JSON.stringify([...decision.conditionRefs].sort()) !== JSON.stringify(expected)) throw new Error('Right conditions omitted or invented');
  }
}
export interface Condition { conditionId: string; description: string; scope: Scope; evidenceRef: string }
export interface LegalAssessment {
  legal: Rights[RightName]['state']; reasons: string[]; conditions: Condition[]; evidenceRefs: string[];
}

// Internal: the public caller first validates the complete graph. One policy owner for all consumers.
export function evaluateLegal(data: Metadata, component: string, snapshot: string, right: RightName): LegalAssessment {
  const entry = data.entries.find(e => e.componentId === component);
  const snap = data.snapshots.find(s => s.componentId === component && s.snapshotId === snapshot);
  if (!entry || !snap) return { legal: 'unknown', reasons: ['target_missing'], conditions: [], evidenceRefs: [] };
  const decisions = [entry.rights[right], snap.rights[right], ...snap.files.map(f => f.rights[right])];
  const scopes = decisions.map(d => d.scope);
  const restrictions = entry.restrictions.filter(r => r.rights.includes(right) && scopes.some(s => covers(r.scope, s, entry.sourceId)));
  const states = [...decisions.map(d => d.state), ...restrictions.map(r => r.state)];
  const legal = states.includes('denied') ? 'denied' : states.includes('unknown') ? 'unknown' : 'allowed';
  const evidence = new Map(data.licenseEvidence.map(e => [e.evidenceId, e]));
  const conditions = decisions.flatMap(decision => decision.evidenceRefs.flatMap(ref =>
    evidence.get(ref)!.obligations.map(description => ({ conditionId: conditionId(ref, description), description,
      scope: decision.scope, evidenceRef: ref }))));
  conditions.sort((a, b) => {
    const left = a.conditionId + scopeKey(a.scope); const right = b.conditionId + scopeKey(b.scope);
    return left < right ? -1 : left > right ? 1 : 0;
  });
  return { legal, reasons: restrictions.map(r => r.reason).sort(), conditions,
    evidenceRefs: [...new Set([...decisions.flatMap(d => d.evidenceRefs), ...restrictions.flatMap(r => r.evidenceRefs)])].sort() };
}
