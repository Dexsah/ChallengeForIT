import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PageMain = ({ children }: Props) => {
  return (
    <div className="p-5 w-[80rem] h-[50rem] overflow-y-auto rounded-2xl bg-[url('./img/woodset.png')] bg-cover">
      {children}
    </div>
  );
};
