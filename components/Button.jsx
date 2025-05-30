

const Button = ({text,fill}) => {
  return (
    
        <button className={`  ${fill && 'bg-[#ED6923] text-white rounded-2xl' || 'text-[#ED6923] bg-transparent rounded-lg'} h-12 text-lg cursor-pointer font-semibold border  border-[#ED6923]  px-8 py-2 justify-end mt-10`}> {text}</button>
  )
}

export default Button