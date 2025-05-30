

const Heading = ({t1,t2,t3,post}) => {
  return (
    <div className={`text-left space-y-4 mx-2 md:mx-0 ${post}`}>
        <h4 className="md:text-2xl text-xl font-rancho">{t1}</h4>

        <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold text-black">{t2} <span className="text-[#ED6923]">{t3}</span></h1>
    </div>
  )
}

export default Heading