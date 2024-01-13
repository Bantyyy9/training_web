import React, { useState } from "react";
import useTesting from "../hooks/useTesting";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import blogs from "../data/blogs";

const Blog = () => {
  const { count, update } = useTesting();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id === +blogId);

  return (
    <div>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.contents}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Homepage
          </button>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Blog;
