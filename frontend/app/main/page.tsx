import Sidebar from "../../components/Sidebar";
import Home from "../../components/Home";
import Menubar from "../../components/Menubar";
import List from "../../components/List";
import React from "react";

const Main = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="bg-slate-100 border pl-5">
        <Home />
        <Menubar />
        <List />
      </div>
    </div>
  );
};

export default Main;
