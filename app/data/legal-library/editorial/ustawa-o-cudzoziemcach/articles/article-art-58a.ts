import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-58a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("58a", "Art. 58a")} уповноважує ministra właściwego do spraw zagranicznych, за погодженням із міністром внутрішніх справ, встановити rozporządzeniem виняток від obowiązku wizowego або від zwolnienia z tego obowiązku для категорій з ${foreignersLaw.external("art. 6 ust. 1 rozporządzenia 2018/1806", "https://eur-lex.europa.eu/eli/reg/2018/1806/oj")}.`,
          sourceLocator: "Art. 58a ust. 1–2",
        },
      ],
      summary:
        "Стаття створює механізм зміни візового режиму для конкретних держав і категорій осіб через окреме rozporządzenie.",
      rules: [
        {
          locator: "Art. 58a ust. 1",
          explanation:
            "Сам закон не називає готового переліку. У чинному rozporządzenie треба знайти державу, категорію осіб, дату початку винятку, а при безвізовому режимі — також дозволений строк і додаткові умови pobytu.",
        },
        {
          locator: "Art. 58a ust. 2",
          explanation:
            "Під час видання rozporządzenia міністр враховує інтереси та міжнародні зобов’язання Польщі; це критерій нормотворення, а не індивідуальний доказ мандрівника.",
        },
      ],
      legalEffect:
        "Візовий виняток діє лише після набрання чинності відповідним rozporządzeniem і лише в окреслених ним межах.",
      foreignersCase:
        "Перевірте громадянство, категорію особи, мету й дати подорожі за чинним rozporządzeniem. Не робіть висновок про obowiązek wizowy лише з тексту цієї делегаційної статті.",
    },
  ],
})
