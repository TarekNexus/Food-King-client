import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#f4f1ea] text-black pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-11/12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img className="w-40" src={logo} alt="" />
            </div>
            <p className="text-black text-opacity-90 text-center md:text-left mb-4">
              Savor the taste of tradition with our thoughtfully prepared dishes
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-black text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-black text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-black border-b border-black border-opacity-30 pb-2">
              Explore
            </h3>
            <ul className="space-y-2 text-center md:text-left">
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
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-black border-b border-black border-opacity-30 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-black text-opacity-90">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-black" />
                <a
                  href="mailto:info@foodking.com"
                  className="hover:text-opacity-100 hover:underline transition duration-300"
                >
                  info@foodking.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-black" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-opacity-100 hover:underline transition duration-300"
                >
                  +8801778188448
                </a>
              </div>
              <p className="hover:text-opacity-100 transition duration-300">
                18/4 West Dhanmondi
              </p>
              <p className="hover:text-opacity-100 transition duration-300">
                Dhaka, GT 1207
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-black border-b border-black border-opacity-30 pb-2">
              Cooking Tips
            </h3>
            <p className="text-black text-opacity-90 text-center md:text-left mb-4">
              Join our foodie family get delicious updates and members-only
              deals!
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white bg-opacity-20 backdrop-blur-sm text-black placeholder-black placeholder-opacity-70 w-full border border-white border-opacity-50 focus:outline-none focus:border-opacity-100 focus:bg-opacity-30 transition duration-300"
              />
              <button className="bg-red-600 hover:bg-red-700 border border-white border-opacity-50 hover:border-opacity-100 text-white font-medium px-4 py-2 rounded-r-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-30 pt-6 text-center text-black text-opacity-80">
          <p>
            &copy; {new Date().getFullYear()} FOOD KING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
