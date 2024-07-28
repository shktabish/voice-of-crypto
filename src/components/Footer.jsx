import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
    const productFaaturs = ["Discover", "Connect", "Analytics", "Payments"]
    const quickLinks = ["Home", "Pricing"]
    const socialMediaLinks = [
        {icon: <FaFacebook className='text-2xl font-medium my-4 fill-accent' />, link: "https://www.facebook.com/people/Voice-Of-Crypto-VOC/100083250516435/"},
        {icon: <FaXTwitter className='text-2xl font-medium my-4 fill-accent' />, link: "https://x.com/VoiceofCrypto2"},
        {icon: <FaInstagram className='text-2xl font-medium my-4 fill-accent' />, link: "https://www.instagram.com/voiceof.crypto/"},
        {icon: <FaLinkedin className='text-2xl font-medium my-4 fill-accent' />, link: "https://www.linkedin.com/company/voice-of-crypto/"}
    ]

    const productFeaturesList = productFaaturs.map((feature, index) => {
        return <li key={index} className='max-sm:text-sm text-lg font-medium my-4' >{feature}</li>
    })

    const quickLinksList = quickLinks.map((link, index) => {
        return <li key={index} className='max-sm:text-sm text-lg font-medium my-4' >{link}</li>
    })

    const socialMediaLinksList = socialMediaLinks.map((socialMedia, index) => {
        return <Link to={socialMedia.link} key={index} >{socialMedia.icon}</Link>
    })

  return (
    <>
        <div className='max-sm:mx-6 max-md:mx-16 mx-28 py-14 max-md:grid max-md:grid-cols-2 flex gap-8 xl:gap-24 border-y-2 border-accent'>
            <div className='max-w-[26rem] max-sm:col-span-2' >
                <img src="./logo.svg" alt="logo" />
                <p className="max-sm:text-sm mt-4" >Vitamin I is a cutting-edge product developed by Voice of Crypto, a revolutionary decentralized media collective dedicated to transforming the landscape of media accessibility and reliability within the Web 3 space</p>
            </div>
            <div>
                <div className='text-xl font-bold text-accent' >Product Features</div>
                <ul className='list-none mt-8' >{productFeaturesList}</ul>
            </div>
            <div>
                <div className='text-xl font-bold text-accent' >Quick Links</div>
                <ul className='list-none mt-8' >{quickLinksList}</ul>
            </div>
            <div>
                <div className='text-xl font-bold text-accent' >Parent Company</div>
                <img src="./logo2.svg" alt="voice of crypto logo" className='my-4' />
                <div className="flex gap-3" >{socialMediaLinksList}</div>
            </div>
        </div>
        <div className="max-sm:mx-6 max-sm:text-sm max-md:mx-16 mx-28 py-3" >Copyright © 2024 Vitamin I. All Rights Reserved</div>
    </>
  )
}

export default Footer