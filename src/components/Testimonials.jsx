import Carousel from './Carousel'
import MarqueeElement from './ui/Marquee'

const Testimonials = () => {
  return (
    <div className='bg-white text-black' >
        <MarqueeElement rotate='-rotate-2' color='bg-white' />
        <div className='flex flex-col items-center gap-5 pt-20 relative' >
            <div className='h-1 w-28 bg-accent' />
            <div className='max-sm:text-2xl text-5xl font-bold' >Testimonials that</div>
            <div className='max-sm:text-2xl text-5xl font-bold' >Speaks to our results</div>
            <Carousel />
            <img src="./rocket.svg" alt="rocket icon" className='absolute max-sm:top-5 top-10 left-4 rotate-180 max-sm:w-20 max-md:w-28' />
            <img src="./nft.svg" alt="nft icon" className='absolute max-md:bottom-5 bottom-0 max-md:right-5 right-8 max-sm:w-12 max-md:w-20 w-28' />
        </div>
    </div>
  )
}

export default Testimonials