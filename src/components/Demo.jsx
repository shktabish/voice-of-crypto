import Button from './ui/Button'
import MarqueeElement from './ui/Marquee'

const Demo = () => {
  return (
    <>    
        <div className='flex max-lg:flex-col justify-center gap-8 pb-20' >
            <img src="./demo.svg" alt="demo.svg" className='w-2/3 max-lg:w-full max-sm:px-4 max-lg:px-10' />
            <div className='flex max-sm:flex-col max-lg:flex-row flex-col gap-4 max-sm:px-4 max-lg:px-10' >
                <div className='max-lg:grow-0 grow bg-accent rounded-3xl flex max-lg:flex-row flex-col justify-center  gap-6 py-2 px-6 text-black' >
                    <div>
                        <p className='text-4xl font-extrabold' >625</p>
                        <p className='text-lg font-bold' >Registered Influencers</p>
                    </div>
                    <div>
                        <p className='text-4xl font-extrabold' >00</p>
                        <p className='text-lg font-bold' >xyz</p>
                    </div>
                </div>
                <Button />
            </div>
        </div>
        
    </>
  )
}

export default Demo