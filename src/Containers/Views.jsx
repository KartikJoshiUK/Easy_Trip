import React from "react";
import ViewCard from "../Components/ViewCard";
import { motion } from "framer-motion";
import { FadeIn } from "../Constants/framer";
import Error404 from "../Pages/Error404";
const Views = ({ data }) => {
  if (data === undefined)
    return (
      <section id="views">
        <Error404 message="Something went wrong!" link="/" linkText="Go Back" />
      </section>
    );
  return (
    <section
      id="views"
      className="relative flex min-h-[100vh] flex-col items-center justify-center gap-16 p-6 text-white"
    >
      <h1 className="mt-10 text-4xl font-bold md:text-6xl">{data.title}</h1>
      <div className="flex flex-wrap items-start justify-center gap-4 md:gap-10">
        {data.cards.map((attraction, index) => (
          <ViewCard data={attraction} delayIndex={index} />
        ))}
      </div>
      {/* BG IMAGE */}
      <motion.div
        className="absolute inset-0 -z-50 "
        initial={FadeIn.initial}
        animate={FadeIn.animate}
        exit={FadeIn.exit}
      >
        <img
          className="h-full w-full object-cover"
          src={data.bgImage}
          alt="states-bg"
        />
      </motion.div>
      <div className="absolute inset-0 -z-40 bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Views;
