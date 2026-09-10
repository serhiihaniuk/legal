import { useEffect, useRef, useState } from "react"
import type { ParticleEffect } from "antigravity-particles"

export function HomeParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<ParticleEffect | null>(null)
  const [ready, setReady] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let disposed = false
    let effect: ParticleEffect | undefined
    let sizeObserver: ResizeObserver | undefined
    // The renderer scales point size by width. Keep dots legible on phones.
    const particleSize = () =>
      0.59 * Math.max(1, 1200 / Math.max(240, container.clientWidth))
    const page = container.closest<HTMLElement>(".home-hero")
    const forwardPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && container.contains(event.target))
        return
      container.dispatchEvent(
        new PointerEvent(event.type, {
          clientX: event.clientX,
          clientY: event.clientY,
          pointerType: event.pointerType,
        })
      )
    }
    page?.addEventListener("pointermove", forwardPointer, { passive: true })
    page?.addEventListener("pointerleave", forwardPointer)
    page?.addEventListener("pointercancel", forwardPointer)
    const fallback = () => {
      sizeObserver?.disconnect()
      effect?.destroy()
      effectRef.current = null
      if (!disposed) setReady(false)
    }
    container.addEventListener("particleserror", fallback)

    void import("antigravity-particles")
      .then(({ createParticles }) => {
        if (disposed) return
        effect = createParticles(container, {
          background: "transparent",
          density: 230,
          particleSize: particleSize(),
          maxPixelRatio: 1.5,
          respectReducedMotion: true,
        })
        effectRef.current = effect
        let currentSize = particleSize()
        sizeObserver = new ResizeObserver(() => {
          const nextSize = particleSize()
          if (nextSize === currentSize) return
          currentSize = nextSize
          effect?.setOptions({ particleSize: nextSize })
        })
        sizeObserver.observe(container)
        setReady(true)
      })
      .catch(fallback)

    return () => {
      disposed = true
      sizeObserver?.disconnect()
      container.removeEventListener("particleserror", fallback)
      page?.removeEventListener("pointermove", forwardPointer)
      page?.removeEventListener("pointerleave", forwardPointer)
      page?.removeEventListener("pointercancel", forwardPointer)
      effect?.destroy()
      effectRef.current = null
    }
  }, [])

  function toggleAnimation() {
    const effect = effectRef.current
    if (!effect) return
    if (paused) effect.start()
    else effect.stop()
    setPaused(!paused)
  }

  return (
    <>
      <div className="home-particles" aria-hidden="true">
        <div
          ref={containerRef}
          className="home-particles-canvas"
          aria-hidden="true"
        />
      </div>

      {ready && (
        <button
          type="button"
          className="home-particles-toggle"
          aria-pressed={paused}
          onClick={toggleAnimation}
        >
          {paused ? "Відновити анімацію" : "Призупинити анімацію"}
        </button>
      )}
    </>
  )
}
