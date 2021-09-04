import {
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { useEffect, useRef } from "react";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<
        EffectComposer,
        typeof EffectComposer
      >;
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>;
      unrealBloomPass: ReactThreeFiber.Object3DNode<
        UnrealBloomPass,
        typeof UnrealBloomPass
      >;
    }
  }
}
//@ts-ignore
export default function Effect({ children }) {
  const { scene, gl, camera, size } = useThree();
  const composer = useRef();
  useEffect(
    //@ts-ignore
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => {
    //@ts-ignore
    scene && composer.current.render();
  }, 1);

  return (
    <>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        {/* @ts-ignore */}
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, -1, 0]} />
      </effectComposer>
      <scene>{children}</scene>
    </>
  );
}
