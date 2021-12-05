import { VFC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/top/Layout";
import Article from "../components/blog/article";

interface Blog {
  imgSrc: string;
  title: string;
  abstract: string;
  createdAt: string;
  updatedAt: string;
}
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
];

const Home: VFC = () => {
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
