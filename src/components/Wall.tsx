import { useEffect, useRef } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Point } from "../common/types";

const Wall = (props: any) => {
  const { onContact, dimensions, ...otherProps } = props;

  const [ref, api] = useBox(() => ({
    ...otherProps,
    args: [dimensions[0], 3, dimensions[2]],
    linearDamping: 0,
    isKinematic: true,
    material: { friction: 0.01, restitution: .95 },
    onCollide: () => onContact(),
  }));

  const c: Point = { x: 0, y: 0 };
  const positions = useRef([...props.position]);
  const rotation = useRef([...props.rotation]);

  useFrame(() => {
    if (ref.current !== undefined) {
      let point: Point = rotatePoint(c.x, c.y, props.angle, {
        x: positions.current[0],
        y: positions.current[1],
      });

      api.rotation.set(
        rotation.current[0],
        rotation.current[1] - props.angle,
        rotation.current[2]
      );

      let z = ref?.current?.position?.z;
      // @ts-ignore
      api.position.set(point.x, point.y, z);

      // @ts-ignore
      ref.current.rotation.y = rotation.current[1] - props.angle;
      // @ts-ignore
      ref.current.position.x = point.x;
      // @ts-ignore
      ref.current.position.y = point.y;
    }
  });

  useEffect(() => {
    positions.current = [...props.position];
    rotation.current = [...props.rotation];
  }, [props.rotation, props.position]);

  function rotatePoint(cx: number, cy: number, angle: number, p: Point): Point {
    let s: number = Math.sin(angle);
    let c: number = Math.cos(angle);

    // translate point back to origin:
    p.x -= cx;
    p.y -= cy;

    // rotate point
    let xnew: number = p.x * c - p.y * s;
    let ynew: number = p.x * s + p.y * c;

    // translate point back:
    p.x = xnew + cx;
    p.y = ynew + cy;
    return p;
  }

  return (
    <mesh {...props} ref={ref} receiveShadow>
      {/* @ts-ignore */}
      <boxBufferGeometry args={[...dimensions]} />
      <meshStandardMaterial color={"#C8C8CF"} />
    </mesh>
  );
};
export default Wall;
