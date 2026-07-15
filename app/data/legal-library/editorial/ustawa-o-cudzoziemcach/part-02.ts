import { defineEditorialPart } from "../define-editorial-part"

export const foreignersActPart02 = defineEditorialPart<
  "ustawa-o-cudzoziemcach"
>({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 46 ust. 1 pkt 1–6 уповноважує міністра внутрішніх справ у погодженні з міністром закордонних справ визначити в rozporządzenie формуляри, фотографії, зразок дозволу та порядок роботи з відбитками і даними для zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego.",
          sourceLocator: "Art. 46 ust. 1 pkt 1–6",
        },
        {
          kind: "practical-inference",
          text: "Це делегація для технічних правил провадження і контролю, а не самостійне надання іноземцю дозволу на в’їзд.",
          sourceLocator: "Art. 46 ust. 1 pkt 1–6",
        },
      ],
      summary:
        "Art. 46 визначає, які деталі щодо zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego мають бути врегульовані підзаконним актом: формуляр заяви, кількість і технічні вимоги до фотографій, зразок дозволу, pobieranie odcisków linii papilarnych та запис і передавання даних.",
      rules: [
        {
          locator: "Art. 46 pkt 1–6",
          explanation:
            "Rozporządzenie має врегулювати саме перелічені технічні елементи, щоб провадження було ефективним, а перетин кордону в рамках mały ruch graniczny — контрольованим.",
        },
        {
          locator: "status przepisu",
          explanation:
            "Art. 46 має status active у локальному corpus; конкретні зразки та вимоги треба брати з чинного розporządzenie, прийнятого на виконання цієї делегації.",
        },
      ],
      legalEffect:
        "Стаття сама не підтверджує право конкретного cudzoziemiec на перетин кордону і не замінює рішення про zezwolenie. Вона визначає межі майбутнього технічного регулювання.",
      foreignersCase:
        "У справі перевірте заяву, фотографії, відбитки та дані дозволу за відповідним rozporządzenie; окремо підтвердьте, що сам дозвіл чинний і охоплює потрібний перетин.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 47 ust. 1 зобов’язує komendant placówki Straży Granicznej zatrzymać zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego, якщо під час kontroli granicznej встановлено, що його cofnięto або unieważniono, і видати zaświadczenie o zatrzymaniu zezwolenia.",
          sourceLocator: "Art. 47 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 47 ust. 2–3 делегує міністрам визначення процедури після zatrzymanie та wzór zaświadczenia, включно з інформацією про підставу затримання.",
          sourceLocator: "Art. 47 ust. 2–3",
        },
      ],
      summary:
        "Art. 47 регулює zatrzymanie дозволу на перетин кордону в рамках mały ruch graniczny, коли на кордоні виявлено його cofnięcie або unieważnienie, і встановлює документальне підтвердження цієї дії.",
      rules: [
        {
          locator: "Art. 47 ust. 1",
          explanation:
            "Komendant placówki Straży Granicznej не оцінює тут нову заяву: він затримує вже cofnięte або unieważnione zezwolenie і видає cudzoziemiec zaświadczenie.",
        },
        {
          locator: "Art. 47 ust. 2–3",
          explanation:
            "Окреме rozporządzenie визначає порядок після zatrzymanie, необхідну кількість примірників і спосіб передавання zaświadczenie właściwemu organowi.",
        },
      ],
      legalEffect:
        "Затримання вилучає документ з обігу під час контролю, але Art. 47 не є самостійною підставою cofnięcie чи unieważnienie дозволу: він передбачає дію після того, як такий статус уже встановлено.",
      foreignersCase:
        "Зіставте запис про cofnięcie або unieważnienie з моментом прикордонного контролю, попросіть заświadczenie o zatrzymaniu zezwolenia і перевірте, який organ та яке рішення є первинними.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 48 вимагає від Szef Urzędu передавати органам держав, що застосовують rozporządzenie nr 1931/2006, інформацію про unieważnienie дозволу mały ruch graniczny, визначені grzywny та рішення про zobowiązanie do powrotu за Art. 302 ust. 1 pkt 12 або 13.",
          sourceLocator: "Art. 48 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Передавання інформації забезпечує транскордонну координацію і саме по собі не є новою grzywna або рішенням про powrót.",
          sourceLocator: "Art. 48 pkt 1–3",
        },
      ],
      summary:
        "Art. 48 встановлює інформаційний обмін у режимі mały ruch graniczny: Szef Urzędu повідомляє інші відповідні держави про скасування дозволу, grzywny за перебування поза дозволеною прикордонною зоною або після дозволеного строку та окремі рішення про powrót.",
      rules: [
        {
          locator: "Art. 48 pkt 1",
          explanation:
            "Повідомляється рішення про unieważnienie zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego.",
        },
        {
          locator: "Art. 48 pkt 2 lit. a–b",
          explanation:
            "Обмін охоплює grzywny за вихід за межі strefa przygraniczna, дозволеної документом, або за перебування після закінчення строку, визначеного в zezwolenie.",
        },
        {
          locator: "Art. 48 pkt 3",
          explanation:
            "Окремо передаються рішення про zobowiązanie cudzoziemca do powrotu, якщо вони видані з причин Art. 302 ust. 1 pkt 12 або 13.",
        },
      ],
      legalEffect:
        "Норма створює обов’язок передати визначені відомості іншим державам, але не легалізує перебування і не замінює акт, яким накладено grzywna, unieważniono дозвіл або прийнято рішення про powrót.",
      foreignersCase:
        "У справі зафіксуйте дозволену strefa przygraniczna, строк перебування, постанову про grzywna чи рішення про powrót і перевірте, чи стосується подія саме переліку Art. 48.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 49 ust. 1 дозволяє подати zaproszenie як документ, що підтверджує кошти на планований pobyt, zakwaterowanie, wyżywienie та повернення або transit. Ust. 2 визначає допустимі категорії zapraszający, а ust. 3 відсилає для неperервності pobytu cudzoziemca до Art. 195 ust. 4.",
          sourceLocator: "Art. 49 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Zaproszenie підтверджує фінансове забезпечення в межах своєї функції, але не є візою, дозволом на pobyt або dokument uprawniający do pracy.",
          sourceLocator: "Art. 49 ust. 1",
        },
      ],
      summary:
        "Art. 49 визначає доказову функцію zaproszenie і коло осіб, які можуть його оформити. До них належать, зокрема, польський або окремий громадянин ЄС/EFTA/Швейцарії чи особа, охоплена Umowa Wystąpienia, іноземець із щонайменше 5 роками безперервного legal pobyt або з pobyt stały чи pobyt rezydenta długoterminowego UE, а також юридична особа або jednostka organizacyjna з місцезнаходженням у Польщі.",
      rules: [
        {
          locator: "Art. 49 ust. 1",
          explanation:
            "Запрошення охоплює витрати на перебування, житло, харчування і дорогу назад або транзит до третьої держави, яка дозволить в’їзд.",
        },
        {
          locator: "Art. 49 ust. 2 pkt 1–3",
          explanation:
            "Запрасити можуть названі законом громадяни та члени їх сімей із потрібним правом pobytu, іноземець з legal i nieprzerwany pobyt щонайменше 5 років або з відповідним дозволом, чи юридична особа або jednostka з польською siedziba.",
        },
        {
          locator: "Art. 49 ust. 3",
          explanation:
            "Неperервність п’ятирічного pobyt для категорії з ust. 2 pkt 2 визначається за Art. 195 ust. 4, а не за довільним підрахунком днів.",
        },
      ],
      legalEffect:
        "Належно оформлене zaproszenie є одним із документів для підтвердження коштів і зобов’язань zapraszający. Воно не гарантує видачу wiza або в’їзд і не надає права на wykonywanie pracy.",
      foreignersCase:
        "Перевірте статус і адресу zapraszający, його підставу за Art. 49 ust. 2, період legal pobyt, заявлені витрати та відповідність запрошення фактичному cel pobytu cudzoziemca.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 50 ust. 1 pkt 1–8 встановлює підстави для відмови у wpisanie zaproszenie до ewidencji zaproszeń або для unieważnienie такого wpisu; ust. 2 обмежує застосування pkt 6, якщо нова заява подана до спливу 3 років після завершення чинності попереднього запрошення.",
          sourceLocator: "Art. 50 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Рішення має бути пов’язане з конкретною przesłanka Art. 50: сам факт проблеми з документом або припущення про мету без встановлення відповідного пункту не замінює правову підставу.",
          sourceLocator: "Art. 50 ust. 1 pkt 1–8",
        },
      ],
      summary:
        "Art. 50 перелічує матеріальні та поведінкові підстави, за яких zaproszenie не вносять до ewidencji zaproszeń або запис скасовують: невідповідність zapraszający Art. 49 ust. 2, запис cudzoziemca у wykaz, міркування безпеки чи інтересу держави, недоведені кошти або житло, невиконані попередні зобов’язання, неправдиві дані чи документи та невідповідність заявленого cel в’їзду фактичним обставинам.",
      rules: [
        {
          locator: "Art. 50 ust. 1 pkt 1–5",
          explanation:
            "Перевіряються статус zapraszający, wpis до wykaz cudzoziemców, безпека та interes RP, можливість покрити витрати Art. 53 ust. 1 pkt 2 і реальна можливість забезпечити житло.",
        },
        {
          locator: "Art. 50 ust. 1 pkt 6–7",
          explanation:
            "Підставою є невиконання зобов’язань попереднього zaproszenie або неправдиві дані, fałszywe informacje, неправдиві свідчення, zatajenie prawdy, підроблення чи використання підробленого документа.",
        },
        {
          locator: "Art. 50 ust. 1 pkt 8; ust. 2",
          explanation:
            "Оцінюється, чи не буде фактичний cel wjazdu і pobytu іншим за заявлений; невиконання попередніх зобов’язань за pkt 6 враховується, коли нову заяву подано протягом 3 років після завершення попередньої чинності.",
        },
      ],
      legalEffect:
        "За наявності встановленої підстави запис не вносять або його unieważniaють у процедурі, передбаченій Art. 52. Наслідком є втрата доказової сили запрошення, а не автоматичне рішення щодо візи самого cudzoziemca.",
      foreignersCase:
        "Розкладіть матеріали за pkt 1–8: статус запрошуючого, кошти, житло, попереднє zaproszenie, достовірність документів і реальний cel pobytu; окремо перевірте трирічний строк з ust. 2.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-51",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 51 ust. 1 обмежує чинність zaproszenie визначеним у ньому періодом, не довше одного року. Ust. 2 визначає зміст заяви і зобов’язань zapraszający, а ust. 3 — właściwość wojewoda за місцем проживання або siedziba запрошуючого.",
          sourceLocator: "Art. 51 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Art. 51 ust. 2 pkt 7 прямо вимагає попередження, що zaproszenie не є документом, який уповноважує на podjęcie pracy у Польщі.",
          sourceLocator: "Art. 51 ust. 2 pkt 7",
        },
      ],
      summary:
        "Art. 51 встановлює максимальну тривалість zaproszenie та перелік даних і зобов’язань у заяві на wpis до ewidencji zaproszeń. Запрошуючий бере на себе, зокрема, витрати перебування, повернення або транзиту та можливого виконання decyzja o zobowiązaniu do powrotu, а сам документ повинен містити застереження про відсутність права на роботу.",
      rules: [
        {
          locator: "Art. 51 ust. 1",
          explanation:
            "Запрошення дійсне лише у вказаний період і не може бути чинним довше одного року.",
        },
        {
          locator: "Art. 51 ust. 2 pkt 1–8",
          explanation:
            "Заява містить дані за Art. 54 pkt 1, 2 і 4–8, відомості про попередні запрошення, майнові та житлові умови, зобов’язання щодо витрат, попередні прізвища й ім’я батька cudzoziemiec, дані VIS, попередження про відсутність права на роботу та письмове oświadczenie під відповідальністю за fałszywe zeznania.",
        },
        {
          locator: "Art. 51 ust. 3",
          explanation:
            "Заяву розглядає wojewoda, właściwy за місцем проживання або siedziba zapraszający.",
        },
      ],
      legalEffect:
        "Вписане запрошення діє в межах дат і зобов’язань, записаних у ньому, та може підтверджувати фінансове забезпечення. Воно прямо не дає cudzoziemiec prawa do pracy і не замінює wiza або інший документ pobyt.",
      foreignersCase:
        "Перевірте дати запрошення, дані ewidencja, обсяг фінансових зобов’язань і текст попередження про відсутність prawa do pracy; не використовуйте zaproszenie після завершення його чинності.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 52 ust. 1 передбачає відмову wojewoda у wpisanie zaproszenie до ewidencji zaproszeń у формі decyzja, а ust. 1a — unieważnienie wpisu wojewoda, який його здійснив. За ust. 2 рішення про unieważnienie приймається з urzędu або на заяву zapraszający щонайменше за 7 днів до початку чинності, а за ust. 3 zaproszenie втрачає чинність, коли рішення стає ostateczna.",
          sourceLocator: "Art. 52 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Для наслідку важлива ostateczność decyzja про unieważnienie; сам намір подати заяву або неостаточне рішення ще не описує момент втрати чинності за ust. 3.",
          sourceLocator: "Art. 52 ust. 2–3",
        },
      ],
      summary:
        "Art. 52 визначає компетентного wojewoda і форму рішення у справах про wpis або unieważnienie zaproszenie, а також момент, коли запрошення втрачає чинність після остаточного скасування запису.",
      rules: [
        {
          locator: "Art. 52 ust. 1–1a",
          explanation:
            "Відмова у wpis видається wojewoda за місцем проживання або siedziba zapraszający; unieważnienie здійснює wojewoda, який зробив запис.",
        },
        {
          locator: "Art. 52 ust. 2",
          explanation:
            "Unieważnienie може бути з urzędu або за заявою zapraszający, поданою щонайменше за 7 днів до початку періоду чинності zaproszenie.",
        },
        {
          locator: "Art. 52 ust. 3",
          explanation:
            "Zaproszenie перестає бути чинним у день, коли decyzja про unieważnienie стала ostateczna.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний шлях відмови або скасування запису і пов’язує втрату чинності з ostateczna decyzja. Вона не встановлює автоматичного рішення про відмову у візі чи поверненні.",
      foreignersCase:
        "Встановіть, який wojewoda прийняв рішення, дату його doręczenie та ostateczność; порівняйте ці дані з періодом zaproszenie і не посилайтеся на нього після втрати чинності.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 53 ust. 1 вимагає від запрошуючого формуляр заяви, докази коштів для перебування і повернення або транзиту, а також tytuł prawny до житла чи доказ іншого zakwaterowanie. За ust. 2 доказ коштів на повернення вважається виконаним, якщо запрошуючий покаже квиток cudzoziemiec назад.",
          sourceLocator: "Art. 53 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Перелік документів стосується можливості запрошуючого виконати фінансові й житлові зобов’язання; він не доводить сам по собі право cudzoziemiec на в’їзд або роботу.",
          sourceLocator: "Art. 53 ust. 1 pkt 2–3",
        },
      ],
      summary:
        "Art. 53 встановлює доказовий комплект для wpis zaproszenie до ewidencji: формуляр, фінансові документи та документ про житло. Для витрат на повернення достатнім може бути доказ зворотного квитка cudzoziemiec.",
      rules: [
        {
          locator: "Art. 53 ust. 1 pkt 1–2",
          explanation:
            "Потрібні заява і документи, що підтверджують можливість покрити витрати pobyt, zakwaterowanie, wyżywienie та повернення або transit.",
        },
        {
          locator: "Art. 53 ust. 1 pkt 3",
          explanation:
            "Якщо житло — локал запрошуючого, подається tytuł prawny; якщо ні, потрібен документ про можливість забезпечити cudzoziemiec іншим місцем.",
        },
        {
          locator: "Art. 53 ust. 2",
          explanation:
            "Власний bilet powrotny cudzoziemiec є альтернативним підтвердженням можливості покрити витрати на повернення до państwo pochodzenia або zamieszkania.",
        },
      ],
      legalEffect:
        "Неподання або недостатність доказів може перешкодити wpis zaproszenie, зокрема через Art. 50 ust. 1 pkt 4–5. Стаття не перетворює фінансове підтвердження на дозвіл на pobyt чи pracę.",
      foreignersCase:
        "Складіть таблицю витрат і підтверджень, перевірте право на вказане житло та строк квитка; кожен документ прив’яжіть до konkretne zobowiązanie з Art. 51 ust. 2 pkt 3.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-54",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 54 pkt 1–11 визначає дані, які мають бути зазначені в zaproszenie: ідентифікацію zapraszający і cudzoziemiec, zobowiązanie щодо витрат, адресу житла, дати, cel pobytu, organ і номер wpis, okres ważności, спосіб забезпечення житла та інформацію про обробку даних у Wizowy System Informacyjny.",
          sourceLocator: "Art. 54 pkt 1–11",
        },
        {
          kind: "practical-inference",
          text: "Ці реквізити окреслюють, кого, коли, навіщо і на яких фінансово-житлових умовах запрошують; розбіжність із заявою або паспортом потребує пояснення й перевірки.",
          sourceLocator: "Art. 54 pkt 1–11",
        },
      ],
      summary:
        "Art. 54 — це обов’язковий зміст самого zaproszenie. У ньому фіксуються особи, родинний зв’язок, витрати, житло, період і cel pobytu, орган та номер запису, чинність і дані про VIS.",
      rules: [
        {
          locator: "Art. 54 pkt 1–3",
          explanation:
            "Документ містить ідентифікаційні дані zapraszający та zapraszany cudzoziemiec, ступінь споріднення і посилання на зобов’язання покрити витрати за Art. 51 ust. 2 pkt 3.",
        },
        {
          locator: "Art. 54 pkt 4–6",
          explanation:
            "Вказуються адреса zakwaterowanie, дати періоду запрошення та cel pobytu на території RP.",
        },
        {
          locator: "Art. 54 pkt 7–11",
          explanation:
            "Вказуються organ і дата/номер wpis, okres ważności, чи надається власне житло, а також інформація про обробку даних zapraszający у VIS.",
        },
      ],
      legalEffect:
        "Art. 54 визначає зміст документа, на який посилаються органи, але не надає запрошеному cudzoziemiec права на в’їзд, pobyt або працю поза іншими вимогами.",
      foreignersCase:
        "Звірте кожен реквізит zaproszenie з паспортом, документом zapraszający, заявою, адресою житла, датами та заявленим cel; окремо перевірте номер wpis і okres ważności.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55 дозволяє, щоб odbioru zaproszenie здійснив pełnomocnik, який має pełnomocnictwo szczególne саме для його отримання.",
          sourceLocator: "Art. 55",
        },
        {
          kind: "practical-inference",
          text: "Норма стосується способу отримання готового документа; вона не розширює повноваження представника на інші дії без окремого повноваження.",
          sourceLocator: "Art. 55",
        },
      ],
      summary:
        "Art. 55 встановлює вузьке представництво для odbiór zaproszenie: отримати документ може pełnomocnik із спеціальним повноваженням на цю дію.",
      rules: [
        {
          locator: "Art. 55",
          explanation:
            "Перевірте не лише наявність pełnomocnictwo, а й його спеціальний предмет — odbiór конкретного zaproszenie.",
        },
      ],
      legalEffect:
        "Належне спеціальне повноваження дозволяє представнику отримати zaproszenie, але не змінює його строк, зміст, зобов’язання чи правовий ефект.",
      foreignersCase:
        "У матеріалах справи збережіть копію pełnomocnictwo szczególne і підтвердження, хто та коли отримав zaproszenie; не прирівнюйте це до представництва cudzoziemiec у візовій справі.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-55a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55a визначає, що у провадженні про wpis zaproszenie до ewidencji zaproszeń або unieważnienie wpisu стороною є виключно zapraszający.",
          sourceLocator: "Art. 55a",
        },
        {
          kind: "practical-inference",
          text: "Запрошений cudzoziemiec не набуває статусу strony лише через те, що його дані внесено до zaproszenie.",
          sourceLocator: "Art. 55a",
        },
      ],
      summary:
        "Art. 55a обмежує коло сторін у провадженні щодо wpis або unieważnienie zaproszenie: процесуальною стороною є тільки zapraszający.",
      rules: [
        {
          locator: "Art. 55a",
          explanation:
            "Розрізняйте osobę zapraszaną, яка фігурує в документі, і stronę postępowania: Art. 55a прямо називає стороною лише запрошуючого.",
        },
      ],
      legalEffect:
        "Рішення у цій процедурі адресоване процесуальній стороні — zapraszający. Саме zaproszenie не створює для cudzoziemiec права вимагати його wpis або unieważnienie як сторона цього провадження.",
      foreignersCase:
        "Визначте, хто має подавати заяви й отримувати decyzja у справі zaproszenie; питання cudzoziemiec про wiza або pobyt аналізуйте в окремому провадженні.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-55b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55b ust. 1 застосовує до postępowanie w sprawie wpisania zaproszenia розділ II, розділ 14 KPA, а ust. 2 виключає застосування розділу II, розділу 8a KPA до цього провадження.",
          sourceLocator: "Art. 55b ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Спеціальне посилання визначає процесуальні правила саме для wpis zaproszenia; його не слід автоматично поширювати на інші візові або побитові процедури.",
          sourceLocator: "Art. 55b ust. 1–2",
        },
      ],
      summary:
        "Art. 55b визначає, які частини Kodeks postępowania administracyjnego застосовуються до провадження про wpis zaproszenia і яку частину прямо виключено.",
      rules: [
        {
          locator: "Art. 55b ust. 1",
          explanation:
            "Процесуальні дії у справі wpis zaproszenia оцінюються з урахуванням Dział II Rozdział 14 KPA.",
        },
        {
          locator: "Art. 55b ust. 2",
          explanation:
            "Dział II Rozdział 8a KPA для цього провадження не застосовується; не замінюйте пряме виключення загальним посиланням на KPA.",
        },
      ],
      legalEffect:
        "Норма встановлює процесуальну рамку wpis zaproszenia, але не визначає, чи буде zaproszenie внесено, і не створює матеріального права на wiza або pobyt.",
      foreignersCase:
        "У процесуальному календарі посилайтеся на правильні розділи KPA, перевіряйте статус zapraszający як strony за Art. 55a і не переносіть цю рамку на заяву cudzoziemiec.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-56",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 56 дозволяє Skarb Państwa або іншим суб’єктам вимагати в судовому провадженні від zapraszający відшкодування фактично понесених витрат, пов’язаних із виконанням їхніх ustawowych obowiązków, якщо зобов’язання запрошення не виконано; витрати на wydanie і wykonanie decyzji o zobowiązaniu do powrotu виключено.",
          sourceLocator: "Art. 56",
        },
        {
          kind: "practical-inference",
          text: "Art. 56 передбачає можливість судового позову про zwrot kosztów, а не автоматичне стягнення лише через факт невиконання zaproszenie.",
          sourceLocator: "Art. 56",
        },
      ],
      summary:
        "Art. 56 пов’язує невиконання зобов’язань zapraszający із можливістю судового стягнення витрат, які держава або інший суб’єкт реально поніс, виконуючи свої законні обов’язки.",
      rules: [
        {
          locator: "Art. 56 у zw. z Art. 51 ust. 2 pkt 3",
          explanation:
            "Спочатку встановіть, яке саме зобов’язання щодо pobyt, zakwaterowanie, wyżywienie, повернення або транзиту не виконано і які витрати виникли.",
        },
        {
          locator: "Art. 56",
          explanation:
            "Вимога реалізується przed sądem; кошти wydanie і wykonanie decyzji o zobowiązaniu do powrotu прямо не входять до цього відшкодування.",
        },
      ],
      legalEffect:
        "Норма створює можливу майнову вимогу до запрошуючого в суді. Вона не змінює автоматично статус cudzoziemiec і не є самостійною підставою для odmowa wizy.",
      foreignersCase:
        "Зберіть zaproszenie, докази невиконаного zobowiązanie, рахунки та акти виконання державного обов’язку; відокремте допустимі витрати від виключених Art. 56.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 57 ust. 1 делегує міністру внутрішніх справ визначити wzory zaproszenia і заяви на wpis та wysokość środków, які має мати zapraszający; ust. 2 встановлює критерії читабельності, повноти й розрахунку коштів.",
          sourceLocator: "Art. 57 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Конкретний розмір коштів треба брати з rozporządzenie, прийнятого на виконання Art. 57, а не виводити з самої статті.",
          sourceLocator: "Art. 57 ust. 1 pkt 2; ust. 2 pkt 3",
        },
      ],
      summary:
        "Art. 57 не встановлює саму суму коштів, а доручає підзаконному акту визначити формуляри та необхідний фінансовий рівень для витрат на pobyt, житло, харчування і повернення або транзит.",
      rules: [
        {
          locator: "Art. 57 ust. 1 pkt 1–2",
          explanation:
            "Міністр внутрішніх справ визначає зразки zaproszenie та заяви, а також kwota środków, яку повинен мати zapraszający.",
        },
        {
          locator: "Art. 57 ust. 2 pkt 1–3",
          explanation:
            "Rozporządzenie має забезпечити повноту формулярів і врахувати необхідні витрати, можливе розрізнення за місцем житла, тривалістю pobyt і родинним зв’язком.",
        },
      ],
      legalEffect:
        "Стаття визначає межі нормотворчої делегації. Для оцінки фінансової умови в конкретній справі потрібні Art. 53 і чинне rozporządzenie; сама Art. 57 не підтверджує достатність коштів.",
      foreignersCase:
        "Використовуйте актуальний формуляр і перевірте суму за чинним rozporządzenie, узгодивши її з тривалістю pobyt, місцем zakwaterowanie та родинним зв’язком.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-58",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 58 встановлює, що cudzoziemiec може отримати wizę Schengen або wizę krajową.",
          sourceLocator: "Art. 58",
        },
        {
          kind: "practical-inference",
          text: "Вибір типу wiza визначає подальші спеціальні правила; сама можливість, сформульована в Art. 58, не є безумовним правом на її видачу.",
          sourceLocator: "Art. 58",
        },
      ],
      summary:
        "Art. 58 вводить два види віз, передбачені цією частиною закону: wiza Schengen і wiza krajowa.",
      rules: [
        {
          locator: "Art. 58",
          explanation:
            "Спочатку визначте, про яку з двох віз ідеться; умови, компетенцію, документи та відмови далі регулюють окремі статті і Wspólnotowy Kodeks Wizowy.",
        },
      ],
      legalEffect:
        "Стаття визначає види віз, але не гарантує видачу. Наявність візи також не відповідає автоматично на окреме питання про prawo do pracy.",
      foreignersCase:
        "У справі зафіксуйте тип wiza, її cel, кількість в’їздів і строк; після цього застосовуйте правила саме для wiza Schengen або wiza krajowa.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-59",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 59 ust. 1 визначає, що wiza krajowa дозволяє в’їзд і безперервний або кілька послідовних pobyt на території RP загально довше 90 днів у період чинності візи; ust. 2 пов’язує період pobyt із cel pobytu, а ust. 3 обмежує okres ważności одним роком.",
          sourceLocator: "Art. 59 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Okres ważności wizy і дозволена кількість днів pobyt — різні параметри; їх треба читати разом із наклейкою та конкретним cel.",
          sourceLocator: "Art. 59 ust. 1–3",
        },
      ],
      summary:
        "Art. 59 описує функцію wiza krajowa: вона охоплює в’їзд і побyt понад 90 днів сумарно в межах своєї чинності, але період побиту визначається відповідно до заявленої мети, а строк чинності не може перевищувати року.",
      rules: [
        {
          locator: "Art. 59 ust. 1",
          explanation:
            "Віза може передбачати один безперервний або кілька послідовних pobyt; їхня сумарна тривалість має бути понад 90 днів і залишатися в періоді чинності візи.",
        },
        {
          locator: "Art. 59 ust. 2–3",
          explanation:
            "Орган визначає дозволений період у межах ust. 1 відповідно до cel pobytu, але okres ważności wiza krajowa не може перевищити 1 року.",
        },
      ],
      legalEffect:
        "Чинна wiza krajowa створює візову підставу для в’їзду і побиту лише в межах зазначених строків, кількості в’їздів і мети. Вона не скасовує прикордонних умов і не є універсальним дозволом на роботу.",
      foreignersCase:
        "Зіставте на наклейці typ wiza, okres ważności, кількість в’їздів і dozwolony okres pobytu з фактичними датами та cel; не рахуйте весь строк чинності як дозволені дні.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 61 передбачає видачу міністром закордонних справ документів, що підтверджують виконання функцій членами дипломатичних місій і консульських установ та прирівняними до них особами, а членам їхніх сімей, які ведуть спільне gospodarstwo domowe, — документів, що визначають їхній status.",
          sourceLocator: "Art. 61",
        },
        {
          kind: "practical-inference",
          text: "Йдеться про спеціальні документи для дипломатичного або прирівняного статусу, а не про звичайну procedura видачі wiza для будь-якого cudzoziemiec.",
          sourceLocator: "Art. 61",
        },
      ],
      summary:
        "Art. 61 регулює спеціальні документи для членів дипломатичних місій, консульських установ та осіб із прирівняними привілеями й імунітетами, а також для членів їхніх сімей, які проживають разом.",
      rules: [
        {
          locator: "Art. 61",
          explanation:
            "Міністр закордонних справ видає документ про виконання функцій самій особі та документ про status члену сім’ї, який залишається з нею у wspólnota domowa.",
        },
      ],
      legalEffect:
        "Документ Art. 61 є спеціальним підтвердженням функції або статусу; його дія та пов’язані привілеї не поширюються на осіб поза названими категоріями.",
      foreignersCase:
        "Перевірте дипломатичний статус, документ MFA і сімейний зв’язок та wspólnota domowa; не замінюйте цей документ звичайною wiza або kartą pobytu.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-62",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 62 встановлює, що документи, про які йдеться в Art. 61, уповноважують на в’їзд на територію RP і pobyt на цій території.",
          sourceLocator: "Art. 62 у zw. z Art. 61",
        },
        {
          kind: "practical-inference",
          text: "Підставою є саме належний і чинний документ спеціального статусу; Art. 62 не поширюється на будь-який документ, який лише зовні схожий на нього.",
          sourceLocator: "Art. 62",
        },
      ],
      summary:
        "Art. 62 надає документам Art. 61 функцію підстави для в’їзду і побиту на території Польщі.",
      rules: [
        {
          locator: "Art. 62",
          explanation:
            "Спочатку встановіть, що документ справді належить до документів Art. 61; лише тоді діє спеціальна підстава в’їзду і pobyt.",
        },
      ],
      legalEffect:
        "Чинний документ Art. 61 може підтверджувати право в’їзду та pobyt у межах спеціального режиму. Стаття не створює окремого права на pracę для осіб, які не мають відповідної підстави.",
      foreignersCase:
        "Перевірте вид, строк і власника документа, його зв’язок із функцією або status за Art. 61 та фактичні дати в’їзду й pobyt.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 63 делегує міністрам закордонних і внутрішніх справ визначити в rozporządzenie документи та їх wzory для осіб Art. 61, а також позначення wiz Schengen і wiz krajowych, що видаються цим особам.",
          sourceLocator: "Art. 63 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Підзаконний акт деталізує документи і позначення з урахуванням міжнародних угод та звичаїв; Art. 63 сама не видає конкретний документ.",
          sourceLocator: "Art. 63 pkt 1–3",
        },
      ],
      summary:
        "Art. 63 встановлює делегацію для оформлення документів дипломатичного і прирівняного статусу, їхніх зразків та спеціальних позначень віз.",
      rules: [
        {
          locator: "Art. 63 pkt 1–3",
          explanation:
            "Rozporządzenie має визначити документи для членів місій, консульств, прирівняних осіб і їхніх сімей, wzory та oznaczenie віз, з урахуванням міжнародних правил.",
        },
      ],
      legalEffect:
        "Стаття визначає межі технічного регулювання спеціального режиму. Для встановлення конкретного виду документа чи позначення потрібно відкрити відповідне rozporządzenie.",
      foreignersCase:
        "Зіставте фактичну функцію особи з документом і його wzór, перевірте міжнародну підставу та правильне oznaczenie wiza, якщо її видано.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-64",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 64 ust. 1–3 визначає документи для віз за Art. 60 ust. 1 pkt 5, 5a і 6: zezwolenie na pracę або виняток з нього, зареєстроване oświadczenie o powierzeniu pracy та zaświadczenie про внесений до ewidencji wniosek про zezwolenie na pracę sezonową.",
          sourceLocator: "Art. 64 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Art. 64 ust. 4–7 прив’язує okres pobytu за робочою візою до строку відповідного документа, обмежує його типом візи, а для pkt 5a встановлює максимум 9 місяців у році з урахуванням обмежень Schengen.",
          sourceLocator: "Art. 64 ust. 4–7",
        },
      ],
      summary:
        "Art. 64 пов’язує окремі робочі цілі візи з доказом допуску до праці: zezwolenie na pracę, oświadczenie о дорученні роботи або заświadczenie для роботи сезонної. Тривалість pobytu за візою не може бути довшою за строк підтвердного документа і межі відповідного типу wiza.",
      rules: [
        {
          locator: "Art. 64 ust. 1–3",
          explanation:
            "Для Art. 60 ust. 1 pkt 6 подається zezwolenie na pracę за названими положеннями закону про powierzanie pracy, якщо дозвіл не є потрібним; для pkt 5 — oświadczenie, внесене до ewidencja; для pkt 5a — заświadczenie про сезонний wniosek, внесений до ewidencja.",
        },
        {
          locator: "Art. 64 ust. 4–6",
          explanation:
            "Okres pobytu wiza відповідає періоду, вказаному у zezwolenie, oświadczenie або zaświadczenie, але не перевищує допустимого строку для даного типу wiza.",
        },
        {
          locator: "Art. 64 ust. 7",
          explanation:
            "Для візи за Art. 60 ust. 1 pkt 5a строк pobytu не може перевищувати 9 місяців у календарному році з урахуванням лімітів для wiza Schengen.",
        },
      ],
      legalEffect:
        "Виконання Art. 64 пов’язує можливість видачі і строк робочої wiza з конкретним документом про працю. Сам документ для візи не скасовує окремої перевірки права фактично виконувати роботу.",
      foreignersCase:
        "Встановіть точний pkt Art. 60, вид роботи, роботодавця, строк zezwolenie/oświadczenie/zaświadczenie і дату останнього допустимого pobyt; порівняйте їх із даними наклейки та окремим prawem do pracy.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-64a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 64a встановлює спеціальні умови для wiza krajowa з adnotacja „student” за Art. 60 ust. 1 pkt 9, а також для цілей pkt 13, 13a і 13b; умови відсилають, зокрема, до Art. 144, 144a, 151, 157a і 157g.",
          sourceLocator: "Art. 64a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: "Art. 64a ust. 6–9 зберігає окремі можливості продовження навчання або досліджень після рішень за Art. 144b чи Art. 151a та передбачає одноразове незастосування вимоги затвердження у визначеній справі.",
          sourceLocator: "Art. 64a ust. 6–9",
        },
      ],
      summary:
        "Art. 64a визначає спеціальні підстави для студентської, наукової, стажувальної та волонтерської wiza krajowa. Для „student” важливі умови Art. 144 і статус uczelnia; для науковця — umowa з zatwierdzona jednostka naukowa; для staż і wolontariat — умови та zatwierdzenie відповідних організаторів. Строк візи для staż не може перевищувати 6 місяців.",
      rules: [
        {
          locator: "Art. 64a ust. 1–1b",
          explanation:
            "Wiza з adnotacja „student” можлива за умов Art. 144 ust. 1 pkt 1 і pkt 2 lit. b, якщо uczelnia затверджена за Art. 144 або щодо незатверджуваної одиниці немає zakaz przyjmowania cudzoziemców за Art. 144a; для документа не-Art. 326a потрібна письмова інформація за Art. 326a ust. 4, а organ повідомляє rektor або kierownik.",
        },
        {
          locator: "Art. 64a ust. 2",
          explanation:
            "Для Art. 60 ust. 1 pkt 13 потрібні umowa за Art. 151 ust. 1 pkt 2 із затвердженою jednostka naukowa та умови Art. 151 ust. 1 pkt 1 lit. b і c.",
        },
        {
          locator: "Art. 64a ust. 3–5",
          explanation:
            "Для staż за pkt 13a потрібні умови Art. 157a і zatwierdzenie organizator stażu, а строк — необхідний для umowa, не довше 6 місяців; для wolontariat за pkt 13b потрібні умови Art. 157g і zatwierdzenie jednostka organizacyjna.",
        },
        {
          locator: "Art. 64a ust. 6–9",
          explanation:
            "Перехідні правила дозволяють продовжити навчання або дослідження у визначених одиницях після рішень Art. 144b чи Art. 151a та в одному випадку не застосовувати вимогу затвердження повторно.",
        },
      ],
      legalEffect:
        "Art. 64a не гарантує видачу візи лише через прийняття на навчання, umowa або назву стажу: потрібні всі відсильні умови й статус установи. Він також визначає спеціальні строки, повідомлення і перехідні винятки.",
      foreignersCase:
        "Для заяви визначте pkt Art. 60 і adnotacja, перевірте затвердження uczelnia/jednostka/organizator, потрібні umowa та строки; окремо зберігайте доказ для кожної умови Art. 144, 151, 157a або 157g.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-65",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65 ust. 1 містить обов’язкові підстави odmowa wydania wizy krajowej, зокрема wykaz, SIS, кошти, страхування, безпеку, неправдиві дані, непідтверджений cel або умови pobytu та обґрунтовані сумніви щодо виїзду чи правдивості мети; pkt 6 має status uchylony.",
          sourceLocator: "Art. 65 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: "Art. 65 ust. 1a–1e додає спеціальні підстави для student, науковця, staż і wolontariat, ust. 1f–1g регулює строки та доповнення документів, а ust. 3–4 містять винятки для окремих підстав відмови.",
          sourceLocator: "Art. 65 ust. 1a–1g; ust. 3–4",
        },
      ],
      summary:
        "Art. 65 визначає, коли wiza krajowa підлягає odmowa. Загальні підстави охоплюють записи в wykaz або SIS, кошти, страхування, безпеку, недостовірність, непідтверджену мету та сумнів щодо виїзду; для студентів, науковців, стажерів і волонтерів є додаткові інституційні та поведінкові підстави. Пункт 6 ust. 1 позначений як uchylony і не є чинною підставою.",
      rules: [
        {
          locator: "Art. 65 ust. 1 pkt 1–5, 7–10",
          explanation:
            "Відмова є обов’язковою за наявності хоча б однієї названої підстави: wykaz, SIS, недостатні кошти, відсутність страхування, безпека/інтерес RP, неправдиві дані чи документи, непідтверджений cel або умови, сумнів у виїзді чи достовірності заявленої мети.",
        },
        {
          locator: "Art. 65 ust. 1 pkt 6",
          explanation:
            "Pkt 6 прямо має позначку „uchylony” у corpus; його не можна використовувати як чинну підставу odmowa.",
        },
        {
          locator: "Art. 65 ust. 1a–1e",
          explanation:
            "Для student, науковця, staż і wolontariat закон додає підстави, пов’язані з діяльністю установи, її керівниками, боргами, ліквідацією, попереднім використанням візи не за метою та іншими прямо названими умовами.",
        },
        {
          locator: "Art. 65 ust. 1f–1g; ust. 2–4",
          explanation:
            "Для названих освітніх і дослідницьких віз передбачено строк 30 днів (або 5 днів після інформації Szef Urzędu) та 7 днів на доповнення; SIS враховується за ust. 2, а ust. 3–4 містять спеціальні винятки.",
        },
      ],
      legalEffect:
        "За наявності чинної przesłanka орган відмовляє у wiza krajowa; це рішення не можна обґрунтовувати uchylony pkt 6. Винятки ust. 3–4 не скасовують інші підстави, яких вони не охоплюють.",
      foreignersCase:
        "Перевірте кожен pkt Art. 65 за окремим доказом: wykaz/SIS, кошти, страховка, документи мети, правдивість, виїзд і статус установи; у разі uchylony pkt 6 вимагайте чинну правову підставу, а не старий шаблон.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 66 ust. 1 визначає konsul органом видачі або odmowa wizy krajowa, ust. 1a–1c допускає визначений шлях через ministra właściwego do spraw zagranicznych за поданням через konsul, а ust. 2 віддає видачу або odmowa wizy Schengen на кордоні komendant placówki Straży Granicznej.",
          sourceLocator: "Art. 66 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Art. 66 ust. 4–5 регулює візи для членів місій та сімей, ust. 6–7 позначені як uchylony, а ust. 8–9 дозволяють MFA визначати держави і додаткові умови для подання через нього.",
          sourceLocator: "Art. 66 ust. 4–9",
        },
      ],
      summary:
        "Art. 66 розподіляє компетенцію у візових справах: wiza krajowa зазвичай належить konsul, у визначених державою випадках — міністру закордонних справ через konsul, а wiza Schengen на кордоні — komendant placówki Straży Granicznej. Для дипломатичних категорій діє окремий порядок.",
      rules: [
        {
          locator: "Art. 66 ust. 1–1c",
          explanation:
            "MFA може діяти лише коли виконані умови, визначені розпорядженням за ust. 8; заяву в цьому випадку подають через konsul, а пряме подання міністру повертається з інформацією про właściwy tryb.",
        },
        {
          locator: "Art. 66 ust. 2–3a",
          explanation:
            "Wiza Schengen на кордоні належить komendant placówki Straży Granicznej; wiza krajowa видається за заявою на формулярі, а візи за Art. 60 ust. 1 pkt 24 і 24a — niezwłocznie з урахуванням Art. 67.",
        },
        {
          locator: "Art. 66 ust. 4–5",
          explanation:
            "Візи членам дипломатичних місій, консульств, прирівняним особам і сім’ям видає або відмовляє MFA чи konsul; для MFA потрібна nota, для konsul додатково wniosek.",
        },
        {
          locator: "Art. 66 ust. 6–9",
          explanation:
            "Ust. 6 і 7 мають status uchylony; MFA може розпорядженням визначити держави та додаткові умови подання заяв через нього.",
        },
      ],
      legalEffect:
        "Стаття визначає компетентний орган і канал подання, але не вирішує матеріальне питання видачі. Помилкове пряме подання або звернення не до того органу може мати процесуальний наслідок, передбачений текстом.",
      foreignersCase:
        "Спочатку класифікуйте wiza Schengen/krajowa, місце подання, cel і статус заявника; перевірте, чи діє спеціальний шлях MFA і чи подано заяву через właściwy konsul.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-66a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 66a передбачає, що у випадку Art. 66 ust. 1a дії за Art. 19 ust. 3 Wspólnotowy Kodeks Wizowy міністр закордонних справ здійснює через konsul, визначеного Art. 66 ust. 1b.",
          sourceLocator: "Art. 66a у zw. z Art. 66 ust. 1a–1b",
        },
        {
          kind: "practical-inference",
          text: "Через konsul реалізується конкретна процедурна дія Visa Code; це не означає автоматичної передачі konsul повноваження видати або відмовити у візі замість міністра.",
          sourceLocator: "Art. 66a",
        },
      ],
      summary:
        "Art. 66a уточнює канал виконання дій за Art. 19 ust. 3 Wspólnotowy Kodeks Wizowy у спеціальній процедурі, де заяву міністру подають через konsul.",
      rules: [
        {
          locator: "Art. 66a",
          explanation:
            "Перевірте, що справа справді підпадає під Art. 66 ust. 1a; тоді визначену дію MFA виконує konsul Art. 66 ust. 1b як процедурний посередник.",
        },
      ],
      legalEffect:
        "Норма організує виконання окремої дії у візовій процедурі й не змінює матеріальних умов видачі чи odmowa wizy.",
      foreignersCase:
        "Збережіть підтвердження, що дія за Art. 19 ust. 3 була проведена через właściwy konsul у межах процедури Art. 66 ust. 1a; не ототожнюйте цей канал із новим рішенням.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 67 ust. 1 вимагає, коли це потрібно за Art. 22 ust. 1 Wspólnotowy Kodeks Wizowy, щоб konsul через Szef Urzędu звернувся по opinię до centralnego organ іншої держави Schengen; ust. 2 встановлює для Szef Urzędu строк 10 днів на повідомлення konsul про sprzeciw.",
          sourceLocator: "Art. 67 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Десятиденний строк стосується передавання інформації про sprzeciw, а не гарантує позитивного рішення про wiza.",
          sourceLocator: "Art. 67 ust. 2",
        },
      ],
      summary:
        "Art. 67 регулює консультацію з центральним органом іншої держави Schengen перед видачею wiza Schengen, якщо така консультація потрібна за Visa Code.",
      rules: [
        {
          locator: "Art. 67 ust. 1",
          explanation:
            "Konsul не звертається напряму: запит до właściwy centralny organ іншої держави проходить за посередництвом Szef Urzędu.",
        },
        {
          locator: "Art. 67 ust. 2",
          explanation:
            "Szef Urzędu протягом 10 днів від отримання запиту повідомляє konsul, чи інший центральний орган sprzeciwił się видачі.",
        },
      ],
      legalEffect:
        "Стаття забезпечує обов’язкову міждержавну консультацію у визначених випадках. Вона не замінює оцінку всіх умов Visa Code і не означає, що відсутність sprzeciw автоматично видає візу.",
      foreignersCase:
        "У справі встановіть, чи потрібна консультація Art. 22 Visa Code, дату запиту через Szef Urzędu і зміст отриманої відповіді; не плутайте її з рішенням konsul.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-68",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 68 ust. 1–4 регулює відповідь Польщі іншій державі Schengen у процедурі Art. 22 ust. 1 або Art. 25 ust. 2 Wspólnotowy Kodeks Wizowy: Szef Urzędu відповідає за 7 днів після консультацій з визначеними органами, які передають дані за 5 днів; їхнє мовчання вважається згодою.",
          sourceLocator: "Art. 68 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Мовчазна згода в ust. 3 стосується органів, які мали передати інформацію, і не є автоматичним рішенням про видачу візи заявнику.",
          sourceLocator: "Art. 68 ust. 3",
        },
      ],
      summary:
        "Art. 68 встановлює польський механізм консультацій, коли інша держава Schengen просить думку польського centralny organ щодо wiza Schengen. Szef Urzędu перевіряє безпекові обставини разом із SG, Policja, ABW, AW і MFA та повідомляє про sprzeciw.",
      rules: [
        {
          locator: "Art. 68 ust. 1",
          explanation:
            "Szef Urzędu має 7 днів від отримання запиту, щоб повідомити centralny organ іншої держави, чи Польща sprzeciwia się видачі.",
        },
        {
          locator: "Art. 68 ust. 2",
          explanation:
            "Для оцінки обставин Art. 32 ust. 1 lit. a tiret vi Visa Code Szef Urzędu консультується з п’ятьма названими органами.",
        },
        {
          locator: "Art. 68 ust. 3",
          explanation:
            "SG, Policja, ABW, AW і MFA мають передати потрібні відомості за 5 днів; їх непередання вважається згодою саме цих органів на видачу візи.",
        },
        {
          locator: "Art. 68 ust. 4",
          explanation:
            "Ust. 2–3 також застосовуються при запиті на zgoda для wiza Schengen з обмеженою територіальною чинністю лише в Польщі за Art. 25 ust. 2 Visa Code.",
        },
      ],
      legalEffect:
        "Норма визначає обмін інформацією і строки між державами та органами. Вона не видає wiza і не звільняє іноземця від інших підстав відмови.",
      foreignersCase:
        "Зафіксуйте дату запиту іншої держави, консультації, п’ятиденні відповіді органів і остаточне повідомлення Szef Urzędu; окремо оцініть, чи йдеться про обмежену територіальну чинність.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-69",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 69 ust. 1–4 зобов’язує konsul звернутися до Szef Urzędu щодо обставин odmowa wiza Schengen за Art. 32 ust. 1 lit. a tiret ii або vi Visa Code для громадян держав, щодо яких потрібна думка польських органів; ust. 2 дає 10 днів, а ust. 3–4 встановлюють консультації.",
          sourceLocator: "Art. 69 ust. 1–4",
        },
        {
          kind: "statute-text",
          text: "Art. 69 ust. 5–7 дозволяє інші запити щодо wiza Schengen або wiza krajowa, встановлює 30-денний строк для спеціальної інформації та 20-денний строк для органів, з мовчазною згодою за ust. 7.",
          sourceLocator: "Art. 69 ust. 5–7",
        },
      ],
      summary:
        "Art. 69 регулює перевірку безпекових і спеціальних підстав відмови через Szef Urzędu. Обов’язковий запит існує для визначених громадян при wiza Schengen, а в інших випадках konsul може запитувати дані також щодо підстав Art. 65 і спеціальних освітніх, дослідницьких, стажувальних чи волонтерських віз.",
      rules: [
        {
          locator: "Art. 69 ust. 1–4",
          explanation:
            "Konsul звертається через Szef Urzędu; Szef передає інформацію за 10 днів після консультацій із SG, Policja, ABW, AW, MFA та, за потреби, іншим органом. До консультацій діє Art. 68 ust. 3.",
        },
        {
          locator: "Art. 69 ust. 5",
          explanation:
            "В інших випадках konsul може запитати щодо wiza Schengen за Art. 32 ust. 1 lit. a tiret ii або vi, wiza krajowa за Art. 65 ust. 1 pkt 5 або 8, або за Art. 65 ust. 1a чи 1c–1e.",
        },
        {
          locator: "Art. 69 ust. 6–7",
          explanation:
            "Інформація за ust. 5 pkt 3 передається за 30 днів; органи передають потрібні дані за 20 днів, а їх непередання вважається згодою на видачу візи.",
        },
      ],
      legalEffect:
        "Art. 69 створює консультаційну процедуру та строки, але сам Szef Urzędu не замінює орган, який приймає рішення про wiza. Відсутність заперечення в межах ust. 7 не дорівнює безумовному праву на візу.",
      foreignersCase:
        "Перевірте громадянство заявника, підставу запиту, адресатів консультацій і строки 10/20/30 днів; відокремте передану інформацію від decyzja konsul або MFA.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-70",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 70 ust. 1 дозволяє Szef Urzędu за своєчасним wniosek органу продовжити на 20 днів п’ятиденний строк для інформації про wiza Schengen або національну візу за названими підставами; ust. 1a дозволяє продовжити на 25 днів двадцятиденний строк Art. 69 ust. 7.",
          sourceLocator: "Art. 70 ust. 1–1a",
        },
        {
          kind: "statute-text",
          text: "Art. 70 ust. 2–3 встановлює максимальні строки відповіді Szef Urzędu — 30 або 55 днів — і обов’язок повідомити konsul про продовження.",
          sourceLocator: "Art. 70 ust. 2–3",
        },
      ],
      summary:
        "Art. 70 регулює лише продовження строків міжвідомчої перевірки у візовій справі. За належним запитом п’ятиденний строк може бути збільшений на 20 днів, двадцятиденний — на 25, а загальний строк відповіді Szef Urzędu може досягти 30 або 55 днів.",
      rules: [
        {
          locator: "Art. 70 ust. 1",
          explanation:
            "Запит на продовження п’ятиденного строку подається до його спливу і стосується інформації за Art. 69 про визначені підстави wiza Schengen або krajowa; продовження — 20 днів.",
        },
        {
          locator: "Art. 70 ust. 1a",
          explanation:
            "Запит до спливу 20-денного строку Art. 69 ust. 7 може дати продовження на 25 днів.",
        },
        {
          locator: "Art. 70 ust. 2–3",
          explanation:
            "За продовження або додаткове wyjaśniające postępowanie строк передачі konsul інформації становить не довше 30 днів або 55 днів у спеціальному випадку; про це повідомляють konsul.",
        },
      ],
      legalEffect:
        "Стаття змінює процесуальний календар консультацій, але не встановлює матеріальної підстави для видачі чи відмови у візі і не легалізує очікування заявника.",
      foreignersCase:
        "Побудуйте календар від дати запиту: первинний строк, своєчасність клопотання про продовження, новий максимум і повідомлення konsul; не рахуйте продовження як строк розгляду заяви за Art. 74a.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-70a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 70a встановлює відповідне застосування Art. 67, Art. 69 і Art. 70 під час розгляду заяв про видачу wiza міністром закордонних справ.",
          sourceLocator: "Art. 70a",
        },
        {
          kind: "practical-inference",
          text: "Це поширює консультаційні та строкові механізми на спеціальну компетенцію MFA, не скасовуючи вимог Art. 66 і не змінюючи самих матеріальних підстав.",
          sourceLocator: "Art. 70a у zw. z Art. 67, 69–70",
        },
      ],
      summary:
        "Art. 70a переносить механізми консультації, інформаційних запитів і продовження строків із Art. 67, 69 і 70 на заяви, які розглядає міністр закордонних справ.",
      rules: [
        {
          locator: "Art. 70a",
          explanation:
            "У справі MFA застосовуйте Art. 67, 69 і 70 odpowiednio: із потрібними коригуваннями до компетенції та каналу подання, визначених Art. 66.",
        },
      ],
      legalEffect:
        "Норма визначає процедурну сумісність правил для MFA і не є окремою підставою для wydanie або odmowa wiza.",
      foreignersCase:
        "Якщо рішення приймає MFA за Art. 66, перевірте, чи консультації та продовження строків проведено за відповідними Art. 67, 69 і 70, а не за довільним порядком.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-71",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 71 ust. 1 вимагає здійснювати обмін інформацією за Art. 67–70 електронними засобами; ust. 2 дозволяє письмову форму лише за надзвичайної неможливості електронного обміну або при обміні з органом Art. 69 ust. 3 pkt 6.",
          sourceLocator: "Art. 71 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Виняток стосується форми комунікації, а не звільняє органи від предмета запиту, доказування чи строків відповідної статті.",
          sourceLocator: "Art. 71 ust. 1–2",
        },
      ],
      summary:
        "Art. 71 встановлює технічну форму обміну інформацією у консультаціях Art. 67–70: основною є електронна комунікація, письмова допускається у двох прямо названих випадках.",
      rules: [
        {
          locator: "Art. 71 ust. 1",
          explanation:
            "Запити і відповіді за Art. 67–70 надсилаються засобами електронної комунікації.",
        },
        {
          locator: "Art. 71 ust. 2 pkt 1–2",
          explanation:
            "Письмова форма можлива, якщо надзвичайні обставини унеможливлюють електронний обмін, або якщо інформація обмінюється з іншим органом, названим у Art. 69 ust. 3 pkt 6.",
        },
      ],
      legalEffect:
        "Стаття упорядковує доказовий канал між органами. Неправильна форма може мати процесуальне значення, але Art. 71 сама не визначає результату візової заяви.",
      foreignersCase:
        "Збережіть електронний або допустимий письмовий слід запиту й відповіді, причину застосування письмової форми та дати; не підмінюйте офіційний обмін листом без підтвердження.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-72",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 72 вимагає, коли дані заявника на wiza krajowa є в SIS для odmowa wjazdu i pobytu, але існують причини видати візу, провести через Komendant Główny Policji консультації з державою, яка внесла запис, за Art. 27 rozporządzenie nr 2018/1861, і повідомити її про рішення або намір видати візу.",
          sourceLocator: "Art. 72 у zw. z Art. 27 rozporządzenie nr 2018/1861",
        },
        {
          kind: "practical-inference",
          text: "Наявність запису SIS запускає консультаційний механізм, але не перетворює його на автоматичну видачу або автоматичну відмову.",
          sourceLocator: "Art. 72",
        },
      ],
      summary:
        "Art. 72 регулює консультацію з державою Schengen, яка внесла дані cudzoziemiec до SIS для odmowa wjazdu i pobytu, коли польський орган все ж бачить підстави для видачі wiza krajowa.",
      rules: [
        {
          locator: "Art. 72",
          explanation:
            "MFA або konsul діє через Komendant Główny Policji: проводить консультацію з органом держави, що зробила wpis, і передає йому рішення або zamiar wydania wiza.",
        },
      ],
      legalEffect:
        "Стаття забезпечує узгодження польського рішення з державою, яка створила запис SIS. Вона не скасовує Art. 65 та інші умови wiza krajowa.",
      foreignersCase:
        "Встановіть вид SIS wpis, державу-ініціатора, дату консультації та зміст польського рішення/наміру; аналізуйте окремо причину запису і всі польські przesłanki.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-72a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 72a регулює дані SIS, внесені для цілей Art. 3 ust. 1 rozporządzenie nr 2018/1860: через Komendant Główny Policji organ консультується, повідомляє про рішення або повідомляє про zamiar/видачу залежно від того, чи супроводжується рішення państwa zakaz ponownego wjazdu.",
          sourceLocator: "Art. 72a pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Ключовою є відмінність між SIS-записом із zakaz ponownego wjazdu і без нього; різні підпункти передбачають різні інформаційні дії.",
          sourceLocator: "Art. 72a pkt 1–3",
        },
      ],
      summary:
        "Art. 72a встановлює три сценарії комунікації щодо SIS-даних, пов’язаних із рішеннями про повернення: консультація при zakaz ponownego wjazdu, повідомлення про рішення при такій забороні та повідомлення про намір або факт видачі, коли заборони немає.",
      rules: [
        {
          locator: "Art. 72a pkt 1",
          explanation:
            "Якщо запис пов’язаний із рішенням іншої держави з zakaz ponownego wjazdu, MFA або konsul просить цю державу провести консультацію за Art. 9 ust. 1 rozporządzenie nr 2018/1860.",
        },
        {
          locator: "Art. 72a pkt 2–3",
          explanation:
            "При забороні орган повідомляє про рішення щодо wiza krajowa; без заборони повідомляє про zamiar wydania або про її видачу.",
        },
      ],
      legalEffect:
        "Норма визначає міждержавні повідомлення й консультації, а не саму матеріальну оцінку візи. Вона не усуває інших підстав odmowa.",
      foreignersCase:
        "Отримайте дані про правову підставу SIS-запису та наявність zakaz ponownego wjazdu, потім перевірте, чи орган виконав правильну дію за pkt 1, 2 або 3.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-73",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 73 ust. 1 визначає, хто інформує інші держави Schengen про видачу wiza Schengen у випадках Art. 25 ust. 4 і Art. 31 ust. 1 Wspólnotowy Kodeks Wizowy; ust. 2 регулює повідомлення про wiza krajowa, а ust. 3–4 — передавання через Szef Urzędu та доступ визначених органів.",
          sourceLocator: "Art. 73 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Розподіл органів у Art. 73 залежить від того, хто видав візу і чи вона видана на кордоні; це інформаційна функція, не повторний розгляд заяви.",
          sourceLocator: "Art. 73 ust. 1–4",
        },
      ],
      summary:
        "Art. 73 розподіляє обов’язки з повідомлення про видані візи: MFA або konsul інформують у визначених випадках, при прикордонній wiza Schengen — Komendant Główny Straży Granicznej, а Szef Urzędu передає інформацію компетентним польським службам.",
      rules: [
        {
          locator: "Art. 73 ust. 1",
          explanation:
            "Для віз, виданих MFA або konsul, діє компетенція MFA у випадках Art. 25 ust. 4/Art. 31 ust. 1; для wiza Schengen на кордоні — Komendant Główny Straży Granicznej у випадках Art. 25 ust. 4 і Art. 31 ust. 1.",
        },
        {
          locator: "Art. 73 ust. 2–3",
          explanation:
            "Якщо для wiza krajowa виникають обставини Art. 31 ust. 1, konsul або MFA інформує Szef Urzędu; інформація про wiza Schengen передається через нього.",
        },
        {
          locator: "Art. 73 ust. 4",
          explanation:
            "Szef Urzędu надає дані SG, Policja, ABW, AW і MFA.",
        },
      ],
      legalEffect:
        "Стаття створює канал повідомлення та внутрішнього доступу до інформації про візи. Вона не змінює чинність уже виданої візи і не є підставою для її скасування сама по собі.",
      foreignersCase:
        "Зафіксуйте орган, який видав візу, випадок Art. 25/31 і маршрут повідомлення; не трактуйте обмін даними як нову decyzja щодо legal stay.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-74",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 74 ust. 1 визначає Szef Urzędu органом, який збирає інформацію про wizy Schengen, видані органами інших держав Schengen, у випадках Art. 25 ust. 4 і Art. 31 ust. 1 Wspólnotowy Kodeks Wizowy; ust. 2 перелічує польські органи, яким він її надає.",
          sourceLocator: "Art. 74 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Збір і передавання інформації не означають, що Szef Urzędu видає або змінює візу іншої держави.",
          sourceLocator: "Art. 74 ust. 1–2",
        },
      ],
      summary:
        "Art. 74 визначає польський centralny obieg інформації про wizy Schengen, видані іншими державами Schengen, і перелік служб, які можуть отримати ці дані.",
      rules: [
        {
          locator: "Art. 74 ust. 1",
          explanation:
            "Szef Urzędu збирає інформацію лише у випадках, на які посилаються Art. 25 ust. 4 і Art. 31 ust. 1 Visa Code.",
        },
        {
          locator: "Art. 74 ust. 2",
          explanation:
            "Дані надаються Komendant Główny Straży Granicznej, Komendant Główny Policji, Szef ABW, Szef AW і MFA.",
        },
      ],
      legalEffect:
        "Норма організує інформаційний ресурс для польських органів і не є самостійною підставою для в’їзду, pobyt або odmowa wiza.",
      foreignersCase:
        "Якщо інша держава видала Schengen wiza, перевірте її реквізити та релевантність Art. 25/31; не називайте запис у польській інформаційній системі новим дозволом.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-74a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 74a ust. 1 встановлює 15-денний строк для wydanie або odmowa wizy krajowa від дня подання заяви, якщо її не визнано niedopuszczalny; ust. 2 допускає 30 днів, а за запитом щодо Art. 65 ust. 1 pkt 5 або 8 — до 5 днів від передання Szef Urzędu інформації; ust. 3 виключає цей строк для Art. 60 ust. 1 pkt 18a і 21.",
          sourceLocator: "Art. 74a ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Строк є процесуальною межею розгляду і не перетворює подану заяву на автоматично схвалену wiza.",
          sourceLocator: "Art. 74a ust. 1–3",
        },
      ],
      summary:
        "Art. 74a регулює строки розгляду заяви на wiza krajowa: базово 15 днів, у виправданих випадках до 30, а у визначеній інформаційній процедурі — до 5 днів після отримання даних Szef Urzędu. Для двох цілей Art. 60 уст. 1 строк не застосовується.",
      rules: [
        {
          locator: "Art. 74a ust. 1",
          explanation:
            "Відлік іде від подання заяви, якщо wniosek не визнано недопустимим; результатом у строк може бути як wydanie, так і odmowa.",
        },
        {
          locator: "Art. 74a ust. 2",
          explanation:
            "За обґрунтованих обставин строк може бути 30 днів; якщо MFA або konsul запитує Szef Urzędu щодо Art. 65 ust. 1 pkt 5 або 8, застосовується строк до 5 днів від передання інформації.",
        },
        {
          locator: "Art. 74a ust. 3",
          explanation:
            "Базовий строк не застосовується до wiza krajowa за Art. 60 ust. 1 pkt 18a і 21.",
        },
      ],
      legalEffect:
        "Стаття визначає календар розгляду, але не матеріальний результат і не право залишатися після завершення іншої підстави pobyt.",
      foreignersCase:
        "Зафіксуйте дату повного подання, чи wniosek був dopuszczalny, повідомлення про продовження та дату інформації Szef Urzędu; окремо перевірте, чи мета входить до винятків ust. 3.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-74b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 74b дозволяє MFA доручити konsul Art. 66 ust. 1b провести rozmowa з cudzoziemiec, якщо під час розгляду заяви на wiza krajowa, wiza Schengen або wniosek o ponowne rozpatrzenie у випадку Art. 66 ust. 1a потрібна співбесіда за Art. 21 ust. 8 Wspólnotowy Kodeks Wizowy.",
          sourceLocator: "Art. 74b у zw. z Art. 21 ust. 8 Wspólnotowy Kodeks Wizowy",
        },
        {
          kind: "practical-inference",
          text: "Доручення співбесіди konsul є способом проведення доказової дії і не означає позитивного або негативного рішення наперед.",
          sourceLocator: "Art. 74b",
        },
      ],
      summary:
        "Art. 74b врегульовує, хто може провести співбесіду у спеціальній справі MFA, коли Visa Code вимагає rozmowa з cudzoziemiec.",
      rules: [
        {
          locator: "Art. 74b",
          explanation:
            "MFA може polecić відповідному konsul провести rozmowa у справі wydanie wiza або ponowne rozpatrzenie; підстава необхідності — Art. 21 ust. 8 Visa Code.",
        },
      ],
      legalEffect:
        "Норма визначає організацію співбесіди та не змінює матеріальні умови візи, обов’язок доказування або остаточний засіб оскарження.",
      foreignersCase:
        "Перевірте, хто направив на rozmowa, в межах якої заяви, який konsul її провів і чи відповіді стосувалися cel та умов wiza; не називайте сам виклик відмовою.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 75 ust. 1 вимагає оформити odmowa wydania wizy krajowej як decyzja, а ust. 2 — на formularz із зазначенням органу, сторони, rozstrzygnięcie, правової підстави й причин, інформації про wniosek o ponowne rozpatrzenie, дати, підпису та pieczęć.",
          sourceLocator: "Art. 75 ust. 1–2 pkt 1–9",
        },
        {
          kind: "practical-inference",
          text: "Відмова має бути перевірена за формуляром і конкретними причинами; загальна назва „wiza odmówiona” не замінює правову підставу та pouczenie.",
          sourceLocator: "Art. 75 ust. 2 pkt 3–6",
        },
      ],
      summary:
        "Art. 75 встановлює форму і мінімальний зміст decyzja про odmowa wizy krajowa. У документі мають бути вказані правова підстава, конкретні причини та порядок wniosek o ponowne rozpatrzenie.",
      rules: [
        {
          locator: "Art. 75 ust. 1",
          explanation:
            "Odmowa wizy krajowa є decyzja, а не просто повідомленням чи усною відповіддю.",
        },
        {
          locator: "Art. 75 ust. 2 pkt 1–5",
          explanation:
            "Формуляр містить organ, stronę, rozstrzygnięcie, podstawę prawną odmowy і określenie powodów odmowy.",
        },
        {
          locator: "Art. 75 ust. 2 pkt 6–9",
          explanation:
            "Указуються właściwy wniosek o ponowne rozpatrzenie та tryb його подання, місце і дата, підпис уповноваженої особи та кругла pieczęć urzędowa.",
        },
      ],
      legalEffect:
        "Належна decyzja фіксує відмову та відкриває передбачений законом засіб ponowne rozpatrzenie. Art. 75 не визначає, чи конкретна підстава Art. 65 справді доведена — це має випливати з рішення і матеріалів.",
      foreignersCase:
        "Перевірте дату doręczenie, орган, Art. 65 або іншу вказану правову підставу, конкретні причини та pouczenie; не пропустіть окремий строк Art. 76.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 76 ust. 1 розрізняє засоби оскарження odmowa wizy: wniosek o ponowne rozpatrzenie до konsul або MFA, а від рішення komendant placówki Straży Granicznej — odwołanie до Komendant Główny Straży Granicznej; ust. 2–3 встановлюють 14 днів на подання і 14 днів на розгляд.",
          sourceLocator: "Art. 76 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Art. 76 ust. 4–6 регулює formularz рішення, яким відмову залишено в силі, додаткове обґрунтування та судове pouczenie для wiza Schengen, а також передавання konsul цифрових копій документів MFA у випадку Art. 66 ust. 1a.",
          sourceLocator: "Art. 76 ust. 4–6",
        },
      ],
      summary:
        "Art. 76 визначає правильний засіб після odmowa wiza і строки: для рішення konsul або MFA — wniosek o ponowne rozpatrzenie, для рішення прикордонного коменданта — odwołanie до Komendant Główny Straży Granicznej. Подати потрібно протягом 14 днів від doręczenie.",
      rules: [
        {
          locator: "Art. 76 ust. 1–1a",
          explanation:
            "Перевірте, хто видав рішення. Для konsul/MFA подається wniosek o ponowne rozpatrzenie до того самого органу; у спеціальному випадку MFA — через консул Art. 66 ust. 1b. Для SG діє odwołanie до Komendant Główny Straży Granicznej.",
        },
        {
          locator: "Art. 76 ust. 2–3",
          explanation:
            "Строк подання — 14 днів від doręczenie odmowa; wniosek розглядають у 14-денний строк.",
        },
        {
          locator: "Art. 76 ust. 4–5",
          explanation:
            "Рішення про utrzymanie odmowa в силі оформлюється на formularz; для wiza Schengen воно додатково містить істотні факти, судове pouczenie, wpis і можливість допомоги.",
        },
        {
          locator: "Art. 76 ust. 6",
          explanation:
            "Konsul передає MFA цифрові копії заяви, документа подорожі та документів у випадку Art. 66 ust. 1a.",
        },
      ],
      legalEffect:
        "Норма відкриває конкретний адміністративний засіб і строк, але не гарантує зміну odmowa. Неправильне змішування odwołanie з wniosek o ponowne rozpatrzenie може спричинити процесуальний ризик.",
      foreignersCase:
        "Від дати doręczenie порахуйте 14 днів, визначте орган-рішення і назвіть правильний засіб; долучіть заперечення до причин Art. 75 та всі докази, які не були оцінені.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77 ust. 1–1a визначає особисте подання wniosek o wydanie wizy krajowej, його дані, фотографію, документи про cel і умови pobytu, кошти, страхування, достовірність наміру виїзду та представництво неповнолітніх і недієздатних; ust. 2, 4 і 10–12 мають позначку uchylony.",
          sourceLocator: "Art. 77 ust. 1–1a; ust. 2, 4, 10–12",
        },
        {
          kind: "statute-text",
          text: "Art. 77 ust. 5–9 і 9a встановлює критерії документа подорожі, винятки для термінових або особистих обставин, відмітку про прийняття, пріоритет для окремої роботи та науки і досліджень.",
          sourceLocator: "Art. 77 ust. 5–9a, 13",
        },
      ],
      summary:
        "Art. 77 містить повний формальний і доказовий каркас заяви на wiza krajowa. Потрібні формуляр із даними про особу, документ подорожі, мету, кошти, страхування, повернення й працю, актуальна фотографія та підтвердні документи; для окремих категорій діють правила представництва і пріоритету.",
      rules: [
        {
          locator: "Art. 77 ust. 1 pkt 1–3",
          explanation:
            "Заява містить ідентифікаційні дані, дані документа подорожі, адресу e-mail, навчання/роботу, історію віз, cel і плановані дати; додаються фотографія та документи про cel, кошти, страховку, намір виїзду й інші заявлені обставини.",
        },
        {
          locator: "Art. 77 ust. 1a",
          explanation:
            "За małoletni діють батьки або opiekun, за повністю ubezwłasnowolniony — opiekun, за małoletni bez opieki — kurator або інший представник, призначений компетентним органом.",
        },
        {
          locator: "Art. 77 ust. 2, 4, 10–12",
          explanation:
            "Ці положення мають статус „uchylony” у corpus і не створюють чинних додаткових вимог.",
        },
        {
          locator: "Art. 77 ust. 5–8",
          explanation:
            "Документ подорожі має бути чинним щонайменше 3 місяці після строку візи, мати 2 чисті сторінки та бути виданим за останні 10 років; перший критерій можна пропустити у pilny випадок, а особисте подання — у визначених особистих обставинах.",
        },
        {
          locator: "Art. 77 ust. 9a, 13",
          explanation:
            "Konsul враховує пріоритет для працівників у переліках Art. 28–29 закону про powierzanie pracy; заяви для szkoła doktorska або діяльності наукової також розглядаються з пріоритетом за умов ust. 13.",
        },
      ],
      legalEffect:
        "Належна заява і документи запускають оцінку wiza, але не доводять автоматично виконання Art. 65 і не гарантують видачу. Uchylony ust. не можна використовувати як чинну вимогу.",
      foreignersCase:
        "Зробіть checklist за Art. 77: формуляр, фото, паспорт, cel, кошти, страховка, повернення, робочі документи, представництво та дати; відмічайте окремо, які вимоги прямо не застосовуються через uchylony ust.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77a зобов’язує konsul Art. 66 ust. 1b передати MFA цифрову копію wniosek, документа подорожі та документів; у заяві на wiza Schengen додатково передаються pobrane odciski linii papilarnych, якщо їх взято.",
          sourceLocator: "Art. 77a",
        },
        {
          kind: "practical-inference",
          text: "Норма регулює передавання матеріалів між konsul і MFA та не є окремою підставою для видачі або odmowa візи.",
          sourceLocator: "Art. 77a",
        },
      ],
      summary:
        "Art. 77a визначає, які матеріали konsul передає міністру закордонних справ у процедурі Art. 66 ust. 1a, і коли до них додаються відбитки для wiza Schengen.",
      rules: [
        {
          locator: "Art. 77a",
          explanation:
            "Передаються цифрові копії заяви, документа подорожі та поданих документів; odciski передаються лише у справі wiza Schengen, якщо їх було pobrane.",
        },
      ],
      legalEffect:
        "Передавання забезпечує розгляд MFA на основі повного досьє. Воно не змінює зміст заяви й не означає, що віза буде видана.",
      foreignersCase:
        "У спеціальній процедурі MFA перевірте, що цифрові копії всіх документів і, за наявності, odciski передані через właściwy konsul; зберігайте підтвердження передачі.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77b ust. 1 передбачає opłaty за прийняття і розгляд MFA заяви на wiza krajowa або wniosku o ponowne rozpatrzenie wizy Schengen чи krajowa; ust. 2 виключає візи Art. 66 ust. 4, ust. 3 визначає розмір як відповідний opłata konsularna з можливими звільненнями, а ust. 4 — збір через konsul у випадку Art. 66 ust. 1a.",
          sourceLocator: "Art. 77b ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Оплата є процесуальною умовою роботи з відповідною заявою, але не купує позитивного рішення і не скасовує міжнародне або konsularne zwolnienie.",
          sourceLocator: "Art. 77b ust. 1–4",
        },
      ],
      summary:
        "Art. 77b регулює збори за заяви, які розглядає MFA, та за ponowne rozpatrzenie візових рішень. Сума відповідає консульському збору за конкретний випадок, але дипломатичні візи і визначені міжнародними або консульськими правилами звільнення мають окремий режим.",
      rules: [
        {
          locator: "Art. 77b ust. 1–2",
          explanation:
            "Збір стягується за MFA wniosek на wiza krajowa і за wniosek o ponowne rozpatrzenie wizy Schengen або krajowa, але не за візи Art. 66 ust. 4.",
        },
        {
          locator: "Art. 77b ust. 3",
          explanation:
            "Сума відповідає opłata konsularna для конкретного випадку, якщо міжнародне зобов’язання або Prawo konsularne не звільняє громадянина від сплати.",
        },
        {
          locator: "Art. 77b ust. 4",
          explanation:
            "У випадку Art. 66 ust. 1a збір приймає konsul Art. 66 ust. 1b, а його збір і zwrot регулює Prawo konsularne.",
        },
      ],
      legalEffect:
        "Норма визначає фінансову сторону процедури та можливий zwrot за правилами Prawo konsularne; сплата не гарантує wydanie wiza, а невраховане звільнення не повинно перетворюватися на борг.",
      foreignersCase:
        "Визначте орган і вид заяви, перевірте Art. 66 ust. 4, міжнародне звільнення та чинний konsularna opłata; збережіть підтвердження сплати або підставу zwolnienie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77c ust. 1 дозволяє на вимогу konsul встановити строк подання заяви на wiza krajowa дистанційно із засобами, що забезпечують зв’язок і ідентифікацію; для цього можуть оброблятися визначені Art. 13 дані до призначеного дня. Ust. 2 поширює правило на представників із Art. 77 ust. 1a, ust. 3 — на wiza Schengen.",
          sourceLocator: "Art. 77c ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Дистанційне встановлення terminu організує запис на подання й обмежене зберігання даних для ідентифікації; воно не є прийняттям заяви або рішенням про візу.",
          sourceLocator: "Art. 77c ust. 1–3",
        },
      ],
      summary:
        "Art. 77c регулює дистанційне призначення дати подання візової заяви на вимогу konsul. Засоби зв’язку мають дозволити ідентифікацію, а для неповнолітніх, опікунів і kurator застосовуються спеціальні правила представництва.",
      rules: [
        {
          locator: "Art. 77c ust. 1",
          explanation:
            "Termin ustalaється електронно лише на żądanie konsul; допускається обробка даних Art. 13 pkt 1–8, 11, 12, 19–21 і 24 до призначеної дати для встановлення особи.",
        },
        {
          locator: "Art. 77c ust. 2",
          explanation:
            "Для małoletni дата узгоджується з батьками або opiekun, для повністю ubezwłasnowolniony — з opiekun, для małoletni bez opieki — з kurator або іншим представником; відповідні дані можуть оброблятися також про них.",
        },
        {
          locator: "Art. 77c ust. 3",
          explanation:
            "Ті самі правила відповідно застосовуються до заяви на wiza Schengen.",
        },
      ],
      legalEffect:
        "Призначення terminu упорядковує доступ до подання і тимчасову ідентифікацію, але не замінює osobiste złożenie, документи Art. 77 чи розгляд підстав wiza.",
      foreignersCase:
        "Збережіть офіційне повідомлення про termin, канал ідентифікації та особу представника; відокремте дату запису від дати фактичного złożenie wniosku.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-78",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 78 ust. 1–2 встановлює, що wiza krajowa розміщується як naklejka wizowa у dokument podróży, а у спеціально обґрунтованому випадку — на osobny blankiet wizowy із даними та фотографією; ust. 3–4 визначають дії konsul для віз MFA і за Art. 66 ust. 1a.",
          sourceLocator: "Art. 78 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Наклейка або blankiet є способом оформлення вже виданої візи; сам формат не розширює строк, cel чи право на роботу.",
          sourceLocator: "Art. 78 ust. 1–2",
        },
      ],
      summary:
        "Art. 78 регулює фізичне розміщення wiza krajowa та спеціальний blankiet, а також розподіляє технічні дії між MFA і konsul.",
      rules: [
        {
          locator: "Art. 78 ust. 1–2",
          explanation:
            "Звичайне місце naklejka wizowa — документ подорожі; окремий blankiet можливий у особливо обґрунтованому інтересі cudzoziemiec і містить дані та актуальну фотографію.",
        },
        {
          locator: "Art. 78 ust. 3–4",
          explanation:
            "Для визначених віз MFA naklejka та дані оформлює konsul Art. 66 ust. 1b; у випадку Art. 66 ust. 1a він також виконує дії за Art. 27 і 29 Visa Code.",
        },
      ],
      legalEffect:
        "Стаття визначає спосіб документального підтвердження wiza та технічного виконання, але не створює нової візи і не замінює рішення органу.",
      foreignersCase:
        "Перевірте відповідність naklejka/blankiet особі, документу подорожі, строкам і типу wiza; для MFA-віз встановіть, який konsul виконав технічну дію.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 79 ust. 1–2 регулює unieważnienie помилкової naklejka wizowa wizy krajowa до або після її розміщення та заміну новою; ust. 3 передбачає нову наклейку у заміненому dokument podróży через wojewoda, ust. 4 — виправлення wiza Schengen комендантом кордону, а ust. 5–6 — спеціальні дії konsul.",
          sourceLocator: "Art. 79 ust. 1–6",
        },
        {
          kind: "practical-inference",
          text: "Заміна помилкової наклейки виправляє документальну помилку і не є новим рішенням про продовження візи або зміну її cel.",
          sourceLocator: "Art. 79 ust. 1–4",
        },
      ],
      summary:
        "Art. 79 встановлює порядок виправлення помилки у візовій наклейці: її unieważniaють і наносять нову, а при заміні паспорта нову наклейку wiza krajowa розміщує właściwy wojewoda на заяву cudzoziemiec.",
      rules: [
        {
          locator: "Art. 79 ust. 1–2",
          explanation:
            "Помилку до розміщення виправляють через unieważnienie naklejka; після розміщення MFA, konsul або komendant placówki Straży Granicznej unieważnia стару і розміщує нову.",
        },
        {
          locator: "Art. 79 ust. 3–4",
          explanation:
            "При заміні документа подорожі wojewoda за місцем pobyt, на wniosek, ставить нову наклейку wiza krajowa; помилку wiza Schengen на кордоні виправляє комendant placówki Straży Granicznej.",
        },
        {
          locator: "Art. 79 ust. 5–6",
          explanation:
            "Для віз MFA діє спеціальна компетенція konsul Art. 66 ust. 1b, а дії за Art. 28 Visa Code у випадку Art. 66 ust. 1a виконує цей konsul.",
        },
      ],
      legalEffect:
        "Норма забезпечує правильний носій і реквізити вже виданої візи. Вона не продовжує okres ważności, не змінює кількість в’їздів і не легалізує іншу діяльність.",
      foreignersCase:
        "Порівняйте помилкову і нову naklejka, паспорт до та після заміни, wniosek до wojewoda і дати; зафіксуйте, що виправлено саме помилку, а не cel або строк візи.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 79a ust. 1 дозволяє MFA, крім Art. 66 ust. 1a, видавати або відмовляти у wiza krajowa особі, яка перебуває в Польщі, подала заяву у період, визначений rozporządzenie, і має громадянство визначеної держави, за додаткових умов; ust. 2–5 регулюють допомогу підприємця та нагляд.",
          sourceLocator: "Art. 79a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: "Art. 79a ust. 6–8 делегує MFA визначити періоди, держави, додаткові цілі й дії підприємця та зобов’язує враховувати надзвичайні обставини, інтерес RP, ситуацію cudzoziemców і контроль.",
          sourceLocator: "Art. 79a ust. 6–8",
        },
      ],
      summary:
        "Art. 79a створює спеціальний внутрішній канал для wiza krajowa через MFA поза випадком Art. 66 ust. 1a. Він працює лише для осіб, держав і періодів, визначених розпорядженням, та може використовувати уповноваженого przedsiębiorca для технічних дій.",
      rules: [
        {
          locator: "Art. 79a ust. 1",
          explanation:
            "Одночасно потрібні pobyt у Польщі, подання в період із rozporządzenie, громадянство визначеної держави та всі додаткові умови, якщо їх встановлено.",
        },
        {
          locator: "Art. 79a ust. 2–5",
          explanation:
            "MFA може залучити підприємця для дій зовнішнього usługodawca за Art. 43 Visa Code; його дії виконуються з upoważnienie MFA і під наглядом працівників urzędu.",
        },
        {
          locator: "Art. 79a ust. 6–8",
          explanation:
            "Розпорядження визначає періоди, громадянства, додаткові цілі й zakres дій підприємця; при його підготовці враховуються війна, катастрофа, обмеження консульського персоналу, інтерес RP та ситуація тих, хто не може повернутися по візу.",
        },
      ],
      legalEffect:
        "Art. 79a відкриває можливість подання в Польщі лише за конкретним rozporządzenie і не скасовує матеріальні умови Art. 65. Перебування в Польщі саме по собі не робить цей канал доступним.",
      foreignersCase:
        "Перед поданням перевірте чинне rozporządzenie за Art. 79a ust. 6–8: державу громадянства, період, cel і додаткові умови; встановіть, чи діє офіційний канал MFA або уповноваженого przedsiębiorca.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 79b зобов’язує organ, який розмістив wiza krajowa у dokument podróży або на blankiet, видалити дані cudzoziemiec, зареєстровані в System Wjazdu/Wyjazdu (EES), відповідно до Art. 35 ust. 6 rozporządzenie nr 2017/2226, протягом 5 dni roboczych від розміщення візи.",
          sourceLocator: "Art. 79b у zw. z Art. 35 ust. 6 rozporządzenie nr 2017/2226",
        },
        {
          kind: "practical-inference",
          text: "Видалення запису EES є операцією з даними, а не зміною decyzja про wiza чи самостійною легалізацією pobyt.",
          sourceLocator: "Art. 79b",
        },
      ],
      summary:
        "Art. 79b встановлює п’ятиденний робочий строк для очищення даних EES після фізичного розміщення wiza krajowa.",
      rules: [
        {
          locator: "Art. 79b",
          explanation:
            "Строк рахується від дня umieszczenie візи, а обов’язок лежить на тому organ, який її розмістив; матеріальні правила EES беруться з Art. 35 ust. 6 rozporządzenie nr 2017/2226.",
        },
      ],
      legalEffect:
        "Норма забезпечує узгодженість EES із виданою візою. Вона не продовжує строк візи, не змінює SIS і не визначає права на pracę.",
      foreignersCase:
        "З’ясуйте organ, дату umieszczenie wiza і дату операції EES; якщо дані не видалені вчасно, зафіксуйте це як окрему проблему реєстру, не як автоматичну зміну статусу.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-80",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 80 ust. 1 делегує міністру внутрішніх справ у погодженні з MFA визначити в rozporządzenie oznaczenia celów wiza, blankiet, formularz і фотографію заяви, відмітку прийняття, передавання даних, формуляри odmowa і Art. 76 ust. 4, спосіб наклеювання та unieważnienie; ust. 2 визначає критерії.",
          sourceLocator: "Art. 80 ust. 1 pkt 1–8; ust. 2 pkt 1–5",
        },
        {
          kind: "practical-inference",
          text: "Art. 80 регулює технічні wzory і процедури виконання, тому конкретний формуляр або oznaczenie треба перевіряти в розporządzenie, а не реконструювати з номера статті.",
          sourceLocator: "Art. 80 ust. 1–2",
        },
      ],
      summary:
        "Art. 80 визначає делегацію для підзаконного оформлення візових формулярів, oznaczenia celów, передачі даних, наклеювання і скасування naklejka. Rozporządzenie має врахувати типи віз Art. 58, цілі Art. 60, читабельність, безпеку та контроль.",
      rules: [
        {
          locator: "Art. 80 ust. 1 pkt 1–4",
          explanation:
            "Rozporządzenie визначає oznaczenie цілей, blankiet, формуляр wniosek і технічні вимоги до фотографії та спосіб відмітки прийняття заяви.",
        },
        {
          locator: "Art. 80 ust. 1 pkt 5–8",
          explanation:
            "Окремо врегульовуються передавання даних Szef Urzędu, формуляри odmowa і рішення Art. 76 ust. 4, наклеювання та unieważnienie naklejka.",
        },
        {
          locator: "Art. 80 ust. 2 pkt 1–5",
          explanation:
            "При підготовці правил враховуються типи й цілі віз, читабельність blankiet, контроль прийняття, безпечна передача даних і контроль технічних дій.",
        },
      ],
      legalEffect:
        "Стаття сама не встановлює конкретний зразок чи строк wiza. Її ефект — межі підзаконного регулювання, необхідного для однакового оформлення і контролю документів.",
      foreignersCase:
        "Використовуйте актуальні formularz, blankiet і правила naklejka з відповідного rozporządzenie; звірте, що рішення, заява й віза мають узгоджені oznaczenia celów.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 81 у локальному corpus має статус repealed і містить лише позначку „(uchylony)”. Чинного тексту правила в цій статті немає.",
          sourceLocator: "Art. 81",
        },
        {
          kind: "practical-inference",
          text: "Art. 81 не можна цитувати як чинну підставу права, обов’язку, odmowa або przedłużenie wizy; для історичної події потрібні редакція на ту дату і przepisy przejściowe.",
          sourceLocator: "Art. 81 status repealed",
        },
      ],
      summary:
        "Art. 81 скасовано: corpus прямо позначає його як „uchylony”. Наступний чинний блок про Przedłużanie wiz починається з Art. 82.",
      rules: [
        {
          locator: "Art. 81",
          explanation:
            "Не виводьте правило з номера статті: у поточній редакції є лише статус uchylony, без чинних ust. або pkt.",
        },
        {
          locator: "status przepisu",
          explanation:
            "Для події до скасування потрібно знайти редакцію, яка діяла тоді, і перевірити przepisy przejściowe; current corpus не робить Art. 81 чинною нормою.",
        },
      ],
      legalEffect:
        "У поточній редакції Art. 81 не створює прав чи обов’язків і не може бути чинною підставою для рішення у справі cudzoziemiec.",
      foreignersCase:
        "Якщо рішення або консультація посилається на Art. 81, перевірте дату події, історичний текст і перехідні положення; для актуальної справи використовуйте Art. 82 та інші чинні норми.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-82",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 82 ust. 1 дозволяє przedłużenie wizy krajowa лише за сукупності чотирьох умов: важливий професійний або особистий інтерес чи гуманітарна неможливість виїзду, незалежні й непередбачувані події, незмінність заявленого cel pobytu та відсутність підстав odmowa wizy krajowa; ust. 2 встановлює спеціальну оцінку SIS.",
          sourceLocator: "Art. 82 ust. 1 pkt 1–4; ust. 2",
        },
        {
          kind: "practical-inference",
          text: "Подовження не є автоматичним продовженням після спливу візи: кожну умову треба довести, а SIS-запис потребує окремого врахування причин і загроз.",
          sourceLocator: "Art. 82 ust. 1–2",
        },
      ],
      summary:
        "Art. 82 визначає матеріальні умови przedłużenie wizy krajowa для cudzoziemiec, який перебуває в Польщі. Потрібні важливий інтерес або гуманітарна перешкода виїзду, непередбачувана подія не з волі заявника, та сама мета і відсутність підстав відмови.",
      rules: [
        {
          locator: "Art. 82 ust. 1 pkt 1–2",
          explanation:
            "Потрібен важливий interes zawodowy або osobisty чи гуманітарна неможливість виїзду, а причина звернення має виникнути незалежно від волі cudzoziemiec і бути непередбачуваною на день первинної заяви.",
        },
        {
          locator: "Art. 82 ust. 1 pkt 3–4",
          explanation:
            "Обставини не можуть показувати інший cel pobytu, ніж заявлений, і не повинні існувати obieкtиvні підстави, через які візу відмовляють за законом.",
        },
        {
          locator: "Art. 82 ust. 2",
          explanation:
            "Якщо дані є в SIS для odmowa wjazdu i pobytu, можливість продовження оцінюють з огляду на причини рішення держави, що внесла запис, і zagrożenia Art. 27 lit. d rozporządzenie nr 2018/1861.",
        },
      ],
      legalEffect:
        "За відсутності хоча б однієї сукупної умови przedłużenie не випливає з Art. 82. Подання заяви саме по собі не дає автоматичного продовження строку wiza або права залишитися після його спливу.",
      foreignersCase:
        "Побудуйте доказову таблицю: інтерес/гуманітарна причина, дата і непередбачуваність події, незмінна мета, відсутність Art. 65 і SIS-причини; перевірте строки чинної візи та своєчасність заяви.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 83 передбачає, що якщо дані заявника на przedłużenie wizy krajowa є в SIS для odmowa wjazdu i pobytu і є підстави продовження, wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, яка внесла запис, і повідомляє її про рішення або zamiar przedłużenia.",
          sourceLocator: "Art. 83 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Art. 83 описує координацію SIS у справі продовження; він не замінює позитивного рішення wojewoda або Szef Urzędu і не створює продовження автоматично.",
          sourceLocator: "Art. 83 pkt 1–2",
        },
      ],
      summary:
        "Art. 83 встановлює міждержавну консультацію при przedłużenie wizy krajowa, коли заявник має SIS-запис про odmowa wjazdu i pobytu, але матеріальні умови Art. 82 можуть бути виконані.",
      rules: [
        {
          locator: "Art. 83 pkt 1",
          explanation:
            "Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації за Art. 27 rozporządzenie nr 2018/1861 із державою, що внесла SIS-запис.",
        },
        {
          locator: "Art. 83 pkt 2",
          explanation:
            "Тому самому органу передається інформація про рішення щодо przedłużenie або про zamiar його надати.",
        },
      ],
      legalEffect:
        "Стаття забезпечує SIS-узгодження у процедурі продовження і не вирішує самостійно, чи візу буде продовжено. Матеріальні умови залишаються в Art. 82.",
      foreignersCase:
        "Перевірте SIS-запис, державу-ініціатора, запит через Policja, дату консультації та рішення/заміr wojewoda або Szef Urzędu; окремо доведіть усі умови Art. 82.",
    },
  ],
})
