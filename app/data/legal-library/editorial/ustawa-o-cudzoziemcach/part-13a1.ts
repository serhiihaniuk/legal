import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export const foreignersActPart13a1 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-452",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("452", "Art. 452")} ust. 1–2 передбачає надання даних з krajowy zbiór rejestrów, ewidencji i wykazu w sprawach cudzoziemców суб’єктам з ${foreignersLaw.article("450", "Art. 450")} ust. 1–2 на підставі wniosek на formularzu; орган відмовляє decyzja, якщо запитаний zakres даних не відповідає межам ${foreignersLaw.article("450", "Art. 450")} ust. 1–2. Ust. 3 визначає органи, які надають дані, а ust. 4 делегує міністру визначення wzór formularza.`,
            sourceLocator: "Art. 452 ust. 1–4",
          },
        ],
        summary: foreignersLaw.text`Стаття встановлює формальний шлях доступу до даних реєстрів cudzoziemców для суб’єктів, уже названих у ${foreignersLaw.article("450", "Art. 450")}, і розподіляє компетенцію між органами.`,
        rules: [
          {
            locator: "ust. 1–2",
            explanation: foreignersLaw.text`Wniosek подається на formularzu. Якщо zakres даних у заяві не відповідає дозволеному zakres за ${foreignersLaw.article("450", "Art. 450")} ust. 1–2, орган відмовляє у наданні даних у формі decyzja.`,
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`Szef Urzędu надає дані, крім реєстрів з ${foreignersLaw.article("449", "Art. 449")} ust. 2 pkt 7a, 13 і 14; wojewoda, minister właściwy do spraw wewnętrznych, Komendant Główny Straży Granicznej, komendant oddziału або placówki Straży Granicznej, Komendant Główny Policji та komendant wojewódzki або powiatowy (miejski) Policji — у межах реєстрів, які вони ведуть.`,
          },
          {
            locator: "ust. 4",
            explanation:
              "Minister właściwy do spraw wewnętrznych визначає в drodze rozporządzenia wzór formularza wniosku з урахуванням sprawność postępowania.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("452", "Art. 452")} регулює процедуру і компетенцію доступу до даних, але не розширює коло суб’єктів або zakres даних, визначені ${foreignersLaw.article("450", "Art. 450")}. Відмова через невідповідний zakres оформлюється decyzja.`,
        foreignersCase: foreignersLaw.text`У справі звірте, чи заявник належить до суб’єктів ${foreignersLaw.article("450", "Art. 450")}, який саме zakres даних просить, на якому formularz подано wniosek і який орган веде відповідний реєстр; не вважайте сам статус cudzoziemca підставою для доступу.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-453",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("453", "Art. 453")} передбачає надання даних через urządzenia telekomunikacyjne уповноваженим суб’єктам після jednorazowy wniosek і згоди Szef Urzędu, якщо виконані сукупні умови щодо захищених urządzenia або systemy, технічних та організаційних zabezpieczenia і обґрунтованості такого способу завданнями або діяльністю. Ust. 2–3 регулюють спільний wniosek та oświadczenia суб’єктів.`,
            sourceLocator: "Art. 453 ust. 1–3",
          },
        ],
        summary:
          "Стаття визначає додаткові умови доступу до даних через телекомунікаційні або teleinformatyczne systemy та дозволяє одному суб’єкту подати wniosek також від імені інших за встановлених умов.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Потрібні jednorazowy wniosek і згода Szef Urzędu, а також одночасне виконання трьох умов: належно захищені urządzenia або systemy, zabezpieczenia для обробки danych osobowych та завдання або діяльність, що виправдовують отримання даних цим способом.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Один uprawniony podmiot може подати wniosek від свого імені та від імені інших, якщо всі користуються тими самими systemy і виконують такі самі виправдовувальні завдання або діяльність; альтернативно заявником може бути minister, який kieruje відповідним dział administracji rządowej.",
          },
          {
            locator: "ust. 3",
            explanation:
              "До wniosek у режимі ust. 2 додається oświadczenie кожного суб’єкта, якого стосується wniosek, про виконання умов з ust. 1.",
          },
        ],
        legalEffect:
          "Норма не дає загального права на дистанційний доступ: потрібні згода Szef Urzędu, технічна й організаційна безпека та обґрунтування способом виконання завдань. Спільний wniosek має відповідати окремим умовам ust. 2.",
        foreignersCase:
          "Перевірте wniosek, згоду Szef Urzędu, перелік systemy, заходи захисту danych osobowych і конкретні завдання, що виправдовують доступ; для спільної заяви окремо перевірте oświadczenia та спільність systemy або завдань.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-454",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("454", "Art. 454")} встановлює письмове powiadomienie Szef Urzędu про zgoda на надання даних через urządzenia telekomunikacyjne та її zakres; odmowa zgody або cofnięcie zgody відбуваються у формі decyzja. Для wniosek за ${foreignersLaw.article("453", "Art. 453")} ust. 2 повідомлення та рішення адресуються podmiot składający wniosek із зазначенням або охопленням відповідних суб’єктів, а decyzja про cofnięcie підлягає natychmiastowemu wykonaniu.`,
            sourceLocator: "Art. 454 ust. 1–2",
          },
        ],
        summary:
          "Стаття визначає, як Szef Urzędu повідомляє про згоду на дистанційне надання даних, як оформлює відмову або відкликання та що відбувається зі спільним wniosek.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Про zgoda та zakres udostępnienia Szef Urzędu повідомляє podmiot з ${foreignersLaw.article("450", "Art. 450")} письмово. Відмова у згоді або її cofnięcie оформлюються decyzja.`,
          },
          {
            locator: "ust. 1a–1b",
            explanation: foreignersLaw.text`Якщо wniosek подано за ${foreignersLaw.article("453", "Art. 453")} ust. 2, про zgoda повідомляють podmiot składający wniosek із переліком усіх суб’єктів, яким надаються дані; decyzja про odmowa doręczaється цьому заявнику.`,
          },
          {
            locator: "ust. 1c–2",
            explanation:
              "При cofnięcie у спільній заяві decyzja визначає, яких суб’єктів воно стосується, і вручається заявнику, який має невідкладно повідомити цих суб’єктів. Decyzja про cofnięcie підлягає негайному виконанню.",
          },
        ],
        legalEffect: foreignersLaw.text`Стаття визначає форму комунікації та процесуальний наслідок odmowa або cofnięcie zgody, але не замінює умови доступу з ${foreignersLaw.article("453", "Art. 453")}. Негайне виконання прямо встановлено лише для decyzja про cofnięcie згода.`,
        foreignersCase:
          "У матеріалах справи знайдіть письмове powiadomienie або decyzja, визначте zakres udostępnienia та адресата; при спільному wniosek перевірте перелік суб’єктів і доказ їхнього повідомлення про cofnięcie.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-455",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("455", "Art. 455")} дозволяє Szef Urzędu контролювати суб’єктів, які мають доступ до даних через urządzenia telekomunikacyjne або systemy teleinformatyczne, щодо виконання умов ${foreignersLaw.article("453", "Art. 453")} ust. 1. Kontrola може відбуватися в siedziba та місцях і часі виконання завдань, а уповноважений працівник Urzędu діє на підставі imienne upoważnienie і після пред’явлення dowód osobisty; контрольований суб’єкт має надати документи, urządzenia або systemy та умови для контролю.`,
            sourceLocator: "Art. 455 ust. 1–5",
          },
        ],
        summary:
          "Стаття встановлює контроль за дотриманням умов дистанційного доступу до даних та обов’язки контрольованого суб’єкта співпрацювати з працівником Urzędu.",
        rules: [
          {
            locator: "ust. 1–3",
            explanation: foreignersLaw.text`Szef Urzędu може перевіряти виконання умов ${foreignersLaw.article("453", "Art. 453")} ust. 1. Kontrola проводиться у siedziba, місцях і часі виконання завдань, а за потреби — також у вихідні та поза робочими годинами; її проводить уповноважений imiennie працівник після пред’явлення dowód osobisty.`,
          },
          {
            locator: "ust. 4 pkt 1–2",
            explanation:
              "Контрольований суб’єкт зобов’язаний надати документи, що підтверджують uprawnienie до обробки даних, доступні urządzenia або systemy та забезпечити умови і засоби контролю, включно з вільним доступом до приміщень.",
          },
          {
            locator: "ust. 5",
            explanation:
              "Працівник Urzędu може вимагати показати документи, надати urządzenia або systemy та забезпечити умови контролю, а після kontroli складає protokół.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("455", "Art. 455")} створює контрольний механізм щодо умов ${foreignersLaw.article("453", "Art. 453")}, але сам по собі не встановлює, що конкретний суб’єкт порушив правила. Факти контролю мають бути підтверджені upoważnienie, матеріалами та protokół.`,
        foreignersCase:
          "Якщо доступ органу або установи перевіряють, зафіксуйте zakres kontroli, imienne upoważnienie, документи й systemy, які вимагали, надані умови та зміст protokół; відокремлюйте факт kontroli від висновку про порушення.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-456",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("456", "Art. 456")} дозволяє Szef Urzędu заблокувати доступ до krajowy zbiór rejestrów, ewidencji i wykazu w sprawach cudzoziemców до усунення nieprawidłowości, якщо в роботі або zabezpieczeniaх zbioru виявлено порушення, що виникли з вини органів, які мають доступ через urządzenia telekomunikacyjne або systemy teleinformatyczne.`,
            sourceLocator: "Art. 456",
          },
        ],
        summary:
          "Стаття дає Szef Urzędu можливість тимчасово заблокувати доступ до національного zbiór, коли недоліки в роботі чи захисті пов’язані з виною органів, що мають дистанційний доступ.",
        rules: [
          {
            locator: "Art. 456",
            explanation:
              "Потрібні виявлені nieprawidłowości у функціонуванні або zabezpieczeniaх zbioru, їхній зв’язок із виною органів-доступувачів та доступ через названі urządzenia або systemy.",
          },
          {
            locator: "Art. 456",
            explanation:
              "Szef Urzędu може заблокувати доступ на період до usunięcia stwierdzonych nieprawidłowości; текст не встановлює автоматичного блокування за самого факту перевірки.",
          },
        ],
        legalEffect: foreignersLaw.text`Це захід захисту системи та даних, прив’язаний до конкретних встановлених недоліків і вини органу. ${foreignersLaw.article("456", "Art. 456")} не визначає наперед тривалість блокування понад час, потрібний для усунення nieprawidłowości.`,
        foreignersCase:
          "У випадку блокування перевірте, які саме nieprawidłowości встановлено, кому вони приписані, яким доступом вони пов’язані та що вимагається для usunięcia; не робіть висновку про незаконність усіх даних лише з блокування.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-457",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("457", "Art. 457")} зобов’язує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia спосіб і tryb kontroli доступу до даних через urządzenia telekomunikacyjne або systemy teleinformatyczne, wzór upoważnienia з ${foreignersLaw.article("455", "Art. 455")} ust. 3 та wzór protokołu з ${foreignersLaw.article("455", "Art. 455")} ust. 5 pkt 2; у розпорядженні мають бути враховані захист danych osobowych і безпека даних.`,
            sourceLocator: "Art. 457 ust. 1–2",
          },
        ],
        summary:
          "Стаття делегує міністру деталізацію процедури контролю доступу та форм документів, пов’язаних із контролем.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Rozporządzenie має визначити спосіб і tryb kontroli, wzór imienne upoważnienie працівника та wzór protokołu після kontroli.",
          },
          {
            locator: "ust. 2",
            explanation:
              "При підготовці rozporządzenie minister враховує необхідність захисту danych osobowych і вимоги безпеки даних, що обробляються в системі.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("457", "Art. 457")} є нормою про делегування до rozporządzenie і форми контрольних документів. Він сам не встановлює конкретну процедуру перевірки поза межами делегованих питань і не доводить наявність порушення.`,
        foreignersCase: foreignersLaw.text`У справі про kontrola звірте фактичні дії з чинним розporządzenie, wzór upoważnienie та protokół, на які посилається ${foreignersLaw.article("455", "Art. 455")}; окремо перевірте, як враховано безпеку обробки даних.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-458",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("458", "Art. 458")} зобов’язує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia порядок надання, зміни та cofanie uprawnień доступу до krajowy zbiór, технічні умови доступу, wzory upoważnienie, wniosków про zgoda за звичайним і спільним режимом ${foreignersLaw.article("453", "Art. 453")} ust. 2 та oświadczenie з ${foreignersLaw.article("453", "Art. 453")} ust. 3; розпорядження має враховувати безпеку, sprawność операцій і czytelność даних та інформації для Szef Urzędu.`,
            sourceLocator: "Art. 458 pkt 1–5",
          },
        ],
        summary:
          "Стаття визначає перелік технічних і формальних питань, які мають бути врегульовані розпорядженням для доступу до krajowy zbiór.",
        rules: [
          {
            locator: "Art. 458 pkt 1–2",
            explanation:
              "Rozporządzenie визначає tryb і sposób przydzielania, zmiany та cofania uprawnień доступу, технічні умови, а також wzór upoważnienie для доступу й використання даних.",
          },
          {
            locator: "Art. 458 pkt 3–5",
            explanation: foreignersLaw.text`Окремо визначаються wzory wniosek про згоду на доступ через urządzenia telekomunikacyjne, wniosek у режимі ${foreignersLaw.article("453", "Art. 453")} ust. 2 та oświadczenie суб’єкта з ${foreignersLaw.article("453", "Art. 453")} ust. 3.`,
          },
          {
            locator: "Art. 458",
            explanation:
              "Міністр має врахувати безпеку обробки даних, оперативність роботи з uprawnienia та зрозумілість даних і відомостей, які суб’єкти передають Szef Urzędu.",
          },
        ],
        legalEffect: foreignersLaw.text`Норма деталізує зміст майбутнього або чинного rozporządzenie, але не замінює індивідуальну zgoda Szef Urzędu чи умови ${foreignersLaw.article("453", "Art. 453")}. Наявність wzór formularza сама по собі не створює права на доступ.`,
        foreignersCase:
          "Для оцінки доступу встановіть, який режим wniosek застосовано, які wzory та технічні умови діяли, хто надав або змінив uprawnienia і чи збережено читабельність та безпеку переданих даних.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-459",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("459", "Art. 459")} ust. 1 зобов’язує przewoźnik, який повітряним або морським шляхом має привезти cudzoziemca до granica, вжити всіх необхідних заходів, щоб особа, яка має намір в’їхати до Польщі, мала належний document podróży, потрібну wizę або інший чинний документ для wjazd і pobyt, а за потреби — дозвіл на в’їзд до іншої держави або pobyt у ній. Ust. 2 поширює обов’язок на регулярний міжнародний road transport, крім ruch przygraniczny.`,
            sourceLocator: "Art. 459 ust. 1–2",
          },
        ],
        summary:
          "Стаття покладає на przewoźnik попередній обов’язок перевірити наявність документів, потрібних для перетину кордону та, за необхідності, подальшого в’їзду або pobyt в іншій державі.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Przewoźnik має вжити wszelkie niezbędne środki, щоб перед перевезенням до granica у cudzoziemca були чинний document podróży, потрібна wiza або інший документ для wjazd і pobyt, а також дозвіл на іншу державу, якщо він потрібен.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Той самий обов’язок діє для przewoźnik, який виконує регулярні перевезення осіб у міжнародному транспорті автомобільним шляхом, але не для ruch przygraniczny.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("459", "Art. 459")} встановлює обов’язок przewoźnik щодо необхідних документів, але сама стаття не визначає результат контролю конкретної особи й не замінює окремі правила про odmowa wjazdu або відповідальність.`,
        foreignersCase:
          "У справі з’ясуйте вид транспорту, чи було перевезення регулярним і міжнародним, які документи вимагалися на дату поїздки та які перевірочні дії реально вжив przewoźnik; не прирівнюйте відсутність документа до автоматичної вини без аналізу фактів.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-460",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("460", "Art. 460")} зобов’язує przewoźnik, який повітряним, морським або наземним шляхом привіз cudzoziemca до granica, на wniosek organ Straży Granicznej невідкладно відвезти його назад, якщо у wjazd до Польщі відмовлено або якщо транзитний в’їзд до держави призначення чи сусідньої держави відхилено або інший przewoźnik відмовився виконати перевезення. Якщо це неможливо, przewoźnik забезпечує власним коштом інший транспорт, а також покриває витрати pobyt до виїзду.`,
            sourceLocator: "Art. 460 ust. 1–3",
          },
        ],
        summary:
          "Стаття регулює обов’язок przewoźnik забрати назад особу, якій відмовлено у в’їзді або транзитному перевезенні, і покласти на нього витрати повернення та перебування до виїзду.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "На wniosek organ Straży Granicznej przewoźnik невідкладно відвозить cudzoziemca до держави, з якої його привіз; якщо це неможливо — до держави, що видала travel document, або іншої держави, яка гарантує прийняття. Обов’язок виникає при odmowa wjazdu до Польщі або описаній відмові в транзиті чи перевезенні.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Якщо виконати такий обов’язок неможливо, przewoźnik за власний кошт забезпечує інший засіб транспорту, завдяки якому cudzoziemiec зможе невідкладно залишити територію Польщі.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Przewoźnik покриває витрати pobyt cudzoziemca в Польщі від моменту виникнення обставин з ust. 1 до фактичного залишення території.",
          },
        ],
        legalEffect:
          "Норма визначає обов’язки przewoźnik після конкретної відмови або неможливості транзиту; вона не є самостійним рішенням про odmowa wjazdu. Для наслідків важливі wniosek органу, причина відмови, можливість повернення та підтверджені витрати.",
        foreignersCase:
          "Зберіть рішення або відомості про odmowa wjazdu, wniosek organ Straży Granicznej, маршрут і документи перевезення, докази запропонованої держави прийняття та рахунки за транспорт і pobyt; окремо перевірте, коли особа фактично залишила Польщу.",
      },
    ],
  })
