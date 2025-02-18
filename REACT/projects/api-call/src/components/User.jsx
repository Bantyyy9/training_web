import React from "react";
import { Link } from "react-router-dom";

const User = ({ name, id, email }) => {
  const initialsNames = name?.split(" ");
  const initials = initialsNames[0]?.[0] + initialsNames[1]?.[0];

  const rand = () => {
    return Math.trunc(Math.random() * 256);
  };

  const randomBg = `rgb(${rand()} ${rand()} ${rand()})`;
  return (
    <Link
      to={`/${id}/posts`}
      className="flex items-center gap-2 hover:bg-amber-100 p-2"
    >
      <div
        style={{ background: randomBg }}
        className="h-8 w-8 flex items-center justify-center text-center rounded-full text-slate-800"
      >
        {initials}
      </div>
      <div className="flex gap-1 flex-col flex-1">
        <h5 className="font-bold line-clamp-1">{name}</h5>
        <span className="text-xs">{email?.toLowerCase()}</span>
      </div>
    </Link>
  );
};

export default User;
