import type { CaseGuideDocument } from "./types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"

const kpa = createLegalTextAuthor("kpa")
const work = createLegalTextAuthor("powierzanie-pracy")
const documents = createEvidenceDocumentTextAuthor()

export const administrativeAppealEvidence: CaseGuideDocument = {
  item: documents.text`${documents.document("administrative-appeal", "Подане odwołanie з додатками")}`,
  status: "якщо доступне звичайне оскарження рішення й сторона його подає",
  level: "conditional",
  owner: "Сторона або належний представник; через орган, який видав рішення",
  proves:
    "Яке рішення оскаржено, яку вимогу й докази подано. Своєчасність підтверджують разом із доказами вручення рішення та подання звернення",
  law: kpa.text`${kpa.articleRange("127", "130", { start: "Art. 127", end: "130 KPA" })}: доступність, зміст, строк і виконання; спеціальні правила визначають за конкретним рішенням.`,
}

export const proceduralComplaintEvidence: CaseGuideDocument = {
  item: documents.text`${documents.document("procedural-complaint", "Подане zażalenie з додатками")}`,
  status: "якщо ухвала допускає окрему скаргу й сторона її подає",
  level: "conditional",
  owner: "Сторона або належний представник; через орган, який видав ухвалу",
  proves:
    "Предмет окремої скарги й передані заперечення. Не доводить автоматичного зупинення виконання; зберігають також ухвалу, доказ вручення й подання",
  law: kpa.text`${kpa.articleRange("141", "144", { start: "Art. 141", end: "144 KPA" })}: окрема скарга, строк і виконання. Перед поданням установлюють норму, що дозволяє саме цей засіб.`,
}

export const proceduralOrderEvidence: CaseGuideDocument = {
  item: documents.text`${documents.document("procedural-order", "Postanowienie органу")}`,
  status: "якщо орган видав процесуальну ухвалу",
  level: "conditional",
  owner:
    "Орган видає; заявник або представник зберігає весь документ і доказ вручення",
  proves:
    "Яке процесуальне питання вирішено та в якому обсязі. Не є початковим додатком до заяви; окреме оскарження залежить від предмета й норми",
  law: kpa.text`${kpa.article("123", "Art. 123 KPA")} і ${kpa.article("124", "art. 124 KPA")}: предмет і зміст; ${kpa.articleRange("141", "144", { start: "art. 141", end: "144 KPA" })}: оскарження та виконання. Для конкретного питання враховують також спеціальні норми.`,
}

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
