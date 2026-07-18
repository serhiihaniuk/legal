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
      provisionId: "ustawa-o-cudzoziemcach-art-347c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347c", "Art. 347c")} вимагає aktualizacja wpisu даних у SIS у випадках odwołanie, продовження строку виїзду, wstrzymanie виконання, невиконання за ${foreignersLaw.article("330", "Art. 330")} та окремих рішень органу або sąd administracyjny.`,
          sourceLocator: "Art. 347c ust. 1–3",
        },
      ],
      summary:
        "Запис у SIS не є незмінним: його статус має оновлюватися, коли оскаржено рішення, продовжено добровільний виїзд, зупинено виконання або виникли інші передбачені обставини.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Оновлення робиться після wniesienia odwołanie від рішення, що не підлягає негайному виконанню (pkt 1), рішення другої інстанції про залишення рішення в силі (pkt 2), а також після продовження terminu dobrowolnego wyjazdu першою або другою інстанцією (pkt 3–4).",
        },
        {
          locator: "ust. 1 pkt 5–7",
          explanation: foreignersLaw.text`Підставами також є wstrzymanie виконання органом або судом, невиконання рішення за ${foreignersLaw.article("330", "Art. 330")} ust. 1 та скасування або stwierdzenie nieważności рішення другої інстанції.`,
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Правило про wstrzymanie діє також після скасування судового postanowienie або втрати wstrzymanie чинності; правило про ${foreignersLaw.article("330", "Art. 330")} застосовується, коли decyzja залишена в силі, але не підлягає виконанню на підставі ${foreignersLaw.article("330", "Art. 330")} ust. 1.`,
        },
      ],
      legalEffect:
        "Оновлення SIS відображає процесуальний статус рішення, але саме по собі не скасовує decyzja o powrocie і не продовжує законний побут поза іншою підставою.",
      foreignersCase:
        "Після odwołanie або postanowienie про wstrzymanie збережіть документ і перевірте, чи передано його органу для aktualizacja SIS; окремо перевірте підставу легального pobyt.",
    },
  ],
})
