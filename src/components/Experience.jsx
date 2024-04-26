import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Model } from "./Spaceship";

export const Experience = () => {
  // Lista de RigidBody originales que quieres reflejar
  const originalBodies = [
    { position: [5, 1, -4], args: [2, 1.5, 5], color: '#AC481D' },
    { position: [5, 0, 0], args: [2, 0.5, 20], color: '#8D8DA2' },
    { position: [3, 0, -4], args: [2, 0.5, 5], color: '#7E6851' },
  ];

  // Función para crear un RigidBody reflejado
  const createReflectedBody = (body) => (
    <RigidBody type="fixed" position={[-body.position[0], body.position[1], body.position[2]]}>
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

      {/* Model RigidBody */}
      <RigidBody position={[0, 0.7, -8]}>
        <Model />
      </RigidBody>

      {/* Render original RigidBody components */}
      {originalBodies.map((body, index) => (
        <RigidBody key={`original-${index}`} type="fixed" position={body.position}>
          <Box args={body.args}>
            <meshStandardMaterial color={body.color} />
          </Box>
        </RigidBody>
      ))}

      {/* Render reflected RigidBody components */}
      {originalBodies.map((body, index) => (
        createReflectedBody(body, `reflected-${index}`)
      ))}

      {/* Floor RigidBody */}
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[4, 0.5, 20]}>
          <meshStandardMaterial color={"#8D8DA2"} />
        </Box>
      </RigidBody>
    </>
  );
};
