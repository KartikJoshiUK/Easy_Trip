import React from "react";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4  px-6 py-10">
      <h2 className="text-center text-4xl font-bold">FOLLOW US</h2>
      <div className="mt-5 flex items-center justify-center gap-5">
        <a className="group" href="#views">
          <BsInstagram className="text-4xl transition-all duration-150 group-hover:-translate-y-5 group-active:-translate-y-2" />
        </a>
        <a className="group" href="#">
          <BsFacebook className="text-4xl transition-all duration-150 group-hover:-translate-y-5 group-active:-translate-y-2" />
        </a>
        <a className="group" href="#">
          <BsPinterest className="text-4xl transition-all duration-150 group-hover:-translate-y-5 group-active:-translate-y-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
