import React from "react";
import classes from "./login.module.css";
const Login = () => {
  return (
    <div className="bg-darkBlue min-h-screen flex justify-center items-center">
      <div
        className={` bg-login w-[min(320px,_80%)] flex flex-col   rounded-lg  h-[320px]`}
      >
        <p className="text-white font-light text-xl pl-6 py-6">Sign Up</p>
        <form className="text-white text-xs font-light w-[min(279px,_90%)] h-[200px]  flex flex-col gap-6 pl-6">
          <input
            className={`border-b-gray-500 border-b-2 bg-login`}
            type="email"
            placeholder="Email address"
          />
          <input
            className={`border-b-gray-500 border-b-2 bg-login`}
            type="password"
            placeholder="Password"
          />
          <input
            className={` border-b-gray-500 border-b-2 bg-login`}
            type="Password"
            placeholder="Repeat Password"
          />
          <button className=" p-4 bg-rose-600 rounded-md" type="submit">
            Create an account
          </button>
        </form>
        <div className="flex gap-2 text-xs mx-auto">
          <p className="text-gray-500">Don't have an account?</p>
          <a href="/signup" className="text-rose-500 font-medium">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
