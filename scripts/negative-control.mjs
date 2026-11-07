import { readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

async function control(file, before, after, name) {
  const original = await readFile(file, 'utf8');
  if (original.split(before).length !== 2) throw new Error('Negative control target must be unique');
  try {
    await writeFile(file, original.replace(before, after));
    console.log(`NEGATIVE CONTROL: ${name}; local compiled output only, restored in finally`);
    const result = spawnSync(process.execPath, ['--test', `--test-name-pattern=${name}`, 'dist/tests/metadata.test.js'], { encoding: 'utf8' });
    process.stdout.write(result.stdout ?? ''); process.stderr.write(result.stderr ?? '');
    if (result.status !== 1 || !result.stdout.includes('not ok')) throw new Error('Control did not produce expected assertion failure');
    console.log('EXPECTED_FAILURE_CONFIRMED exit=1');
  } finally { await writeFile(file, original); }
}
await control('dist/packages/core/src/rights-policy.js', "const legal = states.includes('denied') ? 'denied' : states.includes('unknown') ? 'unknown' : 'allowed';", "const legal = 'allowed';", 'unknown never grants permission');
await control('dist/packages/core/src/filesystem.js', 'JSON.stringify(actual) !== JSON.stringify(expected)', 'false', 'real filesystem rejects missing and orphan files');
