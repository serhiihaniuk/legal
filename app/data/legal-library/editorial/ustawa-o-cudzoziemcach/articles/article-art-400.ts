import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-400",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienia про umieszczenie іноземця в strzeżony ośrodek або застосування areszt dla cudzoziemców не видаються, якщо це могло б створити небезпеку для його життя чи здоров’я або psychofizyczny стан дає підставу припускати, що він зазнав насильства.",
          sourceLocator: "Art. 400 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Стан здоров’я та ознаки насильства треба перевіряти доказами, а не загальним твердженням; стаття говорить про невидачу postanowienie в цій ситуації.",
          sourceLocator: "Art. 400 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює медичні та вразливіcні обмеження для первинного рішення про strzeżony ośrodek або areszt dla cudzoziemców.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Не видається postanowienie, якщо розміщення могло б поставити під загрозу життя або здоров’я іноземця.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Не видається postanowienie, коли psychofizyczny стан може обґрунтовувати припущення про пережите насильство.",
        },
      ],
      legalEffect:
        "Норма створює спеціальний бар’єр для видання postanowienie про ізоляційний захід. Для вже розміщеної особи питання звільнення треба додатково оцінювати за art. 406.",
      foreignersCase:
        "Надайте органу медичні документи, висновки та опис ознак насильства до розгляду питання про розміщення. Перевірте, чи суд і Straż Graniczna розглянули ці дані.",
    },
  ]),
})
