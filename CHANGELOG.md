<!--## undeployed-->

## 2024-11-03

- Implement `nwr` shorthand in query wizard
- Display Git commit date in help/about
- Use modern build tools: vite, vitest
- Show shortcuts in tooltip
- Wizard: checkbox to include/exclude query comments
- Migrate to `@openstreetmap/id-tagging-schema`
- Migrate source code to TypeScript ([#606](https://github.com/tyrasd/overpass-turbo/pull/606))
- Retain query in URL when loading overpass-turbo ([#563](https://github.com/tyrasd/overpass-turbo/issues/563))
- Store query in URL when running it ([#585](https://github.com/tyrasd/overpass-turbo/issues/585))
- Trim `w=` URL parameter ([#609](https://github.com/tyrasd/overpass-turbo/issues/609))
- Support many [MapCSS label properties](https://wiki.openstreetmap.org/wiki/MapCSS/0.2#Label_properties) ([#627](https://github.com/tyrasd/overpass-turbo/pull/627))
  - `font-family`
  - `font-size`
  - `font-style`
  - `font-variant`
  - `font-weight`
  - `max-width`
  - `shield-color`
  - `shield-frame-color`
  - `shield-frame-width`
  - `text-color`
  - `text-decoration`
  - `text-halo-color`
  - `text-halo-radius`
  - `text-opacity`
  - `text-transform`
- Implement support for wildcard `*` type selector (to match any map feature)
- Make rendering of "small" features (i.e. the collapsing of feature geometries to a point marker if they would otherwise have very tiny dimensions at the current zoom level) customizable via a custom new mapcss statement `render: auto/native/point` ([#30](https://github.com/tyrasd/overpass-turbo/issues/30))
- (beta) Add a wizard-style dialog to auto-generate simple mapcss to style features based on one of two palettes (a qualitative and a sequential one), according to the values of a selectable OSM tag of the current result set

## 2022-01-09

- Show request duration in stats tooltip
- Adjust MapCSS without re-running query
- Rewrite UI to Bulma CSS
- Add button to reset settings
- Add confirmation for logout
- Add syntax highlighting for nw/nr/wr

## 2020-01-07

- Saved Queries: clarify which query to be deleted
- Add link to multi values wikidata
- Disable "locate me" button when loaded via http://
- Tag table: link \*:wikipedia tags
- Display Git version in help/about
- Coordinates in popup: add geo URI
- Add cs, gl, lv, zh-CN languages
- Always call JOSM over http
- Show exclamation mark in document title
- Display tag (and relation) count in the popup
- Export query with placeholders

## 2018-02-17

- Remember recently used overpass and background map tile servers in settings dialog
- Add new public overpass instance to list of available servers
- mapcss: allow filtering by meta attributes
- make `{{date}}` shortcut without further parameters return the current date
- bugfixes
- update external dependencies
- update translations

## 2017-06-25

- add possibility to sync (save/load) queries on your account on osm.org 😎
- many export tools now have a possibility to copy the data/content into the clipboard (additionally to saving/downloading as a file), thanks @simon04
- link to mapillary and wikimedia_commons content in popups
- fix regression: exporting map as png image now works again

## 2017-05-28

- update translations
- fix regression: mapcss text labels on polygons are now displayed again
- update osmtogeojson library (bugfixes, added handling for waterway relations)

## 2017-05-11

- activate Hungarian translation

## 2017-05-10

- add two new "export query as text" options: raw overpass turbo query (#292) and as (escaped) osm wiki template (#288)
- make exporting as GeoJSON, GPX, KML and raw OSM data faster by getting rid of the textareas that were used as fallbacks for old browsers without file download support
- bugfix: make eval statements in MapCSS work again
- bugfix: fix exporting of map as png image
- bugfix: load translations before starting to initialize the user interface
- update translations

## 2017-05-07

- bugfix: make exported GeoJSON return valid Feature objects #295

## 2017-05-04

- switch to a webpack-based build system, making further development easier. Thanks @simon04
- make exporting of complex GeoJSON geometries much faster
- update translations, activate Esperanto

## 2017-02-18

- switch to (newish) osmnames geocoder for map location search
- improvements to mapcss (better text label placement, improved eval statements)
- updated translations

## 2016-09-15

- make sure GPX output is well formated
- fix handling of mapcss [eval statements](http://wiki.openstreetmap.org/wiki/MapCSS/0.2/eval), closing XSS vector
- new translation: Portuguese
- update translations, presets, icons

## 2016-06-06

- add visual (warning) indicator if query results are very outdated
- add "build query" button to wizard dialog
- show fancy spinner animation in browser tab title while waiting for Overpass API
- partial mapcss and data statement support in "interactive map" exports
- enable small features rendering in "interactive map" exports
- add api to execute queries of an iframe-embedded map.html page
- activate Greek translation set
- add osmic icon set
- optimize layout also for portrait style monitors
- update translations, presets, icons
- update libraries (leaflet, osmtogeojson, togpx)

## 2015-05-18

- bugfix (htts everywhere issues)
- update translations, presets and icons

## 2015-04-23

- bugfixes
- updates to syntax highlighting, translations and presets

## 2015-02-07

- Wizard works better with non-ASCII strings
- MapCSS support for [line offsets](https://github.com/bbecquet/Leaflet.PolylineOffset)
- URL parameters (for example from short-urls) are dropped after page load
- many bugfixes
- update translations, presets and icon sets

## 2014-11-05

- upgrade osmtogeojson library (bugfixes, improve polygon-feature data)
- minor UI improvements
- update translations, presets and icon sets

## 2014-10-23

- support for Overpass "full" geometry output
- wizard, templates and example queries now produce OverpassQL queries
- new {{geocode*}} shortcuts instead of {{nominatim*}} ones with slightly altered syntax
- prevent error messages or popups from overflowing with too much content
- new languages: Norwegian, Taiwan Chinese, Polish
- bugfixes
- update translations, presets and icon sets

## 2014-09-08

- support for Overpass "center" and "bounds" geometry output
- wizard supports regex key searches via new `~"keyregex"~="valueregex"` syntax
- show currentness of Overpass areas in data stats tooltip (incl. improved date formatting)
- minor improvements to the wizard's query construction algorithm
- bugfixes
- update translations, presets and icon sets

## 2014-07-14

- activate Estonian translation
- bugfixes
- update translations and presets

## 2014-06-22

- bugfixes
- update translations

## 2014-06-06

- MapCSS: implemented text markers
- show additional data stats when hovering object counter box
- some UI improvements (better tooltips, toggle data overlay)
- bugixes in UI translations
- make more stuff configurable for custom installations
- updated some external libraries (leaflet, jQuery)

## 2014-05-25

- add export to [Level0](https://github.com/Zverik/Level0#readme) (OSM editor)
- improved query auto-repair (should less often kick in unnecessarily)
- bugfixes
- updated icon sets, translations, presets
- allow external URL shortening services in configs

## 2014-05-18

- remote control the query wizard via an [URL-parameter](http://wiki.openstreetmap.org/wiki/Overpass_turbo/Development#Wizard).
- wizard works around some Overpass API "specialities"
- better status messages during start-up
- don't load libraries from external CDN's (for faster startup, possibility to enable usage of page via https)

## 2014-05-08

- update translations & presets
- highlight new Overpass QL keywords
- fix exported links to geojson.io

## ~~2014-04-30~~

- activate new translations: Ukrainian, Slovenian, Brazilian
- update presets

## 2014-04-14

- update translations
- fix a bug with multiple overpass-turbo-statements in a single query
- other bugfixes

## 2014-03-19

- add hyperlinks to wikidata entries
- add hyperlinks to OSM user and changeset pages
- update translations
- update presets
- bump some library versions

## 2014-02-10

- activate Catalan translation
- bugfixes
- updated presets and translations

## 2014-01-26

- **intelligent wizard**: using iD's presets to construct queries from simple description of objects
- improved query-abort behaviour
- updated translations
- bugfixes

## 2014-01-02

- better zoom-to-location tool
- wizard: add "key is [not] null" and "key [not] like regex" expressions (aliases)
- wizard: allow colons in keys of key-value searches
- update osmtogeojson library to version 2.0.0 (exported geojson has polygons with proper winding order now)

## 2013-12-12

- **query builder wizard** :) [read more](https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard)
- new query shortcuts: `{{date:*}}` and `{{nominatim*:*}}` [read more](https://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries)
- activate map overscaling (+1 more zoomlevel) for easier inspection of very small features
- upgrade libraries (Leaflet 0.7, Maki 0.3, etc.)
- activate Spanish translation
- bugfixes

## 2013-11-05

- update tokml library for better KML export results

## 2013-11-02

- new export format: KML (based on [tokml](https://github.com/mapbox/tokml))
- improved startup with url-parameters: undoabe query loading, clever auto-zooming to data, handle empty values in templates, …
- more verbous GPX export (adds all tags as `<desc>` field)
- update library [osmtogeojson](https://github.com/tyrasd/osmtogeojson) / new spinn-off library [togpx](https://github.com/tyrasd/togpx)
- work around JOSM remote-control deficiencies
- bugfixes

## 2013-10-18

- split-off [osmtogeojson](https://github.com/tyrasd/osmtogeojson) as an external library/tool
- fix loading of templates with newlines in parameters

## 2013-10-06

- activate Italian translation
- usability improvements for autorepair feature

## 2013-09-27

- activated new translations: Russian, Vietnamese, Japanese, Dutch, Croation, French
- updated polygon detection heuristic
- bugfixes

## 2013-09-16

- new export mode: data (geoJSON) as gist including a link to geojson.io
- reworked i18n code (translations are now done via Transifex)
- add Danish translation
- improved multipolygon rendering
- lightened exported geoJSON (drop unnecessary flags)
- support for newest Overpass query features (e.g. global bbox)
- bugfixes, compability improvements, etc.

## 2013-08-07

- cleaned up help dialog
- improvements to compact stylesheet (mobile devices)
- implemented data statement
- upgraded libraries (e.g. leaflet 0.6)
- lots of bugfixes

## 2013-05-11

- implemented downloadable content (save as file) for exports (GeoJSON, GPX, raw data, PNG)
- added new "raw data" export (same as the data-tab, but with easy file save - see above)
- speed up for some export modes
- shiny new "powered by Overpass API" mark
- bugfixes

## 2013-04-29

- reworked export dialog
- export GeoJSON with flattened properties (see #14)
- bugfixes and UI improvements

## 2013-04-15

- MapCSS support :) Read more: http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS
- enabled an url-shortening service on http://overpass-turbo.eu
- new "as GPX" export
- some bugfixes and UI improvements

## 2013-03-24

- implemented a build system - should result in much faster startup :)
- better area-detection. See http://wiki.openstreetmap.org/wiki/Overpass_turbo/Polygon_Features
- improved URL and email formatting/linkification
- removed min-zoom level on the map

## 2013-03-21

- showing hyperlinks for http/https/ftp-URLs, email addresses and wikipedia entries
- added new "welcome" message for first time users
- slightly more robust template code

## 2013-03-02

- showing warning message for queries returning large amounts of data (>~ 1MB).
- better progress indicator: show checkmarks for past events; also: made it a little more responsive during lenghty calculations
- improved bbox-selector: hide if there is no use of {{bbox}} in the query, also: show manually selected bbox in "map view" info dialog
- support for standard lat/lon/zoom parameters (in addition to turbo specific params)
- added type-id template
- updated template descriptions
- fixed several compatibility issues and bugfixes

## 2013-02-10

- multipolygon rendering
- implemented "templates" as an alternative to permalinks for basic queries
- showing stats about number of elements loaded and displayed
- more complete polygon detection
- some internal code restructuring (new OSM4Leaflet and NoVanish classes)
- added map key to help
- bugfixes

## 2013-02-04

- display small features at low zoom like POIs
- i18n support (and translation to German)
- added "fullscreen" (wide) map view
- handle untagged nodes as POIs when they are member of at least 1 relation
- implemented first set of unit tests
- upgraded to CodeMirror 2.38
- bugfixes

## 2013-01-30

- resizable panels (editor/map)
- tooltips for map controls
- auto-repair also for "JOSM" export
- enabled "include current map state in shared link" by default
- upgrade to jquery 1.9.0 and jqueryUI 1.10.0
- bugfixes

## 2013-01-28

- implemented auto-repairing of queries with a possible lack of recurse statements
- upgrade to leaflet 0.5
- disabled "start at current location" by default
- added keyboard shortcuts for saving/loading and help
- added clear data overlay button
- added permalink to osm.org on export->map view
- bugfixes
- some internal code restructuring
- appname (for X-Requested-With headers) set to overpass-turbo

## 2013-01-24

- initial release
