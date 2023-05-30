import "../cssfiles/nav.css";
export const Navbar = () => {
  return (
    <nav className="nav fixed left-0 top-0 z-50 h-[50px] bg-opacity-20 ">
      <h2 className="text-[25px] font-bold">EasyTrip</h2>
      <ul>
        <li>Explore</li>
        <li>WhatWeProvide</li>
        <li>ContactUs</li>
      </ul>
      <div className="flex w-[300px] p-2">
        <button className="glass ml-1 hover:bg-gray-600">Login</button>
        <button className="glass bg-red-600 hover:bg-red-500">Sign up</button>
      </div>
    </nav>
  );
};
