import { GoHorizontalRule } from "react-icons/go"
import Tags from "./ui/Tags"

const Hero = () => {
    const words = ["Discover", "Pay", "Connect", "Analyze"]

  return (
    <div className='min-h-screen' >
        <div className='max-sm:px-6 px-32 py-12' ><img src="./logo.svg" alt="nav-bar logo" className='w-36 h-14'/></div>
        <div className='flex max-lg:flex-col justify-around' >
            <div className="max-lg:w-full w-2/3 max-sm:px-6 max-lg:px-20" >
                <div className="flex items-center gap-5" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 max-sm:w-10 w-20 mt-3" >
                        <line x1="0" y1="0" x2="100" y2="0" className="stroke-accent stroke-2"/>
                    </svg>
                    <div className='max-sm:text-xl text-3xl' >Welcome to the Future of</div>
                </div>
                <div className='text-8xl max-sm:text-5xl max-md:text-7xl xl:text-9xl font-Michroma text-accent my-4' >Web 3.0</div>
                <div className='max-sm:text-2xl max-md:text-4xl text-5xl font-bold text-accent my-8' >Influencer Marketing</div>
                <Tags />
            </div>
            <div className='flex flex-col max-lg:grid max-lg:grid-cols-4 max-sm:grid-cols-2 gap-10 max-lg:px-10 max-lg:mt-20' >
                {
                    words.map((word, index) => (
                        <div key={index} className='max-sm:text-xl max-lg:text-2xl text-5xl font-Michroma text-accent text-end' >{word}</div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hero