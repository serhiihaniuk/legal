import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-384",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej через Biuro SIRENE або інші доступні засоби проводить konsultacje з органом państwo członkowskie wydające, щоб підтвердити подальшу wykonalność рішення про повернення, та з державою, яка видала дозвіл на pobyt, щоб визначити підстави для його cofnięcie.",
          sourceLocator: "Art. 384 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Консультація перевіряє актуальність виконання та можливе відкликання дозволу; вона сама не замінює відповідне рішення компетентного органу.",
          sourceLocator: "Art. 384 pkt 1–2",
        },
      ],
      summary:
        "Стаття описує обмін інформацією між польським органом, державою-джерелом рішення та державою, яка видала дозвіл на pobyt.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перша konsultacja має підтвердити, що рішення про повернення досі можна виконати.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Друга konsultacja стосується того, чи є підстави для cofnięcie zezwolenie na pobyt державою, яка його видала.",
        },
      ],
      legalEffect:
        "Норма забезпечує перевірку іноземного рішення та статусу pobyt через SIRENE або інший канал співпраці. Інформаційний обмін не дорівнює автоматичній зміні статусу.",
      foreignersCase:
        "Уточніть, яку саме державу і яке питання стосувалася konsultacja, чи підтверджено wykonalność рішення та чи існує окреме рішення про cofnięcie zezwolenie.",
    },
  ]),
})
