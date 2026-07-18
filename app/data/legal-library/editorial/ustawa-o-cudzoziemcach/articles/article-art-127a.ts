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
      provisionId: "ustawa-o-cudzoziemcach-art-127a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("127a", "Art. 127a")} дозволяє minister właściwy do spraw wewnętrznych у porozumieniu з міністрами, відповідальними за pracę та gospodarkę, визначити w drodze rozporządzenia річний ліміт вперше наданих zezwoleń за ${foreignersLaw.article("127", "art. 127")} і зобов’язує оголосити досягнення ліміту.`,
          sourceLocator: "Art. 127a ust. 1–3",
        },
      ],
      summary:
        "Стаття створює можливість річного ліміту для першого zezwolenia у zawodzie wymagającym wysokich kwalifikacji.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Ліміт може охоплювати окремі województwa, zawody, rodzaje umów, на підставі яких cudzoziemiec може виконувати роботу, або rodzaje działalności podmiotu powierzającego pracę за класифікацією, визначеною в окремих przepisach.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Під час встановлення враховуються potrzeby rynku pracy, безпека держави, porządek publiczny та komplementarność зайнятості; досягнення ліміту оголошується в Monitor Polski.",
        },
      ],
      legalEffect:
        "Норма сама не встановлює конкретного числа ліміту; вона визначає можливий механізм його встановлення та оголошення.",
      foreignersCase: foreignersLaw.text`Якщо справа стосується першого zezwolenia за ${foreignersLaw.article("127", "art. 127")}, перевірте актуальне розпорядження та офіційне оголошення про ліміт, а не припускайте його розмір.`,
    },
  ],
})
