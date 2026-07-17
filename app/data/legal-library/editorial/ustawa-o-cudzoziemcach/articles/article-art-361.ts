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
      provisionId: "ustawa-o-cudzoziemcach-art-361",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("361", "Art. 361")} дозволяє розпочати транзит на підставі notyfikacja Komendant Główny Straży Granicznej, якщо центральний орган іншої держави не надав zezwolenie протягом 2 днів або протягом 48 годин після продовженого строку.`,
          sourceLocator: "Art. 361 pkt 1–2",
        },
      ],
      summary:
        "Мовчання іншої держави після запиту в передбачені короткі строки може дозволити початок транзиту на підставі спеціальної нотифікації польського органу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перший строк — 2 дні від передачі wniosek центральному органу іншої держави ЄС.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Якщо інший орган продовжив строк розгляду, відлік для правила становить 48 годин після завершення названого строку.",
        },
      ],
      legalEffect: foreignersLaw.text`Транзит на підставі notyfikacja є спеціальним винятком із вимоги ${foreignersLaw.article("360", "Art. 360")} і залежить від точно підтверджених дат запиту та строків.`,
      foreignersCase:
        "Перевірте дату й спосіб передачі wniosek, повідомлення про продовження та саму notyfikacja; не вважайте мовчання доведеним без документів.",
    },
  ],
})
