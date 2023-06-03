import React from "react";

const PackageCard = ({ data, width, gap }) => {
  return (
    <div
      style={{
        width: width + "px",
        marginRight: gap + "px",
      }}
      className={`h-full shrink-0 overflow-hidden rounded-md`}
    >
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-black text-white">
        <h6 className="text-center">{data.title}</h6>
      </div>
    </div>
  );
};

export default PackageCard;
