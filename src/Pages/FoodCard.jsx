import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const FoodCard = ({ food }) => {
  
  return (
    <motion.div
     whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{food.foodName}</h3>
      <p>
        Quantity :{food.quantity} 
      </p>
      <p>
        Location: {food.location}
      </p>
      <p>Expire Date: {new Date(food.expiredAt).toLocaleString()}</p>
      
      <p className="mt-1">{food.notes}</p>
      <Link to={`/foods/${food._id}`}>
        <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          View Details
        </button>
      </Link>
    </motion.div>
  );
};

export default FoodCard;
