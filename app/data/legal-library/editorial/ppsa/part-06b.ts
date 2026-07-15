import { defineEditorialPart } from "../define-editorial-part"

export const ppsaPart06b = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-275",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 275 визначає właściwy sąd для wznowienia postępowania: за підставою nieważność — суд, який видав оскаржене orzeczenie, а якщо оскаржено orzeczenia обох інстанцій — Naczelny Sąd Administracyjny; за іншою підставою — суд, який останнім розглядав справу.",
          sourceLocator: "Art. 275",
        },
      ],
      summary:
        "Стаття розподіляє компетенцію судів у справі про wznowienie postępowania залежно від підстави та від того, рішення якої інстанції оскаржуються.",
      rules: [
        {
          locator: "Art. 275",
          explanation:
            "Спершу визначте, чи йдеться про wznowienie з причини nieważność, чи про іншу ustawowa podstawa wznowienia.",
        },
        {
          locator: "Art. 275",
          explanation:
            "Для nieważność важливі оскаржене orzeczenie та, за потреби, orzeczenia обох інстанцій; для іншої підстави — суд, який останнім orzekał w sprawie.",
        },
      ],
      legalEffect:
        "Норма визначає właściwość sądu для заяви про wznowienie, але сама не підтверджує наявність підстави чи дотримання строку.",
      foreignersCase:
        "У справі іноземця про pobyt спочатку класифікуйте підставу wznowienie та встановіть, який sąd видав останнє orzeczenie; не надсилайте skargę автоматично до NSA.",
    },
    {
      provisionId: "ppsa-art-276",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 276 наказує відповідно застосовувати до skargi o wznowienie postępowania правила про postępowanie przed sądem pierwszej instancji, якщо przepisy цього działu не встановлюють іншого; коли właściwy є Naczelny Sąd Administracyjny, відповідно застосовується Art. 175.",
          sourceLocator: "Art. 276",
        },
      ],
      summary:
        "Стаття є відсилочною: для wznowienie діють правила суду першої інстанції, але спеціальні норми цього działu та окреме правило для NSA мають пріоритет.",
      rules: [
        {
          locator: "Art. 276 zdanie pierwsze",
          explanation:
            "Порівнюйте загальні правила першої інстанції зі спеціальними приписами działu про wznowienie; відповідне застосування не є механічним копіюванням.",
        },
        {
          locator: "Art. 276 zdanie drugie",
          explanation:
            "Якщо справу розглядає NSA, окремо перевірте відповідне застосування Art. 175 щодо skarga kasacyjna.",
        },
      ],
      legalEffect:
        "Відсилання заповнює процедурні питання, не врегульовані цим dział, але не створює нової підстави для wznowienie.",
      foreignersCase:
        "У судовій справі іноземця про legalizacja pobytu звіряйте вимоги skargi o wznowienie з цим dział і правилами потрібної інстанції, особливо якщо компетентний NSA.",
    },
    {
      provisionId: "ppsa-art-277",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 277 встановлює тримісячний строк для wniesienia skargi o wznowienie postępowania: він рахується від дня, коли strona дізналася про podstawę wznowienia, а за pozbawienie możności działania або brak należytej reprezentacji — від дня, коли про orzeczenie дізналася strona, її organ або przedstawiciel ustawowy.",
          sourceLocator: "Art. 277",
        },
      ],
      summary:
        "Для skarga o wznowienie важливі не лише три місяці, а й правильна подія, від якої починається їх перебіг.",
      rules: [
        {
          locator: "Art. 277",
          explanation:
            "За загальною підставою зафіксуйте день, коли strona дізналася саме про підставу wznowienia, а не просто про несприятливий результат.",
        },
        {
          locator: "Art. 277",
          explanation:
            "Для pozbawienie możności działania або brak należytej reprezentacji початок строку пов'язаний із дізнанням про orzeczenie strona, її organ або przedstawiciel ustawowy.",
        },
      ],
      legalEffect:
        "Пропуск тримісячного строку може призвести до odrzucenie skargi; остаточний розрахунок потребує доказу дати знання та конкретної підстави.",
      foreignersCase:
        "Іноземцю у справі про pobyt варто зберегти підтвердження, коли він або належний przedstawiciel дізнався про orzeczenie чи підставу wznowienie, а не покладатися лише на дату його складання.",
    },
    {
      provisionId: "ppsa-art-278",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 278 забороняє вимагати wznowienia після спливу п'яти років від uprawomocnienie się orzeczenia, крім випадку, коли strona була pozbawiona możności działania або не була należycie reprezentowana.",
          sourceLocator: "Art. 278",
        },
      ],
      summary:
        "П'ятирічний граничний строк обмежує wznowienie, але стаття залишає прямо названий виняток щодо можливості діяти або належного представництва.",
      rules: [
        {
          locator: "Art. 278",
          explanation:
            "Рахуйте п'ять років від uprawomocnienie się orzeczenia, а не від дати його складення чи doręczenie.",
        },
        {
          locator: "Art. 278",
          explanation:
            "Виняток стосується лише pozbawienie możności działania або braku należytej reprezentacji; сам по собі пізній новий доказ його не замінює.",
        },
      ],
      legalEffect:
        "Після п'яти років skarga зазвичай недопустима за часовою межею; чи діє виняток, залежить від установлених процесуальних фактів.",
      foreignersCase:
        "У давній справі іноземця про pobyt перевірте дату prawomocność та окремо докази, що особа не могла діяти або не була належно reprezentowana.",
    },
    {
      provisionId: "ppsa-art-279",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 279 вимагає, щоб skarga o wznowienie postępowania містила oznaczenie оскарженого orzeczenia, podstawę wznowienia та її uzasadnienie, обставини, що підтверджують zachowanie terminu, і żądanie uchylenia або zmiany оскарженого orzeczenia.",
          sourceLocator: "Art. 279",
        },
      ],
      summary:
        "Стаття перелічує спеціальний зміст skarga o wznowienie: суд має зрозуміти, яке orzeczenie оскаржується, чому можливе wznowienie, чому строк збережено і чого просить сторона.",
      rules: [
        {
          locator: "Art. 279",
          explanation:
            "Окремо назвіть конкретну podstawę wznowienia та викладіть її uzasadnienie; посилання лише на несправедливість orzeczenia недостатнє.",
        },
        {
          locator: "Art. 279",
          explanation:
            "Покажіть обставини zachowanie terminu та сформулюйте żądanie: uchylenie або zmiana оскарженого orzeczenia.",
        },
      ],
      legalEffect:
        "Невиконання спеціальних вимог може поставити під сумнів допустимість skargi; ця стаття сама не визначає, чи заява підлягає виправленню.",
      foreignersCase:
        "Готуючи для іноземця skargę o wznowienie у справі про pobyt, додайте хронологію дізнання про підставу і строк та не замінюйте конкретне żądanie загальною вимогою переглянути справу.",
    },
    {
      provisionId: "ppsa-art-280",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 280 § 1 зобов'язує sąd на posiedzeniu niejawnym перевірити, чи skarga o wznowienie внесена в termin і чи спирається на ustawowa podstawa wznowienia: за відсутності однієї вимоги суд odrzuci skargę, а інакше wyznaczy rozprawę. § 2 дозволяє вимагати uprawdopodobnienia обставин щодо строку або допустимості wznowienie.",
          sourceLocator: "Art. 280 § 1–2",
        },
      ],
      summary:
        "Перший фільтр wznowienie відбувається без rozprawa: суд перевіряє строк і наявність законної підстави, а за потреби просить її попередньо підтвердити.",
      rules: [
        {
          locator: "Art. 280 § 1",
          explanation:
            "Posiedzenie niejawne тут є стадією перевірки допустимості; якщо обидві вимоги виконано, суд призначає rozprawę.",
        },
        {
          locator: "Art. 280 § 2",
          explanation:
            "На вимогу sąd заявник має uprawdopodobnić факти, які показують zachowanie terminu або dopuszczalność wznowienia.",
        },
      ],
      legalEffect:
        "Негативний результат первинної перевірки веде до odrzucenie, а позитивний лише відкриває шлях до rozprawa і не означає задоволення skargi.",
      foreignersCase:
        "У справі іноземця перевірте wezwanie sądu на posiedzeniu niejawnym і вчасно підтвердьте дати вручення, дізнання та факти, на яких ґрунтується wznowienie.",
    },
    {
      provisionId: "ppsa-art-281",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 281 передбачає, що на rozprawa sąd насамперед вирішує про dopuszczalność wznowienia; якщо немає ustawowa podstawa wznowienia або строк wniesienia skargi не збережено, суд odrzuca skargę. Після оцінки стану справи суд може поєднати перевірку допустимості з розглядом справи.",
          sourceLocator: "Art. 281",
        },
      ],
      summary:
        "На rozprawa суд спершу відділяє питання, чи допустиме wznowienie, від повторного розгляду справи, хоча за певних умов може розглянути їх разом.",
      rules: [
        {
          locator: "Art. 281",
          explanation:
            "Відсутність законної підстави або пропуск строку веде до odrzucenie, а не до оцінки спору так, ніби це звичайна skarga.",
        },
        {
          locator: "Art. 281",
          explanation:
            "Поєднання перевірки dopuszczalność з розглядом справи є можливістю суду після врахування стану матеріалів.",
        },
      ],
      legalEffect:
        "Стаття може завершити провадження через недопустимість навіть після призначення rozprawa; саме призначення слухання не підтверджує підставу wznowienia.",
      foreignersCase:
        "Якщо іноземець просить wznowienie wyroku у справі про pobyt, розмежуйте на rozprawa доказ допустимості та доводи щодо повторного вирішення спору.",
    },
    {
      provisionId: "ppsa-art-282",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 282 § 1 обмежує повторний розгляд справи межами podstawy wznowienia. За § 2 після повторного розгляду sąd oddala skargę o wznowienie або uwzględnia її за відповідними правилами, а також може uchylić оскаржене orzeczenie й odrzucić skargę або umorzyć postępowanie. § 3 для випадку Art. 273 § 3 визначає спеціальні варіанти щодо кількох prawomocne orzeczenia.",
          sourceLocator: "Art. 282 § 1–3",
        },
      ],
      summary:
        "Стаття визначає межі та можливі результати повторного розгляду: суд не відкриває справу безмежно, а діє в рамках конкретної podstawy wznowienia.",
      rules: [
        {
          locator: "Art. 282 § 1",
          explanation:
            "Предмет нового розгляду задає саме підстава wznowienia; це не загальне повторне оскарження всіх аспектів справи.",
        },
        {
          locator: "Art. 282 § 2–3",
          explanation:
            "Залежно від результату суд може oddalić або uwzględnić skargę, uchylić orzeczenie з odrzucenie чи umorzenie, а у випадку Art. 273 § 3 — застосувати спеціальний спосіб щодо пов'язаних orzeczenia.",
        },
      ],
      legalEffect:
        "Успішне wznowienie може змінити судове orzeczenie або процесуально завершити skargę чи провадження, але стаття не гарантує конкретного результату адміністративної справи.",
      foreignersCase:
        "У справі іноземця про pobyt сформулюйте, яку саме частину спору охоплює podstawа wznowienia; не очікуйте автоматичного надання pobyt після скасування orzeczenie.",
    },
    {
      provisionId: "ppsa-art-283",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 283 виключає від orzekania у postępowaniu ze skargi o wznowienie postępowania sędziego, якого стосується skarga щодо його udział або zachowanie у попередньому postępowaniu.",
          sourceLocator: "Art. 283",
        },
      ],
      summary:
        "Суддя, чия участь або поведінка є предметом skarga o wznowienie, не повинен вирішувати цю skargę.",
      rules: [
        {
          locator: "Art. 283",
          explanation:
            "Перевіряйте не абстрактну незгоду із суддею, а те, чи skarga стосується його udział або zachowanie у попередньому postępowaniu.",
        },
      ],
      legalEffect:
        "Стаття встановлює спеціальне wyłączenie sędziego для цього виду провадження; вона сама не доводить інші підстави відводу.",
      foreignersCase:
        "Якщо іноземець посилається у skarga o wznowienie на участь судді у попередньому wyroku про pobyt, точно зіставте цей довід із Art. 283, а не з самим несприятливим результатом.",
    },
    {
      provisionId: "ppsa-art-284",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 284 встановлює, що wniesienie skargi o wznowienie postępowania не зупиняє виконання оскарженого orzeczenie; якщо заявник uprawdopodobni загрозу niepowetowana szkoda, sąd може wstrzymać виконання. Postanowienie може бути видане на posiedzeniu niejawnym, і на нього przysługuje zażalenie.",
          sourceLocator: "Art. 284",
        },
      ],
      summary:
        "Саме подання skargi o wznowienie не блокує виконання рішення; для wstrzymanie потрібне попереднє підтвердження ризику niepowetowana szkoda.",
      rules: [
        {
          locator: "Art. 284 zdanie pierwsze",
          explanation:
            "Не ототожнюйте wniesienie skargi з автоматичним wstrzymanie wykonania; базове правило зберігає виконання.",
        },
        {
          locator: "Art. 284 zdanie drugie",
          explanation:
            "Sąd може wstrzymać виконання, якщо заявник uprawdopodobni niepowetowana szkoda; окреме postanowienie може бути оскаржене zażalenie.",
        },
      ],
      legalEffect:
        "До окремого рішення sąd виконання не зупинене; навіть подане клопотання не гарантує wstrzymanie.",
      foreignersCase:
        "Якщо оскаржене orzeczenie впливає на pobyt іноземця, разом зі skarga окремо обґрунтуйте імовірність niepowetowana szkoda та перевірте pouczenie про zażalenie.",
    },
    {
      provisionId: "ppsa-art-285",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285 § 1 забороняє подальше wznowienie postępowania, завершеного prawomocne orzeczenie, виданим унаслідок skargi o wznowienie postępowania. § 2 робить виняток для підстав wznowienia, визначених у Art. 272 § 1, § 2a і § 3.",
          sourceLocator: "Art. 285 § 1–2",
        },
      ],
      summary:
        "Після рішення, прийнятого за результатом wznowienie, повторне wznowienie загалом недопустиме, крім трьох прямо названих законних підстав.",
      rules: [
        {
          locator: "Art. 285 § 1",
          explanation:
            "Встановіть, чи попереднє postępowanie вже закінчилося prawomocne orzeczenie, винесеним саме після skargi o wznowienie.",
        },
        {
          locator: "Art. 285 § 2",
          explanation:
            "Виняток обмежений Art. 272 § 1, § 2a і § 3; інші доводи не можна автоматично підвести під нього.",
        },
      ],
      legalEffect:
        "Норма обмежує ланцюг повторних переглядів, але не скасовує спеціально збережені винятки з § 2.",
      foreignersCase:
        "У справі іноземця не подавайте другу skargę o wznowienie лише через незгоду з першим результатом; перевірте, чи справді наявна одна з підстав Art. 272, названих у § 2.",
    },
    {
      provisionId: "ppsa-art-286",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 286 § 1 передбачає після uprawomocnienie рішення суду першої інстанції, яким закінчено postępowanie, zwrot akt адміністративної справи organowi administracji publicznej разом із odpis orzeczenia зі stwierdzeniem prawomocności; zarządzenie про zwrot може видати referendarz sądowy. § 1a не застосовує це правило, якщо akta ведуться електронно, але organ отримує odpis зі stwierdzeniem prawomocności. За § 2 строк для załatwienia sprawy органом рахується від doręczenie akt або, в електронному випадку, odpis.",
          sourceLocator: "Art. 286 § 1–2",
        },
      ],
      summary:
        "Стаття визначає повернення адміністративних akt після остаточного рішення першої інстанції та момент, від якого орган рахує встановлений законом або судом строк.",
      rules: [
        {
          locator: "Art. 286 § 1–1a",
          explanation:
            "Розрізняйте паперові та електронні akta: у першому випадку повертається справа, у другому organ отримує odpis orzeczenia зі stwierdzeniem prawomocności.",
        },
        {
          locator: "Art. 286 § 2",
          explanation:
            "Для строку органу важлива дата doręczenie akt або odpis, а не лише дата, коли суд проголосив orzeczenie.",
        },
      ],
      legalEffect:
        "Повернення akt і вручення odpis запускають визначений правом або судом строк для органу, але Art. 286 сам не встановлює тривалість кожного такого строку.",
      foreignersCase:
        "Після wyrok WSA у справі іноземця про pobyt перевірте, коли organ отримав akta або odpis prawomocnego orzeczenia: від цього може залежати початок його подальшої дії.",
    },
    {
      provisionId: "ppsa-art-287",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 287 є uchylony (скасований) і не містить чинного нормативного правила.",
          sourceLocator: "Art. 287",
        },
      ],
      summary:
        "У чинній редакції PPSA Art. 287 позначений як uchylony; його не можна читати як діючу норму.",
      rules: [
        {
          locator: "Art. 287",
          explanation:
            "Позначка „(uchylony)” означає, що в цьому місці немає чинного правила, яке слід застосовувати до нової справи.",
        },
      ],
      legalEffect:
        "Art. 287 не створює чинного процесуального наслідку; за історичним питанням потрібно перевіряти редакцію закону та перехідні правила на відповідну дату.",
      foreignersCase:
        "Якщо старі матеріали справи іноземця посилаються на Art. 287, не використовуйте це посилання як чинну підставу без перевірки редакції PPSA та моменту виникнення ситуації.",
    },
    {
      provisionId: "ppsa-art-288",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 288 передбачає odtworzenie akt, які загублено або знищено повністю чи частково. У правомірно завершеній справі відтворюється kończące postępowanie orzeczenie та та частина akt, яка необхідна для встановлення його змісту й wznowienia postępowania.",
          sourceLocator: "Art. 288",
        },
      ],
      summary:
        "Відтворення akt потрібне для відновлення процесуального матеріалу, а в остаточно завершеній справі — щонайменше рішення та необхідної частини матеріалів.",
      rules: [
        {
          locator: "Art. 288 zdanie pierwsze",
          explanation:
            "Встановіть, чи akta загублені або знищені повністю чи частково; стаття охоплює обидва масштаби втрати.",
        },
        {
          locator: "Art. 288 zdanie drugie",
          explanation:
            "Для prawomocnie zakończona sprawa обсяг відтворення пов'язаний зі змістом kończące orzeczenie та можливістю wznowienia.",
        },
      ],
      legalEffect:
        "Стаття відкриває процедуру відновлення akt, але не підтверджує наперед, що весь первісний матеріал можна відтворити.",
      foreignersCase:
        "Якщо в судовій справі іноземця про pobyt зникли akta, зафіксуйте, які рішення та документи необхідні для розуміння wyrok і можливого wznowienie.",
    },
    {
      provisionId: "ppsa-art-289",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 289 § 1 дозволяє sąd розпочати postępowanie w sprawie odtworzenia akt з urzędu або на wniosek strony. За § 2 суд розпочинає його лише на wniosek strony, якщо zaginięcie або zniszczenie akt сталося внаслідок siła wyższa.",
          sourceLocator: "Art. 289 § 1–2",
        },
      ],
      summary:
        "Спосіб початку odtworzenie akt залежить від обставини втрати: загальне правило допускає ініціативу суду, але siła wyższa вимагає wniosek strony.",
      rules: [
        {
          locator: "Art. 289 § 1",
          explanation:
            "За звичайної ситуації перевірте, чи провадження вже wszczęte з urzędu, чи потрібен wniosek strony.",
        },
        {
          locator: "Art. 289 § 2",
          explanation:
            "Якщо причиною була siła wyższa, ініціатива суду недостатня: потрібен wniosek strony.",
        },
      ],
      legalEffect:
        "Норма визначає спосіб wszczęcie postępowania, але не доводить факту siła wyższa чи успішного відтворення akt.",
      foreignersCase:
        "У справі іноземця з утраченими матеріалами з'ясуйте причину zaginięcie akt; за siła wyższa підготуйте саме wniosek strony, а не лише неформальне повідомлення.",
    },
    {
      provisionId: "ppsa-art-290",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 290 визначає właściwy sąd для odtworzenia akt: у sprawa będąca w toku — суд, у якому справа востаннє розглядалася; якщо компетентним був би NSA, він передає справу суду першої інстанції, крім відтворення лише akt NSA; у prawomocnie zakończonej sprawie провадження веде sąd першої інстанції.",
          sourceLocator: "Art. 290 § 1–3",
        },
      ],
      summary:
        "Місце відтворення akt залежить від того, чи справа ще триває, чи вже остаточно завершена, і чи втрачено лише матеріали NSA.",
      rules: [
        {
          locator: "Art. 290 § 1",
          explanation:
            "Для справи, яка триває, встановіть суд, у якому вона востаннє фактично розглядалася.",
        },
        {
          locator: "Art. 290 § 2–3",
          explanation:
            "За участі NSA діє передача до суду першої інстанції з прямо названим винятком; для prawomocnie zakończona sprawa компетентним є sąd першої інстанції.",
        },
      ],
      legalEffect:
        "Стаття розподіляє компетенцію між судами, але сама не вирішує, чи достатньо матеріалів для відновлення справи.",
      foreignersCase:
        "У справі іноземця про pobyt визначте, де востаннє була справа та чи остаточно вона завершена, перш ніж подавати wniosek про odtworzenie akt.",
    },
    {
      provisionId: "ppsa-art-291",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 291 вимагає, щоб wniosek o odtworzenie akt точно визначав справу, містив усі urzędowo poświadczone odpisy, які є у заявника, і вказував відомі йому місця, де перебувають документи або їхні odpisy.",
          sourceLocator: "Art. 291",
        },
      ],
      summary:
        "Заява про відтворення akt має дати суду конкретну карту справи, наявних засвідчених копій і можливих місць пошуку інших документів.",
      rules: [
        {
          locator: "Art. 291",
          explanation:
            "Опишіть sprawa точно, додайте всі наявні urzędowo poświadczone odpisy та не приховуйте відомі місця зберігання документів.",
        },
      ],
      legalEffect:
        "Стаття визначає зміст wniosek, але наявність копій сама по собі не означає, що akta будуть відтворені повністю.",
      foreignersCase:
        "Іноземцю у справі про pobyt варто додати urzędowo poświadczone odpisy рішення, листів і судових документів та зазначити, де можуть бути інші матеріали.",
    },
    {
      provisionId: "ppsa-art-292",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 292 § 1 зобов'язує przewodniczący викликати осіб, organy administracji publicznej або instytucje, названі у wniosek або офіційно відомі суду, щоб вони у визначений строк подали urzędowo poświadczone odpisy документів або заявили, що їх не мають. За § 2 особа, яка вже мала документ, але тепер його не має, повинна пояснити, де він знаходиться.",
          sourceLocator: "Art. 292 § 1–2",
        },
      ],
      summary:
        "Суд може витребувати засвідчені копії для odtworzenie akt, а адресат wezwanie має або надати їх, або чесно повідомити про відсутність і відоме місце документа.",
      rules: [
        {
          locator: "Art. 292 § 1",
          explanation:
            "Wezwanie може стосуватися осіб, органів чи інституцій, зазначених заявником або відомих суду з urzędu; перевірте строк і форму копій.",
        },
        {
          locator: "Art. 292 § 2",
          explanation:
            "Якщо документ був у володінні адресата до wezwanie, проста відповідь „не маю” не замінює пояснення, де він перебуває.",
        },
      ],
      legalEffect:
        "Стаття організовує збір матеріалів, але не встановлює, що кожен викликаний неодмінно володіє потрібним документом.",
      foreignersCase:
        "У справі іноземця про pobyt відстежуйте wezwania до wojewoda, суду чи іншої instytucja та зберігайте їхні відповіді про наявність або місце документів.",
    },
    {
      provisionId: "ppsa-art-293",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 293 § 1 дозволяє sąd накласти grzywna у розмірі, визначеному Art. 154 § 6, на кожного, хто не виконає wezwanie за Art. 292. За § 2, якщо викликана є osoba prawna або інша jednostka organizacyjna, відповідальність стосується jej kierownik або pracownik, обов'язком якого було виконати wezwanie.",
          sourceLocator: "Art. 293 § 1–2",
        },
      ],
      summary:
        "Невиконання wezwanie про подання або пояснення щодо документів може мати наслідок у вигляді grzywna за правилами Art. 154 § 6.",
      rules: [
        {
          locator: "Art. 293 § 1",
          explanation:
            "Підстава — невиконання саме wezwanie, зробленого за Art. 292; розмір grzywna відсилається до Art. 154 § 6.",
        },
        {
          locator: "Art. 293 § 2",
          explanation:
            "Для osoby prawna або іншої jednostka організаційний обов'язок оцінюється щодо kierownik чи конкретного pracownik, відповідального за виконання.",
        },
      ],
      legalEffect:
        "Суд може застосувати grzywna, але стаття не робить її автоматичною: важливі зміст wezwanie, адресат і невиконаний обов'язок.",
      foreignersCase:
        "Якщо орган зберігає матеріали справи іноземця про pobyt, не ігноруйте wezwanie sądu щодо копій; наслідок може стосуватися відповідальної особи або pracownik.",
    },
    {
      provisionId: "ppsa-art-294",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 294 передбачає, що після подання urzędowo poświadczone odpisy przewodniczący розпоряджається долучити їх до akt, а odpis zarządzenie doręczaється сторонам.",
          sourceLocator: "Art. 294",
        },
      ],
      summary:
        "Засвідчені копії, подані для відновлення матеріалів, формально долучаються до akt за розпорядженням przewodniczący, про яке повідомляють сторони.",
      rules: [
        {
          locator: "Art. 294",
          explanation:
            "Відрізняйте саме urzędowo poświadczone odpisy від неформальних копій: стаття говорить про перші.",
        },
        {
          locator: "Art. 294",
          explanation:
            "Сторони мають отримати odpis zarządzenie про долучення, що дає змогу відстежити склад відновлених akt.",
        },
      ],
      legalEffect:
        "Долучення копій допомагає відновленню akt, але не доводить, що всі втрачені документи вже знайдені або що їх зміст повністю встановлено.",
      foreignersCase:
        "У справі іноземця перевірте, які urzędowo poświadczone odpisy фактично долучені до akt, і збережіть doręczenie odpis zarządzenie.",
    },
    {
      provisionId: "ppsa-art-295",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 295 передбачає: якщо odtworzenie akt неможливо провести за правилами попередніх статей, przewodniczący викликає сторони подати точні oświadczenia про зміст загублених або знищених pism і докази тверджень, зокрема prywatne odpisy та інші pisma й notatki, корисні для відновлення akt.",
          sourceLocator: "Art. 295",
        },
      ],
      summary:
        "Коли офіційних копій недостатньо, суд переходить до заяв сторін та інших доступних матеріалів про зміст втрачених документів.",
      rules: [
        {
          locator: "Art. 295",
          explanation:
            "Ця стадія застосовується, якщо спосіб відтворення з попередніх статей не спрацював; у oświadczeniaх описуйте зміст конкретних pism.",
        },
        {
          locator: "Art. 295",
          explanation:
            "Можна подати prywatne odpisy, інші pisma та notatki, але їхню доказову цінність оцінює sąd.",
        },
      ],
      legalEffect:
        "Норма розширює джерела для відновлення akt, але не перетворює приватну копію чи нотатку на автоматично достовірний оригінал.",
      foreignersCase:
        "Іноземцю, чиї матеріали про pobyt частково втрачені, слід описати кожен відомий документ і додати наявні prywatne odpisy, листи та нотатки з поясненням їх походження.",
    },
    {
      provisionId: "ppsa-art-296",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 296 § 1 зобов'язує sąd незалежно від oświadczenia та wnioski проводити з urzędu dochodzenia щодо всіх обставин, важливих для встановлення змісту втрачених akt, враховувати записи repertoria та інших службових книг, а також дозволяє допитувати свідків і сторони. За § 2 до таких доказів відповідно застосовуються przepisy Kodeksu postępowania cywilnego.",
          sourceLocator: "Art. 296 § 1–2",
        },
      ],
      summary:
        "Суд не обмежується тим, що подали сторони: він сам досліджує можливі джерела змісту akt і може використовувати відповідні правила доказування цивільного процесу.",
      rules: [
        {
          locator: "Art. 296 § 1",
          explanation:
            "До можливих свідків належать учасники попереднього postępowanie, зокрема sędziowie, prokuratorzy, protokolanci та pełnomocnicy; перелік не замінює оцінки конкретної релевантності.",
        },
        {
          locator: "Art. 296 § 2",
          explanation:
            "Правила Kodeks postępowania cywilnego застосовуються відповідно саме до проведення доказів, названих у § 1.",
        },
      ],
      legalEffect:
        "Суд має активну роль у встановленні змісту akt, але результат залежить від доступності записів, свідків та інших доказів.",
      foreignersCase:
        "У справі іноземця про pobyt назвіть суду всі можливі джерела — repertoria, листування, протоколи й свідків — але не припускайте, що кожне свідчення відновить документ повністю.",
    },
    {
      provisionId: "ppsa-art-297",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 297 наказує після postępowanie за Art. 295 і Art. 296 постановити postanowienie про спосіб і обсяг відтворення загублених akt або про неможливість їх відтворення; на це postanowienie przysługuje zażalenie.",
          sourceLocator: "Art. 297",
        },
      ],
      summary:
        "Після збору доступних матеріалів суд формально визначає, що і в якому обсязі відтворено, або визнає odtworzenie неможливим.",
      rules: [
        {
          locator: "Art. 297",
          explanation:
            "Порівнюйте резолютивну частину postanowienie зі зібраними матеріалами: воно має визначити спосіб та обсяг, а не лише констатувати втрату.",
        },
        {
          locator: "Art. 297",
          explanation:
            "На postanowienie про відтворення або його неможливість закон прямо передбачає zażalenie.",
        },
      ],
      legalEffect:
        "Postanowienie визначає процесуальний стан akt і відкриває передбачений законом засіб оскарження, але не відновлює автоматично всі втрачені документи.",
      foreignersCase:
        "У справі іноземця з утраченими akt уважно прочитайте postanowienie про обсяг odtworzenie та строк і спосіб wniesienia zażalenie.",
    },
    {
      provisionId: "ppsa-art-298",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 298 дозволяє повторно wniesienie skarga або środka odwoławczego протягом тридцяти днів від prawomocność postanowienie, якщо akta неможливо відтворити або відтворено їх недостатньо для dalsze postępowanie. В інших випадках sąd продовжує postępowanie настільки, наскільки це можливо з урахуванням збережених і відтворених akt; на postanowienie про podjęcie dalszego postępowania przysługuje zażalenie.",
          sourceLocator: "Art. 298",
        },
      ],
      summary:
        "Стаття встановлює два шляхи після невдалого відтворення akt: повторне подання skarga або środka odwoławczego у тридцятиденний строк чи продовження справи з доступним матеріалом.",
      rules: [
        {
          locator: "Art. 298 zdanie pierwsze",
          explanation:
            "Тридцятиденний строк починається від prawomocność postanowienie про неможливість або недостатність odtworzenie, а не від самої втрати akt.",
        },
        {
          locator: "Art. 298 zdanie drugie",
          explanation:
            "Якщо відтворені матеріали достатні для продовження, sąd враховує akta, що залишилися та були відтворені; postanowienie про podjęcie можна оскаржити zażalenie.",
        },
      ],
      legalEffect:
        "Норма може повернути стороні можливість повторно подати skarga або продовжити наявне postępowanie, але вибір залежить від фактичного обсягу відтворених akt.",
      foreignersCase:
        "Якщо втрата akt перешкоджає спору іноземця про pobyt, зафіксуйте дату prawomocność postanowienie та не пропустіть тридцять днів для повторного wniesienie, коли саме це дозволено Art. 298.",
    },
    {
      provisionId: "ppsa-art-299",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 299 § 1 регулює doręczenia стороні з місцем zamieszkania, zwykły pobyt або siedziba в іншій державі-члені UE, Швейцарії чи державі-члені EFTA–EOG, яка не встановила повноважного pełnomocnik до ведення справи в Польщі: суд надсилає pisma przesyłką poleconą з potwierdzeniem odbioru або рівноцінним відправленням. За § 2 сторона поза Польщею, UE, Швейцарією та EFTA–EOG без такого pełnomocnik мусить разом зі skarga встановити pełnomocnik do doręczeń у Польщі; § 3 дає два місяці на усунення цього braku під rygor odrzucenie skargi. § 4–5 регулюють повідомлення учасника та залишення pism в akt зі skutkiem doręczenia, а § 6 містить винятки для umowa międzynarodowa та електронного doręczenie.",
          sourceLocator: "Art. 299 § 1–6",
        },
      ],
      summary:
        "Стаття встановлює спеціальні правила судового doręczenia та обов'язок ustanowienie pełnomocnik do doręczeń для сторін і учасників, які перебувають поза визначеними державами.",
      rules: [
        {
          locator: "Art. 299 § 1–3",
          explanation:
            "Визначте країну проживання або siedziba та наявність повного pełnomocnik у Польщі: для частини держав діє спеціальне поштове doręczenie, для інших — обов'язок повіреного до doręczeń і двомісячний строк під rygor odrzucenie.",
        },
        {
          locator: "Art. 299 § 4–6",
          explanation:
            "Учасника повідомляють про його обов'язок, а за невиконанням pisma залишаються в akt зі skutkiem doręczenia; перевірте виняток за umowa międzynarodowa або електронним doręczenie.",
        },
      ],
      legalEffect:
        "Невстановлення потрібного pełnomocnik do doręczeń може мати наслідки для допустимості skarga або для чинності вручення; точний режим залежить від статусу сторони, країни та способу doręczenie.",
      foreignersCase:
        "Іноземцю у спорі про pobyt визначте його фактичне місце zamieszkania або zwykły pobyt, державу та вид повіреного: не пропустіть двомісячний строк і не покладайтеся на звичайну адресу за межами Польщі.",
    },
  ],
})
