import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navber = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AvailableFoods"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddFood"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ManageMyFoods"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/MyFoodRequest"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <nav className="sticky top-0 z-20">
      <div className="navbar w-full px-4 sm:px-8 md:px-12 lg:px-28 mx-auto border-b border-gray-200  bg-white/20 backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <img className="w-30 md:w-40" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          ) : user ? (
            <>
              <div className="mr-2 sm:mr-6 flex items-center gap-2 sm:gap-3">
                <img
                  referrerPolicy="no-referrer"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user?.displayName || "User"}
                  data-tooltip-place="top"
                  src={user?.photoURL || ""}
                  alt={user?.displayName || "User"}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300"
                />
                <Tooltip id="user-tooltip" />
              </div>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-semibold border-none bg-red-600 hover:bg-green-700 rounded-3xl shadow-md transition duration-300"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base btn text-white border-none font-semibold bg-red-600 hover:bg-red-700 rounded-3xl shadow-md transition duration-300 mr-2 sm:mr-6"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base btn text-white border-none font-semibold bg-red-600 hover:bg-red-700 rounded-3xl shadow-md transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
