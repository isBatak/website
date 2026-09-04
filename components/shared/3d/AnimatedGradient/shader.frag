precision highp float;

//	Simplex 3D Noise
//	by Ian McEwan, Ashima Arts
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

uniform float uTime;
uniform vec2 uOffset;
uniform sampler2D uGradient;
uniform vec2 uResolution;
uniform float uOpacity;

varying vec2 vUv;

void main() {
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.);
  vec2 uv = vUv * aspect;


  float noise = snoise(vec3(uv, uTime));
  float noise1 = snoise(vec3(uv + 0.1, uTime));
  float noise2 = snoise(vec3(uv - 0.1, uTime));

  float alpha = noise + noise1 + noise2;

  float x = noise;
  vec3 color = texture2D(uGradient, vec2(x, 0.5)).rgb;

  // Keep the body of the shape solid, but let its perimeter dissolve through
  // a conventional dot screen instead of a soft, stained-looking fade.
  float rawCoverage = max(alpha, 0.0);
  float coverage = smoothstep(0.14, 0.9, rawCoverage);
  float coreAlpha = smoothstep(0.5, 0.86, rawCoverage);
  const float edgeSpacing = 7.0;
  vec2 edgeCell = mod(gl_FragCoord.xy, edgeSpacing) - edgeSpacing * 0.5;
  float edgeRadius = 3.15 * sqrt(coverage);
  float edgeDots = 1.0 - smoothstep(edgeRadius - 0.22, edgeRadius + 0.22, length(edgeCell));
  float shapeAlpha = max(coreAlpha, edgeDots * coverage);
  shapeAlpha *= step(0.001, coverage);

  // A subtly warped screen creates the darker ink visible in the reference.
  // Variation is local to each tiny cell so it cannot form broad stains.
  const float screenSpacing = 6.0;
  vec2 screenWarp = vec2(
    snoise(vec3(uv * 7.0, uTime * 0.16)),
    snoise(vec3(uv * 7.0 + 23.0, uTime * 0.14))
  ) * 0.28;
  vec2 screenPosition = gl_FragCoord.xy + screenWarp;
  vec2 screenPhase = screenPosition * (6.2831853 / screenSpacing);
  float lattice = 0.5 + 0.25 * (cos(screenPhase.x) + cos(screenPhase.y));
  vec2 screenCellIndex = floor(screenPosition / screenSpacing);
  float cellVariation = fract(sin(dot(screenCellIndex, vec2(12.9898, 78.233))) * 43758.5453);
  float inkThreshold = 0.64 + (cellVariation - 0.5) * 0.14;
  float inkMark = smoothstep(inkThreshold - 0.055, inkThreshold + 0.055, lattice);
  inkMark *= smoothstep(0.2, 0.72, coreAlpha);

  // Counter the optical desaturation introduced by placing tiny colored dots
  // over white, while retaining the hues from the original gradient texture.
  float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color = mix(vec3(luminance), color, 1.5);
  color = clamp((color - 0.5) * 1.18 + 0.5, 0.0, 1.0);
  color.gb *= vec2(0.84, 0.8);
  float lowToneAmount = 1.0 - smoothstep(0.08, 0.4, clamp(x, 0.0, 1.0));
  color = mix(color, vec3(1.0, 0.878, 0.64), lowToneAmount * 0.94);
  float highToneAmount = smoothstep(0.32, 0.72, clamp(x, 0.0, 1.0));
  color = mix(color, vec3(1.0, 0.2, 0.01), highToneAmount * 0.94);

  vec3 darkerInk = color * vec3(0.82, 0.74, 0.76);
  float inkStrength = inkMark * mix(0.24, 0.34, cellVariation);
  vec3 printedColor = mix(color, darkerInk, inkStrength);

  float outputAlpha = shapeAlpha * uOpacity;
  gl_FragColor = vec4(printedColor * outputAlpha, outputAlpha);
}
