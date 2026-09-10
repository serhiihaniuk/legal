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
  status: {
    item: document(
      "status-documents",
      "Віза та попередні документи перебування"
    ),
    level: "control",
    status: "до подання",
    owner: "Заявник надає візу, рішення та пов'язані записи про поїздки",
    proves:
      "Дозволений період і підставу перебування на дату заяви. Карта або віза іншої держави ЄС потребує окремого аналізу мобільності",
    law: law.text`${law.article("99")}, ${law.article("105")}, ${law.article("145a")} і ${law.article("149b")}.`,
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
  tuition: {
    item: document(
      "tuition-payment",
      "Оплата семестру або підтвердження безоплатності"
    ),
    level: "conditional",
    status: "доказ оплати для платних студій",
    owner: "Банк і заклад; перекази та їх зарахування за конкретного студента",
    proves:
      "Скільки належить і сплачено за семестр або рік. Майбутні витрати визначає графік оплат; часткова квитанція ще не показує повної оплати",
    law: law.text`${law.article("144")} ust. 1 pkt 1 lit. b і pkt 2 lit. b.`,
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
      "income-evidence",
      "Банківська довідка, стипендія або інше підтвердження коштів"
    ),
    level: "required",
    status: "належний доказ обраного фінансування",
    owner:
      "Банк, надавач стипендії або роботодавець; за утримання іншою особою також докази цього зв'язку",
    proves:
      "Доступну суму або належне джерело коштів. Для цієї підстави не вимагають автоматично такої самої історії регулярного доходу, як для rezydenta UE",
    law: law.text`${law.article("144")}; ${law.external("§ 3–4 розпорядження Dz.U. 2022 poz. 78", "https://eli.gov.pl/eli/DU/2022/78/ogl")}: види доказів, свіжість довідок і курс NBP.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Договір проживання й розрахунок витрат на житло"
    ),
    level: "conditional",
    status: "коли витрати на житло враховують у розрахунку",
    owner:
      "Заявник і надавач житла; договір, склад платежів та кількість мешканців",
    proves:
      "Фактичні витрати заявника. Сам meldunek, тобто реєстрація адреси, не показує орендної плати й комунальних платежів",
    law: law.text`${law.article("144")} ust. 1a–1c; виняток для громадян Білорусі за ${law.external("розпорядженням Dz.U. 2020 poz. 1688", "https://eli.gov.pl/eli/DU/2020/1688/ogl")}.`,
  },
  insurance: {
    item: document(
      "health-insurance",
      "Медичне страхування та підтвердження покриття"
    ),
    reviewId: "insurance",
    level: "required",
    status: "відповідно до фактичного страхування",
    owner: "Заявник; документи публічного страхування або поліс та його умови",
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
