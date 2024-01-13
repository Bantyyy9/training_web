import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link
          style={{
            border: "1px solid red",
            color: "red",
            padding: ".5rem 3rem",
            borderRadius: "1rem",
          }}
          to="/"
        >
          Homepage
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
      </div>
    </div>
  );
};

export default Signup;
