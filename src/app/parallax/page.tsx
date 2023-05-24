'use client'

import React from 'react'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const page = () => {
  return (
        <Parallax pages={4} className='py-20'>

            <ParallaxLayer 
            speed={1}
            factor={2}
            style={{
                backgroundImage: `url(${'/space_bg.jpg'})`,
                backgroundSize: 'cover'
            }}>
                <h2 className='text-center text-7xl'>Layer 1</h2>
            </ParallaxLayer>

            <ParallaxLayer speed={1.5} factor={1}>
            <img src={'/rocket.png'} width={128} height={128}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5}
            factor={1}>
                <h2 className='text-center text-7xl'>Layer 2</h2>
            </ParallaxLayer>

        </Parallax>
  )
}

export default page