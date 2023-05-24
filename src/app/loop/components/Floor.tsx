import React from 'react'

export const Floor = (props:any) => {

  return (
    <mesh {...props} recieveShadow={true}>
        <boxBufferGeometry args={[20,1,10]} />
        <meshPhysicalMaterial color={'white'} />
    </mesh>
  )
}