import { Triplet, useSphere } from "@react-three/cannon";
import { useEffect, useMemo, useRef } from "react";
import { SphereBufferGeometry } from "three";
import * as THREE from "three";

const Ball = (props: any) => {
  const { mass, color } = props;

  const [ref, api] = useSphere(() => ({
    mass: mass,
    args: 0.5,
    position: [0, Math.floor(Math.random() * 2) + 1, 0],
    material: { friction: 0.12, restitution: 1 },
  }));

  useEffect(() => {
    api.mass.set(mass);
  }, [mass, api]);

  const geom = useMemo(() => new SphereBufferGeometry(0.25, 10, 10), []);

  return (
    <mesh castShadow ref={ref} geometry={geom}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Ball;
