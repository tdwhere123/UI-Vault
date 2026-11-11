/** Read candidate collectionAccounting marks together with COLLECTION-LEDGER.
 *  Record counts stay separate from the new-original identity upper bound.
 *  Named limited-countable acceptances on the ledger are the authority for
 *  verifiedNewIndependentUIs; the accounts integer is a projection of that list.
 */

function requiredString(record, key) {
  const value = record?.[key];
  if (typeof value !== 'string' || !value.trim()) throw Error(`verifiedNewIndependent record missing ${key}`);
  return value;
}

export function verifiedNewIndependentRecordsFrom(ledger) {
  const records = ledger?.verifiedNewIndependentRecords;
  if (records === undefined) return [];
  if (records === null) throw Error('verifiedNewIndependentRecords must not be null');
  if (!Array.isArray(records)) throw Error('verifiedNewIndependentRecords must be an array');
  const seen = new Set();
  for (const record of records) {
    if (!record || typeof record !== 'object') throw Error('verifiedNewIndependent record is invalid');
    const id = requiredString(record, 'id');
    requiredString(record, 'sourceCommit');
    requiredString(record, 'scope');
    requiredString(record, 'exclusions');
    if (!record.evidence || typeof record.evidence !== 'object' || Array.isArray(record.evidence)) {
      throw Error(`verifiedNewIndependent evidence is invalid for ${id}`);
    }
    if (seen.has(id)) throw Error(`duplicate verifiedNewIndependent id ${id}`);
    seen.add(id);
  }
  return records;
}

export function collectionAccountingFrom(candidates, ledger) {
  if (!Array.isArray(candidates) || !ledger?.accounts) throw Error('collection accounting inputs are invalid');
  const oldSourceReconnects = candidates.filter((x) => x?.collectionAccounting?.thisRoundRole === 'old-source-reconnect').length;
  const duplicateOriginalExclusions = candidates.filter((x) => x?.collectionAccounting?.thisRoundRole === 'duplicate-excluded').length;
  const newCatalogConnects = ledger.accounts.newCatalogConnectsThisLine;
  if (!Number.isInteger(newCatalogConnects) || newCatalogConnects < 0) throw Error('ledger newCatalogConnectsThisLine is invalid');
  const novelSourceIdentityUpperBound = newCatalogConnects - oldSourceReconnects - duplicateOriginalExclusions;
  const verifiedNewIndependentRecords = verifiedNewIndependentRecordsFrom(ledger);
  const catalogIds = new Set(candidates.map((x) => x?.id).filter(Boolean));
  for (const record of verifiedNewIndependentRecords) {
    if (!catalogIds.has(record.id)) throw Error(`verifiedNewIndependent id is not in the catalog: ${record.id}`);
  }
  const verifiedNewIndependentUIs = verifiedNewIndependentRecords.length;
  if (ledger.accounts.verifiedNewIndependentUIs !== verifiedNewIndependentUIs) {
    throw Error('ledger verifiedNewIndependentUIs does not match named records');
  }
  if (!Number.isInteger(novelSourceIdentityUpperBound) || novelSourceIdentityUpperBound < 0) {
    throw Error('ledger novel-source identity upper bound is invalid');
  }
  if (verifiedNewIndependentUIs < 0 || verifiedNewIndependentUIs > novelSourceIdentityUpperBound) {
    throw Error('verifiedNewIndependentUIs exceeds novel source identity upper bound');
  }
  return {
    catalogRecordCount: candidates.length,
    unverifiedPreviewCount: candidates.filter((x) => x?.preview).length,
    newCatalogConnects,
    oldSourceReconnects,
    duplicateOriginalExclusions,
    novelSourceIdentityUpperBound,
    verifiedNewIndependentUIs,
    verifiedNewIndependentRecords,
    covers: ledger.accounts.covers,
    browserVisualQA: ledger.accounts.browserVisualQA,
  };
}

export function formatCollectionAccountingStatus(acc) {
  return `本线新增接站 ${acc.newCatalogConnects} · 旧源补接 ${acc.oldSourceReconnects} · 重复排除 ${acc.duplicateOriginalExclusions} · 新原件身份上限 ${acc.novelSourceIdentityUpperBound}（目录记录数不是已核独立数；已核新增独立 UI ${acc.verifiedNewIndependentUIs}，均为限定可计；封面 ${acc.covers}；实测 ${acc.browserVisualQA}）`;
}

export async function loadCollectionAccounting({
  atlasDir,
  readFile,
} = {}) {
  if (!readFile || !atlasDir) throw Error('loadCollectionAccounting requires atlasDir and readFile');
  const [candidates, ledger] = await Promise.all([
    readFile('candidate-catalog.json').then((t) => JSON.parse(t)),
    readFile('COLLECTION-LEDGER.json').then((t) => JSON.parse(t)),
  ]);
  const result = collectionAccountingFrom(candidates, ledger);
  const accounts = ledger.accounts;
  if (result.oldSourceReconnects !== accounts.oldSourceReconnects) throw Error('ledger old-source-reconnect marks do not match catalog accounting');
  if (result.duplicateOriginalExclusions !== accounts.duplicateOriginalExclusions) throw Error('ledger duplicate-exclusion marks do not match catalog accounting');
  if (result.novelSourceIdentityUpperBound !== accounts.novelSourceIdentityUpperBound) throw Error('ledger novel-source upper bound does not match marks');
  return result;
}
