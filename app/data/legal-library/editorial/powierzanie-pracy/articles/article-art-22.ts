import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-22",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("22", "Art. 22")} ust. 1 зобов'язує organ uchylić zezwolenie, коли змінилися обставини або докази рішення, podmiot подав неправдиві дані чи не виконав визначені обов'язки, припинилася причина дозволу, cudzoziemiec перестав відповідати ${workLaw.article("16", "art. 16")}, отримано повідомлення ${workLaw.article("19", "art. 19")}, діє wpis небажаного pobytu або podmiot більше не веде діяльність, що обґрунтовує роботу.`,
          sourceLocator: "Art. 22 ust. 1 pkt 1–8",
        },
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("22", "Art. 22")} ust. 2 не застосовує підставу зміни обставин з ust. 1 pkt 1 до змін, названих у ${workLaw.article("18", "art. 18")} ust. 1. Ust. 3 не застосовує підставу ust. 1 pkt 6, якщо wojewoda отримав powiadomienie за ${workLaw.article("19", "art. 19")} pkt 1 або 2 із причинами та декларацією про використання zezwolenie за призначенням.`,
          sourceLocator: "Art. 22 ust. 2–3",
        },
      ],
      summary: workLaw.text`Uchylenie zezwolenie є наслідком конкретних змін, порушень, припинення підстави або втрати реальності роботи. Для організаційних змін ${workLaw.article("18", "art. 18")} та належного повідомлення про невикористання ${workLaw.article("19", "art. 19")} закон передбачає спеціальні застереження.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: workLaw.text`Серед підстав — зміна обставин/доказів, неправдиві дані чи документи, припинення причини дозволу, невідповідність cudzoziemiec вимогам ${workLaw.article("16", "art. 16")} та невиконання обов'язків ${workLaw.article("17", "art. 17")} ust. 4–5.`,
        },
        {
          locator: "ust. 1 pkt 6–8",
          explanation: workLaw.text`Підставами є інформація ${workLaw.article("19", "art. 19")}, чинний wpis до wykaz небажаних осіб та відсутність у podmiot діяльності, що обґрунтовує powierzenie роботи, включно з призупиненням, викресленням або ліквідацією.`,
        },
        {
          locator: "ust. 2–3",
          explanation: workLaw.text`Зміни з ${workLaw.article("18", "art. 18")} ust. 1 не запускають ust. 1 pkt 1. Powiadomienie за ${workLaw.article("19", "art. 19")} pkt 1 або 2 із причинами та декларацією про подальше використання дозволу може виключити підставу ust. 1 pkt 6.`,
        },
      ],
      legalEffect:
        "Uchylenie припиняє дозвіл на роботу в межах рішення, але саме по собі не є рішенням про legalny pobyt. Після нього потрібно окремо встановити, чи залишилася інша підстава перебування та роботи.",
      foreignersCase: workLaw.text`Прочитайте конкретний пункт ${workLaw.article("22", "art. 22")} у decyzja й встановіть дату ostateczność. Перевірте факти, на яких він ґрунтується, повідомлення та докази роботи; не припускайте, що чинна karta pobytu автоматично зберігає дозвіл на роботу.`,
    },
  ],
})
