// import fetch from "node-fetch";
import { ARTICLE, CONTENTS } from "../@types/microCMS/schema";

export const getAllArticles = async (): Promise<CONTENTS> => {
  // const res = await fetch(new URL(`${process.env.API_KEY}/blog`));

  const res: Response = await fetch(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  });

  const data: Promise<CONTENTS> = await res.json();
  return data;
};
interface ArticleId {
  params: {
    id: string;
  };
}
export const getAllArticleIds = async (): Promise<ArticleId[]> => {
  const res: Response = await fetch(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  });
  const data = await res.json();
  const articles: ARTICLE[] = data.contents;
  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
};

export async function getArticleById(id: string): Promise<ARTICLE> {
  const res: Response = await fetch(`${process.env.API_URL}/blog/${id}`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY! },
  });

  const article: Promise<ARTICLE> = await res.json();
  return article;
}
