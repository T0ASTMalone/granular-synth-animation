import React, { useMemo } from "react";
import { TorusBufferGeometry } from "three";

const ParameterCirclesValue = (props: any) => {
  const { value, position, color } = props;

  const innerCircle = useMemo(() => {
    return new TorusBufferGeometry(1.2, 0.1, 4, 50);
  }, []);

  const outerCircle = useMemo(() => {
    let radius = (24 - value) / 55;

    if (radius < 0.2) {
      radius = 0.2;
    }

    return new TorusBufferGeometry(radius, 0.1, 4, 50);
  }, [value]);

  return (
    <>
      <mesh
        position={[position[0] + .5, position[1] + 1.3, position[2]]}
        geometry={innerCircle}
      >
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
      <mesh
        position={[position[0] + .5, position[1] + 1.3, position[2]]}
        geometry={outerCircle}
      >
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </>
  );
};

export default ParameterCirclesValue;
