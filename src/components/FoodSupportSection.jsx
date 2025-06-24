import React from "react";

const FoodSupportSection = () => {
  return (
    <section className="text-gray-700 py-12 px-4 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="w-11/12 mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Movement to Share Food, Not Waste
          </h2>
        </div>

        {/* Platform Description */}
        <p className="text-lg leading-relaxed mb-10">
          <span className="font-bold text-gray-900">FoodKing</span> is a
          community-driven food sharing platform where users can donate surplus
          food and request meals when in need. From adding available food items,
          updating or deleting listings, to managing food requests – everything
          is just a few clicks away. Whether you're here to reduce food waste or
          help someone in your neighborhood, FoodKing makes food sharing simple,
          safe, and effective for everyone.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Add & Manage Food */}
          <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
            <div className="text-green-600 text-4xl">🥗</div>
            <div>
              <p className="text-sm text-gray-600">Food Listings</p>
              <p className="text-lg font-semibold text-gray-900">
                Add & manage shared food
              </p>
            </div>
          </div>

          {/* Request Food */}
          <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
            <div className="text-blue-500 text-4xl">🤝</div>
            <div>
              <p className="text-sm text-gray-600">Food Requests</p>
              <p className="text-lg font-semibold text-gray-900">
                Request available meals
              </p>
            </div>
          </div>

          {/* Support Center */}
          <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
            <div className="text-yellow-500 text-4xl">📞</div>
            <div>
              <p className="text-sm text-gray-600">Help & Support</p>
              <p className="text-lg font-semibold text-gray-900">
                +88 01234-567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSupportSection;
