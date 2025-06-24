import React from "react";
import Navber from "../components/Navber";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[calc(100vh-150px)] relative">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Root;
