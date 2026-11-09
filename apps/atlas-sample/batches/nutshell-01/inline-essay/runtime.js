(()=>{let __dead=false;const __listeners=[],__timers=new Map(),__set=window.setTimeout.bind(window),__clear=window.clearTimeout.bind(window);let __seq=0;function __on(t,k,f){const g=(...a)=>{if(!__dead)try{f(...a)}catch(e){__fail()}};t.addEventListener(k,g);__listeners.push([t,k,g])}function setTimeout(fn,ms=0){const id=++__seq,job={fn,ms,native:0};__timers.set(id,job);if(!document.hidden)job.native=__set(()=>{__timers.delete(id);if(!__dead)try{fn()}catch(e){__fail()}},ms);return id}function __pause(){for(const j of __timers.values()){__clear(j.native);j.native=0}document.documentElement.dataset.hidden=String(document.hidden);if(!document.hidden)for(const[id,j]of __timers)j.native=__set(()=>{__timers.delete(id);if(!__dead)try{j.fn()}catch(e){__fail()}},0)}function __stop(){if(__dead)return;__dead=true;for(const j of __timers.values())__clear(j.native);__timers.clear();for(const[t,k,f]of __listeners){t.removeEventListener(k,f);if(t.tagName==='A')t.removeAttribute('href')}document.querySelectorAll('a').forEach(a=>a.removeAttribute('href'));__listeners.length=0;document.body.replaceChildren()}

function __retire(root){for(let i=__listeners.length-1;i>=0;i--){const[t,k,f]=__listeners[i];if(t instanceof Node&&root.contains(t)){t.removeEventListener(k,f);if(t.tagName==='A')t.removeAttribute('href');__listeners.splice(i,1)}}root.querySelectorAll('*').forEach(x=>x.onclick=null)}function __fail(){__stop();const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='内联文章暂时无法显示。';document.body.append(p)}
/*************************************************************************


███╗░░██╗██╗░░░██╗████████╗░██████╗██╗░░██╗███████╗██╗░░░░░██╗░░░░░
████╗░██║██║░░░██║╚══██╔══╝██╔════╝██║░░██║██╔════╝██║░░░░░██║░░░░░
██╔██╗██║██║░░░██║░░░██║░░░╚█████╗░███████║█████╗░░██║░░░░░██║░░░░░
██║╚████║██║░░░██║░░░██║░░░░╚═══██╗██╔══██║██╔══╝░░██║░░░░░██║░░░░░
██║░╚███║╚██████╔╝░░░██║░░░██████╔╝██║░░██║███████╗███████╗███████╗
╚═╝░░╚══╝░╚═════╝░░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝

v1.0.8 - "Recursive Wikipedia Rabbithole"

( NOTE TO SELF: When updating version, remember to edit... )
( this js file's "Nutshell.version", include_nutshell.js   )
( and README.md what translations finished                 )
( ACTUALLY MAKE A RELEASE ON GITHUB                        )

You know how in Memento, the amnesia guy tattoos reminders on his body?
That is how I document my code. The following "documentation"
is for future Nicky to remember what the heck they were doing.
If you find it helpful, that is a side effect.

( ascii art made with https://fsymbols.com/generators/carty/ )


=========================
=== DESIGN PRINCIPLES ===
=========================

Dead Simple:
Just put a <script> in the heading and that's it.
That's why this file even contains the CSS & others' minified libraries
(This library doesn't even have any dependencies! <3)

Decentralized:
Nutshell Sections can be re-used across websites & authors!

Backwards Compatible:
Should work with blogs & writings that *already* exist.
Uses the standard markup to find sections: <h*>, <p>, etc
And heck, why not, Wikipedia API integration.

Minimalist:
don't send me any issues or pull requests for more features
thx


===================
=== TERMINOLOGY ===
===================

Nutshell: name of this library

Nutshell Section: a piece of text/html that can be embedded elsewhere.
  (sometimes just called "Section", or, confusingly, "Nutshell".)

Expandable: a button you can click to get an "expandable explanation"
  (also called just "Button" or "link". Look, I'm not consistent.)

Bubble: the box that expands below an expandable, containing a Nutshell Section


========================================
=== WHAT NUTSHELL NEEDS TO DO (SPEC) ===
========================================

1) Convert the top page (or a given element):

  a. Turn :links into expandable buttons
    <a href="pageURL#Heading">:link text</a>
    should be converted to an expandable labeled "link text", that when clicked,
    expands a bubble with the section found inside the purified HTML.

    Ways to get a section:
    * pageURL – Get whole article
    * By heading:
        #Heading – Find heading whose text matches,
          get everything up to next heading or break.
        #Heading&cut=[integer] – Same, but skip last [cut] elements
    * By paragraph text:
        #start=[text] – Get FIRST paragraph containing that text
        #start=[text]&length=[integer] – same, w/ followup <p>
        #start=[text]&end=[text] – same, til <p> that matches end.
    * Add before & after:
        &before=[markdown]&after=[markdown] – add html like pre-req's, commentary.

  b. Give <h*> headings two reveal-on-hover buttons:
    one for permalink, one to embed that Nutshell

  c. A modal dialogue to let readers embed Nutshells

  [NEW]
  d. A "close all Nutshells" button when more than one Expandable is open.

  By default, do all this on DOMContentLoaded (no need for images loaded first)

2) When an Expandable is opened, it should...

  a. Get HTML of the source page
    If already cached, use that.
    If not,
      Get raw HTML:
        - If *this* page, easy peasy.
        - If remote page, try fetch.
          If CORS fails, use iframe & postMessage to get the HTML
        - If it's Wikipedia, use their API.
      Process it:
        - DOMPurify it: no styles, no scripts, iframes allowed but sandboxed
        - Convert all links to absolute, and open in new tab
      Cache it!

  b. Make an element to contain the Section

    Get the Section's HTML from "#Heading", &before, &after, &start, &end, etc
    Do very forgiving search: case-insensitive, don't care about punctuation.
    Convert :links inside it to Nutshell Expandables, too (yay, recursion!)

  c. Put Section element below "expandable" (after punctuation) in a Bubble:
    - bubble head: link to source (if remote), embed button
    - bubble foot: close button

*************************************************************************/

{

    // it me
    window.Nutshell = {};

    // Version! & CDN
    Nutshell.version = 'v1.0.8';
    //Nutshell.cdn = `https://cdn.jsdelivr.net/gh/ncase/nutshell@${Nutshell.version}/nutshell.js`;
    Nutshell.cdn = `https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js`;

    // What's THIS page's URL? (WITH QUERYSTRING)
    Nutshell.thisPageURL = 'https://nutshell.local.invalid/essay';


    /////////////////////////////////////////////////////////////////////
    // ⭐️ Start Nutshell!
    /////////////////////////////////////////////////////////////////////

    // By default, start Nutshell on DOMContentLoaded
    // (you may want to delay this e.g. if your blog's content is AJAX'd in)
    __on(window,'DOMContentLoaded', ()=>{
        if(Nutshell.options.startOnLoad) Nutshell.start();
    });

    // NUTSHELL START
    Nutshell.start = (el=document.body)=>{

        // Restart!
        Nutshell.htmlCache = {};
        Nutshell._nutshellsOpen = 0;

        // IF TOP PAGE: Convert this page!
        // (By default, the whole document. But you can specify element,
        // i.e. leaving out comments section)
        // IF NOT TOP PAGE:
        // I must have been created for postMessage; give parent my HTML.
        if(true){ // isolated local preview, not cross-origin transport

            // Add self's HTML to my own cached
            Nutshell.htmlCache[Nutshell.thisPageURL] = _purifyHTML(el.innerHTML, Nutshell.thisPageURL);

            // Add styles & convert page
            Nutshell.addStyles();
            Nutshell.hideHeadings(el);
            Nutshell.convertLinksToExpandables(el);
            Nutshell.convertHeadings(el);

            // Fill out other UI with localized text
            // (only set by user after Nutshell.js file included, hence this)
            Nutshell.fillCloseAllText();
            

        }else{

            // Tell my parent (from any origin) my HTML!
            _sendParentMyHTML();

        }
    };

    /////////////////////
    // Constants & Options
    /////////////////////

    const ANIM_TIME = 300; // 0.3 seconds
    const LOAD_WAIT_TIME = 6999; // 7 seconds
    const HEADER_TAGS = ['h1','h2','h3','h4','h5','h6'];

    Nutshell.options = {
        startOnLoad: false, // Start Nutshell on load? (default: true)
        lang: 'en', // Language (default: 'en', which is English)
        dontEmbedHeadings: true, // If 'true', removes the "embed this as a nutshell" option on headings
    };

    // A semantic sugar function to override options
    Nutshell.setOptions = (newOptions)=>{
        Object.keys(newOptions).forEach((key)=>{
            Nutshell.options[key] = newOptions[key];
        });
    };

    /////////////////////
    // Localizeable text
    /////////////////////

    Nutshell.language = {
        en: {

            // Button text
            closeAllNutshells: `close all nutshells`,
            learnMore: `learn more about Nutshell`,

            // Nutshell errors...
            notFoundError: `Uh oh, the page was not found! Double check the link:`,
            wikiError: `Uh oh, Wikipedia's not loading, or the link is broken. Please double check:`,
            corsError: `Uh oh, the page was found but didn't hand over its content! Check that the other site has Nutshell installed or CORS enabled:`,
            sectionIDError: `Uh oh, there's no section that matches the ID #[ID]! Watch out for typos & regional spelling differences.`,
            startTextError: `Uh oh, there's no paragraph that has the text “[start]”! Watch out for typos.`,

            // Embed modal!
            embedStep0: `You can embed this as an "expandable explanation" in your own blog/site!
                         Click to preview → [EXAMPLE]`,
            embedStep1: `Step 1) Copy this code into the [HEAD] of your site: [CODE]`,
            embedStep2: `Step 2) In your article, create a link to [LINK]
                         and make sure the link text starts with a :colon,
                         <a href="#">:like this</a>,
                         so Nutshell knows to make it expandable.`,
            embedStep3: `Step 3) That's all, folks! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        eo: {
            // Button text
            closeAllNutshells: `fermu ĉiujn nuksŝeloj`,
            learnMore: `lernu pli`,

            // Nutshell errors...
            notFoundError: `Ho ne, la paĝo ne estis trovita! Kontroli denove la ligilo:`,
            wikiError: `Ho ne, Vikipedio ne ŝargiĝas, aŭ la ligilo estas rompita. Bonvolu kontroli denove:`,
            corsError: `Ho ne, la paĝo estis trovita sed ne transdonis ĝian enhavon! Kontrolu, ke la alia retejo havas Nutshell instalita aŭ CORS ebligita:`,
            sectionIDError: `Ho ne, ne ekzistas sekcio kiu kongruas kun la ID #[ID]! Atentu tajperarojn kaj regionajn literumajn diferencojn.`,
            startTextError: `Ho ne, ne estas paragrafo kiu havas la tekston “[start]”! Atentu tajperarojn.`,

            // Embed modal!
            embedStep0: `Vi povas enmeti ĉi tion kiel "vastigebla klarigo" en via propra blogo/retejo!
                            Klaku por antaŭrigardi → [EXAMPLE]`,
            embedStep1: `Step 1) Kopiu ĉi tiun kodon en la [HEAD] de via retejo: [CODE]`,
            embedStep2: `Step 2) En via artikolo, kreu ligilon al [LINK]
                            kaj certigu, ke la ligteksto komenciĝas per :dupunkto,
                            <a href="#">:kiel tio</a>,
                            por tiu nuksoŝelo sciu certigi, ke ĝi disvastiĝas.`,
            embedStep3: `Step 3) Tio estas ĉio, homoj! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g
        },
        fr: {

            // Button text
            closeAllNutshells: `fermer toutes les Nutshells`,
            learnMore: `en savoir plus`,

            // Nutshell errors...
            notFoundError: `Oh oh, la page n'as pas été trouvée! Lien à vérifier:`,
            wikiError: `Oh oh, Wikipédia n'envoie rien, ou le lien est cassé. S'il vous plaît, vérifiez:`,
            corsError: `Oh oh, la page a été trouvée mais refuse de nous donner son contenu! Vérifiez que l'autre site a Nutshell d'installé ou CORS d'activé:`,
            sectionIDError: `Oh oh, il n'existe pas de section avec l'identifiant #[ID]! Ça pourrait venir d'une faute de frappe ou d'une orthographe d'origine différente.`,
            startTextError: `Oh oh, il n'existe pas de paragraphe contenant “[start]”! Ça pourrait venir d'une faute de frappe.`,

            // Embed modal!
            embedStep0: `Vous pouvez insérer ceci comme "explication expansible" dans votre propre blog/site!
                         Cliquez pour prévisualiser → [EXAMPLE]`,
            embedStep1: `Étape 1) Copiez ce code dans le [HEAD] de votre site: [CODE]`,
            embedStep2: `Étape 2) Dans votre article, créez un lien vers [LINK]
                         et assurez vous que le texte du lien démarre avec :deux-points,
                         <a href="#">:comme ça</a>,
                         pour que Nutshell sache que c'est expansible.`,
            embedStep3: `Étape 3) Et voila! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        nl: {

            // Button text
            closeAllNutshells: `sluit alle Nutshells`,
            learnMore: `leer meer`,

            // Nutshell errors...
            notFoundError: `Uh oh, deze pagina kon niet worden gevonden! Controleer de link nogmaals:`,
            wikiError: `Uh oh, Wikipedia kan niet worden geladen, of de link doet het niet. Controleer nogmaals:`,
            corsError: `Uh oh, de pagina was gevoden, maar wilde zijn content niet doorgeven! Controleer of de andere site Nutshell heeft geïnstalleerd of CORS heeft geactiveerd.`,
            sectionIDError: `Uh oh, er is geen sectie die overeenkomt met ID #[ID]! Let op tikfouten en alternatieve spellingen.`,
            startTextError: `Uh oh, er is geen sectie met de tekst “[start]”! Pas op voor tikfouten.`,

            // Embed modal!
            embedStep0: `Je kunt deze 'uitklapbare uitleg' embedden in je eigen blog/site!
                         Klik voor een voorbeeld → [EXAMPLE]`,
            embedStep1: `Stap 1) Kopieer deze code naar de [HEAD] van je site: [CODE]`,
            embedStep2: `Stap 2) In je artikel, maak een link naar [LINK]
                         en zorg ervoor dat de link start met een :dubbelepunt,
                         <a href="#">:zoals dit</a>,
                         zodat Nutshell weet dat deze link moet uitklappen.`,
            embedStep3: `Stap 3) Dat is alles! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        de: {

            // Button text
            closeAllNutshells: `alle Nutshells schließen`,
            learnMore: `lern mehr`,

            // Nutshell errors...
            notFoundError: `Ups, die Seite konnte nicht gefunden werden! Prüfe den Link nochmals:`,
            wikiError: `Ups, Wikipedia konnt nicht geladen werden, oder der Link ist kaputt. Bitte prüfen:`,
            corsError: `Ups, die Seite wurde gefunden, hat ihren Inhalt jedoch nicht übergeben! Stelle sicher, dass bei der anderen Site Nutshell installiert oder CORS aktiviert ist:`,
            sectionIDError: `Ups, es gibt keine Sektion passend zur ID #[ID]! Prüfe auf Schreibfehler & regionsabhängige Unterschiede der Schreibweise.`,
            startTextError: `Ups, es gibt keinen Absatz mit dem Text “[start]”! Prüfe auf Schreibfehler.`,

            // Embed modal!
            embedStep0: `Du kannst dies als eine "ausklappbare Erklärung" auf deinem eigenen Blog/deiner eigenen Site einbinden!
                         Klick für eine Vorschau → [EXAMPLE]`,
            embedStep1: `Schritt 1) Kopiere diesen Code in den [HEAD] deiner Site: [CODE]`,
            embedStep2: `Schritt 2) Erzeuge einen Link zu [LINK] in deinem Artikel
                         und stelle dabei sicher, dass der Linktext mit einem :Doppelpunkt beginnt,
                         <a href="#">:also so</a>,
                         sodass Nutshell weiß, dass er ausklappbar sein soll.`,
            embedStep3: `Schritt 3) Das wars! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        pl: {

            // Button text
            closeAllNutshells: `zamknij wszystkie nutshelle`,
            learnMore: `Ucz się więcej`,

            // Nutshell errors...
            notFoundError: `Ups, nie znaleziono strony! Sprawdź link ponownie:`,
            wikiError: `Ups, Wikipedia się nie ładuje lub link nie działa. Sprawdź ponownie:`,
            corsError: `Ups, stronę znaleziono, ale nie przekazała ona swojej treści! Sprawdź, czy tamta witryna ma zainstalowany Nutshell lub włączone CORS:`,
            sectionIDError: `Ups, żadna sekcja nie pasuje do identyfikatora #[ID]! Zwróć uwagę na literówki i lokalne różnice w pisowni.`,
            startTextError: `Ups, żaden akapit nie zawiera tekstu “[start]”! Zwróć uwagę na literówki.`,

            // Embed modal!
            embedStep0: `Możesz to umieścić jako "rozszerzalne wyjaśnienie" na swoim blogu lub stronie!
                         Kliknij, aby zobaczyć podgląd → [EXAMPLE]`,
            embedStep1: `Krok 1) Skopiuj ten kod do [HEAD] swojej strony: [CODE]`,
            embedStep2: `Krok 2) Stwórz w swoim artykule link do [LINK]
                         i upewnij się, że tekst linku rozpoczyna się :dwukropkiem,
                         <a href="#">:w ten sposób</a>,
                         żeby Nutshell wiedział, aby umożliwić jego rozszerzanie.`,
            embedStep3: `Krok 3) To by było na tyle! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
		es: {

            // Button text
            closeAllNutshells: `cerrar todos los nutshells`,
            learnMore: `aprende más`,

            // Nutshell errors...
            notFoundError: `¡Ups, no se encontró la página! Verifica el link:`,
            wikiError: `Ups, Wikipedia no está cargando, o el link está roto. Verifica:`,
            corsError: `¡Ups, la página se encontró pero esta no entregó su contenido! Verifica que la otra página tenga Nutshell instalado o CORS habilitado:`,
            sectionIDError: `¡Ups, no se ha encontrado la sección con la ID #[ID]! Verifica que no haya errores de tipeo o diferencias regionales de escritura.`,
            startTextError: `¡Ups, no hay ningún párrafo con el texto “[start]”! Verifica que no haya errores de tipeo.`,

            // Embed modal!
            embedStep0: `¡Puedes insertar esto como una “explicación expandible” en tu propio blog o página!
                         Click para previsualizar → [EXAMPLE]`,
            embedStep1: `Paso 1) Copia este código en la [HEAD] de tu sitio: [CODE]`,
            embedStep2: `Paso 2) En tu artículo, añade un link a [LINK]
                         y asegúrate de que el texto del link comience con :dos puntos,
                         <a href="#">:así</a>,
                         para que Nutshell sepa cómo expandirlo.`,
            embedStep3: `Paso 3) ¡Eso es todo, amigos! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        zh: {

            // Button text
            closeAllNutshells: `合上所有的nutshells`,
            learnMore: `学到更多`,

            // Nutshell errors...
            notFoundError: `啊 噢, 没有找到网页！请再次检查链接:`,
            wikiError: `啊 噢, 载入维基百科失败，或者说这个链接是失效了，请再次检查:`,
            corsError: `啊 噢, 网页找到了，但是它并没有交出它的内容！请检查其他站点是否已经安装了Nutshell或者允许跨域资源共享:`,
            sectionIDError: `啊 噢, 并没有段落能匹配这个ID #[ID]! 注意拼写错误 & 地区拼写差异。`,
            startTextError: `啊 噢, 并不存在包含“[start]”文本的段落！请检查拼写错误。`,

            // Embed modal!
            embedStep0: `你可以将此作为一个可展开的说明嵌入你自己的博客/站点！
                         点击右侧链接来预览 → [EXAMPLE]`,
            embedStep1: `第一步)复制这段代码至你站点的[HEAD]中: [CODE]`,
            embedStep2: `第二步)在你的文章中，创建一个链接链接至[LINK]
                         并确保链接中的文本以:冒号开头,
                         <a href="#">:就像这样</a>,
                         这样，Nutshell就知道要使其可展开。`,
            embedStep3: `第三步)就这么多，家人们! 🎉`,


            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `。.,?!)_~'"’”`, // added chinese period
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[。.?!]\s/g // added chinese period

        },
        he: {
            // Button text
            closeAllNutshells: `סגור את כל האגוזים`,
            learnMore: `עוד אודות קליפת האגוז`,

            // Nutshell errors...
            notFoundError: `:אוי לא, הדף לא נמצא! בדקו שוב את הקישור`,
            wikiError: `:אוי לא, ויקיפדיה לא טוען, או שהלינק לא תקין. בבקשה בדקו שוב`,
            corsError: `:מופעל CORS מותקן או nutshell אוי לא, העמוד נמצא אך לא איפשר גישה לתוכן! בדקו אם לאתר יש `,
            sectionIDError: `.בדקו שגיאות כתיב והבדלי איות אזוריים ! #[ID] IDאוי לא, אין סעיף אשר תואם את ה`,
            startTextError: `.הזהרו משגיאות כתיב !“[start]” אוי לא, אין פסקה עם הטקסט`,

            // Embed modal!
            embedStep0: `!אתם יכול להטמיע זאת כ"הסבר הניתן להרחבה" בבלוג/אתר שלכם
                         [EXAMPLE] ← לחצו לתצוגה מוקדמת`,
            embedStep1: `[CODE] :של האתר שלכם [HEAD]צעד 1) העתיקו את הקוד הזה לתוך ה`,
            embedStep2: `[LINK]צעד 2) במאמר שלכם, תיצרו קישור ל
                         ודאגו שהטקסט של הלינק מתחיל עם :נקודותיים,
                         <a href="#">:ככה</a>
                         .ידע לעשות אותו ניתן להרחבה Nutshellכך ש`,
            embedStep3: `🎉 !צעד 3) זה הכל, חברים`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g
        },
        tr: {

            // Button text
            closeAllNutshells: `tüm Nutshell'leri kapat`,
            learnMore: `Nutshell hakkında daha fazla şey öğren`,

            // Nutshell errors...
            notFoundError: `Ah, sayfa bulunamadı! Linki tekrar kontrol edin:`,
            wikiError: `Ah, Wikipedia yüklenmiyor veya link bozuk. Lütfen tekrar kontrol edin:`,
            corsError: `Ah, sayfa bulundu ama içeriği görüntüleyemiyoruz! Diğer sitede de Nutshell'in kurulu veya CORS'un etkin olduğundan emin olunuz:`,
            sectionIDError: `Ah, #[ID] kimliğiyle eşleşen bir bölüm yok! Yazım hatalarına ve bölgesel yazım farklılıklarına dikkat edin.`,
            startTextError: `Ah, “[start]” metnine sahip bir paragraf yok! Yazım hatalarına dikkat edin.`,

            // Embed modal!
            embedStep0: `Bunu kendi web günlüğünüze/sitenize "genişletilebilir bir açıklama" olarak yerleştirebilirsiniz!
                         Önizlemek için tıklayın → [EXAMPLE]`,
            embedStep1: `Adım 1) Bu kodu sitenizin [HEAD] bölümüne kopyalayın: [CODE]`,
            embedStep2: `Adım 2) İçeriğinizde [LINK] için bir bağlantı oluşturun
                         ve bağlantı metninin :iki nokta ile başladığından emin olun
                         <a href="#">:bu şekilde</a>,
                         böylece Nutshell onu genişletmesi gerektiğini anlar.`,
            embedStep3: `Adım 3) İşte, hepsi bu kadar! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        ko: {

            // Button text
            closeAllNutshells: `껍질 모두 닫기`,
            learnMore: `껍질에 대해 더 배우기`,

            // Nutshell errors...
            notFoundError: `이런, 페이지를 찾지 못했어요! 주소를 다시 확인하세요:`,
            wikiError: `이런, 위키피디아가 로딩이 안 되거나 주소가 망가졌어요. 다시 확인해 주세요:`,
            corsError: `이런, 페이지를 찾았지만 내용물을 주지 않았어요! 그 다른 사이트가 껍질이 설치되었거나 CORS가 작동됐는지 확인하세요:`,
            sectionIDError: `이런, ID #[ID]에 맞는 부분이 없어요! 오타나 지역적인 철자의 차이를 주의하세요.`,
            startTextError: `이런, “[start]”라는 글이 있는 단락이 없어요! 오타를 주의하세요.`,

            // Embed modal!
            embedStep0: `이것을 당신의 블로그/사이트에 "펼칠 수 있는 설명"으로 첨부할 수 있어요!
                         눌러서 미리보기 → [EXAMPLE]`,
            embedStep1: `1) 이 코드를 당신의 사이트의 [HEAD]에 복사하세요: [CODE]`,
            embedStep2: `2) 당신의 글에 [LINK]로 가는 링크를 넣으세요
                         그리고 링크가 반드시 :쌍점으로 시작하게 하세요,
                         <a href="#">:이렇게</a>,
                         그래야지 프로그램이 이걸 펼칠 수 있게 만들어야 하는 걸 압니다.`,
            embedStep3: `3) 그게 다에요! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        hi: {

            // Button text
            closeAllNutshells: `सारे नटशेल्स बंद करे`,
            learnMore: `नटशेल के विषय में और जाने`,

            // Nutshell errors...
            notFoundError: `उह ओह, खोजा हुआ पेज नहीं मिला! लिंक को दोबारा जांचें:`,
            wikiError: `उह ओह, विकिपीडिया लोड नहीं हो रहा है, या लिंक टूटा हुआ है। कृपया लिंक की दोबारा जांच करें:`,
            corsError: `उह ओह, पेज  मिल गया लेकिन उससे  कंटेंट  नहीं मिल पाया हैः ! जांचें कि दूसरी साइट में नटशेल इन्सटाल्ड है या  CORS चालू है? :`,
            sectionIDError: `उह ओह, ऐसा कोई खंड नहीं है जो ID #[ID]! से मेल खाता हो! टाइपो और क्षेत्रीय स्पेलिंग अंतरों के लिए देखें।`,
            startTextError: `उह ओह, ऐसा कोई पैराग्राफ  नहीं है जिसमें टेक्स्ट "[start]" हो! टाइपिंग मिस्टेक की जांच करे ।`,

            // Embed modal!
            embedStep0: `आप इसे अपने स्वयं के ब्लॉग/साइट में "एक्सपेंडबल एक्सप्लनेशन (विस्तार योग्य स्पष्टीकरण)" के रूप में एम्बेड कर सकते हैं!
                         प्रीव्यू के लिए क्लिक करें → [EXAMPLE]`,
            embedStep1: `स्टेप  1) इस कोड को अपनी साइट के [HEAD] में कॉपी करें: [CODE]`,
            embedStep2: `स्टेप  2) अपने आर्टिकल  में, [LINK] के लिए एक लिंक बनाएँ
                         और सुनिश्चित करें कि लिंक टेक्स्ट एक :colon से शुरू होता है,
                         <a href="#">:इस तरह</a>,
                         तो नटशेल में इसे एक्सपेंडेनब्ल (विस्तार योग्य) बनाना जानता है।`,
            embedStep3: `स्टेप  3) बस इतना करके आप नटशेल यूज़ कर पाएंगे ! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `।.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[।?,.]\s/g

        },
        ru: {

            // Button text
            closeAllNutshells: `закрыть все пояснения`,
            learnMore: `узнать больше про Nutshell`,

            // Nutshell errors...
            notFoundError: `О нет, страница не найдена! Перепроверьте, что ссылка правильная:`,
            wikiError: `О нет, Википедия не загружается, или ссылка битая. Пожалуйста, перепроверьте её:`,
            corsError: `О нет, страница найдена, но не отдаёт содержимое! Проверьте, что на другом сайте установлен Nutshell или включён CORS:`,
            sectionIDError: `О нет, раздела с идентификатором #[ID] не существует! Проверьте, что вы не опечатались и учли все орфографические особенности.`,
            startTextError: `О нет, абзаца с текстом «[start]» не существует! Проверьте, что вы не опечатались.`,

            // Embed modal!
            embedStep0: `Вы можете встроить это «разворачиваемое пояснение» в свой собственный блог или сайт!
                         Нажмите для предпросмотра → [EXAMPLE]`,
            embedStep1: `Шаг 1) Скопируйте этот код в элемент [HEAD] на вашем сайте: [CODE]`,
            embedStep2: `Шаг 2) На нужной странице сделайте ссылку на [LINK]
                         и убедитесь, что текст ссылки начинается с :двоеточия,
                         <a href="#">:вот так</a>,
                         чтобы Nutshell знал, что её можно развернуть.`,
            embedStep3: `Шаг 3) Вот и всё! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”»`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g

        },
        vi: {

            // Button text
            closeAllNutshells: `đóng tất cả các nutshell`,
            learnMore: `tìm hiểu thêm về Nutshell`,

            // Nutshell errors...
            notFoundError: `Ôi không, không thể tìm thấy trang! Kiểm tra lại link:`,
            wikiError: `Ôi không, có thể Wikipedia bị hư, hoặc trang không tồn tại. Kiểm tra lại link:`,
            corsError: `Ôi không, trang tồn tại nhưng không cho phép truy cập! Kiểm tra trang đã tải Nutshell hay bật CORS chưa:`,
            sectionIDError: `Ôi không, không có phần nào được gán ID #[ID]! Kiểm tra lỗi chính tả.`,
            startTextError: `Ôi không, không có đoạn nào có câu “[start]”! Kiểm tra lỗi chính tả.`,

            // Embed modal!
            embedStep0: `Bạn có thể nhúng phần này như là phần "giải thích mở rộng" trên website của bạn!
                         Click để xem thử → [EXAMPLE]`,
            embedStep1: `Step 1) Copy code này vào phần [HEAD] trong website của bạn: [CODE]`,
            embedStep2: `Step 2) Trong bài viết của bạn, tạo đường link tới [LINK]
                         và luôn luôn đặt dấu :hai chấm phía trước đường link,
                         <a href="#">:như thế này</a>,
                         để Nutshell biết mở rộng phần này.`,
            embedStep3: `Step 3) Xong rồi đấy! 🎉`,

            // What punctuation (in this language) should we KEEP after an expandable opens?
            keepPunctuation: `.,?!)_~'"’”`,
            // What punctuation (in this language) signifies the END of a sentence? Note, this is a regex.
            endPunctuation: /[.?!]\s/g
		},
    };

    Nutshell.getLocalizedText = (textID)=>{
        let currentLanguage = Nutshell.options.lang,
            dictionary = Nutshell.language[currentLanguage];
        return dictionary[textID];
    }




    /////////////////////////////////////////////////////////////////////
    // ⭐️ Convert links to Expandable buttons
    /////////////////////////////////////////////////////////////////////

    Nutshell.convertLinksToExpandables = (dom, forThisElement)=>{

        // Get an array of all links, filtered by if the text starts with a :colon
        let expandables = [...dom.querySelectorAll('a')].filter(
            link => (link.innerText.trim().indexOf(':')==0)
        );

        // Turn each one into an Expandable!
        expandables.forEach((ex)=>{

            // Style: closed Expandable
            ex.classList.add('nutshell-expandable');
            ex.setAttribute("mode", "closed");

            // Remove colon, replace with animated balls
            let linkText = document.createElement('span');
			// XSS vulnerability if without DOMPurify! (see https://github.com/ncase/nutshell/issues/32)
			// Not using .innerText so that latex in links still works!
            linkText.innerHTML = DOMPurify.sanitize(ex.innerText.slice(ex.innerText.indexOf(':')+1));
            linkText.className = 'nutshell-expandable-text';
            let ballUp = document.createElement('span');
            ballUp.className = 'nutshell-ball-up';
            let ballDown = document.createElement('span');
            ballDown.className = 'nutshell-ball-down';
            ex.innerHTML = '';
            ex.appendChild(linkText);
            ex.appendChild(ballUp);
            ex.appendChild(ballDown);

            // BALLS ARE SAME AS FONT COLOR
            let linkStyle = window.getComputedStyle(forThisElement ? forThisElement : ex);
            ballUp.style.background = linkStyle.color;
            ballDown.style.background = linkStyle.color;

            // Save the punctuation!
            // Extremely inefficient: plop each character one-by-one into the span
            let punctuation = document.createElement('span');
            if(ex.nextSibling && ex.nextSibling.nodeValue){
                let nextChar;
                // get next char, is it punctuation?
                let keepPunctuation = Nutshell.getLocalizedText('keepPunctuation');
                while( keepPunctuation.indexOf(nextChar=ex.nextSibling.nodeValue[0]) >= 0 ){
                    ex.nextSibling.nodeValue = ex.nextSibling.nodeValue.slice(1); // slice off the rest
                    punctuation.innerHTML += nextChar; // slap it on
                }
            }
            ex.parentNode.insertBefore(punctuation, ex.nextSibling); // add right after expandable

            // Follow up by repeating last sentence, UNLESS IT'S THE START/END OF PARAGRAPH ALREADY.
            let hasWordsAfterExpandable = punctuation.nextSibling
                                          && punctuation.nextSibling.nodeValue
                                          && punctuation.nextSibling.nodeValue.trim().length>1;
            let followupSpan = document.createElement('span');
            followupSpan.style.display = 'none';
            followupSpan.className = 'nutshell-followup';
            ex.parentNode.insertBefore(followupSpan, punctuation.nextSibling); // add right after punctuation

            // Short or long followup TEXT?
            let shortFollowupHTML = '...', // just dots
                longFollowupHTML = '';
            if(hasWordsAfterExpandable){

                // Get last sentence...
                let htmlBeforeThisLink = ex.parentNode.innerHTML.split( ex.outerHTML )[0]; // everything BEFORE this html
                // Convert to raw text
                let tmpSpan = document.createElement('span');
                    tmpSpan.innerHTML = htmlBeforeThisLink;
                // Get immediately previous sentence
                let textBeforeThinkLink = tmpSpan.innerText,
                    sentencesBeforeThisLink = textBeforeThinkLink.split(Nutshell.getLocalizedText('endPunctuation')),
                    lastSentenceHTML = sentencesBeforeThisLink[sentencesBeforeThisLink.length-1];

                // Follow up with prev sentence, then expandable text in bold, then punctuation
                longFollowupHTML = lastSentenceHTML + '<b>' + ex.innerHTML + '</b>' + punctuation.innerHTML;

            }
            // Method needs to be publicly accessible, I guess
            ex.updateFollowupText = ()=>{
                if(!bubble || !hasWordsAfterExpandable){
                    // if closed (or no words after), hide followup span
                    followupSpan.style.display = 'none';
                }else{
                    // if open, show only if bubble's textContent is above 50 words
                    let longEnough = (bubble.textContent.trim().split(" ").length>=50);
                    followupSpan.style.display = 'inline';
                    followupSpan.innerHTML = longEnough ? longFollowupHTML : shortFollowupHTML;
                }
            };

            // OPEN & CLOSE THAT BUBBLE.
            let bubble = null;
            ex.isOpen = false;
            ex.open = (mouseEvent)=>{
                if(__dead || ex.isOpen || !ex.isConnected)return;

                // Hi
                ex.isOpen = true;

                // Insert a bubble
                //debugger;
                let clickX = mouseEvent.clientX - ex.parentNode.getBoundingClientRect().x; // relative to parent, I guess???
                bubble = Nutshell.createBubble(ex, clickX);
                ex.parentNode.insertBefore(bubble, punctuation.nextSibling); // place the bubble AFTER PUNCTUATION
                ex.setAttribute("mode", "open");
                ex.updateFollowupText();

                // One more
                Nutshell._nutshellsOpen++;
                Nutshell._updateCloseAllNutshells();
            };
            ex.close = ()=>{
                if(__dead || !ex.isOpen)return;

                // Bye
                ex.isOpen = false;

                // Close that bubble
                bubble.close(); // handles its own UI
                bubble = null;
                ex.setAttribute("mode", "closed");
                setTimeout(ex.updateFollowupText, ANIM_TIME);

                // One less
                Nutshell._nutshellsOpen--;
                Nutshell._updateCloseAllNutshells();

            };
            // ON CLICK: toggle open/closed
            __on(ex,'click',(e)=>{
                // Don't actually go to that link.
                e.preventDefault();
                // Toggle create/close
                if(!ex.isOpen) ex.open(e); // Is closed, make OPEN
                else ex.close(e); // Is open, make CLOSED
            });

        });
    };

    /////////////////////////////////////////////////////////////////////
    // ⭐️ CLOSE ALL NUTSHELLS
    /////////////////////////////////////////////////////////////////////

    // Keep count
    Nutshell._nutshellsOpen = 0;

    // Close 'em all
    Nutshell.closeAllNutshells = ()=>{
        if(__dead)return;

        // Close only the top level ones...
        let allExpandables = [...document.querySelectorAll('.nutshell-expandable')],
            nestedExpandables = [...document.querySelectorAll('.nutshell-expandable .nutshell-expandable')];
            onlyOpenTops = allExpandables.filter( (ex)=>{
                return ex.isOpen && !nestedExpandables.includes(ex);
            });

        // Close all open tops
        onlyOpenTops.forEach((ex)=>{ex.close()});

        // And after some time, reset the "close all nutshells" count & button
        setTimeout(()=>{
            Nutshell._nutshellsOpen = [...document.querySelectorAll('.nutshell-expandable')].filter(x=>x.isOpen).length;
            Nutshell._updateCloseAllNutshells();
        },ANIM_TIME+100);

    };

    // MAKE UI: Floating in top right
    Nutshell.closeAllButton = document.createElement('div');
    let _ca = Nutshell.closeAllButton;
    _ca.id = "nutshell-close-all";
    _ca.setAttribute('show', 'no');
    _ca.onclick = Nutshell.closeAllNutshells;

    // When Nutshell starts, populate with text localization
    Nutshell.fillCloseAllText = ()=>{
        _ca.innerText = Nutshell.getLocalizedText('closeAllNutshells');
        document.body.appendChild(_ca);
    };

    // If 2 or more, show it, else hide it.
    Nutshell._updateCloseAllNutshells = ()=>{
        if(Nutshell._nutshellsOpen>=2){

            // Show it if hidden
            if(_ca.getAttribute('show')=='no'){
                _ca.style.display = 'block';
                setTimeout(()=>{
                    _ca.setAttribute('show', 'yes');
                },1);
            }

        }else{

            // Hide it if shown
            if(_ca.getAttribute('show')=='yes'){
                _ca.setAttribute('show', 'no');
                setTimeout(()=>{
                    _ca.style.display = 'none';
                },1000);
            }

        }
    };


    /////////////////////////////////////////////////////////////////////
    // ⭐️ Get purified HTML, given a source URL.
    /////////////////////////////////////////////////////////////////////

    // Not very picky about what's in the cache
    // Could be just <p>'s, or the entire <body> with nav & comments
    Nutshell.htmlCache = {};

    // Promise PROCESSED html!
    // From a URL, try cache, remote, wikipedia...
    // Then DOMPurify it.
    Nutshell.promisePurifiedHTMLFromURL = (url)=>{
      if(__dead)return Promise.reject('Preview closed');
      const base=url.split('#')[0];
      return base===Nutshell.thisPageURL && Nutshell.htmlCache[base]
        ? Promise.resolve(Nutshell.htmlCache[base])
        : Promise.reject('This offline preview contains only local article sections.');
    };

    // PURIFY. (& make src's absolute)
    let _purifyHTML = (rawHTML, baseURL)=>{

        // DOMPurify: no styles, no scripts, iframes allowed (but sandboxed later)
        let cleanHTML = DOMPurify.sanitize(rawHTML,{
            FORBID_ATTR: ['style','id','class'],
            FORBID_TAGS: ['style'],
            ADD_TAGS: ['iframe','audio','video']
        });

        // A <span> for further editing the clean HTML.
        let cleanSpan = document.createElement('div');
        cleanSpan.innerHTML = cleanHTML;

        // Sandbox all iframes
        [...cleanSpan.querySelectorAll('iframe')].forEach(iframe=>{
            iframe.setAttribute('sandbox','allow-scripts');
        });

        // Image src's + link href's to absolute
        _convertRelativeToAbsoluteLinks("iframe", "src", baseURL, cleanSpan);
        _convertRelativeToAbsoluteLinks("img", "src", baseURL, cleanSpan);
        _convertRelativeToAbsoluteLinks("a", "href", baseURL, cleanSpan);

        // Make all links open in new tab, don't ruin reading flow.
        [...cleanSpan.querySelectorAll('a')].forEach((a)=>{
            a.target = "_blank";
        });

        // Gimme
        return cleanSpan.innerHTML;

    };

    // Is it Wikipedia?
    let _isWikipedia = (url)=>{
        return url.indexOf('wikipedia.org')>=0;
    };

    // Is it YouTube?
    let _isYouTube = (url)=>{
        if(url.indexOf('youtu.be')>=0) return true;
        if(url.indexOf('youtube.com')>=0) return true;
        return false;
    };

    // Convert key-values to key1=value1&key2=value2 etc. Also encode URI
    let _objectToURLParams = (obj)=>{
        return Object.keys(obj)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
            .join("&");
    };

    // Convert all links in a element to absolute links
    let _convertRelativeToAbsoluteLinks = (tag, attr, baseURL, el)=>{
        [...el.querySelectorAll(tag)].forEach((el)=>{
            let relative = el.getAttribute(attr),
                absolute = new URL(relative,baseURL).href;
            el[attr] = absolute;
        });
    };

    // Ma, here's my HTML!
    let _sendParentMyHTML = ()=>{};

    /////////////////////////////////////////////////////////////////////
    // ⭐️ Get a Section from purified HTML & put in container
    /////////////////////////////////////////////////////////////////////

    // Promise!
    Nutshell.promiseSectionContainer = (expandable)=>{

        // A promise...
        return new Promise((resolve,reject)=>{

            // Get expandable's url & queryString
            let href = expandable.href,
                splitHref = href.split("#"),
                url = expandable.href,
                queryString = splitHref[1];

            // The container for the Section... get it, boiiiiii.
            let container = document.createElement('div'),
                containerHTML = '';

            // After getting the purified HTML, find section,
            // then put it in a container, and resolve with that.
            Nutshell.promisePurifiedHTMLFromURL(url).then((purifiedHTML)=>{

                if(_isWikipedia(url) || _isYouTube(url)){
                    // If it's Wikipedia or YouTube, just give it, it's already ready!
                    containerHTML = purifiedHTML;
                }else{

                    // Otherwise, gotta EXTRACT out the section from the HTML...

                    /***
                    Ways to get a section:
                    * pageURL – Get whole article
                    * By heading:
                        #Heading – Find heading whose text matches,
                          get everything up to next heading or break.
                        #Heading&cut=[integer] – Same, but skip last [cut] elements
                    * By paragraph text:
                        #start=[text] – Get FIRST paragraph containing that text
                        #start=[text]&length=[integer] – same, w/ followup <p>
                        #start=[text]&end=[text] – same, til <p> that matches end.
                    * Add before & after:
                        &before=[markdown]&after=[markdown] – add html like pre-req's, commentary.
                    ***/

                    // An element to safely search
                    let safeEl = document.createElement('div');
                    safeEl.innerHTML = purifiedHTML;

                    // IF NO SECTION ID, give entire article
                    if(!queryString || queryString.trim()==''){
                        // Hidden sections should still be hidden
                        Nutshell.hideHeadings(safeEl);
                        // Folded sections need to convert relative links to absolute
                        _convertRelativeToAbsoluteLinks("a", "href", url, safeEl);
                        // Article is assumed to be the container of the first <p>
                        let assumedArticle = safeEl.querySelector('p').parentNode;
                        resolve(assumedArticle);
                        return;
                    }

                    // Break up query string...
                    let queryStringBroken = queryString.split('&');
                    let queryKeys = {};
                    queryStringBroken.forEach((term)=>{
                        if(term.indexOf("=")>0){
                            let keyvalue = term.split("="),
                                key = keyvalue[0],
                                value = keyvalue[1];
                            queryKeys[key] = value;
                        }
                    });

                    // If the first term has no "=", then we're searching by heading.
                    // Otherwise, we're searching by text in paragraphs.
                    let isSearchingByHeading = (queryStringBroken[0].indexOf("=")<0);

                    //////////////////////////
                    // SEARCH BY HEADER...
                    //////////////////////////

                    if(isSearchingByHeading){

                        let sectionID = queryStringBroken[0];

                        // Forgiving-search the <headings> for #Heading
                        let foundHeading = null;
                        for(let i=0; i<HEADER_TAGS.length; i++){
                            let tag = HEADER_TAGS[i],
                                headings = [...safeEl.querySelectorAll(tag)];
                            // ...and for each heading of that <h*> tag...
                            for(let j=0; j<headings.length; j++){
                                let heading = headings[j];
                                // Do _forgivingMatchTest, return THE FIRST ONE THAT WORKS, BREAK.
                                if(_forgivingMatchTest(heading.innerText, sectionID)){
                                    foundHeading = heading;
                                }
                                if(foundHeading) break;
                            }
                            if(foundHeading) break;
                        }

                        // If after all that, STILL none, tell user the error.
                        if(!foundHeading){
                            containerHTML = `<p>${Nutshell.getLocalizedText("sectionIDError").replace('[ID]',sectionID)}</p>`;
                        }else{

                            // Now get everything from the start of the section (right after heading)
                            // to end of section (next heading, <hr>, or end-of-post)

                            // HTMLs to add (making an array so can cut in retrospect)
                            let htmlsToAdd = [];

                            // Iterate node by node...
                            let currentNode = foundHeading,
                                foundEndOfSection = false;
                            while(!foundEndOfSection){
                                // Do I even have a next sibling?
                                currentNode = currentNode.nextSibling; // not .nextElementSibling in case writer forgot to put stuff in <p>???
                                if(currentNode){

                                    // If yes, what's its tag?
                                    if(currentNode.tagName){
                                        // If it's a heading or <hr>, FOUND END.
                                        let currentTag = currentNode.tagName.toLowerCase();
                                        if(HEADER_TAGS.indexOf(currentTag)>=0 || currentTag=='hr'){
                                            foundEndOfSection = true;
                                        }else{
                                            // If not, add it & move on.
                                            htmlsToAdd.push(currentNode.outerHTML);
                                        }
                                    }else{
                                        let content = currentNode.textContent.trim();
                                        if(content.length>0){ // convert to <p> then add
                                            htmlsToAdd.push("<p>"+content+"</p>");
                                        }
                                    }
                                }else{
                                    // ...If no next sibling, FOUND END.
                                    foundEndOfSection = true;
                                }
                            }

                            // Add 'em all!
                            let cut = queryKeys.cut ? parseInt(queryKeys.cut) : 0;
                            for(let i=0;i<htmlsToAdd.length - cut;i++){
                                containerHTML += htmlsToAdd[i];
                            }

                        }

                    }else{

                        /////////////////////////////////
                        // OTHERWISE, SEARCH BY TEXT...
                        /////////////////////////////////

                        // START?
                        if(queryKeys.start){

                            let startText = decodeURIComponent(queryKeys.start);

                            // Forgiving-search the <p> for "start"
                            let found = null;
                            let paragraphs = [...safeEl.querySelectorAll('p')];
                            for(let i=0; i<paragraphs.length; i++){
                                let p = paragraphs[i];
                                if(_forgivingMatchTest(p.innerText, startText)){
                                    found = p;
                                }
                                if(found) break;
                            }

                            // If after all that, STILL none, tell user the error.
                            if(!found){
                                containerHTML = `<p>${Nutshell.getLocalizedText("startTextError").replace('[start]',startText)}</p>`;
                            }else{

                                // Add the found paragraph.
                                containerHTML += found.outerHTML;

                                // If there's a "length" key, add that many extra siblings
                                // (or until end of section
                                if(queryKeys.length || queryKeys.end){

                                    // Countdown and/or END TEXT
                                    let elementsLeft = queryKeys.length ? parseInt(queryKeys.length)-1 : Infinity;
                                    let endText = decodeURIComponent(queryKeys.end);

                                    // Find the end of section, or countdown, or ending paragraph.
                                    let currentNode = found,
                                        foundEndOfSection = false;
                                    while(!foundEndOfSection && elementsLeft>0){

                                        // Next
                                        currentNode = currentNode.nextSibling; // not .nextElementSibling in case writer forgot to put stuff in <p>???

                                        // Do I even have a next sibling?
                                        if(currentNode){

                                            // Convert to a paragraph if it was accidentally not in <p>
                                            let content;
                                            if(!currentNode.tagName){
                                                content = currentNode.textContent;
                                                if(content.trim().length==0){
                                                    continue; // nevermind
                                                }else{
                                                    content = "<p>"+content+"</p>";
                                                }
                                            }else{
                                                content = currentNode.outerHTML;
                                            }

                                            // If this paragraph matches, it's THE END!
                                            if(_forgivingMatchTest(content, endText)){
                                                foundEndOfSection = true;
                                            }

                                            // Add it to the container & move on.
                                            containerHTML += currentNode.outerHTML;
                                            elementsLeft--;

                                        }else{
                                            // ...If no next sibling, FOUND END.
                                            foundEndOfSection = true;
                                        }

                                    }
                                }

                            }

                        }

                    }

                    // ADD BEFORE & AFTER
                    if(queryKeys.before){
                        containerHTML = _decodeParsePurifyItalics(queryKeys.before) + containerHTML;
                    }
                    if(queryKeys.after){
                        containerHTML = containerHTML + _decodeParsePurifyItalics(queryKeys.after);
                    }


                }

                // Now deliver the promised container, containing the section!
                container.innerHTML = _addSource(url) + containerHTML;
                resolve(container);

            }).catch((message)=>{

                // IF SOMETHING ALONG THIS ENTIRE PROCESS WENT WRONG, TELL USER.
                container.innerHTML = message;
                resolve(container);

            });

        });

    };

    // Decode, Parse, Purify, Italics
    let _decodeParsePurifyItalics = ()=>{throw Error('Markdown before/after annotations are not enabled in this local scene');};

    // Add "from" source paragraph, if source is not THIS page
    let _addSource = (url)=>{
        if(url.split('#')[0] == Nutshell.thisPageURL){
            return ''; // nah.
        }else{
            let urlSansProtocol = url.split("://")[1];
            return `<p class='nutshell-bubble-from'> from <a target='_blank' href='${url}'>${urlSansProtocol}</a></p>`
        }
    }

    // Do a forgiving match between two strings: src, test
    // Capitalization & punctuation insensitive + src at least CONTAINS test
    let _forgivingMatchTest = (src, test)=>{

        // Lowercase & strip everything but letters & numbers
        src = src.toLowerCase().replace(/[^a-z0-9]/g,'');
        test = test.toLowerCase().replace(/[^a-z0-9]/g,'');

        // Src at least CONTAINS test?
        let srcContainsTest = (src.indexOf(test)>=0);
        return srcContainsTest;

    };



    /////////////////////////////////////////////////////////////////////
    // ⭐️ Create & return bubble, using an expandable's data
    /////////////////////////////////////////////////////////////////////

    Nutshell.createBubble = (expandable, clickX)=>{

        /**************************

        BUBBLE ELEMENT & ANIMATION STRUCTURE

        Bubble:
        - Arrow (sticks out of bubble)
        - Overflow container
          - Embed button, reveal on hover
          - Section (left & right padded)
            - "from URL..."
            - Recursive bubbles (sticks out of padding)
          - Close button

        Animation:
          Opening:
            - calculate Section height
            - animate Overflow's height from 0px to (section height + head/foot)px
            - then make Overflow's height auto again (so can stretch when recursive bubbles appear)
          Closing:
            - animate Overflow's height going to 0
            - then delete bubble element

        **************************/

        // Make a bubble container!
        let bubble = document.createElement('div');
        bubble.className = 'nutshell-bubble';
        // Subtly move down
        bubble.style.top = '-5px';
        setTimeout(()=>{ bubble.style.top = '0px'; },1);
        // RESET FONT STYLE to that of first parent node. Or document.body.
        let p = expandable.parentNode || document.body;
        let parentNodeStyle = window.getComputedStyle(p);
        bubble.style.color = parentNodeStyle.color;
        bubble.style.fontSize = parentNodeStyle.fontSize;
        bubble.style.fontStyle = parentNodeStyle.fontStyle;
        bubble.style.fontWeight = parentNodeStyle.fontWeight;
        bubble.style.lineHeight = parentNodeStyle.lineHeight;
        bubble.style.textDecoration = parentNodeStyle.textDecoration;

        // A speech-bubble arrow, positioned at X of *where you clicked*???
        let arrow = document.createElement("div");
        arrow.className = "nutshell-bubble-arrow";
        bubble.appendChild(arrow);

        // ARROW & BUBBLE COLOR. Background is background, Border is font color...
        bubble.style.borderColor = parentNodeStyle.color;
        arrow.style.borderBottomColor = parentNodeStyle.color;
        // HACK... keep bubbling up until you get a parent with a non-transparent BG color
        let bgColor = parentNodeStyle.backgroundColor,
            tryThisElementNext = p.parentNode;
            failsafe = 10;
        while(bgColor=='rgba(0, 0, 0, 0)' && tryThisElementNext && tryThisElementNext.tagName && failsafe-->0){
            bgColor = window.getComputedStyle(tryThisElementNext).backgroundColor;
            tryThisElementNext = tryThisElementNext.parentNode;
        }
        if(bgColor=='rgba(0, 0, 0, 0)'){
            bgColor = '#fff'; // worst case, default to white.
        }
        arrow.style.setProperty('--arrow-background', bgColor);
        bubble.style.background = bgColor;

        // Position the arrow, starting at 20px left of the click...
        // SO HACKY.
        {
            // (since 22px is half the arrow's width, plus border)
            let arrowX = clickX - 22;

            // What's width of the paragraph the expandable is in?
            let p = _findFirstParentWithFilter(expandable,(p)=>{
                return p.tagName=="P";
            });
            p = p ? p : document.body; // oh whatever, by default.
            let paragraphWidth = p.getBoundingClientRect().width;

            // What's the width of the container the expandable is in?
            let cont = _findFirstParentWithFilter(p,(cont)=>{
                return cont.className=='nutshell-bubble-overflow-section';
            });
            if(cont){
                let sectionWidth = cont.getBoundingClientRect().width,
                    padding = (sectionWidth-paragraphWidth)/2;
                arrowX += padding-3; // iunno, border & padding
            }

            // Don't let the arrow go past bubble's rounded corners (33px)
            if(arrowX < 33) arrowX = 33; // left
            if(arrowX > paragraphWidth-33) arrowX = paragraphWidth-33; // right

            // Finally, place that arrow.
            arrow.style.left = arrowX+"px";
        }

        // The Overflow container
        let overflow = document.createElement('div');
        overflow.className = 'nutshell-bubble-overflow';
        overflow.setAttribute("mode","opening");
        overflow.style.height = "0px"; // start closed
        bubble.appendChild(overflow);

        // Section
        let section = document.createElement('div');
        section.className = "nutshell-bubble-overflow-section";
        overflow.appendChild(section);

        // Close Button
        let close = document.createElement('button');
        close.className = 'nutshell-bubble-overflow-close';
        close.innerHTML = '&times;';
        close.ariaLabel = "Close";
        close.onclick = ()=>{
            if(__dead || !expandable.isConnected)return;

            // Close my parent, which'll also close me
            expandable.close();

            // Then scroll to that parent expandable *if it's offscreen*
            let parentTop = expandable.getBoundingClientRect().top;
            if(parentTop<0){
                window.scrollTo({
                    top: parentTop + window.pageYOffset,
                    behavior: 'smooth'
                });
            }

        };
        overflow.appendChild(close);

        /////////////////////////
        // OPENING //////////////
        /////////////////////////

        // For "..." loading anim
        let _isSectionLoadedYet = false;

        // Get the section (using expandable's data),
        // and put it in bubble's Section Container when it loads!
        Nutshell.promiseSectionContainer(expandable).then((content)=>{
            if(__dead || !bubble.isConnected || !expandable.isOpen)return;

            // Links to Nutshell Expandables (yay recursion!)
            Nutshell.convertLinksToExpandables(content, expandable);

            // Put in section's content
            section.innerHTML = '';
            section.appendChild(content);

            // And animate expand for new content! Go to full height, then auto.
            overflow.style.height = section.getBoundingClientRect().height+"px";
            setTimeout(()=>{ overflow.style.height="auto"; }, ANIM_TIME);

            // Update followup text
            expandable.updateFollowupText();

            // Yes.
            _isSectionLoadedYet = true;

        }).catch(()=>{ if(!__dead)__fail(); });

        // While waiting to load, show "..." anim
        setTimeout(()=>{
            if(!_isSectionLoadedYet){

                // Dots: add a dot per second...
                let dots = document.createElement("p");
                dots.innerHTML = '...'; // start with 3.
                // Doing recursive setTimeout instead of "setInterval"
                // so I don't deal with figuring out how to clear an interval
                // from the above Promise with a totally different scope:
                let _addDot = ()=>{
                    if(!_isSectionLoadedYet){
                        dots.innerHTML += '.';
                        setTimeout(_addDot,1000);
                    }
                };
                _addDot();

                // Animate to height of the dots
                section.innerHTML = '';
                section.appendChild(dots);
                overflow.style.height = section.getBoundingClientRect().height+"px";

            }
        },10);

        /////////////////////////
        // CLOSING //////////////
        /////////////////////////

        // Close Animation
        bubble.close = ()=>{

            // Subtly move up
            bubble.style.top = '-5px';

            // Can't start an animation from "auto", so set height to current height
            overflow.style.height = overflow.getBoundingClientRect().height + "px";

            // NOW close it.
            setTimeout(()=>{
                overflow.setAttribute("mode","closing");
                overflow.style.height = "0px";
            },1);

            // Afterwards, delete node.
            setTimeout(()=>{
                __retire(bubble); bubble.remove();
                if(!expandable.isOpen)expandable.setAttribute("mode", "closed"); // old close cannot overwrite a newly reopened bubble
            }, ANIM_TIME+1);

            // Count the killed bubbles inside, subtract from Nutshell._nutshellsOpen
            Nutshell._nutshellsOpen -= bubble.querySelectorAll('.nutshell-bubble').length;
            Nutshell._updateCloseAllNutshells();

        };

        // Finally, return this magnificent created Bubble!
        return bubble;

    };

    let _findFirstParentWithFilter = (el,filter)=>{
        let original = el;
        while( el && !filter(el) ){ // first parent who passes
            el = el.parentNode;
        }
        return el; // if any
    }



    /////////////////////////////////////////////////////////////////////
    // ⭐️ Convert <h*> headings: On hover, show embed option
    /////////////////////////////////////////////////////////////////////

    Nutshell.convertHeadings = (el=document.body)=>{

        // For each heading, a container that only shows on hover!
        _getAllHeadings(el).forEach((heading)=>{

            // So it can show stuff on hover
            heading.classList.add('nutshell-heading');

            // Info needed for embed & permalink
            let headingText = heading.innerText,
                sectionID = headingText.replace(/[^A-Za-z0-9]/g,''), // bye punctuation
                permalink = Nutshell.thisPageURL+"#"+sectionID;

            // Embed button
            if(!Nutshell.options.dontEmbedHeadings){
                let embedButton = document.createElement('div');
                embedButton.className = 'nutshell-heading-embed';
                embedButton.textContent = "";
                embedButton.onclick = ()=>{
                    // disabled local embed entry
                };
                heading.appendChild(embedButton);
            }

        });

    };

    let _getAllHeadings = (el=document.body)=>{
        let allHeadings = [];
        for(let i=0; i<HEADER_TAGS.length; i++){
            let tag = HEADER_TAGS[i];
            allHeadings = allHeadings.concat( [...el.querySelectorAll(tag)] ); // big ol' array
        }
        return allHeadings;
    }

    // If heading *begins* with ":",
    // replace it and following section with just a link!
    // (And if it starts with ":x", DELETE ENTIRELY.)
    Nutshell.hideHeadings = (el=document.body)=>{

        // Temporary dividers to remove later...
        let tmpDividers = [];

        // For each found heading with :colon...
        _getAllHeadings(el).filter((heading)=>{
            return heading.innerText.trim()[0]==":";
        }).forEach((heading)=>{

            // Unless it's ":x", in which case DO NOT ADD LINK.
            if(heading.innerText.trim().toLowerCase().slice(0,2)!=":x"){

                // Put a link before the heading
                let link = document.createElement("a");
                link.href = "#" + heading.innerText.replace(/[^A-Za-z0-9]/g,''), // A section ID
                link.innerText = ":" + heading.innerText.trim().slice(1).trim(); // remove first char
                heading.parentNode.insertBefore(link, heading);

                // And insert a <br> after the link
                let br = document.createElement("br");
                link.parentNode.insertBefore(br, link.nextSibling);

            }

            // [I'M NOT SURE WHY I PUT THIS CODE HERE, IT SEEMS TO DO NOTHING]
            // [LEAVING IT COMMENTED OUT IN CASE IT'S IMPORTANT]
            // Put a <hr> before the link,
            // so it won't be confused with a previous section.
            //let hr = document.createElement("hr");
            //link.parentNode.insertBefore(hr, link);
            //tmpDividers.push(hr);

            // Then delete every node following until next heading, hr, or end of post.
            let currentNode = heading,
                foundEndOfSection = false;
            while(!foundEndOfSection){

                // Move on to next, then destroy this one.
                // ("then", coz can't get next sibling in DOM if already dead
                let nextNode = currentNode.nextSibling;
                currentNode.parentNode.removeChild(currentNode);
                currentNode = nextNode;

                // Is there a next node at all?
                if(!nextNode){
                    // If not, FOUND END.
                    foundEndOfSection = true;
                }else{
                    // If yes, what's its tag? (if any?)
                    if(nextNode.tagName){
                        // If it's a heading or <hr>, FOUND END.
                        let currentTag = nextNode.tagName.toLowerCase();
                        if(HEADER_TAGS.indexOf(currentTag)>=0 || currentTag=='hr'){
                            foundEndOfSection = true;
                        }
                    }
                }

            }

        });

        // NOW remove all those temporary dividers
        //tmpDividers.forEach((hr)=>{
        //    hr.parentNode.removeChild(hr);
        //});

    };




    /////////////////////////////////////////////////////////////////////
    // ⭐️ THE EMBED MODAL (IT'S A BIG 'UN)
    /////////////////////////////////////////////////////////////////////

    // Create that big ol' element. Start hidden
    Nutshell.defaultStyle = `

    /***************************************************
    HEADERS with link / embed options
    ***************************************************/

    .nutshell-heading{
        position:relative;
    }
    .nutshell-heading-embed{

        /* Position at end of heading text */
        width: 0; /* don't force newline */
        display: inline-block;
        position: relative;
        top:0.14em; left:0;

        /* Button, reveal on hover */
        opacity:0;
        cursor: pointer;
        transition: all 0.1s ease-in-out;

    }
    .nutshell-heading-embed img{
        width:1em; height:1em;
        min-width: 1em;
        min-height: 1em; /* some deal with the devil */
    }
    .nutshell-heading:hover .nutshell-heading-embed{
        left:0.25em;
        opacity:0.33;
    }
    .nutshell-heading:hover .nutshell-heading-embed:hover{
        opacity:1;
    }

    /***************************************************
    EXPANDABLE LINKS
    ***************************************************/

    .nutshell-expandable{

        /* Boring style to fit parent */
        color: inherit;
        text-decoration: none;
        border-bottom: dotted 1.5px;

        /* So those balls work */
        position:relative;

        /* Animate opacity on hover */
        transition: opacity 0.1s ease-in-out;
        opacity: 1;

    }
    .nutshell-expandable:hover{
        color: inherit;
        opacity: 0.8;
    }
    .nutshell-expandable .nutshell-expandable-text{
        padding-left: 0.35em; /* Give balls space */
    }
    /* The balls! */
    .nutshell-ball-up, .nutshell-ball-down{

        /* Placed to the left */
        position: absolute;
        display: inline-block;
        left: 1px;

        /* They're balls */
        width: 0.15em;
        height: 0.15em;
        background: #000;
        border-radius: 1em;

        /* Animate moving up & down */
        transition: top 0.1s ease-in-out;

    }
    /* Ball animation! Depends on open/closed, hover */
    .nutshell-expandable[mode=closed] .nutshell-ball-up{            top:0.4em;  }
    .nutshell-expandable[mode=closed] .nutshell-ball-down{          top:0.7em;  }
    .nutshell-expandable[mode=closed]:hover .nutshell-ball-up{      top:0.2em;  }
    .nutshell-expandable[mode=closed]:hover .nutshell-ball-down{    top:0.9em;  }
    .nutshell-expandable[mode=open] .nutshell-ball-up{              top:0.4em;  }
    .nutshell-expandable[mode=open] .nutshell-ball-down{            top:0.7em;  }
    .nutshell-expandable[mode=open]:hover .nutshell-ball-up{        top:0.55em; }
    .nutshell-expandable[mode=open]:hover .nutshell-ball-down{      top:0.55em; }

    /* Followup! */
    .nutshell-followup{
        opacity:0.33;
    }

    /***************************************************
    BUBBLES:
    ***************************************************/

    .nutshell-bubble{

        /* Gon' stretch out */
        display: inline-block;
        width: 100%;

        /* It's nice & speech-bubble-lookin' */
        border: 1px solid black;
        /*border: 1px solid #ddd;*/
        border-radius: 20px;

        /* For the speech-bubble arrow */
        position: relative;
        margin-top: 22px;

        /* For subtle move up & down */
        position: relative;
        top: 0;
        transition: top 0.3s linear;

    }

    /* Arrow outline */
    .nutshell-bubble-arrow{
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #000;
        /*border-bottom: 20px solid #ddd;*/
        position: absolute;
        top: -20px;
        pointer-events: none; /* don't block clicking */
        --arrow-background: #fff; /* css var */
    }

    /* Arrow white */
    .nutshell-bubble-arrow::after{
        content: "";
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #fff; /* fallback */
        border-bottom: 20px solid var(--arrow-background); /* css var */
        position: absolute;
        top: 1.5px;
        left: -20px;
        pointer-events: none; /* don't block clicking */
    }

    /* Overflow: contains the head/section/food */
    .nutshell-bubble-overflow{
        overflow: hidden;
    }
    .nutshell-bubble-overflow[mode=opening]{
        transition: height 0.3s ease-out; /* Snap to open */
    }
    .nutshell-bubble-overflow[mode=closing]{
        transition: height 0.3s ease-in; /* Snap to close */
    }

    /* Head: Embed Button, show on hover */
    .nutshell-bubble-overflow-embed-button{
        position: absolute;
        top:5px; right:10px;
        width:1em; height:1em;
        opacity:0;
        transition: all 0.1s ease-in-out;
        cursor:pointer;
    }
    .nutshell-bubble-overflow-embed-button img{
        width:1em; height:1em;
    }
    .nutshell-bubble-overflow:hover > .nutshell-bubble-overflow-embed-button{
        right: 5px;
        opacity: 0.33;
    }
    .nutshell-bubble-overflow:hover > .nutshell-bubble-overflow-embed-button:hover{
        opacity: 1.0;
    }
    /* NO EMBEDDING IF IT'S A PREVIEW INSIDE EMBED MODAL */
    .nutshell-embed-modal .nutshell-bubble-overflow-embed-button{
        display:none;
    }

    /* Section */
    .nutshell-bubble-overflow-section{
        padding: 0 1em;
        padding-bottom: 0.5em;
        overflow: hidden; /* to capture full height, including <p>'s margins */
    }
    .nutshell-bubble-overflow-section > div{
        margin: 1em 0; /* if you people forgot to put your text in <p>'s -_- */
    }
    .nutshell-bubble-overflow-section img{
        max-width:100%; /* so it fits */
    }
    .nutshell-bubble-overflow-section video{
        max-width:100%; /* so it fits */
    }
    /* Total hack for nice styling */
    .nutshell-bubble-overflow-section img[data-float=left]{
        float: left;
        margin: 1em;
    }
    .nutshell-bubble-overflow-section img[data-float=right]{
        float: right;
        margin: 1em;
    }
    .nutshell-bubble-overflow-section iframe{
        max-width:100%; /* so it fits */
        border: 1px solid rgba(0,0,0,0.2);
    }
    .nutshell-bubble-overflow-section .nutshell-bubble{
        /* So that recursive bubbles don't get squashed too quickly */
        width: calc(100% + 2em - 6px); /* undo section's padding, minus a gap */
        position: relative;
        right: calc(1em - 2px);
    }

    /* From */
    .nutshell-bubble-from{
        font-size: 0.69em;
        /* line-height: 0.69em; */
        margin-bottom: -0.69em;
        opacity: 0.69;
    }

    /* Foot: is a close button, too. */
    .nutshell-bubble-overflow-close{

        /* A &times; sign */
        font-family: inherit;
        font-size: 1rem;
        text-align: center;

        /* Whole-width bottom */
        position:absolute;
        width:100%;
        bottom:0;
        border: 0;
        background: none;

        /* A button that gets darker. */
        cursor:pointer;
        opacity: 0.33;
        transition: opacity 0.1s ease-in-out;

    }
    .nutshell-bubble-overflow-close:hover{
        background: none;
        opacity:1;
    }

    /* Misc styling for bubbles. I am a busybody. */
    .nutshell-bubble li{
        margin-bottom: 0.5em;
    }
    .nutshell-bubble code{
        background: #ddd;
        border-radius: 5px;
        /*font-weight:100;*/
        padding: 0 5px;
    }
    .nutshell-bubble blockquote{
        /*background: #eee;*/
        margin-left: 0px;
        margin-right: 0px;
        border-left: 0.5em solid #eee;
        padding: 1px 1em 1px 1.5em;
        margin-top: 0;
    }

    /***************************************************
    EMBED MODAL
    ***************************************************/

    .nutshell-embed-modal{

        /* TAKE UP WHOLE SCREEN */
        position: fixed;
        z-index: 99999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        /* Animate by fade in */
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }
    .nutshell-embed-modal[mode=shown]{  opacity:1; }
    .nutshell-embed-modal[mode=hidden]{ opacity:0; }

    /* Background is a big transparent black */
    #nutshell-embed-modal-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }

    /* Bubble is a big white rounded rect */
    #nutshell-embed-modal-bubble{

        /* In the middle */
        position: absolute;
        margin: auto;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 600px;
        height: 450px;

        /* Color & font */
        background: #fff;
        color: #000;
        border-radius: 30px;
        font-size: 20px;
        line-height: 1.5em;

        /* Animate by slide up */
        transition: top 0.3s ease-in-out;
    }
    .nutshell-embed-modal[mode=shown] #nutshell-embed-modal-bubble{  top:0;     }
    .nutshell-embed-modal[mode=hidden] #nutshell-embed-modal-bubble{ top:100px; }

    /* Close button */
    #nutshell-embed-modal-close{

        /* Top right button */
        z-index: 999;
        position: absolute;
        top: 5px; right: 10px;
        cursor: pointer;

        /* Just a times sign */
        font-size: 40px;
        /*font-weight: 100;*/
        height: 40px;

        /* Anim */
        opacity: 0.25;
        transition: opacity 0.1s ease-in-out;

    }
    #nutshell-embed-modal-close:hover{
        opacity:1;
    }

    /* Can scroll inside! */
    #nutshell-embed-modal-overflow{
        overflow-x: visible;
        overflow-y: scroll;
        padding: 15px 30px;
        width: calc(100% - 60px);
        height: calc(100% - 30px);
    }

    /* The "inputs" in the modal should look code-like */
    #nutshell-embed-modal-bubble input{
        width: 100%;
        font-size: 14px;
        font-family: monospace;
    }

    /* Learn More */
    #nutshell-embed-p4{
        font-size: 0.7em;
        line-height: 0em;
        text-align: center;
        margin-top: 3em;
    }

    /***************************************************
    CLOSE ALL NUTSHELLS
    ***************************************************/

    #nutshell-close-all{

        /* Top-right */
        position: fixed;
        top: 0; right: 0;

        /* Fades in & out */
        transition: opacity 0.9s ease-in-out;
        opacity: 0;
        text-align: right;
        cursor: pointer;

        /* Little text */
        font-size: 0.7em;
        line-height: 1.2em;

        /* Rounded corner */
        /*background: inherit;*/
        background: #fff;
        padding: 0.7em;
        border-radius: 0 0 0 1em;

    }
    #nutshell-close-all[show=yes]{
        opacity:1;
    }
    #nutshell-close-all[show=no]{
        opacity:0;
    }

    `;

    // I give up on hoping that CSS will be rendered
    // consistently across browsers.
    Nutshell.firefoxStyle = `
        /* Ball animation! Depends on open/closed, hover */
        .nutshell-expandable[mode=closed] .nutshell-ball-up{            top:0.2em;  }
        .nutshell-expandable[mode=closed] .nutshell-ball-down{          top:0.5em;  }
        .nutshell-expandable[mode=closed]:hover .nutshell-ball-up{      top:0.0em;  }
        .nutshell-expandable[mode=closed]:hover .nutshell-ball-down{    top:0.7em;  }
        .nutshell-expandable[mode=open] .nutshell-ball-up{              top:0.2em;  }
        .nutshell-expandable[mode=open] .nutshell-ball-down{            top:0.5em;  }
        .nutshell-expandable[mode=open]:hover .nutshell-ball-up{        top:0.35em; }
        .nutshell-expandable[mode=open]:hover .nutshell-ball-down{      top:0.35em; }
    `;


    // Add the above styles, and any custom the user may have added!
    Nutshell.addStyles = ()=>{

        // PREPENDING styles, in reverse order.
        // Prepend so that so user-made CSS can override!
        let styleEl;

        // Firefox?
        if(navigator.userAgent.indexOf("Firefox")>0){
            styleEl = document.createElement("style");
            styleEl.innerHTML = Nutshell.firefoxStyle;
            document.head.prepend(styleEl);
        }

        // Default
        styleEl = document.createElement("style");
        styleEl.innerHTML = Nutshell.defaultStyle;
        document.head.prepend(styleEl);

    };

}


/*************************************************************************

OPEN SOURCE LIBRARIES I'M PUTTING DIRECTLY INTO THIS JAVASCRIPT FILE
COZ AIN'T NOBODY WANT A REPEAT OF THE LEFT-PAD FIASCO

Included: DOMPurify, Marked

*************************************************************************/

/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return(r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}).apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,u=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=_(Array.prototype.forEach),v=_(Array.prototype.pop),T=_(Array.prototype.push),N=_(String.prototype.toLowerCase),E=_(String.prototype.match),A=_(String.prototype.replace),w=_(String.prototype.indexOf),x=_(String.prototype.trim),S=_(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function O(e,t){l&&l(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=N(r);o!==r&&(c(t)||(t[n]=o),r=o)}e[r]=!0}return e}function D(e){var t,n=p(null);for(t in e)h(i,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=u(e)}return function(e){return console.warn("fallback value for",e),null}}var M=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),U=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),B=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\s\S]*|[\s\S]*\}\}/gm),W=f(/<%[\s\S]*|[\s\S]*%>/gm),q=f(/^data-[\-\w.\u00B7-\uFFFF]/),Y=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),$=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X=f(/^html$/i),Z=function(){return"undefined"==typeof window?null:window},J=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),r=function(e){return t(e)};if(r.version="2.3.6",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,u=n.Node,s=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,_=s.prototype,Q=C(_,"cloneNode"),ee=C(_,"nextSibling"),te=C(_,"childNodes"),ne=C(_,"parentNode");if("function"==typeof c){var re=i.createElement("template");re.content&&re.content.ownerDocument&&(i=re.content.ownerDocument)}var oe=J(y,a),ae=oe?oe.createHTML(""):"",ie=i,le=ie.implementation,ce=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,me=a.importNode,fe={};try{fe=D(i).documentMode?i.documentMode:{}}catch(e){}var pe={};r.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var de,he,ge=G,ye=W,be=q,ve=Y,Te=V,Ne=$,Ee=K,Ae=null,we=O({},[].concat(o(M),o(R),o(L),o(F),o(U))),xe=null,Se=O({},[].concat(o(z),o(B),o(j),o(P))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Oe=null,De=!0,Ce=!0,Me=!1,Re=!1,Le=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!0,je=!0,Pe=!1,Ge={},We=null,qe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ye=null,Ke=O({},["audio","video","img","source","image","track"]),Ve=null,$e=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Ze="http://www.w3.org/2000/svg",Je="http://www.w3.org/1999/xhtml",Qe=Je,et=!1,tt=["application/xhtml+xml","text/html"],nt="text/html",rt=null,ot=i.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},it=function(t){rt&&rt===t||(t&&"object"===e(t)||(t={}),t=D(t),Ae="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS):we,xe="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR):Se,Ve="ADD_URI_SAFE_ATTR"in t?O(D($e),t.ADD_URI_SAFE_ATTR):$e,Ye="ADD_DATA_URI_TAGS"in t?O(D(Ke),t.ADD_DATA_URI_TAGS):Ke,We="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS):qe,_e="FORBID_TAGS"in t?O({},t.FORBID_TAGS):{},Oe="FORBID_ATTR"in t?O({},t.FORBID_ATTR):{},Ge="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Ce=!1!==t.ALLOW_DATA_ATTR,Me=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=t.SAFE_FOR_TEMPLATES||!1,Le=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Fe=t.FORCE_BODY||!1,Be=!1!==t.SANITIZE_DOM,je=!1!==t.KEEP_CONTENT,Pe=t.IN_PLACE||!1,Ee=t.ALLOWED_URI_REGEXP||Ee,Qe=t.NAMESPACE||Je,t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),de=de=-1===tt.indexOf(t.PARSER_MEDIA_TYPE)?nt:t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:N,Re&&(Ce=!1),Ue&&(He=!0),Ge&&(Ae=O({},o(U)),xe=[],!0===Ge.html&&(O(Ae,M),O(xe,z)),!0===Ge.svg&&(O(Ae,R),O(xe,B),O(xe,P)),!0===Ge.svgFilters&&(O(Ae,L),O(xe,B),O(xe,P)),!0===Ge.mathMl&&(O(Ae,F),O(xe,j),O(xe,P))),t.ADD_TAGS&&(Ae===we&&(Ae=D(Ae)),O(Ae,t.ADD_TAGS)),t.ADD_ATTR&&(xe===Se&&(xe=D(xe)),O(xe,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&O(Ve,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(We===qe&&(We=D(We)),O(We,t.FORBID_CONTENTS)),je&&(Ae["#text"]=!0),Le&&O(Ae,["html","head","body"]),Ae.table&&(O(Ae,["tbody"]),delete _e.tbody),m&&m(t),rt=t)},lt=O({},["mi","mo","mn","ms","mtext"]),ct=O({},["foreignobject","desc","title","annotation-xml"]),ut=O({},R);O(ut,L),O(ut,I);var st=O({},F);O(st,H);var mt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Je,tagName:"template"});var n=N(e.tagName),r=N(t.tagName);if(e.namespaceURI===Ze)return t.namespaceURI===Je?"svg"===n:t.namespaceURI===Xe?"svg"===n&&("annotation-xml"===r||lt[r]):Boolean(ut[n]);if(e.namespaceURI===Xe)return t.namespaceURI===Je?"math"===n:t.namespaceURI===Ze?"math"===n&&ct[r]:Boolean(st[n]);if(e.namespaceURI===Je){if(t.namespaceURI===Ze&&!ct[r])return!1;if(t.namespaceURI===Xe&&!lt[r])return!1;var o=O({},["title","style","font","a","script"]);return!st[n]&&(o[n]||!ut[n])}return!1},ft=function(e){T(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},pt=function(e,t){try{T(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(He||Ue)try{ft(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},dt=function(e){var t,n;if(Fe)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(Qe===Je)try{t=(new g).parseFromString(o,de)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Qe,"template",null);try{t.documentElement.innerHTML=et?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),Qe===Je?se.call(t,Le?"html":"body")[0]:Le?t.documentElement:a},ht=function(e){return ce.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},gt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},yt=function(t){return"object"===e(u)?t instanceof u:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},bt=function(e,t,n){pe[e]&&b(pe[e],(function(e){e.call(r,t,n,rt)}))},vt=function(e){var t;if(bt("beforeSanitizeElements",e,null),gt(e))return ft(e),!0;if(E(e.nodeName,/[\u0080-\uFFFF]/))return ft(e),!0;var n=he(e.nodeName);if(bt("uponSanitizeElement",e,{tagName:n,allowedTags:Ae}),!yt(e.firstElementChild)&&(!yt(e.content)||!yt(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return ft(e),!0;if("select"===n&&S(/<template/i,e.innerHTML))return ft(e),!0;if(!Ae[n]||_e[n]){if(!_e[n]&&Nt(n)){if(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,n))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))return!1}if(je&&!We[n]){var o=ne(e)||e.parentNode,a=te(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(Q(a[i],!0),ee(e))}return ft(e),!0}return e instanceof s&&!mt(e)?(ft(e),!0):"noscript"!==n&&"noembed"!==n||!S(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=A(t,ge," "),t=A(t,ye," "),e.textContent!==t&&(T(r.removed,{element:e.cloneNode()}),e.textContent=t)),bt("afterSanitizeElements",e,null),!1):(ft(e),!0)},Tt=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in i||n in ot))return!1;if(Ce&&!Oe[t]&&S(be,t));else if(De&&S(ve,t));else if(!xe[t]||Oe[t]){if(!(Nt(e)&&(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&S(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&S(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if(Ve[t]);else if(S(Ee,A(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Ye[e]){if(Me&&!S(Te,A(n,Ne,"")));else if(n)return!1}else;return!0},Nt=function(e){return e.indexOf("-")>0},Et=function(e){var t,n,o,a;bt("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(a=i.length;a--;){var c=t=i[a],u=c.name,s=c.namespaceURI;if(n="value"===u?t.value:x(t.value),o=he(u),l.attrName=o,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,bt("uponSanitizeAttribute",e,l),n=l.attrValue,!l.forceKeepAttr&&(pt(u,e),l.keepAttr))if(S(/\/>/i,n))pt(u,e);else{Re&&(n=A(n,ge," "),n=A(n,ye," "));var m=he(e.nodeName);if(Tt(m,o,n))try{s?e.setAttributeNS(s,u,n):e.setAttribute(u,n),v(r.removed)}catch(e){}}}bt("afterSanitizeAttributes",e,null)}},At=function e(t){var n,r=ht(t);for(bt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)bt("uponSanitizeShadowNode",n,null),vt(n)||(n.content instanceof l&&e(n.content),Et(n));bt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t,o){var i,c,s,m,f;if((et=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!yt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(yt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Ie||it(o),r.removed=[],"string"==typeof t&&(Pe=!1),Pe){if(t.nodeName){var p=he(t.nodeName);if(!Ae[p]||_e[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof u)1===(c=(i=dt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?i=c:i.appendChild(c);else{if(!He&&!Re&&!Le&&-1===t.indexOf("<"))return oe&&ze?oe.createHTML(t):t;if(!(i=dt(t)))return He?null:ze?ae:""}i&&Fe&&ft(i.firstChild);for(var d=ht(Pe?t:i);s=d.nextNode();)3===s.nodeType&&s===m||vt(s)||(s.content instanceof l&&At(s.content),Et(s),m=s);if(m=null,Pe)return t;if(He){if(Ue)for(f=ue.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return xe.shadowroot&&(f=me.call(a,f,!0)),f}var h=Le?i.outerHTML:i.innerHTML;return Le&&Ae["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&S(X,i.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+h),Re&&(h=A(h,ge," "),h=A(h,ye," ")),oe&&ze?oe.createHTML(h):h},r.setConfig=function(e){it(e),Ie=!0},r.clearConfig=function(){rt=null,Ie=!1},r.isValidAttribute=function(e,t,n){rt||it({});var r=he(e),o=he(t);return Tt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],T(pe[e],t))},r.removeHook=function(e){if(pe[e])return v(pe[e])},r.removeHooks=function(e){pe[e]&&(pe[e]=[])},r.removeAllHooks=function(){pe={}},r}()}));
//# sourceMappingURL=purify.min.js.map

Nutshell.setOptions({startOnLoad:false,dontEmbedHeadings:true});__on(document,'visibilitychange',__pause);__on(window,'pagehide',__stop);__on(document,'keydown',e=>{const a=e.target.closest?.('.nutshell-expandable');if(a&&e.key===' '&&!e.repeat){e.preventDefault();a.click()}});__on(document,'click',e=>{const a=e.target.closest?.('a');if(a&&!a.classList.contains('nutshell-expandable'))e.preventDefault()});document.querySelectorAll('#essay a[href^="#"]').forEach(a=>a.href=Nutshell.thisPageURL+a.getAttribute('href'));try{Nutshell.start(document.getElementById('essay'))}catch(e){__stop();document.body.textContent='内联文章暂时无法显示。'}

})();