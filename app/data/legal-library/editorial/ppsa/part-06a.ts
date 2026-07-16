import { createLegalTextAuthor } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

export const ppsaPart06a = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("222", "Art. 222")} stanowi, że nie żąda się opłat od pisma, jeżeli już z jego treści wynika, że podlega ono odrzuceniu.`,
          sourceLocator: "Art. 222",
        },
      ],
      summary:
        "Якщо з самого письма вже видно, що воно підлягає odrzuceniu, суд не вимагає сплати opłaty.",
      rules: [
        {
          locator: "Art. 222",
          explanation:
            "Спочатку перевірте, чи недопустимість письма очевидна з його змісту; сама наявність сумніву не означає автоматичного застосування цієї норми.",
        },
      ],
      legalEffect:
        "Норма стосується вимоги про opłata для письма, яке вже підлягає odrzuceniu; вона не визначає, чи конкретне письмо справді має бути відхилене.",
      foreignersCase:
        "У судовій справі іноземця про pobyt не робіть висновок про відсутність opłata лише через назву письма: перевірте його зміст і окрему підставу можливого odrzucenie.",
    },
    {
      provisionId: "ppsa-art-223",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("223", "Art. 223 § 1–2")} stosuje odpowiednio przepisy ${ppsaLaw.article("220", "art. 220")} i ${ppsaLaw.article("222", "art. 222")}, gdy obowiązek uiszczenia lub uzupełnienia opłaty powstanie wskutek ustalenia wyższej wartości przedmiotu zaskarżenia, cofnięcia przyznanego prawa pomocy albo uchylenia kurateli przed wyznaczeniem terminu rozprawy; nieuiszczoną opłatę sąd nakazuje w orzeczeniu kończącym postępowanie w danej instancji ściągnąć od strony zobowiązanej do jej uiszczenia albo od innej strony, jeżeli z tego orzeczenia wynika obowiązek poniesienia przez nią kosztów postępowania.`,
          sourceLocator: "Art. 223 § 1–2",
        },
      ],
      summary:
        "Стаття застосовує правила про wezwanie та очевидне odrzucenie, коли обов’язок сплатити або доплатити opłatę виник пізніше з названих у законі причин.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Зіставте виникнення обов’язку з вищою wartość przedmiotu zaskarżenia, cofnięcie prawa pomocy або uchylenie kurateli до визначення дати rozprawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо належну opłatę не сплачено, спосіб її стягнення має бути зазначений у кінцевому orzeczenie відповідної instancji.",
        },
      ],
      legalEffect: ppsaLaw.text`Стаття визначає спеціальне застосування ${ppsaLaw.article("220", "Art. 220")} і ${ppsaLaw.article("222", "Art. 222")} та подальше стягнення належної opłata; вона не скасовує перевірку, хто саме зобов’язаний її сплатити.`,
      foreignersCase:
        "Якщо в справі іноземця змінилася wartość przedmiotu zaskarżenia або cofnięto право допомоги, перевірте нову вимогу про opłatę і строк її виконання за документами суду.",
    },
    {
      provisionId: "ppsa-art-224",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("224", "Art. 224")} przewiduje, że jeżeli sąd nie orzekł o obowiązku ponoszenia kosztów sądowych albo nie objął orzeczeniem całej należnej kwoty, postanowienie w tym przedmiocie wydaje na posiedzeniu niejawnym wojewódzki sąd administracyjny.`,
          sourceLocator: "Art. 224",
        },
      ],
      summary:
        "Коли суд не вирішив питання про обов’язок нести koszty sądowe або не охопив усю суму, WSA видає окреме postanowienie на posiedzeniu niejawnym.",
      rules: [
        {
          locator: "Art. 224",
          explanation:
            "Порівняйте кінцеве orzeczenie з питанням koszty sądowe: норма охоплює і повну відсутність рішення, і неохоплену частину належної суми.",
        },
      ],
      legalEffect:
        "Стаття дає WSA процесуальну форму для додаткового вирішення koszty sądowe, але не встановлює сама розмір або розподіл конкретних витрат.",
      foreignersCase:
        "У справі про pobyt перевірте не лише wyrok, а й окреме postanowienie WSA про koszty sądowe, якщо в основному рішенні це питання пропущено або вирішено не повністю.",
    },
    {
      provisionId: "ppsa-art-225",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("225", "Art. 225")} nakazuje z urzędu zwrócić stronie, na jej koszt, opłatę prawomocnie uchyloną w całości lub w części, różnicę między kosztami pobranymi a kosztami należnymi oraz pozostałość zaliczki wpłaconej na pokrycie wydatków.`,
          sourceLocator: "Art. 225",
        },
      ],
      summary:
        "Стороні повертають належну до повернення opłata, різницю між стягненими й належними kosztami та залишок zaliczka — з urzędu.",
      rules: [
        {
          locator: "Art. 225",
          explanation:
            "Визначте, що саме підлягає поверненню: prawomocnie uchylona opłata, різниця koszty або залишок zaliczka на wydatki.",
        },
      ],
      legalEffect:
        "Повернення відбувається з urzędu у випадках, названих статтею, але норма не доводить автоматично наявність переплати без розрахунку koszty.",
      foreignersCase:
        "Після завершення судової справи іноземця звірте платежі за opłata та zaliczka з остаточним розрахунком суду; не вимагайте повернення суми, яка ще є належною.",
    },
    {
      provisionId: "ppsa-art-226",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("226", "Art. 226 § 1–2")} встановлює трирічний строк przedawnienie: для права вимагати koszty sądowe — від дня, коли їх належало сплатити, а для права сторони вимагати повернення opłata або zaliczka — від виникнення цього права.`,
          sourceLocator: "Art. 226 § 1–2",
        },
      ],
      summary:
        "Право вимагати судові витрати або повернення opłata чи zaliczka обмежене трирічним строком, але початкова дата залежить від виду права.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для вимоги про koszty sądowe відлічуйте строк від дня, коли витрати треба було сплатити.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для вимоги сторони про повернення opłata або zaliczka шукайте день виникнення саме права на повернення.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("226", "Art. 226")} називає трирічний строк przedawnienie, але для обчислення потрібні документи, що встановлюють належний платіж або виникнення права на zwrot.`,
      foreignersCase:
        "Якщо іноземець просить повернути судовий платіж, зафіксуйте дату виникнення права на zwrot, а не лише дату переказу, і перевірте перебіг трирічного строку.",
    },
    {
      provisionId: "ppsa-art-227",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("227", "Art. 227 § 1")} допускає zażalenie на zarządzenie przewodniczącego та postanowienie wojewódzkiego sądu administracyjnego щодо kosztów sądowych, якщо сторона не подає środka odwoławczego щодо суті справи; ${ppsaLaw.article("227", "§ 2")} звільняє такі zażalenia від opłat sądowych.`,
          sourceLocator: "Art. 227 § 1–2",
        },
      ],
      summary:
        "Окреме zażalenie на рішення про koszty sądowe можливе за умов статті й не обкладається opłata sądowa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Визначте, чи оскаржується саме zarządzenie przewodniczącego або postanowienie WSA про koszty і чи немає środka odwoławczego по суті справи.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Для зажаленія, охопленого ${ppsaLaw.article("227", "§ 1")}, opłata sądowa не стягується.`,
        },
      ],
      legalEffect:
        "Норма встановлює названий процесуальний засіб і звільнення від opłata, але не гарантує задоволення зажаленія або зміну розподілу витрат.",
      foreignersCase:
        "У справі іноземця відокремте zażalenie на koszty від оскарження рішення про pobyt по суті та перевірте, яке саме рішення WSA або przewodniczącego отримано.",
    },
    {
      provisionId: "ppsa-art-228",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("228", "Art. 228")} визначає, що grzywny, присуджені у провадженні перед sądem administracyjnym, є доходами budżet państwa поряд із kosztami sądowymi та підлягають egzekucji sądowej без nadawania orzeczeniu klauzuli wykonalności.`,
          sourceLocator: "Art. 228",
        },
      ],
      summary:
        "Присуджені адміністративним судом grzywny надходять до budżet państwa і можуть примусово стягуватися без окремої klauzula wykonalności.",
      rules: [
        {
          locator: "Art. 228",
          explanation:
            "Відрізняйте grzywna від самих kosztów sądowych: стаття визначає їх бюджетний статус і спосіб egzekucja.",
        },
      ],
      legalEffect:
        "Стаття визначає фінансовий статус і виконання grzywny; вона не є самостійною підставою для накладення конкретного штрафу.",
      foreignersCase:
        "Якщо в судовій справі іноземця винесено grzywna, прочитайте окреме orzeczenie та його підставу; відсутність klauzula wykonalności не означає відсутності обов’язку.",
    },
    {
      provisionId: "ppsa-art-229",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("229", "Art. 229 § 1")} дозволяє umorzyć, odroczyć або rozłożyć na raty należności з nieuiszczonych kosztów sądowych та grzywien, крім grzywien, названих у ${ppsaLaw.article("55", "Art. 55 § 1")}, ${ppsaLaw.article("149", "Art. 149 § 2")} та ${ppsaLaw.article("154", "Art. 154 § 1")}, якщо їх стягнення спричинило б niewspółmierne trudności або надто тяжкі наслідки для боржника; ${ppsaLaw.article("229", "§ 2")} передає Раді Міністрів встановлення детальних правил.`,
          sourceLocator: "Art. 229 § 1–2",
        },
      ],
      summary:
        "За умов статті борг з несплачених koszty sądowe або grzywny можна просити списати, відстрочити чи розкласти на raty, але закон містить винятки.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Покажіть, що стягнення створило б niewspółmierne trudności або zbyt ciężkie skutki, і перевірте, чи grzywna не належить до прямо виключених.",
        },
        {
          locator: "§ 2",
          explanation:
            "Детальні органи, порядок, строки та підтвердження визначаються розporządzenie Rady Ministrów, тому перевірте чинні підзаконні правила.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("229", "Art. 229")} створює можливість полегшення сплати за названих умов, а не автоматичне право на списання чи raty; результат залежить від встановлення обставин і компетентного органу.`,
      foreignersCase:
        "У справі іноземця з боргом за koszty або grzywna підготуйте докази фінансових наслідків і перевірте винятки та чинне rozporządzenie, не прирівнюючи прохання до гарантованого umorzenie.",
    },
    {
      provisionId: "ppsa-art-230",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("230", "Art. 230 § 1")} передбачає pobranie wpis stosunkowy або stały від pism, що ініціюють провадження перед sądem administracyjnym у відповідній instancji; ${ppsaLaw.article("230", "§ 2")} називає такими pismami skargę, sprzeciw od decyzji, sprzeciw od postanowienia, skargę kasacyjną, zażalenie та skargę o wznowienie postępowania.`,
          sourceLocator: "Art. 230 § 1–2",
        },
      ],
      summary:
        "Письма, що починають провадження в певній instancji, обкладаються wpis stosunkowy або stały; стаття містить перелік таких засобів.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку визначте instancja та те, чи письмо ініціює окреме провадження перед адміністративним судом.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зіставте документ із переліком: skarga, sprzeciw, skarga kasacyjna, zażalenie або skarga o wznowienie мають різні подальші вимоги.",
        },
      ],
      legalEffect:
        "Стаття визначає, які ініціюючі письма можуть мати wpis, але не визначає в кожній справі його конкретний розмір чи можливе zwolnienie.",
      foreignersCase:
        "У справі про pobyt перевірте вид поданого засобу — skarga чи інший документ — і відповідний wpis; не переносіть правила для одного засобу на інший.",
    },
    {
      provisionId: "ppsa-art-231",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("231", "Art. 231")} встановлює, що wpis stosunkowy сплачується у справах, де предметом оскарження є należności pieniężne, а в інших справах стягується wpis stały.`,
          sourceLocator: "Art. 231",
        },
      ],
      summary:
        "Вид wpis залежить від предмета оскарження: грошові należności ведуть до wpis stosunkowy, інші справи — до wpis stały.",
      rules: [
        {
          locator: "Art. 231",
          explanation:
            "Визначте, чи предметом оскарження є саме należność pieniężna, а не лише те, що справа має фінансові наслідки.",
        },
      ],
      legalEffect:
        "Стаття дає критерій виду wpis, але не встановлює саму суму; для розрахунку потрібні інші приписи та факти справи.",
      foreignersCase:
        "У спорі іноземця про pobyt не називайте wpis stosunkowy лише через можливий економічний інтерес: перевірте фактичний предмет оскарження.",
    },
    {
      provisionId: "ppsa-art-232",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("232", "Art. 232 § 1")} nakazuje sądowi z urzędu zwrócić cały uiszczony wpis od pisma odrzuconego lub cofniętego do dnia rozpoczęcia rozprawy oraz od zażalenia na postanowienie, jeżeli zażalenie uwzględniono; ${ppsaLaw.article("232", "§ 2")} допускає postanowienie про zwrot wpisу на posiedzeniu niejawnym.`,
          sourceLocator: "Art. 232 § 1–2",
        },
      ],
      summary:
        "У названих випадках суд повертає весь сплачений wpis з urzędu; для цього може бути винесено postanowienie без rozprawa.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Перевірте, чи письмо odrzucono або cofnięto до дня початку rozprawa.",
        },
        {
          locator: "§ 1 pkt 2",
          explanation:
            "Для zażalenie підстава zwrot виникає, якщо його uwzględniono.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окреме postanowienie про повернення wpis може бути видане на posiedzeniu niejawnym.",
        },
      ],
      legalEffect: ppsaLaw.text`Повернення за ${ppsaLaw.article("232", "Art. 232")} залежить від точної процесуальної події та її дати; сама сплата wpis не означає, що повернення належить у кожній справі.`,
      foreignersCase:
        "Якщо іноземець відкликав skargę або його zażalenie задоволено, зафіксуйте дату початку rozprawa та зміст orzeczenie перед очікуванням zwrot wpisу.",
    },
    {
      provisionId: "ppsa-art-233",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("233", "Art. 233")} уповноважує Rada Ministrów визначити розporządzenie висоту й детальні правила pobierania wpis; wpis не може бути нижчим за сто złotych, stosunkowy не може перевищувати 4% wartości przedmiotu zaskarżenia і 100 000 zł, а stały — 10 000 zł.`,
          sourceLocator: "Art. 233",
        },
      ],
      summary:
        "Конкретні ставки та правила pobierania wpis визначає розporządzenie, а стаття встановлює законодавчі межі для його розміру.",
      rules: [
        {
          locator: "Art. 233",
          explanation: ppsaLaw.text`Зверніться до чинного розporządzenie Rady Ministrów для конкретної ставки, але зіставте її з мінімумом і граничними значеннями ${ppsaLaw.article("233", "Art. 233")}.`,
        },
        {
          locator: "Art. 233",
          explanation:
            "Для wpis stosunkowy перевіряйте і 4% wartości przedmiotu zaskarżenia, і граничні 100 000 zł; для wpis stały — межу 10 000 zł.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("233", "Art. 233")} встановлює рамку для підзаконного регулювання, а не остаточну суму для конкретного письма.`,
      foreignersCase: ppsaLaw.text`У справі про pobyt перевірте актуальну ставку за чинним rozporządzenie і не підміняйте її лише загальними межами, наведеними в ${ppsaLaw.article("233", "Art. 233")}.`,
    },
    {
      provisionId: "ppsa-art-234",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("234", "Art. 234 § 1–4")} передбачає opłatę kancelaryjną за stwierdzenie prawomocności та видачу документів на підставі akt; за odpis orzeczenia z uzasadnieniem, витребуваний протягом семи днів від ogłoszenia, opłatę сплачують під час wniosku, а за її відсутності przewodniczący після wezwania наказує стягнення без застосування ${ppsaLaw.article("220", "art. 220")}; відпис, який вручається з urzędu, не оплачується, а дії з ${ppsaLaw.article("234", "§ 2")} може виконувати referendarz sądowy.`,
          sourceLocator: "Art. 234 § 1–4",
        },
      ],
      summary:
        "Стаття визначає, коли за документи з akt стягується opłata kancelaryjna і як відрізняється відпис рішення, надісланий на прохання або з urzędu.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для stwierdzenie prawomocności, odpis, zaświadczenie або інший документ перевірте, чи його видають на підставі akt.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Запит на odpis orzeczenia z uzasadnieniem у семиденний строк має окреме правило оплати, тоді як відпис, що вручається з urzędu, не оплачується.",
        },
        {
          locator: "§ 4",
          explanation: ppsaLaw.text`Дії, описані в ${ppsaLaw.article("234", "§ 2")}, може виконувати referendarz sądowy.`,
        },
      ],
      legalEffect:
        "Норма розмежовує вид документа та спосіб його вручення; право отримати відпис не означає, що кожен запит є безкоштовним.",
      foreignersCase:
        "Для оскарження рішення про pobyt перевірте дату ogłoszenia, дату запиту на uzasadnienie і те, чи відпис надіслано з urzędu, перш ніж оцінювати opłatę kancelaryjną.",
    },
    {
      provisionId: "ppsa-art-235",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("235", "Art. 235")} передбачає opłatę kancelaryjną також за odpisy, wyciągi, kopie, wydruki, zaświadczenia та інші документи, видані на підставі zbiorów, які зберігаються і ведуться в суді поза aktami sprawy.`,
          sourceLocator: "Art. 235",
        },
      ],
      summary:
        "Окрема opłata kancelaryjna може стягуватися за документи з судових zbiorów, що перебувають поза aktami конкретної справи.",
      rules: [
        {
          locator: "Art. 235",
          explanation:
            "Встановіть джерело документа: ця стаття стосується zbiorów у суді поза aktami sprawy, а не автоматично кожного документа з матеріалів справи.",
        },
      ],
      legalEffect:
        "Стаття розширює перелік документів, за які може стягуватися opłata kancelaryjna, але не визначає її конкретний розмір.",
      foreignersCase:
        "Якщо іноземцю потрібна копія або zaświadczenie з суду, уточніть, чи документ походить з akt справи чи з окремого zbioru, і перевірте відповідну opłatę.",
    },
    {
      provisionId: "ppsa-art-235a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("235a", "Art. 235a")} передбачає opłatę kancelaryjną за wydruki pism і заłączników, поданих як документ електронний, якщо їх готують для doręczenia сторонам, які не користуються засобами електронної комунікації для отримання письмових документів.`,
          sourceLocator: "Art. 235a",
        },
      ],
      summary:
        "Друк електронно поданих письма та додатків для сторони, яка не отримує документи електронно, може мати окрему opłata kancelaryjna.",
      rules: [
        {
          locator: "Art. 235a",
          explanation:
            "Перевірте одночасно електронну форму подання, підготовку wydruk для doręczenie та спосіб отримання письм іншою стороною.",
        },
      ],
      legalEffect:
        "Норма стосується конкретної вартості друку для doręczenie; вона не робить кожне електронне подання платним.",
      foreignersCase:
        "У справі іноземця відокремте opłata за сам процесуальний документ від можливої opłata за його паперовий wydruk для іншого учасника.",
    },
    {
      provisionId: "ppsa-art-236",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("236", "Art. 236")} уповноважує Rada Ministrów визначити розporządzenie розмір opłat kancelaryjnych; воно має врахувати оплату за кожну сторінку, межу 200 zł для відпису orzeczenia z uzasadnieniem на прохання, фактичну вартість wydruki документів електронних та підвищення за документ іноземною мовою або з таблицею.`,
          sourceLocator: "Art. 236",
        },
      ],
      summary:
        "Розмір opłat kancelaryjnych визначає розporządzenie з урахуванням сторінок, виду документа, фактичної вартості та особливих форматів.",
      rules: [
        {
          locator: "Art. 236",
          explanation:
            "Для конкретної суми перевірте чинне розporządzenie та кількість сторінок або вид послуги, а не лише загальне уповноваження статті.",
        },
        {
          locator: "Art. 236",
          explanation:
            "Окремо врахуйте межу 200 zł для odpis orzeczenia z uzasadnieniem на прохання і правило фактичної вартості для електронних wydruki.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("236", "Art. 236")} задає межі та критерії для підзаконного тарифу, але не замінює перевірки чинної ставки на дату запиту.`,
      foreignersCase:
        "Якщо документ для справи про pobyt іноземною мовою або містить таблицю, перевірте можливе підвищення opłata за чинним розporządzenie.",
    },
    {
      provisionId: "ppsa-art-237",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("237", "Art. 237 § 1–3")} зобов’язує сторону, яка просить про czynność, пов’язану з wydatki, внести zaliczkę; якщо просять кілька сторін або суд діє з urzędu, суд визначає частки, розмір zaliczka і строк її сплати та може вимагати доплату, коли витрати більші.`,
          sourceLocator: "Art. 237 § 1–3",
        },
      ],
      summary:
        "Залучення дії, що спричиняє wydatki, може вимагати zaliczka; суд визначає її розмір і строк та може наказати доплату.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Встановіть, хто просив про czynność і чи є кілька зацікавлених сторін або дія суду з urzędu; від цього залежить розподіл zaliczka.",
        },
        {
          locator: "§ 3",
          explanation:
            "Дотримайтеся розміру та строку, визначених судом, і відстежуйте wezwanie про uzupełnienie, якщо прогнозовані wydatki зросли.",
        },
      ],
      legalEffect:
        "Стаття регулює авансування конкретних wydatki, але не встановлює наперед, що будь-яке прохання сторони обов’язково потребує zaliczka.",
      foreignersCase:
        "У спорі іноземця про pobyt перевірте, чи судова czynność справді пов’язана з wydatki, хто має внести zaliczka і який строк вказано в zarządzenie.",
    },
    {
      provisionId: "ppsa-art-238",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("238", "Art. 238 § 1–4")} регулює випадок невнесення zaliczka: бюджет суду тимчасово покриває потрібні wydatki, сума стає należnością budżetu państwa, а сторона має повернути її; для особи за кордоном строк wezwanie не може бути коротшим за два місяці, а безрезультатний сплив веде до postanowienie про стягнення без wstrzymania postępowania.`,
          sourceLocator: "Art. 238 § 1–4",
        },
      ],
      summary:
        "Несплачений аванс може бути тимчасово покритий бюджетом суду, але сума стає боргом сторони; для особи за кордоном діє мінімальний двомісячний строк wezwanie.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Перевірте, чи сторона була зобов’язана внести zaliczka, чи бюджет її авансував, і який строк надано після wezwanie; для проживання за кордоном — не менше двох місяців.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після безрезультатного спливу строку суд може на posiedzeniu niejawnym видати postanowienie про стягнення, не зупиняючи перебіг справи.",
        },
        {
          locator: "§ 4",
          explanation: ppsaLaw.text`Правила ${ppsaLaw.article("238", "§ 1–3")} не застосовуються, якщо невиконання czynność з ${ppsaLaw.article("237", "Art. 237 § 1")} є підставою для zawieszenie postępowania.`,
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("238", "Art. 238")} описує механізм повернення бюджетної суми, але не усуває необхідності перевірити належність первісного обов’язку сплатити zaliczka та виняток із ${ppsaLaw.article("238", "§ 4")}.`,
      foreignersCase:
        "Якщо іноземець проживає за кордоном і не сплатив zaliczka, перевірте doręczenie wezwanie, мінімум двох місяців і те, чи справа не підпадає під виняток для zawieszenie.",
    },
    {
      provisionId: "ppsa-art-239",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("239", "Art. 239 § 1")} звільняє від обов’язку сплати kosztów sądowych визначені категорії сторін, зокрема скаржника у справах про pomoc społeczną, трудові та соціальні питання, udzielanie cudzoziemcom ochrony, а також прокурора, RPO, RPD, Rzecznika Małych i Średnich Przedsiębiorców, kuratora та особу з przyznane prawo pomocy; ${ppsaLaw.article("239", "§ 2")} містить окреме звільнення для визначених організацій у власних справах.`,
          sourceLocator: "Art. 239 § 1–2",
        },
      ],
      summary:
        "Стаття перелічує випадки звільнення від kosztów sądowych за статусом сторони або предметом справи; це не є загальним звільненням для кожної справи іноземця.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Зіставте предмет skarga з конкретним пунктом переліку, зокрема не плутайте udzielanie cudzoziemcom ochrony з будь-якою справою про pobyt.",
        },
        {
          locator: "§ 1 pkt 2–4",
          explanation:
            "Перевірте статус сторони: названий публічний орган, kurator або особа з prawomocne prawo pomocy — і межі вже наданого права.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для організації перевірте, чи справа є її власною та чи не стосується prowadzonej działalności gospodarczej або умов zleconego zadania publicznego.",
        },
      ],
      legalEffect: ppsaLaw.text`Звільнення виникає лише за умов відповідного пункту ${ppsaLaw.article("239", "Art. 239")} і, для права допомоги, у межах prawomocne postanowienie; стаття не оцінює прийнятність skarga по суті.`,
      foreignersCase:
        "У справі іноземця встановіть, чи йдеться саме про udzielanie ochrony, чи про pobyt або інший предмет, і окремо перевірте підставу звільнення та її обсяг.",
    },
    {
      provisionId: "ppsa-art-240",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("240", "Art. 240")} дозволяє Rada Ministrów у drodze rozporządzenia звільнити організації społeczne від обов’язку сплачувати wpis у їхніх власних справах і скасувати таке звільнення; воно має стосуватися справ, пов’язаних із діяльністю науковою, освітньою, культурною, доброчинною та допомогою і опікою społeczną.`,
          sourceLocator: "Art. 240",
        },
      ],
      summary:
        "Рада Міністрів може підзаконно звільнити організації społeczne від wpis у власних справах у названих сферах і потім відкликати це звільнення.",
      rules: [
        {
          locator: "Art. 240",
          explanation:
            "Перевірте, чи організація є організацією społeczną, справа є її власною та належить до сфери, охопленої чинним rozporządzenie.",
        },
      ],
      legalEffect:
        "Стаття лише надає підставу для розporządzenie; без перевірки чинного підзаконного акта не можна стверджувати, що конкретна організація звільнена.",
      foreignersCase: ppsaLaw.text`Якщо організація допомагає іноземцю в судовій справі, не переносіть можливе звільнення ${ppsaLaw.article("240", "Art. 240")} на саму особу: перевірте статус організації, предмет справи та чинний акт.`,
    },
    {
      provisionId: "ppsa-art-241",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("241", "Art. 241")} визначає, що звільнення від обов’язку сплати kosztów sądowych, передбачене законом або postanowienie sądu administracyjnego без визначення його обсягу, означає повне звільнення і від opłat sądowych, і від ponoszenia wydatków.`,
          sourceLocator: "Art. 241",
        },
      ],
      summary:
        "Якщо закон або postanowienie звільняє від kosztów sądowych без зазначення обсягу, це означає повне звільнення від opłat і wydatków.",
      rules: [
        {
          locator: "Art. 241",
          explanation:
            "Спочатку знайдіть джерело звільнення — закон або postanowienie — і перевірте, чи справді в ньому не визначено zakres.",
        },
      ],
      legalEffect:
        "Норма тлумачить мовчання про обсяг як повне звільнення, але не розширює часткове звільнення, якщо його межі прямо встановлені.",
      foreignersCase:
        "У справі іноземця прочитайте повний текст postanowienie o zwolnieniu: відсутність обсягу має інший наслідок, ніж прямо зазначене звільнення лише від opłat або wydatków.",
    },
    {
      provisionId: "ppsa-art-242",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("242", "Art. 242")} передбачає, що wydatki за сторону, звільнену від kosztów sądowych, авансуються з частини бюджету sądu administracyjnego в межах цього звільнення.`,
          sourceLocator: "Art. 242",
        },
      ],
      summary:
        "Витрати за звільнену сторону тимчасово покриває бюджет адміністративного суду, але тільки в межах наданого zwolnienie.",
      rules: [
        {
          locator: "Art. 242",
          explanation:
            "Зіставте конкретний wydatki з обсягом zwolnienie: стаття не охоплює витрати поза встановленими межами.",
        },
      ],
      legalEffect:
        "Норма визначає джерело авансування wydatki, а не остаточний розподіл koszty між сторонами після завершення справи.",
      foreignersCase:
        "Якщо іноземцю надано zwolnienie від судових витрат, перевірте його zakres перед висновком, що судовий бюджет покриває кожен можливий wydatki.",
    },
    {
      provisionId: "ppsa-art-243",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("243", "Art. 243 § 1")} дозволяє надати prawo pomocy на wniosek сторони, поданий до wszczęcie або під час postępowanie, і звільняє цей wniosek від opłat sądowych; ${ppsaLaw.article("243", "§ 2")} позначений як uchylony.`,
          sourceLocator: "Art. 243 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Заяву про prawo pomocy можна подати до початку або під час провадження, і сама заява не має opłata; ${ppsaLaw.article("243", "§ 2")} є uchylony.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Встановіть, чи wniosek подано до wszczęcie postępowania або вже під час нього; за подання wniosku opłata sądowa не стягується.",
        },
        {
          locator: "§ 2",
          explanation:
            "Позначення «uchylony» означає, що цей параграф не містить чинного правила для застосування.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("243", "Art. 243")} визначає час подання та безоплатність wniosek, але саме подання не означає автоматичного przyznanie prawa pomocy.`,
      foreignersCase:
        "Якщо іноземець не може оплатити судову справу про pobyt, зафіксуйте дату wniosek і не плутайте його безоплатність із позитивним рішенням про prawo pomocy.",
    },
    {
      provisionId: "ppsa-art-244",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("244", "Art. 244 § 1")} визначає, що prawo pomocy охоплює zwolnienie od kosztów sądowych та ustanowienie adwokat, radca prawny, doradca podatkowy або rzecznik patentowy; ${ppsaLaw.article("244", "§ 2")} прирівнює ustanowienie до udzielenie pełnomocnictwa, а ${ppsaLaw.article("244", "§ 3")} регулює можливе призначення вказаного стороною професійного представника.`,
          sourceLocator: "Art. 244 § 1–3",
        },
      ],
      summary:
        "Prawo pomocy може включати звільнення від судових витрат і призначення професійного представника; призначення в межах цього права є повноваженням.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Не ототожнюйте prawo pomocy з одним результатом: воно може охоплювати zwolnienie, ustanowienie представника або обидва компоненти в межах рішення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Ustanowienie професійного представника в рамках prawa pomocy має наслідок udzielenie pełnomocnictwa.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо сторона вказала конкретного професіонала, відповідна рада призначає його в міру можливості та за погодженням із ним.",
        },
      ],
      legalEffect:
        "Стаття описує склад права допомоги та порядок врахування вказаного представника, але не гарантує призначення конкретної особи чи повного звільнення.",
      foreignersCase:
        "У судовій справі іноземця перевірте, що саме охоплює postanowienie про prawo pomocy, і окремо встановіть, чи призначено pełnomocnik та який обсяг його повноважень.",
    },
    {
      provisionId: "ppsa-art-245",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("245", "Art. 245 § 1–4")} передбачає, що prawo pomocy може бути całkowite або częściowe; całkowite охоплює zwolnienie od kosztów sądowych та ustanowienie професійного представника, а częściowe — окремі або спільні opłaty, wydatki чи представника, причому zwolnienie від opłat або wydatków може бути часткою або визначеною сумою.`,
          sourceLocator: "Art. 245 § 1–4",
        },
      ],
      summary:
        "Prawo pomocy має повний або частковий обсяг: часткове рішення може стосуватися лише opłat, лише wydatków, обох або тільки ustanowienie представника.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Знайдіть у postanowienie, чи prawo pomocy є całkowite, і тоді перевірте обидва його компоненти — koszty та представника.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для częściowe встановіть, що саме звільнено: opłaty, wydatki, обидва або лише ustanowienie професійного представника.",
        },
        {
          locator: "§ 4",
          explanation:
            "Часткове zwolnienie від opłat або wydatki може бути визначене часткою або конкретною kwota pieniężna; перевірте точне формулювання рішення.",
        },
      ],
      legalEffect:
        "Обсяг права допомоги визначається категорією та точним змістом postanowienie; часткове prawo pomocy не звільняє автоматично від усіх koszty.",
      foreignersCase:
        "У справі іноземця про pobyt перепишіть із postanowienie конкретний zakres prawa pomocy: загальна згадка про «pomoc» не відповідає на питання про wpis, wydatki чи pełnomocnik.",
    },
  ],
})
