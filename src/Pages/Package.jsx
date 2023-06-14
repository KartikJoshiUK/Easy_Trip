import React, { useEffect, useState } from "react";
import PackageBanner from "../Containers/PackageBanner";
import Gallery from "../Components/Gallery";
import { Rate } from "antd";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import BookPackage from "../Components/BookPackage";
import PackageMainBanner from "../Components/PackageMainBanner";
import ShowCase from "../Containers/ShowCase";
export const PackageContext = createContext();
const Package = ({ packageType }) => {
  const [packageData, setPackageData] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [journeyDetails, setJourneyDetails] = useState({
    group: false,
    people: 2,
  });
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
        journeyDetails,
        setJourneyDetails,
      }}
    >
      <div className="relative">
        <PackageMainBanner
          image={packageData?.images?.[0]}
          title={packageData?.title}
        />
        <PackageBanner data={packageData} />
        <div className="mx-[5%] mt-[10vh] flex flex-col items-center gap-4  text-center">
          <h1 className="text-6xl font-bold">{packageData?.title}</h1>
          <div className="flex w-full flex-col justify-center gap-3 md:flex-row">
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-blue-100 p-4">
              <h3 className="text-center text-3xl font-semibold text-gray-900">
                About this place
              </h3>
              <p className="text-sm text-slate-900">
                {packageData?.description?.overview}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-blue-100 p-4">
              <h3 className="text-center text-3xl font-semibold text-gray-900">
                Architecture
              </h3>
              <p className="text-sm text-slate-900">
                {packageData?.description?.architecture}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-blue-100 p-4">
              <h3 className="text-center text-3xl font-semibold text-gray-900">
                History
              </h3>
              <p className="text-sm text-slate-900">
                {packageData?.description?.history}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[10vh] flex flex-col items-center gap-6 p-6 font-semibold">
          {packageData?.details?.cities?.length > 0 && (
            <>
              <h2 className="text-center text-5xl">Cities</h2>
              <Gallery keyName={"cities"} />
            </>
          )}
          {packageData?.details?.culture?.length > 0 && (
            <>
              <h2 className="text-center text-5xl">Culture</h2>
              <ShowCase keyName={"culture"} />
            </>
          )}
          {packageData?.details?.food?.length > 0 && (
            <>
              <h2 className="text-center text-5xl">Food</h2>
              <ShowCase keyName={"food"} />
            </>
          )}
          {packageData?.details?.activities?.length > 0 && (
            <>
              <h2 className="text-center text-5xl">Activities</h2>
              <ShowCase keyName={"activities"} />
            </>
          )}
        </div>
        <div className="flex flex-col gap-3 bg-gray-100 p-6">
          <h6 className="text-2xl font-semibold">Ratings</h6>
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
