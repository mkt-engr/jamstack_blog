import { GetStaticPaths } from "next";
import React, { VFC } from "react";
import ArticleLayout from "../components/blog/ArticleLayout";
import { getAllArticleIds, getArticleById } from "../lib/articles";
import { formatYYYYMMDD } from "../lib/dayjs";
import { highlightByHighlightJs } from "../lib/highlightCode";
import "highlight.js/styles/hybrid.css";
import { ARTICLE } from "../@types/microCMS/schema";
import { useRouter } from "next/router";
import Layout from "../components/top/Layout";

interface Props {
  article: ARTICLE;
}
const Blog: VFC<Props> = ({ article }) => {
  const { title, body, createdAt, updatedAt } = article;

  return (
    <Layout title={title}>
      <div className="p-4 md:p-12 bg-white rounded">
        <div className="text-center text-4xl font-bold mb-2">{title}</div>
        <div className="space-x-2 text-right">
          <div className="">作成日 : {formatYYYYMMDD(createdAt)}</div>
          <div className="">更新日 : {formatYYYYMMDD(updatedAt)}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default Blog;

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleIds();
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

export const getStaticProps = async ({
  params,
}: ParamType): Promise<StaticProps> => {
  const article = await getArticleById(params.id);
  const body = highlightByHighlightJs(article.body);

  return {
    props: {
      article: { ...article, body },
    },
  };
};
