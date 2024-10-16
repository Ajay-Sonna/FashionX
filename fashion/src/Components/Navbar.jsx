import React from "react";
//import logoImg from "../assets/logo.png";
import logo from "../assets/logo-color.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
//import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [signInOpen, setSignIn] = useState(false);
  const [signUpOpen, setSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const {
    register,
    handleSubmit,
    reset,
    required,
    formState: { errors },
  } = useForm();

  const SubmitLogin = () => {
    toast.success(
      "Login Successfull",
      {
        position: "top-center",
      },
      setSignIn(false)
    );
  };

  const SubmitAccount = (e) => {
    //e.preventDefault();
    if (password === repassword) {
      toast.success(
        "Account Create Successfully!",
        {
          position: "top-center",
        },
        setSignUp(false)
      );
    } else {
      toast.error("Password didn't Match", {
        position: "top-center",
      });
    }
  };

  const openSignIn = () => {
    reset();
    setSignIn(true);
  };

  const openSignUp = () => {
    reset();
    setPassword("");
    setRepassword("");
    setSignUp(true);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="w-15 h-10 rounded-md  mr-2"
                src={logo}
                alt="logo-img"
              ></img>
              <span className="text-sm tracking-light">Fashion</span>{" "}
              <span className="text-blue-500">
                <X />
              </span>
            </div>
            <ul className="hidden lg:flex space-x-8 ml-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass=" bg-blue-500 text-black p-2 rounded-md"
                    className="cursor-pointer active:bg-blue-500 focus:bg-blue-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center space-x-5">
              <button
                className="bg-gradient-to-r from-blue-400 to-blue-800 p-3 rounded-md"
                onClick={openSignIn}
              >
                Sign in
              </button>
              <button
                className="bg-gradient-to-r from-blue-400 to-blue-800 p-3 rounded-xl"
                onClick={openSignUp}
              >
                Sign Up
              </button>
            </div>
            <div className="lg:hidden md:fex flex-col justify-end">
              <button onClick={toggleNavMenu}>
                {navMenu ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {navMenu && (
            <div className="lg:hidden flex flex-col p-10 justify-center text-center tracking-wide bg-slate-800">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-1">
                <button className="m-5">
                  <a className="border rounded p-2">Sign In</a>
                </button>
                <button>
                  <a className="border rounded p-2 bg-gradient-to-r from-blue-400 to-blue-800">
                    Sign Up
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {signInOpen && (
        <div className="fixed inset-10 flex justify-center items-center text-center backdrop-blur-lg bg-opacity-50 border-white-500 w-full h-full rounded-lg shadow-lg">
          <form
            className="flex flex-col bg-black"
            onSubmit={handleSubmit(SubmitLogin)}
          >
            <span className="flex flex-end" onClick={() => setSignIn(false)}>
              <X />
            </span>
            <div className="relative m-5">
              <input
                {...register("username", { required: true })}
                type="text"
                className="peer w-full bg-gray-700 text-white p-3 border-b-2 border-gray-500 focus:outline-none focus:border-orange-500"
                placeholder=" "
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-plceholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Username
              </label>
              {errors.username && (
                <span className="text-red-500">*Username is required</span>
              )}
            </div>
            <div className="relative m-5">
              <input
                {...register("password", { required: true })}
                type="password"
                className="peer w-full bg-gray-700 text-white p-3 border-b-2 border-gray-500 focus:outline-none focus:border-orange-500"
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-plceholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
              {errors.username && (
                <span className="text-red-500">*Password is required</span>
              )}
            </div>
            <div className="m-5 ">
              <button className="bg-gradient-to-r from-orange-400 to-blue-800 p-3 rounded-lg">
                Sign In
              </button>
            </div>
          </form>
        </div>
      )}
      {signUpOpen && (
        <div className="fixed inset-10 flex justify-center items-center text-center backdrop-blur-lg bg-opacity-50 border-white-500 w-full h-full rounded-lg shadow-lg">
          <form
            className="flex flex-col bg-black"
            onSubmit={handleSubmit(SubmitAccount)}
          >
            <span className="flex flex-end" onClick={() => setSignUp(false)}>
              <X />
            </span>
            <div className="relative m-5">
              <input
                {...register("username", { required: true })}
                type="text"
                className="peer w-full bg-gray-700 text-white p-3 border-b-2 border-gray-500 focus:outline-none focus:border-orange-500"
                placeholder=" "
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Username
              </label>
              {errors.username && (
                <span className="text-red-500">*Username is required</span>
              )}
            </div>

            <div className="relative m-5">
              <input
                {...register("password", { required: true })}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full bg-gray-700 text-white p-3 border-b-2 border-gray-500 focus:outline-none focus:border-orange-500"
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-plceholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
              {errors.username && (
                <span className="text-red-500">*Password is required</span>
              )}
            </div>

            <div className="relative m-5">
              <input
                {...register("repassword", { required: true })}
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                className="peer w-full bg-gray-700 text-white p-3 border-b-2 border-gray-500 focus:outline-none focus:border-orange-500"
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-plceholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                re-Enter Password
              </label>
              {errors.username && (
                <span className="text-red-500">*Password is required</span>
              )}
            </div>
            <div className="m-5 ">
              <button className="bg-gradient-to-r from-orange-400 to-blue-800 p-3 rounded-lg">
                Create Account
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Background blur when modal is active
      {signInOpen || signUpOpen ? <div className="fixed inset-0 bg-opacity-50 blur"></div> : null} */}
      <ToastContainer />
    </div>
  );
};
