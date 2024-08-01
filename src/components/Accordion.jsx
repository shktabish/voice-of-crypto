import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`${isOpen ? "bg-accent" : "bg-[#F5F5F5]"} rounded-xl my-5 border border-accent`}>
    <div
      className="w-full max-sm:px-6 px-12 max-sm:py-3 py-6 text-left flex justify-between items-center cursor-pointer"
      onClick={onClick} 
    >
      <span className='max-md:text-lg text-xl font-bold' >{question}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && <p className="max-md:text-sm max-sm:px-6 px-12 max-sm:py-3 pb-6 font-medium">{answer}</p>}
    </motion.div>
  </div>
)

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="max-lg:w-4/5 w-3/5 mx-auto my-8">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
