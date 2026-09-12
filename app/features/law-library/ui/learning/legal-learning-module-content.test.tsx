import { cleanup, render, within } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router"

import {
  buildLegalLearningModuleView,
  type LegalLearningModuleView,
} from "~/features/law-library/model/learning/legal-learning-view"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

import {
  getLegalLearningContentToc,
  LegalLearningModuleContent,
} from "./legal-learning-module-content"

afterEach(cleanup)

const target = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-64",
} as const

const moduleView: LegalLearningModuleView = {
  order: 1,
  title: "Тестовий модуль",
  polish: "moduł testowy",
  provisionScope: {
    kind: "authored-legal-text",
    plainText: "Art. 64 KPA",
    parts: [{ text: "Art. 64 KPA", target }],
  },
  legalState: "2026-07-18",
  outcome: "Результат",
  stage: "Етап",
  positionIntro: "Вступ",
  question: "Питання",
  neededWhen: "Коли потрібно",
  boundary: "Межа",
  mechanismParagraphs: [],
  layers: [],
  terms: [],
  articleGroups: [
    {
      reference: "Art. 64 KPA",
      role: "Art. 64 KPA визначає порядок дій.",
      target,
    },
  ],
  provisionGuide: {
    countLabel: "1 перевірена норма",
    title: "Стаття за статтею",
    description: "Опис",
    items: [
      {
        id: "kpa-art-64",
        reference: "Art. 64 KPA",
        title: "Braki formalne",
        target,
        explanation: {
          id: "kpa-art-64-explanation",
          documentId: "kpa",
          provisionId: "kpa-art-64",
          sourceEditionId: "kpa-2025-1691",
          legalStateDate: "2026-07-18",
          verifiedAt: "2026-07-18",
          reviewStatus: "reviewed",
          language: "uk",
          claims: [],
          summary: "Art. 64 KPA встановлює порядок дій.",
          rules: [
            {
              locator: "§ 1",
              explanation: "Art. 64 KPA застосовується до braków formalnych.",
            },
          ],
          legalEffect: "Art. 64 KPA визначає наслідок.",
          foreignersCase: "Art. 64 KPA має значення для справи.",
        },
      },
    ],
  },
  caseExample: {
    title: "Приклад",
    facts: "Факти",
    analysis: "Аналіз",
    lesson: "Висновок",
  },
  pitfalls: [],
  method: [],
}

describe("legal learning reference treatment", () => {
  it("distinguishes the explanation's legal state and check date from the source edition", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LegalLearningModuleContent
          module={{
            ...moduleView,
            explanationReview: {
              legalStateDate: "2026-09-10",
              verifiedAt: "2026-09-12",
            },
          }}
          navigation={{}}
        />
      </MemoryRouter>
    )
    expect(getByText("Стан права в поясненні: 2026-09-10")).toBeDefined()
    expect(getByText("Перевірено: 2026-09-12")).toBeDefined()
    expect(getByText("Текст акта: стан на 2026-07-18")).toBeDefined()
  })
  it("opens the new guide's first provision when navigating between modules", () => {
    const { container, rerender } = render(
      <MemoryRouter>
        <LegalLearningModuleContent module={moduleView} navigation={{}} />
      </MemoryRouter>
    )
    const firstTrigger = container.querySelector(
      '[data-slot="accordion-trigger"]'
    )
    expect(firstTrigger?.getAttribute("aria-expanded")).toBe("true")
    rerender(
      <MemoryRouter>
        <LegalLearningModuleContent
          module={{
            ...moduleView,
            provisionGuide: {
              ...moduleView.provisionGuide,
              items: moduleView.provisionGuide.items.map((item) => ({
                ...item,
                id: "next-module-provision",
              })),
            },
          }}
          navigation={{}}
        />
      </MemoryRouter>
    )
    const nextTrigger = container.querySelector(
      '[data-slot="accordion-trigger"]'
    )
    expect(nextTrigger).not.toBe(firstTrigger)
    expect(nextTrigger?.getAttribute("aria-expanded")).toBe("true")
  })
  it("keeps direct locator rows semantic while rendering every link quietly", () => {
    const { container } = render(
      <MemoryRouter>
        <LegalLearningModuleContent module={moduleView} navigation={{}} />
      </MemoryRouter>
    )

    const links = Array.from(
      container.querySelectorAll<HTMLAnchorElement>("a[data-reference-context]")
    )
    const referenceLinks = links.filter(
      (link) => link.dataset.referenceContext === "reference-section"
    )
    const proseLinks = links.filter(
      (link) => link.dataset.referenceContext === "prose"
    )

    expect(referenceLinks.map((link) => link.textContent?.trim())).toEqual(
      expect.arrayContaining([
        "Art. 64 KPA",
        "§ 1",
        "Відкрити повне пояснення Art. 64 KPA",
      ])
    )
    expect(proseLinks.some((link) => link.textContent === "Art. 64 KPA")).toBe(
      true
    )
    for (const link of links) {
      expect(link.className).toContain("text-inherit")
      expect(link.className).toContain("decoration-muted-foreground/45")
      expect(link.className).not.toContain("text-primary")
    }
  })
})

describe("authored learning content", () => {
  const authoredModule: LegalLearningModule = {
    id: "render-fixture",
    order: 1,
    title: "Тестова тема",
    polish: "temat",
    provisionScope: "Обсяг теми",
    outcome: "Призначення теми",
    caseQuestion: "Питання читача",
    placeInWork: "Контекст використання",
    sections: [
      {
        id: "first",
        title: "Перший авторський розділ",
        paragraphs: ["Перше повне пояснення.", "Продовження пояснення."],
        steps: ["Описана послідовність дій."],
        evidence: ["Конкретний доказ у цьому розділі."],
        warning: "Умова, яка обмежує цей висновок.",
      },
      {
        id: "second",
        title: "Другий авторський розділ",
        paragraphs: ["Інший аспект теми."],
      },
    ],
    caseExample: {
      title: "Завершене зіставлення",
      facts: "Зафіксований факт для цього прикладу.",
      analysis: "Авторський аналіз цього факту.",
      lesson: "Встановлений результат цього прикладу.",
      sample: {
        kind: "table",
        title: "Zestawienie przykładowe",
        note: "Фіктивний фрагмент для тесту відображення.",
        columns: ["Zapis", "Wynik"],
        rows: [{ id: "selected", cells: ["Wybrany zapis", "Ustalony wynik"] }],
      },
    },
  }

  function project(module: LegalLearningModule) {
    return buildLegalLearningModuleView({
      documentId: "kpa",
      module,
      legalState: "2026-09-12",
      reviewedProvisions: [],
    })
  }

  it("renders each authored section locally once and preserves the completed example and table", () => {
    const view = project(authoredModule)
    const { container } = render(
      <MemoryRouter>
        <LegalLearningModuleContent module={view} navigation={{}} />
      </MemoryRouter>
    )
    const page = within(container)

    for (const section of authoredModule.sections) {
      const element = container.querySelector(
        `#legal-learning-section-${section.id}`
      )
      expect(element).not.toBeNull()
      const local = within(element as HTMLElement)
      expect(local.getByRole("heading", { name: section.title })).toBeTruthy()
      for (const text of [
        ...section.paragraphs,
        ...(section.steps ?? []),
        ...(section.evidence ?? []),
        ...(section.warning ? [section.warning] : []),
      ]) {
        expect(local.getByText(text as string)).toBeTruthy()
        expect(page.getAllByText(text as string)).toHaveLength(1)
      }
    }

    const example = within(
      container.querySelector("#legal-learning-example") as HTMLElement
    )
    expect(
      example.getByRole("heading", { name: "Завершене зіставлення" })
    ).toBeTruthy()
    expect(
      example.getByText("Зафіксований факт для цього прикладу.")
    ).toBeTruthy()
    expect(example.getByText("Авторський аналіз цього факту.")).toBeTruthy()
    expect(
      example.getByText("Встановлений результат цього прикладу.")
    ).toBeTruthy()
    const table = example.getByRole("table", {
      name: "Zestawienie przykładowe",
    })
    expect(
      within(table).getByRole("columnheader", { name: "Zapis" })
    ).toBeTruthy()
    expect(
      within(table).getByRole("cell", { name: "Wybrany zapis" })
    ).toBeTruthy()
    expect(
      within(table).getByRole("cell", { name: "Ustalony wynik" })
    ).toBeTruthy()
    for (const item of getLegalLearningContentToc(view)) {
      expect(container.querySelectorAll(item.href), item.href).toHaveLength(1)
    }
  })

  it("omits example and nuances headings and TOC entries when only questions and an exercise exist", () => {
    const view = project({
      ...authoredModule,
      caseExample: undefined,
      exercise: "Виконайте самостійну вправу.",
      sections: [
        {
          id: "legacy",
          title: "Авторський текст без прикладу",
          paragraphs: ["Наявне пояснення."],
          questions: ["Питання не є встановленим фактом."],
        },
      ],
    })
    const { container } = render(
      <MemoryRouter>
        <LegalLearningModuleContent module={view} navigation={{}} />
      </MemoryRouter>
    )

    expect(container.querySelector("#legal-learning-example")).toBeNull()
    expect(container.querySelector("#legal-learning-nuances")).toBeNull()
    expect(
      within(container).queryByRole("heading", { name: "Розібраний приклад" })
    ).toBeNull()
    expect(container.textContent).not.toContain("Виконайте самостійну вправу.")
    expect(container.textContent).not.toContain(
      "Питання не є встановленим фактом."
    )
    expect(
      getLegalLearningContentToc(view).map((item) => item.href)
    ).not.toContain("#legal-learning-example")
    expect(
      getLegalLearningContentToc(view).map((item) => item.href)
    ).not.toContain("#legal-learning-nuances")
    for (const item of getLegalLearningContentToc(view)) {
      expect(container.querySelectorAll(item.href), item.href).toHaveLength(1)
    }
  })

  it("renders a Polish letter specimen as authored text in the example", () => {
    const view: LegalLearningModuleView = {
      ...moduleView,
      caseExample: {
        title: "Приклад із фрагментом листа",
        facts: "Факти прикладу.",
        analysis: "Аналіз прикладу.",
        lesson: "Результат прикладу.",
        sample: {
          kind: "letter",
          language: "pl",
          title: "Fragment pisma",
          note: "Фіктивний текст.",
          paragraphs: ["Wybrany fragment pisma.", "Drugi akapit fragmentu."],
        },
      },
    }
    const { container } = render(
      <MemoryRouter>
        <LegalLearningModuleContent module={view} navigation={{}} />
      </MemoryRouter>
    )
    const letter = container.querySelector(
      '#legal-learning-example figure [lang="pl"]'
    )
    expect(letter).not.toBeNull()
    expect(
      within(letter as HTMLElement).getByText("Wybrany fragment pisma.")
    ).toBeTruthy()
    expect(
      within(letter as HTMLElement).getByText("Drugi akapit fragmentu.")
    ).toBeTruthy()
  })
})
