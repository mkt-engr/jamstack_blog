import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ArticleLayout from "../components/blog/ArticleLayout";
import { getAllArticleIds, getArticleById } from "../lib/articles";
import { formatYYYYMMDDdd } from "../lib/dayjs";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import Prism from "prismjs"; // step1
import "prismjs/themes/prism.css"; // step2

const Blog = ({ article }) => {
  const { title, body, createdAt, updatedAt } = article;
  React.useEffect(() => {
    console.log("1");
    Prism.highlightAll(); // step3
  });
  return (
    <ArticleLayout title={title}>
      <div className="p-4 md:p-12 bg-white rounded">
        <div className="block md:flex gap-10">
          <div className="">作成日 : {formatYYYYMMDDdd(createdAt)}</div>
          <div className="">更新日 : {formatYYYYMMDDdd(updatedAt)}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        ></div>
      </div>
    </ArticleLayout>
  );
};

export default Blog;

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleIds();
  // console.log({ paths });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleById(params.id);
  const $ = cheerio.load(article.body);
  //highlight.js
  // $("pre code").each((_, elm) => {
  //   const result = hljs.highlightAuto($(elm).text());
  //   $(elm).html(result.value);
  //   $(elm).addClass("hljs");
  // });

  //Prism.js
  // $("pre").each((_, elm) => {
  //   $(elm).addClass("language-javascript");
  // });
  // const html = Prism.highlight(
  //   article.body,
  //   Prism.languages.javascript,
  //   "javascript"
  // );

  // https://github.com/PrismJS/prism/blob/master/plugins/line-numbers/prism-line-numbers.js#L109
  var NEW_LINE_EXP = /\n(?!$)/g;
  var lineNumbersWrapper;

  Prism.hooks.add("after-tokenize", function (env) {
    var match = env.code.match(NEW_LINE_EXP);
    var linesNum = match ? match.length + 1 : 1;
    var lines = new Array(linesNum + 1).join("<span></span>");

    lineNumbersWrapper = `<span aria-hidden="true" class="line-numbers-rows">${lines}</span>`;
  });

  $("pre code").each((_, elm) => {
    // const result = hljs.highlightAuto($(elm).text());
    const a = Prism.highlight(
      $(elm).text(),
      Prism.languages.javascript,
      "javascript"
    );
    // $(elm).html(result.value);
    $(elm).html(a + lineNumbersWrapper);
    // $(elm).addClass("hljs");
  });
  return {
    props: {
      // article,
      article: { ...article, body: $.html() },
    },
  };
};
