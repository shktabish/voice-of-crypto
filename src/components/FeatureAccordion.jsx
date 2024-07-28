import { featureAccordionData } from './../constants/data'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { motion } from 'framer-motion'
import { useState } from 'react'
import MarqueeElement from './ui/Marquee'

const FeatureAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleClick = (index) => {
    setOpenIndex(index)
  }

  return (
    <div>
      <MarqueeElement color='bg-white' position='bottom-0' />
      <div className='bg-white text-black flex max-lg:flex-col-reverse justify-center items-center gap-10 py-20' >
        <div className='w-1/3 max-sm:w-[90%] max-lg:w-3/4 flex flex-col gap-5 '>
          {featureAccordionData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className='bg-[#F5F5F5] max-sm:px-2 px-4 max-sm:py-4 py-8 w-1/2 max-sm:w-[90%] max-lg:w-4/5 rounded-3xl'>
          <img src={featureAccordionData[openIndex].image} alt="feature image" className='w-full drop-shadow-xl' />
        </div>
      </div>
    </div>
  )
}

export default FeatureAccordion

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`bg-[#F5F5F5] rounded-xl border border-accent ${isOpen ? "drop-shadow-xl" : ""}`}>
    <div
      className="w-full px-4 py-3 text-left flex justify-between items-center cursor-pointer relative"
      onClick={onClick}
    >
      <span className='max-md:text-lg text-xl font-bold' >{question}</span>
      <span className={`h-16 aspect-square ${isOpen ? "bg-black" : "bg-[#9C9C9C]"} rounded-lg ml-2 relative top-0 right-0 flex justify-center items-center`} >
        <BsFillArrowRightCircleFill className={`${isOpen ? "fill-accent" : "fill-white"} text-4xl`} />
      </span>
    </div>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && <p className="max-md:text-sm text-lg px-6 max-sm:py-3 pb-6 font-medium">{answer}</p>}
    </motion.div>
  </div>
)