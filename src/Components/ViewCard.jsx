import React, { useContext } from "react";
import { motion } from "framer-motion";
import { straggeredFadeIn } from "../Constants/framer";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../Pages/Home";
import { view_to_route } from "../Constants/utility";
const ViewCard = ({ data, delayIndex }) => {
  const navigate = useNavigate();
  const { views } = useContext(HomeContext);
  return (
    <motion.div
      variants={{
        rest: straggeredFadeIn.initial,
        slideIn: straggeredFadeIn.animate(delayIndex),
        hide: straggeredFadeIn.exit,
      }}
      className="group w-36 cursor-pointer text-center md:w-52"
      onClick={() => {
        navigate(`/${view_to_route[views.key]}/${data.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <div className="aspect-square w-full overflow-hidden rounded-md transition-transform duration-300 group-hover:-translate-y-4">
        <img
          src={data.image}
          alt="state-img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2">
        <h4 className="relative overflow-hidden pb-1 text-xl">
          {data.name || data.title}
          <div className="absolute -left-full bottom-0 h-[1px] w-full bg-white transition-[left] duration-300 group-hover:left-0"></div>
        </h4>
        <p className="text-xs text-slate-300 md:text-sm">
          {data?.description?.slice(0, 50)}...
        </p>
      </div>
    </motion.div>
  );
};

export default ViewCard;
