import React, { useEffect, useLayoutEffect, useState } from "react";
import { fetchAllPosts } from "../utils/api";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("before effect");
  useEffect(() => {
    fetchAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  // }, []);

  console.log("after effect");
  return <div>{loading ? "Loading" : JSON.stringify(posts)}</div>;
};

export default Blogs;
