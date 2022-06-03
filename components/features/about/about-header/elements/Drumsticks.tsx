/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useState, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import { LayerMaterial, Color, Depth, Fresnel, Noise } from 'lamina/vanilla';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Meat: THREE.Mesh;
    Bone: THREE.Mesh;
  };
  materials: {
    MeatMaterial: THREE.MeshStandardMaterial;
    BoneMaterial: THREE.MeshStandardMaterial;
  };
};

const meatBaseColor = new THREE.Color('#E76203').convertSRGBToLinear();
const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear();
const meatFresnel = new THREE.Color('#E7B473').convertSRGBToLinear();
const materialMeat = new LayerMaterial({
  layers: [
    new Color({ color: meatBaseColor }),
    // new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    // new Depth({ colorA: 'purple', colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: meatFresnel, intensity: 0.3, power: 2.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'black', mode: 'overlay' }),
  ],
});

const boneBaseColor = new THREE.Color('#ffffff').convertSRGBToLinear();
const boneFresnel = new THREE.Color('#000000').convertSRGBToLinear();
const materialBone = new LayerMaterial({
  layers: [
    new Color({ color: boneBaseColor }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'black', mode: 'overlay' }),
  ],
});

function Drumstick() {
  const { viewport, camera } = useThree();
  const { nodes, materials } = useGLTF('/3d/batak.glb') as GLTFResult;

  const [speed] = useState(() => 0.1 + Math.random() / 10);
  const position = useMemo(() => {
    const z = Math.random() * -30;
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z]);
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z];
  }, [viewport, camera]);

  return (
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={1} geometry={nodes.Meat.geometry} material={materialMeat} />
      <mesh scale={1} geometry={nodes.Bone.geometry} material={materialBone} />
      <group dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Meat.geometry} material={materialMeat} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bone.geometry}
          material={materialBone}
          position={[0, 1.88, 0.42]}
          scale={[1, 0.63, 0.94]}
        />
      </group>
    </Float>
  );
}

export function Drumsticks() {
  return (
    <>
      {Array.from({ length: 25 }, (_, i) => (
        <Drumstick key={i} />
      ))}
    </>
  );
}

useGLTF.preload('/3d/batak.glb');
