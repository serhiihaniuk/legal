import { defineEditorialPart } from "../define-editorial-part"
import { authorLegalTextCitationsTree } from "../../legal-text"

export const ppsaPart02 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 48 вимагає подати оригінал документа на żądanie sądu, допускає urzędowo poświadczony odpis або wyciąg документа з визначених akt органу та засвідчений odpis; за умовами статті sąd може вимагати оригінал.",
          sourceLocator: "Art. 48 § 1–5",
        },
      ],
      summary:
        "Оригінал подається на вимогу sądu, а odpis замінює його лише у формах і за умовами Art. 48; для документа в aktach визначеного органу діє окреме правило.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Strona, яка посилається на документ, на żądanie sądu подає оригінал ще перед rozprawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо документ міститься в aktach органу, названого в § 2, достатньо urzędowo poświadczony przez ten organ odpis або wyciąg; якщо strona не може його отримати, sąd просить орган надати копію, а за необхідності може попросити оригінал.",
        },
        {
          locator: "§ 3–3a",
          explanation:
            "Замість оригіналу можна подати odpis, засвідчений notariusz або професійним pełnomocnik: adwokat, radca prawny, rzecznik patentowy, doradca podatkowy чи radca Prokuratorii Generalnej RP; для електронного odpis потрібен kwalifikowany, zaufany або osobisty podpis у визначеній формі.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Poświadczenie професійного pełnomocnik має характер dokument urzędowy, але за обставинами справи sąd на wniosek сторони або з urzędu може вимагати оригінал.",
        },
      ],
      legalEffect:
        "Норма визначає допустиму форму документа й не означає, що кожен odpis автоматично достатній для доведення конкретної обставини.",
      foreignersCase:
        "У справі про pobyt зберігайте оригінали decyzja, doręczenie та ключових доказів; для odpis перевірте конкретний спосіб poświadczenie й будьте готові подати оригінал на żądanie sądu.",
    },
    {
      provisionId: "ppsa-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо pismo не може отримати правильного ходу через невиконання warunków formalnych, przewodniczący закликає усунути або виправити їх протягом семи днів; вчасно виправлене pismo зберігає наслідки від дня подання, а за невиконання zarządzenie залишає його без розгляду.",
          sourceLocator: "Art. 49 § 1–4",
        },
      ],
      summary:
        "Braki formalne skargi треба усунути або виправити у семиденний строк із wezwanie; інакше przewodniczący zarządza pozostawienie pisma bez rozpoznania.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wezwanie визначає семиденний строк і наслідок pozostawienia pisma bez rozpoznania, якщо ustawa не встановлює інакше.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо pismo не виправлено вчасно, przewodniczący видає zarządzenie про залишення без розгляду; на нього przysługuje zażalenie.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Вчасно виправлене або доповнене pismo діє від первісної дати wniesienia; дії за § 1–2 може виконувати referendarz sądowy.",
        },
      ],
      legalEffect:
        "Норма дає процесуальний шанс виправити форму, але не замінює доказування матеріальних умов справи.",
      foreignersCase:
        "Для skarga щодо pobyt перевірте кожен пункт wezwanie і дату doręczenia; не плутайте brak formalny з відсутністю доказу права на pobyt.",
    },
    {
      provisionId: "ppsa-art-49a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Підтвердженням doręczenia електронного pismo до sąd є dowód otrzymania за art. 41 ustawy o doręczeniach elektronicznych.",
          sourceLocator: "Art. 49a",
        },
      ],
      summary:
        "Електронне відправлення до sąd підтверджується відповідним dowód otrzymania.",
      rules: [
        {
          locator: "Art. 49a",
          explanation:
            "Для електронного pismo зберігайте dowód otrzymania, пов’язаний із поданням до sąd.",
        },
      ],
      legalEffect:
        "Норма визначає доказ doręczenia електронного pismo; питання своєчасності й інших вимог регулюють також інші приписи.",
      foreignersCase:
        "При електронній skarga у справі cudzoziemca збережіть dowód otrzymania разом із pismo та зафіксуйте його дату.",
    },
    {
      provisionId: "ppsa-art-49b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prezes Naczelnego Sądu Administracyjnego може визначити wzory dokumentów elektronicznych для postępowanie sądowoadministracyjne і оприлюднити їх у BIP NSA.",
          sourceLocator: "Art. 49b ust. 1–2",
        },
      ],
      summary:
        "NSA може створювати та публікувати електронні wzory документів для судового провадження.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Повноваження сформульоване як може; стаття сама не встановлює загального обов’язку використовувати кожен wzór.",
        },
        {
          locator: "ust. 2",
          explanation: "Wzory мають бути доступні в BIP на сторінці NSA.",
        },
      ],
      legalEffect:
        "Стаття полегшує стандартизацію електронних документів, але конкретні вимоги треба перевіряти в застосовних правилах.",
      foreignersCase:
        "Перед електронною skarga у справі про pobyt перевірте актуальний BIP NSA, але не вважайте wzór заміною обов’язкових даних skarga.",
    },
    {
      provisionId: "ppsa-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę може подати кожен, хто має interes prawny, а також перелічені публічні суб’єкти й organizacja społeczna у межах діяльності за статутом за умов участі в postępowanie administracyjne; інший суб’єкт — якщо це дає ustawa.",
          sourceLocator: "Art. 50 § 1–2",
        },
      ],
      summary:
        "Право на skarga залежить не лише від незгоди, а передусім від interes prawny або спеціальної законної підстави.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Особа має показати власний interes prawny; для organizacja społeczna важливі statutowa działalność та участь в адміністративній справі.",
        },
        {
          locator: "§ 2",
          explanation:
            "Спеціальна ustawa може надати право на skarga іншому суб’єкту.",
        },
      ],
      legalEffect:
        "Норма визначає коло потенційних skarżący, але не доводить автоматично допустимість конкретної skarga.",
      foreignersCase:
        "Cudzoziemiec, який оскаржує decyzja про його pobyt, має пояснити власний interes prawny; окремо перевірте представництво неповнолітнього.",
    },
    {
      provisionId: "ppsa-art-51",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Кілька осіб, уповноважених подати skarga, можуть бути спільними skarżący, якщо їхні skargi стосуються тієї самої decyzja, postanowienie, іншого aktu, czynność, bezczynność або przewlekłe prowadzenie postępowania.",
          sourceLocator: "Art. 51",
        },
      ],
      summary:
        "Спільне подання можливе, коли кількох уповноважених осіб об’єднує той самий предмет судового контролю.",
      rules: [
        {
          locator: "Art. 51",
          explanation:
            "Порівняйте конкретний akt, czynność або бездіяльність, яких стосуються skargi, а не лише тему справи.",
        },
      ],
      legalEffect:
        "Стаття допускає спільну роль skarżący, але не скасовує індивідуальних вимог до interes prawny та змісту skarga.",
      foreignersCase:
        "Члени однієї сім’ї можуть розглядати спільне подання лише після перевірки, чи стосується їх та сама decyzja і чи має кожен процесуальну підставу.",
    },
    {
      provisionId: "ppsa-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За загальним правилом skargę подають після wyczerpanie środków zaskarżenia; це охоплює доступні zażalenie, odwołanie або ponaglenie, але стаття встановлює винятки, зокрема щодо wniosek o ponowne rozpatrzenie.",
          sourceLocator: "Art. 52 § 1–4",
        },
      ],
      summary:
        "Перед skarga треба встановити, які адміністративні засоби оскарження були доступні і чи їх вичерпано.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Wyczerpanie означає, що стороні більше не доступний передбачений законом środek zaskarżenia; для prokurator, RPO та RPD є виняток.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для wniosek o ponowne rozpatrzenie skarga загалом можлива без попереднього використання цього права, але не в зазначених справах MSZ або konsul.",
        },
        {
          locator: "§ 4",
          explanation:
            "Параграф позначений як uchylony і не містить чинного правила.",
        },
      ],
      legalEffect:
        "Недотримання вимоги про вичерпання може вплинути на допустимість skarga; висновок залежить від предмета та спеціального закону.",
      foreignersCase:
        "У справі cudzoziemca розрізніть odwołanie, zażalenie, ponaglenie та wniosek o ponowne rozpatrzenie і перевірте, який шлях доступний.",
    },
    {
      provisionId: "ppsa-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Основний строк wniesienia skarga становить тридцять днів від doręczenie rozstrzygnięcia; для деяких актів строк рахується від відомості про акт або skarga можлива в будь-який час, а skarga на bezczynność чи przewlekłość — після ponaglenie; для prokurator, RPO і RPD діє окремий шестимісячний строк із винятком для § 2a.",
          sourceLocator: "Art. 53 § 1–4",
        },
      ],
      summary:
        "Строк skarga залежить від виду предмета: найчастіше це тридцять днів від doręczenie, але стаття передбачає спеціальні режими та окремий строк для prokurator, RPO і RPD.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для rozstrzygnięcie та акту з art. 3 § 2 pkt 4a строк — тридцять днів від його doręczenie skarżący.",
        },
        {
          locator: "§ 2–2b",
          explanation:
            "Для aktów або czynności без доступного środka zaskarżenia строк може рахуватися від моменту знання; для інших aktów — бути безстроковим, а skarga на bezczynność чи przewlekłość можлива в будь-який час після ponaglenie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Prokurator, RPO та RPD можуть подати skarga протягом шести місяців у справах § 1–2; цей строк не застосовується до справ § 2a.",
        },
        {
          locator: "§ 4",
          explanation:
            "Вчасне подання skarga безпосередньо до sąd зберігає строк; sąd пересилає її відповідному органу.",
        },
      ],
      legalEffect:
        "Стаття задає процесуальні строки й винятки, але не вирішує сама питання відновлення пропущеного строку чи правильності doręczenie; для § 2 sąd може оцінити відсутність вини skarżący.",
      foreignersCase:
        "Зафіксуйте день doręczenie decyzja про pobyt, визначте предмет skarga і не переносіть автоматично тридцятиденне правило на bezczynność чи інший akt.",
    },
    {
      provisionId: "ppsa-art-54",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę подають за посередництвом органу, дії, бездіяльність або przewlekłe prowadzenie postępowania якого оскаржуються; у чинній на 14.07.2026 редакції електронну skarga подають до elektroniczna skrzynka podawcza органу, а орган передає матеріали в установлені строки й за умовами § 3 може повністю її врахувати. Перехід на adres do doręczeń elektronicznych є майбутньою зміною з 1.10.2029.",
          sourceLocator: "Art. 54 § 1–6",
        },
      ],
      summary:
        "Орган є каналом подання skarga до sąd і має передати повні akta та відповідь; у визначених межах він може сам скасувати decyzja і видати нову.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Skarga подається через оскаржений орган. На legalStateDate електронна skarga у formie dokumentu elektronicznego надсилається до elektroniczna skrzynka podawcza цього органу; варіант подання на adres do doręczeń elektronicznych набирає чинності 1.10.2029, а art. 49a застосовується відповідно.",
        },
        {
          locator: "§ 2–2a",
          explanation:
            "Орган передає skarga, kompletnymi i uporządkowanymi aktami та відповіддю протягом тридцяти днів; для skarga через konsul або на рішення MSZ у справах за ustawa o cudzoziemcach — шістдесяти днів. Перед передачею орган також готує uzasadnienie рішення, якщо раніше від нього відмовився через повне врахування вимоги сторони.",
        },
        {
          locator: "§ 3",
          explanation:
            "Орган може в межах właściwość повністю врахувати skarga протягом тридцяти днів; щодо decyzja він uchyla її та видає нову, одночасно зазначаючи, чи дія або бездіяльність були без правової підстави чи з rażące naruszenie prawa.",
        },
        {
          locator: "§ 4–6",
          explanation:
            "Для випадку з art. 33 § 1a передбачено публічне повідомлення; Президент RP визначає технічний порядок передачі skarga, akt і відповіді та враховує їх форму, безпеку й єдиний стандарт.",
        },
      ],
      legalEffect:
        "Подання через орган запускає обмін матеріалами із sąd, але не гарантує, що орган визнає skarga або що sąd прийме її до розгляду; повне врахування § 3 має передбачені статтею умови й наслідки.",
      foreignersCase:
        "Для skarga на decyzja воєводи про pobyt перевірте правильний орган-посередник, підтвердження подання та повноту копій.",
    },
    {
      provisionId: "ppsa-art-54a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо до передачі skarga іншої сторони до sąd хтось подав wniosek o ponowne rozpatrzenie, орган розглядає skarga як такий wniosek; після передачі орган повідомляє sąd, який повертає skarga й akta органу.",
          sourceLocator: "Art. 54a § 1–2",
        },
      ],
      summary:
        "Паралельний wniosek o ponowne rozpatrzenie змінює шлях уже поданої skarga і може повернути матеріали до органу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "До передачі sąd skarga розглядається як wniosek, а сторона отримує про це повідомлення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Після передачі орган повідомляє sąd, а sąd передає skarga з aktami органу.",
        },
      ],
      legalEffect:
        "Норма координує два процесуальні шляхи, але сама не встановлює результату wniosek o ponowne rozpatrzenie.",
      foreignersCase:
        "Якщо в справі про pobyt одночасно з’явилися skarga та wniosek o ponowne rozpatrzenie, перевірте, чи skarga вже передана sąd.",
    },
    {
      provisionId: "ppsa-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За невиконання обов’язку передати skarga, akta та відповідь sąd може на wniosek skarżący накласти на орган grzywna; після накладення grzywna за додатковим żądanie skarżący суд може розглянути справу за odpis skarga лише коли фактичний і правовий стан у skarga не викликає обґрунтованих сумнівів. Про rażące випадки суд повідомляє компетентні органи.",
          sourceLocator: "Art. 55 § 1–3",
        },
      ],
      summary:
        "Стаття дає судовий інструмент проти невиконання органом обов’язків передачі матеріалів, але кожен захід має власні умови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Sąd на wniosek skarżący може постановити grzywna за невиконання обов’язків art. 54 § 2; розмір відсилає до art. 154 § 6, а postanowienie може бути на posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо після grzywna орган не передав skarga, sąd може на żądanie skarżący розглянути справу за надісланим odpis skarga, коли фактичний і правовий стан, викладений у ній, не викликає обґрунтованих сумнівів.",
        },
        {
          locator: "§ 3",
          explanation:
            "Про rażące випадки порушення обов’язків за § 2 або art. 54 § 2 skład orzekający чи prezes sądu повідомляє органи, компетентні розглядати petycje, skargi та wnioski.",
        },
      ],
      legalEffect:
        "Механізм захищає доступ до суду від бездіяльності органу, але grzywna та розгляд за odpis не виникають автоматично: потрібні передбачені статтею wniosek або żądanie й фактичні умови.",
      foreignersCase:
        "Якщо орган у справі cudzoziemca не передає skarga, документуйте дату її отримання органом; окремо оцініть wniosek про grzywna і, після неї, żądanie розгляду за odpis.",
    },
    {
      provisionId: "ppsa-art-56",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо після подання skarga до sąd розпочато адміністративне postępowanie для зміни, скасування, stwierdzenie nieważności акту або wznowienie postępowania, судове провадження підлягає zawieszeniu.",
          sourceLocator: "Art. 56",
        },
      ],
      summary:
        "Розпочата після skarga адміністративна процедура щодо того самого акту може зупинити судову справу.",
      rules: [
        {
          locator: "Art. 56",
          explanation:
            "Порівняйте предмет skarga з адміністративною процедурою: стаття охоплює зміну, uchylenie, nieważność та wznowienie акту.",
        },
      ],
      legalEffect:
        "Zawieszenie тимчасово зупиняє рух судової справи; із цієї статті не випливає, що адміністративна процедура автоматично задовольнить вимогу.",
      foreignersCase:
        "У спорі про decyzja pobyt перевірте, чи орган паралельно відкрив wznowienie або процедуру nieważność; це може пояснити zawieszenie.",
    },
    {
      provisionId: "ppsa-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga має відповідати вимогам pismo у судовому провадженні та додатково вказати оскаржений akt або czynność, орган і порушення prawa або interesu prawnego; кілька skargi в одному pismo розділяються, якщо оскаржено більше одного предмета.",
          sourceLocator: "Art. 57 § 1–3",
        },
      ],
      summary:
        "Добре складена skarga ідентифікує предмет, орган і конкретно сформульоване порушення.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Вкажіть decyzja/postanowienie/інший akt або czynność, орган та naruszenie prawa або interesu prawnego; pkt 4 позначений як uchylony.",
        },
        {
          locator: "§ 2",
          explanation:
            "За art. 51 кілька skarżący можуть подати skargi одним pismo.",
        },
        {
          locator: "§ 3",
          explanation:
            "Оскарження кількох актів, czynności, bezczynność або przewlekłość в одному pismo спричиняє їх розділення.",
        },
      ],
      legalEffect:
        "Стаття формує мінімальну індивідуалізацію skarga; її виконання не доводить, що zarzut обґрунтований.",
      foreignersCase:
        "У skarga про pobyt назвіть точну decyzja та орган, сформулюйте порушення процедури або права й не змішуйте різні акти.",
    },
    {
      provisionId: "ppsa-art-57a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga на письмову індивідуальну podatkową interpretację, opinię zabezpieczającą, визначені opinie та відмови в їх видачі, включно з opinión у справах opodatkowania wyrównawczego, може ґрунтуватися лише на порушенні postępowanie, помилці wykładnia або неправильній оцінці застосування prawa materialnego; sąd пов’язаний zarzuty skarga та її правовою підставою.",
          sourceLocator: "Art. 57a",
        },
      ],
      summary:
        "Для спеціально перелічених podatkowe interpretacje, opinie та відмов стаття обмежує підстави skarga і пов’язує суд із наведеними zarzuty.",
      rules: [
        {
          locator: "Art. 57a",
          explanation:
            "Спочатку перевірте, чи предмет належить до повного переліку статті: індивідуальна interpretacja, opinia zabezpieczająca, opinia з art. 119zzl § 1 Ordynacja podatkowa, відповідні відмови та opinie щодо opodatkowania wyrównawczego; правило не поширюється автоматично на pobyt.",
        },
        {
          locator: "Art. 57a",
          explanation:
            "У межах цього предмета відокремлюйте порушення postępowanie, помилку wykładnia та неправильну оцінку застосування матеріального права; суд пов’язаний zarzuty і powołaną podstawą prawną.",
        },
      ],
      legalEffect:
        "Спеціальне обмеження визначає рамки судового контролю перелічених податкових актів, а не загальний стандарт для всіх skargi.",
      foreignersCase:
        "У типовій справі legalizacji pobytu ця стаття зазвичай не є підставою; не переносіть її податкову модель на decyzja у справах cudzoziemców.",
    },
    {
      provisionId: "ppsa-art-58",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd odrzuca skarga, зокрема коли справа не належить до właściwość sąd administracyjny, строк пропущено, brak formalny не усунуто, та сама справа між тими самими сторонами вже в toku або правомочно вирішена, немає здатності чи особливого interes prawny або wniesienie є недопустимим; окремі недоліки спершу підлягають усуненню.",
          sourceLocator: "Art. 58 § 1–4",
        },
      ],
      summary:
        "Odrzucenie skargi — це процесуальне закриття без розгляду її суті через встановлену законом перешкоду; деякі дефекти спершу можна виправити.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Перевірте właściwość sąd, строк і усунення braków formalnych: кожна з цих обставин може вести до odrzucenie.",
        },
        {
          locator: "§ 1 pkt 4–6",
          explanation:
            "Також враховуються та сама справа між тими самими сторонами, brak zdolność sądowa або zdolność procesowa чи органів, відсутність спеціального interes prawny або uprawnienie для art. 3 § 2 pkt 5–6 та інша недопустимість.",
        },
        {
          locator: "§ 2",
          explanation:
            "За дефекту zdolność або складу органів sąd odrzuca skarga лише після того, як недолік не було усунуто.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Odrzucenie оформлюється postanowienie і може бути на posiedzenie niejawne; через art. 58 § 1 pkt 1 суд не відкидає skarga, якщо sąd powszechny вже визнав себе niewłaściwy.",
        },
      ],
      legalEffect:
        "Odrzucenie не є висновком, що орган мав рацію по суті; це висновок про процесуальну неможливість розгляду за конкретною перешкодою.",
      foreignersCase:
        "Перед skarga про pobyt перевірте строк, właściwy sąd, wyczerpanie środków zaskarżenia та повне усунення wezwanie.",
    },
    {
      provisionId: "ppsa-art-59",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, який визнав, що інший sąd administracyjny є właściwy, передає йому справу; переданий суд пов’язаний таким postanowienie, крім передачі до NSA, а вже виконані czynności зберігають силу.",
          sourceLocator: "Art. 59 § 1–3",
        },
      ],
      summary:
        "Помилка у виборі адміністративного суду може бути виправлена передачею справи до właściwy sąd.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Передача оформлюється postanowienie і може бути постановлена на posiedzenie niejawne.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Суд-одержувач за загальним правилом пов’язаний передачею, а виконані в неналежному суді czynności залишаються чинними.",
        },
      ],
      legalEffect:
        "Норма спрямована на правильну юрисдикцію без автоматичної втрати вже виконаних процесуальних дій.",
      foreignersCase:
        "У справі про decyzja воєводи перевірте właściwość відповідного wojewódzki sąd administracyjny; передача не означає, що skarga виграна чи програна.",
    },
    {
      provisionId: "ppsa-art-60",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarżący може відкликати skarga, і відкликання пов’язує sąd, але суд визнає його niedopuszczalne, якщо воно обходить право або залишило б у силі akt чи czynność, уражені nieważność.",
          sourceLocator: "Art. 60",
        },
      ],
      summary:
        "Відкликання skarga зазвичай має обов’язкову для суду силу, але не приймається у випадках обходу права або nieważność.",
      rules: [
        {
          locator: "Art. 60",
          explanation:
            "Skarżący може заявити cofnięcie skarga, але оцініть його наслідок для оскарженого акту.",
        },
        {
          locator: "Art. 60",
          explanation:
            "Sąd перевіряє, чи немає обходу prawa та чи не залишить відкликання в силі akt або czynność з wadą nieważności.",
        },
      ],
      legalEffect:
        "Cofnięcie може припинити спір, але не гарантує прийняття заяви судом у кожній ситуації.",
      foreignersCase:
        "Не відкликайте skarga щодо decyzja про pobyt лише через обіцянку органу: спочатку зафіксуйте нову decyzja і перевірте ризик втрати захисту.",
    },
    {
      provisionId: "ppsa-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniesienie skarga саме по собі не зупиняє виконання aktu або czynność; орган у визначених категоріях, а після передачі skarga також sąd, можуть зупинити виконання, зокрема при небезпеці znaczna szkoda або trudne do odwrócenia skutki, із передбаченими винятками.",
          sourceLocator: "Art. 61 § 1–6",
        },
      ],
      summary:
        "Подання skarga не дорівнює автоматичному wstrzymanie виконання; потрібне окреме рішення органу або sąd і перевірка винятків.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Не виходьте з автоматичної зупинки: орган може з urzędu або на wniosek skarżący зупинити decyzja/postanowienie, інші акти чи окремі uchwały, але діють винятки, зокрема rygor natychmiastowej wykonalności, спеціальне виключення закону та чинні przepisy prawa miejscowego.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після передачі skarga sąd може на wniosek skarżący зупинити акт або czynność повністю чи частково, якщо є небезпека znaczna szkoda або trudne do odwrócenia skutki; відмова органу не позбавляє права звернутися до sąd.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Sąd може в будь-який час змінити або скасувати wstrzymanie при зміні обставин; postanowienie за § 3–4 може бути видане на posiedzenie niejawne.",
        },
        {
          locator: "§ 6",
          explanation:
            "Wstrzymanie припиняється в день судового рішення, що враховує skarga, або з моменту prawomocność рішення, що її відхиляє.",
        },
      ],
      legalEffect:
        "Wstrzymanie є тимчасовим процесуальним захистом і не є остаточним рішенням про законність aktu; його надання залежить від виду предмета, винятків і доведених ризиків.",
      foreignersCase:
        "Якщо decyzja про pobyt створює ризик виконання до розгляду skarga, подайте окремий wniosek про wstrzymanie та опишіть шкоду й незворотні наслідки.",
    },
    {
      provisionId: "ppsa-art-62",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący wydziału або призначений sędzia організовує комплектування akt і, за потреби, інших доказів, визначає склад суду та призначає posiedzenie niejawne або rozprawa.",
          sourceLocator: "Art. 62 pkt 1–3",
        },
      ],
      summary:
        "Стаття розподіляє базові організаційні дії перед розглядом справи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До розгляду комплектуються необхідні akta та, за потреби, інші dowody.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Визначаються склад sędziowski і дата posiedzenie або rozprawa.",
        },
      ],
      legalEffect:
        "Це організаційна норма; вона не визначає наперед оцінку доказів чи результат skarga.",
      foreignersCase:
        "Стежте, чи sąd отримав повні akta справи про pobyt і чи належно повідомив про призначене posiedzenie.",
    },
    {
      provisionId: "ppsa-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо ustawy так встановлюють, postępowanie sądowe розпочинається на wniosek.",
          sourceLocator: "Art. 63",
        },
      ],
      summary:
        "Wniosek є способом початку судової справи лише тоді, коли це прямо передбачає спеціальна ustawa.",
      rules: [
        {
          locator: "Art. 63",
          explanation:
            "Перед поданням wniosek знайдіть спеціальну норму, яка прямо вимагає або допускає такий спосіб wszczęcie.",
        },
      ],
      legalEffect:
        "Стаття не створює універсального права на wniosek і не встановлює його строку.",
      foreignersCase:
        "У справах cudzoziemców не замінюйте skarga wnioskiem без перевірки спеціального закону та виду судового провадження.",
    },
    {
      provisionId: "ppsa-art-64",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniosek подається безпосередньо до sąd, має містити żądanie, його підставу й обґрунтування, сторони та органи; правила про skarga застосовуються відповідно, якщо ustawa не встановлює інакше.",
          sourceLocator: "Art. 64 § 1–3",
        },
      ],
      summary:
        "Wniosek має власні мінімальні реквізити та подається прямо до sąd, але частина правил skarga може застосовуватися відповідно.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На відміну від звичайної skarga, wniosek подається безпосередньо до sąd.",
        },
        {
          locator: "§ 2",
          explanation:
            "Опишіть żądanie, підставу, обґрунтування, сторони та органи й перевірте спеціальні вимоги.",
        },
        {
          locator: "§ 3",
          explanation:
            "Правила про skarga застосовуються відповідно, якщо ustawa не передбачає іншого.",
        },
      ],
      legalEffect:
        "Норма забезпечує форму wniosek, але не визначає, чи конкретна вимога підлягає такому розгляду.",
      foreignersCase:
        "Якщо спеціальна норма допускає wniosek у справі legalizacji pobytu, адресуйте його właściwy sąd і викладіть żądanie та правову підставу.",
    },
    {
      provisionId: "ppsa-art-64a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На decyzja з art. 138 § 2 KPA skarga не подається; незадоволена strona може подати від неї sprzeciw od decyzji.",
          sourceLocator: "Art. 64a",
        },
      ],
      summary:
        "Для конкретної decyzja за art. 138 § 2 KPA засобом є sprzeciw, а не звичайна skarga.",
      rules: [
        {
          locator: "Art. 64a",
          explanation:
            "Спочатку встановіть, чи decyzja справді видана на підставі art. 138 § 2 KPA.",
        },
        {
          locator: "Art. 64a",
          explanation:
            "За умовою статті незгода реалізується через sprzeciw od decyzji, а не через skarga.",
        },
      ],
      legalEffect:
        "Норма змінює процесуальний засіб для вузької категорії decyzja; неправильна назва документа може мати наслідки.",
      foreignersCase:
        "У справі про pobyt перевірте підставу decyzja та pouczenie, перш ніж обирати sprzeciw або skarga.",
    },
    {
      provisionId: "ppsa-art-64b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До sprzeciw od decyzji відповідно застосовуються правила про skarga; sprzeciw має вказати decyzja, вимагати її uchylenie та назвати орган, який її видав, а art. 33 у цьому провадженні не застосовується.",
          sourceLocator: "Art. 64b § 1–3",
        },
      ],
      summary:
        "Sprzeciw має обов’язкові елементи: акт, żądanie uchylenia та орган.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Правила skarga діють відповідно, якщо спеціальні приписи sprzeciw не встановлюють іншого.",
        },
        {
          locator: "§ 2",
          explanation:
            "Вкажіть оскаржену decyzja, żądanie її uchylenia і орган-видавець.",
        },
        {
          locator: "§ 3",
          explanation:
            "У postępowanie, започаткованому sprzeciw, art. 33 не застосовується.",
        },
      ],
      legalEffect:
        "Норма задає форму sprzeciw, але не визначає, що суд автоматично скасує decyzja.",
      foreignersCase:
        "Якщо рішення у справі cudzoziemca підпадає під art. 64a, перевірте, щоб sprzeciw називав акт, орган і вимогу uchylenie.",
    },
    {
      provisionId: "ppsa-art-64c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sprzeciw od decyzji подається через орган протягом чотирнадцяти днів від doręczenie; пряме подання до sąd зберігає строк, але тоді sąd закликає орган передати akta. Орган має передати sprzeciw і akta у визначеному випадку протягом чотирнадцяти днів та може повністю врахувати sprzeciw лише у межах art. 138 § 1 або § 4 KPA; за невиконання після grzywna sąd розглядає справу за odpis sprzeciw.",
          sourceLocator: "Art. 64c § 1–7",
        },
      ],
      summary:
        "Sprzeciw має спеціальний чотирнадцятиденний строк і канал подання через орган, із резервом прямого подання до sąd; для прямого подання діє окремий обов’язок органу щодо akt.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Строк рахується від doręczenie decyzja, а sprzeciw подається за посередництвом органу, рішення якого оскаржується.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Пряме подання до sąd до спливу строку його зберігає; тоді sąd закликає орган передати kompletnе й uporządkowane akta, а орган робить це протягом чотирнадцяти днів від отримання wezwanie. При звичайному поданні орган передає sprzeciw і akta протягом чотирнадцяти днів від його отримання.",
        },
        {
          locator: "§ 5",
          explanation:
            "Орган може протягом чотирнадцяти днів повністю врахувати sprzeciw, uchylając decyzja і видаючи нову на підставі art. 138 § 1 або § 4 KPA.",
        },
        {
          locator: "§ 6–7",
          explanation:
            "За невиконання обов’язку § 4 sąd на wniosek skarżący може накласти grzywna; якщо орган і після неї не передав sprzeciw, sąd розглядає справу за надісланим skarżący odpis sprzeciw.",
        },
      ],
      legalEffect:
        "Норма визначає строки й рух sprzeciw, але не гарантує повного врахування його органом або позитивного результату судового контролю.",
      foreignersCase:
        "У ситуації art. 138 § 2 у справі pobyt зафіксуйте doręczenie, відрахуйте чотирнадцять днів і збережіть підтвердження передачі.",
    },
    {
      provisionId: "ppsa-art-64d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd розглядає sprzeciw od decyzji на posiedzenie niejawne протягом тридцяти днів від його надходження і може передати справу на rozprawa.",
          sourceLocator: "Art. 64d § 1–2",
        },
      ],
      summary:
        "Основним форматом розгляду sprzeciw є закрите засідання, але суд може призначити rozprawa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Стаття встановлює для sąd орієнтир розгляду протягом тридцяти днів від надходження sprzeciw.",
        },
        {
          locator: "§ 2",
          explanation: "Sąd може направити справу для розгляду на rozprawa.",
        },
      ],
      legalEffect:
        "Спосіб і строк розгляду визначені статтею, але самі по собі не означають позитивного рішення.",
      foreignersCase:
        "У справі cudzoziemca перевірте дату надходження sprzeciw до sąd і не припускайте, що відсутність rozprawa означає відсутність розгляду.",
    },
    {
      provisionId: "ppsa-art-64e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Розглядаючи sprzeciw od decyzji, sąd оцінює лише наявність підстав для wydania decyzja з art. 138 § 2 KPA.",
          sourceLocator: "Art. 64e",
        },
      ],
      summary:
        "Контроль у провадженні за sprzeciw обмежений перевіркою передумов повернення справи органу першої інстанції.",
      rules: [
        {
          locator: "Art. 64e",
          explanation:
            "Не ототожнюйте sprzeciw із повним переглядом усіх матеріальних умов: межа оцінки — підстави art. 138 § 2 KPA.",
        },
      ],
      legalEffect:
        "Вузький предмет контролю впливає на те, які аргументи суд може оцінювати в цьому засобі.",
      foreignersCase:
        "У sprzeciw щодо рішення в справі pobyt зосередьте аргументацію на наявності підстав для art. 138 § 2, а не на повній заміні адміністративного розгляду.",
    },
    {
      provisionId: "ppsa-art-64f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На postanowienie, до якого відповідно застосовується art. 138 § 2 KPA, skarga не подається; незадоволена strona може подати sprzeciw od postanowienia, а art. 64b–64e застосовуються відповідно.",
          sourceLocator: "Art. 64f",
        },
      ],
      summary:
        "Для вузької категорії postanowienie діє аналогічний sprzeciw, а не звичайна skarga.",
      rules: [
        {
          locator: "Art. 64f",
          explanation:
            "Перевірте, чи postanowienie належить до категорії з відповідним застосуванням art. 138 § 2 KPA.",
        },
        {
          locator: "Art. 64f",
          explanation:
            "До sprzeciw od postanowienia відповідно переходять правила art. 64b–64e.",
        },
      ],
      legalEffect:
        "Стаття створює спеціальний засіб лише для визначеного postanowienie; вона не скасовує загальні правила для інших postanowienia.",
      foreignersCase:
        "У справі cudzoziemca класифікуйте postanowienie за його правовою підставою та pouczenie перед вибором sprzeciw або zażalenie.",
    },
    {
      provisionId: "ppsa-art-65",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У редакції, чинній на 14.07.2026, Art. 65 § 1 дозволяє sąd вручати pismo через operator pocztowy, своїх працівників, інших уповноважених осіб або органи чи за допомогою засобів електронної комунікації на умовах Art. 74a; для поштового doręczenia діє цивільний режим. Варіант із пріоритетом adres do doręczeń elektronicznych за Art. 65a набирає чинності 1.10.2029.",
          sourceLocator: "Art. 65 § 1–3",
        },
      ],
      summary:
        "На legalStateDate Art. 65 зберігає перелічені поштові, особисті та електронні способи вручення; нова модель із Art. 65a є майбутньою до 1.10.2029.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Поточний § 1 не встановлює пріоритет Art. 65a: sąd може використати operator pocztowy, працівників або інших уповноважених осіб чи органи, а також електронні засоби на умовах чинного Art. 74a.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Якщо застосовано operator pocztowy, діє порядок doręczenia судових pism у postępowanie cywilne, якщо Розділ 4 PPSA не встановлює іншого; § 3 у чинній редакції uchylony.",
        },
        {
          locator: "Примітки 33–34",
          explanation:
            "Редакція з адресою do doręczeń elektronicznych і відсиланням до Art. 65a є майбутньою зміною, що wejście w życie 1.10.2029; не застосовуйте її як поточне правило.",
        },
      ],
      legalEffect:
        "Спосіб doręczenia впливає на skuteczność і строки, але на legalStateDate треба спершу визначити поточний канал за Art. 65 та Art. 74a, а не підміняти його майбутньою Art. 65a.",
      foreignersCase:
        "У справі pobyt перевіряйте, чи sąd використав поточний канал Art. 65 або Art. 74a, адресу, awizo чи UPO; зберігайте підтвердження вручення й не відраховуйте строк лише за майбутньою моделлю Art. 65a.",
    },
    {
      provisionId: "ppsa-art-65a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65a є майбутньою редакцією правил електронного doręczenie: з 1.10.2029 sąd надсилатиме pismo на adres do doręczeń elektronicznych із бази або пов’язану з kwalifikowana usługa rejestrowanego doręczenia; для фізичної особи потрібне подання або вказання адреси, крім przedsiębiorca у CEIDG.",
          sourceLocator: "Art. 65a § 1–5",
        },
      ],
      summary:
        "Art. 65a описує майбутню модель електронного doręczenie; на legalStateDate 14.07.2026 вона ще не є чинною заміною Art. 74a.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Після 1.10.2029 адреса братиметься з бази або з kwalifikowana usługa rejestrowanego doręczenia; для фізичної особи перевірятиметься подання з адреси або її вказання, з винятком przedsiębiorca у CEIDG.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після набрання чинності pismo органу та визначеним учасникам надсилатиметься на адресу з бази adresów elektronicznych.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Майбутній момент skuteczne doręczenie пов’язаний із dowód otrzymania; за неотримання автоматичний доказ формується після чотирнадцяти днів.",
        },
        {
          locator: "Przypisy 35",
          explanation:
            "Усі правила Art. 65a додані як зміна з wejście w życie 1.10.2029; до цієї дати для електронного doręczenie перевіряйте Art. 74a.",
        },
      ],
      legalEffect:
        "Art. 65a не дає поточної підстави для висновку про skuteczne doręczenie на 14.07.2026; її умови слід застосовувати лише після зазначеної дати, якщо перехідні правила не зміняться.",
      foreignersCase:
        "Cudzoziemiec, який подає електронну skarga у поточному стані права, має перевіряти Art. 74a; не покладайтеся на Art. 65a або майбутній dowód otrzymania до 1.10.2029.",
    },
    {
      provisionId: "ppsa-art-65b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65b — майбутня норма: після 1.10.2029 pismo sąd, odpisy pism і załączniki та orzeczenia, які sąd надсилає в postaci elektronicznej, мають бути скріплені kwalifikowany podpis elektroniczny або kwalifikowana pieczęć elektroniczna.",
          sourceLocator: "Art. 65b",
        },
      ],
      summary:
        "Art. 65b ще не діє на legalStateDate; до 1.10.2029 вимога до електронних судових документів міститься в чинному Art. 74a § 12.",
      rules: [
        {
          locator: "Art. 65b",
          explanation:
            "Ця норма додана майбутньою зміною, що набирає чинності 1.10.2029; не використовуйте її як поточну окрему підставу.",
        },
        {
          locator: "Art. 74a § 12 / Przypis 35",
          explanation:
            "На 14.07.2026 перевіряйте в електронному pismo Art. 74a § 12: kwalifikowany podpis або kwalifikowana pieczęć; після 1.10.2029 відповідне правило міститиме Art. 65b.",
        },
      ],
      legalEffect:
        "Вимога стосується електронного оформлення судових документів, але застосовна стаття залежить від дати: Art. 74a § 12 нині, Art. 65b у майбутній редакції.",
      foreignersCase:
        "Зберігайте оригінальний електронний файл рішення у справі pobyt разом із даними підпису або печатки та перевірте, чи посилання зроблено на чинний Art. 74a § 12.",
    },
    {
      provisionId: "ppsa-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У чинній на 14.07.2026 редакції Art. 66 професійні представники — adwokat, radca prawny, doradca podatkowy, rzecznik patentowy та Prokuratoria Generalna RP — надсилають pismo один одному безпосередньо з potwierdzenie odbioru і датою або przesyłka polecona та додають oświadczenie; електронні pismo мають виняток. Електронна модель на адреси do doręczeń elektronicznych набирає чинності 1.10.2029.",
          sourceLocator: "Art. 66 § 1–3",
        },
      ],
      summary:
        "На legalStateDate для визначених професійних представників діє переважно безпосереднє або рекомендоване вручення; електронна модель із адресами do doręczeń elektronicznych є майбутньою та має окремі винятки.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Поточний § 1 вимагає oświadczenie про вручення odpis іншій стороні або його надсилання przesyłka polecona; без oświadczenie pismo повертається без wezwanie. Для електронного документа, адресованого професійному представнику, який застосовує електронні засоби, діє виняток § 1a.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Поточний § 2 допускає вручення адресату безпосередньо в sekretariat sądu, а § 3 виключає з § 1 skarga, skarga kasacyjna, zażalenie, sprzeciw, skarga o wznowienie та skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia.",
        },
        {
          locator: "Przypisy 36–37",
          explanation:
            "З 1.10.2029 § 1 перейде на адреси do doręczeń elektronicznych, а § 2 міститиме ширший перелік винятків, зокрема sprzeciw od decyzji та odpowiedź na skargę kasacyjną; це не поточне правило.",
        },
      ],
      legalEffect:
        "Наслідок zwrot стосується чинних умов § 1; не можна механічно застосовувати майбутню електронну модель або її перелік винятків до дій на 14.07.2026.",
      foreignersCase:
        "Якщо cudzoziemca представляє adwokat або radca prawny, за поточною редакцією перевірте вид pismo, спосіб безпосереднього doręczenie та oświadczenie; не застосовуйте майбутній § 1 до 1.10.2029.",
    },
    {
      provisionId: "ppsa-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Фізичній особі pismo doręczaється особисто або jej przedstawiciel ustawowy; юридичній особі та організаційній одиниці — organowi представництва або уповноваженому працівнику, а за наявності pełnomocnik doręczenie здійснюється йому. Для підприємців і wspólnicy spółek handlowych у реєстрі на legalStateDate діє адреса з реєстру, якщо сторона не вказала іншу; адреса do doręczeń elektronicznych — майбутній варіант із 1.10.2029.",
          sourceLocator: "Art. 67 § 1–5",
        },
      ],
      summary:
        "Належний отримувач залежить від статусу сторони та наявності pełnomocnik; для зареєстрованих підприємців поточне правило про адресу з реєстру не слід плутати з майбутньою електронною редакцією.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Визначте, чи сторона є особою фізичною, юридичною або організаційною одиницею, і хто має право отримати pismo: особа/представник або organ представництва чи уповноважений працівник.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "На 14.07.2026 для przedsiębiorca та wspólnicy spółek handlowych, внесених до rejestr sądowy, застосовується адреса з реєстру, якщо сторона не вказала іншу; за неможливості діє відповідне правило Art. 70 § 2. Варіант адреси do doręczeń elektronicznych набирає чинності 1.10.2029.",
        },
        {
          locator: "§ 5",
          explanation:
            "Якщо встановлено pełnomocnik або особу для отримання pism, doręczenie має бути здійснене цим особам.",
        },
      ],
      legalEffect:
        "Належний адресат і поточна редакція адресного правила впливають на skuteczność doręczenia; сама назва отримувача не вирішує всіх фактичних питань.",
      foreignersCase:
        "Cudzoziemiec має повідомити sąd про pełnomocnik та перевірити, хто отримав pismo; якщо сторона — підприємець, перевірте реєстр і дату застосовної редакції Art. 67.",
    },
    {
      provisionId: "ppsa-art-68",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У дні, вільні від роботи за законом, та в pora nocna doręczenia можливі лише у виняткових випадках за попереднім zarządzenie prezesa sąd; pora nocna триває від 21:00 до 7:00.",
          sourceLocator: "Art. 68 § 1–2",
        },
      ],
      summary:
        "Час вручення обмежений у святкові дні та вночі, якщо немає виняткового дозволу prezesa sąd.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для doręczenie у святковий час або вночі потрібні виняткові обставини та попереднє розпорядження.",
        },
        {
          locator: "§ 2",
          explanation: "Закон визначає pora nocna як 21:00–7:00.",
        },
      ],
      legalEffect:
        "Норма регулює час вручення, але не встановлює автоматичної недійсності кожної спроби без аналізу обставин.",
      foreignersCase:
        "Якщо дата doręczenie судового pismo у справі pobyt припала на ніч або święto, збережіть доказ часу для перевірки за art. 68.",
    },
    {
      provisionId: "ppsa-art-69",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Doręczenia здійснюється в mieszkanie, місці pracy або там, де адресата застали; на його wniosek pismo може бути направлене до skrytka pocztowa, із повідомленням про семиденний строк отримання.",
          sourceLocator: "Art. 69 § 1–2",
        },
      ],
      summary:
        "Суд може вручати pismo за місцем проживання, роботи або перебування, а за заявою — через поштову скриньку.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Місце вручення не обмежене лише адресою mieszkanie: закон називає також miejsce pracy та фактичне місце перебування.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для skrytka pocztowa pismo зберігається у відділенні, а повідомлення визначає сім днів для отримання.",
        },
      ],
      legalEffect:
        "Спосіб doręczenia впливає на докази та строки, але треба встановити, який саме спосіб був застосований.",
      foreignersCase:
        "Якщо cudzoziemiec часто змінює адресу або працює поза домом, вкажіть sąd надійну адресу do doręczeń і відстежуйте awizo та skrytka.",
    },
    {
      provisionId: "ppsa-art-70",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strony та їхні przedstawiciele повинні повідомляти sąd про кожну зміну miejsca zamieszkania, siedziba або адреси do doręczeń, включно з електронною; якщо обов’язок занедбано, pismo залишають в aktach зі skutkiem doręczenia, крім skarga o wznowienie. Перехідна редакція уточнює термін adres do doręczeń elektronicznych і набирає чинності 1.10.2029.",
          sourceLocator: "Art. 70 § 1–3",
        },
      ],
      summary:
        "Обов’язок оновлювати адресу лежить на стороні; його порушення може спричинити doręczenie через залишення pismo в aktach. Термінологічна редакція про електронну адресу є майбутньою до 1.10.2029.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На legalStateDate повідомляйте зміну miejsca zamieszkania, siedziba та адреси do doręczeń, включно з elektroniczny адресою; варіант формулювання adres do doręczeń elektronicznych набирає чинності 1.10.2029.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо адресу не оновлено й нова не відома sąd, pismo залишають в aktach зі skutkiem doręczenia; sąd має pouczyć про цей обов’язок і наслідки при першому doręczenie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для doręczenie skarga o wznowienie postępowania наслідок § 2 не застосовується.",
        },
      ],
      legalEffect:
        "Норма може запустити процесуальні наслідки без фактичного отримання pismo, якщо сторона не повідомила нову адресу; оцінюйте, чи нова адреса все ж була відома sąd.",
      foreignersCase:
        "При переїзді cudzoziemca під час спору про pobyt негайно повідомте sąd нову адресу та збережіть доказ; не покладайтеся на фактичне пересилання пошти.",
    },
    {
      provisionId: "ppsa-art-71",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Doręczenia żołnierzам zasadniczej służby wojskowej здійснюються через dowódca jednostki, а особам позбавленим волі — через адміністрацію відповідного zakład.",
          sourceLocator: "Art. 71 § 1–2",
        },
      ],
      summary:
        "Для військовослужбовця строкової служби та особи, позбавленої волі, закон визначає спеціального посередника вручення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Pismo для żołnierz zasadniczej służby wojskowej передається через dowódca відповідної jednostka.",
        },
        {
          locator: "§ 2",
          explanation:
            "Pismo для особи позбавленої волі передається через адміністрацію відповідного zakład.",
        },
      ],
      legalEffect:
        "Спеціальний канал doręczenie допомагає підтвердити належне вручення особі в особливому статусі.",
      foreignersCase:
        "Якщо учасник справи cudzoziemiec позбавлений волі, перевірте докази передачі pismo адміністрації zakład та фактичну дату вручення.",
    },
    {
      provisionId: "ppsa-art-72",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо адресата немає в mieszkanie, pismo може бути вручено дорослому domownik, а за його відсутності — zarządca або dozorca без sprzeczne interesy, якщо вони прийнялися передати pismo; на роботі — уповноваженій особі.",
          sourceLocator: "Art. 72 § 1–2",
        },
      ],
      summary:
        "За відсутності адресата допускається замінне вручення визначеним особам за умов відсутності конфлікту інтересів і згоди прийняти pismo.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте повноліття domownik, відсутність sprzeczne interesy та його згоду; лише тоді можливе таке doręczenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "У місці pracy pismo може отримати особа, уповноважена на odbiór pism.",
        },
      ],
      legalEffect:
        "Замінне doręczenie може мати процесуальний ефект, але його фактичні умови мають бути зазначені в доказі вручення.",
      foreignersCase:
        "Не ігноруйте pismo, отримане членом сім’ї cudzoziemca: перевірте дані doręczenia, дату та можливий конфлікт інтересів.",
    },
    {
      provisionId: "ppsa-art-73",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо вручення способами art. 65–68, art. 69 § 1 і art. 70–72 неможливе, pismo зберігають чотирнадцять днів у placówka pocztowa або urzędzie gminy із повідомленнями; після цього doręczenie вважається здійсненим.",
          sourceLocator: "Art. 73 § 1–5",
        },
      ],
      summary:
        "Це процедура zastępcze doręczenie з awizo, першим і повторним повідомленням та наслідком після встановленого періоду зберігання.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Після невдалої спроби pismo зберігається чотирнадцять днів, а повідомлення дає сім днів для першого odbiór.",
        },
        {
          locator: "§ 3",
          explanation:
            "За неприбуття залишають повторне повідомлення про можливість отримання у строк не довший за чотирнадцять днів від першого повідомлення.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Doręczenie вважається здійсненим в останній день періоду; для skrytka art. 69 § 2 застосовуються § 3–4 відповідно.",
        },
      ],
      legalEffect:
        "Фіктивне doręczenie може запустити строк без фактичного отримання, тому вирішальними є дати й правильність повідомлень.",
      foreignersCase:
        "У справі pobyt перевірте обидва awizo, адресу та останній день зберігання; відсутність вдома не скасовує автоматично наслідок art. 73.",
    },
    {
      provisionId: "ppsa-art-74",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо адресат відмовляється прийняти pismo, його повертають sąd із відміткою про відмову та її дату; pismo вважається doręczone в день відмови.",
          sourceLocator: "Art. 74 § 1–2",
        },
      ],
      summary:
        "Відмова від прийняття pismo не обов’язково зупиняє вручення: закон прив’язує skuteczność до дня відмови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "У доказі має бути зазначена відмова та дата, а pismo долучається до akt.",
        },
        {
          locator: "§ 2",
          explanation: "День відмови вважається днем doręczenie.",
        },
      ],
      legalEffect:
        "Відмова може запустити процесуальний строк; спір про належність вручення потребує перевірки запису doręczyciel.",
      foreignersCase:
        "Не радьте cudzoziemiec відмовлятися від судового pismo у справі pobyt: зафіксована відмова може мати ефект для строку.",
    },
    {
      provisionId: "ppsa-art-74a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На legalStateDate 14.07.2026 Art. 74a є чинною нормою електронного doręczenie: вона охоплює умови згоди або подання електронного pismo, zawiadomienie, UPO, повторне повідомлення, fikcja doręczenia після чотирнадцяти днів, доступ до документа та підпис судових документів. Позначка про uchylenie в примітці 43 є майбутньою зміною з 1.10.2029, а не поточним статусом.",
          sourceLocator: "Art. 74a § 1–12, przypisy 42–43",
        },
      ],
      summary:
        "На 14.07.2026 Art. 74a — чинна окрема підстава електронного doręczenie; її майбутнє uchylenie заплановане на 1.10.2029.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Електронне doręczenie можливе, якщо strona подала pismo як dokument elektroniczny через elektroniczna skrzynka podawcza sądu або органу, попросила про такий спосіб і вказала адресу чи дала згоду та вказала адресу. Відмова подається як dokument elektroniczny й переводить вручення на неелектронний спосіб.",
        },
        {
          locator: "§ 3–5",
          explanation:
            "Sąd надсилає zawiadomienie з адресою отримання та pouczenie; дата doręczenie — дата підписання urzędowe poświadczenie odbioru kwalifikowany podpis, podpis zaufany або podpis osobisty.",
        },
        {
          locator: "§ 6–9",
          explanation:
            "Якщо pismo не отримано, після семи днів надсилається повторне zawiadomienie, а doręczenie вважається здійсненим після чотирнадцяти днів від першого повідомлення. Доступ до документа та даних про повідомлення має бути забезпечений щонайменше три місяці.",
        },
        {
          locator: "§ 10–12",
          explanation:
            "Для prokurator, RPO, RPD та оскарженого organu pismo надсилається безпосередньо до elektroniczna skrzynka podawcza, а дата береться з UPO; електронні pismo, odpisy, załączniki та orzeczenia мають kwalifikowany podpis або kwalifikowana pieczęć.",
        },
        {
          locator: "Przypisy 42–43",
          explanation:
            "Corpus позначає майбутнє uchylenie Art. 74a за зміною, що wejście w życie 1.10.2029; до цієї дати застосовується наведений чинний режим.",
        },
      ],
      legalEffect:
        "Art. 74a може визначити skuteczność електронного doręczenie та запустити строк, але потрібні конкретна підстава електронної доставки, належні повідомлення й UPO; майбутнє uchylenie не слід описувати як поточне.",
      foreignersCase:
        "Якщо cudzoziemiec подає електронну skarga або отримує pismo у справі pobyt, перевірте умову Art. 74a § 1, zawiadomienia, дату UPO чи 14-денну fikcja та збережіть оригінали системних підтверджень.",
    },
    {
      provisionId: "ppsa-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Pisma у судовому провадженні та orzeczenia doręczaються в odpisach; стаття також допускає електронну форму з даними системи teleinformatyczny sąd у відповідній редакції.",
          sourceLocator: "Art. 75 § 1–2",
        },
      ],
      summary:
        "Звичайне вручення відбувається через odpis, а закон передбачає електронний варіант; редакційні примітки містять майбутню зміну термінології.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Очікуйте odpis pismo або orzeczenia, а не обов’язково оригінал матеріалу, який зберігається в aktach.",
        },
        {
          locator: "§ 2",
          explanation:
            "Електронне doręczenie пов’язане з даними системи sąd; чинний варіант треба читати разом із перехідною приміткою corpus.",
        },
      ],
      legalEffect:
        "Стаття визначає форму примірника судового документа, але не замінює правил про момент skuteczne doręczenie.",
      foreignersCase:
        "Зберігайте отриманий odpis wyrok або wezwanie у справі pobyt разом із доказом вручення; формат файла сам по собі не визначає строк.",
    },
    {
      provisionId: "ppsa-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Одному pełnomocnik кількох осіб надсилається один egzemplarz pismo і załączniki; уповноваженому кільком учасниками на odbiór надсилають по одному примірнику для кожного, а за кількох pełnomocnik однієї сторони — лише одному.",
          sourceLocator: "Art. 76 § 1–3",
        },
      ],
      summary:
        "Кількість примірників залежить від того, чи це спільний pełnomocnik, особа для отримання pism або кілька представників однієї сторони.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спільний pełnomocnik кількох осіб отримує один комплект.",
        },
        {
          locator: "§ 2",
          explanation:
            "Особа, уповноважена кількома учасниками лише на odbiór, отримує по примірнику для кожного учасника.",
        },
        {
          locator: "§ 3",
          explanation:
            "При кількох pełnomocnik однієї сторони sąd надсилає pismo лише одному з них.",
        },
      ],
      legalEffect:
        "Правило про кількість копій не змінює повноваження представника та не визначає результат справи.",
      foreignersCase:
        "Для сім’ї cudzoziemców уточніть, чи представник є спільним pełnomocnik, щоб правильно відстежити комплект і строки реагування.",
    },
    {
      provisionId: "ppsa-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Одержувач підтверджує odbiór і дату підписом; якщо не може або не хоче підписати, doręczający зазначає дату й причину. Doręczający також фіксує спосіб вручення та дату на pismo.",
          sourceLocator: "Art. 77 § 1–2",
        },
      ],
      summary:
        "Доказ doręczenie має показувати факт, дату та спосіб вручення; електронний § 1a у corpus містить редакційні позначки про зміну та uchylony варіант.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Підпис або зафіксована причина його відсутності є частиною підтвердження odbiór.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Для електронної форми перевіряйте відповідний чинний режим підтвердження; текст corpus містить редакційні примітки.",
        },
        {
          locator: "§ 2",
          explanation:
            "Doręczający зазначає спосіб вручення на підтвердженні та день на врученому pismo і підписує запис.",
        },
      ],
      legalEffect:
        "Документ про вручення є ключовим доказом дати, але його оцінка залежить від повноти записів і способу doręczenie.",
      foreignersCase:
        "У справі pobyt отримайте копію potwierdzenie odbioru, перевірте дату й спосіб вручення та не покладайтеся на усну інформацію.",
    },
    {
      provisionId: "ppsa-art-78",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо місце перебування сторони невідоме і їй треба вручити skarga, інше pismo, що вимагає захисту прав, або відповідне orzeczenie, вручення до її появи здійснюється лише kurator, призначеному sąd.",
          sourceLocator: "Art. 78",
        },
      ],
      summary:
        "За невідомого місця перебування захисні судові документи передаються kurator, а не довільній третій особі.",
      rules: [
        {
          locator: "Art. 78",
          explanation:
            "Визначте, чи pismo є skarga, іншим документом для захисту прав або orzeczenie, що вимагає захисту.",
        },
        {
          locator: "Art. 78",
          explanation:
            "До появи сторони, її przedstawiciel або pełnomocnik doręczenie здійснюється kurator, якого призначає sąd.",
        },
      ],
      legalEffect:
        "Спеціальний механізм покликаний не залишити сторону без процесуального захисту, але не встановлює місце фактичного проживання.",
      foreignersCase:
        "Якщо місце перебування cudzoziemiec у спорі невідоме, перевірте, чи sąd призначив kurator і чи pismo вручено саме йому.",
    },
    {
      provisionId: "ppsa-art-79",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd ustanowі kurator, якщо wnioskodawca uprawdopodobni, що місце перебування сторони невідоме; про це оголошують публічно, а doręczenie kurator стає ефективним, із можливістю визначити строк від оголошення.",
          sourceLocator: "Art. 79 § 1–4",
        },
      ],
      summary:
        "Стаття встановлює поріг uprawdopodobnienie невідомого місця, публічне оголошення та момент ефективності вручення kurator.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Потрібно uprawdopodobnić невідоме місце; postanowienie може бути винесене на posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про ustanowienie kurator оголошують у будівлі sąd та urzędzie gminy, а за потреби також у пресі.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Doręczenie kurator є skuteczne з моменту вручення, але sąd може пов’язати його з означеним строком від obwieszczenie; дії може виконувати referendarz.",
        },
      ],
      legalEffect:
        "Kurator забезпечує процесуальне представництво за невідомої адреси, але не доводить, що сторона реально отримала pismo.",
      foreignersCase:
        "Для cudzoziemiec, який виїхав і не повідомив адресу, перевірте матеріали про uprawdopodobnienie та дату doręczenie kurator.",
    },
    {
      provisionId: "ppsa-art-80",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Правила про doręczenie стороні з невідомим місцем перебування та ustanowienie kurator застосовуються також до jednostka organizacyjna без органів або з органами, чия siedziba невідома.",
          sourceLocator: "Art. 80",
        },
      ],
      summary:
        "Механізм kurator поширюється не лише на фізичну особу, а й на організаційну одиницю без відомого керівництва або siedziba.",
      rules: [
        {
          locator: "Art. 80",
          explanation:
            "Перевірте, чи одиниця не має organ або чи невідома його siedziba; тоді застосовуються art. 78–79.",
        },
      ],
      legalEffect:
        "Стаття розширює процесуальний захист для організаційної сторони, але не встановлює окремої процедури поза art. 78–79.",
      foreignersCase:
        "Якщо стороною спору є юридична особа, пов’язана з працевлаштуванням cudzoziemiec, перевірте її органи й siedziba перед висновком про doręczenie kurator.",
    },
    {
      provisionId: "ppsa-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо żądanie ustanowienie kurator або wywieszenie pismo було необґрунтованим, sąd розпоряджається належним doręczenie, а за потреби на wniosek зацікавленої сторони скасовує postępowanie, проведене за участю kurator або після wywieszenie.",
          sourceLocator: "Art. 81",
        },
      ],
      summary:
        "Неправомірно використаний механізм невідомої адреси може бути виправлений належним врученням і процесуальним скасуванням.",
      rules: [
        {
          locator: "Art. 81",
          explanation:
            "Потрібно встановити, що підстава для kurator або wywieszenie була необґрунтованою.",
        },
        {
          locator: "Art. 81",
          explanation:
            "Sąd організовує właściwe doręczenie і, за wniosek, може zniesienie postępowanie, проведене у спеціальному режимі.",
        },
      ],
      legalEffect:
        "Норма дає засіб виправлення процесуального дефекту, але не обіцяє автоматичного скасування всіх наслідків.",
      foreignersCase:
        "Якщо cudzoziemiec доведе, що його адреса була відома, просіть перевірити art. 81 і зберіть докази повідомленої адреси та doręczenie.",
    },
    {
      provisionId: "ppsa-art-82",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Bieg terminu, встановленого sąd або przewodniczący (termin sądowy), починається від ogłoszenie postanowienie чи zarządzenie, а коли ustawa передбачає doręczenie з urzędu — від doręczenie.",
          sourceLocator: "Art. 82",
        },
      ],
      summary:
        "Початок terminu sądowy залежить від оголошення розпорядження або від вручення, якщо закон вимагає doręczenie з urzędu.",
      rules: [
        {
          locator: "Art. 82",
          explanation:
            "З’ясуйте, чи рішення було ogłoszone, чи для нього передбачено doręczenie з urzędu; від цього залежить початок строку.",
        },
      ],
      legalEffect:
        "Стаття визначає момент початку судового строку, але не його тривалість і не правила відновлення.",
      foreignersCase:
        "Для строку на реакцію в суді у справі pobyt порівняйте дату ogłoszenie та дату doręczenie у протоколі й доказі вручення.",
    },
    {
      provisionId: "ppsa-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Terminy обчислюються за цивільними правилами; якщо останній день припадає на sobota або ustawowo wolny день, він переноситься на наступний день, а подання через визначені поштові, консульські та спеціальні канали прирівнюється до wniesienie до sąd.",
          sourceLocator: "Art. 83 § 1–5",
        },
      ],
      summary:
        "Стаття визначає обчислення строків, вихідний перенос, прирівняні способи подання та електронну дату wniesienie.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Застосовуйте правила prawa cywilnego; останній день у sobota або ustawowo wolny день переходить на наступний день.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Подання у визначеній placówka pocztowa, консульстві або спеціальному місці прирівнюється до подання до sąd за умовами статті.",
        },
        {
          locator: "§ 5",
          explanation:
            "Для електронного pismo датою є дата, визначена в poświadczenie odbioru або dowód otrzymania, — дата введення до системи.",
        },
      ],
      legalEffect:
        "Правило може зберегти строк за належного каналу подання, але треба перевірити статус оператора, дату та доказ системи.",
      foreignersCase:
        "Cudzoziemiec за кордоном має перевірити, чи конкретне консульське або поштове подання охоплене § 3, а при електронному поданні — зберегти dowód otrzymania.",
    },
    {
      provisionId: "ppsa-art-84",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący може з важливої причини продовжити termin sądowy з urzędu або на wniosek сторони, поданий до спливу строку, а також скоротити termin sądowy на wniosek сторони.",
          sourceLocator: "Art. 84",
        },
      ],
      summary:
        "Зміна terminu sądowy можлива в межах статті: продовження потребує ważna przyczyna, а wniosek має бути своєчасним.",
      rules: [
        {
          locator: "Art. 84",
          explanation:
            "Для продовження покажіть ważna przyczyna; przewodniczący може діяти з urzędu або за wniosek.",
        },
        {
          locator: "Art. 84",
          explanation:
            "Wniosek про продовження подається до спливу terminu, а скорочення можливе на wniosek сторони.",
        },
      ],
      legalEffect:
        "Стаття стосується terminu sądowy і не дає загального дозволу продовжувати кожен законний строк.",
      foreignersCase:
        "Якщо сторона у справі pobyt не встигає виконати судове wezwanie, подайте обґрунтований wniosek до спливу terminu і не припускайте автоматичного продовження.",
    },
  ]),
})
