import { afterEach, describe, expect, it } from "vitest"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"
import {
  MemoryRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router"
import { getCaseGuideRoute } from "~/data/case-guides/routes"
import { CaseRouteNavigation } from "./case-route-navigation"

afterEach(cleanup)

function NavigationPage() {
  const { routeId } = useParams()
  const navigate = useNavigate()
  return (
    <>
      <CaseRouteNavigation routeId={getCaseGuideRoute(routeId).id} />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

function renderNavigation() {
  render(
    <MemoryRouter initialEntries={["/cases/family"]}>
      <Routes>
        <Route path="/cases/:routeId" element={<NavigationPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("case route navigation", () => {
  it("restores the selected subtype when navigating back", () => {
    renderNavigation()
    const subtypes = within(
      screen.getByRole("navigation", { name: "Підстави перебування" })
    )
    expect(
      subtypes
        .getByRole("link", { name: "Rodzina" })
        .getAttribute("aria-current")
    ).toBe("page")
    fireEvent.click(subtypes.getByRole("link", { name: "Інші цілі" }))
    expect(
      subtypes
        .getByRole("link", { name: "Інші цілі" })
        .getAttribute("aria-current")
    ).toBe("page")
    expect(
      subtypes
        .getByRole("link", { name: "Rodzina" })
        .hasAttribute("aria-current")
    ).toBe(false)
    fireEvent.click(screen.getByRole("button", { name: "Back" }))
    expect(
      subtypes
        .getByRole("link", { name: "Rodzina" })
        .getAttribute("aria-current")
    ).toBe("page")
  })

  it("switches the family and its available subtypes together", () => {
    renderNavigation()
    const families = within(
      screen.getByRole("navigation", { name: "Види справ на малому екрані" })
    )
    fireEvent.click(families.getByRole("button", { name: "Rezydent UE" }))
    expect(
      families
        .getByRole("button", { name: "Rezydent UE" })
        .getAttribute("aria-current")
    ).toBe("page")
    const subtypes = within(
      screen.getByRole("navigation", { name: "Підстави перебування" })
    )
    expect(subtypes.getAllByRole("link")).toHaveLength(1)
    expect(subtypes.getAllByRole("link")[0]?.getAttribute("href")).toBe(
      "/cases/long-term-eu"
    )
    expect(subtypes.queryByRole("link", { name: "Rodzina" })).toBeNull()
  })
})
