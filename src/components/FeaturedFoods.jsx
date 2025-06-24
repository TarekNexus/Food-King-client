import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // Corrected import
import FoodCard from "../Pages/FoodCard";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    const fetchFeaturedFoods = async () => {
      try {
        const res = await fetch("https://food-king-server-rho.vercel.app/foods/featured");

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        setFeaturedFoods(data);
      } catch (error) {
        console.error("Error fetching featured foods:", error.message);
      }
    };

    fetchFeaturedFoods();
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-4xl text-center font-extrabold text-red-700 mb-6">
        Featured Foods
      </h2>
      <p className="text-gray-700 text-center mb-12 px-6 max-w-3xl mx-auto leading-relaxed">
        Browse the latest donated food items shared by kind-hearted people in
        your community. Request what you need — no one should go hungry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 w-11/12 mx-auto">
        {featuredFoods.length > 0 ? (
          featuredFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No featured foods found.
          </p>
        )}
      </div>

      <div className="mt-14 text-center">
        <Link to="/AvailableFoods">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition font-semibold">
            View All Foods
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFoods;
