import React from "react";
import { Link } from "react-router-dom";

interface PropHeader {
  title: string;
  route: string;
}

export const ButtonHeader = ({ title, route }: PropHeader) => {
  return (
    <Link
      to={route}
      className=" hover:bg-cyan-400/10 cursor-pointer mx-[30%] text-center border-2 border-l-gray-400 border-t-gray-400 border-r-black border-b-black"
    >
      <p>{title}</p>
    </Link>
  );
};
