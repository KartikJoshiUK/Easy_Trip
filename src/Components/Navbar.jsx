import { motion } from "framer-motion";
import "../cssfiles/nav.css";
import { useNavigate } from "react-router-dom";
import ContactForm from "./Contactus";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav fixed left-0 top-0 z-50 flex h-[50px] bg-black bg-opacity-50 md:flex-row ">
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="cursor-pointer text-[25px] font-bold"
        onClick={() => navigate("/")}
      >
        EasyTrip
      </motion.h2>
      <ul className="hidden md:flex ">
        <li className="ml-1">Explore</li>
        <li className="ml-1">WhatWeProvide</li>
        <ContactForm />
        <li className="ml-1">ContactUs</li>
      </ul>
      <div className="flex w-[300px] p-2">
        <button className="glass  ">Login</button>
        <button className="glass w-[100px] bg-red-600  ">Sign up</button>
      </div>
    </nav>
  );
};
