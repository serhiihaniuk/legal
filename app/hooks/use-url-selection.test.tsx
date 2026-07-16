import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter, useLocation } from "react-router"

import { useUrlSelection } from "./use-url-selection"

function SelectionHarness() {
  const location = useLocation()
  const selection = useUrlSelection({
    value: new URLSearchParams(location.search).get("module") ?? "first",
    to: (value: string) => ({
      pathname: location.pathname,
      search: `?module=${value}`,
    }),
    scroll: false,
  })

  return (
    <>
      <output>{selection.value}</output>
      <button type="button" onClick={() => selection.select("second")}>
        Наступний
      </button>
    </>
  )
}

describe("useUrlSelection", () => {
  it("updates the URL-backed selection through one navigation model", async () => {
    render(
      <MemoryRouter initialEntries={["/study?module=first"]}>
        <SelectionHarness />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole("button", { name: "Наступний" }))

    await waitFor(() => expect(screen.getByText("second")).toBeTruthy())
  })
})
