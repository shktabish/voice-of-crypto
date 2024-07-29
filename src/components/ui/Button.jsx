import { HiArrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"

const Button = ({ text = "Schedule a demo now", link="https://calendly.com/sales-voiceofcrypto/30min?month=2024-07" }) => {
  return (
    <Link to={link} >
      <div className="bg-white w-full h-16 max-w-80 inline-flex gap-2 items-center rounded-full cursor-pointer" >
          <div className="bg-accent h-16 group-hover:bg-black group-hover:text-white text-center text-black px-6 py-4 grow max-w-64 max-sm:text-sm rounded-full font-Kodchasan font-bold flex justify-center items-center" >{text}</div>
          <div className="bg-black group-hover:bg-accent h-12 aspect-square rounded-full flex justify-center items-center mr-2" >
              <HiArrowRight className="text-2xl text-white" />
          </div>
      </div>
    </Link>

  )
}

export default Button