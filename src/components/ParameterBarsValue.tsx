import React from "react";

const ParameterBarsValue = (props: any) => {
  const { value, position, color } = props;


  return (
    <>
      <mesh
        position={[position[0] + 1.1, position[1] + (value / 37.03), position[2]]}
      >
        <meshStandardMaterial attach="material" color={"#6B8EE5"} />
        <boxBufferGeometry args={[1.3, 0.25, 0.3]} />
      </mesh>
      <mesh position={[position[0] + 1.9, position[1] + (value / 37.03), position[2]]}>
        <meshStandardMaterial attach="material" color={"#6B8EE5"} />
        <sphereBufferGeometry args={[0.3, 40, 40]} />
      </mesh>
      <mesh position={[position[0] + 0.3, position[1] + (value / 37.03), position[2]]}>
        <meshStandardMaterial attach="material" color={"#6B8EE5"} />
        <sphereBufferGeometry args={[0.3, 40, 40]} />
      </mesh>
      <mesh position={[position[0] + 1.1, position[1] + 1.3, position[2]]}>
        <meshStandardMaterial attach="material" color={"#384457"} />
        <boxBufferGeometry args={[0.25, 3, 0.25]} />
      </mesh>
    </>
  );
};

export default ParameterBarsValue;
