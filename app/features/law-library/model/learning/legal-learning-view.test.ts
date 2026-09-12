import { describe, expect, it } from "vitest"

import {
  getExplanation,
  listProvisions,
  parseLegalProvisionReference,
} from "~/data/legal-library"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"
import type { ExplanationReviewStatus } from "~/data/legal-library/contracts"

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

    expect(
      toLegalExplanationView({
        explanation: resolution.explanation,
        reference: "art. 64 KPA",
      }).title
    ).toBeUndefined()
  })
})

describe("authored learning module projection", () => {
  it("keeps an actual provision summary without copying it into a title or role overview", async () => {
    const provision = listProvisions("powierzanie-pracy").find(
      (item) => item.locator === "Art. 2"
    )
    if (!provision) throw new Error("Missing work-act article 2")
    const resolution = await getExplanation("powierzanie-pracy", provision.id)
    if (resolution.status !== "reviewed")
      throw new Error("Missing article 2 explanation")
    const view = buildLegalLearningModuleView({
      documentId: "powierzanie-pracy",
      module: authoredModule,
      legalState: "2026-07-18",
      reviewedProvisions: [{ provision, explanation: resolution.explanation }],
    })
    expect(view.articleGroups).toEqual([])
    expect(view.provisionGuide.items[0]?.title).toBeUndefined()
    expect(view.provisionGuide.items[0]?.explanation).toBe(
      resolution.explanation
    )
    expect(project(authoredModule).articleGroups).toEqual([])
  })

  it("does not turn other acts or quoted article numbers into same-number local provisions", () => {
    const work = createLegalLearningTextAuthor("powierzanie-pracy")
    const kpa = createLegalLearningTextAuthor("kpa")
    const module: LegalLearningModule = {
      ...authoredModule,
      provisionScope: work.text`${work.article("2")}`,
      sections: [
        {
          id: "imported-definitions",
          title: "Визначення з іншого акта",
          paragraphs: [
            work.text`${work.external("art. 7 ustawy o zatrudnianiu pracowników tymczasowych", "https://eli.gov.pl/eli/DU/2025/236/ogl")}`,
            kpa.text`${kpa.article("5")}`,
          ],
        },
      ],
      caseExample: {
        title: "Приклад",
        facts: "Факти",
        analysis: "Аналіз",
        lesson: "Висновок",
        sample: {
          kind: "letter",
          language: "pl",
          title: "Cytowany fragment",
          note: "Przykład",
          paragraphs: ["art. 6"],
        },
      },
    }
    expect(
      findModuleProvisions(module, listProvisions("powierzanie-pracy")).map(
        (item) => item.locator
      )
    ).toEqual(["Art. 2"])
  })
  it.each<ExplanationReviewStatus>([
    "reviewed",
    "draft",
    "stale",
    "blocked",
    "superseded",
  ])(
    "keeps the edition date and only publishes a reviewed module date (%s)",
    (reviewStatus) => {
      const view = buildLegalLearningModuleView({
        documentId: "powierzanie-pracy",
        module: {
          ...authoredModule,
          sourceReview: {
            reviewStatus,
            language: "uk",
            legalStateDate: "2026-09-10",
            verifiedAt: "2026-09-12",
          },
        },
        legalState: "2026-07-18",
        reviewedProvisions: [],
      })
      expect(view.legalState).toBe("2026-07-18")
      expect(view.explanationReview).toEqual(
        reviewStatus === "reviewed"
          ? { legalStateDate: "2026-09-10", verifiedAt: "2026-09-12" }
          : undefined
      )
    }
  )
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
    expect(view.stage).toBeUndefined()
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
