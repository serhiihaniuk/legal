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
      provisionId: "ustawa-o-cudzoziemcach-art-158",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("158", "Art. 158")} ust. 1 передбачає обов'язкове udzielenie zezwolenia na pobyt czasowy члену сім'ї obywatel Rzeczypospolitej Polskiej у двох випадках; ust. 2–3 регулюють kolejnego zezwolenia після визначених сімейних подій і максимальний строк.`,
          sourceLocator: "Art. 158 ust. 1–3",
        },
      ],
      summary:
        "Спеціальна підстава охоплює подружжя громадянина Польщі та визначену неповнолітню дитину, а також одноразовий дозвіл після окремих сімейних подій.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Заявник має перебувати у шлюбі, визнаному правом Польщі, з obywatel Rzeczypospolitej Polskiej; інший або невизнаний польським правом зв'язок не відповідає цьому пункту.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Йдеться про małoletnie dziecko cudzoziemiec, який перебуває у визнаному польським правом шлюбі з громадянином Польщі та має сімейний pobyt czasowy або pobyt stały, наданий у зв'язку з цим шлюбом.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Kolejne zezwolenie надається після rozwód або separacja подружжю з ust. 1 pkt 1, якщо цього вимагає його ważny interes; після owdowienie такого подружжя окрема вимога про важливий інтерес не вказана; після смерті батька дитини з ust. 1 pkt 2 потрібен важливий інтерес дитини.",
        },
        {
          locator: "ust. 3",
          explanation:
            "У випадках ust. 2 дозвіл надається один раз і не довше ніж на 3 роки; це не означає безстрокове або автоматичне продовження.",
        },
      ],
      legalEffect:
        "За виконання фактичного складу стаття є спеціальною підставою для udzielenie, але наступне zezwolenie має обмеження ust. 2–3 і оцінюється в межах повного провадження.",
      foreignersCase:
        "Визначте, чи справа стосується подружжя, дитини або kolejnego zezwolenia; додайте акт цивільного стану, докази статусу польського громадянина та, після розлучення чи смерті, докази саме важливого інтересу, якщо він потрібен.",
    },
  ],
})
