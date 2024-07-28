import { FaXTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok } from "react-icons/fa6"
import { platForms } from './../constants/data'
import MarqueeElement from "./ui/Marquee"

const Platforms = () => {
    const platFormsList = platForms.map((item, index) => {
        return (
            <div key={index}>
                <img src={item.icon} alt="platforms" />
            </div>
        )
    })

    const socialMediaLinks = [
        {   
            icon: <FaXTwitter className='text-2xl font-medium fill-black' />, 
            name: "Twitter",
            link: "https://twitter.com/"
        },
        {   
            icon: <FaYoutube className='text-2xl font-medium fill-black' />, 
            name: "YouTube",
            link: "https://www.youtube.com/"
        },
        {   
            icon: <FaInstagram className='text-2xl font-medium fill-black' />, 
            name: "Instagram",
            link: "https://www.instagram.com/"
        },
        {   
            icon: <FaTiktok className='text-2xl font-medium fill-black' />, 
            name: "TikTok",
            link: "https://www.tiktok.com/"
        },
        {   
            icon: <FaTwitch className='text-2xl font-medium fill-black' />, 
            name: "Twitch",
            link: "https://www.twitch.tv/"
        }
    ]

    const socialMediaList = socialMediaLinks.map((item, index) => {
        return (
            <div key={index} className='flex flex-col items-center gap-4'>
                <div className="bg-accent rounded-full flex justify-center items-center p-2" style={{ width: '60px', height: '60px' }}>
                    {item.icon}
                </div>
                <div className="text-black text-xl font-extrabold">{item.name}</div>
            </div>
        )
    })

    return (
        <div className="bg-white" >
            <div className="pt-12" ><MarqueeElement rotate="-rotate-2" color="bg-white" /></div>
            <div className='relative grid max-md:grid-cols-3 grid-cols-6 justify-center items-center gap-4 max-sm:px-4 px-10 pt-40'>
                <div className='h-1 w-4/5 bg-accent' />
                {platFormsList}
                <img src="./rocket.svg" alt="rocket icon" className="absolute max-sm:w-28 max-sm:top-12 top-8 left-0 rotate-[170deg]" />
            </div>
            <div className='flex max-lg:flex-col justify-center items-center gap-16 xl:gap-28 py-28 p-4'>
                <div className="text-black max-sm:text-2xl text-5xl font-bold max-lg:w-full w-[18rem] max-lg:text-center" >Platforms we support</div>
                <div className="max-sm:grid max-sm:grid-cols-3 flex justify-center items-center max-lg:gap-14 gap-16 xl:gap-28" >{socialMediaList}</div>
            </div>
        </div>
    )
}

export default Platforms
