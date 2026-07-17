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
      provisionId: "powierzanie-pracy-art-36",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("36", "Art. 36")} ust. 1 охоплює zezwolenie для члена zarząd osoby prawnej або spółka kapitałowa w organizacji, особи, що веде справи чи представляє spółka komandytowa або komandytowo-akcyjna, та prokurent. За ust. 2 podmiot має мати в попередньому році дохід не нижчий за 12-кратне середнє місячне wynagrodzenie у województwo та щонайменше рік працевлаштовувати не менше двох працівників на czas nieokreślony і повний час; ust. 3 допускає майбутнє виконання умов, якщо podmiot доведе достатні кошти або дії.`,
          sourceLocator: "Art. 36 ust. 1 pkt 1–3, ust. 2 pkt 1–2 і ust. 3",
        },
      ],
      summary:
        "Стаття визначає, для яких корпоративних функцій потрібна спеціальна модель zezwolenie та які показники podmiot зазвичай має довести. Невиконання стандартних показників не виключає справу автоматично, якщо доведено реальну перспективу їх виконання за ust. 3.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Модель охоплює членство у zarząd, ведення справ або представництво визначених spółka та повноваження prokurent.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation: workLaw.text`Podmiot має підтвердити дохід за попередній рік не нижчий за 12-кратне актуальне середнє місячне wynagrodzenie у województwo та щонайменше двох польських працівників або осіб з ${workLaw.article("1", "art. 1")} ust. 4 pkt 6 чи ${workLaw.article("3", "art. 3")} ust. 1, прийнятих на czas nieokreślony і повний час протягом щонайменше року.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "За відсутності умов ust. 2 podmiot може довести, що його кошти або дії, зокрема інвестиції, transfer technologii, інновації чи створення місць праці, дозволять виконати їх у майбутньому.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("36", "Art. 36")} стосується умов спеціального zezwolenie на виконання функції й не надає сам по собі права перебування. Корпоративна функція та legalny pobyt мають бути перевірені окремо.`,
      foreignersCase:
        "Визначте точну функцію та зберіть документи про дохід, двох працівників і строки їх zatrudnienie або про майбутні дії podmiot. Не ототожнюйте wpis у KRS чи візу з дозволом на роботу.",
    },
  ],
})
