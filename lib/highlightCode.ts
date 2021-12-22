import fs from "fs";
import { JSDOM } from "jsdom";
import Prism from "prismjs";
import vm from "vm";
import cheerio from "cheerio";
import hljs from "highlight.js";

export const createLoadPlugin = () => {
  const { window } = new JSDOM("");
  window.Prism = Prism;
  const ctx = vm.createContext(window);

  return function load(plugin: string): void {
    const filename = require.resolve(
      `prismjs/plugins/${plugin}/prism-${plugin}`
    );
    const src = fs.readFileSync(filename, "utf-8");
    vm.runInContext(
      // language=JavaScript
      `
        try {
          const self = window;
          ${src};
        } catch (err) {
          console.error(err);
        }
      `,
      ctx
    );
  };
};

export const highlightByPrism = (
  code: string,
  {
    language = "none",
    lineNumbers = false,
  }: { language?: string; lineNumbers?: boolean } = {}
): string => {
  const { window } = new JSDOM("");
  const pre = window.document.createElement("pre");
  const codeElm = window.document.createElement("code");
  pre.appendChild(codeElm);
  codeElm.textContent = code;
  codeElm.setAttribute(
    "class",
    [`language-${language}`]
      .concat(lineNumbers ? ["line-numbers"] : [])
      .join(" ")
  );
  Prism.highlightElement(codeElm);
  return pre.outerHTML;
};

/**
 * シンタックスハイライトを行う
 *
 * @param content microCMSから受け取った記事
 * @returns <pre><code></code></pre>をハイライトしたDOM
 */
export const highlightByHighlightJs = (content: string) => {
  const $ = cheerio.load(content);

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  return $.html();
};
