import {
  createLegalTextAuthor,
  defineLegalTextContent,
} from "~/data/legal-library/legal-text"
import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalTextAuthor("powierzanie-pracy")
const _ppsaLaw = createLegalTextAuthor("ppsa")
const _residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const WORK_REGULATION_URL = "https://eli.gov.pl/eli/DU/2025/1629/ogl"
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const _FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

export const legalNodeGuidesWorkDocs = defineLegalTextContent(
  {
    "document-matrix": {
      introduction: [
        "Матриця документів показує правову функцію кожного матеріалу: яка норма створює умову, який факт реалізує цю умову і який dowód підтверджує саме цей факт. Вона перетворює перелік załączników на структуру доказування.",
        "Один документ може підтверджувати кілька фактів, а одна умова може вимагати сукупності доказів. Наприклад, umowa підтверджує погоджені умови праці, але фактичну виплату показують bank statements, lista płac і ZUS.",
      ],
      regulated: [
        workLaw.text`Матеріальна ustawa визначає przesłanki дозволу, а KPA — спосіб встановлення фактів і оцінки dowodów. ${kpaLaw.article("75", "Art. 75")} KPA допускає все, що може сприяти з'ясуванню справи й не суперечить праву.`,
        workLaw.text`${kpaLaw.article("77", "Art. 77")} і ${kpaLaw.article("80", "art. 80")} KPA зобов'язують organ зібрати та розглянути весь матеріал і оцінити, чи доведена конкретна обставина.`,
        "Вимоги до обов'язкових załączników можуть додатково випливати зі спеціального закону та rozporządzenia, але їх наявність не замінює доказу всіх матеріальних умов.",
      ],
      appliesWhen: [
        "Матриця застосовується до заяви, відповіді на wezwanie, ознайомлення з aktami, підготовки odwołania та перевірки змін фактичного стану під час провадження.",
        "Вона особливо важлива, коли organ ставить під сумнів реальність діяльності, стабільність доходу, мету pobytu, фактичну організацію праці або зв'язок між spółkami.",
      ],
      conditions: [
        "Кожен рядок матриці містить точну przesłankę, релевантний період, факт, джерело інформації та dowód із датою й автором.",
        "Документи повинні бути взаємно узгоджені щодо осіб, назв podmiotów, сум, адрес, дат, stanowisk і періодів.",
        "Для слабкого або непрямого доказу потрібне пояснення логічного зв'язку та, за можливості, друге незалежне джерело.",
      ],
      exceptions: [
        "Dokument urzędowy користується спеціальною доказовою силою лише в межах того, що орган офіційно засвідчив; він не підтверджує автоматично інші висновки.",
        "Brak одного типового документа не завжди означає відсутність факту, якщо закон не робить цей документ виключною формою доказу й факт можна встановити іншими законними засобами.",
      ],
      consequences: [
        "Матриця виявляє, чи справа є формально комплектною, але матеріально слабкою, або навпаки — має доказ умови, який не був правильно включений до akt.",
        "Незаповнений зв'язок przesłanka–fakt–dowód показує реальний ризик негативного рішення, бо organ не може визнати умову виконаною лише на підставі загального твердження сторони.",
      ],
      procedure: [
        "Спочатку з матеріальної норми виділяються окремі позитивні й негативні przesłanki та їх часові межі.",
        "Потім до кожної przesłanki прив'язуються факти й матеріали з numerem dokumentu в aktach, а суперечності фіксуються окремо.",
        "Після отримання wezwania або нового документа матриця оновлюється, щоб було видно, яка умова вже доведена, яка потребує пояснення і яка залишилася без доказу.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców той самий факт часто має різні правові функції: umowa може стосуватися celu pobytu, prawa do pracy, dochodu та ubezpieczenia, але для кожної функції оцінюються інші елементи.",
        "Документи з різних процедур — MOS, zezwolenie na pracę, PUP, ZUS і KRS — повинні описувати одну фактичну історію, а не паралельні несумісні версії.",
      ],
    },
    "evidence-matrix": {
      introduction: [
        "Brak formalny стосується здатності podania отримати належний процесуальний хід, тоді як brak materialny означає, що сторона не довела przesłanki потрібного права. Це різні дефекти з різною правовою підставою й різним наслідком.",
        "Формально повна заява може завершитися відмовою, якщо факти не виконують матеріальних умов. Натомість переконливі докази не усувають браку підпису, обов'язкового formularza чи іншої вимоги, яку закон визначає як формальну.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.articleRange("63", "64", { start: "Art. 63", end: "64" })} KPA регулюють форму й мінімальний зміст podania та wezwanie do usunięcia braków, якщо подання не відповідає встановленим вимогам.`,
        "Матеріальні przesłanki й обов'язкові документи визначає ustawa szczególna, наприклад ustawa o cudzoziemcach або ustawa o powierzaniu pracy cudzoziemcom.",
        workLaw.text`${kpaLaw.article("7", "Art. 7")}, ${kpaLaw.article("77", "77")}, ${kpaLaw.article("79a", "79a")}, ${kpaLaw.article("80", "80")} і ${kpaLaw.article("81", "81")} KPA регулюють встановлення істотних фактів, вказання невиконаних przesłanek та оцінку доказового матеріалу.`,
      ],
      appliesWhen: [
        "Розмежування застосовується при кожному wezwaniu, залишенні podania без розгляду, odmowie wszczęcia та перед негативним рішенням по суті.",
        "Воно визначає, чи орган вимагає елемент, без якого podanie формально дефектне, чи доказ факту, від якого залежить spełnienie materialnej przesłanki.",
      ],
      conditions: [
        "Формальний наслідок повинен мати конкретну правову основу, чітко вказаний defect, спосіб його усунення, строк і pouczenie про наслідок невиконання.",
        "Матеріальна оцінка повинна називати przesłankę, факти та докази, яких бракує, і враховувати обов'язок organu розглянути весь матеріал.",
        "Один і той самий документ може бути обов'язковим załącznikiem і водночас доказом умови, але ці дві функції не слід змішувати.",
      ],
      exceptions: [
        workLaw.text`Organ не може використовувати ${kpaLaw.article("64", "art. 64 § 2")} KPA для автоматичного залишення без розгляду лише тому, що доказ матеріальної умови є недостатнім, якщо спеціальний закон не надає йому формального характеру.`,
        "Uzupełnienie formalne не гарантує позитивного рішення: після надання відсутнього елемента organ переходить до merytorycznej oceny przesłanek.",
      ],
      consequences: [
        "Неусунення formalnego braku у встановленому режимі може призвести до pozostawienia podania bez rozpoznania, без вирішення матеріального права.",
        "Недоведення materialnej przesłanki веде до рішення по суті — зазвичай odmowy — яке повинно містити ustalenia faktyczne, ocenę dowodów і uzasadnienie prawne.",
      ],
      procedure: [
        "Wezwanie формально ідентифікується за вказаною правовою підставою, żądanym działaniem та передбаченим наслідком.",
        "При braku formalnym сторона подає відсутній елемент у визначеній формі; при braku materialnym подає dowody, wyjaśnienia або stanowisko щодо przesłanki.",
        "У aktach зберігається доказ doręczenia wezwania, treść odpowiedzi, załączniki та підтвердження своєчасного подання.",
      ],
      foreignersContext: [
        "У sprawach pobytowych wezwanie часто поєднує formalne uzupełnienie з матеріальними доказами, тому кожен пункт листа може мати іншу правову функцію й наслідок.",
        "Наприклад, відсутність підпису на належному załączniku може бути formalnym brakiem, а відсутність доказу реальної діяльності роботодавця — недоведенням materialnej przesłanki.",
      ],
    },
    "document-types": {
      introduction: [
        "KPA не обмежує доказування закритим checklistem документів. Dowodem може бути все, що допомагає з'ясувати справу, не суперечить праву та стосується істотного факту: dokument urzędowy, dokument prywatny, дані rejestru, zeznania, opinia biegłego, oględziny або інший носій інформації.",
        "Вид доказу визначає не його назва, а походження, спосіб створення й те, яку саме обставину він здатний підтвердити.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.article("75", "Art. 75")} KPA встановлює відкритий katalog dowodów, а ${kpaLaw.article("76", "art. 76")} — спеціальну силу dokumentu urzędowego в межах офіційно засвідченого.`,
        kpaLaw.text`${kpaLaw.article("76a", "Art. 76a")} регулює odpisy та копії документів, ${kpaLaw.article("78", "art. 78")} — wnioski dowodowe сторони, ${kpaLaw.article("80", "art. 80")} — оцінку всього матеріалу.`,
        kpaLaw.text`${kpaLaw.article("81", "Art. 81")} і ${kpaLaw.article("81a", "81a")} регулюють можливість визнання факту доведеним та правило розв'язання недоведених фактичних сумнівів на користь сторони в установлених законом справах.`,
      ],
      appliesWhen: [
        "Класифікація застосовується при формуванні załączników, składaniu wniosków dowodowych, перегляді akt і перевірці, чи organ правильно визначив доказову силу матеріалу.",
        "Вона особливо важлива, коли факт не має одного стандартного документа або коли приватні матеріали суперечать даним urzędowego rejestru.",
      ],
      conditions: [
        "Dowód повинен стосуватися істотної обставини, мати встановлене походження, читабельний зміст і часовий зв'язок із періодом, який досліджується.",
        "Kopia або cyfrowe odwzorowanie повинні дозволяти встановити цілісність документа; organ може вимагати оригінал do wglądu в передбачених випадках.",
        "Dokument prywatny підтверджує насамперед походження заяви від підписанта, а достовірність описаних фактів оцінюється разом з іншими доказами.",
      ],
      exceptions: [
        "Domniemanie dokumentu urzędowego можна спростовувати, а документ не має підвищеної сили поза межами того, що organ офіційно stwierdził.",
        "Oświadczenie strony не замінює dokumentu, якщо спеціальний закон прямо вимагає визначеної форми або конкретного urzędowego potwierdzenia.",
      ],
      consequences: [
        "Правильна класифікація показує, чи документ доводить сам факт, лише твердження сторони, статус у реєстрі або перебіг процесуальної дії.",
        "Organ, який відмовляється провести релевантний dowód або вибірково оцінює матеріал, повинен пояснити це в uzasadnieniu; порушення може мати значення в odwołaniu.",
      ],
      procedure: [
        "Матеріал надходить від сторони, іншого organu, rejestru або внаслідок czynności dowodowej, після чого включається до akt.",
        "Сторона має можливість брати участь у проведенні визначених доказів і висловитися щодо зібраного матеріалу перед рішенням.",
        "У decyzji organ зазначає, які факти визнав доведеними, на яких доказах базувався й чому іншим матеріалам відмовив у переконливості.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców дані paszportu, rejestrów, umów, ZUS, banku та urzędowych decyzji мають різні доказові функції й не замінюють одне одного.",
        "Електронні UPO, historia MOS, wpisy PUP і wydruki з державних rejestrów важливі також як докази дати та змісту процесуальної дії.",
      ],
    },
    "foreign-documents": {
      introduction: [
        "Документ, виданий за кордоном, повинен бути придатним для використання в польській справі: organ має розуміти його зміст, встановити походження та оцінити, чи документ чинний і стосується відповідної особи або факту.",
        "Tłumaczenie, apostille і legalizacja виконують різні функції. Переклад робить зміст доступним польською мовою, а apostille або legalizacja підтверджують автентичність підпису, статус підписанта та печатку, але не істинність усіх фактів у документі.",
      ],
      regulated: [
        workLaw.text`Вимогу перекладу визначає конкретна процедура. Для zezwoleń na pracę й oświadczeń ${workLaw.external("§ 8", WORK_REGULATION_URL)} ust. 8 rozporządzenia Dz.U. 2025 poz. 1629 вимагає tłumaczenia przysięgłego документів іноземною мовою, крім dokumentów podróży.`,
        "Apostille застосовується між державами-учасницями Konwencji haskiej z 1961 r., якщо документ належить до її сфери й не діє звільнення за міжнародним договором або правом ЄС.",
        "Для інших держав або документів може застосовуватися legalizacja через właściwy organ держави походження та польську placówkę konsularną.",
      ],
      appliesWhen: [
        "Режим застосовується до aktów stanu cywilnego, zaświadczeń, дипломів, rejestrów spółek, pełnomocnictw та інших urzędowych або приватних матеріалів, створених за межами Польщі.",
        "Обсяг формальностей залежить від країни, виду документа, organu, мети використання та чинних міжнародних або європейських правил.",
      ],
      conditions: [
        "Документ повинен походити від компетентного органу або особи, містити дані, що дозволяють ідентифікувати його, і бути чинним або актуальним для досліджуваного періоду.",
        "Tłumaczenie przysięgłe має охоплювати істотний зміст, печатки, adnotacje й елементи, необхідні для зіставлення з оригіналом.",
        "Apostille або legalizacja приєднуються до належного оригіналу чи urzędowego odpisu; звичайна приватна копія не набуває через це сили оригіналу.",
      ],
      exceptions: [
        "Документи з окремих держав або окремих категорій можуть бути звільнені від legalizacji чи apostille міжнародним договором, Konwencją CIEC або правилами ЄС.",
        workLaw.text`Dokument podróży у процедурах праці не перекладається за правилом ${workLaw.external("§ 8", WORK_REGULATION_URL)} ust. 8 Dz.U. 2025 poz. 1629, але organ використовує його для ідентифікації та може вимагати читабельного cyfrowego odwzorowania всіх заповнених сторінок.`,
      ],
      consequences: [
        "Відсутність потрібного перекладу унеможливлює оцінку змісту, а відсутність wymaganej apostille або legalizacji може поставити під сумнів urzędowe pochodzenie документа.",
        "Розбіжності в транслітерації імен, датах, назвах spółek або нумерації документів потребують пояснення й доказу, що матеріали стосуються тієї самої особи або podmiotu.",
      ],
      procedure: [
        "Спочатку отримується оригінал або właściwy urzędowy odpis у державі походження та встановлюється, чи діє zwolnienie, apostille або legalizacja.",
        "Після виконання wymogu uwierzytelnienia документ передається tłumaczowi przysięgłemu, якщо процедура вимагає польського перекладу.",
        "До польської справи подаються пов'язані між собою оригінал або odpis, apostille чи klauzula legalizacyjna та переклад із чітким зазначенням, до якого документа він належить.",
      ],
      foreignersContext: [
        "У sprawach pobytowych іноземні акти часто підтверджують pokrewieństwo, małżeństwo, освіту, стаж або корпоративні powiązania, тому їх формальна придатність безпосередньо впливає на доказ матеріальної умови.",
        "Корпоративний dokument з-за кордону може підтверджувати реєстровий статус і представництво spółki, але фактичну діяльність, delegowanie або виконання usługi підтверджують додаткові матеріали.",
      ],
    },
    "case-file": {
      introduction: [
        "Akta sprawy — це офіційний набір матеріалів, на підставі якого organ встановлює факти й ухвалює рішення. Право доступу дозволяє стороні бачити не лише власні załączniki, а також листування organów, dane z rejestrów, notatki та інші dowody.",
        "Власна хронологія не замінює akt, але відтворює послідовність podania, doręczeń, wezwań, odpowiedzi, zmian stanu faktycznego й czynności organu, що необхідно для оцінки строків і повноти матеріалу.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.article("73", "Art. 73")} KPA надає стороні право wglądu do akt, sporządzania notatek, kopii й odpisów також після завершення провадження та передбачає uwierzytelnione odpisy в обґрунтованих випадках.`,
        workLaw.text`${kpaLaw.article("74", "Art. 74")} KPA регулює виключення документів із доступу через ochronę informacji niejawnych або ważny interes państwowy та вимагає postanowienia при відмові.`,
        kpaLaw.text`${kpaLaw.article("74a", "Art. 74a")} поширює правила доступу на документи в електронній формі, а ${kpaLaw.article("10", "art. 10")} і ${kpaLaw.article("81", "art. 81")} пов'язують akta з правом сторони висловитися щодо dowodów.`,
      ],
      appliesWhen: [
        "Право доступу діє під час провадження і після його завершення, коли особа має статус strony або іншу прямо передбачену законом підставу.",
        "Ознайомлення особливо важливе перед відповіддю на wezwanie, перед decyzją, при підготовці odwołania та після отримання інформації, що organ самостійно здобув новий dowód.",
      ],
      conditions: [
        "Wniosek про доступ повинен дозволяти ідентифікувати sprawę та особу, яка реалізує право; представник підтверджує umocowanie.",
        "Kopie й нотатки повинні зберігати numerację та походження документа, щоб їх можна було співвіднести з aktami й późniejszym uzasadnieniem decyzji.",
        "Хронологія містить дату події, дату skutecznego doręczenia, автора, вид czynności, перелік załączników і процесуальний наслідок.",
      ],
      exceptions: [
        kpaLaw.text`Документи з informacjami niejawnymi та матеріали, виключені через ważny interes państwowy, не надаються в загальному режимі ${kpaLaw.article("73", "art. 73 KPA")}.`,
        "Право wglądu не означає право змінювати або вилучати матеріали; виправлення власної позиції відбувається через нове pismo, wniosek dowodowy або зауваження до конкретної czynności.",
      ],
      consequences: [
        "Akta показують, який матеріал organ реально мав на дату рішення; документ, підготовлений стороною, але не поданий або не включений до akt, не виконує тієї самої процесуальної функції.",
        "Bezpodstawna odmowa dostępu, відсутність можливості висловитися щодо dowodów або рішення на матеріалі поза aktami може становити порушення KPA й аргумент у środku zaskarżenia.",
      ],
      procedure: [
        kpaLaw.text`Organ організовує доступ у своїй siedzibie або за допомогою електронних засобів, дозволяє sporządzenie kopii та на вимогу видає uwierzytelnione odpisy за умов ${kpaLaw.article("73", "art. 73 § 2 KPA")}.`,
        "При відмові organ видає postanowienie, на яке przysługuje zażalenie; у ньому визначаються правова підстава й обсяг виключення.",
        "Після кожного доступу власний spis akt і хронологія доповнюються новими позиціями, щоб зберегти відповідність офіційній teczce.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców частина істотних даних надходить із PUP, Straży Granicznej, Policji, ZUS, KRS або інших проваджень; лише wgląd pokazuje, які саме відомості використав wojewoda.",
        "Для оцінки legalności pobytu й pracy хронологія повинна розділяти дату подання, дату UPO, дату doręczenia, фактичний початок роботи, зміни umowy та строки obowiązkowych powiadomień.",
      ],
    },
  },
  "legal-node-guides-work-docs"
) satisfies LegalNodeGuideMap
