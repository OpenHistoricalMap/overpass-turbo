// global i18n object
import $ from "jquery";

import en from "../locales/en.json";
import en_overrides from "../locales/overrides/en.json";
import settings from "./settings";

/**
 * OHM-specific strings. locales/*.json stay identical to upstream (Transifex);
 * locales/overrides/*.json hold only the strings OHM changes (translatewiki.net).
 */
const en_ohm: Record<string, string> = en_overrides;

/** the source language, used for keys a translation does not (yet) cover */
const en_td: Record<string, string> = {...en, ...en_ohm};

function browser_locale(): string {
  /* taken from https://github.com/maxogden/browser-locale by Max Ogden, BSD licensed */
  let lang: string;

  // navigator.userLanguage is IE only and thus missing from the DOM typings
  const nav = navigator as Navigator & {userLanguage?: string};
  if (nav.languages) {
    // chrome does not currently set navigator.language correctly https://code.google.com/p/chromium/issues/detail?id=101138
    // but it does set the first element of navigator.languages correctly
    lang = nav.languages[0];
  } else if (nav.userLanguage) {
    // IE only
    lang = nav.userLanguage;
  } else {
    // as of this writing the latest version of firefox + safari set this correctly
    lang = nav.language;
  }

  return lang;
}

const default_lng: Language = "en";
const languages = {
  // translations found in locale/*.json
  ast: "Asturian",
  be: "Belarusian",
  en: "English",
  "en-GB": "English (GB)",
  "en-US": "English (US)",
  ca: "Catalan",
  cs: "Czech",
  cy: "Welsh",
  da: "Danish",
  eo: "Esperanto",
  de: "German",
  el: "Greek",
  es: "Spanish",
  et: "Estonian",
  fr: "French",
  ga: "Irish",
  gl: "Galician",
  hr: "Croatian",
  hu: "Hungarian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  // lv: "Latvian",
  mr: "Marathi",
  nl: "Dutch",
  no: "Norwegian",
  pl: "Polish",
  pt: "Portuguese",
  "pt-BR": "Portuguese (Brazil)",
  ru: "Russian",
  sk: "Slovak",
  sl: "Slovenian",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
  "zh-CN": "Chinese (China)",
  "zh-Hans": "Chinese (Simplified)",
  "zh-TW": "Chinese (Taiwan)",
  "zh-Hant": "Chinese (Traditional)"
};

export type Language = keyof typeof languages;
const supported_lngs = Object.keys(languages) as Language[];

export default class i18n {
  // translated texts
  static td: Record<string, string> = {};

  static t(key: string) {
    return this.td[key] || en_td[key] || `/missing translation: ${key}/`;
  }

  static getSupportedLanguages() {
    return supported_lngs;
  }
  static getSupportedLanguagesDescriptions() {
    return languages;
  }
  static getLanguage(lng?: Language | string): Language {
    lng = lng || settings.ui_language;
    if (lng == "auto") {
      // get user agent's language
      try {
        lng = browser_locale().toLowerCase();
      } catch {}
      // hardcode some language fallbacks
      if (lng === "nb") lng = "no"; // Norwegian Bokmål
      // sanitize inconsistent use of lower and upper case spelling
      let parts;
      if ((parts = lng.match(/(.*)-(.*)/)))
        lng = `${parts[1]}-${parts[2].toUpperCase()}`;
      // fall back to generic language file if no country-specific i18n is found
      if (!(supported_lngs as string[]).includes(lng))
        lng = lng.replace(/-.*/, "");
    }
    // the result is validated against supported_lngs by the callers
    return lng as Language;
  }
  /**
   * Determines the language, fetches the language pack and translates the UI
   * @return <Promise>
   */
  static async translate(lng?: Language | string) {
    lng = this.getLanguage(lng);

    if (!(supported_lngs as string[]).includes(lng)) {
      console.log(
        `unsupported language: ${lng} switching back to: ${default_lng}`
      );
      lng = default_lng;
    }

    // load language pack
    let data;
    try {
      data = await import(`../locales/${lng}.json`);
    } catch (e) {
      console.log(`failed to load language file ${lng}`, e);
      return;
    }
    // OHM overrides for this language (optional file)
    let overrides: Record<string, string> = {};
    try {
      overrides = (await import(`../locales/overrides/${lng}.json`)).default;
    } catch {}
    // replace, don't merge: strings of a previously loaded language must
    // not survive as a stand-in for keys the new one does not cover.
    // OHM English goes over the upstream translation, so an untranslated
    // override shows the OHM text instead of the upstream (OSM) one.
    const {"@metadata": _meta, ...ohm} = overrides;
    this.td = {...data.default, ...en_ohm, ...ohm};
    this.translate_ui();
    // todo: nicer implementation
    return this.td;
  }
  static translate_ui(element?: string | HTMLElement) {
    // if a DOM object is provided, only translate that one, otherwise
    // look for all object with the class "t"
    const scope =
      typeof element === "string" ? $(element) : element ? $(element) : $(".t");
    scope.each((nr, element) => {
      // get translation term(s)
      const terms = $(element).attr("data-t")?.split(";") || [];
      for (const term of terms) {
        const [, , what, key] = term.match(/^(\[(.*)\])?(.*)$/);
        let val = this.t(key);
        const shortcut = $(element).attr("data-shortcut");
        if (shortcut) val += ` [${shortcut}]`;
        if (what === "html") {
          $(element).html(val);
        } else if (what !== undefined) {
          $(element).attr(what, val);
        } else {
          $(element).text(val);
        }
      }
    });
  }
}
