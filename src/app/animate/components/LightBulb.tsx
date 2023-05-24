import React from 'react'

export const LightBulb = (props:any) => {
  return (
    <mesh>
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 30, 10]} />
        <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  )
}
