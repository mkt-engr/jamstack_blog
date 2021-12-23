import { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Layout from "../components/top/Layout";
import Article from "../components/top/Article";
import { getAllArticles } from "../lib/articles";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ articles }) => {
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

export const getStaticProps = async () => {
  const data = await getAllArticles();

  return {
    props: { articles: data.contents },
  };
};
