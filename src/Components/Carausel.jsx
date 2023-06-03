import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
const data = [
  {
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
  },
  {
    image:
      "https://gumlet.assettype.com/dharmadispatch/2019-12/1ac7c55e-6671-4704-9c6b-44b0304ac86c/Taj.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  },
];
const timeDelta = 3;
const Carausel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => {
        if (prev + 1 === data.length) return 0;
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
        {data.map((imgObject, index) => (
          <div
            key={imgObject.image}
            className="flex h-full w-full shrink-0 items-center justify-center"
          >
            <img
              src={imgObject.image}
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
