

const Heading = ({t1,t2,t3,post}) => {
  return (
    <div className={`text-left space-y-4 ${post}`}>
        <h4 className="text-2xl font-rancho">{t1}</h4>

        <h1 className="text-4xl font-bold text-black">{t2} <span className="text-[#ED6923]">{t3}</span></h1>
    </div>
  )
}

export default Heading