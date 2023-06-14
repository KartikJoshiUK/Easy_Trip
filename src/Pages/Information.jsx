import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { view_to_route } from "../Constants/utility";

const Information = () => {
  const params = useParams();
  const [info, setInfo] = useState({});
  const fetchInformation = async (id) => {
    if (params?.pageName && params?.pageId) {
      console.log(params);
      console.log(`http://localhost:3000/${params.pageName}/${params.pageId}`);
      const data = await fetch(
        `http://localhost:3000/${params.pageName}/${params.pageId}`
      );
      const response = await data.json();
      console.log(response);
      setInfo(response);
    }
  };
  useEffect(() => {
    fetchInformation(params);
  }, []);
  return (
    <div>
      <div className="m-2 h-[50vh] overflow-hidden rounded-md">
        <img
          className="h-full w-full object-cover transition-all duration-300 hover:scale-110 "
          src={info.image}
          alt="info-image"
        />
      </div>
      <div>
        <h1 className="text-center text-5xl">{info.name}</h1>
      </div>
    </div>
  );
};

export default Information;
