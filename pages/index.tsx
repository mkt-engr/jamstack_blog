import { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/top/Layout";
import Article from "../components/top/Article";
import { getAllArticles } from "../lib/articles";
import useSWR from "swr";
import { ARTICLE } from "../@types/microCMS/schema";
import { fetcher } from "../lib/swr";
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ staticArticles }) => {
  const { data: articles, mutate } = useSWR<ARTICLE[]>("/api/blog/", fetcher, {
    fallbackData: staticArticles,
  });

  useEffect(() => {
    //SWRで取得するデータを最新化する
    mutate();
  }, [mutate]);

  return (
    <Layout title="Mkt Memo">
      <div className="py-2 space-y-4">
        {articles?.map((article) => {
          return (
            <Link href={`/${article.id}`} key={article.id}>
              <a className="block">
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
    props: { staticArticles: data.contents },
    revalidate: 3,
  };
};
