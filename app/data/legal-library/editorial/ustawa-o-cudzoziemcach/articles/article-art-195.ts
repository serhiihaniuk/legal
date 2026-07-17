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
      provisionId: "ustawa-o-cudzoziemcach-art-195",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} передбачає надання zezwolenia na pobyt stały на czas nieoznaczony на wniosek, зокрема дитині особи з pobyt stały або pobyt rezydenta długoterminowego UE, дитині obywatela polskiego, особі польського походження, визначеному подружжю obywatela polskiego, жертві handlu ludźmi, особі з установленим строком безперервного перебування, особі з azyl або Kartą Polaka, а також визначеному громадянину UK.`,
          sourceLocator: "Art. 195 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 7 є uchylony; для окремих підстав стаття встановлює додаткові вимоги щодо доходу, ubezpieczenie, співпраці з органами, наміру оселитися та безперервності pobytu. Періоди переривання загалом не можуть перевищувати 6 місяців кожен і 10 місяців разом, із названими винятками.`,
          sourceLocator: "Art. 195 ust. 1 pkt 5–10, ust. 2–4",
        },
      ],
      summary:
        "Стаття містить вичерпні спеціальні підстави для pobyt stały та умови для кожної з них; pkt 7 прямо uchylony.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Спершу встановіть категорію заявника: дитина, подружжя, osoba polskiego pochodzenia або жертва handlu ludźmi має довести саме умови відповідного пункту.",
        },
        {
          locator: "ust. 1 pkt 6, 8–10",
          explanation:
            "Строки 4, 5 або 10 років, azyl, Karta Polaka та режим Umowa Wystąpienia мають різні додаткові умови; не змішуйте їх між собою.",
        },
        {
          locator: "ust. 2–4",
          explanation: foreignersLaw.text`Доходи для названих випадків рахуються за ${foreignersLaw.article("140", "art. 140")} ust. 2, а безперервність оцінюється за правилами про допустимі перерви та їхні винятки.`,
        },
      ],
      legalEffect:
        "Наявність родинного зв’язку, польського походження або потрібного строку сама по собі не гарантує zezwolenia: мають бути виконані всі умови конкретної підстави та не діяти підстави відмови.",
      foreignersCase:
        "Складіть доказову таблицю для обраного pkt 1–10: статус або родинний зв’язок, строки й безперервність pobytu, dochód, ubezpieczenie та інші прямо названі документи; pkt 7 не використовуйте як чинну підставу.",
    },
  ],
})
