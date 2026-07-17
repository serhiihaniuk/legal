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
      provisionId: "ustawa-o-cudzoziemcach-art-139b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139b", "Art. 139b")} дозволяє minister właściwy do spraw wewnętrznych у porozumieniu з міністрами, відповідальними за pracę та gospodarkę, визначити w drodze rozporządzenia річний ліміт вперше наданих zezwoleń за ${foreignersLaw.article("139a", "art. 139a")} і вимагає врахувати potrzeby rynku pracy, безпеку та porządek publiczny.`,
          sourceLocator: "Art. 139b ust. 1–3",
        },
      ],
      summary: "Стаття регулює можливий річний ліміт для ICT-zezwolenia.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`W drodze rozporządzenia ліміт може охоплювати окремі województwa, zawody або rodzaje działalności jednostek przyjmujących; конкретна кількість у ${foreignersLaw.article("139b", "Art. 139b")} не встановлена.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Під час визначення враховуються rynek pracy, безпека держави й porządek publiczny; досягнення ліміту оголошується в Monitor Polski.",
        },
      ],
      legalEffect:
        "Норма не містить конкретного числа ліміту, а лише правовий механізм його можливого встановлення та оприлюднення.",
      foreignersCase:
        "Для першого ICT-zezwolenia перевірте чинне розпорядження та офіційне оголошення про досягнення ліміту.",
    },
  ],
})
