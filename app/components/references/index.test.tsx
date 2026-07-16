import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router"

import { LegalLink as CompatibilityLegalLink } from "~/components/legal-link"
import type { LegalTextValue } from "~/data/legal-library/legal-text"

import { LegalLink, LegalText } from "."

const kpaReference = {
  kind: "legal-document",
  documentId: "kpa",
} as const

describe("references public API", () => {
  it("preserves the compatibility export", () => {
    expect(CompatibilityLegalLink).toBe(LegalLink)
  })

  it("renders explicit quiet and full-treatment link contexts", () => {
    render(
      <MemoryRouter>
        <LegalLink reference={kpaReference} context="prose">
          Prose reference
        </LegalLink>
        <LegalLink reference={kpaReference} context="reference-section">
          Reference section
        </LegalLink>
        <LegalLink reference={kpaReference} context="provision-page">
          Provision page
        </LegalLink>
      </MemoryRouter>
    )

    const prose = screen.getByRole("link", { name: "Prose reference" })
    const referenceSection = screen.getByRole("link", {
      name: "Reference section",
    })
    const provisionPage = screen.getByRole("link", {
      name: "Provision page",
    })

    expect(prose.className).toContain("decoration-muted-foreground/45")
    expect(prose.className).not.toContain("legal-reference-link")
    expect(referenceSection.className).toContain("legal-reference-link")
    expect(provisionPage.className).toContain("legal-reference-link")
  })

  it("passes the selected context through structured LegalText", () => {
    const text: LegalTextValue = {
      kind: "authored-legal-text",
      plainText: "Читайте KPA",
      parts: [{ text: "Читайте " }, { text: "KPA", target: kpaReference }],
    }

    render(
      <MemoryRouter>
        <LegalText text={text} context="reference-section" />
      </MemoryRouter>
    )

    expect(screen.getByRole("link", { name: "KPA" }).className).toContain(
      "legal-reference-link"
    )
  })
})
