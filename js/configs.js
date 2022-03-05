export default {
  appname: "overpass-turbo",
  defaultServer: "https://overpass-api.openhistoricalmap.org/api/",
  suggestedServers: ["https://overpass-api.openhistoricalmap.org/api/"],
  vectorTileStyleUrl:
    "https://openhistoricalmap.github.io/map-styles/ohm_timeslider_tegola/tegola-ohm.json",
  vectorTileAttribution:
    "Historical vector tiles, OpenHistoricalMap.org</small>",
  defaultTiles: "//:0",
  suggestedTiles: [
    /* perhaps not useful to offer alternative tiles, as the OHM basemap includes full land/sea cover
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
    */
  ],
  defaultMapView: {
    lat: 0,
    lon: 0,
    zoom: 1
  },
  maxMapZoom: 20,
  short_url_service: "",
  html2canvas_use_proxy: false,
  // api key for osmnames geocoder, go to http://osmnames.org/api/ to get one if you run your own overpass instance
  osmnamesApiKey: "gtXyh2mBSaN5zWqqqQRh",
  // osmAuth configuration object (used for syncing saved queries). expects an osm-auth config object (min. the oauth_consumer_key and oauth_secret must be given), see https://github.com/osmlab/osm-auth#getting-keys
  osmAuth: null
};
