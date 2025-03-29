import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/images/logo.svg" alt="Logo" />
    </Link>
  );
};

export default Logo;
