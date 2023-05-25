'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import '../styles.css'

export const Tutorial = () => {
  const containerRef = useRef(null); // ref to track the container

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] // get value while the start of the target meets the end of the container, and continue until the end of the target meets the end of the container
  }) //get scrollYProgress value from useScroll hook by tracking the scroll position of the container

  const bottomShadowValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const imageValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const topShadowValue = useTransform(scrollYProgress, [0, 1], ['-25%', '100%'])
  const shouldUseReducedMotion = useReducedMotion()



  return (
    <section className="scroll-container" ref={containerRef}>
        <div className='copy'>
            <h2>Check Out Da Fish</h2>
        </div>
        <div className='img-container'>
            <motion.div className='img-inner' style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}>
                {!shouldUseReducedMotion &&
                    <motion.div className='bottom-shadow' style={{ translateX: bottomShadowValue }}/>
                }   
                <img src={'./fish.jpg'} alt='a green plant' className='fish-pic'/>
                {!shouldUseReducedMotion && 
                    <motion.div className='top-shadow' style={{ translateX: topShadowValue }}/>
                }
            </motion.div>
        </div>
    </section>
  )
}