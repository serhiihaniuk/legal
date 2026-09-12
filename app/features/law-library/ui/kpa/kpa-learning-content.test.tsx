import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, expect, it } from "vitest"

import { kpaGuideModules } from "~/data/legal-library/learning/kpa"
import { legalLearningPlainText } from "~/data/legal-library/learning/legal-text"
import { KpaLearningContent } from "./kpa-learning-content"

describe("KPA authored module rendering", () => {
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
