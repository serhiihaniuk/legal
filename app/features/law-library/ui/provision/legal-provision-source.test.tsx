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
    expect(screen.getByText("PDF s. 11")).toBeTruthy()
    expect(screen.getByText("ust. 1")).toBeTruthy()
    expect(screen.getByText("ust. 2")).toBeTruthy()
    expect(screen.getByText("Pierwszy ustęp.")).toBeTruthy()
    expect(screen.getByText("Drugi ustęp.")).toBeTruthy()
  })
})
