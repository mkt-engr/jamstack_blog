import { VFC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/top/Layout";
import Article from "../components/top/Article";

interface Blog {
  imgSrc: string;
  title: string;
  abstract: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  dummyBlogArticles: Blog[];
}
const Home: VFC<Props> = ({ dummyBlogArticles }) => {
  return (
    <Layout>
      <div className="p-2 space-y-4">
        {dummyBlogArticles.map((item, index) => {
          return <Article key={index.toString()} {...item} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps in index.tsx");
  const dummyBlogArticles: Blog[] = [
    {
      imgSrc: "https://picsum.photos/id/23/200/200",
      title: "Title1",
      abstract: "Abstract1",
      createdAt: "2021/12/01",
      updatedAt: "2021/12/02",
    },
    {
      imgSrc: "https://picsum.photos/id/75/200/200",
      title: "Title2",
      abstract: "Abstract2",
      createdAt: "2021/12/03",
      updatedAt: "2021/12/04",
    },
    {
      imgSrc: "https://picsum.photos/id/37/200/200",
      title: "Title3",
      abstract: "Abstract3",
      createdAt: "2021/12/05",
      updatedAt: "2021/12/06",
    },
    {
      imgSrc: "https://picsum.photos/id/45/200/200",
      title: "Title4",
      abstract: "Abstract4",
      createdAt: "2021/12/07",
      updatedAt: "2021/12/08",
    },
    {
      imgSrc: "https://picsum.photos/id/96/200/200",
      title: "Title5",
      abstract: "Abstract5",
      createdAt: "2021/12/09",
      updatedAt: "2021/12/10",
    },
  ];
  return {
    props: { dummyBlogArticles },
    revalidate: 1,
  };
};
