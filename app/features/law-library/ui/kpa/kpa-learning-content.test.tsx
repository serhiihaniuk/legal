import { cleanup, render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { afterEach, describe, expect, it } from "vitest"

import {
  kpaGuideModules,
  kpaGuideModuleArticles,
} from "~/data/legal-library/learning/kpa"
import { legalLearningPlainText } from "~/data/legal-library/learning/legal-text"
import { KpaLearningContent } from "./kpa-learning-content"

afterEach(cleanup)

describe("KPA authored module rendering", () => {
  it.each(["anatomy", "system", "delay"])(
    "shows the %s opening boundary once and retains distinct closing explanations",
    (id) => {
      const module = kpaGuideModules.find((item) => item.id === id)
      if (!module) throw new Error(`Missing ${id} module`)
      const { container } = render(
        <MemoryRouter>
          <KpaLearningContent
            selectedId={id}
            articleExplanations={[]}
            onSelectModule={() => {}}
          />
        </MemoryRouter>
      )
      const openingBoundary = legalLearningPlainText(
        module.layers.beginner.pitfall
      )
      expect(container.textContent?.split(openingBoundary)).toHaveLength(2)
      expect(
        container.querySelector("#legal-learning-position")?.textContent
      ).toContain(openingBoundary)
      expect(
        container.querySelector("#legal-learning-position p")?.textContent
      ).toBe(kpaGuideModuleArticles[id as "anatomy" | "system" | "delay"].stage)
      const closing = container.querySelector("#legal-learning-nuances")
      expect(closing?.textContent).not.toContain(openingBoundary)
      for (const text of [
        module.layers.practical.pitfall,
        module.layers.advanced.pitfall,
        ...module.method,
      ]) {
        expect(closing?.textContent).toContain(legalLearningPlainText(text))
      }
    }
  )

  it.each(["anatomy", "system"])(
    "retains the %s article and specimen without adding a course overview",
    (id) => {
      const lesson = kpaGuideModules.find((module) => module.id === id)?.lesson
      if (!lesson?.sections || !lesson.caseExample.sample)
        throw new Error(`${id} must have authored sections and a specimen`)
      const { container, getByRole } = render(
        <MemoryRouter>
          <KpaLearningContent
            selectedId={id}
            articleExplanations={[]}
            onSelectModule={() => {}}
          />
        </MemoryRouter>
      )
      const paragraphs = [...container.querySelectorAll("p")].map(
        (paragraph) => paragraph.textContent
      )
      for (const section of lesson.sections) {
        expect(getByRole("heading", { name: section.title })).toBeDefined()
        for (const paragraph of section.paragraphs) {
          expect(
            paragraphs.filter(
              (text) => text === legalLearningPlainText(paragraph)
            )
          ).toHaveLength(1)
        }
      }
      expect(
        getByRole("table", { name: lesson.caseExample.sample.title })
      ).toBeDefined()
      const example = container.querySelector("#legal-learning-example")
      expect(example?.textContent).toContain(
        legalLearningPlainText(lesson.caseExample.facts)
      )
      expect(example?.textContent).toContain(
        legalLearningPlainText(lesson.caseExample.analysis)
      )
      expect(example?.textContent).toContain(
        legalLearningPlainText(lesson.caseExample.lesson)
      )
      expect(container.textContent).not.toContain("Основне правило")
      expect(container.textContent).not.toContain("Карта всього курсу KPA")
    }
  )
})
