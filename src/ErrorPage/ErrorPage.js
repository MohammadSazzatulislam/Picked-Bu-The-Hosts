import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBoaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          className="max-w-md "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="mb-5 text-9xl font-bold">
            <span>4</span>
            <span className="text-red-500">0</span>
            <span>4</span>
          </h1>
          <p className="mb-5 font-semibold  text-xl">
            it looks like you were travailing the web page acutely 66mph.While
            we work on powering your browser back to 1.21 gigawatts please
            visited the buttons below....
          </p>
          <NavLink to='/' className="uppercase px-20 border-2 border-blue-200 hover:bg-teal-900  py-4 font-semibold rounded-r-full rounded-l-full  bg-teal-600 text-white">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
