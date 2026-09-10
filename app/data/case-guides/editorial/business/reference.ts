import { residenceOfficeDeadlines } from "~/data/shared/residence-office-deadlines"
import type {
  CaseGuideCondition,
  CaseGuideDeadline,
  CaseGuideNegativeBranch,
  CaseGuideSource,
} from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"

const documents = createEvidenceDocumentTextAuthor()
const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const work = createLegalTextAuthor("powierzanie-pracy")
const kpa = createLegalTextAuthor("kpa")

export const businessConditions: CaseGuideCondition[] = [
  {
    condition: "Заява допустима з нинішнього статусу",
    factToEstablish:
      "Підстава й період перебування, місце подання та застосовні обмеження або винятки.",
    evidence: documents.text`${documents.document("visa", "Національна віза для роботи з перебуванням до 30.09.2026")}, ${documents.document("passport", "паспорт")} та підтверджені дати поїздок.`,
    risk: "Володіння компанією не усуває прострочення перебування або заборони подати заяву.",
    law: law.text`${law.article("99")}, ${law.article("105")}; ${law.external("art. 45 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}: окремий виняток для UKR.`,
  },
  {
    condition: "Реальна діяльність і роль відповідають бізнесовій підставі",
    factToEstablish:
      "Правова форма, частки, призначення, функція і фактична діяльність. У прикладі заявник є членом zarządu та власником 40 % часток.",
    evidence: documents.text`Актуальна ${documents.document("shareholder-list", "lista wspólników")}, ${documents.document("board-appointment-resolution", "uchwała про призначення")} та ${documents.document("business-register-information", "KRS цієї spółki")}.`,
    risk: "Пасивне володіння частками або назва директор не встановлює правильної підстави.",
    law: law.text`${law.article("142")} ust. 1–3; порівняння з ${law.article("126")}.`,
  },
  {
    condition:
      "Виконано один із передбачених способів підтвердження економічної умови",
    factToEstablish:
      "Належний дохід, рік зайнятості двох відповідних працівників або підтверджені засоби чи дії для майбутнього виконання.",
    evidence: documents.text`Для обраного варіанта: ${documents.document("employment-contract", "договори A і B")}, ${documents.document("zus-rca", "іменні RCA")}, ${documents.document("payroll-statement", "розрахункові листки")}, ${documents.document("bank-statement", "фактичні виплати")} та ${documents.document("employment-income-certificate", "довідки про зайнятість")}. Дохід компанії або бізнес-план у цьому прикладі не є додатковими обов’язковими пакетами.`,
    risk: "Сума контракту не дорівнює доходу, B2B-підрядник не є працівником за цим критерієм, а прогноз не є вже досягнутим результатом.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 і ust. 3.`,
  },
  {
    condition: "Заявник має стабільне регулярне джерело утримання",
    factToEstablish:
      "Його особистий дохід, правова підстава виплат і залежні члени сім'ї.",
    evidence: documents.text`${documents.document("board-remuneration-resolution", "Uchwała про регулярну винагороду за powołanie")} та ${documents.document("bank-statement", "виписка особистого рахунку з фактичними виплатами")}.`,
    risk: "Залишок на рахунку spółki не належить автоматично її власнику як особистий дохід.",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. b, ust. 3–4; ${law.article("140")} ust. 2.`,
  },
  {
    condition: "Є покриття лікування та забезпечене житло",
    factToEstablish:
      "Особисте страхування заявника й місце його проживання у відповідний період.",
    evidence: documents.text`Власне ${documents.document("zus-health-registration", "підтвердження eZUS про актуальне медичне страхування заявника")} та ${documents.document("residential-lease", "підписаний договір його житлової оренди")}.`,
    risk: "Внески за персонал і оренда офісу не доводять цих особистих умов.",
    law: law.text`${law.article("142")} ust. 1 pkt 1 lit. a, pkt 2 і ust. 3.`,
  },
  {
    condition:
      "Виконано спеціальні вимоги й немає застосовної підстави відмови",
    factToEstablish:
      "Потрібна згода на регульовану професію, визначені порушення, податкові та страхові обов'язки; застосовні винятки.",
    evidence: documents.text`У прикладі регульованої професії немає. Якщо виникне питання про внески, використовують ${documents.document("zus-no-arrears", "довідку ZUS про розрахунки компанії")} та відповідне рішення про розстрочку, якщо воно існує. Для податкової заборгованості потрібна саме довідка податкового органу про незаборгованість або стан заборгованості. Ці документи не включено автоматично до подання 10.08 чи відповіді 28.08.`,
    risk: "Рік зайнятості не усуває іншої перешкоди. Просте посилання на заборгованість також не враховує законної розстрочки чи іншого винятку.",
    law: law.text`${law.article("100")}, ${law.article("143")} і ${law.article("117")} pkt 1–2; можливі ліміти за ${law.article("142a")}.`,
  },
]

export const businessDeadlines: CaseGuideDeadline[] = [
  {
    stageId: "status",
    period: "до останнього дня законного перебування",
    trigger: "дозволений період нинішньої підстави",
    action:
      "Подати належно підписану заяву. У прикладі 10.08.2026 передує завершенню перебування 30.09.2026.",
    consequence:
      "Наявність компанії або замовлена довідка не продовжує строк подання.",
    law: law.text`${law.article("105")} і ${law.article("108")}.`,
  },
  {
    stageId: "evidence",
    period: "щонайменше рік перед поданням",
    trigger: "дата заяви, якщо економічну умову доводять зайнятістю",
    action:
      "Показати належну безперервну зайнятість двох осіб. Для заяви 10.08.2026 порівняння охоплює 10.08.2025–09.08.2026 та актуальний стан.",
    consequence:
      "Це період, який потрібно довести, а не строк для відповіді. Новим договором не можна створити відсутній минулий рік.",
    law: law.text`${law.article("142")} ust. 1 pkt 3 lit. a.`,
  },
  {
    stageId: "procedure",
    period: "строк виклику, не коротший ніж 7 днів",
    trigger: "звичайний виклик для паспорта, відбитків і взірця підпису",
    action:
      "Виконати особисті дії або встановити конкретний законний виняток. Для UKR застосовується окремий порядок.",
    consequence:
      "Неявка після належного виклику за відсутності винятку веде до umorzenia, припинення провадження, якщо немає підстав залишити заяву без розгляду, повернути її або відмовити у відкритті провадження. Фінансові докази не замінюють явки.",
    law: law.text`${law.article("106e")}, ${law.article("106i")}; ${law.external("art. 45 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}.`,
  },
  {
    stageId: "procedure",
    period: "14 днів у вигаданому wezwanie",
    trigger: "вручення вимоги представнику 18.08.2026",
    action:
      "Подати відсутні докази до 01.09.2026. Відповідь із прикладу подано 28.08.2026.",
    consequence:
      "Період походить із цього листа. Для доказів закон установлює мінімум 14 днів; для інших вимог можуть діяти інші правила.",
    law: law.text`${law.article("106f")}; ${kpa.article("57", "art. 57 KPA")}.`,
  },
  {
    stageId: "procedure",
    period: "60 днів за звичайним правилом органу",
    trigger:
      "остання визначена законом подія: формальна повнота заяви та подання доказів або сплив строку на них",
    action:
      "Контролювати справу й окремо виконувати строки заявника. Не обіцяти рішення за загальним 60-денним періодом.",
    consequence: residenceOfficeDeadlines.caseConsequence,
    law: law.text`${law.article("112a")}; ${law.external("Art. 100d спецзакону, зі змінами Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}.`,
  },
  {
    stageId: "decision",
    period: "14 днів",
    trigger: "належне вручення рішення першої інстанції",
    action: "За потреби подати odwołanie через wojewodę до Szefa UdSC.",
    consequence:
      "Пропуск може закрити звичайне оскарження. Поновлення строку потребує окремих умов і виконання пропущеної дії.",
    law: kpa.text`${kpa.article("129", "Art. 129 KPA")}; ${kpa.article("58", "art. 58 KPA")}.`,
  },
  {
    stageId: "decision",
    period: "15 робочих днів",
    trigger: "припинення причини вже наданого дозволу",
    action:
      "Повідомити wojewodę, який надав дозвіл; якщо його надав Szef UdSC при оскарженні, повідомляють wojewodę першої інстанції.",
    consequence:
      "Зміна KRS не замінює повідомлення. Саме повідомлення не надає нового дозволу.",
    law: law.text`${law.article("113")}.`,
  },
]

export const businessAlternatives: CaseGuideNegativeBranch[] = [
  {
    title: "Компанія нова й не має року зайнятості або потрібного доходу",
    trigger:
      "Фінансові та кадрові документи підтвердили відсутність історичного результату.",
    consequence: law.text`Можливість доводити засоби чи дії для майбутнього виконання за ${law.article("142")} ust. 1 pkt 3 lit. b не є звільненням від економічної умови. Потрібна фактична основа перспективи.`,
    response:
      "Пов'язати фінансування, обладнання, договори, приміщення та план витрат із конкретним майбутнім результатом. Прогноз залишити прогнозом. Заповнений приклад такого пакета наведено в матеріалі про економічні докази.",
    material: {
      label: "Економічні докази та приклад бізнес-плану",
      description:
        "Наявні засоби, майбутній контракт і закрита прогалина щодо приміщення.",
      href: "/documents/business-evidence",
    },
  },
  {
    title: "Член zarządu не володіє частками",
    trigger:
      "Документи підтверджують найману корпоративну функцію без часток у компанії.",
    consequence: law.text`Для цієї ситуації ${law.article("126")} передбачає іншу підставу перебування та роботи. Економічні умови компанії при цьому не зникають.`,
    response:
      "Установити точну роль, власність і фактичну мету. Не подавати як справу власника лише через однакову посаду.",
  },
  {
    title: "Досягнуто економічного показника, але виявлено іншу перешкоду",
    trigger:
      "Є питання до податкових чи страхових обов'язків, визначеного порушення або спеціального права заявника.",
    consequence: law.text`${law.article("143")} відсилає до окремих підстав відмови. Економічний результат не замінює цієї перевірки; законні винятки щодо заборгованості також треба врахувати.`,
    response:
      "Отримати актуальний документ про конкретну обставину, наприклад рішення про розстрочку, і пояснити його правове значення. Не подавати довідку про оборот замість відповіді про внески.",
  },
  {
    title: "Заявник припиняє діяльність у зазначеній компанії",
    trigger: "Припинено корпоративну функцію або фактичну причину дозволу.",
    consequence: law.text`Потрібні оцінка повідомлення за ${law.article("113")}, наслідків за ${law.article("101")} і підстави наступної роботи та перебування. Дані іншої компанії не вписуються в дозвіл автоматично.`,
    response:
      "Зафіксувати подію документами, повідомити належний орган у строк і визначити доступний спосіб оформлення нової підстави до початку непокритої роботи.",
  },
]

export const businessSources: CaseGuideSource[] = [
  {
    label: "Ustawa o cudzoziemcach, перевірка документів 10.09.2026",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: law.text`Перевірено ${law.articleRange("142", "143a")} щодо обраного варіанта зайнятості, особистих умов, відмови та змісту корпоративного дозволу; ${law.articleRange("106d", "106f")} щодо подання копій та оригіналів. Ураховано пізніші зміни. Ця перевірка доповнює попередню перевірку гайда від 06.09.2026.`,
  },
  {
    label: "KSH: список учасників і призначення zarządu",
    url: "https://eli.gov.pl/eli/DU/2024/18/ogl",
    note: law.text`${law.external("Art. 188 § 3 і art. 201 § 4 KSH", "https://eli.gov.pl/eli/DU/2024/18/ogl")}: актуальна lista wspólników та окрема підстава призначення. KRS не замінює всіх корпоративних документів.`,
  },
  {
    label: "ZUS: медичне страхування оплачуваної особи з powołania",
    url: "https://www.zus.pl/o-zus/o-nas/programy-transformacji-cyfrowej-zus/zmiany-od-2022-r./faq",
    note: "Офіційне пояснення про оплачуване powołanie, ZZA для медичного страхування та застосування польського законодавства до іноземної особи. Внески за A/B не є доказом особистого страхування заявника.",
  },
  {
    label: "Медичне страхування: іноземець із візою для роботи",
    url: "https://eli.gov.pl/eli/DU/2025/1461/ogl",
    note: law.text`${law.external("Art. 3 ust. 1 pkt 2 і art. 66 ust. 1 pkt 35a закону про świadczenia opieki zdrowotnej", "https://eli.gov.pl/eli/DU/2025/1461/ogl")}: для обраного прикладу встановлено візу саме для роботи, оплачуване powołanie та застосування польського законодавства.`,
  },
  {
    label: "ZUS: власне підтвердження актуального страхування",
    url: "https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych",
    note: "Дані про актуальні zgłoszenia отримує сама застрахована особа. Документ відрізняється від звітів RCA і довідки про незаборгованість платника.",
  },
  {
    label: "Powierzanie pracy cudzoziemcom",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: work.text`${work.article("3")}: право працювати; ${work.articleRange("35", "39")}: окремий корпоративний дозвіл. Його економічний тест відрізняється від бізнесового перебування.`,
  },
  {
    label: "Зміни MOS і перехідні правила, Dz.U. 2025 poz. 1794",
    url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
    note: law.text`${law.external("Art. 12 і 17", "https://eli.gov.pl/eli/DU/2025/1794/ogl")}: попередні провадження та початок застосування нової процедури.`,
  },
  {
    label: "Початок нової процедури, M.P. 2026 poz. 370",
    url: "https://eli.gov.pl/eli/MP/2026/370/ogl",
    note: "Визначено 27.04.2026 для запуску зазначених у повідомленні технічних рішень MOS.",
  },
  {
    label: "Форма заяви й додатки, Dz.U. 2026 poz. 553",
    url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
    note: "Форма та дані додатка компанії. Первісний вигляд доступний у PDF; номер додатка до розпорядження відрізняється від номера додатка до заяви.",
  },
  {
    label: "Podlaski UW: економічні матеріали бізнесу",
    url: "https://www.gov.pl/web/uw-podlaski/dzialalnosc-gospodarcza",
    note: "Допоміжні приклади фінансових, кадрових та інвестиційних доказів. Паперові інструкції не переносимо на нову заяву MOS.",
  },
  {
    label: "Зміни спеціальних правил, Dz.U. 2026 poz. 203",
    url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
    note: "Винятки для відповідних заявників із UKR, біометричні дії та зупинення визначених строків wojewody до 04.03.2027.",
  },
  {
    label: "Opłata skarbowa, Dz.U. 2025 poz. 1154",
    url: "https://eli.gov.pl/eli/DU/2025/1154/ogl",
    note: "Стандартна ставка за бізнесове перебування 340 zł та звільнення для користувача тимчасового захисту.",
  },
  {
    label: "Плата за карту, Dz.U. 2022 poz. 1583",
    url: "https://eli.gov.pl/eli/DU/2022/1583/ogl",
    note: "Стандартна плата 100 zł та документи для підтвердження пільги.",
  },
  {
    label: "Kodeks postępowania administracyjnego",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: kpa.text`Вручення, ${kpa.article("57", "обчислення строків")}, ${kpa.article("73", "доступ до матеріалів")}, ${kpa.article("80", "оцінка доказів")} та ${kpa.article("129", "оскарження рішення")}.`,
  },
]
