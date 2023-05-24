'use client'

import React from 'react'

import { motion } from 'framer-motion'

export default function page(){
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    
    return (
      <motion.ul animate="hidden" variants={list} className='text-white'>
        <motion.li variants={item}>Test</motion.li>
        <motion.li variants={item}>Test 1</motion.li>
        <motion.li variants={item}>Test 2</motion.li>
      </motion.ul>
    )
}
