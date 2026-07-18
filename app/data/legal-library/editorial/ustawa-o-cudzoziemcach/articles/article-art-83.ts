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
      provisionId: "ustawa-o-cudzoziemcach-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("83", "Art. 83")} передбачає, що якщо дані заявника на przedłużenie wizy krajowa є в SIS для odmowa wjazdu i pobytu і є підстави продовження, wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, яка внесла запис, і повідомляє її про рішення або zamiar przedłużenia.`,
          sourceLocator: "Art. 83 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`${foreignersLaw.article("83", "Art. 83")} описує координацію SIS у справі продовження; він не замінює позитивного рішення wojewoda або Szef Urzędu і не створює продовження автоматично.`,
          sourceLocator: "Art. 83 pkt 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("83", "Art. 83")} встановлює міждержавну консультацію при przedłużenie wizy krajowa, коли заявник має SIS-запис про odmowa wjazdu i pobytu, але матеріальні умови ${foreignersLaw.article("82", "Art. 82")} можуть бути виконані.`,
      rules: [
        {
          locator: "Art. 83 pkt 1",
          explanation: foreignersLaw.text`Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації за ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} rozporządzenie nr 2018/1861 із державою, що внесла SIS-запис.`,
        },
        {
          locator: "Art. 83 pkt 2",
          explanation:
            "Тому самому органу передається інформація про рішення щодо przedłużenie або про zamiar його надати.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття забезпечує SIS-узгодження у процедурі продовження і не вирішує самостійно, чи візу буде продовжено. Матеріальні умови залишаються в ${foreignersLaw.article("82", "Art. 82")}.`,
      foreignersCase: foreignersLaw.text`Перевірте SIS-запис, державу-ініціатора, запит через Policja, дату консультації та рішення/zamiar wojewoda або Szef Urzędu; окремо доведіть усі умови ${foreignersLaw.article("82", "Art. 82")}.`,
    },
  ],
})
