import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "184",
      provisionId: "kpa-art-184",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює sprzeciw prokuratora проти остаточного рішення та пов'язує його з конкретними надзвичайними режимами перегляду. Прокурор не отримує довільної можливості повторно відкрити кожну справу.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Sprzeciw допускається, коли закон дозволяє wznowienie, stwierdzenie nieważności, uchylenie або zmianę; його подають органу, компетентному в належному режимі.",
        },
        {
          locator: "§ 3",
          explanation:
            "Щодо рішення, виданого міністром, sprzeciw подає Prokurator Generalny.",
        },
        {
          locator: "§ 4",
          explanation: kpaLaw.text`Підстава з ${kpaLaw.article("145", "art. 145 § 1")} pkt 4 може бути використана прокурором лише за згодою сторони.`,
        },
      ],
      legalEffect:
        "Sprzeciw запускає контроль остаточного рішення в тому надзвичайному режимі, підстави якого фактично наявні.",
      foreignersCase:
        "У справі про pobyt сам іноземець не подає sprzeciw prokuratora. Якщо прокурор втручається, потрібно бачити, на яку саме підставу wznowienia, nieważności, uchylenia чи zmiany він посилається.",
    },
  ],
})
