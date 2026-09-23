import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const documents = createEvidenceDocumentTextAuthor()
const kpaUrl = "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf"
const deliveryUrl =
  "https://eli.gov.pl/api/acts/DU/2026/3/text/T/D20260003L.pdf"
const transitionUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1794/text/O/D20251794.pdf"
const launchUrl = "https://eli.gov.pl/api/acts/MP/2026/370/text.pdf"

const moduleContent: KpaGuideModule = {
  id: "initiation",
  order: 6,
  title: "Початок справи і podanie",
  polish: "Wszczęcie postępowania; podanie; braki formalne",
  legalState: "23.09.2026",
  articles: kpaLaw.text`${kpaLaw.articleRange("61", "66", { start: "Art. 61", end: "66 KPA" })}; ${kpaLaw.article("14", "art. 14")}; ${kpaLaw.article("57", "art. 57")} та пов'язані правила доказування`,
  outcome:
    "Подання вимоги, початок провадження та доведення права на бажаний результат є різними подіями. Канал, підпис і зміст звернення визначають, чи можна надати йому належний хід. Докази потрібні для іншого питання: чи виконано умови, за яких орган може задовольнити вимогу.",
  layers: {
    beginner: {
      focus:
        "Звернення має автора, вимогу й передбачений законом спосіб подання.",
      law: kpaLaw.text`${kpaLaw.article("61", "Art. 61")} розрізняє початок на вимогу сторони та з ініціативи органу. ${kpaLaw.article("63", "Art. 63")} визначає загальні вимоги до podania.`,
      practice:
        "Дата створення заяви, її підписання та отримання органом можуть відрізнятися. Значення має подія, з якою конкретний припис пов'язує наслідок.",
      pitfall:
        "Паперовий приклад загального провадження KPA не визначає належного каналу для заяви, яку спеціальний закон вимагає подавати через MOS.",
    },
    practical: {
      focus:
        "Формальний недолік заяви та недостатній доказ потребують різних відповідей.",
      law: kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2")} передбачає усунення порушеної формальної вимоги у визначений органом строк, не коротший ніж сім днів, із попередженням про наслідок.`,
      practice:
        "Якщо бракує підпису, лист із обіцянкою підписати заяву не замінює фактичного усунення цього недоліку.",
      pitfall:
        "Саме слово brak у wezwanie не доводить, що застосовується залишення заяви без розгляду.",
    },
    advanced: {
      focus:
        "Процесуальна перешкода, неправильний адресат і недоведена умова не є одним дефектом.",
      law: kpaLaw.text`${kpaLaw.article("61a", "Art. 61a")} стосується відмови почати провадження. ${kpaLaw.articleRange("65", "66", { start: "Art. 65", end: "66" })} визначають передання, окреме звернення або повернення залежно від компетенції.`,
      practice:
        "Від правової підстави залежить дія органу й те, чи існує postanowienie, на яке можна подати zażalenie.",
      pitfall:
        "Загальна дата початку за KPA сама не встановлює легальності перебування або права працювати.",
    },
  },
  method: [],
  checklist: [],
  questions: [],
  lesson: {
    paragraphs: [],
    sections: [
      {
        id: "request-and-own-initiative",
        title: "Хто починає провадження і що є його предметом",
        paragraphs: [
          kpaLaw.text`Wszczęcie postępowania означає юридичний початок провадження у конкретній справі. За ${kpaLaw.article("61", "art. 61 § 1")} воно починається na żądanie strony, на вимогу сторони, або z urzędu, з ініціативи органу. Належний спосіб випливає з правил конкретної справи. Звернення про надання права і провадження щодо його відкликання можуть мати різні підстави початку.`,
          kpaLaw.text`Podanie є ширшим поняттям, ніж первісна заява. ${kpaLaw.article("63", "Art. 63 § 1")} охоплює вимоги, пояснення, odwołania та zażalenia. Пояснення до вже відкритої справи також є podaniem, але не починає нову справу лише тому, що надійшов ще один лист. Предмет визначає зміст вимоги, а не сама назва файла.`,
          kpaLaw.text`${kpaLaw.article("61", "Art. 61 § 2")} дозволяє органу почати з власної ініціативи провадження, для якого потрібна вимога сторони, через її особливо важливий інтерес. Орган має отримати згоду сторони під час провадження; інакше припиняє його через umorzenie. Це визначений законом виняток, а не загальне право замінити волю заявника.`,
          kpaLaw.text`Про початок на вимогу однієї сторони або з ініціативи органу повідомляють усіх осіб, які є сторонами справи, відповідно до ${kpaLaw.article("61", "art. 61 § 4")}. Повідомлення дає змогу брати участь у провадженні. Воно не є рішенням про надання права. Правило дати отримання вимоги сторони не можна механічно переносити на початок z urzędu.`,
          kpaLaw.text`Одне провадження може охоплювати кількох адресатів лише за сукупності умов ${kpaLaw.article("62", "art. 62")}: їхні права чи обов'язки випливають з однакового фактичного стану та однакової правової підстави, а компетентний той самий орган. Самого споріднення людей або спільної адреси недостатньо.`,
        ],
      },
      {
        id: "filing-and-commencement",
        title: "Створення документа, його надходження і початок справи",
        paragraphs: [
          documents.text`За загальним правилом ${kpaLaw.article("61", "art. 61 § 3")} датою початку на вимогу сторони є день доставлення вимоги органу. Для належної паперової заяви, поданої компетентному органу в процедурі, яка допускає папір, це пояснює різницю між датою на бланку та датою його прийняття. ${kpaLaw.article("63", "Art. 63 § 4")} зобов'язує орган підтвердити подання на вимогу особи. ${documents.document("dispatch-proof", "Підтвердження прийняття канцелярією")} фіксує іншу подію, ніж квитанція про відправлення поштою.`,
          kpaLaw.text`Для електронного звернення ${kpaLaw.article("61", "art. 61 § 3a")} називає день видачі dowodu otrzymania з ${kpaLaw.external("art. 41 ustawy o doręczeniach elektronicznych", deliveryUrl)}. Цей припис пов'язує видачу такого доказу, зокрема, з надходженням кореспонденції на адресу електронних доставлень публічного суб'єкта. Позначка «надіслано» у звичайній пошті не є цим передбаченим законом доказом.`,
          "Дата отримання, дата усунення недоліку та дата пізнішого повідомлення органу мають залишатися окремими подіями. Якщо заява була дефектною, значення виправлення для конкретного строку потребує правової оцінки. Саме підтвердження, що підпис додано вчасно, не встановлює однієї універсальної дати для всіх процесуальних і матеріальних наслідків.",
        ],
      },
      {
        id: "channel-content-and-signature",
        title: "Канал, зміст і підпис перевіряються разом",
        paragraphs: [
          kpaLaw.text`${kpaLaw.article("63", "Art. 63 § 1")} допускає письмове подання, telefaks та усне звернення до протоколу. Електронні подання вносять на адресу для електронних доставлень органу або через обліковий запис у його інформаційній системі. Якщо спеціальні приписи не встановлюють іншого, подання на звичайну електронну пошту органу залишають без розгляду. Надісланий PDF тому не можна оцінювати лише за його змістом: має значення й канал.`,
          kpaLaw.text`${kpaLaw.article("14", "Art. 14 § 1a і § 1d")} пов'язує паперове звернення з власноручним підписом, а електронне з належним електронним підписом, зокрема kwalifikowanym podpisem elektronicznym, podpisem zaufanym або podpisem osobistym. Кваліфікована печатка органу є окремим правилом для його власних документів, а не заміною підпису заявника. Спеціальний закон може встановлювати інший, вужчий набір допустимих підписів для конкретного документа.`,
          kpaLaw.text`Мінімальний зміст за ${kpaLaw.article("63", "art. 63 § 2")} охоплює особу, від якої походить звернення, її адресу та вимогу. Додаються вимоги спеціальних приписів. ${kpaLaw.article("63", "Art. 63 § 3")} регулює підпис письмового звернення й протоколу усного подання. За особу, яка не може або не вміє підписатися, підпис ставить уповноважена нею інша особа із відповідною відміткою біля підпису. Це не означає, що будь-який працівник установи може сам дописати підпис за заявника.`,
          kpaLaw.text`${kpaLaw.article("63", "Art. 63 § 3a")} вимагає встановленого формату даних, якщо окремі приписи зобов'язують подавати електронне звернення за визначеним зразком. Відсканований довільний лист і передбачений законом електронний формуляр тому не завжди взаємозамінні.`,
          kpaLaw.text`Для ePUAP важлива дата й конкретна послуга. Загальне перехідне прирівняння надсилання непублічним суб'єктом до електронної скриньки органу за ${kpaLaw.external("art. 147 ust. 2 і 4 ustawy o doręczeniach elektronicznych", deliveryUrl)} діяло до 31 грудня 2025 року. Воно саме не обґрунтовує будь-яке звернення через ePUAP у 2026 році. Водночас це не означає, що всі спеціальні послуги ePUAP стали недопустимими: для конкретної послуги потрібна її чинна правова підстава.`,
        ],
      },
      {
        id: "defect-procedural-bar-and-merits",
        title:
          "Чотири різні причини, через які звернення не дає бажаного результату",
        paragraphs: [
          kpaLaw.text`Якщо адреси немає і її не можна встановити за наявними даними, ${kpaLaw.article("64", "art. 64 § 1")} передбачає залишення podania без розгляду. Для інших невиконаних вимог закону ${kpaLaw.article("64", "art. 64 § 2")} вимагає wezwania до усунення недоліків у визначений строк, не коротший ніж сім днів. Особу попереджають, що невиправлення призведе до pozostawienia podania bez rozpoznania. Це різні конструкції навіть усередині одного припису.`,
          documents.text`${documents.document("authority-summons", "Wezwanie")} має дозволяти зрозуміти, що саме треба виправити. Відсутній підпис на допустимій паперовій заяві стосується самого звернення. Натомість документ, який не переконує орган у фактичній обставині, порушує питання доказування за ${kpaLaw.article("77", "art. 77 § 1")} і ${kpaLaw.article("80", "art. 80")}. Назва «brak» у листі не перетворює другу ситуацію на першу.`,
          "Додаток може бути формально обов'язковим, якщо так установлює конкретна процедура. Інший документ може бути лише одним зі способів довести матеріальну умову. Тому відсутність договору про працю не можна універсально класифікувати без визначення виду заяви, спеціального припису та ролі договору в цій справі.",
          documents.text`Інший механізм містить ${kpaLaw.article("61a", "art. 61a")}: вимога особи, яка не є стороною, або інша обґрунтована причина, через яку провадження не може початися, веде до odmowy wszczęcia. Орган видає ${documents.document("procedural-order", "postanowienie")}, на яке передбачено ${documents.document("procedural-complaint", "zażalenie")}. Це процесуальна перешкода, а не заміна виклику виправити відсутній підпис.`,
          documents.text`Нарешті, після належного розгляду орган може не встановити передумов задоволення вимоги й вирішити справу по суті через ${documents.document("administrative-decision", "decyzję")}. Недостатність доказів матеріальної умови не слід автоматично називати перешкодою з ${kpaLaw.article("61a", "art. 61a")}. І навпаки: докладний пакет доказів не усуває правової заборони почати певний вид провадження.`,
        ],
      },
      {
        id: "wrong-addressee-and-several-matters",
        title: "Неправильний адресат не завжди означає однакове повернення",
        paragraphs: [
          kpaLaw.text`Якщо орган не має компетенції, але належний орган визначений, ${kpaLaw.article("65", "art. 65 § 1")} вимагає невідкладно передати йому звернення й одночасно повідомити заявника з обґрунтуванням. ${kpaLaw.article("65", "Art. 65 § 2")} зберігає строк, якщо звернення подано неправильному органу до його спливу. Це захист строку подання, а не твердження, що всі строки роботи належного органу обов'язково почалися в той самий день.`,
          documents.text`Якщо одне podanie містить кілька справ для різних органів, ${kpaLaw.article("66", "art. 66 § 1")} доручає адресату розглянути свою частину та повідомити про необхідність окремого звернення щодо решти. За ${kpaLaw.article("66", "art. 66 § 2")} окреме звернення, подане відповідно до такого повідомлення протягом 14 днів від його доставлення, вважають поданим у день першого podania. Тут ${documents.document("delivery-proof", "доказ доставлення повідомлення")} визначає початок строку для наступної дії заявника.`,
          documents.text`Коли належного органу неможливо встановити за даними звернення або компетентний звичайний суд, ${kpaLaw.article("66", "art. 66 § 3")} передбачає повернення через ${documents.document("procedural-order", "postanowienie")} з правом на ${documents.document("procedural-complaint", "zażalenie")}. Але ${kpaLaw.article("66", "art. 66 § 4")} забороняє повернути звернення лише через компетенцію суду, якщо суд уже визнав себе некомпетентним у цій справі.`,
        ],
      },
      {
        id: "special-residence-procedure",
        title: "Заява про pobyt czasowy має власні межі початку",
        paragraphs: [
          foreignersLaw.text`Спеціальний закон визначає не лише додатки. Наприклад, ${foreignersLaw.article("99", "art. 99 ust. 1 pkt 1 ustawy o cudzoziemcach")} передбачає відмову почати провадження про pobyt czasowy, якщо на день заяви особа має наданий Польщею дозвіл на pobyt stały або статус rezydenta długoterminowego UE. Виправлений підпис не усуне саме цієї перешкоди.`,
          documents.text`Для звичайної нової заяви про pobyt czasowy ${foreignersLaw.article("106c", "art. 106c")} установлює електронний формуляр MOS. Відповідні положення запрацювали 27 квітня 2026 року за ${foreignersLaw.external("офіційним повідомленням, M.P. 2026 poz. 370", launchUrl)}. Закон виключає загальні канали з перших двох речень ${kpaLaw.article("63", "art. 63 § 1 KPA")} для зазначених заяв, додатків і доказів; заяву іншим способом залишають без розгляду, крім названих законом винятків. Тому ${documents.document("mos-application", "wniosek у MOS")} не замінюється довільним листом на адресу установи.`,
          foreignersLaw.text`Винятки визначені предметом і місцем перебування заявника. ${foreignersLaw.article("106j", "Art. 106j")} відокремлює, зокрема, przeniesienie wewnątrz przedsiębiorstwa, довгострокову мобільність у цьому режимі та перелічені сімейні справи осіб за межами Польщі. ${foreignersLaw.article("106k", "Art. 106k ust. 1")} і ${foreignersLaw.article("106l", "art. 106l ust. 1")} установлюють для відповідних категорій паперову заяву, яку подає приймаючий підрозділ або визначений член сім'ї. Це не вільний вибір паперу замість MOS у будь-якій справі.`,
          documents.text`${foreignersLaw.article("106d", "Art. 106d ust. 3–6")} пов'язує належне подання з потрібними підписами й отриманням автоматично створеного ${documents.document("upo", "Urzędowego Poświadczenia Odbioru, UPO")}. Для звичайної заяви самого іноземця передбачено кваліфікований або довірений підпис; для названих законом представників та осіб, які підписують окремі додатки, діють власні правила. Збережена чернетка або підписаний лише роботодавцем додаток не означають, що заяву іноземця вже належно подано.`,
          foreignersLaw.text`Для справ, розпочатих і не завершених до відповідних змін, ${foreignersLaw.external("art. 12 ustawy z 21 listopada 2025 r., Dz.U. 2025 poz. 1794", transitionUrl)} зберігає попередні приписи в установленому ним обсязі. Стару справу не можна автоматично переводити на нове подання лише через запуск MOS. Значення мають дата початку й конкретне перехідне правило.`,
          foreignersLaw.text`Окремо ${foreignersLaw.article("108", "art. 108 ust. 1–2")} пов'язує визнання перебування в Польщі законним із дотриманням строку заяви та відсутністю формальних недоліків або їх своєчасним усуненням. Правило діє до остаточності рішення, але не застосовується, якщо провадження зупинено на вимогу сторони. Наявність UPO сама не доводить виконання всіх цих передумов і не створює самостійного права працювати.`,
        ],
      },
    ],
    articles: [
      {
        reference: kpaLaw.text`${kpaLaw.articleRange("61", "62", { start: "Art. 61", end: "62" })}`,
        role: "Способи початку, дата вимоги, повідомлення сторін, відмова почати та умови спільного провадження.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.article("14", "Art. 14")}; ${kpaLaw.articleRange("63", "64", { start: "art. 63", end: "64" })}`,
        role: "Форма, канал, підпис і мінімальний зміст звернення, відсутня адреса та усунення інших формальних недоліків.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.articleRange("65", "66", { start: "Art. 65", end: "66" })}`,
        role: "Передання іншому органу, окреме звернення щодо іншої справи та визначені законом підстави повернення.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.article("57", "Art. 57 § 1 і § 4")}`,
        role: "Обчислення строку в днях від доставлення wezwania та правило перенесення останнього дня.",
      },
    ],
    terms: [
      {
        term: "żądanie strony",
        meaning:
          "Вимога сторони вирішити конкретну справу. Її зміст визначає, про що має бути провадження.",
      },
      {
        term: "podanie",
        meaning:
          "Категорія звернень до органу, яка охоплює первісну вимогу, подальші пояснення й засоби оскарження.",
      },
      {
        term: "brak formalny",
        meaning:
          "Невиконана встановлена законом вимога до звернення. Це не загальна назва будь-якого непереконливого доказу.",
      },
      {
        term: "odmowa wszczęcia",
        meaning:
          "Відмова почати провадження через процесуальну перешкоду, відмінна від вирішення вимоги по суті.",
      },
    ],
    caseExample: {
      title: "Відсутній підпис усунуто підписаною заявою, а не обіцянкою",
      facts:
        "У спрощеній окремій справі за загальним KPA паперове звернення допустиме. Компетентний орган отримав заяву 24 серпня 2026 року. Автор є стороною; особа, адреса, вимога й усі інші формальні елементи визначені належно. Бракує лише власноручного підпису. Належно доставлене 27 серпня wezwanie визначило сім днів від доставлення та прямо дозволило усунути недолік поданням підписаного примірника з незмінним змістом. Це не справа MOS і не ситуація неправильного адресата.",
      sample: {
        kind: "table",
        title: "Уривки документів і завершений запис перевірки",
        note: "Навчальні польські уривки відображають окремі документи та події, а не один офіційний формуляр. Персональні дані й номер справи опущено. Спосіб виправлення та семиденний строк належать до цього прикладу.",
        columns: [
          "Документ або подія",
          "Вибраний зміст польською",
          "Що встановлено",
        ],
        rows: [
          {
            id: "unsigned-application",
            cells: [
              "Wniosek otrzymany 24.08.2026",
              "Wniosek określa osobę, adres i żądanie. Brakuje własnoręcznego podpisu.",
              "Ustalony brak dotyczy podpisu na wniosku, nie dowodu spełnienia warunku materialnego.",
            ],
          },
          {
            id: "summons-and-deadline",
            cells: [
              "Wezwanie doręczone 27.08.2026",
              "Wzywa się do usunięcia braku podpisu przez złożenie własnoręcznie podpisanego egzemplarza wniosku o niezmienionej treści w terminie siedmiu dni od doręczenia wezwania. Nieusunięcie braku spowoduje pozostawienie podania bez rozpoznania.",
              "Termin upływa 03.09.2026. Dnia doręczenia nie wlicza się do siedmiu dni.",
            ],
          },
          {
            id: "actual-signed-response",
            cells: [
              "Odpowiedź i podpisany wniosek przyjęte 31.08.2026",
              "W odpowiedzi na wezwanie doręczone 27 sierpnia przedkładam własnoręcznie podpisany egzemplarz wniosku wniesionego 24 sierpnia. Żądanie i pozostała treść nie uległy zmianie. Załącznik: podpisany egzemplarz wniosku.",
              "Załączony wniosek rzeczywiście podpisano 31 sierpnia. Potwierdzenie organu wykazuje jego przyjęcie tego samego dnia.",
            ],
          },
          {
            id: "completed-check",
            cells: [
              "Sprawdzenie dokumentu 01.09.2026",
              "Podpis znajduje się na złożonym egzemplarzu. Brak został usunięty przed upływem terminu.",
              "Usunięcie tego braku nie przesądza o wyniku sprawy co do istoty.",
            ],
          },
        ],
      },
      analysis: documents.text`Недолік стосувався підпису з ${kpaLaw.article("63", "art. 63 § 3")}, а wezwanie застосовувало ${kpaLaw.article("64", "art. 64 § 2")}. ${documents.document("delivery-proof", "Доказ доставлення wezwania")} встановлює 27 серпня. За ${kpaLaw.article("57", "art. 57 § 1")} першим днем є 28 серпня, сьомим є четвер 3 вересня. Підстава перенесення за ${kpaLaw.article("57", "art. 57 § 4")} тут не виникла. ${documents.document("response-letter", "Лист-відповідь")} описав виконану дію, але недолік усунув фактично підписаний примірник заяви. ${documents.document("dispatch-proof", "Підтвердження прийняття органом")} довело подання 31 серпня. Підпис поставили фактичною датою, а не заднім числом.`,
      lesson:
        "1 вересня орган перевірив підписаний примірник і встановив своєчасне усунення цього недоліку. Підстави залишити звернення без розгляду через невиконання саме цього wezwania немає. Матеріальні умови бажаного результату ще не вирішені. Приклад не встановлює універсальної дати початку всіх строків для будь-якої первісно дефектної заяви.",
    },
    findInText: [],
  },
}

export const kpaInitiationLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:initiation",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "initiation",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: kpaLaw.text`Початок провадження, форма звернення та різні наслідки недоліків за ${kpaLaw.external("офіційним текстом KPA, Dz.U. 2025 poz. 1691", kpaUrl)}. Електронний доказ отримання та перехідне правило ePUAP зіставлено з ${kpaLaw.external("ustawą o doręczeniach elektronicznych, Dz.U. 2026 poz. 3", deliveryUrl)}. Наведені приписи й обмежений приклад перевірено 23.09.2026.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 14 § 1a–1d; 57 § 1 i § 4; 61–66; 77 § 1; 80",
          },
          {
            reference: { kind: "external", url: deliveryUrl },
            locator: "Art. 41 ust. 1 pkt 2; 147 ust. 2 i 4",
          },
        ],
      },
      {
        id: "temporary-residence-boundary",
        kind: "statute-text",
        text: foreignersLaw.text`Особливі межі нової заяви про pobyt czasowy за ${foreignersLaw.article("99", "art. 99 ust. 1 pkt 1")}, ${foreignersLaw.article("106c", "art. 106c")}, ${foreignersLaw.article("106d", "art. 106d ust. 3–6")}, ${foreignersLaw.articleRange("106j", "106l", { start: "art. 106j", end: "106l" })} і ${foreignersLaw.article("108", "art. 108 ust. 1–2")}. Дату запуску й перехід для старих справ перевірено за ${foreignersLaw.external("M.P. 2026 poz. 370", launchUrl)} та ${foreignersLaw.external("art. 12 ustawy zmieniającej, Dz.U. 2025 poz. 1794", transitionUrl)}.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator:
              "Art. 99 ust. 1 pkt 1; 106c; 106d ust. 3–6; 106j–106l; 108 ust. 1–2",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-23",
      verifiedAt: "2026-09-23",
    },
    body: moduleContent,
  })

export default kpaInitiationLearningModuleTopic
