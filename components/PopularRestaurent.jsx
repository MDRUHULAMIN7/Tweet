import Button from "./Button";
import Heading from "./Heading";

import Slider from "./Slider";

const PopularRestaurent = () => {
  const popularRest = [
    {
      id: 1,
      discount: 30,
      image: "/burger2.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "Burger King",
      deliveryTime: "20-30",
      deliveryCharge: 2,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
    {
      id: 2,
      discount: 10,
      image: "/vennas.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "Vienna's Delight",
      deliveryTime: "20-40",
      deliveryCharge: 3,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
    {
      id: 3,
      discount: 20,
      image: "/bistro.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "AlpenFlair Bistro",
      deliveryTime: "30-40",
      deliveryCharge: 5,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
    {
      id: 4,
      discount: 20,
      image: "/mozarts.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "Mozarts Table",
      deliveryTime: "30-40",
      deliveryCharge: 5,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
    {
      id: 5,
      discount: 30,
      image: "/burger2.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "Burger King",
      deliveryTime: "20-30",
      deliveryCharge: 2,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
    {
      id: 6,
      discount: 10,
      image: "/vennas.jpg",
      review: 4.5,
      reviews: 85,
      isLove: true,
      title: "Vienna's Delight",
      deliveryTime: "20-40",
      deliveryCharge: 3,
      foods: "Pizza | Burger | Pasta | Chicken Fry",
    },
  ];
  return (
    <div className="bg-[#fdd8cf40] px-auto lg:px-30 py-8">
      <div className="flex justify-between">
        {" "}
        <Heading t1="Popular Restaurent" t2="Popular" t3="Reataurent Near me" />
        <Button text={"View All"} fill={false}></Button>
      </div>

      <Slider restData={popularRest} card={"popularRes"}></Slider>
    </div>
  );
};

export default PopularRestaurent;
