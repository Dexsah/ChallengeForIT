import React from "react";
import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/"
        className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-gray-300/80 font-uncial text-2xl flex justify-center items-center"
      >
        <img className="p-1" src="/img/scroll.png" alt="view all" />
      </Link>
      <Link
        to="/create"
        className="w-10 h-10 bg-gray-400 rounded-xl hover:bg-gray-300/80 font-uncial text-2xl flex justify-center items-center"
      >
        +
      </Link>
    </div>
  );
};
