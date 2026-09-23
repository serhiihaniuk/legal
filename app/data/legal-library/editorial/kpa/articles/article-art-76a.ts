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
            "Замість оригіналу можна подати копію, відповідність якої оригіналу засвідчив notariusz або представник сторони саме в цій справі, який є adwokat, radca prawny, rzecznik patentowy чи doradca podatkowy. Електронне засвідчення потребує передбаченого підпису й формату.",
        },
        {
          locator: "§ 2b–3",
          explanation:
            "Уповноважений працівник органу, який веде провадження, на вимогу сторони засвідчує відповідність копії оригіналу після пред'явлення обох. Засвідчення містить підпис працівника, дату й місце; на вимогу сторони також час. Дописки, виправлення або пошкодження зазначають у засвідченні. Саме засвідчення працівника чи названого професійного представника має характер dokumentu urzędowego.",
        },
        {
          locator: "§ 4",
          explanation: kpaLaw.text`Коли це обґрунтовано обставинами справи, орган вимагає від сторони оригінал документа, копію якого подано із засвідченням за ${kpaLaw.article("76a", "§ 2")}.`,
        },
      ],
      legalEffect:
        "Належно засвідчена копія загалом може замінити оригінал, але не позбавляє organu права перевірити оригінал за обґрунтованої потреби.",
      foreignersCase: kpaLaw.text`Для документів у справі pobytowej треба розрізняти звичайний скан, poświadczoną kopię та оригінал; ${kpaLaw.article("76a", "art. 76a KPA")} не скасовує спеціальних вимог ustawy o cudzoziemcach.`,
    },
  ],
})
