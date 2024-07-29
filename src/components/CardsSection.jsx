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
        <MarqueeElement />
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
            <div key={index} className='flex flex-col items-center'>
                <img src={profile.profile} alt={profile.name} className='w-28 h-28 rounded-full border-[12px] border-accent' />
                <div className='text-xl font-bold mt-5' >{profile.name}</div>
                <div className='italic mt-2' >{profile.position}</div>
            </div>
        )
    })

    return (
      <div className='w-4/5 bg-[#F5F5F5] text-black rounded-3xl flex max-lg:flex-col max-lg:gap-10 justify-around items-center relative z-50' >
        <div className='max-lg:flex max-lg:flex-col max-lg:gap-4 px-6'>
            <div className='text-2xl font-bold max-lg:text-center pt-10' >Team</div>
            <div className='text-5xl font-bold max-lg:text-center' >Rockstars</div>
            <div className='relative mt-10 max-lg:hidden'>
                <img src="buuble.svg" alt="bubbles" className='absolute top-0 -left-10' />
                <img src="rockTeddy.svg" alt="rockstar teddy" className='relative z-50' />
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center max-sm:gap-8 gap-16 py-6' >{profilesList}</div>
      </div>
    )
}

export const ConnectCard = () => {
    return (
      <div className='w-4/5 min-h-[350px] border border-accent rounded-3xl flex justify-between gap-10' >
          <div className='flex flex-col justify-center w-[35rem] gap-10 pl-10 max-sm:p-4' >
            <div className='max-sm:text-2xl max-lg:text-4xl max-xl:text-3xl text-5xl font-bold' >Let’s <span className='text-accent' >Connect</span> there</div>
            <div className='max-sm:text-base max-lg:text-xl max-xl:text-lg text-2xl font-bold' >Are you a web3 influencer and would like to get listed on our platform</div>
            <Button text="Apply Now" link="https://docs.google.com/forms/d/e/1FAIpQLSfsd-c9bhaiHNVgqJpZFub4B-0NmTkmuPmS9SneVTyq5AHuEA/viewform" />
          </div>
          <div className='max-lg:hidden h-full aspect-square bg-accent rounded-3xl relative' >
            <img src="./rabbit.svg" alt="rabbit icon" className='absolute bottom-16 -right-10 scale-[1.4]' />
            <img src="./coin.svg" alt="coin icon" className='absolute bottom-0 left-0 w-28' />
          </div>
      </div>
    )
}