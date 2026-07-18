import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-12",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("12", "Art. 12")} встановлює, що у провадженні про видачу або скасування дозволу на роботу єдиною стороною є суб’єкт, який доручає роботу іноземцеві. ${kpaLaw.article("31", "Ст. 31")} KPA про участь громадської організації в цьому провадженні не застосовується.`,
          sourceLocator: "Art. 12 pkt 1–2",
        },
      ],
      summary: workLaw.text`Стаття спеціально визначає сторону провадження про дозвіл на роботу та виключає механізм участі громадських організацій, передбачений ${kpaLaw.article("31", "ст. 31")} KPA. Це процесуальне правило не визначає підстав перебування іноземця.`,
      rules: [
        {
          locator: "pkt 1",
          explanation: workLaw.text`У справах про видачу або скасування дозволу стороною є лише суб’єкт, який доручає роботу. Іноземець не названий стороною цього провадження в ${workLaw.article("12", "ст. 12")}.`,
        },
        {
          locator: "pkt 2",
          explanation: workLaw.text`Положення ${kpaLaw.article("31", "ст. 31")} KPA не застосовують у цьому провадженні. Інші процесуальні права та обов’язки потрібно встановлювати за конкретними нормами цього закону і KPA.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("12", "Ст. 12")} визначає процесуальну роль у справі про дозвіл на роботу. Це не означає, що іноземець не має прав в інших процедурах або що дозвіл одночасно вирішує питання законності перебування.`,
      foreignersCase: workLaw.text`Спочатку встановіть, про яку процедуру йдеться: дозвіл на роботу чи перебування. У справі за ${workLaw.article("12", "ст. 12")} перевірте повідомлення, надіслані суб’єкту, і доступні йому засоби захисту, не плутаючи їх із процедурою щодо перебування іноземця.`,
    },
  ],
})
