import React from "react";
import { Link } from "react-router";

const Header = () => {
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark");
  };
  return (
    <header className="py-4 flex items-center justify-between">
      <Link to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </Link>

      <section className="flex items-center gap-3">
        dropdown
        <hr className=" h-8 w-[0.0625rem] bg-appGray2" />
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="w-[2.75rem] h-[1.5rem] flex items-center bg-appGray1 px-1 dark:bg-appPurple border-none rounded-full dark:justify-end transition-all duration-500"
          >
            <span className="h-[.875rem] w-[.875rem] bg-appGray3 rounded-full"></span>
          </button>
          <img
            className="hidden dark:flex"
            src="/images/icon-moon-dark.svg"
            alt=""
          />
          <img className="dark:hidden" src="/images/icon-moon.svg" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
