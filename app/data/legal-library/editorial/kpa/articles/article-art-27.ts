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
      article: "27",
      provisionId: "kpa-art-27",
      reviewStatus: "reviewed",
      summary:
        "Стаття переносить правила wyłączenia на членів колегіальних органів і визначає рішення на випадок втрати quorum або неможливості дії SKO.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation: kpaLaw.text`Член колегіального органу виключається за підставами ${kpaLaw.article("24", "art. 24")}, а член SKO — також із повторного розгляду, якщо брав участь у первісній decyzji.`,
        },
        {
          locator: "§ 2–3",
          explanation: kpaLaw.text`За відсутності quorum застосовується механізм ${kpaLaw.article("26", "art. 26 § 2")}, а якщо SKO не може діяти, minister wyznacza інше SKO.`,
        },
      ],
      legalEffect:
        "Колегіальне рішення має бути прийняте складом без осіб, щодо яких діє конфлікт або попередня участь, із забезпеченням органу-замінника.",
      foreignersCase:
        "Для більшості справ про pobyt це загальне правило; воно стає практичним, якщо справу розглядає колегіальний organ або SKO.",
    },
  ],
})
