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
const work = createLegalTextAuthor("powierzanie-pracy")
const kpa = createLegalTextAuthor("kpa")

export const businessDocuments = {
  ...common,
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявника"),
  },
  visa: {
    item: document(
      "visa",
      "Національна віза для роботи з перебуванням до 30.09.2026"
    ),
    level: "control",
    status: "до подання",
    owner: "Заявник; разом із паспортом і датами поїздок",
    proves:
      "Вид візи, дозволений період та сумісність із нинішньою роботою. Володіння частками не продовжує перебування.",
    law: law.text`${law.article("99")}, ${law.article("105")} і ${law.article("108")}.`,
  },
  registry: {
    item: document(
      "business-register-information",
      "Актуальна інформація KRS про spółkę z o.o."
    ),
    level: "required",
    status: "для цієї компанії",
    owner:
      "Компанія або заявник; дані KRS на дату подання й підписання додатка",
    proves:
      "Компанію, склад zarządu і спосіб представництва. CEIDG стосується іншої форми діяльності; KRS не доводить самостійно рік зайнятості.",
    law: law.text`${law.article("142")} ust. 3 і ${law.article("106")} ust. 2.`,
  },
  shareholders: {
    item: document(
      "shareholder-list",
      "Актуальна lista wspólników: частка заявника 40 %"
    ),
    level: "required",
    status: "для встановлення власності",
    owner:
      "Zarząd компанії; актуальний список, підписаний усіма членами zarządu",
    proves:
      "Кількість і номінальну вартість часток, за якими видно 40 % заявника. Це не рішення про призначення або винагороду.",
    law: law.text`${law.article("142")} ust. 3; ${law.external("art. 188 § 3 KSH", "https://eli.gov.pl/eli/DU/2024/18/ogl")}.`,
  },
  appointment: {
    item: document(
      "board-appointment-resolution",
      "Uchwała про призначення заявника до zarządu"
    ),
    level: "required",
    status: "для корпоративної функції",
    owner: "Компанія; рішення органу, компетентного за umową spółki",
    proves:
      "Підставу й дату призначення. Призначення не означає автоматично права одноосібно представляти компанію.",
    law: law.text`${law.article("142")} ust. 3; ${law.external("art. 201 § 4 KSH", "https://eli.gov.pl/eli/DU/2024/18/ogl")}.`,
  },
  remuneration: {
    item: document(
      "board-remuneration-resolution",
      "Uchwała про регулярну винагороду заявника за powołanie"
    ),
    level: "required",
    status: "особисте джерело утримання",
    owner:
      "Компанія; рішення про оплату виконання функції без окремої umowy o pracę або zlecenia",
    proves:
      "Правову підставу, розмір і періодичність особистої винагороди. Саме рішення ще не підтверджує фактичного переказу.",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. b, ust. 3–4; ${law.article("140")} ust. 2.`,
  },
  personalPayments: {
    item: document(
      "bank-statement",
      "Виписка особистого рахунку з виплатами винагороди заявнику"
    ),
    level: "required",
    status: "за період показаних регулярних виплат",
    owner:
      "Заявник отримує у своєму банку; зіставляє дати, суми й платника з uchwałą",
    proves:
      "Фактичні надходження особистої винагороди. Залишок компанії або перекази зарплат A і B не є доходом заявника.",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. b і ust. 3–4.`,
  },
  annex: {
    item: document(
      "employment-annex-1",
      "Електронний додаток компанії про корпоративну роботу заявника"
    ),
    level: "required",
    status: "для обраної корпоративної підстави",
    owner: "Уповноважена особа компанії заповнює й підписує в MOS",
    proves:
      "Функцію, підставу роботи, винагороду та період. Це окремий додаток, а не копія uchwały.",
    law: law.text`${law.article("106")} ust. 2 і ${law.article("106d")}; ${law.article("142")} ust. 3.`,
  },
  workPermit: {
    item: document(
      "corporate-work-permit",
      "Чинний корпоративний дозвіл на працю до 31.12.2026"
    ),
    level: "control",
    status: "нинішня робота заявника",
    owner: "Компанія отримала дозвіл; заявник має документ",
    proves:
      "Роботу в цій компанії в межах зазначеної функції та строку. Дозвіл не надає перебування.",
    law: work.text`${work.article("3")}; ${work.articleRange("35", "39")}.`,
  },
  contractA: {
    item: document(
      "employment-contract",
      "Umowa o pracę працівника A від 01.06.2024"
    ),
    level: "required",
    status: "обраний доказ зайнятості",
    owner: "Компанія; кадрова справа A",
    proves:
      "Невизначений строк, повний час і початок роботи 01.06.2024. Громадянство та фактичне продовження роботи звіряють із кадровими відомостями й довідкою.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  employmentA: {
    item: document(
      "employment-income-certificate",
      "Довідка про зайнятість і винагороду A на дату подання"
    ),
    level: "required",
    status: "стан на 10.08.2026",
    owner: "Компанія; за кадровими й розрахунковими даними A",
    proves:
      "Безперервну роботу на повний час і невизначений строк та її продовження на 10.08.2026. У довідці зазначено польське громадянство за кадровими документами. Сам останній RCA не підтверджує цей серпневий стан.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  contractB: {
    item: document(
      "employment-contract",
      "Umowa o pracę працівника B від 01.06.2025"
    ),
    level: "required",
    status: "обраний доказ зайнятості",
    owner: "Компанія; кадрова справа B",
    proves:
      "Невизначений строк, повний час і початок роботи 01.06.2025. Громадянство та фактичне продовження роботи звіряють із кадровими відомостями й довідкою.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  employmentB: {
    item: document(
      "employment-income-certificate",
      "Довідка про зайнятість і винагороду B на дату подання"
    ),
    level: "required",
    status: "стан на 10.08.2026",
    owner: "Компанія; за кадровими й розрахунковими даними B",
    proves:
      "Безперервну роботу на повний час і невизначений строк та її продовження на 10.08.2026. У довідці зазначено польське громадянство за кадровими документами. Сам останній RCA не підтверджує цей серпневий стан.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  employmentBUpdated: {
    item: document(
      "employment-income-certificate",
      "Оновлена довідка про зайнятість і винагороду B для відповіді"
    ),
    level: "required",
    status: "у відповідь на wezwanie",
    owner: "Компанія; уточнює історію та актуальний стан роботи B",
    proves:
      "Безперервність умов із 01.06.2025, стан на 10.08.2026 і продовження роботи на дату довідки. Не створює відсутній минулий період.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  rcaA: {
    item: document("zus-rca", "Іменні звіти ZUS RCA за A: 08.2025–07.2026"),
    level: "required",
    status: "у первинному пакеті",
    owner: "Компанія; іменні звіти щодо A та підтвердження передання ZUS",
    proves:
      "Заявлені бази й внески за 08.2025–07.2026. Звіти за липень передано 07.08.2026. Місячний звіт не встановлює громадянство, вид договору або стан на 10 серпня.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  payrollA: {
    item: document(
      "payroll-statement",
      "Іменні розрахункові листки A: 08.2025–07.2026"
    ),
    level: "required",
    status: "у первинному пакеті",
    owner: "Бухгалтерія компанії; нарахування за вказані місяці A",
    proves:
      "Нарахування винагороди та утримання за 08.2025–07.2026. Дата виплати може припадати на наступний місяць; нарахування не підміняє банківську операцію.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  paymentsA: {
    item: document(
      "bank-statement",
      "Банківські підтвердження виплат A за 08.2025–07.2026"
    ),
    level: "required",
    status: "у первинному пакеті",
    owner:
      "Компанія; виконані операції зі свого рахунку з видимими датами й призначенням",
    proves:
      "Перекази зарплати A за вказані місяці, зіставлені з розрахунковими листками. Це виплати працівнику, не особистий дохід заявника. У прикладі липневу зарплату вже виплачено до подання.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  rcaBInitial: {
    item: document("zus-rca", "Іменні звіти ZUS RCA за B: 04–06.2026"),
    level: "required",
    status: "у первинному пакеті",
    owner: "Компанія; іменні звіти щодо B та підтвердження передання ZUS",
    proves:
      "Заявлені бази й внески лише за 04–06.2026. Липневий звіт уже існував, але до початкової заяви його не додали. Місячний звіт не встановлює громадянство, вид договору або стан на 10 серпня.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  payrollBInitial: {
    item: document(
      "payroll-statement",
      "Іменні розрахункові листки B: 04–06.2026"
    ),
    level: "required",
    status: "у первинному пакеті",
    owner: "Бухгалтерія компанії; нарахування за вказані місяці B",
    proves:
      "Нарахування винагороди та утримання за 04–06.2026. Дата виплати може припадати на наступний місяць; нарахування не підміняє банківську операцію.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  paymentsBInitial: {
    item: document(
      "bank-statement",
      "Банківські підтвердження виплат B за 04–06.2026"
    ),
    level: "required",
    status: "у первинному пакеті",
    owner:
      "Компанія; виконані операції зі свого рахунку з видимими датами й призначенням",
    proves:
      "Перекази зарплати B за вказані місяці, зіставлені з розрахунковими листками. Це виплати працівнику, не особистий дохід заявника. У прикладі липневу зарплату вже виплачено до подання.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  rcaBMissing: {
    item: document(
      "zus-rca",
      "Іменні звіти ZUS RCA за B: 08.2025–03.2026 та 07.2026"
    ),
    level: "required",
    status: "доповнення відсутніх періодів",
    owner: "Компанія; іменні звіти щодо B та підтвердження передання ZUS",
    proves:
      "Заявлені бази й внески за 08.2025–03.2026 та 07.2026. Звіти за липень передано 07.08.2026. Місячний звіт не встановлює громадянство, вид договору або стан на 10 серпня.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  payrollBMissing: {
    item: document(
      "payroll-statement",
      "Іменні розрахункові листки B: 08.2025–03.2026 та 07.2026"
    ),
    level: "required",
    status: "доповнення відсутніх періодів",
    owner: "Бухгалтерія компанії; нарахування за вказані місяці B",
    proves:
      "Нарахування винагороди та утримання за 08.2025–03.2026 та 07.2026. Дата виплати може припадати на наступний місяць; нарахування не підміняє банківську операцію.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  paymentsBMissing: {
    item: document(
      "bank-statement",
      "Банківські підтвердження виплат B за 08.2025–03.2026 та 07.2026"
    ),
    level: "required",
    status: "доповнення відсутніх періодів",
    owner:
      "Компанія; виконані операції зі свого рахунку з видимими датами й призначенням",
    proves:
      "Перекази зарплати B за вказані місяці, зіставлені з розрахунковими листками. Це виплати працівнику, не особистий дохід заявника. У прикладі липневу зарплату вже виплачено до подання.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a і ust. 3.`,
  },
  insurance: {
    item: document(
      "zus-health-registration",
      "Особисте підтвердження eZUS про чинне медичне страхування заявника"
    ),
    level: "required",
    status: "за оплачуваним powołaniem",
    owner:
      "Заявник отримує дані у своєму профілі Ubezpieczony; компанія звіряє власне zgłoszenie ZZA",
    proves:
      "Чинну особисту реєстрацію для медичного страхування. У прикладі застосовується польське законодавство, винагорода походить із powołania без окремого трудового чи цивільного договору. RCA працівників A/B цього не доводять.",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. a і ust. 3; ${law.external("ZUS: страхування оплачуваної особи з powołania", "https://www.zus.pl/o-zus/o-nas/programy-transformacji-cyfrowej-zus/zmiany-od-2022-r./faq")}.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Підписаний договір оренди житла заявника в Польщі"
    ),
    level: "required",
    status: "особисте місце проживання",
    owner: "Заявник і орендодавець; чинний договір житлової оренди",
    proves:
      "Забезпечене особисте житло. Адреса компанії або договір оренди офісу не встановлює проживання заявника.",
    law: law.text`${law.article("142")} ust. 1 pkt 2 і ust. 3.`,
  },
  noArrears: {
    item: document(
      "zus-no-arrears",
      "Zaświadczenie ZUS про відсутність заборгованості компанії"
    ),
    level: "conditional",
    status: "якщо виникло питання про розрахунки платника",
    owner: "Компанія як платник отримує довідку ZUS на потрібну дату",
    proves:
      "Стан розрахунків компанії з внесків у межах довідки. Не підтверджує рік роботи A/B або медичне страхування заявника. У початковий пакет і відповідь із прикладу її не додано.",
    law: law.text`${law.article("143")} ust. 2 у зв’язку з ${law.article("117")} pkt 1.`,
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
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
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
