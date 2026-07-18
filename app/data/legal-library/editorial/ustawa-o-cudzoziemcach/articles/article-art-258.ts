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
      provisionId: "ustawa-o-cudzoziemcach-art-258",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Polski dokument podróży для cudzoziemca повертають органу-видавцю після набуття obywatelstwo polskie, stwierdzenia nieważności документа, cofnięcia zezwolenia na pobyt stały, rezydenta długoterminowego UE або zgody humanitarnej, pozbawienia ochrony uzupełniającej, спеціального cofnięcia zezwolenia na pobyt czasowy з ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9, якщо документ видано за ${foreignersLaw.article("252", "Art. 252")} pkt 2a, cofnięcia тимчасового дозволу у випадку ${foreignersLaw.article("252a", "Art. 252a")} ust. 1 pkt 2 lit. c, або отримання власного dokumentu podróży.`,
          sourceLocator: "Art. 258 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документ повертають niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство, doręczenia власного dokumentu podróży або дня, коли рішення з ust. 1 pkt 2–4b стало ostateczna; для інших питань zwrot застосовуються ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
          sourceLocator: "Art. 258 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає спеціальні підстави zwrotu polskiego dokumentu podróży dla cudzoziemca, 14-денні події для відліку та відсилання до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Зіставте подію з точним пунктом: громадянство, nieważność, cofnięcie конкретного zezwolenia або zgody, pozbawienie ochrony uzupełniającej чи отримання власного документа; для pkt 4a–4b важливі ${foreignersLaw.article("252", "Art. 252")} pkt 2a та ${foreignersLaw.article("252a", "Art. 252a")} ust. 1 pkt 2 lit. c.`,
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Рахуйте 14 днів від події, прямо названої в ust. 2: doręczenia документа про громадянство, власного документа або ostateczność рішення; поховання і zaświadczenie регулює ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
        },
      ],
      legalEffect: foreignersLaw.text`Обов’язок zwrotu виникає з конкретної події ${foreignersLaw.article("258", "Art. 258")}, а не просто зі спливу строку дії документа; невиконання може впливати на його unieważnienie за ${foreignersLaw.article("259", "Art. 259")}.`,
      foreignersCase: foreignersLaw.text`Після отримання паспорта або остаточного рішення зафіксуйте дату й поверніть документ органу-видавцю. За потреби попросіть zaświadczenie за правилами ${foreignersLaw.article("249", "Art. 249")} ust. 4.`,
    },
  ],
})
