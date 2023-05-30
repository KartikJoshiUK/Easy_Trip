import React from "react";
import support from "../assets/services-support.png";
import camera from "../assets/services-camera.png";
import languages from "../assets/services-languages.png";
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4  px-6 py-10">
      <h2 className="text-center text-4xl font-bold">WHAT WE PROVIDE?</h2>
      <div className="flex max-w-[1000px] items-start justify-between gap-5 px-14 py-6">
        <div className="flex w-[20%] flex-col items-center justify-center gap-2">
          <div className="aspect-square overflow-hidden rounded-full bg-slate-900 p-4">
            <img
              src={support}
              alt="services-icons"
              className="h-full w-full object-cover p-[10%] invert"
            />
          </div>
          <p className="text-center text-xl">Emergency Support</p>
        </div>
        <div className="flex w-[20%] flex-col items-center justify-center gap-2">
          <div className="aspect-square overflow-hidden rounded-full bg-slate-900 p-4">
            <img
              src={languages}
              alt="services-icons"
              className="h-full w-full object-cover p-[10%] invert"
            />
          </div>
          <p className="text-center text-xl">Local Languages</p>
        </div>
        <div className="flex w-[20%] flex-col items-center justify-center gap-2">
          <div className="aspect-square overflow-hidden rounded-full bg-slate-900 p-4">
            <img
              src={camera}
              alt="services-icons"
              className="h-full w-full object-cover p-[10%] invert"
            />
          </div>
          <p className="text-center text-xl">Enhanced Lens</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
