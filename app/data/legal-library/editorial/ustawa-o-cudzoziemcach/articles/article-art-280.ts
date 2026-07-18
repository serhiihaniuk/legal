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
      provisionId: "ustawa-o-cudzoziemcach-art-280",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До wymiany документа «zgoda na pobyt tolerowany» застосовується ${foreignersLaw.article("256", "Art. 256")}; cudzoziemiec повертає документ після набуття obywatelstwo polskie, stwierdzenia nieważności документа, cofnięcia zgody або wygaśnięcia рішення про згоду за ${foreignersLaw.article("354", "Art. 354")} ust. 1 pkt 1, 3 чи 4 або ust. 2.`,
          sourceLocator: "Art. 280 ust. 1–2 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документ повертають organowi-видавцю niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство або від дня, коли рішення з ust. 2 pkt 2–4 стало ostateczna чи wygasło; інші правила zwrotu відсилають до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
          sourceLocator: "Art. 280 ust. 3–4",
        },
      ],
      summary:
        "Стаття регулює wymianę і zwrot документа «zgoda na pobyt tolerowany», включно з повним переліком подій та 14-денним строком.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Причини зміни даних, фото, втрати або пошкодження оцінюйте за ${foreignersLaw.article("256", "Art. 256")}.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Визначте pkt 2–4 і рахуйте 14 днів від doręczenia документа про громадянство або від ostateczność чи wygaśnięcie відповідного рішення.",
        },
      ],
      legalEffect:
        "Повернення документа пов’язане зі зміною чинності згоди або статусу, а не є добровільною відмовою від самого pobytu tolerowanego.",
      foreignersCase: foreignersLaw.text`Після рішення про cofnięcie чи wygaśnięcie перевірте дату його остаточності, поверніть документ органу-видавцю та попросіть підтвердження zwrotu за ${foreignersLaw.article("249", "Art. 249")}.`,
    },
  ],
})
