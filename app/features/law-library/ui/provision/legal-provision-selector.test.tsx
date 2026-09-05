import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import { MemoryRouter, useLocation } from "react-router"
import { afterEach, describe, expect, it } from "vitest"
import { listProvisions } from "~/data/legal-library"
import { LegalProvisionSelector } from "./legal-provision-selector"

const documentId = "rozporzadzenie-wniosek-pobyt-czasowy"
function Location() {
  return <output data-testid="location">{useLocation().pathname}</output>
}
afterEach(cleanup)
describe("provision index navigation", () => {
  it("opens at the selected annex, switches sections and navigates to a real provision", async () => {
    const provisions = listProvisions(documentId)
    const annex = provisions.find((item) => item.kind === "annex")!
    const paragraph = provisions.find((item) => item.kind === "paragraph")!
    render(
      <MemoryRouter>
        <LegalProvisionSelector
          documentId={documentId}
          documentLabel="Форми"
          provisions={provisions}
          selectedProvisionId={annex.id}
        />
        <Location />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole("button", { name: /Покажчик/ }))
    const select = await screen.findByLabelText("Розділ або додаток")
    expect(
      screen
        .getByRole("link", { name: new RegExp(annex.locator) })
        .getAttribute("aria-current")
    ).toBe("page")
    expect(screen.getByText("1 додаток")).toBeTruthy()
    fireEvent.focus(select)
    fireEvent.keyDown(select, { key: "ArrowDown" })
    fireEvent.change(select, { target: { value: "does-not-exist" } })
    expect(await screen.findByText("Розділ не знайдено")).toBeTruthy()
    fireEvent.change(select, { target: { value: "Przepisy" } })
    fireEvent.click(
      await screen.findByRole("option", { name: /Przepisy rozporządzenia/ })
    )
    fireEvent.click(
      screen.getByRole("link", { name: new RegExp(paragraph.locator) })
    )
    await waitFor(() =>
      expect(screen.getByTestId("location").textContent).toBe(
        "/law/" + documentId + "/provisions/" + paragraph.id
      )
    )
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
  })
})
