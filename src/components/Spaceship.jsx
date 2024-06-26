/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Spaceship.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spaceship_FernandoTheFlamingo.geometry}
        material={materials.Atlas}
        scale={10}
      />
    </group>
  )
}

useGLTF.preload('/Spaceship.glb')