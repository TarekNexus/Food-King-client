import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const FoodDetails = () => {
   useEffect(() => {
    document.title = "FoodDetails | FOOD KING";
  }, []);
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.accessToken) return;

    fetch(`https://food-king-server-rho.vercel.app/foods/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch food data");
        return res.json();
      })
      .then((data) => setFood(data))
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to load food details", "error");
      });
  }, [id, user?.accessToken]);

  const handleRequest = async () => {
    setIsRequesting(true);
    try {
      const requestData = {
        foodId: food._id,
        foodName: food.foodName,
        foodImage: food.foodImage,
        donorEmail: food.donorEmail,
        donorName: food.donorName,
        userEmail: user?.email,
        requestDate: new Date().toISOString(),
        pickupLocation: food.location,
        expiredAt: food.expiredAt,
        additionalNotes,
      };

      await fetch("https://food-king-server-rho.vercel.app/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(requestData),
      });

      await fetch(`https://food-king-server-rho.vercel.app/foods/${food._id}`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });

      setFood((prev) => ({ ...prev, status: "requested" }));
      setShowModal(false);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Request submitted successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to submit request", "error");
    } finally {
      setIsRequesting(false);
    }
  };

  if (!food) return <Loading />;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-red-50 shadow-md rounded-lg border border-red-200">
      {/* Food Info */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded mb-6 border border-red-300"
      />
      <h2 className="text-3xl font-bold text-red-700 mb-2">{food.foodName}</h2>
      <p className="text-lg text-red-800">
        <strong>Quantity:</strong> {food.quantity}
      </p>
      <p className="text-lg text-red-800">
        <strong>Location:</strong> {food.location}
      </p>
      <p className="text-lg text-red-800">
        <strong>Expires At:</strong> {new Date(food.expiredAt).toLocaleString()}
      </p>
      <p className="text-lg text-red-800">
        <strong>Status:</strong> {food.status}
      </p>

      <p className="text-md mt-3 text-gray-800">
        <strong className="text-red-600">Notes:</strong> {food.notes}
      </p>
      {food.additionalNotes && (
        <p className="text-sm text-gray-600">
          <strong className="text-red-500">Additional Notes:</strong>{" "}
          {food.additionalNotes}
        </p>
      )}

      {/* Donor Info */}
      <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-4">
        <img
          referrerPolicy="no-referrer"
          src={food.donorImage}
          alt={food.donorName}
          className="w-16 h-16 rounded-full object-cover border-2 border-red-300"
        />
        <div>
          <p className="font-semibold text-red-700">{food.donorName}</p>
          <p className="text-sm text-gray-600">{food.donorEmail}</p>
        </div>
      </div>

      {/* Request Button */}
      {food.status === "available" && (
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Request
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg border">
            <h3 className="text-xl font-bold mb-4 text-center text-red-700">
              Request Food
            </h3>
            <div className="space-y-2 text-sm">
              <div className="w-full mb-4">
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="w-full h-40 object-cover rounded-md mx-auto"
                />
              </div>
              <p>
                <strong>Food Name:</strong> {food.foodName}
              </p>
              <p>
                <strong>Food ID:</strong> {food._id}
              </p>
              <p>
                <strong>Donor Name:</strong> {food.donorName}
              </p>
              <p>
                <strong>Donor Email:</strong> {food.donorEmail}
              </p>
              <p>
                <strong>Your Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Request Date:</strong> {new Date().toLocaleString()}
              </p>
              <p>
                <strong>Pickup Location:</strong> {food.location}
              </p>
              <p>
                <strong>Expire Date:</strong>{" "}
                {new Date(food.expiredAt).toLocaleString()}
              </p>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="w-full p-2 border rounded"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                disabled={isRequesting}
                className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ${
                  isRequesting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isRequesting ? "Requesting..." : "Confirm Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
