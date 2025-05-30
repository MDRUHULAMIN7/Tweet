'use client'

import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image"
import { IoHeartOutline, IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import { FaPlus } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
const PopularCard = ({food}) => {
   
  

  return (
       <div key={food.id} className="bg-white rounded-2xl shadow-md mx-auto w-72 relative">
 
      <span className="absolute top-3 left-0 bg-orange-500 text-white text-sm rounded-r-2xl font-bold pr-3 py-1 rounded">
      <span className='flex items-center gap-1'> <CiDiscount1 className='text-xl' /> {food.discount}% Off</span>
      </span>


      <span className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-orange-500">
        <IoHeartOutline size={20} />
      </span>


      <div className="w-full h-44 overflow-hidden rounded-t-xl">
        <Image
          src={food.image} 
          alt="Burger"
          width={300}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>


      <div className="flex items-center absolute top-32 right-2 gap-1 mt-2 bg-white px-2 py-1 rounded-3xl">
        <FaStar className="text-yellow-400" size={14} />
        <span className="text-sm font-semibold text-gray-700">{food.review}</span>
        <span className="text-xs text-gray-500">({food.reviews})</span>
      </div>

   

      <div className="flex p-4 justify-between ">
        <div>
             <h2 className="text-xl font-medium ">{food.title}</h2>
        </div>
          <div className="flex flex-col pt-1">
          <p className="text-sm line-through text-gray-400">{food.regularPrice}</p>
          <p className="text-lg font-bold text-orange-500">{food.price}</p>
        </div>
      </div>
   


      <p className="text-lg px-3 text-gray-800" > {food.subTitle}</p>

   
     

      <div className="flex justify-between items-center px-4 pb-2">
      
           <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <div className="flex items-center gap-1">
          <IoTimeOutline />
          <span className="text-[#ED6923]">{food.deliveryTime} min</span>
        </div>
       
      </div>

       <div className="flex text-gray-400 text-sm items-center gap-2">
             <Image
          src="/bike.png" 
          alt="bike"
          width={30}
          height={10}
          className=" w-full h-full"
        />
         
          <span>${  food.deliveryCharge}</span>
        </div>
       
        <button className="bg-orange-500 text-white p-2 rounded-full shadow">
          <  FaPlus size={20} className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default PopularCard