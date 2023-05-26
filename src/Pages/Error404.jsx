import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/404.svg";
const Error404 = ({ message, link, linkText }) => {
  return (
    <section className="flex h-[100vh] flex-col items-center justify-center gap-2">
      <div className="h-2/3">
        <img
          className="h-full w-full object-contain"
          src={image404}
          alt="Error 404 [Page not found]"
        />
      </div>
      <p className="text-xl">{message}</p>
      <Link
        className="rounded-md bg-blue-600 p-2 px-4 font-bold text-white"
        to={link}
      >
        {linkText}
      </Link>
    </section>
  );
};

export default Error404;
