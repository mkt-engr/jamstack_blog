import { VFC } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
interface Blog {
  imgSrc: string;
  title: string;
  abstract: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  thumbnail: string;
}
const Article: VFC<Blog> = (props) => {
  const { imgSrc, title, abstract, createdAt, updatedAt, body, thumbnail } =
    props;
  console.log({ thumbnail });
  const { url, height, width } = thumbnail;
  return (
    <article className="p-4 flex space-x-4 bg-gray-200 rounded shadow-md hover:shadow-lg transition-all transform translate-y-0 hover:-translate-y-px cursor-pointer">
      <Image
        src={url}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width={200}
        height={200}
      />
      <div className="">
        <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
          <h2 className="text-lg font-semibold text-black mb-0.5">{title}</h2>
        </div>
        <div className="">
          <h3>{abstract}</h3>
        </div>
        <div className="">
          <h3>Created At:{createdAt}</h3>
        </div>
        <div className="">
          <h3>Updated At:{updatedAt}</h3>
        </div>
        {/* <div
          className=""
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        ></div> */}
      </div>
    </article>
  );
};

export default Article;
