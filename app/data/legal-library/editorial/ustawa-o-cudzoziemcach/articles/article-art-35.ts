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
      "35",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} дозволяє негайно doprowadzić cudzoziemiec до кордону, якщо його затримано у strefa nadgraniczna безпосередньо після ненавмисного і незаконного перетину; орган також забирає odciski linii papilarnych, якщо особу не доставлено негайно.`,
          sourceLocator: "Art. 35 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} ust. 3 зобов’язує передати Komendant Główny Policji образ відбитків, персональні дані та відомості для реєстру ${foreignersLaw.article("428", "art. 428")} ust. 1 pkt 4.`,
          sourceLocator: "Art. 35 ust. 3",
        },
      ],
      "Стаття регулює негайне доставлення до кордону після певного незаконного перетину та пов’язані з цим біометричні дані й реєстрацію.",
      [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні затримання у strefa nadgraniczna та безпосередній зв’язок із ненавмисним перетином кордону всупереч праву.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Відбитки беруть, крім випадку негайного doprowadzenie; отримані дані передають Komendant Główny Policji для реєстру, названого в статті.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} не є процедурою надання дозволу на pobyt і не скасовує необхідності встановити факти затримання та перетину, передбачені статтею.`,
      "У справі встановіть час і місце затримання, характер перетину та чи було негайне doprowadzenie. Окремо перевірте повідомлення про відбитки й дані реєстру.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-35",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
