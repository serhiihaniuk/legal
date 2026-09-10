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

function legacyWorkRoute() {
  const route = getCaseGuideRoute("work")
  return {
    ...route,
    stages: route.stages.map((stage) => ({
      ...stage,
      documents: stage.documents.map(unwrapCaseGuideDocument),
    })),
  }
}

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
    expect(screen.getByText("Гайд перевірено: 10.09.2026")).toBeTruthy()
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
    expect(screen.queryByText("Гайд перевірено: 10.09.2026")).toBeNull()
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

  it("opens legacy documents and risks independently and preserves document controls", async () => {
    const route = legacyWorkRoute()
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

  it("shows six open work document lists and distinguishes the response from the filing packet", () => {
    const route = getCaseGuideRoute("work")
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/work"]}>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    for (const stage of route.stages) {
      const region = within(
        container.querySelector<HTMLElement>(`#case-stage-${stage.id}`)!
      )
      expect(region.queryByRole("button", { name: /^Документи/ })).toBeNull()
      expect(region.queryByRole("checkbox")).toBeNull()
    }
    const filing = within(
      container.querySelector<HTMLElement>("#case-stage-filing")!
    )
    const amendmentName = "Aneks від 20.07.2026: 6 000 zł із 01.08.2026"
    const filedContract = filing.getByRole("link", {
      name: "Umowa o pracę з початковою сумою 5 500 zł",
    })
    const filedAmendment = filing.getByRole("link", { name: amendmentName })
    expect(filedContract.getAttribute("href")).toBe(
      "/documents/employment-contract"
    )
    expect(filedAmendment.closest("li")!.textContent).toContain("скан")
    const procedure = within(
      screen.getByRole("region", {
        name: "Контролюємо провадження і відповіді на wezwania",
      })
    )
    const original = procedure.getByRole("link", { name: amendmentName })
    expect(original.closest("li")!.textContent).toContain(
      "18.08.2026 надати оригінал"
    )
    expect(original.closest("li")!.textContent).toContain(
      "Його скан уже є в заяві"
    )
    const insurance = procedure.getByRole("link", {
      name: "Potwierdzenie zgłoszenia do ubezpieczenia zdrowotnego з eZUS",
    })
    expect(insurance.getAttribute("href")).toBe(
      "/documents/zus-health-registration"
    )
    expect(insurance.closest("li")!.textContent).toContain(
      "У початковому пакеті цього прикладу його не було"
    )
    expect(
      procedure.queryByRole("link", { name: /Pasek wynagrodzenia/ })
    ).toBeNull()
    expect(procedure.queryByRole("link", { name: /Wyciąg bankowy/ })).toBeNull()
    fireEvent.click(original)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/employment-contract")
  })

  it("opens the Blue Card experience guide directly from its visible response list", () => {
    const route = getCaseGuideRoute("blue-card")
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/blue-card"]}>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    for (const stage of route.stages) {
      const region = within(
        container.querySelector<HTMLElement>(`#case-stage-${stage.id}`)!
      )
      expect(region.queryByRole("button", { name: /^Документи/ })).toBeNull()
      expect(region.queryByRole("checkbox")).toBeNull()
    }
    const response = container.querySelector<HTMLElement>(
      "#case-stage-procedure"
    )!
    const experience = response.querySelector<HTMLAnchorElement>(
      'a[href="/documents/professional-experience-confirmation"]'
    )!
    expect(experience).toBeTruthy()
    expect(experience.closest("li")!.textContent).toContain("27.08.2026")
    expect(
      response.querySelector('a[href="/documents/blue-card-annex"]')
    ).toBeTruthy()
    expect(
      response.querySelector('a[href="/documents/qualification-evidence"]')
    ).toBeNull()
    fireEvent.click(experience)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/professional-experience-confirmation")
  })

  it("opens the student's bank certificate from the visible filing list", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/student"]}>
        <CaseStudyContent
          route={getCaseGuideRoute("student")}
          updatedAt="2026-07-18"
        />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    const filing = container.querySelector<HTMLElement>("#case-stage-filing")!
    expect(
      within(filing).queryByRole("button", { name: /^Документи/ })
    ).toBeNull()
    expect(within(filing).queryByRole("checkbox")).toBeNull()
    const certificate = filing.querySelector<HTMLAnchorElement>(
      'a[href="/documents/bank-funds-certificate"]'
    )!
    expect(certificate).toBeTruthy()
    expect(certificate.closest("li")!.textContent).toContain("12.08.2026")
    fireEvent.click(certificate)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/bank-funds-certificate")
  })

  it("opens the business applicant's remuneration resolution from its visible filing list", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/business"]}>
        <CaseStudyContent
          route={getCaseGuideRoute("business")}
          updatedAt="2026-07-18"
        />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    const filing = container.querySelector<HTMLElement>("#case-stage-filing")!
    expect(
      within(filing).queryByRole("button", { name: /^Документи/ })
    ).toBeNull()
    expect(within(filing).queryByRole("checkbox")).toBeNull()
    const resolution = filing.querySelector<HTMLAnchorElement>(
      'a[href="/documents/board-remuneration-resolution"]'
    )!
    expect(resolution).toBeTruthy()
    expect(
      filing.querySelector('a[href="/documents/board-appointment-resolution"]')
    ).toBeTruthy()
    expect(
      filing.querySelector('a[href="/documents/shareholder-list"]')
    ).toBeTruthy()
    fireEvent.click(resolution)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/board-remuneration-resolution")
  })

  it("keeps family filing and response documents visible with distinct guide destinations", () => {
    const route = getCaseGuideRoute("family")
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/family"]}>
        <CaseStudyContent route={route} updatedAt="2026-07-18" />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    for (const stage of route.stages) {
      const region = within(
        container.querySelector<HTMLElement>(`#case-stage-${stage.id}`)!
      )
      expect(region.queryByRole("button", { name: /^Документи/ })).toBeNull()
      expect(region.queryByRole("checkbox")).toBeNull()
    }
    const filing = container.querySelector<HTMLElement>("#case-stage-filing")!
    for (const id of ["private-health-insurance-policy", "residential-lease"]) {
      expect(filing.querySelector(`li a[href="/documents/${id}"]`)).toBeTruthy()
    }
    expect(
      filing.querySelector('li a[href="/documents/work-location-confirmation"]')
    ).toBeNull()
    const response = container.querySelector<HTMLElement>(
      "#case-stage-procedure"
    )!
    const location = response.querySelector<HTMLAnchorElement>(
      'li a[href="/documents/work-location-confirmation"]'
    )!
    expect(location.closest("li")!.textContent).toContain("28.08")
    const lease = response.querySelector<HTMLAnchorElement>(
      'li a[href="/documents/residential-lease"]'
    )!
    expect(lease.closest("li")!.textContent).toContain("повторно не долучали")
    fireEvent.click(location)
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/work-location-confirmation")
  })

  it("opens the graduate diploma directly from an unfolded filing list", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/other"]}>
        <CaseStudyContent
          route={getCaseGuideRoute("other")}
          updatedAt="2026-07-18"
        />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    const filing = container.querySelector<HTMLElement>("#case-stage-filing")!
    expect(
      within(filing).queryByRole("button", { name: /^Документи/ })
    ).toBeNull()
    expect(within(filing).queryByRole("checkbox")).toBeNull()
    for (const id of [
      "polish-graduation-diploma",
      "bank-funds-certificate",
      "residential-lease",
      "private-health-insurance-policy",
    ]) {
      expect(filing.querySelector(`li a[href="/documents/${id}"]`)).toBeTruthy()
    }
    fireEvent.click(
      filing.querySelector('li a[href="/documents/polish-graduation-diploma"]')!
    )
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/polish-graduation-diploma")
  })

  it("shows permanent residence attachments without folding or implying a second lease", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/cases/permanent"]}>
        <CaseStudyContent
          route={getCaseGuideRoute("permanent")}
          updatedAt="2026-07-18"
        />
        <CurrentPath />
      </MemoryRouter>
    )
    expect(
      screen.getAllByRole("heading", { name: "Документи на цьому етапі" })
    ).toHaveLength(6)
    const filing = container.querySelector<HTMLElement>("#case-stage-filing")!
    const procedure = container.querySelector<HTMLElement>(
      "#case-stage-procedure"
    )!
    for (const section of [filing, procedure]) {
      expect(within(section).queryByRole("checkbox")).toBeNull()
      expect(
        within(section).queryByRole("button", { name: /^Документи/ })
      ).toBeNull()
      expect(
        section.querySelector('li a[href="/documents/residential-lease"]')
      ).toBeTruthy()
    }
    expect(
      filing.querySelector('li a[href="/documents/employment-contract"]')
    ).toBeNull()
    expect(
      procedure.querySelector('li a[href="/documents/employment-contract"]')
    ).toBeTruthy()
    expect(
      filing.querySelector('li a[href="/documents/residence-card-fee-proof"]')
    ).toBeTruthy()
    fireEvent.click(
      procedure.querySelector('li a[href="/documents/residential-lease"]')!
    )
    expect(
      screen.getByRole("status", { name: "Current path" }).textContent
    ).toBe("/documents/residential-lease")
  })

  it("links register titles to document guides while retaining provision links", () => {
    render(
      <MemoryRouter>
        <DocumentRegister documents={getCaseGuideRoute("work").documents} />
      </MemoryRouter>
    )
    for (const [name, href] of [
      ["Електронна заява MOS", "/documents/mos-application"],
      ["Дійсний паспорт заявника", "/documents/passport"],
      ["Załącznik nr 1", "/documents/employment-annex-1"],
      [
        "Umowa o pracę з початковою сумою 5 500 zł",
        "/documents/employment-contract",
      ],
      [
        "Aneks від 20.07.2026: 6 000 zł із 01.08.2026",
        "/documents/employment-contract",
      ],
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

  it("keeps legacy document navigation separate from checklist selection", async () => {
    render(
      <MemoryRouter initialEntries={["/cases/work"]}>
        <CaseStageDocuments stage={legacyWorkRoute().stages[0]} />
        <CurrentPath />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole("button", { name: /^Документи/ }))
    const link = await screen.findByRole("link", {
      name: "Дійсний паспорт заявника",
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
        "Актуальна інформація KRS про spółkę z o.o.",
        "business-register-information",
      ],
      [
        "Чинний корпоративний дозвіл на працю до 31.12.2026",
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

  it("shows legacy document checks and a recovery explanation within the stage", async () => {
    const stage = legacyWorkRoute().stages.find(
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
