import { simplexNoise } from "./noise.glsl.js";

export const simulationVertex = /* glsl */ `#version 300 es
void main() {
  // One triangle covers the state texture. No vertex buffer is needed.
  vec2 position = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`;

export const simulationFragment = /* glsl */ `#version 300 es
precision highp float;
uniform sampler2D uPrevious;
uniform sampler2D uReference;
uniform vec2 uRing;
uniform float uTime;
uniform float uFrameStep;
uniform float uRingWidth;
uniform float uRingWidth2;
uniform float uDisplacement;
out vec4 nextState;

${simplexNoise}

void main() {
  ivec2 texel = ivec2(gl_FragCoord.xy);
  vec4 previous = texelFetch(uPrevious, texel, 0);
  vec2 reference = texelFetch(uReference, texel, 0).xy;
  float time = uTime * 0.5;
  float radius = 0.175 + sin(uTime) * 0.03 + cos(uTime * 3.0) * 0.02;
  float distanceToRing = distance(reference, uRing);
  float edgeNoise = snoise(vec3(reference * 0.2 + vec2(18.4924, 72.9744), time * 0.5));
  float noisyDistance = distance(reference + edgeNoise * 0.005, uRing);

  float ring = smoothstep(radius - uRingWidth * 2.0, radius, distanceToRing)
    - smoothstep(radius, radius + uRingWidth, noisyDistance);
  float halo = smoothstep(radius - uRingWidth2 * 2.0, radius, distanceToRing)
    - smoothstep(radius, radius + uRingWidth2, noisyDistance);
  float inside = 1.0 - smoothstep(radius, radius + uRingWidth2, distanceToRing);
  ring = pow(max(ring, 0.0), 2.0);
  halo = pow(max(halo, 0.0), 3.0);

  float scaleTarget = ring + halo * 3.0 + inside * 0.4;
  scaleTarget += snoise(vec3(reference * 30.0 + vec2(11.4924, 12.9744), time * 0.5)) * inside * 0.5;
  float broadNoise = snoise(vec3(reference * 2.0 + vec2(18.4924, 72.9744), time * 0.5));
  scaleTarget += pow((broadNoise + 1.5) * 0.5, 2.0) * 0.6;

  vec2 drift = vec2(
    snoise(vec3(reference * 4.0 + vec2(88.494, 32.4397), time * 0.35)),
    snoise(vec3(reference * 4.0 + vec2(50.904, 120.947), time * 0.35))
  ) * 0.03;
  drift += vec2(
    snoise(vec3(reference * 20.0 + vec2(18.4924, 72.9744), time * 0.5)),
    snoise(vec3(reference * 20.0 + vec2(50.904, 120.947), time * 0.5))
  ) * 0.005;
  drift += vec2(
    sin(reference.x * 20.0 + time * 4.0),
    cos(reference.y * 20.0 + time * 3.0)
  ) * 0.02 * clamp(distanceToRing, 0.0, 1.0);

  // At 60 fps these recurrences match the original. Exponential damping
  // keeps the response consistent on displays with other refresh rates.
  vec2 force = (uRing - reference - drift) * pow(halo, 0.75) * uDisplacement;
  vec2 equilibrium = (reference + drift - force * 0.25) / 0.8;
  vec2 position = mix(previous.xy, equilibrium, 1.0 - pow(0.2, uFrameStep));
  float scale = mix(previous.z, scaleTarget, 1.0 - pow(0.8, uFrameStep));
  float velocity = mix(previous.w, scale * 0.5, 1.0 - pow(0.5, uFrameStep));
  nextState = vec4(position, scale, velocity);
}
`;

export const particlesVertex = /* glsl */ `#version 300 es
precision highp float;
uniform sampler2D uState;
uniform int uTextureSize;
uniform vec2 uProjection;
uniform float uPointSize;
uniform float uMaxPointSize;
out vec2 vPosition;
out float vScale;
out float vVelocity;

void main() {
  ivec2 texel = ivec2(gl_VertexID % uTextureSize, gl_VertexID / uTextureSize);
  vec4 state = texelFetch(uState, texel, 0);
  vPosition = state.xy;
  vScale = state.z;
  vVelocity = state.w;
  gl_Position = vec4(state.xy * uProjection, 0.0, 1.0);
  gl_PointSize = clamp(state.z * uPointSize, 1.0, uMaxPointSize);
}
`;

export const particlesFragment = /* glsl */ `#version 300 es
precision highp float;
in vec2 vPosition;
in float vScale;
in float vVelocity;
uniform vec2 uRing;
uniform float uTime;
uniform vec3 uColors[3];
uniform bool uLightTheme;
out vec4 fragmentColor;

${simplexNoise}

void main() {
  float angleNoise = snoise(vec3(vPosition * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85));
  float colorNoise = (snoise(vec3(vPosition * 2.0 + vec2(74.664, 91.556), uTime * 0.5)) + 1.0) * 0.5;
  float angle = -atan(vPosition.y - uRing.y, vPosition.x - uRing.x) + angleNoise * 0.5;
  vec2 uv = (gl_PointCoord - 0.5) * vec2(1.0, -1.0);
  uv = mat2(cos(angle), sin(angle), -sin(angle), cos(angle)) * uv;

  vec2 box = abs(uv) - vec2(0.5, 0.2) + 0.25;
  float roundedBox = min(max(box.x, box.y), 0.0) + length(max(box, 0.0)) - 0.25;
  float alpha = (1.0 - smoothstep(0.0, 0.1, roundedBox)) * smoothstep(0.1, 0.2, vScale);
  if (alpha < 0.01) discard;

  float progress = smoothstep(0.0, 0.75, colorNoise * colorNoise);
  vec3 color = progress < 0.8
    ? mix(uColors[0], uColors[1], progress / 0.8)
    : mix(uColors[1], uColors[2], (progress - 0.8) / 0.2);
  color = clamp(color, 0.0, 1.0);
  if (uLightTheme) color *= clamp(vVelocity, 0.0, 1.0);
  fragmentColor = vec4(color, clamp(alpha, 0.0, 1.0));
}
`;
