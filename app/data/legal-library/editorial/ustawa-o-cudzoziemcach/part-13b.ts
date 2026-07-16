import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export const foreignersActPart13b =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-465",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("465", "Art. 465")} ust. 1 передбачає karę grzywny, зокрема за pobyt без tytuł prawny, невиконання вимоги показати документи або кошти, невиконання обов’язку залишити Польщу та окремі порушення малого ruchu granicznego; ust. 1a передбачає grzywna 200–2000 zł за невиконання обов’язку з ${foreignersLaw.article("157a", "Art. 157a")} ust. 2.`,
            sourceLocator: "Art. 465 ust. 1 pkt 1–9 i ust. 1a",
          },
        ],
        summary:
          "Стаття визначає склади wykroczenie та karę grzywny за окремі порушення правил перебування, документів, повернення, звітування і малого ruchu granicznego.",
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "До порушень належать pobyt без правової підстави, непред’явлення потрібних документів або коштів на вимогу uprawnione organy, невиконання обов’язку wymiany або zwrotu документа та несвоєчасне повідомлення про втрату визначених документів.",
          },
          {
            locator: "ust. 1 pkt 6–9",
            explanation:
              "Окремо охоплено невиконання обов’язку залишити Польщу, обов’язку zgłaszania się, залишення місця проживання, визначеного в рішенні про продовження добровільного виїзду, та порушення правил малого ruchu granicznego.",
          },
          {
            locator: "ust. 1a–3",
            explanation: foreignersLaw.text`За ${foreignersLaw.article("157a", "Art. 157a")} ust. 2 передбачена grzywna від 200 до 2000 zł; orzekanie відбувається за Kodeks postępowania w sprawach o wykroczenia, а wyrok nakazowy є natychmiast wykonalny.`,
          },
        ],
        legalEffect:
          "Стаття передбачає відповідальність за конкретні wykroczenia, а не автоматичний наслідок для кожного порушення документаційного обов’язку. Для складу та провадження важливі точний пункт, вимога органу, строки й докази.",
        foreignersCase: foreignersLaw.text`Порівняйте протокол або матеріали справи з конкретним pkt ${foreignersLaw.article("465", "Art. 465")}: встановіть tytuł pobytowy, отриману вимогу, строк і доказ вручення; окремо перевірте порядок оскарження за правилами про wykroczenia.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-465a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("465a", "Art. 465a")} регулює дії після orzeczenie zastępczej kary aresztu за окремі wykroczenia з ${foreignersLaw.article("465", "Art. 465")}: dyrektor zakładu karnego повідомляє орган Straży Granicznej, а суд після отримання decyzja про zobowiązaniu do powrotu umarza postępowanie wykonawcze та видає nakaz zwolnienia.`,
            sourceLocator: "Art. 465a ust. 1–3",
          },
        ],
        summary:
          "Стаття встановлює спеціальний порядок взаємодії zakład karny, органу Straży Granicznej і суду, коли за визначене wykroczenie вже призначено zastępcza kara aresztu, а існує рішення про zobowiązaniu do powrotu.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Dyrektor zakładu karnego повідомляє орган Straży Granicznej, який видав decyzja o zobowiązaniu cudzoziemca do powrotu, про розмір zastępcza kara aresztu та день її виконання.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Орган передає decyzja суду першої інстанції; суд umarza postępowanie wykonawcze, видає nakaz zwolnienia, а невідбуту частину zastępcza kara визнає виконаною.",
          },
        ],
        legalEffect: foreignersLaw.text`Норма описує наслідки саме тієї комбінації обставин, яку називає ${foreignersLaw.article("465a", "Art. 465a")}. Вона не скасовує саму decyzja o zobowiązaniu do powrotu і не поширюється автоматично на інші покарання чи провадження.`,
        foreignersCase: foreignersLaw.text`Звірте, за яким пунктом ${foreignersLaw.article("465", "Art. 465")} призначено zastępcza kara aresztu, копію decyzja o powrocie, повідомлення zakład karny та ухвалу суду про zwolnienie.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-507",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("507", "Art. 507")} встановлює, що з dniem wejścia w życie ustawy раніше видані zezwolenia na zamieszkanie na czas oznaczony стають zezwoleniami na pobyt czasowy, а zezwolenia na osiedlenie — zezwoleniami na pobyt stały, із прямим збереженням чинності на виданий строк для zezwolenia na zamieszkanie na czas oznaczony.`,
            sourceLocator: "Art. 507 pkt 1–2",
          },
        ],
        summary:
          "Перехідна норма перетворює два види дозволів, виданих за попереднім законом, на відповідні види дозволів за новою системою; для zezwolenie na zamieszkanie na czas oznaczony прямо зберігається чинність на виданий строк.",
        rules: [
          {
            locator: "Art. 507 pkt 1",
            explanation:
              "Zezwolenie na zamieszkanie na czas oznaczony стає zezwoleniem na pobyt czasowy та зберігає чинність на виданий строк.",
          },
          {
            locator: "Art. 507 pkt 2",
            explanation:
              "Zezwolenie na osiedlenie стає zezwoleniem na pobyt stały.",
          },
        ],
        legalEffect:
          "Стаття має перехідний ефект для дозволів, що існували на дату wejścia w życie ustawy. Вона не є новою підставою для видачі дозволу та не продовжує строк, зазначений у старому документі.",
        foreignersCase: foreignersLaw.text`Для старого дозволу встановіть його вид, дату видачі, строк чинності та дату wejścia w życie ustawy; у висновку вкажіть, як саме ${foreignersLaw.article("507", "Art. 507")} змінює назву статусу.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-508",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("508", "Art. 508")} регулює перетворення старих decyzje: рішення про zgoda na pobyt tolerowany у названих випадках стають рішеннями про zgoda na pobyt ze względów humanitarnych або про zgoda na pobyt tolerowany за ${foreignersLaw.article("351", "Art. 351")}, а decyzje o zobowiązaniu do opuszczenia та o wydaleniu стають decyzjami o zobowiązaniu do powrotu.`,
            sourceLocator: "Art. 508 ust. 1–2",
          },
        ],
        summary:
          "Перехідна стаття визначає, як окремі старі рішення та karty pobytu продовжують діяти після набрання чинності новим законом, і який орган видає наступний документ.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation: foreignersLaw.text`Класифікація старої decyzja залежить від конкретної przesłanka старого ${foreignersLaw.article("97", "Art. 97")} або ${foreignersLaw.article("141", "Art. 141")} ust. 2; рішення про opuszczenie або wydalenie, за винятком названого в тексті випадку, стають рішеннями про powrót.`,
          },
          {
            locator: "ust. 3–6",
            explanation:
              "Cofnięcie відповідної згоди здійснює компетентний komendant Straży Granicznej; karty pobytu зберігають чинність на виданий строк, а наступні документи видає компетентний комendant за місцем pobytu.",
          },
        ],
        legalEffect: foreignersLaw.text`Наслідок залежить від виду старого рішення, його правової підстави та перехідної дати. ${foreignersLaw.article("508", "Art. 508")} не дозволяє змінювати категорію документа без перевірки конкретної przesłanka.`,
        foreignersCase:
          "Отримайте повний старий tekst decyzja, визначте підставу згоди або wydalenie, дату її остаточності та чинність karty pobytu; лише потім визначайте сучасну назву статусу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-509",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("509", "Art. 509")} визначає, які попередні періоди pobytu за starymi tytułami зараховуються до періоду, потрібного для окремих нових дозволів: zezwolenie na zamieszkanie на час означений, згода humanitarna та окремі випадки ochrony uzupełniającej.`,
            sourceLocator: "Art. 509 pkt 1–4",
          },
        ],
        summary:
          "Перехідна норма про зарахування минулого pobytu: вона пов’язує старі дозволи та рішення про zgoda na pobyt tolerowany з конкретними новими статусами.",
        rules: [
          {
            locator: "Art. 509 pkt 1–2",
            explanation:
              "До періоду на підставі zezwolenie na pobyt czasowy зараховується відповідний pobyt на підставі старого zezwolenie na zamieszkanie, а для дозволу з визначеною метою — період за дозволом з тією самою метою.",
          },
          {
            locator: "Art. 509 pkt 3–4",
            explanation:
              "Для zgoda na pobyt ze względów humanitarnych або ochrony uzupełniającej текст зараховує лише прямо названі періоди за старими рішеннями чи згодами.",
          },
        ],
        legalEffect:
          "Стаття може впливати на обчислення необхідного періоду лише в межах перелічених статусів і документів. Вона не встановлює автоматичного права на новий дозвіл і не скасовує інших умов.",
        foreignersCase: foreignersLaw.text`Складіть хронологію всіх tytuł pobytowy, назвіть правову підставу кожного періоду та окремо перевірте, чи відповідає вона конкретному пункту ${foreignersLaw.article("509", "Art. 509")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-510",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("510", "Art. 510")} передбачає, що zaproszenia, внесені до ewidencja zaproszeń за dotychczasowe przepisy, zezwolenia на przekraczanie granicy в малому ruchu granicznym, а також wizy і документи, видані cudzoziemcom на підставі rozdziału 6 ustawy, про яку йдеться в ${foreignersLaw.article("521", "Art. 521")}, зберігають чинність на строк, на який їх видано.`,
            sourceLocator: "Art. 510",
          },
        ],
        summary:
          "Перехідна норма зберігає чинність окремих старих zaproszenia, дозволів малого ruchu granicznego, wizy та документів до закінчення їхнього виданого строку.",
        rules: [
          {
            locator: "Art. 510",
            explanation:
              "Збереження чинності охоплює лише документи та zaproszenia, прямо названі в статті, і триває протягом періоду, на який їх видано.",
          },
          {
            locator: "Art. 510",
            explanation:
              "Стаття не змінює сам документ на інший тип і не продовжує його строк понад зазначений при видачі.",
          },
        ],
        legalEffect:
          "Норма захищає чинність конкретних документів у перехідний момент, але не доводить, що документ чинний сьогодні: це потрібно перевірити за датами та іншими правилами.",
        foreignersCase: foreignersLaw.text`Звірте вид документа, стару правову підставу, дату видачі та кінцеву дату; не замінюйте перевірку чинності самим посиланням на ${foreignersLaw.article("510", "Art. 510")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-511",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("511", "Art. 511")} дозволяє до wyczerpania zapasów, але не довше одного року від wejścia w życie ustawy, видавати blankiety старих zaproszenia та документів за wzory зі старих aktów wykonawczych.`,
            sourceLocator: "Art. 511",
          },
        ],
        summary:
          "Стаття тимчасово зберігає можливість використання запасу старих бланків для zaproszenia та документів іноземців.",
        rules: [
          {
            locator: "Art. 511",
            explanation:
              "Старі blankiety можна видавати лише до вичерпання запасів і в будь-якому разі не довше одного року від дня wejścia w życie ustawy.",
          },
          {
            locator: "Art. 511",
            explanation:
              "Wzory мають походити з актів wykonawczych, названих у тексті статті; норма не створює нового виду документа.",
          },
        ],
        legalEffect:
          "Це обмежене в часі правило про бланки, а не про продовження строку дії вже виданого документа чи про право на pobyt.",
        foreignersCase:
          "Для історичної справи зафіксуйте дату видачі, вид blankiet і дату wejścia w życie; перевірте, чи не сплив граничний рік, перш ніж робити висновок про допустимість форми.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-512",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("512", "Art. 512")} передбачає застосування dotychczasowe przepisy до строку opuszczenia Польщі та допомоги в dobrowolny powrót, якщо до wejścia w życie ustawy вже було видано рішення про відмову в статусі uchodźcy, ochronie uzupełniającej або zgoda na pobyt tolerowany.`,
            sourceLocator: "Art. 512",
          },
        ],
        summary:
          "Перехідна норма визначає право, яке застосовується до строку виїзду та допомоги в добровільному поверненні у старих справах про міжнародний захист або pobyt tolerowany.",
        rules: [
          {
            locator: "Art. 512",
            explanation:
              "Вирішальним є те, що відповідне рішення про odmowa було видано до дня wejścia w życie ustawy; тоді застосовуються dotychczasowe przepisy до названих питань.",
          },
          {
            locator: "Art. 512",
            explanation:
              "Стаття стосується саме terminu opuszczenia та korzystania z pomocy w dobrowolnym powrocie, а не всіх елементів статусу справи.",
          },
        ],
        legalEffect: foreignersLaw.text`Наслідок залежить від дати та виду попереднього рішення. Посилання на ${foreignersLaw.article("512", "Art. 512")} саме по собі не визначає чинний строк виїзду без перевірки decyzja і правил, що діяли тоді.`,
        foreignersCase:
          "Знайдіть дату і повний зміст старого рішення, визначте вид процедури та окремо порахуйте строк opuszczenia; не змішуйте його з пізнішими правилами про powrót.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-513",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("513", "Art. 513")} ust. 1 встановлює, що незавершені до wejścia w życie ustawy адміністративні провадження без ostateczna decyzja, розпочаті на підставі названих старих законів, продовжуються за dotychczasowe przepisy.`,
            sourceLocator: "Art. 513 ust. 1",
          },
        ],
        summary:
          "Перехідна стаття визначає право для незакінчених адміністративних проваджень та передбачає, як їхні майбутні рішення перетворюються на нові види дозволів або рішень.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Потрібні дві умови: провадження розпочато до wejścia w życie ustawy та до цієї дати його не закінчено ostateczna decyzja; тоді застосовуються dotychczasowe przepisy.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Виданий результат може стати zezwoleniem na pobyt czasowy, pobyt stały, відповідною згодою або decyzja o zobowiązaniu do powrotu за правилами, наведеними в тексті статті.",
          },
          {
            locator: "ust. 5–6",
            explanation:
              "Для перетворених згод документи видає компетентний komendant Straży Granicznej, а decyzja про cofnięcie також належить названому в статті органу.",
          },
        ],
        legalEffect:
          "Стаття розподіляє старе та нове право в конкретному перехідному провадженні. Вона не дозволяє автоматично застосувати dotychczasowe przepisy до заяви, поданої вже після wejścia w życie ustawy.",
        foreignersCase:
          "Встановіть дату wszczęcia, наявність ostateczna decyzja на перехідну дату, законову підставу справи та фактичний результат; збережіть усі повідомлення про передачу справи між органами.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-514",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("514", "Art. 514")} передбачає, що в окремих рішеннях, які завершують старі незакінчені провадження, не виноситься рішення про zobowiązanie do opuszczenia або wydalenie; органи повідомляють właściwy organ Straży Granicznej після набрання рішенням ostateczność.`,
            sourceLocator: "Art. 514 ust. 1–3",
          },
        ],
        summary:
          "Стаття обмежує зміст окремих перехідних рішень у старих провадженнях і встановлює повідомлення Straż Graniczna про їх завершення.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "У рішенні про odmowa або cofnięcie старого zezwolenie na zamieszkanie на czas oznaczony, якщо провадження було розпочато до wejścia w życie ustawy, не виноситься рішення про opuszczenie.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для перелічених рішень про cofnięcie, відмову в міжнародному захисті чи cofnięcie zgoda на pobyt tolerowany не виноситься рішення про wydalenie.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Орган провадження повідомляє орган Straży Granicznej за місцем pobyt, коли рішення стало ostateczne.",
          },
        ],
        legalEffect: foreignersLaw.text`Наслідок обмежений старими провадженнями та прямо названими видами рішень. ${foreignersLaw.article("514", "Art. 514")} не означає, що в сучасному провадженні ніколи не може бути рішення про powrót.`,
        foreignersCase:
          "Перевірте дату wszczęcia, вид рішення, стару правову підставу та момент ostateczność; окремо з’ясуйте, чи було виконано обов’язок повідомлення Straż Graniczna.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-515",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("515", "Art. 515")} перетворює незавершені до wejścia w życie ustawy провадження щодо wymiana karty pobytu, виданої у зв’язку зі старою zgoda na pobyt tolerowany, на провадження про wydanie або wymiana документа «zgoda na pobyt tolerowany»; wojewoda і Szef Urzędu передають акти протягом 14 днів.`,
            sourceLocator: "Art. 515 ust. 1–2",
          },
        ],
        summary:
          "Перехідна норма про справи щодо старих kart pobytu: назва провадження змінюється, а матеріали передаються від wojewoda або Szef Urzędu до компетентного komendant Straży Granicznej.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Незакінчене провадження про wymiana karty pobytu стає провадженням про wydanie або wymiana документа, названого в статті.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Wojewoda та Szef Urzędu передають akta протягом 14 днів від дня wejścia w życie ustawy компетентному komendant за місцем pobytu cudzoziemca.",
          },
        ],
        legalEffect:
          "Стаття змінює перехідну компетенцію та предмет старої справи, але не гарантує видачі документа. Для оцінки важливі дата початку справи та конкретна стара підстава zgoda.",
        foreignersCase:
          "Попросіть підтвердження передачі akt, визначте компетентний komendant за місцем pobytu та перевірте, який саме документ просили видати або wymienić.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-516",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("516", "Art. 516")} передбачає видачу karty pobytu після pobranie odcisków linii papilarnych для cudzoziemców, які досягли 6 років і належать до перелічених перехідних категорій; виняток — коли pobranie є фізично неможливим.`,
            sourceLocator: "Art. 516 pkt 1–4",
          },
        ],
        summary:
          "Стаття визначає перехідне правило про відбитки пальців при видачі karty pobytu для окремих осіб зі старими дозволами, заявами або згодою humanitarna.",
        rules: [
          {
            locator: "Art. 516",
            explanation:
              "Умова віку — ukończyli 6. rok życia; далі потрібно належати до однієї з категорій, прямо перелічених у pkt 1–4.",
          },
          {
            locator: "Art. 516",
            explanation:
              "Karta pobytu видається після pobranie відбитків, крім випадку, коли їх pobranie є фізично неможливим.",
          },
        ],
        legalEffect:
          "Норма визначає спосіб видачі документа в перехідних категоріях і не є самостійною підставою для pobyt. Фізичну неможливість pobranie потрібно підтверджувати в матеріалах справи.",
        foreignersCase: foreignersLaw.text`Встановіть категорію за ${foreignersLaw.article("516", "Art. 516")}, вік на момент дії правила та причину відсутності odciski; збережіть повідомлення органу й медичне або інше підтвердження неможливості, якщо воно є.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-517",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("517", "Art. 517")} встановлює, що записи про cudzoziemców зі старого wykaz переходять до wykaz за новим законом і зберігаються на первісно визначений строк; до старих zakazy ponownego wjazdu застосовуються правила Dział X Rozdział 2.`,
            sourceLocator: "Art. 517 ust. 1–2",
          },
        ],
        summary:
          "Перехідна стаття зберігає дані старого wykaz і визначає режим для раніше встановлених zakaz ponownego wjazdu.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Старі wpisy даних стають wpisami до нового wykaz і зберігаються протягом строку, на який їх було внесено.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Для старих zakazy ponownego wjazdu застосовуються положення Dział X Rozdział 2 про umieszczanie і przechowywanie даних особи, щодо якої видано decyzja o zobowiązaniu do powrotu.",
          },
        ],
        legalEffect:
          "Стаття забезпечує правонаступність реєстрових записів і режиму заборон, але сама не встановлює нову заборону та не доводить, що конкретний запис ще зберігається.",
        foreignersCase:
          "Якщо спір стосується zakaz, перевірте первинну decyzja, строк заборони, дату внесення та актуальний запис у wykaz; вимагайте розмежувати дані й правову підставу рішення.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-518",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("518", "Art. 518")} передбачає передачу даних, зібраних за старими правилами в krajowy zbiór rejestrów, ewidencji i wykazu «System Pobyt», до krajowy zbiór, що ведеться на підставі нового закону.`,
            sourceLocator: "Art. 518",
          },
        ],
        summary:
          "Перехідна норма визначає міграцію даних зі старого System Pobyt до нового krajowy zbiór у справах cudzoziemców.",
        rules: [
          {
            locator: "Art. 518",
            explanation:
              "Передаються дані, зібрані за dotychczasowe przepisy у названому старому zbiór, до реєстру, який ведеться на підставі нової ustawa.",
          },
          {
            locator: "Art. 518",
            explanation:
              "Стаття регулює передачу даних між системами; з її тексту не випливає самостійне право будь-якого суб’єкта на необмежений доступ.",
          },
        ],
        legalEffect:
          "Норма забезпечує безперервність реєстру під час переходу на нову систему. Вона не доводить правильність конкретного запису і не замінює процедури доступу, виправлення чи оскарження.",
        foreignersCase:
          "Порівняйте старі та нові відомості про особу, зафіксуйте джерело кожного запису й для помилки використовуйте відповідний порядок доступу або виправлення даних.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-519",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("519", "Art. 519")} встановлює, що Szef Urzędu do Spraw Cudzoziemców, призначений на підставі uchylona ustawa, є Szefem Urzędu do Spraw Cudzoziemców у розумінні нової ustawa.`,
            sourceLocator: "Art. 519",
          },
        ],
        summary:
          "Перехідна організаційна норма зберігає правову безперервність посади Szef Urzędu do Spraw Cudzoziemców після заміни попереднього закону.",
        rules: [
          {
            locator: "Art. 519",
            explanation:
              "Йдеться про особу, призначену за попередньою ustawa; текст визнає її Szefem Urzędu у новому законі.",
          },
          {
            locator: "Art. 519",
            explanation:
              "Це правило про статус органу, а не про компетенцію в кожній індивідуальній справі чи про результат конкретного провадження.",
          },
        ],
        legalEffect:
          "Стаття забезпечує наступність посади для цілей нового закону. Вона сама не визначає, який орган компетентний у конкретній справі, без перевірки інших положень.",
        foreignersCase:
          "Якщо у старих матеріалах названо Szef Urzędu, зіставте дату та вид дії з правилами компетенції, які діяли для відповідного провадження.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-520",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("520", "Art. 520")} визначає, що dotychczasowe przepisy wykonawcze, видані на підставі перелічених старих статей, зберігають moc до набрання чинності актами на підставі нової ustawa, але не довше 12 місяців від дня її wejścia w życie.`,
            sourceLocator: "Art. 520 pkt 1–4",
          },
        ],
        summary:
          "Перехідна норма тимчасово зберігає чинність окремих старих актів wykonawczych до появи нових актів, із загальним максимальним строком, названим у статті.",
        rules: [
          {
            locator: "Art. 520 pkt 1",
            explanation:
              "Перелік старих delegacje охоплює, зокрема, правила про документи, wizy, pobyt, ośrodki та інші процедури; їхні акти wykonawcze діють до нових актів на підставі названих положень нової ustawa.",
          },
          {
            locator: "Art. 520 pkt 2–4",
            explanation:
              "Окремі перехідні акти стосуються також законів, змінених статтями 467, 474 і 488; для кожного потрібна перевірка відповідного закону та нового акта.",
          },
          {
            locator: "Art. 520 pkt 1–4",
            explanation:
              "У всіх випадках текст встановлює верхню межу: не довше 12 місяців від dnia wejścia w życie niniejszej ustawy.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("520", "Art. 520")} — тимчасове правило про підзаконні акти, а не самостійна підстава для pobyt, wiza чи decyzja. Для історичної дати потрібно встановити, який акт і яка нова делегація були застосовні.`,
        foreignersCase:
          "У старій справі назвіть конкретний akt wykonawczy та delegacja, перевірте дату wejścia w życie ustawy й момент набрання чинності новим актом; не застосовуйте загальне посилання без цієї хронології.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-521",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("521", "Art. 521")} скасовує ustawa z dnia 13 czerwca 2003 r. o cudzoziemcach, наведену в статті разом із зазначеними публікаціями в Dziennik Ustaw.`,
            sourceLocator: "Art. 521",
          },
        ],
        summary:
          "Перехідна норма скасовує попередню ustawa o cudzoziemcach і завершує блок правил про заміну старого закону новим.",
        rules: [
          {
            locator: "Art. 521",
            explanation:
              "З дня набрання чинності новою ustawa втрачає чинність акт від 13 червня 2003 р., названий у статті.",
          },
          {
            locator: "Art. 521",
            explanation: foreignersLaw.text`Стаття визначає лише скасований акт; наслідки для старих дозволів, рішень, проваджень і підзаконних актів треба встановлювати за перехідними нормами, зокрема ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("520", "520")}.`,
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("521", "Art. 521")} є історичною нормою про втрату чинності попереднього закону. Сам по собі він не анулює автоматично старі рішення чи документи, для яких діють окремі перехідні правила.`,
        foreignersCase: foreignersLaw.text`У старій справі зафіксуйте дату події та перевірте, чи стосується її скасований закон; для чинності документа або дії провадження окремо застосуйте відповідну норму ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("520", "520")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-522",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("522", "Art. 522")} встановлює, що ustawa набирає чинності 1 травня 2014 р.; винятки — ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3 lit. a в частині ${foreignersLaw.external("Art. 3a", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3, ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 3 lit. b та ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} pkt 4, 5 і 11–16, які набирають чинності в день оголошення.`,
            sourceLocator: "Art. 522",
          },
        ],
        summary:
          "Прикінцева норма визначає загальну дату набрання чинності ustawa та окремі винятки, що діяли з дня її оголошення.",
        rules: [
          {
            locator: "Art. 522",
            explanation:
              "Загальне правило — набрання чинності 1 травня 2014 р.",
          },
          {
            locator: "Art. 522",
            explanation: foreignersLaw.text`Конкретно перелічені частини ${foreignersLaw.external("Art. 470", "https://eli.gov.pl/eli/DU/2013/1650/ogl")} набирають чинності в день оголошення ustawa; у джерелі зазначено, що її оголошено 30 грудня 2013 р.`,
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("522", "Art. 522")} визначає історичні часові межі застосування ustawa та її окремих положень. Для старої справи дата конкретної дії має бути зіставлена із загальним правилом або винятком, а не лише з номером статті.`,
        foreignersCase: foreignersLaw.text`Встановіть дату подання, рішення або іншої юридично значущої дії та перевірте, чи стосується її виняток ${foreignersLaw.article("522", "Art. 522")}; для перехідних наслідків додатково застосуйте ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("521", "521")}.`,
      },
    ],
  })
