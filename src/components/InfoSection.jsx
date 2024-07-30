import MarqueeElement from "./ui/Marquee"

const InfoSection = () => {
  return (
    <>
        <div className="bg-white" ><MarqueeElement display="block" /></div>
        <div className='bg-white text-black' >
            <div className='flex max-lg:flex-col justify-center items-center max-md:gap-10 gap-20 py-20' >
                <div className='w-2/5 max-lg:w-4/5' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-20 mb-6" >
                        <line x1="0" y1="0" x2="150" y2="0" className="stroke-accent stroke-[6px]"/>
                    </svg> 
                    <div className='text-2xl font-bold' >Unleash the power of AI in influencer marketing with our revolutionary search tool designed for the web 3 and crypto space.</div>
                    <div className='text-lg font-medium mt-8' >Are you tired of spending countless hours manually searching for influencers and struggling to connect with them? Look no further! Our cutting-edge platform is here to simplify the process, saving you time and effort, while delivering exceptional results for your brand</div>
                </div>
                <div className='max-lg:w-full flex justify-center' ><img src="./influencer.png" alt="info image" className='max-lg:w-4/5' /></div>
            </div>
            <InfoCard />
        </div>
    </>
  )
}

export default InfoSection

const InfoCard = () => {
    return (
        <div className='w-full flex justify-center items-center pb-20' >
            <div className='relative bg-[#F5F5F5] w-4/5 flex max-md:flex-col justify-center items-center gap-5 max-sm:p-7 p-14 rounded-3xl'>
                <div><img src="./90secs.svg" alt="90 seconds" /></div>
                <div className="h-1 md:h-20 w-20 md:w-1 bg-accent" />
                <div className='text-lg font-semibold flex justify-center items-center max-w-[28rem]' >Save 1000’s of hours in searching, communicating and paying Web 3.0 influencers</div>
                <img src="./star.svg" alt="star icon" className="absolute max-sm:-top-16 max-xl:-top-24 -top-36 right-0 max-sm:w-28 max-xl:w-48" />
                <img src="./teddy.svg" alt="teddy icon" className="max-md:hidden absolute bottom-0 left-10 max-lg:w-20 max-xl:w-24" />
            </div>
        </div>
    )
}