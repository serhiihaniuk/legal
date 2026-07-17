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
      provisionId: "ustawa-o-cudzoziemcach-art-417",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("417", "Art. 417")} ust. 1: «Cudzoziemiec umieszczony w strzeżonym ośrodku lub przebywający w areszcie dla cudzoziemców otrzymuje świadczenia zdrowotne, leki, artykuły sanitarne oraz posiłki i napoje».`,
          sourceLocator: "Art. 417 ust. 1",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Для оцінки медичної потреби треба розрізняти саме świadczenia zdrowotne і загальне право на послугу, якої вимагає стан здоров’я за ${foreignersLaw.article("415", "Art. 415")}.`,
          sourceLocator: "Art. 417 ust. 1–2; Art. 415 ust. 1 pkt 5",
        },
      ],
      summary: foreignersLaw.text`Особа у strzeżony ośrodek або areszt отримує медичні послуги, ліки, санітарні засоби, їжу та напої; порядок медичної допомоги відсилає до ${foreignersLaw.external("art. 115", "https://eli.gov.pl/eli/DU/2025/911/ogl")} Kodeks karny wykonawczy.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До базових świadczenia належать медична допомога, ліки, artykuły sanitarne, posiłki та napoje.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Świadczenia zdrowotne, ліки й санітарні засоби надаються за правилами ${foreignersLaw.external("art. 115 § 1a–8", "https://eli.gov.pl/eli/DU/2025/911/ogl")} Kodeks karny wykonawczy та актів на його підставі.`,
        },
      ],
      legalEffect:
        "Норма гарантує перелічені види забезпечення та визначає зовнішній режим медичної допомоги. Вона не встановлює діагнозу або конкретного лікування без медичної оцінки.",
      foreignersCase:
        "Зберігайте записи про звернення, призначені leki та видані artykuły sanitarne; якщо допомогу не надано, сформулюйте skarga з датами й конкретною потребою.",
    },
  ],
})
