import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-240",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("240", "Art. 240")} дозволяє Rada Ministrów у drodze rozporządzenia звільнити організації społeczne від обов’язку сплачувати wpis у їхніх власних справах і скасувати таке звільнення; воно має стосуватися справ, пов’язаних із діяльністю науковою, освітньою, культурною, доброчинною та допомогою і опікою społeczną.`,
          sourceLocator: "Art. 240",
        },
      ],
      summary:
        "Рада Міністрів може підзаконно звільнити організації społeczne від wpis у власних справах у названих сферах і потім відкликати це звільнення.",
      rules: [
        {
          locator: "Art. 240",
          explanation:
            "Перевірте, чи організація є організацією społeczną, справа є її власною та належить до сфери, охопленої чинним rozporządzenie.",
        },
      ],
      legalEffect:
        "Стаття лише надає підставу для розporządzenie; без перевірки чинного підзаконного акта не можна стверджувати, що конкретна організація звільнена.",
      foreignersCase: ppsaLaw.text`Якщо організація допомагає іноземцю в судовій справі, не переносіть можливе звільнення ${ppsaLaw.article("240", "Art. 240")} на саму особу: перевірте статус організації, предмет справи та чинний акт.`,
    },
  ],
})
