import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { HomeParticles } from "./home-particles"

const renderer = vi.hoisted(() => ({
  create: vi.fn(),
  start: vi.fn(),
  stop: vi.fn(),
  destroy: vi.fn(),
}))
vi.mock("antigravity-particles", () => ({ createParticles: renderer.create }))

beforeEach(() => {
  vi.clearAllMocks()
  renderer.create.mockReturnValue(renderer)
})
afterEach(cleanup)

function mountHero() {
  return render(
    <section className="home-hero">
      <HomeParticles />
      <h1>Homepage</h1>
      <a href="/map">Open map</a>
    </section>
  )
}

describe("homepage particle lifecycle", () => {
  it("pauses, resumes and destroys the renderer when leaving the page", async () => {
    const { unmount } = mountHero()
    fireEvent.click(
      await screen.findByRole("button", { name: "Призупинити анімацію" })
    )
    expect(renderer.stop).toHaveBeenCalledOnce()
    const resume = screen.getByRole("button", { name: "Відновити анімацію" })
    expect(resume.getAttribute("aria-pressed")).toBe("true")
    fireEvent.click(resume)
    expect(renderer.start).toHaveBeenCalledOnce()
    unmount()
    expect(renderer.destroy).toHaveBeenCalledOnce()
  })

  it("leaves the original content and links usable if WebGL is unavailable", async () => {
    renderer.create.mockImplementationOnce(() => {
      throw new Error("WebGL unavailable")
    })
    mountHero()
    await act(async () => {
      await vi.dynamicImportSettled()
    })
    expect(renderer.create).toHaveBeenCalledOnce()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.getByRole("heading").textContent).toBe("Homepage")
    expect(screen.getByRole("link").getAttribute("href")).toBe("/map")
  })

  it("removes the failed effect after an unrecoverable context restoration error", async () => {
    const { container } = mountHero()
    await screen.findByRole("button")
    const canvasHost = container.querySelector(".home-particles-canvas")
    if (!canvasHost) throw new Error("Missing canvas host")
    fireEvent(canvasHost, new CustomEvent("particleserror", { bubbles: true }))
    expect(renderer.destroy).toHaveBeenCalledOnce()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.getByRole("link")).toBeTruthy()
  })

  it("does not create a renderer after an immediate unmount", async () => {
    const { unmount } = mountHero()
    unmount()
    await act(async () => {
      await vi.dynamicImportSettled()
    })
    expect(renderer.create).not.toHaveBeenCalled()
  })
})
