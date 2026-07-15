import { defineEditorialPart } from "../define-editorial-part"

export const foreignersActPart10 = defineEditorialPart<
  "ustawa-o-cudzoziemcach"
>({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-331",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 331 є скасованим: у тексті стоїть позначка «uchylony».",
          sourceLocator: "Art. 331",
        },
      ],
      summary:
        "Art. 331 скасовано. Чинного правила, яке можна застосувати до виконання рішення про zobowiązaniu cudzoziemca do powrotu, ця стаття не містить.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Позначка «uchylony» означає, що статтю не слід читати як чинну матеріальну або процедурну підставу.",
        },
      ],
      legalEffect:
        "Сама стаття не створює чинного правового наслідку; треба перевіряти актуальну норму, на яку посилається рішення.",
      foreignersCase:
        "Якщо в рішенні є посилання на Art. 331, не робіть висновок із номера статті: перевірте, чи посилання не є застарілим і які чинні положення наведені поруч.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-332",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 332 передбачає виконання decyzji o zobowiązaniu cudzoziemca do powrotu, виданої małoletniemu cudzoziemcowi, лише за наявності опіки в державі повернення та належного супроводу або передачі представнику.",
          sourceLocator: "Art. 332 pkt 1–2",
        },
      ],
      summary:
        "Для неповнолітнього виконання рішення про повернення пов’язане з гарантією opieka в державі, до якої його повертають, і з безпечним переданням відповідальній особі або органу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У державі повернення має бути забезпечена опіка батьків, іншої повнолітньої особи або opiekuńcza instytucja за стандартами Konwencja o prawach dziecka.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Повернення має відбуватися під опікою przedstawiciel ustawowy або неповнолітнього передають його представнику чи компетентним властям держави повернення.",
        },
      ],
      legalEffect:
        "Норма встановлює спеціальну умову виконання рішення щодо неповнолітнього; вона не означає автоматичного скасування самого рішення.",
      foreignersCase:
        "У справі неповнолітнього перевірте документи про прийняття та опіку в державі повернення, особу супроводжувача і фактичний план передачі.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-333",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 333 дозволяє представникам організацій, що допомагають іноземцям, бути obserwatorzy під час doprowadzenie, визначає їхні права й обов’язки та правила покриття витрат.",
          sourceLocator: "Art. 333 ust. 1–7",
        },
      ],
      summary:
        "Представники NGO або міжнародних організацій можуть спостерігати за примусовим доставленням іноземця до кордону чи порту, щоб контролювати повагу до його гідності та прав.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Obserwatorzy можуть бути присутні під час усіх дій, спілкуватися з іноземцем, якщо це не заважає doprowadzenie, і підтверджувати дотримання його прав.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Держава покриває проїзд не більш як двох представників NGO, коли доставляють щонайменше 5 іноземців і використовується морське судно або chartered aircraft.",
        },
        {
          locator: "ust. 5–7",
          explanation:
            "Представники мають дотримуватися правил і вказівок SG у небезпечній ситуації; minister właściwy do spraw wewnętrznych визначає порядок інформування та документування.",
        },
      ],
      legalEffect:
        "Стаття створює рамку незалежного спостереження, але присутність obserwator не зупиняє автоматично виконання рішення.",
      foreignersCase:
        "Під час планування doprowadzenie з’ясуйте, чи залучена відповідна організація, які правила безпеки їй повідомили та як фіксується перебіг дій.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-334",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 334 встановлює, кому може надаватися pomoc w dobrowolnym powrocie, що вона організовується на wniosek cudzoziemca і які строки подання заяви діють.",
          sourceLocator: "Art. 334 ust. 1–11",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej організовує допомогу для добровільного повернення визначених законом категорій іноземців, але іноземець повинен подати wniosek у передбачений строк.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Допомога доступна, зокрема, особі з decyzja про повернення і termin dobrowolnego wyjazdu, деяким особам без тримання, заявникам у справах ochrony międzynarodowej та особам з Art. 170 або Art. 176.",
        },
        {
          locator: "ust. 5–7",
          explanation:
            "Строк залежить від ситуації: до завершення dobrowolny wyjazd, за 7 днів до строку з Art. 299 ust. 6 pkt 1 lit. b або протягом 5 днів у названих процедурах ochrony. Пропущений строк веде до залишення wniosek без розгляду.",
        },
        {
          locator: "ust. 10–11",
          explanation:
            "Повторна допомога за загальним правилом можлива не раніше ніж через 2 роки, але закон передбачає винятки для окремих категорій.",
        },
      ],
      legalEffect:
        "Подання wniosek запускає організаційну процедуру, але саме по собі не гарантує допомогу і не замінює дотримання строку повернення.",
      foreignersCase:
        "Порівняйте тип рішення, дату його doręczenie, кінцевий строк доброчільного виїзду та дату подання wniosek; збережіть підтвердження передачі заяви через належний орган.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-334a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 334a зобов’язує Komendant Główny Straży Granicznej niezwłocznie, але не пізніше 5 днів від подання wniosek, видати postanowienie про udzielenie pomoc w dobrowolnym powrocie; на нього zażalenie не належить, а про postanowienie або залишення wniosku без rozpoznania треба повідомити Szefa Urzędu.",
          sourceLocator: "Art. 334a ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає короткий строк для рішення про допомогу у добровільному поверненні, відсутність zażalenie на це postanowienie та обов’язок повідомити Szef Urzędu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Postanowienie видається niezwłocznie, але не пізніше 5 днів від подання wniosek; закон прямо виключає zażalenie.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для doręczanie застосовується Art. 322, а Szef Urzędu інформується не пізніше 48 годин про postanowienie або залишення wniosek без розгляду.",
        },
      ],
      legalEffect:
        "Норма встановлює процесуальний строк і спосіб повідомлення; відсутність zażalenie за цією статтею не означає, що будь-яке інше рішення не має окремого засобу оскарження.",
      foreignersCase:
        "Відлічуйте 5 днів від подання wniosek і перевірте спосіб doręczenie; якщо заяву залишили без розгляду, з’ясуйте фактичну причину та окремий доступний правовий засіб.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-335",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 335 перелічує витрати, які може охоплювати pomoc w dobrowolnym powrocie, визначає джерело фінансування та обов’язок органу поінформувати іноземця.",
          sourceLocator: "Art. 335 ust. 1–3",
        },
      ],
      summary:
        "Допомога може охоплювати безпечну й гуманну організацію повернення: дорогу, документи, харчування, проживання, медичну допомогу та інші прямо названі витрати.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перелік включає подорож, адміністративні платежі за документ подорожі та візи, харчування, проживання перед подорожжю, медичну допомогу й організаційні витрати.",
        },
        {
          locator: "ust. 1a–2",
          explanation:
            "Не покриваються витрати, які вже фінансуються як pomoc socjalna та opieka medyczna за Art. 70 відповідного закону про ochronę; фінансування йде з budżet państwa.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Орган, який видає визначені рішення, має повідомити іноземця про можливість скористатися допомогою.",
        },
      ],
      legalEffect:
        "Стаття визначає можливі компоненти допомоги, а не фіксовану виплату чи автоматичне відшкодування кожної витрати.",
      foreignersCase:
        "Попросіть уточнити, які саме витрати погоджені, хто їх оплачує і які витрати вже покриваються в іншій процедурі; не ототожнюйте інформаційний обов’язок із гарантією допомоги.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-335a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 335a дозволяє надавати pomoc w reintegracji після добровільного повернення, своєчасного виїзду або примусового виконання рішення; допомога надається на wniosek і тому самому іноземцю лише один раз.",
          sourceLocator: "Art. 335a ust. 1–7",
        },
      ],
      summary:
        "Після повернення Komendant Główny Straży Granicznej може організувати підтримку утримання та reintegracja в державі повернення, якщо є одна з передбачених законом підстав.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Підставами є надана pomoc w dobrowolnym powrocie, виїзд у строк dobrowolnego wyjazdu або примусове виконання рішення. Потрібен wniosek, а допомога можлива лише один раз.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Komendant може доручити виконання іншому суб’єкту; обсяг świadczenia визначає цей суб’єкт за договором і в межах доручення.",
        },
        {
          locator: "ust. 7",
          explanation:
            "Витрати фінансуються з budżet państwa через кошти Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма відкриває можливість reintegracja, але не встановлює для кожного іноземця гарантований обсяг або вид świadczenia.",
      foreignersCase:
        "Якщо особа планує wniosek, зафіксуйте підставу повернення, дату виїзду та чи використовувалася така допомога раніше; конкретний пакет підтримки треба підтвердити окремо.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-336",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 336 передбачає встановлення kosztów wydania i wykonania decyzji o zobowiązaniu cudzoziemca do powrotu, якщо рішення підлягає примусовому виконанню, та їх визначення окремою decyzja.",
          sourceLocator: "Art. 336 ust. 1–3",
        },
      ],
      summary:
        "Коли рішення про повернення виконують примусово, орган визначає пов’язані з ним витрати та осіб, які мають їх покрити.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation:
            "Витрати встановлюються для рішення, що підлягає przymusowe wykonanie; їх не встановлюють, коли особі з Art. 334 ust. 2 pkt 2 надали допомогу в добровільному поверненні.",
        },
        {
          locator: "ust. 2–2a",
          explanation:
            "Відповідний орган Straż Graniczna видає decyzja про суму та відповідальних суб’єктів. Рішення підлягає natychmiastowe wykonanie; за загальним правилом витрати визначають після остаточності рішення про повернення.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Належності за витратами przedawniają się через 5 років від кінця календарного року, в якому decyzja про суму стала остаточною.",
        },
      ],
      legalEffect:
        "Окрема decyzja про витрати створює грошову вимогу, але її сума й відповідальна особа мають випливати з конкретного рішення та Art. 337–339.",
      foreignersCase:
        "Не змішуйте decyzja o powrocie з decyzja o kosztach: перевірте склад суми, дату остаточності, негайне виконання та строк odwołanie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-337",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 337 визначає, хто несе koszty з Art. 336: за загальним правилом cudzoziemiec, а в окремих випадках zapraszający, podmiot powierzający pracę або функцію, jednostka naukowa чи organizator stażu.",
          sourceLocator: "Art. 337 ust. 1–6",
        },
      ],
      summary:
        "Витрати примусового повернення зазвичай покладаються на іноземця, але закон переносить їх на запрошуючого, роботодавця або приймаючу установу в чітко визначених ситуаціях.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Cudzoziemiec є основним боржником; zapraszający відповідає, коли іноземець прибув у період zaproszenie і підстави повернення виникли в охоплений законом час.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Podmiot powierzający pracę cudzoziemcowi або pełnienie określonej funkcji несе витрати у зв’язку з Art. 302 ust. 1 pkt 4; якщо таких суб’єктів кілька, вони відповідають solidarnie.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Jednostka naukowa або organizator stażu несе витрати, якщо decyzja була видана й виконана протягом 6 місяців після завершення відповідної угоди, а підставою було перебування без чинної візи (якщо потрібна) або іншого чинного документа, що дає право на wjazd і pobyt.",
        },
      ],
      legalEffect:
        "Відповідальність третьої особи залежить від усіх фактичних умов конкретного пункту; сам факт запрошення, роботи або стажу не є достатнім без перевірки норми.",
      foreignersCase:
        "Зіставте decyzja, підставу з Art. 302 ust. 1 pkt 4, період zaproszenie або umowa та дані всіх podmiotów; не припускайте солідарну відповідальність поза Art. 337.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-338",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 338 перелічує види kosztów, що входять до Art. 336, і встановлює мінімальні добові ставки для pobyt у приміщенні для затриманих та strzeżony ośrodek або areszt.",
          sourceLocator: "Art. 338 ust. 1–2",
        },
      ],
      summary:
        "До витрат повернення можуть входити адміністративне провадження, затримання, перебування під охороною, медичні послуги, транзит та доставлення до кордону або порту.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4a",
          explanation:
            "Закон називає витрати провадження, перебування в місці для затриманих, strzeżony ośrodek або areszt, медичне обстеження та медичну/психологічну опіку (pkt 1–4a). До складу також входять визначені види doprowadzenie, czynności з Art. 325 і доправлення до кордону або порту (pkt 5a–6).",
        },
        {
          locator: "ust. 1 pkt 5–6",
          explanation:
            "Також охоплюються pomoc іншої держави ЄС під час tranzyt drogą powietrzną (pkt 5), doprowadzenie до названих місць або органів і czynności з Art. 325 (pkt 5a–5b), а також doprowadzenie до кордону чи порту (pkt 6).",
        },
        {
          locator: "ust. 2",
          explanation:
            "Витрати перебування визначаються ryczałt; мінімум становить 30 zł за день у приміщенні для затриманих і 20 zł за день у strzeżony ośrodek або areszt.",
        },
      ],
      legalEffect:
        "Стаття дає рамку складу витрат, але конкретна сума має бути обґрунтована рішенням і застосованими правилами розрахунку.",
      foreignersCase:
        "Перевірте кожен рядок decyzja o kosztach за категоріями Art. 338, кількість днів і застосовану ставку; не вважайте мінімальну ставку загальною фіксованою сумою.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-339",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 339 доручає міністру внутрішніх справ у porozumieniu з міністром фінансів визначити розрахунок витрат доправлення та добові ryczałt витрат перебування.",
          sourceLocator: "Art. 339 ust. 1–2",
        },
      ],
      summary:
        "Детальні формули й ставки витрат повернення мають бути встановлені rozporządzenie, а закон визначає фактори, які треба враховувати.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Rozporządzenie визначає спосіб обчислення доправлення до кордону або порту та розмір добових ryczałt у місці затримання, strzeżony ośrodek або areszt.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Під час нормотворення враховуються вид транспорту, кількість супроводжувачів, довжина маршруту, харчування та проживання.",
        },
      ],
      legalEffect:
        "Стаття є делегацією для розрахункових правил; конкретну суму треба звіряти з чинним rozporządzenie та decyzja, а не лише з Art. 339.",
      foreignersCase:
        "У спорі про суму витрат попросіть вказати чинний нормативний акт і формулу, використані органом; окремо перевірте маршрут, транспорт і кількість днів.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-340",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 340 дозволяє органу, який видав decyzja про wysokość kosztów з Art. 336 ust. 1, змінити її, якщо витрати змінилися після видання рішення; decyzja виконується негайно.",
          sourceLocator: "Art. 340",
        },
      ],
      summary:
        "Сума витрат може бути змінена тим самим компетентним органом, коли після первісного рішення фактичні витрати змінилися.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Потрібні дві умови: витрати належать до Art. 336 і вони змінилися після первісного рішення. Змінена decyzja підлягає natychmiastowe wykonanie.",
        },
      ],
      legalEffect:
        "Стаття не дозволяє довільно переглядати суму; зміна має бути пов’язана саме зі зміною витрат після видання рішення.",
      foreignersCase:
        "Порівняйте первісну та змінену decyzja, дату й підтвердження нових витрат; термін оскарження перевіряйте за Art. 341.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-341",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 341 визначає Komendant Główny Straży Granicznej як organ wyższego stopnia у справах про koszty з Art. 336 та встановлює 7-денний строк odwołanie.",
          sourceLocator: "Art. 341 ust. 1–2",
        },
      ],
      summary:
        "У спорах про суму витрат або її зміну вищим органом для командира відділу чи placówka Straży Granicznej є головний комендант SG.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Komendant Główny Straży Granicznej є organ wyższego stopnia щодо відповідного komendant oddziału або placówki у справах Art. 336.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Odwołanie від рішення подається протягом 7 днів від doręczenie decyzja.",
        },
      ],
      legalEffect:
        "Норма встановлює орган і строк оскарження, але не скасовує вимоги до змісту та способу подання odwołanie за KPA.",
      foreignersCase:
        "На копії decyzja зафіксуйте дату doręczenie, обчисліть 7 днів і подайте odwołanie через орган, який видав рішення, якщо саме так вказано в pouczenie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-342",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 342 передбачає адміністративне стягнення należności за koszty з Art. 336, допускає wszczęcie egzekucja без попереднього upomnienie та регулює невидачу й подальшу видачу tytuł wykonawczy.",
          sourceLocator: "Art. 342 ust. 1–4",
        },
      ],
      summary:
        "Належності за витратами повернення стягуються в адміністративному виконавчому провадженні, але орган може тимчасово не видавати виконавчий документ, якщо стягнення очевидно неефективне.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Застосовується ustawa o postępowaniu egzekucyjnym w administracji; провадження можна розпочати без попереднього doręczenie upomnienie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Tytuł wykonawczy не видають, якщо egzekucja була б безрезультатною або не дала б суми, більшої за витрати стягнення, зокрема за відсутності майна в Польщі.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Якщо обставини змінилися, орган має niezwłocznie видати tytuł wykonawczy.",
        },
      ],
      legalEffect:
        "Невидача tytuł wykonawczy за ust. 3 не анулює саму należność; за зміни обставин стягнення може бути розпочате.",
      foreignersCase:
        "Розрізняйте decyzja, що встановлює борг, і tytuł wykonawczy; якщо стягнення почалося, перевірте правову підставу та повідомлення виконавчого органу.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-343",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 343 дозволяє potrącenie витрат із грошей іноземця в depozyt strzeżony ośrodek або areszt, встановлює ryczałt, резерв коштів і мінімум 600 zł на кожного члена сім’ї.",
          sourceLocator: "Art. 343 ust. 1–7",
        },
      ],
      summary:
        "Якщо гроші іноземця перебувають на депозиті під час тримання, з них можуть покриватися витрати, але закон залишає визначену суму для поточних потреб сім’ї.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Potrącenie можливе, якщо витрати не перевищують суму, яку реально можна отримати. Протягом 14 днів від прийняття до ośrodek або areszt орган встановлює приблизний ryczałt.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Про ryczałt або його зміну повідомляють письмово; кошти до його розміру зберігаються до decyzja про суму витрат або potrącenie за Art. 344.",
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Залишається не менше 600 zł на кожного члена сім’ї, розміщеного в ośrodek або areszt; за продовження перебування цю суму можна збільшити на 100 zł за кожен додатковий місяць, якщо це виправдано поточними потребами.",
        },
      ],
      legalEffect:
        "Ryczałt є приблизною сумою для забезпечення вимоги, а не остаточним розрахунком витрат; остаточне potrącenie має спиратися на передбачене рішення.",
      foreignersCase:
        "Зіставте письмове повідомлення про ryczałt, склад сім’ї, строк перебування та залишок коштів; не підписуйте підтвердження без перевірки суми й перекладу.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-344",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 344 визначає орган, який здійснює potrącenie витрат, вказує, що potrącenie оформлюється postanowienie, і надає zażalenie до Komendant Główny Straży Granicznej.",
          sourceLocator: "Art. 344 ust. 1–4",
        },
      ],
      summary:
        "Списання витрат із депозиту здійснює орган, який встановив їх суму, окремим postanowienie, яке можна оскаржити zażalenie.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Potrącenie виконує орган Straż Graniczna, що видав рішення про суму витрат; воно оформлюється postanowienie, на яке можна подати zażalenie до Komendant Główny.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Якщо депозит у іноземній валюті, для potrącenie береться середній курс NBP за день перед виданням postanowienie.",
        },
      ],
      legalEffect:
        "Postanowienie про списання є окремим процесуальним актом; його не слід плутати з decyzja, яка первісно встановила розмір витрат.",
      foreignersCase:
        "Перевірте дату doręczenie postanowienie, валютний курс NBP і строк для zażalenie; збережіть виписку про депозит та розрахунок.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-345",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 345 дозволяє potrącenie należności за koszty із zabezpieczenie pieniężne з Art. 398 ust. 2 pkt 2, застосовуючи Art. 344, і забороняє повернення суми до рівня витрат, якщо борг не сплачено до виконання рішення.",
          sourceLocator: "Art. 345 ust. 1–2",
        },
      ],
      summary:
        "Грошове забезпечення, внесене у процедурі, може бути використане для покриття витрат повернення, якщо іноземець не сплатив їх до виконання decyzja.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До potrącenie із zabezpieczenie застосовуються правила Art. 344, зокрема форма postanowienie та зажаленє.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Сума zabezpieczenie до розміру витрат з decyzja Art. 336 ust. 2 не повертається, якщо należność не сплачена до часу виконання decyzja o powrocie.",
        },
      ],
      legalEffect:
        "Збереження забезпечення залежить від встановлених витрат і факту несплати; воно не є автоматичним штрафом поза межами цієї вимоги.",
      foreignersCase:
        "З’ясуйте, чи є вимога остаточно встановленою, який розмір zabezpieczenie утримується та чи було надіслано postanowienie за Art. 344.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-346",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 346 є скасованим: у тексті стоїть позначка «uchylony».",
          sourceLocator: "Art. 346",
        },
      ],
      summary:
        "Art. 346 скасовано, тому він не містить чинного правила про koszty або їх стягнення.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Позначка «uchylony» означає, що застосовувати цю статтю як самостійну підставу не можна.",
        },
      ],
      legalEffect:
        "Чинний правовий наслідок треба шукати в сусідніх нормах і чинному тексті закону, а не в Art. 346.",
      foreignersCase:
        "Якщо Art. 346 наведено у старому документі, перевірте дату документа та актуальну норму, яка регулює відповідне питання.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347 передбачає фінансування kosztów з budżet państwa, коли відповідальний суб’єкт не сплатив їх, неможливо провести potrącenie або стягнення в egzekucja.",
          sourceLocator: "Art. 347 ust. 1–2",
        },
      ],
      summary:
        "Держава може спочатку покрити витрати примусового повернення в названих законом випадках, але отримані суми залишаються доходом державного бюджету.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Budżet państwa покриває витрати, якщо боржник не сплатив, немає можливості списати гроші з депозиту або немає можливості стягнути вимогу в egzekucja.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Кошти, які надалі стягнули як należności за витратами, є доходом budżet państwa.",
        },
      ],
      legalEffect:
        "Бюджетне фінансування не ліквідує встановлену należność і не означає, що відповідальний суб’єкт автоматично звільнений від боргу.",
      foreignersCase:
        "Відокремлюйте джерело первісної оплати від того, на кого покладено koszty у decyzja; вимагайте розрахунок і документ про стягнення.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347a зобов’язує Komendant Główny Straży Granicznej внести дані іноземця до System Informacyjny Schengen для цілей Art. 3 ust. 1 rozporządzenia nr 2018/1860, якщо SG видав decyzja o zobowiązaniu do powrotu.",
          sourceLocator: "Art. 347a",
        },
      ],
      summary:
        "Після рішення SG про зобов’язання до повернення дані іноземця вносяться до SIS у передбачених правом ЄС цілях.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Внесення виконує Komendant Główny Straży Granicznej, а підставою є саме decyzja про повернення, видана komendant oddziału або placówki.",
        },
      ],
      legalEffect:
        "Внесення до SIS є окремою інформаційною дією, пов’язаною з рішенням про повернення; питання оновлення й видалення врегульовані Art. 347b–347g.",
      foreignersCase:
        "Перевірте копію decyzja, на підставі якої зроблено wpis, та відрізняйте SIS від польського реєстру; для зміни статусу шукайте підставу Art. 347c або Art. 347d.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347b вимагає перед wpis до SIS провести консультації з державою Schengen, яка видала іноземцю чинний документ побиту або довгострокову візу.",
          sourceLocator: "Art. 347b",
        },
      ],
      summary:
        "Якщо іноземець має чинний документ побиту або довгострокову візу іншої держави Schengen, Польща перед внесенням даних повинна звернутися до цієї держави для консультацій.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Komendant Główny Straży Granicznej звертається через Komendant Główny Policji до органу держави, яка видала документ, відповідно до Art. 10 rozporządzenia nr 2018/1860.",
        },
      ],
      legalEffect:
        "Консультація є міждержавною процедурою і сама по собі не визначає остаточний статус документа або рішення про повернення.",
      foreignersCase:
        "Повідомте орган про чинний dokument pobytowy або wizę іншої держави Schengen і додайте копію та дані чинності, якщо це ще не було враховано.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347c вимагає aktualizacja wpisu даних у SIS у випадках odwołanie, продовження строку виїзду, wstrzymanie виконання, невиконання за Art. 330 та окремих рішень органу або sąd administracyjny.",
          sourceLocator: "Art. 347c ust. 1–3",
        },
      ],
      summary:
        "Запис у SIS не є незмінним: його статус має оновлюватися, коли оскаржено рішення, продовжено добровільний виїзд, зупинено виконання або виникли інші передбачені обставини.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Оновлення робиться після wniesienia odwołanie від рішення, що не підлягає негайному виконанню (pkt 1), рішення другої інстанції про залишення рішення в силі (pkt 2), а також після продовження terminu dobrowolnego wyjazdu першою або другою інстанцією (pkt 3–4).",
        },
        {
          locator: "ust. 1 pkt 5–7",
          explanation:
            "Підставами також є wstrzymanie виконання органом або судом, невиконання рішення за Art. 330 ust. 1 та скасування або stwierdzenie nieważności рішення другої інстанції.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Правило про wstrzymanie діє також після скасування судового postanowienie або втрати wstrzymanie чинності; правило про Art. 330 застосовується, коли decyzja залишена в силі, але не підлягає виконанню на підставі Art. 330 ust. 1.",
        },
      ],
      legalEffect:
        "Оновлення SIS відображає процесуальний статус рішення, але саме по собі не скасовує decyzja o powrocie і не продовжує законний побут поза іншою підставою.",
      foreignersCase:
        "Після odwołanie або postanowienie про wstrzymanie збережіть документ і перевірте, чи передано його органу для aktualizacja SIS; окремо перевірте підставу легального pobyt.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347d визначає випадки usunięcie даних із SIS: скасування або недійсність рішення органом чи судом або виконання рішення про повернення.",
          sourceLocator: "Art. 347d pkt 1–4",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej видаляє запис SIS, коли рішення про повернення скасовано, визнано недійсним судом або органом, чи коли його виконано.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Видалення відбувається після відповідного рішення Komendant Główny, після stwierdzenie nieważności або після скасування decyzja судом адміністративним.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Виконання decyzja органу вищої інстанції або рішення SG про повернення також є підставою для usunięcie.",
        },
      ],
      legalEffect:
        "Видалення SIS за цією статтею прив’язане до переліченої події; воно не є самостійним способом оскаржити decyzja.",
      foreignersCase:
        "Підтвердіть, яка саме подія настала і чи є документ органу або суду; не ототожнюйте відсутність запису SIS з автоматичним правом на pobyt.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347e визначає Komendant Główny Straży Granicznej компетентним отримувати інформацію за Art. 6 ust. 1 і Art. 8 rozporządzenia nr 2018/1860 та називає орган для визначення środków за Art. 7 ust. 2.",
          sourceLocator: "Art. 347e ust. 1–2",
        },
      ],
      summary:
        "Стаття розподіляє польську компетенцію щодо інформації та заходів, пов’язаних із SIS за рішенням про повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Komendant Główny Straży Granicznej приймає інформацію, передбачену Art. 6 ust. 1 і Art. 8 rozporządzenia nr 2018/1860.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Środki за Art. 7 ust. 2 визначає командир oddziału або placówki, який видав decyzja, а після її підтвердження — Komendant Główny.",
        },
      ],
      legalEffect:
        "Норма визначає компетенцію органів, а не перелік нових підстав для повернення чи заборони в’їзду.",
      foreignersCase:
        "У запиті про SIS визначте, який польський орган приймав рішення і який саме захід оскаржується; не приписуйте Art. 347e повноважень, яких у ньому немає.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347f регулює консультації, коли інша держава Schengen планує видати або продовжити dokument pobytowy чи wizę długoterminową, а також дії після виявлення такого документа.",
          sourceLocator: "Art. 347f ust. 1–3",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej обмінюється інформацією з іншою державою Schengen, коли запис SIS перетинається з її документом побиту або довгостроковою візою.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Під час консультацій за Art. 9 орган передає іншій державі через Komendant Główny Policji інформацію про підстави та обставини decyzja о поверненні протягом 10 днів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо після wpis виявлено чинний документ іншої держави, польський орган звертається про консультації за Art. 11 і повідомляє державу, що виконує рішення, про результат.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Дані видаляються у визначених випадках: коли інша держава видає, має намір видати або продовжити документ чи візу, коли після консультацій повідомлено, що документ або віза не будуть відкликані, або коли особа набула громадянство держави ЄС, EFTA–ЄЕП чи Швейцарії.",
        },
      ],
      legalEffect:
        "Міждержавні консультації можуть вплинути на запис SIS, але не замінюють окремої оцінки чинності документа та польського рішення.",
      foreignersCase:
        "Надайте докази чинності іноземного документа і перевірте, чи орган провів потрібні консультації; очікування консультацій саме по собі не є дозволом залишатися.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 347g регулює wpis до SIS, коли рішення про повернення видав minister właściwy do spraw wewnętrznych за Art. 329a ust. 1, і відсилає до Art. 347c ust. 1 pkt 2 i 7 та Art. 347d–347f.",
          sourceLocator: "Art. 347g ust. 1–2",
        },
      ],
      summary:
        "Для спеціального рішення міністра у справах, пов’язаних із підозрою на терористичну або шпигунську діяльність, діють окремі правила внесення та подальшого опрацювання SIS.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Komendant Główny Straży Granicznej вносить дані до SIS на wniosek, якщо рішення про повернення видав міністр за Art. 329a ust. 1.",
        },
        {
          locator: "ust. 2",
          explanation:
            "До такого випадку відповідно застосовуються названі правила про актуалізацію, видалення та консультації.",
        },
      ],
      legalEffect:
        "Art. 347g не розширює самі підстави Art. 329a; він визначає SIS-наслідки вже виданого рішення.",
      foreignersCase:
        "З’ясуйте, чи рішення видано міністром саме за Art. 329a ust. 1, і відокремте питання SIS від оскарження рішення про повернення.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-348",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 348 вимагає udzielenie zgody na pobyt ze względów humanitarnych, якщо повернення до конкретної держави створювало б визначені ризики для прав за Konwencja o ochronie praw człowieka або істотний ризик для прав дитини.",
          sourceLocator: "Art. 348 pkt 1–3",
        },
      ],
      summary:
        "Гуманітарна згода пов’язана не з загальною складністю повернення, а з конкретною забороною повертати особу до держави, де виникнуть серйозні порушення базових прав.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Ризики охоплюють життя, свободу й особисту безпеку, tortury або нелюдське поводження, примусову працю, відсутність справедливого суду чи покарання без правової підстави.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Підставою може бути порушення права на сімейне або приватне життя за Konwencja o ochronie praw człowieka.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Для дитини враховується істотна загроза її психофізичному розвитку через порушення прав за Konwencja o prawach dziecka.",
        },
      ],
      legalEffect:
        "Норма вимагає оцінки країни повернення та конкретних фактів; посилання на загальну небезпеку без доказу відповідного ризику не гарантує zgoda.",
      foreignersCase:
        "Зберіть докази саме щодо держави можливого повернення, особистої ситуації, сім’ї та дитини; відокремте Art. 348 від умов pobyt tolerowany з Art. 351.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-349",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 349 зобов’язує відмовити у zgoda na pobyt ze względów humanitarnych за серйозних підстав щодо міжнародних злочинів, певних злочинів, загрози безпеці або участі в таких діях; в одному випадку відмова є fakultatywna.",
          sourceLocator: "Art. 349 ust. 1–2",
        },
      ],
      summary:
        "Навіть за обставин Art. 348 гуманітарну згоду не надають, коли наявні визначені законом серйозні безпекові або кримінальні підстави.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Обов’язкова відмова охоплює міжнародні злочини, дії проти цілей і принципів ООН та злочин за польським правом або дію, яка є злочином за польським правом.",
        },
        {
          locator: "ust. 1 pkt 4–5",
          explanation:
            "Також відмовляють за загрозу оборонності, безпеці держави або громадському порядку чи за підбурювання/участь у названих злочинах.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Інший злочин, вчинений до приїзду, може бути підставою відмови, якщо особа виїхала з країни лише для уникнення покарання; тут закон формулює можливість, а не автоматизм.",
        },
      ],
      legalEffect:
        "Відмова потребує встановлення фактичних підстав і належного порогу доказування; сама підозра без оцінки матеріалів не замінює рішення органу.",
      foreignersCase:
        "Перевірте, який саме пункт Art. 349 наведено, чи йдеться про обов’язкову або можливу відмову та які докази орган поклав в основу висновку.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-350",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 350 встановлює обов’язкове cofnięcie zgody humanitarnej, коли зникає її підстава, виникає підстава відмови, виявляються істотні неправдиві дані, іноземець назавжди виїхав або повернувся до країни походження; за Art. 349 ust. 2 згода може бути відкликана.",
          sourceLocator: "Art. 350 ust. 1–2",
        },
      ],
      summary:
        "Гуманітарна згода не є безстроковою гарантією: її можуть або повинні відкликати, якщо змінилися підстави, поведінка чи важливі відомості.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Cofnięcie є обов’язковим, якщо обставини Art. 348 припинилися або змінилися так, що згода вже не потрібна, чи якщо після її надання виникла підстава відмови.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Підставами є приховування істотної інформації або фальшиві документи, постійний виїзд із Польщі чи повернення до країни походження.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Виявлення іншого вчинку з Art. 349 ust. 2 дозволяє, але не зобов’язує, відкликати згоду.",
        },
      ],
      legalEffect:
        "Cofnięcie припиняє дію zgoda за рішенням у відповідній процедурі; оцінюються факти після надання та достовірність первісних матеріалів.",
      foreignersCase:
        "Якщо отримано повідомлення про cofnięcie, визначте конкретний пункт Art. 350, перевірте докази зміни обставин і строк odwołanie у pouczenie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-351",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 351 встановлює підстави udzielenie zgody na pobyt tolerowany: ризики за Konwencja за наявності Art. 349, неможливість повернення з незалежних причин або юридичну недопустимість видачі до певної держави.",
          sourceLocator: "Art. 351 pkt 1–3",
        },
      ],
      summary:
        "Tolerowany pobyt є окремим режимом для ситуацій, коли повернення неможливе або юридично недопустиме, а гуманітарна згода не застосовується чи не може бути надана.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Ризик для прав у державі повернення оцінюється разом із наявністю обставин для відмови у гуманітарній згоді за Art. 349.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Підставою є невиконуваність повернення з причин, незалежних від компетентного органу та самого іноземця.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Згода можлива, коли видача до єдиної можливої держави заборонена судовим рішенням або розпорядженням Ministra Sprawiedliwości.",
        },
      ],
      legalEffect:
        "Вид режиму залежить від конкретної підстави; Art. 351 не дає автоматичного права на tolerowany pobyt через сам факт тривалого перебування чи складності повернення.",
      foreignersCase:
        "З’ясуйте, чи орган посилається на Art. 351 pkt 1, 2 або 3, хто перешкоджає поверненню та які документи підтверджують неможливість або юридичну заборону.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-352",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 352 вимагає відмовити у zgoda na pobyt tolerowany за Art. 351 pkt 2 або 3, якщо перебування може загрожувати оборонності, безпеці держави або охороні безпеки й громадського порядку.",
          sourceLocator: "Art. 352",
        },
      ],
      summary:
        "Навіть коли повернення неможливе або юридично заборонене за Art. 351 pkt 2–3, загроза безпеці може блокувати tolerowany pobyt.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Відмова за Art. 352 стосується саме випадків Art. 351 pkt 2 або 3 і потребує висновку про можливу загрозу державній або громадській безпеці.",
        },
      ],
      legalEffect:
        "Норма є обмеженням до двох підстав Art. 351; вона не поширює автоматично таку відмову на Art. 351 pkt 1.",
      foreignersCase:
        "Перевірте, чи рішення справді спирається на Art. 351 pkt 2 або 3, які матеріали підтверджують загрозу та чи пояснив орган причинний зв’язок.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-353",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 353 передбачає cofnięcie zgody na pobyt tolerowany decyzja, коли припинилася причина, іноземець виїхав, виникла загроза або він ухиляється від обов’язків з Art. 358 у відповідних випадках.",
          sourceLocator: "Art. 353 pkt 1–4",
        },
      ],
      summary:
        "Tolerowany pobyt може бути відкликаний, якщо зникає його підстава, іноземець залишає Польщу, виникає загроза або він ухиляється від покладених обов’язків.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Cofnięcie відбувається, коли припинилася причина надання згоди або іноземець залишив територію Польщі.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Для згоди на підставі Art. 351 pkt 2 або 3 підставою є також загроза оборонності, безпеці держави чи громадському порядку.",
        },
        {
          locator: "pkt 4",
          explanation:
            "У відповідних справах згоду відкликають, якщо іноземець ухиляється від обов’язків з Art. 358.",
        },
      ],
      legalEffect:
        "Відкликання оформлюється decyzja; треба встановити, яка саме підстава згоди діяла і чи застосовний відповідний пункт Art. 353.",
      foreignersCase:
        "Дотримуйтеся обов’язку zgłaszanie та повідомлення про адресу; при cofnięcie перевірте факти виїзду, загрози або порушення та строк odwołanie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-354",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 354 встановлює wygasanie z mocy prawa рішення про гуманітарну або tolerowany згоду після надання захисту, набуття громадянства, письмової відмови, stały pobyt, а для tolerowany також після гуманітарної згоди.",
          sourceLocator: "Art. 354 ust. 1–2",
        },
      ],
      summary:
        "Рішення про ці види згоди може припинитися автоматично за законом, коли виникає сильніший або несумісний правовий статус.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Вигасання настає при status uchodźcy, ochronа uzupełniająca, польське громадянство, письмове повідомлення про відмову від права або zezwolenie na pobyt stały.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Рішення про tolerowany pobyt додатково втрачає силу з дня надання zgoda na pobyt ze względów humanitarnych.",
        },
      ],
      legalEffect:
        "Вигасання за законом відрізняється від cofnięcie рішення: вирішальною є дата події, прямо названої в Art. 354.",
      foreignersCase:
        "Встановіть дату надання нового статусу, громадянства або письмової відмови й перевірте, який документ побиту після цього є чинною підставою.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-355",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 355 визначає komendant oddziału або placówki Straży Granicznej компетентним у справах Art. 348 і 351, Komendant Główny — organ wyższego stopnia, а odwołanie подається протягом 7 днів.",
          sourceLocator: "Art. 355 ust. 1–3",
        },
      ],
      summary:
        "У справах про гуманітарну та tolerowany згоду рішення в першій інстанції приймає відповідний орган SG, а апеляційним органом є Komendant Główny.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Компетентним є комендант відділу або placówki SG; щодо нього органом вищого ступеня за KPA є Komendant Główny Straży Granicznej.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Odwołanie від рішення за Art. 348 або 351 подається протягом 7 днів від doręczenie decyzja.",
        },
      ],
      legalEffect:
        "Стаття визначає інстанційність і короткий строк; зміст odwołanie та спосіб його подання треба звірити з pouczenie і KPA.",
      foreignersCase:
        "Зафіксуйте дату вручення decyzja, обчисліть 7 днів і в odwołanie окремо опишіть докази ризику, неможливості або юридичної заборони повернення.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-356",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 356 пов’язує виявлення обставин Art. 348 або Art. 351 із наданням відповідної згоди в decyzja про відмову від zobowiązanie do powrotu, а після остаточного рішення передбачає окреме провадження з urzędu.",
          sourceLocator: "Art. 356 ust. 1–5",
        },
      ],
      summary:
        "Орган не повинен обмежитися питанням повернення, якщо в процедурі виявив гуманітарну або tolerowany підставу: закон визначає, яку згоду слід розглянути.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "За Art. 348 у рішення про відмову від повернення надається zgoda humanitarna, крім підстав Art. 349; за Art. 351 pkt 1 — tolerowany згода після відмови в гуманітарній.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Якщо обставина з’ясувалася після остаточного рішення або під час виконання рішення іншої держави ЄС, провадження щодо згоди розпочинається окремо з urzędu.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "За Art. 351 pkt 3 zgoda надається на wniosek; у випадках ust. 2 компетентним є орган SG, який видав рішення про повернення.",
        },
      ],
      legalEffect:
        "Норма координує два провадження, але не означає, що будь-яке клопотання автоматично зупиняє повернення або гарантує згоду.",
      foreignersCase:
        "Порівняйте дату й стадію decyzja o powrocie з моментом появи нової обставини; перевірте, чи орган відкрив окреме провадження та чи потрібен wniosek.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-357",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 357 визначає орган у справах cofnięcie zgody humanitarnej або tolerowany, передбачає wszczęcie з urzędu, роль Policja/ABW, орган вищого ступеня та 7-денний строк odwołanie.",
          sourceLocator: "Art. 357 ust. 1–4",
        },
      ],
      summary:
        "Процедуру відкликання згоди веде орган SG, який її надав, а за згодою Komendant Główny — орган за місцем перебування іноземця.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Компетентним є орган, який надав згоду; якщо її надав Komendant Główny, справу веде орган SG за місцем pobyt іноземця.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Провадження починається з urzędu; якщо побут може бути загрозою, wniosek про початок може подати комендант воєводської Policja або Szef ABW.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Organem wyższego stopnia є Komendant Główny, а odwołanie подається протягом 7 днів від doręczenie decyzja.",
        },
      ],
      legalEffect:
        "Процедура може початися без заяви іноземця; це не скасовує його права бути повідомленим, брати участь і оскаржити рішення.",
      foreignersCase:
        "Встановіть, хто видав первісну згоду, хто відкрив cofnięcie та на якій підставі; не пропустіть 7-денний строк odwołanie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-358",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 358 зобов’язує особу з zgoda na pobyt tolerowany регулярно zgłaszać się до вказаного органу Straż Graniczna та повідомляти про кожну зміну місця проживання.",
          sourceLocator: "Art. 358",
        },
      ],
      summary:
        "Рішення про tolerowany pobyt містить постійний процедурний обов’язок контактувати з SG і повідомляти актуальну адресу.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Іноземець зобов’язаний з’являтися через визначені в рішенні проміжки до відповідного komendant та інформувати його про кожну зміну місця проживання.",
        },
      ],
      legalEffect:
        "Невиконання цього обов’язку може стати підставою cofnięcie згідно з Art. 353 pkt 4 у відповідному випадку.",
      foreignersCase:
        "Перепишіть із decyzja орган, адресу та періодичність zgłaszanie, зберігайте підтвердження явки й негайно документуйте зміну адреси.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 359 вимагає перед наданням гуманітарної або tolerowany згоди отримати інформацію від Policja, ABW та за потреби інших органів, встановлює строки 30 днів або до 60 робочих днів і правило про виконання вимоги за відсутності відповіді.",
          sourceLocator: "Art. 359 ust. 1–6",
        },
      ],
      summary:
        "Перед рішенням SG перевіряє безпекові та інші обставини через компетентні служби, але затримка відповіді в межах установлених строків не повинна безмежно блокувати процедуру.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Для гуманітарної згоди запитують про підстави Art. 349, а для tolerowany — про можливу загрозу оборонності, безпеці держави або громадському порядку.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Інформацію надають за 30 днів; у особливо обґрунтованих випадках строк може бути продовжений до 60 робочих днів. Якщо відповіді немає в строк, вимога отримання вважається виконаною.",
        },
        {
          locator: "ust. 5a–6",
          explanation:
            "У другій інстанції Komendant Główny може сам звернутися із запитом; для дитини до 13 років ust. 1–2 не застосовуються.",
        },
      ],
      legalEffect:
        "Відсутність відповіді служби після строку не є автоматичною позитивною відповіддю про безпеку та не визначає результат справи без іншої оцінки.",
      foreignersCase:
        "Відстежуйте дату запиту та закінчення строку, але зосередьте докази на власних обставинах; не вимагайте від іноземця доводити зміст внутрішньої перевірки служб.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 359a регулює дії польського органу через Komendant Główny Policji, якщо дані іноземця вже внесені до SIS іншою державою Schengen для відмови у в’їзді й побуті.",
          sourceLocator: "Art. 359a pkt 1–3",
        },
      ],
      summary:
        "Коли SIS-запис походить з іншої держави Schengen, польський орган має провести консультації або повідомити ту державу про рішення щодо повернення чи гуманітарної згоди.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Якщо іноземний запис пов’язаний із zakaz ponownego wjazdu, польський орган просить про консультації за Art. 9 ust. 1 rozporządzenia nr 2018/1860.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Орган повідомляє державу, що внесла дані, про рішення у справі повернення або гуманітарної згоди; якщо заборони в’їзду не було, повідомляється також намір або надання гуманітарної згоди.",
        },
      ],
      legalEffect:
        "Консультація та повідомлення не замінюють польського рішення та не роблять іноземний SIS-запис недійсним без дій компетентної держави.",
      foreignersCase:
        "З’ясуйте, яка держава внесла SIS-запис і чи супроводжується він zakaz ponownego wjazdu; ці факти визначають подальший канал консультацій.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 359b встановлює порядок і строки польської відповіді на консультації іншої держави Schengen за Art. 10 або 11 rozporządzenia nr 2018/1860, якщо іноземець має гуманітарну згоду.",
          sourceLocator: "Art. 359b ust. 1–4",
        },
      ],
      summary:
        "Якщо інша держава запитує про гуманітарну згоду іноземця, польський орган перевіряє підстави її відкликання та передає висновок через Policja у встановлені строки.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Орган, який надав zgoda humanitarna, перевіряє підстави cofnięcie і повідомляє Komendant Główny Policji про рішення або їх відсутність протягом 10 днів.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо 10 днів недостатньо, можна попросити іншу державу продовжити строк не більш як на 12 днів, навівши обґрунтування.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Komendant Główny Policji передає інформацію іншій державі протягом 14 днів від запиту або в продовжений строк.",
        },
      ],
      legalEffect:
        "Строки координують міждержавну консультацію, але не перетворюють її на автоматичне cofnięcie або збереження згоди.",
      foreignersCase:
        "Зберігайте чинне рішення про zgoda та докази відсутності підстав Art. 350; у разі затримки вимагайте інформацію про стадію, не роблячи висновку про результат.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 359c вимагає при оцінці Art. 349 враховувати причини SIS-запису іншої держави та провести консультації за Art. 27 rozporządzenia nr 2018/1861, а також повідомити ту державу про гуманітарне рішення або намір.",
          sourceLocator: "Art. 359c ust. 1–2",
        },
      ],
      summary:
        "SIS-запис для відмови у в’їзді чи побуті є важливим матеріалом, але польський орган має оцінити його підстави та можливі загрози, а не просто механічно повторити чужий висновок.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "При Art. 349 враховуються причини wpis іншої держави та загрози за Art. 27 lit. d rozporządzenia nr 2018/1861.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Через Komendant Główny Policji польський орган проводить консультації за Art. 27 і повідомляє державу про рішення або намір надати гуманітарну згоду.",
        },
      ],
      legalEffect:
        "SIS-запис впливає на оцінку безпеки, але стаття не встановлює, що сам запис автоматично вирішує питання гуманітарної згоди.",
      foreignersCase:
        "Попросіть ідентифікувати державу, підставу та дату wpis; подайте докази помилки або зміни обставин, якщо запис не відображає актуальну ситуацію.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-360",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 360 дозволяє провести tranzyt drogą powietrzną після отримання zezwolenia центрального органу іншої держави ЄС, якщо міжнародна угода не передбачає іншого.",
          sourceLocator: "Art. 360",
        },
      ],
      summary:
        "Повітряний транзит через іншу державу ЄС для виконання повернення потребує попереднього дозволу її центрального органу, якщо договір не встановлює інший порядок.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Zezwolenie має надходити від centralny organ іншої держави ЄС; це стосується транзиту, а не самого рішення про повернення.",
        },
      ],
      legalEffect:
        "Стаття встановлює умову транзиту, але не гарантує, що інша держава надасть дозвіл або що переліт відбудеться.",
      foreignersCase:
        "У документах відокремте державу призначення від держави транзиту й перевірте, чи отримано окреме zezwolenie або діє міжнародний виняток.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-361",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 361 дозволяє розпочати транзит на підставі notyfikacja Komendant Główny Straży Granicznej, якщо центральний орган іншої держави не надав zezwolenie протягом 2 днів або протягом 48 годин після продовженого строку.",
          sourceLocator: "Art. 361 pkt 1–2",
        },
      ],
      summary:
        "Мовчання іншої держави після запиту в передбачені короткі строки може дозволити початок транзиту на підставі спеціальної нотифікації польського органу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перший строк — 2 дні від передачі wniosek центральному органу іншої держави ЄС.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Якщо інший орган продовжив строк розгляду, відлік для правила становить 48 годин після завершення названого строку.",
        },
      ],
      legalEffect:
        "Транзит на підставі notyfikacja є спеціальним винятком із вимоги Art. 360 і залежить від точно підтверджених дат запиту та строків.",
      foreignersCase:
        "Перевірте дату й спосіб передачі wniosek, повідомлення про продовження та саму notyfikacja; не вважайте мовчання доведеним без документів.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-362",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 362 визначає мету провадження про дозвіл іншої держави ЄС на повітряний транзит: виконання рішення про повернення, коли немає прямого авіасполучення з Польщі до держави призначення.",
          sourceLocator: "Art. 362",
        },
      ],
      summary:
        "Процедура транзитного дозволу використовується лише як практичний шлях виконання повернення, коли прямий рейс до держави призначення неможливий.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Провадження стосується дозволу центрального органу іншої держави на прохід через її аеропорт; підставою залишається рішення про zobowiązaniu do powrotu.",
        },
      ],
      legalEffect:
        "Art. 362 не створює нового статусу pobyt і не змінює зміст рішення про повернення; він регулює спосіб його виконання.",
      foreignersCase:
        "З’ясуйте, чому прямий рейс неможливий, яка держава є транзитною та яке рішення виконується; не плутайте цю процедуру з апеляцією.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-363",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 363 дозволяє в обґрунтованих випадках включити до wniosek про повітряний транзит осіб, відповідальних за іноземця, зокрема медичну опіку та перекладачів, разом названих eskortą.",
          sourceLocator: "Art. 363",
        },
      ],
      summary:
        "Заявка на транзит може охоплювати супровід іноземця, якщо це виправдано обставинами, наприклад потребою в медичній допомозі чи перекладі.",
      rules: [
        {
          locator: "całość",
          explanation:
            "До eskortа можуть належати особи, відповідальні за іноземця під час транзиту, зокрема медичний персонал і tłumacze.",
        },
      ],
      legalEffect:
        "Стаття дозволяє включення eskortа до wniosek, але не встановлює автоматичної згоди на кожну особу чи обов’язковість супроводу в кожній справі.",
      foreignersCase:
        "Якщо стан здоров’я або комунікація потребують супроводу, додайте до wniosek конкретне обґрунтування та документи, не розкриваючи зайвих персональних даних.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-364",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 364 дозволяє повторний wjazd до Польщі іноземцю, який виїхав у зв’язку з транзитом, якщо дозвіл відкликано або відмовлено, в’їзд до транзитної держави був без дозволу, виконання повернення не вдалося або транзит неможливий з іншої причини.",
          sourceLocator: "Art. 364 pkt 1–5",
        },
      ],
      summary:
        "Якщо повітряний транзит зривається або стає неможливим, закон передбачає дозвіл іноземцю знову в’їхати до Польщі в перелічених ситуаціях.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Підставами є відкликання або відмова в транзиті, початок транзиту за notyfikacja після відмови, а також в’їзд без дозволу до держави транзиту.",
        },
        {
          locator: "pkt 4–5",
          explanation:
            "Повторний wjazd передбачений, якщо примусове виконання або посадка не вдалися чи транзит неможливий з іншої причини.",
        },
      ],
      legalEffect:
        "Це спеціальна можливість повернення після невдалого транзиту, а не загальна віза чи нова підстава для довгострокового перебування.",
      foreignersCase:
        "Отримайте підтвердження причини невдалого транзиту та покажіть його Straż Graniczna; після повторного в’їзду окремо визначте чинну підставу pobyt.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-365",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 365 визначає, що провадження за Art. 362 починається на wniosek Komendant Główny Straży Granicznej до centralny organ іншої держави ЄС; wniosek містить дані або інформацію з Art. 13, а форма встановлюється rozporządzenie.",
          sourceLocator: "Art. 365 ust. 1–4",
        },
      ],
      summary:
        "Польський головний комендант SG офіційно звертається до центрального органу транзитної держави, використовуючи встановлені законом дані та форму.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Wniosek подає Komendant Główny до центрального органу іншої держави ЄС і включає дані іноземця або інформацію, визначену Art. 13.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Міністр внутрішніх справ визначає wzór formularza, враховуючи належну організацію транзиту та безпеку доправлення.",
        },
      ],
      legalEffect:
        "Норма визначає канал і мінімальний зміст міждержавного запиту; вона не замінює рішення іншої держави про zezwolenie.",
      foreignersCase:
        "Уточніть, чи wniosek подано компетентним органом, до якої держави й коли; персональні дані перевіряйте за документами та Art. 13.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-366",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 366 зобов’язує Komendant Główny Straży Granicznej передати wniosek про повітряний транзит центральному органу іншої держави щонайменше за 48 годин до початку транзиту, крім особливо термінових випадків.",
          sourceLocator: "Art. 366 ust. 1–2",
        },
      ],
      summary:
        "Запит про транзит треба подати завчасно, щоб інша держава могла його розглянути; для особливо термінових ситуацій закон передбачає виняток.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Звичайний мінімальний строк між doręczenie wniosek іншому центральному органу та початком транзиту становить 48 годин.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У szczególnie pilne przypadki правило 48 годин не застосовується.",
        },
      ],
      legalEffect:
        "Виняток із 48-годинного строку залежить від особливої терміновості; сама терміновість не означає автоматичної згоди на транзит.",
      foreignersCase:
        "Перевірте час фактичної передачі wniosek, планований початок транзиту та документовану причину терміновості.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-367",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 367 встановлює узгодження допомоги та способу транзиту з іншою державою, звичайну тривалість не більш як 24 години та можливість продовження ще на 48 годин.",
          sourceLocator: "Art. 367 ust. 1–2",
        },
      ],
      summary:
        "Під час транзиту Komendant Główny узгоджує з іншою державою, яка допомагає, конкретний порядок і часові межі супроводу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обсяг допомоги та спосіб транзиту узгоджуються з centralny organ іншої держави; транзит має тривати не довше 24 годин.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо завершити транзит у 24 години неможливо, строк можна узгоджено продовжити ще на 48 годин.",
        },
      ],
      legalEffect:
        "Строки стосуються організації транзиту, а не строку добровільного виїзду чи легального pobyt іноземця.",
      foreignersCase:
        "Попросіть зафіксувати узгоджений маршрут, час початку та підставу продовження; не плутайте організаційне продовження з новим дозволом перебування.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-368",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 368 покладає на budżet państwa koszty повторного в’їзду іноземця до Польщі та допомоги іншої держави ЄС під час повітряного транзиту.",
          sourceLocator: "Art. 368 ust. 1–2",
        },
      ],
      summary:
        "Витрати, безпосередньо пов’язані з повторним в’їздом після транзиту та допомогою іншої держави, фінансуються з державного бюджету через кошти головного коменданта SG.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До бюджетних витрат належать повторний wjazd іноземця до Польщі та допомога іншої держави ЄС під час tranzyt drogą powietrzną через її територію.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Фінансування здійснюється з частини budżet państwa, якою розпоряджається міністр внутрішніх справ, із коштів Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма визначає джерело оплати цих організаційних витрат, але не вирішує питання законності наступного pobyt іноземця.",
      foreignersCase:
        "Відокремте оплату повторного в’їзду від підстави перебування після нього та збережіть документи про причину й фактичні витрати транзиту.",
    },
  ],
})
