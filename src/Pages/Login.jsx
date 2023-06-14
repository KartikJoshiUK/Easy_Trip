import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg";
import { Authapi } from "../Authapi/Auth";
import { toast } from "react-toastify";
import AuthOptions from "../Components/AuthOptions";
import { GlobalContext } from "../App";

const Login = () => {
  const { setUser, setLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  const credentialcheck = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  const logged = async (e) => {
    e.preventDefault();
    try {
      if (credential.email !== "" && credential.password !== "") {
        const hlo = await Authapi(credential.email, credential.password);
        console.log(hlo.user.uid);
        setUser((prev) => {
          return { ...prev, id: hlo.user.uid, email: hlo.user.email };
        });
        toast.success("successfully sign to Easytrip");
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      toast.error("pls check your credential");
    }
  };
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
      <div className="w-full bg-black bg-opacity-50 py-2 text-center md:hidden">
        <h1 className="text-xl font-bold text-white">
          <span className="text-2xl">Hey There!</span> Planning a vacation?
        </h1>
        <p className="text-slate-200">Please enter your credentials</p>
      </div>
      {/* Form */}
      <form
        className="flex w-1/2 min-w-fit flex-col items-center justify-center gap-2 rounded-md bg-white bg-opacity-10 p-6 backdrop-blur-md md:relative md:h-full md:w-1/2 md:gap-3"
        onSubmit={logged}
      >
        <input
          className="w-full rounded-md border-slate-400 bg-black bg-opacity-50 p-2 text-lg text-white focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px] md:bg-white md:text-black"
          type="text"
          placeholder="Enter your Email"
          onChange={credentialcheck}
          name="email"
        />
        <input
          style={{ color: "black" }}
          className="w-full rounded-md border-slate-400 bg-black bg-opacity-50 p-2 text-lg text-white focus:bg-opacity-80 md:w-3/4 md:rounded-none md:border-b-[1px] md:bg-white md:text-black"
          type="password"
          name="password"
          placeholder="Enter your Password"
          onChange={credentialcheck}
        />
        <p className="text-sm">
          Don't have a account?{" "}
          <Link className="text-blue-600" to={"/signup"}>
            Create One
          </Link>
        </p>
        <p className="text-sm">
          You are a guide?{" "}
          <span
            className="cursor-pointer text-blue-600"
            onClick={() => setUser({})}
          >
            Guide Login
          </span>
        </p>
        <button
          type="submit"
          className="w-3/4 rounded-md bg-blue-900 px-2 py-1
           text-white hover:bg-blue-800 active:bg-blue-950"
        >
          Login
        </button>
        <AuthOptions type="login" />
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
          src={loginImage}
          alt="loginImage"
        />
        {/* Greeting-MD */}
        <div className="absolute hidden w-full bg-black bg-opacity-50 py-2 text-center md:top-[30%] md:block">
          <h1 className="text-xl font-bold text-white">
            <span className="text-2xl">Hey There!</span> want to plan another Trip
          </h1>
          <p className="text-slate-200">Please enter your credentials</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
