const e={"nav.run":"Esegui","nav.run_tt":"esegui questa richiesta con le API Overpass","nav.rerender_tt":"analizza il codice MapCSS e aggiorna la mappa","nav.share":"Condividi","nav.share_tt":"ottieni un link permanente per questa richiesta","nav.export":"Esporta","nav.export_tt":"vari strumenti di esportazione","nav.save":"Salva","nav.save_tt":"salva questa richiesta","nav.load":"Carica","nav.load_tt":"Carica la richiesta salvata o l'esempio","nav.wizard":"Wizard","nav.wizard_tt":"un compositore di richieste","nav.settings":"Impostazioni","nav.settings_tt":"impostazioni varie","nav.help":"Aiuto","nav.help_tt":"aiuto, informazioni e  attribuzioni","nav.logout":"Esci","nav.logout_tt":"esci dal profilo attualmente sincronizzato","tabs.map":"Mappa","tabs.map_tt":"vista mappa","tabs.data":"Dati","tabs.data_tt":"vista sui dati","map_controlls.zoom_to_data":"zoom sui dati","map_controlls.localize_user":"localizzami!","map_controlls.localize_user_disabled":"disabilitato perché overpass turbo non è stato caricato con https://","map_controlls.select_bbox":"selezione manuale dell'area","map_controlls.select_bbox_disabled":"disabilitato perché non è necessaria un area","map_controlls.toggle_wide_map":"abilita mappa estesa","map_controlls.toggle_data":"attiva/disattiva la sovrapposizione dei dati","map_controlls.suggest_zoom_to_data":"premere qui per visualizzare i dati","settings.title":"Impostazioni","settings.section.general":"Impostazioni Generali","settings.ui_lang":"Lingua","settings.server":"Server","settings.disable_autorepair":"Disabilita messaggi di avvertimento/autoriparazione quando Overpass API restituisce dati non visualizzabili.","settings.section.editor":"Editor","settings.enable_rich_editor":"Abilita editor evoluto","settings.enable_rich_editor_expl":"disabilita su dispositivi mobili; è necessario ricaricare la pagina per applicare l'impostazione","settings.editor_width":"Larghezza dell'editor","settings.editor_width_expl":'e.s. "400px", lasciare vuoto come predefiniti',"settings.section.map":"Mappa","settings.tile_server":"server delle Tile","settings.tile_opacity":"Opacità Tile","settings.tile_opacity_expl":"trasparenza delle mattonelle dello sfondo: 0=trasparente ... 1=visibile","settings.show_crosshairs":"Mostra un mirino nel centro della mappa.","settings.disable_poiomatic":"Non mostrare piccoli oggetti come POI.","settings.show_data_stats":"Mostra alcune statistiche riguardo i dati caricati e visualizzati.","settings.section.sharing":"Condividi","settings.include_map_state":"Includi lo stato corrente della mappa nei link condivisi","settings.compression":"Compressione","settings.section.export":"Esporta","settings.export_image_scale":"Mostra la scala nelle mappe esportate.","settings.export_image_attr":"Mostra l'attribuzione sulle immagini esportate","save.title":"Salva","save.enter_name":"Inserire un nome per questa query","load.title":"Carica","load.delete_query":"elimina questa query","load.saved_queries-local":"Query salvate in locale","load.saved_queries-osm":"Richieste salvate (openhistoricalmap.org)","load.saved_queries-osm-loading":"Caricamento da openhistoricalmap.org delle richieste salvate...","load.saved_queries-osm-error":"È avvenuto un errore mentre venivano caricate le richieste salvate da openhistoricalmap.org :(","load.examples":"Esempi","load.no_saved_query":"attualmente nessuna query salvata","export.title":"Esporta","export.download-error":"Esporta - Errore","export.copy_to_clipboard":"Copia il testo negli appunti","export.copy_to_clipboard_success":"Esporta - Copiato con successo negli appunti","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> è stato copiato con successo negli appunti.',"export.section.map":"Mappa","export.as_png":'come <a id="export-image" href="">immagine png</a>',"export.as_interactive_map":'come <a id="export-interactive-map" href="">Mappa interattiva</a>',"export.current_map_view":'vista  attuale della <a id="export-map-state" href="">mappa</a>',"export.map_view_expl":"margini, centro, ecc.","export.section.data":"Dati","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">scarica</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">copia</a></span></div>',"export.raw_data":"dati OHM grezzi","export.raw_interpreter":'dati grezzi direttamente da <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'salva GeoJSON come <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Query","export.format_text":'<abbr title="Da usare con le API di Overpass, le scorciatoie sono estese ma non include le funzioni addizionali di Overpass turbo come MapCSS.">richiesta autonoma</abbr>',"export.format_text_raw":'<abbr title="Richiesta di overpass turbo inalterata – come quella nell’editor">richiesta grezza</abbr>',"export.format_text_wiki":'<abbr title="Da utilizzare nella wiki di OpenStreetMap come modello di esempio per Overpass Turbo">wiki OHM</abbr>',"export.format_text_umap":'url dei dati remoti <abbr title="For usage with umap.openstreetmap.fr">umap</abbr>',"export.to_xml":'converti in <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'converti in (<a id="export-convert-compact" href="" target="_blank" class="external">compatta</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"carica dati in un editor OHM:","export.geoJSON.title":"Esporta - GeoJSON","export.geoJSON.expl":"Dati attualmente mostrati come GeoJSON:","export.geoJSON.no_data":"Nessun dato GeoJSON disponibile! Si prega di lanciare prima la query.","export.geoJSON_gist.title":"Salvato come gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Modifica con geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Esporta - GPX","export.GPX.expl":"Dati attualmente mostrati come GPX:","export.GPX.no_data":"Nessun dato GPX disponibile! Si prega di eseguire prima una query.","export.KML.title":"Esporta - KML","export.KML.expl":"Dati attualmente mostrati come KML:","export.KML.no_data":"Nessun dato KML disponibile! Si prega di eseguire prima una query.","export.raw.title":"Esporta - dati grezzi","export.raw.no_data":"Nessun dato grezzo disponibile! Occorre eseguire prima una richiesta.","export.map_view.title":"Vista della mappa attuale","export.map_view.permalink":"Link permanente","export.map_view.permalink_osm":"da openhistoricalmap.org","export.map_view.center":"Centro","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Margini","export.map_view.bounds_selection":"Margini (rettangolo selezionato a mano)","export.map_view.bounds_expl":"sud, ovest, nord, est","export.map_view.zoom":"Zoom","export.image.title":"Esporta - Immagine","export.image.alt":"la mappa esportata","export.image.download":"Download","export.image.attribution_missing":"Verificare ti aver incluso le corrette attribuzioni quando si distribuisce questa immagine!","share.title":"Condividi","share.header":"Link permanente","share.copy_this_link":'Copia questo <a href="" id="share_link_a">link</a> per condividere questo codice:',"share.options":"Opzioni","share.incl_map_state":"Includere lo stato corrente della mappa","share.run_immediately":"esegui questa richiesta immediatamente dopo il caricamento","help.title":"Aiuto","help.section.introduction":"Introduzione","help.intro.0":`Questo è <i>overpass turbo</i>, uno strumento web-based per l'estrazione di dati <a href="https://www.openhistoricalmap.org">OpenHistoricalMap</a>.`,"help.intro.1":'Utilizzando overpass turbo puoi eseguire query per <a href="https://wiki.openstreetmap.org/wiki/OpenHistoricalMap/Overpass">Overpass API</a> e analizzare dati OHM su mappa in maniera interattiva.',"help.intro.1b":'È disponibile la <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">procedura guidata</a> che rende estremamente semplice creare una richiesta.',"help.intro.2":'Trovi ulteriori informazioni su <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> e su come scrivere <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">richieste a Overpass</a> visitando la wiki del progetto OpenStreetMap.',"help.section.queries":"Query Overpass","help.queries.expl":'Overpass API permette di interrogare i dati di OpenHistoricalMap seguendo i tuoi criteri di ricerca. A tale scopo, è stato sviluppato un particolare <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">linguaggio di ricerca</a>.',"help.intro.shortcuts":"In aggiunta alle normali richieste Overpass API, si possono usare le seguenti pratiche scorciatoie in Overpass turbo:","help.intro.shortcuts.bbox":"coordinate dell'inquadramento della mappa attualmente in uso","help.intro.shortcuts.center":"coordinate del centro della mappa","help.intro.shortcuts.date":"ISO 8601 stringa-di-tipo-temporale riferita ad un certo intervallo temporale (ad esempio “24 ore”)","help.intro.shortcuts.style":'definisce un <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">foglio di stile MapCSS</a>',"help.intro.shortcuts.custom":"Scorciatorie arbitrarei possono essere definite inserendo <i>{{shortcut=value}}</i> in qualche parte nello script","help.intro.shortcuts.more":`Ulteriori scorciatoie di overpass-turbo, informazioni su quanto sopra ed esempi d'uso possono essere trovati nella <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">wiki OSM</a>.`,"help.section.ide":"IDE","help.ide.share.title":"Condivisione","help.ide.share.expl":"È possibile inviare, a qualcuno, un collegamento permanente con la query attualmente in uso. Questo è possibile grazie allo strumento <i>Condividi</i> dove viene mostrato un link da convidire con amici o inviare online. (Da notare che gli altri lavoreranno su una propria copia della query).","help.ide.save_load.title":"Salva e Carica","help.ide.save_load.expl":"È possibile anche salvare e caricare le proprie query. Per cominciare, è disponibile un buon numero di esempi di query precaricare. Si consiglia di prenderne visione per avere una rapida idea di cosa overpass è in grado di fare.","help.ide.keyboard.title":"Scorciatoie tastiera","help.ide.keyboard.run":"Esegui la richiesta corrente.","help.ide.keyboard.wizard":"Inizializza il compositore automatico di query.","help.ide.keyboard.load_save":"Carica (apri) / Salva una query.","help.ide.keyboard.help":"Apri questa finestra di aiuto.","help.section.key":"Legenda","help.key.example":"diversi oggetti della mappa","help.key.description":"Le linee (way) sono visualizzate con in blu scuro, i poligoni come aree gialle con un contorno blu, i POI (nodi con tag) con cerchi gialli e contorno blu. I cerchi con un riempimento rosso sono usati per poligoni o linee che normalmente sono troppo piccoli per essere visualizzati. Linee e contorni rosa significano, che un oggetto (caricato) è parte di almeno una relazione. Le linee tratteggiate invece che una linea o un poligono hanno geometrie incomplete (molto probabilmente perché alcuni dei nodi non sono stati caricati).","help.section.export":"Esporta","help.export":'Lo strumento di <i>Export</i> offre diverse opzioni da effettuale come la query e/o i dati caricati dalla query<br/>. Le opzioni con questo simboli: <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> si basano o fanno riferimento a strumenti (online) esterni.',"help.export.query_data.title":"Query / Dati","help.export.query_data.expl":"Questo vale per alcune cose che si possono fare con le query grezze o i dati, come convertire le query fra diversi linguaggi di query o esportare i dati come GeoJSON. Una funzione molto utile è quella di poter di inviare la query a JOSM.","help.export.map.title":"Mappa","help.export.map.expl":"Converti la vista in uso della mappa con le sue dimensioni in una immagine png statica, oppure in una mappa interattiva (schermo intero), ecc.","help.section.about":"A proposito di","help.about.maintained":"<i>overpass turbo</i> è mantenuto da Martin Raifer (tyr.asd at gmail.com).","help.about.feedback.title":"Feedback, Segnalazioni di errori, Richiesta nuove funzionalità","help.about.feedback":`Se si desidera dare feedback, riportare problemi o chiedere particolari funzionalità, si prega di fare uso dell'<a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> in github o la <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">pagina di discussione</a> sulla pagina del wiki di OpenStreetMap.`,"help.about.source.title":"Codice Sorgente","help.about.source":'Il <a href="https://github.com/tyrasd/overpass-turbo">codice sorgente</a> di questa applicazione è rilasciato con <a href="LICENSE">licenza</a> MIT.',"help.section.attribution":"Attribuzione","help.attr.data_sources":"Sorgenti dati","help.attr.data":`Data &copy; contributori <a href="http://openstreetmap.org/">OpenStreetMap</a>, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Condizioni d'uso</a>)</span>`,"help.attr.mining":"Elaborazione dei dati da parte di","help.attr.tiles":'Tasselli della mappa &copy; contributori <a href="http://openstreetmap.org/">OpenStreetMap</a>',"help.attr.search":"Ricerca fornita da","help.attr.software":"Software & librerie","help.attr.leaflet":"Mappa offerta da","help.attr.codemirror":"Editor potenziato da","help.attr.other_libs":"Altre librerie:","ffs.title":"Query Wizard","ffs.comments":"aggiungi commenti alla richiesta","ffs.placeholder":"cerca","ffs.expl":'Il <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">compositore</a> può assisterti nel creare query Overpass. Qui alcuni esempi di utilizzo:',"ffs.parse_error":"Questa ricerca non è stata riconosciuta.","ffs.parse_error_expl":'NOTA: è necessario utilizzare le virgolette per le stringhe che contengono spazi o caratteri speciali. I filtri di ricerca multipli devono essere separati da appositi operatori booleani (<i>and</i> oppure <i>or</i>). Leggere la <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentazione</a> per ulteriori informazioni.',"ffs.typo":"Forse intendevi: ","dialog.dismiss":"scarta","dialog.cancel":"annulla","dialog.save":"salva","dialog.save-local":"salva (localmente)","dialog.save-osm":"salva su openhistoricalmap.org","dialog.delete":"elimina","dialog.close":"chiudi","dialog.done":"completato","dialog.abort":"annulla","dialog.reset":"ripristina","dialog.repair_query":"correggi la richiesta","dialog.continue_anyway":"continua ugualmente","dialog.show_data":"mostra i dati","dialog.wizard_build":"componi la richiesta","dialog.wizard_run":"componi ed esegui la richiesta","dialog.delete_query.title":"Eliminare la query?","dialog.delete_query.expl":"Vuoi veramente cancellare la seguente richiesta","dialog.delete_query.expl-osm":"Sei sicuro di voler cancellare la seguente richiesta sincronizzata","error.query.title":"Errore nella query","error.query.expl":"È avvenuto un errore durante l’esecuzione della richiesta overpass! Questo è ciò che le API overpass hanno restituito:","error.ajax.title":"Errore Ajax","error.ajax.expl":"È avvenuto un errore durante l’esecuzione della richiesta overpass!","error.mapcss.title":"Errore di MapCSS","error.mapcss.expl":"foglio di stile MapCSS non valido:","error.remote.title":"Errore Controllo Remoto","error.remote.incompat":"Errore: versione di JOSM remote control incompatibile","error.remote.not_found":"Non è stato individuato il controllo remoto :( Si consiglia di verificare che JOSM sia in funzione e configurato correttamente.","error.nominatim.title":"Errore di Nominatim","error.nominatim.expl":"Impossibile trovare qualcosa che corrisponda a questo nome:","warning.browser.title":"Browser non supportato :(","warning.browser.expl.1":'Il browser attualmente in uso, non è completamente in grado di eseguire (le parti più importanti di) questa applicazione. <small>È necessario il supporto per  <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> e <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Attenzione: è probabile che sia necessario abilitare i cookie e/o "Dati locali" per questo sito se si usano alcuni browser (es. Firefox e Chrome).',"warning.browser.expl.3":`È necessario l'aggiornamento ad una versione più recente del browser in uso oppure il passaggio ad uno con maggiori funzionalità! Sono state testate le versioni più recenti di <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> e <a href="http://www.mozilla.org/de/firefox/">Firefox</a>. In alternativa è possibile utilizzare il modulo <a href="http://overpass-api.de/query_form.html">Overpass_API query</a>.`,"warning.incomplete.title":"Dati Incompleti","warning.incomplete.expl.1":"La query non ha restituito alcun node. In OHM, solo i nodi contengono coordinate. Ad esempio, una linea (way) non può essere rappresentata senza i suoi nodi.","warning.incomplete.expl.2":'Se questo non è il risultato che ti attendevi, <i>overpass turbo</i> può aiutarti a sistemare (auto-completare) la query selezionando sotto "ripara query". In alternativa puoi andare direttamente ai dati.',"warning.incomplete.not_again":"non mostrare di nuovo questo messaggio","warning.incomplete.remote.expl.1":"Sembra che questa query non restituirà i dati OSM nel formato XML con metadati. Editor come JOHM richiedono però che i dati siano in quel formato.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> può aiutare correggendo la query selezionando "ripara query" qui sotto.',"warning.share.long":"Attenzione: questo link di condivisione è abbastanza lungo e quindi non potrebbe funzionare in alcune circostanze","warning.share.very_long":"Attenzione: questo link è molto lungo. E' probabile che possa creare problemi in circostanze normali (browser, server web). Utilizzare con cautela.","warning.huge_data.title":"Grandi quantità di dati","warning.huge_data.expl.1":"Questa query ha restituito un grande quantità di dati  (circa {{amount_txt}}).","warning.huge_data.expl.2":"Il browser in uso potrebbe richiedere parecchio tempo per rappresentare questa query. Si è sicuri di voler continuare?","waiter.processing_query":"elaborazione della richiesta...","waiter.export_as_image":"esporta come immagine...","data_stats.loaded":"Caricato","data_stats.displayed":"Visualizzato","data_stats.nodes":"nodi","data_stats.ways":"way","data_stats.relations":"relazioni","data_stats.areas":"aree","data_stats.pois":"punti di interesse","data_stats.lines":"linee","data_stats.polygons":"poligoni","data_stats.request_duration":"La richiesta Overpass ha impiegato","data_stats.lag":"Aggiornamento dei dati","data_stats.lag_areas":"Aggiornamento delle aree","data_stats.lag.expl":"indietro rispetto al db OHM","popup.tags":"Etichette","popup.metadata":"Metadati","popup.coordinates":"Coordinate","popup.node":"Nodo","popup.nodes":"Nodi","popup.way":"Percorso","popup.ways":"Percorsi","popup.relation":"Relazione","popup.relations":"Relazioni","popup.incomplete_geometry":"Attenzione: geometria incompleta (ad es. alcuni nodi potrebbero non essere presenti)","map.intentionally_blank":"Questa mappa è volutamente lasciata vuota."};export{e as default};
