import { residenceOfficeDeadlines } from "~/data/shared/residence-office-deadlines"
import type {
  CaseGuideCondition,
  CaseGuideDeadline,
  CaseGuideNegativeBranch,
  CaseGuideSource,
} from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { document } from "../shared/document-reference"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")
const polakaUrl = "https://eli.gov.pl/eli/DU/2026/76/ogl"
const delayUrl =
  "https://bip.brpo.gov.pl/pl/content/rpo-cudzoziemcy-postepowania-legalizacyjne-przewleklosc-mswia-odpowiedz"

export const permanentConditions: CaseGuideCondition[] = [
  {
    condition: "Можливе своєчасне подання в Польщі",
    factToEstablish:
      "Власна підстава перебування, використані дні й відсутність застосовної перешкоди. У прикладі дозволене перебування до 30.09.2026, подання 17.08.2026.",
    evidence: document(
      "status-documents",
      "Віза або рішення та підтверджені дати перебування"
    ),
    risk: "Karta Polaka помилково використана як заміна законного перебування.",
    law: law.text`${law.article("196")}, ${law.article("202")} і ${law.article("206")}.`,
  },
  {
    condition: "Дійсна Karta Polaka належить заявнику",
    factToEstablish:
      "Чинність, відповідність паспорту та пізніші події, які могли змінити документ. Це потрібний факт для обраного пункту.",
    evidence: document(
      "karta-polaka",
      "Karta Polaka та документи про її зміну, якщо вони є"
    ),
    risk: "Старий скан із майбутньою датою прийнято за достатнє підтвердження чинності.",
    law: law.text`${law.article("195")} ust. 1 pkt 9; ${law.external("art. 17 і 20 ustawy o Karcie Polaka", polakaUrl)}.`,
  },
  {
    condition: "Намір оселитися в Польщі на постійно",
    factToEstablish:
      "Заявлений життєвий план узгоджується з конкретними обставинами. У прикладі річна оренда і постійний намір потребують пояснення, а не приховування різних строків.",
    evidence: document(
      "settlement-intention",
      "Пояснення, чинна оренда й матеріали про роботу"
    ),
    risk: "Один договір визнано автоматично достатнім або перетворено власність на житло на обов'язкову умову.",
    law: law.text`${law.article("195")} ust. 1 pkt 9; ${kpa.article("77", "art. 77 KPA")} і ${kpa.article("80", "art. 80 KPA")}.`,
  },
  {
    condition: "Належно виконано процесуальні дії",
    factToEstablish:
      "Підпис і UPO, вимоги органу, паспорт та необхідні біометричні дії. Винятки мають власні умови.",
    evidence: document(
      "case-file-index",
      "Заява, UPO, виклики, відповіді й підтвердження дій"
    ),
    risk: "Доказ наміру використано замість особистої дії або наявність UPO прийнято за підтвердження всіх матеріальних умов.",
    law: law.text`${law.article("203d")}, ${law.article("203e")}, ${law.article("203f")} і ${law.article("203i")}.`,
  },
  {
    condition: "Немає застосовної підстави відмови",
    factToEstablish:
      "Умови дозволу, достовірність матеріалів та інші обставини, які перевіряє орган, з урахуванням винятків для конкретної категорії.",
    evidence: document(
      "administrative-decision",
      "Матеріали справи, результати перевірок і мотиви рішення"
    ),
    risk: "Karta Polaka сприймається як гарантія дозволу; винятки для польського походження перенесено до іншого пункту.",
    law: law.text`${law.article("197")}, ${law.article("198")} і ${law.article("207")}.`,
  },
]

export const permanentDeadlines: CaseGuideDeadline[] = [
  {
    stageId: "filing",
    period: "не пізніше останнього дня законного перебування",
    trigger: "власна підстава й дозволений період заявника",
    action:
      "Завершити належне подання. У прикладі UPO отримано 17.08.2026 до закінчення дозволеного перебування 30.09.2026.",
    consequence:
      "Підготовлений формуляр або запис на явку не продовжує строк. Для визначених дітей закон містить окремий виняток.",
    law: law.text`${law.article("202")} і ${law.article("203d")} ust. 5.`,
  },
  {
    stageId: "procedure",
    period: "14 днів у прикладі; до 03.09.2026",
    trigger: "вручення представнику 20.08.2026 вимоги пояснити намір оселитися",
    action: "Подати відповідь і матеріали. У прикладі це зроблено 31.08.2026.",
    consequence:
      "День вручення не включають. Відсутність переконливого доказу може залишити умову недоведеною, навіть якщо лист подано вчасно.",
    law: law.text`${law.article("203f")}; ${kpa.article("40", "art. 40 KPA")} і ${kpa.article("57", "art. 57 KPA")}.`,
  },
  {
    stageId: "procedure",
    period: "не менше 7 днів від вручення виклику",
    trigger: "виклик на паспорт, відбитки та взірець підпису",
    action: "Виконати потрібні дії або належно підтвердити законний виняток.",
    consequence:
      "Невиконання особистої дії може спричинити припинення провадження. Поданий договір житла не замінює цієї дії.",
    law: law.text`${law.article("203e")}, ${law.article("203h")} і ${law.article("203i")}.`,
  },
  {
    stageId: "procedure",
    period: "6 місяців за загальним правилом; спеціальні правила окремо",
    trigger:
      "остання з подій, названих чинною редакцією норми про строк органу",
    action:
      "Окремо встановити формальну повноту, подання матеріальних доказів або сплив строку на них. Перевірити зупинення визначених строків wojewody до 04.03.2027.",
    consequence: residenceOfficeDeadlines.caseConsequence,
    law: law.text`${law.article("210")}; ${law.external("art. 100d спецзакону зі змінами Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}; ${law.external("опублікована RPO відповідь MSWiA про спори щодо затримок", delayUrl)}.`,
  },
  {
    stageId: "decision",
    period: "14 днів від вручення рішення",
    trigger: "вручення відмови заявнику або належному представнику",
    action:
      "За оскарження подати odwołanie до Szefa UdSC через wojewodę, який видав рішення.",
    consequence:
      "Пропуск може зробити рішення остаточним. Відновлення строку має окремі умови; наступна заява не є автоматичною заміною оскарження.",
    law: kpa.text`${kpa.article("129", "Art. 129 KPA")}; ${kpa.article("58", "art. 58 KPA")}.`,
  },
  {
    stageId: "decision",
    period: "не пізніше 14 днів від остаточності рішення",
    trigger: "рішення про надання pobytu stałego стало остаточним",
    action:
      "Повернути Kartę Polaka wojewodzie за місцем перебування та зберегти підтвердження.",
    consequence:
      "Видача karty pobytu за цією підставою відбувається після повернення Karty Polaka. Дату не рахують від отримання пластикової карти.",
    law: law.text`${law.external("Art. 20 ust. 3 pkt 2 ustawy o Karcie Polaka", polakaUrl)}; ${law.article("229")} ust. 7.`,
  },
  {
    stageId: "decision",
    period: "щонайменше за 30 днів до кінця чинності карти",
    trigger: "наближається закінчення десятирічної karty pobytu",
    action:
      "Подати заяву про наступну карту. За втрати документа чи зміни даних перевірити окрему процедуру заміни.",
    consequence:
      "Закінчення пластикової карти не дорівнює спливу безстрокового дозволу, але документ потребує поновлення.",
    law: law.text`${law.article("230")} ust. 2; ${law.article("243")} ust. 1 pkt 2.`,
  },
]

export const permanentAlternatives: CaseGuideNegativeBranch[] = [
  {
    title: "Karta Polaka втратила чинність до розгляду підстави",
    trigger: "Чинна карта для обраної категорії не підтверджена.",
    consequence: law.text`Для ${law.article("195")} ust. 1 pkt 9 потрібна дійсна карта. Стара копія не усуває проблему.`,
    response:
      "Установити причину й дату втрати чинності. Можливість продовження або інша підстава потребує власних фактів; польське походження не вважають автоматично доведеним.",
  },
  {
    title: "Є походження, але немає Karty Polaka",
    trigger: "Заявник посилається на польських предків і бажання оселитися.",
    consequence: law.text`Категорія ${law.article("195")} ust. 1 pkt 3 відсилає через ust. 2 до закону про репатріацію. Потрібне доказування саме його умов.`,
    response:
      "Зібрати належні документи про походження й родинний зв'язок, відокремити їх від доказів наміру. Не використовувати порожній рядок для Karty Polaka як готовий доказ іншої категорії.",
  },
  {
    title: "Заявник є подружжям громадянина Польщі",
    trigger: "Підстава пов'язана зі шлюбом і попереднім перебуванням.",
    consequence: law.text`${law.article("195")} ust. 1 pkt 4 містить окремі трирічну та дворічну умови; безперервність перевіряють за ust. 4. ${law.article("205")} стосується перевірки шлюбу.`,
    response:
      "Відновити хронологію шлюбу, рішень і виїздів. Не зараховувати будь-яку візу або будь-який тимчасовий дозвіл як належну підставу дворічного періоду.",
  },
  {
    title: "Орган не визнав намір доведеним",
    trigger:
      "Матеріали суперечать заявленому плану або рішення пояснює, чому їм не повірили.",
    consequence: law.text`Недоведення умови має значення за ${law.article("197")} ust. 1 pkt 1. Своєчасна відповідь сама по собі не доводить намір.`,
    response:
      "Прочитати оцінку кожного доказу, зіставити її з akta й поясненням заявника. В оскарженні показати конкретний пропущений факт, помилку оцінки або належний новий матеріал.",
  },
  {
    title: "Затримка справи попри зупинення строків",
    trigger:
      "Справа довго не рухається, а орган посилається на спеціальний закон.",
    consequence: law.text`${law.external("RPO опублікував позицію MSWiA", delayUrl)} про різний підхід адміністрації та судів до застосування зупинення. Це не гарантує прийняття конкретної скарги.`,
    response:
      "Встановити період затримки, здійснені дії, застосовне право та актуальну судову практику. Ponaglenie і судовий захист аналізують окремо; загальна дата зупинення не є відповіддю на всю справу.",
  },
]

export const permanentSources: CaseGuideSource[] = [
  {
    label: "Ustawa o cudzoziemcach",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: law.text`Категорії ${law.article("195")}, перешкоди та відмова, подання за ${law.article("202")} і ${law.article("203d")}, особисті дії, строки й документи. Читання з пізнішими змінами та датою запуску MOS.`,
  },
  {
    label: "Перехід до MOS",
    url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
    note: "Перехідні правила для раніше розпочатих проваджень. Приклад стосується нової заяви після запуску електронної процедури.",
  },
  {
    label: "Дата застосування правил MOS",
    url: "https://eli.gov.pl/eli/MP/2026/370/ogl",
    note: "27.04.2026, дата з офіційного повідомлення.",
  },
  {
    label: "UdSC: електронне подання",
    url: "https://www.gov.pl/web/udsc/info-mos",
    note: "Офіційне пояснення подання через MOS; не замінює матеріальних умов постійного дозволу.",
  },
  {
    label: "Формуляр pobytu stałego",
    url: "https://eli.gov.pl/eli/DU/2026/488/ogl",
    note: "Розпорядження містить форму заяви, запис про відбитки та взірець підпису. Оригінальний PDF зберігає їхній вигляд.",
  },
  {
    label: "Ustawa o Karcie Polaka",
    url: polakaUrl,
    note: law.text`${law.external("Art. 3, 7, 17 і 20", polakaUrl)}: значення документа, межі, чинність і повернення після постійного дозволу.`,
  },
  {
    label: "Opłata skarbowa",
    url: "https://eli.gov.pl/eli/DU/2025/1154/ogl",
    note: "Частина III, позиція 3 додатка: 640 zł і окреме звільнення власника Karty Polaka, який має намір оселитися.",
  },
  {
    label: "Плата за карту",
    url: "https://eli.gov.pl/eli/DU/2022/1583/ogl",
    note: law.text`Стандартно 100 zł. Пільги й звільнення перевіряють окремо за ${law.articleRange("235", "239")}.`,
  },
  {
    label: "Powierzanie pracy cudzoziemcom",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: "Окрема перевірка права працювати для власника Karty Polaka і власника постійного дозволу.",
  },
  {
    label: "Kodeks postępowania administracyjnego",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: kpa.text`${kpa.article("40", "Вручення представнику")}, ${kpa.article("57", "обчислення строків")}, ${kpa.article("80", "оцінка доказів")} і ${kpa.article("129", "оскарження")}.`,
  },
  {
    label: "Зміни спеціальних строків",
    url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
    note: law.text`Зміни ${law.external("art. 100d спецзакону", "https://eli.gov.pl/eli/DU/2026/203/ogl")}: зупинення визначених строків wojewody до 04.03.2027.`,
  },
  {
    label: "RPO: затримки справ і відповідь MSWiA",
    url: delayUrl,
    note: "Розрізнення позиції адміністрації та судової оцінки застосування зупинення. Не автоматична обіцянка результату оскарження.",
  },
]
