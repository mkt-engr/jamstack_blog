import { VFC } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import { BsPersonCircle } from "react-icons/bs";
const Header: VFC = () => {
  return (
    <div className="px-36 py-1 flex bg-gray-300 mx-auto justify-center items-center">
      <Link href="/">
        <a href="">
          <h1 className={`${styles.logo}`}>Mkt Memo</h1>
        </a>
      </Link>
      <ul className="flex ml-auto space-x-16">
        <li>
          <Link href="/search">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="">
              <BsPersonCircle className="h-10 w-10" />
            </a>
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
