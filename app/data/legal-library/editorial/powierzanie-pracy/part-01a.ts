import { defineEditorialPart } from "../define-editorial-part"

export const powierzaniePracyPart01a = defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 1 ust. 1 визначає предмет ustawy: умови доступу cudzoziemców до rynku pracy, właściwe organy та tryb postępowania. Ust. 2 відсилає правила в'їзду й pobytu у зв'язку з роботою та наслідки powierzenia роботи особі, яка перебуває нелегально, крім kar za wykroczenia з art. 84 ust. 1 і 3, до окремих законів; ust. 3 передбачає спеціальні заходи aktywizacji та integracji, ust. 4 перелічує винятки із застосування ustawy, а ust. 5 уповноважує ministra właściwego do spraw pracy надавати wyjaśnienia для jednolitego stosowania ustawy.",
          sourceLocator: "Art. 1 ust. 1–5",
        },
      ],
      summary:
        "Це положення окреслює межі ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom. Воно одночасно визначає її предмет, відсилає питання в'їзду та pobytu до окремих норм і називає винятки, зокрема для частини громадян ЄС, EFTA та осіб, охоплених Umową Wystąpienia.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Ustawa регулює доступ до polskiego rynku pracy та процедуру, але не є загальним актом про право в'їзду чи legalny pobyt. Окремо передбачені заходи активізації та інтеграції, що фінансуються з Fundusz Pracy.",
        },
        {
          locator: "ust. 4 pkt 1–6",
          explanation:
            "Перевірте, чи не належить випадок до винятків: серед них робота przedsiębiorcy, окремі дипломатичні функції, wolontariat, визначений staż, випадкова діяльність для іноземного podmiot та powierzenie роботи громадянам ЄС/EFTA або визначеним особам з Великої Британії.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Wyjaśnienia ministra мають стосуватися jednolitego stosowania ustawy; вони не замінюють тексту ustawy та окремих правил про pobyt.",
        },
      ],
      legalEffect:
        "Art. 1 визначає рамку трудового доступу, але сам по собі не надає cudzoziemiec права на legalny pobyt і не замінює потрібне zezwolenie na pracę або іншу підставу роботи.",
      foreignersCase:
        "Спочатку зафіксуйте підставу pobytu, громадянство, фактичний вид роботи та статус podmiot. Потім перевірте, чи застосовується ця ustawa, чи діє виняток art. 1 ust. 4; legalny pobyt і uprawnienie do pracy оцінюйте окремо.",
    },
    {
      provisionId: "powierzanie-pracy-art-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 2 pkt 1–9 визначає для ustawy поняття cudzoziemiec, nielegalne powierzenie роботи, nielegalne wykonywanie роботи, podmiot powierzający pracę cudzoziemcowi, podmiot zagraniczny, polski podmiot powierzający pracę cudzoziemcowi, pracodawca użytkownik, pracownik tymczasowy та саме powierzanie pracy cudzoziemcowi.",
          sourceLocator: "Art. 2 pkt 1–9",
        },
      ],
      summary:
        "Дефініції показують, що незаконність може стосуватися різних ланок: pobyt, підстави pobytu, zezwolenie або oświadczenie, умов чи stanowisko роботи та письмової umowa. Окремо визначено, хто є podmiot і які форми роботи входять до powierzenie pracy.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Cudzoziemiec — кожен, хто не має польського громадянства. Nielegalne powierzenie та nielegalne wykonywanie роботи охоплюють, зокрема, незаконний pobyt, відсутність uprawnienia з підстави pobytu та відсутність потрібного zezwolenia або oświadczenia; для powierzenie також важливі умови, stanowisko й письмова umowa.",
        },
        {
          locator: "pkt 4–8",
          explanation:
            "Podmiot powierzający може бути організаційною одиницею або фізичною особою; закон розрізняє podmiot zagraniczny, polski podmiot, pracodawca użytkownik та pracownik tymczasowy.",
        },
        {
          locator: "pkt 9 lit. a–f",
          explanation:
            "Powierzenie охоплює роботу за stosunek pracy, stosunek służbowy, umowę o pracę nakładczą, цивільні договори, окремі функції в органах і spółkach, prokurę та роботу в межах delegowanie.",
        },
      ],
      legalEffect:
        "Ці визначення є кваліфікаційною рамкою для перевірки порушення, але не створюють самостійного дозволу на роботу чи право перебування. Наявність legalnego pobytu не усуває можливого браку zezwolenia або невідповідності його умовам.",
      foreignersCase:
        "Складіть окремі колонки: legalny pobyt, підстава pobytu, zezwolenie/oświadczenie, умови й stanowisko, письмова umowa. Лише після цього кваліфікуйте, чи є powierzenie або wykonywanie роботи nielegalne.",
    },
    {
      provisionId: "powierzanie-pracy-art-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 3 ust. 1 перелічує категорії cudzoziemców зі swobodny dostęp до rynku pracy. Ust. 2–3 визначають окремі випадки роботи на підставі pobyt або zezwolenie/oświadczenie разом із допустимою підставою pobytu, а ust. 5–6 називають випадки роботи без zezwolenia na pracę або oświadczenia; ust. 7–8 передають деталізацію окремим rozporządzenia.",
          sourceLocator: "Art. 3 ust. 1–8",
        },
      ],
      summary:
        "Стаття розділяє вільний доступ до ринку праці, роботу з дозволом та роботу без окремого дозволу. Для багатьох ситуацій потрібні одночасно документ роботи й допустима підстава pobytu; сам факт перебування в Польщі цього не доводить.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До swobodny доступу належать перелічені законом особи, зокрема окремі члени сім'ї, постійні та довгострокові резиденти ЄС, особи з міжнародним або тимчасовим захистом та деякі власники zezwolenie na pobyt czasowy.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Окремо названі робота в межах визначених pobyt, short-term mobility та продовження роботи під час окремих заяв. За ust. 3 потрібні zezwolenie/oświadczenie і одна з перелічених підстав pobytu; для ruch bezwizowy діє виняток щодо держав із wykaz.",
        },
        {
          locator: "ust. 5–8",
          explanation:
            "Karta Polaka, окремі випускники, doktoranci, міжнародні договори та приписи можуть вести до роботи без zezwolenia/oświadczenia. Інші випадки, перелік держав і умови визначаються лише у передбачених розporządzenia.",
        },
      ],
      legalEffect:
        "Art. 3 може дати доступ до роботи без окремого дозволу або визначити, як дозвіл поєднується з pobyt, але не перетворює будь-який legalny pobyt на право працювати. Потрібно встановити конкретний пункт і його умови на дату роботи.",
      foreignersCase:
        "Назвіть точну підставу: вільний доступ, pobyt із ust. 2, zezwolenie/oświadczenie з ust. 3 чи виняток ust. 5–6. Перевірте документ, строк legalnego pobytu, громадянство та чинне rozporządzenie; не робіть висновок лише з візи або штампа.",
    },
    {
      provisionId: "powierzanie-pracy-art-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 4 зобов'язує podmiot powierzający працю зібрати дані cudzoziemiec і копії документів для підтвердження особи та uprawnienia do zatrudnienia, вимагати перед початком роботи чинний документ, що підтверджує право pobytu, зберігати його копію та безпечно обробляти дані протягом установлених строків; ust. 5 робить виняток для осіб з art. 3 ust. 1 pkt 1–5.",
          sourceLocator: "Art. 4 ust. 1–7",
        },
      ],
      summary:
        "Podmiot має перевірити не лише особу, а й документ, що підтверджує право pobytu. Копії документів зберігаються під час роботи та після її завершення протягом строку, визначеного законом; для частини громадян ЄС та їхніх сімей діє спеціальний виняток.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "До початку роботи потрібно отримати визначені персональні дані, копії документів і пред'явлений важний документ uprawniający do pobytu. Перевірка pobyt є окремою від перевірки дозволу на роботу.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Документ pobyt можна вимагати протягом роботи, а його копії зберігати весь період роботи та строк ust. 6. Ust. 2–4 не застосовуються до cudzoziemiec з art. 3 ust. 1 pkt 1–5.",
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Дані обробляються під час роботи й 2 роки від кінця календарного року, у якому припинився або закінчився правовий зв'язок, якщо окремі приписи не вимагають довше; podmiot має забезпечити безпеку даних.",
        },
      ],
      legalEffect:
        "Стаття встановлює обов'язок документальної перевірки та зберігання даних для podmiot. Копія документа pobyt підтверджує перевірку, але сама по собі не є zezwolenie na pracę і не замінює його, коли дозвіл потрібен.",
      foreignersCase:
        "До початку роботи узгодьте документ legalnego pobytu, його строк і документ роботи або підставу звільнення від дозволу. Попросіть пояснити, які копії зберігаються; виняток art. 4 ust. 5 перевіряйте за конкретним пунктом art. 3.",
    },
    {
      provisionId: "powierzanie-pracy-art-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 5 вимагає укласти з cudzoziemiec письмову umowa до допуску до роботи, крім випадку art. 6 ust. 1 pkt 2. Якщо umowa польською, а cudzoziemiec не володіє польською, перед підписанням треба надати письмову зрозумілу версію; для umowa іноземною мовою зберігається її переклад польською від tłumacz przysięgły, а для визначених видів роботи працівника письмово інформують про право вступу до związków zawodowych.",
          sourceLocator: "Art. 5 ust. 1–4",
        },
      ],
      summary:
        "Письмова umowa є передумовою допуску до роботи, а інформація про її зміст має бути зрозумілою cudzoziemiec. Закон також визначає, як зберігати переклад і коли повідомляти про право до związków zawodowych.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Umowa укладається письмово до фактичного допуску cudzoziemiec до роботи. Виняток прямо відсилає до функцій, названих у art. 6 ust. 1 pkt 2.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "За польськомовної umowa особа, яка не знає польської, отримує зрозумілу письмову версію до підписання. Іноземномовну umowa podmiot зберігає разом із перекладом польською, виконаним tłumacz przysięgły.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Для праці на підставі перелічених правових зв'язків podmiot письмово й зрозумілою мовою інформує про право вступати до związków zawodowych; правила про версію та переклад застосовуються відповідно.",
        },
      ],
      legalEffect:
        "Стаття регулює форму та зрозумілість договору, але укладена umowa не легалізує pobyt і не замінює zezwolenie na pracę чи іншу підставу доступу до роботи.",
      foreignersCase:
        "До початку роботи перевірте письмову umowa, її мову, зрозумілу версію або переклад та відповідність умов документу роботи. Окремо підтвердьте legalny pobyt і потрібне uprawnienie do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 6 ust. 1 визначає чотири ситуації видачі zezwolenie na pracę: робота на підставі umowa з польським podmiot або agencja pracy tymczasowej, визначені функції чи представництво в Польщі, delegowanie працівника іноземного podmiot і сезонна робота. Ust. 2 регулює wpis oświadczenie для громадян держави з переліку, а ust. 3 дозволяє starosta письмово уповноважити працівників до розгляду справ.",
          sourceLocator: "Art. 6 ust. 1–3",
        },
      ],
      summary:
        "Положення розмежовує основні шляхи доступу до роботи: zezwolenie na pracę для чотирьох типів ситуацій та oświadczenie для визначених громадян і роботи з польським podmiot. Окремо визначено внутрішню компетенцію starosta.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Для звичайної роботи важливі umowa з polski podmiot або umowa з agencja при kierowanie. Інші пункти стосуються функцій у визначених spółka, delegowanie та sezonowa praca.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Oświadczenie wpisують до ewidencji лише за одночасних умов щодо громадянства з розporządzenie та роботи в Польщі на підставі umowa з polski podmiot або agencja при kierowanie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо компетентним є starosta, він може письмово делегувати dyrektor powiatowy urząd pracy або інших працівників, включно з видачею decyzja та postanowienie за KPA.",
        },
      ],
      legalEffect:
        "Art. 6 визначає, коли застосовується конкретний інструмент доступу до роботи, але не підтверджує legalny pobyt. Навіть відповідність моделі zezwolenie/oświadczenie не усуває окремої перевірки підстави та строку pobytu.",
      foreignersCase:
        "Класифікуйте фактичну модель: polski podmiot, agencja, funkcja, delegowanie чи sezonowa praca. Для oświadczenie перевірте громадянство в чинному wykaz; потім окремо перевірте документ legalnego pobytu.",
    },
    {
      provisionId: "powierzanie-pracy-art-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 7 передбачає, що zezwolenie na pracę видається, у його видачі відмовляють або його uchyla się у формі decyzja administracyjna; właściwość miejscowa визначається на день подання wniosek, органом вищого ступеня є minister właściwy do spraw pracy, а art. 37 KPA не застосовується у справах дозволів, названих у art. 26, 35, 40 і 45.",
          sourceLocator: "Art. 7 ust. 1–4",
        },
      ],
      summary:
        "Стаття визначає процесуальну форму рішень про zezwolenie та правило визначення місцевої компетенції. Вона також встановлює спеціальне правило щодо органу вищого ступеня й окреме обмеження застосування art. 37 KPA.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Видача, відмова та uchylenie zezwolenie відбуваються через decyzja administracyjna, а не просто лист або внутрішню нотатку.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Місцеву właściwość визначають за станом на день подання wniosek. Для справ про zezwolenie органом вищого ступеня за KPA є minister właściwy do spraw pracy.",
        },
        {
          locator: "ust. 4",
          explanation:
            "У справах про zezwolenie, зазначених у art. 26, 35, 40 і 45, не застосовується art. 37 KPA; це спеціальне правило не поширюється автоматично на кожну справу за ustawy.",
        },
      ],
      legalEffect:
        "Рішення за art. 7 стосується дозволу на роботу. Воно не є окремим рішенням про legalny pobyt, тому чинність pobyt і uprawnienie do pracy треба перевіряти за відповідними документами.",
      foreignersCase:
        "Збережіть wniosek із датою подання та отриману decyzja. У разі оскарження встановіть тип zezwolenie й відповідний organ wyższego stopnia; не ототожнюйте процесуальну decyzja з документом на pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 8 вимагає подавати wniosek про zezwolenie та документи через визначений system teleinformatyczny; подання іншим способом залишають bez rozpoznania. Środek zaskarżenia також подається через цю систему, а за неможливості через її неправильну роботу — протягом 7 днів після усунення несправності.",
          sourceLocator: "Art. 8 ust. 1–5",
        },
      ],
      summary:
        "Закон встановлює електронний спосіб подання wniosek і środka zaskarżenia. Неправильний канал може мати наслідок bez rozpoznania або недопустимості, але для збою системи передбачено спеціальний строк після відновлення роботи.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Wniosek подає podmiot powierzający pracę, разом із документами через system teleinformatyczny, визначений законом. Wniosek, поданий інакше, залишають bez rozpoznania.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Środek zaskarżenia у справі zezwolenie подається через той самий system; інший спосіб є niedopuszczalny.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Якщо збій системи не дозволив подати środek зaskarżenia у строк KPA, його подають протягом 7 днів після дня усунення несправності.",
        },
      ],
      legalEffect:
        "Art. 8 визначає процесуальний спосіб звернення, а не матеріальне право на роботу чи pobyt. Навіть правильно поданий електронний wniosek не замінює рішення та документа, потрібного для роботи.",
      foreignersCase:
        "Подання перевіряйте в системі й зберігайте підтвердження, дату та копії файлів. Якщо оскарження неможливе через збій, зафіксуйте несправність і дату її усунення; окремо контролюйте legalny pobyt і право на роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 9 визначає зміст wniosek про zezwolenie: дані podmiot, pracodawca użytkownik або podmiot delegujący, у визначених випадках представника podmiot zagraniczny, дані cudzoziemiec та деталі роботи — дати, stanowisko або функцію, місце, правову підставу, час, найнижче wynagrodzenie й обов'язки. До wniosek додаються oświadczenie про обставини art. 13 і підтвердні документи та opłata; oświadczenie подається під rygor odpowiedzialności karnej і підписується не раніше ніж за 30 днів до подання.",
          sourceLocator: "Art. 9 ust. 1–6",
        },
      ],
      summary:
        "Wniosek має дати органу повну картину podmiot, cudzoziemiec і запропонованої роботи. Закон окремо вимагає підтвердних документів, правдивого oświadczenie про визначені обставини та дотримання строку його підписання.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Зазначаються ідентифікаційні дані podmiot та, якщо є pracodawca użytkownik або delegowanie, відповідного podmiot; для art. 6 ust. 1 pkt 3 додаються дані уповноваженого представника в Польщі.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Дані cudzoziemiec охоплюють особу, громадянство й документ подорожі, а відомості про роботу — періоди, stanowisko/функцію, місце, правову підставу, час, мінімальну оплату та основні обов'язки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для окремого громадянина EOG замість місця постійного pobyt вказують постійне місце діяльності в Польщі; при роботі менш як місяць подають загальну кількість годин і оплату за весь період.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "До wniosek додають oświadczenie щодо art. 13 ust. 1 pkt 1 lit. c–g, документи на підтвердження обставин та доказ opłata. Oświadczenie містить обов'язкову кримінальну застережну фразу і підписується не раніше 30 днів до подання.",
        },
      ],
      legalEffect:
        "Art. 9 робить заявлені дані та докази основою провадження про роботу, але заповнений wniosek не дає ані legalnego pobytu, ані права почати роботу до настання передбаченої законом підстави.",
      foreignersCase:
        "Зіставте wniosek із паспортом, umowa, місцем роботи, годинами, оплатою та фактичними обов'язками. Перевірте дату підпису oświadczenie і докази; окремо встановіть документ pobyt та підставу uprawnienia do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-10",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 10 зобов'язує podmiot powierzający працю сплатити opłata за кожен wniosek про zezwolenie. Для art. 6 ust. 1 pkt 1–3 вона є доходом budżet państwa, для art. 6 ust. 1 pkt 4 — порівну доходом państwa і powiat; opłata не повертається, крім відмови за art. 13 ust. 1 pkt 4 або 5, а її максимальний розмір визначається через мінімальну оплату праці.",
          sourceLocator: "Art. 10 ust. 1–5",
        },
      ],
      summary:
        "Opłata супроводжує кожен wniosek, а для сезонного zezwolenie — також wniosek про його przedłużenie. Закон визначає, куди надходять кошти, коли вони повертаються та які верхні межі може встановити minister.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Opłata сплачується за кожен wniosek. У справах art. 6 ust. 1 pkt 1–3 кошти належать budżet państwa; у сезонній справі дохід порівну розподіляється між państwo і powiat.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Загальне правило — невідшкодування opłata. Виняток у тексті art. 10 стосується відмови на підставі art. 13 ust. 1 pkt 4 або 5.",
        },
        {
          locator: "ust. 5 pkt 1–2",
          explanation:
            "Rozporządzenie може встановити суму не вище мінімального wynagrodzenie для art. 6 ust. 1 pkt 1–3 і не вище 10% мінімального wynagrodzenie для art. 6 ust. 1 pkt 4, з урахуванням періоду роботи та вартості провадження.",
        },
      ],
      legalEffect:
        "Сплата opłata є процесуальною вимогою, але не гарантує видачу zezwolenie, legalny pobyt або початок роботи. Її повернення можливе лише в межах прямо названого винятку.",
      foreignersCase:
        "Визначте тип wniosek і перевірте суму за чинним rozporządzenie, зберігши доказ платежу. Не сприймайте платіж як підтвердження права працювати чи перебувати в Польщі.",
    },
    {
      provisionId: "powierzanie-pracy-art-11",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 11 уповноважує ministra właściwego do spraw pracy визначити у drodze rozporządzenia перелік документів, які podmiot додає до wniosek про zezwolenie, з урахуванням потреби підтвердити обставини wniosek, підстави видачі zezwolenie та сплату opłata за art. 10 ust. 1.",
          sourceLocator: "Art. 11",
        },
      ],
      summary:
        "Сам закон окреслює мету документів, а конкретний wykaz передає до виконавчого rozporządzenie. Тому перелік додатків потрібно перевіряти за чинним актом, що діє для відповідної процедури.",
      rules: [
        {
          locator: "Art. 11",
          explanation:
            "Minister визначає документи для sprawnego postępowania, підтвердження даних wniosek, обставин, що обґрунтовують zezwolenie, та opłata.",
        },
      ],
      legalEffect:
        "Art. 11 не видає zezwolenie і не визначає legalny pobyt; він створює правову основу для деталізації доказів у rozporządzenie.",
      foreignersCase:
        "Не покладайтеся на неофіційний шаблон списку документів. Для конкретної справи звірте чинне rozporządzenie, wniosek і документи, що підтверджують як роботу, так і legalny pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-12",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 12 встановлює, що у postępowanie про видачу або uchylenie zezwolenia na pracę єдиною стороною є podmiot powierzający pracę cudzoziemcowi, а art. 31 KPA у цьому провадженні не застосовується.",
          sourceLocator: "Art. 12 pkt 1–2",
        },
      ],
      summary:
        "Стаття спеціально визначає сторону провадження про zezwolenie та виключає участь організацій, передбачену art. 31 KPA. Це процесуальне правило не описує саму підставу pobytu cudzoziemiec.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У справах про wydanie або uchylenie zezwolenie стороною є тільки podmiot, який доручає роботу; cudzoziemiec не названий стороною цього провадження за art. 12.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Положення art. 31 KPA не застосовуються у цьому провадженні. Інші права та обов'язки потрібно визначати за конкретними нормами ustawy і KPA.",
        },
      ],
      legalEffect:
        "Art. 12 визначає процесуальну роль у справі про дозвіл, але не означає, що cudzoziemiec не має жодних прав в інших процедурах або що дозвіл вирішує його legalny pobyt.",
      foreignersCase:
        "Встановіть, про яку саме процедуру йдеться: zezwolenie на роботу чи pobyt. У справі за art. 12 перевірте повідомлення podmiot і доступні засоби захисту, не плутаючи їх із процедурою pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-13",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 13 ust. 1 вимагає відмовити у видачі zezwolenie, якщо podmiot або cudzoziemiec перебуває в перелічених обставинах: неправдиві дані чи документи, визначені покарання або вироки, невиконання страхових і податкових обов'язків, відсутність коштів чи діяльності, проблеми з кваліфікацією у регульованій професії, wpis до wykaz небажаних осіб та інші названі підстави.",
          sourceLocator: "Art. 13 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Art. 13 ust. 1 pkt 3–11 також передбачає обов'язкову відмову, зокрема за надто віддалену дату початку, перевищені ліміти, міжнародні зобов'язання, неправомірне посередництво, відсутність діяльності pracodawca użytkownik або podmiot delegujący, ймовірне pozorne powierzenie роботи, невиконання роботи без обґрунтованої причини у попередні 2 роки чи перешкоджання контролю.",
          sourceLocator: "Art. 13 ust. 1 pkt 3–11",
        },
        {
          kind: "statute-text",
          text: "Art. 13 ust. 2–3 поширює частину підстав щодо покарань або вироків на визначених осіб, які діють від імені podmiot, ust. 4 дозволяє враховувати перелічені співвідношення та іншу інформацію для оцінки мети полегшення в'їзду, а ust. 5 і 7 дозволяють встановлювати окремі ліміти у rozporządzenia.",
          sourceLocator: "Art. 13 ust. 2–7",
        },
      ],
      summary:
        "Art. 13 містить обов'язкові підстави відмови та механізми перевірки реальності роботи, добросовісності podmiot і дотримання лімітів. Перелік охоплює як поведінку podmiot, так і окремі обставини cudzoziemiec та самої пропозиції роботи.",
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a–n",
          explanation:
            "Підстави щодо podmiot включають неправдиві дані, фальшиві документи, визначені правопорушення, невиконання обов'язків зі страхування і податків, відсутність фінансів або реальної діяльності та створення для полегшення в'їзду.",
        },
        {
          locator: "ust. 1 pkt 2 lit. a–c",
          explanation:
            "Щодо cudzoziemiec важливі кваліфікації для zawód regulowany, визначені вироки та чинний wpis до wykaz cudzoziemców, яких перебування в Польщі є небажаним.",
        },
        {
          locator: "ust. 1 pkt 3–11",
          explanation:
            "Окремі підстави стосуються дат і лімітів, міжнародних зобов'язань, роботи через неналежну agencja, діяльності користувача або delegującego podmiot, фіктивної роботи, попередньої бездіяльності та перешкоджання контролю.",
        },
        {
          locator: "ust. 2–7",
          explanation:
            "Частина підстав застосовується до представників і керівників у визначених випадках. Art. 13 ust. 4 називає орієнтири для оцінки, а можливі ліміти залежать від окремих rozporządzenia; їх не можна вигадувати з самого тексту статті.",
        },
      ],
      legalEffect:
        "Відмова за art. 13 стосується видачі zezwolenie na pracę і не є автоматичним рішенням про незаконність pobyt. Навіть відсутність підстави для відмови не замінює перевірку legalnego pobytu та інших умов роботи.",
      foreignersCase:
        "З'ясуйте точний пункт відмови й докази: дані podmiot, борги, діяльність, кваліфікації, wpis, дату початку, ліміти, реальність роботи та історію контролю. Для cudzoziemiec окремо перевірте документ pobyt і чинне uprawnienie do pracy.",
    },
    {
      provisionId: "powierzanie-pracy-art-14",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 14 дозволяє відмовити у видачі zezwolenie, якщо інформація органу вказує, що podmiot powierzający працю не виконав обов'язків, пов'язаних із powierzenie роботи cudzoziemcom або іншим особам, чи обов'язків, пов'язаних із веденням діяльності.",
          sourceLocator: "Art. 14",
        },
      ],
      summary:
        "Це fakultatywna підстава відмови, пов'язана з інформацією про попередню поведінку або діяльність podmiot. Вона відрізняється від конкретних обов'язкових підстав art. 13 і потребує оцінки даних, якими володіє орган.",
      rules: [
        {
          locator: "Art. 14",
          explanation:
            "Орган може відмовити, коли з наявної інформації випливає невиконання обов'язків щодо праці або діяльності. Текст не називає автоматичної відмови за кожну недосконалість без оцінки обставин.",
        },
      ],
      legalEffect:
        "Art. 14 може перешкодити видачі дозволу на роботу, але не визначає legalny pobyt cudzoziemiec і не доводить сам по собі незаконність роботи без аналізу інших норм.",
      foreignersCase:
        "Попросіть ідентифікувати конкретний обов'язок та джерело інформації органу. Перевірте, чи стосується закид podmiot, фактичної роботи або діяльності; паралельно перевірте власний документ pobyt і підставу роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-15",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 15 встановлює, що zezwolenie na pracę видається на визначений строк, який не може перевищувати 3 років.",
          sourceLocator: "Art. 15",
        },
      ],
      summary:
        "Дозвіл має визначений строк і верхню межу три роки. Стаття не говорить, що кожен дозвіл автоматично видається на три роки.",
      rules: [
        {
          locator: "Art. 15",
          explanation:
            "Потрібно прочитати конкретний okres ważności у decyzja; максимальні три роки є межею, а не гарантованою тривалістю.",
        },
      ],
      legalEffect:
        "Закінчення строку zezwolenie припиняє саме дозвіл на роботу в його межах. Воно не відповідає автоматично на питання про legalny pobyt, який має власну підставу та строк.",
      foreignersCase:
        "Занесіть у календар дату початку й кінця zezwolenie та перевірте, чи охоплює воно фактичну роботу. Окремо контролюйте строк візи або документа pobyt і не продовжуйте роботу лише через чинний pobyt.",
    },
    {
      provisionId: "powierzanie-pracy-art-16",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 16 встановлює, що отримання zezwolenie na pracę не звільняє від вимог окремих законів, від виконання яких залежить можливість працювати у zawód regulowany або вести діяльність regulowana.",
          sourceLocator: "Art. 16",
        },
      ],
      summary:
        "Дозвіл на роботу є лише одним елементом допуску. Для регульованої професії або діяльності можуть бути потрібні окремі кваліфікації, реєстрації чи дозволи за іншими актами.",
      rules: [
        {
          locator: "Art. 16",
          explanation:
            "Після отримання zezwolenie перевірте вимоги спеціального закону до zawód regulowany або działalność regulowana; art. 16 їх не перелічує і не скасовує.",
        },
      ],
      legalEffect:
        "Zezwolenie на роботу не гарантує права виконувати регульовану професію та не вирішує питання legalnego pobytu. Воно не замінює окремих професійних або галузевих передумов.",
      foreignersCase:
        "Визначте, чи є посада або діяльність регульованою, і складіть окремий список вимог за відповідним актом. Перевірте zezwolenie, документ pobyt та кваліфікаційні підтвердження, не ототожнюючи їх.",
    },
    {
      provisionId: "powierzanie-pracy-art-17",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 17 покладає на podmiot, якому видано zezwolenie, обов'язки дотримуватися умов дозволу в umowa, передавати її копію через system до початку роботи (для umowa o pomocy przy zbiorach — протягом 7 днів), забезпечувати передбачений рівень wynagrodzenie, повідомляти cudzoziemiec про провадження та рішення, діяти з należyta staranność і надавати документи органам; також встановлено спеціальні правила для функцій і delegowanie та обов'язок виплатити należne wynagrodzenie.",
          sourceLocator: "Art. 17 ust. 1–5",
        },
      ],
      summary:
        "Після видачі zezwolenie робота podmiot не завершується: він має узгодити umowa з дозволом, своєчасно передати документи, дотримуватися мінімальних оплат і співпрацювати з органами. Для delegowanie та функцій у spółka закон встановлює окремі винятки й обов'язки.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Umowa повинна відображати умови zezwolenie або допустиму зміну. Її копію польською мовою надсилають органу через system до powierzenie роботи, а для umowa o pomocy przy zbiorach — упродовж 7 днів.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Для art. 6 ust. 1 pkt 1 wynagrodzenie не може бути нижчим за актуальне мінімальне, для delegowanie за pkt 3 — нижчим за 70% актуального середнього wynagrodzenie у województwo; при збільшенні часу оплата зростає пропорційно.",
        },
        {
          locator: "ust. 1 pkt 6–10",
          explanation:
            "Podmiot інформує cudzoziemiec про дії та рішення, діє з належною старанністю, надає підтвердні документи компетентним органам, а на прохання pracodawca użytkownik передає копію zezwolenie працівника тимчасового.",
        },
        {
          locator: "ust. 2–5",
          explanation:
            "Для визначених функцій не застосовуються названі обов'язки ust. 1 pkt 1–4 і 10. При delegowanie припиняють його, якщо не виконуються умови art. 3 ust. 3; виявлене порушення треба негайно усунути, а невиплачену належну оплату — виплатити за виконану роботу.",
        },
      ],
      legalEffect:
        "Art. 17 конкретизує обов'язки podmiot після видачі дозволу, але виконання цих обов'язків не продовжує автоматично legalny pobyt і не замінює чинність zezwolenie. Порівнювати треба дозвіл, umowa та фактичну роботу.",
      foreignersCase:
        "До початку роботи отримайте копію umowa і перевірте її з zezwolenie: stanowisko, час, місце та wynagrodzenie. Попросіть повідомляти про рішення; за невиплати зберігайте розрахунки й докази, а legalny pobyt перевіряйте окремо.",
    },
    {
      provisionId: "powierzanie-pracy-art-18",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 18 визначає зміни, за яких не потрібні зміна або нове zezwolenie na pracę: зміна siedziba, miejsca pobytu stałego, назви чи форми prawnej podmiot, podmiot delegujący або pracodawca użytkownik, przejście zakładu праці до іншого pracodawca та зміна назви stanowisko без зміни обсягу обов'язків. Podmiot має повідомити орган, який видав zezwolenie.",
          sourceLocator: "Art. 18 ust. 1–2",
        },
      ],
      summary:
        "Не кожна організаційна зміна вимагає нового дозволу. Виняток діє лише для прямо названих змін і не скасовує обов'язку повідомити орган та перевірити, чи справді не змінилися фактичні обов'язки.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Зміна назви, форми prawnej або адресних даних названого podmiot, podmiot delegujący чи pracodawca użytkownik не вимагає зміни/нового zezwolenie в межах цього пункту.",
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Перехід zakład pracy до іншого pracodawca та зміна лише назви stanowisko допускаються без нового дозволу, якщо не змінюється zakres obowiązków cudzoziemiec.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Про обставини ust. 1 podmiot повинен повідомити organ, який видав zezwolenie; виняток не означає відсутності повідомлення.",
        },
      ],
      legalEffect:
        "Art. 18 зберігає чинність дозволу лише для визначених змін. Він не легалізує нове stanowisko, інші обов'язки або новий вид роботи за межами переліку та не вирішує legalny pobyt.",
      foreignersCase:
        "Опишіть зміну фактично, а не лише її назвою: podmiot, адреса, pracodawca, stanowisko й обов'язки. Переконайтеся, що повідомлення надіслано, і окремо перевірте, чи документ pobyt дозволяє продовження роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-19",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 19 зобов'язує podmiot повідомити organ, який видав zezwolenie, якщо cudzoziemiec не почав роботу протягом 2 місяців від початкової дати чинності дозволу, перервав роботу більш як на 2 місяці або завершив її раніше ніж за 2 місяці до закінчення строку дозволу.",
          sourceLocator: "Art. 19 pkt 1–3",
        },
      ],
      summary:
        "Повідомлення потрібне для трьох ситуацій, коли zezwolenie не використовується або використовується не повністю. Строки рахуються від початкової дати, тривалості перерви та кінця чинності самого дозволу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Якщо роботу не розпочато впродовж двох місяців від początkowa data ważności zezwolenia, виникає обов'язок повідомити орган.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Повідомлення також потрібне при перерві понад два місяці або завершенні роботи більш як за два місяці до кінця строку zezwolenie.",
        },
      ],
      legalEffect:
        "Art. 19 встановлює обов'язок інформації, а не автоматичне продовження дозволу чи права pobyt. Наслідки для zezwolenie треба оцінювати разом з art. 20 і art. 22.",
      foreignersCase:
        "Зберігайте докази фактичного початку, перерви й завершення роботи та порівнюйте їх із датами zezwolenie. Повідомлення podmiot не продовжує legalny pobyt; перевірте іншу підставу перебування.",
    },
    {
      provisionId: "powierzanie-pracy-art-20",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 20 вимагає подавати powiadomienia за art. 18 ust. 2 і art. 19 через system teleinformatyczny протягом 7 днів від виникнення відповідної обставини. Якщо несправність системи унеможливила своєчасне повідомлення, його подають не пізніше першого робочого дня після усунення несправності.",
          sourceLocator: "Art. 20 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює канал і строк для повідомлень про допустимі зміни та невикористання zezwolenie. Для системного збою строк переноситься до першого робочого дня після відновлення, а не зникає.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Powiadomienie за art. 18 ust. 2 або art. 19 подається через визначений system протягом 7 днів від події, а не від дати, коли сторона зручно підготувала документи.",
        },
        {
          locator: "ust. 2",
          explanation:
            "За несправності системи, яка не дозволила своєчасне подання, повідомлення подають найпізніше першого робочого дня після дня усунення несправності.",
        },
      ],
      legalEffect:
        "Art. 20 регулює дотримання процедурного строку та не надає нового права на роботу або pobyt. Саме powiadomienie не замінює zezwolenie і не змінює його умови поза межами art. 18.",
      foreignersCase:
        "Відрахуйте 7 днів від фактичної події, подайте через потрібний system і збережіть підтвердження. При збої зафіксуйте час усунення; перевірте, чи після зміни зберігається окрема підстава legalnego pobytu та роботи.",
    },
    {
      provisionId: "powierzanie-pracy-art-21",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 21 ust. 1 вважає роботу cudzoziemiec legalною після закінчення строку чинного zezwolenie до остаточності рішення про наступне zezwolenie, якщо wniosek про продовження тієї самої роботи на тому самому stanowisko або виду роботи подано вчасно без braków formalnych або з ними, усунутими в строк; періоди zawieszenia на прохання strony не зараховуються. Ust. 2–3 передбачають відповідне правило при збої системи та для визначених заяв на pobyt.",
          sourceLocator: "Art. 21 ust. 1–3",
        },
      ],
      summary:
        "Це спеціальна норма про продовження legalності роботи між старим і наступним дозволом. Вона діє лише за умов щодо тієї самої роботи та належного wniosek і не є загальним продовженням ані zezwolenie, ані pobyt.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні чинне попереднє zezwolenie, та сама посада або вид роботи, подання wniosek у період чинності та відсутність braków formalnych або їх своєчасне усунення. Тоді робота вважається legalною від наступного дня після старого строку до ostateczna decyzja.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо збій system унеможливив подання, правило застосовується відповідно, коли wniosek подано першого робочого дня після усунення несправності.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Таке правило поширене на cudzoziemiec, який подав визначений wniosek про pobyt для продовження роботи, що виконувалася за наявним zezwolenie або pobyt, а також на заявника на pobyt rezydenta długoterminowego UE — за умов тексту статті.",
        },
      ],
      legalEffect:
        "Art. 21 може тимчасово зберегти legalność wykonywania роботи до остаточного рішення, але не доводить автоматично legalny pobyt і не гарантує позитивного рішення. Потрібно довести всі умови статті та виключити період zawieszenia на прохання strony.",
      foreignersCase:
        "Зберіть старе zezwolenie, підтвердження своєчасного wniosek, докази усунення braków і порівняння stanowisko/виду роботи. Окремо підтвердьте підставу pobyt у перехідний період; не починайте іншу роботу, посилаючись лише на подання wniosek.",
    },
    {
      provisionId: "powierzanie-pracy-art-22",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 22 ust. 1 зобов'язує organ uchylić zezwolenie, коли змінилися обставини або докази рішення, podmiot подав неправдиві дані чи не виконав визначені обов'язки, припинилася причина дозволу, cudzoziemiec перестав відповідати art. 16, отримано повідомлення art. 19, діє wpis небажаного pobytu або podmiot більше не веде діяльність, що обґрунтовує роботу.",
          sourceLocator: "Art. 22 ust. 1 pkt 1–8",
        },
        {
          kind: "statute-text",
          text: "Art. 22 ust. 2 не застосовує підставу зміни обставин з ust. 1 pkt 1 до змін, названих у art. 18 ust. 1. Ust. 3 не застосовує підставу ust. 1 pkt 6, якщо wojewoda отримав powiadomienie за art. 19 pkt 1 або 2 із причинами та декларацією про використання zezwolenie за призначенням.",
          sourceLocator: "Art. 22 ust. 2–3",
        },
      ],
      summary:
        "Uchylenie zezwolenie є наслідком конкретних змін, порушень, припинення підстави або втрати реальності роботи. Для організаційних змін art. 18 та належного повідомлення про невикористання art. 19 закон передбачає спеціальні застереження.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Серед підстав — зміна обставин/доказів, неправдиві дані чи документи, припинення причини дозволу, невідповідність cudzoziemiec вимогам art. 16 та невиконання обов'язків art. 17 ust. 4–5.",
        },
        {
          locator: "ust. 1 pkt 6–8",
          explanation:
            "Підставами є інформація art. 19, чинний wpis до wykaz небажаних осіб та відсутність у podmiot діяльності, що обґрунтовує powierzenie роботи, включно з призупиненням, викресленням або ліквідацією.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Зміни з art. 18 ust. 1 не запускають ust. 1 pkt 1. Powiadomienie за art. 19 pkt 1 або 2 із причинами та декларацією про подальше використання дозволу може виключити підставу ust. 1 pkt 6.",
        },
      ],
      legalEffect:
        "Uchylenie припиняє дозвіл на роботу в межах рішення, але саме по собі не є рішенням про legalny pobyt. Після нього потрібно окремо встановити, чи залишилася інша підстава перебування та роботи.",
      foreignersCase:
        "Прочитайте конкретний пункт art. 22 у decyzja й встановіть дату ostateczność. Перевірте факти, на яких він ґрунтується, повідомлення та докази роботи; не припускайте, що чинна karta pobytu автоматично зберігає дозвіл на роботу.",
    },
    {
      provisionId: "powierzanie-pracy-art-23",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 23 передбачає, що при uchylenie zezwolenia на роботу cudzoziemiec, який перебуває в Польщі, organ повідомляє Straż Graniczna, якщо decyzja про uchylenie стала ostateczna.",
          sourceLocator: "Art. 23",
        },
      ],
      summary:
        "Після остаточного uchylenie орган передає інформацію Straż Graniczna, коли cudzoziemiec перебуває на території Польщі. Стаття встановлює обмін інформацією, а не окрему процедуру надання pobyt.",
      rules: [
        {
          locator: "Art. 23",
          explanation:
            "Потрібні дві умови: cudzoziemiec перебуває в Польщі, а decyzja про uchylenie є ostateczna. Тоді орган інформує Straż Graniczna.",
        },
      ],
      legalEffect:
        "Інформація до Straż Graniczna є наслідком остаточного припинення дозволу на роботу; вона не замінює оцінку legalnego pobytu і не означає автоматичного висновку про його припинення за самим art. 23.",
      foreignersCase:
        "Отримайте decyzja, перевірте дату її ostateczność і підставу uchylenie. Підготуйте окремі докази чинної підстави pobyt та іншого права на роботу, якщо вони існують; не покладайтеся на старе zezwolenie.",
    },
    {
      provisionId: "powierzanie-pracy-art-24",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 24 встановлює, що zezwolenie na pracę wygasa z mocy prawa в день udzielenia cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego UE або pobyt stały, а також zezwolenia na pobyt czasowy з art. 114 ust. 1, art. 126 ust. 1 і 3 або art. 127 ustawy o cudzoziemcach, якщо воно стосується роботи у того самого polski podmiot і на тому самому stanowisko.",
          sourceLocator: "Art. 24 pkt 1–2",
        },
      ],
      summary:
        "Вичерпання дозволу відбувається автоматично лише в прямо названих ситуаціях надання іншого статусу або pobyt. Для тимчасового pobyt важлива тотожність podmiot і stanowisko, названих у статті.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Надання zezwolenie na pobyt rezydenta długoterminowego UE або zezwolenie na pobyt stały запускає wygaśnięcie чинного zezwolenie na pracę z mocy prawa.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Те саме стосується лише zezwolenie na pobyt czasowy з art. 114 ust. 1, art. 126 ust. 1 і 3 або art. 127 ustawy o cudzoziemcach, коли воно пов'язане з роботою у того самого polski podmiot і на тому самому stanowisko.",
        },
      ],
      legalEffect:
        "Art. 24 стосується припинення zezwolenie na pracę, а не автоматичного продовження чи скасування всіх прав pobyt. Новий документ pobyt треба читати разом із його власними умовами доступу до роботи.",
      foreignersCase:
        "Зіставте дату udzielenia нового pobyt із даними podmiot і stanowisko у старому zezwolenie. Після цієї дати не посилайтеся на старий дозвіл; перевірте, яке саме uprawnienie do pracy випливає з нового документа.",
    },
    {
      provisionId: "powierzanie-pracy-art-25",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 25 ust. 1 встановлює, що обов'язок cudzoziemiec виконувати дії за umowa cywilnoprawna або обов'язок виконувати роботу в Польщі wygasa на період, коли cudzoziemiec не відповідає умовам art. 3 ust. 1–3, 5 і 6. Ust. 2 зберігає сторонам право на odszkodowanie, якщо відмова або uchylenie zezwolenie спричинені незбереженням należyta staranność, якщо спеціальні приписи або umowa не передбачають іншого.",
          sourceLocator: "Art. 25 ust. 1–2",
        },
      ],
      summary:
        "Стаття регулює наслідок втрати умов доступу до роботи для договірного обов'язку та передбачає можливу вимогу odszkodowanie. Вона прив'язує наслідок до конкретних умов art. 3, а не до будь-якої проблеми з документами.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "На період невідповідності умовам art. 3 ust. 1–3, 5 і 6 припиняється обов'язок виконувати роботу або дії за umowa cywilnoprawna в Польщі. Потрібно встановити, яка саме умова втрачена і коли.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Сторони зберігають право на odszkodowanie, коли відмова у видачі або uchylenie zezwolenie є результатом відсутності należyta staranność; спеціальний закон або текст umowa можуть змінити цей результат.",
        },
      ],
      legalEffect:
        "Art. 25 обмежує виконання трудового обов'язку в період відсутності умов роботи, але не є самостійною нормою про надання legalnego pobytu. Наявність pobyt без потрібного uprawnienie do pracy не усуває цього наслідку.",
      foreignersCase:
        "Встановіть точну підставу art. 3, період її дії та момент відмови або uchylenie. Зберігайте umowa і докази należyta staranność сторін, але не продовжуйте роботу лише тому, що документ pobyt ще чинний.",
    },
  ],
})
