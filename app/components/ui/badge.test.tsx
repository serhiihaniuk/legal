import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Badge } from "./badge"

describe("Badge", () => {
  it("renders its label in a span element", () => {
    render(<Badge>Reviewed</Badge>)

    const badge = screen.getByText("Reviewed")
    expect(badge.tagName).toBe("SPAN")
  })
})
