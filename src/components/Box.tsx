import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Wall from "./Wall";
import TransparentWall from "./TransparentWall";
import { Shapes, ContainerWall } from "../common/shapes";

const Box = (props: any) => {
  const { handleTrigger, speedOfRotation, sides } = props;

  const [angle, setAngle] = useState(0);
  const [walls, setWalls] = useState<ContainerWall[]>();

  useFrame(() => {
    let na = angle - speedOfRotation;
    if (na < -360) {
      na = 0;
    }
    // setAngle(na);
  });

  useEffect(() => {
    let c = Shapes.find((s) => s.numberOfWalls === sides);

    if (!c) c = Shapes[0];

    setWalls([...c.walls]);
  }, [sides]);

  const renderWall = (p: any, i: number) => {
    return (
      <Wall
        angle={angle}
        key={`${i}-${p.name}`}
        index={i}
        //@ts-ignore
        rotation={[...p.rotation]}
        //@ts-ignore
        position={[...p.position]}
        onContact={handleTrigger}
        //@ts-ignore
        dimensions={[...p.dimensions]}
      />
    );
  };

  return (
    <>
      <TransparentWall position={[0, 0, -1]} />
      {walls && walls.map((p: any, i: number) => renderWall(p, i))}
      <TransparentWall position={[0, 0, 1]} />
    </>
  );
};

export default Box;
