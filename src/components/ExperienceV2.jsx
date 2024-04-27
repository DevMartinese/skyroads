import React from "react";
import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Model } from "./Spaceship";

export const ExperienceV2 = () => {
  const originalBodies = [
    { position: [5, 1, -4], args: [2, 1.5, 5], color: '#AC481D' },
    { position: [5, 0, 0], args: [2, 0.5, 20], color: '#8D8DA2' },
    { position: [3, 0, -4], args: [2, 0.5, 5], color: '#7E6851' },
    // Incluir la información del 'floor' aquí para ser replicado
    { position: [0, 0, 0], args: [4, 0.5, 20], color: '#8D8DA2', isFloor: true },
  ];

  const zRepetitions = 4;
  const zOffset = 20;

  const createRepeatedBody = (body, zMultiplier) => (
    <RigidBody key={`body-${body.color}-${zMultiplier}`} type="fixed" position={[
      body.isFloor ? body.position[0] : -body.position[0], 
      body.position[1], 
      body.position[2] + (zMultiplier * zOffset)]}>
      <Box args={body.args}>
        <meshStandardMaterial color={body.color} />
      </Box>
    </RigidBody>
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody position={[0, 0.7, -8]}>
        <Model />
      </RigidBody>

      {/* Replicar todos los objetos, incluido el 'floor', a lo largo del eje Z */}
      {[...Array(zRepetitions)].map((_, zMultiplier) => (
        originalBodies.map((body, index) => (
          <React.Fragment key={`fragment-${index}-${zMultiplier}`}>
            <RigidBody type="fixed" position={[
              body.isFloor ? body.position[0] : body.position[0], 
              body.position[1], 
              body.position[2] + (zMultiplier * zOffset)]}>
              <Box args={body.args}>
                <meshStandardMaterial color={body.color} />
              </Box>
            </RigidBody>
            {!body.isFloor && createRepeatedBody(body, zMultiplier)}
          </React.Fragment>
        ))
      ))}
    </>
  );
};
