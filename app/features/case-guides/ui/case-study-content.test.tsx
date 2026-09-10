import { afterEach, describe, expect, it } from "vitest"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"
import { MemoryRouter, useLocation } from "react-router"
import { caseGuideCases, getCaseGuideCase } from "~/data/case-guides/navigation"
import { caseGuideRoutes, getCaseGuideRoute } from "~/data/case-guides/routes"
import { unwrapCaseGuideDocument } from "~/data/case-guides/document-use"
import { getEvidenceDocumentPath } from "~/data/document-library/navigation"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { DocumentRegister } from "./case-registers"
import { CaseStageDocuments } from "./case-stage-documents"
import { caseStudyTableOfContents } from "../model/case-study-navigation"
import { CaseStudyContent } from "./case-study-content"
import { CaseOverview } from "./case-overview"

afterEach(cleanup)

function CurrentPath() {
  return <output aria-label="Current path">{useLocation().pathname}</output>
}

describe("case guide continuity", () => {
  it("shows a guide's own verification date without changing other guides' baseline", () => {
    const { rerender } = render(
      <MemoryRouter>
        <CaseOverview
          route={getCaseGuideRoute("work")}
          updatedAt="2026-07-18"
        />
      </MemoryRouter>
    )
    expect(screen.getByText("Гайд перевірено: 06.09.2026")).toBeTruthy()
    expect(screen.queryByText("Стан права: 18.07.2026")).toBeNull()
    rerender(
      <MemoryRouter>
        <CaseOverview
          route={{ ...getCaseGuideRoute("work"), verifiedAt: undefined }}
          updatedAt="2026-07-18"
        />
      </MemoryRouter>
    )
    expect(screen.getByText("Стан права: 18.07.2026")).toBeTruthy()
    expect(screen.queryByText("Гайд перевірено: 06.09.2026")).toBeNull()
  })

  it("keeps document families above their case subtypes", () => {
    expect(caseGuideCases.map((group) => group.label)).toEqual([
      "Karta pobytu",
      "Pobyt stały",
      "Rezydent UE",
    ])
    expect(getCaseGuideCase("work").id).toBe("temporary-stay")
    expect(getCaseGuideCase("blue-card").id).toBe("temporary-stay")
    expect(getCaseGuideCase("permanent").routeIds).toEqual(["permanent"])
    expect(getCaseGuideCase("long-term-eu").routeIds).toEqual(["long-term-eu"])
  })

  it("retains every guide anchor and the existing reading order after component extraction", () => {
    const route = getCaseGuideRoute("work")
    const { container } = render(
      <MemoryRouter>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
      </MemoryRouter>
    )
    const actual = Array.from(
      container.querySelectorAll("section[id], header[id]"),
      (element) => `#${element.id}`
    )
    expect(actual).toEqual(
      caseStudyTableOfContents(route).map((item) => item.href)
    )
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      route.title
    )
    expect(
      screen
        .getByRole("link", { name: "До етапів справи ↓" })
        .getAttribute("href")
    ).toBe("#case-stages")
    expect(
      screen
        .getByRole("link", { name: "Документи й строки ↓" })
        .getAttribute("href")
    ).toBe("#case-registers")
  })

  it("opens documents and risks independently and preserves document controls", async () => {
    const route = getCaseGuideRoute("work")
    const { container } = render(
      <MemoryRouter>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
      </MemoryRouter>
    )
    const stage = within(
      container.querySelector<HTMLElement>("#case-stage-status")!
    )
    const documents = stage.getByRole("button", { name: /^Документи/ })
    const risks = stage.getByRole("button", { name: /^Що може ускладнити/ })
    expect(documents.getAttribute("aria-expanded")).toBe("false")
    fireEvent.click(documents)
    expect(documents.getAttribute("aria-expanded")).toBe("true")
    expect(risks.getAttribute("aria-expanded")).toBe("false")
    const checkboxes = await stage.findAllByRole("checkbox")
    expect(checkboxes).toHaveLength(route.stages[0].documents.length)
    fireEvent.click(checkboxes[0])
    expect(checkboxes[0].getAttribute("aria-checked")).toBe("true")
    fireEvent.click(risks)
    expect(risks.getAttribute("aria-expanded")).toBe("true")
    expect(documents.getAttribute("aria-expanded")).toBe("true")
  })

  it("links register titles to document guides while retaining provision links", () => {
    render(
      <MemoryRouter>
        <DocumentRegister documents={getCaseGuideRoute("work").documents} />
      </MemoryRouter>
    )
    for (const [name, href] of [
      ["Електронна заява MOS", "/documents/mos-application"],
      ["Скани всіх сторінок дійсного паспорта", "/documents/passport"],
      ["Załącznik nr 1", "/documents/employment-annex-1"],
      ["Umowa o pracę", "/documents/employment-contract"],
    ]) {
      for (const link of screen.getAllByRole("link", { name })) {
        expect(link.getAttribute("href")).toBe(href)
      }
    }
    for (const link of screen.getAllByRole("link", { name: "Цифрове фото" })) {
      expect(link.getAttribute("href")).toBe("/documents/digital-photo")
    }
    expect(
      screen.getAllByRole("link", { name: "Art. 114" })[0].getAttribute("href")
    ).toBe(
      "/law/ustawa-o-cudzoziemcach/provisions/ustawa-o-cudzoziemcach-art-114"
    )
  })

  it("keeps document navigation separate from checklist selection", async () => {
    render(
      <MemoryRouter initialEntries={["/cases/work"]}>
        <CaseStageDocuments stage={getCaseGuideRoute("work").stages[0]} />
        <CurrentPath />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole("button", { name: /^Документи/ }))
    const link = await screen.findByRole("link", {
      name: "Скани всіх сторінок дійсного паспорта",
    })
    const checkbox = screen.getByRole("checkbox", { name: link.textContent! })
    expect(link.closest("label")).toBeNull()
    fireEvent.click(link)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/passport")
    expect(checkbox.getAttribute("aria-checked")).toBe("false")
    fireEvent.click(checkbox)
    expect(checkbox.getAttribute("aria-checked")).toBe("true")
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/passport")
  })

  it("keeps distinct document destinations in the business register", () => {
    render(
      <MemoryRouter>
        <DocumentRegister documents={getCaseGuideRoute("business").documents} />
      </MemoryRouter>
    )
    for (const [name, id] of [
      ["Електронна заява MOS", "mos-application"],
      ["UPO та збережена заява", "upo"],
      [
        "KRS/CEIDG і документи про роль у бізнесі",
        "business-register-information",
      ],
      ["CRBR і зв'язки між компаніями", "crbr-information"],
      [
        "Дозвіл на працю у зв'язку з корпоративною функцією",
        "corporate-work-permit",
      ],
    ]) {
      expect(
        screen
          .getAllByRole("link", { name })
          .map((link) => link.getAttribute("href"))
      ).toEqual([`/documents/${id}`, `/documents/${id}`])
    }
  })

  it("keeps every authored document destination resolvable across all guides", () => {
    for (const route of caseGuideRoutes) {
      for (const document of [
        ...route.documents,
        ...route.stages.flatMap((stage) =>
          stage.documents.map(unwrapCaseGuideDocument)
        ),
      ]) {
        if (typeof document.item === "string") continue
        for (const part of document.item.parts) {
          if (!("target" in part) || part.target.kind !== "evidence-document")
            continue
          expect(getEvidenceDocumentPath(part.target.documentId)).toBe(
            `/documents/${part.target.documentId}`
          )
        }
      }
      for (const deadline of route.deadlines) {
        expect(
          route.stages.some((stage) => stage.id === deadline.stageId)
        ).toBe(true)
      }
    }
  })

  it("shows document checks and a recovery explanation within the stage", async () => {
    const stage = getCaseGuideRoute("work").stages.find(
      (stage) => stage.id === "qualification"
    )
    expect(stage).toBeDefined()
    if (!stage) return
    render(
      <MemoryRouter>
        <CaseStageDocuments stage={stage} />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole("button", { name: /^Документи/ }))
    expect(
      await screen.findByRole("link", { name: "Załącznik nr 1" })
    ).toHaveProperty("pathname", "/documents/employment-annex-1")
    expect(
      screen.getAllByText("Якщо бракує або є розбіжність").length
    ).toBeGreaterThan(0)
    expect(
      screen.getByText(/Передайте роботодавцю конкретні розбіжності/)
    ).toBeTruthy()
  })

  it("places the response deadlines and suspension in the procedure stage", () => {
    const route = getCaseGuideRoute("work")
    render(
      <MemoryRouter>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
      </MemoryRouter>
    )
    const procedure = screen.getByRole("region", {
      name: "Контролюємо провадження і відповіді на wezwania",
    })
    fireEvent.click(
      within(procedure).getByRole("button", { name: /^Строки та наслідки/ })
    )
    expect(within(procedure).getByText("мін. 14 днів")).toBeTruthy()
    expect(procedure.textContent).toContain(
      "04.03.2027 не починається або зупиняється"
    )
    expect(
      within(procedure).getAllByRole("link", { name: /листі MSWiA/ })
    ).toHaveLength(2)
    expect(within(procedure).queryByText("15 робочих днів")).toBeNull()
    const conditions = screen.getByRole("region", {
      name: "Матриця умов маршруту",
    })
    fireEvent.click(
      within(conditions).getByRole("button", { name: "Матриця умов маршруту" })
    )
    expect(within(conditions).queryByText("підтверджено")).toBeNull()
    expect(
      within(conditions).getAllByText(
        legalTextPlainText(route.conditions[0].factToEstablish)
      )
    ).toHaveLength(2)
  })

  it.each(caseGuideRoutes)(
    "folds reference sections independently in $id",
    (route) => {
      const { unmount } = render(
        <MemoryRouter>
          <CaseStudyContent route={route} updatedAt="2026-07-18" />
        </MemoryRouter>
      )
      const triggers = [
        "Матриця умов маршруту",
        "Документи й строки",
        "Негативні й альтернативні гілки",
        "Офіційні джерела",
      ].map((name) => screen.getByRole("button", { name }))
      for (const trigger of triggers)
        expect(trigger.getAttribute("aria-expanded")).toBe("false")
      fireEvent.click(triggers[0])
      fireEvent.click(triggers[1])
      expect(triggers[0].getAttribute("aria-expanded")).toBe("true")
      expect(triggers[1].getAttribute("aria-expanded")).toBe("true")
      expect(triggers[2].getAttribute("aria-expanded")).toBe("false")
      fireEvent.click(triggers[0])
      expect(triggers[0].getAttribute("aria-expanded")).toBe("false")
      expect(triggers[1].getAttribute("aria-expanded")).toBe("true")
      unmount()
    }
  )

  it("opens the document register for a direct deadline link", () => {
    render(
      <MemoryRouter initialEntries={["/cases/work#case-deadlines"]}>
        <CaseStudyContent
          route={getCaseGuideRoute("work")}
          updatedAt="2026-07-18"
        />
      </MemoryRouter>
    )
    expect(
      screen
        .getByRole("button", { name: "Документи й строки" })
        .getAttribute("aria-expanded")
    ).toBe("true")
    expect(
      screen.getByRole("heading", { name: "Строки за ходом справи" })
    ).toBeTruthy()
    expect(
      screen
        .getByRole("button", { name: "Матриця умов маршруту" })
        .getAttribute("aria-expanded")
    ).toBe("false")
  })
})
