import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
