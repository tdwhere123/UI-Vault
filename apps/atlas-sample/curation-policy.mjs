/** Evidence-scoped, reversible overlays. Never edits catalogue records in place. */
export const POLICY_VERSION = 'quality-scope-20261109-batch2';
export function validateRules(rules) {
  const seen = new Set();
  for (const r of rules) {
    if (!r || typeof r.id !== 'string' || seen.has(r.id)) throw new Error('Missing/duplicate id');
    seen.add(r.id);
    if (!['retain', 'review'].includes(r.recommendation)) throw new Error('Unsupported recommendation');
    if (!['page', 'component', 'experiment'].includes(r.layer)) throw new Error('Unsupported layer');
    if (!r.scopeLabel || !r.evidence?.length) throw new Error('Missing scope/evidence');
  }
  return rules;
}
/** Existing records outside audited IDs retain their current featured decision. */
export function applyCuration(records, rules) {
  validateRules(rules);
  const map = new Map(rules.map(r => [r.id, r]));
  return records.map(record => {
    const rule = map.get(record.id);
    if (!rule) return {...record};
    return {
      ...record,
      ...(rule.recommendation === 'review' ? {featured: false} : {}),
      curation: {
        policyVersion: POLICY_VERSION,
        state: rule.recommendation === 'review' ? 'needs-review' : 'scoped-reference',
        layer: rule.layer,
        scopeLabel: rule.scopeLabel,
        fullApplication: false,
        nativeVerified: false,
        evidence: [...rule.evidence],
        reason: rule.reason,
        ...(rule.evidenceStatus ? {evidenceStatus: rule.evidenceStatus, historicalCapture: structuredClone(rule.historicalCapture)} : {}),
      },
    };
  });
}
/** Call at NEW-record creation, not a migration over the existing catalogue.
 * Source adapters are not an editorial approval mechanism.
 * An explicit editorial decision is the only way to opt in to featured.
 */
export function initializeNewRecord(record, editorialDecision = null) {
  const approved = editorialDecision?.featured === true &&
    editorialDecision?.id === record.id &&
    typeof editorialDecision?.evidence === 'string' &&
    editorialDecision.evidence.trim().length > 0;
  return {...record, featured: Boolean(approved)};
}
/** Optional UI views, not data removal. 'all' includes review records. */
export function selectView(records, view = 'all') {
  if (view === 'all') return records.slice();
  if (view === 'featured') return records.filter(r => r.featured === true && r.curation?.state !== 'needs-review');
  if (view === 'needs-review') return records.filter(r => r.curation?.state === 'needs-review');
  if (['page','component','experiment'].includes(view)) return records.filter(r => r.curation?.layer === view);
  throw new Error('Unknown view');
}
/** Search/open should consume the full catalogue, never the featured view. */
export function findRecord(records, id) {return records.find(r => r.id === id);}
// Measured large list compositions: detail stays fully available. Not a quality/failure flag.
export const detailOnlyListPreviewIds = new Set(['plate:structured-stream-replay','healthicons:clinical-research-symbol-family']);
export function shouldAutoPreviewCard(item) {return Boolean(item.preview) && !detailOnlyListPreviewIds.has(item.id);}
