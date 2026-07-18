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
      provisionId: "ustawa-o-cudzoziemcach-art-368",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("368", "Art. 368")} покладає на budżet państwa koszty повторного в’їзду іноземця до Польщі та допомоги іншої держави ЄС під час повітряного транзиту.`,
          sourceLocator: "Art. 368 ust. 1–2",
        },
      ],
      summary:
        "Витрати, безпосередньо пов’язані з повторним в’їздом після транзиту та допомогою іншої держави, фінансуються з державного бюджету через кошти головного коменданта SG.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До бюджетних витрат належать повторний wjazd іноземця до Польщі та допомога іншої держави ЄС під час tranzyt drogą powietrzną через її територію.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Фінансування здійснюється з частини budżet państwa, якою розпоряджається міністр внутрішніх справ, із коштів Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма визначає джерело оплати цих організаційних витрат, але не вирішує питання законності наступного pobyt іноземця.",
      foreignersCase:
        "Відокремте оплату повторного в’їзду від підстави перебування після нього та збережіть документи про причину й фактичні витрати транзиту.",
    },
  ],
})
