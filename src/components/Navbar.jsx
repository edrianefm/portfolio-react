import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='sticky z-50 top-0 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white bg-[#000300]'>
            <h1 className='w-full text-3xl font-bold text-white'>Edriane<span className='text-[#0aff9d]'>Mina</span> </h1>
            <ul className='hidden md:flex md:gap-3'>
                <li className='p-4 font-semibold  '><Link className="p-4 hover:border-b-2 border-[#0aff9d] hover:cursor-pointer"  to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>Home</Link></li>
                <li className='p-4 font-semibold  active:border-white'><Link className="p-4 hover:border-b-2 border-[#0aff9d] hover:cursor-pointer" to="skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>Skills</Link></li>
                <li className='p-4 font-semibold'><Link className="p-4 hover:border-b-2 border-[#0aff9d] hover:cursor-pointer"  to="education" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>Education</Link></li>
                <li className='p-4 font-semibold'><Link className="p-4 hover:border-b-2 border-[#0aff9d] hover:cursor-pointer"  to="experience" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>Experience</Link></li>
                <li className='p-4 font-semibold'><Link className="p-4 hover:border-b-2 border-[#0aff9d] hover:cursor-pointer" to="contacts" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}></AiOutlineClose> : <AiOutlineMenu size={20}></AiOutlineMenu>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>EDRIANE.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Education</li>
                    <li className='p-4 border-b border-gray-600'>Skills</li>
                    <li className='p-4 border-b border-gray-600'>Experience</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar