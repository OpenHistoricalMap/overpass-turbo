import {readdirSync, readFileSync} from "node:fs";
import {resolve} from "node:path";
import {describe, expect, it} from "vite-plus/test";

// OHM keeps locales/*.json identical to upstream and puts its own strings in
// locales/overrides/*.json. If upstream renames or removes a key, the
// override stops applying silently, so check that every key still exists.
const load = (path: string): Record<string, string> =>
  JSON.parse(readFileSync(resolve(path), "utf-8"));

const en = load("locales/en.json");
const en_overrides = load("locales/overrides/en.json");

describe("locale overrides", () => {
  it("only override keys that exist upstream", () => {
    const missing = Object.keys(en_overrides).filter((k) => !(k in en));
    expect(missing).toEqual([]);
  });

  it("only translate keys that OHM overrides in English", () => {
    const dir = resolve("locales/overrides");
    for (const file of readdirSync(dir)) {
      const extra = Object.keys(load(`locales/overrides/${file}`)).filter(
        (k) => k !== "@metadata" && !(k in en_overrides)
      );
      expect(extra, file).toEqual([]);
    }
  });
});
