import { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";
import User from "./User";

const Post = (props) => {
  return (
    <Link
      to={`/post/${props.id}`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7)15%, transparent), url(${props.image})`,
        objectFit: "cover",
        backgroundPosition: "top",
      }}
      className="bg-no-repeat overflow-hidden bg-cover h-[400px] md:h-[300px] w-full bg-red-500 rounded-md text-green-100 flex flex-col justify-between hover:scale-105 transition-transform duration-500"
    >
      <div className="bg-gradient-to-b from-black to-transparent">
        <div className="flex justify-between items-center p-5">
          <span className="text-xs bg-green-300 text-green-950 h-7 w-7 rounded-full grid place-items-center font-bold">
            {props.likes}
          </span>
          <User {...props.owner} />
        </div>
      </div>
      <div className="p-3 flex gap-1 flex-wrap">
        {props.tags.map((text) => (
          <Tag text={text} key={text} />
        ))}
      </div>
    </Link>
  );
};

export default Post;
