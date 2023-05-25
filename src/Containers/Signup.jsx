import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../assets/signup.jpg";
import { Regapi } from "../Authapi/Auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const navigate =useNavigate();
  const [credentiaal,setCredential]=useState({
     password:"",
     email:"",
     username:"",
  confirmpassword:""
  })
  const credentailChanges=(e)=>{
    setCredential({
    ...credentiaal,
    [e.target.name]: e.target.value
    })
  }
  console.log(credentiaal)
  const signup=async()=>{
    try{
      if(credentiaal.password===credentiaal.confirmpassword){
        const hlo=await Regapi(credentiaal.email ,credentiaal.password);

        toast.success("successfully created!")
       navigate('/')
      }
     else{
      
        toast.error("passwords do not match")
     }

    }catch(error){
 toast.error("already exited account")
    }
  
  }
  return (
    <section className="relative flex h-[100vh] flex-col items-center justify-center gap-10 md:flex-row">
      {/* LOGO */}
      <button className="absolute top-5 flex items-center gap-2 overflow-hidden rounded-lg p-3 backdrop-blur-sm md:hidden">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/736x/4f/eb/99/4feb9991ec193b7e139f06347c143f6d.jpg"
            alt="logo-image"
          />
        </div>
        <p className="text-2xl font-bold text-white md:text-black">Easy Trip</p>
      </button>
      {/* Greeting */}
      <div className="w-full bg-black bg-opacity-50 p-2 text-center md:hidden">
        <h1 className="text-xl font-bold text-white">
          <span className="text-2xl">Welcome Back!</span> Planning a vacation?
        </h1>
        <p className="text-slate-200">Please enter your credentials</p>
      </div>
      {/* Form */}
      <form className="flex w-1/2 min-w-fit flex-col items-center justify-center gap-2 rounded-md bg-white bg-opacity-10 p-6 backdrop-blur-md md:relative md:h-full md:w-1/2 md:gap-3">
        <input
          className="w-full rounded-md border-slate-400 bg-black bg-opacity-50 p-2 text-lg text-white focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px] md:bg-white"
          type="text"
          placeholder="Enter your Name"
          name="name"
          onChange={(e)=>credentailChanges(e)}
        
        />
        <input
          className="w-full rounded-md border-slate-400 bg-black bg-opacity-50 p-2 text-lg text-white focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px] md:bg-white"
          type="text"
          placeholder="Enter your Email"
          onChange={(e)=>credentailChanges(e)}
          name="email"
        />
        <input
          className="w-full rounded-md border-slate-400
           bg-black bg-opacity-50 p-2 text-lg text-white 
           focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px]
            md:bg-white"
          
          name="password"
          placeholder="Enter your Password"
          onChange={(e)=>credentailChanges(e)}
          
        />
        <input
          className="w-full rounded-md border-slate-400 bg-black bg-opacity-50 p-2 text-lg text-white focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px] md:bg-white"
          type="password"
          name="confirmpassword"
          placeholder="Confirm your Password"
          onChange={(e)=>credentailChanges(e)}
      
        />
        <p className="text-sm">
          Already have account?{" "}
          <Link className="text-blue-600" to={"/login"}>
            Login
          </Link>
        </p>
        <button
          type="button"
          className="w-3/4 rounded-md bg-blue-900 px-2 py-1 text-white hover:bg-blue-800 active:bg-blue-950"
          onClick={signup}
        >
          Sign Up
        </button>
        {/* LOGO-MD */}
        <button className="absolute top-5 hidden items-center gap-2 overflow-hidden rounded-lg p-3 backdrop-blur-sm md:flex">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src="https://i.pinimg.com/736x/4f/eb/99/4feb9991ec193b7e139f06347c143f6d.jpg"
              alt="logo-image"
            />
          </div>
          <p className="text-2xl font-bold text-white md:text-black">
            Easy Trip
          </p>
        </button>
      </form>
      {/* Image */}
      <div className="absolute inset-0 -z-50 h-full md:relative md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={signupImage}
          alt="signupImage"
        />
        {/* Greeting-MD */}
        <div className="absolute hidden w-full bg-black bg-opacity-50 p-2 text-center md:top-[30%] md:block">
          <h1 className="text-xl font-bold text-white">
            <span className="text-2xl">Welcome Back!</span> Planning a vacation?
          </h1>
          <p className="text-slate-200">Please enter your credentials</p>
        </div>
      </div>
    </section>
  );
};

export default Signup;