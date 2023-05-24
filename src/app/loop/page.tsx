'use client'

import React from 'react'

import { Euler } from 'three'

import { AnimatedBox } from './components/AnimatedBox'
import { PointLight } from './components/PointLight'
import { Floor } from './components/Floor'
import { Canvas } from '@react-three/fiber'
import css from './loop.module.css'

export default function page() {
  return (
    <div className='mt-20'>
        <Canvas //create canvas component and move camera from original position
          shadows={true}
          className={css.canvas}
          camera={{
            position: [
              1, 15, 4
            ],
            zoom: 3
          }}
        >

        <AnimatedBox />
        <PointLight />
        <Floor position={[2, -5, 2]} />  

        </Canvas>
    </div>
  )
}
