import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-222g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо інша держава Schengen просить консультацію за ${foreignersLaw.external("art. 10 або 11 rozporządzenia 2018/1860", SIS_2018_1860_URL)} щодо особи з польським zezwoleniem na pobyt rezydenta długoterminowego UE, компетентний wojewoda встановлює, чи є підстави відкликати цей дозвіл.`,
          sourceLocator: "Art. 222g ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda протягом 10 днів повідомляє Komendanta Głównego Policji про рішення відкликати дозвіл або про відсутність підстав. До спливу строку можна вмотивовано просити через KGP продовження не більше ніж на 12 днів; тоді відповідь wojewoda передається за 2 дні до продовженого строку.",
          sourceLocator: "Art. 222g ust. 2–3",
        },
        {
          kind: "statute-text",
          text: "Komendant Główny Policji передає інформацію іншій державі протягом 14 днів від її звернення або у продовжений строк.",
          sourceLocator: "Art. 222g ust. 4",
        },
      ],
      summary:
        "Стаття регулює реакцію на консультацію іншої держави Schengen щодо запису про повернення особи, яка вже має польський статус rezydenta długoterminowego UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Компетентним є wojewoda, який надав дозвіл, або wojewoda першої інстанції, якщо дозвіл у другій інстанції надав Szef Urzędu.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Контролюйте окремо 10-денний строк wojewoda, можливе продовження максимум на 12 днів і 14-денний строк передачі інформації KGP.",
        },
      ],
      legalEffect:
        "Запит іншої держави не відкликає дозвіл автоматично; він зобов’язує компетентного wojewoda провести оцінку й оперативно передати результат.",
      foreignersCase:
        "З’ясуйте, хто видав дозвіл, хто розглядав справу в першій інстанції та коли надійшов запит. Перевірте рішення про cofnięcie або мотивований висновок про відсутність підстав.",
    },
  ],
})
