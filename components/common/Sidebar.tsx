import { VFC } from "react";

const Sidebar: VFC = () => {
  const categoryList: string[] = [
    "TypeScript",
    "React",
    "Vue",
    "HTML",
    "SCSS",
    "CSS",
  ];
  console.log({ categoryList });
  return (
    <div className="p-2 w-250  hidden lg:block">
      <div className="p-3 rounded bg-gray-200">
        <h2 className="font-semibold">Category</h2>
        <ul>
          {categoryList.map((category, index) => {
            console.log(category);
            return (
              <li className="ml-2" key={index.toString()}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
