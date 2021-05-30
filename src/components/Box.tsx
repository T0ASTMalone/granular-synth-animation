import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Wall from "./Wall";
import TransparentWall from "./TransparentWall";
import { Shapes, ContainerWall } from "../common/shapes";
// @ts-ignore
import uuid from 'react-uuid';

const Box = (props: any) => {
  const { handleTrigger, speedOfRotation, sides } = props;
  const [angle, setAngle] = useState(0);

  const [walls, setWalls] = useState<ContainerWall[]>();
  const [rotations, setRotations] = useState<number[][]>();
  const [dimensions, setDimentions] = useState<number[][]>();
  const [positions, setPositions] = useState<number[][]>();

  useFrame((state) => {
    let na = angle - speedOfRotation;
    if (na > 360) {
      na = 0;
    }
    setAngle(na);
  });

  useEffect(() => {
    let c = Shapes.find((s) => s.numberOfWalls === sides);
    if (!c) c = Shapes[0];
    setWalls([...c.walls]);
    setDimentions([...c.walls.map(w => w.dimensions)])
    setRotations([...c.walls.map(w => w.rotation)])
    setPositions([])
    setPositions([...c.walls.map(w => w.position)])
  }, [sides]);



  const renderWall = (p: any, i: number) => {
    return (
     rotations && positions && dimensions && <Wall
        angle={angle}
        key={`${i}-${p.name}`}
        index={i}
        rotation={[...rotations[i]]}
        position={[...positions[i]]}
        onContact={handleTrigger}
        dimensions={[...dimensions[i]]}
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
