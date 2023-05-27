import React from "react";
import bannerBgImage from "..//assets/home-banner-1.jpg";
import SubNavigationBar from "../Components/SubNavigationBar";
const BannerCard = ({ title, description }) => {
  return (
    <div className="banner-card relative flex flex-col gap-2 overflow-hidden px-6 py-1 md:py-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="md:text-md text-xs">{description}</p>
      {/* Black Overlay */}
      <div className="absolute -left-[99%] top-0 h-full w-full bg-white mix-blend-difference transition-[left]"></div>
    </div>
  );
};
const Banner = () => {
  return (
    <section className="relative flex h-[100vh] items-center justify-center p-10 lg:p-52 ">
      {/* INFORMATION */}
      <div className="mt-[10vh] flex min-h-[50%] flex-col items-center gap-8 p-6 text-white backdrop-blur-sm md:gap-10">
        <div className="flex flex-col gap-2 z-0">
          <h1 className="text-center font-Hinglish text-5xl font-bold lg:text-7xl">
            Welcome to India
          </h1>
          <p className="text-md text-center lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ullam ab corporis.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-4 text-center text-gray-200 md:flex-row md:text-left">
          <BannerCard
            title="Discover the best"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt distinctio quisquam voluptates quas ratione."
          />
          <BannerCard
            title="Experience the Magic"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt distinctio quisquam voluptates quas ratione."
          />
          <BannerCard
            title="Indulge Your Senses"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corporis laboriosam saepe voluptate debitis! Nesciunt distinctio quisquam voluptates quas ratione."
          />
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
      {/* SUB-NavigationMenu */}
      <div className="absolute bottom-0">
        <SubNavigationBar />
      </div>
    </section>
  );
};

export default Banner;
