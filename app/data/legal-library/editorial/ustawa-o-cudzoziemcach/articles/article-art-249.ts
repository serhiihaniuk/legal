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
      provisionId: "ustawa-o-cudzoziemcach-art-249",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemiec повертає kartę pobytu органу, який її видав, коли набув obywatelstwo polskie; видано decyzję про stwierdzenie nieważności картки; cofnięto zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE чи zgodę humanitarną; або рішення про надання відповідного права wygasło z mocy prawa за ${foreignersLaw.article("102", "Art. 102")} чи 307 ust. 1, ${foreignersLaw.article("200", "Art. 200")} pkt 1 або ${foreignersLaw.article("354", "Art. 354")} ust. 1 pkt 1, 3 чи 4.`,
          sourceLocator: "Art. 249 ust. 1 pkt 1–8",
        },
        {
          kind: "statute-text",
          text: "Kartę pobytu повертають niezwłocznie, але не пізніше 14 днів від doręczenia документа про набуття громадянства або від дня, коли рішення з ust. 1 pkt 2–8 стало ostateczna чи wygasło. Особа, уповноважена на поховання, невідкладно повертає картку померлого, а орган на wniosek видає безоплатне zaświadczenie o zwrocie, чинне 30 днів.",
          sourceLocator: "Art. 249 ust. 2–4",
        },
      ],
      summary:
        "Стаття визначає вичерпні підстави zwrotu karty pobytu, 14-денний строк, обов’язок щодо картки померлого та 30-денне zaświadczenie o zwrocie.",
      rules: [
        {
          locator: "ust. 1 pkt 1–8",
          explanation: foreignersLaw.text`Перевірте конкретний pkt: громадянство, nieważność картки, cofnięcie відповідного zezwolenia або zgody чи wygaśnięcie рішення з прямо названими відсиланнями до ${foreignersLaw.article("102", "Art. 102")}, 307, 200 або 354.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Рахуйте 14 днів від doręczenia документа про громадянство або від остаточності чи wygaśnięcia рішення з ust. 1 pkt 2–8; zwrot має бути niezwłoczny.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Особа, уповноважена на поховання за окремим законом, невідкладно повертає картку померлого; орган видає на wniosek безоплатне zaświadczenie, чинне 30 днів.",
        },
      ],
      legalEffect: foreignersLaw.text`Обов’язок zwrotu виникає лише з події, названої в ${foreignersLaw.article("249", "Art. 249")} ust. 1; неповернення після остаточності або wygaśnięcia рішення може спричинити unieważnienie за ${foreignersLaw.article("250", "Art. 250")} pkt 5 та дії органу за ${foreignersLaw.article("251", "Art. 251")}.`,
      foreignersCase:
        "Зафіксуйте doręczenie документа про громадянство або дату, коли рішення стало ostateczna чи wygasło, поверніть kartę pobytu органу-видавцю не пізніше 14 днів і попросіть безоплатне zaświadczenie, якщо потрібен доказ.",
    },
  ],
})
