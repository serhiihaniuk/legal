import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "189l",
      provisionId: "kpa-art-189l",
      reviewStatus: "reviewed",
      summary:
        "Норма дозволяє органу з уряду списати адміністративну грошову санкцію або відсотки, коли стягнення фактично безперспективне, боржника ліквідовано після банкрутства або сума є мінімальною. Для підприємців зберігаються обмеження державної допомоги.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Списання можливе, коли є обґрунтоване припущення, що egzekucja не дасть суми більшої за витрати, через відсутність майна чи доходів понад захищений мінімум.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Інші підстави — несплата в завершеній ліквідації або банкрутстві та сума, що не перевищує п'ятикратної вартості upomnienia в адміністративній egzekucji.",
        },
        {
          locator: "§ 2–3",
          explanation: kpaLaw.text`До відсотків застосовується пропорційне правило ${kpaLaw.article("189k", "art. 189k § 2")}; щодо ліквідованої чи банкрутної особи decyzję pozostawia się w aktach ze skutkiem doręczenia.`,
        },
        {
          locator: "§ 4",
          explanation:
            "Для підприємця списання обмежене правилами de minimis та іншої передбаченої законом державної допомоги.",
        },
      ],
      legalEffect:
        "Орган може припинити вимагати всю або частину санкції та відсотків без заяви сторони, але лише за однієї з прямо названих підстав.",
      foreignersCase:
        "Це загальне правило виконання санкцій. У справі підприємства, пов'язаній із працею іноземців, воно має значення після накладення administracyjnej kary pieniężnej, якщо стягнення стало об'єктивно безрезультатним або сума відповідає порогу статті.",
    },
  ],
})
