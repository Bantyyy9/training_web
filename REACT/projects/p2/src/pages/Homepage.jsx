import React from "react";
import { Link } from "react-router-dom";
import PostsList from "../components/PostsList";

const Homepage = () => {
  return (
    <div className="max-w-2xl mx-auto p-5 lg:p-0 w-full">
      <PostsList />
    </div>
  );
};

export default Homepage;
