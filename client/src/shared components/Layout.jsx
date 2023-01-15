import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import attribution from "../assets/attribution.svg";
const Layout = () => {
  return (
    <main className="min-h-screen bg-darkBlue">
      <Navbar />
      <div className="w-full md:w-[85%] md:ml-auto md:mr-[5%]">
        <Outlet></Outlet>
        <footer className="min-w-full flex flex-col gap-2 p-4">
          <p className="text-gray-400	 mx-auto">Credits To:</p>
          <img
            className="w-[150px] mx-auto "
            alt="Attribution image to TMDB"
            src={attribution}
          />
        </footer>
      </div>
    </main>
  );
};

export default Layout;
