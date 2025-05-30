import Image from "next/image";

function Hero() {
  return (
    <section className="hero-bg px-4 flex flex-col-reverse lg:flex-row  lg:px-24 py-28">
      {/* left section */}

      <div className="text-[#ED6923] flex-col gap-y-10 w-full lg:w-1/2 pt-32">
        <h1 className=" text-5xl lg:text-7xl text-[#ED6923] font-rancho">
          Hungry?
        </h1>

        <h1 className="font-bold text-5xl lg:text-7xl  leading-snug">
          <span className="text-black">Let Us</span> Bring <br></br> The Feast
          to You
        </h1>

        <h6 className="text-lg font-poppins leading-relaxed text-[#333333] mt-6">
          Explore hundreds of delicious options from top restaurants and Enjoy
          fast, reliable delivery right to you.
        </h6>

        <div className="flex items-center bg-white mt-6 rounded-xl shadow-md overflow-hidden border border-orange-300 w-full max-w-lg lg:max-w-xl">
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-grow px-4 py-[15px] text-gray-600 placeholder:text-gray-400 w-10 sm:w-[50%] focus:outline-none"
          />

          <button className="flex items-center gap-1 text-orange-500 px-4 border-l border-gray-200 hover:text-orange-600">
            <Image height={10} width={10} src={"/SVG.png"} alt="svg"></Image>

            <span className="text-sm font-medium">Locate me</span>
          </button>

          <button className="bg-[#F37022] hover:bg-orange-600 text-white sm:text-lg font-semibold px-1 lg:px-6 py-[16px] rounded-r-xl m-0 transition">
            Find Food
          </button>
        </div>
      </div>

      {/* right section */}

      <div className=" w-full lg:w-1/2 mx-auto ">
        <div className="bg-white absolute rounded-2xl p-2 w-52 shadow-md text-left space-y-4 bottom-90 ">
          <div className="flex items-center justify-start -space-x-4">
            <Image
              src="/hp-1.png"
              alt="Avatar 1"
              width={40}
              height={40}
              className="w-12 h-12  rounded-full border-1 border-white object-cover"
            />
            <Image
              src="/hr2.png"
              alt="Avatar 2"
              width={40}
              height={40}
              className="w-12 h-12  rounded-full border-1 border-white object-cover"
            />
            <div className="relative">
              <Image
                src="/hp-3.png"
                alt="Avatar 3"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full border-1 border-white object-cover"
              />
            </div>

            <div className="relative">
              <Image
                src="/iconPlus.png"
                alt="Avatar 3"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-1 bg-white border-white object-cover"
              />
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-800">
            Satisfied Customer
          </h4>
          <div className="flex items-center justify-start gap-1 text-gray-600 text-lg">
            <div className="h-5 w-5 flex items-center justify-center">
              <Image
                src="/star.png"
                alt="Star"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <span className="font-semibold">5.0</span>
            <span>(3K Reviews)</span>
          </div>
        </div>

        <div className="w-80 h-36 p-4 bg-white/40 backdrop-blur-[50px] absolute -bottom-36 shadow-lg rounded-lg z-10 ">
          <div className="flex gap-x-4">
            <Image
              src={"/hero1.png"}
              alt="hero1"
              className="h-28 w-28"
              height={50}
              width={50}
            ></Image>

            <div className="space-y-[3px] py-4">
              <h1 className="text-[16px] font-semibold">
                Flavor Fusion Bistro
              </h1>
              <h4 className="text-[#3D3D3D] text-[12px]">Kaliurang, Seleman</h4>
              <h6 className="flex items-center gap-2">
                4.9{" "}
                <Image
                  src={"/star.png"}
                  alt="star"
                  className="h-4 w-4"
                  width={10}
                  height={10}
                ></Image>
              </h6>
              <Image
                src={"/heart.png"}
                alt="star"
                className="h-4 w-4 absolute bottom-4 right-4"
                width={10}
                height={10}
              ></Image>
            </div>
          </div>
        </div>

        <div className="h-20 w-40 bg-white/80 backdrop-blur-[50px] bottom-10 lg:-bottom-10 sm:right-50 rounded-lg  absolute z-10">
          <div className="flex justify-center items-center pt-4 gap-x-2 ">
            <div>
              <Image
                src={"/hero2.png"}
                alt="hero1"
                className="h-10 w-10"
                height={50}
                width={50}
              ></Image>
            </div>

            <div>
              <h1 className="text-lg font-semibold">24/7</h1>
              <p className="text-[#737373]">Delivery</p>
            </div>
          </div>
        </div>

        <Image
          src={"/hero-person.png"}
          alt="hero-person"
          className="h-[533px] w-[590px] relative z-0"
          width={280}
          height={380}
        ></Image>
      </div>
    </section>
  );
}

export default Hero;
