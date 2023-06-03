import React, { useState } from "react";
import PackageBanner from "../Containers/PackageBanner";
import Navbar from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import { Rate } from "antd";
const data = {
  title: "Taj Mahal",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias est eos temporibus non animi distinctio? Excepturi dolorem sunt blanditiis porro adipisci quaerat necessitatibus debitis quae error, eius nemo eveniet!",
  price: 2000,
  bgImage:
    "https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Package = () => {
  const [rating, setRating] = useState(2.5);
  return (
    <div className="relative p-6 pt-0">
      <Navbar />
      <PackageBanner data={data} />
      <div className="flex flex-col gap-4 p-6 md:mx-[15%]">
        <h1 className="text-6xl font-bold">{data.title}</h1>
        <h3 className="text-3xl text-gray-900">Overview</h3>
        <p className="text-slate-900">{data.description}</p>
      </div>
      <div className="flex flex-col gap-6 p-6 font-semibold">
        <h2 className="text-5xl">Food and Culture</h2>
        <ul className="ml-6 list-disc font-normal">
          <li>Lorem, ipsum dolor.</li>
          <li>Totam, quo facilis!</li>
          <li>Tenetur, iste veniam?</li>
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
