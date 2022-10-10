import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div className="navbar bg-teal-700 text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-700 hero-overlay rounded-box w-80"
          >
            <li className="font-semibold text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-200" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold text-lg">
              <NavLink
                to="/overview"
                className={({ isActive }) =>
                  isActive ? "text-orange-200" : undefined
                }
              >
                Overview
              </NavLink>
            </li>
            <li className="font-semibold text-lg">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-orange-200" : undefined
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold ">
          Picked By The Hosts
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-semibold text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-200" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                isActive ? "text-orange-200" : undefined
              }
            >
              Overview
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-orange-200" : undefined
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="Profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content hero-overlay bg-teal-700 rounded-box w-60"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
