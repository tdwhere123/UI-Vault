# Corresponding source and EPL notices

The ELK program and our mechanical source partition/identifier-alpha-renaming modifications are available under Eclipse Public License 2.0, included in LICENSE.txt. This preview does not relicense ELK as Apache or MIT.

* Exact official elkjs 0.10.2 source revision: https://github.com/kieler/elkjs/tree/f64a4813dcab63c30fe67a32470cd1c05f4f7031
* Complete official source archive: https://codeload.github.com/kieler/elkjs/tar.gz/f64a4813dcab63c30fe67a32470cd1c05f4f7031
* Exact npm distribution (includes readable elk-worker.js, minified original, API and EPL text): https://registry.npmjs.org/elkjs/-/elkjs-0.10.2.tgz
* Official build instructions in that source's README and build.gradle identify the Java/GWT source inputs and required upstream ELK checkout: https://github.com/eclipse/elk . We have not claimed to independently reproduce the Java/GWT binary output byte-for-byte.
* Our complete mechanical modification source is ELK-SOURCE-TRANSFORM.mjs, accompanied by the exact renamed identifier list and input/output hashes in SOURCE.json. It uses standard Babel parser/traverse/generator and Acorn to alpha-rename only global collisions, redirect CommonJS export capture, and partition complete statements. No algorithm is replaced, encoded or dynamically compiled.
* Our fake-worker adapter source and the exact Reaflow replacement for its transport branch appear in SOURCE.json. The raw classic elk-source-*.js files themselves are also delivered directly, not hidden in strings or binary data.

The original Java/GWT compile-input copyright headers are retained conservatively in LICENSE.txt. The following official corresponding source archives were verified HTTP200 and their hashes recorded in SOURCE.json; they are publicly obtainable under their original licenses:

- com.genmymodel.emf.gwt:emf-common:2.12.4: https://repo.maven.apache.org/maven2/com/genmymodel/emf/gwt/emf-common/2.12.4/emf-common-2.12.4-sources.jar
- com.genmymodel.emf.gwt:emf-ecore:2.12.4: https://repo.maven.apache.org/maven2/com/genmymodel/emf/gwt/emf-ecore/2.12.4/emf-ecore-2.12.4-sources.jar
- org.gwtproject:gwt-user:2.11.0: https://repo.maven.apache.org/maven2/org/gwtproject/gwt-user/2.11.0/gwt-user-2.11.0-sources.jar
- com.google.guava:guava:31.1-jre: https://repo.maven.apache.org/maven2/com/google/guava/guava/31.1-jre/guava-31.1-jre-sources.jar
- org.eclipse.xtend:org.eclipse.xtend.lib:2.36.0: https://repo.maven.apache.org/maven2/org/eclipse/xtend/org.eclipse.xtend.lib/2.36.0/org.eclipse.xtend.lib-2.36.0-sources.jar
- org.eclipse.xtext:org.eclipse.xtext.xbase.lib:2.36.0: https://repo.maven.apache.org/maven2/org/eclipse/xtext/org.eclipse.xtext.xbase.lib/2.36.0/org.eclipse.xtext.xbase.lib-2.36.0-sources.jar
