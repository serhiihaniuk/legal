import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-73",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("73", "Art. 73")} ust. 1 визначає, хто інформує інші держави Schengen про видачу wiza Schengen у випадках ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 4 і ${foreignersLaw.external("Art. 31", VISA_CODE_URL)} ust. 1 Wspólnotowy Kodeks Wizowy; ust. 2 регулює повідомлення про wiza krajowa, а ust. 3–4 — передавання через Szef Urzędu та доступ визначених органів.`,
          sourceLocator: "Art. 73 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Розподіл органів у ${foreignersLaw.article("73", "Art. 73")} залежить від того, хто видав візу і чи вона видана на кордоні; це інформаційна функція, не повторний розгляд заяви.`,
          sourceLocator: "Art. 73 ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("73", "Art. 73")} розподіляє обов’язки з повідомлення про видані візи: MFA або konsul інформують у визначених випадках, при прикордонній wiza Schengen — Komendant Główny Straży Granicznej, а Szef Urzędu передає інформацію компетентним польським службам.`,
      rules: [
        {
          locator: "Art. 73 ust. 1",
          explanation: foreignersLaw.text`Для віз, виданих MFA або konsul, діє компетенція MFA у випадках ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 4/${foreignersLaw.external("Art. 31", VISA_CODE_URL)} ust. 1; для wiza Schengen на кордоні — Komendant Główny Straży Granicznej у випадках ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 4 і ${foreignersLaw.external("Art. 31", VISA_CODE_URL)} ust. 1.`,
        },
        {
          locator: "Art. 73 ust. 2–3",
          explanation: foreignersLaw.text`Якщо для wiza krajowa виникають обставини ${foreignersLaw.external("Art. 31", VISA_CODE_URL)} ust. 1, konsul або MFA інформує Szef Urzędu; інформація про wiza Schengen передається через нього.`,
        },
        {
          locator: "Art. 73 ust. 4",
          explanation: "Szef Urzędu надає дані SG, Policja, ABW, AW і MFA.",
        },
      ],
      legalEffect:
        "Стаття створює канал повідомлення та внутрішнього доступу до інформації про візи. Вона не змінює чинність уже виданої візи і не є підставою для її скасування сама по собі.",
      foreignersCase: foreignersLaw.text`Зафіксуйте орган, який видав візу, випадок ${foreignersLaw.external("Art. 25", VISA_CODE_URL)}/${foreignersLaw.external("31", VISA_CODE_URL)} і маршрут повідомлення; не трактуйте обмін даними як нову decyzja щодо legal stay.`,
    },
  ],
})
