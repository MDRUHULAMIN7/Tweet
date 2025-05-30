import Image from "next/image"


const CategoryCard = ({data}) => {
  return (
    <div className={`rounded-lg h-32 w-36  relative ${data?.bg}`}>
                  <Image
                    height={50}
                    width={60}
                    className="w-full h-24 mx-auto absolute bottom-14"
                    src={data.image}
                    alt="logo"
                  />
                  <h1 className="text-white text-xl font-medium text-center absolute bottom-3 left-1/4">
                    {data.title}
                  </h1>
                </div>
  )
}

export default CategoryCard