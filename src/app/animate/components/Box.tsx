import React from 'react'

export const Box = (props:any) => {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
        <boxBufferGeometry />
        <meshPhysicalMaterial color={'red'} />
    </mesh>
  )
}
