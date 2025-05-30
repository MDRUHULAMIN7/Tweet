import Image from "next/image";
import Heading from "./Heading";

const Resturants = () => {
  return (
    <div className="relative bg-[#fdd8cf40] w-full py-16 px-4 mx-auto lg:px-32  overflow-hidden">
      <div
        className="absolute bottom-0 w-full lg:w-[85%] h-[300px]  rounded-[20px]"
        style={{
          clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)",
          backgroundImage: `url('/restaurents-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        <div className="text-center lg:text-left max-w-xl">
          <Heading
            t1="Restaurents"
            t2="Enhance your experience,"
            t3="Download the Tweet app today!"
          ></Heading>

          <p className="text-gray-600 mt-4">
            Discover a whole new level of convenience with our mobile app. From
            browsing our delectable menu to securing exclusive deals, it's your
            gateway to a world of culinary delights. Download now and elevate
            your dining experience with just a tap.
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center lg:justify-start mb-50 ">
            <Image
              src="/google-play.png"
              width={140}
              height={50}
              alt="Google Play"
            />
            <Image
              src="/app-store.png"
              width={140}
              height={50}
              alt="App Store"
            />
          </div>

          <div className="relative ">
            <div className=" absolute -bottom-12">
              <div className="flex items-center gap-4   p-6 rounded-xl ml-9  ">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-100">100+</h3>
                  <p className="text-lg text-gray-100">Food Menu</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-100">100+</h3>
                  <p className="text-lg text-gray-100">Downloads</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-100">20+</h3>
                  <p className="text-lg text-gray-100">Positive reviews</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-100">4.7</h3>
                  <p className="text-lg text-gray-100">Average Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <Image
            src="/mobile.png"
            width={300}
            height={600}
            alt="Mobile App"
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Resturants;
