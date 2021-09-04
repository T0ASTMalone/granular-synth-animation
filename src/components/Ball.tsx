import { useSphere } from "@react-three/cannon";
import { useMemo } from "react";
import { SphereBufferGeometry } from "three";

const Ball = () => {
  const [ref] = useSphere(() => ({
    mass: 0.5,
    args: 0.5,
    position: [0, Math.floor(Math.random() * 2) + 1, 0],
    material: { friction: 0.12, restitution: 1 },
  }));

  const geom = useMemo(() => new SphereBufferGeometry(0.5, 10, 10), []);

  return (
    <mesh castShadow ref={ref} geometry={geom}>
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Ball;
