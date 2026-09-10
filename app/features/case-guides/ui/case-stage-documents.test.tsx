import { afterEach, describe, expect, it } from "vitest"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"
import { MemoryRouter } from "react-router"
import type {
  CaseGuideDocument,
  CaseGuideStage,
} from "~/data/case-guides/types"
import { documentUse } from "~/data/case-guides/document-use"
import { document } from "~/data/case-guides/editorial/shared/document-reference"
import { CaseStageDocuments } from "./case-stage-documents"

afterEach(cleanup)

const passport: CaseGuideDocument = {
  item: document("passport", "Паспорт"),
  level: "required",
  status: "до заяви",
  owner: "Заявник",
  proves: "Особу заявника",
  law: "Умовний опис правової ролі",
}

function stage(
  id: CaseGuideStage["id"],
  documents: CaseGuideStage["documents"]
): CaseGuideStage {
  return {
    id,
    title: id,
    question: "Питання етапу",
    actor: "Заявник",
    explanation: [],
    actions: [],
    outcome: "Результат етапу",
    documents,
    risks: [],
    materials: [],
  }
}

describe("explicit document actions in a case stage", () => {
  it("shows submission and later reuse of the same document without a second submission instruction", () => {
    render(
      <MemoryRouter>
        <div data-testid="filing">
          <CaseStageDocuments
            stage={stage("filing", [
              documentUse(passport, "submit", "Додайте скани до заяви."),
            ])}
          />
        </div>
        <div data-testid="evidence">
          <CaseStageDocuments
            stage={stage("evidence", [
              documentUse(
                passport,
                "review",
                "Зіставте наявні скани з хронологією; повторно їх не подавайте."
              ),
            ])}
          />
        </div>
      </MemoryRouter>
    )

    const filing = within(screen.getByTestId("filing"))
    const evidence = within(screen.getByTestId("evidence"))
    expect(filing.getByText("Подати:")).toBeTruthy()
    expect(evidence.getByText("Звірити наявне:")).toBeTruthy()
    expect(evidence.queryByText("Подати:")).toBeNull()
    expect(evidence.getByText(/повторно їх не подавайте/)).toBeTruthy()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.queryByRole("checkbox")).toBeNull()
    expect(screen.queryByText("до заяви")).toBeNull()
    expect(screen.queryByText("Особу заявника")).toBeNull()
    expect(screen.getAllByRole("link", { name: "Паспорт" })).toHaveLength(2)
    for (const link of screen.getAllByRole("link", { name: "Паспорт" })) {
      expect(link.getAttribute("href")).toBe("/documents/passport")
    }
  })

  it("keeps preparation and conditional updates visible with their authored conditions", () => {
    render(
      <MemoryRouter>
        <CaseStageDocuments
          stage={stage("procedure", [
            documentUse(passport, "prepare", "Підготуйте оригінал для явки."),
            documentUse(
              passport,
              "update",
              "Якщо видано новий паспорт, передайте його актуальні дані."
            ),
          ])}
        />
      </MemoryRouter>
    )
    expect(screen.getByText("Підготувати:")).toBeTruthy()
    expect(screen.getByText("Оновити за потреби:")).toBeTruthy()
    expect(screen.getByText(/Якщо видано новий паспорт/)).toBeTruthy()
    expect(screen.queryByRole("button")).toBeNull()
  })

  it("leaves unconverted guides behind their existing disclosure and checkbox", () => {
    render(
      <MemoryRouter>
        <CaseStageDocuments stage={stage("status", [passport])} />
      </MemoryRouter>
    )
    const trigger = screen.getByRole("button", { name: /^Документи та докази/ })
    expect(trigger.getAttribute("aria-expanded")).toBe("false")
    expect(screen.queryByText("Документи на цьому етапі")).toBeNull()
    fireEvent.click(trigger)
    expect(screen.getByRole("checkbox")).toBeTruthy()
    expect(screen.getByText("до заяви")).toBeTruthy()
    expect(screen.getByText("Особу заявника")).toBeTruthy()
  })
})
