import React, { useCallback, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Ball from "../components/Ball";
import Scene from "../components/Sene";
import { Physics, Debug } from "@react-three/cannon";
import Box from "../components/Box";
import Effect from "./Effect";
import Parameter from "../components/Parameter";
import ParameterNumberValue from "../components/ParameterNumberValue";
import ParameterCirclesValue from "../components/ParameterCirclesValue";
import ParameterBarsValue from "../components/ParameterBarsValue";

const GranularSynth = (props: any) => {
  const { sides, balls, handleTrigger, speedOfRotation, gravity, ballMass } =
    props;

  let colors = useMemo(() => ["#6B8EE5", "#02E18F", "#EE3F5C"], []);

  const renderBallsCallback = useCallback(() => {
    return [...new Array(balls)].map((b: number, i: number) => {
      return <Ball key={i} color={colors[i]} mass={ballMass} />;
    });
  }, [balls, ballMass, colors]);

  return (
    <div style={{ maxWidth: "100%", height: "calc(100vw / 16 * 7)" }}>
      <Canvas camera={{ fov: 75, position: [0, 0, 10] }} mode="concurrent">
        <Effect>
          <Scene>
            <ambientLight />
            <spotLight
              args={["white", 5, 7]}
              position={[0, 4, 0]}
              angle={0.5}
            />

            <Parameter
              name={"S"}
              color={colors[0]}
              value={speedOfRotation * 1000}
              position={[-14.5, 2.5, -0]}
            >
              <ParameterNumberValue />
            </Parameter>
            <Parameter
              name={"G"}
              color={colors[1]}
              value={-gravity[1]}
              position={[8.5, 2.5, -0]}
            >
              <ParameterCirclesValue />
            </Parameter>
            <Parameter
              name={"M"}
              color={colors[2]}
              value={ballMass}
              position={[8.5, -5.5, -0]}
            >
              <ParameterBarsValue />
            </Parameter>

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
    </div>
  );
};

export default GranularSynth;
