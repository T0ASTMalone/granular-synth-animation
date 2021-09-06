const ParameterNumberValue = (props: any) => {
  const { value, textOptions, position } = props;
  return (
    <mesh position={[position[0] -1, position[1], position[2]]}>
      <meshStandardMaterial attach="material" />
      <textGeometry attach="geometry" args={[`${value}`, textOptions]} />
    </mesh>
  );
};

export default ParameterNumberValue;
