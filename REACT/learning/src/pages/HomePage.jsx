import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link
          style={{
            border: "1px solid red",
            color: "red",
            padding: ".5rem 3rem",
            borderRadius: "1rem",
          }}
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          style={{
            border: "1px solid red",
            color: "red",
            padding: ".5rem 3rem",
            borderRadius: "1rem",
          }}
          to="/about"
        >
          About
        </Link>
        <Link
          style={{
            border: "1px solid red",
            color: "red",
            padding: ".5rem 3rem",
            borderRadius: "1rem",
          }}
          to="/auth/login"
        >
          Login
        </Link>
        <Link
          style={{
            border: "1px solid red",
            color: "red",
            padding: ".5rem 3rem",
            borderRadius: "1rem",
          }}
          to="/auth/signup"
        >
          Signup
        </Link>
      </div>
      <div className="items">
        {[1, 2, 5, 0, 45].map((link) => (
          <Link to={`/blog/${link + 1}`} key={link}>
            Blog {link + 1}
          </Link>
        ))}
      </div>
      <div className="items">
        <Link to="/dashboard">Dashboard 1</Link>
        <Link to="/dashboard/rastaxarm/settings/">Dashboard 2</Link>
      </div>
    </div>
  );
};

export default HomePage;
