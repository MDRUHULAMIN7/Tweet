'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import Image from "next/image"
import CategoryCard from './CategoryCard';

const Slider = ({arrayData}) => {
      const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
     <div className="py-16 relative">
        
          <button
            ref={prevRef}
            className="absolute -left-16 cursor-pointer top-[60%] -translate-y-[60%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2"
          >
            <Image
                    height={50}
                    width={60}
                    className="w-full h-4"
                    src={'/arr-left.png'}
                    alt="logo"
                  />
          </button>
          <button
            ref={nextRef}
            className="absolute -right-8 top-[60%] -translate-y-[60%] z-10 text-3xl bg-white rounded-full shadow px-2 py-2 cursor-pointer"
          >
              <Image
                    height={50}
                    width={10}
                    className="w-full h-[12px]"
                    src={'/arr-right.png'}
                    alt="logo"
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
              <SwiperSlide key={data?.id} >
               <CategoryCard data={data}></CategoryCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default Slider