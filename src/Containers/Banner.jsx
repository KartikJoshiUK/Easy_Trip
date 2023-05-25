import React from "react";
import bannerBgImage from "..//assets/home-banner-1.jpg";
const Banner = () => {
  return (
    <div className="relative flex h-[100vh] items-center justify-center p-10 lg:p-52">
      {/* INFORMATION */}
      <div className="mt-[10vh] flex min-h-[50%] flex-col items-center gap-8 p-6 text-white backdrop-blur-sm md:gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-center font-Hinglish text-5xl font-bold lg:text-7xl">
            Welcome to India
          </h1>
          <p className="text-md text-center lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ullam ab corporis.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 text-center text-gray-200 md:flex-row md:text-left">
          <div className="flex flex-col gap-2 pl-6 pr-6">
            <h2 className="text-2xl font-semibold">Discover the best</h2>
            <p className="md:text-md text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt
              distinctio quisquam voluptates quas ratione.
            </p>
          </div>
          <div className="flex flex-col gap-2 pl-6 pr-6">
            <h2 className="text-2xl font-semibold">Experience the Magic</h2>
            <p className="md:text-md text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt
              distinctio quisquam voluptates quas ratione.
            </p>
          </div>
          <div className="flex flex-col gap-2 pl-6 pr-6">
            <h2 className="text-2xl font-semibold">Indulge Your Senses</h2>
            <p className="md:text-md text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt
              distinctio quisquam voluptates quas ratione.
            </p>
          </div>
        </div>
      </div>
      {/* BG-Image */}
      <div className="absolute inset-0 -z-50">
        <img
          className="h-full w-full object-cover"
          src={bannerBgImage}
          alt="banner-image"
        />
      </div>
      <div className="absolute inset-0 -z-40 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Banner;
