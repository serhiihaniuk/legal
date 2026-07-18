import { defineEditorialPart } from "../../define-editorial-part"

import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-398a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Іноземця umieszcza się в strzeżony ośrodek, коли ймовірність рішення про powrót без строку dobrowolny wyjazd випливає з ${foreignersLaw.article("315", "art. 315")} ust. 2 pkt 2; коли вже видане з тієї самої підстави рішення без такого строку треба забезпечити до виконання; коли потрібно забезпечити передачу до państwo trzecie; або коли наявний випадок ${foreignersLaw.article("398", "art. 398")} ust. 1 і альтернативні заходи неможливі чи не виконуються.`,
          sourceLocator: "Art. 398a pkt 1–4",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Для випадку з ${foreignersLaw.article("398", "art. 398")} ust. 1 треба окремо перевірити, чому заходи з ${foreignersLaw.article("398", "art. 398")} ust. 2 неможливі або які саме обов’язки не були виконані.`,
          sourceLocator: "Art. 398a pkt 4 lit. a–b",
        },
      ],
      summary:
        "Стаття визначає випадки розміщення іноземця в strzeżony ośrodek, зокрема коли альтернативні заходи не працюють або передача до третьої держави не може відбутися негайно.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation: foreignersLaw.text`У pkt 1 і pkt 2 закон двічі вимагає зв’язку з обставиною ${foreignersLaw.article("315", "art. 315")} ust. 2 pkt 2: відповідно для ймовірного майбутнього рішення та для вже виданого рішення без строку dobrowolnego wyjazdu. Pkt 3 стосується неможливої негайно передачі за міжнародною угодою.`,
        },
        {
          locator: "pkt 4 lit. a–b",
          explanation: foreignersLaw.text`Коли є одна з підстав ${foreignersLaw.article("398", "art. 398")} ust. 1, strzeżony ośrodek пов’язаний з неможливістю альтернатив або невиконанням обов’язків за ними.`,
        },
      ],
      legalEffect:
        "Норма визначає підстави більш обмежувального розміщення. Висновок має спиратися на конкретний ризик, неможливість негайної передачі або невиконання альтернатив, а не лише на факт нерегулярного pobyt.",
      foreignersCase: foreignersLaw.text`Порівняйте факти з кожним пунктом ${foreignersLaw.article("398a", "art. 398a")} і з’ясуйте, чи розглядалися заходи ${foreignersLaw.article("398", "art. 398")} ust. 2. Попросіть відокремити доказ ризику від загального опису справи.`,
    },
  ]),
})
