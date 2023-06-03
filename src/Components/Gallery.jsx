import React, { useEffect, useRef, useState } from "react";
import PackageCard from "./PackageCard";
import { motion } from "framer-motion";
const data = [
  {
    title: "Title1",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title2",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title3",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title4",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title5",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title6",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title7",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title8",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title9",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title10",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
  {
    title: "Title11",
    image:
      "https://www.aboutcivil.org/sites/default/files/2017-10/structural-details-taj-mahal.JPG",
  },
];

const cardWidth = 200;
const cardGap = 20;

const Gallery = () => {
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
        {data.map((item) => (
          <PackageCard
            key={item.title}
            data={item}
            width={cardWidth}
            gap={cardGap}
          />
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
            if (
              prev === data.length - 1 ||
              data.length * (cardGap + cardWidth) -
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
