import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-355",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("355", "Art. 355")} визначає komendant oddziału або placówki Straży Granicznej компетентним у справах ${foreignersLaw.article("348", "Art. 348")} і ${foreignersLaw.article("351", "351")}, Komendant Główny — organ wyższego stopnia, а odwołanie подається протягом 7 днів.`,
          sourceLocator: "Art. 355 ust. 1–3",
        },
      ],
      summary:
        "У справах про гуманітарну та tolerowany згоду рішення в першій інстанції приймає відповідний орган SG, а апеляційним органом є Komendant Główny.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Компетентним є комендант відділу або placówki SG; щодо нього органом вищого ступеня за KPA є Komendant Główny Straży Granicznej.",
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Odwołanie від рішення за ${foreignersLaw.article("348", "Art. 348")} або ${foreignersLaw.article("351", "351")} подається протягом 7 днів від doręczenie decyzja.`,
        },
      ],
      legalEffect:
        "Стаття визначає інстанційність і короткий строк; зміст odwołanie та спосіб його подання треба звірити з pouczenie і KPA.",
      foreignersCase:
        "Зафіксуйте дату вручення decyzja, обчисліть 7 днів і в odwołanie окремо опишіть докази ризику, неможливості або юридичної заборони повернення.",
    },
  ],
})
