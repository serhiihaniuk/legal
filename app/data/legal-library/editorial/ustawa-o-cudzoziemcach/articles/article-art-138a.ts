import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const RYNEK_PRACY_SLUZBY_ZATRUDNIENIA_URL =
  "https://eli.gov.pl/eli/DU/2025/620/ogl"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-138a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("138a", "Art. 138a")} зобов’язує minister właściwy do spraw wewnętrznych шляхом obwieszczenia в Monitor Polski оголосити wykaz zawodów, для яких виконання роботи дає підставу визнати професійні кваліфікації, здобуті через trzyletnie doświadczenie zawodowe, відповідно до załącznika I dyrektywy (UE) 2021/1883.`,
          sourceLocator: "Art. 138a",
        },
      ],
      summary:
        "Стаття є підставою для офіційного wykaz zawodów, пов’язаного з підтвердженням кваліфікації досвідом.",
      rules: [
        {
          locator: "Art. 138a",
          explanation: foreignersLaw.text`Wykaz оголошується в Monitor Polski у drodze obwieszczenia з урахуванням класифікації zawodów за ${foreignersLaw.external("art. 29", RYNEK_PRACY_SLUZBY_ZATRUDNIENIA_URL)} ust. 3 pkt 1 ustawy o rynku pracy i służbach zatrudnienia; він має відповідати змісту załącznika I до dyrektywy (UE) 2021/1883.`,
        },
      ],
      legalEffect:
        "Стаття не називає конкретних професій; практичне значення має опублікований wykaz, а не припущення за назвою роботи.",
      foreignersCase:
        "Якщо кваліфікацію підтверджують досвідом, перевірте, чи точний zawód є в актуальному wykaz, і зіставте досвід із вимогою трьох років.",
    },
  ],
})
