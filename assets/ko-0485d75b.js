const e={"nav.run":"실행","nav.run_tt":"Overpass API로 이 질의문을 실행합니다","nav.rerender_tt":"MapCSS를 분석한 후 지도를 다시 렌더링합니다","nav.share":"공유","nav.share_tt":"이 질의문으로 연결되는 영구 링크를 만듭니다","nav.export":"내보내기","nav.export_tt":"다양한 내보내기 도구","nav.save":"저장","nav.save_tt":"이 질의문을 저장합니다","nav.load":"불러오기","nav.load_tt":"저장된 질의문이나 예시를 불러옵니다","nav.wizard":"마법사","nav.wizard_tt":"질의문 생성기","nav.settings":"설정","nav.settings_tt":"다양한 설정","nav.help":"도움말","nav.help_tt":"도움말, 소개, 저작자 표기","nav.logout":"로그아웃","nav.logout_tt":"현재 동기화된 오픈스트리트맵 계정에서 로그아웃합니다","tabs.map":"지도","tabs.map_tt":"지도 보기","tabs.data":"데이터","tabs.data_tt":"데이터 보기","map_controlls.zoom_to_data":"데이터로 이동","map_controlls.localize_user":"현재 위치","map_controlls.localize_user_disabled":"https://를 통해 Overpass Turbo를 불러오지 않았으므로 비활성화되었습니다","map_controlls.select_bbox":"수동으로 경계 상자 설정하기","map_controlls.select_bbox_disabled":"현재 질의문에는 경계 상자가 필요하지 않으므로 비활성화되었습니다","map_controlls.toggle_wide_map":"지도 넓게/좁게 보기","map_controlls.toggle_data":"데이터 오버레이 켜기/끄기","map_controlls.suggest_zoom_to_data":"데이터를 보려면 여기를 누르세요","settings.title":"설정","settings.section.general":"일반 설정","settings.ui_lang":"UI 언어","settings.server":"서버","settings.disable_autorepair":"Overpass API가 지도에 표시되는 데이터를 반환하지 않으면 경고/자동 복구 메시지를 띄우지 않도록 합니다.","settings.section.editor":"편집기","settings.enable_rich_editor":"화려한 코드 편집기 활성화","settings.enable_rich_editor_expl":"모바일 기기에서는 비활성화됩니다. 효과를 적용하려면 페이지를 다시 불러와야 합니다.","settings.editor_width":"편집기의 폭","settings.editor_width_expl":'예시: "400px", 공백으로 두면 기본값으로 설정됩니다',"settings.section.map":"지도","settings.tile_server":"타일 서버","settings.tile_opacity":"타일 투명도","settings.tile_opacity_expl":"배경 타일의 투명도입니다. 0=투명, ..., 1=완전 불투명","settings.show_crosshairs":"지도 중심에 십자형 포인터를 표시합니다.","settings.disable_poiomatic":"작은 지물을 관심 지점(POI)으로 표시하지 않습니다.","settings.show_data_stats":"불러온 데이터 및 표시된 데이터와 관련한 통계를 표시합니다.","settings.section.sharing":"공유","settings.include_map_state":"공유 링크에 현재 지도의 상태를 포함하기","settings.compression":"압축","settings.section.export":"내보내기","settings.export_image_scale":"내보내는 이미지에 축척 막대를 표시합니다.","settings.export_image_attr":"내보내는 이미지에 저작자 표기를 합니다.","save.title":"저장","save.enter_name":"이 질의문의 이름을 입력하세요","load.title":"불러오기","load.delete_query":"이 질의문 삭제","load.saved_queries-local":"저장된 질의문(로컬)","load.saved_queries-osm":"저장된 질의문(osm.org)","load.saved_queries-osm-loading":"osm.org에 저장된 질의문을 불러오는 중...","load.saved_queries-osm-error":"osm.org에 저장된 질의문을 불러오는 중 오류가 발생했습니다 :(","load.examples":"예시","load.no_saved_query":"저장된 질의문 없음","export.title":"내보내기","export.download-error":"내보내기 - 오류","export.copy_to_clipboard":"이 텍스트를 클립보드에 복사","export.copy_to_clipboard_success":"내보내기 - 성공적으로 클립보드에 복사했습니다","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> 이(가) 성공적으로 클립보드에 복사되었습니다.',"export.section.map":"지도","export.as_png":'<a id="export-image" href="">png 이미지</a>로 내보내기',"export.as_interactive_map":'<a id="export-interactive-map" href="">반응형 지도</a>로 내보내기',"export.current_map_view":'현재 <a id="export-map-state" href="">지도 화면</a> 내보내기',"export.map_view_expl":"경계 상자, 가운데의 위치 등","export.section.data":"데이터","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">다운로드</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">복사</a></span></div>',"export.raw_data":"원본 OSM 데이터","export.raw_interpreter":'<a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>로 직접 얻은 원본 데이터',"export.save_geoJSON_gist":'GeoJSON을 <a id="export-geoJSON-gist" href="" class="external">gist</a>로 저장하기',"export.section.query":"질의문","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">독립 질의문</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">원본 질의문</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">오픈스트리트맵 위키</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> 원격 데이터 URL',"export.to_xml":'<a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>로 변환하기',"export.to_ql":' (<a id="export-convert-compact" href="" target="_blank" class="external">압축</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>로 변환하기',"export.editors":"데이터를 오픈스트리트맵 편집기로 불러오기:","export.geoJSON.title":"내보내기 - GeoJSON","export.geoJSON.expl":"현재 보이는 데이터를 GeoJSON으로 내보내기","export.geoJSON.no_data":"내보낼 GeoJSON 데이터가 없습니다! 먼저 질의문을 실행하세요.","export.geoJSON_gist.title":"gist로 저장됨","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"geojson.io에서 편집하기:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"내보내기 - GPX","export.GPX.expl":"현재 보이는 데이터를 GPX로 내보내기:","export.GPX.no_data":"내보낼 GPX 데이터가 없습니다! 먼저 질의문을 실행하세요.","export.KML.title":"내보내기 - KML","export.KML.expl":"현재 보이는 데이터를 KML로 내보내기:","export.KML.no_data":"내보낼 KML 데이터가 없습니다! 먼저 질의문을 실행하세요.","export.raw.title":"내보내기 - 원본 데이터","export.raw.no_data":"내보낼 원본 데이터가 없습니다! 먼저 질의문을 실행하세요.","export.map_view.title":"현재 지도 화면","export.map_view.permalink":"영구 링크","export.map_view.permalink_osm":"osm.org로의 링크","export.map_view.center":"가운데","export.map_view.center_expl":"위도, 경도","export.map_view.bounds":"경계","export.map_view.bounds_selection":"경계(수동으로 설정한 경계 상자)","export.map_view.bounds_expl":"남, 서, 북, 동","export.map_view.zoom":"배율","export.image.title":"내보내기 - 이미지","export.image.alt":"내보낸 지도","export.image.download":"다운로드","export.image.attribution_missing":"이 이미지를 배포할 때는 적절한 저작자 표기를 포함해야 합니다!","share.title":"공유","share.header":"영구 링크","share.copy_this_link":'현재 코드를 공유하려면 이 <a href="" id="share_link_a">링크</a>를 복사하세요:',"share.options":"옵션","share.incl_map_state":"현재 지도의 상태 포함하기","share.run_immediately":"지도를 불러온 후 즉각 이 질의문을 실행하기","help.title":"도움말","help.section.introduction":"사용법","help.intro.0":'<i>overpass turbo</i>는 웹 기반 for <a href="http://www.openstreetmap.org">오픈스트리트맵</a> 데이터 필터링 도구입니다.',"help.intro.1":'overpass turbo로 <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> 질의문을 실행하고 그 결과로 나온 오픈스트리트맵 데이터를 지도 위에 띄워 상호작용 및 분석할 수 있습니다.',"help.intro.1b":'질의문을 매우 쉽게 만들어 주는 <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">마법사</a>가 포함되어 있습니다.',"help.intro.2":'<a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a>에 관해 더 자세히 알고 싶으시거나 <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass 질의문</a>을 작성하는 방법을 알고 싶으시다면 오픈스트리트맵 위키를 참고하세요.',"help.section.queries":"Overpass 질의문","help.queries.expl":'Overpass API를 이용하면 직접 지정한 검색 기준에 따라 오픈스트리트맵 데이터를 질의할 수 있습니다. 이때 검색 기준을 지정하기 위해서 특별히 고안된 <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">질의문</a>을 사용합니다.',"help.intro.shortcuts":"일반적인 Overpass API 질의문 외에도 overpass turbo에서 아래와 같은 편리한 축약어를 사용할 수 있습니다.","help.intro.shortcuts.bbox":"현재 지도 화면의 경계 상자 좌표","help.intro.shortcuts.center":"지도 한가운데의 좌표","help.intro.shortcuts.date":"현재로부터 특정 과거까지의 시간 간격을 나타내는 ISO 8601 날짜 및 시간 문자열(예시: “24 hours”)","help.intro.shortcuts.style":'<a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS 스타일시트</a>를 정의합니다',"help.intro.shortcuts.custom":"모든 축약어는 스크립트의 어딘가에<i>{{축약어=값}}</i>을 넣어 정의할 수 있습니다.","help.intro.shortcuts.more":'더 많은 overpass turbo 축약어, 추가 정보, 사용례 등을 알고 싶으시다면 <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">오픈스트리트맵 위키</a>를 참고하세요.',"help.section.ide":"IDE","help.ide.share.title":"공유","help.ide.share.expl":"현재 작업 중인 질의문이 포함된 영구 링크를 다른 사용자에게 보낼 수 있습니다. 영구 링크는 <i>공유</i> 도구에서 만들 수 있으며 친구에게 또는 온라인 게시물로 보낼 수 있는 링크가 생성됩니다(링크를 받은 사용자는 별개의 질의문 복사본으로 작업합니다).","help.ide.save_load.title":"저장 및 불러오기","help.ide.save_load.expl":"질의문을 저장하고 불러올 수도 있습니다. 처음에는 몇 가지 예제 질의문이 미리 불러와져 있습니다. 예제 질의문을 직접 실행해서 overpass로 무엇을 할 수 있는지 한번 확인해 보세요.","help.ide.keyboard.title":"키보드 단축키:","help.ide.keyboard.run":"현재 질의문을 실행합니다.","help.ide.keyboard.wizard":"질의 마법사를 시작합니다.","help.ide.keyboard.load_save":"질의문을 불러오기(열기) / 저장합니다.","help.ide.keyboard.help":"도움말 창을 엽니다.","help.section.key":"지도 키","help.key.example":"다양한 지도 지물","help.key.description":"길은 굵은 파란색 선, 다각형은 얇은 파란색 윤곽선을 가진 노란색 영역, 관심 지점(POI, 태그가 있는 마디)은 얇은 파란색 윤곽선을 가진 노란색 원으로 표시됩니다. 빨간색 원은 너무 작아서 정상적으로 표시할 수 없는 다각형 또는 길을 나타냅니다. 분홍색 선 또는 윤곽선은 개체가 하나 이상의 (불러온) 관계의 일부임을 의미합니다. 점선은 길 또는 다각형이 완전히 불러와지지 않았음을 의미합니다(일부 마디를 불러오지 않았기 때문일 수 있습니다).","help.section.export":"내보내기","help.export":'<i>내보내기</i> 도구에는 질의문 및 질의문으로 불러온 데이터를 다루는 다양한 옵션이 있습니다.<br />외부(온라인) 도구에 의존하거나 외부 도구로 데이터를 내보내는 경우 <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> 표식이 뒤에 붙습니다.',"help.export.query_data.title":"질의문 / 데이터","help.export.query_data.expl":"내보내기 옵션에는 질의문을 다양한 질의어로 변환하거나 데이터를 GeoJSON으로 내보내는 등 원본 질의문 또는 데이터로 수행할 수 있는 몇 가지 작업이 포함되어 있습니다. JOSM에 질의문을 전송할 수 있는 기능은 매우 유용합니다.","help.export.map.title":"지도","help.export.map.expl":"데이터가 포함된 현재 지도 화면을 정적 png 이미지 또는 (전체 화면) 반응형 지도 등으로 변환합니다.","help.section.about":"소개","help.about.maintained":"<i>overpass turbo</i>는 Martin Raifer (tyr.asd at gmail.com)가 유지보수합니다.","help.about.feedback.title":"피드백, 버그 보고서, 기능 추가 요청","help.about.feedback":'피드백, 문제 보고서, 특정 기능을 추가해 달라는 요청 등을 보내고 싶으시다면 깃허브의 <a href="https://github.com/tyrasd/overpass-turbo/issues">문제 추적기(이슈 트래커)</a>나 오픈스트리트맵 위키의 <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">토론 문서</a>를 이용해 주세요.',"help.about.source.title":"소스 코드","help.about.source":'본 웹 사이트의 <a href="https://github.com/tyrasd/overpass-turbo">소스 코드</a>는 MIT <a href="LICENSE">라이선스</a>로 배포됩니다.',"help.section.attribution":"저작자 표기","help.attr.data_sources":"데이터 출처","help.attr.data":'데이터 &copy; <a href="http://openstreetmap.org/">오픈스트리트맵</a> 기여자들, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a>(<a href="http://www.openstreetmap.org/copyright">이용 약관</a>)</span>',"help.attr.mining":"데이터 추출(마이닝) 소프트웨어:","help.attr.tiles":'지도 타일 &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> 기여자',"help.attr.search":"검색 엔진 제공자:","help.attr.software":"소프트웨어 및 라이브러리","help.attr.leaflet":"지도 라이브러리: ","help.attr.codemirror":"편집기 라이브러리:","help.attr.other_libs":"기타 라이브러리: ","ffs.title":"질의 마법사","ffs.comments":"질의문 내용 추가하기","ffs.placeholder":"검색","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">마법사</a>로 Overpass 질의문을 손쉽게 만들 수 있습니다. 아래와 같이 입력하면 됩니다.',"ffs.parse_error":"죄송합니다. 검색어를 이해할 수 없습니다.","ffs.parse_error_expl":'공백이나 특수한 문자가 포함된 문자열을 입력할 때는 반드시 따옴표로 감싸 주어야 하며, 여러 검색 필터를 입력할 때는 반드시 적절한 논리 연산자(<i>and</i> 또는 <i>or</i>)로 필터를 분리해 주어야 합니다. 자세한 정보는 <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">설명 문서</a>를 참고하세요.',"ffs.typo":"혹시 다음과 같은 질의문을 원하셨나요?","dialog.dismiss":"무시","dialog.cancel":"취소","dialog.save":"저장","dialog.save-local":"저장(로컬)","dialog.save-osm":"osm.org에 저장","dialog.delete":"삭제","dialog.close":"닫기","dialog.done":"완료","dialog.abort":"중단","dialog.reset":"초기화","dialog.repair_query":"질의문 복구하기","dialog.continue_anyway":"그래도 계속하기","dialog.show_data":"데이터 표시하기","dialog.wizard_build":"질의문 구축하기","dialog.wizard_run":"질의문을 구축한 후 실행하기","dialog.delete_query.title":"질의문을 삭제하시겠습니까?","dialog.delete_query.expl":"정말로 다음 질의문을 삭제하시겠습니까?","dialog.delete_query.expl-osm":"정말로 동기화된 다음 질의문을 삭제하시겠습니까?","error.query.title":"질의 오류","error.query.expl":"Overpass 질의문을 실행하는 중 오류가 발생했습니다! 다음은 Overpass API가 반환한 내용입니다.","error.ajax.title":"Ajax 오류","error.ajax.expl":"Overpass 질의문을 실행하는 중 오류가 발생했습니다!","error.mapcss.title":"MapCSS 오류","error.mapcss.expl":"유효하지 않은 MapCSS 스타일시트:","error.remote.title":"원격 조종 오류","error.remote.incompat":"오류: 호환되지 않는 JOSM 원격 조종 버전입니다","error.remote.not_found":"원격 조종기를 찾을 수 없습니다. :( JOSM이 실행 중인지, 원격 조종 기능이 활성화되어 있는지 확인하세요.","error.nominatim.title":"Nominatim 오류","error.nominatim.expl":"다음 이름으로 아무것도 찾을 수 없습니다:","warning.browser.title":"지원하지 않는 브라우저입니다 :(","warning.browser.expl.1":'현재 사용 중인 브라우저는 이 애플리케이션(의 중요한 부분)을 구동하는 데 (거의) 적합하지 않습니다. <small><a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">웹 저장소 API(Web Storage API)</a>와 <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">교차 출처 자원 공유(CORS)</a> 기능을 지원하는 브라우저여야 합니다.</small>',"warning.browser.expl.2":"일부 브라우저(파이어폭스나 크롬 등)에서 이 사이트를 이용하려면 쿠키 또는 '로컬 데이터'를 활성화해야 할 수 있습니다.","warning.browser.expl.3":'브라우저를 보다 최신 버전으로 업그레이드하거나 적합한 브라우저로 바꿔 주세요! 본 웹 사이트는 <a href="http://www.opera.com">오페라</a>, <a href="http://www.google.com/intl/de/chrome/browser/">크롬</a>, <a href="http://www.mozilla.org/de/firefox/">파이어폭스</a> 최신 버전에서 테스트되었습니다. 아니면 <a href="http://overpass-api.de/query_form.html">Overpass_API 질의문 입력란</a>을 사용할 수 있습니다.',"warning.incomplete.title":"불완전한 데이터","warning.incomplete.expl.1":"이 질의는 아무 마디도 반환하지 않았습니다. 오픈스트리트맵에서는 마디에만 좌표가 부여됩니다. 따라서 마디를 갖고 있지 않은 길은 지도에 표시할 수 없습니다.","warning.incomplete.expl.2":"원하는 데이터를 얻지 못했다면 아래에 있는 '질의문 복구하기'를 선택하세요. 그러면 <i>overpass turbo</i>가 질의문을 복구(자동 완성)하는 일을 도와 줍니다. 복구를 원치 않는다면 현재 데이터로 작업을 계속할 수 있습니다.","warning.incomplete.not_again":"이 메시지를 다시 띄우지 않습니다.","warning.incomplete.remote.expl.1":"이 질의문은 OSM 데이터를 메타데이터가 포함된 XML 형식으로 반환하지 않는 것 같습니다. JOSM과 같은 편집기에서 데이터를 활용하려면 메타데이터가 포함된 XML 형식으로 데이터를 반환해야 합니다.","warning.incomplete.remote.expl.2":"원하는 데이터를 얻지 못했다면 아래에 있는 '질의문 복구하기'를 선택하세요. 그러면 <i>overpass turbo</i>가 질의문을 교정해 줍니다.","warning.share.long":"경고: 이 공유 링크는 꽤 깁니다. 특정 상황에서 링크가 작동하지 않을 수 있습니다.","warning.share.very_long":"경고: 이 공유 링크는 매우 깁니다. 일반적인 상황(브라우저, 웹 서버)에서 링크가 작동하지 않을 가능성이 높습니다. 주의해서 사용하세요!","warning.huge_data.title":"대용량 데이터","warning.huge_data.expl.1":"이 질의문은 많은 양의 데이터를 반환합니다(대략 {{amount_txt}}).","warning.huge_data.expl.2":"반환한 데이터를 화면에 표시하는 데 오랜 시간이 걸릴 수 있습니다. 정말로 계속하시겠습니까?","waiter.processing_query":"질의문을 처리하는 중...","waiter.export_as_image":"이미지로 내보내는 중...","data_stats.loaded":"불러옴","data_stats.displayed":"표시됨","data_stats.nodes":"마디","data_stats.ways":"길","data_stats.relations":"관계","data_stats.areas":"영역","data_stats.pois":"관심 지점","data_stats.lines":"선","data_stats.polygons":"다각형","data_stats.request_duration":"요청 시간","data_stats.lag":"데이터의 마지막 갱신 시각","data_stats.lag_areas":"영역의 마지막 갱신 시각","data_stats.lag.expl":"전(OSM 데이터베이스 본체 기준)","popup.tags":"태그","popup.metadata":"메타데이터","popup.coordinates":"좌표","popup.node":"마디","popup.nodes":"마디","popup.way":"길","popup.ways":"길","popup.relation":"관계","popup.relations":"관계","popup.incomplete_geometry":"경고: 불완전한 다각형(예: 일부 마디가 빠짐)","map.intentionally_blank":"이 지도는 반환된 데이터도 없음을 의미합니다."};export{e as default};
