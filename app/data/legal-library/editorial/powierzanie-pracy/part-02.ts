import { defineEditorialPart } from "../define-editorial-part"

export const powierzaniePracyPart02 = defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-51",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 51 дозволяє видати zezwolenie na pracę sezonową після в'їзду cudzoziemca, якщо wniosek уже wpisano до ewidencji wniosków і polski podmiot подав staroście oświadczenie про явку до роботи та документи про в'їзд.",
          sourceLocator: "Art. 51 ust. 1–4",
        },
      ],
      summary:
        "Норма описує перехід від wpisу wniosku до фактичного zezwolenie na pracę sezonową. Для цього потрібні підтвердження в'їзду за візою для сезонної роботи або в рамках ruch bezwizowy, а також дані про zakwaterowanie і період роботи.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Oświadczenie містить дані podmiotu і cudzoziemca, відомості про pobyt, адресу zakwaterowania та період роботи сезонної.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Робота на умовах zaświadczenia o wpisie є legalною від подання документів до doręczenia рішення. Якщо початок припав на вихідний день urzędu, документи можна подати в перший робочий день urzędu. Період zawieszenia на прохання strony не зараховується.",
        },
      ],
      legalEffect:
        "Подання документів запускає прямо передбачений законом період legalnej pracy, але не замінює рішення про zezwolenie і не подовжує його межі.",
      foreignersCase:
        "Перед початком sezonowa praca перевірте запис wniosku, документ в'їзду, дату першого в'їзду та готовність podmiotu подати oświadczenie staroście. Збережіть підтвердження подання: саме воно важливе для періоду до рішення.",
    },
    {
      provisionId: "powierzanie-pracy-art-52",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 52 передбачає umorzenie postępowania з мาจу закону, якщо після wpisu wniosku не подано oświadczenia про явку до роботи у встановлений строк.",
          sourceLocator: "Art. 52 ust. 1–2",
        },
      ],
      summary:
        "Якщо oświadczenie про прибуття до сезонної роботи не подано, справа про zezwolenie na pracę sezonową автоматично припиняється після 90 днів від запланованого початку або після запланованого завершення роботи — залежно від того, що настане раніше.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Строк прив'язаний до дати початку, зазначеної у wpisie, і до дати завершення роботи; закон називає обидві підстави umorzenie.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Після umorzenie wpis до ewidencji wniosków також unieważnia się з мadu закону.",
        },
      ],
      legalEffect:
        "Невиконання кроку з oświadczeniem припиняє саме це провадження та анулює запис; ця стаття не дає окремої підстави почати роботу.",
      foreignersCase:
        "Якщо cudzoziemiec не приїжджає або план змінився, podmiot має зіставити дати у wpisie з поданим oświadczeniem. Не слід розраховувати на старий запис після umorzenie та unieważnienie.",
    },
    {
      provisionId: "powierzanie-pracy-art-53",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 53 дозволяє staroście на прохання польського podmiotu робити wpis wniosku на періоди до 9 місяців у календарному році протягом не більш як трьох наступних календарних років за спеціальних умов.",
          sourceLocator: "Art. 53",
        },
      ],
      summary:
        "Це спеціальний механізм для громадянина держави, визначеної у виконавчих приписах, якщо той самий podmiot уже щонайменше раз за останні п'ять років доручав йому сезонну роботу відповідно до zezwolenie.",
      rules: [
        {
          locator: "Art. 53",
          explanation:
            "Кожен період не може перевищувати 9 місяців у календарному році; періоди можуть припадати не більш як на три послідовні календарні роки.",
        },
        {
          locator: "Art. 53",
          explanation:
            "Потрібні громадянство з переліку, виданого на підставі art. 3 ust. 8 pkt 2, і попереднє законне доручення роботи цій самій особі в останні 5 років.",
        },
      ],
      legalEffect:
        "Норма лише дозволяє багаторічний wpis за визначених передумов; вона не скасовує річний ліміт і не гарантує видачу кожного наступного zezwolenie.",
      foreignersCase:
        "Для повторного сезонного працівника зберіть попередні zezwolenia та перевірте державу громадянства у чинному rozporządzenie. Окремо рахуйте 9 місяців кожного календарного року і максимум три роки.",
    },
    {
      provisionId: "powierzanie-pracy-art-54",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 54 обмежує zezwolenie na pracę sezonową дев'ятьма місяцями календарного року і встановлює різний початок обчислення для в'їзду за сезонною візою або ruch bezwizowy та для іншої підстави pobytu.",
          sourceLocator: "Art. 54 ust. 1–3",
        },
      ],
      summary:
        "Межа 9 місяців є річною. Для особи, яка в'їхала у зв'язку із wpisem wniosku, період рахується від першого в'їзду до держав Schengen після видачі zaświadczenie; за іншою підставою pobytu враховується період legalного pobyt і попередні сезонні zezwolenia.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Zezwolenie видається на визначений строк до 9 місяців у календарному році, а для відповідного в'їзду відлік починається з першого в'їзду до Schengen у цьому році.",
        },
        {
          locator: "ust. 3",
          explanation:
            "За іншою підставою pobytu zezwolenie може охопити лише період legalного pobyt і не більше 9 місяців разом з періодами з попередніх сезонних zezwolenia.",
        },
      ],
      legalEffect:
        "Стаття встановлює межу дозволу, а не автоматичне право перебувати чи працювати після закінчення документа pobyt.",
      foreignersCase:
        "Зробіть хронологію першого в'їзду до Schengen та всіх сезонних zezwolenia за календарний рік. Не рахуйте 9 місяців лише від дати підпису umowy або рішення.",
    },
    {
      provisionId: "powierzanie-pracy-art-55",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55 визначає обов'язкові елементи zezwolenie na pracę sezonową: сторони, час роботи або години, мінімальне wynagrodzenie, правову підставу та строк чинності; для pracownik tymczasowy також pracodawca użytkownik.",
          sourceLocator: "Art. 55 ust. 1–2",
        },
      ],
      summary:
        "У zezwolenie мають бути зафіксовані не лише ім'я працівника і podmiot, а й вимір часу, мінімальна ставка, підстава роботи та строк. Для тимчасової роботи окремо називається pracodawca użytkownik.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation:
            "Перелік охоплює дані polski podmiot і cudzoziemiec, wymiar czasu pracy або години, найнижче wynagrodzenie, правову підставу та okres ważności.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо робота є pracą tymczasową, zezwolenie визначає також pracodawca użytkownik.",
        },
      ],
      legalEffect:
        "Умови в zezwolenie утворюють рамку дозволеної роботи; назва документа сама по собі не змінює зазначених обмежень.",
      foreignersCase:
        "Порівняйте zezwolenie з umowa: години, мінімальне wynagrodzenie, підставу та pracodawca użytkownik мають бути узгоджені до початку роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-56",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 56 допускає для визначених громадян інший вид роботи до сукупно 30 днів чинності сезонного zezwolenie без нового документа за одночасного виконання умов; також перелічує зміни, що не потребують зміни або нового zezwolenie.",
          sourceLocator: "Art. 56 ust. 1–2",
        },
      ],
      summary:
        "Виняток стосується лише громадян держави з переліку art. 3 ust. 8 pkt 2, оплати не нижчої за сезонне zezwolenie і не тимчасової роботи. Окремі зміни договору, включно зі збільшенням годин у встановлених межах, також не вимагають нового документа.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Інший вид роботи дозволений не довше 30 днів загалом за весь строк zezwolenie; усі три умови мають виконуватися разом.",
        },
        {
          locator: "ust. 2 pkt 1–4",
          explanation:
            "Без нового zezwolenie допускаються названі заміни umowa та обставини ust. 1, а також збільшення до повного часу або до 299 годин на місяць за пропорційного збільшення wynagrodzenie.",
        },
      ],
      legalEffect:
        "Це вузький виняток із прив'язаності роботи до сезонних умов, а не загальна свобода змінювати посаду чи договір.",
      foreignersCase:
        "Перед зміною роботи перевірте громадянство, загальну кількість 30 днів, статус pracownik tymczasowy та пропорцію годин і wynagrodzenie. За межами переліку потрібен окремий аналіз дозволу.",
    },
    {
      provisionId: "powierzanie-pracy-art-57",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 57 прямо встановлює, що до zezwolenia na pracę sezonową не застосовується art. 19.",
          sourceLocator: "Art. 57",
        },
      ],
      summary:
        "Стаття є спеціальним застереженням про незастосування art. 19 до сезонного zezwolenie. Вона не пояснює зміст art. 19 і не замінює перевірку інших умов розділу.",
      rules: [
        {
          locator: "Art. 57",
          explanation:
            "У сезонному провадженні не можна автоматично застосовувати art. 19 лише тому, що його застосовують до іншого виду zezwolenie.",
        },
      ],
      legalEffect:
        "Наслідок обмежений виключенням однієї норми; з тексту art. 57 не випливає скасування інших вимог до сезонної роботи.",
      foreignersCase:
        "Якщо у заяві або поясненні посилаються на art. 19, окремо перевірте, чи не є це помилковим перенесенням правила: для zezwolenie na pracę sezonową діє art. 57.",
    },
    {
      provisionId: "powierzanie-pracy-art-58",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 58 регулює przedłużenie zezwolenia na pracę sezonową, у тому числі продовження для того самого або іншого польського podmiot, межу 9 місяців та legalність роботи під час належно поданого wniosku.",
          sourceLocator: "Art. 58 ust. 1–8",
        },
      ],
      summary:
        "Можливість przedłużenie залежить від способу в'їзду і зв'язку з wpisem wniosku. Для належного wniosku робота може залишатися legalною до остаточності рішення, а для нового podmiot без попередньої роботи — лише до doręczenia рішення і максимум 30 днів.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Starosta може продовжити zezwolenie для того самого або іншого polski podmiot лише у передбачених випадках; загальна межа разом із сезонним pobyt — 9 місяців календарного року.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "За wniosek без braków formalnych або з ними, усуненими вчасно, робота legalна до остаточного рішення, без зарахування zawieszenia на прохання strony. Для podmiot, який безпосередньо перед заявою не доручав роботу, діє межа 30 днів до decyzja.",
        },
        {
          locator: "ust. 7–8",
          explanation:
            "До przedłużenie відповідно застосовуються правила видачі сезонного zezwolenie, але art. 50 до цього wniosku не застосовується.",
        },
      ],
      legalEffect:
        "Поданий належний wniosek може тимчасово зберегти legalність роботи, але не скасовує річний ліміт і не робить результат передбаченим.",
      foreignersCase:
        "Звірте підставу в'їзду, попереднього podmiot, brak formalny та дату рішення. Не включайте до періоду legalної роботи час zawieszenia, якого просила сторона.",
    },
    {
      provisionId: "powierzanie-pracy-art-59",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 59 зобов'язує podmiot, який забезпечує zakwaterowanie сезонному працівнику, укласти окрему письмову umowa і забороняє автоматичне утримання czynsz із wynagrodzenie.",
          sourceLocator: "Art. 59 ust. 1–6",
        },
      ],
      summary:
        "Umowa najmu або użyczenia kwatery має бути окремою, письмовою і перекладеною зрозумілою для cudzoziemiec мовою. Czynsz не можна автоматично відраховувати, а його розмір не має бути надмірним щодо netto wynagrodzenie, стандарту та ринкових ставок.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Потрібна окрема письмова umowa про умови najmu або użyczenia; перед підписанням podmiot надає переклад зрозумілою мовою.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Автоматичне утримання czynsz із заробітку заборонене, а положення про нього є nieważne. Czynsz не може бути wygórowany з огляду на netto wynagrodzenie, стандарт і ринок.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Cudzoziemiec може повідомити starostę про невідповідність kwatera умовам для перебування людей; starosta передає повідомлення органам будівельного контролю.",
        },
      ],
      legalEffect:
        "Норма захищає окремість житлових умов і фактичне отримання заробітку, але не робить будь-яку kwatera автоматично відповідною — її стан оцінюється компетентними органами.",
      foreignersCase:
        "До підписання отримайте переклад umowa, перевірте спосіб оплати czynsz і збережіть докази. За небезпечних умов повідомте starostę, який видав сезонне zezwolenie.",
    },
    {
      provisionId: "powierzanie-pracy-art-60",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 60 визначає випадки, коли starosta видає decyzja про uchylenie zezwolenia na pracę sezonową, і передбачає окремі наслідки для odszkodowanie та wpis до ewidencji wniosków.",
          sourceLocator: "Art. 60 ust. 1–5",
        },
      ],
      summary:
        "Uchylenie відбувається у випадках, відсилаючих до art. 22 ust. 1 pkt 1–5, 7–8, або за обставин art. 13 ust. 1 pkt 1 lit. c–g. Для визначених підстав cudzoziemiec має право вимагати odszkodowanie від polski podmiot за невиконані зобов'язання.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Starosta видає decyzja про uchylenie у перелічених відсилочних випадках; обмеження з art. 22 ust. 1 pkt 1 не застосовується до обставин art. 56 ust. 1–2.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Odszkodowanie передбачено при uchylenie за ust. 1 pkt 2 або art. 22 ust. 1 pkt 8. Рішення додатково doręczaється cudzoziemiec, який в'їхав у зв'язку з wpisem, а після остаточності wpis unieważnia się з urzędu.",
        },
      ],
      legalEffect:
        "Uchylenie припиняє дію дозволу після відповідної процедури; право на odszkodowanie залежить від конкретної підстави, тому не є автоматичним для кожного uchylenie.",
      foreignersCase:
        "Після decyzja встановіть, на який саме пункт art. 60 або art. 22 вона посилається. Це визначає, чи є спеціальне право на odszkodowanie і що станеться із wpisem.",
    },
    {
      provisionId: "powierzanie-pracy-art-61",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 61 встановлює, коли polski podmiot подає через систему oświadczenie o powierzeniu pracy cudzoziemcowi: громадянство з визначеного переліку, робота в Польщі, поза сезонними видами діяльності, без ролей art. 2 pkt 9 lit. c–e, максимум 24 місяці та початок не пізніше шести місяців від подання.",
          sourceLocator: "Art. 61 ust. 1–2",
        },
      ],
      summary:
        "Oświadczenie є спрощеним шляхом лише для сукупності умов. Якщо хоча б умова з ust. 1 не виконана, oświadczenie залишають bez rozpoznania, а не переходить автоматично до іншої процедури.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Мають одночасно виконуватися вимоги щодо держави громадянства, місця роботи, виду діяльності та відсутності передбачених ролей pełnienia funkcji або reprezentacji.",
        },
        {
          locator: "ust. 1 pkt 5–6",
          explanation:
            "Період роботи в oświadczenie не може перевищувати 24 місяці, а дата початку має бути не пізніше 6 місяців від дня подання.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Oświadczenie, яке не відповідає умовам ust. 1, залишають bez rozpoznania.",
        },
      ],
      legalEffect:
        "Дотримання формальних часових та предметних меж відкриває шлях до wpisу, але саме по собі не підтверджує право на pobyt або роботу без інших вимог.",
      foreignersCase:
        "Перед поданням зіставте паспорт, місце і вид роботи, роль особи, дати та максимальні 24 місяці. Невідповідність краще виправити до подання, бо oświadczenie можуть залишити bez rozpoznania.",
    },
    {
      provisionId: "powierzanie-pracy-art-62",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 62 перелічує дані для oświadczenie, додатки та вимоги до oświadczenie podmiotu про обставини art. 13; це oświadczenie підписується під rygor odpowiedzialności karnej і не раніше ніж за 30 днів до подання.",
          sourceLocator: "Art. 62 ust. 1–6",
        },
      ],
      summary:
        "Oświadczenie має ідентифікувати podmiot, cudzoziemiec, роботу, договір і, за тимчасової роботи, pracodawca użytkownik. До нього додаються підтвердження та оплата, а правдивість окремого oświadczenie посилена кримінально-правовим застереженням.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Заповнюються дані podmiot і cudzoziemiec, підстава pobyt, zawód, stanowisko, місце, дати, договір, мінімальне wynagrodzenie, час та дані pracodawca użytkownik за потреби.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Додаються oświadczenie про обставини art. 13, підтвердні документи та доказ opłata. Застереження про відповідальність за false oświadczenie має бути прямо включене; підпис — не раніше 30 днів до подання.",
        },
        {
          locator: "ust. 6",
          explanation:
            "Minister właściwy do spraw pracy визначає розпорядженням перелік документів, які додаються.",
        },
      ],
      legalEffect:
        "Неповні або недостовірні дані можуть вплинути на wpis і подальшу відповідальність; перелік документів слід брати з чинного розporządzenie, а не вигадувати.",
      foreignersCase:
        "Підготуйте одну узгоджену версію даних про посаду, години, оплату й pobyt. Перевірте дату підпису oświadczenie та документи з актуального wykaz ministerstwa.",
    },
    {
      provisionId: "powierzanie-pracy-art-63",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 63 вимагає сплатити opłata разом з oświadczenie, визначає розподіл доходу та правило невідшкодування, а верхню межу opłata передає до rozporządzenie.",
          sourceLocator: "Art. 63 ust. 1–4",
        },
      ],
      summary:
        "Opłata за oświadczenie надходить порівну до budżet państwa і dochód powiatu. Зазвичай її не повертають; закон називає вузькі винятки, пов'язані з окремими підставами odmowa.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Oświadczenie подається разом з opłata, а дохід ділиться порівну між державою і powiat.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Opłata не повертається, крім випадків, прямо перелічених у зв'язку з art. 65 ust. 1 pkt 3 або pkt 5.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Minister визначає розмір opłata розпорядженням, але не вище 10% мінімального wynagrodzenie; враховуються тривалість роботи та вартість провадження.",
        },
      ],
      legalEffect:
        "Платіж є умовою подання, але його внесення не гарантує wpis; питання повернення вирішується лише за законною винятковою підставою.",
      foreignersCase:
        "До подання перевірте актуальний розмір opłata і призначення платежу. Збережіть potwierdzenie, але не розглядайте його як доказ позитивного рішення.",
    },
    {
      provisionId: "powierzanie-pracy-art-64",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 64 визначає територіально компетентного starosta для wpis oświadczenie і дозволяє йому встановити пізнішу дату початку роботи, не раніше дня після wpis.",
          sourceLocator: "Art. 64 ust. 1–2",
        },
      ],
      summary:
        "Компетентність прив'язана до siedziba або stałe miejsce pobytu polski podmiot, а у спеціальному випадку — до сталого місця діяльності в Польщі. Starosta може відсунути початок роботи після дати, вказаної подавачем.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Oświadczenie wpisує starosta за siedziba або місцем постійного pobyt podmiot; для art. 62 ust. 2 — за stałe miejsce wykonywania działalności gospodarczej.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Пізніша дата початку може бути не ранішою за день, що настає після wpis до ewidencji oświadczeń.",
        },
      ],
      legalEffect:
        "Дата в реєстрі може відрізнятися від запропонованої дати, тому початок роботи треба перевіряти саме у wpis, а не лише в заяві.",
      foreignersCase:
        "Визначте właściwy starosta за адресою podmiot і після wpis перевірте фактичну дату початку. Не плануйте роботу на дату, яку орган замінив пізнішою.",
    },
    {
      provisionId: "powierzanie-pracy-art-65",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65 зобов'язує starosta відмовити у wpis oświadczenie за невідповідної оплати, неправдивих даних, обставин art. 13, повторного покарання або перевищення лімітів; odmowa оформлюється decyzja administracyjna.",
          sourceLocator: "Art. 65 ust. 1–5",
        },
      ],
      summary:
        "Заробіток має бути не нижчим одночасно за оплату порівнюваних працівників і мінімальне wynagrodzenie. Також перевіряються доброчесність даних, заборонні обставини podmiot та можливі річні limity.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Перелік обов'язкової odmowa охоплює низьке wynagrodzenie, false дані або документи, art. 13, дворазове правомочне покарання за art. 84 ust. 10 за останні 12 місяців і перевищення limit.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Rada Ministrów може встановити limity за регіонами, професіями, договорами чи видами діяльності; minister щомісяця публікує стан їх використання і оголошує повне використання.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Art. 14 застосовується відповідно, а odmowa wpis оформлюється decyzja administracyjna.",
        },
      ],
      legalEffect:
        "Це перелік обов'язкових підстав для відмови, але відсутність однієї підстави не доводить виконання всіх інших умов процедури.",
      foreignersCase:
        "Порівняйте запропоновану оплату з внутрішнім порівнянним stanowisko та мінімальним wynagrodzenie, перевірте art. 13, історію штрафів і доступний limit. За odmowa аналізуйте мотиви decyzja окремо.",
    },
    {
      provisionId: "powierzanie-pracy-art-66",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 66 встановлює строк для wpis або odmowa wpis oświadczenie: до 7 робочих днів без postępowanie wyjaśniające і до 30 днів у справі, що його потребує.",
          sourceLocator: "Art. 66",
        },
      ],
      summary:
        "Строк залежить від того, чи потрібне з'ясування обставин. Відлік починається від otrzymanie oświadczenie органом, а не від бажаної дати початку роботи.",
      rules: [
        {
          locator: "Art. 66",
          explanation:
            "Без postępowanie wyjaśniające діє максимум 7 робочих днів; із таким провадженням — максимум 30 днів від отримання oświadczenie.",
        },
      ],
      legalEffect:
        "Строк орієнтує щодо роботи органу, але сам по собі не створює wpis і не легалізує роботу до його здійснення.",
      foreignersCase:
        "Зафіксуйте дату, коли starosta отримав oświadczenie, і з'ясуйте, чи справа вимагає postępowanie wyjaśniające. Не замінюйте очікування wpis фактичним початком роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-67",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 67 виключає art. 37 KPA з провадження щодо wpis oświadczenie, визначає єдиною стороною podmiot, обмежує art. 31 KPA і вимагає подавати środek zaskarżenia через систему; органом вищого ступеня є minister właściwy do spraw pracy.",
          sourceLocator: "Art. 67 ust. 1–5",
        },
      ],
      summary:
        "У цій процедурі cudzoziemiec не є стороною: стороною є лише podmiot, який доручає роботу. Оскарження має цифровий канал; за несправності системи закон переносить крайній момент на перший робочий день після усунення несправності.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Art. 37 і art. 31 KPA не застосовуються у вказаному обсязі, а стороною є виключно podmiot powierzający pracę.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Środek zaskarżenia подається тільки через визначену систему. Якщо її несправність не дала подати вчасно, подання можливе не пізніше першого робочого дня після усунення проблеми.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Органом вищого ступеня для справ oświadczenie є minister właściwy do spraw pracy.",
        },
      ],
      legalEffect:
        "Процесуальний статус і канал оскарження є спеціальними; подання cudzoziemiec окремо не перетворює його на сторону цього провадження.",
      foreignersCase:
        "Podmiot має стежити за індивідуальним kontem і зберегти підтвердження цифрового подання. Cudzoziemiec може потребувати іншого правового шляху для власного pobyt, бо тут він не є стороною.",
    },
    {
      provisionId: "powierzanie-pracy-art-68",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 68 встановлює обов'язки podmiot після wpis oświadczenie: відповідність umowa, передання її копії до органу до початку роботи, актуальна мінімальна оплата, повідомлення cudzoziemiec і доступ документів для контролю.",
          sourceLocator: "Art. 68 ust. 1–3",
        },
      ],
      summary:
        "Wpis не завершує відповідальність podmiot. Він має укласти і передати польську копію umowa, підвищити оплату до актуального мінімуму та пропорційно підняти її при збільшенні часу; за невиплату належить виплатити заборгованість.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Umowa має відображати oświadczenie або допустиму зміну, її копія подається через систему до початку роботи, а cudzoziemiec отримує wpis oświadczenie.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Wynagrodzenie доводиться до актуального мінімуму і збільшується пропорційно до більшого wymiar czasu або кількості годин за umowa cywilnoprawna.",
        },
        {
          locator: "ust. 1 pkt 6–8; ust. 2–3",
          explanation:
            "Podmiot має zachować należytą staranność, надати документи уповноваженим органам і копію для pracodawca użytkownik; порушення треба негайно виправити, а невиплачене wynagrodzenie — доплатити.",
        },
      ],
      legalEffect:
        "Виконання обов'язків триває після wpis; невідповідність umowa або оплати може мати наслідки навіть за чинного запису.",
      foreignersCase:
        "До першого робочого дня перевірте польську копію umowa у системі, актуальне мінімальне wynagrodzenie і пропорцію годин. Під час роботи зберігайте payslips та документи для можливого контролю.",
    },
    {
      provisionId: "powierzanie-pracy-art-69",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 69 перелічує зміни, за яких новий wpis oświadczenie не потрібен: адреса, назва або форма podmiot, przejście zakładu, збільшення часу до повного та зміна назви stanowisko без зміни обов'язків.",
          sourceLocator: "Art. 69 pkt 1–4",
        },
      ],
      summary:
        "Не кожна зміна реквізитів чи організації праці вимагає нового oświadczenie. Виняток обмежений названими обставинами і не охоплює зміну фактичного zakres obowiązków без перевірки.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Новий wpis не потрібен при зміні siedziba, місця pobyt, stałe miejsce діяльності, назви або форми prawna podmiot чи pracodawca użytkownik, а також при przejście zakładu.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Допускається збільшення часу або годин до pełny wymiar та зміна назви stanowisko, якщо zakres obowiązków не змінився.",
        },
      ],
      legalEffect:
        "Стаття звільняє лише від нового wpis у визначених межах; вона не скасовує обов'язки щодо wynagrodzenie, umowa або повідомлення.",
      foreignersCase:
        "Документуйте, що змінилася лише назва, адреса чи час, а не фактичні обов'язки. За новим місцем роботи або іншою роллю не робіть висновок про виняток без порівняння з pkt 1–4.",
    },
    {
      provisionId: "powierzanie-pracy-art-70",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 70 вимагає повідомляти starosta про початок роботи протягом 7 днів, про непочаток — протягом 14 днів від визначеної дати, а також про те, що робота не почнеться або завершилася раніше.",
          sourceLocator: "Art. 70 ust. 1–5",
        },
      ],
      summary:
        "Повідомлення подаються через систему. Якщо система не працювала, допускається подання першого робочого дня після усунення несправності; повідомлення про непочаток тягне unieważnienie wpis з мadu закону.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Про podjęcie pracy повідомляють у 7-денний строк, про niepodjęcie — у 14-денний від дати початку в ewidencja; окремо повідомляють про niepodjęcie або раннє zakończenie.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Усі повідомлення подаються через teleinformatyczny system; за його несправності строк переноситься до першого робочого дня після усунення.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Після повідомлення за ust. 2 wpis oświadczenie до ewidencji oświadczeń unieważniaється з мadu закону.",
        },
      ],
      legalEffect:
        "Повідомлення є окремим обов'язком після wpis і впливає на чинність запису; його не слід змішувати з копією umowa чи самим початком роботи.",
      foreignersCase:
        "Ведіть календар дати фактичного podjęcie та дати в ewidencja. Якщо робота не почалася або закінчилася раніше, подайте правильне повідомлення через систему й збережіть його підтвердження.",
    },
    {
      provisionId: "powierzanie-pracy-art-71",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 71 визнає legalною роботу після завершення oświadczenie, якщо cudzoziemiec працював за umowa o pracę щонайменше 3 місяці, а podmiot вчасно подав належний wniosek про zezwolenie на тому самому stanowisko.",
          sourceLocator: "Art. 71 ust. 1–4",
        },
      ],
      summary:
        "Перехідний захист діє від дати завершення роботи в oświadczenie до wydanie zezwolenia або doręczenie odmowa, за умов не гірших. Аналогічне правило застосовується до wniosek cudzoziemiec про pobyt czasowy і pracę; zawieszenie на прохання strony виключає захист.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібні щонайменше 3 місяці umowa o pracę, той самий podmiot і stanowisko, wniosek до завершення oświadczenie без braków або з ними, усуненими вчасно; робота legalна на не гірших умовах до zezwolenie або odmowa.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо система не дозволяла подати wniosek, його треба подати першого робочого дня після усунення несправності.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Правила ust. 1–2 відповідно застосовуються до заяви cudzoziemiec на zezwolenie na pobyt czasowy для продовження тієї самої роботи на umowa o pracę.",
        },
      ],
      legalEffect:
        "Це умовний перехідний період, а не автоматичне видання zezwolenia чи pobyt; його межі залежать від фактів, строку і відсутності zawieszenie.",
      foreignersCase:
        "Перевірте три місяці umowa o pracę, тотожність stanowisko, дату подання до завершення wpis та brak formalny. За поданням pobyt не припускайте, що всі умови роботи або pobyt автоматично підтверджені.",
    },
    {
      provisionId: "powierzanie-pracy-art-72",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 72 регулює indywidualne konto у teleinformatyczny system: хто його створює, автентифікацію, дані, допомогу urzędu, підписання документів і електронне doręczenie з fikcją doręczenia через 14 днів.",
          sourceLocator: "Art. 72 ust. 1–11",
        },
      ],
      summary:
        "Konto є основним каналом заяв, пояснень, odwołania, zażalenia, документів і повідомлень у справах роботи. Pisma вважаються doręczone при odbiór або після 14 днів від розміщення, навіть якщо їх не відкрили.",
      rules: [
        {
          locator: "ust. 1–6",
          explanation:
            "Konto можуть створити уповноважена особа podmiot, podmiot без działalność, cudzoziemiec, а також організаційна одиниця чи підприємець-фізична особа; потрібна передбачена автентифікація, а urząd забезпечує допомогу.",
        },
        {
          locator: "ust. 7–8",
          explanation:
            "Заяви, пояснення, odwołania, zażalenia й документи подають через konto; електронні документи підписують kwalifikowany, zaufany або osobisty podpis.",
        },
        {
          locator: "ust. 9–11",
          explanation:
            "Decyzja, postanowienie, wezwanie та інші листи doręчаються на konto, вважаються отриманими при odbiór або через 14 днів; не врегульовані питання доповнює KPA.",
        },
      ],
      legalEffect:
        "Пропуск перевірки konta може запустити строк через 14 днів; цифровий канал не скасовує вимог до підпису та своєчасності.",
      foreignersCase:
        "Після створення konta перевіряйте його та електронну пошту, налаштуйте доступ представника і зберігайте підтвердження подання. Дату відкриття рахуйте окремо від дати розміщення документа.",
    },
    {
      provisionId: "powierzanie-pracy-art-73",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 73 вимагає вести teleinformatyczne rejestry справ про zezwolenie na pracę, zezwolenie sezonowe та oświadczenie; визначає ewidencje і компетентні органи.",
          sourceLocator: "Art. 73 ust. 1–6",
        },
      ],
      summary:
        "Wojewoda веде реєстр permit на роботу, starosta — seasonal і oświadczenie, а minister — частину, пов'язану з засобами оскарження. Реєстри містять дані, документи, wpis, decyzja та судові рішення для провадження й доступу уповноважених органів.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Окремі rejestry охоплюють три види справ; у seasonal є ewidencja wniosków, в oświadczenie — ewidencja oświadczeń. Компетенція розподілена між wojewoda, starosta і minister.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "До rejestr потрапляють дані заяв, документи, postanowienia, wpis, zaświadczenia, decyzje та orzeczenia sądu відповідно до виду справи.",
        },
      ],
      legalEffect:
        "Реєстр є інфраструктурою провадження і обміну даними, а не окремим дозволом; наявність запису треба відрізняти від змісту decyzja.",
      foreignersCase:
        "Уточніть, який орган веде саме вашу ewidencja, і звіряйте номер та статус wpis або рішення. Для спору визначте, чи йдеться про реєстр wojewoda, starosta або minister.",
    },
    {
      provisionId: "powierzanie-pracy-art-74",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 74 доручає minister właściwy do spraw pracy створити centralny rejestr із даних art. 73, регулює передачу й доступ wojewoda, starosta та minister і вимагає анонімізації статистичних даних.",
          sourceLocator: "Art. 74 ust. 1–4",
        },
      ],
      summary:
        "Centralny rejestr збирає дані з профільних реєстрів для виконання завдань і законного доступу органів. Для статистики дані мають бути anonimizowane, що відрізняється від індивідуального розгляду справи.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Minister створює rejestr, а wojewoda, starosta і minister передають дані та можуть користуватися ними лише в межах завдань ustawy.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Minister обробляє dane osobowe для надання їх уповноваженим органам у межах prawa; статистичні дані anonymizuje.",
        },
      ],
      legalEffect:
        "Центральна агрегація полегшує перевірку у провадженні, але не створює самостійної підстави для роботи чи pobyt.",
      foreignersCase:
        "Якщо орган посилається на дані іншої справи, перевірте, для якого завдання він їх використовує. Не ототожнюйте анонімну статистику з висновком про конкретну особу.",
    },
    {
      provisionId: "powierzanie-pracy-art-75",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 75 дозволяє органу безплатно отримувати телетрансляцією дані від PIP, Straż Graniczna, KRK, KAS, ZUS, KRUS, реєстрів cudzoziemiec, KRS, CEIDG і PESEL для істотних обставин провадження.",
          sourceLocator: "Art. 75 ust. 1–12",
        },
      ],
      summary:
        "Орган може перевіряти не лише подані документи, а й штрафи, кримінальні відомості, перетин кордону, податки, внески, реєстраційні дані та статус pobyt. Для різних видів справ діють різні джерела і цілі.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "PIP, Straż Graniczna та KRK надають дані про визначені wykroczenia, злочини, покарання й перетин кордону, коли це істотно для справи.",
        },
        {
          locator: "ust. 5–8",
          explanation:
            "KAS, ZUS і KRUS надають дані про доходи, податки, zgłoszenia до ubezpieczenie та zaległości; реєстр cudzoziemiec — документи pobyt і відповідний wykaz.",
        },
        {
          locator: "ust. 9–12",
          explanation:
            "KRS, CEIDG і PESEL можуть надати реєстраційні та ідентифікаційні дані; отримання відбувається через teleinformatyczne systems ministerstwa pracy.",
        },
      ],
      legalEffect:
        "Перевірка з зовнішніх реєстрів може вплинути на оцінку умов, але стаття говорить про обставини istotne для провадження, а не про необмежений збір даних.",
      foreignersCase:
        "Підготуйте пояснення щодо розбіжностей у податках, ubezpieczenie, перетині кордону чи реєстрах. У рішенні дивіться, яке джерело і яку істотну обставину орган використав.",
    },
    {
      provisionId: "powierzanie-pracy-art-76",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 76 визначає коло органів, яким на запит надаються дані з centralny rejestr, вимагає ідентифікації доступу, заходів безпеки та обмеження зберігання даних часом, необхідним для провадження.",
          sourceLocator: "Art. 76 ust. 1–4",
        },
      ],
      summary:
        "Доступ мають органи, перелічені законом: зокрема wojewoda, starosta, консул, UdSC, PIP, Straż Graniczna, Policja, KAS, ZUS та служби безпеки — кожен для своєї законної мети.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Dane можуть отримувати органи, названі в пунктах 1–15, для відповідних справ про працю, pobyt, візи, контроль, податки, страхування або завдання безпеки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Доступ можливий, якщо можна встановити особу, обсяг, дату і мету доступу, забезпечено безпеку та нагляд; отримані дані зберігаються не довше необхідного для провадження.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Надання даних відбувається з teleinformatyczny system, який веде minister właściwy do spraw pracy.",
        },
      ],
      legalEffect:
        "Стаття створює контрольований канал обміну даними, але не дає будь-якому органу загального доступу поза переліченою метою.",
      foreignersCase:
        "Якщо дані використані у вашій справі, перевірте орган, мету і зв'язок із предметом провадження. Питання захисту даних оцінюйте разом із конкретним способом їх отримання.",
    },
    {
      provisionId: "powierzanie-pracy-art-77",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77 зобов'язує органи після 10 років від дня wydanie ostateczne postanowienie або decyzja у справах zezwolenie na pracę видаляти з реєстрів визначені персональні дані.",
          sourceLocator: "Art. 77",
        },
      ],
      summary:
        "Строк видалення починається від остаточного postanowienie або decyzja про видачу, uchylenie чи залишення wniosku без розгляду. Перелік охоплює дані cudzoziemiec, podmiot, pracodawca użytkownik або podmiot delegujący.",
      rules: [
        {
          locator: "Art. 77",
          explanation:
            "Після 10 років органи, що ведуть rejestry за art. 73 ust. 3, усувають названі персональні дані з реєстрів справ про zezwolenie na pracę.",
        },
      ],
      legalEffect:
        "Це правило зберігання даних у реєстрі permit на pracę; воно не означає автоматичне видалення кожного документа з усіх інших систем.",
      foreignersCase:
        "Для запиту про стару справу встановіть дату ostateczna decyzja або postanowienie і вид реєстру. Не робіть висновок про відсутність усіх архівних документів лише з art. 77.",
    },
    {
      provisionId: "powierzanie-pracy-art-78",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 78 дозволяє minister właściwy do spraw pracy створити resortowy program aktywizacyjny для legalно перебуваючих cudzoziemiec, фінансований із Fundusz Pracy і реалізований після konkurs ofert.",
          sourceLocator: "Art. 78 ust. 1–7",
        },
      ],
      summary:
        "Програма може підтримувати професійну активізацію, інтеграцію і соціальну активність. Виконавців обирають через конкурс серед перелічених установ, а оголошення і результат публікуються в BIP.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Minister може розробити програму для cudzoziemiec з legalny pobyt; програма й обслуговування фінансуються з Fundusz Pracy, а завдання передаються після konkurs ofert.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "До конкурсу допускаються названі podmioty ekonomii społecznej, publiczne służby zatrudnienia, OHP, agencje, instytucje szkoleniowe та JST; інформацію публікують у BIP.",
        },
        {
          locator: "ust. 7",
          explanation:
            "Для вибору realizator не застосовуються положення про доручення публічних завдань з ustawy про działalność pożytku publicznego.",
        },
      ],
      legalEffect:
        "Програма є можливим інструментом підтримки, а не індивідуальним правом на роботу чи фінансування для кожного cudzoziemiec.",
      foreignersCase:
        "Шукайте конкретний конкурс і його умови в BIP ministerstwa. Не називайте загальну можливість програми підтвердженням права на конкретне szkolenie або роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-79",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 79 визначає зміст оголошення konkurs ofert, мінімальний 7-денний строк подання, зміст ofert та документи з oświadczeniaми представника під rygor odpowiedzialności karnej.",
          sourceLocator: "Art. 79 ust. 1–4",
        },
      ],
      summary:
        "Оголошення має дати учасникам завдання, бюджет, строки, умови, критерії та порядок оголошення результату. Oferta описує спосіб роботи, графік і кошторис, а до неї додаються реєстрові документи та правдиві oświadczenia.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "В оголошенні вказують предмет, кошти, строки й умови, критерії, місце та строк подання (не менше 7 днів), розгляд, оголошення результатів і можливі додаткові умови.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Oferta містить опис реалізації, місце й строк, harmonogram, кошторис та додаткові положення; додаються актуальний odpis або дані про статус і повноваження, а також два oświadczenia.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Oświadczenia про використання коштів і відсутність заборони або умисного злочину подаються під rygor відповідальності за false oświadczenie з обов'язковою klauzula.",
        },
      ],
      legalEffect:
        "Вимоги стосуються конкурсного фінансування програми; вони не є умовами wpis oświadczenie про роботу.",
      foreignersCase:
        "Організації, яка хоче реалізувати програму, треба звірити oferta з усіма пунктами оголошення і додати підтвердження повноважень. Не підписуйте стандартну klauzula без перевірки фактів.",
    },
    {
      provisionId: "powierzanie-pracy-art-80",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 80 вимагає реалізувати program aktywizacyjny на підставі umowa і перелічує її істотні умови щодо учасників, дій, результатів, коштів, контролю, змін та розірвання.",
          sourceLocator: "Art. 80 ust. 1–2",
        },
      ],
      summary:
        "Umowa має перетворити конкурсну пропозицію на контрольований план: скільки cudzoziemiec охоплено, що і коли робиться, як вимірюється результат, коли передаються та повертаються кошти.",
      rules: [
        {
          locator: "ust. 1–2 pkt 1–4",
          explanation:
            "Умова визначає кількість учасників, zakres і період дій, очікувані ефекти з mierniki та суму і порядок передачі коштів Fundusz Pracy.",
        },
        {
          locator: "ust. 2 pkt 5–9",
          explanation:
            "Також фіксуються розрахунок, повернення невикористаних коштів, контроль і monitoring, умови зміни або rozwiązania та додаткові положення оголошення.",
        },
      ],
      legalEffect:
        "Права та обов'язки realizator визначаються укладеною umowa в межах art. 80, а не лише фактом перемоги в konkurs.",
      foreignersCase:
        "Перед підписанням перевірте mierniki, правила розрахунку й повернення коштів та порядок контролю. Для навчальної програми окремо фіксуйте кількість учасників і фактичні результати.",
    },
    {
      provisionId: "powierzanie-pracy-art-81",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 81 передбачає повернення коштів Fundusz Pracy, використаних не за призначенням, невикористаних, отриманих безпідставно або в надмірній сумі, а для частини випадків — відсотки як за податкові борги.",
          sourceLocator: "Art. 81 ust. 1–3",
        },
      ],
      summary:
        "До коштів програми відповідно застосовуються окремі норми ustawy o finansach publicznych. Неправильне, зайве або безпідставне отримання коштів створює обов'язок повернення на рахунок dysponent Fundusz Pracy.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До переданих коштів відповідно застосовуються art. 57, 168 і 169 ustawy o finansach publicznych.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Повертаються кошти, використані не за призначенням, невикористані, pobrane nienależnie або в надмірній wysokość.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Для коштів із ust. 2 pkt 1, 3 і 4 повернення відбувається з відсотками у розмірі, передбаченому для zaległości podatkowe.",
        },
      ],
      legalEffect:
        "Фінансування не є безповоротним лише тому, що його отримано за umowa; остаточний обсяг зобов'язання залежить від способу використання і розрахунку.",
      foreignersCase:
        "Ведіть окремий облік витрат програми і доказ їх призначення. При залишку або витраті не за plan перевірте строки і розмір повернення за umowa та фінансовими правилами.",
    },
    {
      provisionId: "powierzanie-pracy-art-82",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 82 дозволяє minister dofinansować із Fundusz Pracy кошти польських курсів для легально перебуваючих cudzoziemiec із визначеним dyplom лікаря або медсестри; встановлює межі 3000 zł за навчання і максимум три навчання.",
          sourceLocator: "Art. 82 ust. 1–10",
        },
      ],
      summary:
        "Механізм адресований лише особам із конкретними дипломами та за wniosek відповідної okręgowa izba. Izba укладає umowa, звітує про учасників і витрати, повертає надлишок або всю допомогу, якщо навчання не відбулося.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Dofinansowanie стосується legalно перебуваючих лікарів і медсестер із названими дипломами; максимум — 3000 zł для однієї особи за одне szkolenie і три szkolenia.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Okręgowa izba може подавати wniosek не частіше разу на місяць із даними про установу, строки, години, кошти й кількість осіб; за позитивного розгляду minister укладає umowa.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Після навчання izba подає sprawozdanie, zaświadczenia та докази витрат; повертає надлишок або фінансування, якщо szkolenie не відбулося, а неналежне використання підпадає під art. 169 фінансів publicznych.",
        },
      ],
      legalEffect:
        "Можливість dofinansowanie не є індивідуальною гарантованою виплатою і не замінює правил визнання кваліфікації чи права на роботу.",
      foreignersCase:
        "Перевірте legalny pobyt, вид dyplom і участь відповідної izba. Cudzoziemiec має отримати підтвердження ukończenia, але питання професійного допуску вирішується окремими правилами.",
    },
    {
      provisionId: "powierzanie-pracy-art-83",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 83 дозволяє створювати у powiatowych urzędach pracy спеціалізовані punkty wspierania cudzoziemców, якщо це виправдано ситуацією локального rynku pracy.",
          sourceLocator: "Art. 83 ust. 1–2",
        },
      ],
      summary:
        "Такі punkty можуть інформувати про умови legalna praca та надавати правову й адміністративну допомогу щодо доступу до rynku pracy. Стаття говорить про можливість створення, а не про обов'язкову мережу в кожному powiat.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Punkt може бути створений у powiatowy urząd pracy за обґрунтованої ситуації на місцевому ринку.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Мета — інформація про legalna praca та юридично-адміністративна допомога у доступі до ринку.",
        },
      ],
      legalEffect:
        "Пункт підтримки надає інформацію і допомогу, але не видає автоматично zezwolenie і не замінює компетентний орган.",
      foreignersCase:
        "Зверніться до свого powiatowy urząd pracy, щоб дізнатися, чи створено такий punkt. Відокремлюйте консультаційну інформацію від рішення starosta або wojewoda.",
    },
    {
      provisionId: "powierzanie-pracy-art-84",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 84 визначає wykroczenia та grzywny за illegalne powierzenie або wykonywanie pracy, введення в оману, вимагання плати, порушення обов'язків, житлових правил і повідомлень, а також за недопустиме направлення працівника.",
          sourceLocator: "Art. 84 ust. 1–14",
        },
      ],
      summary:
        "За незаконне доручення роботи podmiot може отримати grzywna від 3000 до 50000 zł, а cudzoziemiec за illegalne wykonywanie — не менше 1000 zł. Окремі діяння мають підвищені межі, а для деяких штраф рахується не нижче мінімуму за одного cudzoziemiec.",
      rules: [
        {
          locator: "ust. 1–5",
          explanation:
            "Штрафи охоплюють illegalne powierzenie, illegalne wykonywanie, доведення до незаконної роботи через обман або залежність, вимагання вигоди за документи та обманне доведення іншої особи до zatrudnienie.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Окремо карається невиконання обов'язків art. 5, 17, 68, 18, 19 і 59 та порушення строків або правдивості повідомлень art. 70; межі визначені в кожному ustęp.",
        },
        {
          locator: "ust. 11–14",
          explanation:
            "Заборонене направлення cudzoziemiec не-agencja та направлення на користь іншого podmiot поза umowa про pracę tymczasową; для ust. 1, 3–5 і 11 встановлено мінімум за одного cudzoziemiec.",
        },
      ],
      legalEffect:
        "Стаття встановлює відповідальність за wykroczenie, але конкретна кваліфікація залежить від фактичних дій, статусу dokument pobyt, умов роботи та доказів.",
      foreignersCase:
        "У перевірці відокремте illegalne powierzenie від illegalne wykonywanie і перевірте кожен документ та обов'язок окремо. Не робіть висновок про штраф лише з назви umowa або з одного пропущеного документа.",
    },
    {
      provisionId: "powierzanie-pracy-art-85",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 85 виключає покарання за art. 84 ust. 1 у вузькому випадку відсутності чинної візи або документа pobyt, якщо zatrudniający виконав обов'язки art. 4 ust. 2 і 4, не знав про підробку та зареєстрував cudzoziemiec у ubezpieczenia społeczne, коли це обов'язково.",
          sourceLocator: "Art. 85 pkt 1–2",
        },
      ],
      summary:
        "Захист не є загальним звільненням від відповідальності. Він стосується конкретного wykroczenie і вимагає одночасного виконання всіх названих умов, включно з відсутністю знання про підроблений документ.",
      rules: [
        {
          locator: "Art. 85 pkt 1",
          explanation:
            "Потрібно виконати обов'язки art. 4 ust. 2 і 4; виняток не діє, якщо роботодавець знав, що документ pobyt підроблено.",
        },
        {
          locator: "Art. 85 pkt 2",
          explanation:
            "Cudzoziemiec має бути zgłoszony до ubezpieczenia społecznego, якщо такий обов'язок випливає з чинних правил.",
        },
      ],
      legalEffect:
        "Наслідок — відсутність покарання лише за описане діяння та за доказу сукупності умов; стаття не легалізує pobyt або інші порушення.",
      foreignersCase:
        "Зберігайте копію перевіреного документа, докази виконання art. 4 та zgłoszenie до ubezpieczenia. Якщо виникає питання підробки, оцінюйте, що саме podmiot знав на момент zatrudnienie.",
    },
    {
      provisionId: "powierzanie-pracy-art-86",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 86 спрямовує стягнені grzywny за art. 84 до Fundusz Pracy, визначає передачу судами на рахунок powiatowy urząd pracy і встановлює розгляд за Kodeks postępowania w sprawach o wykroczenia.",
          sourceLocator: "Art. 86 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює фінансовий маршрут штрафу та процедуру розгляду справ, а не нові склади wykroczenie. Суд передає стягнену і виконану grzywna відповідному powiatowy urząd pracy.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Orzeczone і wyegzekwowane grzywny є доходом Fundusz Pracy і передаються судом безпосередньо до відповідного powiatowy urząd pracy або samorząd powiatu.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Orzekanie за діяння art. 84 відбувається за Kodeks postępowania w sprawach o wykroczenia.",
        },
      ],
      legalEffect:
        "Процедурний режим не означає, що кожне повідомлення органу є вже orzeczenie; факт і розмір grzywna встановлюються у відповідній процедурі.",
      foreignersCase:
        "Якщо отримано wezwanie у справі art. 84, перевірте стадію провадження і процесуальні строки за Kodeks. Не плутайте призначення коштів зі способом доведення порушення.",
    },
    {
      provisionId: "powierzanie-pracy-art-87",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 87 змінює ustawa o Straży Granicznej: замінює посилання на стару ustawa o promocji zatrudnienia посиланням на ustawa z 20 marca 2025 r. та уточнює інше посилання на art. 14a попередньої ustawa.",
          sourceLocator: "Art. 87 pkt 1–2",
        },
      ],
      summary:
        "Це przepis zmieniający, який узгоджує нормативні посилання в ustawa o Straży Granicznej після запровадження нового акту. Він не є самостійним zezwolenie або підставою для роботи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У art. 1 ust. 2 pkt 4 lit. i ustawa про Straż Graniczna стара назва акту замінена на нову ustawa про допустимість доручення роботи.",
        },
        {
          locator: "pkt 2",
          explanation:
            "У art. 10d ust. 23a посилання на art. 4 ust. 7 старого акту замінено посиланням на art. 14a ustawy про skutki illegalnej pracy.",
        },
      ],
      legalEffect:
        "Зміна підтримує узгодженість посилань між актами; фактичні повноваження Straż Graniczna треба читати разом із зміненим текстом основної ustawa.",
      foreignersCase:
        "У старому piśmie не робіть висновок про нечинність повноваження через стару назву акту: перевірте актуальне brzmienie ustawa o Straży Granicznej та конкретну норму.",
    },
    {
      provisionId: "powierzanie-pracy-art-88",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 88 змінює art. 1 ust. 1 ustawy o ubezpieczeniu społecznym rolników, включаючи до охоплених осіб cudzoziemiec з art. 3 ust. 1 або 3 нової ustawy про працю.",
          sourceLocator: "Art. 88",
        },
      ],
      summary:
        "Змінений перелік осіб у системі ubezpieczenie społeczne rolników охоплює громадян Польщі, ЄС/EFTA/Швейцарії, окремих членів сімей, осіб за Umową Wystąpienia та cudzoziemiec, названих у art. 3 ust. 1 або 3.",
      rules: [
        {
          locator: "Art. 88 pkt 1–7 zmienionego art. 1 ust. 1",
          explanation:
            "Пункт 7 прив'язує включення cudzoziemiec до конкретних категорій art. 3 ust. 1 або 3 ustawy z 20 marca 2025 r.; це не загальне включення всіх іноземців.",
        },
      ],
      legalEffect:
        "Зміна може впливати на страховий статус pomocnik rolnika, але сама не визначає, чи є робота legalною або чи виконані умови конкретної категорії.",
      foreignersCase:
        "Для сезонної роботи в gospodarstwo визначте роль особи і перевірте, чи підпадає вона під art. 3 ust. 1 або 3. Питання KRUS не замінює перевірку pobyt та підстави роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-89",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 89 замінює у art. 121 § 9a Kodeks karny wykonawczy посилання на стару ustawa про promocję zatrudnienia посиланням на ustawa z 20 marca 2025 r.",
          sourceLocator: "Art. 89",
        },
      ],
      summary:
        "Це технічна зміна відсилання у Kodeks karny wykonawczy. Вона підтримує застосування нового акту там, де раніше згадувалася стара ustawa.",
      rules: [
        {
          locator: "Art. 89; art. 121 § 9a KKW",
          explanation:
            "У визначеному місці KKW старе посилання замінене на нову ustawa про умови допустимості powierzanie pracy cudzoziemcom.",
        },
      ],
      legalEffect:
        "Сам art. 89 не створює дозволу на роботу та не визначає індивідуальний статус cudzoziemiec; він змінює нормативну відсилку.",
      foreignersCase:
        "Якщо документ посилається на art. 121 § 9a KKW, читайте його вже з новою відсилкою і перевіряйте зміст пов'язаних норм, а не лише номер старої ustawa.",
    },
    {
      provisionId: "powierzanie-pracy-art-90",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 90 додає до art. 299 § 3 Ordynacja podatkowa можливість надавати wojewoda, starosta та minister właściwy do spraw pracy дані у межах проваджень про zezwolenie або oświadczenie.",
          sourceLocator: "Art. 90; art. 299 § 3 pkt 18–20 Ordynacja podatkowa",
        },
      ],
      summary:
        "Податкові дані можуть бути доступні компетентним органам для перевірки справ про permit na pracę, сезонний permit та wpis oświadczenie. Обсяг доступу прив'язаний до виду провадження кожного органу.",
      rules: [
        {
          locator: "Art. 90 pkt 18",
          explanation:
            "Wojewoda отримує доступ у межах проваджень про zezwolenia na pracę.",
        },
        {
          locator: "Art. 90 pkt 19–20",
          explanation:
            "Starosta — у справах сезонного zezwolenie або wpis oświadczenie; minister — у справах zezwolenia і oświadczenia.",
        },
      ],
      legalEffect:
        "Доступ до інформації допомагає встановлювати істотні обставини, але наявність podatkowe дані не є автоматичним доказом будь-якого висновку без оцінки справи.",
      foreignersCase:
        "Якщо дохід, podatek або zaległość стали частиною мотивів рішення, прослідкуйте, який орган і в межах якого провадження отримав дані та як їх витлумачив.",
    },
    {
      provisionId: "powierzanie-pracy-art-91",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 91 змінює Kodeks postępowania w sprawach o wykroczenia: у postępowaniu mandatowym за art. 84 цієї ustawa та визначені справи cudzoziemiec можна накласти grzywna до 10000 zł за умов, названих у нормі.",
          sourceLocator: "Art. 91 pkt 1–2; art. 96 § 1af KPW",
        },
      ],
      summary:
        "Поправка визначає спеціальну межу для mandat у справах, де publiczny oskarżyciel — właściwy organ PIP або Straż Graniczna, а для art. 465 ust. 1a ustawy o cudzoziemcach — Straż Graniczna.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У art. 96 § 1a KPW скасовується pkt 3 у названій частині.",
        },
        {
          locator: "pkt 2; § 1af pkt 1–2",
          explanation:
            "У mandatowym postępowaniu за діяння art. 84 або art. 465 ust. 1a, за визначеного oskarżyciel, grzywna може бути до 10000 zł.",
        },
      ],
      legalEffect:
        "Верхня межа стосується накладення mandat у визначеній процедурі, а не автоматичного розміру кожного штрафу чи доведеності порушення.",
      foreignersCase:
        "У разі mandat перевірте статтю, орган-оскаpжувач і вид процедури. Не змішуйте максимум 10000 zł для mandat із мінімумами art. 84.",
    },
    {
      provisionId: "powierzanie-pracy-art-92",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 92 змінює art. 35 ust. 1–2 ustawy o udzielaniu cudzoziemcom ochrony: за незавершення справи про ochronę internationalna за 6 місяців без вини wnioskodawca відповідне zaświadczenie разом із tymczasowe zaświadczenie tożsamości дає право працювати за правилами нової ustawa.",
          sourceLocator: "Art. 92; art. 35 ust. 1–2 ustawy o ochronie",
        },
      ],
      summary:
        "Право працювати виникає не просто через тривале очікування. Потрібні wniosek, затримка не з вини заявника, заświadczenie Szef Urzędu та тимчасовий документ особи; робота відбувається на умовах і в порядку ustawa o powierzaniu pracy.",
      rules: [
        {
          locator: "art. 35 ust. 1",
          explanation:
            "Szef Urzędu видає zaświadczenie на wniosek особи, якщо справа не вирішена у строк і затримка не з її вини; разом із tymczasowe zaświadczenie документ уповноважує до роботи за новою ustawa.",
        },
        {
          locator: "art. 35 ust. 2",
          explanation:
            "У zaświadczenie підтверджують незавершення за 6 місяців і відсутність вини заявника та вказують особу, яка має право працювати.",
        },
      ],
      legalEffect:
        "Це спеціальна підстава доступу до роботи під час процедури ochronę internationalna, але вона не є рішенням про надання захисту і не скасовує умов нової ustawa.",
      foreignersCase:
        "Перевірте, чи є саме заświadczenie і tymczasowe zaświadczenie tożsamości та що в ньому підтверджено 6-місячну затримку без вини. Лише після цього оцінюйте умови powierzenie pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-93",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 93 замінює art. 6 ust. 1 pkt 1 ustawy o Karcie Polaka і відсилає право виконувати роботу до правил ustawa z 20 marca 2025 r.",
          sourceLocator: "Art. 93; art. 6 ust. 1 pkt 1 ustawy o Karcie Polaka",
        },
      ],
      summary:
        "Для особи з Karta Polaka посилання про виконання роботи тепер узгоджене з новою ustawa про допустимість powierzanie pracy. Сам факт Karta Polaka треба читати разом із чинним текстом цієї ustawa та іншими умовами.",
      rules: [
        {
          locator: "Art. 93",
          explanation:
            "У визначеному пункті Karta Polaka слова про роботу замінені на wykonywanie pracy на zasadach określonych у новій ustawa.",
        },
      ],
      legalEffect:
        "Стаття узгоджує правову підставу та не є окремим новим zezwolenie; обсяг права випливає з правил, на які зроблено відсилання.",
      foreignersCase:
        "Пред'являючи Karta Polaka, перевірте актуальну підставу доступу до ринку праці та умови конкретної роботи. Не покладайтеся лише на старе формулювання art. 6.",
    },
    {
      provisionId: "powierzanie-pracy-art-94",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 94 встановлює у art. 93 ustawy o Polskiej Akademii Nauk, що особа без польського громадянства може бути zatrudniona на stanowiska art. 88 без zezwolenie або oświadczenie, про яке йдеться в art. 3 ust. 3 нової ustawa.",
          sourceLocator: "Art. 94; art. 93 ustawy o PAN",
        },
      ],
      summary:
        "Виняток стосується праці в jednostki naukowe на stanowiska, названі art. 88 ustawy o PAN. Він сформульований як відсутність вимоги до zezwolenie або oświadczenie, а не як загальне звільнення всіх працівників PAN.",
      rules: [
        {
          locator: "Art. 94; art. 93 ustawy o PAN",
          explanation:
            "Особа без польського громадянства може бути zatrudniona без цих документів лише на stanowiska, про які говорить art. 88 ustawy o PAN, у jednostki naukowe.",
        },
      ],
      legalEffect:
        "Виняток прив'язаний одночасно до типу установи та stanowisko; інші підстави pobyt, страхування чи професійний допуск цим не вирішуються.",
      foreignersCase:
        "Для наукового працівника перевірте, чи роботодавець є jednostka naukowa і чи конкретне stanowisko входить до art. 88 PAN. Не поширюйте виняток на адміністративну або іншу роботу без окремої підстави.",
    },
    {
      provisionId: "powierzanie-pracy-art-95",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 95 змінює ustawa про skutki powierzenia pracy osobie без законного pobyt: додає завдання minister щодо моніторингу, uchyla art. 2 і 3, узгоджує art. 13 з art. 4 нової ustawa та додає art. 14a про сектори й звіти.",
          sourceLocator: "Art. 95 pkt 1–4",
        },
      ],
      summary:
        "Це пакет змін до іншого акту. Важливо чесно відрізняти: art. 2 і art. 3 старої ustawa прямо скасовуються, тоді як новий art. 14a доручає визначати сектори ризику PKD і подавати Комісії ЄС статистику контролю та періодичні sprawozdania.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "До art. 1 додається завдання właściwy ministr щодо моніторингу, а art. 2 і art. 3 цієї окремої ustawa uchylaються.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Art. 13 pkt 1 тепер відсилає до виконання обов'язків art. 4 ust. 2 і 4 нової ustawa, з винятком знання про підроблений документ.",
        },
        {
          locator: "pkt 4; art. 14a",
          explanation:
            "Minister праці за узгодженням із minister внутрішніх справ визначає сектори PKD підвищеного ризику та готує щорічні й трирічні звіти на основі даних Straż Graniczna і PIP.",
        },
      ],
      legalEffect:
        "Art. 95 не створює нового індивідуального дозволу; він змінює інший акт і прямо скасовує його art. 2–3, тому для конкретної відповідальності треба читати чинну редакцію того акту.",
      foreignersCase:
        "У справі про illegalny pobyt перевірте дату факту і чинну редакцію окремої ustawa після uchylenie art. 2–3. Сектор PKD зі звітного механізму сам не доводить порушення конкретного роботодавця.",
    },
    {
      provisionId: "powierzanie-pracy-art-96",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 96 вносить комплексні зміни до ustawa o cudzoziemcach: оновлює відсилання до wykonywanie pracy, правила віз, permit na pobyt і pracy, професійні списки, zwolnienie з zezwolenie, сезонний pobyt та наслідки decyzja o powrocie.",
          sourceLocator: "Art. 96 pkt 1–36",
        },
      ],
      summary:
        "Поправка узгоджує ustawa o cudzoziemcach із новою системою. Серед іншого, вона вводить посилання на oświadczenie та seasonal zezwolenie, змінює вимоги до pobyt czasowy i pracę, визначає повідомлення podmiot, а також прямо uchyla art. 125 і art. 136 ustawy o cudzoziemcach.",
      rules: [
        {
          locator: "pkt 1–7",
          explanation:
            "Визначення wykonywanie pracy та назви podmiot оновлюються; правила віз посилаються на zezwolenie art. 32, 37, 42, oświadczenie і zaświadczenie сезонного wniosku, а konsul може враховувати пріоритети з wykazy art. 28–29.",
        },
        {
          locator: "pkt 8–18",
          explanation:
            "Зміни стосуються додатка до заяви, списку zawodów, відмови, підстав pobyt czasowy i pracę, умов podmiot, змін umowa та обов'язку повідомити wojewoda про втрату роботи протягом 15 днів.",
        },
        {
          locator: "pkt 19–22",
          explanation:
            "Art. 125 і art. 136 ustawy o cudzoziemcach прямо uchylaються; інші пункти уточнюють винятки зі списку zawodów і умови наступного zezwolenie.",
        },
        {
          locator: "pkt 32–36",
          explanation:
            "Оновлюються правила сезонного pobyt, adnotacja dostęp do rynku pracy та наслідки остаточної або виконаної decyzja o zobowiązaniu do powrotu для візи, zezwolenie і wpis oświadczenie.",
        },
      ],
      legalEffect:
        "Art. 96 є przepis zmieniający, а не повним самостійним описом права на pobyt. Для рішення треба читати актуальну редакцію змінених статей, враховуючи прямо скасовані art. 125 і 136 та дату події.",
      foreignersCase:
        "У справі про pobyt i pracę складіть таблицю: підстава pobyt, zawód і список, podmiot, umowa, повідомлення та статус zezwolenie. Не посилайтеся на art. 96 замість чинного тексту конкретної статті ustawy o cudzoziemcach.",
    },
    {
      provisionId: "powierzanie-pracy-art-97",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 97 замінює art. 26 ustawy o delegowaniu pracowników: її правила відповідно застосовуються до працівника, якого направляє роботодавець із держави поза ЄС, з застереженням art. 41 pkt 2–3 нової ustawa.",
          sourceLocator: "Art. 97; art. 26 ustawy o delegowaniu",
        },
      ],
      summary:
        "Для delegowanie з państwo niebędące państwem członkowskim діє відповідне застосування ustawa про delegowanie, але з винятками, відсилаючими до art. 41 pkt 2–3 ustawy про powierzanie pracy.",
      rules: [
        {
          locator: "Art. 97; art. 26 ustawy o delegowaniu",
          explanation:
            "Механізм застосовується до працівника, якого направив роботодавець із non-EU держави; конкретні застереження потрібно перевіряти у art. 41 pkt 2–3 нової ustawa.",
        },
      ],
      legalEffect:
        "Норма узгоджує два акти і не вирішує сама, чи конкретна модель є delegowanie, чи іншим видом повірення роботи.",
      foreignersCase:
        "Спочатку встановіть роботодавця, державу його siedziba та фактичну модель направлення. Потім зіставте умови з art. 26 і застереженнями art. 41, не покладаючись лише на назву договору.",
    },
    {
      provisionId: "powierzanie-pracy-art-98",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 98 додає до Prawo przedsiębiorców винятки з окремих правил контролю, коли контроль проводить Straż Graniczna за art. 1 ust. 2 pkt 13a або Państwowa Inspekcja Pracy за art. 10 ust. 1 pkt 4 відповідних актів.",
          sourceLocator: "Art. 98 pkt 1–2; art. 48 ust. 11 pkt 15–16 та art. 54 ust. 1 pkt 15–16 Prawo przedsiębiorców",
        },
      ],
      summary:
        "Поправка стосується процедурних правил контролю підприємців. Вона називає дві підстави контролю, для яких додаються винятки у art. 48 і art. 54 Prawo przedsiębiorców.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До art. 48 ust. 11 додаються випадки контролю за правилами про Straż Graniczna та PIP.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Аналогічні підстави додаються до art. 54 ust. 1 Prawo przedsiębiorców.",
        },
      ],
      legalEffect:
        "Стаття змінює винятки у режимі контролю; вона не є рішенням про виявлення порушення і не скасовує вимоги конкретного контрольного акту.",
      foreignersCase:
        "Під час контролю встановіть, який орган і за якою нормою діє. Якщо посилаються на Prawo przedsiębiorców, перевірте, чи підстава відповідає саме доданим pkt 15–16.",
    },
    {
      provisionId: "powierzanie-pracy-art-99",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 99 додає до ustawa про участь іноземних підприємців art. 4 ust. 3a: право вести діяльність у spółka z o.o., PSA або S.A. не охоплює повторюваних świadczeń niepieniężnych і праці або послуг в обмін на акції PSA.",
          sourceLocator: "Art. 99; art. 4 ust. 3a pkt 1–2 ustawy o przedsiębiorcach zagranicznych",
        },
      ],
      summary:
        "Форма участі в spółka сама по собі не дає права виконувати для неї будь-яку працю або послуги. Новий ust. 3a прямо виключає дві категорії дій із права на gospodarcza działalność, названого в ust. 3.",
      rules: [
        {
          locator: "ust. 3a pkt 1",
          explanation:
            "До охоплення права не входить spełnianie powtarzających się świadczeń niepieniężnych за art. 176 або 356 KSH.",
        },
        {
          locator: "ust. 3a pkt 2",
          explanation:
            "Також не входить świadczenie pracy lub usług в обмін на akcje prostej spółki akcyjnej.",
        },
      ],
      legalEffect:
        "Поправка розмежовує право на участь у spółka і фактичну працю або послуги; наслідок для доступу до ринку праці треба визначати за окремими правилами.",
      foreignersCase:
        "Якщо іноземець є учасником або акціонером, опишіть фактичну дію: внесок, повторювана świadczenie чи робота за akcje. Не робіть висновок із самого статусу в spółka.",
    },
    {
      provisionId: "powierzanie-pracy-art-100",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 100 замінює art. 325 ust. 1 Prawo o szkolnictwie wyższym i nauce: повірення cudzoziemiec роботи, пов'язаної з kształcenie та działalność naukowa у перелічених art. 7 ust. 1 pkt 1–7 podmiot, не потребує zezwolenie або oświadczenie.",
          sourceLocator: "Art. 100; art. 325 ust. 1 PSWiN",
        },
      ],
      summary:
        "Виняток охоплює працю cudzoziemiec, що полягає саме у виконанні завдань, пов'язаних із навчанням і науковою діяльністю, у подmiot з art. 7 ust. 1 pkt 1–7. Це не загальне звільнення для будь-якої роботи в закладі освіти.",
      rules: [
        {
          locator: "Art. 100; art. 325 ust. 1 PSWiN",
          explanation:
            "Не потрібні zezwolenie na pracę або oświadczenie, якщо одночасно є cudzoziemiec, названий podmiot art. 7 ust. 1 pkt 1–7 і робота, пов'язана з kształcenie та działalność naukowa.",
        },
      ],
      legalEffect:
        "Виняток залежить від виду завдань і статусу установи; він не визначає автоматично легальність pobyt, страхування чи доступ до регульованої професії.",
      foreignersCase:
        "Для викладача або науковця зафіксуйте конкретні завдання та перевірте, чи установа входить до art. 7 ust. 1 pkt 1–7 PSWiN. Іншу роботу в тій самій установі оцінюйте окремо.",
    },
  ],
})
