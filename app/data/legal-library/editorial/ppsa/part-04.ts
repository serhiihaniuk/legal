import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")
const ppsaLaw = createLegalTextAuthor("ppsa")

export const ppsaPart04 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-130",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Суд umarza zawieszone postępowanie, якщо wniosek o podjęcie postępowania zawieszonego на zgodny wniosek сторін або з причини ${ppsaLaw.article("125", "art. 125 § 1")} pkt 3 не подано протягом трьох років від postanowienia; у разі braku następcy prawnego сторони, яка втратила zdolność sądową, umorzenie настає також у будь-якому разі після трьох років від postanowienia про zawieszenie з цієї причини, а після смерті сторони — після п’яти років. Umorzenie перед NSA спричиняє uprawomocnienie orzeczenia WSA.`,
          sourceLocator: "Art. 130 § 1 pkt 1–3, § 2",
        },
      ],
      summary:
        "Стаття встановлює граничні періоди для завершення zawieszone postępowanie без його поновлення та окремий наслідок для рішення WSA.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation: ppsaLaw.text`Не узагальнюйте трирічний строк: pkt 1 стосується zawieszenie на zgodny wniosek сторін або з причини ${ppsaLaw.article("125", "art. 125 § 1")} pkt 3; pkt 2 — braku następcy prawnego та граничних трьох років, а pkt 3 — смерті сторони і п’яти років. Строки рахуються від дня wydania postanowienia o zawieszeniu.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо umorzenie відбувається перед NSA, рішення WSA стає prawomocne за правилом цієї статті.",
        },
      ],
      legalEffect: ppsaLaw.text`За наявності описаних у ${ppsaLaw.article("130", "§ 1")} умов суд припиняє саме zawieszone postępowanie; стаття не вирішує матеріальну законність адміністративної справи.`,
      foreignersCase:
        "У справі про pobyt, яка опинилася в суді й була zawieszona, зафіксуйте підставу та дату postanowienie і перевірте, чи подано wniosek про podjęcie вчасно. Не сприймайте ці строки як загальний строк для wniesienia skargi.",
    },
    {
      provisionId: "ppsa-art-131",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie щодо zawieszenia, podjęcia або umorzenia postępowania може бути винесене на posiedzeniu niejawnym; zażalenie прямо передбачене на zawieszenie та odmowę podjęcia.",
          sourceLocator: "Art. 131",
        },
      ],
      summary:
        "Норма розрізняє спосіб винесення postanowienie і доступність зажаленія для двох названих рішень.",
      rules: [
        {
          locator: "Art. 131 zdanie pierwsze",
          explanation:
            "Сам факт розгляду на posiedzeniu niejawnym не означає, що справа вирішена по суті.",
        },
        {
          locator: "Art. 131 zdanie drugie",
          explanation:
            "Для zawieszenie та odmowa podjęcia перевірте pouczenie про зажаленія; стаття не поширює прямо це правило на кожне postanowienie про umorzenie.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальну форму і названий засіб оскарження, але не встановлює всіх вимог до його подання.",
      foreignersCase:
        "Якщо судова справа щодо decyzja про pobyt зупинена або відмовлено в її поновленні, прочитайте вид postanowienie і pouczenie: від цього залежить, чи йдеться про зажаленія.",
    },
    {
      provisionId: "ppsa-art-132",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd розглядає справу wyrokiem.",
          sourceLocator: "Art. 132",
        },
      ],
      summary: "Стаття називає wyrok формою, якою суд вирішує справу.",
      rules: [
        {
          locator: "Art. 132",
          explanation:
            "Відрізняйте рішення справи wyrokiem від окремих процесуальних питань, для яких закон передбачає postanowienie.",
        },
      ],
      legalEffect:
        "Норма визначає форму судового вирішення, але сама не каже, яким буде результат або чи можна його оскаржити.",
      foreignersCase:
        "У справі іноземця про судовий контроль decyzja не робіть висновок із самого слова wyrok про позитивний результат; читайте sentencja та подальше pouczenie.",
    },
    {
      provisionId: "ppsa-art-133",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Після zamknięcie rozprawy суд видає wyrok на підставі akt sprawy, крім випадку невиконання органом обов’язку з ${ppsaLaw.article("54", "art. 54 § 2")}; у postępowaniu uproszczonym або коли це передбачає закон wyrok може бути на posiedzeniu niejawnym, а закриту rozprawę слід відкрити знову, якщо істотні обставини стали відомими лише після її закриття.`,
          sourceLocator: "Art. 133 § 1–3",
        },
      ],
      summary:
        "Норма описує момент і матеріальну основу винесення wyrok та допускає окремі випадки повторного відкриття rozprawa.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Основою є akta sprawy після закриття слухання; окремо враховано ситуацію, коли орган не виконав обов’язок із ${ppsaLaw.article("54", "art. 54 § 2")}.`,
        },
        {
          locator: "§ 2–3",
          explanation:
            "Нова істотна обставина після закриття вимагає повторного відкриття rozprawa за умов цієї статті.",
        },
      ],
      legalEffect:
        "Стаття регулює спосіб підготовки wyrok, а не доводить, що суд зобов’язаний прийняти конкретну версію фактів.",
      foreignersCase: ppsaLaw.text`У спорі про pobyt перевірте, чи є потрібний документ в aktach sprawy до закриття rozprawa. Нові обставини не дають автоматичного результату, але можуть мати значення за ${ppsaLaw.article("133", "§ 3")}.`,
    },
    {
      provisionId: "ppsa-art-134",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd розглядає справу в її межах, але не пов’язаний zarzutami, wnioskami skargi або названою підставою правовою, з застереженням ${ppsaLaw.article("57a", "art. 57a")}; суд не може постановити на шкоду skarżący, крім виявлення порушення, що веде до stwierdzenie nieważności.`,
          sourceLocator: "Art. 134 § 1–2",
        },
      ],
      summary:
        "Суд має оцінювати справу в межах предмета skargi, а не лише за формулюванням її zarzuty, водночас діє правило заборони погіршення становища skarżący з прямо названим винятком.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Предмет справи і зміст skarga важливіші за помилково названу підставу, але треба врахувати спеціальне застереження ${ppsaLaw.article("57a", "art. 57a")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Заборона рішення на шкоду skarżący не є абсолютною, якщо суд бачить підставу для stwierdzenie nieważności.",
        },
      ],
      legalEffect:
        "Стаття розширює юридичну оцінку суду в межах справи, але не перетворює skarga на необмежений перегляд будь-яких питань.",
      foreignersCase: ppsaLaw.text`У скарзі на decyzja щодо pobyt чітко окресліть предмет оскарження, але не покладайтеся лише на назву zarzut. Пам’ятайте про окреме правило ${ppsaLaw.article("57a", "art. 57a")} та виняток щодо nieważność.`,
    },
    {
      provisionId: "ppsa-art-135",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Для усунення порушення права суд застосовує передбачені законом заходи щодо aktów або czynności, виданих чи вчинених у всіх postępowaniach, що лежать у межах справи за skarga, якщо це необхідно для її остаточного вирішення.",
          sourceLocator: "Art. 135",
        },
      ],
      summary:
        "Норма дозволяє суду дивитися на пов’язані postępowania в межах конкретної справи, коли це потрібно для її кінцевого завершення.",
      rules: [
        {
          locator: "Art. 135",
          explanation:
            "Потрібно одночасно встановити межі справи за skarga і необхідність заходу для кінцевого її załatwienie.",
        },
      ],
      legalEffect:
        "Це процесуальний інструмент усунення порушення, а не автоматичне скасування кожного пов’язаного акта поза межами конкретної справи.",
      foreignersCase:
        "Якщо справа про pobyt охоплює кілька пов’язаних дій органу, покажіть їх зв’язок із предметом skarga. Самої фактичної пов’язаності без необхідності для вирішення недостатньо за текстом статті.",
    },
    {
      provisionId: "ppsa-art-136",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wyrok може бути виданий лише суддями, перед якими відбулася rozprawa, що безпосередньо передувала його винесенню.",
          sourceLocator: "Art. 136",
        },
      ],
      summary:
        "Стаття пов’язує склад суду, який видає wyrok, із суддями безпосередньо попередньої rozprawa.",
      rules: [
        {
          locator: "Art. 136",
          explanation:
            "Порівнюйте склад, зазначений у матеріалах та sentencja, з rozprawa, яка безпосередньо передувала wyrok.",
        },
      ],
      legalEffect:
        "Норма встановлює вимогу до складу, уповноваженого видати wyrok; вона сама не визначає наслідок кожного можливого відхилення.",
      foreignersCase:
        "У разі спору про decyzja щодо pobyt перевірте дані про склад суду і слухання, якщо виникла конкретна процесуальна проблема. Не робіть висновок про результат лише з персонального складу.",
    },
    {
      provisionId: "ppsa-art-137",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Wyrok ухвалюється після таємної narada sędziów; рішення приймається більшістю, суддя може під час підписання sentencji подати zdanie odrębne та має письмово його обґрунтувати, а sentencja підписується всім складом суду. Narada і голосування є таємними, а повідомлення про zdanie odrębne та ім’я судді відбуваються за правилами ${ppsaLaw.article("137", "§ 3")}.`,
          sourceLocator: "Art. 137 § 1–5",
        },
      ],
      summary:
        "Стаття описує таємну нараду, порядок голосування, можливість окремої думки та підписання sentencja.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "До narada входять обговорення, голосування та spisanie sentencji і zasadniczych powodów; суддя, який не погодився з більшістю, подає zdanie odrębne під час підписання sentencji та письмово його обґрунтовує, і воно може стосуватися також uzasadnienie. Про подання zdanie odrębne повідомляють, а ім’я судді — лише за його згодою.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Sentencja підписує весь склад; за умов тексту wyrok може бути зафіксований у системі суду з kwalifikowany podpis elektroniczny.",
        },
      ],
      legalEffect:
        "Норма регулює внутрішнє ухвалення й оформлення wyrok, не відкриваючи сторонам зміст таємної narada.",
      foreignersCase:
        "У справі про pobyt орієнтуйтеся на doręczona sentencja та uzasadnienie, а не на припущення про внутрішнє голосування суду.",
    },
    {
      provisionId: "ppsa-art-138",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sentencja wyroku повинна містити суд, імена суддів, protokolant та prokurator, якщо він брав участь, дату й місце розгляду та винесення, skarżący, предмет оскарження і rozstrzygnięcie суду.",
          sourceLocator: "Art. 138",
        },
      ],
      summary:
        "Норма встановлює обов’язкові ідентифікаційні та результативні елементи sentencja wyroku.",
      rules: [
        {
          locator: "Art. 138",
          explanation:
            "У sentencja окремо шукайте предмет зaskarżenia і саме rozstrzygnięcie, а також дані суду та учасників, названі статтею.",
        },
      ],
      legalEffect:
        "Sentencja має показувати, яку справу і яким рішенням суд завершив; стаття не замінює правил про uzasadnienie чи оскарження.",
      foreignersCase:
        "Після рішення у справі про pobyt звірте, чи sentencja стосується саме вашої decyzja і чи зрозумілий її результат. Для причин рішення звертайтеся до uzasadnienie.",
    },
    {
      provisionId: "ppsa-art-139",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Ogłoszenie wyroku зазвичай відбувається на засіданні, де закрито rozprawa; у складній справі оголошення можна відкласти до чотирнадцяти днів і лише один раз продовжити не більш як на сім. Воно є публічним, відсутність сторін не перешкоджає, а для wyrok з posiedzenie niejawnym odpis sentencji вручають сторонам, якщо uzasadnienie не складається з urzędu; такий wyrok публічно доступний у sekretariat протягом чотирнадцяти днів.",
          sourceLocator: "Art. 139 § 1–5",
        },
      ],
      summary:
        "Стаття визначає час, публічність і спосіб ogłoszenie wyroku та окремі правила для posiedzenie niejawne.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Дата оголошення зазвичай збігається із закриттям rozprawa; відкладення потребує postanowienie і має межі, вказані в нормі.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Неявка сторони не зупиняє ogłoszenie; оголошується sentencja, а zasadnicze powody можуть бути сказані усно.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Для wyrok на posiedzenie niejawnym перевірте, чи uzasadnienie складається з urzędu: якщо ні, odpis sentencji doręczaється сторонам; сам wyrok має бути публічно доступний у sekretariat протягом чотирнадцяти днів.",
        },
      ],
      legalEffect:
        "Правило про ogłoszenie не встановлює саме по собі строку оскарження: для дій сторони треба перевірити відповідне pouczenie і спеціальні норми.",
      foreignersCase:
        "У спорі про pobyt зафіксуйте дату ogłoszenie або doręczenia sentencja. Неявка не означає, що оголошення не відбулося; перевірте також pouczenie про засіб оскарження.",
    },
    {
      provisionId: "ppsa-art-140",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Стороні без adwokat, radca prawny, doradca podatkowy або rzecznik patentowy, присутній при ogłoszenie wyroku, przewodniczący дає вказівки щодо строку і способу wniesienia środka odwoławczego; для позбавленої волі відсутньої сторони odpis sentencji з pouczeniem надсилається з urzędu протягом тижня, а для wyrok на posiedzenie niejawnym таке pouczenie додається під час doręczenie, якщо сторона не має названого професійного представника.",
          sourceLocator: "Art. 140 § 1–3",
        },
      ],
      summary:
        "Норма пов’язує процесуальні вказівки про оскарження з присутністю, способом винесення wyrok та відсутністю професійного представника.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Порівнюйте фактичну присутність сторони на ogłoszenie і наявність представника з переліком у статті.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для позбавленої волі сторони або wyrok на posiedzenie niejawnym перевірте odpis sentencji та долучене pouczenie.",
        },
      ],
      legalEffect:
        "Стаття передбачає обов’язок надати певне pouczenie в названих ситуаціях, але не замінює перевірку допустимості й строку конкретного środka odwoławczego.",
      foreignersCase:
        "Якщо іноземець бере участь у справі без adwokat чи radca prawny, перевірте, чи отримав він потрібне pouczenie разом із sentencja та коли саме його вручено.",
    },
    {
      provisionId: "ppsa-art-141",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Uzasadnienie wyroku складається з urzędu протягом чотирнадцяти днів у випадках ${ppsaLaw.article("141", "§ 1")}; коли skarga oddalono, його готують за wniosek, поданий протягом семи днів від оголошення або doręczenie odpisu sentencji, і протягом чотирнадцяти днів від wniosek. У складній справі строк можна продовжити максимум на тридцять днів; uzasadnienie має містити стан справи, zarzuty, позиції сторін, правову підставу, її пояснення та, при повторному розгляді органом, вказівки щодо подальшого провадження.`,
          sourceLocator: "Art. 141 § 1–4",
        },
      ],
      summary:
        "Стаття розрізняє uzasadnienie з urzędu та за wniosek і визначає строки та мінімальний зміст мотивів wyrok.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Спершу встановіть, чи uzasadnienie складається з urzędu, чи skarga була oddalona і потрібен wniosek у семиденний строк.",
        },
        {
          locator: "§ 2a–3",
          explanation:
            "Для складної справи можливе обмежене продовження; odmowa sporządzenia uzasadnienia оформлюється postanowieniem на posiedzenie niejawnym.",
        },
        {
          locator: "§ 4",
          explanation:
            "Читайте, чи мотиви охоплюють факти, zarzuty, stanowiska, правову підставу та вказівки для органу, якщо справа повертається.",
        },
      ],
      legalEffect:
        "Uzasadnienie пояснює rozstrzygnięcie і може містити вказівки для подальшого провадження; строки для wniosek треба відраховувати від події, названої статтею.",
      foreignersCase:
        "У спорі про pobyt, де skarga oddalono, не пропустіть семиденний wniosek про uzasadnienie. Після отримання мотивів зіставте їх із zarzuty та вказівками про подальший шлях.",
    },
    {
      provisionId: "ppsa-art-142",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Odpis wyroku з uzasadnienie, складеним з urzędu, вручається кожній стороні; якщо uzasadnienie складено за wniosek, його отримує лише сторона, яка подала wniosek.",
          sourceLocator: "Art. 142 § 1–2",
        },
      ],
      summary:
        "Адресати odpis wyroku залежать від того, чи було uzasadnienie складено з urzędu або за wniosek.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "При uzasadnienie з urzędu перевірте doręczenie кожній стороні.",
        },
        {
          locator: "§ 2",
          explanation:
            "При uzasadnienie за wniosek відправлення одержує сторона-заявник, а не автоматично всі учасники.",
        },
      ],
      legalEffect:
        "Норма визначає коло одержувачів копії з мотивами; вона не дає висновку про саму можливість оскарження.",
      foreignersCase:
        "Іноземцю у справі про pobyt варто зберегти odpis wyroku з uzasadnieniem і перевірити, чи він був wnioskodawcą, коли мотиви складалися за wniosek.",
    },
    {
      provisionId: "ppsa-art-143",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Uzasadnienie wyroku підписують судді, які брали участь у його винесенні; якщо суддя не може підписати, зазначається причина. Uzasadnienie може бути зафіксоване в системі суду з kwalifikowany podpis elektroniczny.",
          sourceLocator: "Art. 143 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює авторство і спосіб підписання uzasadnienie, включно з електронною формою.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте підписи суддів і зазначення причини, якщо одного підпису немає.",
        },
        {
          locator: "§ 2",
          explanation:
            "Електронне utrwalenie допускається разом із kwalifikowany podpis elektroniczny.",
        },
      ],
      legalEffect:
        "Правило стосується оформлення uzasadnienie і не змінює змісту rozstrzygnięcie.",
      foreignersCase:
        "У матеріалах справи про pobyt звірте отриманий текст uzasadnienie з даними суду; електронний формат сам по собі не означає іншого результату.",
    },
    {
      provisionId: "ppsa-art-144",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd є пов’язаний виданим wyrok від моменту його оголошення, а wyrok на posiedzenie niejawnym — від підписання sentencja.",
          sourceLocator: "Art. 144",
        },
      ],
      summary:
        "Норма визначає момент, з якого сам суд пов’язаний виданим wyrok, окремо для публічного оголошення та posiedzenie niejawne.",
      rules: [
        {
          locator: "Art. 144",
          explanation:
            "Для звичайного wyrok орієнтиром є ogłoszenie, для wyrok без відкритого засідання — підписання sentencja.",
        },
      ],
      legalEffect: ppsaLaw.text`Це правило про пов’язаність суду; його не слід автоматично ототожнювати з prawomocność, яку окремо регулює ${ppsaLaw.article("168", "art. 168")}.`,
      foreignersCase: ppsaLaw.text`У справі щодо pobyt розрізняйте момент пов’язаності суду за ${ppsaLaw.article("144", "art. 144")} і момент prawomocność. Для практичної дії рішення перевірте також його зміст і засоби оскарження.`,
    },
    {
      provisionId: "ppsa-art-145",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Задовольняючи skarga на decyzja або postanowienie, суд може uchylić їх повністю чи частково за визначених матеріальних або процесуальних порушень, stwierdzić nieważność за підставами KPA чи інших норм або stwierdzić wydanie з порушенням prawa; у передбаченому випадку суд одночасно umarza адміністративне postępowanie.",
          sourceLocator: "Art. 145 § 1–3",
        },
      ],
      summary:
        "Стаття розкладає наслідки задоволення skarga на decyzja або postanowienie за видами порушення та окремо враховує інші procedury.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Для uchylenie шукайте матеріальне порушення, що вплинуло на результат, підставу wznowienie або інше істотне процесуальне порушення.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Не змішуйте uchylenie, stwierdzenie nieważności та stwierdzenie wydania з naruszeniem prawa: їхні підстави в тексті різні.",
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Для іншої процедури враховуйте її спеціальні правила; якщо є підстава для umorzenie адміністративної справи, суд робить це одночасно у випадку ${ppsaLaw.article("145", "§ 3")}.`,
        },
      ],
      legalEffect:
        "Задоволення skarga не має одного універсального наслідку: результат залежить від встановленого виду порушення та процесу, у якому видано акт.",
      foreignersCase:
        "У спорі про decyzja щодо pobyt пов’яжіть кожен zarzut із можливим наслідком: uchylenie, nieważność або stwierdzenie naruszenia prawa. Скасування не означає автоматичної видачі документа на pobyt.",
    },
    {
      provisionId: "ppsa-art-145a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`У випадках ${ppsaLaw.article("145", "art. 145 § 1")} pkt 1 lit. a або pkt 2, якщо це виправдано обставинами, суд зобов’язує орган у визначений строк видати decyzja або postanowienie, вказуючи спосіб załatwienia справи чи її rozstrzygnięcie, крім випадку, коли результат залишено на uznanie органу. За невидачі в строк сторона може подати skarga про встановлення права або обов’язку; суд оцінює rażące naruszenie prawa та може накласти grzywna або присудити суму.`,
          sourceLocator: "Art. 145a § 1–3",
        },
      ],
      summary:
        "Стаття описує, як суд може зобов’язати орган видати рішення після визначених порушень, а також що робити, якщо орган не виконав такий обов’язок у строк.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Суд визначає строк і спосіб załatwienia або розпорядження, але застереження про uznanie органу не дозволяє автоматично підмінити його розсуд.",
        },
        {
          locator: "§ 2",
          explanation:
            "Орган повідомляє суд про видану decyzja або postanowienie протягом семи днів; за неповідомлення можливе grzywna.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо акт не видано в строк, сторона може вимагати orzeczenie про право або обов’язок, коли обставини це дозволяють; суд також оцінює rażące naruszenie.",
        },
      ],
      legalEffect:
        "Норма посилює виконання судового рішення у визначених випадках, але застереження про uznanie органу та умова обставин не дають універсальної гарантії конкретної decyzja.",
      foreignersCase: ppsaLaw.text`Якщо після суду у справі про pobyt орган зобов’язаний видати decyzja або postanowienie, зафіксуйте встановлений строк і семиденний обов’язок повідомлення. Невидача може відкрити шлях із ${ppsaLaw.article("145a", "§ 3")}, але це не означає автоматичної видачі дозволу.`,
    },
    {
      provisionId: "ppsa-art-146",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на akt або czynność з ${ppsaLaw.article("3", "art. 3 § 2")} pkt 4–4b, суд uchyla відповідний akt, interpretację, opinię чи відмову або stwierdza bezskuteczność czynność; до цього відповідно застосовується ${ppsaLaw.article("145", "art. 145 § 1")} pkt 1, а у справах pkt 4 суд може визнати uprawnienie чи obowiązek, що випливає з prawa.`,
          sourceLocator: "Art. 146 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює наслідки для спеціальної категорії aktów і czynności, а для pkt 4 допускає визнання права або обов’язку.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Спочатку перевірте, що предмет справді належить до ${ppsaLaw.article("3", "art. 3 § 2")} pkt 4–4b; далі розрізняйте uchylenie і bezskuteczność.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Визнання uprawnienie або obowiązek прямо назване лише для справ за pkt 4 і залежить від розгляду skarga.",
        },
      ],
      legalEffect:
        "Наслідок залежить від виду оскарженого акту чи czynność; стаття не поширює цей режим на кожну decyzja адміністрації.",
      foreignersCase: ppsaLaw.text`У справі іноземця спершу класифікуйте оскаржений документ: звичайна decyzja про pobyt не стає справою ${ppsaLaw.article("146", "art. 146")} лише через спосіб її називання.`,
    },
    {
      provisionId: "ppsa-art-147",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на uchwała або akt з ${ppsaLaw.article("3", "art. 3 § 2")} pkt 5–6, суд stwierdza nieważność повністю чи частково або stwierdza wydanie з naruszeniem prawa, якщо спеціальний припис виключає nieważność; індивідуальні рішення, видані на їх підставі, оскаржуються в адміністративному або спеціальному порядку.`,
          sourceLocator: "Art. 147 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Норма стосується uchwała та актів, названих у ${ppsaLaw.article("3", "art. 3 § 2")} pkt 5–6, і відділяє їх від індивідуальних рішень, що на них ґрунтуються.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Визначте, чи діє спеціальний припис, який замість nieważność допускає лише stwierdzenie naruszenia prawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окремо перевіряйте шлях для індивідуального rozstrzygnięcia, виданого на підставі uchwała або aktu.",
        },
      ],
      legalEffect:
        "Судовий наслідок для загального акту не замінює процедуру оскарження індивідуальної decyzja, прийнятої на його основі.",
      foreignersCase:
        "Якщо у справі іноземця посилаються на місцеву uchwała чи akt, не плутайте оскарження цього загального акту з оскарженням індивідуальної decyzja про pobyt.",
    },
    {
      provisionId: "ppsa-art-148",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Задовольняючи skarga jednostki samorządu terytorialnego на akt nadzoru, суд uchyla цей акт.",
          sourceLocator: "Art. 148",
        },
      ],
      summary:
        "Стаття встановлює один наслідок для skarga органу samorządu terytorialnego на акт надзору.",
      rules: [
        {
          locator: "Art. 148",
          explanation:
            "Перевірте і статус skarżący як jednostka samorządu terytorialnego, і те, що предметом є акт надзору.",
        },
      ],
      legalEffect:
        "Це спеціальне правило для визначеної категорії skarga; воно не є загальним способом скасування decyzja у справі іноземця.",
      foreignersCase: ppsaLaw.text`Для типової справи про pobyt ${ppsaLaw.article("148", "art. 148")} прямо не визначає шлях оскарження. Не застосовуйте його без встановлення спеціального предмета та сторони, названих у статті.`,
    },
    {
      provisionId: "ppsa-art-149",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на bezczynność або przewlekłe prowadzenie postępowania у справах ${ppsaLaw.article("3", "art. 3 § 2")} pkt 1–4, а також на przewlekłość у справі pkt 4a, суд може зобов’язати орган видати akt, interpretację чи здійснити czynność, зобов’язати визнати право або обов’язок і встановлює факт бездіяльності чи протяглості; він також оцінює rażące naruszenie prawa, а за умов ${ppsaLaw.article("149", "§ 1b")} може вирішити існування права чи обов’язку, накласти grzywna або присудити суму.`,
          sourceLocator: "Art. 149 § 1–2",
        },
      ],
      summary:
        "Стаття дає суду кілька способів реагування на bezczynność або przewlekłość: від зобов’язання органу до окремих фінансових наслідків.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Розрізняйте наказ видати akt або зробити czynność, наказ визнати право чи обов’язок і саме stwierdzenie bezczynności або przewlekłości.",
        },
        {
          locator: "§ 1a–1b",
          explanation:
            "Суд встановлює, чи було rażące naruszenie prawa; безпосереднє вирішення права або обов’язку можливе лише за умов характеру справи та безсумнівного стану.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Grzywna або сума на користь skarżący можливі додатково і мають межу, прив’язану до ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Судовий захист від бездіяльності спрямований на процесуальну реакцію та, за умов статті, на право чи обов’язок; він не гарантує наперед позитивного адміністративного рішення.",
      foreignersCase: ppsaLaw.text`У справі про затягування розгляду wniosku про pobyt спершу класифікуйте бездіяльність або przewlekłość за межами ${ppsaLaw.article("3", "art. 3 § 2")}. Навіть зобов’язання органу розглянути справу не дорівнює обов’язку видати дозвіл.`,
    },
    {
      provisionId: "ppsa-art-150",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`У справах про akty і czynności, не названі в ${ppsaLaw.article("145", "art. 145")}–${ppsaLaw.article("148", "148")}, суд, задовольняючи skarga, uchyla їх або stwierdza bezskuteczność.`,
          sourceLocator: "Art. 150",
        },
      ],
      summary:
        "Це залишкове правило наслідку для aktów і czynności, які не входять до категорій попередніх статей.",
      rules: [
        {
          locator: "Art. 150",
          explanation: ppsaLaw.text`Перед застосуванням перевірте, що предмет не належить до ${ppsaLaw.article("145", "art. 145")}–${ppsaLaw.article("148", "148")}; після цього розрізняйте uchylenie та bezskuteczność.`,
        },
      ],
      legalEffect:
        "Стаття дає два можливі наслідки для залишкової категорії, але сама не вирішує, який із них відповідає конкретному akt або czynność.",
      foreignersCase: ppsaLaw.text`У справі іноземця не називайте ${ppsaLaw.article("150", "art. 150")} запасним шляхом лише тому, що документ органу незрозумілий. Спершу встановіть точний тип akt або czynność та його правову категорію.`,
    },
    {
      provisionId: "ppsa-art-151",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо skarga не задовольняється повністю або частково, суд oddala її відповідно повністю або частково.",
          sourceLocator: "Art. 151",
        },
      ],
      summary:
        "Норма називає результат, коли суд не приймає skarga в повному або частковому обсязі.",
      rules: [
        {
          locator: "Art. 151",
          explanation:
            "Відрізняйте повне oddalenie від часткового: формула sentencja має показати обсяг відхилення.",
        },
      ],
      legalEffect:
        "Oddalenie означає незадоволення skarga у відповідному обсязі; стаття сама не визначає подальший засіб оскарження.",
      foreignersCase:
        "Після oddalenie skarga на decyzja про pobyt перевірте, чи відхилено всю скаргу або лише частину, і окремо з’ясуйте правила щодо uzasadnienie та skarga kasacyjna.",
    },
    {
      provisionId: "ppsa-art-151a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи sprzeciw від decyzja, суд uchyla decyzja повністю, якщо встановлює порушення ${kpaLaw.article("138", "art. 138 § 2")} KPA, і може з urzędu або за wniosek накласти органу grzywna; якщо sprzeciw не задоволено, суд його oddala. На wyrok за ${ppsaLaw.article("151a", "§ 1")} środka odwoławczego немає, але на postanowienie про grzywna належить zażalenie; правила застосовуються відповідно і до sprzeciw від postanowienie.`,
          sourceLocator: "Art. 151a § 1–4",
        },
      ],
      summary: ppsaLaw.text`Стаття встановлює окремий режим sprzeciw від decyzja або postanowienie у випадках, пов’язаних з ${kpaLaw.article("138", "art. 138 § 2")} KPA, включно з відсутністю звичайного środka odwoławczego від визначеного wyrok.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Для sprzeciw спочатку перевірте названу підставу ${kpaLaw.article("138", "art. 138 § 2")} KPA; наслідком є uchylenie decyzja або oddalenie sprzeciw залежно від оцінки суду.`,
        },
        {
          locator: "§ 3",
          explanation: ppsaLaw.text`Wyrok за ${ppsaLaw.article("151a", "§ 1")} не має środka odwoławczego, але postanowienie у частині grzywna може бути оскаржене zażalenie.`,
        },
        {
          locator: "§ 4",
          explanation:
            "Ті самі правила відповідно застосовуються до sprzeciw від postanowienie.",
        },
      ],
      legalEffect:
        "Це спеціальний контроль sprzeciw, а не загальна заміна odwołanie; наслідок і можливість оскарження залежать від виду розглянутого рішення.",
      foreignersCase: ppsaLaw.text`У справі іноземця спочатку встановіть, чи decyzja або postanowienie справді належить до режиму sprzeciw за ${kpaLaw.article("138", "art. 138 § 2")} KPA. Не називайте цей шлях звичайною апеляцією на будь-яку decyzja про pobyt.`,
    },
    {
      provisionId: "ppsa-art-152",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо skarga на akt або czynność задоволено, вони не викликають skutki prawne до набрання wyrok законної сили, якщо суд не постановить інакше; це не стосується aktów prawa miejscowego.",
          sourceLocator: "Art. 152 § 1–2",
        },
      ],
      summary:
        "Стаття визначає тимчасовий наслідок задоволення skarga для akt або czynność до uprawomocnienie wyrok і робить виняток для актів місцевого права.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте, чи skarga задоволена і чи суд не встановив інше; за базовим правилом skutki prawne не настають до prawomocność.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Для akt prawa miejscowego правило ${ppsaLaw.article("152", "§ 1")} не застосовується.`,
        },
      ],
      legalEffect:
        "Наслідок залежить від виду предмета та формулювання wyrok; не можна без перевірки поширювати його на кожен документ адміністрації.",
      foreignersCase:
        "У спорі щодо акта, який впливає на pobyt або інше право іноземця, перевірте sentencja, вид akt та момент prawomocność. Не припускайте автоматичної зупинки всіх наслідків decyzja.",
    },
    {
      provisionId: "ppsa-art-153",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Ocena prawna і вказівки щодо подальшого postępowanie, викладені в рішенні суду, пов’язують у цій справі органи, чиї działanie, bezczynność або przewlekłość оскаржувалися, а також суди, якщо право не змінилося.",
          sourceLocator: "Art. 153",
        },
      ],
      summary:
        "Норма надає ocena prawna та вказівкам суду обов’язкове значення в тій самій справі за умови незмінності права.",
      rules: [
        {
          locator: "Art. 153",
          explanation:
            "Зіставте орган і суд із тією самою справою та перевірте, чи не змінилися przepisy prawa після рішення.",
        },
      ],
      legalEffect:
        "Зв’язаність стосується ocena prawna і вказівок у конкретній справі; вона не є гарантією будь-якого наперед визначеного рішення органу.",
      foreignersCase:
        "Якщо після skarga у справі про pobyt справу повернули органу, випишіть ocena prawna та wskazania з wyrok і звірте, чи орган діє в їх межах. Окремо перевірте можливі зміни права.",
    },
    {
      provisionId: "ppsa-art-154",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У разі невиконання wyrok, що задовольнив skarga на bezczynność або przewlekłość, після попереднього письмового wezwanie органу сторона може подати skarga з вимогою grzywna; суд може вирішити право або обов’язок, встановлює rażące naruszenie, а наступне виконання після подання цієї skarga не є підставою для її umorzenie чи oddalenie.",
          sourceLocator: "Art. 154 § 1–7",
        },
      ],
      summary:
        "Стаття дає окремий шлях реагування на невиконання судового рішення щодо бездіяльності або протяглості та передбачає grzywna, суму і можливе odszkodowanie.",
      rules: [
        {
          locator: "§ 1–3",
          explanation: ppsaLaw.text`Перед новою skarga потрібне письмове wezwanie органу; подальше виконання після її подання саме по собі не припиняє справу за ${ppsaLaw.article("154", "§ 3")}.`,
        },
        {
          locator: "§ 4–5",
          explanation:
            "Особа зі шкодою може мати roszczenie про odszkodowanie; за невиплату органом протягом трьох місяців передбачено повództwo до sąd powszechny.",
        },
        {
          locator: "§ 6–7",
          explanation: ppsaLaw.text`Grzywna та сума на користь skarżący мають межі, прямо прив’язані до середньої зарплати або ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Захист за цією статтею виникає після невиконання відповідного wyrok і попереднього письмового wezwanie; фінансовий наслідок не замінює автоматично адміністративне рішення.",
      foreignersCase:
        "Після wyrok про bezczynność у справі про pobyt збережіть його, письмове wezwanie та докази невиконання. Нова skarga спрямована на виконання рішення, а не гарантує позитивного змісту decyzja.",
    },
    {
      provisionId: "ppsa-art-155",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо під час розгляду виявлено істотні порушення права або обставини, що вплинули на їх виникнення, склад суду може postanowieniem повідомити компетентні органи або їхні вищі органи; одержувач має розглянути повідомлення і відповісти суду протягом тридцяти днів, а за невиконання цього обов’язку суд може накласти grzywna.",
          sourceLocator: "Art. 155 § 1–3",
        },
      ],
      summary:
        "Стаття створює канал повідомлення про істотні порушення під час розгляду і строк відповіді органу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Повідомлення оформлюється postanowieniem і стосується виявлених під час розгляду істотних порушень або їх причин.",
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Орган має повідомити суд про позицію за тридцять днів; за невиконання можливе grzywna у межах ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Це повідомлення та контроль відповіді органу, а не самостійне рішення про право іноземця чи скасування його decyzja.",
      foreignersCase: ppsaLaw.text`У справі про pobyt ${ppsaLaw.article("155", "art. 155")} може стосуватися системної процесуальної проблеми, поміченої судом, але не замінює skarga та не наказує органу видати дозвіл.`,
    },
    {
      provisionId: "ppsa-art-156",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd може з urzędu виправити у wyrok неточності, помилки письма або рахунку чи інші очевидні omyłki; це може бути постановлено на posiedzenie niejawnym із позначкою на оригіналі та копіях. У corpus для ${ppsaLaw.article("156", "§ 2a")} наведено дві редакції: чинну на дату стану з електронною wzmianka, підписаною kwalifikowany podpis elektroniczny, і редакцію, що набуде чинності 1 жовтня 2029 року.`,
          sourceLocator: "Art. 156 § 1–3, przypisy 53–55",
        },
      ],
      summary: ppsaLaw.text`Стаття регулює виправлення очевидних технічних помилок у wyrok і фіксацію такого sprostowanie, включно з описаною в corpus перехідною редакцією ${ppsaLaw.article("156", "§ 2a")}.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Йдеться про niedokładności, błędy або очевидні omyłki; рішення про sprostowanie може бути на posiedzenie niejawnym і має бути відображене в копіях.",
        },
        {
          locator: "§ 2a, przypisy 54–55",
          explanation: ppsaLaw.text`Не змішуйте дві версії електронного оформлення: перша редакція ${ppsaLaw.article("156", "§ 2a")} діє до набрання чинності зміною, а друга набуде чинності 1.10.2029; на legalStateDate 2026-07-14 застосовується перша.`,
        },
        {
          locator: "§ 3",
          explanation:
            "NSA може з urzędu виправити wyrok першої інстанції, якщо справа перебуває перед ним.",
        },
      ],
      legalEffect:
        "Sprostowanie стосується очевидної неточності чи помилки та не повинно без перевірки сприйматися як нове вирішення спору по суті.",
      foreignersCase:
        "Якщо у wyrok щодо pobyt помилково зазначено дані або арифметику, порівняйте оригінал і odpis та перевірте можливість sprostowanie. Редакцію електронної форми звіряйте з датою та примітками corpus.",
    },
    {
      provisionId: "ppsa-art-157",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Сторона може протягом чотирнадцяти днів від doręczenie wyroku, складеного з urzędu, або від ogłoszenie, якщо його не вручають, подати wniosek про uzupełnienie, коли суд не вирішив усю skarga або не включив належне додаткове рішення; прострочений wniosek відхиляється, а доповнення оформлюється wyrokiem, крім випадку лише витрат.",
          sourceLocator: "Art. 157 § 1–3",
        },
      ],
      summary:
        "Норма дає короткий строк для uzupełnienie wyroku при пропущеному обсязі skarga чи обов’язковому додатковому рішенні.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Відраховуйте чотирнадцять днів від події, визначеної нормою; прострочений wniosek підлягає odrzucenie.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Питання kosztów може розглядатися окремо на posiedzenie niejawnym; форма доповнення залежить від того, чи йдеться лише про витрати.",
        },
      ],
      legalEffect:
        "Uzupełnienie виправляє неповноту вирішення в межах, названих статтею, але не є загальним способом повторно оскаржити зміст wyrok.",
      foreignersCase: ppsaLaw.text`Після wyrok у справі про pobyt звірте всі вимоги skarga із sentencja. Якщо суд не вирішив частину, окремо перевірте чотирнадцятиденний wniosek; ${ppsaLaw.article("159", "art. 159")} визначає його вплив на строк оскарження.`,
    },
    {
      provisionId: "ppsa-art-158",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, який видав wyrok, вирішує postanowieniem сумніви щодо його змісту; таке postanowienie може бути видане на posiedzenie niejawnym.",
          sourceLocator: "Art. 158",
        },
      ],
      summary:
        "Стаття передбачає окреме postanowienie суду для роз’яснення сумнівів у змісті власного wyrok.",
      rules: [
        {
          locator: "Art. 158",
          explanation:
            "Звертайтеся до суду, який видав wyrok, коли є сумнів саме щодо його змісту; форма може бути niejawnym засіданням.",
        },
      ],
      legalEffect:
        "Норма встановлює форму вирішення сумнівів, але не надає підстав змінювати предмет спору чи замінювати wyrok новим розглядом.",
      foreignersCase:
        "Якщо формулювання wyrok у справі про pobyt незрозуміле, відокремте wniosek про wykładnię від оскарження по суті й перевірте інші строки за справою.",
    },
    {
      provisionId: "ppsa-art-159",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniosek про sprostowanie, uzupełnienie або wykładnię wyroku не впливає на перебіг строку для wniesienia środka zaskarżenia.",
          sourceLocator: "Art. 159",
        },
      ],
      summary:
        "Подання заяви про виправлення, доповнення чи тлумачення не зупиняє строк оскарження wyrok.",
      rules: [
        {
          locator: "Art. 159",
          explanation:
            "Не очікуйте результату wniosek, перш ніж перевірити і, за потреби, дотриматися окремого строку środka zaskarżenia.",
        },
      ],
      legalEffect:
        "Стаття прямо відділяє ці три wnioski від перебігу строку оскарження.",
      foreignersCase:
        "У справі про pobyt не покладайтеся на wniosek про wykładnię чи uzupełnienie як на спосіб зберегти строк skarga kasacyjna або іншого środka zaskarżenia.",
    },
    {
      provisionId: "ppsa-art-160",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо ця ustawa не передбачає видачу wyrok, суд видає orzeczenie у формі postanowienia.",
          sourceLocator: "Art. 160",
        },
      ],
      summary:
        "Стаття встановлює резервну форму postanowienie для випадків, де закон не передбачає wyrok.",
      rules: [
        {
          locator: "Art. 160",
          explanation:
            "Визначаючи документ, спершу перевірте, чи закон вимагає wyrok; за відсутності такого припису застосовується форма postanowienie.",
        },
      ],
      legalEffect:
        "Форма orzeczenie залежить від прямого припису ustawa; з назви postanowienie ще не випливає його оскаржуваність.",
      foreignersCase:
        "У судовій справі про pobyt спочатку ідентифікуйте, чи документ є wyrok або postanowienie, а потім шукайте спеціальне правило про засіб оскарження.",
    },
    {
      provisionId: "ppsa-art-161",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd видає postanowienie про umorzenie postępowania, якщо skarżący ефективно відкликав skarga, після смерті сторони за умов, коли предмет стосується лише особисто пов’язаних прав та обов’язків, або коли справа з інших причин стала bezprzedmiotowa; postanowienie може бути на posiedzenie niejawnym.",
          sourceLocator: "Art. 161 § 1–2",
        },
      ],
      summary:
        "Норма перелічує підстави umorzenie судового провадження, зокрема skuteczne cofnięcie skargi і bezprzedmiotowość.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Cofnięcie skargi має бути skuteczne; сама заява про відкликання не замінює перевірки цієї умови.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Після смерті сторони перевірте особистий характер прав і можливість участі особи з interes prawny; окремо встановіть, чи справа стала bezprzedmiotowa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про umorzenie суд може постановити на posiedzenie niejawnym.",
        },
      ],
      legalEffect:
        "Umorzenie завершує судове postępowanie з процесуальної підстави, названої в нормі, і не є вирішенням законності рішення по суті.",
      foreignersCase:
        "У справі про pobyt обережно оцініть наслідки cofnięcie skargi або втрати предмета спору: umorzenie не означає, що decyzja стала законною по суті на користь іноземця.",
    },
    {
      provisionId: "ppsa-art-162",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Rozstrzygnięcia у postanowieniaх, які не завершують справу, винесених на posiedzenie jawne, заносяться до protokołu без окремої sentencja, якщо на них не належить zażalenie.",
          sourceLocator: "Art. 162",
        },
      ],
      summary:
        "Стаття пояснює, коли проміжне рішення може існувати як запис у protokół без окремої sentencja.",
      rules: [
        {
          locator: "Art. 162",
          explanation:
            "Одночасно перевірте три ознаки: postanowienie не завершує справу, засідання є відкритим, і zażalenie не передбачене.",
        },
      ],
      legalEffect:
        "Відсутність окремої sentencja за цією нормою не означає відсутності розглянутого питання: його розкриття має бути в protokół.",
      foreignersCase:
        "У справі про pobyt перевіряйте protokół, якщо проміжне рішення не надійшло окремим документом. Спочатку встановіть, чи існувало право на zażalenie.",
    },
    {
      provisionId: "ppsa-art-163",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie, оголошене на rozprawa, суд мотивує, якщо воно підлягає оскарженню, і doręcza сторонам; postanowienie з posiedzenie niejawnym doręczaється з urzędu, а за наявності środka zaskarżenia — з uzasadnieniem та pouczeniem для сторони без професійного представника. Uzasadnienie складається протягом семи днів.",
          sourceLocator: "Art. 163 § 1–3",
        },
      ],
      summary:
        "Норма регулює мотивування, doręczenie і pouczenie щодо postanowienie залежно від способу його винесення та оскаржуваності.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для postanowienie на rozprawa з’ясуйте, чи воно підлягає оскарженню: саме це запускає правило про uzasadnienie і doręczenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для posiedzenie niejawne очікуйте doręczenie з urzędu; якщо є środek zaskarżenia, має бути uzasadnienie та pouczenie для особи без представника.",
        },
        {
          locator: "§ 3",
          explanation:
            "Строк складання uzasadnienie — сім днів від wydania postanowienie.",
        },
      ],
      legalEffect:
        "Стаття визначає оформлення та інформування сторони, але не встановлює сама повного режиму строку конкретного засобу оскарження.",
      foreignersCase:
        "Отримавши postanowienie у справі про pobyt, збережіть дату і спосіб doręczenie, текст uzasadnienie та pouczenie. Відсутність представника має значення лише за умов, названих статтею.",
    },
    {
      provisionId: "ppsa-art-164",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie, видане на posiedzenie niejawnym, є пов’язуючим від моменту підписання разом з uzasadnienie, а якщо суд його не мотивує — від підписання sentencja.",
          sourceLocator: "Art. 164",
        },
      ],
      summary:
        "Норма встановлює момент пов’язаності суду postanowienie з posiedzenie niejawnym залежно від наявності uzasadnienie.",
      rules: [
        {
          locator: "Art. 164",
          explanation:
            "Для мотивованого postanowienie перевірте підпис разом з uzasadnienie; для немотивованого — підпис sentencja.",
        },
      ],
      legalEffect:
        "Правило стосується моменту, з якого postanowienie пов’язує суд; це не тотожне автоматичній prawomocność.",
      foreignersCase: ppsaLaw.text`У процесуальному питанні у справі про pobyt розрізняйте пов’язаність postanowienie за ${ppsaLaw.article("164", "art. 164")} і його можливу оскаржуваність.`,
    },
    {
      provisionId: "ppsa-art-165",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie, які не завершують справу, можуть бути uchylane або змінені через зміну обставин справи, навіть якщо їх оскаржено або вони стали prawomocne.",
          sourceLocator: "Art. 165",
        },
      ],
      summary:
        "Стаття дозволяє переглядати проміжні postanowienie при зміні обставин, включно після оскарження чи prawomocność.",
      rules: [
        {
          locator: "Art. 165",
          explanation:
            "Спершу встановіть, що postanowienie не завершує справу, потім покажіть фактичну zmiana okoliczności; сама незгода з рішенням не названа підставою.",
        },
      ],
      legalEffect:
        "Можливість uchylenie або зміни прив’язана до зміни обставин і не поширюється текстом на postanowienie, яке завершує справу.",
      foreignersCase: ppsaLaw.text`Якщо у справі про pobyt змінилися обставини після проміжного postanowienie, перевірте його процесуальний характер і докази саме цієї зміни; prawomocność сама по собі не виключає правило ${ppsaLaw.article("165", "art. 165")}.`,
    },
    {
      provisionId: "ppsa-art-166",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До postanowienie відповідно застосовуються приписи про wyroki, якщо ця ustawa не встановлює інакше.",
          sourceLocator: "Art. 166",
        },
      ],
      summary:
        "Це загальне правило відповідного застосування норм про wyroki до postanowienie з урахуванням спеціальних винятків.",
      rules: [
        {
          locator: "Art. 166",
          explanation:
            "Для конкретного postanowienie спочатку шукайте спеціальний припис ustawa, а за його відсутності — відповідне правило про wyrok.",
        },
      ],
      legalEffect:
        "Стаття створює техніку відповідного застосування, але не робить wyrok і postanowienie однаковими за всіма наслідками.",
      foreignersCase:
        "У справі про pobyt не переносіть механічно весь режим wyrok на postanowienie: перевірте спеціальні норми та характер конкретного документа.",
    },
    {
      provisionId: "ppsa-art-167",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Приписи цього розділу відповідно застосовуються до zarządzenia przewodniczącego.",
          sourceLocator: "Art. 167",
        },
      ],
      summary:
        "Норма поширює правила цього розділу на zarządzenia przewodniczącego у відповідному обсязі.",
      rules: [
        {
          locator: "Art. 167",
          explanation:
            "Спершу встановіть, що документ є саме zarządzenie przewodniczącego; лише тоді перевіряйте відповідні правила розділу.",
        },
      ],
      legalEffect:
        "Відповідне застосування не означає, що кожне zarządzenie має ідентичний режим wyrok або postanowienie.",
      foreignersCase:
        "Якщо в судовій справі про pobyt отримано zarządzenie przewodniczącego, класифікуйте його окремо й не припускайте автоматичної наявності środka zaskarżenia.",
    },
    {
      provisionId: "ppsa-art-167a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`До zarządzenia та postanowienia referendarza sądowego відповідно застосовуються правила про zarządzenia przewodniczącego та postanowienia суду. На zarządzenia і postanowienia referendarza, названі в ${ppsaLaw.article("30", "art. 30 § 1")}, ${ppsaLaw.article("49", "art. 49 § 2")} та ${ppsaLaw.article("234", "art. 234 § 2")}, можна подати sprzeciw до того самого суду; після sprzeciw вони втрачають чинність, строк sprzeciw — сім днів від doręczenie, а прострочений sprzeciw суд odrzuca.`,
          sourceLocator: "Art. 167a § 1–6",
        },
      ],
      summary:
        "Стаття регулює sprzeciw від визначених zarządzenia або postanowienia referendarza sądowego, його строк і наслідок для оскарженого документа.",
      rules: [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Встановіть, що документ видав referendarz sądowy, і перевірте, чи він належить до справ, названих у ${ppsaLaw.article("30", "art. 30 § 1")}, ${ppsaLaw.article("49", "art. 49 § 2")} або ${ppsaLaw.article("234", "art. 234 § 2")}.`,
        },
        {
          locator: "§ 3–5",
          explanation:
            "Подання sprzeciw позбавляє оскаржений документ чинності; сім днів рахуються від doręczenie, а прострочення веде до odrzucenie.",
        },
        {
          locator: "§ 6",
          explanation:
            "Sąd розглядає справу як суд першої інстанції, якщо спеціальний припис не встановлює інакше.",
        },
      ],
      legalEffect:
        "Наслідки sprzeciw залежать від предметної прив’язки до трьох названих норм і спеціальних приписів; сама назва документа referendarza не достатня.",
      foreignersCase:
        "Якщо у судовій справі іноземця документ видав referendarz sądowy, перевірте його вид, одну з названих підстав і дату doręczenie. Сім днів — окремий строк для sprzeciw, а не загальний строк для кожного судового оскарження.",
    },
    {
      provisionId: "ppsa-art-168",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Orzeczenie стає prawomocne, якщо щодо нього немає środka odwoławczego; postanowienie, які не можна окремо оскаржити, але які підлягають розгляду NSA разом з основною справою, не стають prawomocne до такого розгляду, а при оскарженні лише частини інша частина стає prawomocna після спливу строку з названим у статті застереженням.",
          sourceLocator: "Art. 168 § 1–3",
        },
      ],
      summary:
        "Стаття визначає prawomocność через доступність засобу оскарження та регулює часткове оскарження й postanowienie, що розглядаються NSA разом зі справою.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Перевіряйте, чи взагалі існує środek odwoławczy і чи postanowienie не підлягає розгляду NSA разом з основною справою.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо оскаржено частину orzeczenie, визначте, яка частина залишилася і чи може NSA з urzędu розглянути її також.",
        },
      ],
      legalEffect: ppsaLaw.text`Prawomocność може настати для частини orzeczenie окремо; її не слід змішувати з моментом пов’язаності суду за ${ppsaLaw.article("144", "art. 144")} або ${ppsaLaw.article("164", "164")}.`,
      foreignersCase:
        "Після wyrok у справі про pobyt перевірте, що саме оскаржено і чи не залишилася інша частина prawomocna. Не визначайте остаточність лише за датою оголошення.",
    },
    {
      provisionId: "ppsa-art-169",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Prawomocność orzeczenia за wniosek strony та у випадку, названому в ${ppsaLaw.article("286", "art. 286 § 1")}, встановлює WSA на posiedzenie niejawnym; postanowienie doręczaється лише стороні, яка подала wniosek, а postanowienie про prawomocność orzeczenia WSA може видати referendarz sądowy.`,
          sourceLocator: "Art. 169 § 1–2",
        },
      ],
      summary:
        "Стаття описує, хто і яким postanowienie встановлює prawomocność orzeczenie, та кому його вручають.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Перевірте, чи подано wniosek сторони або чи наявний випадок, названий через ${ppsaLaw.article("286", "art. 286 § 1")}; не додавайте до цієї статті інших умов, яких вона прямо не містить.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Для wyrok WSA postanowienie про prawomocność може видати referendarz sądowy; doręczenie за wniosek отримує заявник.",
        },
      ],
      legalEffect:
        "Postanowienie підтверджує prawomocność у процедурному порядку, але не змінює предмет і зміст самого orzeczenie.",
      foreignersCase:
        "Якщо у справі про pobyt потрібне підтвердження остаточності wyrok WSA, перевірте порядок wniosek і збережіть отримане postanowienie; воно не є новим рішенням про pobyt.",
    },
    {
      provisionId: "ppsa-art-170",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prawomocne orzeczenie пов’язує не лише сторони та суд, який його видав, а й інші суди та державні органи, а у випадках, передбачених законом, також інших осіб.",
          sourceLocator: "Art. 170",
        },
      ],
      summary:
        "Стаття окреслює коло адресатів, яких пов’язує prawomocne orzeczenie.",
      rules: [
        {
          locator: "Art. 170",
          explanation:
            "Відрізняйте загальне коло — сторони, суд і державні органи — від випадків, коли закон окремо поширює дію на інших осіб.",
        },
      ],
      legalEffect:
        "Пов’язаність виникає для prawomocne orzeczenie; стаття сама не розшифровує межі кожного конкретного предмета рішення.",
      foreignersCase: ppsaLaw.text`У справі іноземця посилайтеся на ${ppsaLaw.article("170", "art. 170")} лише разом із конкретним prawomocne orzeczenie та його предметом. Це не означає, що будь-який орган має виконати вимогу, якої в sentencja немає.`,
    },
    {
      provisionId: "ppsa-art-171",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prawomocny wyrok має powaga rzeczy osądzonej лише щодо того, що у зв’язку зі skarga було предметом rozstrzygnięcia.",
          sourceLocator: "Art. 171",
        },
      ],
      summary:
        "Норма обмежує powaga rzeczy osądzonej предметом, який справді був вирішений у зв’язку зі skarga.",
      rules: [
        {
          locator: "Art. 171",
          explanation:
            "Порівняйте нове питання з предметом rozstrzygnięcia у попередньому wyrok, а не лише з подібними фактами чи документами.",
        },
      ],
      legalEffect:
        "Остаточний wyrok не має сили речі вирішеної щодо питань, які не були предметом його розгляду за skarga.",
      foreignersCase:
        "Якщо орган у справі про pobyt посилається на попередній wyrok, перевірте точний предмет його rozstrzygnięcia, а не тільки те, що сторони були ті самі.",
    },
    {
      provisionId: "ppsa-art-172",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA unieważnia prawomocne orzeczenie суду адміністративного, винесене у справі, яка на момент рішення не підлягала юрисдикції суду через особу або предмет, і odrzuca skarga, якщо рішення не може бути усунуте іншим передбаченим законом способом; NSA діє за wniosek Prezesa NSA, із відповідним застосуванням правил про skarga kasacyjna.",
          sourceLocator: "Art. 172",
        },
      ],
      summary:
        "Стаття передбачає вузький надзвичайний механізм для prawomocne orzeczenie поза юрисдикцією sąd administracyjny.",
      rules: [
        {
          locator: "Art. 172 zdanie pierwsze",
          explanation:
            "Потрібно встановити відсутність юрисдикції через особу або предмет саме на момент orzekanie та неможливість іншого способу wzruszenie.",
        },
        {
          locator: "Art. 172 zdanie drugie",
          explanation:
            "Wniosek подає Prezes NSA; до розгляду відповідно застосовуються правила про skarga kasacyjna.",
        },
      ],
      legalEffect:
        "Це спеціальний механізм контролю юрисдикції, а не звичайна апеляція сторони на несприятливий wyrok.",
      foreignersCase: ppsaLaw.text`У справі про pobyt не розглядайте ${ppsaLaw.article("172", "art. 172")} як звичайний шлях для незгоди з оцінкою органу чи суду. Перевірка можлива лише в межах умов і wniosek, прямо названих статтею.`,
    },
    {
      provisionId: "ppsa-art-173",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Від wyrok WSA або postanowienie, що завершує postępowanie у справі, з названими в тексті винятками, належить skarga kasacyjna до NSA; її можуть подати сторона, prokurator, Rzecznik Praw Obywatelskich, Rzecznik Małych i Średnich Przedsiębiorców або Rzecznik Praw Dziecka після doręczenie odpisu orzeczenie з uzasadnieniem.",
          sourceLocator: "Art. 173 § 1–2",
        },
      ],
      summary:
        "Стаття відкриває skarga kasacyjna до NSA проти визначених wyrok або завершальних postanowienie WSA і називає коло уповноважених суб’єктів.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Перевірте, що документ видав WSA, завершує postępowanie або є wyrok, і зіставте справу з винятками ${ppsaLaw.article("58", "art. 58 § 1")} pkt 2–4, ${ppsaLaw.article("161", "art. 161 § 1")} та ${ppsaLaw.article("220", "art. 220 § 3")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Для skarga kasacyjna важливі статус особи з переліку та doręczenie odpisu orzeczenie з uzasadnieniem.",
        },
      ],
      legalEffect:
        "Норма визначає види orzeczenie і суб’єктів, для яких можливий касаційний шлях; інші умови допустимості та строку треба шукати в інших приписах p.p.s.a.",
      foreignersCase:
        "Після wyrok WSA у справі про pobyt перевірте, чи це оскаржуваний вид orzeczenie, чи немає винятку, та чи отримано odpis з uzasadnieniem. Сам факт програшу не замінює перевірки підстав і строків.",
    },
    {
      provisionId: "ppsa-art-174",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga kasacyjna може ґрунтуватися лише на порушенні prawa materialnego через неправильне його тлумачення або неналежне застосування, а також на порушенні przepisów postępowania, якщо воно могло істотно вплинути на результат справи.",
          sourceLocator: "Art. 174 pkt 1–2",
        },
      ],
      summary:
        "Стаття зводить підстави skarga kasacyjna до двох груп: materialne право та істотно впливове процесуальне порушення.",
      rules: [
        {
          locator: "Pkt 1",
          explanation:
            "Опишіть, яке materialne право неправильно витлумачено або застосовано, а не лише те, що результат несприятливий.",
        },
        {
          locator: "Pkt 2",
          explanation:
            "Для процесуального zarzut покажіть можливий істотний вплив uchybienie на wynik sprawy.",
        },
      ],
      legalEffect:
        "Стаття задає законні підстави касаційного оскарження; незгода з рішенням без прив’язки до однієї з них недостатня за текстом норми.",
      foreignersCase:
        "У справі про pobyt структуруйте skarga kasacyjna навколо конкретного порушення prawa materialnego або істотно впливового процесуального порушення, а не повторюйте всю фактичну історію.",
    },
    {
      provisionId: "ppsa-art-175",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Skarga kasacyjna за загальним правилом має бути складена adwokat або radca prawny; ${ppsaLaw.article("175", "§ 2–3")} встановлюють винятки для окремих професій і суб’єктів, зокрема sędzia, prokurator, notariusz, radca Prokuratorii Generalnej, profesor або doktor habilitowany nauk prawnych, а також визначені справи для doradca podatkowy чи rzecznik patentowy. Corpus окремо зазначає перехід між двома редакціями ${ppsaLaw.article("175", "§ 3")} pkt 1 та дату майбутньої зміни 1.10.2029.`,
          sourceLocator: "Art. 175 § 1–3, przypisy 56–57",
        },
      ],
      summary:
        "Стаття встановлює професійне представництво при складанні skarga kasacyjna та вузькі винятки, частина яких має перехідну редакцію в corpus.",
      rules: [
        {
          locator: "§ 1–2a",
          explanation:
            "Спочатку застосовується правило про adwokat або radca prawny; далі перевірте точно названий статус сторони, представника чи органу.",
        },
        {
          locator: "§ 3 pkt 1, przypisy 56–57",
          explanation:
            "Виняток для doradca podatkowy має предметні межі, а corpus розрізняє чинне формулювання та редакцію, що набуде чинності 1.10.2029.",
        },
        {
          locator: "§ 3 pkt 2",
          explanation:
            "Rzecznik patentowy названий лише у справах власності промислової, не як загальний виняток.",
        },
      ],
      legalEffect:
        "Недодержання вимоги про професійне складання може мати процесуальне значення, але конкретний наслідок і виняток треба перевіряти за всіма приписами та статусом учасника.",
      foreignersCase: ppsaLaw.text`Для типової skarga kasacyjna у справі про pobyt не припускайте, що її може скласти будь-хто: перевірте правило про adwokat або radca prawny і чи справді застосовний виняток. Не переносіть майбутню редакцію ${ppsaLaw.article("175", "§ 3")} на дату 2026 року.`,
    },
    {
      provisionId: "ppsa-art-176",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga kasacyjna повинна вказати оскаржене orzeczenie і обсяг оскарження, навести та обґрунтувати підстави касації та містити wniosek про uchylenie або зміну з позначенням бажаного обсягу; крім того, вона має відповідати вимогам pismo strony та містити wniosek про розгляд на rozprawa або заяву про відмову від неї.",
          sourceLocator: "Art. 176 § 1–2",
        },
      ],
      summary:
        "Стаття дає мінімальний зміст skarga kasacyjna: ідентифікація orzeczenie, підстави з обґрунтуванням, конкретний wniosek і позиція щодо rozprawa.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Назвіть оскаржене orzeczenie і чітко вкажіть, чи оскаржується воно повністю або частково.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Кожну підставу треба навести й обґрунтувати, а wniosek про uchylenie або зміну має показувати бажаний обсяг.",
        },
        {
          locator: "§ 2",
          explanation:
            "Додайте вимоги pismo strony і wniosek про rozprawa або oświadczenie про відмову від неї.",
        },
      ],
      legalEffect:
        "Стаття визначає змістовий каркас skarga kasacyjna; вона не замінює професійну оцінку підстав, строку та інших вимог допустимості.",
      foreignersCase: ppsaLaw.text`У касації після справи про pobyt складіть окрему перевірку: яке orzeczenie, весь чи частковий обсяг, яка з ${ppsaLaw.article("174", "art. 174")} підстава, який wniosek і чи потрібна rozprawa. Не підміняйте ці елементи загальною незгодою з рішенням.`,
    },
  ],
})
