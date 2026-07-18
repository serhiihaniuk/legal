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
      provisionId: "ustawa-o-cudzoziemcach-art-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("3", "Art. 3")} є словником ustawy. Серед іншого він визначає cudzoziemca, dokument podróży, різні види mobilności, wykonywanie pracy, а також чинні з 27 квітня 2026 року поняття członka rodziny rozdzielonej і kraju pochodzenia.`,
          sourceLocator: "Art. 3 pkt 1–25, у тому числі pkt 2a і 5d",
        },
      ],
      summary:
        "Юридичне визначення перетворює побутове слово на набір умов. Перш ніж застосовувати іншу статтю, треба перевірити, чи факти справи відповідають усім складовим потрібного поняття.",
      rules: [
        {
          locator: "Art. 3 pkt 2–5d",
          explanation:
            "Cudzoziemiec — особа без польського громадянства. Członek rodziny rozdzielonej — не будь-який родич, а названа законом особа в Польщі, яка подає заяву для іноземця за її межами; kraj pochodzenia визначають через громадянство, а за його відсутності або неможливості встановити — через постійне проживання.",
        },
        {
          locator: "Art. 3 pkt 7–7j",
          explanation:
            "Кожен вид mobilności має власну ціль і часовий поріг: 90/180, 180/360 або понад 90 чи 180 днів залежно від категорії. Пункти 7b і 7c скасовані й не є чинними визначеннями.",
        },
        {
          locator: "Art. 3 pkt 20–25",
          explanation:
            "Wiza, wiza krajowa, wiza Schengen, wykonywanie pracy та praca w zawodzie wymagającym wysokich kwalifikacji — різні поняття. Право pobytu не слід виводити лише з права виконувати роботу, і навпаки.",
        },
      ],
      legalEffect:
        "Визначення керують значенням термінів у всій ustawie, але самі зазвичай не надають дозволу, права на роботу чи іншого статусу.",
      foreignersCase: foreignersLaw.text`Випишіть точний термін із рішення або wniosku, знайдіть його пункт у ${foreignersLaw.article("3", "Art. 3")} і розкладіть визначення на факти. Для сімейної заяви з-за кордону особливо перевірте, чи заявник справді є członkiem rodziny rozdzielonej.`,
    },
  ],
})
