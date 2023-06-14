import React, { useContext, useEffect, useRef, useState } from "react";
import PackageCard from "./PackageCard";
import { motion } from "framer-motion";
import { PackageContext } from "../Pages/Package";

const cardWidth = 200;
const cardGap = 20;

const Gallery = ({ keyName }) => {
  const { packageData } = useContext(PackageContext);
  const [index, setIndex] = useState(0);
  const galleryContainer = useRef();
  useEffect(() => {
    console.log(galleryContainer.current.offsetWidth);
  }, [index]);
  return (
    <div
      ref={galleryContainer}
      className="group relative h-full w-full overflow-hidden p-6"
    >
      <motion.div
        animate={{
          translateX: `-${(cardWidth + cardGap) * index}px`,
        }}
        className="flex items-start"
      >
        {packageData?.details?.[keyName]?.map((item) => {
          if (item.image === (null || undefined)) return <></>;
          return (
            <PackageCard
              key={item?.name}
              link={keyName}
              data={item}
              width={cardWidth}
              gap={cardGap}
            />
          );
        })}
      </motion.div>
      <button
        className="absolute bottom-0 left-0 top-0 bg-black bg-opacity-50 p-3 text-white opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() =>
          setIndex((prev) => {
            if (prev === 0) return prev;
            return prev - 1;
          })
        }
      >
        {"<"}
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 bg-black bg-opacity-50 p-3 text-white opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() =>
          setIndex((prev) => {
            if (
              prev === packageData?.details?.[keyName]?.length - 1 ||
              packageData?.details?.[keyName]?.length * (cardGap + cardWidth) -
                (cardWidth + cardGap) * index <
                galleryContainer.current.offsetWidth
            )
              return 0;
            return prev + 1;
          })
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Gallery;
