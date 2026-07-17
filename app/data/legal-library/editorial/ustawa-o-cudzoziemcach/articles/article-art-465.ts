import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-465",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("465", "Art. 465")} ust. 1 передбачає karę grzywny, зокрема за pobyt без tytuł prawny, невиконання вимоги показати документи або кошти, невиконання обов’язку залишити Польщу та окремі порушення малого ruchu granicznego; ust. 1a передбачає grzywna 200–2000 zł за невиконання обов’язку з ${foreignersLaw.article("157a", "Art. 157a")} ust. 2.`,
          sourceLocator: "Art. 465 ust. 1 pkt 1–9 i ust. 1a",
        },
      ],
      summary:
        "Стаття визначає склади wykroczenie та karę grzywny за окремі порушення правил перебування, документів, повернення, звітування і малого ruchu granicznego.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "До порушень належать pobyt без правової підстави, непред’явлення потрібних документів або коштів на вимогу uprawnione organy, невиконання обов’язку wymiany або zwrotu документа та несвоєчасне повідомлення про втрату визначених документів.",
        },
        {
          locator: "ust. 1 pkt 6–9",
          explanation:
            "Окремо охоплено невиконання обов’язку залишити Польщу, обов’язку zgłaszania się, залишення місця проживання, визначеного в рішенні про продовження добровільного виїзду, та порушення правил малого ruchu granicznego.",
        },
        {
          locator: "ust. 1a–3",
          explanation: foreignersLaw.text`За ${foreignersLaw.article("157a", "Art. 157a")} ust. 2 передбачена grzywna від 200 до 2000 zł; orzekanie відбувається за Kodeks postępowania w sprawach o wykroczenia, а wyrok nakazowy є natychmiast wykonalny.`,
        },
      ],
      legalEffect:
        "Стаття передбачає відповідальність за конкретні wykroczenia, а не автоматичний наслідок для кожного порушення документаційного обов’язку. Для складу та провадження важливі точний пункт, вимога органу, строки й докази.",
      foreignersCase: foreignersLaw.text`Порівняйте протокол або матеріали справи з конкретним pkt ${foreignersLaw.article("465", "Art. 465")}: встановіть tytuł pobytowy, отриману вимогу, строк і доказ вручення; окремо перевірте порядок оскарження за правилами про wykroczenia.`,
    },
  ],
})
