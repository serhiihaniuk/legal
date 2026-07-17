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
      provisionId: "ustawa-o-cudzoziemcach-art-337",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("337", "Art. 337")} визначає, хто несе koszty з ${foreignersLaw.article("336", "Art. 336")}: за загальним правилом cudzoziemiec, а в окремих випадках zapraszający, podmiot powierzający pracę або функцію, jednostka naukowa чи organizator stażu.`,
          sourceLocator: "Art. 337 ust. 1–6",
        },
      ],
      summary:
        "Витрати примусового повернення зазвичай покладаються на іноземця, але закон переносить їх на запрошуючого, роботодавця або приймаючу установу в чітко визначених ситуаціях.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Cudzoziemiec є основним боржником; zapraszający відповідає, коли іноземець прибув у період zaproszenie і підстави повернення виникли в охоплений законом час.",
        },
        {
          locator: "ust. 3–4",
          explanation: foreignersLaw.text`Podmiot powierzający pracę cudzoziemcowi або pełnienie określonej funkcji несе витрати у зв’язку з ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 4; якщо таких суб’єктів кілька, вони відповідають solidarnie.`,
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Jednostka naukowa або organizator stażu несе витрати, якщо decyzja була видана й виконана протягом 6 місяців після завершення відповідної угоди, а підставою було перебування без чинної візи (якщо потрібна) або іншого чинного документа, що дає право на wjazd і pobyt.",
        },
      ],
      legalEffect:
        "Відповідальність третьої особи залежить від усіх фактичних умов конкретного пункту; сам факт запрошення, роботи або стажу не є достатнім без перевірки норми.",
      foreignersCase: foreignersLaw.text`Зіставте decyzja, підставу з ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 4, період zaproszenie або umowa та дані всіх podmiotów; не припускайте солідарну відповідальність поза ${foreignersLaw.article("337", "Art. 337")}.`,
    },
  ],
})
