import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import { workLaw as law } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()
const temporaryUrl =
  "https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf"
const agencyUrl =
  "https://eli.gov.pl/api/acts/DU/2025/620/text/U/D20250620Lj.pdf"
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const attachmentsUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1629/text/O/D20251629.pdf"
const temporaryArticle = (locator: string) =>
  law.external(locator, temporaryUrl)
const agencyArticle = (locator: string) => law.external(locator, agencyUrl)
const temporaryReference = { kind: "external", url: temporaryUrl } as const

export const temporaryWorkTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:temporary-work",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "temporary-work" },
    },
    summary:
      "Agencja pracy tymczasowej наймає людину й направляє її до pracodawcy użytkownika, який визначає завдання та контролює роботу. Закон розділяє їхні обов'язки й обмежує час роботи тієї самої людини для того самого користувача. Заміна агенції цей час не обнуляє.",
    claims: [
      {
        id: "temporary-work-triangle",
        kind: "statute-text",
        text: law.text`${temporaryArticle("Art. 2")} і ${temporaryArticle("art. 7 ustawy o zatrudnianiu pracowników tymczasowych")} розрізняють агенцію, працівника та pracodawcę użytkownika. Людина на цивільному договорі не стає працівником агенції лише через направлення, хоча закон поширює на таку роботу визначені правила.`,
        basis: [{ reference: temporaryReference, locator: "Art. 2, 7, 25a" }],
      },
      {
        id: "temporary-work-joined-periods",
        kind: "statute-text",
        text: law.text`Загальний ліміт ${temporaryArticle("art. 20 ust. 1–4 ustawy o zatrudnianiu pracowników tymczasowych")} становить 18 місяців у 36 послідовних місяцях. Для одного pracodawcy użytkownika враховують роботу тієї самої людини через різні агенції та за трудовими і цивільними договорами разом.`,
        basis: [{ reference: temporaryReference, locator: "Art. 20 ust. 1–4" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: {
      title: "Praca tymczasowa",
      polish: "agencja pracy tymczasowej; pracodawca użytkownik",
      related: ["outsourcing-case", "stay-work"],
      documents: [
        documents.text`${documents.document("employment-certificate", "Świadectwo pracy агенції")}: завершені трудові періоди з назвами користувачів. Документи A і B у прикладі зіставляють перед новим направленням, а не подають повторно до заяви про побут.`,
        documents.text`${documents.document("temporary-civil-work-certificate", "Zaświadczenie про період тимчасової роботи за цивільним договором")}: агенція видає його після відповідної роботи. Воно потрібне для такої історії; у прикладі A і B цивільних періодів немає.`,
        documents.text`${documents.document("temporary-work-period-register", "Ewidencja періодів у користувача")}: внутрішній персональний облік фактичних періодів для зіставлення історії. Це не довідка агенції та не універсальний додаток до заяви.`,
        documents.text`${documents.document("agency-referral-confirmation", "Підтвердження погодженого направлення від pracodawcy użytkownika")}: умовний додаток до відповідної заяви агенції. У прикладі з власником pobytu stałego такої заяви немає.`,
        documents.text`${documents.document("employment-contract", "Umowa o pracę з агенцією")}: у тимчасовій праці додатково називає користувача, період і погоджені умови направлення. Ця назва не охоплює цивільних договорів.`,
        documents.text`${documents.document("work-organisation-evidence", "Матеріали про фактичну організацію роботи")}: огляд того, як зіставляють договори між компаніями, графіки, доручення та приймання результату. Це не один обов'язковий додаток до кожної заяви.`,
        documents.text`${documents.document("registered-work-declaration", "Зареєстроване oświadczenie")}: лише якщо робота спирається на цей інструмент. У наведеному прикладі власник pobytu stałego його не потребує.`,
      ],
      sources: [
        {
          label: "Ролі, документи та часові межі тимчасової праці",
          url: temporaryUrl,
          note: law.text`Перевірено 12.09.2026 ${temporaryArticle("art. 2, 4, 7–9, 11–16, 18a, 20 і 25a")} ustawy o zatrudnianiu pracowników tymczasowych, Dz.U. 2025 poz. 236. Правило 18/36 належить цьому закону.`,
        },
        {
          label: "KRAZ і перехід для агенцій, які вже працювали",
          url: agencyUrl,
          note: law.text`${agencyArticle("Art. 305, 308 і 313")} та ${agencyArticle("art. 445 ust. 2 і 6")} ustawy o rynku pracy i służbach zatrudnienia, Dz.U. 2025 poz. 620. Станом на 12.09.2026 перевірено відповідний обсяг послуг і перехід з 01.06.2025.`,
        },
        {
          label: "Додаткові умови праці іноземця через агенцію",
          url: workUrl,
          note: law.text`${law.article("3", "Art. 3 ust. 1 pkt 6")}, ${law.article("6")}, ${law.article("13", "art. 13 ust. 1 pkt 7")}, ${law.article("32", "art. 32 ust. 2")}, ${law.article("62")}, ${law.article("18")} та ${law.article("69")}. Це перевірка відповідних правил агенцій, не всіх можливих підстав праці.`,
        },
        {
          label: "Підтвердження погодженого направлення від користувача",
          url: attachmentsUrl,
          note: law.text`${law.external("§ 2 pkt 2", attachmentsUrl)}, ${law.external("§ 5 pkt 4", attachmentsUrl)}, ${law.external("§ 6 ust. 1 pkt 1", attachmentsUrl)} та ${law.external("§ 7 pkt 2", attachmentsUrl)} розрізняють додатки до відповідних заяв і oświadczenia. Розпорядження чинне з 01.12.2025.`,
        },
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "У тимчасовій праці формальний роботодавець і той, хто щодня керує роботою, є різними суб'єктами. Agencja pracy tymczasowej наймає працівника для направлення. Pracodawca użytkownik, підприємство-користувач, визначає його завдання та контролює виконання. Саме цей розподіл пояснює, чому в справі потрібні відомості про обидва підприємства.",
          "Законність моделі складається з кількох окремих умов. Агенція повинна мати право на відповідну послугу, робота має відповідати визначенню тимчасової, а періоди й фактична організація мають залишатися в межах закону. Для іноземця додатково встановлюють законне перебування та право до конкретної роботи.",
        ],
        sections: [
          {
            id: "roles-and-tasks",
            title: "Агенція наймає, користувач визначає щоденні завдання",
            paragraphs: [
              law.text`За ${temporaryArticle("art. 2")} pracownik tymczasowy є працівником агенції, найнятим для роботи на користь і під керівництвом користувача. ${temporaryArticle("Art. 7")} передбачає для нього umowę o pracę na czas określony. Агенція може також направляти особу на цивільному договорі, але така особа не стає її працівником у трудовому значенні. До цивільної роботи застосовують визначені законом правила, зокрема про періоди, за ${temporaryArticle("art. 25a")}.`,
              law.text`Praca tymczasowa означає конкретні категорії завдань у ${temporaryArticle("art. 2 pkt 3")}: сезонні, періодичні чи разові завдання; роботу, яку штатні працівники користувача не можуть виконати вчасно; або обов'язки його відсутнього працівника. Строковий договір сам по собі не доводить належності до цих категорій. Наприклад, треба пояснити, які замовлення й строки створюють тимчасову потребу, якщо агенцію залучено для додаткового складського обсягу.`,
              "У справжній послузі outsourcingowej компанія-виконавець сама організовує виконання погодженої послуги й відповідає перед замовником за неї. Перебування її людей на території клієнта ще не визначає моделі. Значення мають конкретні факти: хто призначає працівнику зміну, розподіляє щоденні завдання, замінює людей і перевіряє виконання. Якщо це робить клієнт щодо направлених працівників, назва договору про outsourcing не усуває питання про pracę tymczasową.",
              law.text`Користувач не може бути pracodawcą użytkownikiem щодо власного працівника за ${temporaryArticle("art. 4")}, а ${temporaryArticle("art. 14 ust. 2 pkt 3")} забороняє йому направляти тимчасового працівника далі для роботи на користь і під керівництвом іншого суб'єкта. Отже, агенція та користувач не створюють необмеженого ланцюга передання людей.`,
            ],
          },
          {
            id: "agency-register",
            title:
              "KRAZ підтверджує право агенції на послугу, а не право працівника до роботи",
            paragraphs: [
              law.text`KRAZ, rejestr agencji zatrudnienia, є реєстром регульованих послуг агенцій. За ${agencyArticle("art. 305")} важливий вид послуги: pośrednictwo pracy, посередництво у працевлаштуванні, не слід ототожнювати з pracą tymczasową. Відомості про конкретний суб'єкт, чинний запис і належний обсяг послуг читають разом. KRS або CEIDG підтверджують інші реєстраційні відомості про підприємство й самі не встановлюють права направляти тимчасових працівників.`,
              law.text`Для послуг щодо іноземців, яким потрібне zezwolenie na pracę або oświadczenie, ${agencyArticle("art. 305 ust. 3–4")} передбачає спеціальну умову: два роки від запису в реєстр і надання відповідних послуг агенції, а також зміну запису для цього обсягу діяльності. Це не загальна дворічна заборона на будь-яку тимчасову працю й не умова для кожного іноземця незалежно від його статусу. Відомості публічного реєстру та процедуру зміни запису регулюють ${agencyArticle("art. 308 і 313")}.`,
              law.text`Старі агенції мають окремий перехід. ${agencyArticle("Art. 445 ust. 2 і 6")} зберігає визначені записи й сертифікати та звільняє від дворічної умови вже внесених до реєстру суб'єктів, які надавали зазначену послугу іноземцям до 01.06.2025. Вони повинні були звернутися про зміну запису протягом трьох місяців. Для такої агенції важливі її попередня діяльність і виконання перехідного обов'язку; одного віку компанії недостатньо.`,
              "Після перевірки агенції все одно залишається окреме питання працівника. Запис у KRAZ не продовжує його перебування, не замінює потрібного дозволу й не збільшує допустимого періоду роботи для конкретного користувача.",
            ],
          },
          {
            id: "agreements-and-records",
            title: "Що погоджують підприємства і що отримує працівник",
            paragraphs: [
              law.text`Для укладення трудового договору користувач та агенція письмово погоджують за ${temporaryArticle("art. 9")} вид роботи, необхідні кваліфікації, передбачуваний період, час і місце роботи. Користувач також письмово повідомляє про винагороду та відповідні внутрішні правила, умови безпеки й гігієни праці (BHP, bezpieczeństwo i higiena pracy) та відсутність визначеної заборони після скорочення. Окремі узгодження визначають передання даних про виконану роботу, потрібних агенції для правильного розрахунку оплати.`,
              documents.text`Працівник отримує письмову інформацію про погоджені умови перед укладенням договору відповідно до ${temporaryArticle("art. 11")}. Його ${documents.document("employment-contract", "umowa o pracę з агенцією")} за ${temporaryArticle("art. 13")} називає pracodawcę użytkownika, погоджений період та умови роботи, включно з оплатою, яку виплачує агенція. Договір працівника й узгодження двох підприємств є різними документами. Суперечність між ними потребує пояснення до фактичного направлення.`,
              documents.text`Користувач забезпечує визначені законом умови BHP, зокрема навчання, засоби захисту та оцінку ризику, і веде облік робочого часу. Агенція використовує відомості про роботу для розрахунку зарплати. Тому ${documents.document("payroll-statement", "розрахунок зарплати")} та ${documents.document("bank-statement", "банківська виписка про її виплату")} не замінюють графіка й обліку фактично відпрацьованих годин. Розподіл обов'язків визначають ${temporaryArticle("art. 9 і 14")}; напис у договорі не дозволяє просто перекласти всі обов'язки на іншу сторону.`,
              law.text`${temporaryArticle("Art. 15")} забороняє гірше ставлення до тимчасового працівника щодо умов праці та інших умов зайнятості порівняно з працівниками користувача на такій самій або подібній посаді. Це захист тимчасових працівників загалом, не лише іноземців. При направленні менш як на шість тижнів правило рівного ставлення не охоплює доступу до навчання для підвищення кваліфікації, яке організовує користувач. Цей виняток не скасовує обов'язкового навчання BHP. За порушення рівного ставлення ${temporaryArticle("art. 16")} передбачає вимогу працівника про відшкодування до агенції та її відповідну вимогу до користувача.`,
              law.text`Деякі завдання взагалі заборонено доручати в цій моделі за ${temporaryArticle("art. 8")}: особливо небезпечні роботи, заміну страйкуючого на його робочому місці, визначені озброєні охоронні роботи. Заборона після скорочення має точні межі: такий самий вид роботи, припинення трудових відносин із причин, що не стосуються працівника, протягом попередніх трьох місяців та визначений зв'язок із територією тієї самої gminy. Це не заборона після будь-якого звільнення будь-де у компанії.`,
            ],
          },
          {
            id: "combined-periods",
            title:
              "Попередні агенції залишаються в обліку того самого користувача",
            paragraphs: [
              law.text`Загальне правило ${temporaryArticle("art. 20 ust. 1–4 ustawy o zatrudnianiu pracowników tymczasowych")} дозволяє сумарно не більше 18 місяців роботи для одного користувача протягом 36 послідовних місяців. Обов'язок існує і з боку агенції, і з боку користувача. Користувач враховує ту саму людину незалежно від того, скільки агенцій її направляло. Періоди трудових і цивільних договорів також додають, а не ведуть для них два незалежні ліміти.`,
              documents.text`До нового договору агенція встановлює попередній сумарний період за ${temporaryArticle("art. 11a")}. Людина надає за ${temporaryArticle("art. 11b")} ${documents.document("employment-certificate", "świadectwa pracy")} або інші документи про трудові періоди та письмову заяву чи відповідне zaświadczenie про цивільні періоди за попередні 36 місяців. Świadectwo pracy агенції має містити користувачів і періоди згідно з ${temporaryArticle("art. 18a ust. 1a")}. Для цивільної роботи агенція видає ${documents.document("temporary-civil-work-certificate", "окреме zaświadczenie")} за ${temporaryArticle("art. 25a ust. 2")}. Це документи про час для конкретного користувача, а не довідки про дохід.`,
              documents.text`Користувач веде ${documents.document("temporary-work-period-register", "власну ewidencję періодів")} за ${temporaryArticle("art. 14a")} для кожної направленої людини: початок і закінчення періодів як трудової, так і цивільної роботи. Він зберігає її протягом ведення та наступних 36 місяців. Вона відрізняється від щоденного обліку робочого часу. Запис періодів відповідає на питання про ліміт, а облік годин потрібний, зокрема, для оплати.`,
              law.text`Для безперервної заміни відсутнього працівника ${temporaryArticle("art. 20 ust. 5–8")} передбачає окремий режим до 36 місяців і наступний визначений законом 36-місячний інтервал до нового направлення до того самого користувача. Цей режим не можна застосувати до звичайного збільшення замовлень. Окремий виняток ${temporaryArticle("art. 20 ust. 9")} пов'язаний із продовженням трудового договору до дня пологів. У прикладі жодна з цих обставин не виникла.`,
            ],
            example: {
              title: "Третя агенція не створила нового ліміту",
              facts: [
                "Умовний повнолітній іноземець має польський pobyt stały протягом усього розглянутого часу. Підприємство U потребувало складських завдань, які його штат не міг виконати вчасно. U розподіляло щоденну роботу. Це не була заміна відсутнього працівника, заборонена робота чи ситуація продовження договору до пологів.",
                "Агенція A наймала цю людину для U з 01.01.2025 до 31.12.2025, агенція B з 01.01.2026 до 30.06.2026. Обидві уклали umowy o pracę. Раніших періодів тимчасової роботи для U в досліджуваних 36 місяцях не було. У липні й серпні 2026 року людина для U не працювала.",
                "Агенція C розглядала направлення до U з 01.09.2026. У серпні вона отримала świadectwa pracy від A і B та зіставила їх із персональним обліком U. Усі агенції мали належні записи для послуг тимчасової праці. Після встановлення сумарного часу C та U відмовилися від вересневого направлення ще в серпні, до його початку. Станом на 12.09.2026 робота через C не почалася.",
              ],
              sample: {
                kind: "table",
                title: "Заповнене зіставлення періодів для одного користувача",
                note: "Вигаданий польський робочий запис, не офіційна форма. Назви A, B, C та U умовні; особисті дані й номери документів опущено. Повні календарні місяці обрано, щоб показати додавання без спору про частини місяця.",
                columns: [
                  "Materiał",
                  "Ustalony okres / fakt",
                  "Znaczenie dla skierowania od 01.09.2026",
                ],
                rows: [
                  {
                    id: "agency-a",
                    cells: [
                      "Świadectwo pracy agencji A, część dotycząca pracy tymczasowej",
                      "Pracodawca użytkownik: U. Okres: 01.01.2025–31.12.2025. Podstawa: umowa o pracę.",
                      "12 pełnych miesięcy na rzecz U.",
                    ],
                  },
                  {
                    id: "agency-b",
                    cells: [
                      "Świadectwo pracy agencji B, część dotycząca pracy tymczasowej",
                      "Pracodawca użytkownik: ten sam U. Okres: 01.01.2026–30.06.2026. Podstawa: umowa o pracę.",
                      "Kolejne 6 pełnych miesięcy na rzecz U.",
                    ],
                  },
                  {
                    id: "user-register",
                    cells: [
                      law.text`Ewidencja U prowadzona zgodnie z ${temporaryArticle("art. 14a")}`,
                      "Potwierdza oba okresy. Brak wcześniejszej pracy tymczasowej dla U w badanym okresie oraz brak pracy w lipcu i sierpniu 2026 r.",
                      "Łącznie 12 + 6 = 18 miesięcy. Oba okresy pozostają w przedziale 36 kolejnych miesięcy obejmującym planowane skierowanie.",
                    ],
                  },
                  {
                    id: "agency-c",
                    cells: [
                      "Ustalenie agencji C i użytkownika U w sierpniu 2026 r.",
                      "Planowany początek: 01.09.2026. Skierowanie wycofano przed rozpoczęciem pracy.",
                      "Zmiana agencji oraz przerwa w lipcu i sierpniu nie zerują wykorzystanych 18 miesięcy. Nowej pracy dla U nie powierzono.",
                    ],
                  },
                ],
              },
              reasoning: [
                "У першому документі роботодавцем була A, у другому B. Проте користувач в обох той самий U, тому ці періоди не можна розглядати як незалежні. C встановила вже використані 18 місяців. Два місяці без роботи не видалили попередні періоди з відповідного 36-місячного проміжку.",
                law.text`Pobyt stały дає людині доступ до праці за ${law.article("3", "art. 3 ust. 1 pkt 6")}, тому для цього прикладу не оформлювали нового oświadczenia або zezwolenia na pracę. Водночас цей статус не скасовує ${temporaryArticle("art. 20 ustawy o zatrudnianiu pracowników tymczasowych")}. Перешкода стосується нового направлення до U через агенцію, а не відсутності права іноземця працювати загалом.`,
                "Результат встановили C та U до початку роботи. Тут немає відмови органу в дозволі чи автоматичної постійної заборони працювати для U. Можливість іншої законної моделі або пізнішого періоду потребувала б окремої перевірки; у вересні обраного направлення не здійснили.",
              ],
              conclusion:
                "Świadectwa pracy двох агенцій і облік користувача показали вичерпання загального ліміту для запланованого направлення. Його скасували до початку роботи. Новий договір із третьою агенцією не міг би обнулити попередній час для U.",
            },
          },
          {
            id: "foreigner-and-user",
            title: "Коли в документі іноземця має бути названий користувач",
            paragraphs: [
              documents.text`Для іноземця окремо перевіряють перебування та доступ до роботи. У прикладі ${documents.document("administrative-decision", "рішення про pobyt stały")} встановлює статус, а ${documents.document("residence-card", "карта перебування")} є документом, який його підтверджує. Вільний доступ до ринку праці прибирає потребу в окремому дозволі, але не вимоги до агенції, тимчасового характеру завдань та обліку періодів.`,
              law.text`Коли zezwolenie na pracę потрібне, ${law.article("6", "art. 6 ust. 1 pkt 1")} передбачає договірну модель із агенцією для направлення до іншого суб'єкта. ${law.article("32", "Art. 32 ust. 2")} вимагає назвати користувача у відповідному дозволі. Якщо суб'єкт фактично надавав би людей третій особі, але не є законною агенцією тимчасової праці, ${law.article("13", "art. 13 ust. 1 pkt 7")} передбачає підставу відмови. Підміна назви моделі не виправляє її умов.`,
              documents.text`У процедурі ${documents.document("registered-work-declaration", "oświadczenia")} ${law.article("62")} також вимагає належних даних агенції та користувача. Користувач може запросити в агенції копію відповідного дозволу або зареєстрованого oświadczenia за ${law.article("17", "art. 17 ust. 1 pkt 10")} чи ${law.article("68", "art. 68 ust. 1 pkt 8")}. Це дозволяє зіставити названого користувача з тим, хто фактично організовує роботу.`,
              documents.text`До відповідної заяви агенції додають ${documents.document("agency-referral-confirmation", "підтвердження погодженого направлення іноземця")}, складене pracodawcą użytkownikiem. Для звичайного дозволу це ${law.external("§ 2 pkt 2", attachmentsUrl)}, для oświadczenia ${law.external("§ 7 pkt 2", attachmentsUrl)} розпорядження про додатки. Сезонні заяви мають відповідні правила ${law.external("§ 5 pkt 4 і § 6 ust. 1 pkt 1", attachmentsUrl)}. Підтвердження направлення й письмові узгодження підприємств за ${temporaryArticle("art. 9")} виконують різні функції, але не завжди потребують двох окремих документів: відповідний договір також може підтверджувати погоджене направлення. Це не трудовий договір працівника й не виданий дозвіл. У наведеному прикладі такої заяви агенції немає.`,
              law.text`Зміна назви чи адреси того самого користувача не дорівнює направленню до іншої юридичної особи. ${law.article("18", "Art. 18 ust. 1 pkt 1 lit. c")} та ${law.article("69", "art. 69 pkt 1")} містять винятки для визначених змін даних. Вони не дають загального права замінити названого користувача іншим. При фактичній зміні користувача треба встановити належну підставу роботи для нової моделі, а не просто виправити назву в кадровій таблиці.`,
            ],
          },
        ],
      }),
    },
  })

export default temporaryWorkTopic

export const temporaryWorkMapNode: LegalNode = {
  id: "temporary-work",
  title: temporaryWorkTopic.body.title,
  polish: temporaryWorkTopic.body.polish,
  summary: temporaryWorkTopic.summary,
  documents: [...(temporaryWorkTopic.body.documents ?? [])],
  sources: [...temporaryWorkTopic.body.sources],
  related: [...(temporaryWorkTopic.body.related ?? [])],
}
