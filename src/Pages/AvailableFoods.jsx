import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Loading from "../components/Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isThreeCol, setIsThreeCol] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append("searchTerm", searchTerm);
      if (sortOrder) params.append("sortOrder", sortOrder);

      try {
        const res = await fetch(`https://food-king-server-rho.vercel.app/foods?${params.toString()}`);

        if (!res.ok) throw new Error("Failed to fetch foods");

        const data = await res.json();
        setFoods(data.filter((food) => food.status === "available"));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [searchTerm, sortOrder]);
 useEffect(() => {
    document.title = "Available Foods | FOOD KING";
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <h2 className="text-2xl font-bold mb-4">Available Foods</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by food name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        >
          <option value="">Sort by Expiry (optional)</option>
          <option value="asc">Expire Date Soon</option>
          <option value="desc">Expire Date Late</option>
        </select>
      </div>

      <div className="mb-4 text-right">
        <button
          onClick={() => setIsThreeCol(!isThreeCol)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Change Layout ({isThreeCol ? "2 Columns" : "3 Columns"})
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loading />
        </div>
      ) : foods.length > 0 ? (
        <div
          className={`grid grid-cols-1 ${isThreeCol ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}
        >
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No foods found.</p>
      )}
    </div>
  );
};

export default AvailableFoods;
