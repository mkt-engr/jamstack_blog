import { VFC } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { ARTICLE } from "../../@types/microCMS/schema";
import { formatYYYYMMDDdd } from "../../lib/dayjs";

type Props = ARTICLE;

const Article: VFC<Props> = (article) => {
  const { title, createdAt, updatedAt, thumbnail, abstract } = article;
  const { url, height, width } = thumbnail;

  return (
    <article className="p-2 sm:p-4 sm:flex block space-x-4 bg-gray-200 rounded shadow-md hover:shadow-lg transition-all transform translate-y-0 hover:-translate-y-px cursor-pointer text-center sm:text-left">
      <div className="mx-auto md:mx-0 sm:flex">
        <Image
          src={url}
          alt=""
          className="rounded-lg bg-gray-100"
          width={150}
          height={150}
          objectFit="cover"
          // layout="fill"
        />
      </div>
      <div className="flex-1 space-y-2">
        <div className="min-w-0 sm:pr-20_lg:pr-0_xl:pr-20">
          <h2 className="text-lg font-semibold text-black mb-0.5">{title}</h2>
        </div>
        <div className="">
          <h3>{}</h3>
        </div>
        <div className="sm:flex space-x-2 md:space-x-4">
          <div className="">
            <h3>作成日 : {formatYYYYMMDDdd(createdAt)}</h3>
          </div>
          <div className="">
            <h3>更新日 : {formatYYYYMMDDdd(updatedAt)}</h3>
          </div>
        </div>
        <div className="ellipsis">{abstract}</div>
      </div>
    </article>
  );
};

export default Article;
