import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
  administrativeAppealEvidence,
  proceduralComplaintEvidence,
  judicialComplaintEvidence,
  courtJudgmentEvidence,
} from "../../shared-document-requirements"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")
const work = createLegalTextAuthor("powierzanie-pracy")

export const otherDocuments = {
  ...common,
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявника"),
  },
  attorney: {
    ...common.attorney,
    owner:
      "Заявник уповноважує представника в належному обсязі; особистий підпис MOS і необхідна явка залишаються окремими діями",
  },
  fee: {
    ...common.fee,
    item: document(
      "stamp-duty-proof",
      "Opłata skarbowa 340 zł за дозвіл випускнику"
    ),
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 2", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}. Інші спеціальні дозволи можуть мати інші ставки чи звільнення.`,
  },
  currentDecision: {
    item: document(
      "administrative-decision",
      "Рішення про попередній студентський дозвіл до 30.09.2026"
    ),
    level: "control",
    status: "чинне на дату подання 13.07",
    owner:
      "Заявник надає видане рішення й перевіряє подальші повідомлення органу",
    proves:
      "Надану підставу та строк. На дату подання в прикладі дозвіл не відкликаний; завершення студій і відкликання дозволу є різними подіями.",
    law: law.text`${law.article("99")}, ${law.article("101")}, ${law.article("105")} і ${law.article("190a")}.`,
  },
  currentCard: {
    item: document(
      "residence-card",
      "Карта попереднього студентського дозволу до 30.09.2026"
    ),
    level: "control",
    status: "разом із попереднім рішенням",
    owner: "Заявник; чинний документ на його ім’я",
    proves:
      "Документує попередній статус. Надрукована дата не виключає рішення про відкликання і не підтверджує продовження навчання.",
    law: law.text`${law.article("242")}, ${law.article("244")}.`,
  },
  completionDispatch: {
    ...common.dispatch,
    item: document(
      "dispatch-proof",
      "Підтвердження подання повідомлення про завершення студій 03.07.2026"
    ),
    owner:
      "Заявник зберігає підтвердження й копію повідомлення щодо попереднього дозволу",
    proves:
      "Дату подання повідомлення про припинення причини студентського дозволу. Це не UPO нової заяви від 13.07 і не доказ відповіді від 20.08.",
    law: law.text`${law.article("113")}.`,
  },
  diploma: {
    item: document(
      "polish-graduation-diploma",
      "Диплом завершення вищих студій у Польщі"
    ),
    level: "required",
    status: "для дозволу випускнику",
    owner:
      "Польський заклад вищої освіти; заявник надає диплом і пояснює дату завершення",
    proves:
      "Завершені студії в польському закладі. Дата видачі диплома не замінює дату завершення; мовний курс або переклад іноземного диплома не є тим самим доказом",
    law: law.text`${law.article("188")} ust. 2a; ${law.article("190")} pkt 3.`,
  },
  search: {
    item: document(
      "job-search-evidence",
      "Листування про пошук роботи в Польщі"
    ),
    level: "control",
    status: "відповідно до фактичного пошуку",
    owner:
      "Заявник надає відгуки на вакансії, відповіді та запрошення на співбесіди",
    proves:
      "Конкретні дії, які пояснюють мету перебування. Закон не встановлює універсальної кількості заявок або обов'язкової довідки PUP для цієї підстави",
    law: law.text`${law.article("186")} ust. 1 pkt 6; ${kpa.article("75", "art. 75 KPA")}.`,
  },
  funds: {
    item: document(
      "bank-funds-certificate",
      "Довідка польського банку від 10.07.2026 про доступні 35 000 zł"
    ),
    level: "required",
    status: "подана 13.07",
    owner:
      "Банк із місцезнаходженням у Польщі видає заявнику довідку про його власні доступні кошти в PLN",
    proves:
      "Власні 35 000 zł на дату довідки без обмеження доступу. Довідка не є зарплатною випискою і сама не визначає період витрат.",
    law: law.text`${law.article("188")} ust. 1a pkt 3 і ust. 6; ${law.external("§ 3 розпорядження Dz.U. 2019 poz. 773", "https://eli.gov.pl/eli/DU/2019/773/ogl")}.`,
  },
  budget: {
    item: "Робочий розрахунок коштів на дев’ять місяців",
    level: "control",
    status: "пояснення суми, не довідка установи",
    owner:
      "Заявник зіставляє банківську довідку з договором житла та власними витратами",
    proves:
      "Умовний бюджет: (1 500 + 300 + 1 200) × 9 + 2 500 = 29 500 zł; різниця з довідкою на 35 000 zł становить 5 500 zł. Це практичний розрахунок, не законна формула віднімання житла й не підтвердження залишку після наступних витрат.",
    law: law.text`${law.article("188")} ust. 1a pkt 3 і ust. 6.`,
  },
  housing: {
    item: document(
      "residential-lease",
      "Договір оренди кімнати від 01.07.2026 до 30.06.2027"
    ),
    level: "required",
    status: "чинний і поданий 13.07",
    owner:
      "Заявник та орендодавець; підписаний договір дає заявнику право користуватися кімнатою",
    proves:
      "Забезпечене житло та погоджені 1 500 zł орендної плати і 300 zł комунальних витрат щомісяця. Договір не є підтвердженням кожного платежу.",
    law: law.text`${law.article("188")} ust. 1a pkt 2.`,
  },
  insurance: {
    item: document(
      "private-health-insurance-policy",
      "Повний чинний поліс заявника та OWU до 30.09.2026"
    ),
    reviewId: "insurance",
    level: "required",
    status: "у первинному пакеті лише сторінка поліса",
    owner:
      "Страховик; заявник зберігає виданий поліс і Ogólne warunki ubezpieczenia, загальні умови страхування",
    proves:
      "Покриття лікування заявника в Польщі у липні–вересні 2026 року. Одна подана сторінка не показує повних умов та продовження на наступний період.",
    law: law.text`${law.article("188")} ust. 1a pkt 1.`,
  },
  insuranceExtension: {
    item: document(
      "private-health-insurance-policy",
      "Продовження поліса від 01.07.2026 на 01.10.2026–30.09.2027"
    ),
    level: "required",
    status: "існувало до заяви, пропущене при поданні",
    owner:
      "Страховик видав заявнику 01.07; цей додаток не потрапив до MOS 13.07",
    proves:
      "Уже погоджене майбутнє покриття після закінчення поточного періоду. Дата видачі 01.07 відрізняється від початку його дії 01.10; це не купівля нового страхування у серпні.",
    law: law.text`${law.article("188")} ust. 1a pkt 1.`,
  },
  insurancePayment: {
    item: document(
      "bank-statement",
      "Банківське підтвердження оплати продовження поліса 01.07.2026"
    ),
    level: "required",
    status: "окремий додаток відповіді 20.08",
    owner: "Заявник отримує підтвердження виконаної операції у своєму банку",
    proves:
      "Фактичну оплату з призначенням для цього продовження. Платіж не визначає самостійно територію та умови страхового покриття.",
    law: law.text`${law.article("188")} ust. 1a pkt 1; ${kpa.article("75", "art. 75 KPA")}.`,
  },
  insurerConfirmation: {
    item: document(
      "private-health-insurance-policy",
      "Підтвердження страховика від 18.08.2026 про чинність покриття"
    ),
    level: "required",
    status: "новий лист про раніше оформлене страхування",
    owner:
      "Страховик підтверджує зв’язок поліса, продовження, оплати й періодів",
    proves:
      "Пояснює покриття витрат лікування в Польщі та оплату продовження ще 01.07. Дата серпневого листа не стає датою придбання поліса.",
    law: law.text`${law.article("188")} ust. 1a pkt 1; ${law.article("106f")}.`,
  },
  decision: {
    item: document("administrative-decision", "Decyzja про дозвіл або відмову"),
    level: "control",
    status: "після рішення",
    owner:
      "Орган видає; заявник або представник читає результат, мотиви й pouczenie",
    proves:
      "Наданий дозвіл і його період або причину відмови. Проміжна відповідь на wezwanie ще не є рішенням",
    law: law.text`${law.article("190")}; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Karta pobytu після надання дозволу"),
    level: "control",
    status: "при отриманні",
    owner: "Заявник звіряє дані та строк; картку читають разом із рішенням",
    proves:
      "Документує наданий статус. Диплом і допустима підстава перебування визначають звільнення від дозволу на працю; карта не замінює всіх цих умов",
    law: law.text`${law.article("242")}, ${law.article("244")}; ${work.article("3", "art. 3 ust. 3 і ust. 5 pkt 3 закону про працю іноземців")}.`,
  },
  notification: {
    item: document(
      "temporary-residence-notification",
      "Повідомлення про припинення причини дозволу"
    ),
    level: "conditional",
    status: "коли припинилася причина вже наданого дозволу",
    owner: "Власник дозволу або представник повідомляє відповідного wojewodę",
    proves:
      "Подію та дату, про які повідомлено. Не створює нової підстави перебування і не гарантує збереження попереднього дозволу",
    law: law.text`${law.article("113")}.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
  traineeVolunteerAnnex: {
    item: document(
      "trainee-volunteer-annex",
      "Додаток організатора стажування або волонтерства"
    ),
    level: "conditional",
    status: "інша підстава; не додаток до заяви випускника",
    owner: "У MOS підписує належний представник приймаючої організації",
    proves:
      "Дані заявника й організації для спеціального стажування або європейського волонтерства. Затвердження, договір та програму підтверджують окремо",
    law: law.text`${law.article("106")} ust. 5; ${law.article("106d")} ust. 4; ${law.article("157a")} і ${law.article("157g")}.`,
  },
  researchAnnex: {
    item: document("research-annex", "Додаток науковця"),
    level: "conditional",
    status: "для проведення досліджень або мобільності; не для випускника",
    owner: "Заявник заповнює і підписує разом із заявою MOS",
    proves:
      "Дані науковця, установи та програми мобільності. Завершення досліджень для наступного пошуку роботи підтверджує інший документ установи",
    law: law.text`${law.article("106")} ust. 6; ${law.article("106d")} ust. 3; ${law.article("151")}, ${law.article("151b")} і ${law.article("188")} ust. 2b.`,
  },
  ictApplication: {
    item: document("ict-application", "Окрема паперова заява ICT"),
    level: "conditional",
    status: "для переведення або довгострокової мобільності ICT",
    owner: "Jednostka przyjmująca, приймаюча організація в Польщі",
    proves:
      "Заявлене внутрішньокорпоративне переведення. Зв'язок компаній, попередню роботу та умови переведення доводять додатками",
    law: law.text`${law.article("106k")}, ${law.article("139a")} і ${law.article("139o")}.`,
  },
} satisfies Record<string, CaseGuideDocument>

export const otherDocumentRegister: CaseGuideDocument[] =
  Object.values(otherDocuments)
