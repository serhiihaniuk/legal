import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-374",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej повідомляє центральний орган іншої держави-члена про відмову або cofnięcie дозволу на tranzyt, а коли причиною є неможливість допомоги іншій державі — також про найближчий строк, коли tranzyt буде можливим.",
          sourceLocator: "Art. 374 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Зміст повідомлення залежить від причини odmowa або cofnięcie; інформація про найближчий можливий строк прямо прив’язана до відсутності можливості надати допомогу.",
          sourceLocator: "Art. 374 pkt 1–2",
        },
      ],
      summary:
        "Стаття визначає, яку інформацію Komendant Główny Straży Granicznej передає іншій державі після відмови або відкликання дозволу на tranzyt.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Повідомляється сам факт odmowa udzielenia zezwolenia або cofnięcie zezwolenia.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Якщо проблема полягає в неможливості допомоги, повідомляється також найближчий можливий строк проведення tranzyt.",
        },
      ],
      legalEffect:
        "Норма забезпечує продовження координації після негативного рішення. Вона не перетворює інформацію про майбутню можливість на вже наданий дозвіл.",
      foreignersCase:
        "Перевірте, чи в повідомленні названо причину відмови або відкликання і, коли застосовно, найближчий можливий строк. Не плутайте це повідомлення з рішенням щодо вашого pobyt.",
    },
  ]),
})
