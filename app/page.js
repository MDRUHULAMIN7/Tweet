import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularFood from "@/components/PopularFood";
import PopularRestaurent from "@/components/PopularRestaurent";
import Image from "next/image";

export default function Home() {
  return (
  <div>
  {/* Hero section */}
  <Hero></Hero>

  {/* category */}

  <Category></Category>

  {/* popular food */}

  <PopularFood></PopularFood>

  {/* popular resturent */}
  <PopularRestaurent></PopularRestaurent>

  </div>
  );
}
