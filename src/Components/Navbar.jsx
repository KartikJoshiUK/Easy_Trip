import { createContext, useState } from "react";
import SideBar from "./SideBar";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
export const NavContext = createContext();

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav className="fixed left-0 top-0 z-30 flex h-[50px] w-full items-center justify-between bg-black bg-opacity-20 px-5">
      <NavContext.Provider value={{ showSidebar, setShowSidebar }}>
        <Link
          to={"/"}
          className="cursor-pointer text-[25px] font-bold text-white"
        >
          EasyTrip
        </Link>
        <ul className="hidden items-center justify-center gap-4 md:flex">
          <li className="text-gray-500 hover:text-white">
            <Link to={"#"}>Explore</Link>
          </li>
          <li className="text-gray-500 hover:text-white">
            <Link to={"#"}>WhatWeProvide</Link>
          </li>
          <li className="text-gray-500 hover:text-white">
            <Link to={"#"}>ContactUs</Link>
          </li>
        </ul>
        <div className="hidden gap-2 p-2 md:flex">
          <button className="rounded-lg bg-opacity-80  px-2 py-1 text-white backdrop-blur-sm hover:bg-gray-600">
            Login
          </button>
          <button className=" rounded-lg bg-red-600 bg-opacity-80 px-2 py-1 text-white backdrop-blur-sm hover:bg-red-500">
            Sign up
          </button>
        </div>
        <button
          className="z-50 p-1 text-white md:hidden"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        <SideBar />
      </NavContext.Provider>
    </nav>
  );
};
export default Navbar;
