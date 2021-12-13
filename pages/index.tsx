import { VFC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/top/Layout";
import Article from "../components/top/Article";
import { getAllArticles } from "../lib/articles";
interface Blog {
  id: string;
  thumbnail: any;
  title: string;
  abstract: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  articles: Blog[];
}
const Home: VFC<Props> = ({ articles }) => {
  console.log({ articles }, "::::index.tsx ");
  return (
    <Layout>
      <div className="p-2 space-y-4">
        {articles?.map((item, index) => {
          return (
            <Link href={`/${item.id}`} key={item.id}>
              <a href="" className="block">
                <Article {...item} />
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllArticles();

  return {
    props: { articles: data.contents },
  };
};
