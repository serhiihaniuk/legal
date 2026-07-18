import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router"

import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

import { LegalLearningModuleContent } from "./legal-learning-module-content"

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
