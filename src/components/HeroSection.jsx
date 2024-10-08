import React from 'react'
import { CiMail } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='text-white mt-9 pt-[6rem] bg-gray-600 h-[50vh] md:h-[75vh]' id='contacts'>
      <div className='max-w-[800px] w-full mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Contact <span className='text-[#0aff9d]'>Me.</span></h1>
        <p className='text-center pt-5'>
        Shoot me an email if you want to connect! 
        </p>
        <div className='flex flex-row justify-center items-center'>
        <CiMail className='text-2xl font-semibold text-[#0aff9d]'/>
        <p className='text-white text-xl font-semibold my-6 px-2 py-3 text-center'>edrianemina@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Hero