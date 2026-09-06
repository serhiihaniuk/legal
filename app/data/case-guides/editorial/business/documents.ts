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
const work = createLegalTextAuthor("powierzanie-pracy")
const kpa = createLegalTextAuthor("kpa")

export const businessDocuments = {
  ...common,
  status: {
    item: document(
      "status-documents",
      "Віза та попередні рішення про перебування"
    ),
    level: "control",
    status: "до подання",
    owner: "Заявник; разом із паспортом та історією поїздок",
    proves:
      "Нинішню підставу, дозволений період і можливі обмеження подання. Власність у компанії не продовжує перебування",
    law: law.text`${law.article("99")}, ${law.article("105")} і ${law.article("108")}.`,
  },
  registry: {
    item: document(
      "business-register-information",
      "KRS/CEIDG і документи про роль у бізнесі"
    ),
    level: "required",
    status: "відповідно до правової форми",
    owner:
      "Заявник і компанія; відомості реєстру, документи про частки, призначення та представництво",
    proves:
      "Який суб'єкт веде діяльність, яка роль заявника та хто діє за компанію на потрібну дату. Сам KRS не доводить виконання економічної умови",
    law: law.text`${law.article("142")} ust. 1–3; для члена zarządu без часток окремо ${law.article("126")}.`,
  },
  control: {
    item: document("crbr-information", "CRBR і зв'язки між компаніями"),
    level: "conditional",
    status: "коли треба пояснити контроль або зв'язки",
    owner: "Працівник або заявник; для суб'єкта, охопленого CRBR",
    proves:
      "Відомості про бенефіціара й контроль. Не замінює повноважень підписанта або доказів щоденного керування",
    law: "Допоміжне джерело фактів; не універсальний додаток до кожної бізнес-справи.",
  },
  annex: {
    item: document(
      "employment-annex-1",
      "Електронний додаток компанії про роботу заявника"
    ),
    level: "conditional",
    status: "обов'язковий для описаної корпоративної роботи",
    owner: "Особа, уповноважена діяти за компанію, заповнює й підписує в MOS",
    proves:
      "Компанію, функцію, правову підставу роботи, винагороду, період та інші дані додатка. Не є доказом доходу чи року працевлаштування компанії",
    law: law.text`${law.article("106")} ust. 2 і ${law.article("106d")}; корпоративні обставини ${law.article("142")} ust. 3. Не вимагається лише через наявність будь-якого бізнесу.`,
  },
  business: {
    item: document(
      "business-evidence",
      "Економічні докази компанії та їх зіставлення"
    ),
    level: "required",
    status: "за обраним способом підтвердження",
    owner:
      "Компанія й бухгалтерія; фінансовий результат, зайнятість або засоби та дії для майбутнього виконання",
    proves:
      "Конкретний варіант економічної умови. У прикладі пакет доводить належне працевлаштування двох осіб протягом року перед заявою",
    law: law.text`${law.article("142")} ust. 1 pkt 3 і ust. 3.`,
  },
  employees: {
    item: document(
      "employment-contract",
      "Договори працівників компанії та зміни до них"
    ),
    level: "conditional",
    status: "для підтвердження зайнятості",
    owner:
      "Компанія; разом із доказами фактичного працевлаштування і належної категорії кожної особи",
    proves:
      "Невизначений строк, повний робочий час і дату початку відповідних умов. Це договори працівників компанії, а не обов'язково трудовий договір самого заявника",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a.`,
  },
  contributions: {
    item: document(
      "zus-confirmation",
      "Відомості ZUS, виплати та стан розрахунків компанії"
    ),
    level: "conditional",
    status: "за питанням про зайнятість або внески",
    owner:
      "Компанія і ZUS; документи за потрібний період, за необхідності рішення про відстрочення чи розстрочення",
    proves:
      "Реєстрацію, звітні періоди та розрахунки в межах змісту документів. Сам звіт ZUS не встановлює громадянство, невизначений строк договору чи всі факти роботи",
    law: law.text`${law.article("142")} і ${law.article("143")} ust. 2 у зв'язку з ${law.article("117")} pkt 1.`,
  },
  workPermit: {
    item: document(
      "corporate-work-permit",
      "Дозвіл на працю у зв'язку з корпоративною функцією"
    ),
    level: "conditional",
    status: "якщо теперішня робота потребує окремого дозволу",
    owner:
      "Компанія отримує дозвіл; працівник зіставляє його з функцією та чинною підставою перебування",
    proves:
      "Дозволену роботу для зазначеної компанії та періоду. Не надає перебування і не замінює рішення про бізнесовий побут",
    law: work.text`${work.article("3", "Art. 3 ustawy o powierzaniu pracy")}; ${work.articleRange("35", "39")}: дозвіл для функції та окремий виняток.`,
  },
  money: {
    item: document(
      "income-evidence",
      "Особистий дохід заявника та підстава виплат"
    ),
    level: "required",
    status: "окремо від фінансів компанії",
    owner:
      "Заявник і платник; рішення про винагороду або інша правова підстава, розрахунки й підтвердження виплат",
    proves:
      "Джерело стабільного регулярного доходу на утримання заявника та залежних членів сім'ї. Гроші на рахунку spółki не стають особистим доходом власника",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. b, ust. 3–4; ${law.article("140")} ust. 2.`,
  },
  insurance: {
    item: document("health-insurance", "Медичне страхування заявника"),
    reviewId: "insurance",
    level: "required",
    status: "за фактичною підставою страхування",
    owner:
      "Заявник; підтвердження публічного страхування або належного покриття страховиком",
    proves:
      "Покриття лікування в Польщі у відповідний період. Внески за працівників компанії не доводять автоматично страхування власника",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. a і ust. 3.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Документ про місце проживання заявника"
    ),
    level: "required",
    status: "для особистої умови проживання",
    owner: "Заявник і надавач житла; договір або інший належний документ",
    proves:
      "Забезпечене місце проживання в Польщі. Юридична адреса компанії чи оренда офісу цього не підтверджує",
    law: law.text`${law.article("142")} ust. 1 pkt 2 і ust. 3.`,
  },
  qualification: {
    item: document(
      "qualification-evidence",
      "Дозвіл на регульовану посаду або професію"
    ),
    level: "conditional",
    status: "якщо цього вимагають окремі правила",
    owner:
      "Заявник; рішення компетентного органу або належне підтвердження права",
    proves:
      "Виконання спеціальної вимоги щодо конкретної посади чи професії. Диплом не є автоматичним додатком для кожного члена zarządu",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. c; ${law.article("143")} ust. 2 і ${law.article("117")} pkt 2.`,
  },
  fee: {
    ...common.fee,
    item: document("stamp-duty-proof", "Opłata skarbowa 340 zł"),
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 2", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}. Для особи, яка користується тимчасовим захистом, передбачено звільнення.`,
  },
  decision: {
    item: document(
      "administrative-decision",
      "Рішення про перебування для діяльності"
    ),
    level: "control",
    status: "після вручення",
    owner:
      "Заявник або представник; зберігає рішення разом із доказом вручення",
    proves:
      "Результат, період і межі дозволу. Для корпоративної роботи читають також зазначені компанію та посаду або підставу звільнення",
    law: law.text`${law.article("143a")}; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Karta pobytu після надання дозволу"),
    level: "control",
    status: "при отриманні",
    owner: "Заявник; звіряє дані й період",
    proves:
      "Документує статус. Позначка про доступ до праці не дозволяє ігнорувати умови рішення",
    law: law.text`${law.article("242")}, ${law.article("244")} і ${law.article("143a")}.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  notification: {
    item: document(
      "temporary-residence-notification",
      "Повідомлення про припинення причини дозволу"
    ),
    level: "conditional",
    status: "якщо причина вже наданого дозволу припинилася",
    owner: "Заявник або належний представник; до відповідного wojewody",
    proves:
      "Яку зміну й дату повідомлено. Зміна запису KRS або лист бухгалтерії не замінює повідомлення органу",
    law: law.text`${law.article("113")}.`,
  },
} satisfies Record<string, CaseGuideDocument>

export const businessDocumentRegister: CaseGuideDocument[] =
  Object.values(businessDocuments)
