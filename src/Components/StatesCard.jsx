import React from "react";

const StatesCard = ({ data }) => {
  return (
    <div className="w-36 text-center md:w-52">
      <div className="aspect-square w-full overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-4">
        <img
          src={data.img}
          alt="state-img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2">
        <h4 className="text-xl">{data.name}</h4>
        <p className="text-xs text-slate-300 md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          ab?
        </p>
      </div>
    </div>
  );
};

export default StatesCard;
