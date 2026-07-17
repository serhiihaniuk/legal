import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-109b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} ust. 1 передбачає, що після запиту іншої держави Schengen про konsultacje за ${foreignersLaw.external("art. 10 або art. 11 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}, якщо cudzoziemiec має zezwolenie na pobyt czasowy, відповідний wojewoda ustala, чи є підстави для cofnięcia цього zezwolenia.`,
          sourceLocator: "Art. 109b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} ust. 2–4 встановлює ланцюг повідомлень і строки: wojewoda протягом 10 днів повідомляє через Komendant Główny Policji про decyzja o cofnięciu або відсутність підстав; за неможливості вчасно діяти просить продовження максимум на 12 днів із uzasadnienie і передає інформацію за 2 дні до кінця продовженого строку, а Komendant Główny Policji передає її іншій державі протягом 14 днів або у продовжений строк.`,
          sourceLocator: "Art. 109b ust. 2–4",
        },
        {
          kind: "practical-inference",
          text: "Запит про konsultacje запускає перевірку та обмін інформацією, але не означає автоматичного cofnięcie zezwolenia. Реальний статус побytu і право на працю треба встановлювати за decyzja та окремими матеріальними правилами.",
          sourceLocator: "Art. 109b ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("109b", "Art. 109b")} регулює польську відповідь на konsultacje іншої держави щодо cudzoziemiec із zezwolenie na pobyt czasowy: wojewoda перевіряє підстави cofnięcia та передає через Komendant Główny Policji результат у визначені строки.`,
      rules: [
        {
          locator: "Art. 109b ust. 1",
          explanation:
            "Компетентним є wojewoda, який надав zezwolenie, або wojewoda першої інстанції, якщо zezwolenie надав Szef Urzędu у другій інстанції; він оцінює наявність підстав cofnięcia.",
        },
        {
          locator: "Art. 109b ust. 2",
          explanation:
            "Інформація про рішення o cofnięciu або про відсутність підстав передається Komendant Główny Policji протягом 10 днів від отримання запиту на konsultacje.",
        },
        {
          locator: "Art. 109b ust. 3",
          explanation:
            "До спливу строку можна просити через Komendant Główny Policji продовження максимум на 12 днів; запит має містити uzasadnienie, а інформацію подають за 2 дні до кінця запитаного строку.",
        },
        {
          locator: "Art. 109b ust. 4",
          explanation:
            "Komendant Główny Policji передає отриману інформацію іншій державі протягом 14 днів від її запиту або в межах продовженого строку.",
        },
      ],
      legalEffect:
        "Стаття встановлює компетенцію та календар міждержавної консультації щодо можливого cofnięcie zezwolenia. Вона не замінює окрему decyzja про cofnięcie і не робить SIS-запис, запит або службове повідомлення доказом legalnego pobytu чи права на працю.",
      foreignersCase:
        "Встановіть дату запиту іншої держави, чинність zezwolenie, компетентного wojewoda, результат перевірки та всі строки/продовження. Відокремте службову інформацію між органами від самої decyzja o cofnięciu і не виводьте наслідок для роботи лише з факту konsultacje.",
    },
  ]),
})
