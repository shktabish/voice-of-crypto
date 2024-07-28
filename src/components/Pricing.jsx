import { IoIosCheckmarkCircle } from "react-icons/io"
import Button from "./ui/Button"

const Pricing = ({ name, price, features }) => {
  return (
    <div className="bg-white hover:bg-[#9EDF11] transition-all duration-300 ease-in-out cursor-pointer text-black max-sm:px-3 px-7 py-8 rounded-3xl flex flex-col items-center group hover:scale-105" >
        <div className='text-2xl font-bold py-2' >{name}</div>
        <div className='text-5xl font-bold py-2' >{price}</div>
        <div className="bg-[#D9D9D9] group-hover:bg-[#85C005] h-[2px] w-4/5 my-9" />
        <ul className="" >
          {
            features.map((feature, index) => {
              return <li key={index} className='flex items-center gap-2' >
                <IoIosCheckmarkCircle className='fill-black' />
                <div className="text-lg font-semibold" >{feature}</div>
              </li>
            })
          }
        </ul>
        <div className="mt-10" ><Button /></div>
    </div>
  )
}

export default Pricing