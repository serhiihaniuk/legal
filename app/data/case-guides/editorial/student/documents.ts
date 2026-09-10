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

export const studentDocuments = {
  ...common,
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявника"),
  },
  visa: {
    item: document(
      "visa",
      "Національна віза з дозволеним перебуванням до 30.09.2026"
    ),
    level: "control",
    status: "наявна підстава перебування",
    owner: "Заявник надає сторінку паспорта з візою та відомості про поїздки",
    proves:
      "Візову мету, чинність і дозволений період перебування. Їх зіставляють із фактичними в’їздами; майбутнє навчання не продовжує візу",
    law: law.text`${law.article("99")}, ${law.article("105")} і ${law.article("145a")}.`,
  },
  annex: {
    item: document("study-annex", "Електронний додаток навчального закладу"),
    level: "required",
    status: "до нової заяви MOS",
    owner:
      "Уповноважена особа закладу заповнює й підписує додаток через посилання MOS",
    proves:
      "Прийняття або продовження навчання, форму, програму, період, платність і прогрес при продовженні. Додаток не замінює окремих доказів коштів і страхування",
    law: law.text`${law.article("106")} ust. 7; ${law.article("106d")}.`,
  },
  studyCertificate: {
    item: document(
      "study-confirmation",
      "Довідка про прийняття або актуальне навчання"
    ),
    level: "conditional",
    status: "для уточнення, пільги або попередньої процедури",
    owner:
      "Навчальний заклад; дата й зміст відповідають питанню, яке треба підтвердити",
    proves:
      "Конкретний статус і період. У новій заяві не замінює додатка MOS; актуальне навчання може підтвердити підставу пільги за карту",
    law: law.text`${law.article("106")} ust. 7; ${law.article("237")}; ${law.external("art. 12 закону Dz.U. 2025 poz. 1794", "https://eli.gov.pl/eli/DU/2025/1794/ogl")}: попередні правила для раніше розпочатих проваджень.`,
  },
  tuitionFirst: {
    item: document(
      "tuition-payment",
      "Підтвердження виконаного переказу 3 000 zł від 05.08.2026"
    ),
    level: "control",
    status: "є в початковому пакеті",
    owner:
      "Банк підтверджує виконану операцію заявника на користь університету",
    proves:
      "Першу частину оплати семестру. Не підтверджує самостійно всіх належних 6 000 zł",
    law: law.text`${law.article("144")} ust. 1 pkt 1 lit. b.`,
  },
  tuitionSecond: {
    item: document(
      "tuition-payment",
      "Підтвердження виконаного переказу 3 000 zł від 10.08.2026"
    ),
    level: "control",
    status: "пропущено при першому поданні",
    owner: "Банк підтверджує другу виконану операцію",
    proves:
      "Другу частину вже здійсненої оплати. У відповіді додають пропущений доказ, а не платять ті самі 3 000 zł повторно",
    law: law.text`${law.article("144")} ust. 1 pkt 1 lit. b.`,
  },
  tuitionConfirmation: {
    item: document(
      "tuition-payment",
      "Підтвердження університету про зарахування 6 000 zł за перший семестр"
    ),
    level: "control",
    status: "для уточнення повноти оплати",
    owner:
      "Університет пов’язує обидва серпневі перекази із заявником і першим семестром",
    proves:
      "Зарахування 3 000 + 3 000 zł у повну оплату потрібного семестру. Не доводить наявності грошей на майбутні семестри",
    law: law.text`${law.article("144")} ust. 1 pkt 1 lit. b.`,
  },
  tuitionSchedule: {
    item: document(
      "tuition-payment",
      "Графік майбутніх навчальних платежів: 12 000 zł у межах розрахунку"
    ),
    level: "control",
    status: "джерело майбутніх витрат",
    owner: "Університет визначає строки й суми плати для програми заявника",
    proves:
      "Два майбутні платежі по 6 000 zł, у березні й жовтні 2027 року. Графік показує витрати, а не їх оплату",
    law: law.text`${law.article("144")} ust. 1 pkt 2 lit. b.`,
  },
  progress: {
    item: document(
      "study-progress",
      "Виписка результатів і пояснення перебігу навчання"
    ),
    level: "conditional",
    status: "при уточненні прогресу або за попередніми правилами",
    owner:
      "Заклад пояснює зараховані предмети, повторення, перерву або зміну статусу",
    proves:
      "Перебіг навчання у конкретний період. При продовженні ці дані входять до додатка MOS; окрема виписка не є другим універсальним додатком",
    law: law.text`${law.article("106")} ust. 7 pkt 9; ${law.article("147")} і ${law.article("148")}.`,
  },
  money: {
    item: document(
      "bank-funds-certificate",
      "Банківська довідка від 12.08.2026 про 50 000 zł"
    ),
    level: "control",
    status: "обране підтвердження доступних коштів",
    owner: "Банк із місцезнаходженням у Польщі видає іменну довідку заявника",
    proves:
      "50 000 zł після обох переказів за семестр. Довідка про залишок не є історією доходу та не фіксує майбутню незмінність суми",
    law: law.text`${law.article("144")}; ${law.external("§ 3–4 розпорядження Dz.U. 2022 poz. 78", "https://eli.gov.pl/eli/DU/2022/78/ogl")}: належний банк, дата довідки й перерахунок валют.`,
  },
  budget: {
    item: "Розрахунок коштів на 01.10.2026–31.12.2027",
    level: "control",
    status: "пояснення сум у відповіді",
    owner:
      "Заявник або представник складає з даних банку, договору житла та графіка університету",
    proves:
      "Як 49 000 zł витрат за конкретними припущеннями зіставлено з довідкою про 50 000 zł. Сам розрахунок не створює коштів і не замінює джерел сум",
    law: law.text`${law.article("144")} ust. 1 pkt 2 lit. b і ust. 1a–1c.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Підписаний договір оренди: 1 200 zł на місяць з усіма житловими платежами"
    ),
    level: "conditional",
    status: "коли витрати на житло враховують у розрахунку",
    owner:
      "Заявник і орендодавець; договір охоплює період розрахунку та визначає повні витрати заявника",
    proves:
      "Фактичні витрати заявника. Сам meldunek, тобто реєстрація адреси, не показує орендної плати й комунальних платежів",
    law: law.text`${law.article("144")} ust. 1a–1c; виняток для громадян Білорусі за ${law.external("розпорядженням Dz.U. 2020 poz. 1688", "https://eli.gov.pl/eli/DU/2020/1688/ogl")}.`,
  },
  insurance: {
    item: document(
      "health-insurance",
      "Оплачений приватний поліс із покриттям лікування в Польщі та його умови"
    ),
    reviewId: "insurance",
    level: "required",
    status: "обраний страховий документ цього прикладу",
    owner:
      "Заявник надає чинний приватний поліс і умови; оплата та покриття визначені в обраному документі",
    proves:
      "Страхування в системі охорони здоров'я або покриття страховиком лікування в Польщі. Студентський квиток сам по собі цього не доводить",
    law: law.text`${law.article("144")} ust. 1 pkt 2 lit. a.`,
  },
  attorney: {
    ...common.attorney,
    owner:
      "Заявник уповноважує представника; право підписати додаток за університет перевіряють окремо",
  },
  fee: {
    ...common.fee,
    item: document("stamp-duty-proof", "Opłata skarbowa 340 zł"),
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 2", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}.`,
  },
  cardFee: {
    ...common.cardFee,
    proves:
      "Стандартно 100 zł за карту, з окремими підставами звільнення чи пільги. Актуальне навчання, підтверджене належною довідкою, дає 50 % пільги. Прийняття на майбутню програму не дорівнює вже розпочатому навчанню",
    law: law.text`${law.article("237")}; ${law.external("§ 2 і 4 розпорядження Dz.U. 2022 poz. 1583", "https://eli.gov.pl/eli/DU/2022/1583/ogl")}.`,
  },
  decision: {
    item: document("administrative-decision", "Decyzja про дозвіл або відмову"),
    level: "control",
    status: "після рішення",
    owner: "Орган видає; заявник або представник читає повний акт",
    proves:
      "Результат, підставу, період, мотиви та порядок оскарження. Сама дата закінчення карти не показує, чи не припинилася причина дозволу",
    law: law.text`${law.article("145")}, ${law.article("147")}, ${law.article("148")}; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Karta pobytu після надання дозволу"),
    level: "control",
    status: "при отриманні",
    owner: "Заявник; звіряє особисті дані, строк і належні позначки",
    proves:
      "Документує наданий статус. Для права працювати читають також підставу дозволу; для поїздки потрібний чинний паспорт та виконання умов в'їзду",
    law: law.text`${law.article("242")}, ${law.article("244")}; ${law.external("art. 3 ust. 1 pkt 14 закону Dz.U. 2025 poz. 621", "https://eli.gov.pl/eli/DU/2025/621/ogl")}.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
  notification: {
    item: document(
      "temporary-residence-notification",
      "Повідомлення про припинення причини дозволу"
    ),
    level: "conditional",
    status: "якщо причина вже наданого дозволу припинилася",
    owner: "Власник дозволу або належний представник; до відповідного wojewody",
    proves:
      "Яку подію та її дату повідомлено. Доказ подання зберігають окремо; повідомлення університету не замінює дії заявника",
    law: law.text`${law.article("113")}; ${law.article("149")} ust. 3.`,
  },
} satisfies Record<string, CaseGuideDocument>

export const studentDocumentRegister: CaseGuideDocument[] =
  Object.values(studentDocuments)
