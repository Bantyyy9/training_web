import React from "react";
import { Link, useParams } from "react-router-dom";

const Post = ({ id, title, body }) => {
  const { userId } = useParams();
  return (
    <Link to={`/${userId}/posts/${id}`} className="p-2 hover:bg-amber-50">
      <h6 className="font-bold line-clamp-1">{title}</h6>
      <p className="text-xs line-clamp-2">{body}</p>
    </Link>
  );
};

export default Post;
