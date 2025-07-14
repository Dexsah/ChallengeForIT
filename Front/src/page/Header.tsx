import React from "react";
import { ButtonHeader } from "../components/ButtonHeader";

export const Header = () => {
  return (
    <div className=" flex flex-col text-center w-[40%] border border-blue-300 bg-cyan-400/40 backdrop-blur-sm rounded-2xl">
      <h1 className="text-2xl my-4">Menú</h1>
      <div className="justify-center h-full flex gap-4 my-5 flex-col">
        <ButtonHeader route="/" title="Enciclopedia" />
        <ButtonHeader route="/create" title="Añadir Carta" />
      </div>
    </div>
  );
};
