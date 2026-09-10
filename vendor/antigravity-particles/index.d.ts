export interface ParticleOptions {
  theme?: "light" | "dark"
  colors?: [string, string, string] | null
  background?: string | null
  density?: number
  particleSize?: number
  ringWidth?: number
  ringWidth2?: number
  displacement?: number
  speed?: number
  interactive?: boolean
  maxPixelRatio?: number
  respectReducedMotion?: boolean
  autoStart?: boolean
}

export class ParticleEffect {
  constructor(container: HTMLElement, options?: ParticleOptions)
  readonly canvas: HTMLCanvasElement
  readonly options: Readonly<Required<Omit<ParticleOptions, "colors">>> & {
    readonly colors: readonly [string, string, string] | null
  }
  readonly particleCount: number
  readonly isRunning: boolean
  readonly isDestroyed: boolean
  start(): this
  stop(): this
  resize(): this
  setOptions(options: Omit<ParticleOptions, "autoStart">): this
  destroy(): void
}

export function createParticles(
  container: HTMLElement,
  options?: ParticleOptions
): ParticleEffect
