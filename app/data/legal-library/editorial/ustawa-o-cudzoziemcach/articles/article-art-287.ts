import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-287",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 287 ust. 1–2 визначає, що minister właściwy do spraw wewnętrznych у porozumieniu з ministrem właściwym do spraw zagranicznych та ministrem właściwym do spraw oświaty i wychowania визначає розпорядженням wzór formularza listy podróżujących для wycieczek w Unii Europejskiej; у розпорядженні враховуються персональні дані лише в обсязі, необхідному для умов в’їзду до Польщі та pobytu на її території учнів із państw trzecich, можливість перевірки цих даних і sprawne przekraczanie granicy.",
          sourceLocator: "Art. 287 ust. 1–2",
        },
      ],
      summary:
        "Стаття делегує визначення форми listy podróżujących для учнів з państw trzecich, які беруть участь у шкільній поїздці до іншої держави ЄС.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Форму списку встановлює розпорядження ministra właściwego do spraw wewnętrznych, погоджене з міністрами закордонних справ та освіти.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Розпорядження має враховувати персональні дані лише в обсязі, необхідному для умов в’їзду до Польщі та pobytu на її території учнів із państw trzecich, можливість перевірки цих даних і потребу у sprawne przekraczanie granicy.",
        },
      ],
      legalEffect:
        "Стаття створює нормативну підставу для форми списку і вимог до даних; сама не встановлює індивідуального права на в’їзд.",
      foreignersCase:
        "Для учнівської групи перевірте затверджений formularz, повноту необхідних даних і можливість пред’явити список під час прикордонної перевірки.",
    },
  ]),
})
