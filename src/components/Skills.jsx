import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaSass, FaGithub, FaBootstrap, FaJava   } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVisualbasic } from "react-icons/si";
import { DiResponsive, DiMysql  } from "react-icons/di";
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <div className='text-white w-full min-h-screen px-[1rem] md:px-[3rem] mt-[5rem] md:mt-[3rem] lg:mt-0' id='skills'>
        <h1 className='text-5xl font-bold mt-3 ml-1 md:ml-10 lg:ml-12 p-5 text-[#0aff9d]'>Skills.</h1>
        <div className='flex mt-12 lg:mx-[5rem] mx-0 py-10 gap-4 md:gap-9 justify-center flex-wrap'>
        <div class="text-black bg-gray-400 w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group  hover:text-[#0aff9d] hover:scale-110">
            <FaHtml5 className='text-5xl'/>
            <p className='font-bold'>HTML</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaCss3Alt className='text-5xl'/>
            <p className='font-bold'>CSS</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaJs className='text-5xl'/>
            <p className='font-bold'>JavaScript</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaPhp className='text-5xl'/>
            <p className='font-bold'>PHP</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <RiTailwindCssFill className='text-5xl'/>
            <p className='font-bold'>TailwindCSS</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaSass className='text-5xl'/>
            <p className='font-bold'>SASS</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaReact className='text-5xl'/>
            <p className='font-bold'>ReactJS</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaGithub  className='text-5xl'/>
            <p className='font-bold'>Github</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaBootstrap  className='text-5xl'/>
            <p className='font-bold'>Bootstrap</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <SiVisualbasic  className='text-5xl'/>
            <p className='font-bold'>VB.Net</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <FaJava  className='text-5xl'/>
            <p className='font-bold text-center text-wrap'>Java</p>
        </div>
        <div class="bg-gray-400 text-black w-[150px] rounded-[30px] flex flex-col justify-center items-center hover:shadow-lg min-h-[130px] gap-5 relative group hover:text-[#0aff9d] hover:scale-110">
            <DiMysql  className='text-5xl'/>
            <p className='font-bold text-center text-wrap'>MySql</p>
        </div>
        </div>
    </div>
  )
}

export default Skills