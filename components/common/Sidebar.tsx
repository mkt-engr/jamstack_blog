import { VFC } from "react";
const categoryList: string[] = [
  "TypeScript",
  "React",
  "Vue",
  "HTML",
  "SCSS",
  "CSS",
];

const Sidebar: VFC = () => {
  console.log({ categoryList });
  return (
    <div className="p-2 w-250  hidden lg:block">
      <div className="p-3 rounded bg-gray-300">
        <h2 className="font-semibold">Category</h2>
        <ul>
          {categoryList.map((category, index) => {
            console.log(category);
            return <li key={index.toString()}>{category}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
