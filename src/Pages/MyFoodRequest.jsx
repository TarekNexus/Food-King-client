import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../components/Loading";

const fetchUserRequests = async (email, token) => {
  const res = await fetch(`https://food-king-server-rho.vercel.app/requests?email=${email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch requests");
  return res.json();
};

const MyFoodRequest = () => {
   useEffect(() => {
    document.title = "MyFoodRequest | FOOD KING";
  }, []);
  const { user } = useContext(AuthContext);

  const {
    data: requests = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["requests", user?.email],
    queryFn: () => fetchUserRequests(user.email, user.accessToken),
    enabled: !!user?.email && !!user?.accessToken,
  });

  if (!user || isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-center text-red-600">Failed to load requests.</p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
        My Food Requests
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven’t requested any food yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-red-200">
            <thead className="bg-red-100">
              <tr>
                <th className="py-2 px-4 border">Food</th>
                <th className="py-2 px-4 border">Donor Name</th>
                <th className="py-2 px-4 border">Pickup Location</th>
                <th className="py-2 px-4 border">Expire Date</th>
                <th className="py-2 px-4 border">Request Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="text-center hover:bg-red-50 transition">
                  <td className="py-2 px-4 border">{req.foodName}</td>
                  <td className="py-2 px-4 border">{req.donorName}</td>
                  <td className="py-2 px-4 border">{req.pickupLocation}</td>
                  <td className="py-2 px-4 border">
                    {new Date(req.expiredAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border">
                    {new Date(req.requestDate).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
