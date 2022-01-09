import axios, { AxiosResponse, AxiosError, Axios } from "axios";
import fetch from "node-fetch";
import { ARTICLE, CONTENTS } from "../@types/microCMS/schema";

export const getAllArticles = async (): Promise<CONTENTS> => {
  const res = await axios.get(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  });

  const { data }: { data: Promise<CONTENTS> } = res;
  return data;
};
interface ArticleId {
  params: {
    id: string;
  };
}
export const getAllArticleIds = async (): Promise<ArticleId[]> => {
  const res = await axios.get(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  });
  const articles: ARTICLE[] = res.data.contents;
  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
};

export async function getArticleById(id: string): Promise<ARTICLE> {
  let res: AxiosResponse<any, any>;
  try {
    res = await axios.get(`${process.env.API_URL}/blog/${id}`, {
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
    });
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.response?.data;
    }
  }
  const article: Promise<ARTICLE> = res!.data;
  return article;
}
