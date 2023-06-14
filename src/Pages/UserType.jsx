import React, { useContext } from "react";
import { GlobalContext } from "../App";

const UserType = () => {
  const { user, setUser } = useContext(GlobalContext);
  return (
    <div className="flex h-screen flex-col bg-black md:flex-row">
      <div
        className="group relative z-0 flex flex-1 cursor-pointer items-center justify-center overflow-hidden"
        onClick={() =>
          setUser((prev) => {
            return { ...prev, type: "tourist" };
          })
        }
      >
        <img
          src="https://images.unsplash.com/photo-1633867113487-5118d97e546d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdXJpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
          alt="tourist"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50 duration-300 group-hover:scale-125 group-hover:opacity-80"
        />
        <h1 className="text-5xl font-semibold text-white ">TOURIST</h1>
      </div>
      <div
        className="group relative z-0 flex flex-1 cursor-pointer items-center justify-center overflow-hidden"
        onClick={() =>
          setUser((prev) => {
            return { ...prev, type: "guide" };
          })
        }
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1664299292471-f27453d2a134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpZGUlMjB0b3VyaXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          alt="guide"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50 duration-300 group-hover:scale-125 group-hover:opacity-80"
        />
        <h1 className="text-5xl font-semibold text-white ">GUIDE</h1>
      </div>
    </div>
  );
};

export default UserType;
