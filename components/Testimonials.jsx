import Image from "next/image"
import Heading from "./Heading"


const Testimonials = () => {
  return (
    <div className="bg-[#fdd8cf40] px-auto lg:px-40 py-8 flex flex-col justify-between lg:flex-row">
{/* left section */}
 <div>

    {/* Heading */}
          <div className={`text-left space-y-4 `}>
        <h4 className="text-2xl font-rancho">Testimonial</h4>

        <h1 className="text-4xl font-bold text-black">What 
<span className="text-[#ED6923]">Customer Saying</span> <br />
<span  className="text-4xl font-bold text-black">About our Services</span></h1> 
    </div>
 </div>

 {/* right section */}

<div>

    <Image
    src={'/testimonial.png'}
    alt="photo"
    height={500}
    width={500}></Image>
</div>



    </div>
  )
}

export default Testimonials