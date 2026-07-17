import { defineEditorialPart } from "../define-editorial-part"
import { authorLegalTextCitationsTree } from "../../legal-text"

export const ppsaPart07a = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-271",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 271 допускає wznowienie з підстави nieważność, коли у складі суду була osoba nieuprawniona або судив sędzia wyłączony z mocy ustawy, хоча сторона до uprawomocnienie не могла вимагати його wyłączenie; також коли сторона не мала zdolności sądowej або procesowej, не була należycie reprezentowana чи через порушення права була позбавлена możność działania, з прямо передбаченими винятками.",
          sourceLocator: "Art. 271 pkt 1–2",
        },
      ],
      summary:
        "Стаття перелічує окремі тяжкі дефекти складу суду або участі сторони, які можуть бути підставою для skarga o wznowienie postępowania.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перевіряйте, чи у складі суду брала участь osoba nieuprawniona, чи sędzia був wyłączony z mocy ustawy, і чи сторона до uprawomocnienia orzeczenia не могла вимагати його wyłączenie.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Для strony важливі zdolność sądowa, zdolność procesowa, należyta reprezentacja та możność działania; wznowienie не можна вимагати, якщо до uprawomocnienia niemożność działania уstała, brak reprezentacji був піднятий у zarzut або strona підтвердила dokonane czynności procesowe.",
        },
      ],
      legalEffect:
        "Норма відкриває спеціальний шлях wznowienie лише за описаних умов nieważność; сама наявність процесуальної помилки не доводить автоматично, що skarga буде прийнята або задоволена.",
      foreignersCase:
        "У справі іноземця перевірте, чи брала участь osoba nieuprawniona або sędzia wyłączony z mocy ustawy, а також zdolność sądowa, zdolność procesowa, należyta reprezentacja та конкретну możność działania. Не припускайте, що будь-яка процесуальна помилка автоматично дає підставу Art. 271.",
    },
    {
      provisionId: "ppsa-art-272",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 272 допускає wznowienie, якщо Trybunał Konstytucyjny визнав акт normatywny, на підставі якого видано orzeczenie, несумісним із Конституцією, міжнародним договором або законом; § 2 встановлює тримісячний строк, § 2a охоплює orzeczenie Trybunału Sprawiedliwości Unii Europejskiej, що впливає на зміст orzeczenie, а § 3 — рішення міжнародного органу за ратифікованим договором.",
          sourceLocator: "Art. 272 § 1–3",
        },
      ],
      summary:
        "Стаття пов’язує окремі міжнародні та конституційні рішення з можливістю wznowienie і визначає спеціальний момент для тримісячного строку.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Для підстави, пов’язаної з orzeczenie Trybunału Konstytucyjnego, строк становить три місяці від wejścia w życie цього orzeczenia; якщо на момент його ухвалення судове orzeczenie ще не було prawomocne через wniesiony środek odwoławczy, який потім відхилено, строк рахується від doręczenia postanowienia o odrzuceniu.",
        },
        {
          locator: "§ 2a–3",
          explanation:
            "Для рішення TSUE строк рахується від публікації sentencja в Dziennik Urzędowy Unii Europejskiej, а для рішення міжнародного органу — від doręczenie стороні або її pełnomocnikowi; § 2 застосовується відповідно.",
        },
      ],
      legalEffect:
        "Стаття не робить кожне рішення TK, TSUE або міжнародного органу автоматичною підставою: треба показати його зв’язок із оскарженим orzeczenie та дотримати строк.",
      foreignersCase:
        "Якщо у справі про pobyt посилаються на рішення TK, TSUE чи міжнародного органу, зафіксуйте точний акт, його публікацію або doręczenie та тримісячний розрахунок. Не починайте строк лише від дати, коли про рішення стало відомо неформально.",
    },
    {
      provisionId: "ppsa-art-273",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 273 допускає wznowienie, коли orzeczenie спиралося на podrobiony або przerobiony dokument чи на skazujący wyrok karny, який потім скасовано, або коли його отримано за допомогою przestępstwo; також — після виявлення нових обставин фактичних чи dowody, які могли вплинути на результат і якими сторона не могла скористатися раніше, та після виявлення prawomocne orzeczenie у тій самій справі.",
          sourceLocator: "Art. 273 § 1–3",
        },
      ],
      summary:
        "Норма охоплює нові обставини, докази, злочинне походження orzeczenie, скасований обвинувальний вирок і пізніше виявлене prawomocne orzeczenie щодо тієї самої справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Потрібно встановити зв’язок orzeczenie з підробленим або зміненим dokument, скасованим skazujący wyrok karny чи przestępstwo, а не лише вказати на сумнів у доказі.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Нові facts або dowody мають бути такими, що могли б вплинути на wynik справи, і такими, якими strona не могла скористатися в попередньому провадженні; при пізньому виявленні prawomocne orzeczenie щодо тієї самої справи суд бере до уваги також інші такі рішення з urzędu.",
        },
      ],
      legalEffect:
        "Перелік дає процесуальну можливість просити wznowienie, але не встановлює наперед, що новий доказ змінить результат; його пізніше виявлення та вплив потребують обґрунтування.",
      foreignersCase:
        "У спорі про pobyt відокремте пізніше виявлені facts або dowody від тих, якими strona вже могла скористатися. Покажіть, коли і як їх виявлено та чому strona не могла скористатися ними в попередньому провадженні.",
    },
    {
      provisionId: "ppsa-art-274",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 274 передбачає, що з powodu przestępstwo wznowienie можна вимагати лише тоді, коли czyn встановлено prawomocnym wyrokiem skazującym, крім випадку, коли кримінальне провадження не може бути wszczęte або його umorzono з іншої причини, ніж brak dowodów.",
          sourceLocator: "Art. 274",
        },
      ],
      summary:
        "Стаття обмежує посилання на przestępstwo як підставу wznowienie вимогою про остаточне встановлення діяння або наявність прямо названої перешкоди кримінальному провадженню.",
      rules: [
        {
          locator: "Art. 274",
          explanation:
            "Звичайне припущення про злочин недостатнє: для цієї підстави czyn має бути встановлений prawomocnym wyrokiem skazującym, якщо немає винятку щодо неможливості wszczęcia або іншого umorzenie.",
        },
      ],
      legalEffect:
        "Норма встановлює поріг для цієї конкретної підстави wznowienie і не перетворює будь-яке кримінальне повідомлення на доказ przestępstwo.",
      foreignersCase:
        "Якщо у справі іноземця наводять можливе підроблення документа, перевірте стан кримінального провадження та наявність prawomocny wyrok. Не називайте повідомлення до поліції встановленим czyn.",
    },
    {
      provisionId: "ppsa-art-275",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 275 визначає, що для wznowienie з причини nieważność właściwy є суд, який видав оскаржене orzeczenie, а якщо оскаржено orzeczenia обох інстанцій — Naczelny Sąd Administracyjny; за іншою підставою właściwy є суд, який останнім вирішував справу.",
          sourceLocator: "Art. 275",
        },
      ],
      summary:
        "Стаття розподіляє właściwość суду для skarga o wznowienie залежно від підстави та кількості оскаржених інстанцій.",
      rules: [
        {
          locator: "Art. 275",
          explanation:
            "Спершу визначте, чи йдеться про nieważność, і чи оскаржуються рішення обох інстанцій; в інших випадках орієнтиром є суд, який останнім розглядав справу.",
        },
      ],
      legalEffect:
        "Норма спрямовує скаргу до компетентного суду, але сама не оцінює наявність підстави wznowienie або дотримання строку.",
      foreignersCase:
        "У справі про pobyt не надсилайте skarga o wznowienie автоматично до NSA: спочатку класифікуйте підставу і визначте, який суд видав останнє orzeczenie.",
    },
    {
      provisionId: "ppsa-art-276",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 276 встановлює, що до skarga o wznowienie застосовуються відповідно правила про postępowanie перед sąd першої інстанції, якщо Dział VII не встановлює інакше; якщо właściwy є Naczelny Sąd Administracyjny, відповідно застосовується Art. 175.",
          sourceLocator: "Art. 276",
        },
      ],
      summary:
        "Стаття дає процедурне правило за замовчуванням для wznowienie та окремо відсилає до Art. 175, коли справу розглядає NSA.",
      rules: [
        {
          locator: "Art. 276",
          explanation:
            "Порівнюйте спеціальні приписи Dział VII з правилами першої інстанції; загальна відсилка працює лише відповідно і лише там, де спеціальна норма не встановлює іншого.",
        },
        {
          locator: "Art. 276 zdanie drugie",
          explanation:
            "Для провадження у NSA перевірте окремі вимоги Art. 175, а не покладайтеся лише на правила першої інстанції.",
        },
      ],
      legalEffect:
        "Відсилка визначає спосіб заповнення процесуальних питань, але не скасовує спеціальні умови, строки чи підстави wznowienie.",
      foreignersCase:
        "При підготовці скарги іноземця зіставте вимоги Dział VII з формальними вимогами відповідного суду. Якщо компетентним може бути NSA, окремо перевірте Art. 175.",
    },
    {
      provisionId: "ppsa-art-277",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 277 встановлює тримісячний строк для wniesienia skarga o wznowienie: він рахується від дня, коли сторона дізналася про підставу wznowienie, а при pozbawienie możność działania або brak należytej reprezentacji — від дня, коли про orzeczenie дізналася сторона, її орган або przedstawiciel ustawowy.",
          sourceLocator: "Art. 277",
        },
      ],
      summary:
        "Норма прив’язує тримісячний строк skarga o wznowienie до знання про підставу або, у спеціальних випадках, до знання про саме orzeczenie.",
      rules: [
        {
          locator: "Art. 277",
          explanation:
            "Зафіксуйте подію, від якої починається строк: знання про підставу wznowienie або знання про orzeczenie відповідним учасником, органом чи przedstawiciel ustawowy.",
        },
      ],
      legalEffect:
        "Пропуск тримісячного строку може вплинути на допустимість skarga o wznowienie; дата знання має підтверджуватися матеріалами справи, а не припущенням.",
      foreignersCase:
        "Для іноземця зафіксуйте документами, коли strona дізналася про podstawę wznowienia, а у випадках позбавлення możność działania або brak należytej reprezentacji — коли відповідна strona, її organ чи przedstawiciel ustawowy дізналися про orzeczenie. Якщо посилаєтеся на doręczenie або отримання, збережіть відповідне підтвердження; не рахуйте строк лише від дати, надрукованої на orzeczenie.",
    },
    {
      provisionId: "ppsa-art-278",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 278 забороняє вимагати wznowienie після спливу п’яти років від uprawomocnienie orzeczenie, крім випадку, коли сторона була pozbawiona możność działania або не була należycie reprezentowana.",
          sourceLocator: "Art. 278",
        },
      ],
      summary:
        "Стаття встановлює п’ятирічну межу для żądanie wznowienia та вузький виняток для позбавлення можливості діяти або неналежного представництва.",
      rules: [
        {
          locator: "Art. 278",
          explanation:
            "Відраховуйте п’ять років від uprawomocnienie саме оскарженого orzeczenie; виняток треба пов’язати з фактичним pozbawienie możność działania або brak należytej reprezentacji.",
        },
      ],
      legalEffect:
        "Після цієї межі skarga зазвичай недопустима, але виняток не скасовує обов’язку довести конкретні обставини та дотримати інші правила.",
      foreignersCase:
        "У старій справі іноземця перевірте дату uprawomocnienie і документи про представництво та можливість участі. Сам факт пізнього виявлення документа не є названим Art. 278 винятком.",
    },
    {
      provisionId: "ppsa-art-279",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 279 вимагає, щоб skarga o wznowienie додатково містила oznaczenie оскарженого orzeczenie, підставу wznowienie та її uzasadnienie, обставини, що підтверджують дотримання строку, і żądanie uchylenie або zmiana оскарженого orzeczenie.",
          sourceLocator: "Art. 279",
        },
      ],
      summary:
        "Норма визначає спеціальні елементи змісту skarga o wznowienie: оскаржене orzeczenie, підстава, строк і конкретне żądanie.",
      rules: [
        {
          locator: "Art. 279",
          explanation:
            "У тексті скарги окремо покажіть, яке orzeczenie оскаржується, яку саме підставу wznowienie заявлено, чому строк дотримано та чого просить сторона.",
        },
      ],
      legalEffect:
        "Невідповідність вимогам може перешкодити подальшому розгляду, але Art. 279 не означає, що правильно оформлена skarga автоматично має матеріальну підставу.",
      foreignersCase:
        "У справі іноземця звірте назву і дату orzeczenie, конкретну підставу wznowienie, доказ початку строку та прохання про uchylenie або zmiana. Не замінюйте це загальною незгодою з рішенням.",
    },
    {
      provisionId: "ppsa-art-280",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 280 § 1 зобов’язує суд на posiedzenie niejawnym перевірити, чи skarga o wznowienie подана в строк і чи спирається на ustawowa podstawa wznowienia; за відсутності вимоги суд odrzuci скаргу, інакше призначить rozprawa. За вимогою суду заявник має uprawdopodobnić обставини дотримання строку або dopuszczalność wznowienia.",
          sourceLocator: "Art. 280 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює попередню перевірку строку й законної підстави та можливість вимагати від заявника підтвердити допустимість.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На першому етапі суд перевіряє не весь спір по суті, а строк і ustawowa podstawa; відсутність одного з них веде до odrzucenie, а не до призначення rozprawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "На wezwanie суду заявник має uprawdopodobnić факти, що стосуються строку або dopuszczalność wznowienia.",
        },
      ],
      legalEffect:
        "Проходження попередньої перевірки означає лише призначення rozprawa, а не визнання підстави доведеною і не позитивний результат wznowienie.",
      foreignersCase:
        "Якщо skarga іноземця подана до суду, відокремте posiedzenie niejawne щодо строку й ustawowa podstawa від подальшої rozprawa. На żądanie суду заявник має uprawdopodobnić обставини, що підтверджують строк або dopuszczalność wznowienia.",
    },
    {
      provisionId: "ppsa-art-281",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 281 передбачає, що на rozprawa суд насамперед вирішує dopuszczalność wznowienia; якщо немає ustawowa podstawa або строк wniesienia skarga не дотримано, суд odrzuci skargę. Після оцінки стану справи суд може поєднати перевірку допустимості з розглядом справи.",
          sourceLocator: "Art. 281",
        },
      ],
      summary:
        "Норма розставляє порядок перевірки skarga o wznowienie на rozprawa і допускає поєднання допустимості з розглядом за станом справи.",
      rules: [
        {
          locator: "Art. 281",
          explanation:
            "Спочатку встановіть наявність ustawowa podstawa і дотримання строку; лише після цього питання переходить до подальшого розгляду, якщо суд не поєднає етапи.",
        },
      ],
      legalEffect:
        "Odrzucenie за цією статтею стосується допустимості skarga, а не оцінки того, чи справді попереднє orzeczenie було неправильним по суті.",
      foreignersCase:
        "У справі про pobyt не плутайте rozprawa за Art. 281 із повторним розглядом усієї адміністративної історії. Зосередьтеся на конкретній підставі wznowienie та строку.",
    },
    {
      provisionId: "ppsa-art-282",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 282 § 1 вимагає розгляду справи наново в межах підстави wznowienia; § 2 передбачає oddalenie або uwzględnienie skargi із відповідним застосуванням правил провадження перед судом, який wznowił postępowanie, або uchylenie оскарженого orzeczenia з odrzuceniem skargi чи umorzeniem postępowania. Для випадку Art. 273 § 3 передбачені спеціальні варіанти щодо prawomocne orzeczenia тієї самої справи.",
          sourceLocator: "Art. 282 § 1–3",
        },
      ],
      summary:
        "Стаття визначає межі повторного розгляду і можливі результати skarga o wznowienie, включно зі спеціальним правилом для кількох рішень в одній справі.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Обсяг нового розгляду визначає не загальна незгода сторони, а конкретна podstawa wznowienia.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Після повторного розгляду суд може oddalić або uwzględnić skargę, або uchylić оскаржене orzeczenie і odrzucić skargę чи umorzyć postępowanie; § 3 окремо регулює prawomocne orzeczenia тієї самої справи.",
        },
      ],
      legalEffect:
        "Результат залежить від підстави wznowienia та Art. 282 § 2–3: суд може oddalić або uwzględnić skargę, uchylić orzeczenie з odrzuceniem skargi чи umorzeniem postępowania, а в ситуації Art. 273 § 3 — вирішити щодо одного чи кількох prawomocne orzeczenia. Це не означає автоматичного надання іноземцю pobyt або автоматичної зміни адміністративної decyzja.",
      foreignersCase:
        "Після wznowienie у справі іноземця визначте, яку саме podstawa обмежила повторний розгляд і який результат зазначено в sentencja. Не припускайте, що сама skarga відновлює дозвіл на pobyt.",
    },
    {
      provisionId: "ppsa-art-283",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 283 встановлює, що sędzia, участь або поведінка якого в попередньому провадженні є предметом skarga o wznowienie, wyłączony від ухвалення рішення у цьому провадженні.",
          sourceLocator: "Art. 283",
        },
      ],
      summary:
        "Норма виключає з розгляду wznowienie суддю, чия участь або поведінка в попередній справі оскаржується.",
      rules: [
        {
          locator: "Art. 283",
          explanation:
            "Порівняйте предмет skarga з участю або zachowanie sędzia в попередньому провадженні; саме цей зв’язок запускає wyłączenie за статтею.",
        },
      ],
      legalEffect:
        "Стаття встановлює гарантію неупередженого складу для цього провадження, але сама не доводить, що заявлена підстава wznowienie є обґрунтованою.",
      foreignersCase:
        "Якщо в skarga іноземця прямо оскаржується участь або поведінка конкретного sędzia, перевірте склад суду у провадженні wznowienie та відокремте це питання від оцінки рішення по pobyt.",
    },
    {
      provisionId: "ppsa-art-284",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 284 встановлює, що wniesienie skarga o wznowienie не зупиняє виконання оскарженого orzeczenie; якщо заявник uprawdopodobni загрозу niepowetowana szkoda, суд може wstrzymać виконання, а postanowienie може бути видане на posiedzenie niejawnym і оскаржене zażalenie.",
          sourceLocator: "Art. 284",
        },
      ],
      summary:
        "Подання skarga o wznowienie саме по собі не зупиняє виконання orzeczenie, але суд може зробити це за умовою ймовірної непоправної шкоди.",
      rules: [
        {
          locator: "Art. 284 zdanie pierwsze",
          explanation:
            "До окремого рішення суду виконання оскарженого orzeczenie не зупиняється лише через подання skarga.",
        },
        {
          locator: "Art. 284 zdanie drugie–czwarte",
          explanation:
            "Заявник має uprawdopodobnić niepowetowana szkoda; суд може вирішити wstrzymanie на posiedzenie niejawnym, а postanowienie можна оскаржити zażalenie.",
        },
      ],
      legalEffect:
        "Захист від виконання є окремою дискреційною реакцією суду і не є наслідком самого wznowienie; його надання не вирішує скаргу по суті.",
      foreignersCase:
        "Якщо виконання рішення може вплинути на перебування іноземця, окремо обґрунтуйте конкретну niepowetowana szkoda і перевірте postanowienie суду. Не вважайте подання skarga дозволом залишатися в Польщі.",
    },
    {
      provisionId: "ppsa-art-285",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285 забороняє подальше wznowienie postępowania, завершеного prawomocne orzeczenie, виданим унаслідок skarga o wznowienie; виняток стосується skarga, заснованої на Art. 272 § 1, § 2a або § 3.",
          sourceLocator: "Art. 285 § 1–2",
        },
      ],
      summary:
        "Норма обмежує подальше wznowienie вже завершеного провадження у справі про wznowienie та називає вузький виняток.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку перевірте, чи попереднє провадження справді завершене prawomocne orzeczenie, виданим після skarga o wznowienie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Заборона не застосовується до підстав, прямо перелічених у Art. 272 § 1, § 2a і § 3; інші підстави не можна додавати до цього винятку.",
        },
      ],
      legalEffect:
        "Стаття запобігає безмежному ланцюгу wznowienie, але не замінює перевірку, чи конкретна нова skarga дійсно підпадає під виняток.",
      foreignersCase:
        "У повторній справі іноземця про pobyt встановіть, чи попереднє orzeczenie було результатом wznowienie та яка нова підстава заявлена. Не називайте будь-яку нову обставину винятком Art. 285 § 2.",
    },
    {
      provisionId: "ppsa-art-285a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285a § 1 передбачає skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia WSA, якщо його видання спричинило стороні szkoda, а зміна чи скасування іншими доступними засобами не було і не є можливим; § 2 допускає її у виняткових випадках, коли strony не скористалися доступними засобами, порушено основні засади porządek prawny або конституційні свободи чи права, і зміна або скасування orzeczenia іншим засобом не є можливим; § 3 виключає orzeczenia NSA, крім rażące naruszenie норм prawa UE, а § 4 встановлює opłata stała.",
          sourceLocator: "Art. 285a § 1–4",
        },
      ],
      summary:
        "Стаття визначає винятковий засіб щодо prawomocne orzeczenie WSA, орієнтований на stwierdzenie niezgodności z prawem після настання szkoda й відсутності іншого шляху.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Потрібно окремо показати prawomocne orzeczenie WSA, szkoda та неможливість його зміни або скасування іншими доступними засобами; для § 2 — також що strony не скористалися доступними засобами, винятковий випадок і порушення названих основних правових або конституційних гарантій.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Від orzeczenia NSA skarga не допускається, крім випадку rażące naruszenie норм prawa UE; такі orzeczenia traktuje się як orzeczenia wydane w postępowaniu wywołanym wniesieniem skargi. Skarga підлягає opłata stała.",
        },
      ],
      legalEffect:
        "Цей засіб не є звичайною ще однією апеляцією: сама szkoda або незгода з wyrok не долає вимоги про prawomocność і відсутність іншого засобу.",
      foreignersCase:
        "У справі іноземця про pobyt встановіть, які środki prawne були доступні, чи ними скористалися, чи можлива зміна або скасування orzeczenia, і лише потім обґрунтовуйте szkoda та, за потреби, винятковий випадок за § 2. Не очікуйте автоматичного скасування wyrok або decyzja органу.",
    },
    {
      provisionId: "ppsa-art-285b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285b дозволяє також Prokurator Generalny або Rzecznik Praw Obywatelskich подати skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia у випадках, названих у Art. 285a § 1, § 2 і § 3.",
          sourceLocator: "Art. 285b",
        },
      ],
      summary:
        "Норма розширює коло можливих заявників цього спеціального засобу до Prokurator Generalny та Rzecznik Praw Obywatelskich у межах Art. 285a.",
      rules: [
        {
          locator: "Art. 285b",
          explanation:
            "Повноваження цих органів прив’язане до випадків Art. 285a § 1–3; стаття не створює загального права будь-якої установи подати таку skarga.",
        },
      ],
      legalEffect:
        "Можливість подання органом не прибирає вимог до підстави, szkoda, prawomocność та допустимості, установлених Art. 285a і наступними нормами.",
      foreignersCase:
        "Якщо Rzecznik Praw Obywatelskich розглядає можливість подання skarga в інтересах іноземця, перевірте, який саме випадок Art. 285a заявлено та які матеріали підтверджують відповідні умови, зокрема szkoda й відсутність іншого засобу, якщо вони застосовні.",
    },
    {
      provisionId: "ppsa-art-285c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285c встановлює, що від одного й того самого orzeczenie strona може подати лише одну skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia.",
          sourceLocator: "Art. 285c",
        },
      ],
      summary:
        "Стаття обмежує сторону однією скаргою цього виду щодо одного й того самого orzeczenie.",
      rules: [
        {
          locator: "Art. 285c",
          explanation:
            "Порівнюйте предмет і заявника попередньої skarga: заборона стосується тієї самої strony та того самого orzeczenie.",
        },
      ],
      legalEffect:
        "Повторне подання тією самою стороною щодо того самого orzeczenie не створює другого такого засобу за текстом статті; інші питання допустимості треба перевіряти окремо.",
      foreignersCase:
        "Зберігайте копію та реквізити вже поданої skarga у справі іноземця. Не подавайте другу скаргу щодо того самого wyrok, сподіваючись виправити попередню без аналізу процесуального шляху.",
    },
    {
      provisionId: "ppsa-art-285d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285d дозволяє обґрунтувати skarga o stwierdzenie niezgodności z prawem порушенням prawa materialnego або przepisów postępowania, яке спричинило таку невідповідність і szkoda стороні; zarzuty щодо ustalenia faktów або ocena dowodów не можуть бути підставою цієї skarga.",
          sourceLocator: "Art. 285d",
        },
      ],
      summary:
        "Норма обмежує підстави skarga юридичними порушеннями, пов’язаними зі szkoda, і виключає самостійне оскарження встановлення фактів чи оцінки доказів.",
      rules: [
        {
          locator: "Art. 285d",
          explanation:
            "Заявлена підстава має стосуватися права materialnego або przepisów postępowania, показувати їхній зв’язок із niezgodność orzeczenia та szkoda.",
        },
        {
          locator: "Art. 285d zdanie drugie",
          explanation:
            "Незгода з тим, які факти суд прийняв або як оцінив dowody, сама по собі не є дозволеним zarzut за цією статтею.",
        },
      ],
      legalEffect:
        "Art. 285d звужує предмет цього засобу до правової помилки, а не до повторної оцінки доказів; правильне формулювання не гарантує stwierdzenie niezgodności z prawem.",
      foreignersCase:
        "У справі про pobyt відокремте довід про порушення права від незгоди з оцінкою договору, довідки чи показань. Покажіть також конкретну szkoda, яку спричинило оскаржене orzeczenie.",
    },
    {
      provisionId: "ppsa-art-285e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285e вимагає, щоб skarga o stwierdzenie niezgodności z prawem містила oznaczenie orzeczenie та обсяг оскарження, podstawy і їх uzasadnienie, przepis prawa, з яким orzeczenie не узгоджується, uprawdopodobnienie szkoda, доведення неможливості wzruszenie іншими засобами, а за Art. 285a § 2 — і винятковий випадок, та wniosek про stwierdzenie niezgodności z prawem; також діють вимоги до pismo strony і копій, включно з двома для akt NSA.",
          sourceLocator: "Art. 285e § 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальний зміст skarga та перелік матеріалів і копій, які мають супроводжувати цей винятковий засіб.",
      rules: [
        {
          locator: "§ 1 pkt 1–6",
          explanation:
            "У скарзі послідовно покажіть оскаржене orzeczenie, podstawy, порушений przepis prawa, szkoda, відсутність іншого засобу та wniosek; для Art. 285a § 2 додайте обґрунтування винятковості.",
        },
        {
          locator: "§ 2",
          explanation:
            "Skarga має відповідати загальним вимогам pismo strony; крім копій для сторін і учасників, до неї додаються дві копії для akt Naczelny Sąd Administracyjny.",
        },
      ],
      legalEffect:
        "Формальні елементи дають суду змогу ідентифікувати засіб і його підстави, але подання повного комплекту не доводить незаконність orzeczenie чи факт szkoda.",
      foreignersCase:
        "Перед поданням скарги іноземця зробіть таблицю: orzeczenie, обсяг, przepis, szkoda, неможливість іншого засобу та wniosek. Окремо перевірте odpisy для doręczenia сторонам і учасникам та два odpisy для akt Naczelny Sąd Administracyjny.",
    },
    {
      provisionId: "ppsa-art-285f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285f § 1 встановлює дворічний строк для wniesienia skarga o stwierdzenie niezgodności z prawem до суду, який видав оскаржене orzeczenie, від дня його uprawomocnienie; § 2 передбачає wezwanie про poprawienie або uzupełnienie skarga щодо формальних вимог Art. 285e § 2; § 3 вимагає odrzucenie на posiedzenie niejawnym для неоплаченої скарги, скарги з порушенням Art. 175 § 1 або неусунутих у строк braki.",
          sourceLocator: "Art. 285f § 1–3",
        },
      ],
      summary:
        "Норма визначає суд і дворічний строк подання, а також реакцію на окремі формальні недоліки skarga.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Строк рахується від uprawomocnienie і skarga подається до суду, який видав orzeczenie; перевірте ці дві події за матеріалами справи.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Wezwanie стосується формальних умов Art. 285e § 2; невиправлена в строк вада, brak opłaty або порушення Art. 175 § 1 ведуть до odrzucenie на posiedzenie niejawnym.",
        },
      ],
      legalEffect:
        "Пропуск дворічного строку або невиконання wezwanie може закрити цей шлях без розгляду юридичної підстави; сама подача в строк не гарантує прийняття skarga.",
      foreignersCase:
        "У справі іноземця зафіксуйте дату uprawomocnienie, суд подання, opłata та зміст wezwanie. Не плутайте дворічний строк Art. 285f зі строком skarga o wznowienie за Art. 277.",
    },
    {
      provisionId: "ppsa-art-285g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285g зобов’язує wojewódzki sąd administracyjny після doręczenie skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia стороні протилежній, а якщо скаргу подав Prokurator Generalny або Rzecznik Praw Obywatelskich — обом сторонам, невідкладно передати akta справи до Naczelny Sąd Administracyjny.",
          sourceLocator: "Art. 285g",
        },
      ],
      summary:
        "Стаття визначає процесуальну передачу akt з WSA до NSA після вручення спеціальної skarga належним сторонам.",
      rules: [
        {
          locator: "Art. 285g",
          explanation:
            "Встановіть, кому вручено skarga: стороні протилежній заявнику або обом сторонам у випадку подання Prokurator Generalny чи Rzecznik Praw Obywatelskich; після цього WSA передає akta невідкладно.",
        },
      ],
      legalEffect:
        "Передача akt є наступним етапом процедури і не означає, що NSA вже визнав orzeczenie незаконним або що skarga обов’язково буде розглянута по суті.",
      foreignersCase:
        "У справі іноземця перевірте doręczenie skarga та факт передачі akt до NSA окремо від результату. Не вважайте повідомлення WSA про пересилання підтвердженням виграшу.",
    },
  ]),
})
