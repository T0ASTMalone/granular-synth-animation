import React from "react";
import * as THREE from "three";
import Comfortaa from "../assets/fonts/Comfortaa Medium_Regular.json";

const Parameter = (props: any) => {

  const {color, name, position, value } = props;

  const font = new THREE.FontLoader().parse(Comfortaa);

  const textOptions = {
    font,
    size: 2.5,
    height: 0.05,
  };

  return (
    <>
      <mesh position={position}>
        <textGeometry attach="geometry" args={[name, textOptions]} />
        <meshStandardMaterial color={color} attach="material" />
      </mesh>
      <mesh
        position={[
          position[0] + 4,
          position[1],
          position[2],
        ]}
      >
        <textGeometry
          attach="geometry"
          args={[`${value}`, textOptions]}
        />
        <meshStandardMaterial attach="material" />
      </mesh>
    </>
  );
};

export default Parameter;
