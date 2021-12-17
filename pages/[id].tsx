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
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import {
  highlightCode,
  createLoadPlugin,
  highlight,
} from "../lib/highlightCode";

const Blog = ({ article }) => {
  const { title, body, createdAt, updatedAt } = article;
  
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
  
  const loadPlugin = createLoadPlugin();
  loadPlugin("line-numbers");
  loadPlugin("diff-highlight");
  loadPlugin("autolinker");
  loadPlugin("inline-color");
  $("pre code").each((_, elm) => {
    const a = highlight($(elm).text(), {
      language: "javascript",
      lineNumbers: true,
    });
    $(elm).html(a);  
  });

  return {
    props: {  
      article: { ...article, body: $.html() },
    },
  };
};
