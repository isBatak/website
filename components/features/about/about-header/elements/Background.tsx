import * as THREE from 'three';
import { FC, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { LayerMaterial, Depth, Noise } from 'lamina';
import { Vector3 } from 'three';
import { Drumsticks } from 'components/features/about/about-header/elements/Drumsticks';

const Rig: FC<{ v?: Vector3 }> = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05);
  });
};

const Bg: FC = () => {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="#f7b733"
          colorA="#fc4a1a"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  );
};

export interface IBackgroundProps {}

export const Background: FC<IBackgroundProps> = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
        <Drumsticks />
        <Rig />
      </Suspense>
    </Canvas>
  );
};
