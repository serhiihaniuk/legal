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
      provisionId: "ustawa-o-cudzoziemcach-art-139k",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139k", "Art. 139k")} визначає, що в провадженні про надання ${foreignersLaw.article("139a", "art. 139a")} стороною є лише jednostka przyjmująca, а у справі про cofnięcie сторонами є вона та cudzoziemiec.`,
          sourceLocator: "Art. 139k ust. 1–3",
        },
      ],
      summary:
        "Стаття розмежовує сторони на стадії надання та cofnięcie ICT-zezwolenia й покладає на jednostka обов’язок повідомляти про зміни.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У справі про udzielenie zezwolenia стороною є виключно jednostka przyjmująca.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Під час надання jednostka має niezwłocznie письмово повідомляти wojewoda про кожну зміну обставин, що впливає на умови.",
        },
        {
          locator: "ust. 3",
          explanation:
            "У справі про cofnięcie сторонами є jednostka przyjmująca та cudzoziemiec, якому надали zezwolenie.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний статус сторін для двох різних проваджень; не слід переносити склад сторін з одного на інше.",
      foreignersCase:
        "З’ясуйте, чи йдеться про udzielenie або cofnięcie: від цього за текстом статті залежить, хто є stroną postępowania.",
    },
  ],
})
