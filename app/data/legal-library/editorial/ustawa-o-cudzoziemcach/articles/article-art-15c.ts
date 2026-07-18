import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-15c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} ust. 1 дозволяє Szef Urzędu do Spraw Cudzoziemców та wojewoda, у межах необхідних для завдань цієї ustawa та ustawy o wjeździe na terytorium RP obywateli państw UE i ich rodzin, отримувати із системи teleinformatyczny Straży Granicznej інформацію про przekraczanie кордону, з використанням системи за ${foreignersLaw.article("449", "art. 449 ust. 1")}. Умовами є ідентифікація та реєстрація доступу й обсягу/дати даних за pkt 1 та технічні й організаційні zabezpieczenia за pkt 2.`,
          sourceLocator: "Art. 15c ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} ust. 2 надає minister właściwy do spraw zagranicznych та konsul аналогічну можливість отримувати необхідну інформацію про przekraczanie кордону лише для проваджень щодо wydania, cofnięcia або unieważnienia wizy; для них так само діють умови pkt 1–2.`,
          sourceLocator: "Art. 15c ust. 2 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Доступ до даних про перетин кордону є інструментом конкретного провадження та має обмежуватися необхідним обсягом. Запис системи не є самостійним документом на legalny pobyt або право на працю.",
          sourceLocator: "Art. 15c ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("15c", "Art. 15c")} регулює контрольований доступ визначених органів до даних Straż Graniczna про przekraczanie кордону: для справ за ustawa — Szef Urzędu та wojewoda, для візових справ — minister właściwy та konsul.`,
      rules: [
        {
          locator: "Art. 15c ust. 1",
          explanation:
            "У справі за ustawa або за законом про громадян UE орган може отримувати лише інформацію, потрібну для конкретного завдання, а не необмежений масив даних.",
        },
        {
          locator: "Art. 15c ust. 1 pkt 1–2",
          explanation:
            "Система повинна реєструвати особу, яка отримує доступ, обсяг і дату наданих даних; орган також повинен застосовувати zabezpieczenia poufności, integralności, dostępności та autentyczności.",
        },
        {
          locator: "Art. 15c ust. 2",
          explanation:
            "Для minister właściwy do spraw zagranicznych і konsul доступ обмежений провадженнями про wydanie, cofnięcie або unieważnienie wizy та тими самими умовами безпеки.",
        },
      ],
      legalEffect:
        "Стаття визначає законний канал і межі отримання інформації, але не перетворює дані Straż Graniczna на рішення про wjazd, pobyt, wiza або wykonywanie pracy.",
      foreignersCase:
        "Уточніть орган, вид провадження, правову мету запиту та який саме перетин кордону перевіряється. Порівняйте отримані дані з документами й іншими фактами; не ототожнюйте системний запис із дозволом або остаточним висновком.",
    },
  ]),
})
