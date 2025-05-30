import Image from "next/image"
import Heading from "./Heading"
import TestimonialSlider from "./TestimonialSlider"


const Testimonials = () => {
  return (
    <div className="bg-[#fdd8cf40] px-4  lg:px-32 py-8 pt-40 flex flex-col justify-between lg:flex-row">
{/* left section */}
 <div className="pt-4 lg:pt-12 mx-2 md:mx-0">

    {/* Heading */}
          <div className={`text-left space-y-5 `}>
        <h4 className="md:text-2xl text-xl font-rancho">Testimonial</h4>

        <h1 className="md:text-5xl text-2xl font-bold text-black leading-snug">What 
<span className="text-[#ED6923]">Customer Saying</span> <br />
<span  className="text-5xl font-bold text-black">About our Services</span></h1> 
    </div>
    {/* testimonial slider */}

    <TestimonialSlider></TestimonialSlider>
 </div>

 {/* right section */}

<div>

    <Image
    src={'/testimonial.png'}
    alt="photo"
    height={700}
    width={700}></Image>
</div>



    </div>
  )
}

export default Testimonials