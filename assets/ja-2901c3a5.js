const e={"nav.run":"実行","nav.run_tt":"Overpass APIでこのクエリを実行","nav.rerender_tt":"MapCSSを解析し、地図表示に反映","nav.share":"共有","nav.share_tt":"このクエリ結果のパーマリンクを取得","nav.export":"エクスポート","nav.export_tt":"エクスポート形式を指定可能","nav.save":"保存","nav.save_tt":"クエリ保存","nav.load":"読み込み","nav.load_tt":"保存したクエリやサンプルの読み込み","nav.wizard":"ウィザード","nav.wizard_tt":"クエリビルダー","nav.settings":"設定","nav.settings_tt":"各種設定","nav.help":"ヘルプ","nav.help_tt":"ヘルプ / 概要 / 著作権表示","nav.logout":"ログアウト","nav.logout_tt":"現在同期中のOSMアカウントからログアウト","tabs.map":"地図","tabs.map_tt":"地図表示","tabs.data":"データ","tabs.data_tt":"データ表示","map_controlls.zoom_to_data":"データへズーム","map_controlls.localize_user":"表示を現在地へ移動","map_controlls.localize_user_disabled":"overpass turboが https:// で読み込まれていないため、無効化","map_controlls.select_bbox":"矩形範囲を手動で設定","map_controlls.select_bbox_disabled":"現在のクエリにbbox指定は不要のため、無効化しました","map_controlls.toggle_wide_map":"地図表示変更","map_controlls.toggle_data":"データ重ね合わせを非表示","map_controlls.suggest_zoom_to_data":"データを表示","settings.title":"設定","settings.section.general":"全般設定","settings.ui_lang":"利用言語","settings.server":"サーバ","settings.disable_autorepair":"Overpass APIから有効なデータが帰ってこなかった場合の警告表示やクエリの自動修正を無効化","settings.section.editor":"エディタ","settings.enable_rich_editor":"リッチ・コードエディタを有効化","settings.enable_rich_editor_expl":"モバイル機器では無効化します; ページの再読み込みが必要です","settings.editor_width":"エディタ表示幅","settings.editor_width_expl":'例: "400px"など。デフォルト値の場合は空白',"settings.section.map":"地図","settings.tile_server":"地図タイルサーバ","settings.tile_opacity":"タイルの透過度","settings.tile_opacity_expl":"背景地図タイルの透過度: 0=透明 … 1=表示","settings.show_crosshairs":"地図の中心点に十字を表示","settings.disable_poiomatic":"小さな地物をPOIとして表示しない","settings.show_data_stats":"表示中のデータについての情報を閲覧","settings.section.sharing":"共有","settings.include_map_state":"現在の地図表示をリンクに含める","settings.compression":"圧縮","settings.section.export":"エクスポート","settings.export_image_scale":"エクスポートした画像に縮尺を表示","settings.export_image_attr":"エクスポートした画像に著作権情報を表示","save.title":"保存","save.enter_name":"クエリに名称をつけてください","load.title":"読み込み","load.delete_query":"クエリを削除","load.saved_queries-local":"保存済みクエリ (ローカル)","load.saved_queries-osm":"保存済みクエリ (openhistoricalmap.org)","load.saved_queries-osm-loading":"openhistoricalmap.orgに保存したクエリを読み込み中...","load.saved_queries-osm-error":"openhistoricalmap.orgに保存したクエリの読み込みに失敗しました :(","load.examples":"例","load.no_saved_query":"保存済みのクエリがありません","export.title":"エクスポート","export.download-error":"エクスポート - エラー","export.copy_to_clipboard":"クリップボードにコピー","export.copy_to_clipboard_success":"エクスポート - クリップボードにコピーしました","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> がクリップボードにコピーされました。',"export.section.map":"地図","export.as_png":'<a id="export-image" href="">png 画像</a>形式',"export.as_interactive_map":'<a id="export-interactive-map" href="">interactive Map</a>形式',"export.current_map_view":'現在の<a id="export-map-state" href="">地図表示</a>',"export.map_view_expl":"範囲ボックス、中心点、その他。","export.section.data":"データ","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">ダウンロード</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">コピー</a></span></div>',"export.raw_data":"OHM生データ","export.raw_interpreter":'<a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>から抽出された生データ',"export.save_geoJSON_gist":'GeoJSONを <a id="export-geoJSON-gist" href="" class="external">gist</a> として保存',"export.section.query":"クエリ","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">スタンドアロンクエリ</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">生クエリ</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">OHMwiki</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> 外部サイトデータURL',"export.to_xml":'<a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>に変換',"export.to_ql":'<a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a> (<a id="export-convert-compact" href="" target="_blank" class="external">コンパクト</a>) へ変換',"export.editors":"OHMエディタでデータ読み込み","export.geoJSON.title":"エクスポート - GeoJSON","export.geoJSON.expl":"GeoJSON形式で表示中:","export.geoJSON.no_data":"GeoJSONデータがありません。先にまずクエリを実行してください。","export.geoJSON_gist.title":"gistとして保存","export.geoJSON_gist.gist":"Gist: ","export.geoJSON_gist.geojsonio":"geojson.ioで編集: ","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"エクスポート - GPX","export.GPX.expl":"表示中データのGPX形式: ","export.GPX.no_data":"取得済みのGPXデータがありません。先にまずクエリを実行してください。","export.KML.title":"エクスポート - KML","export.KML.expl":"表示中データのKML形式: ","export.KML.no_data":"取得済みのKMLデータがありません。先にまずクエリを実行してください。","export.raw.title":"エクスポート - 生データ","export.raw.no_data":"取得済みのデータがありません。先にまずクエリを実行してください。","export.map_view.title":"現在の地図表示","export.map_view.permalink":"パーマリンク","export.map_view.permalink_osm":"openhistoricalmap.orgで表示","export.map_view.center":"中心点","export.map_view.center_expl":"緯度, 経度","export.map_view.bounds":"領域","export.map_view.bounds_selection":"領域選択 (指定の矩形範囲)","export.map_view.bounds_expl":"南, 西, 北, 東","export.map_view.zoom":"ズーム","export.image.title":"エクスポート - 画像","export.image.alt":"エクスポートした地図","export.image.download":"ダウンロード","export.image.attribution_missing":"画像を配布する際には、適切な著作権表示が行われていることを確認してください！","share.title":"共有","share.header":"パーマリンク","share.copy_this_link":'現在のコードを共有するには<a href="" id="share_link_a">リンク</a>をコピーしてください: ',"share.options":"オプション","share.incl_map_state":"現在の地図表示を含める","share.run_immediately":"ページ読み込みと同時にクエリを実行","help.title":"ヘルプ","help.section.introduction":"イントロダクション","help.intro.0":'この <i>overpass turbo</i>は <a href="https://www.openhistoricalmap.org">OpenHistoricalMap</a>のデータをフィルタリングするウェブベースのツールです。',"help.intro.1":'overpass turboでは <a href="https://wiki.openstreetmap.org/wiki/OpenHistoricalMap/Overpass">Overpass API</a> クエリを使用し、抽出結果のOHMデータを地図上に表示させながら分析することが可能です。',"help.intro.1b":'クエリをとても簡単に作れる<a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">ウィザード</a>があります。',"help.intro.2":'<a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a>についての詳細と<a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpassクエリ</a>の記述法はOSM wikiで解説されています。',"help.section.queries":"Overpassクエリ","help.queries.expl":'Overpass APIでは検索式によってOHMデータをクエリできます。そのために特別に作られた<a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">クエリ言語</a>があります。',"help.intro.shortcuts":"普通の Overpass API クエリに加えて、 overpass turbo では以下のような手軽なショートカットを利用できます。","help.intro.shortcuts.bbox":"矩形範囲(bbox)は現在の地図表示範囲と同一です","help.intro.shortcuts.center":"地図中心点の座標","help.intro.shortcuts.date":'ISO8601 の日時書式での特定のタイムインターバル (例: "24時間")',"help.intro.shortcuts.style":'<a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSSスタイルシート</a>定義',"help.intro.shortcuts.custom":"独自に定義する省略記法は、スクリプト内で<i>{{shortcut=value}}</i>のように記載します。","help.intro.shortcuts.more":'overpass-turbo のショートカットや追加情報、クエリのサンプルなどは <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a> に記載されています。',"help.section.ide":"IDE","help.ide.share.title":"共有","help.ide.share.expl":"現在実行中のクエリを、そのままパーマリンクURLとして共有することができます。<i>共有</i>ツールを開くとリンクが表示されますので、友人に送付したり、Webに投稿したりすることが可能です。(クエリ自体はそれぞれの端末から実行されます)","help.ide.save_load.title":"保存と読み込み","help.ide.save_load.expl":"記述したクエリ自体の保存や読み込みも可能です。サンプルクエリがいくつか保存されていますので、overpassでどのようなことができるのか、参考にしてみてください。","help.ide.keyboard.title":"キーボードショートカット: ","help.ide.keyboard.run":"入力中のクエリを実行","help.ide.keyboard.wizard":"クエリウィザード起動","help.ide.keyboard.load_save":"クエリ保存/読み込み(open)","help.ide.keyboard.help":"ヘルプを表示","help.section.key":"地図中のキー情報","help.key.example":"様々な地物形状","help.key.description":"ウェイは青い太線、ポリゴンは青い縁取りの黄色線、POI(タグをもったノード)は薄い青の縁取りがされた黄色い円形で表示されます。通常の表示では小さすぎて見えづらいウェイやポリゴンは、赤色で表示されることがあります。ピンク色のラインは、少なくとも1つ以上のリレーションに所属していることを示します。ジオメトリの一部だけが読み込まれた状態のウェイやポリゴンの場合、表示は点線となります(たいていの場合、所属するノードの一部が読み込まれていません)","help.section.export":"エクスポート","help.export":'<i>エクスポート</i>ツールには、クエリ本体やクエリから呼び出されたデータを扱うための機能が格納されています。このアイコン<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span>がついたオプションは、外部サイト(オンライン)の機能をを利用しています。',"help.export.query_data.title":"クエリ / データ","help.export.query_data.expl":"クエリ文やデータに対して作業を行うことができます。例えば、クエリを別の言語に変換したり、データを geoJSON形式にエクスポートしたりすることができます。また、クエリ結果をJOSMへ送ることも可能です。","help.export.map.title":"地図","help.export.map.expl":"現在表示している範囲の地図データを、操作可能なウェブ地図(全画面)や、静的なpng画像などに変換します。","help.section.about":"概要","help.about.maintained":"<i>overpass turbo</i> のメンテナンスは Martin Raifer (tyr.asd at gmail.com) が行っています。","help.about.feedback.title":"フィードバック、バグレポート、機能追加要望","help.about.feedback":'フィードバックや問題点のレポート、特定の機能に関する質問は、githubの <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> を利用するか、 OSM-wiki の<a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">議論ページ</a>を利用ください。',"help.about.source.title":"ソースコード","help.about.source":'このアプリケーションの<a href="https://github.com/tyrasd/overpass-turbo">ソースコード</a>はMIT<a href="LICENSE">ライセンス</a>のもとで公開されています。',"help.section.attribution":"著作権表示","help.attr.data_sources":"データソース","help.attr.data":'Data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Terms</a>)</span>',"help.attr.mining":"Data mining by","help.attr.tiles":'Map tiles &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',"help.attr.search":"Search provided by","help.attr.software":"Software & Libraries","help.attr.leaflet":"Map powered by","help.attr.codemirror":"Editor powered by","help.attr.other_libs":"Other libraries:","ffs.title":"クエリウィザード","ffs.comments":"add query comments","ffs.placeholder":"検索","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">ウィザード</a>を使うことで、Overpassクエリの作成をより簡単に行うことができます。クエリのサンプルは以下のとおりです:',"ffs.parse_error":"すみません、検索内容を見なおしてみてください。","ffs.parse_error_expl":'検索語句にスペースや特殊記号が含まれている場合は、語句をクォーテーションで括る必要があります。また、複数のフィルタを同時に適用する適切なboolean型の演算子 (<i>and</i> や <i>or</i>)を使ってください。詳しい使い方は <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">ドキュメンテーション</a> を参照してください。',"ffs.typo":"もしかして:","dialog.dismiss":"了解","dialog.cancel":"キャンセル","dialog.save":"保存","dialog.save-local":"保存 (ローカル)","dialog.save-osm":"openhistoricalmap.orgに保存","dialog.delete":"削除","dialog.close":"閉じる","dialog.done":"完了","dialog.abort":"中止","dialog.reset":"リセット","dialog.repair_query":"クエリの修復","dialog.continue_anyway":"処理を続行","dialog.show_data":"データ表示","dialog.wizard_build":"クエリ生成","dialog.wizard_run":"クエリを作成して実行","dialog.delete_query.title":"クエリを削除しますか？","dialog.delete_query.expl":"以下のクエリを削除してよいでしょうか","dialog.delete_query.expl-osm":"以下の保存済みクエリを削除してよろしいですか？","error.query.title":"クエリエラー","error.query.expl":"overpassクエリ実行中にエラーが発生しました！overpass APIからの戻り値は以下となります: ","error.ajax.title":"AJAXエラー","error.ajax.expl":"overpassクエリ実行中にエラーが発生しました！","error.mapcss.title":"MapCSSエラー","error.mapcss.expl":"不正なMapCSSスタイルシート定義: ","error.remote.title":"遠隔操作エラー","error.remote.incompat":"エラー: JOSM遠隔操作バージョンが未対応","error.remote.not_found":"遠隔操作ができません :( JOSMが起動しており、遠隔操作機能がが有効化されていることを確認してください。","error.nominatim.title":"Nominatimエラー","error.nominatim.expl":"以下名称の場所はありませんでした: ","warning.browser.title":"お使いのブラウザには対応していません :(","warning.browser.expl.1":'お使いのブラウザではこのアプリケーションを利用するための機能が (おそらく) 無いようです。<small>アプリケーションを利用するには <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> および <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a> をサポートしている必要があります。</small>',"warning.browser.expl.2":'ブラウザによってはcookieを有効にし、"local Data"を許可する必要があるかもしれません (FirefoxやChromeなど)。',"warning.browser.expl.3":'ブラウザのバージョンを更新するか、別のブラウザをお試しください。現在動作が確認されているブラウザは<a href="http://www.opera.com">Opera</a>、<a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a>、および<a href="http://www.mozilla.org/de/firefox/">Firefox</a>です。あるいは<a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>を利用してみてください。',"warning.incomplete.title":"不完全なデータ","warning.incomplete.expl.1":"クエリ結果がありません。OHMで位置座標情報を持っているのはノードだけです。例えば、ウェイを表示するにはそのウェイを形成しているノードが必要となります。","warning.incomplete.expl.2":'検索結果に誤りがある場合、"クエリを修復"を選択することで <i>overpass turbo</i>は (自動的に) クエリの修復を試みます。もし不要の場合はそのまま続行することも可能です。',"warning.incomplete.not_again":"このメッセージを表示しない。","warning.incomplete.remote.expl.1":"クエリ結果のXML形式OSMデータにメタデータが含まれていないようです。JOHMなどのエディタで編集を行うにはメタデータが含まれている必要があります。","warning.incomplete.remote.expl.2":'"クエリの修復"を選択すると<i>overpass turbo</i>によって自動的にクエリの修正が行われます。',"warning.share.long":"警告: この共有リンクURLは長すぎます。環境によっては正しく処理できない場合があります。","warning.share.very_long":"警告: この共有リンクURLは長すぎます。通常の利用方法(ブラウザやWebサーバ)では処理に失敗する可能性があります。注意してお使いください。","warning.huge_data.title":"データ量超過","warning.huge_data.expl.1":"クエリ結果のデータが大きすぎます (約 {{amount_txt}})。","warning.huge_data.expl.2":"ブラウザでの処理に時間がかかっています。処理を続行しますか？","waiter.processing_query":"クエリ実行中...","waiter.export_as_image":"画像としてエクスポート","data_stats.loaded":"読み込み完了","data_stats.displayed":"表示中","data_stats.nodes":"ノード","data_stats.ways":"ウェイ","data_stats.relations":"リレーション","data_stats.areas":"エリア","data_stats.pois":"POI","data_stats.lines":"ライン","data_stats.polygons":"ポリゴン","data_stats.request_duration":"Overpass request took","data_stats.lag":"データの最新性","data_stats.lag_areas":"エリアの最新性","data_stats.lag.expl":"メインOHMデータベース経由","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"この地図表示は意図して空白になっています。"};export{e as default};
