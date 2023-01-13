import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import attribution from "../assets/attribution.svg";
const Layout = () => {
  return (
    <main className="bg-darkBlue">
      <Navbar />
      <Outlet></Outlet>
      <footer className="min-w-full flex flex-col gap-2 p-4">
        <p className="text-gray-400	 mx-auto">Credits To:</p>
        <img
          className="w-[150px] mx-auto "
          alt="Attribution image to TMDB"
          src={attribution}
        />
      </footer>
    </main>
  );
};

export default Layout;
