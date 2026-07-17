import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347a", "Art. 347a")} зобов’язує Komendant Główny Straży Granicznej внести дані іноземця до System Informacyjny Schengen для цілей ${foreignersLaw.external("Art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860, якщо SG видав decyzja o zobowiązaniu do powrotu.`,
          sourceLocator: "Art. 347a",
        },
      ],
      summary:
        "Після рішення SG про зобов’язання до повернення дані іноземця вносяться до SIS у передбачених правом ЄС цілях.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Внесення виконує Komendant Główny Straży Granicznej, а підставою є саме decyzja про повернення, видана komendant oddziału або placówki.",
        },
      ],
      legalEffect: foreignersLaw.text`Внесення до SIS є окремою інформаційною дією, пов’язаною з рішенням про повернення; питання оновлення й видалення врегульовані ${foreignersLaw.article("347b", "Art. 347b")}–${foreignersLaw.article("347g", "347g")}.`,
      foreignersCase: foreignersLaw.text`Перевірте копію decyzja, на підставі якої зроблено wpis, та відрізняйте SIS від польського реєстру; для зміни статусу шукайте підставу ${foreignersLaw.article("347c", "Art. 347c")} або ${foreignersLaw.article("347d", "Art. 347d")}.`,
    },
  ],
})
