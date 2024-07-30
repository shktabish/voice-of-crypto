import { features } from "../constants/data"

const Features = () => {
    const featuresList = features.map((feature, index) => {
        return (
            <div key={index} className='flex flex-col items-center gap-4'>
                <div className="bg-accent rounded-full flex justify-center items-center p-2" style={{ width: '100px', height: '100px' }}>
                    <img src={feature.icon} alt="icon" className="w-14" />
                </div>
                <div className="text-black text-center text-xl font-bold">{feature.title}</div>
                <div className="text-black text-center text-lg font-medium">{feature.description}</div>
            </div>
        )
    })

  return (
    <div className="text-black bg-white flex flex-col justify-center max-sm:gap-6 gap-10 py-20 relative" >
        <div className="flex gap-4 justify-center max-sm:pt-10" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 max-sm:w-10 w-20 mt-3 max-sm:hidden" >
                <line x1="0" y1="0" x2="100" y2="0" className="stroke-accent stroke-2"/>
            </svg>
            <p className="max-sm:text-sm max-lg:text-base text-lg font-bold" >Web 3.0 influencer marketing is broken</p>
        </div>
        <div className="text-5xl font-bold text-center" >lets fix it</div>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:px-6 px-20 max-sm:gap-10 gap-20 mt-10" >
            {featuresList}
        </div>
        <img src="./blockchain.svg" alt="blockchain icon" className="absolute top-10 right-8 max-sm:w-20 max-md:w-[4.5rem]" />
    </div>
  )
}

export default Features