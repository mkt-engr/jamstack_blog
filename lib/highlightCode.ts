import cheerio from "cheerio";
import hljs from "highlight.js";

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
