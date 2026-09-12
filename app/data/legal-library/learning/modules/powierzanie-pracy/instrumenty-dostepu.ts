import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const documents = createEvidenceDocumentTextAuthor()
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const nationalitiesUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1617/text/O/D20251617.pdf"
const seasonalUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1654/text/O/D20251654.pdf"
const ukraineTransitionUrl =
  "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf"

const moduleContent: LegalLearningModule = {
  id: "instrumenty-dostepu",
  order: 3,
  title: "Дозвіл, декларація та звільнення від обов’язку",
  polish:
    "Zezwolenie na pracę; oświadczenie wpisane do ewidencji; swobodny dostęp; zwolnienie; powiadomienie",
  provisionScope: workLaw.text`${workLaw.article("1", "Art. 1 ust. 4")}; ${workLaw.article("3", "art. 3")}; ${workLaw.article("5a", "art. 5a")}; ${workLaw.article("6", "art. 6")}; ${workLaw.article("7", "art. 7 ust. 1")}; ${workLaw.article("8", "art. 8 ust. 1")}; види та зміст дозволів за ${workLaw.article("26", "art. 26")}, ${workLaw.article("32", "art. 32")}, ${workLaw.articleRange("35", "44", { start: "art. 35", end: "44" })}, ${workLaw.articleRange("45", "46", { start: "art. 45", end: "46" })}, ${workLaw.articleRange("50", "55", { start: "art. 50", end: "55" })}; зареєстроване oświadczenie за ${workLaw.articleRange("61", "64", { start: "art. 61", end: "64" })}, ${workLaw.article("68", "art. 68")}, ${workLaw.article("70", "art. 70")}; чинні виконавчі та перехідні правила`,
  outcome:
    "Право працювати може випливати з конкретного дозволу, зареєстрованого oświadczenia або безпосередньо з правового статусу чи звільнення. Ці підстави мають різні умови. Заява роботодавця, видане рішення і повідомлення після початку роботи не є взаємозамінними документами.",
  caseQuestion:
    "Чому для однакової складської роботи в одній компанії зареєстроване oświadczenie, квитанція про заяву та рішення про pobyt stały дають різні висновки?",
  placeInWork:
    "Встановлення конкретної підстави праці та її документального підтвердження після визначення учасників і фактичного виду роботи.",
  sections: [
    {
      id: "four-permit-models",
      title: "Чотири види дозволу відповідають різній організації роботи",
      paragraphs: [
        workLaw.text`Zezwolenie na pracę є індивідуальним дозволом на визначену роботу. За ${workLaw.article("7", "art. 7 ust. 1")} його видають адміністративним рішенням, а заявником за ${workLaw.article("8", "art. 8 ust. 1")} є суб'єкт, який доручає роботу. ${workLaw.article("6", "Art. 6 ust. 1")} розрізняє договір із польським суб'єктом, корпоративну функцію, направлення іноземним роботодавцем та сезонну роботу. Цей поділ визначає належний дозвіл тоді, коли особа його потребує; він не скасовує її незалежного права працювати без такого документа.`,
        documents.text`${documents.document("work-permit", "Дозвіл на працю для польського суб'єкта")} охоплює роботу за договором із цим суб'єктом. Його видає wojewoda за ${workLaw.article("26", "art. 26")}. Якщо працівника направляють до іншого суб'єкта, ${workLaw.article("6", "art. 6 ust. 1 pkt 1")} вимагає договору з agencją pracy tymczasowej. Це агенція, яка наймає й направляє працівника до користувача, а не окремий п'ятий вид дозволу. За ${workLaw.article("32", "art. 32")} рішення визначає працівника, роботодавця, посаду або роботу, час, найнижчу оплату, вид договору та період; для тимчасової праці також користувача.`,
        documents.text`${documents.document("corporate-work-permit", "Дозвіл для корпоративної функції")} стосується виконання функції в zarząd, тобто органі управління, представництва чи ведення справ spółki komandytowej або komandytowo-akcyjnej, а також prokury, спеціального підприємницького повноваження. Точні категорії визначає ${workLaw.article("36", "art. 36 ust. 1")}. Саме володіння часткою не є такою функцією. Wojewoda видає дозвіл за ${workLaw.article("35", "art. 35")}, а ${workLaw.article("37", "art. 37")} пов'язує його з конкретною особою, компанією, функцією та строком. Призначення до іншої компанії саме не переносить туди цей дозвіл.`,
        documents.text`${documents.document("posting-work-permit", "Дозвіл у зв'язку з delegowaniem")} стосується працівника іноземного суб'єкта, який уже працює для нього за кордоном і якого направляють до Польщі. ${workLaw.article("40", "Art. 40 ust. 1–3")} розділяє роботу у власному відділенні, закладі, представництві або визначеному пов'язаному суб'єкті, usługa eksportowa, тобто тимчасову й нерегулярну послугу іноземного суб'єкта, який не веде господарської діяльності в Польщі в розумінні названого припису, та іншу мету, яка не охоплює ні роботи в таких приймаючих суб'єктах, ні надання послуг. Дозвіл видає wojewoda за правилами ${workLaw.article("40", "art. 40 ust. 4–5")}; його зміст за ${workLaw.article("42", "art. 42")} фіксує іноземного роботодавця, працівника й умови, а у відповідних випадках також приймаючий суб'єкт або отримувача послуги. Польський замовник не стає роботодавцем лише тому, що одержує послугу.`,
        documents.text`${documents.document("seasonal-work-permit", "Zezwolenie na pracę sezonową")} видає starosta для роботи в польського суб'єкта за ${workLaw.article("45", "art. 45")} і ${workLaw.article("46", "art. 46")}. Сезонність визначає ${workLaw.external("перелік діяльності Dz.U. 2025 poz. 1654", seasonalUrl)}, а не короткий договір чи пора року. Наприклад, вирощування зерняткових і кісточкових плодів у 01.24.Z включене до переліку. Окремі позиції з позначкою ex охоплюють лише частину відповідного підкласу. ${workLaw.article("54", "Art. 54")} установлює максимум дев'ять місяців у календарному році з різними правилами підрахунку залежно від підстави в'їзду. Рішення за ${workLaw.article("55", "art. 55")} визначає роботодавця, працівника, час, оплату, правову підставу роботи, строк і, за потреби, користувача.`,
      ],
    },
    {
      id: "registered-declaration",
      title: "Oświadczenie має значення після внесення до реєстру",
      paragraphs: [
        documents.text`${documents.document("registered-work-declaration", "Oświadczenie o powierzeniu pracy cudzoziemcowi wpisane do ewidencji")} є заявою роботодавця, яку starosta вніс до реєстру. Це інший механізм, ніж рішення про дозвіл на працю. За ${workLaw.article("6", "art. 6 ust. 2")} він стосується роботи в Польщі за договором із польським суб'єктом, а при направленні до іншого суб'єкта потрібен договір з агенцією тимчасової праці. Реєстрацію здійснює starosta за ${workLaw.article("64", "art. 64")}, на практиці через уповноважений PUP, powiatowy urząd pracy.`,
        workLaw.text`${workLaw.external("§ 2 розпорядження Dz.U. 2025 poz. 1617", nationalitiesUrl)}, чинного від 01.12.2025, називає Вірменію, Білорусь, Молдову та Україну. Грузії в поточному переліку немає. Проте ${workLaw.external("§ 3–4 цього розпорядження", nationalitiesUrl)} окремо зберігають продовження роботи громадян Грузії за визначеними раніше зареєстрованими oświadczeniami до кінця їх чинності та попередні правила для проваджень, відкритих і незавершених до цієї дати. Старий запис не оцінюють так, наче його подали вперше сьогодні.`,
        workLaw.text`Громадянства з переліку недостатньо. ${workLaw.article("61", "Art. 61 ust. 1")} вимагає роботи в Польщі поза сезонним переліком і поза названими корпоративними функціями. Заявлений період не може перевищувати 24 місяці, а початок має припадати не пізніше шести місяців від подання. Тому громадянина Молдови не можна оформити через oświadczenie для збору яблук у діяльності з сезонного переліку лише тому, що його громадянство підходить. Подання поза цими умовами за ${workLaw.article("61", "art. 61 ust. 2")} залишають без розгляду; виконання умов входу в процедуру ще не гарантує внесення запису.`,
        workLaw.text`Дата подання, дата внесення до реєстру та зареєстрований період роботи відрізняються. ${workLaw.article("64", "Art. 64 ust. 2")} дозволяє органу визначити пізніший початок, ніж запропонував роботодавець. За ${workLaw.article("68", "art. 68 ust. 1 pkt 5")} роботодавець передає іноземцеві саме зареєстрований документ. Його умови за ${workLaw.article("62", "art. 62")} стосуються конкретних учасників, роботи й місця, договору, часу, оплати та періоду. Запис не є загальним правом працювати для будь-якої компанії.`,
      ],
    },
    {
      id: "status-exemption-and-exclusion",
      title: "Право зі статусу, звільнення та незастосування закону",
      paragraphs: [
        documents.text`Swobodny dostęp do rynku pracy означає доступ до праці без окремого дозволу на працю чи oświadczenia на підставі одного з установлених статусів. Наприклад, ${workLaw.article("3", "art. 3 ust. 1 pkt 6")} надає його власникові польського zezwolenia na pobyt stały. ${documents.document("administrative-decision", "Рішення про надання цього дозволу")} встановлює статус, а ${documents.document("residence-card", "karta pobytu")} є пов'язаним документом про перебування. Слово karta саме по собі не показує, який статус має людина. Право працювати за визначеним дозволом на тимчасове перебування, передбачене ${workLaw.article("3", "art. 3 ust. 2 pkt 1")}, також відрізняється від окремого zezwolenia na pracę та діє в межах відповідної підстави.`,
        documents.text`Zwolnienie z obowiązku posiadania zezwolenia означає, що за встановлених умов дозволу не потрібно. Наприклад, чинна ${documents.document("karta-polaka", "Karta Polaka")} за ${workLaw.article("3", "art. 3 ust. 5 pkt 1")} поєднується з правом перебувати на одній із підстав, названих у ${workLaw.article("3", "art. 3 ust. 3")}, або в межах безвізового руху. Сама Karta Polaka не створює права перебування. Та сама вступна умова супроводжує звільнення випускника, який завершив навчання у закладі вищої освіти з місцезнаходженням у Польщі, за ${workLaw.article("3", "art. 3 ust. 5 pkt 3")}; ${documents.document("polish-graduation-diploma", "диплом про завершені студії")} не є лише довідкою про теперішнє навчання.`,
        workLaw.text`Звільнення може залежати від моделі роботи. ${workLaw.article("44", "Art. 44 pkt 1")} охоплює працівника, який має право перебування в іншій державі Європейського економічного простору, законно найнятий там у межах stosunku pracy, тобто трудових відносин, та зазвичай там працює. Той самий роботодавець тимчасово направляє його для надання послуги в Польщі. Самої європейської адреси компанії або короткого візиту недостатньо. Для корпоративних функцій ${workLaw.article("39", "art. 39")} має окремий виняток при пов'язаному з функцією перебуванні в Польщі не більш як шість місяців сукупно протягом послідовних дванадцяти. Ці звільнення не видають працівникові візу і не замінюють інших застосовних правил роботи.`,
        workLaw.text`Виключення зі сфери закону має іншу логіку. За ${workLaw.article("1", "art. 1 ust. 4 pkt 6 lit. a")} закон не застосовується до доручення роботи громадянам ЄС та держав Європейської асоціації вільної торгівлі (EFTA), які є сторонами Європейського економічного простору. За ${workLaw.article("1", "art. 1 ust. 4 pkt 1")} він також не охоплює роботу іноземця-підприємця, внесеного до CEIDG, за цивільним договором у межах його підприємницької діяльності. CEIDG є польським реєстром підприємницької діяльності фізичних осіб. Сам напис B2B у договорі без цих обставин не встановлює виключення. Незастосування цього закону не скасовує правил перебування, трудового права чи інших законів.`,
      ],
    },
    {
      id: "notification-is-not-permission",
      title: "Powiadomienie повідомляє про подію у визначеному режимі",
      paragraphs: [
        documents.text`${documents.document("ukraine-work-notification", "Powiadomienie o powierzeniu pracy cudzoziemcowi")} за ${workLaw.article("5a", "art. 5a ust. 1–2 і 6")} польський суб'єкт подає електронно до PUP за своїм місцезнаходженням або місцем постійного перебування протягом семи днів від фактичного початку роботи. Припис безпосередньо стосується іноземця, який користується тимчасовим захистом у Польщі. Його swobodny dostęp випливає з ${workLaw.article("3", "art. 3 ust. 1 pkt 12")}, а повідомлення є обов'язком роботодавця. Це не заява про майбутній дозвіл і не рішення органу про допуск до праці. Режим не обмежений самим українським громадянством.`,
        workLaw.text`Водночас ${workLaw.external("art. 41 закону Dz.U. 2026 poz. 203", ukraineTransitionUrl)} протягом трьох років від 05.03.2026 поширює відповідне застосування ${workLaw.article("3", "art. 3 ust. 1 pkt 12")} та ${workLaw.article("5a", "art. 5a")} на громадян України, які законно перебувають у Польщі й не користуються тут тимчасовим захистом. Для них законне перебування є окремою умовою, а не наслідком повідомлення. ${workLaw.external("Art. 40 того самого закону", ukraineTransitionUrl)} зберігає застосування попереднього правила до повідомлень, належно поданих до 05.03.2026. Сама зміна закону не означає обов'язку заново повідомити про кожну вже розпочату роботу.`,
        documents.text`Повідомлення у процедурі oświadczenia мають іншу підставу. За ${workLaw.article("70", "art. 70 ust. 1")} роботодавець повідомляє starostę, який зробив запис, про ${documents.document("declaration-start-notification", "фактичний початок")} протягом семи днів від нього або про ${documents.document("declaration-non-start-notification", "непочаток")} протягом чотирнадцяти днів від дати початку в реєстрі. ${documents.document("declaration-end-notification", "Повідомлення про остаточний непочаток або дострокове закінчення")} за ${workLaw.article("70", "art. 70 ust. 2 і 5")} спричиняє анулювання запису в силу закону. Отже, одна назва powiadomienie ще не пояснює ні правової підстави, ні наслідку надісланого документа.`,
      ],
    },
    {
      id: "filing-result-and-current-scope",
      title: "Підтвердження подання не замінює результату процедури",
      paragraphs: [
        documents.text`${documents.document("dispatch-proof", "Підтвердження подання")} разом із надісланим документом установлює, що і коли подано. Воно не перетворює заяву на видане zezwolenie або на зареєстроване oświadczenie. Роботодавець передає рішення працівникові за ${workLaw.article("17", "art. 17 ust. 1 pkt 7")}. При читанні рішення дата видачі, ${documents.document("delivery-proof", "дата вручення")} та дозволений період мають окреме значення. Підписаний договір також не змінює періоду, який установив орган.`,
        documents.text`Сезонна процедура показує, чому не можна звести все до двох назв «заява» і «дозвіл». ${documents.document("seasonal-registration-certificate", "Zaświadczenie o wpisie wniosku do ewidencji")} підтверджує попередню реєстрацію заяви за ${workLaw.article("50", "art. 50")}. Для передбаченого сезонного в'їзду роботодавець після приїзду подає ${documents.document("seasonal-arrival-statement", "oświadczenie o zgłoszeniu się cudzoziemca do pracy")} з документами за ${workLaw.article("51", "art. 51 ust. 1")}. ${workLaw.article("51", "Art. 51 ust. 3")} дозволяє роботу на умовах реєстраційної довідки від належного подання цих документів до вручення рішення, крім періодів зупинення провадження на прохання сторони. Якщо початок припав на неробочий день установи, подання в її перший робочий день може зберегти законність такого початку за ${workLaw.article("51", "art. 51 ust. 4")}. Це спеціальний механізм, а не загальний наслідок будь-якої квитанції.`,
        workLaw.text`Окремі правила продовження роботи, зокрема ${workLaw.article("21", "art. 21")} для наступного дозволу та ${workLaw.article("71", "art. 71")} після oświadczenia, пов'язують очікування рішення з уже існуючою роботою та власними умовами. Самої першої заяви роботодавця недостатньо, щоб назвати початок нової роботи «продовженням». Так само майбутня кінцева дата на старому документі не виключає його пізнішого відкликання або втрати чинності. Для конкретного дня встановлюють дію підстави й те, чи охоплює вона фактичну роботу; належне перебування залишається окремим питанням за ${workLaw.article("3", "art. 3")}.`,
      ],
    },
  ],
  caseExample: {
    title: "Три висновки перед роботою на одному складі",
    facts:
      "Окремий вигаданий приклад. 31.08.2026 польська компанія A завершила внутрішнє зіставлення матеріалів трьох повнолітніх кандидатів на роботу з 01.09.2026 на власному складі промислових товарів у Вроцлаві. Це безпосередній найм без агенції, корпоративних функцій, направлення іноземним роботодавцем і діяльності з сезонного переліку. M є громадянином Молдови, I та P є громадянами Індії. Для M та I окремо встановлено законне перебування за польськими робочими візами до 30.11.2026, сумісними з роботою за відповідним дозволом чи oświadczeniem. P має чинне польське zezwolenie na pobyt stały. Для M та I немає іншої незалежної підстави праці; I раніше не працював для A і не має підстави продовження роботи в очікуванні рішення. 1 вересня запис доповнили фактом непочатку роботи I. Наведено результат зіставлення підстав, а не всю перевірку майбутнього працевлаштування.",
    sample: {
      kind: "table",
      title: "Notatka z 31.08.2026, uzupełniona 01.09.2026",
      note: "Вигаданий завершений робочий запис польською, не офіційний формуляр, дозвіл або рішення органу. Позначення осіб і компанії умовні; особисті та реєстрові ідентифікатори не наведені.",
      columns: ["Ustalony dokument i fakt", "Porównanie", "Zapisany wynik"],
      rows: [
        {
          id: "registered-moldovan",
          cells: [
            "M, obywatel Mołdawii. Oświadczenie A złożone 03.08.2026, wpisane do ewidencji 10.08.2026. Zarejestrowana praca magazyniera: 01.09–30.11.2026. Wpis pozostaje ważny.",
            "Osoba, pracodawca, miejsce, rodzaj pracy, umowa, czas i wynagrodzenie w planie odpowiadają zarejestrowanym warunkom. Jest dokument po wpisie, a nie tylko potwierdzenie wysłania.",
            "Jako podstawę pracy wskazano oświadczenie wpisane do ewidencji, łącznie z ustaloną właściwą podstawą pobytu. Nie zastąpiono go nowym powiadomieniem przed rozpoczęciem pracy.",
          ],
        },
        {
          id: "pending-indian",
          cells: [
            "I, obywatel Indii. A złożyła pierwszy wniosek o zezwolenie na pracę 03.08.2026. Jest kopia wniosku i potwierdzenie jego złożenia. Do 31.08.2026 zezwolenia nie wydano.",
            "Potwierdzenie dotyczy wniosku, nie wydanej decyzji. Brak wcześniejszej pracy dla A i podstawy jej kontynuacji. Oświadczenie nie jest dostępne dla tego obywatelstwa.",
            "31.08.2026 A wstrzymała planowane dopuszczenie I do pracy. I nie rozpoczął pracy 01.09.2026. Nie zapisano, że wojewoda odmówił wydania zezwolenia.",
          ],
        },
        {
          id: "permanent-indian",
          cells: [
            "P, obywatel Indii. Decyzja o udzieleniu zezwolenia na pobyt stały w Polsce i aktualna karta pobytu. Zezwolenie przysługuje P w porównywanym okresie.",
            "Prawo P nie wynika z wniosku A ani z listy obywatelstw dla oświadczeń. Ustalono odrębny status dający swobodny dostęp do rynku pracy.",
            "Usunięto z roboczego opisu błędną informację, że każdy obywatel Indii musi oczekiwać na zezwolenie na pracę. Dla P wskazano polski pobyt stały jako właściwą podstawę.",
          ],
        },
      ],
    },
    analysis: documents.text`Для M вирішальним був уже зроблений запис у ${documents.document("registered-work-declaration", "oświadczeniu")}, а не лише дата надсилання. Для I ${documents.document("dispatch-proof", "підтвердження подання")} не показувало виданого ${documents.document("work-permit", "дозволу на працю")}; за встановленої відсутності іншої підстави A не допустила його до початку. Для P ${documents.document("administrative-decision", "рішення про польський pobyt stały")} дало інший результат за ${workLaw.article("3", "art. 3 ust. 1 pkt 6")}. Однакове індійське громадянство I та P не переважило різниці їхнього статусу.`,
    lesson:
      "Компанія розділила зареєстровану підставу M, незавершену дозвільну процедуру I та самостійне право P. Для I зафіксовано фактичний непочаток роботи, для P виправлено помилкову вимогу очікувати окремий дозвіл. Ці висновки не підтверджують заздалегідь підписання договорів, передання їх копій, майбутніх повідомлень, виплат чи всіх умов діяльності A.",
  },
}

export const instrumentyDostepuLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:instrumenty-dostepu",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "instrumenty-dostepu",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Види дозволів, зареєстроване oświadczenie, статусні підстави та повідомлення за ${workLaw.external("чинним офіційним текстом Dz.U. 2025 poz. 621", workUrl)}, пов'язаними виконавчими й перехідними приписами. Перевірено 12.09.2026 у межах цього пояснення.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 1 ust. 4 pkt 1 and pkt 6 lit. a; art. 3 ust. 1 pkt 6 and 12, ust. 2 pkt 1, ust. 3 and ust. 5; art. 5a; art. 6–8; art. 17 ust. 1 pkt 7; art. 21; art. 26, 32, 35–46, 50–55, 61–64, 68 ust. 1 pkt 5, 70–71. Related: DU2025/1617 §§2–5; DU2025/1654; DU2026/203 arts40–41 and54.",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: moduleContent,
  })

export default instrumentyDostepuLearningModuleTopic
