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
  status: {
    item: document(
      "status-documents",
      "Попередній дозвіл і документи перебування"
    ),
    level: "control",
    status: "до заяви випускника",
    owner: "Заявник надає рішення, карту й відомості про попередні провадження",
    proves:
      "Підставу та законність перебування на дату подання. Завершення студій, строк карти й можливе відкликання дозволу є різними подіями",
    law: law.text`${law.article("99")}, ${law.article("101")}, ${law.article("105")} і ${law.article("190a")}.`,
  },
  diploma: {
    item: document(
      "qualification-evidence",
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
    item: document("income-evidence", "Кошти на утримання і повернення"),
    level: "required",
    status: "для дозволу випускнику",
    owner: "Заявник; документовані доступні кошти, період і витрати",
    proves:
      "Достатність коштів на утримання та повернення. Це не вимога мати трудовий договір зі стабільним доходом; залишок і щомісячну зарплату не ототожнюють",
    law: law.text`${law.article("188")} ust. 1a pkt 3 і ust. 6.`,
  },
  housing: {
    item: document("housing-evidence", "Підтвердження забезпеченого житла"),
    level: "required",
    status: "для дозволу випускнику",
    owner:
      "Заявник і надавач житла; договір або інший належний доказ можливості проживати",
    proves:
      "Де та на яких умовах заявник має забезпечене місце проживання в Польщі. Сама адреса для листування цього не встановлює",
    law: law.text`${law.article("188")} ust. 1a pkt 2.`,
  },
  insurance: {
    item: document("health-insurance", "Медичне страхування та умови покриття"),
    reviewId: "insurance",
    level: "required",
    status: "для дозволу випускнику",
    owner:
      "Заявник; підтвердження публічного страхування або поліс та умови страховика",
    proves:
      "Належне страхування або покриття лікування в Польщі. Завершення навчання вимагає встановити фактичне подальше покриття, а не припускати його зі студентського квитка",
    law: law.text`${law.article("188")} ust. 1a pkt 1.`,
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
