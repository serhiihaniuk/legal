import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-256",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 256 уповноважує Rada Ministrów у rozporządzenie визначити wzór і спосіб udostępniania urzędowy formularz для wniosek за Art. 252 § 2, його pouczenie та наслідки недотримання вимог, включно з clausula за Art. 252 § 1a, а також rodzaje źródłowe dokumenty за Art. 255 і періоди, за які документуються майно, доходи та стан сім’ї. Стаття як приклади називає податкові декларації, виписки з банківських рахунків і валютних рахунків та депозитів, витяги з реєстрів, актуальні bilanse і довідки про винагороду та виплати.",
          sourceLocator: "Art. 256 pkt 1–2",
        },
      ],
      summary:
        "Стаття передає до rozporządzenie технічні правила formularz і перелік та часовий обсяг джерельних документів для перевірки права допомоги.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Для форми wniosku перевіряйте актуальний urzędowy formularz, спосіб його udostępniania, pouczenie та обов’язкову clausula; сам Art. 256 не є заповненою формою.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Rozporządzenie визначає види документів і періоди, за які їх треба подати. У тексті статті як приклади наведені податкові документи, банківські виписки, реєстрові витяги, aktualne bilanse та довідки про доходи й świadczenia.",
        },
      ],
      legalEffect:
        "Art. 256 створює нормативну основу для деталізації formularz і доказів, але не звільняє сторону від обов’язку подати правдиві дані та виконати конкретне wezwanie.",
      foreignersCase:
        "Іноземцю перевірте, який саме formularz і період документів вимагає чинне rozporządzenie, особливо для рахунків у валюті та доходів за межами Польщі. Не виводьте повний перелік обов’язкових документів лише з прикладів у Art. 256.",
    },
  ]),
})
