import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between w-full max-w-2xl p-5 mx-auto border-b md:px-0">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <Link
      to="/"
      className="grid w-8 h-8 bg-green-500 rounded-full text-green-50 place-items-center"
    >
      L
    </Link>
  );
};

const allNavLinks = [
  {
    to: "/users",
    title: "Users",
  },
  {
    to: "/posts",
    title: "All the Posts",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5">
      {allNavLinks.map((link) => (
        <NavLink
          key={link.to}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to={link.to}
        >
          {link.title}
        </NavLink>
      ))}
      <button>Upload</button>
    </nav>
  );
};
