import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden'>
            <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[0vw] font-semibold'>we are ochi</h1>
            <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[0vw] font-semibold'>we are ochi</h1>
           
        </div>
      
    </div>
  )
}

export default Marquee
