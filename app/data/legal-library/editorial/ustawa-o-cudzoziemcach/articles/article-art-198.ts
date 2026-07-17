import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-198",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо діє ${foreignersLaw.article("197", "Art. 197")} ust. 1 pkt 3 через запис cudzoziemca в SIS для odmowa wjazdu i pobytu, ${foreignersLaw.article("198", "Art. 198")} допускає udzielenie zezwolenia з урахуванням причин запису та zagrożeń з ${foreignersLaw.external("art. 27", SIS_2018_1861_URL)} lit. d rozporządzenia nr 2018/1861.`,
          sourceLocator: "Art. 198 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, що внесла запис, і повідомляє її про рішення або намір надати zezwolenie.",
          sourceLocator: "Art. 198 ust. 2 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальний консультаційний механізм для оцінки SIS-запису під час pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Формула «można udzielić» означає можливість, а не автоматичне право; треба врахувати причини запису та загрози, названі в регламенті.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Консультації та повідомлення іншої держави здійснюються через Komendant Główny Policji відповідним органом провадження.",
        },
      ],
      legalEffect: foreignersLaw.text`SIS-запис не описує наперед результат справи: ${foreignersLaw.article("198", "Art. 198")} дає спеціальний шлях оцінки, але не скасовує інші умови й підстави відмови.`,
      foreignersCase:
        "Попросіть ідентифікувати державу та підставу SIS-запису, відстежте консультації й подайте документи щодо конкретних ризиків; не стверджуйте, що сам запис автоматично унеможливлює дозвіл.",
    },
  ],
})
