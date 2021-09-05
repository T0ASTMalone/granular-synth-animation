import React, { useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import Ball from "../components/Ball";
import Scene from "../components/Sene";
import { Physics, Debug } from "@react-three/cannon";
import Box from "../components/Box";
import Effect from "./Effect";
import Parameter from "../components/Parameter";

const GranualarSynth = (props: any) => {
  const { sides, balls, handleTrigger, speedOfRotation, gravity, ballMass } =
    props;
  let colors = useMemo(() => ["#6B8EE5", "#02E18F", "#EE3F5C"], []);
  const renderBallsCallback = useCallback(() => {
    return [...new Array(balls)].map((b: number, i: number) => {
      return <Ball key={i} color={colors[i]} mass={ballMass} />;
    });
  }, [balls, ballMass, colors]);

  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 27] }} mode="concurrent">
      <Effect>
        <Scene>
          <ambientLight />
          <spotLight args={["white", 5, 7]} position={[0, 4, 0]} angle={0.5} />

          <Parameter
            name={"S"}
            color={colors[0]}
            value={speedOfRotation * 1000}
            position={[-17, 3, -0]}
          />
          <Parameter
            name={"G"}
            color={colors[1]}
            value={-gravity[1]}
            position={[10, 3, -0]}
          />
          <Parameter
            name={"M"}
            color={colors[2]}
            value={ballMass}
            position={[10, -7, -0]}
          />

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
