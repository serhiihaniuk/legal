import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-440",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("440", "Art. 440")} ust. 1: «Umieszczenia danych cudzoziemca w wykazie, przedłużenia okresu obowiązywania wpisu lub usunięcia tych danych z wykazu dokonuje Szef Urzędu».`,
          sourceLocator: "Art. 440 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Ініціатива одного з перелічених органів не дорівнює самому wpis: рішення про внесення, продовження або видалення приймає Szef Urzędu за правилами статті.",
          sourceLocator: "Art. 440 ust. 1–4",
        },
      ],
      summary:
        "Szef Urzędu вносить, продовжує або видаляє дані з wykaz з власної ініціативи або на wniosek визначених органів; за неврахування wniosek заявник може звернутися до ministra właściwego do spraw wewnętrznych.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wniosek можуть подати перелічені органи, зокрема MON, minister spraw zagranicznych, Policja, Straż Graniczna, ABW, AW, KAS, IPN та wojewoda; pkt 2 позначений як «uchylony».",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Якщо Szef Urzędu не врахує wniosek, заявник може звернутися до ministra; при врахуванні minister nakazuje відповідну дію Szef Urzędu.",
        },
        {
          locator: "ust. 4",
          explanation:
            "У випадку санкційного списку Szef Urzędu вносить або видаляє дані з власної ініціативи за змінами списку чи заходу.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття визначає компетентний орган і внутрішній механізм ініціювання wpis, продовження або видалення. Вона не замінює матеріальну підставу з ${foreignersLaw.article("435", "Art. 435")} чи ${foreignersLaw.article("440a", "Art. 440a")}.`,
      foreignersCase:
        "Встановіть, хто ініціював дію, яку саме дію зробив Szef Urzędu та на якій підставі; не ототожнюйте wniosek органу з остаточним розпорядженням про wpis.",
    },
  ],
})
