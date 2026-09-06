import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest"
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
  StaticRouter,
} from "react-router"
import { renderToString } from "react-dom/server"
import { hydrateRoot } from "react-dom/client"
import MapPage, { loader } from "./map"

afterEach(cleanup)

const animationsDescriptor = Object.getOwnPropertyDescriptor(
  Element.prototype,
  "getAnimations"
)
beforeAll(() => {
  // happy-dom omits this browser API used by Base UI's scroll area.
  Object.defineProperty(Element.prototype, "getAnimations", {
    configurable: true,
    value: () => [],
  })
})
afterAll(() => {
  if (animationsDescriptor)
    Object.defineProperty(
      Element.prototype,
      "getAnimations",
      animationsDescriptor
    )
  else Reflect.deleteProperty(Element.prototype, "getAnimations")
})

function renderMap(path: string) {
  const router = createMemoryRouter(
    [
      { path: "/map/:nodeId?", Component: MapPage, loader },
      { path: "/study", element: <h1>Optional reading guide</h1> },
    ],
    { initialEntries: [path] }
  )
  render(<RouterProvider router={router} />)
  return router
}

describe("map chapter navigation", () => {
  it("hydrates a fragment-free server response before selecting the browser's chapter", async () => {
    const container = document.createElement("div")
    container.innerHTML = renderToString(
      <StaticRouter location="/map">
        <MapPage />
      </StaticRouter>
    )
    document.body.append(container)
    const errors: unknown[] = []
    const root = hydrateRoot(
      container,
      <MemoryRouter initialEntries={["/map#stage-protection"]}>
        <MapPage />
      </MemoryRouter>,
      { onRecoverableError: (error) => errors.push(error) }
    )
    try {
      await act(async () => {})
      expect(errors).toEqual([])
      expect(
        container.querySelector('#stage-protection [aria-expanded="true"]')
      ).not.toBeNull()
    } finally {
      await act(() => root.unmount())
      container.remove()
    }
  })

  it("opens an old chapter anchor, enters a topic and restores the chapter on Back", async () => {
    const router = renderMap("/map#stage-route")
    await screen.findByRole("heading", {
      level: 1,
      name: "Як влаштована справа іноземця",
    })
    expect(
      screen.getByRole("combobox", { name: "Тема" }).textContent
    ).toContain("Зміст карти")
    const chapter = document.getElementById("stage-route")
    expect(chapter).not.toBeNull()
    if (!chapter) return
    expect(chapter.querySelector('[aria-expanded="true"]')).not.toBeNull()
    fireEvent.click(
      within(chapter).getByRole("button", { name: /^Перейти на CUKR/ })
    )
    await screen.findByRole("heading", { level: 1, name: "Перейти на CUKR" })
    expect(router.state.location.pathname).toBe("/map/cukr-route-2026")
    expect(screen.queryByText("Питання етапу")).toBeNull()
    await act(() => router.navigate(-1))
    await screen.findByRole("heading", {
      level: 1,
      name: "Як влаштована справа іноземця",
    })
    expect(router.state.location.hash).toBe("#stage-route")
    expect(
      document
        .getElementById("stage-route")
        ?.querySelector('[aria-expanded="true"]')
    ).not.toBeNull()
  })

  it("returns a moved topic to its primary chapter", async () => {
    const router = renderMap("/map/pending-stay")
    await screen.findByRole("heading", {
      level: 1,
      name: "Перебування під час процедури",
    })
    fireEvent.click(screen.getByRole("button", { name: "До розділу карти" }))
    await screen.findByRole("heading", {
      level: 1,
      name: "Як влаштована справа іноземця",
    })
    expect(router.state.location.hash).toBe("#stage-status")
    expect(
      document
        .getElementById("stage-status")
        ?.querySelector('[aria-expanded="true"]')
    ).not.toBeNull()
  })

  it("redirects the retired weekly schedule to the optional reading guide", async () => {
    const router = renderMap("/map/study-loop")
    await screen.findByRole("heading", { name: "Optional reading guide" })
    expect(router.state.location.pathname).toBe("/study")
  })
})
