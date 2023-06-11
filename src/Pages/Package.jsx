import React, { useEffect, useState } from "react";
import PackageBanner from "../Containers/PackageBanner";
import { Navbar } from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import { Rate } from "antd";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import BookPackage from "../Components/BookPackage";
export const PackageContext = createContext();
const Package = ({ packageType }) => {
  const [packageData, setPackageData] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const params = useParams();
  const fetchStates = async () => {
    console.log("Fething States START");
    if (params.packageId) {
      console.log(
        "FETCHING at ",
        `http://localhost:3000/package/${params.packageId}?type=${packageType}`
      );
      const data = await fetch(
        `http://localhost:3000/package/${params.packageId}?type=${packageType}`
      );
      const response = await data.json();
      console.log("Fething States FINISHED", response);
      setPackageData(response);
      setRating(response.rating);
    }
  };
  useEffect(() => {
    fetchStates();
  }, []);
  return (
    <PackageContext.Provider
      value={{
        packageData,
        setPackageData,
        setShowBookingModal,
        showBookingModal,
      }}
    >
      <div className="relative p-6 pt-0 ">
        <Navbar />
        <PackageBanner data={packageData} />
        <div className="flex flex-col gap-4 p-6 md:mx-[15%]">
          <h1 className="text-6xl font-bold">{packageData?.title}</h1>
          <h3 className="text-3xl text-gray-900">Overview</h3>
          <p className="text-slate-900">{packageData?.description?.overview}</p>
          <h3 className="text-3xl text-gray-900">Architecture</h3>
          <p className="text-slate-900">
            {packageData?.description?.architecture}
          </p>
          <h3 className="text-3xl text-gray-900">History</h3>
          <p className="text-slate-900">{packageData?.description?.history}</p>
        </div>
        <div className="flex flex-col gap-6 p-6 font-semibold">
          {packageData?.details?.culture?.length > 0 && (
            <>
              <h2 className="text-5xl">Culture</h2>
              <Gallery keyName={"culture"} />
            </>
          )}
          {packageData?.details?.food?.length > 0 && (
            <>
              <h2 className="text-5xl">Food</h2>
              <Gallery keyName={"food"} />
            </>
          )}
          {packageData?.details?.activities?.length > 0 && (
            <>
              <h2 className="text-5xl">Activities</h2>
              <Gallery keyName={"activities"} />
            </>
          )}
          {packageData?.details?.cities?.length > 0 && (
            <>
              <h2 className="text-5xl">Cities</h2>
              <Gallery keyName={"cities"} />
            </>
          )}
        </div>
        {/* <div>
        <Gallery />
      </div> */}
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
      {showBookingModal && (
        <div className="fixed left-0 top-0 flex h-[100vh] w-full flex-col items-center justify-center bg-black bg-opacity-50">
          <BookPackage />
        </div>
      )}
    </PackageContext.Provider>
  );
};

export default Package;
