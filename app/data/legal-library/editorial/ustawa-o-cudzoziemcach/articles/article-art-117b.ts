import type { LegalProvisionId } from "../../../contracts"

import { authorLegalTextCitationsTree } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("117b", {
      provisionId: "ustawa-o-cudzoziemcach-art-117b",
      reviewStatus: "reviewed",
      statuteText:
        "У провадженні про zezwolenie i pracę відповідно застосовується Art. 27 ustawy z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom. За цим відсиланням wojewoda враховує у черговості wnioski для визначених у переліку підприємців, повторне zezwolenie тому самому podmiot і cudzoziemiec без нижчих часу/зарплати, професії з переліку та інші заяви.",
      statuteLocator: "Art. 117b; art. 27 ustawy z 20 marca 2025 r.",
      practicalText:
        "Art. 117b не створює окремої матеріально-правової умови zezwolenie і не гарантує швидшого рішення; він імпортує порядок пріоритетності Art. 27 іншої ustawa. Перевіряйте чинний текст Art. 27, відповідний wykaz і факти повторної заяви.",
      practicalLocator: "Art. 117b",
      summary:
        "Art. 117b відсилає до Art. 27 нової ustawa про powierzanie pracy і робить його порядок черговості відповідним у провадженні про zezwolenie i pracę.",
      rules: [
        {
          locator: "Art. 117b",
          explanation:
            "Застосовується відповідно Art. 27 ustawy z 20 marca 2025 r., який розставляє черговість між переліченими підприємцями, повторним zezwolenie, zawodami з wykaz і рештою заяв.",
        },
      ],
      legalEffect:
        "Норма впливає на порядок розгляду wnioski, але не надає zezwolenie na pobyt, legalność pobytu або правова підстава виконання роботи і не скасовує матеріальні умови Art. 114, 117 та 117a.",
      foreignersCase:
        "Визначте категорію заяви за Art. 27, відповідний wykaz, попередній zezwolenie, podmiot, cudzoziemiec, wymiar czasu pracy та wynagrodzenie. Не називайте пріоритет доказом позитивного рішення.",
    }),
  ]),
})
