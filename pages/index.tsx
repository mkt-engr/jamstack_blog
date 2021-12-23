import { VFC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/top/Layout";
import Article from "../components/top/Article";
import { getAllArticles } from "../lib/articles";
import { ARTICLE } from "../@types/microCMS/schema";

interface Props {
  articles: ARTICLE[];
}

const Home: VFC<Props> = ({ articles }) => {
  return (
    <Layout>
      <div className="py-2 space-y-4">
        {articles?.map((article) => {
          return (
            <Link href={`/${article.id}`} key={article.id}>
              <a href="" className="block">
                <Article {...article} />
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;

interface Props {
  articles: ARTICLE[];
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getAllArticles();

  return {
    props: { articles: data.contents },
  };
};
