import { describe, expect, it } from "vitest"
import { getLegalLearningModule } from "."
import { uczestnicyIDefinicjeLearningModuleTopic } from "./modules/powierzanie-pracy/uczestnicy-i-definicje"
import { legalStayWorkModuleTopic } from "./modules/powierzanie-pracy/legalny-pobyt-a-rynek-pracy"
import { instrumentyDostepuLearningModuleTopic } from "./modules/powierzanie-pracy/instrumenty-dostepu"
import { obowiazkiPodmiotuLearningModuleTopic } from "./modules/powierzanie-pracy/obowiazki-podmiotu"
import { zmianyICiagloscLearningModuleTopic } from "./modules/powierzanie-pracy/zmiany-i-ciaglosc"
import { scopeLearningModuleTopic } from "./modules/ppsa/scope"
import { entryAndCurrentBasisLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/entry-and-current-basis"
import { chooseFormLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/choose-form"

describe("learning publication metadata", () => {
  it.each([
    ["powierzanie-pracy", uczestnicyIDefinicjeLearningModuleTopic],
    ["powierzanie-pracy", legalStayWorkModuleTopic],
    ["powierzanie-pracy", instrumentyDostepuLearningModuleTopic],
    ["powierzanie-pracy", obowiazkiPodmiotuLearningModuleTopic],
    ["powierzanie-pracy", zmianyICiagloscLearningModuleTopic],
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
