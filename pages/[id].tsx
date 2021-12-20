import { GetStaticPaths, GetStaticProps } from "next";
import React, { VFC } from "react";
import ArticleLayout from "../components/blog/ArticleLayout";
import { getAllArticleIds, getArticleById } from "../lib/articles";
import { formatYYYYMMDDdd } from "../lib/dayjs";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { ARTICLE } from "../@types/microCMS/schema";
interface Props {
  article: ARTICLE;
}
const Blog: VFC<Props> = ({ article }) => {
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

interface StaticProps {
  props: {
    article: ARTICLE;
  };
}
interface ParamType {
  params: {
    id: string;
  };
}

export async function getStaticProps({
  params,
}: ParamType): Promise<StaticProps> {
  const article = await getArticleById(params.id);
  const $ = cheerio.load(article.body);

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      article: { ...article, body: $.html() },
    },
  };
}
