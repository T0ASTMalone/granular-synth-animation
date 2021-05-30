import { useSphere } from "@react-three/cannon";

const Ball = (props: any) => {
  const [ref] = useSphere(() => ({
    mass: 0.5,
    args: 0.5,
    position: [0, Math.floor(Math.random() * 2) + 1  , 0],
    material: { friction: .12, restitution: 1 },
    
  }));
  // TODO: move to wall instead so that balls colliding with each other don't tricgger a sound


  return (
    <mesh {...props} ref={ref} castShadow>
      <sphereBufferGeometry attach="geometry" args={[0.5, 10, 10]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Ball;
