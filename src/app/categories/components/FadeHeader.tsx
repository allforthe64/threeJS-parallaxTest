'use client'

import React from 'react'

import { motion } from 'framer-motion'

export const FadeHeader = () => {
  return (
    <div className='py-20 flex justify-center'>
        <div className='w-[50%] flex flex-col items-center'>
            <motion.h2 className='text-6xl font-bold mb-2' initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: -100}} transition={{ease: 'easeInOut'}}>Categories:</motion.h2>
            <motion.div className='h-[2px] bg-white pl-2' initial={{opacity: 0, left: 0, width: 0, y:100}} whileInView={{opacity: 1, width: '45%', y:-100}} transition={{ease: 'easeInOut'}}/>
        </div>
        
    </div>
  )
}
