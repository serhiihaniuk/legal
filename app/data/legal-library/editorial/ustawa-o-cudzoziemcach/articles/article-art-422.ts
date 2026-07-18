import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-422",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("422", "Art. 422")}: «Decyzja o ukaraniu cudzoziemca karą dyscyplinarną zawiera» зазначення органу, дати, особи, підстави, виду kary та опису порушення.`,
          sourceLocator: "Art. 422 pkt 1–7",
        },
        {
          kind: "practical-inference",
          text: "Відсутність обов’язкового елемента рішення є окремим питанням перевірки; сама стаття не дає висновку про автоматичну недійсність кожного дефекту.",
          sourceLocator: "Art. 422 pkt 1–7",
        },
      ],
      summary:
        "Стаття визначає мінімальний зміст decyzja про дисциплінарне покарання: орган, дату, дані cudzoziemca, правову підставу, вид kary, опис порушення та підпис компетентної особи.",
      rules: [
        {
          locator: "pkt 1–6",
          explanation:
            "У decyzja мають бути орган, дата, ім’я та прізвище cudzoziemiec, правова підстава, вид kary й опис порушення nakazy або zakazy.",
        },
        {
          locator: "pkt 7",
          explanation:
            "Рішення підписує komendant oddziału чи placówki Straży Granicznej або уповноважений функціонер із зазначенням імені, прізвища та службового ступеня.",
        },
      ],
      legalEffect:
        "Стаття задає обов’язкові реквізити рішення про karę. Вона не визначає повного порядку оскарження чи всіх наслідків процесуального недоліку.",
      foreignersCase:
        "Зробіть копію decyzja та перевірте всі сім пунктів: особливо опис діяння, правову підставу, підпис і службовий статус підписанта.",
    },
  ],
})
