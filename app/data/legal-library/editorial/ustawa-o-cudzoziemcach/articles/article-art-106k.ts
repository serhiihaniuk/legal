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
      provisionId: "ustawa-o-cudzoziemcach-art-106k",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106k", "Art. 106k")} встановлює паперовий порядок для zezwolenia na pobyt czasowy з ${foreignersLaw.article("139a", "Art. 139a")} ust. 1 та ${foreignersLaw.article("139o", "Art. 139o")} ust. 1: wniosek подає jednostka przyjmująca, а не сам іноземець.`,
          sourceLocator: "Art. 106k ust. 1–7",
        },
      ],
      summary:
        "Це спеціальна процедура для внутрішньокорпоративного переведення. Її логіка починається з ролі приймаючої одиниці та доказів зв’язку між нею, роботодавцем за межами Польщі й роботою іноземця.",
      rules: [
        {
          locator: "Art. 106k ust. 1–3",
          explanation:
            "Паперова форма охоплює дані іноземця, jednostki przyjmującej, pracodawcy macierzystego, запланованої роботи, кваліфікацій, попередніх переведень і законних перешкод. Уповноважена особа підписує передбачені oświadczenia, а правдивість даних підтверджує під загрозою кримінальної відповідальності з установленою klauzulą.",
        },
        {
          locator: "Art. 106k ust. 4–5",
          explanation:
            "До wniosku додають копію чинного документа подорожі, актуальну фотографію та документи, які підтверджують дані й умови конкретного дозволу.",
        },
        {
          locator: "Art. 106k ust. 6–7",
          explanation:
            "Якщо бракує доказів, wojewoda дає щонайменше 14 днів і враховує час їх одержання. Коли wezwanie об’єднане з усуненням braków formalnych або сплатою opłaty skarbowej, доказовий строк не може бути коротшим за найдовший із установлених строків.",
        },
      ],
      legalEffect:
        "Правильним заявником і носієм процесуальних обов’язків щодо wniosku є jednostka przyjmująca. Помилка в цій ролі або неповний корпоративний зв’язок може зупинити справу до оцінки самого іноземця.",
      foreignersCase:
        "Побудуйте один ланцюг доказів: pracodawca macierzysty → powiązanie → jednostka przyjmująca → конкретне stanowisko й строк переведення. Окремо перевірте повноваження особи, яка підписує oświadczenia.",
    },
  ],
})
