import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const timeDelta = 3;
const Carausel = ({ data }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev + 1 === data?.length) return 0;
        return prev + 1;
      });
    }, timeDelta * 1000);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="group relative flex h-full  w-full overflow-hidden">
      <motion.div
        animate={{
          translateX: `-${index * 100}%`,
          transition: { type: "tween" },
        }}
        className="flex h-full w-full"
      >
        {data?.map((image) => (
          <div
            key={image}
            className="flex h-full w-full shrink-0 items-center justify-center"
          >
            <img
              src={image}
              alt="carausel-image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
      <button
        className="absolute bottom-0 left-0 top-0 bg-black bg-opacity-50 p-3 text-white opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() =>
          setIndex((prev) => {
            if (prev === 0) return data.length - 1;
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
            if (prev === data.length - 1) return 0;
            return prev + 1;
          })
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Carausel;
