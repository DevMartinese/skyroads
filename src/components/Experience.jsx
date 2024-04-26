import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Model } from "./Spaceship";

export const Experience = () => {
  return (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-10, 10, 0]} intensity={0.4} />
    <OrbitControls />

    <RigidBody position={[0, 5, 0]}>
      <Model  />
    </RigidBody>

    <RigidBody type="fixed">
      <Box position={[0, 0, 0]} args={[10, 1, 10]}>
        <meshStandardMaterial color={"springgreen"} />
      </Box>
    </RigidBody>
  </>
  )
}