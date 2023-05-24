'use client'

import { Canvas } from '@react-three/fiber'
import css from './animate.module.css'
import { Box } from './components/Box'
import { Controls } from './components/OrbitControls'
import { LightBulb } from './components/LightBulb'
import { Floor } from './components/Floor'
import Draggable from './components/Draggable'

export default function Home() {
  return (
    <main className="bg-white">
      <div className={css.scene}>
        <Canvas //create canvas component and move camera from original position
          shadows={true}
          className={css.canvas}
          camera={{
            position: [
              -6, 7, 7
            ]
          }}
        >

        <ambientLight color={'white'} intensity={0.3} /> {/* Add low intensity ambient light to scene */}
        <LightBulb position={[0, 3, 0]} /> {/* Add point light to scene */}
        <Box rotateX={3} rotateY={0.2} /> {/* Add red box to scene */}
        <Controls />
        <Draggable />
        <Floor position={[0, -1, 0]} /> {/* Add white floor to scene */}

        </Canvas>
      </div>
    </main>
  )
}