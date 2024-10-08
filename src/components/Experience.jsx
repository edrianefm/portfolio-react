import React from 'react'

const Experience = () => {
  return (
    <div className='text-white px-[1rem] md:px-[3rem]  min-h-[75vh] w-full' id='experience'>
    <h1 className='text-5xl font-bold p-5 ml-0 md:ml-12 text-[#0aff9d]'>Experience.</h1>
    <div className='flex flex-col items-start pl-[1rem] md:pl-[5rem] lg:pl-[10rem] h-full w-full justify-center p-12'>
        <div className='border-l px-6 border-[#0aff9d]'>
            <h1 className='text-3xl font-bold leading-10 py-2'>Giant Intenational Software Station Inc.</h1>
            <h1 className='text-2xl font-bold text-[#0aff9d] leading-10 py-2'>Intern Developer  <span className='text-white font-normal text-xl'>    January - May 2023</span></h1>
            <p className='text-xl md:text-2xl pl-5 text-gray-300'> • Worked with a diverse team of developers on different projects.</p>
            <p className='text-xl md:text-2xl pl-5 text-gray-300'> • Helped create innovative solutions for client needs.</p>
            <p className='text-xl md:text-2xl pl-5 text-gray-300'> • Gained hands-on experience in frontend development.</p>
        </div>
    </div>
</div>
  )
}

export default Experience