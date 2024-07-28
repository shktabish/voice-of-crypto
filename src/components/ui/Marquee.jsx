import { GoDotFill } from "react-icons/go"
import Marquee from "react-fast-marquee"

const MarqueeElement = ({ rotate = "rotate-2", color="bg-black", height = "h-1/2", position="top-0" }) => {
  const tags = [
    "Power of AI", 
    "Influencer Marketing", 
    "Web 3.0 Influencers", 
    "One-Stop Solution", 
    "Revolutionary Search Tool"
  ]

  const elements = tags.map((tag, index) => {
    return (
      <div 
        key={index} 
        className="text-black px-6 py-4 font-bold italic max-sm:text-base max-lg:text-xl text-3xl flex gap-3 items-center" 
      >
        <GoDotFill className="text-2xl inline" />
        {tag}
      </div>
    )
  })

  return (
    <div className="relative">
      <div className={`absolute block inset-x-0 ${position} ${height} ${color} z-10`}></div>
      <Marquee className={`bg-accent ${rotate} py-2 relative z-20`} gradient={false}>
        {elements}
      </Marquee>
    </div>
  )
}

export default MarqueeElement