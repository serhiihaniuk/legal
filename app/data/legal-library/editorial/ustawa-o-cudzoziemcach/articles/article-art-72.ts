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
      provisionId: "ustawa-o-cudzoziemcach-art-72",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("72", "Art. 72")} вимагає, коли дані заявника на wiza krajowa є в SIS для odmowa wjazdu i pobytu, але існують причини видати візу, провести через Komendant Główny Policji консультації з державою, яка внесла запис, за ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} rozporządzenie nr 2018/1861, і повідомити її про рішення або намір видати візу.`,
          sourceLocator: "Art. 72 у zw. z Art. 27 rozporządzenie nr 2018/1861",
        },
        {
          kind: "practical-inference",
          text: "Наявність запису SIS запускає консультаційний механізм, але не перетворює його на автоматичну видачу або автоматичну відмову.",
          sourceLocator: "Art. 72",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("72", "Art. 72")} регулює консультацію з державою Schengen, яка внесла дані cudzoziemiec до SIS для odmowa wjazdu i pobytu, коли польський орган все ж бачить підстави для видачі wiza krajowa.`,
      rules: [
        {
          locator: "Art. 72",
          explanation:
            "MFA або konsul діє через Komendant Główny Policji: проводить консультацію з органом держави, що зробила wpis, і передає йому рішення або zamiar wydania wiza.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття забезпечує узгодження польського рішення з державою, яка створила запис SIS. Вона не скасовує ${foreignersLaw.article("65", "Art. 65")} та інші умови wiza krajowa.`,
      foreignersCase:
        "Встановіть вид SIS wpis, державу-ініціатора, дату консультації та зміст польського рішення/наміру; аналізуйте окремо причину запису і всі польські przesłanki.",
    },
  ],
})
