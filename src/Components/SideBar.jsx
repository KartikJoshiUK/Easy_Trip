import React, { useContext } from "react";
import { NavContext } from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { showSidebar, setShowSidebar } = useContext(NavContext);
  return (
    <motion.div
      className={`absolute top-0 z-40 flex h-[100vh] w-full flex-col items-center justify-center bg-black ${
        showSidebar ? "left-0 opacity-100" : "left-[100%] opacity-0"
      } gap-5 transition-all duration-300`}
    >
      <Link
        to={"/"}
        className="absolute top-14 text-[25px] font-bold text-white"
      >
        EasyTrip
      </Link>
      <ul className="flex flex-col gap-5 text-4xl text-gray-600  [&>li:hover]:text-white">
        <li
          onClick={() => setShowSidebar(false)}
          className="sidebar-link-before"
        >
          Explore
        </li>
        <li
          onClick={() => setShowSidebar(false)}
          className="sidebar-link-before"
        >
          Services
        </li>
        <li
          onClick={() => setShowSidebar(false)}
          className="sidebar-link-before"
        >
          ContactUs
        </li>
      </ul>
      <div className="flex w-full justify-center gap-2 p-2">
        <Link
          to={"/login"}
          className="w-[40%] rounded-lg bg-gray-800  bg-opacity-80 px-2 py-1 text-white backdrop-blur-sm hover:bg-gray-600"
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="w-[40%]  rounded-lg bg-red-600 bg-opacity-80 px-2 py-1 text-white backdrop-blur-sm hover:bg-red-500"
        >
          Sign up
        </Link>
      </div>
    </motion.div>
  );
};

export default SideBar;
