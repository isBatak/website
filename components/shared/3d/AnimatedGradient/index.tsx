import { Plane, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useMemo, useRef } from 'react';
import * as THREE from 'three';

import vertex from './shader.vert';
import fragment from './shader.frag';

const lerp = (start: number, end: number, step: number) => {
  return (1 - step) * start + step * end;
};

export const AnimatedGradient: FC = () => {
  const {
    size: { width, height },
  } = useThree();
  const ref = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.getElapsedTime() * 0.1;

      if (ref.current.uniforms.uOpacity.value < 1) {
        const start = ref.current.uniforms.uOpacity.value;
        const end = 1;
        const step = 0.1;
        ref.current.uniforms.uOpacity.value = lerp(start, end, step);
      }
    }
  });
  const gradientTexture = useTexture('/3d/gradient.jpg');

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uGradient: {
        value: gradientTexture,
      },
      uResolution: {
        value: new THREE.Vector2(width, height),
      },
      uOpacity: {
        value: 0,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial
        attach="material"
        ref={ref}
        fragmentShader={fragment}
        vertexShader={vertex}
        transparent
        uniforms={uniforms}
      />
    </Plane>
  );
};
