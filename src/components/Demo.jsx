import Button from './ui/Button'
import MarqueeElement from './ui/Marquee'

const Demo = () => {
  return (
    <>    
        <div className='flex max-lg:flex-col justify-center gap-8 max-lg:pt-20 pb-20' >
            <img src="./demo.svg" alt="demo.svg" className='w-2/3 max-lg:w-full max-sm:px-4 max-lg:px-10' />
            <div className='flex max-sm:flex-col max-lg:flex-row flex-col gap-4 max-sm:px-4 max-lg:px-10' >
                <div className='max-lg:grow-0 grow bg-accent rounded-3xl flex max-lg:flex-row flex-col max-md:justify-around justify-center  gap-6 py-2 px-6 text-black' >
                    <div>
                        <p className='max-md:text-lg max-lg:text-2xl text-4xl font-extrabold' >0- 250000</p>
                        <p className='max-mf:text-base text-lg font-bold' >Registered Influencers</p>
                    </div>
                    <div>
                        <p className='max-md:text-lg max-lg:text-2xl text-4xl font-extrabold' >180000000</p>
                        <p className='max-mf:text-base text-lg font-bold' >Reach</p>
                    </div>
                </div>
                <Button />
            </div>
        </div>
        
    </>
  )
}

export default Demo