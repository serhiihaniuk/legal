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

export const blueCardDocuments = {
  ...common,
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявника"),
  },
  currentDecision: {
    item: document(
      "administrative-decision",
      "Чинне рішення про pobyt czasowy i pracę до 30.09.2026"
    ),
    level: "control",
    status: "до вибору нової заяви",
    owner: "Заявник надає повне рішення про нинішню роботу в компанії A",
    proves:
      "Підставу нинішнього перебування та дозволені умови роботи. Майбутня Blue Card ще не діє",
    law: law.text`${law.article("99")}, ${law.article("105")}, ${law.article("108")} і ${law.article("118")}.`,
  },
  currentCard: {
    item: document("residence-card", "Карта до чинного дозволу, до 30.09.2026"),
    level: "control",
    status: "наявний документ перебування",
    owner: "Заявник надає карту разом із повним рішенням",
    proves: "Документує нинішній статус; не показує всіх умов роботи з рішення",
    law: law.text`${law.article("242")}; ${law.article("118")}.`,
  },
  currentContract: {
    item: document(
      "employment-contract",
      "Нинішній договір про роботу програмістом у компанії A"
    ),
    level: "control",
    status: "робота до 30.09.2026",
    owner: "Заявник і роботодавець; наявний підписаний договір",
    proves:
      "Яку роботу заявник виконує зараз. Новий договір із початком 01.10.2026 не замінює читання нинішніх умов",
    law: law.text`${law.article("118")}; ${law.article("129")}.`,
  },
  contract: {
    item: document(
      "employment-contract",
      "Новий договір від 12.08.2026: 14 000 zł brutto з 01.10.2026"
    ),
    reviewId: "contract",
    level: "required",
    status: "щонайменше на шість місяців",
    owner: "Заявник і роботодавець; підписаний договір із чинними змінами",
    proves:
      "Домовленість про роботу, її період та винагороду brutto. Закон допускає зазначені в ньому трудові й цивільні договори; самого листа з пропозицією роботи недостатньо",
    law: law.text`${law.article("127")} pkt 1 lit. a і pkt 3.`,
  },
  annex: {
    item: document("employment-annex-1", "Załącznik nr 1"),
    reviewId: "annex",
    level: "required",
    status: "додаток роботодавця",
    owner:
      "Роботодавець або належний підписант; електронне заповнення і підпис",
    proves:
      "Роботодавця, умови роботи й заявлену винагороду. Його дані мають відповідати договору та реальній посаді",
    law: law.text`${law.article("106")} ust. 2; ${law.article("106c")} і ${law.article("106d")}. Це назва додатка до заяви; у розпорядженні з формами він має інший порядковий номер.`,
  },
  experience: {
    item: document(
      "professional-experience-confirmation",
      "Первинний лист про досвід 2021–2024 років: IT specialist"
    ),
    level: "control",
    status: "наявний доказ із прогалиною",
    owner: "Попередній роботодавець видав; заявник подає лист",
    proves:
      "Період 01.09.2021–31.08.2024 і загальну назву посади. Без опису завдань не показує досвіду програміста потрібного рівня",
    law: law.text`${law.article("3")} pkt 6a і 25; ${law.article("127")} pkt 1 lit. c.`,
  },
  experienceClarification: {
    item: document(
      "professional-experience-confirmation",
      "Уточнений лист попереднього роботодавця від 27.08.2026"
    ),
    level: "control",
    status: "відповідь на питання про зміст досвіду",
    owner:
      "Попередній роботодавець описує фактично виконувані завдання та їх період",
    proves:
      "Розроблення, тестування й підтримку застосунків у 2021–2024 роках. Читається разом із первинним листом і договором, не стирає стару версію",
    law: law.text`${law.article("3")} pkt 6a; ${law.article("127")} pkt 1 lit. c; ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  priorContract: {
    item: document(
      "employment-contract",
      "Договір із попереднім роботодавцем на період 01.09.2021–31.08.2024"
    ),
    level: "control",
    status: "первинний матеріал про попередню роботу",
    owner: "Заявник зберігає договір із попереднім роботодавцем",
    proves:
      "Домовленість про роботу в названий період. Сам договір не доводить фактичного виконання всіх завдань; його звіряють із підтвердженням роботодавця",
    law: law.text`${law.article("3")} pkt 6a; ${law.article("127")} pkt 1 lit. c.`,
  },
  blueAnnex: {
    item: document(
      "blue-card-annex",
      "Додаток заявника про кваліфікації Blue Card"
    ),
    level: "required",
    status: "окремо від додатка роботодавця",
    owner: "Заявник; заповнює й підписує електронно разом із заявою",
    proves:
      "Яку освіту або досвід заявляє людина. Відомості у формі звіряють із дипломом чи документами про досвід; сама декларація їх не замінює",
    law: law.text`${law.article("106")} ust. 4; ${law.external("форма в załączniku nr 3 розпорядження Dz.U. 2026 poz. 553", "https://eli.gov.pl/eli/DU/2026/553/ogl")}. У комплекті заяви це додаток заявника про високі кваліфікації.`,
  },
  job: {
    item: document("job-description", "Опис посади та фактичних обов'язків"),
    level: "conditional",
    status: "якщо договору і додатка недостатньо",
    owner: "Роботодавець; пояснює завдання та потрібні для них знання",
    proves:
      "Чому конкретна робота вимагає високих кваліфікацій і як із нею пов'язана освіта чи досвід заявника. Назва IT specialist не описує всіх цих фактів",
    law: law.text`${law.article("3")} pkt 24–25; ${law.article("127")}.`,
  },
  insurance: {
    item: document(
      "zus-health-registration",
      "Іменне підтвердження поточного медичного страхування з eZUS"
    ),
    level: "control",
    status: "обраний доказ страхування в цьому прикладі",
    owner:
      "Заявник отримує документ про своє актуальне zgłoszenie до медичного страхування",
    proves:
      "Реєстрацію саме заявника через нинішню роботу. Загальний платіж компанії або відсутність її боргу не підтверджують той самий факт",
    law: law.text`${law.article("127")} pkt 1 lit. d. Правило про майбутнє страхування за ${law.article("114")} ust. 4a сюди автоматично не переноситься.`,
  },
  payroll: {
    item: document(
      "payroll-statement",
      "Pasek wynagrodzenia за липень 2026 року за нинішньою роботою"
    ),
    level: "conditional",
    status: "лише для перевірки фактичного нарахування",
    owner: "Роботодавець надає індивідуальний розрахунок за названий місяць",
    proves:
      "Нараховану суму brutto, утримання та netto за липень. Не доводить майбутньої зарплати 14 000 zł з жовтня",
    law: law.text`${law.article("127")} pkt 3; ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  bank: {
    item: document(
      "bank-statement",
      "Wyciąg bankowy за період виплати зарплати за липень 2026 року"
    ),
    level: "conditional",
    status: "лише для звірення конкретної виплати",
    owner: "Заявник отримує виписку за період фактичного переказу",
    proves:
      "Дату, платника й суму зарахування. Її зіставляють із липневим розрахунком; переказ netto не замінює річну договірну винагороду brutto",
    law: law.text`${law.article("127")} pkt 3; ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  company: {
    item: document(
      "business-register-information",
      "Актуальна інформація KRS про компанію A"
    ),
    reviewId: "representation",
    level: "control",
    status: "перевірка суб'єкта й підпису",
    owner:
      "Працівник перевіряє реєстр на дату підпису; роботодавець пояснює уповноваження",
    proves:
      "Існування роботодавця й спосіб представництва. Не доводить автоматично реальної діяльності, сплати податків або внесків",
    law: law.text`${law.article("106d")} ust. 4; ${law.article("132")}.`,
  },

  decision: {
    item: document("administrative-decision", "Decyzja про Blue Card"),
    reviewId: "decision",
    level: "control",
    status: "після вручення",
    owner:
      "Орган видає; заявник або представник читає результат, обґрунтування і pouczenie",
    proves:
      "Наданий період і право виконувати висококваліфіковану роботу за належну винагороду. Нове рішення має інший зміст, ніж звичайний дозвіл із переліком умов конкретного роботодавця",
    law: law.text`${law.article("137")}; ${kpa.article("107", "Art. 107 KPA")}. Для давнішого рішення важлива перехідна норма ${law.external("art. 20 ust. 4 закону Dz.U. 2025 poz. 619", "https://eli.gov.pl/eli/DU/2025/619/ogl")}.`,
  },
  card: {
    item: document(
      "residence-card",
      "Karta pobytu з позначкою Niebieska Karta UE"
    ),
    level: "control",
    status: "після видачі",
    owner: "Заявник; звіряє дані, строк і позначки при отриманні",
    proves:
      "Документує отриманий статус. Поїздка або робота в іншій країні ЄС потребує перевірки відповідного режиму мобільності",
    law: law.text`${law.article("242")}; ${law.article("137a")} стосується довгострокової мобільності до Польщі.`,
  },
  notification: {
    item: document(
      "blue-card-notification",
      "Zawiadomienie про зміну роботи або мобільність"
    ),
    level: "conditional",
    status: "коли відбулася зазначена в законі зміна",
    owner: "Власник Blue Card; письмове повідомлення належному wojewodzie",
    proves:
      "Яку подію й дату повідомлено. Разом зберігають підписану копію, додатки й доказ подання; саме повідомлення не виправляє невиконаних умов дозволу",
    law: law.text`${law.article("134")} і ${law.article("134a")}; для рішень, виданих до 01.06.2025, діють зазначені в перехідній нормі попередні правила.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
} satisfies Record<string, CaseGuideDocument>

export const blueCardDocumentRegister: CaseGuideDocument[] = [
  blueCardDocuments.passport,
  blueCardDocuments.currentDecision,
  blueCardDocuments.currentCard,
  blueCardDocuments.currentContract,
  blueCardDocuments.chronology,
  blueCardDocuments.contract,
  blueCardDocuments.annex,
  blueCardDocuments.blueAnnex,
  blueCardDocuments.experience,
  blueCardDocuments.experienceClarification,
  blueCardDocuments.priorContract,
  blueCardDocuments.job,
  blueCardDocuments.insurance,
  blueCardDocuments.payroll,
  blueCardDocuments.bank,
  blueCardDocuments.company,
  blueCardDocuments.translation,
  blueCardDocuments.matrix,
  blueCardDocuments.assessment,
  blueCardDocuments.application,
  blueCardDocuments.photo,
  blueCardDocuments.attorney,
  blueCardDocuments.fee,
  blueCardDocuments.cardFee,
  blueCardDocuments.upo,
  blueCardDocuments.index,
  blueCardDocuments.summons,
  blueCardDocuments.order,
  blueCardDocuments.appeal,
  blueCardDocuments.complaint,
  blueCardDocuments.judicialComplaint,
  blueCardDocuments.courtJudgment,
  blueCardDocuments.delivery,
  blueCardDocuments.requirements,
  blueCardDocuments.response,
  blueCardDocuments.dispatch,
  blueCardDocuments.certificate,
  blueCardDocuments.fingerprints,
  blueCardDocuments.signature,
  blueCardDocuments.decision,
  blueCardDocuments.card,
  blueCardDocuments.notification,
  blueCardDocuments.obstacle,
]
