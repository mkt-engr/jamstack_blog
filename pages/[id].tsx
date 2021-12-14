import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ArticleLayout from "../components/blog/ArticleLayout";
import { getAllArticleIds, getArticleById } from "../lib/articles";

const Blog = ({ article }) => {
  const { title, body, createdAt, updatedAt } = article;
  return (
    <ArticleLayout title={title}>
      <div className="p-4 md:p-12 bg-white rounded">
        <div className="flex gap-10">
          <div className="">createdAt : {createdAt}</div>
          <div className="">updatedAt : {updatedAt}</div>
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
  return {
    props: {
      article: article,
    },
  };
};
