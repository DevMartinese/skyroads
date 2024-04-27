import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "./components/Experience";
import { ExperienceV2 } from "./components/ExperienceV2";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, -15], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics debug>
          <ExperienceV2 />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
