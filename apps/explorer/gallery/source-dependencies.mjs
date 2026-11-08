import ts from 'typescript';
import {posix} from 'node:path';
import {isDeepStrictEqual} from 'node:util';

/** Syntax, not text matching. Type references are retained alongside runtime references. */
export function parseSourceDependencies(file,source) {
 if(typeof file!=='string'||typeof source!=='string')throw new TypeError('Source dependency input must be text');
 const kind=file.endsWith('.tsx')?ts.ScriptKind.TSX:file.endsWith('.jsx')?ts.ScriptKind.JSX:/\.[cm]?js$/.test(file)?ts.ScriptKind.JS:ts.ScriptKind.TS;
 const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,kind);
 if(tree.parseDiagnostics.length) {
  const first=tree.parseDiagnostics[0],where=tree.getLineAndCharacterOfPosition(first.start??0);
  throw new SyntaxError(`Source dependency parse failed: ${file}:${where.line+1}:${where.character+1}: ${ts.flattenDiagnosticMessageText(first.messageText,' ')}`);
 }
 const references=[],unknown=[];
 const known=(node,specifier,syntax,typeOnly)=>references.push({file,specifier,syntax,typeOnly});
 const uncertain=(node,syntax,expression,reason)=>{
  const position=tree.getLineAndCharacterOfPosition(node.getStart(tree));
  unknown.push({file,specifier:null,status:'unknown_dynamic_dependency',syntax,expression,line:position.line+1,column:position.character+1,reason});
 };
 const literal=node=>node&&(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node));
 const typeNames=clause=>clause&&((ts.isNamedImports(clause)||ts.isNamedExports(clause))&&clause.elements.length>0&&clause.elements.every(x=>x.isTypeOnly));
 function visit(node) {
  if(ts.isImportDeclaration(node)) {
   known(node,node.moduleSpecifier.text,node.importClause?'import':'side-effect-import',Boolean(node.importClause?.isTypeOnly||!node.importClause?.name&&typeNames(node.importClause?.namedBindings)));
  } else if(ts.isExportDeclaration(node)&&node.moduleSpecifier) {
   known(node,node.moduleSpecifier.text,'re-export',Boolean(node.isTypeOnly||typeNames(node.exportClause)));
  } else if(ts.isImportEqualsDeclaration(node)&&ts.isExternalModuleReference(node.moduleReference)) {
   const expression=node.moduleReference.expression;
   if(literal(expression))known(node,expression.text,'import-equals',Boolean(node.isTypeOnly));
   else uncertain(node,'import-equals',expression?.getText(tree)??'', 'non_literal_module_reference');
  } else if(ts.isImportTypeNode(node)) {
   const argument=node.argument;
   if(ts.isLiteralTypeNode(argument)&&literal(argument.literal))known(node,argument.literal.text,'import-type',true);
   else uncertain(node,'import-type',argument.getText(tree),'non_literal_type_reference');
  } else if(ts.isCallExpression(node)&&node.expression.kind===ts.SyntaxKind.ImportKeyword) {
   let expression=node.arguments[0];while(expression&&ts.isParenthesizedExpression(expression))expression=expression.expression;
   if(literal(expression))known(node,expression.text,'dynamic-import',false);
   else uncertain(node,'dynamic-import',expression?.getText(tree)??'','non_literal_module_expression');
  } else if(ts.isCallExpression(node)&&ts.isPropertyAccessExpression(node.expression)&&(
   ts.isMetaProperty(node.expression.expression)&&node.expression.expression.keywordToken===ts.SyntaxKind.ImportKeyword||
   ts.isIdentifier(node.expression.expression)&&node.expression.expression.text==='require'&&node.expression.name.text==='resolve')) {
   uncertain(node,'module-resolution-call',node.getText(tree),'host_or_binding_resolution_not_established');
  } else if(ts.isCallExpression(node)&&ts.isIdentifier(node.expression)&&node.expression.text==='require') {
   // A call named require may be locally bound. Unlike TS import=, its binding is not established by syntax.
   uncertain(node,'require-call',node.getText(tree),'runtime_binding_not_statically_established');
  }
  ts.forEachChild(node,visit);
 }
 visit(tree);return {state:unknown.length?'unknown':'static',references,unknown};
}

export function analyzeSourceModules(files) {
 const references=[],unknown=[];
 for(const [file,bytes] of files)if(/\.[cm]?[jt]sx?$/.test(file)) {
  const result=parseSourceDependencies(file,Buffer.isBuffer(bytes)?bytes.toString('utf8'):bytes);
  references.push(...result.references);unknown.push(...result.unknown);
 }
 return {state:unknown.length?'unknown':'static',references,unknown};
}

/** Resolution uses package paths; saved-elsewhere declarations are never treated as bundled closure. */
export function moduleEdgesFor(analysis,files,previous=[]) {
 const edges=analysis.references.map(({file,specifier})=>{
  if(!specifier.startsWith('.'))return {file,specifier,status:'external_npm_or_host_alias_not_bundled'};
  const expectedPath=posix.normalize(posix.join(posix.dirname(file),specifier));
  const candidates=[expectedPath,expectedPath+'.ts',expectedPath+'.tsx',expectedPath+'/index.ts',expectedPath+'/index.tsx'];
  const bundled=candidates.find(p=>files.has(p));
  if(bundled)return {file,specifier,status:'included',expectedPath,savedPath:bundled};
  const hint=previous.find(x=>x.file===file&&x.specifier===specifier&&x.status==='saved_other_item_not_in_this_response'&&candidates.includes(x.savedPath));
  return hint?{file,specifier,status:'saved_other_item_not_in_this_response',expectedPath,savedPath:hint.savedPath}:{file,specifier,status:'unmaterialized',expectedPath};
 });
 return [...edges,...analysis.unknown];
}
export function externalRequirementsFor(analysis,declared) {
 return [...new Set([...declared,...analysis.references.filter(x=>!x.specifier.startsWith('.')).map(x=>x.specifier)])].sort();
}
export function unbundledRequirementsFor(edges,hostRequirements) {
 return [...new Set([...hostRequirements,...edges.filter(x=>x.status!=='included').map(x=>x.status==='unknown_dynamic_dependency'?`unknown ${x.syntax}: ${x.file}:${x.line}:${x.column} (${x.expression})`:x.expectedPath??x.savedPath??x.specifier)])].sort();
}
export function sameModuleEdges(a,b) {
 if(!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length)return false;
 const remaining=[...b];
 for(const edge of a){const index=remaining.findIndex(x=>isDeepStrictEqual(x,edge));if(index<0)return false;remaining.splice(index,1);}
 return true;
}
