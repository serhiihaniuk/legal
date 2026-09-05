import { afterEach, describe, expect, it, vi } from "vitest"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"

import { MobileSectionSelect } from "./section-navigation-select"

afterEach(cleanup)

const options = [
  { value: "entry", label: "В’їзд і підстава перебування" },
  { value: "work", label: "Два ключі: legalny pobyt і prawo na pracę" },
  { value: "family", label: "Сім’я" },
  { value: "business", label: "Бізнес" },
  { value: "student", label: "Навчання" },
  { value: "permanent", label: "Pobyt stały" },
  { value: "resident", label: "Rezydent UE" },
  { value: "unavailable", label: "Недоступний розділ", disabled: true },
]

describe("section navigation controls", () => {
  it("filters a long list, preserves disabled options, and only navigates on selection", async () => {
    const onValueChange = vi.fn()
    const { rerender } = render(
      <MobileSectionSelect
        label="Модуль"
        value="entry"
        options={options}
        onValueChange={onValueChange}
      />
    )
    fireEvent.click(screen.getByLabelText("Модуль"))
    const input = await screen.findByRole("combobox", {
      name: "Фільтр: Модуль",
    })
    expect(
      screen
        .getByRole("option", { name: "Недоступний розділ" })
        .getAttribute("aria-disabled")
    ).toBe("true")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "zzzz" } })
    expect(await screen.findByText("Нічого не знайдено")).toBeTruthy()
    expect(onValueChange).not.toHaveBeenCalled()
    fireEvent.change(input, { target: { value: "Два ключі" } })
    const result = await screen.findByRole("option", { name: options[1].label })
    expect(screen.getAllByRole("option")).toHaveLength(1)
    fireEvent.click(result)
    expect(onValueChange).toHaveBeenCalledExactlyOnceWith("work")
    rerender(
      <MobileSectionSelect
        label="Модуль"
        value="work"
        options={options}
        onValueChange={onValueChange}
      />
    )
    expect(screen.getByLabelText("Модуль").textContent).toContain(
      options[1].label
    )
    await waitFor(() => expect(screen.queryByRole("listbox")).toBeNull())
    rerender(
      <MobileSectionSelect
        label="Модуль"
        value="entry"
        options={options}
        onValueChange={onValueChange}
      />
    )
    expect(screen.getByLabelText("Модуль").textContent).toContain(
      options[0].label
    )
  })

  it("dismisses short lists with Escape without changing the selected route", async () => {
    const onValueChange = vi.fn()
    render(
      <MobileSectionSelect
        label="Розділ"
        value="entry"
        options={options.slice(0, 3)}
        onValueChange={onValueChange}
      />
    )
    const trigger = screen.getByLabelText("Розділ")
    fireEvent.click(trigger)
    const list = await screen.findByRole("listbox")
    fireEvent.keyDown(list, { key: "Escape" })
    await waitFor(() => expect(screen.queryByRole("listbox")).toBeNull())
    expect(onValueChange).not.toHaveBeenCalled()
    expect(trigger.textContent).toContain(options[0].label)
  })
})
