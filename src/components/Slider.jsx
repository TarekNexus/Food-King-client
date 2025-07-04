import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router"; // ✅

import slider1 from "../assets/food-3.jpg";
import slider2 from "../assets/food-tt.jpeg";
import slider3 from "../assets/food-1.avif";
import slider4 from "../assets/food-4.jpg";

const Slider = () => {
  const navigate = useNavigate(); // ✅

  const slides = [
    {
      image: slider1,
      title: "Share Your Extra Food",
      description: "Help reduce food waste by donating what you don't need",
      cta: "Add Food",
      path: "/AddFood", // ✅
    },
    {
      image: slider2,
      title: "Browse Available Meals",
      description: "Find shared meals and groceries near you in seconds",
      cta: "Find Food",
      path: "/AvailableFoods", // ✅
    },
    {
      image: slider3,
      title: "Request What You Need",
      description:
        "Send requests for available food and manage your requests easily",
      cta: "Request Food",
      path: "/MyFoodRequest", // ✅
    },
    {
      image: slider4,
      title: "Join the Food King Community",
      description: "Together we fight hunger and food waste—one meal at a time",
      cta: "Get Started",
      path: "/auth/register", // ✅
    },
  ];

  return (
    <div className="w-full h-[70vh] max-h-[800px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <div className="max-w-2xl mx-auto text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-100">
                  {slide.description}
                </p>
                <button
                  onClick={() => navigate(slide.path)} // ✅
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
