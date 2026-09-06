import type { CaseGuideDocument } from "./types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"

const kpa = createLegalTextAuthor("kpa")
const work = createLegalTextAuthor("powierzanie-pracy")

export const deadlineObstacleEvidence: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Матеріали для поновлення пропущеного строку",
    parts: [
      {
        text: "Матеріали для поновлення пропущеного строку",
        target: { kind: "evidence-document", documentId: "deadline-obstacle" },
      },
    ],
  },
  status: "якщо просите поновити пропущений строк",
  level: "conditional",
  owner: "Заінтересована особа; разом із проханням виконує пропущену дію",
  proves:
    "Обставини відсутності вини та дату припинення перешкоди. Перевірте семиденний строк прохання і можливість поновлення саме цього строку",
  law: kpa.text`${kpa.article("58", "Art. 58 KPA")}: умови та одночасна дія; ${kpa.article("59", "art. 59 KPA")}: компетентний орган; ${kpa.article("60", "art. 60 KPA")}: можливе зупинення виконання.`,
}

export const workNotificationEvidence: CaseGuideDocument = {
  reviewId: "notification",
  item: {
    kind: "authored-legal-text",
    plainText: "Powiadomienie PUP і підтвердження подання",
    parts: [
      {
        text: "Powiadomienie PUP і підтвердження подання",
        target: {
          kind: "evidence-document",
          documentId: "ukraine-work-notification",
        },
      },
    ],
  },
  status: "якщо праця виконується за правилами повідомлення",
  level: "conditional",
  owner:
    "Польський суб'єкт, який доручає працю; протягом семи днів від початку та після визначених змін",
  proves:
    "Що і коли повідомлено до PUP. Законність перебування та відповідність фактичної роботи заявленим умовам перевіряють окремо",
  law: work.text`${work.article("5a", "Art. 5a")}: повідомлення і спеціальне правило збою системи; ${work.external("art. 40–41 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}: попередні подання й перехідні правила.`,
}
