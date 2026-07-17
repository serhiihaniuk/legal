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
      provisionId: "ustawa-o-cudzoziemcach-art-190",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("190", "Art. 190")} встановлює спеціальні строки permit ze względu na inne okoliczności: строк permit osoby, до якої приєднуються, період nauka або szkolenie до 1 року, 9 місяців після навчання чи досліджень, 5 років для визначеного UK-випадку та 3 роки для visa-випадку.`,
          sourceLocator: "Art. 190 pkt 1–5",
        },
      ],
      summary: foreignersLaw.text`Строк permit залежить від конкретного pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")} і в кількох випадках надається лише одноразово.`,
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 строк дорівнює строку чинності permit особи, яку cudzoziemiec супроводжує або до якої приєднується.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("187", "art. 187")} pkt 1 строк відповідає nauka або szkolenie zawodowe, але не перевищує 1 року.`,
        },
        {
          locator: "pkt 3",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7 permit надається одноразово на 9 місяців безпосередньо після завершення studia чи badań naukowych або prac rozwojowych.`,
        },
        {
          locator: "pkt 4–5",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 8 permit надається одноразово на 5 років, а для pkt 9 — одноразово на 3 роки; інші ситуації не можна автоматично підвести під ці строки.`,
        },
      ],
      legalEffect:
        "Строк визначається законом для конкретного складу і не випливає лише з назви заяви; одноразовість у pkt 3–5 обмежує повторне використання цієї підстави.",
      foreignersCase:
        "Назвіть застосовний pkt, зафіксуйте дату завершення навчання або досліджень і чинність permit osoby referencyjnej; перевірте, чи не використано вже одноразову 9-, 5- або 3-річну можливість.",
    },
  ],
})
