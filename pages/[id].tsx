import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ArticleLayout from "../components/blog/ArticleLayout";
import { getAllArticleIds, getArticleById } from "../lib/articles";
import { formatYYYYMMDDdd } from "../lib/dayjs";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import Prism from "prismjs";

const Blog = ({ article }) => {
  const { title, body, createdAt, updatedAt } = article;
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
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
  console.log({ $ });
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  // const html = Prism.highlight(
  //   article.body,
  //   Prism.languages.javascript,
  //   "javascript"
  // );
  return {
    props: {
      // article,
      article: { ...article, body: $.html() },
    },
  };
};
