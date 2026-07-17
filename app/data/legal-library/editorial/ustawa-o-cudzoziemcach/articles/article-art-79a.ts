import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("79a", "Art. 79a")} ust. 1 дозволяє MFA, крім ${foreignersLaw.article("66", "Art. 66")} ust. 1a, видавати або відмовляти у wiza krajowa особі, яка перебуває в Польщі, подала заяву у період, визначений rozporządzenie, і має громадянство визначеної держави, за додаткових умов; ust. 2–5 регулюють допомогу підприємця та нагляд.`,
          sourceLocator: "Art. 79a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("79a", "Art. 79a")} ust. 6–8 делегує MFA визначити періоди, держави, додаткові цілі й дії підприємця та зобов’язує враховувати надзвичайні обставини, інтерес RP, ситуацію cudzoziemców і контроль.`,
          sourceLocator: "Art. 79a ust. 6–8",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("79a", "Art. 79a")} створює спеціальний внутрішній канал для wiza krajowa через MFA поза випадком ${foreignersLaw.article("66", "Art. 66")} ust. 1a. Він працює лише для осіб, держав і періодів, визначених розпорядженням, та може використовувати уповноваженого przedsiębiorca для технічних дій.`,
      rules: [
        {
          locator: "Art. 79a ust. 1",
          explanation:
            "Одночасно потрібні pobyt у Польщі, подання в період із rozporządzenie, громадянство визначеної держави та всі додаткові умови, якщо їх встановлено.",
        },
        {
          locator: "Art. 79a ust. 2–5",
          explanation: foreignersLaw.text`MFA може залучити підприємця для дій зовнішнього usługodawca за ${foreignersLaw.external("Art. 43", VISA_CODE_URL)} Visa Code; його дії виконуються з upoważnienie MFA і під наглядом працівників urzędu.`,
        },
        {
          locator: "Art. 79a ust. 6–8",
          explanation:
            "Розпорядження визначає періоди, громадянства, додаткові цілі й zakres дій підприємця; при його підготовці враховуються війна, катастрофа, обмеження консульського персоналу, інтерес RP та ситуація тих, хто не може повернутися по візу.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("79a", "Art. 79a")} відкриває можливість подання в Польщі лише за конкретним rozporządzenie і не скасовує матеріальні умови ${foreignersLaw.article("65", "Art. 65")}. Перебування в Польщі саме по собі не робить цей канал доступним.`,
      foreignersCase: foreignersLaw.text`Перед поданням перевірте чинне rozporządzenie за ${foreignersLaw.article("79a", "Art. 79a")} ust. 6–8: державу громадянства, період, cel і додаткові умови; встановіть, чи діє офіційний канал MFA або уповноваженого przedsiębiorca.`,
    },
  ],
})
