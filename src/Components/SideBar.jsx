import React, { useContext } from "react";
import { NavContext } from "./Navbar";
import { motion } from "framer-motion";
const SideBar = () => {
  const { showSidebar, setShowSidebar } = useContext(NavContext);
  return (
    <motion.div
      className={`absolute top-0 z-40 flex h-[100vh] w-full items-center justify-center bg-black ${
        showSidebar ? "left-0 opacity-100" : "left-[100%] opacity-0"
      } transition-all duration-300`}
    >
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
    </motion.div>
  );
};

export default SideBar;
