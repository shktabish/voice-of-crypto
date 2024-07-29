import React from 'react'

const HowItWorks = () => {
  return (
    <>
        <div className='max-sm:hidden bg-white relative w-full min-h-screen flex flex-col justify-center items-center gap-10 py-20'>
            <div className="absolute top-0 left-0 w-full h-full bg-accent clip-polygon" />
            <div className='text-black max-lg:text-4xl text-5xl font-bold relative z-50' >How it works</div>
            {/* <img src="./tablet.svg" alt="tablet" className='relative z-50 w-[70%] xl:w-3/5' /> */}
            <iframe
              src="https://www.youtube.com/embed/0q0SrCj-gYI?si=CUooY85d4wz284Lt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="relative z-50 py-9 px-4 rounded-2xl bg-black w-[70%] xl:w-3/5 aspect-video"
            ></iframe>
            <img src="./box.svg" alt="box icon" className='absolute -top-20 max-lg:right-32 right-60' />
            <img src="./character.svg" alt="character icon" className='absolute max-lg:w-32 max-lg:bottom-24 max-xl:w-48 bottom-8 left-0' />
        </div>
        <div className='hidden bg-white relative w-full h-1/2 py-10 max-sm:flex flex-col justify-center items-center'>
            <div className="absolute top-0 left-0 w-full h-full bg-accent clip-polygon" />
            <div className='text-black max-sm:text-lg text-5xl font-bold relative z-50' >How it works</div>
            <img src="./tablet.svg" alt="tablet" className='relative z-50 w-4/5' />
            <img src="./box.svg" alt="box icon" className='absolute w-16 -top-10 right-12' />
            <img src="./character.svg" alt="character icon" className='absolute bottom-4 -left-2 w-12' />
        </div>
    </>
  )
}

export default HowItWorks