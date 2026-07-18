import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "31",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("31", "Art. 31")} дозволяє у szczególnie uzasadnionych przypadkach, зокрема через стан здоров’я, не передавати до państwo trzecie особу, якій відмовлено у в’їзді; за загрози життю або здоров’ю їй забезпечується медична допомога за рахунок бюджету państwa.`,
          sourceLocator: "Art. 31 ust. 1–2",
        },
      ],
      "Стаття містить спеціальне гуманітарне правило після odmowa wjazdu: за особливо обґрунтованих обставин особу можуть не передавати до третьої держави, а медичну допомогу фінансує бюджет.",
      [
        {
          locator: "ust. 1",
          explanation:
            "Йдеться саме про cudzoziemiec, якому odmówiono wjazdu; нездійснення передачі пов’язане з szczególnie uzasadnionym przypadkiem, особливо станом здоров’я.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Витрати медичної допомоги покриваються з частини бюджету, якою розпоряджається minister właściwy do spraw wewnętrznych, із коштів Komendant Główny Straży Granicznej.",
        },
      ],
      "Норма не скасовує саму odmowa wjazdu і не є загальним дозволом на pobyt; вона регулює подальше передання та медичну допомогу у визначених обставинах.",
      "Зберіть рішення про odmowa wjazdu, медичні факти й документи про ризик для життя або здоров’я. Не підміняйте спеціальне правило загальним твердженням про право залишитися.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-31",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
