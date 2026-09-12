import { describe, expect, it } from "vitest"
import { getLegalLearningModule } from "."
import { uczestnicyIDefinicjeLearningModuleTopic } from "./modules/powierzanie-pracy/uczestnicy-i-definicje"
import { legalStayWorkModuleTopic } from "./modules/powierzanie-pracy/legalny-pobyt-a-rynek-pracy"
import { scopeLearningModuleTopic } from "./modules/ppsa/scope"
import { entryAndCurrentBasisLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/entry-and-current-basis"
import { chooseFormLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/choose-form"

describe("learning publication metadata", () => {
  it.each([
    ["powierzanie-pracy", uczestnicyIDefinicjeLearningModuleTopic],
    ["powierzanie-pracy", legalStayWorkModuleTopic],
    ["ppsa", scopeLearningModuleTopic],
    ["ustawa-o-cudzoziemcach", entryAndCurrentBasisLearningModuleTopic],
    ["rozporzadzenie-wniosek-pobyt-czasowy", chooseFormLearningModuleTopic],
  ] as const)(
    "preserves %s review metadata through curriculum and navigation projection",
    (documentId, unit) => {
      const publication = getLegalLearningModule(documentId, unit.body.id)
      expect(publication?.sourceReview).toEqual(unit.review)
      expect(publication?.sections).toEqual(unit.body.sections)
      expect(publication?.caseExample).toEqual(unit.body.caseExample)
      expect(publication?.order).toBe(unit.body.order + 1)
    }
  )
})
