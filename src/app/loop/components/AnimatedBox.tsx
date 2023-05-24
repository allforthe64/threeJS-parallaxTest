import React from 'react'

import { useFrame } from '@react-three/fiber'

export const AnimatedBox = () => {

    const myMesh = React.useRef()

    useFrame(() => {
        myMesh.current.rotation.x = myMesh.current.rotation.x + 0.01
        myMesh.current.rotation.y = myMesh.current.rotation.y - 0.01
        console.log("Hey, I'm executing every frame!")
    })

  return (
    <mesh ref={myMesh} castShadow>
        <boxGeometry args={[3, 3, 3]}/>
        <meshBasicMaterial color='royalblue' />
    </mesh>
  )
}
