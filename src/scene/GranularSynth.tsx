import React, { useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Ball from "../components/Ball";
import Scene from "../components/Sene";
import { Physics, Debug } from "@react-three/cannon";
import Box from "../components/Box";
import Effect from "./Effect";

const GranualarSynth = (props: any) => {
  const { sides, balls, handleTrigger, speedOfRotation, gravity } = props;

  const renderBallsCallback = useCallback(() => {
    let colors =["#a9d0cc", "#f40340", "#b3c4ff"];
    return [...new Array(balls)].map((b: number, i: number) => {
      return <Ball key={i} color={colors[i]} />;
    });
  }, [balls]);

  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 20] }} mode="concurrent">
      <Effect>
        <Scene>
          <ambientLight />
          <spotLight args={["white", 5, 7]} position={[0, 4, 0]} angle={0.5} />
          <Physics gravity={gravity}>
            {/* <Debug color="black" scale={1.1}> */}
            {renderBallsCallback()}
            <Box
              sides={sides}
              handleTrigger={handleTrigger}
              speedOfRotation={speedOfRotation}
            />
            {/* </Debug> */}
          </Physics>
        </Scene>
      </Effect>
    </Canvas>
  );
};

export default GranualarSynth;
