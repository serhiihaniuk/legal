import { describe, expect, it } from "vitest"

import {
  getExplanation,
  listProvisions,
  parseLegalProvisionReference,
} from "~/data/legal-library"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

import {
  buildLegalLearningModuleView,
  findModuleProvisions,
  toLegalExplanationView,
} from "./legal-learning-view"

const authoredModule: LegalLearningModule = {
  id: "authored-fixture",
  order: 1,
  title: "Тестове пояснення",
  polish: "przykład",
  provisionScope: "Обсяг пояснення",
  outcome: "Призначення пояснення",
  caseQuestion: "Питання читача",
  placeInWork: "Контекст використання",
  sections: [
    {
      id: "mechanism",
      title: "Авторський заголовок",
      paragraphs: ["Повне пояснення механізму."],
      steps: ["Опис послідовності."],
      evidence: ["Названий доказ."],
      warning: "Межа пояснення.",
    },
  ],
  caseExample: {
    title: "Завершений приклад",
    facts: "Зафіксовані факти прикладу.",
    analysis: "Пояснення встановленого результату.",
    lesson: "Фактичний результат прикладу.",
    sample: {
      kind: "letter",
      language: "pl",
      title: "Fragment ilustracyjny",
      note: "Тестовий фрагмент.",
      paragraphs: ["Treść wybranego fragmentu."],
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

describe("legal explanation view adapter", () => {
  it("keeps the canonical explanation intact and adds only rendering context", async () => {
    const resolution = await getExplanation("kpa", "kpa-art-64")
    expect(resolution.status).toBe("reviewed")
    if (resolution.status !== "reviewed") return

    const target = parseLegalProvisionReference({
      kind: "legal-provision",
      documentId: "kpa",
      provisionId: "kpa-art-64",
    })
    const view = toLegalExplanationView({
      explanation: resolution.explanation,
      id: "article-64",
      reference: "art. 64 KPA",
      title: "Braki formalne podania",
      target,
    })

    expect(view).toMatchObject({
      id: "article-64",
      reference: "art. 64 KPA",
      title: "Braki formalne podania",
      target,
    })
    expect(view.explanation).toBe(resolution.explanation)
    expect(view).not.toHaveProperty("summary")
    expect(view).not.toHaveProperty("rules")
    expect(view).not.toHaveProperty("legalEffect")
    expect(view).not.toHaveProperty("foreignersCase")
  })
})

describe("authored learning module projection", () => {
  it("preserves complete sections and the authored example without requiring an exercise", () => {
    const view = project(authoredModule)

    expect(view.mechanismSections).toEqual(authoredModule.sections)
    expect(view.caseExample).toEqual(authoredModule.caseExample)
    expect(view.caseExample?.sample).toEqual(authoredModule.caseExample?.sample)
    expect(view.mechanismParagraphs).toEqual([])
    expect(view.layers).toEqual([])
    expect(view.terms).toEqual([])
    expect(view.method).toEqual([])
    expect(view.positionIntro).toBeUndefined()
    expect(() => findModuleProvisions(authoredModule, [])).not.toThrow()
  })

  it("does not manufacture an example or homework from legacy questions and exercises", () => {
    const module: LegalLearningModule = {
      ...authoredModule,
      caseExample: undefined,
      exercise: "Самостійно складіть приклад.",
      sections: [
        {
          id: "questions",
          title: "Пояснення",
          paragraphs: ["Наявний авторський текст."],
          questions: ["Який результат можливий?"],
          steps: ["Описана дія."],
        },
      ],
    }
    const view = project(module)

    expect(view.caseExample).toBeUndefined()
    expect(view.method).toEqual([])
    expect(view.layers).toEqual([])
    expect(view.mechanismSections).toEqual(module.sections)
  })

  it("finds typed provisions in the example, table specimen and section evidence", () => {
    const law = createLegalLearningTextAuthor("kpa")
    const module: LegalLearningModule = {
      ...authoredModule,
      sections: [
        {
          id: "evidence",
          title: "Докази",
          paragraphs: [],
          evidence: [law.text`${law.article("57", "Доказ із посиланням")}`],
        },
      ],
      caseExample: {
        title: "Приклад із посиланнями",
        facts: law.text`${law.article("64", "Джерело факту")}`,
        analysis: law.text`${law.article("75", "Джерело аналізу")}`,
        lesson: law.text`${law.article("80", "Джерело висновку")}`,
        sample: {
          kind: "table",
          title: "Зіставлення",
          note: "Тестові посилання без числових підказок у тексті.",
          columns: ["Запис"],
          rows: [
            {
              id: "copy",
              cells: [law.text`${law.article("76a", "Джерело у зразку")}`],
            },
          ],
        },
      },
    }

    expect(
      findModuleProvisions(module, listProvisions("kpa")).map((item) => item.id)
    ).toEqual([
      "kpa-art-57",
      "kpa-art-64",
      "kpa-art-75",
      "kpa-art-76a",
      "kpa-art-80",
    ])
  })
})
