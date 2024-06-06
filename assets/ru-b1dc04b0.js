const e={"nav.run":"Старт","nav.run_tt":"выполнить этот запрос в Overpass API","nav.rerender_tt":"parse the MapCSS and rerender the map","nav.share":"Поделиться","nav.share_tt":"получить постоянную ссылку на этот запрос","nav.export":"Экспорт","nav.export_tt":"разные инструменты экспорта","nav.save":"Сохранить","nav.save_tt":"сохранить запрос","nav.load":"Загрузить","nav.load_tt":"открыть сохранённый запрос или пример","nav.wizard":"Помощник","nav.wizard_tt":"конструктор запросов","nav.settings":"Настройка","nav.settings_tt":"разные настройки","nav.help":"Справка","nav.help_tt":"справка, авторы и о программе","nav.logout":"Выйти","nav.logout_tt":"выйти из привязанного профиля OSM","tabs.map":"Карта","tabs.map_tt":"вид карты","tabs.data":"Данные","tabs.data_tt":"данные","map_controlls.zoom_to_data":"перейти к данным","map_controlls.localize_user":"найди меня!","map_controlls.localize_user_disabled":"disabled because overpass turbo has not been loaded via https://","map_controlls.select_bbox":"выбрать прямоугольник вручную","map_controlls.select_bbox_disabled":"отключено потому как запрос не требует bbox","map_controlls.toggle_wide_map":"карта во всю ширину","map_controlls.toggle_data":"переключить показ данных","map_controlls.suggest_zoom_to_data":"нажмите сюда для просмотра данных","settings.title":"Настройка","settings.section.general":"Общие настройки","settings.ui_lang":"Язык интерфейса","settings.server":"Сервер","settings.disable_autorepair":"Отключить сообщение об ошибке и автопочинке, когда Overpass API не вернул отображаемых данных.","settings.section.editor":"Редактор","settings.enable_rich_editor":"Включить продвинутый редактор кода","settings.enable_rich_editor_expl":"отключите на мобильных устройствах; требует перезагрузки страницы","settings.editor_width":"Ширина окна редактора","settings.editor_width_expl":"например, «400px», или ничего для значений по умолчанию","settings.section.map":"Карта","settings.tile_server":"Сервер тайлов","settings.tile_opacity":"Прозрачность тайлов","settings.tile_opacity_expl":"прозрачность фоновых тайлов: 0=полная … 1=непрозрачны","settings.show_crosshairs":"Показать перекрестье в центре карты.","settings.disable_poiomatic":"Не отображать мелкие объекты как POI.","settings.show_data_stats":"Показать статистику по загруженным и отображаемым данным.","settings.section.sharing":"Ссылки","settings.include_map_state":"Включить состояние карты в ссылки","settings.compression":"Сжатие","settings.section.export":"Экспорт","settings.export_image_scale":"Полоса масштаба на экспортируемых изображениях.","settings.export_image_attr":"Указание авторства на экспортируемых изображениях.","save.title":"Сохранить","save.enter_name":"Введите название для этого запроса","load.title":"Загрузить","load.delete_query":"удалить этот запрос","load.saved_queries-local":"Сохранённые запросы (локально)","load.saved_queries-osm":"Сохранённые запросы (openhistoricalmap.org)","load.saved_queries-osm-loading":"Загрузка сохранённых запросов с openhistoricalmap.org...","load.saved_queries-osm-error":"An error occurred while loading saved queries from openhistoricalmap.org :(","load.examples":"Примеры","load.no_saved_query":"нет сохранённых запросов","export.title":"Экспорт","export.download-error":"Экспорт — Ошибка","export.copy_to_clipboard":"Копировать текст в буфер обмена","export.copy_to_clipboard_success":"Экспорт — Успешно скопировано в буфер обмена","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> был успешно скопирован в буфер обмена.',"export.section.map":"Карта","export.as_png":'как <a id="export-image" href="">изображение png</a>',"export.as_interactive_map":'как <a id="export-interactive-map" href="">интерактивную карту</a>',"export.current_map_view":'текущий <a id="export-map-state" href="">вид карты</a>',"export.map_view_expl":"область, центр и т.п.","export.section.data":"Данные","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">download</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">copy</a></span></div>',"export.raw_data":"необработанные данные OHM","export.raw_interpreter":'сырые данные от <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'сохранить GeoJSON в <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Запрос","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">сокращённый запрос</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">запрос как есть</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OHM wiki as a OverpassTurboExample-Template">вики OHM</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":'преобразовать в <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'преобразовать в (<a id="export-convert-compact" href="" target="_blank" class="external">компактный</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"загрузить данные в редактор OHM:","export.geoJSON.title":"Экспорт — GeoJSON","export.geoJSON.expl":"Отображаемые данные в формате GeoJSON:","export.geoJSON.no_data":"Нет данных GeoJSON! Сначала запустите запрос.","export.geoJSON_gist.title":"Сохранено в gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Редактировать в geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Экспорт — GPX","export.GPX.expl":"Отображаемые данные в формате GPX:","export.GPX.no_data":"Нет данных GPX! Сначала запустите запрос.","export.KML.title":"Экспорт — KML","export.KML.expl":"Отображаемые данные в формате KML:","export.KML.no_data":"Нет данных KML! Сначала запустите запрос.","export.raw.title":"Экспорт — сырые данные","export.raw.no_data":"Нет сырых данных — сначала отправьте запрос.","export.map_view.title":"Текущий вид карты","export.map_view.permalink":"Ссылка","export.map_view.permalink_osm":"на openhistoricalmap.org","export.map_view.center":"Центр","export.map_view.center_expl":"шир, долг","export.map_view.bounds":"Границы","export.map_view.bounds_selection":"Границы (выбрать область вручную)","export.map_view.bounds_expl":"юг, запад, север, восток","export.map_view.zoom":"Масштаб","export.image.title":"Экспорт — Изображение","export.image.alt":"выгруженная карта","export.image.download":"Скачать","export.image.attribution_missing":"Обязательно укажите авторство тайлов и данных при распространении этой картинки!","share.title":"Поделиться","share.header":"Ссылка","share.copy_this_link":'Скопируйте <a href="" id="share_link_a">эту ссылку</a>, чтобы поделиться кодом:',"share.options":"Параметры","share.incl_map_state":"включить состояние отображаемой карты","share.run_immediately":"запустить запрос сразу после загрузки","help.title":"Справка","help.section.introduction":"Введение","help.intro.0":'Это <i>overpass turbo</i> — основанная на web утилита для фильтрации <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'С overpass turbo вы можете выполнять <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> запросы и анализировать результаты из OSM на интерактивной карте.',"help.intro.1b":'Встроенный <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">помощник</a>, создавать запросы с которым очень просто.',"help.intro.2":'Больше информации о <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> и как составлять <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">запросы Overpass</a> можно найти в вики OSM.',"help.section.queries":"Запросы Overpass","help.queries.expl":'Overpass API позволяет запрашивать данные OSM с вашими собственными критериями поиска. Для этой цели он имеет специально созданный <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL"> язык запросов</a>.',"help.intro.shortcuts":"В дополнение к стандартным запросам Overpass API можно использовать следующие удобные сокращения в overpass turbo:","help.intro.shortcuts.bbox":"значения границ отображаемой области карты","help.intro.shortcuts.center":"координаты центра карта","help.intro.shortcuts.date":"Строка в формате ISO 8601","help.intro.shortcuts.style":'задаёт <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">стили MapCSS</a>',"help.intro.shortcuts.custom":"Произвольные сокращения можно определить, поместив <i>{{shortcut=value}}</i> где-нибудь в тексте скрипта.","help.intro.shortcuts.more":'Дополнительные сочетания overpass-turbo, дополнительную информацию о вышеперечисленном и примеры использования можно найти в <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM вики</a>.',"help.section.ide":"IDE","help.ide.share.title":"Поделиться","help.ide.share.expl":"Можно отправить ссылку на ваш запрос кому-нибудь ещё. В меню <i>Поделиться</i> вы найдёте ссылку, которую можно отправить другу или опубликовать в сети. Заметим, что другие будут работать над собственными копиями запроса.","help.ide.save_load.title":"Сохранение и загрузка","help.ide.save_load.expl":"Вы можете сохранять и загружать запросы. Для начала, мы загрузили несколько демонстрационных запросов. Просмотрите их, чтобы понять возможности overpass.","help.ide.keyboard.title":"Клавиатурные сокращения:","help.ide.keyboard.run":"Отправить введённый запрос.","help.ide.keyboard.wizard":"Запустить мастер запросов.","help.ide.keyboard.load_save":"Загрузить (открыть) или сохранить запрос","help.ide.keyboard.help":"Открыть окно помощи.","help.section.key":"Легенда","help.key.example":"разные объекты карты","help.key.description":"Линии (ways) показываются жирными синими линиями, полигоны — жёлтыми областями с тонкой синей каймой, POI (точки с тегами) — жёлтыми кругами с синей каймой. Красные круги обозначают полигоны или линии, слишком малые для нормального отображения. Розовые линии или контуры обозначают объекты-члены загруженных отношений. Пунктирные линии свидетельствуют о неполной геометрии: скорее всего, были загружены не все точки объекта.","help.section.export":"Экспорт","help.export":'Инструменты <i>экспорта</i> содержат множество вариантов того, что можно сделать с запросом или полученными по нему данными.<br />Пункты, отмеченные символом <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span>, открывают внешние онлайн-инструменты.',"help.export.query_data.title":"Запрос / данные","help.export.query_data.expl":"This holds some things you can do with the raw query or data, like converting the query between the various query languages or exporting the data as geoJSON. A very useful option is the possibility to send the query to JOSM.","help.export.map.title":"Карта","help.export.map.expl":"Превратить текущий вид карты с данными в растровое изображение, (полноэкранную) интерактивную карту, или что-нибудь ещё.","help.section.about":"О приложении","help.about.maintained":"<i>overpass turbo</i> поддерживается Мартином Райфером (tyr.asd на gmail.com).","help.about.feedback.title":"Обратная связь, ошибки, пожелания","help.about.feedback":'Если у вас есть комментарии, сообщения об ошибках, или не хватает каких-то функций, воспользуйтесь <a href="https://github.com/tyrasd/overpass-turbo/issues">системой отзывов</a> на github, либо <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">страницей обсуждения</a> в вики OSM.',"help.about.source.title":"Исходный код","help.about.source":'<a href="https://github.com/tyrasd/overpass-turbo">Исходный код</a> этого сервиса доступен под <a href="LICENSE">лицензией MIT</a>.',"help.section.attribution":"Авторство","help.attr.data_sources":"Источники данных","help.attr.data":'Данные &copy; участники <a href="http://openstreetmap.org/">OpenStreetMap</a>, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">условия</a>)</span>',"help.attr.mining":"Обработка данных","help.attr.tiles":'Map tiles &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',"help.attr.search":"Поиск предоставлен","help.attr.software":"Программы и библиотеки","help.attr.leaflet":"Карта предоставлена","help.attr.codemirror":"Редактор на движке","help.attr.other_libs":"Другие библиотеки:","ffs.title":"Помощник по составлению запросов","ffs.comments":"add query comments","ffs.placeholder":"поиск","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">Помощник</a> поможет вам с созданием запросов Overpass. Вот несколько примеров:',"ffs.parse_error":"К сожалению этот запрос не распознан.","ffs.parse_error_expl":'Обратите внимание, что вы должны использовать кавычки для строк, в которых имеются пробелы или специальные символы, а множественные поисковые фильтры должны быть разделены правильными операторами  (<i>and</i> или <i>or</i>). Обратитесь к <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">документации</a> за более подробной информацией.',"ffs.typo":"Возможно, вы имели в виду:","dialog.dismiss":"закрыть","dialog.cancel":"отменить","dialog.save":"сохранить","dialog.save-local":"сохранить (локально)","dialog.save-osm":"сохранить на osm.org","dialog.delete":"удалить","dialog.close":"закрыть","dialog.done":"готово","dialog.abort":"прервать","dialog.reset":"сбросить","dialog.repair_query":"починить запрос","dialog.continue_anyway":"всё равно продолжить","dialog.show_data":"показать данные","dialog.wizard_build":"составить запрос","dialog.wizard_run":"Составить и запустить запрос","dialog.delete_query.title":"Удалить запрос?","dialog.delete_query.expl":"Действительно удалить этот запрос","dialog.delete_query.expl-osm":"Вы действительно хотите удалить следующий синхронизированный запрос?","error.query.title":"Ошибка запроса","error.query.expl":"An error occurred during the execution of the overpass query! This is what overpass API returned:","error.ajax.title":"Ошибка Ajax","error.ajax.expl":"An error occurred during the execution of the overpass query!","error.mapcss.title":"Ошибка MapCSS","error.mapcss.expl":"Некорректный стиль MapCSS:","error.remote.title":"Ошибка remote control","error.remote.incompat":"Ошибка: неподдерживаемая версия сервиса JOSM remote control","error.remote.not_found":'Произошла ошибка :( Чтобы решить проблему, запустите JOSM, включите "Удалённое управление" в настройках и нажмите "Старт" снова. Либо разберитесь с настройкой порта в вашей системе https://help.openstreetmap.org/questions/2208/how-do-i-enable-the-remote-control-in-josm Если и это не поможет - вы можете попробовать "экспорт" > "сырые данные"',"error.nominatim.title":"Ошибка в Nominatim","error.nominatim.expl":"Не найдено ничего с данным именем:","warning.browser.title":"Ваш браузер не поддерживается :(","warning.browser.expl.1":'Ваш браузер, скорее всего, не сможет запустить важные элементы этого приложения. <small>Он должен поддерживать <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> и <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":"Обратите внимание, что вам может потребоваться включить «cookies» и/или «локальные данные» в некоторых браузерах (например, в Firefox и Chrome).","warning.browser.expl.3":'Пожалуйста, обновите ваш браузер до более свежей версии, или установите другой. Сайт проверен в последних версиях <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a>. Кроме того, вы можете воспользоваться <a href="http://overpass-api.de/query_form.html">формой запроса к Overpass_API</a>.',"warning.incomplete.title":"Неполные данные","warning.incomplete.expl.1":"Этот запрос не вернул точек. В OSM только у точек есть координаты. Например, без информации о точках линию нельзя нарисовать на карте.","warning.incomplete.expl.2":"Если это не то, что вы ожидали, <i>overpass turbo</i> может помочь в починке (или автодополнении) запроса — нажмите «починить запрос» внизу. Или перейдите к данным.","warning.incomplete.not_again":"больше не показывать это сообщение.","warning.incomplete.remote.expl.1":"Похоже, этот запрос не вернёт данные OSM в формате XML с метаданными. Редакторы вроде JOSM требуют данных именно в таком формате.","warning.incomplete.remote.expl.2":"<i>overpass turbo</i> может помочь в починке запроса — нажмите «починить запрос» внизу.","warning.share.long":"Внимание: эта ссылка очень длинна. Она может не сработать в некоторых браузерах.","warning.share.very_long":"Внимание: эта ссылка очень длинна, и с большой вероятностью не сработает в обычных условиях (из-за браузеров или серверов). Используйте осторожно!","warning.huge_data.title":"Большие объёмы данных","warning.huge_data.expl.1":"Этот запрос вернул очень много данных (порядка {{amount_txt}}).","warning.huge_data.expl.2":"Вашему браузеру придётся поднапрячься, чтобы всё отобразить. Действительно продолжить?","waiter.processing_query":"обрабатываю запрос...","waiter.export_as_image":"сохраняю в картинку...","data_stats.loaded":"Загружено","data_stats.displayed":"Отображено","data_stats.nodes":"точки","data_stats.ways":"линии","data_stats.relations":"отношения","data_stats.areas":"области","data_stats.pois":"POI","data_stats.lines":"линии","data_stats.polygons":"полигоны","data_stats.request_duration":"Overpass request took","data_stats.lag":"Актуальность данных","data_stats.lag_areas":"Актуальность площадей","data_stats.lag.expl":"позже от основной базы OSM","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"Карта намеренно не содержит данных."};export{e as default};
