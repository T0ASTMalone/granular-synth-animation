import { extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const Scene = (props: any) => {

  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      {props.children}
      <orbitControls args={[camera, domElement]} />
    </>
  );
};

export default Scene;
