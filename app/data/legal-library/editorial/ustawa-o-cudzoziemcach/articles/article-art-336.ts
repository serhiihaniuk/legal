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
      provisionId: "ustawa-o-cudzoziemcach-art-336",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("336", "Art. 336")} передбачає встановлення kosztów wydania i wykonania decyzji o zobowiązaniu cudzoziemca do powrotu, якщо рішення підлягає примусовому виконанню, та їх визначення окремою decyzja.`,
          sourceLocator: "Art. 336 ust. 1–3",
        },
      ],
      summary:
        "Коли рішення про повернення виконують примусово, орган визначає пов’язані з ним витрати та осіб, які мають їх покрити.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation: foreignersLaw.text`Витрати встановлюються для рішення, що підлягає przymusowe wykonanie; їх не встановлюють, коли особі з ${foreignersLaw.article("334", "Art. 334")} ust. 2 pkt 2 надали допомогу в добровільному поверненні.`,
        },
        {
          locator: "ust. 2–2a",
          explanation:
            "Відповідний орган Straż Graniczna видає decyzja про суму та відповідальних суб’єктів. Рішення підлягає natychmiastowe wykonanie; за загальним правилом витрати визначають після остаточності рішення про повернення.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Належності за витратами przedawniają się через 5 років від кінця календарного року, в якому decyzja про суму стала остаточною.",
        },
      ],
      legalEffect: foreignersLaw.text`Окрема decyzja про витрати створює грошову вимогу, але її сума й відповідальна особа мають випливати з конкретного рішення та ${foreignersLaw.article("337", "Art. 337")}–${foreignersLaw.article("339", "339")}.`,
      foreignersCase:
        "Не змішуйте decyzja o powrocie з decyzja o kosztach: перевірте склад суми, дату остаточності, негайне виконання та строк odwołanie.",
    },
  ],
})
