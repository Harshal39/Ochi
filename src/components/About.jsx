import React from 'react'

function About() {
  return (
    <div className='w-full p-10 bg-[#CDEA68] rounded-t-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] px-20 py-20 tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#738146]'>
        <div className='w-1/2 '>
          <h1 className='text-7xl'>Our approach:</h1>
          <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
        </div>
        <div className='w-1/2 h-[70vh] bg-red-600 rounded-3xl overflow-hidden'>
          <img src="https://images.unsplash.com/photo-1712828502165-4079856c479c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </div>
  )
}

export default About
