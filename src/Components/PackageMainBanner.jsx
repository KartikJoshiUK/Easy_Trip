import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PackageMainBanner = ({ image, title }) => {
  return (
    <div className="relative z-0 flex h-screen items-center justify-center bg-black">
      <h1 className="text-center text-6xl font-semibold text-white">
        Welcome to {title}
      </h1>
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        src={image}
        alt="banner-image"
      />
      <div className="absolute bottom-3 flex animate-bounce flex-col items-center text-white duration-300">
        <BsChevronDown />
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default PackageMainBanner;
