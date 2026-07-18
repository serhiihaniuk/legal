import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-222e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Після запиту іншої держави Schengen про консультації за ${foreignersLaw.external("art. 28 або 29 rozporządzenia 2018/1861", SIS_2018_1861_URL)} компетентний wojewoda перевіряє підстави для cofnięcia zezwolenia, враховуючи мотиви держави, яка планує або вже внесла запис до SIS, і загрозу від присутності іноземця.`,
          sourceLocator: "Art. 222e ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda протягом 10 днів від запиту повідомляє Komendanta Głównego Policji про рішення відкликати дозвіл або про відсутність підстав. До спливу цього строку можна вмотивовано просити через KGP продовження не більше ніж на 12 днів; тоді інформацію передають KGP за 2 дні до продовженого строку.",
          sourceLocator: "Art. 222e ust. 2–3",
        },
        {
          kind: "statute-text",
          text: "Komendant Główny Policji передає відповідь іншій державі протягом 14 днів від її звернення, а після продовження — у продовжений строк.",
          sourceLocator: "Art. 222e ust. 4",
        },
      ],
      summary:
        "Стаття регулює консультацію між державами Schengen, коли запис SIS може вплинути на вже наданий польський статус rezydenta długoterminowego UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Компетентним є wojewoda, який надав дозвіл, або wojewoda першої інстанції, якщо позитивне рішення видав Szef Urzędu. Оцінка має охопити конкретні мотиви SIS і зазначені в розпорядженні загрози.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Розрізняйте внутрішній 10-денний строк wojewoda та 14-денний строк відповіді KGP іншій державі. Продовження максимум на 12 днів потребує завчасного вмотивованого запиту.",
        },
      ],
      legalEffect:
        "Консультація не означає автоматичного cofnięcia zezwolenia: wojewoda має встановити, чи справді існують законні підстави, і повідомити результат у стислий строк.",
      foreignersCase:
        "Перевірте вид запису SIS, державу-ініціатора, дату отримання консультації, компетентного wojewoda та окремо строки 10, 12 і 14 днів.",
    },
  ],
})
