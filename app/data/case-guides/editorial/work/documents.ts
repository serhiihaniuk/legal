import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"
import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
  administrativeAppealEvidence,
  proceduralComplaintEvidence,
  workNotificationEvidence,
} from "../../shared-document-requirements"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const workDocuments = {
  passport: common.passport,
  status: {
    item: document(
      "status-documents",
      "Попередній дозвіл, карта та інші документи про статус"
    ),
    level: "control",
    status: "до вибору заяви",
    owner:
      "Заявник надає; працівник читає рішення разом із картою та історією справ",
    proves:
      "Чинну підставу перебування і, якщо дозвіл містить умови праці, роботу, яку він охоплює. Самої дати на карті недостатньо",
    law: law.text`${law.article("99")}, ${law.article("105")}, ${law.article("108")} і ${law.article("118")}.`,
  },
  chronology: common.chronology,
  contract: {
    item: document("employment-contract", "Umowa o pracę"),
    reviewId: "contract",
    level: "control",
    status: "доказ у цьому прикладі",
    owner:
      "Працівник і роботодавець; договір разом з усіма підписаними aneksami",
    proves:
      "Домовленість про посаду, час, оплату та період роботи. Виплату зарплати і фактичні обов'язки підтверджують окремі матеріали",
    law: law.text`${law.article("114")}. Ця підстава допускає також інші договори; umowa o pracę не є універсально обов'язковим видом договору.`,
  },
  annex: {
    item: document("employment-annex-1", "Załącznik nr 1"),
    reviewId: "annex",
    level: "required",
    status: "додаток роботодавця",
    owner:
      "Роботодавець або його уповноважений підписант; заповнює та підписує електронно",
    proves:
      "Яку роботу пропонує конкретний роботодавець. Для кількох роботодавців потрібні окремі додатки; підпис має відповідати правилам представництва",
    law: law.text`${law.article("106")} ust. 2; ${law.article("106c")} і ${law.article("106d")}. Назва додатка до заяви відрізняється від номера форми в розпорядженні.`,
  },
  company: {
    item: document(
      "business-register-information",
      "KRS/CEIDG і повноваження підписанта"
    ),
    reviewId: "representation",
    level: "control",
    status: "перевірка роботодавця",
    owner:
      "Працівник перевіряє реєстр; роботодавець пояснює додаткове уповноваження",
    proves:
      "Існування суб'єкта та спосіб представництва на дату підпису. Запис у реєстрі не доводить платоспроможності або реальної роботи",
    law: law.text`${law.article("106d")} ust. 4; ${law.article("117a")}.`,
  },
  organisation: {
    item: document(
      "work-organisation-evidence",
      "Опис фактичної організації роботи"
    ),
    level: "conditional",
    status: "якщо ролі компаній потребують пояснення",
    owner:
      "Роботодавець та заявник; договори між компаніями, розподіл завдань і контролю",
    proves:
      "Хто доручає роботу, керує нею та отримує її результат. Назва outsourcing сама по собі не визначає правової моделі",
    law: law.text`${law.article("117a")} pkt 4; ${law.article("118")} ust. 1 pkt 1.`,
  },
  business: {
    item: document(
      "business-evidence",
      "Матеріали про діяльність і кошти роботодавця"
    ),
    level: "conditional",
    status: "для встановленого питання або вимоги органу",
    owner:
      "Роботодавець; відповідні договори, замовлення, звітність, відомості про податки та внески",
    proves:
      "Реальність потреби у працівнику та можливість виконувати зобов'язання. Це не вимога завантажити всю бухгалтерію в кожній справі",
    law: law.text`${law.article("117")} pkt 1 і ${law.article("117a")}. Законні відстрочення, розстрочення та інші зазначені в законі винятки враховують окремо.`,
  },
  insurance: {
    item: document("health-insurance", "Підстава медичного страхування"),
    level: "control",
    status: "умова дозволу",
    owner:
      "Заявник і роботодавець; чинне покриття або документи про роботу, з якої воно виникне",
    proves:
      "Публічне медичне страхування або покриття страховиком витрат лікування в Польщі. Майбутнє страхування через заявлену роботу має окреме правило",
    law: law.text`${law.article("114")} ust. 1 pkt 1 і ust. 4a. Якщо страхування виникне через цю роботу, відсутність поточного запису ZUS сама по собі не означає невиконання умови.`,
  },
  zus: {
    item: document(
      "zus-confirmation",
      "Підтвердження ZUS за відповідний період"
    ),
    level: "conditional",
    status: "якщо підтверджуєте вже наявне страхування",
    owner:
      "Заявник або платник внесків; дані про реєстрацію та медичне страхування",
    proves:
      "Особу, страхову підставу й період, які видно в документі. Платіж внесків компанії не ідентифікує автоматично страхування конкретної особи",
    law: law.text`${law.article("114")} ust. 1 pkt 1.`,
  },
  income: {
    item: document("income-evidence", "Нарахування і виплата зарплати"),
    level: "conditional",
    status: "якщо робота вже виконується або орган перевіряє оплату",
    owner:
      "Роботодавець і заявник; розрахунок зарплати та підтвердження виплат за названий період",
    proves:
      "Як договірні суми реалізовано на практиці. Суму netto на рахунку не порівнюють безпосередньо з порогом brutto",
    law: law.text`${law.article("114")} ust. 1 pkt 4–5; ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  qualifications: {
    item: document(
      "qualification-evidence",
      "Кваліфікації для регульованої професії"
    ),
    level: "conditional",
    status: "якщо професія регульована",
    owner:
      "Заявник; документ про право виконувати професію, визнання або іншу необхідну кваліфікацію",
    proves:
      "Виконання професійної вимоги. Звичайний диплом і його переклад не завжди дають право працювати в регульованій професії",
    law: law.text`${law.article("115")}; ${law.article("117")} pkt 2 lit. a.`,
  },
  translation: common.translation,
  matrix: common.matrix,
  assessment: common.assessment,
  application: common.application,
  photo: common.photo,
  attorney: common.attorney,
  fee: common.fee,
  cardFee: common.cardFee,
  upo: common.upo,
  index: common.index,
  certificate: common.certificate,
  summons: common.summons,
  delivery: common.delivery,
  requirements: common.requirements,
  response: common.response,
  dispatch: common.dispatch,
  fingerprints: common.fingerprints,
  signature: common.signature,
  decision: {
    item: document("administrative-decision", "Decyzja у справі"),
    reviewId: "decision",
    level: "control",
    status: "після вручення",
    owner: "Орган видає; заявник або представник читає весь документ",
    proves:
      "Результат розгляду, період дозволу й умови роботи. Обґрунтування пояснює встановлені факти та застосоване право",
    law: law.text`${law.article("118")}; ${kpa.article("107", "Art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Karta pobytu"),
    level: "control",
    status: "після видачі карти",
    owner: "Заявник; при отриманні звіряє особисті дані та строк документа",
    proves:
      "Документує наданий статус. Напис про доступ до ринку праці читають разом із рішенням і відповідною підставою роботи",
    law: law.text`${law.article("242")}; умови роботи за ${law.article("118")}.`,
  },
  notification: workNotificationEvidence,
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
} satisfies Record<string, CaseGuideDocument>

// One definition per document; the register includes every stage's material.
export const workDocumentRegister: CaseGuideDocument[] =
  Object.values(workDocuments)
