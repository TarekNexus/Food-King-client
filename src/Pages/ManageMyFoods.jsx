import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const ManageMyFoods = () => {
   useEffect(() => {
    document.title = "ManageMyFoods | FOOD KING";
  }, []);
  const { user, loading } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    const fetchFoods = async () => {
      setFetching(true);
      try {
        const res = await fetch(`https://food-king-server-rho.vercel.app/foodsByDonor?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch foods");
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error("Fetch error:", error);
        Swal.fire("Error", "Could not load your foods", "error");
      } finally {
        setFetching(false);
      }
    };

    fetchFoods();
  }, [user?.email, user?.accessToken]);

  if (loading) return <Loading></Loading>;
  if (!user) return <Navigate to="/login" />;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this food?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://food-king-server-rho.vercel.app/foods/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        const data = await res.json();

        if (data.success) {
          Swal.fire("Deleted!", "Food deleted successfully!", "success");
          // Refresh foods after deletion
          setFetching(true);
          const freshRes = await fetch(`https://food-king-server-rho.vercel.app/foodsByDonor?email=${user.email}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          });
          if (!freshRes.ok) throw new Error("Failed to refresh foods");
          const freshData = await freshRes.json();
          setFoods(freshData);
        } else {
          Swal.fire("Error!", "Failed to delete food.", "error");
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire("Error!", "Failed to delete food.", "error");
      } finally {
        setFetching(false);
      }
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      quantity: form.quantity.value,
      location: form.location.value,
      expiredAt: form.expiredAt.value,
      notes: form.notes.value,
    };

    try {
      const res = await fetch(`https://food-king-server-rho.vercel.app/foods/${editingFood._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(updatedFood),
      });

      if (res.ok) {
        Swal.fire("Success!", "Food updated successfully!", "success");
        setEditingFood(null);
        // Refresh foods after update
        setFetching(true);
        const freshRes = await fetch(`https://food-king-server-rho.vercel.app/foodsByDonor?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        if (!freshRes.ok) throw new Error("Failed to refresh foods");
        const freshData = await freshRes.json();
        setFoods(freshData);
      } else {
        Swal.fire("Error!", "Failed to update food.", "error");
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire("Error!", "Failed to update food.", "error");
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h2 className="text-2xl font-bold mb-6 text-center">Manage My Foods</h2>

      {fetching ? (
        <p>Loading foods...</p>
      ) : foods.length === 0 ? (
        <p>You have not added any foods yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Food Name</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Expire Date</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food._id} className="text-center">
                  <td className="p-2 border">{food.foodName}</td>
                  <td className="p-2 border">{food.quantity}</td>
                  <td className="p-2 border">{food.location}</td>
                  <td className="p-2 border">{new Date(food.expiredAt).toLocaleDateString()}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => setEditingFood(food)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {editingFood && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Update Food</h3>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="foodName">
                Food Name
              </label>
              <input
                type="text"
                id="foodName"
                name="foodName"
                defaultValue={editingFood.foodName}
                required
                placeholder="e.g., Fresh Bread"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="foodImage">
                Food Image URL
              </label>
              <input
                type="text"
                id="foodImage"
                name="foodImage"
                defaultValue={editingFood.foodImage}
                required
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="quantity">
                Food Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={editingFood.quantity}
                required
                min="1"
                placeholder="e.g., 5"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="location">
                Pickup Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={editingFood.location}
                required
                placeholder="e.g., Dhaka, Uttara"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="expiredAt">
                Expired Date
              </label>
              <input
                type="date"
                id="expiredAt"
                name="expiredAt"
                defaultValue={new Date(editingFood.expiredAt).toISOString().split("T")[0]}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1" htmlFor="notes">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                defaultValue={editingFood.notes || ""}
                placeholder="Mention any special handling or conditions..."
                className="w-full border border-gray-300 rounded px-4 py-2"
              ></textarea>
            </div>

            <div className="mt-4 mb-4">
              <p className="text-lg text-gray-600">
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-medium">Available</span>
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditingFood(null)}
                className="px-4 py-2 border rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
