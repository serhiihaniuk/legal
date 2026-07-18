import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "251",
      provisionId: "kpa-art-251",
      reviewStatus: "reviewed",
      summary:
        "Норма поширює на редакцію, яка опублікувала й передала органові матеріал, правила про прострочення skargi та wniosku і право на подальшу skargę. Вона стосується саме матеріалу, переданого в режимі цього розділу.",
      rules: [
        {
          locator: "відсилання",
          explanation: kpaLaw.text`До такої redakcji prasowej відповідно застосовуються ${kpaLaw.article("237", "art. 237 § 4")}, ${kpaLaw.article("245", "art. 245")} і ${kpaLaw.article("246", "art. 246")} KPA.`,
        },
      ],
      legalEffect:
        "Редакція отримує передбачені відсиланням гарантії реагування на прострочення та неналежний розгляд переданого матеріалу.",
      foreignersCase:
        "Якщо редакція опублікувала і передала органові матеріал про проблеми іноземців як skargę або wniosek, вона може користуватися цими правилами; це не робить її стороною індивідуальної sprawy pobytowej.",
    },
  ],
})
