import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ARTICLE, CONTENTS } from "../@types/microCMS/schema";

/**
 * 全ての記事を取得する
 *
 * @returns 全ての記事
 */
export const getAllArticles = async (): Promise<CONTENTS> => {
  const options: AxiosRequestConfig = {
    url: `${process.env.API_URL}/blog`,
    method: "GET",
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  };

  const res = await axios(options);

  const { data }: { data: Promise<CONTENTS> } = res;
  return data;
};
interface ArticleId {
  params: {
    id: string;
  };
}
/**
 * 全ての記事のIDを取得する
 *
 * @returns 全ての記事のID
 */
export const getAllArticleIds = async (): Promise<ArticleId[]> => {
  const options: AxiosRequestConfig = {
    url: `${process.env.API_URL}/blog`,
    method: "GET",
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! }, //!をつけてnullでないことを明示する
  };

  const res = await axios(options);
  const articles: ARTICLE[] = res.data.contents;
  //IDだけを抽出して返却
  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
};

/**
 * IDをもとに記事を1件取得する
 *
 * @param id 記事のID
 * @returns 記事1件
 */
export async function getArticleById(id: string): Promise<ARTICLE> {
  const options: AxiosRequestConfig = {
    url: `${process.env.API_URL}/blog/${id}`,
    method: "GET",
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  };

  let res: AxiosResponse<ARTICLE>;

  try {
    res = await axios(options);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return e.response?.data;
    }
  }
  return res!.data;
}
