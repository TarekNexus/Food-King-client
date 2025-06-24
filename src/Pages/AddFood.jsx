import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const AddFood = () => {
  useEffect(() => {
    document.title = "Add Food | FoodKing";
  }, []);

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    const newFood = {
      ...Object.fromEntries(formData.entries()),
      donorName: user.displayName,
      donorEmail: user.email,
      donorImage: user.photoURL,
      status: "available",
    };
    console.log(newFood);
    fetch("https://food-king-server-rho.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Food added successfully!",
            icon: "success",
            confirmButtonColor: "#ef4444",
          }).then(() => form.reset());
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding food:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to add food.",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-2">Add New Food</h2>
        <p className="text-xl">
          Fill out the form to share food with the community
        </p>
      </div>

      <div className="w-full max-w-4xl shadow-lg rounded-xl p-8 space-y-6">
       
        <div className="flex items-center gap-4 mb-6">
          {user.photoURL && (
            <img
            referrerPolicy="no-referrer"
              src={user.photoURL}
              alt="Donor"
              className="w-16 h-16 rounded-full border"
            />
          )}
          <div>
            <p className="text-red-600 font-semibold">{user.displayName}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleAddFood}
        >
         
          <input type="hidden" name="donorName" value={user.displayName} />
          <input type="hidden" name="donorEmail" value={user.email} />
          <input type="hidden" name="donorImage" value={user.photoURL} />
          <input type="hidden" name="status" value="available" />

          <div className="space-y-4">
            <div>
              <label className="block text-red-600 font-medium mb-1">
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                required
                placeholder="e.g., Fresh Bread"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-red-600 font-medium mb-1">
                Food Image URL
              </label>
              <input
                type="text"
                name="foodImage"
                required
                placeholder="https://example.com/image.jpg"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-red-600 font-medium mb-1">
                Food Quantity
              </label>
              <input
                type="number"
                name="quantity"
                required
                min="1"
                placeholder="e.g., 5"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-red-600 font-medium mb-1">
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="e.g., Dhaka, Uttara"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-red-600 font-medium mb-1">
                Expired Date
              </label>
              <input
                type="date"
                name="expiredAt"
                required
                className="w-full border border-red-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-red-600 font-medium mb-1">
                Additional Notes
              </label>
              <textarea
                name="notes"
                rows="5"
                placeholder="Mention any special handling or conditions..."
                className="w-full border border-red-300 rounded px-4 py-2"
              ></textarea>
            </div>

            <div className="mt-4">
              <p className="text-xl text-gray-600">
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-medium">Available</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Food"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
