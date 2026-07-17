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
      provisionId: "powierzanie-pracy-art-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("2", "Art. 2")} pkt 1–9 визначає для ustawy поняття cudzoziemiec, nielegalne powierzenie роботи, nielegalne wykonywanie роботи, podmiot powierzający pracę cudzoziemcowi, podmiot zagraniczny, polski podmiot powierzający pracę cudzoziemcowi, pracodawca użytkownik, pracownik tymczasowy та саме powierzanie pracy cudzoziemcowi.`,
          sourceLocator: "Art. 2 pkt 1–9",
        },
      ],
      summary:
        "Дефініції показують, що незаконність може стосуватися різних ланок: pobyt, підстави pobytu, zezwolenie або oświadczenie, умов чи stanowisko роботи та письмової umowa. Окремо визначено, хто є podmiot і які форми роботи входять до powierzenie pracy.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Cudzoziemiec — кожен, хто не має польського громадянства. Nielegalne powierzenie та nielegalne wykonywanie роботи охоплюють, зокрема, незаконний pobyt, відсутність uprawnienia з підстави pobytu та відсутність потрібного zezwolenia або oświadczenia; для powierzenie також важливі умови, stanowisko й письмова umowa.",
        },
        {
          locator: "pkt 4–8",
          explanation:
            "Podmiot powierzający може бути організаційною одиницею або фізичною особою; закон розрізняє podmiot zagraniczny, polski podmiot, pracodawca użytkownik та pracownik tymczasowy.",
        },
        {
          locator: "pkt 9 lit. a–f",
          explanation:
            "Powierzenie охоплює роботу за stosunek pracy, stosunek służbowy, umowę o pracę nakładczą, цивільні договори, окремі функції в органах і spółkach, prokurę та роботу в межах delegowanie.",
        },
      ],
      legalEffect:
        "Ці визначення є кваліфікаційною рамкою для перевірки порушення, але не створюють самостійного дозволу на роботу чи право перебування. Наявність legalnego pobytu не усуває можливого браку zezwolenia або невідповідності його умовам.",
      foreignersCase:
        "Складіть окремі колонки: legalny pobyt, підстава pobytu, zezwolenie/oświadczenie, умови й stanowisko, письмова umowa. Лише після цього кваліфікуйте, чи є powierzenie або wykonywanie роботи nielegalne.",
    },
  ],
})
