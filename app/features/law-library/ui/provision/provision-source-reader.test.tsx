import { afterEach, describe, expect, it } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { ProvisionSourceReader } from "./provision-source-reader"
import { SourceTextBlocks } from "./source-text-blocks"
afterEach(() => {
  cleanup()
})
describe("source reader", () => {
  it("opens a form in its original PDF and lets the reader inspect extracted text", () => {
    render(
      <ProvisionSourceReader
        locator="Załącznik nr 1"
        text="FORMULARZ"
        startPdfPage={4}
        pdfUrl="about:blank#page=4"
        preferPdf
      />
    )
    expect(
      screen
        .getByRole("tab", { name: "Оригінал PDF" })
        .getAttribute("aria-selected")
    ).toBe("true")
    expect(
      screen.getByTitle("Załącznik nr 1, оригінал PDF").getAttribute("src")
    ).toBe("about:blank#page=4&navpanes=0")
    fireEvent.click(screen.getByRole("tab", { name: "Витяг із PDF" }))
    expect(screen.getByText("FORMULARZ")).toBeTruthy()
  })
  it("folds source notes separately from the main text", () => {
    render(
      <ProvisionSourceReader
        locator="Art. 1"
        text={"Art. 1. Main.\nSource note."}
        startPdfPage={1}
        pdfUrl="/source.pdf#page=1"
        preferPdf={false}
        noteRanges={[{ start: 14, end: 26, page: 1 }]}
      />
    )
    expect(screen.getByText("Main.")).toBeTruthy()
    expect(screen.queryByText("Source note.")).toBeNull()
    fireEvent.click(
      screen.getByRole("button", { name: /Примітки та службовий текст/ })
    )
    expect(screen.getByText("Source note.")).toBeTruthy()
  })
  it("keeps passage anchors without repeated controls", () => {
    const { container } = render(
      <SourceTextBlocks
        text="Art. 2. 1. Pierwszy ustęp."
        idPrefix="act-art-2"
      />
    )
    expect(screen.getByText("Pierwszy ustęp.")).toBeTruthy()
    expect(container.querySelector("#act-art-2-1-1")).toBeTruthy()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.queryByRole("dialog")).toBeNull()
  })
})
