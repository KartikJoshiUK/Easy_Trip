
import "../cssfiles/nav.css"
export const Navbar = () => {
  return (
    <nav className="nav
     bg-opacity-20 h-[50px]    z-50 fixed top-0 left-0 " >
        <h2 className="text-[25px] font-bold">EasyTrip</h2>
  <ul>
    <li>Explore</li>
    <li>WhatWeProvide</li>
    <li>ContactUs</li>
  </ul>
  <div className="flex w-[300px] p-2">
  <button className="glass ml-1">Login</button>
  <button className="glass bg-red-600">Sign up</button>
  </div>
  
  </nav>
  
  )
}
