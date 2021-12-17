import fs from "fs";
import { JSDOM } from "jsdom";
import Prism from "prismjs";
import vm from "vm";



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

export const highlight = (
  code: string,
  {
    language = "none",
    lineNumbers = false,
  }: { language?: string; lineNumbers?: boolean } = {}
): string => {
  const { window } = new JSDOM("");
  const pre = window.document.createElement("pre");
  // const pre = window.document.getElementsByTagName("pre")[0];
  console.log({code})
  const codeElm = window.document.createElement("code");
  // const codeElm = window.document.getElementsByTagName("code")[0];
  pre.appendChild(codeElm);
  codeElm.textContent = code;
  codeElm.setAttribute(
    "class",
    [`language-${language}`]
      .concat(lineNumbers ? ["line-numbers"] : [])
      .join(" ")
  );
  Prism.highlightElement(codeElm);
  console.log("pre.outerHTML",pre.outerHTML)
  return pre.outerHTML;
};
