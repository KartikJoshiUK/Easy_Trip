import React from "react";
import { motion } from "framer-motion";
import { straggeredFadeIn } from "../Constants/framer";
const ViewCard = ({ data, delayIndex }) => {
  return (
    <motion.div
      initial={straggeredFadeIn.initial}
      animate={straggeredFadeIn.animate(delayIndex)}
      exit={straggeredFadeIn.exit}
      className="group w-36 text-center md:w-52"
    >
      <div className="aspect-square w-full overflow-hidden rounded-md transition-transform duration-300 group-hover:-translate-y-4">
        <img
          src={data.img}
          alt="state-img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2">
        <h4 className="relative overflow-hidden pb-1 text-xl">
          {data.name}
          <div className="absolute -left-full bottom-0 h-[1px] w-full bg-white transition-[left] duration-300 group-hover:left-0"></div>
        </h4>
        <p className="text-xs text-slate-300 md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          ab?
        </p>
      </div>
    </motion.div>
  );
};

export default ViewCard;
