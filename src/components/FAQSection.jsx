import { IoArrowDownCircleSharp } from "react-icons/io5"
import { web3faq, brandfaq } from "../constants/data"
import Accordion from "./Accordion"
import { useState } from "react"

const FAQSection = () => {
    const [faq, setFaq] = useState(brandfaq)

    const handleClick = (type) => {
        if (type === 'web3') {
            setFaq(web3faq);
        } else if (type === 'brand') {
            setFaq(brandfaq);
        }
    }

  return (
    <div className='bg-white text-black relative' id="faqs" >
        <div className='flex items-center justify-center gap-4 pt-10' >
            <div className='h-1 w-10 bg-accent' />
            <div className='max-md:text-base text-xl font-bold' >FAQs</div>
        </div>
        <div className='max-md:text-3xl text-5xl font-bold text-center my-5' >Questions? Look Here</div>
        <div className="flex justify-center flex-wrap max-sm:gap-8 max-md:gap-16 gap-32 mt-20" >
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleClick("brand")} >
                <div className={`max-md:text-lg text-2xl font-bold border-b-4 ${faq === brandfaq ? "border-accent" : "border-[#9C9C9C] text-[#9C9C9C]"} py-2`} >For Brands</div>
                <div className={`w-10 h-10 rounded-lg ${faq === brandfaq ? "bg-black" : "bg-[#9C9C9C]"} flex justify-center items-center`} >
                    <IoArrowDownCircleSharp className={`${faq === brandfaq ? "fill-accent" : "fill-white"} text-3xl`} />
                </div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleClick("web3")} >
                <div className={`max-md:text-lg text-2xl font-bold border-b-4 ${faq === web3faq ? "border-accent" : "border-[#9C9C9C] text-[#9C9C9C]"} py-2`} >For Web3 Influencers</div>
                <div className={`w-10 h-10 rounded-lg ${faq === web3faq ? "bg-black" : "bg-[#9C9C9C]"} flex justify-center items-center`} >
                    <IoArrowDownCircleSharp className={`${faq === web3faq ? "fill-accent" : "fill-white"} text-3xl`} />
                </div>
            </div>
        </div>
        <div className="py-10" ><Accordion data={faq} /></div>
        <img src="./coin2.svg" alt="coin image" className="absolute max-sm:top-5 max-md:top-16 top-32 max-sm:left-5 left-10 max-sm:w-16 max-lg:w-24" />
    </div>
  )
}

export default FAQSection