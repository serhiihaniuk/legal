import { defineEditorialPart } from "../define-editorial-part"

export const powierzaniePracyPart03 = defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-101",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 101 pkt 1 замінює в art. 2 ust. 8 ustawy o pomocy obywatelom Ukrainy посилання на art. 87 ust. 1 pkt 6 старої ustawy o promocji zatrudnienia посиланням на art. 3 ust. 1 pkt 12 нової ustawy.",
          sourceLocator: "Art. 101 pkt 1",
        },
        {
          kind: "statute-text",
          text: "За art. 101 pkt 2 lit. a–b podmiot powierzający pracę cudzoziemcowi повідомляє powiatowy urząd pracy протягом 7 днів від початку роботи громадянина України та повторює повідомлення протягом 7 днів після визначених змін: виду umowy, stanowiska або виду роботи, зменшення часу чи годин роботи, або зниження ставки.",
          sourceLocator:
            "Art. 101 pkt 2 lit. a–b, art. 22 ust. 1 pkt 2 і ust. 2 ustawy o pomocy obywatelom Ukrainy",
        },
        {
          kind: "statute-text",
          text: "Art. 101 pkt 2 lit. b передбачає, що обов’язок повідомлення не стосується випадків з art. 3 ust. 1–3 і 5 ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom.",
          sourceLocator:
            "Art. 101 pkt 2 lit. b, art. 22 ust. 3 ustawy o pomocy obywatelom Ukrainy",
        },
        {
          kind: "practical-inference",
          text: "Повідомлення є окремою вимогою режиму для громадян України: воно не замінює перевірку legalnego pobytu та не є саме по собі дозволом на перебування.",
          sourceLocator: "Art. 101 pkt 2 lit. a–b, pkt 2 lit. f",
        },
      ],
      summary:
        "Стаття пристосовує спеціальні правила праці громадян України до нової ustawy. Вона визначає строк і зміст powiadomienia, окремі винятки та наслідок недотримання умов повідомлення.",
      rules: [
        {
          locator: "pkt 2 lit. a–b, art. 22 ust. 1 pkt 2 і ust. 2",
          explanation:
            "Podmiot powierzający pracę подає powiadomienie до właściwego powiatowego urzędu pracy протягом 7 днів від початку роботи. Окреме повідомлення потрібне протягом 7 днів після кожної названої несприятливої зміни умов.",
        },
        {
          locator: "pkt 2 lit. b, art. 22 ust. 3",
          explanation:
            "Виняток охоплює випадки, названі в art. 3 ust. 1–3 і 5 нової ustawy. Спершу треба кваліфікувати конкретну підставу, а не припускати, що виняток стосується кожного працевлаштування громадянина України.",
        },
        {
          locator: "pkt 2 lit. c, art. 22 ust. 5–6",
          explanation:
            "Якщо роботу почали до видачі zezwolenia na pobyt czasowy i pracę і продовжують для того самого podmiotu на умовах ust. 1, повiadomienie подається протягом 7 днів від передання інформації за ust. 6.",
        },
        {
          locator: "pkt 2 lit. e–f, art. 22 ust. 8–9 і ust. 14",
          explanation:
            "Повідомлення подається через визначену систему teleinformatyczny і містить дані podmiotu, громадянина, umowy, роботи, місця, винагороди та часу. Недотримання умов з ust. 1 pkt 2–5 і ust. 2 означає, що art. 84 ust. 2 нової ustawy не застосовується.",
        },
      ],
      legalEffect:
        "Стаття змінює техніку й наслідки powiadomienia у спеціальному режимі праці громадян України. Вона не встановлює автоматичного права на pobyt і не замінює окремі правила доступу до роботи; висновок залежить від фактичної підстави та дотримання всіх умов.",
      foreignersCase:
        "У справі перевірте дату початку роботи, podmiot, вид umowy, stanowisko, місце, ставку й час, а також кожну зміну та дату powiadomienia. Окремо перевірте документ і строк legalnego pobytu: виконання powiadomienia не доводить саме по собі право перебування.",
    },
    {
      provisionId: "powierzanie-pracy-art-102",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 102 встановлює: до адміністративних проваджень щодо zezwolenia na pracę або oświadczenia o powierzeniu wykonywania pracy cudzoziemcowi, розпочатих за старою ustawa o promocji zatrudnienia та не завершених остаточною decyzja до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 102",
        },
        {
          kind: "practical-inference",
          text: "Для цього переходу вирішальними є дата wszczęcia провадження і те, чи була decyzja ostateczna до набрання чинності; сама назва документа не відповідає на ці питання.",
          sourceLocator: "Art. 102",
        },
      ],
      summary:
        "Стаття зберігає старі правила для незавершених адміністративних справ про дозвіл на роботу або внесення oświadczenia до переходу на нову ustawy.",
      rules: [
        {
          locator: "Art. 102",
          explanation:
            "Провадження має бути розпочате на підставі старої ustawa o promocji zatrudnienia i instytucjach rynku pracy.",
        },
        {
          locator: "Art. 102",
          explanation:
            "Якщо до набрання чинності новою ustawy не було decyzja ostateczna, справа продовжується за dotychczasowe przepisy. Стаття не оголошує автоматичної недійсності поданих документів.",
        },
      ],
      legalEffect:
        "Це перехідне правило про застосовне право в конкретному провадженні. Воно не продовжує строк legalnego pobytu і не створює права виконувати роботу без окремої законної підстави.",
      foreignersCase:
        "Знайдіть підтвердження дати подання та wszczęcia, предмет справи і статус decyzja на дату набрання чинності новою ustawy. Потім окремо перевірте, чи має іноземець legalny pobyt і чи охоплює його робота відповідний документ.",
    },
    {
      provisionId: "powierzanie-pracy-art-103",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 103 ust. 1 передбачає, що до zezwoleń na pracę, виданих за старою ustawa o promocji zatrudnienia, застосовуються przepisy нової ustawy.",
          sourceLocator: "Art. 103 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 103 ust. 2–3 поширює нові правила відповідно на zaświadczenia про wpis wniosku щодо pracy sezonowej та на oświadczenia o powierzeniu wykonywania pracy cudzoziemcowi, внесені до ewidencji за старою ustawy.",
          sourceLocator: "Art. 103 ust. 2–3",
        },
        {
          kind: "practical-inference",
          text: "Перехід застосовується до названого документа або запису; з нього не випливає автоматичне продовження документа чи легалізація перебування.",
          sourceLocator: "Art. 103 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає, які правила діють для вже виданих дозволів і вже внесених записів, що походять зі старої системи працевлаштування.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Видане zezwolenie na pracę не ігнорується через зміну ustawy: до нього застосовуються przepisy нової ustawy.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Zaświadczenie про wpis wniosku щодо pracy sezonowej, видане за art. 88p ust. 1 pkt 2 старої ustawy, оцінюється за art. 50 нової ustawy.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Oświadczenie, внесене до ewidencji за старою ustawy, також охоплюється новою ustawy. Треба зберегти доказ самого wpis до ewidencji.",
        },
      ],
      legalEffect:
        "Стаття переводить названі чинні документи та записи під новий нормативний режим, але не відповідає сама по собі на питання про строк документа, legalny pobyt чи фактичне право на конкретну роботу.",
      foreignersCase:
        "Встановіть вид документа, дату його wydania або wpis до ewidencji та зазначені в ньому умови. Під час перевірки застосовуйте нову ustawy лише в межах art. 103, а статус перебування і можливість роботи перевіряйте окремо.",
    },
    {
      provisionId: "powierzanie-pracy-art-104",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 104 ust. 1–3 дозволяє від дня набрання чинності новою ustawy подавати старі oświadczenia, zaświadczenia про wpis щодо pracy sezonowej та zezwolenia na pracę у визначених провадженнях про wydanie wizy до спливу вказаного в них періоду zatrudnienia.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Oświadczenia стосуються wizy для цілі з art. 60 ust. 1 pkt 5, zaświadczenia — pkt 5a, а zezwolenia na pracę — pkt 6 ustawy, зміненої в art. 96.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Можливість подати документ у провадженні про wiza означає його допустимість як передбаченого підтвердження в межах перехідного правила, а не гарантію видачі wizy або права перебування.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
      ],
      summary:
        "Перехідна норма тимчасово зберігає доказове використання старих робочих документів у визначених провадженнях про wiza.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Oświadczenie, внесене до ewidencji за art. 88z ust. 2 старої ustawy, можна подати у справі про wiza для цілі art. 60 ust. 1 pkt 5 до кінця періоду zatrudnienia, вказаного в oświadczeniu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Zaświadczenie про wpis до ewidencji wniosków щодо pracy sezonowej можна подати для цілі art. 60 ust. 1 pkt 5a до кінця зазначеного періоду zatrudnienia.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Zezwolenie na pracę за старою ustawy можна подати для цілі art. 60 ust. 1 pkt 6 до кінця періоду zatrudnienia, вказаного в дозволі.",
        },
      ],
      legalEffect:
        "Норма зберігає обмежене використання старого робочого документа у справі про wiza. Вона не замінює перевірку умов видачі wizy, legalnego pobytu або права виконувати конкретну роботу після спливу вказаного періоду.",
      foreignersCase:
        "Зіставте вид документа, його стару правову підставу, cel wizy та період zatrudnienia. Перевірте, чи звернення відбулося в межах цього періоду; не робіть із прийняття документа висновку про позитивне рішення або дозвіл на роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-105",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 105 встановлює, що до проваджень про wydanie wizy для цілей з art. 60 ust. 1 pkt 5–6, розпочатих і не завершених до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 105",
        },
        {
          kind: "practical-inference",
          text: "Для вибору режиму треба перевірити, коли провадження про wiza було wszczęte і чи воно залишалося незавершеним на дату набрання чинності; це перехідне правило не регулює нові заяви.",
          sourceLocator: "Art. 105",
        },
      ],
      summary:
        "Стаття залишає старі правила для незавершених на момент переходу візових проваджень щодо робочих цілей.",
      rules: [
        {
          locator: "Art. 105",
          explanation:
            "Охоплюються лише справи про wiza для цілей art. 60 ust. 1 pkt 5–6.",
        },
        {
          locator: "Art. 105",
          explanation:
            "Провадження має бути wszczęte до набрання чинності новою ustawy і не завершене до цього дня. Тоді застосовуються dotychczasowe przepisy, а не новий режим лише через подальшу дату рішення.",
        },
      ],
      legalEffect:
        "Стаття визначає перехідний режим розгляду візової справи. Вона не продовжує візу, не легалізує pobyt і не надає самостійного права на роботу.",
      foreignersCase:
        "Перевірте підтвердження дати wszczęcia, вид і cel wizy та дату завершення справи. Після цього окремо оцініть строк legalnego pobytu і підставу доступу до роботи, оскільки візове провадження саме по собі їх не створює.",
    },
    {
      provisionId: "powierzanie-pracy-art-106",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 106 передбачає, що до незавершених на день набрання чинності новою ustawy проваджень про zezwolenie na pobyt czasowy i pracę, його зміну та pobyt czasowy для роботи у zawodzie wymagającym wysokich kwalifikacji застосовується ustawa, змінена в art. 96, у новій редакції.",
          sourceLocator: "Art. 106",
        },
        {
          kind: "practical-inference",
          text: "Це правило визначає редакцію норм для названої справи про pobyt; воно не означає автоматичної видачі zezwolenia і не скасовує необхідності окремо оцінити умови роботи.",
          sourceLocator: "Art. 106",
        },
      ],
      summary:
        "На відміну від деяких інших перехідних норм, стаття спрямовує незавершені провадження про окремі види pobyt до нової редакції ustawa o cudzoziemcach.",
      rules: [
        {
          locator: "Art. 106",
          explanation:
            "Охоплюються три категорії: zezwolenie na pobyt czasowy i pracę, зміна такого zezwolenia та zezwolenie na pobyt czasowy для роботи у zawodzie wymagającym wysokich kwalifikacji.",
        },
        {
          locator: "Art. 106",
          explanation:
            "Провадження має бути wszczęte до набрання чинності новою ustawy і не завершене до цього дня. Для нього береться нова редакція ustawy, зміненої в art. 96.",
        },
      ],
      legalEffect:
        "Норма змінює перехідний спосіб оцінки названих справ про pobyt. Вона не перетворює заяву на дозвіл і не робить legalny pobyt або доступ до роботи автоматичними.",
      foreignersCase:
        "Встановіть вид заяви, дату wszczęcia та стан провадження на дату переходу. Потім зіставте вимоги нової редакції з документами про pobyt і роботу; не змішуйте право перебування з правом виконувати роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-107",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 107 встановлює, що до незавершених до набрання чинності новою ustawy проваджень у справах про wykroczenia з art. 120 старої ustawy o promocji zatrudnienia застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 107",
        },
        {
          kind: "practical-inference",
          text: "Перехід стосується провадження про wykroczenie, а не визначення legalnego pobytu чи права на роботу; можливі наслідки для іншої справи треба перевіряти за її власною нормою.",
          sourceLocator: "Art. 107",
        },
      ],
      summary:
        "Стаття зберігає попередні правила для незавершених проваджень щодо визначених wykroczenia за старою трудовою ustawy.",
      rules: [
        {
          locator: "Art. 107",
          explanation:
            "Провадження повинно стосуватися wykroczenia, визначеного art. 120 старої ustawy o promocji zatrudnienia i instytucjach rynku pracy.",
        },
        {
          locator: "Art. 107",
          explanation:
            "Якщо воно було wszczęte і не завершене до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний перехід у справах про wykroczenia. Вона сама не встановлює рішення про pobyt чи дозвіл на роботу.",
      foreignersCase:
        "Уточніть, яке саме wykroczenie і яке провадження маються на увазі, та зафіксуйте дати wszczęcia й завершення. Не переносіть автоматично цей перехідний режим на адміністративну справу про zezwolenie na pracę або pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-108",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 108 ust. 1 прирівнює, для перелічених положень ustawy o cudzoziemcach у редакції art. 96, prawomocne ukaranie за wykroczenie з art. 120 ust. 1 старої ustawy до prawomocne ukaranie за wykroczenie з art. 84 ust. 1 нової ustawy.",
          sourceLocator: "Art. 108 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 108 ust. 2 робить таке саме прирівнювання для prawomocne ukaranie за wykroczenia з art. 120 ust. 3–5 старої ustawy та art. 84 ust. 3–5 нової ustawy.",
          sourceLocator: "Art. 108 ust. 2",
        },
        {
          kind: "practical-inference",
          text: "Еквівалентність діє в межах прямо перелічених у статті посилань; вона не є загальним висновком про однаковість будь-яких старих і нових правопорушень.",
          sourceLocator: "Art. 108 ust. 1–2",
        },
      ],
      summary:
        "Стаття зберігає значення остаточних покарань за старими трудовими wykroczenia для конкретних перевірок, що тепер посилаються на art. 84 нової ustawy.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для названих у ust. 1 положень покарання за art. 120 ust. 1 читається як покарання за art. 84 ust. 1.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для названих у ust. 2 положень покарання за art. 120 ust. 3–5 читається як покарання за art. 84 ust. 3–5.",
        },
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібне саме prawomocne ukaranie. Застосування залежить також від того, чи входить конкретна перевірка до переліку, наведеного в статті.",
        },
      ],
      legalEffect:
        "Норма забезпечує перехідну еквівалентність правопорушень для окремих оцінок у справах іноземців. Вона не є самостійною підставою для відмови чи скасування pobyt і не визначає право на роботу поза відповідною перевіркою.",
      foreignersCase:
        "Отримайте prawomocne рішення, визначте точний пункт старого art. 120 і перевірте конкретне положення ustawy o cudzoziemcach, яке його враховує. Не робіть висновок лише з номера статті або з самого факту незавершеного провадження.",
    },
    {
      provisionId: "powierzanie-pracy-art-109",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 109 ust. 1 дозволяє виконувати названі в ньому czynności, зокрема за art. 8, 18, 19, 33, 61, 67, 70 і rozdziałem 7, відповідно до dotychczasowe przepisy до dostosowania систем teleinformatycznych до нової ustawy.",
          sourceLocator: "Art. 109 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 109 ust. 2–4 встановлює для перелічених органів строк dostosowania систем до 2 років від набрання чинності, не поширює цей строк на систему Krajowego Rejestru Karnego та вимагає повідомлення про впровадження щонайменше за 30 днів.",
          sourceLocator: "Art. 109 ust. 2–4",
        },
        {
          kind: "practical-inference",
          text: "Технічний перехід пояснює тимчасове використання старого способу дії системи, але сам по собі не змінює матеріальні умови legalnego pobytu або права на роботу.",
          sourceLocator: "Art. 109 ust. 1–4",
        },
      ],
      summary:
        "Стаття дає тимчасове правило для дій, які залежать від адаптації державних систем teleinformatycznych, і визначає організаційні строки та повідомлення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До технічної адаптації конкретні czynności виконуються за dotychczasowe przepisy. Перелік у статті є визначеним, тому його не слід розширювати за аналогією.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Названі органи мають адаптувати системи протягом 2 років від набрання чинності; для системи Krajowego Rejestru Karnego цей строк не застосовується.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Minister właściwy do spraw pracy публікує повідомлення про строк wdrożenia в офіційному журналі та BIP щонайменше за 30 днів до впровадження.",
        },
      ],
      legalEffect:
        "Стаття підтримує безперервність визначених процедур під час переходу систем, не проголошуючи загального продовження старих правил. Для конкретної дії важливі її місце в переліку та фактичний статус технічного wdrożenia.",
      foreignersCase:
        "З’ясуйте, чи належить потрібна дія до переліку ust. 1, і перевірте офіційне повідомлення про wdrożenie. Не вважайте технічну затримку доказом legalnego pobytu або дозволом працювати без іншої необхідної підстави.",
    },
    {
      provisionId: "powierzanie-pracy-art-110",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 110 встановлює, що дані, зібрані та оброблені на підставі art. 90c ust. 4 і 6 старої ustawy o promocji zatrudnienia, стають даними, які обробляються на підставі art. 73 ust. 4–6 нової ustawy.",
          sourceLocator: "Art. 110",
        },
        {
          kind: "practical-inference",
          text: "Норма забезпечує нормативну тяглість обробки вже зібраних даних; вона сама не підтверджує зміст конкретного запису та не встановлює права на pobyt чи роботу.",
          sourceLocator: "Art. 110",
        },
      ],
      summary:
        "Стаття переводить правову підставу обробки даних зі старих положень до відповідних положень нової ustawy.",
      rules: [
        {
          locator: "Art. 110",
          explanation:
            "Йдеться саме про дані, зібрані та оброблені за art. 90c ust. 4 і 6 старої ustawy.",
        },
        {
          locator: "Art. 110",
          explanation:
            "Для таких даних новою підставою названі art. 73 ust. 4–6. Стаття не описує додаткових категорій даних або окремого строку зберігання.",
        },
      ],
      legalEffect:
        "Норма зберігає правову тяглість обробки визначених даних при заміні законодавчої підстави. Вона не вирішує питання достовірності запису, доступу до нього чи індивідуального статусу іноземця.",
      foreignersCase:
        "Якщо орган посилається на такий запис, попросіть визначити його джерело й перевірте, чи належить він до даних art. 90c ust. 4 або 6. Не прирівнюйте наявність запису до доведеного права на pobyt чи роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-111",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 111 передбачає, що program aktywizacyjny dla cudzoziemców, який реалізується на підставі art. 62d–62g старої ustawy o promocji zatrudnienia, надалі реалізується і фінансується за dotychczasowe przepisy.",
          sourceLocator: "Art. 111",
        },
        {
          kind: "practical-inference",
          text: "Це правило зберігає режим конкретної програми, але не перетворює участь у ній на автоматичну підставу для legalnego pobytu або права виконувати роботу.",
          sourceLocator: "Art. 111",
        },
      ],
      summary:
        "Стаття забезпечує продовження реалізації та фінансування вже визначеної програми активізації для іноземців за попередніми правилами.",
      rules: [
        {
          locator: "Art. 111",
          explanation:
            "Потрібно, щоб програма була реалізована саме на підставі art. 62d–62g старої ustawy.",
        },
        {
          locator: "Art. 111",
          explanation:
            "І реалізація, і фінансування програми залишаються за dotychczasowe przepisy. Стаття не містить нового переліку учасників чи нової процедури.",
        },
      ],
      legalEffect:
        "Норма забезпечує тяглість конкретної програми, а не створює самостійний дозвільний режим. Її застосування не замінює перевірку pobyt і доступу до праці за відповідними правилами.",
      foreignersCase:
        "Встановіть, чи справді захід належить до програми за art. 62d–62g, хто її реалізує та який документ підтверджує участь. Не подавайте участь у програмі як доказ автоматичного права на legalny pobyt або право на pracę.",
    },
    {
      provisionId: "powierzanie-pracy-art-112",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 112 встановлює, що art. 4 ust. 3a ustawy, зміненої в art. 99, не застосовується до udziałów або akcji у spółka z ograniczoną odpowiedzialnością, prosta spółka akcyjna чи spółka akcyjna, objętych або nabytych до набрання чинності новою ustawy.",
          sourceLocator: "Art. 112",
        },
        {
          kind: "practical-inference",
          text: "Для винятку треба довести і вид spółka, і те, що udział або akcja були objęte чи nabyte до дати набрання чинності; стаття не поширює виняток на пізніші придбання.",
          sourceLocator: "Art. 112",
        },
      ],
      summary:
        "Стаття містить часовий виняток для певних корпоративних часток і акцій, набуття яких відбулося до набрання чинності новою ustawy.",
      rules: [
        {
          locator: "Art. 112",
          explanation:
            "Виняток стосується лише udziałów або akcji у трьох прямо названих видах spółek.",
        },
        {
          locator: "Art. 112",
          explanation:
            "Udział або akcja мають бути objęte чи nabyte до набрання чинності. Доказом часу можуть бути лише документи, що підтверджують конкретну операцію; сам статус учасника без дати недостатній для висновку.",
        },
      ],
      legalEffect:
        "Норма обмежує в часі застосування art. 4 ust. 3a до раніше набутого корпоративного інтересу. Вона не встановлює права іноземця на pobyt, не легалізує працю і не відповідає на інші умови цього статусу.",
      foreignersCase:
        "Перевірте KRS або корпоративні документи, вид spółka та дату objęcie або nabycie udziałów чи akcji. Потім окремо оцініть підставу pobytu і фактичну роботу: володіння часткою саме по собі не замінює цих перевірок.",
    },
    {
      provisionId: "powierzanie-pracy-art-113",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 113 зберігає чинність визначених dotychczasowe przepisy wykonawcze до набрання чинності новими, виданими на названих делегаціях, але для кожної категорії встановлює конкретний акт-замінник.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: "За art. 113 pkt 1–5 старі правила на підставах art. 90, 90a старої ustawy діють до відповідних нових правил, а pkt 6 стосується art. 80 ust. 1 і art. 107 ust. 1 ustawy, зміненої в art. 96; у будь-якому разі збереження не може тривати понад 6 місяців від набрання чинності новою ustawy.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
        {
          kind: "practical-inference",
          text: "Старе rozporządzenie не слід вважати чинним безстроково: треба встановити його делегацію, появу нового акта та граничні 6 місяців, якщо вони застосовні.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
      ],
      summary:
        "Перехідна норма тимчасово утримує окремі виконавчі положення, щоб нові правила могли працювати до видання відповідних актів, але встановлює граничний строк.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Для кожної старої делегації art. 90 або 90a названо конкретну нову делегацію: art. 11 і 62 ust. 6, art. 3 ust. 7, art. 45 ust. 2, art. 3 ust. 8, або art. 10 ust. 5 і 63 ust. 4.",
        },
        {
          locator: "pkt 6",
          explanation:
            "Окремо зберігаються правила на підставі art. 80 ust. 1 і art. 107 ust. 1 ustawy, зміненої в art. 96, до нових виконавчих правил на цих самих делегаціях.",
        },
        {
          locator: "pkt 1–6",
          explanation:
            "Збереження триває до набрання чинності новим актом, але не довше ніж 6 місяців від набрання чинності новою ustawy.",
        },
      ],
      legalEffect:
        "Стаття забезпечує тимчасову нормативну безперервність для конкретних виконавчих актів. Вона не робить старі правила безстроковими і не створює самостійної підстави для legalnego pobytu чи права на роботу.",
      foreignersCase:
        "У документі визначте правову делегацію, дату та сферу конкретного rozporządzenie. Перевірте, чи вже набрали чинності нові przepisy wykonawcze і чи не сплив граничний строк; не обґрунтовуйте статус іноземця лише загальним посиланням на старий акт.",
    },
    {
      provisionId: "powierzanie-pracy-art-114",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 114 встановлює, що ustawa wchodzi w życie першого дня місяця, який настає після спливу 14 днів від дня її ogłoszenia.",
          sourceLocator: "Art. 114",
        },
        {
          kind: "official-guidance",
          text: "Для цієї ustawy офіційні дані ELI вказують дату wejścia w życie 2025-06-01; акт опублікований як Dz.U. 2025 poz. 621.",
          sourceLocator:
            "ELI: https://eli.gov.pl/eli/DU/2025/621/ogl; metadata: entryIntoForce",
        },
        {
          kind: "practical-inference",
          text: "Дату події треба зіставляти з правилом wejścia w życie та окремими перехідними статтями 102–113, а не лише з датою підписання документа.",
          sourceLocator: "Art. 114; Art. 102–113",
        },
      ],
      summary:
        "Стаття визначає момент набрання чинності ustawy, від якого починають діяти її основні та перехідні правила.",
      rules: [
        {
          locator: "Art. 114",
          explanation:
            "Формула відраховує 14 днів від ogłoszenie, а потім визначає перший день наступного місяця як dzień wejścia w życie.",
        },
        {
          locator: "Art. 114; ELI",
          explanation:
            "Для Dz.U. 2025 poz. 621 дата wejścia w życie зазначена як 1 червня 2025 року. Для конкретної справи все одно перевірте відповідну перехідну норму.",
        },
      ],
      legalEffect:
        "Стаття запускає дію нової ustawy, але не скасовує потреби застосовувати спеціальні правила переходу. Сам факт набрання чинності не визначає legalny pobyt або право виконувати роботу конкретного іноземця.",
      foreignersCase:
        "Зафіксуйте дату кожної ключової події — подання, wszczęcia, wydania документа, початку роботи чи зміни умов — і порівняйте її з 1 червня 2025 року та art. 102–113. Лише після цього обирайте старий або новий режим.",
    },
  ],
})
