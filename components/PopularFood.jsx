import Button from "./Button"
import Heading from "./Heading"
import PopularCard from "./PopularCard"
import Slider from "./Slider"

const PopularFood = () => {
  const popularFoods =[
    {
      id:1,
      discount:30,
      image:'/burger1.jpg',
      review:4.5,
      reviews:85,
      isLove:true,
      title:"Burger with Emmental Cheese",
      regularPrice:49.99,
      price:44.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:2,
      discount:35,
      image:'/chicken.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Tandoori Chicken",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:3,
      discount:35,
      image:'/doner.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Döner Kebab",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:4,
      discount:35,
      image:'/pizza.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Pepperoni Pizza Slice",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:5,
      discount:30,
      image:'/burger1.jpg',
      review:4.5,
      reviews:85,
      isLove:true,
      title:"Burger with Emmental Cheese",
      regularPrice:49.99,
      price:44.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:6,
      discount:35,
      image:'/chicken.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Tandoori Chicken",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:7,
      discount:35,
      image:'/doner.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Döner Kebab",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
    {
      id:8,
      discount:35,
      image:'/pizza.jpg',
      review:4.6,
      reviews:85,
      isLove:true,
      title:"Pepperoni Pizza Slice",
      regularPrice:39.99,
      price:34.99,
      subTitle:'Burger King',
      deliveryTime:30,
      deliveryCharge:2

    },
  ]
  return (
    <div className="bg-[#fdd8cf40] px-auto lg:px-30 py-8">

        <div className="flex justify-between">   <Heading t1="Popular Food" t2="Popular" t3="Food Near me" />
<Button text={'View All'} fill={false}></Button>
        </div>

      <Slider foodData={popularFoods} card={'popularFood'}></Slider>

          
    </div>
  )
}

export default PopularFood