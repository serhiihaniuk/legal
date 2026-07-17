import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-398a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Іноземця umieszcza się в strzeżony ośrodek, коли є ризик рішення про powrót без строку dobrowolny wyjazd за art. 315 ust. 2 pkt 1, необхідність забезпечити таке рішення, необхідність забезпечити передачу до państwo trzecie або коли наявна справа art. 398 ust. 1 і альтернативні заходи неможливі чи не виконуються.",
          sourceLocator: "Art. 398a pkt 1–4",
        },
        {
          kind: "practical-inference",
          text: "Для випадку з art. 398 ust. 1 треба окремо перевірити, чому заходи з art. 398 ust. 2 неможливі або які саме обов’язки не були виконані.",
          sourceLocator: "Art. 398a pkt 4 lit. a–b",
        },
      ],
      summary:
        "Стаття визначає випадки розміщення іноземця в strzeżony ośrodek, зокрема коли альтернативні заходи не працюють або передача до третьої держави не може відбутися негайно.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Підставами є визначені ризики щодо powrót без строку, потреба забезпечити рішення або передачу до państwo trzecie за міжнародною угодою.",
        },
        {
          locator: "pkt 4 lit. a–b",
          explanation:
            "Коли є одна з підстав art. 398 ust. 1, strzeżony ośrodek пов’язаний з неможливістю альтернатив або невиконанням обов’язків за ними.",
        },
      ],
      legalEffect:
        "Норма визначає підстави більш обмежувального розміщення. Висновок має спиратися на конкретний ризик, неможливість негайної передачі або невиконання альтернатив, а не лише на факт нерегулярного pobyt.",
      foreignersCase:
        "Порівняйте факти з кожним пунктом art. 398a і з’ясуйте, чи розглядалися заходи art. 398 ust. 2. Попросіть відокремити доказ ризику від загального опису справи.",
    },
  ]),
})
