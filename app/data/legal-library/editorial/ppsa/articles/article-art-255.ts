import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-255",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 255 зобов’язує сторону на wezwanie і в закреслений строк подати додаткове oświadczenie або źródłowe dokumenty про stan majątkowy, dochody чи stan rodzinny, якщо дані у wniosek за Art. 252 недостатні для оцінки фактичного стану і можливості платежу або викликають сумніви.",
          sourceLocator: "Art. 255",
        },
      ],
      summary:
        "Якщо початкова заява не дає змоги оцінити платоспроможність або викликає сумніви, суд може вимагати додаткові пояснення чи первинні документи.",
      rules: [
        {
          locator: "Art. 255",
          explanation:
            "Прочитайте wezwanie разом із визначеним строком і вкажіть, чи потрібно подати додаткове oświadczenie, źródłowe dokumenty або обидва типи матеріалів.",
        },
        {
          locator: "Art. 255",
          explanation:
            "Матеріали мають стосуватися фактичного стану майна, доходів, можливості платежу або стану сім’ї; не замінюйте їх загальним описом фінансових труднощів.",
        },
      ],
      legalEffect:
        "Невиконання wezwanie може перешкодити оцінці заяви про prawo pomocy та спричинити передбачені процедурою наслідки, але Art. 255 сам визначає обов’язок надати дані, а не автоматичну відмову.",
      foreignersCase:
        "У справі іноземця підготуйте документи про доходи й рахунки в Польщі та за кордоном лише в обсязі, якого вимагає wezwanie, і переконайтеся, що відповідь подано в строк. Не ігноруйте запит через те, що частина документів іноземною мовою: поясніть їх походження та вимоги до подання.",
    },
  ]),
})
