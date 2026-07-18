import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-522",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("522", "Art. 522")} встановлює, що ustawa набирає чинності 1 травня 2014 р.; винятки — ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3 lit. a в частині ${foreignersLaw.external("Art. 3a", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3, ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3 lit. b та ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 4, 5 і 11–16, які набирають чинності в день оголошення.`,
          sourceLocator: "Art. 522",
        },
      ],
      summary:
        "Прикінцева норма визначає загальну дату набрання чинності ustawa та окремі винятки, що діяли з дня її оголошення.",
      rules: [
        {
          locator: "Art. 522",
          explanation: "Загальне правило — набрання чинності 1 травня 2014 р.",
        },
        {
          locator: "Art. 522",
          explanation: foreignersLaw.text`Конкретно перелічені частини ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} набирають чинності в день оголошення ustawa; у джерелі зазначено, що її оголошено 30 грудня 2013 р.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("522", "Art. 522")} визначає історичні часові межі застосування ustawa та її окремих положень. Для старої справи дата конкретної дії має бути зіставлена із загальним правилом або винятком, а не лише з номером статті.`,
      foreignersCase: foreignersLaw.text`Встановіть дату подання, рішення або іншої юридично значущої дії та перевірте, чи стосується її виняток ${foreignersLaw.article("522", "Art. 522")}; для перехідних наслідків додатково застосуйте ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("521", "521")}.`,
    },
  ],
})
