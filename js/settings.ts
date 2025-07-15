// Settings class
import _ from "lodash";

import configs from "./configs";

class Settings {
  // settings.define_setting
  coords_lat: number;
  coords_lon: number;
  coords_zoom: number;
  code: object;
  saves: object;
  server: string;
  customServers: string[];
  share_compression: string;
  share_include_pos: boolean;
  use_rich_editor: boolean;
  tile_server: string;
  customTiles: string[];
  enable_crosshairs: boolean;
  export_image_scale: boolean;
  export_image_attribution: boolean;
  background_opacity: number;
  no_autorepair: boolean;
  editor_width: string;
  ui_language: string;
  disable_poiomatic: boolean;
  show_data_stats: boolean;
  disable_warning_huge_data: boolean;

  // meta settings
  first_time_visit: boolean;
  prefix: string;
  settings_version: number;
  settings: Record<
    string,
    {
      type: string;
      preset: string | number | boolean | string[];
      version: number;
    }
  >;
  upgrade_callbacks: ((s: Settings) => void)[];
  version: number;

  constructor(namespace: string, version: number) {
    this.prefix = `${namespace}_`;
    this.settings_version = version;
    this.version = +localStorage.getItem(`${this.prefix}version`);
    this.settings = {};
    this.upgrade_callbacks = [];
  }

  // == public methods ==
  define_setting(
    name: string,
    type: string,
    preset: string | number | boolean | string[],
    version: number
  ) {
    this.settings[name] = {type: type, preset: preset, version: version};
  }
  define_upgrade_callback(version: number, fun: (s: Settings) => void) {
    this.upgrade_callbacks[version] = fun;
  }

  set(name: string, value: string) {
    if (
      value === undefined // use preset if no value is given
    )
      value = this.settings[name].preset;
    if (this.settings[name].type != "String") {
      // stringify all non-string values.
      value = JSON.stringify(value);
    }
    localStorage.setItem(this.prefix + name, value);
  }
  get(name: string) {
    // initialize new settings
    if (this.settings[name].version > this.version) this.set(name, undefined);
    // load the setting
    let value = localStorage.getItem(this.prefix + name);
    if (this.settings[name].type != "String") {
      // parse all non-string values.
      value = JSON.parse(value);
    }
    return value;
  }

  load() {
    // load all settings into the objects namespace
    for (const name in this.settings) {
      this[name] = this.get(name);
    }
    // version upgrade
    if (this.version == 0) this.first_time_visit = true;
    if (this.version < this.settings_version) {
      for (let v = this.version + 1; v <= this.settings_version; v++) {
        if (typeof this.upgrade_callbacks[v] == "function")
          this.upgrade_callbacks[v](this);
      }
      this.version = this.settings_version;
      localStorage.setItem(`${this.prefix}version`, this.version);
    }
  }
  save() {
    // save all settings from the objects namespace
    for (const name in this.settings) {
      this.set(name, this[name]);
    }
  }
  reset() {
    for (const name in this.settings) {
      localStorage.removeItem(this.prefix + name);
      delete this.settings[name];
    }
    localStorage.removeItem(`${this.prefix}version`);
  }
}

// examples
const examples = {
  "Theatres in 1975": {
    overpass: `
/*
 * This is an example Overpass query for 
 * OpenHistoricalMap. Try it out by pressing 
 * the Run button above, then "zoom to data" 
 * on the resulting map. You can find more 
 * examples using the Load button above.
 */
nwr["amenity"="theatre"]["start_date"](if:
  t["start_date"] < "1976" &&
  (!is_tag("end_date") || t["end_date"] >= "1975"));
  
out geom;`
  },
  "Oldest building in Ohio": {
    overpass: `
/*
 * This query returns the oldest mapped 
 * building in Ohio; that is, the building 
 * with the minimum start_date=* tag. It 
 * relies on the fact that you can sort 
 * ISO 8601 dates chronologically by sorting
 * them alphanumerically.
 */
 
// Get present-day Ohio as an area.
relation(id:2663622);
map_to_area->.ohio;

// Get buildings in Ohio with start dates.
wr["building"]["start_date"](area.ohio)->.buildings;

/* Only include buildings whose start dates
 * are as old as the oldest start date of 
 * any building in Ohio.
 */
wr.buildings(if: t["start_date"] ==
  lrs_min(buildings.set(t["start_date"])));

// Output the building geometry.
out geom;`
  },
  "Total railway distance in 1975": {
    overpass: `
/*
 * This query returns the sum total distance
 * of railroad tracks that existed in the 
 * year 1975 in meters. It returns a JSON
 * object, not a map.
 */

[out:json];

way["railway"]["start_date"](if:
  t["start_date"] < "1976" &&
  (!is_tag("end_date") || t["end_date"] >= "1975"));

make stats length=sum(length());
out;`
  },
  "Contemporaneous surrounding areas": {
    overpass: `
/*
 * When recounting a historical event or 
 * someone's biography, you typically need 
 * to qualify a place with the country, 
 * region, etc. that the place was in at the 
 * time, not where it's located in the 
 * present day. This query returns the areas 
 * that contained a specific coordinate pair 
 * on a specific date.
 */
 
// Convert the query point to an area.
is_in(50.92812,11.58791)->.a;

/*
 * Get all ways that intersect this area, but 
 * only if they existed in the same time 
 * period as the city of Jena. This relies on 
 * the fact that ISO 8601 dates sort 
 * lexicographically.
 */
way(pivot.a)(if: t["start_date"] >= "1975")[!"end_date"];

// Output their geometries.
out geom;

out ids geom(50.92785,11.58656,50.92855,11.58949);

/*
 * Get all relations that intersect this area, 
 * but only if they existed in the same time 
 * period as the city of Jena.
 */
relation(pivot.a)(if: t["start_date"] >= "1975")[!"end_date"];

// Output their geometries.
out geom;`
  },
  "Changes on this day in history": {
    overpass: `
/*
 * This query uses a regular expression to 
 * find features that began or ended on the 
 * current day in years past (here, we're 
 * using June 11th). The OpenHistoricalMap 
 * portal's "On this day in 
 * OpenHistoricalMap" feature curates some 
 * notable and interesting changes using 
 * this query.
 */
(
  nwr["start_date"~"-06-11"];
  nwr["end_date"~"-06-11"];
);

out geom;`
  },
  "Chronology relations with boundary geometries": {
    overpass: `
/*
 * type=chronology relations can be tricky to 
 * deal with, especially if they don't 
 * explicitly contain any geometry-related 
 * primitives, such as when they are relations 
 * that only have other relations as members. 
 * If you want to edit the data this search 
 * returns in JOSM, you cannot miss the meta 
 * reference, as the objects will have osmids, 
 * but no version information, which will 
 * block editing.
 *
 * This query will generate 2 warning messages 
 * in Overpass Turbo: the first is about a 
 * large dataset (select "Continue Anyway"), 
 * and the the second is about "Incomplete 
 * data." This second warning is about the 
 * fact that some (all, in this case) of the 
 * results have no supporting geometries. This
 * is fine. Select "Show Data" and then click 
 * on the "Data" button in the upper right 
 * corner of the web page UI.
 */
 
[out:xml];

/* 
 * Get chronology relations with other 
 * appropriate criteria.
 */
relation["type"="chronology"]["source:name"="Newberry Library Atlas of Historical County Boundaries"];

/*
 * Recurse down and get the members 
 * of each chronology.
 */
(._;>;);

/*
 * Output the osm object metadata - e.g., 
 * non-tag metadata - from the query, even
 * if no geometry is included.
 */
out meta;`
  },
  "Incomplete chronologies": {
    overpass: `
/*
 * A type=chronology relation represents a 
 * single feature as its geometry or tags 
 * change over time; each member represents 
 * a stage in the feature's evolution. A 
 * chronology relation can be used to 
 * indicate that the feature's creation or 
 * establishment predates the currently 
 * mapped stages. For example, a statue may 
 * have been created centuries ago in a 
 * different place than where it is today, 
 * but we haven't mapped its original 
 * location or don't even know it. This 
 * query returns the earliest stage of a 
 * chronology if the chronology's 
 * start_date=* tag doesn't match one of its 
 * stages' start_date=* tags:
 */

// Get chronology relations with start dates.
relation["type"="chronology"]["start_date"];

// Get the members of each chronology.
nwr(r)(if:
  /* 
   * Filter out all but the earliest stage. 
   * This assumes the stages are sorted 
   * chronologically within the relation.
   */
  lrs_in(id(), set(per_member(pos() == 1 ? ref() : 0))) &&
  /*
   * Filter out the chronology’s stages if 
   * the chronology’s start date matches one
   * of its stages’ start dates.
   */
  !lrs_in(t["start_date"], set(per_member(t["start_date"]))));

// Output the earliest stage.
out geom;`
  }
};
const examples_initial_example = "Theatres in 1975";

// global settings object
const settings = new Settings(
  configs.settingNamespace || configs.appname,
  39 // settings version number
);

export default settings;

// map coordinates
settings.define_setting("coords_lat", "Float", configs.defaultMapView.lat, 1);
settings.define_setting("coords_lon", "Float", configs.defaultMapView.lon, 1);
settings.define_setting(
  "coords_zoom",
  "Integer",
  configs.defaultMapView.zoom,
  1
);
// saves
settings.define_setting(
  "code",
  "Object",
  examples[examples_initial_example],
  1
);
settings.define_setting("saves", "Object", examples, 1);
// api server
settings.define_setting("server", "String", configs.defaultServer, 1);
settings.define_setting("customServers", "Array", [], 35);
// sharing options
settings.define_setting("share_compression", "String", "auto", 1);
settings.define_setting("share_include_pos", "Boolean", false, 1);
// code editor & map view
settings.define_setting("use_rich_editor", "Boolean", true, 1);
settings.define_setting("tile_server", "String", configs.defaultTiles, 1);
settings.define_setting("customTiles", "Array", [], 35);
settings.define_setting("enable_crosshairs", "Boolean", false, 1);
// export settings
settings.define_setting("export_image_scale", "Boolean", true, 1);
settings.define_setting("export_image_attribution", "Boolean", true, 1);
// background opacity
settings.define_setting("background_opacity", "Float", 1.0, 13);
// autorepair message on "no visible data"
settings.define_setting("no_autorepair", "Boolean", false, 16);
// resizable panels
settings.define_setting("editor_width", "String", "", 17);
// UI language
settings.define_setting("ui_language", "String", "auto", 19);
// disable poi-o-matic
settings.define_setting("disable_poiomatic", "boolean", false, 21);
// show data stats
settings.define_setting("show_data_stats", "boolean", true, 21);
// disable poi-o-matic
settings.define_setting("disable_warning_huge_data", "boolean", false, 39);

//settings.define_setting(,,,);

// upgrade callbacks
settings.define_upgrade_callback(12, (s) => {
  // migrate code and saved examples to new mustache style syntax
  function migrate(code) {
    code.overpass = code.overpass.replace(/\(bbox\)/g, "({{bbox}})");
    code.overpass = code.overpass.replace(
      /<bbox-query\/>/g,
      "<bbox-query {{bbox}}/>"
    );
    code.overpass = code.overpass.replace(
      /<coord-query\/>/g,
      "<coord-query {{center}}/>"
    );
    return code;
  }
  s.code = migrate(s.code);
  for (const ex in s.saves) {
    s.saves[ex] = migrate(s.saves[ex]);
  }
  s.save();
});
settings.define_upgrade_callback(18, (s) => {
  // enable "Include current map state in shared links" by default
  s.share_include_pos = true;
  s.save();
});
settings.define_upgrade_callback(20, (s) => {
  // update "Mountains in Area" example
  s.saves["Contemporaneous surrounding areas"] =
    examples["Contemporaneous surrounding areas"];
  s.save();
});
settings.define_upgrade_callback(22, (s) => {
  // categorize saved queries
  for (const q in s.saves) {
    if (examples[q]) s.saves[q].type = "example";
    else s.saves[q].type = "saved_query";
  }
  // define some templates
  s.saves["key"] = {
    type: "template",
    parameters: ["key"],
    overpass:
      '<!--\nthis query looks for nodes, ways and relations \nwith the given key.\n-->\n{{key=???}}\n<osm-script output="json">\n  <union>\n    <query type="node">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="way">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="relation">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n  </union>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
  };
  s.saves["key-type"] = {
    type: "template",
    parameters: ["key", "type"],
    overpass:
      '<!--\nthis query looks for nodes, ways or relations \nwith the given key.\n-->\n{{key=???}}\n{{type=???}}\n<osm-script output="json">\n  <query type="{{type}}">\n    <has-kv k="{{key}}"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
  };
  s.saves["key-value"] = {
    type: "template",
    parameters: ["key", "value"],
    overpass:
      '<!--\nthis query looks for nodes, ways and relations \nwith the given key/value combination.\n-->\n{{key=???}}\n{{value=???}}\n<osm-script output="json">\n  <union>\n    <query type="node">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="way">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="relation">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n  </union>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
  };
  s.saves["key-value-type"] = {
    type: "template",
    parameters: ["key", "value", "type"],
    overpass:
      '<!--\nthis query looks for nodes, ways or relations \nwith the given key/value combination.\n-->\n{{key=???}}\n{{value=???}}\n{{type=???}}\n<osm-script output="json">\n  <query type="{{type}}">\n    <has-kv k="{{key}}" v="{{value}}"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
  };
  s.save();
});
settings.define_upgrade_callback(23, (s) => {
  s.saves["type-id"] = {
    type: "template",
    parameters: ["type", "id"],
    overpass:
      '<!--\nthis query looks for a node, way or relation \nwith the given id.\n-->\n{{type=???}}\n{{id=???}}\n<osm-script output="json">\n  <id-query type="{{type}}" ref="{{id}}"/>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
  };
  s.save();
});
settings.define_upgrade_callback(24, (s) => {
  // categorize saved queries
  for (const q in s.saves) {
    if (!s.saves[q].type) s.saves[q].type = "saved_query";
  }
  s.save();
});
settings.define_upgrade_callback(25, (s) => {
  // upgrade template description text
  for (const q in s.saves) {
    if (s.saves[q].type == "template") {
      s.saves[q].overpass = s.saves[q].overpass.replace("<!--\nt", "<!--\nT");
      s.saves[q].overpass = s.saves[q].overpass.replace(
        "\n-->",
        "\nChoose your region and hit the Run button above!\n-->"
      );
    }
  }
  s.save();
});
settings.define_upgrade_callback(27, (s) => {
  // rename "List Areas" to "Where am I?"
  if (!s.saves["Total railway distance in 1975"]) {
    s.saves["Total railway distance in 1975"] = s.saves["List Areas"];
    delete s.saves["List Areas"];
  }
  // add Chronology relations example
  s.saves["Chronology relations with boundary geometries"] = {
    type: "example",
    overpass: examples["Chronology relations with boundary geometries"]
  };
  s.save();
  // add Incomplete chronologies example
  s.saves["Incomplete chronologies"] = {
    type: "example",
    overpass: examples["Incomplete chronologies"]
  };
  s.save();
});
settings.define_upgrade_callback(28, (s) => {
  // generalize URLs to not explicitly use http protocol
  s.server = s.server.replace(/^http:\/\//, "//");
  s.tile_server = s.tile_server.replace(/^http:\/\//, "//");
  s.save();
});
settings.define_upgrade_callback(29, (s) => {
  // convert templates to wizard-syntax
  _.each(s.saves, (save, name) => {
    if (save.type !== "template") return;
    switch (name) {
      case "key":
        save.wizard = "{{key}}=*";
        break;
      case "key-type":
        save.wizard = "{{key}}=* and type:{{type}}";
        break;
      case "key-value":
        save.wizard = "{{key}}={{value}}";
        break;
      case "key-value-type":
        save.wizard = "{{key}}={{value}} and type:{{type}}";
        break;
      case "type-id":
        save.wizard = "type:{{type}} and id:{{id}} global";
        break;
      default:
        return;
    }
    delete save.overpass;
  });
  s.save();
});

settings.define_upgrade_callback(30, (s) => {
  // add comments for templates
  const chooseAndRun = "\nChoose your region and hit the Run button above!";
  _.each(s.saves, (save, name) => {
    if (save.type !== "template") return;
    switch (name) {
      case "key":
        save.comment =
          "This query looks for nodes, ways and relations \nwith the given key.";
        save.comment += chooseAndRun;
        break;
      case "key-type":
        save.comment =
          "This query looks for nodes, ways or relations \nwith the given key.";
        save.comment += chooseAndRun;
        break;
      case "key-value":
        save.comment =
          "This query looks for nodes, ways and relations \nwith the given key/value combination.";
        save.comment += chooseAndRun;
        break;
      case "key-value-type":
        save.comment =
          "This query looks for nodes, ways or relations \nwith the given key/value combination.";
        save.comment += chooseAndRun;
        break;
      case "type-id":
        save.comment =
          "This query looks for a node, way or relation \nwith the given id.";
        save.comment += "\nTo execute, hit the Run button above!";
        break;
      default:
        return;
    }
    delete save.overpass;
  });
  s.save();
});

settings.define_upgrade_callback(31, (s) => {
  // rewrite examples in OverpassQL
  _.each(s.saves, (save, name) => {
    if (save.type !== "example") return;
    switch (name) {
      case "Theatres in 1975":
      case "Oldest building in Ohio":
      case "Contemporaneous surrounding areas":
      case "Changes on this day in history":
      case "Where am I?":
      case "Chronology relations with boundary geometries":
      case "Incomplete chronologies":
        save.overpass = examples[name].overpass;
        break;
      default:
        return;
    }
  });
  delete s.saves["Theatres in 1975 (Overpass QL)"];
  s.save();
});

settings.define_upgrade_callback(32, (s) => {
  // fix typo in query definition
  s.saves["Chronology relations with boundary geometries"].overpass = s.saves[
    "Chronology relations with boundary geometries"
  ].overpass.replace("<;", ">;");
  s.save();
});

settings.define_upgrade_callback(33, (s) => {
  s.saves["Attic date query"] = {
    type: "example",
    overpass: [
      "/* This query loads all objects as of 2016-01-01 */",
      '[date:"2016-01-01T00:00:00Z"]',
      "(",
      "  node({{bbox}});",
      "  way({{bbox}});",
      "  relation({{bbox}});",
      ");",
      "out body;",
      ">;",
      "out skel qt;"
    ].join("\n")
  };
  s.save();
});

settings.define_upgrade_callback(34, (s) => {
  s.saves["Attic date query"].overpass = s.saves[
    "Attic date query"
  ].overpass.replace('00:00Z"]\n', '00:00Z"];\n');
});

settings.define_upgrade_callback(36, (s) => {
  s.saves["Oldest building in Ohio"].overpass = s.saves[
    "Oldest building in Ohio"
  ].overpass.replace("->.cr", "");
});
settings.define_upgrade_callback(37, (s) => {
  // Update the Rambler API endpoint
  s.server = s.server.replace(
    /overpass\.osm\.rambler\.ru/,
    "overpass.openstreetmap.ru"
  );
  s.save();
});

settings.define_upgrade_callback(38, (s) => {
  s.tile_server = s.tile_server.replace(
    /\{s\}\.tile\.openstreetmap\.org/,
    "tile.openstreetmap.org"
  );
});
