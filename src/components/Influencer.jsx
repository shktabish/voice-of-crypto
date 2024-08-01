const Influencer = () => {
  return (
    <div className="max-md:my-32 min-h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-x" >
        {/* <div className="bg-[url('./people_standing.svg')] bg-contain bg-center bg-no-repeat relative">
        </div> */}
        <img src="./people_standing.svg" alt="people standing" className="h-full object-cover object-center block relative" />
        <div className="flex flex-col justify-center items-center w-full px-8 relative" >
            <div className="max-w-xl flex flex-col gap-5" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 max-sm:w-10 w-20 mt-3" >
                    <line x1="0" y1="0" x2="150" y2="0" className="stroke-accent stroke-[6px]"/>
                </svg>  
                <div className="max-sm:text-2xl max-md:text-5xl max-lg:text-3xl text-[2.65rem] font-bold text-accent" >Enhance your KOL round with precision targeting</div>
                <p className="max-sm:text-base max-md:text-lg max-lg:text-base text-lg font-medium" >
                Discover and engage the perfect Key Opinion Leaders (KOLs) for your token launch, meticulously selected based on their niche expertise, geographic relevance, and expansive content reach. Seamlessly communicate, negotiate, and collaborate with top-tier influencers to effectively execute and manage your campaigns.</p>
            </div>
            <img src="./whale.svg" alt="whale" className="absolute max-sm:-top-10 -top-24 max-sm:right-4 right-10 w-36 max-sm:w-16" />
            <img src="./rocket.svg" alt="rocket" className="absolute bottom-0 right-4 max-sm:w-24 max-md:-bottom-24 w-32" />
        </div>
    </div>
  )
}

export default Influencer