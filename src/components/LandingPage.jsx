import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening","Presentations"].map((item,index) => {
            return <div className='masker'>
                <div className='w-fit flex items-center overflow-hidden'>
                    {index === 1 && (<div className='w-[8vw] rounded-md h-[4.5vw] relative top-[0.8vw] mr-[1vw] bg-green-500'></div>)}
            <h1 className="uppercase pt-[0.5vw] -mb-[0.5vw] text-[6vw] leading-[6vw] tracking-tighter font-medium">{item}</h1>
        </div>
        </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
         {["For public and private companies", "Fro the first pitch to IPO"].map((item,index)=>(
         <p className='text-md font-light tracking-tight leading-none'>{item}</p>
         ))}
         <div className='start flex items-center gap-4'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-medium text-md uppercase'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-400 rounded-full'>
                <span className='rotate-[45deg]'>
              <FaArrowUpLong />
              </span>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LandingPage