import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getAllArticleIds, getArticleById } from "../lib/articles";

const Blog = ({ article }) => {
  return <div>{article.title}</div>;
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

  // console.log(article, "in [id].tsx ::getStaticProps");

  return {
    props: {
      article: article,
    },
  };
};
