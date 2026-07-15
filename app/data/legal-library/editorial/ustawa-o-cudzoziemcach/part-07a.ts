import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"

export const foreignersActPart07a =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      {
        provisionId: "ustawa-o-cudzoziemcach-art-194",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("194", "Art. 194")} уповноважує ministra właściwego do spraw wewnętrznych визначити в rozporządzeniu мінімальні кошти для витрат на повернення або транзит іноземця з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 чи ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a та членів його сім’ї, які перебувають на його утриманні, а також документи для підтвердження можливості отримати ці кошти й кошти на utrzymanie.`,
            sourceLocator: "Art. 194 pkt 1–2",
          },
        ],
        summary:
          "Стаття делегує розпорядженню визначення мінімальних коштів і підтвердних документів для окремих підстав pobytu.",
        rules: [
          {
            locator: "pkt 1",
            explanation:
              "Розмір коштів може відрізнятися залежно від держави, з якої прибув cudzoziemiec; конкретної суми в самій статті немає.",
          },
          {
            locator: "pkt 2",
            explanation:
              "Документи мають підтверджувати можливість законно отримати кошти на повернення та utrzymanie за умовами названих положень.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("194", "Art. 194")} є підставою для підзаконного регулювання, але не встановлює самостійно потрібну суму або закритий перелік документів.`,
        foreignersCase: foreignersLaw.text`Визначте, чи підстава справи належить до ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, потім перевірте чинне rozporządzenie та подайте докази саме тих коштів і документів, які воно передбачає.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-195",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} передбачає надання zezwolenia na pobyt stały на czas nieoznaczony на wniosek, зокрема дитині особи з pobyt stały або pobyt rezydenta długoterminowego UE, дитині obywatela polskiego, особі польського походження, визначеному подружжю obywatela polskiego, жертві handlu ludźmi, особі з установленим строком безперервного перебування, особі з azyl або Kartą Polaka, а також визначеному громадянину UK.`,
            sourceLocator: "Art. 195 ust. 1 pkt 1–10",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 7 є uchylony; для окремих підстав стаття встановлює додаткові вимоги щодо доходу, ubezpieczenie, співпраці з органами, наміру оселитися та безперервності pobytu. Періоди переривання загалом не можуть перевищувати 6 місяців кожен і 10 місяців разом, із названими винятками.`,
            sourceLocator: "Art. 195 ust. 1 pkt 5–10, ust. 2–4",
          },
        ],
        summary:
          "Стаття містить вичерпні спеціальні підстави для pobyt stały та умови для кожної з них; pkt 7 прямо uchylony.",
        rules: [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Спершу встановіть категорію заявника: дитина, подружжя, osoba polskiego pochodzenia або жертва handlu ludźmi має довести саме умови відповідного пункту.",
          },
          {
            locator: "ust. 1 pkt 6, 8–10",
            explanation:
              "Строки 4, 5 або 10 років, azyl, Karta Polaka та режим Umowa Wystąpienia мають різні додаткові умови; не змішуйте їх між собою.",
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Доходи для названих випадків рахуються за ${foreignersLaw.article("140", "art. 140")} ust. 2, а безперервність оцінюється за правилами про допустимі перерви та їхні винятки.`,
          },
        ],
        legalEffect:
          "Наявність родинного зв’язку, польського походження або потрібного строку сама по собі не гарантує zezwolenia: мають бути виконані всі умови конкретної підстави та не діяти підстави відмови.",
        foreignersCase:
          "Складіть доказову таблицю для обраного pkt 1–10: статус або родинний зв’язок, строки й безперервність pobytu, dochód, ubezpieczenie та інші прямо названі документи; pkt 7 не використовуйте як чинну підставу.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-196",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("196", "Art. 196")} вимагає odmowy wszczęcia postępowania про pobyt stały, якщо на день wniosku cudzoziemiec перебуває нелегально або на названих видах візи чи дозволу, затриманий, ув’язнений, має zakaz opuszczania kraju, перебуває після decyzja o zobowiązaniu do powrotu до спливу dobrowolny wyjazd, зобов’язаний виїхати за ${foreignersLaw.article("299", "art. 299")} ust. 6 або перебуває поза Польщею.`,
            sourceLocator: "Art. 196 ust. 1 pkt 1–6",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Окремі винятки стосуються, зокрема, особи з azyl, визначених у статті дітей та особи польського походження; крім того, відмовляють у wszczęciu за неподання odcisków linii papilarnych під час подання або у строк, визначений ${foreignersLaw.article("203", "art. 203")} ust. 5.`,
            sourceLocator: "Art. 196 ust. 2–5",
          },
        ],
        summary:
          "Стаття перелічує перешкоди для початку провадження про pobyt stały та окремі винятки.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Оцінюється стан саме в день подання wniosku; перелік стосується wszczęcia postępowania, а не остаточної оцінки всіх матеріальних умов.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Azyl та спеціальні категорії дітей або osób polskiego pochodzenia обмежують застосування окремих пунктів, але лише в межах тексту статті.",
          },
          {
            locator: "ust. 5",
            explanation:
              "Неподання відбитків під час заяви або у встановлений строк є окремою підставою для odmowa wszczęcia.",
          },
        ],
        legalEffect: foreignersLaw.text`Застосування ${foreignersLaw.article("196", "Art. 196")} може припинити справу до розгляду права на pobyt stały по суті; це не те саме, що odmowa udzielenia zezwolenia за ${foreignersLaw.article("197", "Art. 197")}.`,
        foreignersCase:
          "Зафіксуйте свій статус і місце перебування на дату подання, документи про виняток та виконання вимоги щодо відбитків. У листі органу відокремте wszczęcie від merytoryczna odmowa.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-197",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("197", "Art. 197")} передбачає odmowę udzielenia zezwolenia na pobyt stały, якщо не виконано ${foreignersLaw.article("195", "art. 195")} або існує запис у wykazie osób niepożądanych чи SIS для odmowa wjazdu i pobytu, або цього вимагають оборона, безпека, porządek publiczny чи interes Rzeczypospolitej Polskiej.`,
            sourceLocator: "Art. 197 ust. 1 pkt 1–5",
          },
          {
            kind: "statute-text",
            text: "Окремими підставами є шлюб для обходу міграційних правил, неправдиві дані чи документи, неправдиві свідчення або підроблення, податкові arrears без передбаченого звільнення чи відстрочки та неповернення витрат на рішення про повернення; для окремих категорій стаття звужує перелік підстав.",
            sourceLocator: "Art. 197 ust. 1 pkt 6–9, ust. 2–4",
          },
        ],
        summary:
          "Стаття визначає матеріальні підстави відмови у pobyt stały та спеціальні обмеження для окремих категорій.",
        rules: [
          {
            locator: "ust. 1 pkt 1–6",
            explanation: foreignersLaw.text`Перевіряйте кожну підставу окремо: невиконання ${foreignersLaw.article("195", "Art. 195")}, записи SIS або wykaz, безпека, interes RP та шлюб із метою обходу правил мають різний предмет доказування.`,
          },
          {
            locator: "ust. 1 pkt 7–9",
            explanation:
              "Неправда, podatki та витрати на powrót оцінюються лише за фактичними обставинами й винятками, прямо названими в статті.",
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Для osoby polskiego pochodzenia, osoby z azyl та визначеного громадянина UK діють спеціальні переліки; для pkt 7 не застосовується ${kpaLaw.article("79", "art. 79")} KPA.`,
          },
        ],
        legalEffect: foreignersLaw.text`Навіть виконання умов ${foreignersLaw.article("195", "Art. 195")} не виключає обов’язкової відмови за ${foreignersLaw.article("197", "Art. 197")}, якщо орган встановить відповідну законну обставину.`,
        foreignersCase: foreignersLaw.text`У рішенні позначте конкретний pkt ${foreignersLaw.article("197", "Art. 197")}, перевірте докази органу та застосовний спеціальний режим заявника; не замінюйте аналіз мотивів загальним посиланням на безпеку або SIS.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-198",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо діє ${foreignersLaw.article("197", "Art. 197")} ust. 1 pkt 3 через запис cudzoziemca в SIS для odmowa wjazdu i pobytu, ${foreignersLaw.article("198", "Art. 198")} допускає udzielenie zezwolenia з урахуванням причин запису та zagrożeń з ${foreignersLaw.external("art. 27", SIS_2018_1861_URL)} lit. d rozporządzenia nr 2018/1861.`,
            sourceLocator: "Art. 198 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, що внесла запис, і повідомляє її про рішення або намір надати zezwolenie.",
            sourceLocator: "Art. 198 ust. 2 pkt 1–2",
          },
        ],
        summary:
          "Стаття встановлює спеціальний консультаційний механізм для оцінки SIS-запису під час pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Формула «można udzielić» означає можливість, а не автоматичне право; треба врахувати причини запису та загрози, названі в регламенті.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Консультації та повідомлення іншої держави здійснюються через Komendant Główny Policji відповідним органом провадження.",
          },
        ],
        legalEffect: foreignersLaw.text`SIS-запис не описує наперед результат справи: ${foreignersLaw.article("198", "Art. 198")} дає спеціальний шлях оцінки, але не скасовує інші умови й підстави відмови.`,
        foreignersCase:
          "Попросіть ідентифікувати державу та підставу SIS-запису, відстежте консультації й подайте документи щодо конкретних ризиків; не стверджуйте, що сам запис автоматично унеможливлює дозвіл.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-199",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("199", "Art. 199")} передбачає cofnięcie zezwolenia na pobyt stały через оборону або безпеку держави, porządek publiczny, interes RP, неправдиві дані чи документи, неправдиві свідчення або підроблення, остаточний вирок у Польщі за умисний злочин із карою щонайменше 3 роки або залишення Польщі понад 6 років.`,
            sourceLocator: "Art. 199 ust. 1 pkt 1–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Для окремих категорій ${foreignersLaw.article("195", "Art. 195")} діють спеціальні підстави; дозвіл, наданий через шлюб з obywatel polski, може бути відкликано, якщо розлучення відбулося протягом 2 років від дня надання дозволу. Для встановлення обставин pkt 3 не застосовується ${kpaLaw.article("79", "art. 79")} KPA.`,
            sourceLocator: "Art. 199 ust. 2–4",
          },
        ],
        summary:
          "Стаття визначає підстави відкликання pobyt stały, включно з окремим правилом про розлучення після дозволу на підставі шлюбу.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Cofnięcie потребує встановлення обставини, передбаченої конкретним пунктом; строк понад 6 років стосується залишення території Польщі.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Для osoby polskiego pochodzenia, osoby pozbawionej azyl та громадянина UK застосовуються лише названі спеціальні пункти; правило про розлучення має 2-річну межу.",
          },
          {
            locator: "ust. 4",
            explanation: foreignersLaw.text`У частині встановлення неправди або підроблення діє спеціальне виключення з ${kpaLaw.article("79", "art. 79")} KPA.`,
          },
        ],
        legalEffect:
          "Cofnięcie є окремим рішенням після надання дозволу; воно не випливає лише з підозри без встановлення законної підстави.",
        foreignersCase: foreignersLaw.text`Порівняйте повідомлені факти з pkt ${foreignersLaw.article("199", "Art. 199")}, датами виїздів, вироком або документами справи та надайте пояснення щодо винятків; для шлюбу перевірте дату дозволу й дату розлучення.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-200",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Zezwolenie na pobyt stały wygasa z mocy prawa в день надання cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego UE або в день набуття ним obywatelstwo polskie.",
            sourceLocator: "Art. 200 pkt 1–2",
          },
        ],
        summary:
          "Стаття встановлює два випадки автоматичного припинення чинності zezwolenia na pobyt stały.",
        rules: [
          {
            locator: "pkt 1–2",
            explanation:
              "Юридичною подією є саме надання нового статусу або набуття польського громадянства, а не лише подання відповідної заяви.",
          },
        ],
        legalEffect:
          "Вигасання відбувається z mocy prawa у названий день і відрізняється від cofnięcie рішенням органу.",
        foreignersCase:
          "Установіть дату нового дозволу або документа про громадянство й не використовуйте старе zezwolenie як чинну підставу після цієї дати.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-201",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Zezwolenia na pobyt stały udziela або відмовляє в ньому wojewoda за місцем перебування cudzoziemca у формі decyzji; cofnięcie також відбувається у формі decyzji.",
            sourceLocator: "Art. 201 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Рішення про cofnięcie видає wojewoda, який надав дозвіл, або wojewoda першої інстанції, якщо дозвіл надав Szef Urzędu у другій інстанції; дія може бути z urzędu або на wniosek перелічених органів.",
            sourceLocator: "Art. 201 ust. 3 pkt 1–2",
          },
        ],
        summary:
          "Стаття визначає орган і форму рішень щодо надання та відкликання pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Для первинної заяви орієнтиром є місце перебування cudzoziemca та компетенція wojewoda.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "При cofnięcie важлива історія надання дозволу: перевірте, хто вирішував у першій інстанції, і чи є wniosek уповноваженого органу.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("201", "Art. 201")} розподіляє компетенцію, але сам не встановлює матеріальну підставу для надання чи cofnięcie; її треба шукати в інших статтях.`,
        foreignersCase: foreignersLaw.text`На decyzja перевірте орган, інстанцію, вид дії та підставу порівняно з ${foreignersLaw.article("195", "Art. 195")} або ${foreignersLaw.article("199", "Art. 199")}; помилковий орган є окремим процесуальним питанням.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-202",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Cudzoziemiec подає wniosek про pobyt stały особисто не пізніше останнього дня legalny pobyt; якщо особистого подання не було, wojewoda викликає його щонайменше на 7 днів під rygor залишення wniosku без розгляду.",
            sourceLocator: "Art. 202 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Для małoletni, osoby całkowicie ubezwłasnowolnionej та małoletni bez opieki стаття визначає відповідно батьків або opiekun, судового opiekun та kurator; дитина від 6 років має бути присутня. Вимога строку не застосовується до названих у статті дітей, народжених у Польщі.",
            sourceLocator: "Art. 202 ust. 3–5",
          },
        ],
        summary:
          "Стаття встановлює особисте подання, наслідок неявки та правила представництва дітей і недієздатних осіб.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Збережіть доказ особистого подання або stawiennictwo; 7-денний строк у wezwanie є мінімальним для виконання вимоги.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "Спосіб подання залежить від віку та правового статусу заявника; присутність дитини від 6 років є окремою умовою.",
          },
          {
            locator: "ust. 5",
            explanation:
              "Виняток із строку стосується лише дітей, прямо названих у нормі, а не всіх дітей іноземців.",
          },
        ],
        legalEffect:
          "Невиконання wezwanie про особисту явку може призвести до залишення wniosku без розгляду, але це процесуальний наслідок, а не автоматична відмова у дозволі.",
        foreignersCase:
          "Визначте, хто має підписати й подати wniosek, зафіксуйте legalny pobyt і дату явки, а на wezwanie відповідайте в межах строку та з доказом отримання.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-203",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("203", "Art. 203")} визначає зміст formularz wniosku про pobyt stały: дані cudzoziemca і małżonka, дані документа подорожі, подорожі та pobyty zagraniczne за 5 років, попередній і поточний pobyt, zatrzymanie, перебування в strzeżony ośrodek або areszt dla cudzoziemców, zakaz opuszczania kraju, позбавлення волі чи tymczasowe aresztowanie, podatki та wzór podpisu.`,
            sourceLocator: "Art. 203 ust. 1 pkt 1–7",
          },
          {
            kind: "statute-text",
            text: "До wniosku додають, зокрема, чинний dokument podróży, фотографію та документи, що підтверджують дані й обставини заяви; відсутні документи орган може вимагати строком не менше 14 днів, а відбитки пальців є обов’язковими.",
            sourceLocator: "Art. 203 ust. 2–5",
          },
        ],
        summary:
          "Стаття описує formularz, заяви та документи для pobyt stały, wezwanie про braki й зняття відбитків.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Формуляр містить не лише особисті дані, а й історію pobytu, виїздів та податкових зобов’язань; письмова заява про правдивість має бути під rygor odpowiedzialności karnej.",
          },
          {
            locator: "ust. 2a–2b",
            explanation:
              "Строк для відсутніх документів — не менше 14 днів і має враховувати час їх отримання; при кількох wezwanie застосовується найдовший строк.",
          },
          {
            locator: "ust. 3–5",
            explanation:
              "Інший документ особи допускається лише у szczególnie uzasadniony przypadek; якщо відбитки не зняті з вини wojewoda, новий строк не може бути коротшим за 7 днів.",
          },
        ],
        legalEffect:
          "Неповний wniosek запускає процедуру uzupełnienia, але наслідки залежать від того, який саме brak і чи виконано wezwanie; сама стаття не гарантує позитивного рішення.",
        foreignersCase:
          "Підготуйте повну історію виїздів, документ подорожі, фото та докази підстави, а всі wezwanie щодо документів і відбитків виконуйте окремо та вчасно.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-204",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} делегує ministrowi właściwemu do spraw wewnętrznych визначення в rozporządzeniu wzoru wniosku про pobyt stały, кількості та технічних вимог до фотографій, wzoru stempla, способу зняття відбитків і способу запису та передачі даних для персоналізації karty pobytu.`,
            sourceLocator: "Art. 204 ust. 1 pkt 1–5",
          },
          {
            kind: "statute-text",
            text: "При виданні розпорядження міністр має врахувати sprawność postępowania та ефективну перевірку przesłanek udzielenia zezwolenia.",
            sourceLocator: "Art. 204 ust. 2",
          },
        ],
        summary:
          "Стаття є делегацією для технічних форм і способів обробки даних у процедурі pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Актуальний wzór formularza, вимоги до фото та технічні правила треба перевіряти в rozporządzenie, а не виводити лише з ${foreignersLaw.article("204", "Art. 204")}.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Підзаконні правила мають забезпечувати ефективність провадження та перевірку умов, але не можуть замінити матеріальні przesłanki закону.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} не встановлює нової підстави для pobyt stały і не називає кількості фотографій; він визначає межі технічного rozporządzenie.`,
        foreignersCase:
          "Перед поданням звірте чинний formularz, фото, stamp і технічні вимоги в підзаконному акті, застосовному до дати wniosku.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-205",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У провадженні про pobyt stały для małżonek obywatela polskiego орган встановлює, чи шлюб був укладений або існує з метою обходу правил в’їзду, przejazdu, pobytu чи wyjazdu cudzoziemców; для цього застосовуються ${foreignersLaw.article("169", "art. 169")} ust. 2, 4 і 5.`,
            sourceLocator: "Art. 205 ust. 1–2",
          },
        ],
        summary:
          "Стаття вимагає окремо перевірити реальну мету шлюбу в процедурі pobyt stały на підставі шлюбу з громадянином Польщі.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Орган оцінює, чи є шлюб способом обходу міграційних правил; одного формального aktu małżeństwa недостатньо для висновку про відсутність цієї обставини.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Порядок встановлення обставин визначається відсиланням до конкретних частин ${foreignersLaw.article("169", "Art. 169")}.`,
          },
        ],
        legalEffect:
          "Стаття регулює перевірку обставин шлюбу, а не створює автоматичне право на pobyt stały для кожного подружжя obywatel polski.",
        foreignersCase:
          "У справі підготуйте послідовні докази спільного сімейного життя й відповідайте на wezwanie органу; правовий висновок має спиратися на повні факти, а не лише на свідоцтво про шлюб.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-206",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Якщо wniosek про pobyt stały подано під час legalny pobyt і він не має braków formalnych або їх вчасно усунуто, wojewoda ставить у dokument podróży odcisk stempla, а pobyt вважається legalny від подання до остаточності рішення.",
            sourceLocator: "Art. 206 ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: "Правило про legalny pobyt за ust. 1 pkt 2 не застосовується, якщо провадження про pobyt stały зупинено на wniosek strony.",
            sourceLocator: "Art. 206 ust. 2",
          },
        ],
        summary:
          "Стаття встановлює наслідок своєчасного й формально повного подання для legalny pobyt під час розгляду pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Потрібні одночасно legalny pobyt на момент подання та відсутність або своєчасне усунення braków formalnych; stamp підтверджує подання, а не позитивне рішення.",
          },
          {
            locator: "ust. 2",
            explanation:
              "За добровільного zawieszenie postępowania спеціальне продовження legalny pobyt не діє.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("206", "Art. 206")} стосується легальності перебування під час конкретного провадження і не замінює рішення про udzielenie zezwolenia та документ подорожі.`,
        foreignersCase:
          "Збережіть підтвердження дати подання, stamp і виконання wezwanie про braki; окремо перевірте, чи не було zawieszenie на wniosek strony.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-207",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: "Перед decyzja про pobyt stały wojewoda запитує інформацію, чи в’їзд і pobyt cudzoziemca загрожують обороні, безпеці держави або безпеці й porządek publiczny, звертаючись до комendanta oddziału Straży Granicznej, komendanta wojewódzkiego Policji та Szefa ABW.",
            sourceLocator: "Art. 207 ust. 1–3",
          },
          {
            kind: "statute-text",
            text: "Інформація надається протягом 30 днів, у szczególnie uzasadniony przypadek строк може бути продовжено до 60 днів; за ненадання у строк вимога вважається виконаною. Для особи до 13 років ust. 1 не застосовується.",
            sourceLocator: "Art. 207 ust. 4–8",
          },
        ],
        summary:
          "Стаття регулює обов’язковий обмін інформацією про безпекові ризики перед рішенням щодо pobyt stały.",
        rules: [
          {
            locator: "ust. 1–3",
            explanation:
              "Запит до органів безпеки є етапом перевірки; у särskólnie uzasadniony przypadek його можна направити також іншим органам.",
          },
          {
            locator: "ust. 4–7",
            explanation:
              "Строк становить 30 днів або максимум 60 після продовження; пропуск строку означає виконання вимоги отримати інформацію, але не автоматичне надання zezwolenia.",
          },
          {
            locator: "ust. 8",
            explanation:
              "Особа, яка не досягла 13 років на день wniosku, звільнена саме від перевірки за ust. 1.",
          },
        ],
        legalEffect:
          "Норма організує міжвідомчу перевірку й строки, але сама не визначає, яким буде рішення про pobyt stały.",
        foreignersCase:
          "Відстежуйте дату запиту та можливого продовження, але не трактуйте відсутність відповіді органу як позитивний дозвіл; для дитини перевірте вік на дату wniosku.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-207a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У провадженні про udzielenie або cofnięcie zezwolenia na pobyt stały стороною є виключно cudzoziemiec, про якого йдеться відповідно в ${foreignersLaw.article("195", "art. 195")} або ${foreignersLaw.article("199", "art. 199")}.`,
            sourceLocator: "Art. 207a",
          },
        ],
        summary:
          "Стаття визначає склад сторони у провадженні про надання або відкликання pobyt stały.",
        rules: [
          {
            locator: "Art. 207a",
            explanation:
              "Процесуальний статус strony за цією статтею належить саме cudzoziemiec; не додавайте інших сторін лише через їхній фактичний інтерес.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("207a", "Art. 207a")} стосується процесуального статусу, а не матеріального права на zezwolenie або способу його відкликання.`,
        foreignersCase:
          "У листуванні перевірте, кого орган визнав stroną, і використовуйте правила KPA про участь саме в межах статусу, який випливає з цієї статті.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-208",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Коли орган іншої держави Schengen просить консультацію за ${foreignersLaw.external("art. 28", SIS_2018_1861_URL)} або ${foreignersLaw.external("29", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861, відповідний wojewoda встановлює, чи є підстави cofnięcia pobyt stały, враховуючи причини SIS-запису та загрози з ${foreignersLaw.external("art. 28", SIS_2018_1861_URL)} lit. d або ${foreignersLaw.external("art. 29", SIS_2018_1861_URL)} lit. d цього регламенту.`,
            sourceLocator: "Art. 208 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Wojewoda повідомляє Komendant Główny Policji про рішення або відсутність підстав протягом 10 днів; строк можна продовжити не більш як на 12 днів, а Komendant Główny Policji передає інформацію іншій державі протягом 14 днів або продовженого строку.",
            sourceLocator: "Art. 208 ust. 2–4",
          },
        ],
        summary:
          "Стаття координує консультації з іншою державою Schengen щодо можливого cofnięcie pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "Орган оцінює не сам факт запиту, а конкретні причини SIS-запису та названі регламентом zagrożenia.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "10-денний строк є строком повідомлення, продовження потребує звернення до іншої держави до його спливу й має межу 12 днів.",
          },
        ],
        legalEffect: foreignersLaw.text`Консультаційна процедура може вплинути на оцінку cofnięcie, але ${foreignersLaw.article("208", "Art. 208")} сам не є рішенням про відкликання дозволу.`,
        foreignersCase: foreignersLaw.text`З’ясуйте, який саме SIS-запит надійшов, і контролюйте дати повідомлень та рішення; фактичний результат залежить від встановлених підстав ${foreignersLaw.article("199", "Art. 199")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-208a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо дані cudzoziemca внесені до SIS для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860, wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультацію чи повідомляє державу, що внесла дані, залежно від того, чи супроводжувалося рішення zakaz ponownego wjazdu.`,
            sourceLocator: "Art. 208a pkt 1–3",
          },
        ],
        summary:
          "Стаття розрізняє консультацію та повідомлення іншої держави залежно від SIS-запису і наявності заборони повторного в’їзду.",
        rules: [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`За рішенням із zakaz ponownego wjazdu орган звертається про консультацію за ${foreignersLaw.external("art. 9", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860.`,
          },
          {
            locator: "pkt 2–3",
            explanation:
              "Якщо заборона повторного в’їзду супроводжує рішення, орган повідомляє про наданий pobyt stały; якщо заборони немає, повідомляє про намір надати або про надання pobyt stały за відповідним SIS-сценарієм.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("208a", "Art. 208a")} встановлює координацію з державою, що внесла SIS-дані, але не замінює оцінку умов pobyt stały та рішення компетентного органу.`,
        foreignersCase:
          "Уточніть мету SIS-запису та наявність zakaz ponownego wjazdu, після чого перевірте, чи орган обрав консультацію або повідомлення за правильним пунктом.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-208b",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо орган іншої держави Schengen просить консультацію за ${foreignersLaw.external("art. 10", SIS_2018_1860_URL)} або ${foreignersLaw.external("11", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860, а cudzoziemiec має pobyt stały, відповідний wojewoda встановлює, чи є підстави cofnięcia дозволу.`,
            sourceLocator: "Art. 208b ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Правила строків відповідають ${foreignersLaw.article("208", "Art. 208")}: повідомлення через Komendant Główny Policji — протягом 10 днів, можливе продовження максимум на 12 днів, а передача іншій державі — протягом 14 днів або продовженого строку.`,
            sourceLocator: "Art. 208b ust. 2–4",
          },
        ],
        summary:
          "Стаття регулює SIS-консультації іншого типу щодо особи, яка вже має pobyt stały.",
        rules: [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Після запиту за ${foreignersLaw.external("art. 10", SIS_2018_1860_URL)} або ${foreignersLaw.external("11", SIS_2018_1860_URL)} регламенту орган перевіряє саме підстави cofnięcia, а не просто чинність картки.`,
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Строки 10, 12 і 14 днів стосуються послідовних повідомлень через польські органи та не є строком автоматичного рішення про pobyt.",
          },
        ],
        legalEffect:
          "Стаття організує міжнародний обмін інформацією; питання фактичного cofnięcie вирішується за окремою процедурою та підставами.",
        foreignersCase: foreignersLaw.text`Збережіть повідомлення про консультацію, перевірте SIS-підставу й дати, а заперечення щодо cofnięcie будуйте на конкретних фактах і ${foreignersLaw.article("199", "Art. 199")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-209",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("209", "Art. 209")} має позначку «uchylony» і не містить чинного правила про pobyt stały або іншу процедуру.`,
            sourceLocator: "Art. 209",
          },
        ],
        summary: foreignersLaw.text`${foreignersLaw.article("209", "Art. 209")} є uchylony у чинному тексті; його не можна використовувати як самостійну правову підставу.`,
        rules: [
          {
            locator: "Art. 209",
            explanation:
              "Для актуального висновку перейдіть до чинної статті, що регулює потрібне питання, і не відновлюйте норму за старими шаблонами.",
          },
        ],
        legalEffect: foreignersLaw.text`У чинній редакції ${foreignersLaw.article("209", "Art. 209")} не встановлює правового наслідку, який можна було б застосувати до заяви.`,
        foreignersCase: foreignersLaw.text`Якщо рішення або консультація посилається на ${foreignersLaw.article("209", "Art. 209")} як на чинну норму, перевірте цитування та вимагайте аналізу актуальної правової підстави.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-210",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Decyzję про udzielenie zezwolenia na pobyt stały видають протягом 6 місяців; цей строк рахується від останньої з подій: особистого подання або stawiennictwo, формально повного wniosku чи усунення braków, подання документів за ${foreignersLaw.article("203", "art. 203")} ust. 2 pkt 2 або безрезультатного спливу строку на їх подання.`,
            sourceLocator: "Art. 210 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "Postępowanie odwoławcze у справі про pobyt stały закінчується протягом 90 днів; якщо odwołanie має braki, строк рахується від їх усунення.",
            sourceLocator: "Art. 210 ust. 3–4",
          },
        ],
        summary:
          "Стаття встановлює спеціальний 6-місячний строк першої інстанції та 90-денний строк odwoławcze postępowanie.",
        rules: [
          {
            locator: "ust. 1–2",
            explanation:
              "Початковою датою є не завжди дата подання: визначте останню з прямо перелічених подій і перевірте формальну повноту матеріалів.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "Для odwołanie з braki строк не починається до їх усунення; сам строк не означає автоматичного надання zezwolenia.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("210", "Art. 210")} визначає строки розгляду, але пропуск строку не перетворює заяву автоматично на позитивне рішення; наслідки бездіяльності треба оцінювати окремо.`,
        foreignersCase:
          "Зберігайте підтвердження кожної події, що запускає строк, wezwanie про braki та дату їх усунення; окремо рахуйте першу й апеляційну інстанції.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-211",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} передбачає udzielenie zezwolenia na pobyt rezydenta długoterminowego UE на czas nieoznaczony особі, яка легально й безперервно перебувала в Польщі щонайменше 5 років і має стабільний та регулярний dochód, ubezpieczenie zdrowotne та підтверджене знання польської мови.`,
            sourceLocator: "Art. 211 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Доходи оцінюють за ${foreignersLaw.article("140", "art. 140")} ust. 2 за 2 роки у випадку ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1 і за 3 роки в інших випадках; знання мови підтверджується, зокрема, рівнем B1 або документом про навчання польською, а вимога мови не застосовується до особи, молодшої 16 років.`,
            sourceLocator: "Art. 211 ust. 2–5",
          },
        ],
        summary:
          "Стаття визначає сукупні умови статусу rezydent długoterminowy UE: 5 років, кошти, страхування та польська мова.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "П’ятирічний pobyt має бути legalny і nieprzerwany безпосередньо перед wniosek; усі три матеріальні умови мають виконуватися разом.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Розрахунок dochód залежить від того, чи використовується спеціальне зарахування з ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1; не застосовуйте один період до всіх справ.`,
          },
          {
            locator: "ust. 3–5",
            explanation:
              "Прийнятний документ мови та перелік poświadczeń треба перевіряти за нормою і чинним rozporządzenie; для неповнолітнього до 16 років діє виняток.",
          },
        ],
        legalEffect:
          "Статус не випливає лише з п’ятирічного проживання: орган перевіряє дохід, страхування, мову, безперервність і правила зарахування періодів.",
        foreignersCase: foreignersLaw.text`Побудуйте розрахунок 5 років за ${foreignersLaw.article("212", "Art. 212")}, окремо підтвердьте dochód, ubezpieczenie та мову прийнятним документом і звірте періоди безпосередньо перед wniosek.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-212",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("212", "Art. 212")} визначає, які періоди входять до 5-річного pobyt для rezydent długoterminowy UE: у названих випадках сумарний legalny pobyt в UE за Blue Card, adnotacja «naukowiec», міжнародний захист або документ іншої держави-члена для працівника високої кваліфікації, період провадження про ochronę międzynarodową понад 18 місяців, а також повністю або наполовину окремі періоди в Польщі чи іншій державі-члені.`,
            sourceLocator: "Art. 212 ust. 1 pkt 1–4",
          },
          {
            kind: "statute-text",
            text: "Стаття виключає, зокрема, pobyt працівника, відрядженого для транскордонних послуг, навчання, окремі візи та дозволи, період після рішення про powrót, частину процедур захисту, малий прикордонний рух і визначені міжнародні місії; безперервність має межі 6/10 місяців у Польщі та 12/18 місяців для названого pobyt в іншій державі UE, із винятками.",
            sourceLocator: "Art. 212 ust. 2–4",
          },
        ],
        summary:
          "Стаття дає правила зарахування та виключення періодів і визначає межі допустимих перерв для 5-річного стажу.",
        rules: [
          {
            locator: "ust. 1 pkt 1–2",
            explanation:
              "Для Blue Card, adnotacja «naukowiec», міжнародного захисту та названого висококваліфікованого pobytu перевірте весь період у UE, мінімальний польський період і спеціальну підставу наступного wniosek.",
          },
          {
            locator: "ust. 1 pkt 3–4",
            explanation:
              "Половина строку зараховується лише для прямо названих віз, дозволів або студентської мобільності; не округлюйте період довільно.",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Спочатку виключіть неприпустимі періоди, потім перевірте тривалість кожної перерви та загальну межу; названі службові, сімейні й навчальні винятки потребують доказів.",
          },
        ],
        legalEffect:
          "Неправильне включення навчання, транскордонних послуг або періоду після рішення про powrót може змінити розрахунок 5 років; остаточний стаж залежить від документованої хронології.",
        foreignersCase: foreignersLaw.text`Складіть календар усіх віз, дозволів, процедур і виїздів із позначенням «рахується повністю», «половина» або «не рахується» за відповідним пунктом ${foreignersLaw.article("212", "Art. 212")}.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-213",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} вимагає odmowy wszczęcia postępowania про pobyt rezydenta długoterminowego UE, якщо на день wniosku cudzoziemiec перебуває нелегально або на названій візі, для навчання чи szkolenie, очікує навчання, має гуманітарний, tolerowany, azyl, ochronę czasową або просить захист, користується ICT/іншим переліченим дозволом чи малим прикордонним рухом.`,
            sourceLocator: "Art. 213 ust. 1 pkt 1 lit. a–h",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Також перешкодами є транскордонний працівник або usługodawca, затримання, strzeżony ośrodek, zakaz opuszczania kraju, позбавлення волі, незавершений dobrowolny wyjazd після рішення про powrót, обов’язок виїхати за ${foreignersLaw.article("299", "art. 299")} ust. 6, перебування поза Польщею та неподання відбитків у строк ${foreignersLaw.article("219", "art. 219")} ust. 6.`,
            sourceLocator: "Art. 213 ust. 1 pkt 2–7, ust. 2",
          },
        ],
        summary:
          "Стаття визначає обставини, за яких заява на статус rezydent długoterminowy UE не переходить до розгляду по суті.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation:
              "Вид поточного pobyt на день wniosku має вирішальне значення; перелік навчальних, захисних, ICT та прикордонних підстав є конкретним.",
          },
          {
            locator: "ust. 1 pkt 2–7",
            explanation:
              "Процесуальні та поворотні обставини також перешкоджають wszczęcie, навіть якщо заявник накопичив певний попередній стаж.",
          },
          {
            locator: "ust. 2",
            explanation: foreignersLaw.text`Неподання odcisków linii papilarnych під час wniosku або у строк ${foreignersLaw.article("219", "art. 219")} ust. 6 є окремою підставою odmowa wszczęcia.`,
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} відрізняється від відмови у наданні статусу за ${foreignersLaw.article("214", "Art. 214")}: йдеться про недопустимість початку провадження за наявної обставини.`,
        foreignersCase:
          "На дату wniosku підтвердьте вид і чинність поточного pobyt, відсутність поворотних перешкод та виконання вимоги щодо відбитків; у документі органу перевірте правильність стадії odmowa.",
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-214",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemcowi відмовляють у наданні zezwolenia na pobyt rezydenta długoterminowego UE, якщо він не виконує вимоги ${foreignersLaw.article("211", "Art. 211")} ust. 1 або цього вимагають оборона, безпека держави чи безпека та porządek publiczny; на ці безпекові обставини не можна посилатися з економічних причин.`,
            sourceLocator: "Art. 214 ust. 1–2",
          },
        ],
        summary:
          "Стаття визначає дві групи матеріальних підстав відмови у статусі rezydent długoterminowy UE та забороняє економічну мотивацію безпекової підстави.",
        rules: [
          {
            locator: "ust. 1 pkt 1",
            explanation: foreignersLaw.text`Спочатку перевірте сукупні вимоги ${foreignersLaw.article("211", "Art. 211")}, а не лише 5-річний строк.`,
          },
          {
            locator: "ust. 1 pkt 2, ust. 2",
            explanation:
              "Безпекова або public-order підстава має бути правовою, а не посиланням на економічний інтерес чи конкуренцію.",
          },
        ],
        legalEffect:
          "Виконання формальних умов не виключає відмову за доведеною безпековою підставою; економічна причина сама по собі не може замінити її.",
        foreignersCase: foreignersLaw.text`У рішенні розділіть невиконання умов ${foreignersLaw.article("211", "Art. 211")} і безпекову підставу, перевірте фактичні мотиви та не погоджуйтеся з чисто економічним обґрунтуванням під pkt 2.`,
      },
      {
        provisionId: "ustawa-o-cudzoziemcach-art-214a",
        reviewStatus: "reviewed",
        claims: [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо дані cudzoziemca внесені до SIS для odmowa wjazdu i pobytu, під час оцінки ${foreignersLaw.article("214", "Art. 214")} ust. 1 pkt 2 враховують причини рішення держави, що внесла запис, і zagrożenia з ${foreignersLaw.external("art. 27", SIS_2018_1861_URL)} lit. d rozporządzenia nr 2018/1861.`,
            sourceLocator: "Art. 214a ust. 1",
          },
          {
            kind: "statute-text",
            text: "Wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji проводить консультації з державою, що внесла запис, і повідомляє її про рішення або намір надати zezwolenia na pobyt rezydenta długoterminowego UE.",
            sourceLocator: "Art. 214a ust. 2 pkt 1–2",
          },
        ],
        summary:
          "Стаття встановлює спеціальну оцінку та консультації при SIS-записі під час заяви на rezydent długoterminowy UE.",
        rules: [
          {
            locator: "ust. 1",
            explanation:
              "SIS-запис треба розглядати разом із причинами рішення іншої держави та конкретними zagrożenia регламенту, а не як автоматичну відмову без аналізу.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Консультація і повідомлення проводяться через Komendant Główny Policji компетентним органом відповідної інстанції.",
          },
        ],
        legalEffect: foreignersLaw.text`${foreignersLaw.article("214a", "Art. 214a")} визначає спосіб міжнародної перевірки безпекової підстави ${foreignersLaw.article("214", "Art. 214")} і не скасовує перевірку решти умов ${foreignersLaw.article("211", "Art. 211")}.`,
        foreignersCase:
          "Попросіть конкретизувати SIS-джерело та причини запису, перевірте проведення консультацій і подайте докази, релевантні оцінці реального ризику та іншим умовам статусу.",
      },
    ],
  })
