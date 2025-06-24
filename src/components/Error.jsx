import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import plant404Animation from '../assets/Animation - 1749111653524.json'; // Update the path as needed

const Error = () => {
  const navigate = useNavigate();
 useEffect(() => {
    document.title = "Error | FOOD KING";
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-red-900 text-center px-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-red-50 bg-[radial-gradient(#fecaca_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
        <Lottie animationData={plant404Animation} loop={true} />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      <p className="mb-6 text-red-800 max-w-xs sm:max-w-md">
        The page you’re looking for doesn’t exist or was moved. Let’s get back to growing!
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-200"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
