import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-59",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 59 зобов'язує podmiot, який забезпечує zakwaterowanie сезонному працівнику, укласти окрему письмову umowa і забороняє автоматичне утримання czynsz із wynagrodzenie.",
          sourceLocator: "Art. 59 ust. 1–6",
        },
      ],
      summary:
        "Umowa najmu або użyczenia kwatery має бути окремою, письмовою і перекладеною зрозумілою для cudzoziemiec мовою. Czynsz не можна автоматично відраховувати, а його розмір не має бути надмірним щодо netto wynagrodzenie, стандарту та ринкових ставок.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Потрібна окрема письмова umowa про умови najmu або użyczenia; перед підписанням podmiot надає переклад зрозумілою мовою.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Автоматичне утримання czynsz із заробітку заборонене, а положення про нього є nieważne. Czynsz не може бути wygórowany з огляду на netto wynagrodzenie, стандарт і ринок.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Cudzoziemiec може повідомити starostę про невідповідність kwatera умовам для перебування людей; starosta передає повідомлення органам будівельного контролю.",
        },
      ],
      legalEffect:
        "Норма захищає окремість житлових умов і фактичне отримання заробітку, але не робить будь-яку kwatera автоматично відповідною — її стан оцінюється компетентними органами.",
      foreignersCase:
        "До підписання отримайте переклад umowa, перевірте спосіб оплати czynsz і збережіть докази. За небезпечних умов повідомте starostę, який видав сезонне zezwolenie.",
    },
  ]),
})
