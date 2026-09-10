import { normalizeOptions } from "./options.js";
import { createNoise1D } from "./sampling.js";
import { ParticleRenderer, VIEW_HALF_HEIGHT } from "./renderer.js";

/**
 * @typedef {object} ParticleOptions
 * @property {"light" | "dark"} [theme="light"]
 * @property {[string, string, string] | null} [colors=null] Three hex colors; null selects the theme palette.
 * @property {string | null} [background=null] A hex color, "transparent", or null for the theme background.
 * @property {number} [density=230] Sampling density, between 0 and 300.
 * @property {number} [particleSize=0.59] Particle size multiplier.
 * @property {number} [ringWidth=0.006]
 * @property {number} [ringWidth2=0.107]
 * @property {number} [displacement=0.62]
 * @property {number} [speed=1] Noise animation speed.
 * @property {boolean} [interactive=true] Follow pointers inside this container.
 * @property {number} [maxPixelRatio=2] Upper limit for the canvas pixel ratio.
 * @property {boolean} [respectReducedMotion=true]
 * @property {boolean} [autoStart=true] Constructor only. Use start() and stop() after creation.
 */

export class ParticleEffect {
  #container;
  #canvas;
  #view;
  #document;
  #options;
  #renderer;
  #events;
  #resizeObserver;
  #intersectionObserver;
  #motionQuery;
  #noise = createNoise1D();
  #ring = new Float32Array(2);
  #pointer = null;
  #frame = null;
  #lastTimestamp = null;
  #time = 0;
  #requested = false;
  #visible = true;
  #hasSize = false;
  #contextLost = false;
  #destroyed = false;
  #devicePixelRatio = 1;

  /** @param {HTMLElement} container @param {ParticleOptions} [options] */
  constructor(container, options = {}) {
    const view = container?.ownerDocument?.defaultView;
    if (!view || !(container instanceof view.HTMLElement)) {
      throw new TypeError("Pass an HTML container element to createParticles().");
    }
    this.#options = normalizeOptions(options);
    this.#container = container;
    this.#view = view;
    this.#document = container.ownerDocument;
    this.#events = new view.AbortController();
    this.#canvas = this.#document.createElement("canvas");
    this.#canvas.setAttribute("aria-hidden", "true");
    this.#canvas.style.cssText = "display:block;width:100%;height:100%;pointer-events:none;";
    this.#motionQuery = view.matchMedia("(prefers-reduced-motion: reduce)");
    try {
      this.#renderer = new ParticleRenderer(this.#canvas, this.#options);
      container.appendChild(this.#canvas);
      this.#attachEvents();
      this.resize();
      if (this.#options.autoStart) this.start();
    } catch (error) {
      this.destroy();
      throw error;
    }
  }

  get canvas() { return this.#canvas; }
  get options() { return this.#options; }
  get particleCount() { return this.#renderer?.state?.count ?? 0; }
  get isRunning() { return this.#frame !== null; }
  get isDestroyed() { return this.#destroyed; }

  start() {
    this.#assertAlive();
    this.#requested = true;
    this.#refresh();
    return this;
  }

  stop() {
    this.#assertAlive();
    this.#requested = false;
    this.#cancelFrame();
    return this;
  }

  /** @param {Omit<ParticleOptions, "autoStart">} patch */
  setOptions(patch) {
    this.#assertAlive();
    const options = normalizeOptions(patch, this.#options);
    if (Object.hasOwn(patch, "autoStart")) {
      throw new TypeError("autoStart is a constructor option. Use start() or stop() instead.");
    }
    if (!this.#contextLost) this.#renderer.configure(options);
    this.#options = options;
    if (!options.interactive) this.#pointer = null;
    this.resize();
    return this;
  }

  /** ResizeObserver calls this automatically; it can also be called after layout changes. */
  resize() {
    this.#assertAlive();
    const width = this.#canvas.clientWidth;
    const height = this.#canvas.clientHeight;
    this.#hasSize = width > 0 && height > 0;
    this.#devicePixelRatio = this.#view.devicePixelRatio || 1;
    if (this.#hasSize && !this.#contextLost) {
      this.#renderer.resize(width, height, this.#devicePixelRatio);
      this.#renderer.draw(this.#time, this.#ring);
    }
    this.#refresh();
    return this;
  }

  /** Remove this instance's canvas, events, observers, animation and GPU resources. */
  destroy() {
    if (this.#destroyed) return;
    this.#destroyed = true;
    this.#requested = false;
    this.#cancelFrame();
    this.#events?.abort();
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    if (this.#renderer) {
      this.#renderer.destroy();
      this.#renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
      this.#renderer = null;
    }
    this.#canvas.remove();
    this.#pointer = null;
  }

  #assertAlive() {
    if (this.#destroyed) throw new Error("This particle effect has been destroyed. Create a new instance.");
  }

  #attachEvents() {
    const { signal } = this.#events;
    this.#container.addEventListener("pointermove", (event) => {
      if (this.#options.interactive) this.#pointer = [event.clientX, event.clientY];
    }, { passive: true, signal });
    this.#container.addEventListener("pointerleave", () => { this.#pointer = null; }, { signal });
    this.#container.addEventListener("pointercancel", () => { this.#pointer = null; }, { signal });
    this.#document.addEventListener("visibilitychange", () => this.#refresh(), { signal });
    this.#view.addEventListener("resize", () => this.resize(), { signal });
    this.#motionQuery.addEventListener("change", () => this.#refresh(), { signal });
    this.#resizeObserver = new this.#view.ResizeObserver(() => {
      if (!this.#destroyed) this.resize();
    });
    this.#resizeObserver.observe(this.#container);
    this.#intersectionObserver = new this.#view.IntersectionObserver(([entry]) => {
      if (this.#destroyed) return;
      this.#visible = entry.isIntersecting;
      this.#refresh();
    });
    this.#intersectionObserver.observe(this.#canvas);

    this.#canvas.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      this.#contextLost = true;
      this.#cancelFrame();
    }, { signal });
    this.#canvas.addEventListener("webglcontextrestored", () => {
      try {
        // The browser released the old GPU objects when the context was lost.
        // Deleting those handles in the restored context would be invalid.
        this.#renderer = new ParticleRenderer(this.#canvas, this.#options);
        this.#contextLost = false;
        this.resize();
      } catch (error) {
        this.#contextLost = true;
        this.#canvas.dispatchEvent(new this.#view.CustomEvent("particleserror", {
          detail: error,
          bubbles: true,
        }));
      }
    }, { signal });
  }

  #shouldAnimate() {
    return this.#requested && !this.#destroyed && !this.#contextLost
      && this.#hasSize && this.#visible && !this.#document.hidden
      && !(this.#options.respectReducedMotion && this.#motionQuery.matches);
  }

  #refresh() {
    if (!this.#shouldAnimate()) {
      this.#cancelFrame();
    } else if (this.#frame === null) {
      this.#frame = this.#view.requestAnimationFrame(this.#tick);
    }
  }

  #cancelFrame() {
    if (this.#frame !== null) this.#view.cancelAnimationFrame(this.#frame);
    this.#frame = null;
    this.#lastTimestamp = null;
  }

  #tick = (timestamp) => {
    this.#frame = null;
    if (!this.#shouldAnimate()) return;
    const delta = this.#lastTimestamp === null ? 1 / 60
      : Math.max(0, Math.min((timestamp - this.#lastTimestamp) / 1000, 0.05));
    this.#lastTimestamp = timestamp;
    this.#time += delta * this.#options.speed;
    if (this.#devicePixelRatio !== (this.#view.devicePixelRatio || 1)) this.resize();

    const jitterX = (this.#noise(this.#time * 0.66 + 94.234) - 0.5) * 2;
    const jitterY = (this.#noise(this.#time * 0.75 + 21.028) - 0.5) * 2;
    let targetX = jitterX * 0.2;
    let targetY = jitterY * 0.1;
    let following = false;
    if (this.#pointer) {
      const bounds = this.#canvas.getBoundingClientRect();
      const x = (this.#pointer[0] - bounds.left) / bounds.width;
      const y = (this.#pointer[1] - bounds.top) / bounds.height;
      following = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      if (following) {
        targetX = (x * 2 - 1) * VIEW_HALF_HEIGHT * (this.#renderer.width / this.#renderer.height) * 0.175 + jitterX * 0.1;
        targetY = (1 - y * 2) * VIEW_HALF_HEIGHT * 0.175 + jitterY * 0.1;
      }
    }
    const smoothing = 1 - Math.pow(following ? 0.98 : 0.99, delta * 60);
    this.#ring[0] += (targetX - this.#ring[0]) * smoothing;
    this.#ring[1] += (targetY - this.#ring[1]) * smoothing;
    this.#renderer.simulate(this.#time, delta, this.#ring);
    this.#renderer.draw(this.#time, this.#ring);
    this.#refresh();
  };
}

/** @param {HTMLElement} container @param {ParticleOptions} [options] @returns {ParticleEffect} */
export function createParticles(container, options) {
  return new ParticleEffect(container, options);
}
