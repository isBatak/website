import { FC, useEffect, useRef } from 'react';

import vertexSource from './shader.vert';
import fragmentSource from './shader.frag';

const compileShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);

  if (!shader) {
    throw new Error('Unable to create WebGL shader');
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) ?? 'Unknown shader compilation error';
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
};

const createProgram = (gl: WebGLRenderingContext) => {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();

  if (!program) {
    throw new Error('Unable to create WebGL program');
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) ?? 'Unknown WebGL link error';
    gl.deleteProgram(program);
    throw new Error(message);
  }

  return program;
};

export const AnimatedGradient: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // WebGL context attributes cannot be changed after a context is created.
    // Creating the canvas here guarantees a fresh transparent context after
    // Fast Refresh as well as on a normal mount.
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      premultipliedAlpha: true,
      stencil: false,
    });

    if (!gl) {
      canvas.remove();
      return;
    }

    const program = createProgram(gl);
    const vertexBuffer = gl.createBuffer();
    const gradientTexture = gl.createTexture();

    if (!vertexBuffer || !gradientTexture) {
      gl.deleteProgram(program);
      return;
    }

    // One oversized triangle covers the viewport with no diagonal seam.
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 0, 3, -1, 2, 0, -1, 3, 0, 2]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    const uvLocation = gl.getAttribLocation(program, 'uv');
    const timeLocation = gl.getUniformLocation(program, 'uTime');
    const opacityLocation = gl.getUniformLocation(program, 'uOpacity');
    const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
    const gradientLocation = gl.getUniformLocation(program, 'uGradient');

    gl.useProgram(program);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 16, 8);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, gradientTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));
    gl.uniform1i(gradientLocation, 0);

    const gradientImage = new Image();
    gradientImage.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, gradientTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, gradientImage);
    };
    gradientImage.src = '/3d/gradient.jpg';

    let displayWidth = 1;
    let displayHeight = 1;
    const resize = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      displayWidth = Math.max(bounds.width, 1);
      displayHeight = Math.max(bounds.height, 1);
      const width = Math.round(displayWidth * pixelRatio);
      const height = Math.round(displayHeight * pixelRatio);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const startedAt = performance.now();
    let opacity = 0;
    let animationFrame = 0;
    const render = (now: number) => {
      opacity += (1 - opacity) * 0.1;
      gl.uniform1f(timeLocation, ((now - startedAt) / 1000) * 0.1);
      gl.uniform1f(opacityLocation, opacity);
      gl.uniform2f(resolutionLocation, displayWidth, displayHeight);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      gradientImage.onload = null;
      gl.deleteTexture(gradientTexture);
      gl.deleteBuffer(vertexBuffer);
      gl.deleteProgram(program);
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
