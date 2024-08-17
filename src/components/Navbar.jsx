import React from 'react'
import NavDropDown from './ui/FlyoutLink'
import Button from './ui/Button';
import { Link } from 'react-router-dom';
import CustomLink from '../utils/CustomLink';
import HamburgerNavbar from './ui/HamburgerNav';

const Navbar = () => {
  return (
    <div name="hero" className='flex justify-between items-center max-sm:px-5 max-xl:px-10 px-20 max-sm:pt-5 pt-10 max-md:pb-12 pb-24' >
        <Link to="/" ><img src="./Vitamin.png" alt="nav-bar logo" className='w-36 h-32 -my-8'/></Link>
        <div className='flex items-center gap-10 max-lg:hidden' >
            <NavDropDown />
            {/* <CustomLink to="#pricing" ><div className='cursor-pointer hover:border-b-2 hover:border-accent py-2' >Pricing</div></CustomLink> */}
            <CustomLink to="#faqs" ><div className='cursor-pointer hover:border-b-2 hover:border-accent py-2' >Faqs</div></CustomLink>
            <Button />
        </div>
        <div className='max-lg:block hidden' >
          <HamburgerNavbar />
        </div>
    </div>
  )
}

export default Navbar