import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-12",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("12", "Art. 12")} встановлює, що у postępowanie про видачу або uchylenie zezwolenia na pracę єдиною стороною є podmiot powierzający pracę cudzoziemcowi, а ${kpaLaw.article("31", "art. 31")} KPA у цьому провадженні не застосовується.`,
          sourceLocator: "Art. 12 pkt 1–2",
        },
      ],
      summary: workLaw.text`Стаття спеціально визначає сторону провадження про zezwolenie та виключає участь організацій, передбачену ${kpaLaw.article("31", "art. 31")} KPA. Це процесуальне правило не описує саму підставу pobytu cudzoziemiec.`,
      rules: [
        {
          locator: "pkt 1",
          explanation: workLaw.text`У справах про wydanie або uchylenie zezwolenie стороною є тільки podmiot, який доручає роботу; cudzoziemiec не названий стороною цього провадження за ${workLaw.article("12", "art. 12")}.`,
        },
        {
          locator: "pkt 2",
          explanation: workLaw.text`Положення ${kpaLaw.article("31", "art. 31")} KPA не застосовуються у цьому провадженні. Інші права та обов'язки потрібно визначати за конкретними нормами ustawy і KPA.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("12", "Art. 12")} визначає процесуальну роль у справі про дозвіл, але не означає, що cudzoziemiec не має жодних прав в інших процедурах або що дозвіл вирішує його legalny pobyt.`,
      foreignersCase: workLaw.text`Встановіть, про яку саме процедуру йдеться: zezwolenie на роботу чи pobyt. У справі за ${workLaw.article("12", "art. 12")} перевірте повідомлення podmiot і доступні засоби захисту, не плутаючи їх із процедурою pobyt.`,
    },
  ],
})
