import React from 'react'

const Education = () => {
    return (
        <div className='text-white px-[1rem] md:px-[3rem] min-h-[65vh] w-full' id='education'>
            <h1 className='text-5xl font-bold p-5 ml-0 md:ml-12 text-[#0aff9d]'>Education.</h1>
            <div className='flex flex-col items-start pl-[1rem] md:pl-[5rem] lg:pl-[10rem] mt-7 md:mt-12 h-full w-full justify-center'>
                <div className='border-l px-6 border-[#0aff9d]'>
                    <h1 className='text-3xl font-bold leading-10 py-2'>Saint Louis College</h1>
                    <h1 className='text-2xl font-bold text-[#0aff9d] leading-10 py-2'>Bachelor of Science in Information Technology</h1>
                    <p className='text-xl font-semibold text-gray-300'> Graduated July 2023 </p>
                    <p className='text-xl font-semibold text-gray-300'> Cum Laude</p>
                </div>
            </div>
        </div>
    ) 
}

export default Education
