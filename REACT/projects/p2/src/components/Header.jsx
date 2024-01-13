import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between max-w-2xl mx-auto w-full p-5  md:px-0 border-b">
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
      className="bg-green-500 text-green-50 grid place-items-center h-8 w-8 rounded-full"
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
    <nav className="flex gap-5 items-center">
      {allNavLinks.map((link) => (
        <NavLink
          key={link.to}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          to={link.to}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};
