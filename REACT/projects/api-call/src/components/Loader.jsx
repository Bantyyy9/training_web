import React, { useState } from "react";

const Loader = ({ user }) => {
  const [items, setItems] = useState([...new Array(10).fill(0)]);
  return (
    <div className="flex flex-col gap-4">
      {items.map((_, index) => {
        return user ? (
          <div key={index} className="flex items-center gap-1">
            <div className="h-8 w-8 rounded-full bg-slate-500 animate-pulse"></div>
            <div className="flex flex-1 flex-col gap-1">
              <span className="w-ful h-5 rounded-sm bg-slate-500 animate-pulse"></span>
              <span className="w-ful h-3 rounded-sm bg-slate-500 animate-pulse"></span>
            </div>
          </div>
        ) : (
          <div key={index} className="flex flex-col gap-1">
            <span className="w-ful h-3 rounded-sm bg-blue-300 animate-pulse"></span>
            <span className="w-ful h-8 rounded-sm bg-blue-300 animate-pulse"></span>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
