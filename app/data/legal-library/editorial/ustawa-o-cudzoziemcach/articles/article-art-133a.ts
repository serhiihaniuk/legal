import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-133a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("133a", "Art. 133a")} відкладає найранішу дату рішення про cofnięcie за ${foreignersLaw.article("133", "art. 133")} ust. 1 pkt 3 на 3 або 6 місяців, а для мобільності в іншій державі ЄС пов’язує рішення з інформацією цієї держави.`,
          sourceLocator: "Art. 133a ust. 1–3",
        },
      ],
      summary:
        "Стаття встановлює часові межі для певного cofnięcie Niebieskiej Karty UE та правило очікування інформації при mobilność długoterminowa.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Рішення за ${foreignersLaw.article("133", "art. 133")} ust. 1 pkt 3 видається не раніше ніж через 3 місяці від wszczęcia, якщо перебування за ${foreignersLaw.article("127", "art. 127")} коротше 2 років, або через 6 місяців, якщо не коротше 2 років.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`При mobilność długoterminowa в іншій державі ЄС рішення у випадках ${foreignersLaw.article("133", "art. 133")} ust. 1 pkt 1, 3 і 4 не видається раніше отримання від цієї держави інформації про видачу або відмову у видачі документа.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`У визначені періоди не біжать строки розгляду справи wojewoda за ${kpaLaw.article("35", "art. 35 § 3")} KPA.`,
        },
      ],
      legalEffect:
        "Стаття регулює найраніший момент рішення та перебіг строку розгляду лише у вказаних ситуаціях; вона не скасовує саму процедуру cofnięcie.",
      foreignersCase: foreignersLaw.text`Визначте дату wszczęcia, тривалість перебування за ${foreignersLaw.article("127", "art. 127")} і наявність мобільності в іншій державі, перш ніж оцінювати строк рішення.`,
    },
  ],
})
