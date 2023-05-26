import React from "react";
import StatesCard from "../Components/StatesCard";

const states = [
  {
    name: "Rajasthan",
    img: "https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Uttrakhand",
    img: "https://images.unsplash.com/photo-1618772446265-3f9f8e6f8487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Uttar Pradesh",
    img: "https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

const StatesSection = () => {
  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center gap-16 p-6 text-white">
      <h1 className="mt-10 text-4xl font-bold md:text-6xl">
        Mostly visited States
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
        {states.map((state) => (
          <StatesCard data={state} />
        ))}
      </div>
      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-50 ">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="states-bg"
        />
      </div>
      <div className="absolute inset-0 -z-40 bg-black bg-opacity-50"></div>
    </section>
  );
};

export default StatesSection;
