import React from 'react'
import Profile from '../assets/profile.png'
import { FaFacebook, FaGoogle, FaGithub   } from "react-icons/fa";
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className='w-full pt-8 pb-16 px-4 h-screen overflow-hidden' id='home'>
        <div className='max-w-full lg:max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-full lg:w-[500px] mx-auto my-4 md:px-5' src={Profile} alt="" />
        <motion.div whileInView={{scaleY:[0, 1, 1]}} transition={{duration:1}} className='text-white flex flex-col justify-center m-4 gap-0'>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold py-4'>Hi, I'm <span className='text-[#0aff9d] font-bold'>Edriane</span></h1>
            <p className='text-gray-300 text-[1.1rem]'>Passionate IT graduate committed to continuous growth and learning in various IT areas. Dedicated to programming and creative problem-solving. Seeking an opportunity to contribute to a dynamic organization and thrive in the IT industry.
            </p>
            <div className='mt-[-1.5rem]'>
                <a className='inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-transparent rounded-[50%] text-[1rem] border-[0.2rem] border-[#0aff9d]/100 text-[#0aff9d] my-[3rem] mr-[1.5rem] ease-linear duration-300 hover:text-black hover:scale-[1.3] hover:translate-y-[-5px] hover:bg-[#0aff9d] shadow-lg hover:shadow-[#0aff9d]/50' href=""><FaFacebook/></a>
                {/* <a className='inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-transparent rounded-[50%] text-[1rem] border-[0.2rem] border-[#0aff9d]/100 text-[#0aff9d] my-[3rem] mr-[1.5rem] ease-linear duration-300 hover:text-black hover:scale-[1.3] hover:translate-y-[-5px] hover:bg-[#0aff9d] shadow-lg hover:shadow-[#0aff9d]/50' href=""><FaGoogle/></a> */}
                <a className='inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-transparent rounded-[50%] text-[1rem] border-[0.2rem] border-[#0aff9d]/100 text-[#0aff9d] my-[3rem] mr-[1.5rem] ease-linear duration-300 hover:text-black hover:scale-[1.3] hover:translate-y-[-5px] hover:bg-[#0aff9d] shadow-lg hover:shadow-[#0aff9d]/50' href=""><FaGithub/></a>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Home