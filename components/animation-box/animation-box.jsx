import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const AnimationBox = () => {
  const mesh = useRef();
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x - camera.position.x) * 0.1;
    camera.position.y += (-mouse.y - camera.position.y) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#f00"} />
    </mesh>
  );
};
