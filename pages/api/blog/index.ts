import type { NextApiRequest, NextApiResponse } from "next";
import { getAllArticles } from "../../../lib/articles";

const updateTopPage = async (req: NextApiRequest, res: NextApiResponse) => {
  // micro CMSからデータを取得する
  const data = await getAllArticles();
  res.status(200).json(data.contents);
};

export default updateTopPage;
