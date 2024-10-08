import { Link } from 'react-router-dom'
import { profiles } from './../constants/data'
import Button from './ui/Button'
import MarqueeElement from './ui/Marquee'

const CardsSection = () => {
  return (
    <div>
        <div className='relative py-36 min-h-screen w-full flex justify-center items-center' >
            <div className="absolute inset-x-0 h-1/2 top-0 bg-white"></div>
            <RockstarCard />
            <img src="./rocket.svg" alt="rocket icon" className='absolute bottom-0 right-8' />
        </div>
        <MarqueeElement color="bg-black" />
        <div className='pt-32 pb-20 mb-20 w-full flex justify-center' >
            <ConnectCard />
        </div>
    </div>
  )
}

export default CardsSection

export const RockstarCard = () => {
    const profilesList = profiles.map((profile, index) => {
        return (
            <>
              <div key={index} className='flex flex-col items-center'>
                  <img src={profile.profile} alt={profile.name} className='w-28 h-28 rounded-full border-[12px] border-accent' />
                  <div className='text-xl font-bold mt-5' >{profile.name}</div>
                  {/* <div className='italic mt-2' >{profile.position}</div> */}
              </div>
            </>
        )
    })

    return (
      <div className='w-4/5 bg-[#F5F5F5] text-black rounded-3xl flex max-lg:flex-col max-lg:gap-10 justify-around items-center relative z-50' >
        <div className='max-lg:flex max-lg:flex-col max-sm:gap-0 max-lg:gap-4 px-6'>
            <div className='max-sm:text-md text-[1.2rem] 2xl:text-[1.4rem] font-bold max-lg:text-center pt-10' >Join Us at Vitamini’s x Threeway Studio x CoinBrit</div>
            <div className='max-sm:text-md text-[1.2rem] 2xl:text-[1.4rem] font-bold max-lg:text-center' >KOL Awards Night in Singapore on 16th September 2024</div>
            <div className='relative mt-10 max-lg:hidden'>
                <img src="buuble.svg" alt="bubbles" className='absolute top-0 -left-10' />
                <img src="rockTeddy.svg" alt="rockstar teddy" className='relative z-50' />
            </div>
        </div>
        <div className='flex flex-col gap-4 pb-8' >
          <div className='flex flex-wrap justify-center items-center max-sm:gap-8 gap-16 py-6' >{profilesList}</div>
          <div className='flex flex-wrap max-sm:justify-center text-lg max-sm:ml-4' >
            <div className='ml-1 mb-3' >and many more</div> 
            <Link to="https://lu.ma/0gj3tf66" >
              <span className='bg-[#A4ED00] px-3 py-2 rounded-full font-semibold cursor-pointer max-sm:ml-0 ml-4 text-nowrap' >Book your tickets now
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
}

export const ConnectCard = () => {
    return (
      <div className='w-4/5 min-h-[350px] border border-accent rounded-3xl flex max-lg:flex-col-reverse max-lg:items-center max-lg:py-12 justify-between gap-10' >
          <div className='flex flex-col justify-center max-sm:w-[95%] w-4/5 gap-10 pl-10 max-sm:p-4' >
            <div className='max-sm:text-2xl max-lg:text-4xl max-xl:text-3xl text-5xl font-bold' >Let’s <span className='text-accent' >Connect</span> there</div>
            <div className='max-sm:text-base max-lg:text-xl max-xl:text-lg w-[90%] text-2xl font-bold text-wrap' >Are you a web3 influencer and would like to get listed on our platform</div>
            <Button text="Apply Now" link="https://9yo48n4voq3.typeform.com/to/o1WbNNKt" />
          </div>
          <div className='h-full max-lg:w-4/5 w-[28rem] aspect-square bg-accent rounded-3xl relative' >
            <img src="./rabbit.svg" alt="rabbit icon" className='absolute max-lg:bottom-0 bottom-16 -right-10   max-lg:scale-100 scale-[1.4]' />
            <img src="./coin.svg" alt="coin icon" className='absolute bottom-0 left-0 max-sm:w-20 w-28' />
          </div>
      </div>
    )
}