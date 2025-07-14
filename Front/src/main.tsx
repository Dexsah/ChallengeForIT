import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link } from "react-router-dom";
import "./index.css";
import { HeaderNav } from "./components/HeaderNav";
import { CreateTask } from "./page/Create-task";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-[url('./img/bgwood.jpg')] bg-cover bg-center min-h-screen w-full flex justify-center items-center">
        <div className="flex flex-row items-start gap-5">
          <HeaderNav />
          <App/>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
