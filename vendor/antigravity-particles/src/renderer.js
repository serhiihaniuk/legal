import { getBackground, getColors } from "./options.js";
import { sampleParticles } from "./sampling.js";
import {
  simulationVertex,
  simulationFragment,
  particlesVertex,
  particlesFragment,
} from "./shaders.js";

const TEXTURE_SIZE = 256;
// The original camera has a 40-degree field of view and sits 3.1 units away.
export const VIEW_HALF_HEIGHT = Math.tan(20 * Math.PI / 180) * 3.1;

function compileProgram(gl, vertexSource, fragmentSource) {
  const shaders = [];
  const program = gl.createProgram();
  if (!program) throw new Error("Could not allocate a particle shader program.");
  try {
    for (const [type, source] of [[gl.VERTEX_SHADER, vertexSource], [gl.FRAGMENT_SHADER, fragmentSource]]) {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Could not allocate a particle shader.");
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(`Particle shader compilation failed: ${gl.getShaderInfoLog(shader)}`);
      }
      gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(`Particle shader linking failed: ${gl.getProgramInfoLog(program)}`);
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let index = 0; index < count; index++) {
      const { name } = gl.getActiveUniform(program, index);
      uniforms[name.replace(/\[0\]$/, "")] = gl.getUniformLocation(program, name);
    }
    return { program, uniforms };
  } catch (error) {
    gl.deleteProgram(program);
    throw error;
  } finally {
    for (const shader of shaders) gl.deleteShader(shader);
  }
}

function createTexture(gl, internalFormat, type, data = null) {
  const texture = gl.createTexture();
  if (!texture) throw new Error("Could not allocate a particle texture.");
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, TEXTURE_SIZE, TEXTURE_SIZE, 0, gl.RGBA, type, data);
  return texture;
}

function deleteState(gl, state) {
  if (!state) return;
  if (state.reference) gl.deleteTexture(state.reference);
  for (const target of state.targets) {
    if (target.framebuffer) gl.deleteFramebuffer(target.framebuffer);
    if (target.texture) gl.deleteTexture(target.texture);
  }
}

function createState(gl, density) {
  const points = sampleParticles(density);
  const count = points.length / 2;
  if (count > TEXTURE_SIZE * TEXTURE_SIZE) throw new Error("Particle texture capacity exceeded.");
  const pixels = new Float32Array(TEXTURE_SIZE * TEXTURE_SIZE * 4);
  for (let index = 0; index < count; index++) {
    pixels[index * 4] = points[index * 2];
    pixels[index * 4 + 1] = points[index * 2 + 1];
  }
  const state = { reference: null, targets: [], count, current: 0, initialized: false };
  try {
    state.reference = createTexture(gl, gl.RGBA32F, gl.FLOAT, pixels);
    for (let index = 0; index < 2; index++) {
      const target = { texture: null, framebuffer: null };
      state.targets.push(target);
      target.texture = createTexture(gl, gl.RGBA16F, gl.HALF_FLOAT);
      target.framebuffer = gl.createFramebuffer();
      if (!target.framebuffer) throw new Error("Could not allocate a particle framebuffer.");
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error("This GPU cannot render the particle simulation's floating point textures.");
      }
    }
    return state;
  } catch (error) {
    deleteState(gl, state);
    throw error;
  } finally {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
}

export class ParticleRenderer {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;
    this.state = null;
    this.simulation = null;
    this.particles = null;
    this.width = 1;
    this.height = 1;
    this.gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    if (!this.gl) throw new Error("The particle effect requires WebGL 2. Enable browser graphics acceleration.");
    const gl = this.gl;
    try {
      if (!gl.getExtension("EXT_color_buffer_float")) {
        throw new Error("The particle effect requires EXT_color_buffer_float support.");
      }
      this.maxPointSize = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1];
      this.maxCanvasSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
      this.simulation = compileProgram(gl, simulationVertex, simulationFragment);
      this.particles = compileProgram(gl, particlesVertex, particlesFragment);
      this.configure(options);
      gl.disable(gl.DEPTH_TEST);
      gl.disable(gl.CULL_FACE);
    } catch (error) {
      this.destroy();
      throw error;
    }
  }

  configure(options) {
    if (!this.state || options.density !== this.options.density) {
      // Allocate before replacing the old state so a failed update leaves it usable.
      const nextState = createState(this.gl, options.density);
      deleteState(this.gl, this.state);
      this.state = nextState;
    }
    this.options = options;
    this.colors = getColors(options).flat();
    this.background = getBackground(options);
  }

  resize(width, height, devicePixelRatio) {
    this.width = width;
    this.height = height;
    this.pixelRatio = Math.min(devicePixelRatio, this.options.maxPixelRatio,
      this.maxCanvasSize / Math.max(width, height));
    const pixelWidth = Math.max(1, Math.round(width * this.pixelRatio));
    const pixelHeight = Math.max(1, Math.round(height * this.pixelRatio));
    if (this.canvas.width !== pixelWidth) this.canvas.width = pixelWidth;
    if (this.canvas.height !== pixelHeight) this.canvas.height = pixelHeight;
  }

  simulate(time, delta, ring) {
    const gl = this.gl;
    const state = this.state;
    const nextIndex = 1 - state.current;
    const previous = state.initialized ? state.targets[state.current].texture : state.reference;
    const { program, uniforms } = this.simulation;
    gl.disable(gl.BLEND);
    gl.bindFramebuffer(gl.FRAMEBUFFER, state.targets[nextIndex].framebuffer);
    gl.viewport(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
    gl.useProgram(program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, previous);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, state.reference);
    gl.uniform1i(uniforms.uPrevious, 0);
    gl.uniform1i(uniforms.uReference, 1);
    gl.uniform2fv(uniforms.uRing, ring);
    gl.uniform1f(uniforms.uTime, time);
    gl.uniform1f(uniforms.uFrameStep, delta * 60);
    gl.uniform1f(uniforms.uRingWidth, this.options.ringWidth);
    gl.uniform1f(uniforms.uRingWidth2, this.options.ringWidth2);
    gl.uniform1f(uniforms.uDisplacement, this.options.displacement);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    state.current = nextIndex;
    state.initialized = true;
  }

  draw(time, ring) {
    // Seed a visible still frame for autoStart:false and reduced-motion users.
    if (!this.state.initialized) {
      for (let frame = 0; frame < 12; frame++) this.simulate(time, 1 / 60, ring);
    }
    const gl = this.gl;
    const { program, uniforms } = this.particles;
    const projection = 5 / VIEW_HALF_HEIGHT;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clearColor(...this.background);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.state.targets[this.state.current].texture);
    gl.uniform1i(uniforms.uState, 0);
    gl.uniform1i(uniforms.uTextureSize, TEXTURE_SIZE);
    gl.uniform2f(uniforms.uProjection, projection / (this.width / this.height), projection);
    gl.uniform1f(uniforms.uPointSize, 7 * this.pixelRatio * 0.5 * (this.width / 2000) * this.options.particleSize);
    gl.uniform1f(uniforms.uMaxPointSize, this.maxPointSize);
    gl.uniform2fv(uniforms.uRing, ring);
    gl.uniform1f(uniforms.uTime, time);
    gl.uniform3fv(uniforms.uColors, this.colors);
    gl.uniform1i(uniforms.uLightTheme, this.options.theme === "light" ? 1 : 0);
    gl.drawArrays(gl.POINTS, 0, this.state.count);
  }

  destroy() {
    deleteState(this.gl, this.state);
    this.state = null;
    for (const pass of [this.simulation, this.particles]) {
      if (pass) this.gl.deleteProgram(pass.program);
    }
    this.simulation = null;
    this.particles = null;
  }
}
