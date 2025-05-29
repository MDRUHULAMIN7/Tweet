


import Heading from "./Heading"
import Slider from "./Slider"


const categoryData =[
  {
    id:1,
    image:'/category-1.png',
    title:"Donuts",
    bg:'bg-[#E1B47B]'
  },
  {
    id:2,
    image:'/category-2.png',
    title:"Pizza",
     bg:'bg-[#FA8D1C]'
  },
  {
    id:3,
    image:'/category-3.png',
    title:"Kebab",
     bg:'bg-[#FD683E]'
  },
  {
    id:4,
    image:'/category-4.png',
    title:"Burger",
     bg:'bg-[#FF8000]'
  },
  {
    id:5,
    image:'/category-5.png',
    title:"Sandwich",
     bg:'bg-[#F75E28]'
  },
  {
    id:6,
    image:'/category-6.png',
    title:"Shawarma",
     bg:'bg-[#FCBD00]'
  },
  {
    id:7,
    image:'/category-7.png',
    title:"Tako",
     bg:'bg-[#DA270F]'
  },
   { id:8,
    image:'/category-1.png',
    title:"Donuts",
    bg:'bg-[#E1B47B]'
  },
  {
    id:9,
    image:'/category-2.png',
    title:"Pizza",
     bg:'bg-[#FA8D1C]'
  },
  {
    id:10,
    image:'/category-3.png',
    title:"Kebab",
     bg:'bg-[#FD683E]'
  },
  {
    id:11,
    image:'/category-4.png',
    title:"Burger",
     bg:'bg-[#FF8000]'
  },
  {
    id:12,
    image:'/category-5.png',
    title:"Sandwich",
     bg:'bg-[#F75E28]'
  },
  {
    id:13,
    image:'/category-6.png',
    title:"Shawarma",
     bg:'bg-[#FCBD00]'
  },
  {
    id:14,
    image:'/category-7.png',
    title:"Tako",
     bg:'bg-[#DA270F]'
  },
]


const Category = () => {
 
  return (
    <div className=" bg-[#fdd8cf40] px-auto lg:px-30 ">

      <Heading t1="Category" t2="Popular" t3="Category" post="-bottom-70 absolute"></Heading>


      {/* slider with category food */}

<Slider arrayData={categoryData}></Slider>
    </div>
  )
}

export default Category