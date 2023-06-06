import React from "react";

const Contact = () => {
  return (
    <div className="bg-black px-6 py-10">
      <h2 className="text-center text-4xl font-bold text-white">CONTACT US</h2>
      <div className="flex h-[50vh] flex-col justify-between gap-6 p-6 md:flex-row">
        <a
          href="mailto:"
          className="max-w-40% group relative z-10 flex h-1/2 w-full items-center justify-center overflow-hidden rounded-md md:h-full"
        >
          <p className="text-4xl font-bold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            Email Us
          </p>
          <img
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="email-us"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </a>
        <a
          href="tel:+"
          className="max-w-40% group relative z-10 flex h-1/2 w-full items-center justify-center overflow-hidden rounded-md md:h-full"
        >
          <p className="text-4xl font-bold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            Call Us At
          </p>
          <img
            src="https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="call-us"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
