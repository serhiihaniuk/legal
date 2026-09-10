import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"
import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
  administrativeAppealEvidence,
  proceduralComplaintEvidence,
  judicialComplaintEvidence,
  courtJudgmentEvidence,
  workNotificationEvidence,
} from "../../shared-document-requirements"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const workDocuments = {
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявника"),
  },
  currentDecision: {
    item: document(
      "administrative-decision",
      "Чинне рішення про pobyt czasowy i pracę до 31.08.2026"
    ),
    level: "control",
    status: "до вибору заяви",
    owner:
      "Заявник надає; працівник читає рішення разом із картою та історією справ",
    proves:
      "Чинну підставу перебування і, якщо дозвіл містить умови праці, роботу, яку він охоплює. Самої дати на карті недостатньо",
    law: law.text`${law.article("99")}, ${law.article("105")}, ${law.article("108")} і ${law.article("118")}.`,
  },
  currentCard: {
    item: document("residence-card", "Карта до чинного дозволу, до 31.08.2026"),
    level: "control",
    status: "документ нинішнього статусу",
    owner: "Заявник надає свою карту",
    proves:
      "Посвідчує наданий статус; умови роботи встановлюють із повного рішення, а не лише з напису на карті",
    law: law.text`${law.article("242")}; ${law.article("118")}.`,
  },
  chronology: common.chronology,
  contract: {
    item: document(
      "employment-contract",
      "Umowa o pracę з початковою сумою 5 500 zł"
    ),
    reviewId: "contract",
    level: "control",
    status: "доказ у цьому прикладі",
    owner: "Заявник і роботодавець; підписаний договір із початковими умовами",
    proves:
      "Домовленість про посаду, час, оплату та період роботи. Виплату зарплати і фактичні обов'язки підтверджують окремі матеріали",
    law: law.text`${law.article("114")}. Ця підстава допускає також інші договори; umowa o pracę не є універсально обов'язковим видом договору.`,
  },
  contractAmendment: {
    item: document(
      "employment-contract",
      "Aneks від 20.07.2026: 6 000 zł із 01.08.2026"
    ),
    level: "control",
    status: "підписана зміна договору в цьому прикладі",
    owner: "Заявник і компанія A підписали; заявник зберігає оригінал",
    proves:
      "Зміну договірної зарплати з визначеної дати. Не підтверджує фактичної виплати та не замінює Załącznika nr 1 роботодавця",
    law: law.text`${law.article("114")}; оригінал на вимогу за ${law.article("106f")}.`,
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
      "Актуальна інформація KRS про компанію A"
    ),
    reviewId: "representation",
    level: "control",
    status: "перевірка роботодавця",
    owner:
      "Працівник отримує інформацію з KRS і звіряє осіб та спосіб представництва",
    proves:
      "Існування компанії A та зареєстрований спосіб представництва. Окреме уповноваження підписанта не є частиною KRS; реєстр не доводить платоспроможності",
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
  insurance: {
    item: document(
      "zus-health-registration",
      "Potwierdzenie zgłoszenia do ubezpieczenia zdrowotnego з eZUS"
    ),
    level: "control",
    status: "підтвердження чинного страхового запису в цьому прикладі",
    owner: "Заявник формує іменне підтвердження у своєму eZUS",
    proves:
      "Поточний запис про медичне страхування заявника на дату створення документа. Не доводить виплату зарплати, відсутність боргу компанії чи майбутнє покриття",
    law: law.text`${law.article("114")} ust. 1 pkt 1. Для страхування через майбутню роботу діє ust. 4a; цей документ не є універсальним обов'язковим вкладенням.`,
  },
  payroll: {
    item: document(
      "payroll-statement",
      "Pasek wynagrodzenia за липень 2026 року"
    ),
    level: "conditional",
    status: "лише якщо перевіряють фактичне нарахування за липень",
    owner: "Компанія A надає іменний розрахунок заявника за названий місяць",
    proves:
      "Нараховану липневу зарплату, відрахування та суму до виплати. Не доводить надходження коштів і не підтверджує нову договірну суму із серпня",
    law: law.text`${law.article("114")} ust. 1 pkt 4–5; оцінка за ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  bank: {
    item: document(
      "bank-statement",
      "Wyciąg bankowy за період виплати в серпні 2026 року: зарплата за липень"
    ),
    level: "conditional",
    status: "якщо перевіряють липневу виплату, здійснену в серпні",
    owner:
      "Заявник отримує виписку свого рахунку за період відповідної операції",
    proves:
      "Фактичне надходження, платника, дату й призначення. Зв'язок із липнем установлюють за призначенням і розрахунком, а не лише за місяцем переказу",
    law: law.text`${kpa.article("80", "Art. 80 KPA")}; поріг brutto за ${law.article("114")} не замінюють сумою netto на рахунку.`,
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
    item: document(
      "administrative-decision",
      "Нове рішення про pobyt czasowy i pracę для компанії A"
    ),
    reviewId: "decision",
    level: "control",
    status: "після вручення",
    owner: "Орган видає; заявник або представник читає весь документ",
    proves:
      "Результат розгляду, період дозволу й умови роботи. Обґрунтування пояснює встановлені факти та застосоване право",
    law: law.text`${law.article("118")}; ${kpa.article("107", "Art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Карта до нового дозволу для компанії A"),
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
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
} satisfies Record<string, CaseGuideDocument>

// One definition per document; the register includes every stage's material.
export const workDocumentRegister: CaseGuideDocument[] =
  Object.values(workDocuments)
