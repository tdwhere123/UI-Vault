import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {localizeItem,displayLabel} from './display-names.mjs';
import {adaptCandidate} from './candidate-adapter.mjs';
import {filterItems,detailHash,resolveRoute} from './atlas-model.mjs';
const raw=[...JSON.parse(await readFile(new URL('./items.json',import.meta.url))),...JSON.parse(await readFile(new URL('./candidate-catalog.json',import.meta.url)))];
test('all collected display titles and taxonomy labels are Chinese',()=>{
 for(const x of raw){const y=localizeItem(x);assert.doesNotMatch(y.title,/[a-z]/i,x.id);for(const key of ['category','format','kind'])assert.doesNotMatch(displayLabel(x[key]),/[a-z]/i,`${x.id}: ${key}`);}
});
test('localization preserves original identities, assets and both-language search',()=>{
 for(const x of raw){const before=JSON.stringify(x);const y=localizeItem(x);
 assert.equal(JSON.stringify(x),before);for(const key of Object.keys(x).filter(k=>!['title','keywords'].includes(k)))assert.deepEqual(y[key],x[key]);
 assert.equal(y.originalTitle,x.title);assert.equal(resolveRoute(detailHash(y.id),[y]).id,x.id);
 }
 const x=raw.find(x=>x.id==='affectui:decision-inbox');const y=localizeItem(adaptCandidate(x));
 assert.equal(filterItems([y],{query:'decision-inbox'}).length,1);
 assert.equal(filterItems([y],{query:y.title}).length,1);
 assert.equal(filterItems([y],{category:y.primaryCategory||y.category}).length,1);
});
