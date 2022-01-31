import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { getAllArticleIds, getArticleById } from "../lib/articles";
import { formatYYYYMMDD } from "../lib/dayjs";
import { highlightByHighlightJs } from "../lib/highlightCode";
import "highlight.js/styles/hybrid.css";
import Layout from "../components/top/Layout";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ article }) => {
  const router = useRouter();
  if (router.isFallback || !article) {
    return <div>Loading...</div>;
  }
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

// 静的生成のためのパスを指定する(ビルド時に実行)
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleIds();
  return { paths, fallback: true };
};

interface ParamType {
  params: {
    id: string;
  };
}

//params.idでダイナミックルートの値が取得できる([id].tsxの[id]の部分)
export const getStaticProps = async ({ params }: ParamType) => {
  //記事のIDを元に記事を取得(params.idのidは[id].tsxのidと対応している)
  const article = await getArticleById(params.id);

  //記事が取得できなかった場合はトップページへリダイレクトする
  if (!article) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //シンタックスハイライトをつける
  const body = highlightByHighlightJs(article.body);

  return {
    props: {
      article: { ...article, body },
    },
    revalidate: 1,
  };
};
