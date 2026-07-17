import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-320",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 320 дозволяє organ, який у першій інстанції видав decyzja o zobowiązaniu do powrotu, на wniosek cudzoziemca cofnięcie zakazu, якщо особа доведе виконання обов’язків, обґрунтовані обставини повторного в’їзду, зокрема гуманітарні, або надання допомоги в dobrowolny powrót; ust. 1a вимагає врахувати обставини первісного рішення та майбутнього в’їзду, а ust. 2–3 встановлюють перешкоди й гуманітарний виняток.",
          sourceLocator: "Art. 320 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає підстави і перешкоди для скасування заборони повторного в’їзду за заявою іноземця.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation:
            "Wniosek подається organ першої інстанції; оцінюються обставини первісного рішення та причина майбутнього в’їзду.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Перешкодами є загроза обороні, безпеці, порядку або інтересу Польщі, несплачені витрати, новий zakaz, винесений після рішення про cofnięcie, якщо від цього рішення не минуло 2 роки, або несплив половини строку zakaz.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Для гуманітарного в’їзду обмеження щодо двох років і половини строку не застосовуються.",
        },
      ],
      legalEffect:
        "Cofnięcie zakazu оформлюється рішенням після оцінки доказів і винятків; сама подача wniosku не означає автоматичного скасування.",
      foreignersCase:
        "Додайте до wniosku доказ виїзду, сплати витрат і конкретної мети в’їзду; перевірте дату попереднього рішення та чи не існує нової заборони.",
    },
  ]),
})
