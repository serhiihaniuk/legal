import { defineEditorialPart } from "../../define-editorial-part"

import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-299",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("299", "Art. 299")} встановлює різні обов’язки виїзду: до завершення періоду pobytu та чинності wizy, у строки bezwizowy pobyt, до завершення zezwolenia na pobyt czasowy, а для особи з дозволом іншої держави, що застосовує dyrektywę 2008/115/WE, — niezwłocznie до цієї держави; у названих випадках передбачено 30 днів від ostateczność або doręczenie decyzja чи 7 днів після припинення перешкод із ${foreignersLaw.article("31", "Art. 31")} ust. 1, причому pobyt у період ${foreignersLaw.article("299", "Art. 299")} ust. 6 є legalny за умовами ust. 7 та винятків ust. 8–9.`,
          sourceLocator: "Art. 299 ust. 1–11",
        },
      ],
      summary:
        "Стаття визначає, коли іноземець повинен виїхати, і коли після окремих рішень його pobyt тимчасово вважається legalny.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation:
            "За ust. 1 виїзд має відбутися до завершення періоду pobytu та чинності wizy; за ust. 1a особа з дозволом іншої держави, що застосовує dyrektywę 2008/115/WE, яка не відповідає польським умовам, повинна niezwłocznie виїхати до держави, що видала дозвіл.",
        },
        {
          locator: "ust. 2–5",
          explanation:
            "За bezwizowy pobyt виїзд має відбутися до строку, встановленого угодою, одностороннім скасуванням або розпорядженням; після припинення угоди чи відновлення візового обов’язку ust. 3–4 передбачають строк не пізніше 3 місяців від відповідної події, а якщо подія сталася до офіційного оголошення — від дня оголошення. Ust. 5 стосується закінчення zezwolenia na pobyt czasowy.",
        },
        {
          locator: "ust. 6–7",
          explanation: foreignersLaw.text`Для перелічених рішень діє 30 днів від ostateczność, а якщо рішення видав organ wyższego stopnia — від його doręczenie; після припинення перешкод із ${foreignersLaw.article("31", "Art. 31")} ust. 1 діє 7 днів. За ust. 6a окремий 30-денний строк рахується від завершення максимального періоду ochrony czasowej. Pobyt у періодах ust. 6 і 6a вважається legalny за умовами ust. 7.`,
        },
        {
          locator: "ust. 8–11",
          explanation:
            "Ust. 8 встановлює винятки за наявності чинного документа або іншої законної підстави pobytu; ust. 8a і 9 обмежують застосування правил до окремих справ про повернення, затримання та kolejny wniosek. За ust. 10 органи повідомляють Straż Graniczna, а за ust. 11 цей орган перевіряє підстави для decyzja o zobowiązaniu do powrotu.",
        },
      ],
      legalEffect:
        "Норма визначає обов’язок виїзду, включно з 30 днями після завершення максимального періоду ochrony czasowej, та спеціальні періоди, коли pobyt вважається legalny; потрібно перевірити тип документа, дату події, дату вручення і своєчасність заяви.",
      foreignersCase:
        "Складіть хронологію в’їзду, строку wizy або bezwizowy pobyt, заяв, doręczenie рішення та, якщо застосовно, завершення ochrony czasowej. Для 30- або 7-денного строку встановіть ust. 6 чи 6a і початкову дату; окремо перевірте легальність за ust. 7 та винятки ust. 8–9.",
    },
  ]),
})
