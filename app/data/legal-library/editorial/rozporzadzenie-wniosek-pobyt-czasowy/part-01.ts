import { defineEditorialPart } from "../define-editorial-part"

export const temporaryResidenceApplicationPart01 = defineEditorialPart<
  "rozporzadzenie-wniosek-pobyt-czasowy"
>({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 1 визначає, що rozporządzenie встановлює wzory formularzy wniosku та załączników, технічні вимоги до fotografii і цифрових документів, кількість фотографій, правила odciski linii papilarnych, передачі даних для картки pobytu, інформацію про відбитки та formularz wzoru podpisu.",
          sourceLocator: "§ 1 pkt 1–13",
        },
      ],
      summary:
        "Це положення окреслює предмет rozporządzenie: воно стандартизує заяви, додатки та окремі технічні дії у процедурі pobyt czasowy.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Визначено wzory основного wniosku, його załączników, спеціальних wniosków за art. 106k і art. 106l ustawy та formularza zgody за art. 106l ust. 3.",
        },
        {
          locator: "pkt 6–9",
          explanation:
            "Встановлено вимоги до фотографії, її подання онлайн, кількості фотографій для окремих заяв з-за меж Польщі та подання електронних документів або цифрових копій.",
        },
        {
          locator: "pkt 10–13",
          explanation:
            "Описано pobieranie odcisków linii papilarnych, запис і передачу даних для персоналізації карти pobytu, formularz інформації про відбитки та formularz wzoru podpisu.",
        },
      ],
      legalEffect:
        "§ 1 дає технічну рамку подання і персоналізації документів. Сам по собі він не встановлює матеріальних умов надання zezwolenia на pobyt часowy.",
      foreignersCase:
        "У справі спочатку відокремте вимоги до форми, файлів, фотографії, відбитків і підпису від доказів cel pobytu та інших умов zezwolenia. Назва потрібного formularza не означає, що дозвіл буде надано.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 2 прив’язує конкретні wzory до załączników nr 1–11: nr 1 — wniosek за art. 106 ust. 1, nr 2–6 — додатки за art. 106 ust. 2 та ust. 4–7, nr 7 — wniosek за art. 106k, nr 8 — wniosek за art. 106l, nr 9 — zgoda, nr 10 — інформація про odciski, nr 11 — wzór podpisu.",
          sourceLocator: "§ 2 ust. 1–11",
        },
      ],
      summary:
        "Положення показує, який за номером załącznik відповідає конкретному виду заяви або супровідної форми.",
      rules: [
        {
          locator: "ust. 1–6",
          explanation:
            "Załącznik nr 1 є wzorem основного wniosku, а nr 2–6 — wzorami відповідних załączników до нього.",
        },
        {
          locator: "ust. 7–9",
          explanation:
            "Załącznik nr 7 стосується art. 106k, nr 8 — art. 106l ust. 1, а nr 9 — formularza zgody за art. 106l ust. 3.",
        },
        {
          locator: "ust. 10–11",
          explanation:
            "Załącznik nr 10 містить wzór інформації про pobrane odciski або їх відсутність, а nr 11 — formularz wzoru podpisu.",
        },
      ],
      legalEffect:
        "§ 2 полегшує ідентифікацію потрібного офіційного wzoru, але не замінює перевірку підстави перебування, cel pobytu чи інших вимог ustawy.",
      foreignersCase:
        "Порівняйте фактичний cel pobytu і посилання на art. 106, 106k або 106l з номером потрібного załącznik. Не робіть висновок про виконання матеріальних умов лише з правильно вибраного формуляра.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 3 вимагає, щоб фотографія була неушкодженою, кольоровою та чіткою, мала 35 × 45 mm, була зроблена не раніше ніж за 6 місяців до подання wniosku і показувала обличчя на світлому однотонному тлі у фронтальному положенні з визначеними правилами видимості очей та природного вигляду.",
          sourceLocator: "§ 3 pkt 1–5",
        },
      ],
      summary:
        "§ 3 встановлює вимоги до змісту та якості фотографії, що додається до wniosku про zezwolenie на pobyt czasowy.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Фотографія має бути якісною, кольоровою, розміром 35 × 45 mm і зробленою не раніше ніж за 6 місяців до дня подання.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Обличчя показують від верхівки голови до верхньої частини плечей; воно має займати 70–80 % фото, а фон бути однотонним і світлим.",
        },
        {
          locator: "pkt 4–5",
          explanation:
            "Поза фронтальна, погляд прямо, очі відкриті та не закриті волоссям, рот закритий; очі й лінія очей мають бути чітко видимі.",
        },
      ],
      legalEffect:
        "Недотримання описаних характеристик може створити технічну проблему з додатком до заяви; § 3 не визначає, чи виконані умови самого zezwolenia.",
      foreignersCase:
        "Перед поданням перевірте дату фото, розмір, фон, положення обличчя та видимість очей. Окремо підготуйте документи, якими підтверджуються cel pobytu і матеріальні умови справи.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 4 для wniosku, що подається способом з art. 106c ust. 1 ustawy, вимагає файл фотографії у форматі JPG, який відповідає § 3, має щонайменше 684 × 883 piksele, розмір не більше 2,5 MB і зберігає пропорції 35 × 45 mm.",
          sourceLocator: "§ 4",
        },
      ],
      summary:
        "Положення переводить вимоги до фотографії в технічні параметри файла для електронного wniosku.",
      rules: [
        {
          locator: "§ 4",
          explanation:
            "Потрібен JPG-файл, що одночасно відповідає вимогам § 3, має мінімальну роздільність 684 × 883 piksele та не перевищує 2,5 MB.",
        },
        {
          locator: "§ 4",
          explanation:
            "Співвідношення ширини й висоти файла має відповідати фотографії 35 × 45 mm.",
        },
      ],
      legalEffect:
        "§ 4 регулює формат електронного додатка і його сумісність із поданням онлайн; він не є доказом права на pobyt і не підтверджує матеріальну підставу заяви.",
      foreignersCase:
        "Для подання через MOS перевірте JPG, піксельні розміри, обсяг файла та пропорції. Не плутайте успішне завантаження фото з підтвердженням cel pobytu або інших умов.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 5 вимагає додати чотири фотографії до wniosków за art. 139a ust. 1 і art. 139o ust. 1 та до заяв на zezwolenia за art. 159 ust. 1 і art. 160 pkt 1, 3, 4 або 6 ustawy, якщо вони надаються іноземцю, який перебуває поза межами Польщі.",
          sourceLocator: "§ 5",
        },
      ],
      summary:
        "§ 5 визначає кількість фотографій для названих спеціальних заяв, коли іноземець перебуває за межами Rzeczypospolitej Polskiej.",
      rules: [
        {
          locator: "§ 5",
          explanation:
            "У перелічених у положенні категоріях додаються чотири фотографії cudzoziemca.",
        },
        {
          locator: "§ 5",
          explanation:
            "Правило прив’язане саме до названих статей ustawy та до перебування іноземця поза межами Польщі; § 5 не встановлює загальне число для кожного wniosku.",
        },
      ],
      legalEffect:
        "Норма встановлює кількісну вимогу до фотографій у конкретних процедурах. Вона не доводить виконання матеріальних умов zezwolenia.",
      foreignersCase:
        "Якщо заява подається з-за меж Польщі, звірте, чи належить ваш вид zezwolenia до переліку § 5, і підготуйте чотири фото разом із доказами підстави заяви.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 6 для wniosku, поданого способом з art. 106c ust. 1 ustawy, обмежує один електронний файл 10 MB, суму всіх файлів — 50 MB, а цифрові копії паперових документів належної якості вимагає подавати у форматі PDF.",
          sourceLocator: "§ 6",
        },
      ],
      summary:
        "Положення встановлює межі обсягу та формат електронних документів і цифрових копій для онлайн-подання.",
      rules: [
        {
          locator: "§ 6",
          explanation:
            "Окремий файл не може перевищувати 10 MB, а всі файли разом — 50 MB.",
        },
        {
          locator: "§ 6",
          explanation:
            "Цифрове відтворення паперового документа має бути зроблене старанно і з технічною якістю, що дає змогу без сумнівів прочитати його зміст; формат для такого відтворення — PDF.",
        },
      ],
      legalEffect:
        "§ 6 визначає спосіб технічного приєднання документів до онлайн-заяви. Він не каже, що сам файл доводить кожну обставину чи автоматично усуває інші вимоги доказування.",
      foreignersCase:
        "Перед відправленням перевірте розмір кожного файла, загальний ліміт, PDF для сканів і читабельність усіх сторінок. Окремо зберігайте логічний зв’язок кожного документа з даними та обставинами wniosku.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 7 передбачає електронне pobieranie odcisków linii papilarnych спочатку з указівних пальців обох рук, заміну на пари середніх, безіменних або великих пальців у разі нечитабельності чи відсутності, окреме правило для однієї руки та відсутність pobrania, коли це фізично неможливо.",
          sourceLocator: "§ 7 ust. 1–4",
        },
      ],
      summary:
        "Положення описує порядок зняття відбитків для особи, яка просить zezwolenie на pobyt czasowy, та виняток фізичної неможливості.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Використовується пристрій електронного зняття відбитків; спочатку беруться указівні пальці обох рук, а за проблеми — послідовно середні, безіменні або великі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо є лише одна рука або немає відповідної пари пальців, беруть відбиток указівного пальця однієї руки з подальшою черговістю, визначеною в ust. 2.",
        },
        {
          locator: "ust. 4",
          explanation:
            "При фізичній неможливості відбитки не знімаються.",
        },
      ],
      legalEffect:
        "§ 7 регулює ідентифікаційний етап і підготовку даних для карти pobytu; він не встановлює матеріальне право на дозвіл.",
      foreignersCase:
        "На процедурній дії повідомте про фізичні обставини, що впливають на пальці. Якщо зняття фізично неможливе, перевірте, щоб це було належно зафіксовано у відповідній інформації, а не трактуйте відсутність відбитків як автоматичну відмову.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 8 вимагає записувати дані для карти pobytu в електронній системі з art. 449 ust. 1 ustawy; якщо відбитки фізично неможливо зняти, у системі фіксуються їх відсутність і причина, після чого дані та інформація передаються системою для персоналізації карти.",
          sourceLocator: "§ 8 ust. 1–3",
        },
      ],
      summary:
        "§ 8 описує, як дані для карти pobytu зберігаються й передаються через teleinformatyczny system, включно з випадком відсутності відбитків.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Дані, які розміщуються на karcie pobytu, фіксуються електронно у системі, згаданій в art. 449 ust. 1 ustawy.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо pobranie відбитків було фізично неможливим, система повинна містити інформацію про їх відсутність і причину.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Передача даних для spersonalizowania karty pobytu відбувається через цю систему.",
        },
      ],
      legalEffect:
        "Норма організовує технічне виготовлення карти pobytu та фіксацію винятку з відбитками. Вона не є рішенням про надання zezwolenia.",
      foreignersCase:
        "Якщо відбитки не зняли через фізичну неможливість, перевірте, що причина внесена до інформації та системи. Оцінку підстави pobytu проводьте окремо від етапу персоналізації карти.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "§ 9 визначає, що rozporządzenie набирає чинності в день, зазначений у komunikat, виданому за art. 17 ustawy від 21 листопада 2025 р.; попереднє rozporządzenie від 25 листопада 2025 р. (Dz. U. poz. 1647) втрачає силу з днем набрання чинності нового.",
          sourceLocator: "§ 9 та przypis 2",
        },
      ],
      summary:
        "Положення пов’язує початок дії нового розпорядження з окремим komunikat і описує втрату чинності попереднього розпорядження.",
      rules: [
        {
          locator: "§ 9",
          explanation:
            "Конкретний день набрання чинності визначається не самим текстом § 9, а днем, указаним у komunikat за art. 17 відповідної amending ustawa.",
        },
        {
          locator: "przypis 2",
          explanation:
            "Попереднє rozporządzenie MSWiA від 25 листопада 2025 р. втрачає силу з днем набрання чинності нового згідно з art. 18 ust. 1 pkt 1 amending ustawa.",
        },
      ],
      legalEffect:
        "§ 9 встановлює перехід між двома wzory нормативного регулювання, але без тексту komunikat не дає підстав називати конкретну календарну дату набрання чинності.",
      foreignersCase:
        "Для конкретного wniosku звірте дату подання, чинний komunikat і застосовну редакцію formularza. Не покладайтеся лише на дату видання Dz. U.; попередній wzór застосовується за правилами переходу, а не за назвою справи.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 1 є WZÓR FORMULARZA WNIOSKU O UDZIELENIE CUDZOZIEMCOWI ZEZWOLENIA NA POBYT CZASOWY; pouczenie вказує на подання через MOS, польську мову, обов’язкові rubryki, вибір одного cel pobytu, дані про особу, адресу, документ подорожі, перебування, фінанси, ubezpieczenie та інші зазначені в формі обставини.",
          sourceLocator: "Załącznik nr 1, pouczenie pkt 1–18, części A–X",
        },
      ],
      summary:
        "Це wzór основної заяви на zezwolenie на pobyt czasowy. Він показує, які ідентифікаційні, адресні, процедурні та пов’язані з метою pobytu дані запитує formularz.",
      rules: [
        {
          locator: "pouczenie pkt 1–7",
          explanation:
            "Formularz передбачає електронне подання через Moduł Obsługi Spraw (MOS), заповнення польською, заповнення всіх потрібних rubryki та позначення «brak», коли даних або інформації немає; окремо пояснено дату народження, стан цивільний і документ подорожі.",
        },
        {
          locator: "pouczenie pkt 8–13",
          explanation:
            "Текст називає додатки для роботи, високих кваліфікацій, stażysty, wolontariusza, badań naukowych і studiów та передбачає їх електронне заповнення через MOS у відповідних випадках.",
        },
        {
          locator: "pouczenie pkt 14–18; części A–X",
          explanation:
            "Вказано вимоги до JPG-фото, цифрової копії документа подорожі, підпису та отримання urzędowe poświadczenie odbioru; поля форми охоплюють personal data, адреси, cel pobytu, поточне перебування, закордонні поїздки, кошти, ubezpieczenie та запитання про окремі обставини.",
        },
      ],
      legalEffect:
        "Załącznik nr 1 структурує подання та попереджає про процедурні наслідки brak formalny, але заповнений formularz сам по собі не доводить матеріальні умови zezwolenia і не гарантує позитивного рішення.",
      foreignersCase:
        "Перед відправленням визначте один фактичний cel pobytu, заповніть польською всі потрібні поля, за відсутності даних використайте передбачене formularzem «brak» і додайте потрібний załącznik. Перевіряйте кожну заявлену обставину окремими доказами.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 2 є WZÓR заłącznika nr 1 до wniosku; його заповнює podmiot powierzający pracę cudzoziemcowi для названих видів pobyt czasowy, а extracted text містить частини про цей суб’єкт, pracodawca użytkownik, роботу, oświadczenia та основні обов’язки й строк роботи.",
          sourceLocator: "Załącznik nr 2, nagłówek, Uwaga та części I–VI",
        },
      ],
      summary:
        "Це формуляр відомостей від podmiot powierzający pracę, потрібний для визначених робочих і пов’язаних із діяльністю заяв. Він не є самостійним рішенням про право на pobyt.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр додається у випадках, прямо названих у заголовку, і його заповнює podmiot powierzający pracę; для юридичної особи або організаційної одиниці це робить особа, яка діє від її імені.",
        },
        {
          locator: "części I–III",
          explanation:
            "Текст показує поля personal data cudzoziemca, podmiot powierzający pracę та pracodawca użytkownik, зокрема назву, адресу, правову підставу діяльності, реєстрові і контактні дані.",
        },
        {
          locator: "części IV–VI",
          explanation:
            "Формуляр містить поля про stanowisko або rodzaj pracy, zawód, місце, правову підставу, час, винагороду, podstawowe obowiązki, період роботи, PKD та oświadczenia відповідного суб’єкта.",
        },
      ],
      legalEffect:
        "Załącznik nr 2 фіксує заявлені суб’єктом і параметри роботи та дає органу структуровані відомості для відповідної процедури. Сам formularz не замінює оцінку умов zezwolenia або інших доказів.",
      foreignersCase:
        "Перевірте, хто фактично доручає роботу, чи є pracodawca użytkownik і чи відповідають один одному stanowisko, місце, час, винагорода та обов’язки у формулярі й інших документах. Не сприймайте заповнення додатка як автоматичне підтвердження всіх умов.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-3",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 3 є WZÓR заłącznika nr 2 до wniosku для osoby, яка просить zezwolenie у зв’язку з роботою, що потребує високих кваліфікацій, або довгостроковою мобільністю posiadacza Niebieskiej Karty UE; він містить personal data, поля про wyższe kwalifikacje, formalne kwalifikacje та умови, а також секції про проживання в іншій державі UE протягом 12 або 6 місяців.",
          sourceLocator: "Załącznik nr 3, nagłówek, Uwaga та części I–V",
        },
      ],
      summary:
        "Це wzór додатка для двох названих робочих режимів. Його поля призначені для опису кваліфікацій та окремих обставин мобільності іноземця.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "За текстом формуляр заповнює сам cudzoziemiec, який просить один із двох названих видів zezwolenia.",
        },
        {
          locator: "części I–III",
          explanation:
            "Є personal data та поля для wyższe kwalifikacje zawodowe в нерегульованій професії, а також formalne kwalifikacje й інші умови для регульованої професії.",
        },
        {
          locator: "części IV–V",
          explanation:
            "Форма запитує дані про проживання в іншій державі-члені UE щонайменше 12 або 6 місяців на підставі виданого документа, з датами та реквізитами, показаними в полях.",
        },
      ],
      legalEffect:
        "Заłącznik nr 3 упорядковує відомості про кваліфікації та мобільність, але запис у ньому сам по собі не доводить відповідність матеріальним умовам роботи чи pobyt.",
      foreignersCase:
        "Визначте, чи описуєте нерегульовану чи регульовану професію, і заповнюйте саме відповідні поля разом із реквізитами документів. Перевірте періоди проживання та не підміняйте formularz оригінальними доказами.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-4",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 4 є WZÓR заłącznika nr 3 до wniosku для zezwolenia для stażysty або wolontariusza з метою участі в European Voluntary Service; його заповнює organizator stażu або jednostka organizacyjna, на користь якої іноземець виконує świadczenia як wolontariusz.",
          sourceLocator: "Załącznik nr 4, nagłówek, Uwaga та części I–II",
        },
      ],
      summary:
        "Формуляр фіксує дані іноземця та організації, яка організовує staż або приймає волонтера в названому режимі.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Потрібний тип заповнювача залежить від мети: organizator stażu для stażysty або відповідна jednostka organizacyjna для wolontariusza.",
        },
        {
          locator: "część I",
          explanation:
            "Форма має поля для nazwisko, imię, data urodzenia та obywatelstwo cudzoziemca.",
        },
        {
          locator: "część II",
          explanation:
            "Є вибір X між organizator stażu і jednostka organizacyjna, а також назва, адреса, правова підстава діяльності, REGON, телефон і e-mail; внизу передбачено підпис уповноваженого представника.",
        },
      ],
      legalEffect:
        "Заłącznik nr 4 стандартизує відомості від організатора або приймаючої одиниці для відповідного виду заяви. Він не є самостійним підтвердженням права на pobyt чи фактичного виконання програми.",
      foreignersCase:
        "Попросіть заповнити форму саме того суб’єкта, який названий у pouczenie, перевірте позначений тип організації та узгодженість її реквізитів з іншими документами. Підпис форми не замінює оцінку всієї справи.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-5",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 5 є WZÓR заłącznika nr 4 до wniosku для zezwolenia на pobyt у celu prowadzenia badań naukowych або mobilności długoterminowej naukowca; його заповнює cudzoziemiec і він містить дані polska jednostka naukowa та інформацію про програму або угоду мобільності.",
          sourceLocator: "Załącznik nr 5, nagłówek, Uwaga та części I–III",
        },
      ],
      summary:
        "Форма призначена для заявника-дослідника і структурує його дані, відомості про наукову установу в Польщі та можливу програму мобільності.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр додається у двох названих дослідницьких режимах і заповнюється самим cudzoziemiec.",
        },
        {
          locator: "części I–II",
          explanation:
            "Текст містить personal data та поля про jednostka naukowa на території Польщі: назву, адресу, правову підставу діяльності й REGON.",
        },
        {
          locator: "część III",
          explanation:
            "Є вибір Tak або Nie щодо програми UE, програми багатосторонньої мобільності чи угоди між щонайменше двома закладами вищої освіти, а також назви програми або угоди та установ і їхніх адрес.",
        },
      ],
      legalEffect:
        "Заłącznik nr 5 подає структуровані відомості для дослідницької заяви, але сам заповнений wzór не доводить наявність усіх матеріальних умов zezwolenia.",
      foreignersCase:
        "Зіставте назву й реквізити польської jednostka naukowa та мобільної програми або угоди з підтвердними документами. Позначка Tak чи Nie описує заявлену обставину, але не замінює її перевірку.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-6",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 6 є WZÓR заłącznika nr 5 до wniosku для pobyt у celu kształcenia się na studiach; його заповнює jednostka prowadząca studia, а поля охоплюють заклад, строки й напрям навчання, рівень і оплату, мову та потрібний рівень знання, мобільність і — для продовження — виконання програми.",
          sourceLocator: "Załącznik nr 6, nagłówek, Uwaga та części I–II pkt 1–11",
        },
      ],
      summary:
        "Це формуляр від навчального закладу для заяви з метою навчання. Він показує конкретні академічні та організаційні дані, які має надати заклад.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр застосовується для названого навчального cel pobytu і заповнюється jednostka prowadząca studia.",
        },
        {
          locator: "część I",
          explanation:
            "Вказуються personal data cudzoziemca.",
        },
        {
          locator: "część II pkt 1–9",
          explanation:
            "Форма містить назву, адресу, REGON і контакти закладу, daty початку та завершення навчання, kierunek або дисципліни, рівень і оплату, мову навчання та потрібний poziom biegłości językowej.",
        },
        {
          locator: "część II pkt 10–11",
          explanation:
            "Запитується участь у програмі або угоді мобільності та, якщо це продовження навчання, інформація про попереднє виконання програми й зарахування обов’язкових занять.",
        },
      ],
      legalEffect:
        "Заłącznik nr 6 організовує відомості про навчання для справи, але сам wzór не доводить автоматичного виконання умов zezwolenia чи фактичного зарахування.",
      foreignersCase:
        "Попросіть заклад узгодити строки, напрям, рівень, оплату, мову та інформацію про продовження навчання з документами з університету. Не вважайте цей додаток заміною іншим доказам у справі.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-7",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 7 є WZÓR FORMULARZA WNIOSKU про zezwolenie на pobyt czasowy для роботи в рамках przeniesienia wewnątrz przedsiębiorstwa або довгострокової мобільності manager, specialist чи trainee в такій схемі; текст форми містить поля про іноземця, ICT, host entity, parent employer, зв’язки, роботу, попередні transfery та oświadczenia.",
          sourceLocator: "Załącznik nr 7, nagłówek, wybór celu та części A–I",
        },
      ],
      summary:
        "Це спеціальний wzór wniosku для ICT та відповідної довгострокової мобільності. Форма структурує ідентифікаційні, корпоративні, робочі та трансферні відомості.",
      rules: [
        {
          locator: "nagłówek та wybór celu",
          explanation:
            "На початку форми потрібно позначити один із прямо названих напрямів: робота в рамках przeniesienia wewnątrz przedsiębiorstwa або мобільність manager, specialist чи trainee.",
        },
        {
          locator: "części A–V",
          explanation:
            "Extracted text показує поля для особи, адрес, перебування, членів сім’ї, ubezpieczenie, кваліфікацій, ICT-документа, host entity, parent employer, корпоративного зв’язку та умов роботи.",
        },
        {
          locator: "частини про przeniesienia та oświadczenia",
          explanation:
            "Форма також має місця для попередньої роботи й transferów, запланованої тривалості, історії переміщень та oświadczenia, передбачених самим wzór, а також для переліку заłączniki і службових відміток.",
        },
      ],
      legalEffect:
        "Załącznik nr 7 є способом подати дані для ICT-процедури, а не самостійним доказом корпоративного зв’язку, роботи або виконання умов zezwolenia.",
      foreignersCase:
        "Спочатку встановіть, який із двох cel позначається фактично, потім узгодьте назви host entity і parent employer, строки transfer та параметри роботи з окремими документами. Заповнена форма не гарантує дозволу.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-8",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 8 є WZÓR wniosku для cudzoziemca, який перебуває поза межами Польщі, про zezwolenie на pobyt czasowy у celu połączenia się z rodziną або за art. 160 pkt 1, 3, 4 чи 6 ustawy; форма показує дані rozdzielona rodzina, її місце, podstawę pobytu, сімейні дані та додаткові питання про кошти, ubezpieczenie й окремі обставини.",
          sourceLocator: "Załącznik nr 8, nagłówek, części A–C та dodatkowe informacje",
        },
      ],
      summary:
        "Це спеціальний формуляр для заяви з-за меж Польщі у названих сімейних процедурах. Він містить поля про члена розділеної сім’ї та обставини, потрібні самим formularz.",
      rules: [
        {
          locator: "nagłówek та części A–B",
          explanation:
            "У формі обирається cel połączenia się z rodziną або один із пунктів art. 160, а також вносяться personal data і місце aktualnego pobytu rozdzielonego członka rodziny.",
        },
        {
          locator: "część C I",
          explanation:
            "Поля запитують, чи перебуває особа в Польщі, дату останнього в’їзду, мету та правову підставу pobytu, включно з позначенням руху безвізового або візи та її реквізитами.",
        },
        {
          locator: "dodatkowe informacje",
          explanation:
            "Форма містить поля про членів сім’ї, місце актуального й запланованого pobytu, кошти, ubezpieczenie zdrowotne, судимість, провадження та зобов’язання, прямо перелічені у витягнутому тексті.",
        },
      ],
      legalEffect:
        "Заłącznik nr 8 структурує заяву з-за кордону, але самі позначки та поля не доводять родинний зв’язок, законність pobytu чи інші матеріальні умови zezwolenia.",
      foreignersCase:
        "Перевірте факт перебування заявника поза Польщею та виберіть лише відповідний cel і пункт art. 160. Дані про родину, кошти, ubezpieczenie та podstawę pobytu підтверджуйте окремими документами.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-9",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 9 є FORMULARZEM ZGODY на подання членом rozdzielonej rodziny від її імені wniosku про pobyt czasowy для połączenia się z rodziną або wniosku за art. 160 pkt 1, 3, 4 чи 6 ustawy; він містить дані особи, представника, вибір виду wniosku та дату і підпис cudzoziemca.",
          sourceLocator: "Załącznik nr 9, tytuł, dane osobowe та część zgody",
        },
      ],
      summary:
        "Це форма, якою особа дає згоду на подання визначеної заяви іншою особою від її імені у названій сімейній процедурі.",
      rules: [
        {
          locator: "tytuł formularza",
          explanation:
            "Згода стосується або wniosku для połączenia się z rodziną, або wniosku про zezwolenie, названого через art. 160 pkt 1, 3, 4 чи 6.",
        },
        {
          locator: "dane osobowe cudzoziemca та osoby składającej",
          explanation:
            "Форма послідовно містить персональні поля cudzoziemca, який дає згоду, і особи, яка подає wniosek від його імені, включно з даними, показаними у формулярі.",
        },
        {
          locator: "część wyboru та podpis",
          explanation:
            "Потрібно позначити відповідний вид wniosku, після чого formularz містить дату і підпис cudzoziemca.",
        },
      ],
      legalEffect:
        "Załącznik nr 9 документує згоду на представницьке подання в межах названої процедури. Він не замінює доказ родинного зв’язку, підстави pobytu чи умов надання zezwolenia.",
      foreignersCase:
        "Звірте особу, яка дає zgoda, з особою, від імені якої подається wniosek, і позначте правильний вид заяви. Перевірте дату та підпис, а питання родинного зв’язку доводьте окремо.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-10",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 10 є WZÓR INFORMACJI про pobrane odciski linii papilarnych або їх відсутність; його заповнює особа, яка бере відбитки, а форма містить дані cudzoziemca, дату для wydania karty pobytu, позначку pobrano або nie pobrano, пальці чи причину та підпис службовця.",
          sourceLocator: "Załącznik nr 10, tytuł, pouczenie та rubryki 1–4",
        },
      ],
      summary:
        "Це службовий формуляр для фіксації результату процедури odciski linii papilarnych, включно з випадком, коли їх не знято.",
      rules: [
        {
          locator: "Uwaga та pouczenie",
          explanation:
            "Форму заповнює osoba pobierająca odciski. Пояснення називає випадки, коли відбитки не беруться: вік до 6 років на день подання, фізична неможливість або підтверджена медична хвороба чи niepełnosprawność, через яку особа не може особисто прибути на wezwanie wojewoda.",
        },
        {
          locator: "rubryki 1–4",
          explanation:
            "Вносяться imię, nazwisko, data urodzenia та obywatelstwo, дата подання відбитків для karty pobytu, а також результат pobrano або nie pobrano.",
        },
        {
          locator: "rubryki про пальці та підпис",
          explanation:
            "Якщо відбитки взято, зазначаються відповідні пальці; якщо ні — причина неможливості. Наприкінці є дата, дані, посада та підпис особи, яка їх брала.",
        },
      ],
      legalEffect:
        "Заłącznik nr 10 підтверджує лише зафіксований процедурний стан odciski для цілей карти pobytu. Він не підтверджує матеріальні умови проживання й не замінює рішення.",
      foreignersCase:
        "Після дії перевірте, чи правильно вказані результат, пальці або причина відсутності та дані службовця. Виняток із відбитків пояснює технічний етап, але не дає автоматичного права на pobyt.",
    },
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-11",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Załącznik nr 11 є WZÓR FORMULARZA, на якому cudzoziemiec складає wzór podpisu; pouczenie виключає його зняття для особи, молодшої 13 років на день подання, або особи з підтвердженою хворобою чи niepełnosprawnością, яка не може підписатися самостійно.",
          sourceLocator: "Załącznik nr 11, tytuł, pouczenie та rubryki 1–4",
        },
      ],
      summary:
        "Форма призначена для зразка підпису і містить мінімальні ідентифікаційні дані та рамку, за межі якої підпис не повинен виходити.",
      rules: [
        {
          locator: "pouczenie pkt 1–2",
          explanation:
            "Wzór podpisu не береться від cudzoziemiec, який до дня подання не досяг 13 років, або через підтверджену медичною довідкою хворобу чи niepełnosprawność не може підписатися самостійно.",
        },
        {
          locator: "rubryki 1–4",
          explanation:
            "У формі вказуються imię, nazwisko, data urodzenia та obywatelstwo cudzoziemca.",
        },
        {
          locator: "WZÓR PODPISU",
          explanation:
            "Підпис складається у відведеній рамці; текст прямо зазначає, що він не може виходити за її межі.",
        },
      ],
      legalEffect:
        "Заłącznik nr 11 фіксує зразок підпису або пояснює передбачений формою виняток. Це ідентифікаційна формальність, а не доказ матеріального права на pobyt.",
      foreignersCase:
        "Перевірте вік на дату подання та, якщо застосовується виняток через стан здоров’я, окремо з’ясуйте вимогу до медичної довідки, зазначену в pouczenie. Сам зразок підпису не доводить умови zezwolenia.",
    },
  ],
})
