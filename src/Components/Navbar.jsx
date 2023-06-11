import { motion } from "framer-motion";
import "../cssfiles/nav.css";
import ContactForm from "./Contactus";

export const Navbar = () => {
  return (
    <nav className="nav flex
     bg-opacity-20 h-[50px] md:flex-row m     z-50 fixed top-0 left-0 " >
        <motion.h2
         
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ type: "spring", stiffness: 100 }}
          className="font-bold text-[25px]">
            EasyTrip
            </motion.h2>
  <ul className="hidden md:flex ">
    <li className="ml-1">Explore</li>
    <li className="ml-1">WhatWeProvide</li>
 <ContactForm />
    {/* <li className="ml-1">ContactUs</li> */}
  </ul>
  <div className="flex w-[300px] p-2">
  <button className="glass  ">Login</button>
  <button className="glass bg-red-600 w-[100px]  ">Sign up</button>
  </div>
  
  </nav>
  
  )
}
