import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Ball from "../components/Ball";
import Scene from "../components/Sene";
import { Physics } from "@react-three/cannon";
import Box from "../components/Box";

const GranualarSynth = (props: any) => {
  const { sides, balls, handleTrigger, speedOfRotation, gravity, update } = props;
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1);
    console.log(count);
  }, [update])

  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
      <Scene>
        <ambientLight />
        <spotLight args={["white", 5, 7]} position={[0, 4, 0]} angle={0.5} />
        <Physics gravity={gravity}>
          {[...new Array(balls)].map((b: number, i: number) => (
            <Ball key={i} />
          ))}
          <Box
            sides={sides}
            handleTrigger={handleTrigger}
            speedOfRotation={speedOfRotation}
          />
        </Physics>
      </Scene>
    </Canvas>
  );
};

export default GranualarSynth;
