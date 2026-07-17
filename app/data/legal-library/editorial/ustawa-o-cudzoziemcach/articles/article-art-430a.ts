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
      provisionId: "ustawa-o-cudzoziemcach-art-430a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("430a", "Art. 430a")}: «Dane w rejestrach ... przechowuje się przez okres 10 lat» від визначених у статті дат для кожного випадку з візою.`,
          sourceLocator: "Art. 430a pkt 1–4",
        },
        {
          kind: "practical-inference",
          text: "Початкова дата десяти років залежить від результату візової справи, тому її не можна визначати лише від дати подання wniosek.",
          sourceLocator: "Art. 430a pkt 1–4",
        },
      ],
      summary:
        "Дані у rejestr spraw dotyczących wiz зберігаються 10 років, але початок строку залежить від виданої візи, недопустимості або відкликання wniosek, остаточної відмови чи рішення про продовження, скасування або unieważnienie.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Якщо візу видано, строк рахується від останнього дня її чинності.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Для недопустимого, відкликаного або не розглянутого по суті wniosek строк рахується від подання; для остаточної відмови — від рішення, а після судового оскарження від prawomocne orzeczenie.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Для decyzja про продовження, cofnięcie або unieważnienie візи строк рахується від остаточного рішення, з аналогічним правилом після судового оскарження.",
        },
      ],
      legalEffect:
        "Стаття встановлює строк зберігання конкретної категорії візових даних і різні dies a quo. Вона не є загальним строком зберігання всіх даних іноземця.",
      foreignersCase:
        "Визначте результат візової процедури та дату, з якої закон рахує строк; якщо рішення оскаржувалось, перевірте дату prawomocne orzeczenie.",
    },
  ],
})
