import React, { useState } from "react";
import PackageBanner from "../Containers/PackageBanner";
import Navbar from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import { Rate } from "antd";

const data = {
  title: "Taj Mahal",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias est eos temporibus non animi distinctio? Excepturi dolorem sunt blanditiis porro adipisci quaerat necessitatibus debitis quae error, eius nemo eveniet!",
  details: {
    food: {
      title: "Famous Foods",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry",
      content: [
        {
          title: "Samosa",
          description: "samosa is very delicious and tasty",
          images: ["#", "#", "#"],
        },
        {
          title: "Pakoda",
          description: "samosa is very delicious and tasty",
          images: ["#", "#", "#"],
        },
      ],
    },
    culture: {
      title: "Cultural Importance",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry",
      content: [
        {
          title: "Elephant Motif",
          description: "blah blah blah",
          images: ["#", "#", "#"],
        },
        {
          title: "Inscription",
          description: "blah blah blah",
          images: ["#", "#", "#"],
        },
      ],
    },
  },
  price: 2000,
  rating: 4.5,
  images: [
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
  ],
};

const Package = () => {
  const [rating, setRating] = useState(data.rating);
  return (
    <div className="relative p-6 pt-0 ">
      <Navbar />
      <PackageBanner data={data} />
      <div className="flex flex-col gap-4 p-6 md:mx-[15%]">
        <h1 className="text-6xl font-bold">{data.title}</h1>
        <h3 className="text-3xl text-gray-900">Overview</h3>
        <p className="text-slate-900">{data.description}</p>
      </div>
      <div className="flex flex-col gap-6 p-6 font-semibold">
        <h2 className="text-5xl">Culture</h2>
        <ul className="ml-6 list-disc font-normal">
          {data.details.culture.content.map((item) => (
            <li key={item}>{item.title}</li>
          ))}
        </ul>
        <h2 className="text-5xl">Food</h2>
        <ul className="ml-6 list-disc font-normal">
          {data.details.food.content.map((item) => (
            <li key={item}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <Gallery />
      </div>
      <div className="flex flex-col gap-3 bg-gray-100 p-6">
        <h6 className="text-xl font-semibold">Ratings</h6>
        <div className="flex items-center gap-5">
          <Rate
            allowHalf
            defaultValue={rating}
            value={rating}
            onChange={(value) => setRating(value)}
          />
          <p className="font-semibold">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Package;
