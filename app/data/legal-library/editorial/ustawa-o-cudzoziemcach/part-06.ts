import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export const foreignersActPart06 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-157l",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("157l", "Art. 157l")} делегує ministrowi właściwemu do spraw wewnętrznych визначити в drodze rozporządzenia мінімальну суму коштів для cudzoziemiec, який виконує świadczenia як wolontariusz, і членів сім'ї на його утриманні, для повернення або транзиту, а також документи для підтвердження цих коштів і коштів на utrzymanie за ${foreignersLaw.article("157g", "art. 157g")} ust. 1 pkt 1 lit. c.`,
            sourceLocator: "Art. 157l pkt 1–2",
          },
        ],
        summary:
          "Стаття є делегацією для підзаконного акта: конкретну суму та перелік документів для волонтера визначає не сама стаття.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Rozporządzenie має встановити кошти для cudzoziemiec і членів сім'ї, які перебувають на його утриманні, на подорож до держави походження або проживання чи транзит до третьої держави, що дозволить в'їзд; сума може залежати від держави, з якої прибув cudzoziemiec.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Документи мають підтверджувати можливість законно отримати кошти з pkt 1 і кошти на utrzymanie за ${foreignersLaw.article("157g", "art. 157g")} ust. 1 pkt 1 lit. c; критерій — ефективна перевірка такої можливості, а не довільна довідка.`,
          },
        ],
        legalEffect:
          "Норма уповноважує міністра видати правила, але сама не встановлює розмір коштів і не створює самостійного права на дозвіл.",
        foreignersCase:
          "Для заяви волонтера визначте дату справи, знайдіть застосовне rozporządzenie та подайте документи саме його виду; окремо підтвердьте кошти на utrzymanie і повернення для кожного утриманця.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-158",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("158", "Art. 158")} ust. 1 передбачає обов'язкове udzielenie zezwolenia na pobyt czasowy члену сім'ї obywatel Rzeczypospolitej Polskiej у двох випадках; ust. 2–3 регулюють kolejnego zezwolenia після визначених сімейних подій і максимальний строк.`,
            sourceLocator: "Art. 158 ust. 1–3",
          },
        ],
        summary:
          "Спеціальна підстава охоплює подружжя громадянина Польщі та визначену неповнолітню дитину, а також одноразовий дозвіл після окремих сімейних подій.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Заявник має перебувати у шлюбі, визнаному правом Польщі, з obywatel Rzeczypospolitej Polskiej; інший або невизнаний польським правом зв'язок не відповідає цьому пункту.",
          },
          {
            locator: "ust. 1 pkt 2",
            explanation:
              "Йдеться про małoletnie dziecko cudzoziemiec, який перебуває у визнаному польським правом шлюбі з громадянином Польщі та має сімейний pobyt czasowy або pobyt stały, наданий у зв'язку з цим шлюбом.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Kolejne zezwolenie надається після rozwód або separacja подружжю з ust. 1 pkt 1, якщо цього вимагає його ważny interes; після owdowienie такого подружжя окрема вимога про важливий інтерес не вказана; після смерті батька дитини з ust. 1 pkt 2 потрібен важливий інтерес дитини.",
          },
          {
            locator: "ust. 3",
            explanation:
              "У випадках ust. 2 дозвіл надається один раз і не довше ніж на 3 роки; це не означає безстрокове або автоматичне продовження.",
          },
        ],
        legalEffect:
          "За виконання фактичного складу стаття є спеціальною підставою для udzielenie, але наступне zezwolenie має обмеження ust. 2–3 і оцінюється в межах повного провадження.",
        foreignersCase:
          "Визначте, чи справа стосується подружжя, дитини або kolejnego zezwolenia; додайте акт цивільного стану, докази статусу польського громадянина та, після розлучення чи смерті, докази саме важливого інтересу, якщо він потрібен.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-158a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("158a", "Art. 158a")} передбачає udzielenie zezwolenia na pobyt czasowy дитині або батьку obywatel polski чи його małżonek, якщо громадянин Польщі живе в Польщі, регулярно їздить до іншої держави UE для роботи, а відсутність дозволу заважала б swoboda przepływu pracowników.`,
            sourceLocator: "Art. 158a pkt 1–2",
          },
        ],
        summary:
          "Це спеціальний режим для визначених дітей і батьків польського громадянина або його подружжя у транскордонній ситуації працівника.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Дитина obywatel polski або його małżonek має бути молодшою за 21 рік або перебувати на утриманні громадянина чи його подружжя; вік до 21 року не тотожний вимозі неповноліття.",
          },
          {
            locator: "pkt 2",
            explanation:
              "Батько obywatel polski або його małżonek має перебувати на утриманні цього громадянина чи подружжя.",
          },
          {
            locator: "умова щодо громадянина Польщі",
            explanation:
              "Громадянин Польщі повинен мешкати в Польщі та регулярно переміщатися з Польщі до іншої держави-члена UE для роботи там; потрібен причинний зв'язок між відсутністю дозволу і користуванням свободою руху працівників.",
          },
        ],
        legalEffect:
          "Громадянство родича саме по собі недостатнє: стаття вимагає конкретного родинного статусу, утримання або віку, транскордонної роботи та впливу на swoboda przepływu pracowników.",
        foreignersCase:
          "Для дитини або батька зберіть доказ родинного зв'язку, віку чи utrzymanie, проживання громадянина в Польщі та регулярних поїздок на роботу; не посилайтеся лише на польський паспорт родича.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-159",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("159", "Art. 159")} ust. 1 вимагає сукупного виконання трьох умов для zezwolenie na pobyt czasowy w celu połączenia się z rodziną; ust. 3–5 визначають членів сім'ї та спеціальні категорії родичів для uchodźca або особи з ochroną uzupełniającą.`,
            sourceLocator: "Art. 159 ust. 1–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("159", "Art. 159")} містить спеціальні винятки: для окремих сімей uchodźca або особи з ochroną uzupełniającą діє 6-місячний строк, для визначеної сім'ї в ust. 5 не застосовуються вимоги про дохід і житло, а для сім'ї власника Blue Card діє виняток щодо доходу та житла.`,
            sourceLocator: "Art. 159 ust. 2–2b, ust. 5",
          },
        ],
        summary:
          "Połączenie się z rodziną можливе лише за сукупності статусу osoby referencyjnej, родинного зв'язку та загальних умов, якщо конкретний виняток не скасовує дохід або житло.",
        rules: [
          {
            locator: "ust. 1 pkt 1 lit. a–i",
            explanation: foreignersLaw.text`Osoba referencyjna повинна мешкати в Польщі на одній із прямо перелічених підстав: pobyt stały, pobyt rezydenta długoterminowego UE, status uchodźca, ochrona uzupełniająca, визначений 2-річний ланцюг дозволів, дозволи з ${foreignersLaw.article("151", "art. 151")}, ${foreignersLaw.article("151b", "art. 151b")}, high-skilled work, ICT, mobility ICT, ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 7, права за Umowa Wystąpienia, long-term mobility Blue Card або zgoda na pobyt ze względów humanitarnych.`,
          },
          {
            locator: "ust. 1 pkt 2–3",
            explanation:
              "Заявник має мати ubezpieczenie zdrowotne, джерело stabilnego i regularnego dochodu на себе та утриманців і забезпечене місце проживання в Польщі. Умова про приїзд або перебування для połączenia з сім'єю також має бути встановлена.",
          },
          {
            locator: "ust. 2–2b",
            explanation: foreignersLaw.text`Вимоги про дохід і житло не застосовуються до сім'ї osoby зі status uchodźca або ochroną uzupełniającą, якщо заява подана протягом 6 місяців; також вони не застосовуються до сім'ї з ust. 5. Для сім'ї власника дозволу на mobility długoterminowa posiadacza Niebieskiej Karty UE виняток щодо dochód і житла діє лише коли сім'ю створено в державі, що видала Blue Card-документ.`,
          },
          {
            locator: "ust. 3–3b",
            explanation:
              "Звичайне поняття члена сім'ї охоплює визнане польським правом подружжя та визначених małoletnie dzieci, зокрема усиновлених; статус дитини визначається на день відповідної заяви, а для сім'ї uchodźca або ochroną uzupełniającą — за спеціальним правилом і 3-місячним строком.",
          },
          {
            locator: "ust. 4",
            explanation:
              "Для unaccompanied minor зі статусом uchodźca або ochroną uzupełniającą членом сім'ї може бути wstępny w linii prostej або повнолітня відповідальна особа за польським правом; потрібні умови щодо відсутності опіки та подання протягом 6 місяців, названі в нормі.",
          },
          {
            locator: "ust. 5",
            explanation:
              "Спеціально охоплено батька, якщо особа referencyjna була unaccompanied minor у день подання заяви на сімейний дозвіл, і брата або сестру, повністю та постійно залежних від батьків через тяжку хворобу, коли ці батьки вже належать до визначеної категорії та отримали дозволи.",
          },
        ],
        legalEffect:
          "Родинний зв'язок не гарантує zezwolenia: орган має перевірити статус osoby referencyjnej, усі сукупні умови, застосовний виняток і підстави відмови.",
        foreignersCase:
          "Складіть доказову схему: статус osoby referencyjnej, дата й мета połączenie, родинний зв'язок, страховка, dochód, житло та строковий виняток для захисту або Blue Card; окремо зафіксуйте, чи дитина була małoletnia у потрібний день.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-160",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("160", "Art. 160")} дозволяє udzielić zezwolenia na pobyt czasowy у шести спеціальних сімейних ситуаціях: залежний родич громадянина Польщі або визначеного громадянина UE/EFTA/Швейцарії, народжена під час чинного документа дитина, життя rodzinne та окремі випадки громадянина UK за Umowa Wystąpienia.`,
            sourceLocator: "Art. 160 pkt 1–6",
          },
        ],
        summary:
          "Стаття містить дискреційні сімейні підстави для обмежених категорій, а не загальне право кожного родича громадянина Польщі або UK.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Для родича громадянина Польщі, іншої держави UE, EFTA або Швейцарії потрібне спільне перебування в Польщі та залежність або спільне gospodarstwo domowe у державі прибуття, або серйозні причини здоров'я, що вимагають особистої опіки; додатково виконуються вимоги ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2.`,
          },
          {
            locator: "pkt 2",
            explanation:
              "Małoletnie dziecko іноземця має народитися під час чинності його national visa або pobyt czasowy; іноземець повинен виконати вимоги щодо ubezpieczenie, dochód і житло, перелічені у відповідній відсилці.",
          },
          {
            locator: "pkt 3",
            explanation:
              "Потрібне prowadzenie życia rodzinnego у розумінні ECHR з громадянином Польщі, UE, EFTA або Швейцарії, який мешкає в Польщі, спільне перебування та вимоги доходу й страхування з відповідної відсилки.",
          },
          {
            locator: "pkt 4–6",
            explanation: foreignersLaw.text`Пункти 4–6 стосуються визначеного громадянина UK з Umowa Wystąpienia: залежності або життя rodzinne, спільного перебування та, залежно від пункту, попереднього дозволу чи заяви до завершення okres przejściowy або умов ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2; pkt 6 додатково вимагає умов, названих у Umowa Wystąpienia.`,
          },
        ],
        legalEffect:
          "Формула «można udzielić» означає можливість після перевірки конкретного складу; статус родича та спільне проживання без інших умов не створюють автоматичного permit.",
        foreignersCase: foreignersLaw.text`Для ${foreignersLaw.article("160", "art. 160")} визначте точний pkt, статус і місце проживання osoby referencyjnej, залежність або реальне життя rodzinne, дати документів та умови Umowa Wystąpienia; не змішуйте pkt 4–6.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-161",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("161", "Art. 161")} ust. 1 передбачає udzielenie zezwolenia після щонайменше 5 років перебування на підставі дозволів для połączenia się z rodziną для подружжя або повнолітньої дитини cudzoziemiec з визначеним статусом; ust. 2 дає окрему підставу через ważny interes після сімейних подій.`,
            sourceLocator: "Art. 161 ust. 1–3",
          },
        ],
        summary:
          "Після п'ятирічного сімейного pobyt або після визначеної сімейної події заявник може перейти на окрему підставу, але має виконати названі вимоги.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation: foreignersLaw.text`Подружжя або dorosłe dziecko повинні відповідати ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2–3 і щонайменше 5 років перебувати на дозволах для połączenia się z rodziną. Статус osoby referencyjnej має походити з перелічених у ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. a–g, ha–i; для high-skilled work у lit. h допускається перебування особи referencyjnej в Польщі або іншій державі UE за умовами норми.`,
          },
          {
            locator: "ust. 2 pkt 1–3",
            explanation:
              "Для особи, яка вже має сімейний pobyt, дозвіл надається, якщо важливий інтерес виправдовує його після rozwód, separacja або owdowienie; також після смерті батька-сponsor або смерті małoletnie dziecko зі статусом uchodźca чи ochroną uzupełniającą.",
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`До строку в ust. 1 pkt 1 lit. b і pkt 2 lit. b зараховуються періоди, названі в ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1; це спеціальне правило підрахунку, а не автоматичне скасування інших умов.`,
          },
        ],
        legalEffect:
          "Стаття може дати самостійну сімейну підставу після тривалого побytu або важливої події, але не прибирає вимоги щодо доказів і точного статусу osoby referencyjnej.",
        foreignersCase:
          "Порахуйте лише релевантні дозволи для połączenie, перевірте 5-річний період і статус sponsor; для ust. 2 додайте акти про подію та конкретні докази важливого інтересу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-161a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("161a", "Art. 161a")} зобов'язує певних адресатів повідомити компетентний орган іншої держави UE та Szef Urzędu про намір члена сім'ї naukowiec користуватися mobilność krótkoterminowa або długoterminowa в іншій державі, але лише якщо право тієї держави вимагає такого повідомлення.`,
            sourceLocator: "Art. 161a",
          },
        ],
        summary:
          "Норма координує повідомлення про мобільність члена сім'ї дослідника між Польщею та іншою державою-членом UE.",
        rules: [
          {
            locator: "весь припис",
            explanation:
              "Ситуація передбачає члена сім'ї naukowiec з дозволом, пов'язаним з połączenie з родиною за відповідною підставою, і намір мобільності в іншій державі UE; обов'язок виникає лише за вимогою права держави призначення.",
          },
          {
            locator: "адресати повідомлення",
            explanation:
              "Повідомити можуть сам naukowiec, jednostka naukowa з місцезнаходженням у Польщі, де він проводить дослідження, або instytucja naukowa в іншій державі, де він має намір їх проводити. Кожен адресат названий у статті окремо.",
          },
        ],
        legalEffect:
          "Повідомлення є координаційною процедурною дією; воно не замінює право держави призначення визначити умови в'їзду та проживання і не є польським дозволом.",
        foreignersCase:
          "До переїзду перевірте право держави призначення, вид дозволу члена сім'ї та особу, яка має направити повідомлення; збережіть підтвердження повідомлення і не називайте його рішенням про дозвіл.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-161b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("161b", "Art. 161b")} ust. 1 передбачає обов'язкове udzielenie zezwolenia na pobyt czasowy w celu mobilności długoterminowej członka rodziny naukowca, якщо мета — проживання разом із мобільним naukowiec і виконані всі умови щодо документа дослідника, сімейного дозволу, страховки та коштів.`,
            sourceLocator: "Art. 161b ust. 1–4",
          },
        ],
        summary:
          "Long-term mobility permit члена сім'ї прив'язаний до документа дослідника, виданого іншою державою UE, та до попереднього сімейного статусу.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Naukowiec, з яким член сім'ї проживатиме або має проживати в Польщі, повинен мати документ pobyt, передбачений розпорядженням nr 1030/2002, або довгострокову візу з adnotacją «naukowiec», видані іншою державою UE.",
          },
          {
            locator: "ust. 1 pkt 2 lit. a",
            explanation:
              "Член сім'ї повинен мати дозвіл на pobyt для połączenie з родиною та пов'язаний із ним документ побytu, видані державою-членом, яка видала документ або візу naukowiec.",
          },
          {
            locator: "ust. 1 pkt 2 lit. b–c",
            explanation:
              "Потрібні ubezpieczenie zdrowotne і достатні кошти на utrzymanie та повернення до держави, яка видала документ або візу дослідника, або документи, що підтверджують можливість отримати ці кошти.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Після відрахування витрат на житло щомісячні кошти мають перевищувати поріг доходу для świadczenia pieniężne з pomocy społecznej щодо cudzoziemiec і кожного утриманця; до витрат входять щонайменше експлуатаційні платежі на кількість мешканців та комунальні послуги, перелічені у статті.",
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`Для коштів на повернення та документів про можливість отримати кошти застосовуються przepisy wydane na podstawie ${foreignersLaw.article("157", "art. 157")}; це відсилання не змінює вимогу про кошти в ust. 1 pkt 2 lit. c.`,
          },
        ],
        legalEffect:
          "Це похідний режим mobility: строк і право залежать від чинного статусу naukowiec та сімейного документа, а не лише від факту спорідненості.",
        foreignersCase:
          "Звірте документи дослідника і члена сім'ї, державу їх видачі, adnotacja «naukowiec», страховку, склад домогосподарства та розрахунок коштів після житлових витрат; кожну іноземну довідку перекладіть за вимогами органу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-162",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("162", "Art. 162")} встановлює строк дії сімейних та mobility-дозволів: до 1 року для випадку ${foreignersLaw.article("158a", "art. 158a")}, до строку документа osoby referencyjnej або максимум 3 років за ${foreignersLaw.article("159", "art. 159")}, до строку документа представника дитини, одноразово до 3 років у ${foreignersLaw.article("161", "art. 161")} ust. 2 і до строку дозволу дослідника за ${foreignersLaw.article("161b", "art. 161b")} ust. 1.`,
            sourceLocator: "Art. 162 ust. 1–4",
          },
        ],
        summary:
          "Строк не є довільним: він прямо прив'язаний до виду сімейної підстави та строку документа osoby referencyjnej або naukowiec.",
        rules: [
          {
            locator: "ust. 1–1a",
            explanation: foreignersLaw.text`За ${foreignersLaw.article("158a", "art. 158a")} дозвіл надається до 1 року. За ${foreignersLaw.article("159", "art. 159")} ust. 1 — до закінчення тимчасового дозволу osoby referencyjnej, а коли вона має pobyt stały, pobyt rezydenta długoterminowego UE, ochronę uzupełniającą, zgoda na pobyt ze względów humanitarnych або status uchodźca в Польщі — до 3 років.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Дозвіл за ${foreignersLaw.article("160", "art. 160")} pkt 2 діє до закінчення national visa або pobyt czasowy, наданих przedstawiciel ustawowy дитини.`,
          },
          {
            locator: "ust. 3–4",
            explanation: foreignersLaw.text`У випадку ${foreignersLaw.article("161", "art. 161")} ust. 2 дозвіл надається одноразово до 3 років. Дозвіл за ${foreignersLaw.article("161b", "art. 161b")} ust. 1 діє до закінчення дозволу на mobility długoterminowa відповідного naukowiec.`,
          },
        ],
        legalEffect:
          "Позитивне рішення не може надати строк, довший за межу, визначену для конкретної підстави та пов'язаного документа.",
        foreignersCase: foreignersLaw.text`Перед поданням випишіть дату закінчення документа osoby referencyjnej або naukowiec, статус підстави і можливий максимум; не просіть строк, який перевищує ${foreignersLaw.article("162", "art. 162")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-163",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("163", "Art. 163")} ust. 1 відсилає для визначення dochód у справі члена сім'ї до ${foreignersLaw.article("140", "art. 140")} ust. 2, а ust. 2 визнає вимогу стабільного і регулярного доходу виконаною, якщо utrzymanie покриває член сім'ї, зобов'язаний утримувати заявника і який мешкає в Польщі.`,
            sourceLocator: "Art. 163 ust. 1–2",
          },
        ],
        summary:
          "Дохід у family reunification рахується за спеціальним cross-reference, а джерелом може бути зобов'язаний утримувати родич у Польщі.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Не створюйте власний поріг доходу: застосуйте критерії та спосіб обчислення з ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Потрібно встановити одночасно обов'язок члена сім'ї утримувати заявника і його проживання в Польщі; просте переказування грошей або спільне проживання без цих фактів не є автоматичним доказом.",
          },
        ],
        legalEffect:
          "Стаття визначає спосіб виконання фінансової умови, але не скасовує саму вимогу доходу, документування та інших умов permit.",
        foreignersCase: foreignersLaw.text`Покажіть правову підставу обов'язку утримання, проживання sponsor у Польщі та стабільне джерело коштів; розрахунок зробіть за відповідним правилом ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-164",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("164", "Art. 164")} вимагає відмовити у zezwolenie з ${foreignersLaw.article("159", "art. 159")} ust. 1, якщо наявний будь-який випадок відмови з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 або 9.`,
            sourceLocator: "Art. 164",
          },
        ],
        summary:
          "Виконання умов reunification не усуває спеціально названих обов'язкових підстав відмови.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Орган має зіставити факти з конкретним пунктом ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 або 9; посилання лише на загальну «негативну обставину» недостатнє.`,
          },
        ],
        legalEffect: foreignersLaw.text`Це відсилання робить названі підстави ${foreignersLaw.article("100", "art. 100")} юридично релевантними саме для дозволу за ${foreignersLaw.article("159", "art. 159")} ust. 1; стаття не додає нового матеріального критерію.`,
        foreignersCase: foreignersLaw.text`Якщо рішення посилається на ${foreignersLaw.article("164", "art. 164")}, визначте точний пункт ${foreignersLaw.article("100", "art. 100")}, факт, який його підтверджує, і всі документи чи пояснення, що спростовують цей факт або показують застосовний виняток.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-165",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("165", "Art. 165")} встановлює спеціальні правила odmowa для сімейних permit: фіктивний шлюб, сплив документа naukowiec у mobility-справі та окремі винятки щодо нелегального pobyt і наступної заяви.`,
            sourceLocator: "Art. 165 ust. 1–4",
          },
        ],
        summary:
          "Стаття розмежовує фіктивний шлюб, відмову в long-term mobility family permit та захисні винятки для окремих сімейних заявників.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Поза випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5 відмовляють у сімейному дозволі польського громадянина або reunification permit подружжю, якщо шлюб укладено для обходу правил в'їзду, переїзду, pobyt або виїзду cudzoziemiec.`,
          },
          {
            locator: "ust. 1a",
            explanation: foreignersLaw.text`У дозволі за ${foreignersLaw.article("161b", "art. 161b")} ust. 1 відмовляють за випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8–9 або коли сплив строк документа pobyt чи довгострокової візи з adnotacją «naukowiec», виданих іншою державою UE для naukowiec, з яким перебуває член сім'ї.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Для kolejnego zezwolenia члену сім'ї польського громадянина або в połączenie з родиною не застосовується ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 8; виняток стосується лише саме наступного дозволу.`,
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`Особі з ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 2 або ${foreignersLaw.article("160", "art. 160")} pkt 2 не можна відмовити, якщо єдиною причиною є її нелегальний pobyt у Польщі.`,
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`Для члена сім'ї особи зі status uchodźca або ochroną uzupełniającą не застосовується ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9, якщо сім'я вже існувала в країні походження, а родич був у Польщі в день подання заяви на міжнародний захист sponsor.`,
          },
        ],
        legalEffect:
          "Винятки обмежені названими категоріями, наступною заявою та фактами; вони не скасовують інші прямо застосовні підстави відмови.",
        foreignersCase:
          "У рішенні розділіть перевірку реальності шлюбу, строку документа naukowiec, першої чи наступної заяви та легальності pobyt; для винятку підготуйте докази складу сім'ї та дат міжнародного захисту.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-166",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("166", "Art. 166")} встановлює обов'язкове cofnięcie окремих сімейних permit за умовами ${foreignersLaw.article("101", "art. 101")} та ${foreignersLaw.article("100", "art. 100")}, а для дозволу з ${foreignersLaw.article("161b", "art. 161b")} — окремий перелік підстав.`,
            sourceLocator: "Art. 166 ust. 1–2",
          },
        ],
        summary:
          "Після надання permit орган має відкликати його лише за фактичної обставини з конкретного переліку для відповідної категорії.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation: foreignersLaw.text`Дозвіл члену сім'ї obywatel Rzeczypospolitej Polskiej, який перебуває у шлюбі з цим громадянином, cofaється у випадках ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2 чи за обставиною ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 5.`,
          },
          {
            locator: "ust. 1 pkt 2",
            explanation: foreignersLaw.text`Так само cofaється permit для połączenie з родиною подружжю osoby referencyjnej з pobyt stały або pobyt rezydenta długoterminowego UE, якщо наявна одна з цих обставин.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Для permit за ${foreignersLaw.article("161b", "art. 161b")} ust. 1, крім ${foreignersLaw.article("101", "art. 101")} pkt 1, cofnięcie відбувається за обставиною ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8.`,
          },
        ],
        legalEffect:
          "Cofnięcie є окремим рішенням після udzielenie; самого сумніву недостатньо — орган має встановити передбачений для цієї категорії факт і застосувати точну норму.",
        foreignersCase: foreignersLaw.text`Після повідомлення про cofnięcie зіставте встановлені факти з точним пунктом ${foreignersLaw.article("100", "art. 100")} або ${foreignersLaw.article("101", "art. 101")}, перевірте докази та не переносіть перелік з іншої категорії permit.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-166a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Поза випадками з ${foreignersLaw.article("99", "art. 99")} ${foreignersLaw.article("166a", "Art. 166a")} вимагає odmowy wszczęcia postępowania щодо permit за ${foreignersLaw.article("161b", "art. 161b")} ust. 1, якщо на день заяви член сім'ї має дозвіл за ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż або просить чи вже має дозвіл за ${foreignersLaw.article("127", "art. 127")}.`,
            sourceLocator: "Art. 166a pkt 1–2",
          },
        ],
        summary:
          "Це правило стосується допустимості початку провадження, а не оцінки всіх матеріальних умов long-term mobility permit.",
        rules: [
          {
            locator: "частина вступна",
            explanation: foreignersLaw.text`Спочатку перевірте виняток «poza przypadkami» з ${foreignersLaw.article("99", "art. 99")}; лише поза ним діє обов'язок відмовити у wszczęciu.`,
          },
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Перешкодою на день подання є чинний дозвіл з ${foreignersLaw.article("139a", "art. 139a")} ust. 1, наданий для роботи як pracownik odbywający staż.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Такою перешкодою є також незавершена заява на дозвіл з ${foreignersLaw.article("127", "art. 127")} або вже наданий дозвіл за цією статтею. Вирішальною є ситуація саме в день подання.`,
          },
        ],
        legalEffect:
          "Odmowa wszczęcia припиняє розгляд на процесуальній стадії; вона відрізняється від merytoryczna odmowa після перевірки умов permit.",
        foreignersCase: foreignersLaw.text`Зафіксуйте всі дозволи й незавершені заяви члена сім'ї на дату подання, перевірте виняток з ${foreignersLaw.article("99", "art. 99")} і вимагайте від органу вказати, чому він обрав wszczęcie або odmowa wszczęcia.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-166b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("166b", "Art. 166b")} встановлює 30-денний строк для decyzja про permit w celu połączenia się z rodziną члена сім'ї osoby, яка живе в Польщі на дозволі довгострокової mobility posiadacza Niebieskiej Karty UE, та 60-денний строк для postępowanie odwoławcze; обчислення відсилається до ${foreignersLaw.article("112a", "art. 112a")}.`,
            sourceLocator: "Art. 166b ust. 1–2",
          },
        ],
        summary:
          "Для Blue Card family reunification діють спеціальні строки першої та апеляційної інстанції.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Рішення у справі члена сім'ї особи з permit на mobilność długoterminowa posiadacza Niebieskiej Karty UE видається протягом 30 днів; початок перебігу встановлюється за ${foreignersLaw.article("112a", "art. 112a")} ust. 2.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Postępowanie odwoławcze у справі про połączenie się z rodziną завершується протягом 60 днів, із застосуванням ${foreignersLaw.article("112a", "art. 112a")} ust. 5.`,
          },
        ],
        legalEffect: foreignersLaw.text`Строк визначає процесуальний обов'язок органу, але не перетворює його сплив на автоматичне udzielenie permit; повний розрахунок залежить від правил ${foreignersLaw.article("112a", "art. 112a")}.`,
        foreignersCase:
          "Збережіть підтвердження повного подання, wezwanie про braki та всі рішення; рахуйте строк за спеціальним правилом, а не лише календарною різницею між датами.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-167",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У провадженні про udzielenie або cofnięcie дозволу з ${foreignersLaw.article("159", "art. 159")} ust. 1 ${foreignersLaw.article("167", "Art. 167")} вимагає врахувати інтерес małoletnie dziecko, характер і сталість сімейних зв'язків у Польщі, період pobyt та зв'язки з державою походження.`,
            sourceLocator: "Art. 167 pkt 1–4",
          },
        ],
        summary:
          "У reunification-справі орган має оцінити чотири сімейні та соціальні фактори, а не лише формальні документи.",
        rules: [
          {
            locator: "pkt 1–2",
            explanation:
              "Інтерес дитини та характер і trwałość więzi rodzinne на території Польщі мають бути предметом реальної оцінки з урахуванням фактів, а не формальною згадкою.",
          },
          {
            locator: "pkt 3–4",
            explanation:
              "Орган враховує період перебування cudzoziemiec у Польщі та наявність сімейних, культурних і соціальних зв'язків із державою походження; стаття не встановлює наперед, який фактор переважає.",
          },
        ],
        legalEffect: foreignersLaw.text`Ці критерії є обов'язковою частиною оцінки надання або cofnięcie permit з ${foreignersLaw.article("159", "art. 159")} ust. 1, але самі по собі не замінюють його матеріальні умови.`,
        foreignersCase:
          "Подайте конкретні докази інтересу дитини, фактичного спільного життя, тривалості перебування та зв'язків із державою походження; у разі спору перевірте, чи орган відповів на кожен критерій.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-168",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("168", "Art. 168")} визначає, хто подає заяву за cudzoziemiec за межами Польщі, вимогу письмової згоди та повноваження, а також особливу właściwość wojewoda, коли сімейну заяву подано одночасно або протягом 3 днів із заявою sponsor.`,
            sourceLocator: "Art. 168 ust. 1–5",
          },
        ],
        summary:
          "Зазвичай заяву за члена сім'ї з-за кордону подає cudzoziemiec у Польщі; письмова згода визначає представництво, а дата двох заяв — компетентного wojewoda.",
        rules: [
          {
            locator: "ust. 1–3",
            explanation:
              "Заявник у Польщі — cudzoziemiec, до якого член сім'ї приїжджає. Для подання від імені особи за кордоном потрібна її письмова згода або згода przedstawiciel ustawowy, крім випадку, коли заявник сам є таким представником; згода одночасно є pełnomocnictwo у цьому провадженні.",
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`Якщо сімейну заяву для члена сім'ї особи з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 або ${foreignersLaw.article("139o", "art. 139o")} ust. 1 подано того самого дня або протягом 3 днів після заяви sponsor, рішення приймає wojewoda за siedziba jednostka przyjmująca.`,
          },
          {
            locator: "ust. 4a",
            explanation: foreignersLaw.text`Для члена сім'ї osoby, яка подає на permit з ${foreignersLaw.article("127", "art. 127")}, ${foreignersLaw.article("137a", "art. 137a")}, ${foreignersLaw.article("151", "art. 151")} ust. 1 або ${foreignersLaw.article("151b", "art. 151b")} ust. 1, за тієї самої умови 0–3 днів компетентним є wojewoda, який має видати permit sponsor.`,
          },
          {
            locator: "ust. 5",
            explanation: foreignersLaw.text`У випадках ust. 4 або 4a wojewoda вирішує сімейну заяву неzwłocznie після udzielenie або odmowa дозволу sponsor, названого у відповідній відсилці.`,
          },
        ],
        legalEffect:
          "Стаття регулює представництво, момент подання і właściwość органу; вона не доводить виконання матеріальних умов family reunification.",
        foreignersCase:
          "Зафіксуйте місце перебування кожного, письмову згоду, дату обох заяв і підставу permit sponsor; ці дані можуть визначити właściwość wojewoda та момент рішення.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-168a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("168a", "Art. 168a")} визначає, хто подає з Польщі заяву за cudzoziemiec за кордоном для permit з ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 або 6, і вимагає письмової згоди цього cudzoziemiec або його przedstawiciel ustawowy.`,
            sourceLocator: "Art. 168a ust. 1–3",
          },
        ],
        summary:
          "У визначених сімейних випадках заявником є особа referencyjna, яка живе в Польщі, а не іноземець, що перебуває за кордоном.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Заявником може бути obywatel polski, obywatel UE/EFTA/Швейцарії або визначений obywatel UK, який мешкає в Польщі і до якого cudzoziemiec приїжджає; правило охоплює лише ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 або 6.`,
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Подання від імені cudzoziemiec вимагає його письмової згоди або згоди його przedstawiciel ustawowy, якщо заявник не є таким представником; згода є pełnomocnictwo лише для цього postępowanie.",
          },
        ],
        legalEffect: foreignersLaw.text`Норма визначає процесуального заявника для окремих підстав ${foreignersLaw.article("160", "art. 160")}, але не замінює перевірку залежності, життя rodzinne, дат Umowa Wystąpienia чи інших матеріальних умов.`,
        foreignersCase: foreignersLaw.text`Додайте письмову згоду, підтвердження статусу й проживання особи в Польщі та документи, що показують точний pkt ${foreignersLaw.article("160", "art. 160")}; не подавайте загальну заяву «як родич».`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-169",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("169", "Art. 169")} зобов'язує орган перевірити, чи шлюб у справах з ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 1 або ${foreignersLaw.article("159", "art. 159")} ust. 3 pkt 1 укладено для обходу правил в'їзду та pobyt, а в окремих справах ${foreignersLaw.article("160", "art. 160")} — чи зв'язки є rzeczywiste i stałe.`,
            sourceLocator: "Art. 169 ust. 1–5",
          },
        ],
        summary:
          "Перевірка pozorne małżeństwo або реальності сімейного зв'язку є спеціальною частиною провадження, а не автоматичним висновком із одного документа чи відповіді.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Орган встановлює мету укладення шлюбу в справах, прямо названих у ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 1 та ${foreignersLaw.article("159", "art. 159")} ust. 3 pkt 1.`,
          },
          {
            locator: "ust. 2 pkt 1–7",
            explanation:
              "Зокрема перевіряються майнова вигода за шлюб, невиконання юридичних обов'язків подружжя, відсутність спільного проживання чи gospodarstwo domowe, відсутність зустрічі до шлюбу, незнання спільної мови, неузгодженість особистих та істотних даних і попередні pozorne małżeństwa. Це індикатори для оцінки, а не автоматичний доказ.",
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`У справах з ${foreignersLaw.article("160", "art. 160")} pkt 3, 5 або 6 орган встановлює, чи зв'язок з громадянином Польщі, UE/EFTA/Швейцарії або UK є rzeczywisty i stały.`,
          },
          {
            locator: "ust. 4–5",
            explanation: foreignersLaw.text`Орган може звернутися до komendant oddziału або placówki Straży Granicznej за місцем pobyt для дій з ${foreignersLaw.article("11", "art. 11")} ust. 1; під час встановлення за ust. 1–3 і цих дій ${foreignersLaw.article("79", "art. 79")} KPA не застосовується.`,
          },
        ],
        legalEffect:
          "Свідоцтво про шлюб не виключає спеціальної перевірки, але окремий неспівпадіння відповідей також не доводить обхід правил без оцінки всіх обставин.",
        foreignersCase:
          "Підготуйте докази реального спільного життя, господарства й історії стосунків, поясніть розбіжності та з'явіться на виклик органу або Straż Graniczna; не приховуйте попередні шлюби.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-169a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("169a", "Art. 169a")} детально регулює dopuszczalność mobilności krótkoterminowa члена сім'ї naukowiec у Польщі: потрібні мета спільного перебування, сімейний документ іншої держави UE, повне zawiadomienie jednostka naukowa та відсутність рішення Szef Urzędu o sprzeciwie протягом 30 днів.`,
            sourceLocator: "Art. 169a ust. 1–13",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Стаття визначає форму і зміст zawiadomienie, обов'язкові додатки та переклад, підстави sprzeciw, адресатів перевірки, строки 20 днів для інформації органів і 5 робочих днів для видалення даних з EES, якщо sprzeciw не видано.`,
            sourceLocator: "Art. 169a ust. 2–13",
          },
        ],
        summary:
          "Short-term mobility family scientist дозволена лише після повного повідомлення та перевірки документів; мовчання Szef Urzędu протягом 30 днів має значення тільки за виконання всіх умов.",
        rules: [
          {
            locator: "ust. 1 pkt 1–3",
            explanation:
              "Член сім'ї має їхати для проживання разом із naukowiec, який користується або планує short-term mobility; мати сімейний pobyt і пов'язаний документ, видані іншою державою UE, що видала документ або візу naukowiec; а Szef Urzędu має отримати повідомлення від затвердженої польської jednostka naukowa і не видати sprzeciw протягом 30 днів.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Zawiadomienie складається польською мовою, подається письмово на папері або електронно на адресу doręczenia електронного, і містить ідентифікаційні дані, паспорт, періоди досліджень, державу та строки документів naukowiec і члена сім'ї, страховку, кошти, дані обох наукових установ та підпис уповноваженої особи.",
          },
          {
            locator: "ust. 3–5",
            explanation: foreignersLaw.text`Jednostka naukowa додає доказ ubezpieczenie, достатніх коштів на utrzymanie і повернення в сумі за ${foreignersLaw.article("151", "art. 151")} ust. 1a та правилами на підставі ${foreignersLaw.article("157", "art. 157")}, а також сімейного дозволу й документа. Іноземні документи подаються з присяжним перекладом польською; 30-денний строк починається лише після doręczenie повного пакета і належного перекладу.`,
          },
          {
            locator: "ust. 6",
            explanation:
              "Szef Urzędu видає decyzja o sprzeciw, якщо сімейний документ не охоплює планований період, немає страховки або достатніх коштів, подані неправдиві чи фальшиві дані або документи, є запис у wykazie pobyt niepożądany чи SIS для відмови у в'їзді й pobyt, або цього вимагають оборона, безпека держави чи publiczny porządek.",
          },
          {
            locator: "ust. 7–10",
            explanation:
              "Для перевірки безпеки Szef Urzędu запитує Komendant Główny Straży Granicznej, Policji, Szef ABW та за потреби інші органи; інформацію передають протягом 20 днів. Непередання в строк вважається виконанням вимоги, а обмін може бути електронним.",
          },
          {
            locator: "ust. 11–13",
            explanation:
              "Decyzja o sprzeciw є ostateczna, про неї інформують державу, що видала сімейний документ, а за відсутності sprzeciw Szef Urzędu видаляє дані мобільного члена сім'ї з EES протягом 5 робочих днів.",
          },
        ],
        legalEffect:
          "Мобільність виникає з поєднання матеріальних умов, повного повідомлення та відсутності sprzeciw; сама передача повідомлення ще не дозволяє ігнорувати страховку, кошти або безпекові перешкоди.",
        foreignersCase:
          "Jednostka naukowa має зберегти доказ doręczenie повного повідомлення, присяжні переклади, страховку, кошти й строки обох документів; окремо відстежуйте 30-денний строк та остаточність можливого sprzeciw.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-169b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("169b", "Art. 169b")} встановлює обмін інформацією про мобільність члена сім'ї naukowiec: Szef Urzędu передає wojewoda дані та повідомлення, wojewoda передає копію decyzja o cofnięciu, а Szef Urzędu інформує органи інших держав UE про таке cofnięcie.`,
            sourceLocator: "Art. 169b ust. 1–3",
          },
        ],
        summary:
          "Стаття забезпечує зв'язок між польським wojewoda, Szef Urzędu та іншими державами, коли сімейний дозвіл дослідника використовується для мобільності.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл з ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. f, передбачені законом дані про cudzoziemiec, відповідне zawiadomienie та отриману від інших держав інформацію про sprzeciw щодо мобільності.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію рішення про cofnięcie дозволу з ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. f, якщо його власник користується short-term або long-term mobility члена сім'ї в іншій державі UE.`,
          },
          {
            locator: "ust. 3",
            explanation:
              "Szef Urzędu неzwłocznie передає органам держав UE, де cudzoziemiec користується мобільністю, інформацію про cofnięcie цього дозволу.",
          },
        ],
        legalEffect:
          "Обмін даними не є новим udzielenie чи cofnięcie permit; він повідомляє компетентні органи про вже надану або відкликану правову підставу.",
        foreignersCase:
          "У разі різних повідомлень звірте копію decyzja wojewoda, дані Szef Urzędu та державу фактичної мобільності; не вважайте передачу інформації самостійною підставою для відмови.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-169c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("169c", "Art. 169c")} зобов'язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie permit для mobilności długoterminowej члена сім'ї naukowiec, а Szef Urzędu — передати wojewoda визначену інформацію про цього cudzoziemiec.`,
            sourceLocator: "Art. 169c ust. 1–2",
          },
        ],
        summary:
          "Стаття створює двосторонній канал інформації для long-term mobility family permit.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Wojewoda передає Szef Urzędu копію рішення як про udzielenie, так і про cofnięcie відповідного permit; це охоплює обидва види результату.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Szef Urzędu передає wojewoda, який надав permit, дані про cudzoziemiec, визначені в реєстраційній нормі; стаття не встановлює нового матеріального критерію.",
          },
        ],
        legalEffect:
          "Передача копій і даних має обліковий та координаційний ефект і не замінює рішення про дозвіл або його відкликання.",
        foreignersCase:
          "Перевірте, чи передано правильну копію рішення та інформацію саме тому wojewoda; розбіжність у реєстрі виправляйте через орган, який сформував дані.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-170",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("170", "Art. 170")} встановлює обов'язок видати cudzoziemiec zaświadczenie, що підтверджує існування domniemanie, що він є ofiarą handlu ludźmi у розумінні Kodeks karny.`,
            sourceLocator: "Art. 170",
          },
        ],
        summary:
          "Zaświadczenie фіксує юридичне domniemanie статусу потенційної жертви handlu ludźmi; воно не є обвинувальним вироком і не встановлює всі умови permit.",
        rules: [
          {
            locator: "весь припис",
            explanation:
              "Адресатом є cudzoziemiec, щодо якого існує domniemanie handlu ludźmi за критеріями Kodeks karny; документ підтверджує саме domniemanie, а не остаточний результат кримінального провадження.",
          },
        ],
        legalEffect:
          "Видане zaświadczenie запускає спеціальні наслідки щодо legalny pobyt та строку документа за наступними статтями, але саме по собі не є zezwolenie na pobyt czasowy.",
        foreignersCase:
          "Перевірте, хто і на якій фактичній підставі видав zaświadczenie, його дату та строк; не замінюйте ним заяву на permit і не розкривайте чутливі дані потерпілої особи.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-171",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("171", "Art. 171")} вважає pobyt cudzoziemiec законним протягом строку чинності zaświadczenie з ${foreignersLaw.article("170", "art. 170")}, але припиняє цей ефект після внесення до реєстру інформації про добровільний контакт із підозрюваними або незаконний перетин кордону.`,
            sourceLocator: "Art. 171 ust. 1–3",
          },
        ],
        summary:
          "Zaświadczenie тимчасово легалізує pobyt, однак законність може припинитися раніше після спеціального запису міністра.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Побyt вважається legalny протягом строку чинності документа з ${foreignersLaw.article("170", "art. 170")}; вирішальним є строк самого zaświadczenie.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Legalny pobyt припиняється з моменту, коли minister właściwy do spraw wewnętrznych зафіксує в реєстрі, що cudzoziemiec активно, добровільно й з власної ініціативи відновив контакт із підозрюваними у handlu ludźmi або перетнув чи намагався перетнути кордон всупереч закону.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Інформацію для такого запису передає орган, який видав zaświadczenie; сам запис, а не лише припущення про поведінку, є моментом припинення легального pobyt.",
          },
        ],
        legalEffect:
          "До строку чинності та за відсутності передбаченого запису pobyt має спеціальний legalny статус; це не тотожне наданню карти побytu.",
        foreignersCase:
          "Зберігайте zaświadczenie та підтвердження його строку; якщо орган посилається на припинення legalny pobyt, вимагайте дату і правову підставу запису в реєстрі.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-172",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("172", "Art. 172")} визначає, що zaświadczenie з ${foreignersLaw.article("170", "art. 170")} видає organ właściwy до провадження у справі про злочин handlu ludźmi, і встановлює строк чинності 3 місяці або 4 місяці для małoletni cudzoziemiec.`,
            sourceLocator: "Art. 172 ust. 1–2",
          },
        ],
        summary:
          "Документ видає орган кримінального провадження, а його строк залежить від віку cudzoziemiec на момент видачі.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Zaświadczenie з ${foreignersLaw.article("170", "art. 170")} видає орган, компетентний вести провадження про відповідний злочин; не будь-який орган у справах іноземців має цю компетенцію.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Строк чинності — 3 місяці від дня видачі, а для małoletni cudzoziemiec — 4 місяці від дня видачі; це строк документа, а не загальний строк розгляду permit.",
          },
        ],
        legalEffect:
          "Після спливу визначеного строку заświadczenie більше не забезпечує наслідок legalny pobyt за статтею 171, якщо не існує іншої підстави.",
        foreignersCase:
          "На копії документа позначте день видачі та останній день 3- або 4-місячного строку; завчасно перевірте іншу підставу перебування, якщо провадження триває.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-173",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("173", "Art. 173")} зобов'язує organ, який веде провадження про злочин handlu ludźmi, письмово і зрозумілою cudzoziemiec мовою повідомити його про правила ${foreignersLaw.article("171", "art. 171")} та ${foreignersLaw.article("172", "art. 172")}.`,
            sourceLocator: "Art. 173",
          },
        ],
        summary:
          "Письмове pouczenie має пояснити потерпілому правові наслідки zaświadczenie та його строк зрозумілою мовою.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Обов'язок лежить на органі кримінального провадження; повідомлення повинно охопити зміст ${foreignersLaw.article("171", "art. 171")} про legalny pobyt і ${foreignersLaw.article("172", "art. 172")} про строк zaświadczenie та бути письмовим мовою, яку cudzoziemiec розуміє.`,
          },
        ],
        legalEffect:
          "Pouczenie забезпечує інформованість і не замінює видачу документа, доказ domniemanie або рішення про pobyt.",
        foreignersCase:
          "Попросіть копію письмового pouczenie зрозумілою мовою та звірте, чи воно охоплює legalny pobyt і строк документа; за потреби залучіть перекладача.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-174",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("174", "Art. 174")} зобов'язує орган, який видав cudzoziemiec zaświadczenie з ${foreignersLaw.article("170", "art. 170")}, повідомити про цей факт ministra właściwego do spraw wewnętrznych.`,
            sourceLocator: "Art. 174",
          },
        ],
        summary:
          "Стаття встановлює міжорганізаційне повідомлення про видачу заświadczenie.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Повідомлення надсилає саме орган-видавець документа з ${foreignersLaw.article("170", "art. 170")}; адресатом є minister właściwy do spraw wewnętrznych.`,
          },
        ],
        legalEffect:
          "Повідомлення забезпечує облік і не є окремим рішенням про legalny pobyt, permit або відповідальність cudzoziemiec.",
        foreignersCase:
          "У разі розбіжностей у даних встановіть, який орган видав zaświadczenie і чи саме він повідомив міністра; не вимагайте від cudzoziemiec замінити це міжорганізаційне повідомлення.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-175",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("175", "Art. 175")} уповноважує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia wzór zaświadczenia з ${foreignersLaw.article("170", "art. 170")}, з урахуванням мети його видачі та даних для підтвердження особи cudzoziemiec.`,
            sourceLocator: "Art. 175",
          },
        ],
        summary:
          "Форма заświadczenie визначається підзаконним актом, але його призначення та ідентифікаційні дані мають бути враховані.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Rozporządzenie визначає wzór документа з ${foreignersLaw.article("170", "art. 170")}; міністр має врахувати cel wydania та дані, що підтверджують особу, а не встановлювати нову матеріальну підставу потерпілого.`,
          },
        ],
        legalEffect:
          "Стаття є делегацією щодо форми документа і не змінює умови domniemanie, legalny pobyt або permit, встановлені іншими статтями.",
        foreignersCase:
          "Використовуйте актуальний wzór для дати видачі, перевірте правильність ідентифікаційних даних та не вважайте форму доказом, що автоматично підтверджує всі умови жертви.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-176",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("176", "Art. 176")} вимагає udzielenie zezwolenia na pobyt czasowy для ofiary handlu ludźmi, якщо вона перебуває в Польщі, співпрацює з organ właściwy у кримінальному провадженні, а якщо є małoletni — має статус pokrzywdzony, і розірвала контакти з підозрюваними у злочині.`,
            sourceLocator: "Art. 176 pkt 1–3",
          },
        ],
        summary:
          "Для дозволу жертві потрібні три сукупні умови: перебування в Польщі, співпраця або статус pokrzywdzony для дитини та розрив контактів із підозрюваними.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Cudzoziemiec має фактично перебувати на території Польщі; сама наявність zaświadczenie за попередньою статтею не замінює цю умову.",
          },
          {
            locator: "pkt 2",
            explanation:
              "Дорослий має podjąć współpracę з компетентним органом у провадженні про handlu ludźmi. Для małoletni закон замінює цю вимогу отриманням status pokrzywdzonego у відповідному провадженні.",
          },
          {
            locator: "pkt 3",
            explanation:
              "Потрібно zerwać kontakty з особами, підозрюваними у злочині; оцінюється фактична поведінка, а не лише письмова заява про намір.",
          },
        ],
        legalEffect:
          "За сукупного виконання трьох умов дозвіл надається за спеціальним режимом жертви; стаття не поширюється на будь-яку особу, яка лише заявляє про експлуатацію.",
        foreignersCase:
          "Безпечно зберіть документи про перебування, процесуальний статус або співпрацю та припинення контактів; не публікуйте ідентифікаційні дані потерпілої особи й не подавайте неперевірені твердження як факт.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-177",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("177", "Art. 177")} встановлює, що zezwolenie na pobyt czasowy для ofiary handlu ludźmi надається на період щонайменше 6 місяців.`,
            sourceLocator: "Art. 177",
          },
        ],
        summary:
          "Мінімальний строк спеціального дозволу жертві handlu ludźmi — 6 місяців; стаття сама не встановлює максимального строку.",
        rules: [
          {
            locator: "весь припис",
            explanation:
              "Орган визначає строк у межах закону, але не може надати цей вид permit менше ніж на 6 місяців; строк не слід плутати зі строком zaświadczenie.",
          },
        ],
        legalEffect:
          "Норма гарантує мінімальну тривалість наданого permit, але не продовжує автоматично його після закінчення і не скасовує можливого cofnięcie.",
        foreignersCase: foreignersLaw.text`Перевірте строк у decyzja: якщо permit видано менше ніж на 6 місяців, порівняйте його з ${foreignersLaw.article("177", "Art. 177")} і вчасно використайте доступний засіб оскарження.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-178",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У провадженні про permit для ofiary handlu ludźmi ${foreignersLaw.article("178", "Art. 178")} виключає застосування окремих перешкод wszczęcia з ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 4–6 та підстав відмови з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 3, 6–9.`,
            sourceLocator: "Art. 178",
          },
        ],
        summary:
          "Спеціальний режим жертви не застосовує вичерпно перелічені процедурні та відмовні перешкоди, але не всі можливі правила.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`У конкретному провадженні не застосовуються лише названі пункти ${foreignersLaw.article("99", "art. 99")} ust. 1 і ${foreignersLaw.article("100", "art. 100")} ust. 1; не можна розширювати виняток на інші пункти за аналогією.`,
          },
        ],
        legalEffect: foreignersLaw.text`Стаття полегшує доступ до розгляду в межах визначеного переліку, але не скасовує матеріальні умови ${foreignersLaw.article("176", "art. 176")} або інші правила, які прямо не виключені.`,
        foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("99", "art. 99")} або ${foreignersLaw.article("100", "art. 100")}, складіть таблицю «пункт — чи виключений ${foreignersLaw.article("178", "Art. 178")} — факт — доказ» і не приймайте загальне посилання без конкретизації.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-179",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("179", "Art. 179")} зобов'язує organ, який веде провадження про permit для ofiary handlu ludźmi, забезпечити cudzoziemiec, що недостатньо володіє польською, можливістю користуватися допомогою tłumacz.`,
            sourceLocator: "Art. 179",
          },
        ],
        summary:
          "У спеціальному провадженні орган має забезпечити перекладача, якщо знання польської мови недостатнє.",
        rules: [
          {
            locator: "весь припис",
            explanation:
              "Обов'язок виникає у organ prowadzący postępowanie і стосується можливості користуватися допомогою tłumacz; він не залежить від того, чи cudzoziemiec сам уже знайшов перекладача.",
          },
        ],
        legalEffect:
          "Норма захищає ефективну участь потерпілої особи у провадженні; порушення може мати процесуальне значення, але не означає автоматичного udzielenie permit.",
        foreignersCase:
          "Письмово повідомте орган про мову, якою особа реально спілкується, попросіть перекладача до важливих дій і збережіть доказ такого прохання.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-180",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("180", "Art. 180")} вимагає cofnięcie permit для ofiary handlu ludźmi, якщо настав випадок з ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2, зокрема припинилася співпраця або завершилося кримінальне провадження, або виникла обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5.`,
            sourceLocator: "Art. 180 pkt 1–2",
          },
        ],
        summary:
          "Спеціальний permit відкликається при припиненні мети співпраці або за окремими загальними обставинами, названими законом.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Cofnięcie відбувається у випадках ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2; як приклад стаття називає припинення współpraca з organ або завершення кримінального провадження.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Окремою підставою є хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5; орган має встановити її фактично.`,
          },
        ],
        legalEffect:
          "Cofnięcie є обов'язковим за встановлення точної законної обставини; сама зміна життєвої ситуації без зв'язку з переліченим пунктом недостатня.",
        foreignersCase: foreignersLaw.text`Після повідомлення про cofnięcie перевірте, чи справді завершилося провадження, припинилася співпраця або виник точний пункт ${foreignersLaw.article("100", "art. 100")}; подайте процесуальні документи й пояснення до строку оскарження.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-181",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("181", "Art. 181")} дозволяє udzielić cudzoziemiec, який перебуває в Польщі, zezwolenia na pobyt czasowy ze względu na okoliczności wymagające krótkotrwałego pobytu, якщо потрібна особиста явка перед польським органом, виняткова особиста ситуація або інтерес Польщі; строк — необхідний для мети, але не більше 6 місяців.`,
            sourceLocator: "Art. 181 ust. 1–3",
          },
        ],
        summary:
          "Це короткостроковий, дискреційний permit для особи, чия присутність у Польщі потрібна з однієї з трьох спеціальних причин.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Потрібна особиста явка cudzoziemiec перед польським органом władzy publicznej; заявник має показати конкретний обов'язок, а не загальне бажання залишитися.",
          },
          {
            locator: "ust. 1 pkt 2–3",
            explanation:
              "Альтернативними підставами є wyjątkowa sytuacja osobista або interes Rzeczypospolitej Polskiej, які вимагають присутності особи на території Польщі.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Строк дорівнює часу, необхідному для реалізації мети, і в будь-якому разі не перевищує 6 місяців.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Permit можна надати також у справі, де обставини не виправдовують перебування довше 3 місяців; це не скасовує вимогу довести одну з підстав ust. 1.",
          },
        ],
        legalEffect:
          "Формула «można udzielić» залишає оцінку органу в межах доведеної короткострокової мети; permit не є загальною альтернативою іншим підставам pobyt.",
        foreignersCase:
          "Додайте виклик або офіційний документ про дату явки, докази виняткової ситуації чи інтересу Польщі та обґрунтуйте потрібну тривалість; не просіть 6 місяців без пояснення мети.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-182",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У провадженні про permit з ${foreignersLaw.article("181", "art. 181")} ust. 1 ${foreignersLaw.article("182", "Art. 182")} виключає застосування ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 3, 6–8.`,
            sourceLocator: "Art. 182",
          },
        ],
        summary:
          "Для короткострокового permit закон не застосовує вичерпно перелічені перешкоди wszczęcia, але не всі правила про заяву.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Виняток стосується лише ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 3 і 6–8 у процедурі за ${foreignersLaw.article("181", "art. 181")} ust. 1; інші пункти ${foreignersLaw.article("99", "art. 99")} не виключені цією статтею.`,
          },
        ],
        legalEffect:
          "Відсутність застосування названих перешкод полегшує доступ до розгляду, але не доводить одну з матеріальних підстав короткострокового pobyt і не гарантує рішення.",
        foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("99", "art. 99")}, перевірте, чи його пункт належить до переліку ${foreignersLaw.article("182", "Art. 182")}; паралельно доведіть конкретну обставину за ${foreignersLaw.article("181", "art. 181")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-183",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("183", "Art. 183")} визначає обов'язковий збір wojewoda інформації про загрозу для оборони, безпеки держави або publiczny porządek у справі permit з ${foreignersLaw.article("181", "art. 181")} ust. 1, органи-адресати, строки 7 і 30 dni roboczych, правило про виконання вимоги та виняток для дитини до 13 років.`,
            sourceLocator: "Art. 183 ust. 1–6",
          },
        ],
        summary:
          "Стаття встановлює безпекову перевірку короткострокового permit і строки відповіді органів, включно з процедурою другої інстанції.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Wojewoda звертається до komendant oddziału Straży Granicznej, komendant wojewódzki Policji та Szef ABW; за потреби — до консул за останнім місцем проживання за кордоном або інших органів.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "Основний строк передачі інформації — 7 робочих днів; у szczególnie uzasadnione przypadki його можуть продовжити до 30 робочих днів, про що орган повідомляє wojewoda.",
          },
          {
            locator: "ust. 5–5a",
            explanation: foreignersLaw.text`Після спливу строку з ust. 3 або 4 вимога отримати інформацію вважається виконаною. Якщо Szef Urzędu у другій інстанції має намір надати permit з ${foreignersLaw.article("181", "art. 181")} і wojewoda не робив запиту, Szef Urzędu звертається сам, а правила про строки застосовуються відповідно.`,
          },
          {
            locator: "ust. 4a, 6",
            explanation:
              "Обмін може бути електронним. Увесь механізм ust. 1–5a не застосовується до cudzoziemiec, який на день відповідної оцінки не досяг 13 років.",
          },
        ],
        legalEffect:
          "Строкове непередання інформації не блокує вимогу назавжди, бо закон вважає її виконаною; це не є позитивним висновком про безпеку та не замінює матеріальну оцінку.",
        foreignersCase: foreignersLaw.text`Збережіть дату запиту, повідомлення про продовження та відповідь кожного органу; для дитини перевірте вік і чи справді ${foreignersLaw.article("183", "Art. 183")} не застосовується.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-184",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У дозволі з ${foreignersLaw.article("181", "art. 181")} ust. 1 ${foreignersLaw.article("184", "Art. 184")} вимагає відмовити cudzoziemiec у випадках ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1 і 3–5.`,
            sourceLocator: "Art. 184",
          },
        ],
        summary:
          "Короткострокова підстава не виключає чотири прямо названі обов'язкові підстави відмови.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Орган має перевірити конкретний факт із ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1, 3, 4 або 5; не можна додати інші пункти до цього спеціального переліку без окремої законної підстави.`,
          },
        ],
        legalEffect: foreignersLaw.text`Виконання умов ${foreignersLaw.article("181", "art. 181")} не долає застосовну обов'язкову відмову з ${foreignersLaw.article("100", "art. 100")} у межах пунктів, названих у ${foreignersLaw.article("184", "Art. 184")}.`,
        foreignersCase: foreignersLaw.text`У проєкті рішення або апеляції попросіть орган назвати точний пункт ${foreignersLaw.article("100", "art. 100")}, доказ і причинний зв'язок із вашою справою; окремо доводьте матеріальну підставу ${foreignersLaw.article("181", "art. 181")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-185",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("185", "Art. 185")} передбачає cofnięcie permit з ${foreignersLaw.article("181", "art. 181")} ust. 1, якщо припинилася мета pobyt або виникла хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 3–5.`,
            sourceLocator: "Art. 185",
          },
        ],
        summary:
          "Дозвіл для короткострокової мети відкликається, коли мета припинилася або виникла визначена загальна підстава.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Cofnięcie є обов'язковим, якщо більше не існує cel pobytu, для якого надано permit, або встановлено обставину ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 3, 4 чи 5.`,
          },
        ],
        legalEffect:
          "Після cofnięcie припиняється дія permit; сам сплив початкової мети або загальне припущення мають бути підтверджені фактом, передбаченим статтею.",
        foreignersCase: foreignersLaw.text`Якщо мета вже виконана, повідомте орган і перевірте наслідки для legalny pobyt; якщо отримано рішення про cofnięcie, оскаржуйте конкретну дату або обставину ${foreignersLaw.article("100", "art. 100")}, якщо вони помилкові.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-185a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("185a", "Art. 185a")} встановлює permit ze względu na pracę sezonową для cudzoziemiec, який прибув на визначеній візі або в рамках ruch bezwizowy, має чинне сезонне zezwolenie na pracę, достатній dochód, ubezpieczenie та zakwaterowanie, а також працює у видах діяльності, визначених підзаконними правилами.`,
            sourceLocator: "Art. 185a ust. 1 pkt 1–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("185a", "Art. 185a")} обмежує строк permit періодом сезонного дозволу на роботу і максимумом 9 місяців від першого відповідного в'їзду в даному році; допускає строк до 3 місяців, застосовує відповідно ${foreignersLaw.article("183", "art. 183")} та рахує dochód за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
            sourceLocator: "Art. 185a ust. 2–5",
          },
        ],
        summary:
          "Сезонний pobyt permit вимагає одночасного виконання міграційної, трудової, фінансової, страхової та житлової умов і має жорсткий річний максимум.",
        rules: [
          {
            locator: "ust. 1 вводна частина",
            explanation:
              "Мета pobyt — сезонна робота у видах діяльності, визначених правилами до ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom, у попереднього або іншого podmiot powierzający pracę; назва посади сама по собі не доводить сезонний характер.",
          },
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "Cudzoziemiec має в'їхати за візою для сезонної роботи або безвізово у зв'язку із заявою на сезонний work permit, внесеною до відповідного реєстру, і мати сезонний дозвіл або його продовження, чинні довше за дозволений візою чи безвізом pobyt.",
          },
          {
            locator: "ust. 1 pkt 3–5",
            explanation:
              "Потрібні stabilny i regularny dochód на utrzymanie, ubezpieczenie zdrowotne або підтвердження покриття лікування та забезпечене zakwaterowanie в Польщі.",
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Permit надається на строк чинності сезонного work permit або продовження, але не довше 9 місяців від першого в'їзду за pkt 1 у відповідному календарному році; його можна надати, коли обставини не виправдовують pobyt понад 3 місяці.`,
          },
          {
            locator: "ust. 4–5",
            explanation: foreignersLaw.text`У провадженні відповідно застосовується механізм інформації з ${foreignersLaw.article("183", "art. 183")}, а наявність доходу перевіряється за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
          },
        ],
        legalEffect:
          "Permit не легалізує роботу поза чинним сезонним work permit і не може перевищити 9-місячну межу; кожну з умов треба довести окремо.",
        foreignersCase:
          "Зіставте дату першого в'їзду цього року, строк візи або безвізу, сезонний work permit, договір, страховку, житло й дохід; окремо перевірте, чи діяльність входить до офіційного переліку.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-185b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("185b", "Art. 185b")} вимагає відмовити у permit з ${foreignersLaw.article("185a", "art. 185a")} ust. 1, якщо cudzoziemiec не виконав його умови або виникла хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2–9.`,
            sourceLocator: "Art. 185b",
          },
        ],
        summary:
          "Сезонний permit відхиляється через невиконання будь-якої умови його надання або через перелічені загальні підстави.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Є дві самостійні групи причин: невиконання вимог ${foreignersLaw.article("185a", "art. 185a")} ust. 1 або факт із ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2–9; орган має вказати, яка саме причина встановлена.`,
          },
        ],
        legalEffect: foreignersLaw.text`Відмова є обов'язковою за доведення однієї з названих причин; сезонний work permit сам по собі не усуває перевірку ${foreignersLaw.article("100", "art. 100")}.`,
        foreignersCase: foreignersLaw.text`У відповіді на wezwanie розкладіть докази за п'ятьма умовами ${foreignersLaw.article("185a", "art. 185a")} і перевірте кожен пункт ${foreignersLaw.article("100", "art. 100")}, наведений у проєкті рішення; не підміняйте відсутній документ загальним поясненням.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-185c",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("185c", "Art. 185c")} вимагає cofnięcie permit з ${foreignersLaw.article("185a", "art. 185a")} ust. 1, якщо припинилася мета pobyt, cudzoziemiec перестав виконувати умови permit або виникла обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2 або 4–8.`,
            sourceLocator: "Art. 185c",
          },
        ],
        summary:
          "Сезонний permit відкликається при втраті мети, вимог або за визначеними загальними підставами.",
        rules: [
          {
            locator: "весь припис",
            explanation: foreignersLaw.text`Для cofnięcie достатньо встановити одну з груп: припинення cel pobytu; припинення виконання вимог ${foreignersLaw.article("185a", "art. 185a")} ust. 1; або обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4–8.`,
          },
        ],
        legalEffect:
          "Після обов'язкового cofnięcie сезонний permit більше не є підставою перебування; це не визначає автоматично окреме право на працю.",
        foreignersCase: foreignersLaw.text`Порівняйте фактичну роботу, чинність seasonal work permit, страховку, житло та рішення з точним пунктом ${foreignersLaw.article("100", "art. 100")}; якщо умова припинилася в іншу дату, доведіть правильну хронологію.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-186",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("186", "Art. 186")} ust. 1 містить дев'ять підстав для zezwolenie na pobyt czasowy ze względu na inne okoliczności: сім'я мігранта або self-employed, народжена в Польщі unaccompanied child, resident UE іншої держави та його сім'я, права за Decision 1/80, випускник польського університету, колишній naukowiec, визначений громадянин UK і особа з national visa для мети, названої в законі.`,
            sourceLocator: "Art. 186 ust. 1 pkt 1–9",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Пункти 8–9 мають часові або підзаконні умови: UK-підстава застосовується лише за заявою не пізніше 31 грудня 2021 року, а для pkt 9 minister może określić громадянства в rozporządzenie. ${foreignersLaw.article("186", "Art. 186")} ust. 2–3 також містять cross-reference до EKS та ${foreignersLaw.article("159", "art. 159")} ust. 3.`,
            sourceLocator: "Art. 186 ust. 2–5",
          },
        ],
        summary:
          "Стаття має закритий перелік «інших обставин»; для кожного pkt потрібні власні факти, документи та, в окремих випадках, історична дата заяви.",
        rules: [
          {
            locator: "ust. 1 pkt 1–4",
            explanation:
              "Пункти охоплюють сім'ю визначеного мігруючого працівника або self-employed, minor child, народжену в Польщі без опіки, long-term EU resident з іншої держави та його члена сім'ї, який супроводжує або приєднується.",
          },
          {
            locator: "ust. 1 pkt 5",
            explanation:
              "Потрібно мати право на роботу в Польщі за Decision nr 1/80 Rady Stowarzyszenia Republiki Tureckiej i EWG; сам факт громадянства Туреччини без такого uprawnienie недостатній.",
          },
          {
            locator: "ust. 1 pkt 6–7",
            explanation:
              "Pkt 6 стосується absolwent polskiej uczelni, який шукає роботу або планує бізнес. Pkt 7 — особи, яка безпосередньо перед заявою мала research permit, завершила дослідження або роботи rozwojowe і шукає роботу або планує бізнес.",
          },
          {
            locator: "ust. 1 pkt 8–9",
            explanation:
              "Pkt 8 охоплює визначеного громадянина UK, який до 31.12.2020 працював у Польщі як працівник, відряджений іноземним роботодавцем; pkt 9 — особу, яка безпосередньо перед заявою мала national visa для прямо названої мети та громадянство з ministerialnego rozporządzenia.",
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Для сім'ї за pkt 1 застосовується annex до EKS у частині, що стосується члена сім'ї. Для сім'ї long-term resident за pkt 3 застосовуються правила про членів сім'ї з ${foreignersLaw.article("159", "art. 159")} ust. 3.`,
          },
          {
            locator: "ust. 4–5",
            explanation:
              "Пункт 8 має історичний cut-off: заява повинна бути подана не пізніше 31.12.2021. Для pkt 9 minister może визначити перелік громадянств у rozporządzenie з огляду на польську міграційну політику; не вигадуйте цей перелік із самої статті.",
          },
        ],
        legalEffect: foreignersLaw.text`Надання за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 1–7 і 9 залежить від точного складу, а pkt 8 нині має обмеження датою; загальна життєва складність не є універсальним pkt.`,
        foreignersCase:
          "Спочатку оберіть конкретний pkt, потім складіть доказову таблицю статусу, дат, мети, права на роботу чи навчання та документів; для pkt 8 перевірте дату подання, а для pkt 9 — чинне rozporządzenie про громадянства.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-187",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("187", "Art. 187")} дозволяє udzielić permit ze względu na inne okoliczności для навчання або szkolenie zawodowe, релігійної функції, pokrzywdzony, очікування виплати зарплати, захисту сімейного життя чи прав дитини, а також для іншої доведеної обставини; pkt 2 є uchylony.`,
            sourceLocator: "Art. 187 pkt 1–8",
          },
        ],
        summary:
          "Це дискреційний перелік спеціальних ситуацій; uchylony pkt 2 не може бути чинною підставою, а pkt 8 не дозволяє замінити законний тест простим особистим інтересом.",
        rules: [
          {
            locator: "pkt 1–2",
            explanation:
              "Pkt 1 охоплює намір розпочати або продовжити nauka чи szkolenie zawodowe. Pkt 2 прямо позначений як uchylony і не створює права на permit.",
          },
          {
            locator: "pkt 3–5",
            explanation:
              "Pkt 3 стосується duchowny, члена zakonu або релігійної функції у належно врегульованій церкві чи спільноті, пов'язаної з функцією або підготовкою. Pkt 4 — pokrzywdzony у визначеному законом значенні. Pkt 5 — особа, яка безпосередньо перед заявою мала дозвіл за pkt 4 і очікує zaległe wynagrodzenie від названого podmiot.",
          },
          {
            locator: "pkt 6–7",
            explanation:
              "Pkt 6 вимагає, щоб присутність нелегально перебуваючого cudzoziemiec була необхідна для поваги до życia rodzinnego за ECHR. Pkt 7 — щоб виїзд нелегально перебуваючої особи істотно загрожував psychofizyczny rozwój dziecka за Convention on the Rights of the Child.",
          },
          {
            locator: "pkt 8",
            explanation: foreignersLaw.text`Заявник має довести обставини, відмінні від pkt 1–7, розділів 2–10 та ${foreignersLaw.article("186", "art. 186")} ust. 1, які обґрунтовують pobyt у Польщі; це залишкова, але не безмежна категорія.`,
          },
        ],
        legalEffect:
          "Формула «można udzielić» означає можливість після доведення конкретної підстави; тривалий побyt, особиста потреба або uchylony pkt 2 самі по собі permit не дають.",
        foreignersCase: foreignersLaw.text`Назвіть точний pkt ${foreignersLaw.article("187", "art. 187")}, опишіть юридично релевантну подію та доказ; для pkt 6–7 додайте документи про сім'ю або дитину, для pkt 5 — рішення чи розрахунок невиплаченої зарплати.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-188",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("188", "Art. 188")} встановлює різні фінансові, страхові, житлові та документальні умови для permit за ${foreignersLaw.article("186", "art. 186")} і ${foreignersLaw.article("187", "art. 187")}; умови залежать від конкретного pkt та ustęp.`,
            sourceLocator: "Art. 188 ust. 1–6",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("188", "Art. 188")} відсилає для dochód до ${foreignersLaw.article("140", "art. 140")} ust. 2, визнає утримання родичем у Польщі способом виконання вимоги стабільного доходу та встановлює соціальний поріг для коштів на utrzymanie в окремих підставах.`,
            sourceLocator: "Art. 188 ust. 4–6",
          },
        ],
        summary: foreignersLaw.text`Одна назва permit ze względu na inne okoliczności приховує різні набори умов; спочатку визначте pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, потім перевіряйте ust. 1–6.`,
        rules: [
          {
            locator: "ust. 1–2b",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} pkt 1, 3, 4 або 8 потрібні ubezpieczenie і stabilny i regularny dochód; для pkt 3–4 додатково житло. Для pkt 6–7 потрібні ubezpieczenie, житло і достатні кошти на utrzymanie та powrót; для pkt 6 додатково diploma польського університету, для pkt 7 — документ jednostka naukowa про завершення досліджень.`,
          },
          {
            locator: "ust. 3 pkt 1–5",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("187", "art. 187")} pkt 1, 3, 5 або 8 потрібні ubezpieczenie та житло; для pkt 1 lit. b і pkt 8 — stabilny i regularny dochód; для pkt 1 lit. a — кошти на nauka, utrzymanie і powrót; для pkt 5 додатково забезпечене utrzymanie.`,
          },
          {
            locator: "ust. 4–5",
            explanation: foreignersLaw.text`Dochód за ust. 1 pkt 2 і ust. 3 pkt 2 обчислюється за ${foreignersLaw.article("140", "art. 140")} ust. 2. Вимога стабільного доходу також вважається виконаною, якщо utrzymanie покриває зобов'язаний член сім'ї, який живе в Польщі.`,
          },
          {
            locator: "ust. 6",
            explanation: foreignersLaw.text`Щомісячні кошти за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 або ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a після застосовного розрахунку мають перевищувати дохід, що дає право на грошові świadczenia з pomocy społecznej, щодо cudzoziemiec і кожного утриманця.`,
          },
        ],
        legalEffect: foreignersLaw.text`Підтвердження базової обставини ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")} недостатньо, якщо для її pkt не доведені додаткові умови ${foreignersLaw.article("188", "Art. 188")}; вимоги не можна переносити між пунктами.`,
        foreignersCase: foreignersLaw.text`Зробіть матрицю «конкретний pkt — умова ${foreignersLaw.article("188", "Art. 188")} — доказ — дата»: страховка, житло, дохід або кошти, diploma чи довідка jednostka naukowa; розрахунок доходу перевірте за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-189",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("189", "Art. 189")} встановлює два cross-reference у провадженнях про pobyt ze względu na inne okoliczności: для особи з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 застосовується art. 13 Decision nr 1/80, а для члена сім'ї з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 — спеціальна перевірка за ${foreignersLaw.article("169", "art. 169")}.`,
            sourceLocator: "Art. 189 ust. 1–2",
          },
        ],
        summary:
          "Стаття не встановлює нові умови permit, а підключає зовнішній режим захисту прав працівників та польську перевірку сімейного зв'язку.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Для заявника за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 треба застосувати art. 13 Decision nr 1/80 у провадженні; точний зміст цього зовнішнього правила не можна замінити загальним посиланням на право праці.`,
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`У справі члена сім'ї за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 застосовуються правила ${foreignersLaw.article("169", "art. 169")}; це включає спеціальну оцінку реальності сімейного зв'язку, коли вона релевантна.`,
          },
        ],
        legalEffect: foreignersLaw.text`Результат залежить від змісту підключеного режиму; ${foreignersLaw.article("189", "Art. 189")} не скасовує інших умов permit і не створює автоматичного права.`,
        foreignersCase: foreignersLaw.text`У правовому висновку окремо відкрийте зовнішній Decision nr 1/80 або ${foreignersLaw.article("169", "art. 169")}, а потім прив'яжіть його вимогу до факту й документа; не обмежуйтеся номером ${foreignersLaw.article("189", "art. 189")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-190",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("190", "Art. 190")} встановлює спеціальні строки permit ze względu na inne okoliczności: строк permit osoby, до якої приєднуються, період nauka або szkolenie до 1 року, 9 місяців після навчання чи досліджень, 5 років для визначеного UK-випадку та 3 роки для visa-випадку.`,
            sourceLocator: "Art. 190 pkt 1–5",
          },
        ],
        summary: foreignersLaw.text`Строк permit залежить від конкретного pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")} і в кількох випадках надається лише одноразово.`,
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 строк дорівнює строку чинності permit особи, яку cudzoziemiec супроводжує або до якої приєднується.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("187", "art. 187")} pkt 1 строк відповідає nauka або szkolenie zawodowe, але не перевищує 1 року.`,
          },
          {
            locator: "pkt 3",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7 permit надається одноразово на 9 місяців безпосередньо після завершення studia чи badań naukowych або prac rozwojowych.`,
          },
          {
            locator: "pkt 4–5",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 8 permit надається одноразово на 5 років, а для pkt 9 — одноразово на 3 роки; інші ситуації не можна автоматично підвести під ці строки.`,
          },
        ],
        legalEffect:
          "Строк визначається законом для конкретного складу і не випливає лише з назви заяви; одноразовість у pkt 3–5 обмежує повторне використання цієї підстави.",
        foreignersCase:
          "Назвіть застосовний pkt, зафіксуйте дату завершення навчання або досліджень і чинність permit osoby referencyjnej; перевірте, чи не використано вже одноразову 9-, 5- або 3-річну можливість.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-190a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Поза випадками з ${foreignersLaw.article("99", "art. 99")} ${foreignersLaw.article("190a", "Art. 190a")} вимагає odmowy wszczęcia postępowania про permit за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7, якщо на день заяви cudzoziemiec має дозвіл з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż або просить чи має дозвіл з ${foreignersLaw.article("127", "art. 127")}.`,
            sourceLocator: "Art. 190a pkt 1–2",
          },
        ],
        summary:
          "Це процесуальна перешкода для початку graduate/research-to-work провадження, яка оцінюється на день подання.",
        rules: [
          {
            locator: "частина вступна",
            explanation: foreignersLaw.text`Правило діє поза винятками з ${foreignersLaw.article("99", "art. 99")}; воно не є merytoryczna odmowa після перевірки диплома чи завершення досліджень.`,
          },
          {
            locator: "pkt 1–2",
            explanation: foreignersLaw.text`Перевірте, чи на день подання є дозвіл за ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż, або заява на дозвіл з ${foreignersLaw.article("127", "art. 127")} чи вже чинний такий дозвіл.`,
          },
        ],
        legalEffect: foreignersLaw.text`Odmowa wszczęcia не відповідає висновку, що заявник не виконав матеріальні умови ${foreignersLaw.article("186", "art. 186")}; орган має застосувати саме процесуальний наслідок і дату, передбачені статтею.`,
        foreignersCase: foreignersLaw.text`На дату заяви зберіть реєстр усіх дозволів і заяв, перевірте виняток ${foreignersLaw.article("99", "art. 99")} та вимагайте виправлення, якщо орган переплутав odmowa wszczęcia з merytoryczna odmowa.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-191",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("191", "Art. 191")} виключає застосування точно перелічених підстав odmowa з ${foreignersLaw.article("100", "art. 100")} для окремих pkt ${foreignersLaw.article("186", "art. 186")} та ${foreignersLaw.article("187", "art. 187")}, а ust. 2 захищає повнолітнього cudzoziemiec у вузькому випадку, коли заява подана протягом року після повноліття і єдиною причиною була нелегальність pobyt.`,
            sourceLocator: "Art. 191 ust. 1–2",
          },
        ],
        summary: foreignersLaw.text`Захисні винятки ${foreignersLaw.article("191", "Art. 191")} залежать від конкретної підстави, виду наступної заяви, віку та строку подання; вони не є загальним імунітетом від odmowa.`,
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation: foreignersLaw.text`Підставу ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 не застосовують для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 2 або ${foreignersLaw.article("187", "art. 187")} pkt 4.`,
          },
          {
            locator: "ust. 1 pkt 2–3",
            explanation: foreignersLaw.text`Пункт 8 ${foreignersLaw.article("100", "art. 100")} не застосовують у наступній заяві за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 або 4. Пункти 6 і 7 art. 100 не застосовують для pkt 3, 4, 6–9 art. 186.`,
          },
          {
            locator: "ust. 1 pkt 4",
            explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 або ${foreignersLaw.article("187", "art. 187")} pkt 6–7 не застосовують ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 3 і 6–9.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Особа, яка досягла повноліття під час pobyt у Польщі, має подати заяву протягом 1 року від цієї дати. Якщо szczególnie ważny interes і єдиною підставою відмови був нелегальний pobyt, відмовити не можна; інші причини залишаються можливими.",
          },
        ],
        legalEffect: foreignersLaw.text`Стаття точково обмежує відмову, а не скасовує всі умови ${foreignersLaw.article("186", "art. 186")}/${foreignersLaw.article("187", "art. 187")} чи всі пункти ${foreignersLaw.article("100", "art. 100")}; застосовність треба довести фактами конкретного pkt.`,
        foreignersCase: foreignersLaw.text`Випишіть точний pkt підстави, тип заяви (перша чи наступна), дату повноліття та всі пункти ${foreignersLaw.article("100", "art. 100")} у рішенні; перевірте, чи саме виняток ${foreignersLaw.article("191", "Art. 191")} блокує відмову.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-192",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("192", "Art. 192")} встановлює спеціальні правила cofnięcie permit для окремих підстав ${foreignersLaw.article("186", "art. 186")} та ${foreignersLaw.article("187", "art. 187")}, включно з винятком щодо відмови від обов'язкового лікування та різними cross-reference до ${foreignersLaw.article("100", "art. 100")} і ${foreignersLaw.article("101", "art. 101")}.`,
            sourceLocator: "Art. 192 ust. 1–4",
          },
        ],
        summary:
          "Наслідок залежить від того, за яким pkt було надано permit: закон окремо регулює незгоду з лікуванням, робочі та сімейні підстави, graduate/research і UK-випадок.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Permit за art. 186 ust. 1 pkt 3 або 4 не відкликається лише тому, що cudzoziemiec, зобов'язаний проходити лікування за спеціальним законом про інфекційні хвороби, не дав згоди на це лікування.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Permit за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 або ${foreignersLaw.article("187", "art. 187")} pkt 6–7 cofaється за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5 чи ${foreignersLaw.article("101", "art. 101")} pkt 1.`,
          },
          {
            locator: "ust. 3",
            explanation: foreignersLaw.text`Permit за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7 cofaється за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8 чи ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2.`,
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`Permit за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 8 cofaється за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5 або 8 чи ${foreignersLaw.article("101", "art. 101")} pkt 2.`,
          },
        ],
        legalEffect:
          "Cofnięcie можливе або є обов'язковим лише в межах переліку, що відповідає початковій підставі permit; виняток ust. 1 стосується конкретної медичної ситуації, а не всіх permit.",
        foreignersCase: foreignersLaw.text`Знайдіть у decyzja початковий pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, зіставте його з ust. 1–4 та перевірте кожен наведений пункт ${foreignersLaw.article("100", "art. 100")}/${foreignersLaw.article("101", "art. 101")}; окремо документуйте медичну обставину, якщо на неї посилаєтесь.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-193",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("193", "Art. 193")} зобов'язує wojewoda повідомляти Szef Urzędu про udzielenie, cofnięcie або odmowa kolejnego permit для cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3, а для pkt 4 — про cofnięcie або odmowa kolejnego permit.`,
            sourceLocator: "Art. 193 pkt 1–2",
          },
        ],
        summary:
          "Стаття встановлює повідомлення між wojewoda та Szef Urzędu про рішення у двох спеціальних категоріях long-term resident і його сім'ї.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Щодо cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 wojewoda повідомляє про udzielenie permit, його cofnięcie або odmowa udzielenia kolejnego permit.`,
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Щодо cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 wojewoda повідомляє про cofnięcie permit або odmowa udzielenia kolejnego; обов'язку повідомляти про первинне udzielenie у цьому пункті текст не містить.`,
          },
        ],
        legalEffect:
          "Повідомлення має реєстраційно-координаційний характер і не змінює змісту decyzja wojewoda та не є окремою підставою legalny pobyt.",
        foreignersCase: foreignersLaw.text`Порівняйте категорію за ${foreignersLaw.article("186", "art. 186")}, вид рішення та факт повідомлення; для pkt 4 не вимагайте повідомлення про udzielenie, якщо закон вимагає його лише для cofnięcie або kolejna odmowa.`,
      },
    ],
  })
