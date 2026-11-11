import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
const js=readFileSync(join(dirname(fileURLToPath(import.meta.url)),'batches/astryx-navigation-01/stepper/runtime.js'),'utf8');
test('Step indicators render step+1, so a missing step prop would be NaN',()=>{
 assert.equal(Number.isNaN(undefined+1),true);
 assert.equal(0+1,1);
 assert.match(js,/children:e\+1/);
});
test('host fixture passes numeric step indexes for the three local steps',()=>{
 assert.match(js,/\(0,H\.jsx\)\(tb,\{step:0,label:`Prepare`\}\)/);
 assert.match(js,/\(0,H\.jsx\)\(tb,\{step:1,label:`Review`\}\)/);
 assert.match(js,/\(0,H\.jsx\)\(tb,\{step:2,label:`Done`\}\)/);
 assert.doesNotMatch(js,/\(0,H\.jsx\)\(tb,\{label:`Prepare`\}\)/);
});
