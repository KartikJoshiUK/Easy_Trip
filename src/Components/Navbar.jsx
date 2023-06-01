import { createContext, useState } from "react";
import SideBar from "./SideBar";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
export const NavContext = createContext();

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav className="fixed left-0 top-0 z-30 flex h-[50px] w-full items-center justify-between bg-black bg-opacity-20 px-5">
      <NavContext.Provider value={{ showSidebar, setShowSidebar }}>
        <h2 className="text-[25px] font-bold text-white">EasyTrip</h2>
        <ul className="hidden items-center justify-center gap-4 md:flex">
          <li className="text-gray-300 hover:text-white">Explore</li>
          <li className="text-gray-300 hover:text-white">WhatWeProvide</li>
          <li className="text-gray-300 hover:text-white">ContactUs</li>
        </ul>
        <div className="flex gap-2 p-2">
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
