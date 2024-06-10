const e={"nav.run":"Käivita","nav.run_tt":"teosta antud päring Overpass API peal","nav.rerender_tt":"parse the MapCSS and rerender the map","nav.share":"Jaga","nav.share_tt":"püsilink antud päringule","nav.export":"Eksport","nav.export_tt":"erinevad ekspordivahendid","nav.save":"Salvesta","nav.save_tt":"salvesta päring","nav.load":"Laadi","nav.load_tt":"laadi salvestatud päring või näide","nav.wizard":"Nõustaja","nav.wizard_tt":"päringu loomise vahend","nav.settings":"Seaded","nav.settings_tt":"erinevad seaded","nav.help":"Abi","nav.help_tt":"abi, tiitelandmed ja kasutatud allikad","nav.logout":"Logi välja","nav.logout_tt":"logout from currently synced osm account","tabs.map":"Kaart","tabs.map_tt":"kaardivaade","tabs.data":"Andmed","tabs.data_tt":"andmevaade","map_controlls.zoom_to_data":"suurenda andmete järgi","map_controlls.localize_user":"Leia minu asukoht!","map_controlls.localize_user_disabled":"disabled because overpass turbo has not been loaded via https://","map_controlls.select_bbox":"piirdeala","map_controlls.select_bbox_disabled":"keelatud, sest praegune päring ei nõua piirdeala","map_controlls.toggle_wide_map":"laienda kaardivaadet","map_controlls.toggle_data":"andmekiht sisse/välja","map_controlls.suggest_zoom_to_data":"kliki siin, et andmed näha","settings.title":"Seaded","settings.section.general":"Üldseaded","settings.ui_lang":"Liidese keel","settings.server":"Server","settings.disable_autorepair":"Keelatakse hoiatuse/automaatparanduse teade kui Overpass API ei anna tulemuseks nähtavaid andmeid.","settings.section.editor":"Redaktor","settings.enable_rich_editor":"Lubatakse vormindatud teksti redaktor","settings.enable_rich_editor_expl":"keela see valik mobiilseadmete korral; nõuab aktiveerimiseks lehe taaslaadimist","settings.editor_width":"Redaktori laius","settings.editor_width_expl":'nt. "400px", tühi lahter seab vaikeväärtused',"settings.section.map":"Kaart","settings.tile_server":"Kaardiserver","settings.tile_opacity":"Paanide läbipaistvus","settings.tile_opacity_expl":"transparency of background tiles: 0=transparent … 1=visible","settings.show_crosshairs":"Kaardi keskel kuvatakse niitrist.","settings.disable_poiomatic":"Väikeseid tunnuseid ei kuvata huvipunktidena.","settings.show_data_stats":"Näitab väikest statistikat laaditud ja kuvatavate andmete kohta.","settings.section.sharing":"Jagamine","settings.include_map_state":"Lisa praegune kaardi vaade jagatud linkidesse","settings.compression":"Tihendamine","settings.section.export":"Eksport","settings.export_image_scale":"Eksporditud piltidel kuvatakse skaala.","settings.export_image_attr":"Eksporditud piltidel kuvatakse tunnustused.","save.title":"Salvesta","save.enter_name":"Sisesta antud päringu nimi","load.title":"Laadi","load.delete_query":"kustuta päring","load.saved_queries-local":"Salvestatud päringud (kohalik)","load.saved_queries-osm":"Salvestatud päringud (openhistoricalmap.org)","load.saved_queries-osm-loading":"Salvestatud päringu laadimine openhistoricalmap.org lehelt...","load.saved_queries-osm-error":"Salvestatud päringute openhistoricalmap.org lehelt laadimisel tekkis tõrge :(","load.examples":"Näited","load.no_saved_query":"salvestatud päringuid ei ole","export.title":"Eksport","export.download-error":"Export - Error","export.copy_to_clipboard":"Kopeeri see tekst lõikelauale","export.copy_to_clipboard_success":"Export - Successfully copied to clipboard","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> kopeeriti edukalt lõikelauale.',"export.section.map":"Kaart","export.as_png":'kui <a id="export-image" href="">png pilt</a>',"export.as_interactive_map":'kui <a id="export-interactive-map" href="">interaktiivne kaart</a>',"export.current_map_view":'praegune <a id="export-map-state" href="">kaardivaade</a>',"export.map_view_expl":"piirdeala, keskkoht, jne.","export.section.data":"Andmed","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">laadi alla</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">kopeeri</a></span></div>',"export.raw_data":"OHMi toorandmed","export.raw_interpreter":'<a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a> toorandmed',"export.save_geoJSON_gist":'salvesta GeoJSON <a id="export-geoJSON-gist" href="" class="external">gist</a> lõikepuhvrisse',"export.section.query":"Päring","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">standalone query</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">raw query</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OHM wiki as a OverpassTurboExample-Template">ohm wiki</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":'teisenda <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a> koodiks',"export.to_ql":'teisenda (<a id="export-convert-compact" href="" target="_blank" class="external">kompaktsele</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a> kujule',"export.editors":"laadi andmed OHM redaktorisse:","export.geoJSON.title":"Eksport - GeoJSON","export.geoJSON.expl":"GeoJSON vormingus andmed:","export.geoJSON.no_data":"GeoJSON andmed puuduvad! Palun käivita kõigepealt päring.","export.geoJSON_gist.title":"Salvestatud gist lõikepuhvrisse","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Muuda geojson.io abil:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Eksport - GPX","export.GPX.expl":"GPX vormingus andmed:","export.GPX.no_data":"GPX andmed puuduvad! Palun käivita kõigepealt päring.","export.KML.title":"Eksport - KML","export.KML.expl":"KML vormingus andmed:","export.KML.no_data":"KML andmed puuduvad! Palun käivita kõigepealt päring.","export.raw.title":"Eksport - toorandmed","export.raw.no_data":"Toorandmed puuduvad! Palun käivita kõigepealt päring.","export.map_view.title":"Praegune kaardivaade","export.map_view.permalink":"Püsilink","export.map_view.permalink_osm":"openhistoricalmap.org saidile","export.map_view.center":"Keskkoht","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Piirid","export.map_view.bounds_selection":"Piirid (käsitsi valitud piirdeala)","export.map_view.bounds_expl":"lõuna, lääs, põhi, ida","export.map_view.zoom":"Suurendus","export.image.title":"Eksport - Pilt","export.image.alt":"eksporditud kaart","export.image.download":"Allalaadimine","export.image.attribution_missing":"Antud pildi jagamisel lisa kindlasti ka nõuetele vastavad allikviited","share.title":"Jaga","share.header":"Püsilink","share.copy_this_link":'Kopeeri antud <a href="" id="share_link_a">link</a>, et jagada loodud koodi:',"share.options":"Valikud","share.incl_map_state":"lisa praegune kaardi vaade","share.run_immediately":"käivita see päring kohe peale laadimist","help.title":"Abi","help.section.introduction":"Tutvustus","help.intro.0":'See on <i>overpass turbo</i>, veebipõhine <a href="https://www.openhistoricalmap.org">OpenHistoricalMapi</a> andmete filtreerimise tööriist.',"help.intro.1":'Overpass turbo võimaldab luua <a href="https://wiki.openstreetmap.org/wiki/OpenHistoricalMap/Overpass">Overpass API</a> päringuid ja interaktiivselt analüüsida kaardil kuvatud OHM andmeid.',"help.intro.1b":'Olemas on integreeritud <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">nõustaja</a> mille abil saab hõlpsalt päringuid luua.',"help.intro.2":'Rohkem infot <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> ja <a href="https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass päringute</a> loomise kohta võib leida OSM vikist.',"help.section.queries":"Overpass päringud","help.queries.expl":'Overpass API võimaldab teostada OHM andmete päringuid enda loodud otsingu kriteeriumite järgi. Selle teostamiseks on loodud omaette <a href="https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">päringu keel</a>.',"help.intro.shortcuts":"Lisaks tavapärastele Overpass API päringutele on võimalik kasutada järgmisi kasulikke overpass turbo otseteid:","help.intro.shortcuts.bbox":"aktiivse kaardivaate piirdeala koordinaadid","help.intro.shortcuts.center":"kaardi keskkoha koordinaadid","help.intro.shortcuts.date":"ISO 8601 kuupäev-kellaaeg string teatud hulk aega tagasi (nt “24 hours”)","help.intro.shortcuts.style":'määrab <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS stiililehe</a>',"help.intro.shortcuts.custom":"Võimalik on defineerida uusi otseteid, lisades <i>{{otsetee=väärtus}}</i> kusagile skriptis.","help.intro.shortcuts.more":'Rohkem overpass-turbo kiirklahve, lisateavet ülaltoodu kohta ja kasutasnäiteid võib leida <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM vikist</a>.',"help.section.ide":"Keskkond","help.ide.share.title":"Jagamine","help.ide.share.expl":"Võimalik on saata teistele püsilink koos hetkel lahtioleva päringuga. Seda saab teostada menüüs <i>Jaga</i> kus on näha link, mida saab saata sõbrale või teistega jagada. (Teised ei tööta otse antud päringuga vaid selle koopiaga.)","help.ide.save_load.title":"Salvesta ja laadi","help.ide.save_load.expl":"Päringuid on samuti võimalik salvestada ja laadida. Kasutamise alustuseks on näha mõned eelsalvestatud päringud. Nende põhjal on võimalik saada ülevaade, mida overpass abil on võimalik teha.","help.ide.keyboard.title":"Kiirklahvid:","help.ide.keyboard.run":"Käivitab lahtioleva päringu.","help.ide.keyboard.wizard":"Käivita päringunõustaja.","help.ide.keyboard.load_save":"Laadib (avab) / salvestab päringu.","help.ide.keyboard.help":"Avab selle abi dialoogiakna.","help.section.key":"Legend","help.key.example":"erinevad kaardi omadused","help.key.description":"Jooned on kuvatud paksude siniste joontena, hulknurgad on peene sinise äärjoonega kollased alad, huvipunktid (siltidega sõlmed) on peene sinise äärjoonega kollased ringikesed. Punase täidisega ringikesed tähistavad hulknurki või jooni, mis on liialt väikesed, et normaalselt kuvada. Roosad jooned või äärjooned näitavad, et objekt kuulub vähemalt ühe (laaditud) relatsiooni koosseisu. Kriipsjooned näitavad, et joone või hulknurga geomeetria pole täielik (enamasti seepärast, et mõned selle sõlmed pole laaditud).","help.section.export":"Eksport","help.export":'<i>Ekspordi</i> tööriist hõlmab erinevaid vahendeid päringu või päringuga laaditud andmete töötlemiseks.<br />Sümboliga <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> valikud põhinevad või viitavad välistele (onlain) töövahenditele.',"help.export.query_data.title":"Päring / Andmed","help.export.query_data.expl":"See hõlmab mõningaid tegevusi mida saab sooritada toorpäringu või -andmetega, näiteks päringu teisendamine erinevatesse päringukeeltesse või andmete eksportimine geoJSON vormingus. Väga kasulik valik on võimalus suunata päring JOSM-i.","help.export.map.title":"Kaart","help.export.map.expl":"Teisendab praeguse andmekaardi staatiliseks png pildiks või (täisekraan) interaktiivseks kaardiks, jne.","help.section.about":"Tiitelandmed","help.about.maintained":"<i>overpass turbo</i> eest kannab hoolt Martin Raifer (tyr.asd ät gmail.com).","help.about.feedback.title":"Tagasiside, veateated, ettepanekud","help.about.feedback":'Tagasiside, probleemidest teatamine või küsimused konkreetse funktsiooni kohta edastage palun github <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> rakenduses või OSM-wiki <a href="https://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">arutelu lehel</a>.',"help.about.source.title":"Lähtetekst","help.about.source":'Antud rakenduse <a href="https://github.com/tyrasd/overpass-turbo">lähtekood</a> on avaldatud MIT <a href="LICENSE">litsentsi</a> all.',"help.section.attribution":"Kasutatud materjalid","help.attr.data_sources":"Andmeallikad","help.attr.data":'Andmed &copy; <a href="https://openhistoricalmap.org/">OpenHistoricalMapi</a> kaastöölised',"help.attr.mining":"Andmekaeve","help.attr.tiles":'Map tiles &copy; <a href="https://openhistoricalmap.org/">OpenHistoricalMap</a> contributors',"help.attr.search":"Otsingut teostab","help.attr.software":"Tarkvara ja teegid","help.attr.leaflet":"Kaardimootor","help.attr.codemirror":"Redaktori mootor","help.attr.other_libs":"Teised teegid:","ffs.title":"Päringunõustaja","ffs.comments":"add query comments","ffs.placeholder":"otsing","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">Nõustaja</a> aitab sul koostada Overpass päringuid. Siin on näha mõned kasulikud näited:',"ffs.parse_error":"Vabandust, see otsing on arusaamatu.","ffs.parse_error_expl":'Tühikuid ja erimärke sisaldavate stringide puhul tuleb kasutada jutumärke ja mitu otsingufiltrit tuleb eraldada sobiva loogikatehte abil (<i>and</i> või <i>or</i>). Lisainfot võib leida <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">dokumentatsioonist</a>.',"ffs.typo":"Kas mõtlesid:","dialog.dismiss":"loobu","dialog.cancel":"loobu","dialog.save":"salvesta","dialog.save-local":"salvesta (kohalik)","dialog.save-osm":"salvesta openhistoricalmap.org lehele","dialog.delete":"kustuta","dialog.close":"sulge","dialog.done":"sobib","dialog.abort":"katkesta","dialog.reset":"Taasta vaikeseaded","dialog.repair_query":"paranda päring","dialog.continue_anyway":"jätka ikkagi","dialog.show_data":"kuva andmed","dialog.wizard_build":"loo päring","dialog.wizard_run":"loo ja käivita päring","dialog.delete_query.title":"Kustutada päring?","dialog.delete_query.expl":"Kas soovid tõesti kustutada järgneva päringu","dialog.delete_query.expl-osm":"Do you really want to delete the following synchronized query","error.query.title":"Päringu viga","error.query.expl":"An error occurred during the execution of the overpass query! This is what overpass API returned:","error.ajax.title":"Ajax-i viga","error.ajax.expl":"Viga overpass-päringu teostamisel!","error.mapcss.title":"MapCSS viga","error.mapcss.expl":"Vigane MapCSS stiilileht:","error.remote.title":"Kaugjuhtimise viga","error.remote.incompat":"Viga: mitteühilduv JOSM-i kaugjuhtimise versioon","error.remote.not_found":"Kaugjuhtimist ei leitud. :( Veendu, et JOSM töötaks ja oleks õigesti seadistatud","error.nominatim.title":"Nominatimi viga","error.nominatim.expl":"Ei leitud midagi järgmise nimega:","warning.browser.title":"Antud brauser ei ole toetatud :(","warning.browser.expl.1":'Brauser, mida praegu kasutad ei ole (tõenäoliselt) võimeline jooksutama (suuremat osa) antud rakendust. <small>See peab toetama <a href="https://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> ja <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a> funktsionaalsust.</small>',"warning.browser.expl.2":'Mõningate brauserite (nt Firefox ja Chrome) puhul peaksid lubama antud saidil küpsised ja/või "kohalikud andmed".',"warning.browser.expl.3":'Palun uuenda oma veebibrauser või kasuta rohkemate võimalustega brauserit! Rakendus on testitud ja töötab <a href="https://www.opera.com">Opera</a>, <a href="https://www.google.com/intl/de/chrome/browser/">Chrome</a> ja <a href="https://www.mozilla.org/de/firefox/">Firefox</a> viimaste veebibrauseritega. Teise võimalusena võid kasutada ikka veel <a href="https://overpass-api.de/query_form.html">Overpass_API päringuvormi</a>.',"warning.incomplete.title":"Puudulikud andmed","warning.incomplete.expl.1":"See päring ei andnud tulemuseks sõlmi. OHMis saavad ainult sõlmed omada koordinaate. Näiteks joont ei saa kuvada ilma selle sõlmedeta.","warning.incomplete.expl.2":'Kui see pole see, mida ootasid, siis võib <i>overpass turbo</i> aidata sul päringut parandada (automaatse lõpetada) valides allpool "paranda päring". Vastasel juhul võid aga jätkata avades andmed.',"warning.incomplete.not_again":"ära näita rohkem.","warning.incomplete.remote.expl.1":"Paistab, et see päring ei anna tulemuseks OSM andmeid XML vormingus koos metaandmetega. Ent JOHM redaktor nõuab, et need andmed oleksid antud vormingus.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> võib aidata sul seda päringut parandada, valides allpool "paranda päring".',"warning.share.long":"Hoiatus: see jagamislink on üsna pikk. See ei pruugi teatud juhtudel töötada.","warning.share.very_long":"Hoiatus: see jagamislink on väga pikk. On tõenäoline, et see ei tööta tavatingimustes (sirvikutes, veebiserverites). Kasuta ettevaatlikult!","warning.huge_data.title":"Palju andmeid","warning.huge_data.expl.1":"See päring andis tulemuseks suure hulga andmeid (umbes {{amount_txt}}).","warning.huge_data.expl.2":"Sinu brauseril võib selle kuvamine võtta kaua aega. Kas soovid jätkata?","waiter.processing_query":"päringu töötlemine...","waiter.export_as_image":"eksport pildina...","data_stats.loaded":"Laaditi","data_stats.displayed":"Kuvatakse","data_stats.nodes":"sõlmi","data_stats.ways":"jooni","data_stats.relations":"seosed","data_stats.areas":"alasid","data_stats.pois":"huvipunkte","data_stats.lines":"jooni","data_stats.polygons":"hulknurki","data_stats.request_duration":"Päringu tegemiseks kulus","data_stats.lag":"Andmete ajakohasus","data_stats.lag_areas":"Alade ajakohasus","data_stats.lag.expl":"maas OHM andmebaasist","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"See kaart on jäetud sihilikult tühjaks"};export{e as default};
