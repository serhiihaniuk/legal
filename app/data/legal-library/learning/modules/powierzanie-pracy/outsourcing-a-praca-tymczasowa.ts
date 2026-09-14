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
const temporaryUrl =
  "https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf"
const marketUrl =
  "https://eli.gov.pl/api/acts/DU/2025/620/text/U/D20250620Lj.pdf"
const attachmentsUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1629/text/O/D20251629.pdf"
const postingUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1682/text/O/D20251682.pdf"
const ministryUrl =
  "https://www.senat.gov.pl/gfx/senat/userfiles/_public/k11/komisje/kp/75/2/odp._mrpips_03-04-2026.pdf"

const moduleContent: LegalLearningModule = {
  id: "outsourcing-a-praca-tymczasowa",
  order: 7,
  title: "Аутсорсинг і тимчасова робота: аналіз фактів",
  polish:
    "Outsourcing procesowy; pracodawca użytkownik; skierowanie; delegowanie",
  provisionScope: workLaw.text`${workLaw.article("2", "Art. 2 pkt 4–8")}; ${workLaw.article("6", "art. 6 ust. 1 pkt 1 i 3 oraz ust. 2")}; ${workLaw.article("9", "art. 9 ust. 1 pkt 1")}; ${workLaw.article("13", "art. 13 ust. 1 pkt 7")}; ${workLaw.article("17", "art. 17 ust. 1 pkt 10")}; ${workLaw.article("32", "art. 32")}; ${workLaw.article("40", "art. 40 ust. 1–3")}; ${workLaw.article("44", "art. 44 pkt 1")}; ${workLaw.article("62", "art. 62 ust. 1 pkt 4")}; ${workLaw.article("65", "art. 65 ust. 1 pkt 3")}; ${workLaw.article("68", "art. 68 ust. 1 pkt 8")}; ${workLaw.article("84", "art. 84 ust. 11–14")}; пов'язані правила тимчасової праці та реєстрації агенцій`,
  outcome:
    "За самостійної послуги виконавець організовує свою команду для виконання зобов'язання перед клієнтом. За надання людей під керівництво користувача потрібна відповідна модель тимчасової праці. Назва outsourcing, рахунок або адреса роботи окремо цього не визначають.",
  caseQuestion:
    "Чому два договори з однаковою умовою про самостійність виконавця дали різні висновки після читання робочих записів?",
  placeInWork:
    "Зіставлення договорів підприємств, фактичних розпоряджень та документів іноземця до продовження або зміни організації роботи.",
  sections: [
    {
      id: "service-and-direction",
      title: "Клієнт замовляє послугу або отримує людей під своє керівництво",
      paragraphs: [
        workLaw.text`Outsourcing procesowy означає передання зовнішньому виконавцеві певного процесу чи послуги, наприклад пакування товару. Виконавець організовує її виконання та відповідає перед клієнтом за погоджене зобов'язання. ${workLaw.external("MRPiPS у поясненні від 03.04.2026", ministryUrl)} розмежовує цю модель і надання персоналу через реальний предмет послуги, відповідальність та фактичне підпорядкування. Це офіційне пояснення, а не новий законодавчий перелік ознак. Проєкти визначень на початку цього листа є пропозицією автора петиції, не чинними статтями закону.`,
        "Самостійність не означає відсутності вимог клієнта. Клієнт може визначити обсяг пакування, строк, вимоги до якості й доступ до приміщення. Виконавець вирішує, хто з його людей і в якій послідовності виконає завдання, організовує заміни та виправлення. Договір про послугу не обов'язково є umową o dzieło: зміст зобов'язання може бути різним. Важливо, чи предметом домовленості є власна послуга виконавця, чи фактичне розпорядження його працівниками.",
        "Погодження часу доступу на склад і щоденне визначення змін конкретним людям мають різний зміст. Так само рекламація керівнику виконавця щодо неправильно упакованої партії відрізняється від постійного розподілу клієнтом окремих працівників між лініями. Координатор виконавця може справді ухвалювати ці рішення або лише пересилати розпорядження клієнта. Сама посада координатора не встановлює його повноважень.",
        "Робота в приміщенні клієнта, його обладнання чи погодинна калькуляція рахунка є відомостями для оцінки, але жодна з них окремо не доводить надання персоналу. Рахунок за готові одиниці також не заперечує прямих розпоряджень клієнта, якщо вони підтверджені. Коли бракує матеріалу, невідомим залишається конкретний факт: хто ухвалював рішення про людей, години та завдання, а не абстрактна назва моделі.",
      ],
    },
    {
      id: "temporary-work-is-a-regulated-model",
      title: "Керівництво користувача не робить будь-яке направлення законним",
      paragraphs: [
        workLaw.text`Pracodawca użytkownik є роботодавцем або іншим суб'єктом, який визначає завдання направленій агенцією людині та контролює їх виконання. Pracownik tymczasowy є працівником, якого агенція найняла саме для тимчасової праці на користь і під керівництвом користувача. ${workLaw.article("2", "Art. 2 pkt 7–8")} запозичує ці визначення з ${workLaw.external("art. 2 pkt 1–2 ustawy o zatrudnianiu pracowników tymczasowych", temporaryUrl)}. У трудовій моделі агенція залишається роботодавцем і виплачує зарплату, а користувач організовує роботу в межах своїх повноважень.`,
        workLaw.text`За ${workLaw.external("art. 2 pkt 3 цього закону", temporaryUrl)} тимчасовими є визначені завдання: сезонні, періодичні чи разові; такі, які власні працівники користувача не могли б виконати вчасно; або обов'язки його відсутнього працівника. Крім характеру завдань, діє межа тривалості. Звичайне правило ${workLaw.external("art. 20 ust. 1–4", temporaryUrl)} становить сумарно 18 місяців протягом 36 послідовних місяців для тієї самої людини й користувача, включно з трудовими та цивільними періодами. Заміна агенції не обнуляє часу користувача. Для безперервного заміщення відсутнього працівника ${workLaw.external("art. 20 ust. 5–8", temporaryUrl)} має окрему межу до 36 місяців і наступну 36-місячну перерву; ${workLaw.external("ust. 9", temporaryUrl)} окремо регулює продовження трудового договору до пологів.`,
        workLaw.text`Агенція наймає тимчасового працівника за umową o pracę na czas określony, трудовим договором на визначений строк, відповідно до ${workLaw.external("art. 7 ust. 1", temporaryUrl)}. ${workLaw.external("Art. 7 ust. 2 і art. 25a", temporaryUrl)} також охоплюють направлення за цивільним договором, але не переносять на нього без змін усі трудові приписи. Закон має й заборони певних робіт: зокрема особливо небезпечних, визначеної заміни страйкаря чи звільненого працівника та зазначеної озброєної охорони за ${workLaw.external("art. 8", temporaryUrl)}. Тому висновок про фактичне надання людей ще не означає, що таку роботу дозволено оформити як тимчасову.`,
        documents.text`У трудовій моделі ${workLaw.external("art. 14 ust. 2", temporaryUrl)} покладає на користувача безпеку й облік робочого часу та забороняє передавати тимчасового працівника далі для роботи на користь і під керівництвом іншого суб'єкта. Окрема ${documents.document("temporary-work-period-register", "ewidencja періодів тимчасової праці")} за ${workLaw.external("art. 14a", temporaryUrl)} зберігає історію людини для користувача. Вона показує періоди, а щоденний облік часу показує години. Жоден із них не замінює перевірки права іноземця працювати.`,
      ],
    },
    {
      id: "agency-scope-and-documents",
      title:
        "Реєстрація агенції, домовленість і дозвіл відповідають на різні питання",
      paragraphs: [
        documents.text`Для звичайної польської агенції ${workLaw.external("art. 305 ust. 2 ustawy o rynku pracy i służbach zatrudnienia", marketUrl)} визначає тимчасову працю як регульовану діяльність, що потребує запису в реєстрі агенцій. ${documents.document("employment-agency-register", "Відомості KRAZ")} показують обсяг її послуг. Запис лише про pośrednictwo pracy, посередництво між кандидатом і роботодавцем, не додає права наймати та направляти людей у моделі тимчасової праці. Відомості KRS або CEIDG про існування компанії цього обсягу не замінюють.`,
        workLaw.text`Для послуг щодо іноземців, яким потрібні дозвіл на працю або oświadczenie, ${workLaw.external("art. 305 ust. 3–4", marketUrl)} вимагає двох років від запису й надання відповідної послуги та отриманої зміни запису. Вік компанії сам по собі не виконує ці умови. ${workLaw.external("Art. 445 ust. 6", marketUrl)} передбачив окремий перехід для вже зареєстрованих агенцій, які надавали такі послуги до 01.06.2025: без дворічної умови, із заявою про зміну протягом трьох місяців. Це не звільнення будь-якої давно створеної компанії. Власна підстава іноземця, за якої дозвіл чи oświadczenie не потрібні, відрізняється від права агенції вести її діяльність.`,
        documents.text`${documents.document("agency-user-arrangements", "Письмові узгодження агенції з користувачем")} та відомості, які користувач передає агенції, за ${workLaw.external("art. 9 ust. 1–3 закону про тимчасову працю", temporaryUrl)} охоплюють роботу, кваліфікації, період, час і місце, обмін відомостями про оплату, безпеку та визначені обов'язки. За ${workLaw.external("art. 13 ust. 1", temporaryUrl)} окрема ${documents.document("employment-contract", "umowa o pracę з агенцією")} називає користувача, період і трудові умови, включно з виплатою зарплати агенцією. Комерційний договір підприємств і трудовий договір людини мають різних учасників та різні функції.`,
        documents.text`Для процедури звичайного дозволу агенції ${workLaw.external("§ 2 pkt 2 розпорядження Dz.U. 2025 poz. 1629", attachmentsUrl)} вимагає ${documents.document("agency-referral-confirmation", "підтвердження погодженого направлення")} від користувача. Для oświadczenia відповідна вимога міститься в ${workLaw.external("§ 7 pkt 2", attachmentsUrl)}. Підтвердження має пов'язувати користувача, агенцію та конкретне направлення. Воно описує погодження, не доводить видачі дозволу або фактичного початку. Різні функції не завжди означають два аркуші: належно пов'язаний договірний документ може водночас містити відповідне підтвердження.`,
        documents.text`${workLaw.article("9", "Art. 9 ust. 1 pkt 1")} вимагає відомостей про користувача у відповідній заяві, а ${workLaw.article("32", "art. 32 ust. 2")} називає його у виданому ${documents.document("work-permit", "дозволі на працю тимчасового працівника")}. ${documents.document("registered-work-declaration", "Oświadczenie")} містить дані користувача за ${workLaw.article("62", "art. 62 ust. 1 pkt 4")}. За ${workLaw.article("17", "art. 17 ust. 1 pkt 10")} і ${workLaw.article("68", "art. 68 ust. 1 pkt 8")} копію відповідного документа передають користувачу на його вимогу. Це інша дія, ніж додавання його підтвердження до заяви. Звичайний дозвіл не має універсального окремого поля місця роботи за ${workLaw.article("32", "art. 32 ust. 1")}; відсутність такої графи не означає права довільно змінювати користувача чи модель роботи.`,
      ],
    },
    {
      id: "posting-is-a-different-question",
      title:
        "Іноземне delegowanie не є назвою для будь-якого направлення до клієнта",
      paragraphs: [
        workLaw.text`Delegowanie на територію Польщі додає транскордонний зв'язок. У сфері ${workLaw.article("40", "art. 40 ust. 1")} іноземець уже найнятий іноземним суб'єктом і працює для нього поза Польщею, після чого його направляють до Польщі в одному з визначених випадків. Сам наказ польської компанії працювати на об'єкті іншої польської компанії не встановлює цих обставин. Для статусу podmiotu zagranicznego ${workLaw.article("2", "art. 2 pkt 5")} вимагає відповідної відсутності осідку, постійного проживання й постійного місця діяльності в Польщі та наявності осідку або проживання і діяльності за кордоном.`,
        workLaw.text`Для послуги іноземного виконавця ${workLaw.article("40", "art. 40 ust. 1 pkt 2 і ust. 3")} окремо визначає usługę eksportową як тимчасову й нерегулярну послугу суб'єкта, який не веде в Польщі господарської діяльності в розумінні названого припису. Звільнення від дозволу за ${workLaw.article("44", "art. 44 pkt 1")} має інші сукупні факти: право перебувати в іншій державі Європейського економічного простору, законний найм на підставі stosunku pracy, звичайне виконання роботи там і тимчасове направлення тим самим роботодавцем для послуги в Польщі. Іноземний власник польської компанії або один іноземний документ цього не доводить.`,
        workLaw.text`Водночас транскордонне направлення і агенційна модель можуть поєднуватися. ${workLaw.external("Art. 3 pkt 4 ustawy o delegowaniu pracowników w ramach świadczenia usług", postingUrl)} серед визначених форм охоплює також направлення працівника іноземною агенцією до користувача зі збереженням трудових відносин із нею. Отже, слово delegowanie не усуває питання, хто керує людиною та які правила агенцій застосовні. Воно також не замінює окремої підстави законного в'їзду й перебування. У польському порівнянні нижче іноземного роботодавця та попередньої роботи для нього за кордоном немає.`,
      ],
    },
    {
      id: "what-a-mismatch-changes",
      title: "Невідповідність практики договору має конкретні наслідки",
      paragraphs: [
        workLaw.text`${workLaw.article("6", "Art. 6 ust. 1 pkt 1 і ust. 2")} пов'язує направлення іноземця польським суб'єктом до іншого суб'єкта у відповідних моделях дозволу й oświadczenia з договором із агенцією тимчасової праці. ${workLaw.article("13", "Art. 13 ust. 1 pkt 7")} передбачає відмову в дозволі, якщо з обставин випливає, що працю доручав би суб'єкт, який не є законно діючою агенцією тимчасової праці, а виконували б її для третьої особи. Для запису oświadczenia ця підстава застосовується через ${workLaw.article("65", "art. 65 ust. 1 pkt 3")}. Як пояснює ${workLaw.external("MRPiPS", ministryUrl)}, це не заборона будь-якої самостійної послуги зовнішнього виконавця. Вирішальним для цієї різниці є фактичний предмет співпраці.`,
        workLaw.text`Окрема відповідальність за ${workLaw.article("84", "art. 84 ust. 12")} стосується того, хто, доручаючи працю іноземцю, направляє його для роботи на користь і під керівництвом іншого суб'єкта на іншій підставі, ніж договір, що передбачає тимчасову працю. Припис установлює штраф не нижче 3 000 zł. ${workLaw.article("84", "Ust. 11")} окремо стосується доручення роботи іноземцю, направленому суб'єктом, який не є агенцією зайнятості, зі штрафом не нижче 6 000 zł. Не слід змішувати дії учасників. ${workLaw.article("84", "Ust. 13")} установлює мінімум за кожного іноземця для порушення з ${workLaw.article("84", "ust. 1")}, а ${workLaw.article("84", "ust. 14")} має свій перелік, включно з ${workLaw.article("84", "ust. 11")}. Це не підстава автоматично перенести множення з одного припису на всі інші.`,
        documents.text`Для пояснення суперечності потрібні конкретні ${documents.document("work-organisation-evidence", "матеріали організації роботи")}: договір, фактичні графіки, доручення, рекламація і запис про її виконання за той самий період. Цей перелік є описом доказів обраного порівняння, не незмінним обов'язковим додатком до кожної заяви. Новий лист про самостійність не прибирає старих прямих розпоряджень клієнта. Нова реальна організація може мати власну дату, але не переписує вже виконану роботу.`,
        "Внутрішнє встановлення розбіжності дозволяє відмовитися від продовження непідтвердженої моделі та зберегти первинні записи. Воно не є рішенням органу про відмову чи скасування дозволу, не встановлює автоматично вину конкретної людини й не припиняє саме по собі її трудового договору. Для кожного з цих наслідків потрібні його власні факти та правова підстава.",
      ],
    },
  ],
  caseExample: {
    title: "Два договори про пакування, але різні автори щоденних розпоряджень",
    facts: documents.text`Окремий вигаданий приклад, завершений 10.08.2026. Польський клієнт U замовив у польських компаній A та C пакування різних партій товару на своєму складі протягом 03–07.08.2026. Обидва договори від 30 липня мали назву outsourcing procesowy та умову про самостійну організацію виконавцем. A і C не є агенціями зайнятості. У кожній команді працював повнолітній громадянин Індії з ${documents.document("employment-contract", "umową o pracę")} у відповідного виконавця й чинним звичайним ${documents.document("work-permit", "дозволом на працю")} для нього на пакування. Дозволи охоплювали серпень; вони не були дозволами агенцій із U як користувачем. Окремо встановлено законне перебування обох за сумісними з працею польськими національними ${documents.document("visa", "візами")}; незалежного звільнення від дозволу немає. Після завершення тижня зіставлено договори, графіки, повідомлення й записи про виконання. 10 серпня до наступної зміни C та U скасували продовження роботи команди C за незмінною домовленістю. Це рішення про організацію подальшої роботи, а не встановлене в прикладі припинення трудових договорів.`,
    sample: {
      kind: "table",
      title:
        "Zestawienie dokumentów i rzeczywistego kierowania pracą, 10.08.2026",
      note: "Вигадані вибрані польські фрагменти різних документів і завершеного робочого зіставлення. A, C та U умовні; ідентифікатори, адреси й особисті дані опущено. Це не офіційний протокол, висновок інспектора або універсальна форма договору.",
      columns: ["Odczytany materiał", "Wykonawca A", "Wykonawca C"],
      rows: [
        {
          id: "agreement",
          cells: [
            "Umowy z 30.07.2026",
            "A samodzielnie organizuje zespół i pakowanie partii. U zgłasza wady koordynatorowi A.",
            "C samodzielnie organizuje zespół i pakowanie partii. U zgłasza wady koordynatorowi C.",
          ],
        },
        {
          id: "daily-instructions",
          cells: [
            "Grafiki i wiadomości z 03–07.08.2026",
            "Koordynator A wyznacza osoby, godziny i kolejność pakowania. U określa dostęp do strefy oraz termin odbioru partii.",
            "Kierownik U codziennie wskazuje imiennie osobom C zmiany, stanowiska i kolejne zadania. Koordynator C przesyła te polecenia bez własnej decyzji.",
          ],
        },
        {
          id: "correction",
          cells: [
            "Reklamacja z 05.08 i wykonane czynności z 06.08",
            "U zgłasza wadę partii A. A sam wybiera wykonawcę poprawki, organizuje ją i usuwa wadę na własny koszt. U odbiera poprawioną partię.",
            "U bezpośrednio wyznacza pracownikowi C poprawianie opakowań na wskazanym stanowisku, następnie przenosi go do innego zadania. C nie organizuje odrębnego wykonania poprawki.",
          ],
        },
        {
          id: "billing",
          cells: [
            "Materiały rozliczenia tygodnia",
            "Kalkulacja ceny według godzin; zapis odbioru opisuje partię i poprawkę bez dodatkowego obciążenia U.",
            "Faktura nazwana usługą pakowania; zestawienie rozlicza godziny osób według zmian wyznaczonych przez U.",
          ],
        },
        {
          id: "completed-conclusion",
          cells: [
            "Wniosek i podjęta czynność, 10.08.2026",
            "Zebrane zapisy potwierdzają organizowanie wybranej usługi przez A. Zestawienie zachowano z dokumentami źródłowymi.",
            "Praktyka przeczy klauzuli samodzielności C i wskazuje skierowanie ludzi pod kierownictwo U. Przed kolejną zmianą C i U odwołały kontynuację pracy zespołu C w tej niezmienionej organizacji.",
          ],
        },
      ],
    },
    analysis: workLaw.text`У A висновок спирається на власний графік і фактично організоване виправлення, а не на одну умову договору. Погодинний рахунок прочитано разом із цими записами. У C збігаються кілька свідчень: щоденні персональні вказівки U, відсутність самостійного рішення координатора C та пряме перенаправлення працівника на інше завдання. Тому записи показують надання людей під керівництво U, хоча договір називає самостійну послугу. Відсутність у C агенційного статусу й належної моделі направлення не виправляється звичайним дозволом для C. Приписи ${workLaw.article("84", "art. 84 ust. 11–12")} пояснюють окремі ризики дій учасників, але зіставлення не є рішенням про покарання. З нього також не випливає, що ці постійно розподілювані завдання неодмінно відповідають законодавчим умовам тимчасової праці: таку можливу нову модель в прикладі не оформлювали.`,
    lesson:
      "10 серпня завершено два різні висновки про організацію дослідженого тижня. Матеріали A підтримують самостійне виконання послуги; матеріали C спростовують договірну заяву про його самостійність. Продовження команди C в незмінній організації скасовано, первинні записи збережено. Жодного штрафу, скасування дозволу, нового агенційного направлення або висновку про всі інші умови зайнятості приклад не встановлює.",
  },
}

export const outsourcingAPracaTymczasowaLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:outsourcing-a-praca-tymczasowa",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "outsourcing-a-praca-tymczasowa",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Направлення, дані користувача, окремі підстави відмови й відповідальності за ${workLaw.external("чинним текстом Dz.U. 2025 poz. 621", workUrl)} зіставлено з правилами тимчасової праці, діяльності агенцій і транскордонного направлення. Перевірка 14.09.2026 стосується цього пояснення та завершеного прикладу, не всієї редакції акта.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 2 pkt 4–8; art. 6 ust. 1 pkt 1 and 3, ust. 2; art. 9 ust. 1 pkt 1; art. 13 ust. 1 pkt 7; art. 17 ust. 1 pkt 10; art. 32; art. 40 ust. 1–3; art. 44 pkt 1; art. 62 ust. 1 pkt 4; art. 65 ust. 1 pkt 3; art. 68 ust. 1 pkt 8; art. 84 ust. 11–14. Related DU2025/236 arts. 2, 7–9, 13–14a, 20, 25a; DU2025/620 art. 305 ust. 2–4 and445 ust. 6; DU2025/1629 §2 pkt2 and§7 pkt2; DU2025/1682 art. 3 pkt4.",
          },
        ],
      },
      {
        id: "actual-service-and-supervision",
        kind: "official-guidance",
        text: "MRPiPS у позиції від 03.04.2026 розмежовує власну послугу виконавця і надання персоналу за реальним предметом співпраці та підпорядкуванням. Пояснення міністерства відділено від процитованого проєкту петиції та від робочого висновку у вигаданому прикладі.",
        basis: [
          {
            reference: { kind: "external", url: ministryUrl },
            locator:
              "Physical pages2–3 and6–7; ministry explanation, not the petitioner's proposed definitions.",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-14",
      verifiedAt: "2026-09-14",
    },
    body: moduleContent,
  })

export default outsourcingAPracaTymczasowaLearningModuleTopic
