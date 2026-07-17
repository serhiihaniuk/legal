import { defineEditorialPart } from "../define-editorial-part"
import { authorLegalTextCitationsTree } from "../../legal-text"

export const ppsaPart08 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-246",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 246 визначає умови przyznanie prawa pomocy: для osoby fizycznej prawo pomocy całkowite вимагає довести неможливість понести будь-які koszty postępowania, а częściowe — неможливість понести повні koszty без шкоди для необхідного утримання себе і сім’ї. Для osoby prawnej та іншої jednostka organizacyjna без osobowość prawna діє відповідний тест відсутності будь-яких або достатніх коштів. Використання безоплатної правової допомоги чи poradnictwo obywatelskie не може саме по собі бути підставою відмови у встановленні професійного представника; такого представника можна ustanowić, якщо сторона не zatrudnia і не має іншого stosunek prawny з відповідним професіоналом, крім представника, встановленого за правилами prawa pomocy.",
          sourceLocator: "Art. 246 § 1–3",
        },
      ],
      summary:
        "Art. 246 встановлює фінансовий поріг для права допомоги і розрізняє prawo pomocy całkowite та częściowe. Це не автоматичне звільнення: сторона має показати власну ситуацію, а обсяг допомоги визначається окремо.",
      rules: [
        {
          locator: "§ 1 pkt 1–2",
          explanation:
            "Для osoby fizycznej розмежуйте два питання: чи особа не може понести жодних koszty, або чи не може понести повних koszty без шкоди для необхідного utrzymanie себе і сім’ї.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Попереднє використання nieodpłatna pomoc prawna або nieodpłatne poradnictwo obywatelskie не може саме по собі виправдати відмову в ustanowienie adwokat, radca prawny, doradca podatkowy чи rzecznik patentowy.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для організації перевіряйте відсутність будь-яких або достатніх коштів. Для ustanowienie професійного представника перевірте також, чи сторона вже не zatrudnia і не має іншого правового зв’язку з таким професіоналом; виняток стосується представника, ustanowiony у межах prawa pomocy.",
        },
      ],
      legalEffect:
        "Стаття є підставою для оцінки, чи може бути надано prawo pomocy і в якому обсязі, але сама заява не створює права на zwolnienie від усіх koszty або на конкретного представника.",
      foreignersCase:
        "У справі іноземця про pobyt відокремте право на legal aid від права не сплачувати судові витрати: зберіть дані про майно, доходи та необхідне utrzymanie сім’ї, а в postanowienie перевірте, чи йдеться про zakres całkowity чи częściowy. Не робіть висновку про відмову лише тому, що особа вже отримувала безоплатну консультацію.",
    },
    {
      provisionId: "ppsa-art-247",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 247 встановлює, що prawo pomocy не przysługuje стороні у разі очевидної bez zasadności її skarga.",
          sourceLocator: "Art. 247",
        },
      ],
      summary:
        "Очевидна bezzasadność skarga є окремою законною межею для przyznanie prawa pomocy.",
      rules: [
        {
          locator: "Art. 247",
          explanation:
            "Перевіряйте не просто слабкість аргументу чи несприятливий прогноз, а саме очевидну bezzasadność skarga, про яку говорить стаття.",
        },
      ],
      legalEffect:
        "За наявності цієї обставини сторона не отримує prawo pomocy; сама вимога про допомогу не усуває можливості оцінити допустимість і очевидну безпідставність skarga.",
      foreignersCase:
        "У спорі іноземця про legalizacja pobytu не називайте skarga очевидно безпідставною лише через відмову органу. Потрібно відокремити оцінку Art. 247 від фінансової ситуації та від питання, чи є інший доступний środek prawny.",
    },
    {
      provisionId: "ppsa-art-248",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 248 передбачає, що przyznanie prawa pomocy не звільняє сторону від обов’язку zwrot kosztów postępowania, якщо такий обов’язок випливає з інших przepisów.",
          sourceLocator: "Art. 248",
        },
      ],
      summary:
        "Prawo pomocy не дорівнює остаточному звільненню від кожного можливого обов’язку повернути koszty.",
      rules: [
        {
          locator: "Art. 248",
          explanation:
            "Після przyznanie права допомоги окремо перевірте інші przepisy, з яких може випливати обов’язок zwrot kosztów; не ототожнюйте допомогу з остаточним rozliczenie справи.",
        },
      ],
      legalEffect:
        "Навіть надане prawo pomocy не усуває обов’язок повернути koszty, якщо його встановлює інша норма; наслідок залежить від цього іншого правила та конкретної справи.",
      foreignersCase:
        "У справі іноземця перевірте точний zakres prawa pomocy і норму, яка може вимагати zwrot kosztów. Не пояснюйте клієнту, що pozytywne postanowienie автоматично закриває всі майбутні фінансові питання у суді.",
    },
    {
      provisionId: "ppsa-art-249",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 249 дозволяє cofnięcie przyznanego prawa pomocy повністю або частково, якщо виявиться, що обставин, на підставі яких його надано, не існувало або вони перестали існувати.",
          sourceLocator: "Art. 249",
        },
      ],
      summary:
        "Надане prawo pomocy не є незмінним: його можна cofnięcie в обсязі, що відповідає зміні або відсутності первісних обставин.",
      rules: [
        {
          locator: "Art. 249",
          explanation:
            "Порівняйте факти на момент przyznanie з фактичним станом, який встановлено пізніше: обставини могли не існувати від початку або могли припинитися.",
        },
        {
          locator: "Art. 249",
          explanation:
            "Перевірте, чи рішення стосується całkowite чи лише częściowe cofnięcie; сама зміна обставин не означає автоматично однаковий наслідок для всього права допомоги.",
        },
      ],
      legalEffect:
        "Стаття дозволяє припинити дію наданої допомоги повністю або частково, але не встановлює, що таке cofnięcie відбувається без окремого процесуального рішення.",
      foreignersCase:
        "Якщо у справі іноземця змінилися доходи, майно або сімейні обставини, порівняйте їх із даними, на яких ґрунтувалося postanowienie. Не приховуйте зміну стану і не припускайте, що первісне prawo pomocy автоматично зберігається в незмінному обсязі.",
    },
    {
      provisionId: "ppsa-art-249a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 249a передбачає umorzenie postępowania щодо przyznania prawa pomocy, якщо strona cofnie wniosek або rozpoznanie wniosku стало zbędne.",
          sourceLocator: "Art. 249a",
        },
      ],
      summary:
        "Провадження про prawo pomocy завершується umorzenie, коли заяву відкликано або її розгляд більше не потрібен.",
      rules: [
        {
          locator: "Art. 249a",
          explanation:
            "Встановіть, яка саме подія настала: cofnięcie wniosku стороною чи втрата потреби в його розгляді; це відрізняється від odmowa при оцінці фінансових умов.",
        },
      ],
      legalEffect:
        "Umorzenie припиняє провадження щодо заяви про prawo pomocy без висновку, що сторона виконала або не виконала фінансові умови для його надання.",
      foreignersCase:
        "У справі іноземця не плутайте umorzenie wniosku про prawo pomocy з відмовою у pobyt або з відмовою у самій судовій skarga. Зафіксуйте, чи wniosek відкликано і чи ще існувала практична потреба в його розгляді.",
    },
    {
      provisionId: "ppsa-art-250",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 250 встановлює, що призначений adwokat, radca prawny, doradca podatkowy або rzecznik patentowy отримує wynagrodzenie за правилами про оплати за czynności відповідної професії у сфері не оплаченої правової допомоги та zwrot необхідних і документально підтверджених wydatki; у uzasadnione przypadki суд може це wynagrodzenie зменшити.",
          sourceLocator: "Art. 250 § 1–2",
        },
      ],
      summary:
        "Стаття регулює винагороду представника, призначеного в рамках prawa pomocy, і відшкодування необхідних документованих витрат.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для розрахунку перевірте вид професійного представника та правила про opłaty за nieopłacona pomoc prawna; окремо підтверджуйте необхідні wydatki документами.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зменшення wynagrodzenie можливе в uzasadnione przypadki; стаття не робить повну заявлену суму гарантованою.",
        },
      ],
      legalEffect:
        "Art. 250 визначає рамку розрахунку wynagrodzenie і wydatki представника, але не гарантує конкретної суми та не змінює обсяг наданого стороні права допомоги.",
      foreignersCase:
        "У справі іноземця перевірте, чи представника справді ustanowiono за zasadach prawa pomocy, які czynności та wydatki заявлено і якими документами вони підтверджені. Не ототожнюйте prawo pomocy клієнта з автоматично погодженою сумою винагороди представника.",
    },
    {
      provisionId: "ppsa-art-251",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 251 передбачає, що przyznanie prawa pomocy wygasa зі смертю сторони, яка його отримала.",
          sourceLocator: "Art. 251",
        },
      ],
      summary:
        "Право допомоги має особистий процесуальний зв’язок зі стороною, яка його отримала, і wygasa з її смертю.",
      rules: [
        {
          locator: "Art. 251",
          explanation:
            "Встановіть факт смерті саме strony, якій przyznano prawo pomocy; стаття регулює припинення цього права, а не всі можливі наслідки смерті для основного postępowanie.",
        },
      ],
      legalEffect:
        "Зі смертю отримувача prawo pomocy wygasa за прямим правилом Art. 251; це не є рішенням по суті адміністративного спору.",
      foreignersCase:
        "Якщо сторона-іноземець померла під час судової справи, окремо зафіксуйте наслідок для prawa pomocy і не робіть з Art. 251 висновку про автоматичне завершення всієї справи чи перехід права до іншої особи.",
    },
    {
      provisionId: "ppsa-art-252",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 252 вимагає, щоб wniosek o przyznanie prawa pomocy містив точні дані про stan majątkowy та dochody, а для osoby fizycznej — також про stan rodzinny і заяву про відсутність zatrudnienie або іншого stosunek prawny з adwokat, radca prawny, doradca podatkowy чи rzecznik patentowy. Ці oświadczenia подаються під rygor відповідальності за false oświadczenie з обов’язковою clausula, wniosek подається на urzędowy formularz, а postanowienie вручається заявникові; środek zaskarżenia має лише wnioskodawca.",
          sourceLocator: "Art. 252 § 1–3",
        },
      ],
      summary:
        "Заява про prawo pomocy має бути правдивою, детальною та поданою на офіційному formularz. Вона одночасно запускає перевірку майнового стану і фіксує, чи має сторона власного професійного представника.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Внесіть конкретні дані про майно та доходи; osoba fizyczna додатково описує stan rodzinny і підтверджує, що не zatrudnia та не має іншого правового зв’язку з названим професійним представником.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Oświadczenia підписуються під rygor відповідальності за false oświadczenie і мають містити точну clausula: «Jestem świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia.» Ця clausula замінює окреме pouczenie суду.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Використовуйте встановлений urzędowy formularz. Постанови про przyznanie, cofnięcie, odmowa або umorzenie вручаються стороні, яка подала wniosek, і саме wnioskodawca має środek zaskarżenia.",
        },
      ],
      legalEffect:
        "Недостовірна або неповна заява може вплинути на перевірку права допомоги і відповідальність за oświadczenie; подання formularz саме по собі не означає przyznanie права.",
      foreignersCase:
        "Іноземцю потрібно заповнювати urzędowy formularz з даними, які можна перевірити, і зберегти підтвердження подання. Поясніть зміст польської clausula про кримінальну відповідальність перед підписом та окремо відстежуйте doręczenie postanowienie і строк для środek zaskarżenia.",
    },
    {
      provisionId: "ppsa-art-253",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 253 встановлює, що суд звертається по призначення adwokat, radca prawny, doradca podatkowy або rzecznik patentowy до відповідної ради, надсилаючи postanowienie про przyznanie prawa pomocy. Рада має протягом 14 днів від doręczenie цього postanowienie призначити представника і невідкладно повідомити його та суд; у повідомленні суду зазначаються ім’я, прізвище й адреса doręczenia. Для дій поза місцезнаходженням суду рада за потреби може призначити професіонала з іншої місцевості.",
          sourceLocator: "Art. 253 § 1–3",
        },
      ],
      summary:
        "Після przyznanie права на представника його призначення проходить через відповідну професійну раду, а закон встановлює строк 14 днів для цієї дії.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте, чи суд надіслав відповідній radа postanowienie про przyznanie права на представника; після wydanie orzeczenie, від якого можлива skarga kasacyjna, суд повідомляє раду про потребу призначення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Чотирнадцятиденний строк ради рахується від doręczenie postanowienie. Повідомлення суду має містити дані представника та його адресу для вручень; у справі після orzeczenie для skarga kasacyjna рада також повідомляє дату інформування представника.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо представникові треба діяти поза місцезнаходженням суду, він може звернутися до ради про призначення іншого професіонала з іншої місцевості, якщо це потрібно.",
        },
      ],
      legalEffect:
        "Стаття організовує призначення професійного представника після позитивного рішення про prawo pomocy, але сама не замінює postanowienie про надання права і не визначає результат основної справи.",
      foreignersCase:
        "У справі іноземця відстежуйте три дати: doręczenie postanowienie раді, сплив 14 днів і повідомлення про призначеного pełnomocnik. Для skarga kasacyjna після wyrok окремо перевірте, коли представника повідомили про призначення.",
    },
    {
      provisionId: "ppsa-art-254",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 254 передбачає, що wniosek o przyznanie prawa pomocy та wniosek про przyznanie kosztów nieopłaconej pomocy prawnej подаються до właściwy wojewódzki sąd administracyjny. Сторона без місця zamieszkania, pobytu або siedziba в юрисдикції цього суду може подати wniosek до іншого WSA, який невідкладно пересилає його właściwy суд.",
          sourceLocator: "Art. 254 § 1–2",
        },
      ],
      summary:
        "Стаття визначає суд для подання заяви і дає практичний запасний маршрут стороні, яка не перебуває в територіальній юрисдикції потрібного WSA.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Зазвичай подавайте wniosek до właściwy wojewódzki sąd administracyjny; це стосується і права допомоги, і витрат на неоплачену правову допомогу.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо сторона не має zamieszkania, pobytu або siedziba в межах юрисдикції właściwy суду, wniosek можна подати до іншого WSA, але він має бути невідкладно пересланий компетентному суду.",
        },
      ],
      legalEffect:
        "Подання до іншого WSA у передбаченій ситуації не змінює właściwość: остаточно заяву розглядає właściwy суд, а не той, який лише її переслав.",
      foreignersCase:
        "Для іноземця перевірте, де він має фактичний pobyt і який WSA є właściwy у справі. Якщо він перебуває поза цією юрисдикцією, збережіть підтвердження подання до іншого WSA та не плутайте пересилання із самим рішенням про prawo pomocy.",
    },
    {
      provisionId: "ppsa-art-255",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 255 зобов’язує сторону на wezwanie і в закреслений строк подати додаткове oświadczenie або źródłowe dokumenty про stan majątkowy, dochody чи stan rodzinny, якщо дані у wniosek за Art. 252 недостатні для оцінки фактичного стану і можливості платежу або викликають сумніви.",
          sourceLocator: "Art. 255",
        },
      ],
      summary:
        "Якщо початкова заява не дає змоги оцінити платоспроможність або викликає сумніви, суд може вимагати додаткові пояснення чи первинні документи.",
      rules: [
        {
          locator: "Art. 255",
          explanation:
            "Прочитайте wezwanie разом із визначеним строком і вкажіть, чи потрібно подати додаткове oświadczenie, źródłowe dokumenty або обидва типи матеріалів.",
        },
        {
          locator: "Art. 255",
          explanation:
            "Матеріали мають стосуватися фактичного стану майна, доходів, можливості платежу або стану сім’ї; не замінюйте їх загальним описом фінансових труднощів.",
        },
      ],
      legalEffect:
        "Невиконання wezwanie може перешкодити оцінці заяви про prawo pomocy та спричинити передбачені процедурою наслідки, але Art. 255 сам визначає обов’язок надати дані, а не автоматичну відмову.",
      foreignersCase:
        "У справі іноземця підготуйте документи про доходи й рахунки в Польщі та за кордоном лише в обсязі, якого вимагає wezwanie, і переконайтеся, що відповідь подано в строк. Не ігноруйте запит через те, що частина документів іноземною мовою: поясніть їх походження та вимоги до подання.",
    },
    {
      provisionId: "ppsa-art-256",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 256 уповноважує Rada Ministrów у rozporządzenie визначити wzór і спосіб udostępniania urzędowy formularz для wniosek за Art. 252 § 2, його pouczenie та наслідки недотримання вимог, включно з clausula за Art. 252 § 1a, а також rodzaje źródłowe dokumenty за Art. 255 і періоди, за які документуються майно, доходи та стан сім’ї. Стаття як приклади називає податкові декларації, виписки з банківських рахунків і валютних рахунків та депозитів, витяги з реєстрів, актуальні bilanse і довідки про винагороду та виплати.",
          sourceLocator: "Art. 256 pkt 1–2",
        },
      ],
      summary:
        "Стаття передає до rozporządzenie технічні правила formularz і перелік та часовий обсяг джерельних документів для перевірки права допомоги.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Для форми wniosku перевіряйте актуальний urzędowy formularz, спосіб його udostępniania, pouczenie та обов’язкову clausula; сам Art. 256 не є заповненою формою.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Rozporządzenie визначає види документів і періоди, за які їх треба подати. У тексті статті як приклади наведені податкові документи, банківські виписки, реєстрові витяги, aktualne bilanse та довідки про доходи й świadczenia.",
        },
      ],
      legalEffect:
        "Art. 256 створює нормативну основу для деталізації formularz і доказів, але не звільняє сторону від обов’язку подати правдиві дані та виконати конкретне wezwanie.",
      foreignersCase:
        "Іноземцю перевірте, який саме formularz і період документів вимагає чинне rozporządzenie, особливо для рахунків у валюті та доходів за межами Польщі. Не виводьте повний перелік обов’язкових документів лише з прикладів у Art. 256.",
    },
    {
      provisionId: "ppsa-art-257",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 257 встановлює, що wniosek o przyznanie prawa pomocy, поданий не на urzędowy formularz або з braki, які сторона не усунула у встановлений строк, залишають без rozpoznania.",
          sourceLocator: "Art. 257",
        },
      ],
      summary:
        "Формально неналежну заяву про prawo pomocy не розглядають, якщо вона подана не на офіційній формі або її braki не усунуті в строк.",
      rules: [
        {
          locator: "Art. 257",
          explanation:
            "Спершу перевірте форму wniosek, потім зміст wezwanie щодо braki та дату, до якої їх треба було усунути.",
        },
        {
          locator: "Art. 257",
          explanation:
            "Pozostawienie bez rozpoznania — це процесуальний наслідок формальної проблеми, а не висновок про те, що сторона має достатні кошти або що skarga є безпідставною.",
        },
      ],
      legalEffect:
        "За Art. 257 заява не переходить до оцінки права допомоги, якщо відсутня urzędowy formularz або не усунуто braki в закреслений строк.",
      foreignersCase:
        "У справі іноземця збережіть копію саме поданого formularz, wezwanie про braki і доказ відповіді. Не називайте залишення wniosek без розгляду відмовою по суті та перевірте, чи не можна подати нову належно оформлену заяву з огляду на стадію основної справи.",
    },
    {
      provisionId: "ppsa-art-258",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 258 визначає, що czynności у сфері przyznanie prawa pomocy виконує referendarz sądowy. Серед них — приймання й пересилання wnioski, перевірка формальних вимог та змісту, передача справи суду у випадку Art. 247, wezwanie про усунення braki та подання додаткових даних, zarządzenie про залишення без розгляду, а на posiedzenie niejawnym — postanowienia про przyznanie, cofnięcie, odmowa або umorzenie та про wynagrodzenie представника і необхідні udokumentowane wydatki. § 3 є uchylony; у особливо обґрунтованих випадках ці czynności може виконати sąd, і на акти суду, названі в § 2 pkt 6–8, przysługuje zażalenie.",
          sourceLocator: "Art. 258 § 1–4",
        },
      ],
      summary:
        "Більшість технічних і первинних дій у справі про prawo pomocy виконує referendarz sądowy, але закон залишає суду можливість діяти у особливо обґрунтованих випадках.",
      rules: [
        {
          locator: "§ 1–2 pkt 1–5",
          explanation:
            "Referendarz може прийняти і переслати wniosek, перевірити його форму та зміст, передати його суду у випадку очевидної bezzasadność skarga і вимагати усунення braki або додаткові документи.",
        },
        {
          locator: "§ 2 pkt 6–8",
          explanation:
            "До повноважень належать zarządzenie про pozostawienie wniosku без розгляду та postanowienia про результат заяви або оплату праці представника; вони виносяться на posiedzenie niejawnym у випадках, названих статтею.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "§ 3 позначений як uchylony. Сąd може виконати czynności § 2 у szczególnie uzasadnione przypadki; для відповідних актів суду Art. 258 § 4 прямо передбачає zażalenie.",
        },
      ],
      legalEffect:
        "Стаття розподіляє первинні повноваження між referendarz і sąd. Вона не означає, що рішення referendarz є остаточною оцінкою основної справи про pobyt.",
      foreignersCase:
        "У справі іноземця спочатку визначте, чи документ видав referendarz, чи sąd, і що саме він вирішує: форму, саму допомогу, витрати представника або umorzenie. Від цього залежить, чи застосовується sprzeciw за Art. 259, чи інший środek zaskarżenia.",
    },
    {
      provisionId: "ppsa-art-259",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 259 дозволяє стороні або adwokat, radca prawny, doradca podatkowy чи rzecznik patentowy подати до właściwy wojewódzki sąd administracyjny sprzeciw від zarządzenia або postanowienia, названих в Art. 258 § 2 pkt 6–8, у строк семи днів від doręczenie. Sprzeciw професійного представника має містити uzasadnienie. Прострочений sprzeciw, sprzeciw з неусуненими braki або sprzeciw представника без uzasadnienie суд odrzuca на posiedzenie niejawnym; без sprzeciw або після його prawomocne odrzucenie відповідний акт має skutki prawomocnego orzeczenia sądu.",
          sourceLocator: "Art. 259 § 1–3",
        },
      ],
      summary:
        "Sprzeciw є спеціальним шляхом перевірки окремих актів referendarz у справі про prawo pomocy і має короткий семиденний строк.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте, чи оскаржуваний акт належить саме до Art. 258 § 2 pkt 6–8, кому його вручено і коли почався семиденний строк. Для sprzeciw, поданого професійним представником, додайте uzasadnienie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Суд odrzuca на posiedzenie niejawnym sprzeciw після строку, з неусуненими braki або без обов’язкового uzasadnienie, якщо його подав професійний представник.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо sprzeciw не подано або його odrzucenie стало prawomocne, акт referendarz отримує skutki prawomocnego orzeczenia sądu; це вузький процесуальний наслідок для названих актів.",
        },
      ],
      legalEffect:
        "Пропуск семиденного строку або невиконання формальних вимог може закрити sprzeciw. Подання sprzeciw не є odwołanie від рішення органу у справі про pobyt і не відкриває повторний розгляд усієї справи.",
      foreignersCase:
        "Після doręczenie акта referendarz у справі іноземця запишіть точну дату і відразу визначте, чи потрібен sprzeciw протягом 7 днів. Не замінюйте sprzeciw загальною skarga або zażalenie та перевірте uzasadnienie, якщо його подає професійний представник.",
    },
    {
      provisionId: "ppsa-art-260",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 260 передбачає, що суд, розглядаючи sprzeciw від актів Art. 258 § 2 pkt 6–8, видає postanowienie, яким змінює zarządzenie або postanowienie referendarz або залишає його в силі. Podanie sprzeciw зупиняє wykonalność такого акта; суд діє як sąd drugiej instancji, відповідно застосовуючи положення про zażalenie, і розглядає справу на posiedzenie niejawnym.",
          sourceLocator: "Art. 260 § 1–3",
        },
      ],
      summary:
        "Суд перевіряє sprzeciw як інстанція другого рівня, може змінити акт referendarz або залишити його в силі, а сам sprzeciw тимчасово зупиняє його wykonalność.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Результат судового розгляду sprzeciw — postanowienie про зміну або utrzymanie w mocy конкретного акта referendarz, а не рішення по основній адміністративній справі.",
        },
        {
          locator: "§ 2",
          explanation:
            "На час розгляду sprzeciw wykonalność оскарженого акта зупинена. Суд має статус sąd drugiej instancji і застосовує правила про zażalenie відповідно.",
        },
        {
          locator: "§ 3",
          explanation:
            "Справу розглядають на posiedzenie niejawnym; це не означає, що sprzeciw автоматично задовольнять.",
        },
      ],
      legalEffect:
        "Вчасно поданий sprzeciw має тимчасовий suspensywny ефект щодо wykonalność акта referendarz, але остаточний наслідок визначається postanowienie суду.",
      foreignersCase:
        "У справі іноземця врахуйте, що sprzeciw може зупинити wykonalność акта про prawo pomocy, але не зупиняє автоматично рішення про pobyt чи інші дії органу. Дочекайтеся postanowienie WSA і прочитайте, чи акт змінено, чи залишено в силі.",
    },
    {
      provisionId: "ppsa-art-261",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 261 встановлює, що від sprzeciw і zażalenia, які подаються у справі про prawo pomocy, не стягуються opłaty sądowe.",
          sourceLocator: "Art. 261",
        },
      ],
      summary:
        "Спеціальні sprzeciw і zażalenia у справі про prawo pomocy є без opłata sądowa.",
      rules: [
        {
          locator: "Art. 261",
          explanation:
            "Перевірте, що środek zaskarżenia справді подається у справі про prawo pomocy і є sprzeciw або zażalenie, названим статтею.",
        },
      ],
      legalEffect:
        "Art. 261 скасовує opłata sądowa саме за визначені засоби у справі про prawo pomocy; він не встановлює загального звільнення від усіх витрат основного postępowanie.",
      foreignersCase:
        "Іноземцю поясніть різницю між відсутністю opłata за sprzeciw або zażalenie щодо prawa pomocy та можливими витратами в окремій справі про legalizacja pobytu. Не використовуйте Art. 261 як доказ повної безкоштовності всього судового процесу.",
    },
    {
      provisionId: "ppsa-art-262",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 262 передбачає відповідне застосування положень про przyznanie prawa pomocy щодо zastępstwo prawne на zasadach prawa pomocy до сторін, які мають ustawowe zwolnienie від обов’язку сплати kosztów sądowych.",
          sourceLocator: "Art. 262",
        },
      ],
      summary:
        "Сторона, звільнена від судових витрат без окремого рішення про prawo pomocy, може відповідно користуватися правилами про правове представництво за zasadach prawa pomocy.",
      rules: [
        {
          locator: "Art. 262",
          explanation:
            "Спочатку встановіть ustawowe zwolnienie від обов’язку сплати kosztów sądowych, а потім застосовуйте правила лише в частині zastępstwo prawne на zasadach prawa pomocy.",
        },
        {
          locator: "Art. 262",
          explanation:
            "Не розширюйте відсилання на автоматичне звільнення від усіх витрат або на будь-яку іншу форму допомоги: стаття говорить саме про zastępstwo prawne.",
        },
      ],
      legalEffect:
        "Норма координує ustawowe zwolnienie від витрат із механізмом призначення представника, але сама не встановлює, що кожна звільнена сторона автоматично отримує adwokat чи radca prawny.",
      foreignersCase:
        "У справі іноземця перевірте джерело звільнення: ustawowe zwolnienie не тотожне postanowienie про prawo pomocy. Для призначення представника застосовуйте Art. 262 лише в його вузькій частині про zastępstwo prawne.",
    },
    {
      provisionId: "ppsa-art-263",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 263 у чинному тексті має статус «(uchylony)» і не містить чинного нормативного правила.",
          sourceLocator: "Art. 263",
        },
      ],
      summary:
        "Art. 263 скасовано: у цій редакції немає чинної норми, яку можна застосовувати до справи.",
      rules: [
        {
          locator: "Art. 263",
          explanation:
            "Не виводьте процесуальне право або обов’язок із номера Art. 263. Для історичної події потрібно окремо перевірити редакцію PPSA і перехідні положення на відповідну дату.",
        },
      ],
      legalEffect:
        "Оскільки Art. 263 є uchylony у джерельній редакції ppsa-2026-143, він не створює сучасного процесуального наслідку.",
      foreignersCase:
        "Якщо в старому документі іноземця є посилання на Art. 263, не використовуйте його як діючу підставу без перевірки редакції закону та моменту, коли виникла відповідна процесуальна ситуація.",
    },
    {
      provisionId: "ppsa-art-264",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 264 встановлює, що uchwały, передбачені Art. 15 § 1 pkt 2 і 3, Naczelny Sąd Administracyjny приймає у складі семи sędziów, усієї Izba або повного складу. Uchwały за Art. 15 § 1 pkt 2 приймаються на wniosek Prezesa NSA, Prokuratora Generalnego, Prokuratorii Generalnej Rzeczypospolitej Polskiej, Rzecznika Praw Obywatelskich, Rzecznika Małych i Średnich Przedsiębiorców або Rzecznika Praw Dziecka, а за pkt 3 — на підставі postanowienie складу, що розглядає справу. Президент NSA направляє wniosek до відповідного складу; склад семи sędziów може передати zagadnienie правове повному складу Izba, а Izba — повному NSA.",
          sourceLocator: "Art. 264 § 1–4",
        },
      ],
      summary:
        "Стаття визначає склад NSA та ініціаторів для спеціальних uchwały щодо правових питань, а також можливість передати питання до ширшого складу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Уточніть, чи йдеться про uchwała за Art. 15 § 1 pkt 2 або pkt 3, і перевірте склад: сім sędziów, уся Izba або повний склад NSA.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для pkt 2 перевірте, хто саме подав wniosek; для pkt 3 — postanowienie складу, що розглядає справу. Далі Prezes NSA направляє питання до одного з передбачених складів.",
        },
        {
          locator: "§ 4",
          explanation:
            "Склад семи sędziów може postanowienieм передати zagadnienie повному складу Izba, а Izba — повному складу NSA.",
        },
      ],
      legalEffect:
        "Art. 264 регулює компетенцію та маршрут ухвалення uchwała NSA; він сам не вирішує конкретну справу іноземця і не є автоматичним способом оскарження wyrok.",
      foreignersCase:
        "У справі про pobyt перевірте, чи посилання на uchwała стосується справді процедури Art. 15 § 1 і Art. 264, а не просто загальної думки NSA. Не підміняйте wniosek або postanowienie для uchwała звичайною skarga сторони.",
    },
    {
      provisionId: "ppsa-art-265",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 265 робить обов’язковою участь Prokurator Generalny або його заступника у засіданні повного складу NSA або Izba. У засіданні складу семи sędziów бере участь прокурор Prokuratura Krajowa або прокурор іншої jednostka organizacyjna prokuratury, делегований до виконання дій у Prokuratura Krajowa та призначений Prokurator Generalny або його заступником.",
          sourceLocator: "Art. 265",
        },
      ],
      summary:
        "Стаття встановлює обов’язкову участь визначених представників прокуратури в засіданнях NSA, де приймаються uchwały у передбачених складах.",
      rules: [
        {
          locator: "Art. 265 zdanie pierwsze",
          explanation:
            "Для повного складу NSA або Izba перевірте участь Prokurator Generalny чи його zastępca — закон називає її обов’язковою.",
        },
        {
          locator: "Art. 265 zdanie drugie",
          explanation:
            "Для складу семи sędziów встановіть статус і спосіб призначення прокурора: потрібні названі в статті делегування та призначення до участі.",
        },
      ],
      legalEffect:
        "Норма визначає склад учасників засідання для uchwała NSA, але сама участь прокурора не передбачає змісту або результату uchwała.",
      foreignersCase:
        "Якщо у справі іноземця цитують uchwała, відокремте обов’язкову участь представника прокуратури за Art. 265 від правової сили та змісту конкретного висновку. Не робіть висновку про результат pobyt лише з присутності цього учасника.",
    },
    {
      provisionId: "ppsa-art-266",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 266 вимагає для uchwała повного складу NSA або повного складу Izba присутності щонайменше двох третин sędziowie кожної Izba. Uchwały приймаються у jawne głosowanie звичайною більшістю голосів.",
          sourceLocator: "Art. 266 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює кворум для повного складу NSA або Izba та спосіб голосування за uchwała.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте наявність щонайменше двох третин sędziowie кожної Izba — це умова для uchwała повного складу, названого статтею.",
        },
        {
          locator: "§ 2",
          explanation:
            "Голосування є jawne, а рішення приймається звичайною більшістю голосів; не підмінюйте цю процедурну вимогу припущенням про одностайність.",
        },
      ],
      legalEffect:
        "Art. 266 визначає умови легітимного ухвалення uchwała у повному складі, але не описує зміст правового вирішення конкретного питання.",
      foreignersCase:
        "У навчальному аналізі справи іноземця перевірте, який склад NSA прийняв процитовану uchwała та чи йдеться саме про повний склад або Izba. Кворум і спосіб голосування не є самостійним рішенням щодо права на pobyt.",
    },
    {
      provisionId: "ppsa-art-267",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 267 дозволяє Naczelny Sąd Administracyjny у формі postanowienie відмовити у прийнятті uchwała, зокрема коли немає потреби пояснювати сумніви.",
          sourceLocator: "Art. 267",
        },
      ],
      summary:
        "NSA може не прийняти uchwała, якщо, зокрема, не бачить потреби в поясненні правових сумнівів.",
      rules: [
        {
          locator: "Art. 267",
          explanation:
            "Читайте postanowienie NSA про відмову та його конкретну підставу; слово «зокрема» показує, що відсутність потреби пояснювати сумніви є прикладом, а не єдиною названою ситуацією.",
        },
      ],
      legalEffect:
        "Відмова за Art. 267 означає, що uchwała не прийнята в цьому процесуальному маршруті; вона не є відповіддю NSA по суті кожного спору про pobyt.",
      foreignersCase:
        "Якщо учасник справи іноземця посилається на wniosek про uchwała, перевірте, чи NSA його прийняв, чи видав postanowienie про відмову. Сам факт подання wniosek не створює для органу або суду нового рішення щодо pobyt.",
    },
    {
      provisionId: "ppsa-art-268",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 268 вимагає uzasadnienie як для wniosek o podjęcie uchwały, так і для самої uchwała Naczelnego Sądu Administracyjnego.",
          sourceLocator: "Art. 268",
        },
      ],
      summary:
        "Ініціатор uchwała має пояснити потребу в її прийнятті, а NSA має обґрунтувати прийняту uchwała.",
      rules: [
        {
          locator: "Art. 268",
          explanation:
            "Відокремте uzasadnienie wniosek від uzasadnienie uchwała: перше належить заявникові, друге — прийнятому рішенню NSA.",
        },
      ],
      legalEffect:
        "Вимога мотивування дає змогу зрозуміти питання та відповідь у процедурі uchwała, але сама по собі не перетворює wniosek на вирішення індивідуальної справи.",
      foreignersCase:
        "Коли аналізуєте uchwała, на яку посилаються у справі іноземця, читайте повний текст uzasadnienie, а не лише sentencja. Перевірте також, чи доводи сторони були wniosek про uchwała, а не звичайною скаргою у її власній справі.",
    },
    {
      provisionId: "ppsa-art-269",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 269 передбачає, що якщо склад sąd administracyjny, який розглядає справу, не поділяє stanowisko uchwała складу семи sędziów, усієї Izba або повного складу NSA, він передає виникле zagadnienie prawne відповідному складу; застосовуються відповідно Art. 187 § 1–2. У такому випадку відповідний склад приймає ponowna uchwała, і Art. 267 не застосовується. Якщо склад однієї Izba не поділяє stanowisko uchwała іншої Izba, питання передають повному складу NSA.",
          sourceLocator: "Art. 269 § 1–3",
        },
      ],
      summary:
        "Норма встановлює спеціальний механізм, коли склад адміністративного суду не погоджується зі stanowisko визначеної uchwała: питання не ігнорують, а передають на ponowna uchwała.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку встановіть, чи попереднє stanowisko міститься саме в uchwała складу семи sędziów, Izba або повного NSA. За незгоди склад, що розглядає справу, передає конкретне zagadnienie prawne відповідному складу.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відповідний склад приймає ponowna uchwała; для цього випадку Art. 267 про відмову в прийнятті uchwała не застосовується.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо конфлікт виник між uchwały різних Izba, питання передається повному складу NSA, а не вирішується лише однією з цих Izba.",
        },
      ],
      legalEffect:
        "Art. 269 визначає обов’язковий процесуальний маршрут для заявленої незгоди з названою uchwała; він не дає автоматичної відповіді на індивідуальну справу і не є новим засобом оскарження decyzja про pobyt.",
      foreignersCase:
        "Якщо у справі іноземця суд посилається на інше stanowisko NSA або хоче від нього відступити, визначте конкретну uchwała і перевірте, чи застосовано маршрут Art. 269. Не називайте будь-яку відмінність у мотивах «конфліктом uchwały» без перевірки її виду та складу.",
    },
    {
      provisionId: "ppsa-art-270",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 270 встановлює, що у випадках, передбачених Dział VII, можна вимагати wznowienie postępowania, яке завершено prawomocne orzeczenie.",
          sourceLocator: "Art. 270",
        },
      ],
      summary:
        "Art. 270 відкриває можливість wznowienie лише для остаточно завершеного провадження і лише в передбачених Dział VII випадках.",
      rules: [
        {
          locator: "Art. 270",
          explanation:
            "Перевірте дві передумови: чи postępowanie завершене prawomocne orzeczenie і чи підстава прямо передбачена Dział VII, а не просто випливає з незгоди з результатом.",
        },
      ],
      legalEffect:
        "Норма створює загальну рамку для żądanie wznowienia, але не робить wznowienie автоматичним: конкретні підстави, właściwy sąd, строки та зміст skarga визначаються наступними статтями Dział VII.",
      foreignersCase:
        "У справі іноземця про pobyt спочатку ідентифікуйте prawomocne orzeczenie та конкретну ustawowa podstawa wznowienia. Сам факт несприятливого wyrok не дає права на повторний розгляд і не поновлює автоматично дозвіл на перебування.",
    },
  ]),
})
