import React, { useContext, useState } from "react";
import { PackageContext } from "../Pages/Package";
import { motion } from "framer-motion";
import { GlobalContext } from "../App";
import { useLocation, useParams } from "react-router-dom";
const languages = [
  "English",
  "Spanish",
  "Chinese",
  "Hindi",
  "Arabic",
  "Portuguese",
  "Russian",
  "Japanese",
  "German",
  "French",
  "Others",
];
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "China",
  "India",
  "Japan",
  "Brazil",
  "Mexico",
  "Russia",
  "South Africa",
  "Others",
];
const BookPackage = () => {
  const { setShowBookingModal, journeyDetails } = useContext(PackageContext);
  const params = useParams();
  const location = useLocation();
  const { user } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    language: "English",
    country: "United States",
    number: null,
  });
  const handleBooking = async () => {
    const data = {
      ...formData,
      ...user,
    };
    console.log(data);
    const userUpdateResponse = await fetch(`http://localhost:3000/userupdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        language: data.language,
        mobile: data?.number?.length >= 10 ? data.number : null,
        country: data.country,
      }),
    });
    const orderResponse = await fetch(`http://localhost:3000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user?.id,
        isCity: location.pathname.split("/").includes("cities") ? true : false,
        package: params.packageId,
        date: data?.date,
        people: journeyDetails.people,
      }),
    });
  };
  return (
    <motion.div
      className="flex  max-h-[500px] w-[80%] max-w-[500px] flex-col items-center justify-between bg-white"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      <div className="flex w-full flex-1 items-center justify-between p-4">
        <form className="flex h-full w-full flex-col justify-center gap-2">
          <div className="flex w-full justify-between p-2 text-2xl shadow-lg">
            <label htmlFor="arrivalDate" className="font-bold">
              Arrival Date:<span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-300"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, date: e.target.value };
                })
              }
            />
          </div>
          <div className="flex w-full justify-between p-2 text-2xl shadow-lg">
            <label htmlFor="arrivalDate" className="font-bold">
              Contact Number:
            </label>
            <input
              className="border-2 border-gray-300"
              type="number"
              value={formData.number}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, number: e.target.value };
                })
              }
            />
          </div>
          <div className="flex w-full justify-between p-2 text-2xl shadow-lg">
            <label htmlFor="language" className="font-bold">
              Preffered Language: <span className="text-red-600">*</span>
            </label>
            <select
              className="border-2 border-gray-300"
              value={formData.language}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, language: e.target.value };
                })
              }
            >
              {languages.map((language) => (
                <option key={language} value={language.toLowerCase()}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full justify-between p-2 text-2xl shadow-lg">
            <label htmlFor="language" className="font-bold">
              Country: <span className="text-red-600">*</span>
            </label>
            <select
              className="border-2 border-gray-300"
              value={formData.country}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, country: e.target.value };
                })
              }
            >
              {countries.map((country) => (
                <option key={country} value={country.toLowerCase()}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="border-red-6000 w-full flex-1 border-[1px] bg-red-600 px-3 py-2 text-xl text-white"
          onClick={handleBooking}
        >
          BOOK
        </button>
        <button
          onClick={() => setShowBookingModal(false)}
          className="w-full flex-1 border-[1px] border-red-600 px-3 py-2 text-xl text-red-600"
        >
          CANCEL
        </button>
      </div>
    </motion.div>
  );
};

export default BookPackage;
