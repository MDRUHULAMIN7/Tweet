'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import Image from "next/image"
import CategoryCard from './CategoryCard';
import PopularCard from './PopularCard';

const Slider = ({arrayData,foodData,card}) => {
      const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (


  
// popular
card === 'popularFood' && 
  <div className="relative py-16">
    <button
      ref={prevRef}
      className="absolute w-10 h-10 -left-16 cursor-pointer top-[50%] -translate-y-[50%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2"
    >
      <Image
        height={80}
        width={80}
        className="w-full h-full"
        src="/arr-left.png"
        alt="Previous"
      />
    </button>

    <button
      ref={nextRef}
      className="absolute w-[34px] h-[34px] -right-8 top-[50%] -translate-y-[50%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2 cursor-pointer"
    >
      <Image
        height={10}
        width={10}
        className="w-full h-full"
        src="/arr-right.png"
        alt="Next"
      />
    </button>

    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {foodData?.map((data) => (
        <SwiperSlide key={data?.id}>
          <PopularCard food={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div> || card === 'category' && 
// category
  <div className="relative py-16">
    <button
      ref={prevRef}
      className="absolute w-10 h-10 -left-16 cursor-pointer top-[62%] -translate-y-[62%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2"
    >
      <Image
        height={80}
        width={80}
        className="w-full h-full"
        src="/arr-left.png"
        alt="Previous"
      />
    </button>

    <button
      ref={nextRef}
      className="absolute w-[34px] h-[34px] -right-8 top-[62%] -translate-y-[62%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2 cursor-pointer"
    >
      <Image
        height={10}
        width={10}
        className="w-full h-full"
        src="/arr-right.png"
        alt="Next"
      />
    </button>

    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={7}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {arrayData?.map((data) => (
        <SwiperSlide key={data?.id}>
          <CategoryCard data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div> 


  )
}

export default Slider