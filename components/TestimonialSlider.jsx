"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Leon Fischer",
    role: "Satisfied Customer",
    message:
      "Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "Happy Customer",
    message:
      "The experience with Tweet was outstanding! The delivery was quick and the food was fresh!",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Happy Customer",
    message:
      "The experience with Tweet was outstanding! The delivery was quick and the food was fresh!",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Happy Customer",
    message:
      "The experience with Tweet was outstanding! The delivery was quick and the food was fresh!",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Happy Customer",
    message:
      "The experience with Tweet was outstanding! The delivery was quick and the food was fresh!",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="py-12 px-4 bg-[#fff4f1] flex justify-center">
      <div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="w-[485px] custom-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#fcf0e9] p-8 rounded-xl border border-[#ED6923] shadow-sm relative">
                <div className="relative">
                  <FaQuoteLeft className="text-[#ED6923] text-xl mb-2" />
                  <p className="text-[#333] font-medium leading-relaxed pr-8">
                    {item.message}
                  </p>
                  <FaQuoteRight className="text-[#ED6923] text-xl absolute bottom-0 right-0" />
                </div>

                <div className="flex items-center mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 rounded-full "
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-black">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-700">{item.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1 bg-[#ED6923] p-2 rounded-md">
                    {[...Array(item.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-white" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .custom-swiper .swiper-pagination {
            position: relative;
            margin-top: 40px;
            text-align: center;
          }

          .custom-swiper .swiper-pagination-bullet {
            background-color: #ed6923;
            opacity: 0.4;
            width: 12px;
            height: 12px;
            margin: 0 6px;
            border-radius: 50%;
            transition: transform 0.3s ease;
          }

          .custom-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </div>
  );
}
