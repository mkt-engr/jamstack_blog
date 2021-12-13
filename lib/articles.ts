import fetch from "node-fetch";

export async function getAllArticles() {
  // const res = await fetch(new URL(`${process.env.API_KEY}/blog`));
  const res = await fetch(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  });
  console.log({ res }, "in getAllArticles");
  const data = await res.json();
  return data;
}

export async function getAllArticleIds() {
  const res = await fetch(`${process.env.API_URL}/blog`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  });
  const data = await res.json();
  const articles = data.contents;
  // console.log(articles, ":::::::::getAllArticleIds");
  return articles.map((article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });
}

export async function getArticleById(id: string) {
  // console.log({ id }, "in getArticleById");
  const res = await fetch(`${process.env.API_URL}/blog/${id}`, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  });
  const data = await res.json();
  return data;
}
