import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  LegalProvisionSource,
  splitLegalProvisionSourceText,
} from "./legal-provision-source"

describe("legal provision source presentation", () => {
  it("splits numbered ustęp rows and repairs a hyphenated PDF line wrap", () => {
    const rows = splitLegalProvisionSourceText(
      "Art. 40. 1. Zezwolenie dotyczy cudzo-\r\nziemca.\n1) pierwszy punkt pozostaje w tekście.\n2) drugi punkt.\n2. Drugie ustępowe zdanie zachowuje art. 303 ust. 1."
    )

    expect(rows).toEqual([
      {
        label: "ust. 1",
        text: "Zezwolenie dotyczy cudzoziemca. 1) pierwszy punkt pozostaje w tekście. 2) drugi punkt.",
      },
      {
        label: "ust. 2",
        text: "Drugie ustępowe zdanie zachowuje art. 303 ust. 1.",
      },
    ])
  })

  it("supports an explicit leading ustęp locator without changing the source", () => {
    const source = "Art. 40 ust. 2. Jedyny wyodrębniony ustęp."

    expect(splitLegalProvisionSourceText(source)).toEqual([
      { label: "ust. 2", text: "Jedyny wyodrębniony ustęp." },
    ])
    expect(source).toBe("Art. 40 ust. 2. Jedyny wyodrębniony ustęp.")
  })

  it("falls back to one labelled row when only nested points are present", () => {
    expect(
      splitLegalProvisionSourceText(
        "Art. 12. Treść bez ustępów.\r\n1) pierwszy punkt\n2) drugi punkt"
      )
    ).toEqual([
      {
        label: "Текст",
        text: "Treść bez ustępów. 1) pierwszy punkt 2) drugi punkt",
      },
    ])
  })

  it("renders the source header and visible structural rows", () => {
    render(
      <LegalProvisionSource
        locator="Art. 40"
        startPdfPage={11}
        text={"Art. 40. 1. Pierwszy ustęp.\n2. Drugi ustęp."}
      />
    )

    expect(screen.getByText("Art. 40")).toBeTruthy()
    expect(screen.getByText("PDF, с. 11")).toBeTruthy()
    expect(screen.getByText("ust. 1")).toBeTruthy()
    expect(screen.getByText("ust. 2")).toBeTruthy()
    expect(screen.getByText("Pierwszy ustęp.")).toBeTruthy()
    expect(screen.getByText("Drugi ustęp.")).toBeTruthy()
  })

  it("labels compiled overlay text with base and amendment source spans", () => {
    render(
      <LegalProvisionSource
        locator="Art. 53"
        startPdfPage={14}
        text={"Art. 53. Tekst skompilowany."}
        sourceSpans={[
          {
            sourceId: "base",
            role: "base",
            locator: "Art. 53",
            startPdfPage: 14,
            endPdfPage: 14,
          },
          {
            sourceId: "du-2026-846",
            role: "amendment",
            locator: "Dz.U. 2026 poz. 846, Art. 10 pkt 1",
            effectiveDate: "2026-06-26",
          },
        ]}
      />
    )

    expect(
      screen.getByText("робочий зведений текст: базовий PDF + акт про зміни")
    ).toBeTruthy()
    expect(screen.getByText(/Базове джерело:/u)).toBeTruthy()
    expect(screen.getByText(/Акт про зміни:/u)).toBeTruthy()
    expect(screen.getByText(/Art\. 10 pkt 1/u)).toBeTruthy()
    expect(screen.getByText(/26\.06\.2026/u)).toBeTruthy()
    expect(screen.queryByText(/2026-06-26/u)).toBeNull()
  })

  it("warns that a future-only provision is not current and shows its effective date", () => {
    render(
      <LegalProvisionSource
        locator="Art. 65a"
        startPdfPage={18}
        text="Art. 65a. Przyszły tekst przepisu."
        status="future"
        effectiveDate="2029-10-01"
      />
    )

    const note = screen.getByRole("note")
    expect(note.textContent).toContain("Майбутня норма")
    expect(note.textContent).toContain("ще не є чинною")
    expect(note.textContent).toContain("01.10.2029")
  })
})
