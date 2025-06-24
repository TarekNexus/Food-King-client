import React from "react";
import flash from "../assets/service.jpg";

const Service = () => {
  return (
    <div className="mt-2 md:mt-5">
      <section className="py-16  rounded-3xl px-4 ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="text-center w-11/12 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Share More, Waste Less with{" "}
            <span className="text-red-600 font-bold">FoodKing</span>
          </h2>
          <p className="text-gray-600 mb-12">
            Empower your community by donating surplus food or requesting meals
            with ease — because no one should go hungry.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Side */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Easy Food Listings
                </h3>
                <p className="text-sm text-gray-600">
                  Add, update, or remove available food items with just a few
                  clicks — it's fast, simple, and secure.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Real-Time Food Requests
                </h3>
                <p className="text-sm text-gray-600">
                  Request meals that are nearby and available — see what's
                  around you and get support instantly.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Support Local Communities
                </h3>
                <p className="text-sm text-gray-600">
                  Every donation helps reduce food waste and brings relief to
                  those who need it most.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="mx-auto">
              <img
                src={flash}
                alt="Food Sharing Illustration"
                className="rounded-lg object-cover w-full h-full max-h-[400px]"
              />
            </div>

            {/* Right Side */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Manage Your Contributions
                </h3>
                <p className="text-sm text-gray-600">
                  Keep track of your shared items and requests all in one place
                  — stay organized and helpful.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Safe & Verified Sharing
                </h3>
                <p className="text-sm text-gray-600">
                  We prioritize your safety by verifying users and ensuring
                  smooth communication.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Make a Real Impact
                </h3>
                <p className="text-sm text-gray-600">
                  Every shared meal means one less person goes hungry — be the
                  reason someone smiles today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
