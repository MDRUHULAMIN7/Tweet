import Image from "next/image"


function Navbar() {
  return (
    <div className="h-40 bg-white  ">

        <div className="bg-[#ed6923] h-12 flex justify-center items-center"><h1 className=" text-xl text-white "> Free Delivery on Your First Order – Order Now!</h1></div>
<div className="flex items-center  justify-between px-16 h-26 ">
  <Image
    height={50}
    width={60}
    className="w-26 h-14"
    src="/logo.png"
    alt="logo"
  />
  <Image
    height={48}
    width={48}
    className="h-12 w-12 rounded-full"
    src="/profile.png"
    alt="profile"
  />
</div>
</div>


  
  )
}

export default Navbar