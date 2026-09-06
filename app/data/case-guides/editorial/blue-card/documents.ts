import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
  administrativeAppealEvidence,
  proceduralComplaintEvidence,
} from "../../shared-document-requirements"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const blueCardDocuments = {
  ...common,
  status: {
    item: document(
      "status-documents",
      "Нинішній дозвіл і попередні документи перебування"
    ),
    level: "control",
    status: "до вибору підстави",
    owner: "Заявник надає повні рішення, карти та візові дані",
    proves:
      "Підставу перебування на дату заяви та роботу, яку можна виконувати зараз. Дата видачі попередньої Blue Card має значення для правил зміни роботи",
    law: law.text`${law.article("99")}, ${law.article("105")}, ${law.article("108")} і ${law.article("131")}; ${law.external("art. 20 закону Dz.U. 2025 poz. 619", "https://eli.gov.pl/eli/DU/2025/619/ogl")}.`,
  },
  contract: {
    item: document(
      "employment-contract",
      "Укладений договір про роботу та aneksy"
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
  qualifications: {
    item: document(
      "qualification-evidence",
      "Освіта або належний досвід; професійний допуск за потреби"
    ),
    level: "required",
    status: "для роботи, яку заявлено",
    owner:
      "Заявник; диплом і матеріали про навчання або документи про фактичний професійний досвід",
    proves:
      "Для нерегульованої професії: відповідні вищі кваліфікації через освіту або досвід. Для регульованої: формальні кваліфікації й інші необхідні умови виконання професії",
    law: law.text`${law.article("3")} pkt 6, 6a і 25; ${law.article("127")} pkt 1 lit. b–c і ${law.article("130")}. Диплом і досвід не є двома обов'язковими пакетами одночасно.`,
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
    item: document("health-insurance", "Підтвердження медичного страхування"),
    level: "required",
    status: "окрема умова Blue Card",
    owner:
      "Заявник; документ про публічне страхування або покриття страховиком лікування в Польщі",
    proves:
      "Особу, вид і період належного покриття. Обіцянка укласти договір страхування не підтверджує наявне покриття",
    law: law.text`${law.article("127")} pkt 1 lit. d. Правило про майбутнє страхування зі звичайного дозволу за ${law.article("114")} ust. 4a не переноситься сюди автоматично.`,
  },
  zus: {
    item: document("zus-confirmation", "Дані ZUS про страхування заявника"),
    level: "conditional",
    status: "якщо підстава страхування проходить через ZUS",
    owner: "Заявник або платник внесків; відомості за потрібний період",
    proves:
      "Реєстрацію й медичне страхування саме цієї особи. Окремий переказ внесків компанії не показує весь страховий статус працівника",
    law: law.text`${law.article("127")} pkt 1 lit. d.`,
  },
  income: {
    item: document(
      "income-evidence",
      "Розрахунки та виплати за виконану роботу"
    ),
    level: "conditional",
    status: "якщо треба звірити фактичну оплату",
    owner: "Роботодавець і заявник; відомості за названі місяці",
    proves:
      "Як виконують договірні умови на практиці. Для порога Blue Card вихідною є річна винагорода brutto з договору; банківський залишок або переказ netto цього не замінює",
    law: law.text`${law.article("127")} pkt 3; ${kpa.article("80", "Art. 80 KPA")}.`,
  },
  company: {
    item: document(
      "business-register-information",
      "KRS/CEIDG і повноваження підписанта"
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
  business: {
    item: document(
      "business-evidence",
      "Матеріали про діяльність, податки та внески роботодавця"
    ),
    level: "conditional",
    status: "для конкретної перевірки або вимоги",
    owner: "Роботодавець; документи, які відповідають питанню органу",
    proves:
      "Реальну діяльність та обставини, пов'язані з підставами відмови. Наявну заборгованість читають разом із законними відстроченнями, розстроченнями та іншими винятками",
    law: law.text`${law.article("132")}. Це не універсальна вимога завантажити всю бухгалтерію до кожної заяви.`,
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
} satisfies Record<string, CaseGuideDocument>

export const blueCardDocumentRegister: CaseGuideDocument[] = [
  blueCardDocuments.passport,
  blueCardDocuments.status,
  blueCardDocuments.chronology,
  blueCardDocuments.contract,
  blueCardDocuments.annex,
  blueCardDocuments.blueAnnex,
  blueCardDocuments.qualifications,
  blueCardDocuments.job,
  blueCardDocuments.insurance,
  blueCardDocuments.zus,
  blueCardDocuments.income,
  blueCardDocuments.company,
  blueCardDocuments.business,
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
