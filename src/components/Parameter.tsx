import React from "react";
import * as THREE from "three";
import Comfortaa from "../assets/fonts/Comfortaa Medium_Regular.json";

const Parameter = (props: any) => {

  const {color, name, position, value, children } = props;

  const font = new THREE.FontLoader().parse(Comfortaa);

  const textOptions = {
    font,
    size: 2.5,
    height: 0.05,
  };

  const child = children !== null ?  React.cloneElement(children, {value, textOptions, position: [position[0] + 4, position[1], position[2]], color}) : null;


  return (
    <>
      <mesh position={position}>
        <textGeometry attach="geometry" args={[name, textOptions]} />
        <meshStandardMaterial color={color} attach="material" />
      </mesh>
      {child && child}
    
    </>
  );
};

export default Parameter;
