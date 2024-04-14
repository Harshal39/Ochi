import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 
            initial={{x: 0}} 
            animate={{x:'-100%'}} 
            transition={{repeat: Infinity, ease: 'linear', duration: 5}}
            className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 font-semibold pr-20'>we are ochi</motion.h1>
            <motion.h1 
            initial={{x: 0}} 
            animate={{x:'-100%'}} 
            transition={{repeat: Infinity, ease: 'linear', duration: 5}}
            className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1  font-semibold pr-20'>we are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
