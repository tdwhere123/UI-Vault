/** Read candidate collectionAccounting marks together with COLLECTION-LEDGER.
 *  Record counts stay separate from the new-original identity upper bound.
 */
export function collectionAccountingFrom(candidates, ledger) {
  if (!Array.isArray(candidates) || !ledger?.accounts) throw Error('collection accounting inputs are invalid');
  const oldSourceReconnects = candidates.filter((x) => x?.collectionAccounting?.thisRoundRole === 'old-source-reconnect').length;
  const duplicateOriginalExclusions = candidates.filter((x) => x?.collectionAccounting?.thisRoundRole === 'duplicate-excluded').length;
  const newCatalogConnects = ledger.accounts.newCatalogConnectsThisLine;
  if (!Number.isInteger(newCatalogConnects) || newCatalogConnects < 0) throw Error('ledger newCatalogConnectsThisLine is invalid');
  const novelSourceIdentityUpperBound = newCatalogConnects - oldSourceReconnects - duplicateOriginalExclusions;
  return {
    catalogRecordCount: candidates.length,
    unverifiedPreviewCount: candidates.filter((x) => x?.preview).length,
    newCatalogConnects,
    oldSourceReconnects,
    duplicateOriginalExclusions,
    novelSourceIdentityUpperBound,
    verifiedNewIndependentUIs: ledger.accounts.verifiedNewIndependentUIs,
    covers: ledger.accounts.covers,
    browserVisualQA: ledger.accounts.browserVisualQA,
  };
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
