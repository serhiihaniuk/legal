import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "76a",
      provisionId: "kpa-art-76a",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює використання копій і odpisów документів замість оригіналів, їх засвідчення та випадки, коли organ може вимагати оригінал.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Якщо документ є в aktach organu або іншого публічного суб’єкта, достатньо urzędowo poświadczonego odpisu або wyciągu; коли сторона не може його отримати, organ запитує документ сам і за потреби може вимагати оригінал.",
        },
        {
          locator: "§ 2–2a",
          explanation:
            "Замість оригіналу можна подати копію, засвідчену notariuszem або професійним pełnomocnikiem; електронне засвідчення потребує належного підпису і формату.",
        },
        {
          locator: "§ 2b–3",
          explanation:
            "Уповноважений працівник organu може засвідчити показану копію, зазначивши дані засвідчення та особливості документа; таке засвідчення, як і засвідчення професійного pełnomocnika, має характер dokumentu urzędowego.",
        },
        {
          locator: "§ 4",
          explanation:
            "Якщо обставини справи цього вимагають, organ може żądać оригіналу документа, з якого подано засвідчену копію.",
        },
      ],
      legalEffect:
        "Належно засвідчена копія загалом може замінити оригінал, але не позбавляє organu права перевірити оригінал за обґрунтованої потреби.",
      foreignersCase: kpaLaw.text`Для документів у справі pobytowej треба розрізняти звичайний скан, poświadczoną kopię та оригінал; ${kpaLaw.article("76a", "art. 76a KPA")} не скасовує спеціальних вимог ustawy o cudzoziemcach.`,
    },
  ],
})
