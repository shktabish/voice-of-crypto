const Influencer = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2" >
        <div className="bg-[url('/people_standing.svg')] bg-cover bg-center hidden md:block relative">
        </div>
        <div className="flex flex-col justify-center items-center w-full px-8 relative" >
            <div className="max-w-xl flex flex-col gap-5" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 max-sm:w-10 w-20 mt-3" >
                    <line x1="0" y1="0" x2="150" y2="0" className="stroke-accent stroke-[6px]"/>
                </svg>  
                <div className="max-sm:text-xl max-md:text-4xl max-lg:text-2xl text-4xl font-bold" >One-Stop Solution for</div>
                <div className="max-sm:text-2xl max-md:text-5xl max-lg:text-3xl text-[2.65rem] font-bold text-accent" >Influencer Marketing</div>
                <p className="max-sm:text-base max-md:text-lg max-lg:text-base text-lg font-medium" >Gone are the days of juggling multiple tools and platforms. Our AI-powered influencer search tool is an all-in-one solution, providing end-to-end support for your influencer marketing campaigns.</p>
                <p className="max-sm:text-base max-md:text-lg max-lg:text-base text-lg font-medium" >From discovering influencers to connecting, managing campaigns, and analyzing results, our platform streamlines the entire process. Boost your brand's visibility, reach, and credibility in the web 3 space with ease</p>
            </div>
            <img src="./whale.svg" alt="whale" className="absolute max-sm:-top-10 -top-24 max-sm:right-4 right-10 w-36 max-sm:w-16" />
            <img src="./rocket.svg" alt="rocket" className="absolute bottom-0 right-0 max-sm:w-24 w-32" />
        </div>
    </div>
  )
}

export default Influencer