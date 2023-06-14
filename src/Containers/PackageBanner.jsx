import React, { useContext, useState } from "react";
import Carausel from "../Components/Carausel";
import { AnimatePresence, motion } from "framer-motion";
import BookPackage from "../Components/BookPackage";
import { PackageContext } from "../Pages/Package";

const PackageBanner = ({ data }) => {
  const { setShowBookingModal, journeyDetails, setJourneyDetails } =
    useContext(PackageContext);
  return (
    <div className="relative flex flex-col p-6 pt-[10vh] md:flex-row">
      {/* CARAUSEL */}
      <div className="h-[50vh] w-full">
        {data?.images !== undefined && <Carausel data={data?.images} />}
      </div>
      {/* DETAILS */}
      <div className="flex w-full flex-col items-center justify-center gap-3 p-3">
        {/* GROUP TYPE */}
        <div className="flex w-[90%] items-center justify-between gap-2 md:w-1/2">
          <button
            type="button"
            onClick={() =>
              setJourneyDetails((prev) => {
                return { ...prev, group: false };
              })
            }
            className={`rounded-sm border-[1px] border-blue-900 px-3 py-2  transition-colors hover:bg-blue-900  hover:text-white ${
              journeyDetails.group ? "text-blue-900" : "bg-blue-900 text-white"
            } w-full`}
          >
            Individual
          </button>
          <button
            type="button"
            onClick={() =>
              setJourneyDetails((prev) => {
                return { ...prev, group: true };
              })
            }
            className={`rounded-sm border-[1px] border-blue-900 px-3 py-2 transition-colors hover:bg-blue-900  hover:text-white ${
              journeyDetails.group ? "bg-blue-900 text-white" : "text-blue-900"
            } w-full`}
          >
            Group
          </button>
        </div>
        {/* No. of People */}
        <AnimatePresence>
          {journeyDetails.group && (
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{
                y: -10,
                opacity: 0,
                transitionDuration: 0.1,
              }}
              className="flex w-[90%] items-start justify-center border-2 border-blue-900 md:w-1/2"
            >
              <button
                className="flex aspect-square h-10  items-center justify-center bg-blue-900 p-4 text-lg text-white disabled:bg-gray-500"
                disabled={journeyDetails.people === 2}
                onClick={() =>
                  setJourneyDetails((prev) => {
                    return { ...prev, people: prev.people - 1 };
                  })
                }
              >
                -
              </button>
              <input
                value={journeyDetails.people}
                min={2}
                type="number"
                name="group-size"
                className="h-10 w-full p-2"
                onChange={(e) =>
                  setJourneyDetails((prev) => {
                    if (e.target.value < 2) return { ...prev, people: 2 };
                    return { ...prev, people: e.target.value };
                  })
                }
              />
              <button
                className="flex aspect-square h-10  items-center justify-center bg-blue-900 p-4 text-lg text-white"
                onClick={() =>
                  setJourneyDetails((prev) => {
                    return { ...prev, people: prev.people + 1 };
                  })
                }
              >
                +
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Price */}
        <div>
          <h4 className="text-lg">
            {journeyDetails.group ? (
              <>
                <span className="font-bold">Total Price : </span>₹
                {data?.price * journeyDetails.people}
              </>
            ) : (
              <>
                <span className="font-bold">Price : </span>₹{data?.price}/Person
              </>
            )}
          </h4>
        </div>
        {/* Buttons */}
        <div className="w-[90%] md:w-1/2">
          <button
            className="rouned-md w-full bg-red-600 px-3 py-2 text-white transition-colors hover:bg-red-800 hover:text-white"
            onClick={() => setShowBookingModal(true)}
          >
            Book this Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBanner;
