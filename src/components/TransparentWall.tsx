import { useBox} from "@react-three/cannon";

const TransparentWall = (props: any) => {

  const [ref, api] = useBox(() => ({
    ...props,
    args: [15, 15, 1],
    linearDamping: 0,
    material: {friction: 0.0, restitution: 0}
  }));


  return (
    <mesh {...props} ref={ref} receiveShadow>
      <boxBufferGeometry args={[15, 15, 1]} />
      <meshStandardMaterial transparent opacity={0}/>
    </mesh>
  );
};
export default TransparentWall;