'use client'

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import '../styles.css'

export const SlideHeader = () => {
    const containerRef = useRef(null); // ref to track the container
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end end"] // get value while the start of the target meets the end of the container, and continue until the end of the target meets the end of the container
    }) //get scrollYProgress value from useScroll hook by tracking the scroll position of the container
    const imageValue = useTransform(scrollYProgress, [0, 1], ['-150%', '10%'])
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const topShadowValue = useTransform(scrollYProgress, [0, 1], ['-25%', '100%'])
    const shouldUseReducedMotion = useReducedMotion()
  
  
    return (
      <section className="scroll-container" ref={containerRef}>
          <div className='header-container'>
              <motion.div className='img-inner' style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}>
                  {/* <img src={'./fish.jpg'} alt='a green plant' className='fish-pic'/> */}
                  <div>
                    <p className='section-header'>Categories</p>
                    <motion.div className={'underline mb-20'} style={{ scaleX: lineWidth}} />
                  </div>
                  
                  {(!shouldUseReducedMotion && scrollYProgress !== 1) && 
                      <motion.div className='top-shadow' style={{ translateX: topShadowValue }}/>
                  }
              </motion.div>
          </div>
      </section>
    )
  }