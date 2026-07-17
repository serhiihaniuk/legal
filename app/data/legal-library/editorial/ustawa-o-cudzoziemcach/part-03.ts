import type { LegalProvisionId } from "../../contracts"
import { authorLegalTextCitationsTree } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})

export const foreignersActPart03 =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
      reviewedArticle("83a", {
        provisionId: "ustawa-o-cudzoziemcach-art-83a",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо дані cudzoziemiec внесені до System Informacyjny Schengen для цілей art. 3 ust. 1 rozporządzenia nr 2018/1860, wojewoda або Szef Urzędu у другій інстанції діє через Komendant Główny Policji: просить державу Schengen провести консультацію за art. 9 ust. 1 цього розпорядження, коли запис пов’язаний із рішенням із zakaz ponownego wjazdu, або повідомляє про рішення щодо продовження wizy krajowej чи про намір її продовжити — залежно від наявності такої заборони.",
        statuteLocator: "Art. 83a pkt 1–3",
        practicalText:
          "Це правило про міждержавну перевірку та обмін інформацією щодо SIS, а не про автоматичну відмову в zezwolenie на pobyt чи про право на працю. Для висновку потрібні конкретний запис, рішення іншої держави, наявність zakaz ponownego wjazdu і дія з візою.",
        practicalLocator: "Art. 83a pkt 1–3",
        summary:
          "Art. 83a визначає, як wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji взаємодіє з державою Schengen, яка внесла дані cudzoziemiec до SIS за правилами про повернення.",
        rules: [
          {
            locator: "Art. 83a pkt 1",
            explanation:
              "За запису, пов’язаного з рішенням іншої держави із zakaz ponownego wjazdu, орган просить консультацію за art. 9 ust. 1 rozporządzenia nr 2018/1860.",
          },
          {
            locator: "Art. 83a pkt 2–3",
            explanation:
              "Якщо є заборона, повідомляється рішення про продовження wizy krajowej; якщо заборони немає, повідомляється намір продовжити або факт продовження wizy krajowej.",
          },
        ],
        legalEffect:
          "Стаття встановлює обов’язок консультації або повідомлення між органами. Вона сама не продовжує візу, не легалізує pobyt і не є документом, що uprawnia do pracy.",
        foreignersCase:
          "У справі зафіксуйте SIS-впис, державу-ініціатора, рішення про powrót і zakaz ponownego wjazdu, а також заяву або decyzja про продовження wizy. Окремо перевірте legal stay та підставу prawa do pracy.",
      }),
      reviewedArticle("84", {
        provisionId: "ustawa-o-cudzoziemcach-art-84",
        reviewStatus: "reviewed",
        statuteText:
          "Wojewoda, właściwy за місцем pobytu cudzoziemiec, у формі decyzja продовжує або відмовляє у продовженні wizy Schengen чи wizy krajowej. Wiza krajowa може бути продовжена лише один раз, а pobyt на її підставі не може перевищувати період, передбачений для wizy krajowej; виняток діє для cudzoziemiec у szpital, стан якого не дозволяє виїхати.",
        statuteLocator: "Art. 84 ust. 1–4",
        practicalText:
          "Подання на продовження стосується строку та чинності візи, а не udzielenie zezwolenia na pobyt. Госпітальна підстава потребує доказу, що саме стан здоров’я перешкоджає виїзду; wojewoda може призначити biegły lekarz.",
        practicalLocator: "Art. 84 ust. 3–5",
        summary:
          "Art. 84 визначає компетенцію wojewoda та межі продовження Schengen або national visa, включно зі спеціальним правилом для госпіталізованого cudzoziemiec.",
        rules: [
          {
            locator: "Art. 84 ust. 1",
            explanation:
              "Рішення про продовження або відмову приймає wojewoda за місцем pobytu cudzoziemiec.",
          },
          {
            locator: "Art. 84 ust. 2",
            explanation:
              "Wizę krajową можна продовжити один раз; pobyt за продовженою візою не може перевищити період pobytu, передбачений для wizy krajowej.",
          },
          {
            locator: "Art. 84 ust. 3–5",
            explanation:
              "Для особи в szpital, яка через стан здоров’я не може виїхати, строк ważności або pobytu за national visa продовжується до можливості виїзду. Wojewoda може залучити лікаря-експерта.",
          },
        ],
        legalEffect:
          "Результатом є decyzja про продовження або відмову у продовженні візи. Це не замінює zezwolenie na pobyt і не створює самостійного prawa do pracy.",
        foreignersCase:
          "Зберіть паспорт і візу, календар в’їздів та дозволених днів, підтвердження місця pobytu, заяву про продовження та медичні документи szpital. Перевірте окремо, чи робота має власну правову підставу.",
      }),
      reviewedArticle("85", {
        provisionId: "ustawa-o-cudzoziemcach-art-85",
        reviewStatus: "reviewed",
        statuteText:
          "Cudzoziemiec, який хоче продовжити pobyt на підставі wizy Schengen або national visa, подає заповнений wniosek не пізніше останнього дня legal stay. Formularz містить дані особи й travel document, попередні візи, обґрунтування, поїздки за останні 5 років, кошти, ubezpieczenie zdrowotne та zatrudnienie; застосовуються також Art. 77 ust. 1 pkt 2–3 і Art. 25 ust. 4, а travel document пред’являється для огляду.",
        statuteLocator: "Art. 85 ust. 1–4",
        practicalText:
          "Строк подання рахується від legal stay, а не лише від дати закінчення наклейки візи. Відомість про zatrudnienie у formularz не доводить prawa do pracy; продовження візи та дозвіл працювати треба аналізувати окремо.",
        practicalLocator: "Art. 85 ust. 1–2",
        summary:
          "Art. 85 встановлює строк, зміст та базові документи wniosek про продовження Schengen або national visa.",
        rules: [
          {
            locator: "Art. 85 ust. 1",
            explanation:
              "Wniosek подається не пізніше дня, коли спливає legal stay cudzoziemiec у Польщі.",
          },
          {
            locator: "Art. 85 ust. 2 pkt 1–8",
            explanation:
              "Форма охоплює ідентифікаційні дані, travel document, візи, причину продовження, закордонні поїздки, кошти, страховку та працю.",
          },
          {
            locator: "Art. 85 ust. 3–4",
            explanation:
              "До заяви застосовуються визначені вимоги Art. 77, зокрема щодо документа подорожі, який також треба пред’явити для огляду.",
          },
        ],
        legalEffect:
          "Належно поданий wniosek дає змогу розглянути продовження візи в компетентному органі, але Art. 85 сам не продовжує legal stay і не надає права працювати.",
        foreignersCase:
          "Зафіксуйте останній день legal stay і доказ подання до нього. Перевірте всі поля formularz, копію паспорта, попередні візи, фінансові та страхові документи, опис мети та окремі документи щодо роботи.",
      }),
      reviewedArticle("86", {
        provisionId: "ustawa-o-cudzoziemcach-art-86",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо wniosek про продовження wizy Schengen або wizy krajowej подано після строку з Art. 85 ust. 1, відмовляється у wszczęciu postępowania щодо продовження цієї візи.",
        statuteLocator: "Art. 86",
        practicalText:
          "Це процесуальна відмова у початку провадження, а не оцінка матеріальних умов продовження. Пізнє подання також не дає підстави автоматично застосовувати legal-stay ефект Art. 87.",
        practicalLocator: "Art. 86 w związku z Art. 85 ust. 1 i Art. 87",
        summary:
          "Art. 86 визначає наслідок пропуску граничного дня для подання на продовження візи.",
        rules: [
          {
            locator: "Art. 86",
            explanation:
              "Після спливу строку Art. 85 ust. 1 орган не розпочинає провадження про продовження відповідної візи.",
          },
        ],
        legalEffect:
          "Наслідком є odmowa wszczęcia postępowania. Стаття не створює нового документа pobyt і не вирішує питання prawa do pracy.",
        foreignersCase:
          "Порівняйте дату закінчення legal stay з датою фактичного надходження wniosek і збережіть підтвердження подання. Не називайте таку ситуацію odmowa udzielenia візи по суті.",
      }),
      reviewedArticle("87", {
        provisionId: "ustawa-o-cudzoziemcach-art-87",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо строк подання збережено і wniosek про продовження візи не має braków formalnych або їх своєчасно усунуто, wojewoda ставить у travel document stamp про подання, а pobyt cudzoziemiec вважається legal від дня подання до дня, коли рішення про продовження стане ostateczna. Цей ефект не застосовується, якщо провадження зупинено на заяву сторони.",
        statuteLocator: "Art. 87 ust. 1–2",
        practicalText:
          "Art. 87 охоплює лише legal stay на час конкретного провадження про продовження візи. Stamp або очікування decyzja не є zezwolenie na pobyt і не доводять окремо prawa do pracy.",
        practicalLocator: "Art. 87 ust. 1 pkt 1–2; ust. 2",
        summary:
          "Art. 87 встановлює stamp та тимчасовий legal-stay ефект для своєчасного й формально належного wniosek про продовження візи.",
        rules: [
          {
            locator: "Art. 87 ust. 1 pkt 1",
            explanation:
              "За виконання умов wojewoda розміщує в travel document odcisk stempla, що підтверджує подання wniosek.",
          },
          {
            locator: "Art. 87 ust. 1 pkt 2",
            explanation:
              "Pobyt вважається legal від подання до набрання рішенням про продовження візи ostateczna.",
          },
          {
            locator: "Art. 87 ust. 2",
            explanation:
              "На час zawieszenie провадження за заявою сторони правило про legal pobyt з ust. 1 pkt 2 не застосовується.",
          },
        ],
        legalEffect:
          "Стаття тимчасово визначає legal stay у межах візового провадження. Вона не гарантує продовження візи, не визначає eligibility для zezwolenie na pobyt і не замінює перевірку prawa do pracy.",
        foreignersCase:
          "Зберігайте wniosek, підтвердження дати, stamp, документи про усунення braków formalnych та всі повідомлення про zawieszenie. Для роботодавця окремо підтвердьте правову підставу конкретної роботи.",
      }),
      reviewedArticle("88", {
        provisionId: "ustawa-o-cudzoziemcach-art-88",
        reviewStatus: "reviewed",
        statuteText:
          "Продовжену wizę krajową розміщують у travel document як наклейку wizowa. У особливих випадках, обґрунтованих інтересом cudzoziemiec, її розміщують на окремому blankiet wizowy.",
        statuteLocator: "Art. 88 ust. 1–2",
        practicalText:
          "Art. 88 регулює спосіб оформлення вже продовженої wizy krajowej, а не підстави її продовження. Blankiet у винятковому випадку не перетворюється на дозвіл на pobyt чи працю.",
        practicalLocator: "Art. 88 ust. 1–2",
        summary:
          "Art. 88 визначає документальну форму, у якій видається продовжена national visa.",
        rules: [
          {
            locator: "Art. 88 ust. 1",
            explanation: "Звичайна форма — naklejka wizowa у travel document.",
          },
          {
            locator: "Art. 88 ust. 2",
            explanation:
              "За особливих обставин та інтересу cudzoziemiec наклейку можна розмістити на окремому blankiet wizowy.",
          },
        ],
        legalEffect:
          "Норма визначає носій і спосіб фіксації продовженої national visa. Вона не створює окремої підстави legal stay понад саму візу та не надає prawa do pracy.",
        foreignersCase:
          "Після рішення перевірте номер, дати та форму візи у паспорті або на blankiet, зіставте їх із decyzja та збережіть обидва документи. Не замінюйте ними документи про право працювати.",
      }),
      reviewedArticle("89", {
        provisionId: "ustawa-o-cudzoziemcach-art-89",
        reviewStatus: "reviewed",
        statuteText:
          "Minister właściwy do spraw wewnętrznych у porozumieniu з міністром закордонних справ визначає w drodze rozporządzenia формуляри wnioski про продовження Schengen або national visa і технічні вимоги до фотографії, зразок stamp та спосіб розміщення naklejka продовженої national visa. У розпорядженні мають бути враховані контроль правильності wniosek, політика wiza та протидія нелегальній міграції.",
        statuteLocator: "Art. 89 ust. 1–2 pkt 1–3",
        practicalText:
          "Це законодавча делегація для технічних форм і способів фіксації. Конкретний formularz або вимога до фотографії береться з чинного rozporządzenie, а не виводиться з номера статті.",
        practicalLocator: "Art. 89 ust. 1–2",
        summary:
          "Art. 89 уповноважує міністрів встановити технічні правила подання та оформлення продовження візи.",
        rules: [
          {
            locator: "Art. 89 ust. 1 pkt 1–3",
            explanation:
              "Розпорядження охоплює wnioski і фотографії, stamp про подання та розміщення наклейки national visa у travel document або на blankiet.",
          },
          {
            locator: "Art. 89 ust. 2 pkt 1–2",
            explanation:
              "Підзаконні правила мають забезпечувати контроль правильності wniosek, політику віз і протидію нелегальній міграції.",
          },
        ],
        legalEffect:
          "Art. 89 не є рішенням про продовження візи й не встановлює індивідуального legal stay або prawa do pracy; він визначає межі майбутнього технічного регулювання.",
        foreignersCase:
          "Для подання використовуйте чинний formularz, вимоги до фото та порядок stamp/наклейки з розпорядження. Перевірте, що технічна форма не підміняє доказів мети, коштів, страховки чи права на роботу.",
      }),
      reviewedArticle("89a", {
        provisionId: "ustawa-o-cudzoziemcach-art-89a",
        reviewStatus: "reviewed",
        statuteText:
          "Wojewoda або Szef Urzędu у другій інстанції, який видав рішення про продовження cudzoziemiec wizy Schengen, неzwłocznie отримує з Wizowy System Informacyjny дані з art. 19 ust. 1 rozporządzenia nr 2017/2226 і безпосередньо імпортує їх до останнього запису про в’їзд/виїзд цієї особи в EES відповідно до art. 14 rozporządzenia nr 767/2008.",
        statuteLocator: "Art. 89a",
        practicalText:
          "Стаття регулює службову синхронізацію VIS та EES після decyzja про продовження Schengen visa. Вона не продовжує документ сама по собі, не легалізує інший pobyt і не дає права працювати.",
        practicalLocator: "Art. 89a",
        summary:
          "Art. 89a встановлює обов’язок органу оновити відповідний запис EES даними з VIS після продовження Schengen visa.",
        rules: [
          {
            locator: "Art. 89a",
            explanation:
              "Адресат обов’язку — орган, який видав рішення про продовження: wojewoda або Szef Urzędu у другій інстанції; дія виконується неzwłocznie.",
          },
          {
            locator: "Art. 89a",
            explanation:
              "Дані з art. 19 ust. 1 rozporządzenia nr 2017/2226 імпортуються до останнього EES-запису за art. 14 rozporządzenia nr 767/2008.",
          },
        ],
        legalEffect:
          "Норма забезпечує актуальність міжсистемного запису про в’їзд/виїзд. Вона не замінює рішення про візу, zezwolenie na pobyt або правову підставу роботи.",
        foreignersCase:
          "У досьє зазначте орган, дату й номер decyzja про продовження, дані візи та останній запис EES. Якщо є розбіжність, сформулюйте її як питання до відповідного органу, а не як доказ права на довший pobyt.",
      }),
      reviewedArticle("90", {
        provisionId: "ustawa-o-cudzoziemcach-art-90",
        reviewStatus: "reviewed",
        statuteText:
          "Wizę krajową cofається з urzędu, коли після її видачі виникли підстави відмови з Art. 65 ust. 1 pkt 1 і 3–10, або на wniosek власника. Для віз на навчання, дослідження, стажування чи волонтерство стаття додає спеціальні підстави: припинення мети, невиконання вимог заявленої мети, використання для іншої мети, окремі обставини Art. 100 ust. 1 pkt 2, 4, 5 або 8 та проблеми відповідної установи, організатора чи одиниці. Стаття також встановлює консультації з іншою державою Schengen і строки передавання інформації та SIS-впису.",
        statuteLocator: "Art. 90 ust. 1–3",
        practicalText:
          "Для cofnięcie треба відокремити загальну підставу після видачі від спеціальної мети wiza та довести конкретний факт: припинення навчання/дослідження, іншу фактичну мету, вирок, внески, податки, ліквідацію або діяльність установи для нелегального в’їзду. Cofnięcie national visa не є автоматичним рішенням про zezwolenie на pobyt чи право працювати.",
        practicalLocator: "Art. 90 ust. 1, 1a–1d, 2–3",
        summary:
          "Art. 90 визначає підстави та процедуру cofnięcie national visa, окремо деталізуючи візи для навчання, науки, стажування й волонтерства та координацію з SIS.",
        rules: [
          {
            locator: "Art. 90 ust. 1",
            explanation:
              "Загальна підстава — виникнення після видачі обставин Art. 65 ust. 1 pkt 1, 3–10; власник також може просити cofnięcie.",
          },
          {
            locator: "Art. 90 ust. 1a–1b",
            explanation:
              "Для student та наукової діяльності додатково перевіряються припинення або невиконання мети, інше використання візи, Art. 100 ust. 1 pkt 2, 4, 5, 8 і діяльність навчальної або наукової одиниці для нелегального в’їзду/побиту.",
          },
          {
            locator: "Art. 90 ust. 1c",
            explanation:
              "Для стажування додаються умови щодо організатора: засудження або покарання відповідальних осіб, несплата składki, податковий борг, відсутність діяльності, ліквідація чи upadłość, крім прямо названих винятків.",
          },
          {
            locator: "Art. 90 ust. 1d",
            explanation:
              "Для волонтерства аналогічні підстави стосуються одиниці, на користь якої виконуються świadczenia: її діяльності, відповідальних осіб, внесків, податків або ліквідації.",
          },
          {
            locator: "Art. 90 ust. 2–2c",
            explanation:
              "За SIS-консультацією іншої держави Schengen консул або minister ustala підстави cofnięcie, повідомляє через Komendant Główny Policji; передбачено 10 днів, продовження до 12 днів та передавання інформації у 14-денний або продовжений строк.",
          },
          {
            locator: "Art. 90 ust. 3",
            explanation:
              "Орган, який unieważnił або cofnął national visa, вносить відомості до SIS, якщо це не зазначено у travel document або на blankiet wizowy.",
          },
        ],
        legalEffect:
          "За встановленої підстави national visa cofається відповідним органом, а інформація може передаватися до SIS. Це змінює візовий статус; не слід ототожнювати його з відмовою або cofnięcie zezwolenia na pobyt і з дозволом на працю.",
        foreignersCase:
          "Визначте мету та adnotacja візи, дату припинення діяльності, фактичну організацію навчання/дослідження/стажування/волонтерства і кожен документ за відповідним pkt. Для установ перевірте реєстраційний статус, внески, податки та вироки, а для SIS — запит, строки і передану відповідь.",
      }),
      reviewedArticle("91", {
        provisionId: "ustawa-o-cudzoziemcach-art-91",
        reviewStatus: "reviewed",
        statuteText:
          "Wizę krajową unieważnia się, якщо вже в момент її видачі існували обставини, що обґрунтовували відмову у її видачі.",
        statuteLocator: "Art. 91",
        practicalText:
          "Ключова дата — момент видачі, а не подія, що виникла пізніше. Не змішуйте unieważnienie з cofnięcie за Art. 90; для конкретного рішення треба встановити первинний факт і відповідну підставу відмови.",
        practicalLocator: "Art. 91",
        summary:
          "Art. 91 встановлює materialну підставу unieważnienie national visa через обставини, що існували під час її видачі.",
        rules: [
          {
            locator: "Art. 91",
            explanation:
              "Норма працює тоді, коли підстава відмови існувала у момент видачі візи; вона не описує пізніше виникнення обставини, яке охоплює Art. 90.",
          },
        ],
        legalEffect:
          "Unieważnienie усуває візу як документ, виданий за наявності первинної перешкоди. Стаття не створює нового права на legal stay, pobyt або роботу.",
        foreignersCase:
          "Порівняйте дані та документи, які існували на дату видачі, з підставою, названою у decyzja. Окремо встановіть дату вручення рішення та можливий засіб оскарження за Art. 92–94.",
      }),
      reviewedArticle("92", {
        provisionId: "ustawa-o-cudzoziemcach-art-92",
        reviewStatus: "reviewed",
        statuteText:
          "Wizę Schengen або national visa cofа або unieważnia у формі decyzja konsul, komendant oddziału Straży Granicznej або komendant placówki Straży Granicznej. Візу, видану minister właściwy do spraw zagranicznych, може cofати або unieważniaти цей міністр або органи з ust. 1. Для члена дипломатичної місії, консульства, прирівняної особи та їх сім’ї рішення приймає minister, направляючи notę відповідному міністерству або місії.",
        statuteLocator: "Art. 92 ust. 1–2",
        practicalText:
          "Компетенцію треба перевірити за тим, хто видав візу, статусом особи та типом органу. Art. 92 визначає орган і форму рішення, але не є самостійною підставою cofnięcie або unieważnienie.",
        practicalLocator: "Art. 92 ust. 1–2",
        summary:
          "Art. 92 розподіляє компетенцію щодо cofnięcie та unieważnienie віз і встановлює дипломатичний спосіб для спеціальних категорій осіб.",
        rules: [
          {
            locator: "Art. 92 ust. 1",
            explanation:
              "Звичайними органами є konsul, komendant oddziału Straży Granicznej і komendant placówki Straży Granicznej.",
          },
          {
            locator: "Art. 92 ust. 1a",
            explanation:
              "Якщо visa видана міністром закордонних справ, її може відкликати або скасувати minister чи орган з ust. 1.",
          },
          {
            locator: "Art. 92 ust. 2",
            explanation:
              "Для дипломатичних і консульських представників та прирівняних осіб і сімей рішення приймає minister шляхом направлення ноти.",
          },
        ],
        legalEffect:
          "Рішення належного органу запускає передбачені законом наслідки для візи; сама стаття не продовжує legal stay і не визначає prawa do pracy.",
        foreignersCase:
          "Зіставте орган, що видав візу, орган, що прийняв рішення, тип візи та спеціальний статус особи. Збережіть decyzja, доказ вручення, відмітку у паспорті/blankiet і документи, що підтверджують підставу.",
      }),
      reviewedArticle("93", {
        provisionId: "ustawa-o-cudzoziemcach-art-93",
        reviewStatus: "reviewed",
        statuteText:
          "На decyzja про cofnięcie або unieważnienie візи, видану konsul або minister właściwy do spraw zagranicznych, подається wniosek o ponowne rozpatrzenie sprawy цим самим органом; на рішення komendant oddziału або placówki Straży Granicznej — odwołanie до Komendant Główny Straży Granicznej. Wniosek про повторний розгляд подається протягом 14 днів від doręczenie і розглядається протягом 14 днів; Art. 93 ust. 4–5 визначає форму, реквізити та додаткові відомості для рішення щодо Schengen visa.",
        statuteLocator: "Art. 93 ust. 1–5",
        practicalText:
          "Спочатку встановіть орган, що видав оскаржуване рішення, і тому оберіть wniosek або odwołanie. 14-денний строк у ust. 2 прямо стосується wniosek o ponowne rozpatrzenie; не підміняйте ним строк odwołanie, якого цей пункт не називає.",
        practicalLocator: "Art. 93 ust. 1–3",
        summary:
          "Art. 93 встановлює доступні засоби перегляду рішення про cofnięcie або unieważnienie візи та реквізити рішення після повторного розгляду.",
        rules: [
          {
            locator: "Art. 93 ust. 1 pkt 1–2",
            explanation:
              "Для рішення konsul або minister застосовується wniosek o ponowne rozpatrzenie; для рішення командира Straż Graniczna — odwołanie до Komendant Główny Straży Granicznej.",
          },
          {
            locator: "Art. 93 ust. 2–3",
            explanation:
              "Wniosek про повторний розгляд подається в 14 днів від вручення і розглядається в 14 днів.",
          },
          {
            locator: "Art. 93 ust. 4",
            explanation:
              "Formularz рішення про залишення попереднього рішення в силі містить орган, сторону, розпорядчу частину, дані візи, правову підставу, причини, дату, підпис і печатку.",
          },
          {
            locator: "Art. 93 ust. 5",
            explanation:
              "Для utrzymanie в силі рішення щодо Schengen visa додаються істотні факти та pouczenie про skarga до адміністративного суду, wpis і pomoc prawna.",
          },
        ],
        legalEffect:
          "Стаття відкриває визначений засіб перегляду, але не повертає автоматично візу, не надає zezwolenie na pobyt і не створює права працювати.",
        foreignersCase:
          "Збережіть decyzja та підтвердження doręczenie, визначте орган-видавець, порахуйте 14 днів для wniosek (якщо він застосовується) і викладіть окремо факти, документи та прохання. Перевірте також pouczenie про судову скаргу у рішенні щодо Schengen visa.",
      }),
      reviewedArticle("94", {
        provisionId: "ustawa-o-cudzoziemcach-art-94",
        reviewStatus: "reviewed",
        statuteText:
          "Decyzja про cofnięcie або unieważnienie Schengen чи national visa підлягає natychmiastowemu wykonaniu. Рішення щодо national visa видається на formularz із визначеними реквізитами, включно з правовою підставою, причинами та pouczenie про wniosek/odwołanie; видачу рішення відмічають у travel document або на blankiet, а minister може доручити цю дію konsul.",
        statuteLocator: "Art. 94 ust. 1–4",
        practicalText:
          "Треба розділити виконання рішення від права на його перегляд: сам факт подання засобу оскарження не дозволяє ігнорувати текст про natychmiastowe wykonanie. Перевірте, чи decyzja містить належне pouczenie та відмітку.",
        practicalLocator: "Art. 94 ust. 1–4",
        summary:
          "Art. 94 визначає негайне виконання рішення про візу, обов’язковий зміст national-visa formularz і спосіб відмітки у документах.",
        rules: [
          {
            locator: "Art. 94 ust. 1",
            explanation:
              "Рішення про cofnięcie або unieważnienie Schengen чи national visa підлягає негайному виконанню.",
          },
          {
            locator: "Art. 94 ust. 2",
            explanation:
              "Formularz national visa містить орган, сторону, розпорядчу частину, дані візи, підставу і причини, засіб та порядок оскарження, дату, підпис і печатку.",
          },
          {
            locator: "Art. 94 ust. 3–4",
            explanation:
              "Видачу рішення відмічають у travel document або на blankiet; minister може доручити цю технічну дію konsul.",
          },
        ],
        legalEffect:
          "Негайне виконання стосується рішення про візу; воно не перетворює візове рішення на рішення про pobyt або право на працю.",
        foreignersCase:
          "Зафіксуйте дату вручення, реквізити formularz, відмітку в паспорті/blankiet і правильний засіб оскарження з pouczenie. Після цього окремо перевірте, чи існує інша чинна підстава legal stay або роботи.",
      }),
      reviewedArticle("95", {
        provisionId: "ustawa-o-cudzoziemcach-art-95",
        reviewStatus: "reviewed",
        statuteText:
          "Орган, який unieważnił або cofnął national visa для виконання роботи, повідомляє starosta за місцем pobytu cudzoziemiec після того, як рішення стане ostateczna. Після остаточного cofnięcie student visa або national visa для наукових досліджень орган повідомляє Szef Urzędu, а Szef Urzędu передає інформацію державам ЄС, де особа користується мобільністю студента або науковця.",
        statuteLocator: "Art. 95 ust. 1–3",
        practicalText:
          "Це обмін інформацією після остаточності рішення, а не нова підстава для cofnięcie чи самостійна заборона роботи. Для строку важлива дата ostateczna, а для адресата — мета конкретної national visa.",
        practicalLocator: "Art. 95 ust. 1–3",
        summary:
          "Art. 95 встановлює повідомлення starosta, Szef Urzędu та органів ЄС про остаточне скасування або відкликання окремих national visa.",
        rules: [
          {
            locator: "Art. 95 ust. 1",
            explanation:
              "Для national visa з метою роботи повідомлення starosta надсилає орган, який unieważnił або cofnął візу, після ostateczność рішення.",
          },
          {
            locator: "Art. 95 ust. 2",
            explanation:
              "Для student visa та візи для наукових досліджень орган після остаточного cofnięcie повідомляє Szef Urzędu.",
          },
          {
            locator: "Art. 95 ust. 3",
            explanation:
              "Szef Urzędu неzwłocznie передає дані державам ЄС, де cudzoziemiec користується student або short/long-term researcher mobility.",
          },
        ],
        legalEffect:
          "Норма забезпечує адміністративний інформаційний обмін після ostateczna decyzja. Вона не надає pobyt, не замінює дозвіл на роботу і не є сама по собі рішенням про повернення.",
        foreignersCase:
          "З’ясуйте мету візи, орган-рішальник, дату вручення та дату ostateczność. Збережіть рішення і докази повідомлень starosta/Szef Urzędu; окремо перевірте legal stay та право працювати за іншою підставою.",
      }),
      reviewedArticle("96", {
        provisionId: "ustawa-o-cudzoziemcach-art-96",
        reviewStatus: "reviewed",
        statuteText:
          "Орган, який unieważnił або cofnął Schengen visa, видану іншою державою Schengen за art. 34 ust. 1–3 Wspólnotowego Kodeksu Wizowego, повідомляє орган держави-видавця. Komendant Główny Straży Granicznej збирає інформацію про польські Schengen visa, скасовані або відкликані органами інших держав, а орган, що скасував чи відкликав візу, імпортує дані art. 19 ust. 1 rozporządzenia nr 2017/2226 до останнього запису EES.",
        statuteLocator: "Art. 96 ust. 1–3",
        practicalText:
          "Art. 96 розподіляє інформаційні ролі між державами Schengen і польськими службами. Повідомлення та EES-запис не є окремим рішенням про legal stay, zezwolenie на pobyt чи право на працю.",
        practicalLocator: "Art. 96 ust. 1–3",
        summary:
          "Art. 96 регулює повідомлення держави-видавця, централізований збір даних і оновлення EES після дій щодо Schengen visa.",
        rules: [
          {
            locator: "Art. 96 ust. 1",
            explanation:
              "Після дії щодо візи іншої держави орган повідомляє орган, який цю візу видав, у межах art. 34 ust. 1–3 Wspólnotowego Kodeksu Wizowego.",
          },
          {
            locator: "Art. 96 ust. 2",
            explanation:
              "Komendant Główny Straży Granicznej є органом збору відомостей про польські Schengen visa, щодо яких інші держави прийняли таке рішення.",
          },
          {
            locator: "Art. 96 ust. 3",
            explanation:
              "Орган, який скасував або відкликав Schengen visa, неzwłocznie бере дані з VIS і імпортує їх до останнього EES-запису за art. 13 rozporządzenia nr 767/2008.",
          },
        ],
        legalEffect:
          "Стаття створює обов’язки міждержавного обміну та актуалізації даних, але не встановлює нової підстави для відмови у pobyt і не підтверджує право на працю.",
        foreignersCase:
          "Установіть державу-видавця, орган, який прийняв рішення, вид Schengen visa та відповідну норму Wspólnotowego Kodeksu Wizowego. Зіставте рішення, повідомлення й EES/VIS-відомості, не роблячи з інформаційної операції висновок про інший статус.",
      }),
      reviewedArticle("96a", {
        provisionId: "ustawa-o-cudzoziemcach-art-96a",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо орган іншої держави Schengen просить консультацію за art. 10 або 11 rozporządzenia nr 2018/1860, а cudzoziemiec має чинну national visa, консул, який її видав, або minister у випадку Art. 92 ust. 1a визначає, чи є підстави її cofnięcie. Інформація про рішення або відсутність підстав надсилається через Komendant Główny Policji у 10-денний строк; його можна продовжити не більше ніж на 12 днів, а KGP передає відповідь протягом 14 днів або продовженого строку.",
        statuteLocator: "Art. 96a ust. 1–4",
        practicalText:
          "Консультація виникає через запит іншої держави та стосується чинної national visa. Вона не означає автоматичне cofnięcie: спочатку компетентний консул або minister оцінює підстави, а потім надсилається інформація в установлені строки.",
        practicalLocator: "Art. 96a ust. 1–4",
        summary:
          "Art. 96a регулює SIS-консультацію щодо чинної national visa для cudzoziemiec та строки обміну інформацією між консулом, міністром, KGP і державою Schengen.",
        rules: [
          {
            locator: "Art. 96a ust. 1",
            explanation:
              "Консул-видавець або minister визначає, чи є підстави cofnięcie, коли інша держава просить консультацію за art. 10 або 11 rozporządzenia nr 2018/1860.",
          },
          {
            locator: "Art. 96a ust. 2",
            explanation:
              "Інформація про cofnięcie або відсутність підстав передається Komendant Główny Policji протягом 10 днів від отримання запиту.",
          },
          {
            locator: "Art. 96a ust. 3",
            explanation:
              "До спливу строку можна мотивовано просити через KGP продовження не більш як на 12 днів; відповідь передається за 2 дні до кінця продовженого строку.",
          },
          {
            locator: "Art. 96a ust. 4",
            explanation:
              "KGP пересилає відповідь органу іншої держави протягом 14 днів або протягом продовженого строку.",
          },
        ],
        legalEffect:
          "Стаття організує консультацію та передавання результату, але сама не є рішенням про cofnięcie, не продовжує national visa і не надає права на pobyt або працю.",
        foreignersCase:
          "Зберіть запит іншої держави, чинну national visa, орган-видавець, рішення/відсутність підстав і календар 10-, 12- та 14-денних строків. Не плутайте консультаційний обмін з остаточним статусом візи.",
      }),
      reviewedArticle("97", {
        provisionId: "ustawa-o-cudzoziemcach-art-97",
        reviewStatus: "reviewed",
        statuteText:
          "Minister właściwy do spraw wewnętrznych у porozumieniu з міністром закордонних справ визначає w drodze rozporządzenia спосіб відмітки рішення про unieważnienie або cofnięcie візи в travel document/blankiet, formularz рішення щодо national visa та formularz рішення з Art. 93 ust. 4. Розпорядження має враховувати політику віз і протидію нелегальній міграції та забезпечити контроль дій.",
        statuteLocator: "Art. 97 ust. 1–2 pkt 1–3",
        practicalText:
          "Art. 97 — технічна delegacja, а не підстава відкликання візи. У справі використовуйте чинні formularze та порядок відмітки з відповідного rozporządzenie; форма не замінює матеріальну підставу рішення.",
        practicalLocator: "Art. 97 ust. 1–2",
        summary:
          "Art. 97 делегує міністрам технічне оформлення рішень щодо скасування або відкликання віз та контроль відповідних дій.",
        rules: [
          {
            locator: "Art. 97 ust. 1 pkt 1–3",
            explanation:
              "Розпорядження визначає спосіб відмітки у документах і два типи formularz: для рішення щодо national visa та для рішення з Art. 93 ust. 4.",
          },
          {
            locator: "Art. 97 ust. 2",
            explanation:
              "Підзаконний порядок має забезпечувати правильну політику віз, протидію нелегальній міграції і контроль дій з ust. 1 pkt 2.",
          },
        ],
        legalEffect:
          "Норма визначає майбутні технічні форми й запис, але сама не скасовує візу, не легалізує pobyt і не надає права працювати.",
        foreignersCase:
          "Перевірте форму рішення та відмітку за чинним rozporządzenie, збережіть копію travel document/blankiet і зіставте орган та підставу рішення з Art. 90–94.",
      }),
      reviewedArticle("98", {
        provisionId: "ustawa-o-cudzoziemcach-art-98",
        reviewStatus: "reviewed",
        statuteText:
          "Zezwolenia na pobyt czasowy надається, а у випадках Art. 160, 181 і 187 може надаватися на wniosek, якщо cudzoziemiec відповідає вимогам, пов’язаним із deklarowany cel pobytu, і обставини виправдовують pobyt у Польщі довше 3 місяців. Заяви за Art. 139a ust. 1 і Art. 139o ust. 1 подає jednostka przyjmująca. Дозвіл надається на необхідний для мети строк, але не довше 3 років.",
        statuteLocator: "Art. 98 ust. 1–2",
        practicalText:
          "Art. 98 — загальна рамка eligibility для тимчасового pobyt, не позитивна відповідь на будь-яку заяву. Треба довести реальний cel, обставини і тривалість понад 3 місяці; legal stay під час розгляду та право працювати мають окремі підстави.",
        practicalLocator: "Art. 98 ust. 1–2",
        summary:
          "Art. 98 встановлює загальну умову та максимальний строк zezwolenia na pobyt czasowy, а для мобільних спеціальних випадків — заявника-unit przyjmująca.",
        rules: [
          {
            locator: "Art. 98 ust. 1",
            explanation:
              "Потрібні відповідність вимогам заявленої мети та обставини, що виправдовують перебування понад 3 місяці; для Art. 160, 181, 187 закон формулює можливість надання на wniosek.",
          },
          {
            locator: "Art. 98 ust. 1a",
            explanation:
              "Для дозволів Art. 139a ust. 1 та Art. 139o ust. 1 wniosek подає jednostka przyjmująca.",
          },
          {
            locator: "Art. 98 ust. 2",
            explanation:
              "Строк визначається необхідністю реалізації мети, але максимум становить 3 роки.",
          },
        ],
        legalEffect:
          "Стаття дає критерій для розгляду zezwolenie, але не замінює спеціальних умов конкретного виду дозволу. Вона сама не встановлює права на працю без окремої підстави та параметрів рішення.",
        foreignersCase:
          "Назвіть фактичний cel pobytu, планований період понад 3 місяці та доказ кожної спеціальної умови. Перевірте, хто має бути заявником, і окремо зафіксуйте legal stay та правову підставу роботи.",
      }),
      reviewedArticle("99", {
        provisionId: "ustawa-o-cudzoziemcach-art-99",
        reviewStatus: "reviewed",
        statuteText:
          "Wszczęcia postępowania про zezwolenie na pobyt czasowy відмовляють, якщо на день wniosek cudzoziemiec має pobyt stały або rezydent długoterminowy UE, окремі візи чи дозволи, захист/азил, очікує міжнародний захист, перебуває під затриманням або покаранням, має незавершений строк добровільного виїзду, зобов’язаний залишити Польщу за Art. 299 ust. 6 або перебуває поза Польщею. Окремо відмовляють без wszczęcie за неподання odciski linii papilarnych; pkt 10 має виняток для Art. 168 ust. 1 та Art. 168a ust. 1.",
        statuteLocator: "Art. 99 ust. 1 pkt 1–10; ust. 1a–2",
        practicalText:
          "Art. 99 — фільтр доступу до провадження, а не відмова у дозволі після оцінки його умов. Перевірка має бути прив’язана до статусу саме в день подання і до факту подання odciski; пункт 11 у тексті позначений як uchylony.",
        practicalLocator: "Art. 99 ust. 1 pkt 1–11; ust. 1a–2",
        summary:
          "Art. 99 перелічує обставини, за яких заяву на temporary residence permit не розпочинають розглядати, включно з відсутністю відбитків.",
        rules: [
          {
            locator: "Art. 99 ust. 1 pkt 1–4",
            explanation:
              "Перешкодами є чинний pobyt stały/rezydent UE, вузька віза лише для в’їзду за Art. 60 ust. 1 pkt 23, дозвіл за Art. 181 ust. 1 або окремі форми захисту, азил чи статус uchodźca.",
          },
          {
            locator: "Art. 99 ust. 1 pkt 5–9",
            explanation:
              "Не розпочинають провадження за заяви про protection/asylum, zatrzymanie/strzeżony ośrodek/zakaz opuszczania kraju, покарання або areszt, незавершений строк добровільного виїзду чи обов’язок залишити територію за Art. 299 ust. 6.",
          },
          {
            locator: "Art. 99 ust. 1 pkt 10–11; ust. 2",
            explanation:
              "Перебування поза Польщею є перешкодою, крім Art. 168 ust. 1 або Art. 168a ust. 1; pkt 11 позначений як uchylony.",
          },
          {
            locator: "Art. 99 ust. 1a",
            explanation:
              "Відсутність odciski linii papilarnych при поданні або у строк Art. 106 ust. 5 також веде до odmowa wszczęcia.",
          },
        ],
        legalEffect:
          "За наявності переліченої обставини орган не переходить до матеріальної оцінки заяви. Це не є позитивним або негативним рішенням про право на працю; legal stay треба підтвердити окремою нормою та фактичною датою.",
        foreignersCase:
          "На день подання перевірте всі документи pobyt, wiza, рішення про powrót, захист, detention, судові обмеження, місце перебування та підтвердження odciski. Відокремте `odmowa wszczęcia` за Art. 99 від `odmowa udzielenia` за Art. 100.",
      }),
      reviewedArticle("100", {
        provisionId: "ustawa-o-cudzoziemcach-art-100",
        reviewStatus: "reviewed",
        statuteText:
          "Zezwolenia na pobyt czasowy відмовляють, якщо не виконані вимоги заявленої мети або немає обґрунтування pobyt понад 3 місяці, є wpis у wykaz або SIS для odmowa wjazdu/pobyt, безпекова чи міжнародно-правова перешкода, неправдиві дані/документи/свідчення, податковий борг, неповернені кошти за powrót, відмова від обов’язкового лікування або незаконний pobyt. За SIS допускається окрема оцінка з консультацією; наступний дозвіл може бути відмовлений через невиконання Art. 113 у межах строку з ust. 2.",
        statuteLocator: "Art. 100 ust. 1 pkt 1–9; ust. 1a–2",
        practicalText:
          "На відміну від Art. 99, тут орган оцінює матеріальне право і приймає odmowa udzielenia. Кожна підстава потребує власного доказу; наявність заявленої роботи або договору не усуває SIS, безпекові, податкові чи документальні перешкоди.",
        practicalLocator: "Art. 100 ust. 1–2",
        summary:
          "Art. 100 визначає materialні підстави відмови у тимчасовому pobyt і спеціальний порядок реагування на SIS-запис та невиконання обов’язку повідомлення за Art. 113.",
        rules: [
          {
            locator: "Art. 100 ust. 1 pkt 1–4",
            explanation:
              "Перевіряються мета й умови pobyt, wykaz небажаних іноземців, SIS-впис для відмови у в’їзді/побиті та оборона, безпека, порядок або міжнародні зобов’язання.",
          },
          {
            locator: "Art. 100 ust. 1 pkt 5–8",
            explanation:
              "Підставами є неправдиві дані, інформація чи документи, неправда/приховування/підроблення, податковий борг, неповернені кошти за рішення про powrót або відмова від обов’язкового лікування; для боргу діють названі винятки.",
          },
          {
            locator: "Art. 100 ust. 1 pkt 9",
            explanation:
              "Відмовляють, якщо wniosek подано під час незаконного pobyt або cudzoziemiec перебуває в Польщі незаконно.",
          },
          {
            locator: "Art. 100 ust. 1a–1b",
            explanation:
              "За SIS-записом можна надати дозвіл з урахуванням причин і загроз за art. 27 lit. d rozporządzenia nr 2018/1861; wojewoda або Szef Urzędu проводить передбачені консультації через KGP.",
          },
          {
            locator: "Art. 100 ust. 2",
            explanation:
              "Наступний temporary permit може бути відмовлений, якщо не виконано Art. 113 і новий wniosek подано до року від завершення попереднього дозволу або остаточного cofnięcie.",
          },
        ],
        legalEffect:
          "Встановлена підстава веде до odmowa udzielenia, а не лише до неприйняття wniosku. Виняток для SIS є оцінкою, а не автоматичним дозволом; рішення про pobyt не слід плутати з правом виконувати конкретну роботу.",
        foreignersCase:
          "Побудуйте таблицю доказів за pkt 1–9: cel і тривалість, wykaz/SIS, безпека, достовірність, податки, витрати powrót, лікування та legal stay. Якщо посилаються на Art. 113, порахуйте рік і додайте доказ повідомлення або причину його відсутності.",
      }),
      reviewedArticle("101", {
        provisionId: "ustawa-o-cudzoziemcach-art-101",
        reviewStatus: "reviewed",
        statuteText:
          "Zezwolenie na pobyt czasowy cofaється, якщо припинилася мета, заради якої його надано, cudzoziemiec перестав виконувати вимоги заявленої мети або виникла хоча б одна обставина Art. 100 ust. 1 pkt 2 чи 4–8.",
        statuteLocator: "Art. 101 pkt 1–3",
        practicalText:
          "Cofnięcie потребує встановлення зміни після надання дозволу та відповідного пункту, а не лише припущення, що мета змінилася. Припинення permit не дорівнює автоматичній легалізації іншою підставою; legal stay і work authorization треба перевірити за датами та новими документами.",
        practicalLocator: "Art. 101 pkt 1–3",
        summary:
          "Art. 101 визначає три групи підстав для cofnięcie temporary residence permit: припинення мети, втрату умов або окремі перешкоди з Art. 100.",
        rules: [
          {
            locator: "Art. 101 pkt 1",
            explanation:
              "Підстава — припинення мети pobyt, яка була причиною надання zezwolenie.",
          },
          {
            locator: "Art. 101 pkt 2",
            explanation:
              "Підстава — втрата вимог до дозволу, пов’язаних із declarowany cel pobytu.",
          },
          {
            locator: "Art. 101 pkt 3",
            explanation:
              "Підставою є обставина Art. 100 ust. 1 pkt 2 або 4–8: зокрема wykaz/SIS, безпека, неправдиві документи, податки, витрати powrót або лікування.",
          },
        ],
        legalEffect:
          "Стаття є materialною підставою для cofnięcie уже наданого zezwolenie. Вона не визначає, що іноземець автоматично отримує інший pobyt або дозвіл на працю після припинення.",
        foreignersCase:
          "Зафіксуйте дату припинення мети або умови, фактичну діяльність і документи, на які спирається organ. Порівняйте рішення про cofnięcie з паспортом, картою pobytu, legal stay та окремою підставою work authorization.",
      }),
      reviewedArticle("102", {
        provisionId: "ustawa-o-cudzoziemcach-art-102",
        reviewStatus: "reviewed",
        statuteText:
          "Zezwolenie na pobyt czasowy wygasa z mocy prawa в день отримання cudzoziemiec наступного temporary permit, permanent permit, long-term EU resident permit або польського громадянства.",
        statuteLocator: "Art. 102",
        practicalText:
          "Це автоматичне припинення попереднього дозволу через набуття нового статусу; не треба описувати його як cofnięcie за рішенням органу. Для legal stay і права працювати вирішальними стають новий документ і його власні умови.",
        practicalLocator: "Art. 102",
        summary:
          "Art. 102 визначає випадки, коли попередній temporary residence permit втрачає чинність з мocy prawa.",
        rules: [
          {
            locator: "Art. 102",
            explanation:
              "Підставами є отримання наступного zezwolenie na pobyt czasowy, zezwolenie na pobyt stały, zezwolenie rezydenta długoterminowego UE або obywatelstwo polskie.",
          },
        ],
        legalEffect:
          "Попередній permit припиняється за законом у визначений день. Art. 102 не визначає зміст нового статусу і не означає автоматичного дозволу на будь-яку працю.",
        foreignersCase:
          "Збережіть рішення та дату набуття нового дозволу або громадянства, перевірте, який документ є чинним після цієї дати, і не використовуйте стару kartа pobytu як єдине підтвердження.",
      }),
      reviewedArticle("103", {
        provisionId: "ustawa-o-cudzoziemcach-art-103",
        reviewStatus: "reviewed",
        statuteText:
          "У провадженні про надання або cofnięcie temporary residence permit під час дій, спрямованих на встановлення обставин Art. 100 ust. 1 pkt 5, не застосовується Art. 79 Kodeks postępowania administracyjnego.",
        statuteLocator: "Art. 103",
        practicalText:
          "Це спеціальне процесуальне правило для перевірки неправдивих даних, інформації чи документів; воно не доводить саме по собі, що підроблення було, і не замінює доказування органом.",
        practicalLocator: "Art. 103 w związku z Art. 100 ust. 1 pkt 5",
        summary:
          "Art. 103 встановлює виняток із застосування Art. 79 KPA у вузькій доказовій частині справ про temporary residence permit.",
        rules: [
          {
            locator: "Art. 103",
            explanation:
              "Виняток діє лише під час дій для встановлення фактів із Art. 100 ust. 1 pkt 5 — неправдивих даних, інформації, свідчень або підроблених документів.",
          },
        ],
        legalEffect:
          "Стаття змінює процесуальний спосіб проведення визначених перевірок, але не є самостійною materialною підставою відмови чи cofnięcie і не визначає prawa do pracy.",
        foreignersCase:
          "Збережіть копії поданих документів, запити та протоколи органу, встановіть, який факт Art. 100 ust. 1 pkt 5 перевіряється, і дайте адресні пояснення щодо автентичності та походження документа.",
      }),
      reviewedArticle("104", {
        provisionId: "ustawa-o-cudzoziemcach-art-104",
        reviewStatus: "reviewed",
        statuteText:
          "Temporary residence permit, крім дозволів Art. 139a ust. 1 та Art. 139o ust. 1, надає або відмовляє у його наданні wojewoda за місцем pobytu cudzoziemiec у формі decyzja. Cofає permit wojewoda, який його надав; якщо permit надав Szef Urzędu у другій інстанції, cofає wojewoda, який вирішував справу в першій інстанції.",
        statuteLocator: "Art. 104 ust. 1–3",
        practicalText:
          "Спочатку визначте właściwość органу за місцем pobytu та історією інстанцій. Art. 104 розподіляє компетенцію, але не доводить виконання матеріальних умов permit або права працювати.",
        practicalLocator: "Art. 104 ust. 1–3",
        summary:
          "Art. 104 встановлює, який organ видає, відмовляє або cofає temporary residence permit.",
        rules: [
          {
            locator: "Art. 104 ust. 1",
            explanation:
              "Wojewoda за місцем pobytu приймає рішення про надання або відмову, крім двох спеціальних видів дозволів Art. 139a та Art. 139o.",
          },
          {
            locator: "Art. 104 ust. 2–3",
            explanation:
              "Cofає permit wojewoda, який його надав; після надання Szef Urzędu у другій інстанції це робить wojewoda першої інстанції.",
          },
        ],
        legalEffect:
          "Норма визначає належного decision-maker та форму рішення. Вона сама не надає permit, legal stay або work authorization.",
        foreignersCase:
          "Підтвердьте актуальне місце pobytu, компетентного wojewoda, орган першої та другої інстанції, а також хто видав попередній permit. Усі матеріальні умови перевіряйте окремо.",
      }),
      reviewedArticle("105", {
        provisionId: "ustawa-o-cudzoziemcach-art-105",
        reviewStatus: "reviewed",
        statuteText:
          "Cudzoziemiec подає wniosek про temporary residence permit особисто не пізніше останнього дня legal stay, крім Art. 139l ust. 1 та Art. 139t ust. 1. Якщо особистого подання немає, wojewoda викликає до osobiste stawiennictwo не менш як на 7 днів під rygor залишення wniosek без розгляду. За неповнолітнього, повністю недієздатного або неповнолітнього без опіки подають відповідно батьки/опікуни або kurator; дитина від 6 років має бути присутня.",
        statuteLocator: "Art. 105 ust. 1–5",
        practicalText:
          "Дата останнього legal stay, особиста явка та вік заявника — окремі умови. Пропуск виклику має наслідок `pozostawienie wniosku bez rozpoznania`; винятки Art. 168/168a треба перевіряти за їхніми власними фактами.",
        practicalLocator: "Art. 105 ust. 1–5",
        summary:
          "Art. 105 регулює особисте подання, виклик до wojewoda та представництво дітей і недієздатних у справі про temporary residence permit.",
        rules: [
          {
            locator: "Art. 105 ust. 1–2",
            explanation:
              "Заява подається особисто до останнього дня legal stay; за відсутності особистого подання орган призначає stawiennictwo щонайменше на 7 днів із процесуальним попередженням.",
          },
          {
            locator: "Art. 105 ust. 3–4",
            explanation:
              "Закон визначає, хто подає за дитину, особу з повною недієздатністю чи дитину без опіки; присутність дитини потрібна, якщо на день wniosek їй виповнилося 6 років.",
          },
          {
            locator: "Art. 105 ust. 5",
            explanation:
              "Для випадків Art. 168 ust. 1 або Art. 168a ust. 1 вимога osobiste stawiennictwo не застосовується, і Art. 106 ust. 4–5 не діють.",
          },
        ],
        legalEffect:
          "Дотримання форми подання зберігає можливість розгляду wniosek, але не означає надання permit. Особиста явка не є сама по собі доказом legal stay або права працювати.",
        foreignersCase:
          "Порахуйтесь з датою закінчення legal stay, збережіть підтвердження особистого подання/явки та doręczenie wezwanie. Для дитини додайте документи про вік, батьківство, опіку або kurator і перевірте виняток Art. 168/168a.",
      }),
      reviewedArticle("106", {
        provisionId: "ustawa-o-cudzoziemcach-art-106",
        reviewStatus: "reviewed",
        statuteText:
          "Wniosek про temporary residence permit подається на formularz із даними cudzoziemiec, сім’ї в Польщі, попередніх і теперішнього pobyt, поїздок, коштів, ubezpieczenie, declarowany cel, обмежень свободи, зобов’язань, wzór podpisu та oświadczenie про правдивість під кримінальною відповідальністю; pkt 2–5 і 9 ust. 1 позначені як uchylony. Для permit i pracę, high qualifications, окремих функцій у spółka та інших спеціальних цілей додаються annexes з даними podmiot, роботи, кваліфікацій, організатора або jednostka naukowa. Потрібні travel document, фотографії, підтвердні документи, odciski linii papilarnych та виконання wezwanie.",
        statuteLocator: "Art. 106 ust. 1 pkt 1–16; ust. 1a–1e; ust. 2–5",
        practicalText:
          "Art. 106 — доказова та ідентифікаційна основа провадження: кожен факт у formularz має відповідати паспорту, annex, договору та підтвердному документу. Неподання документів може вести до wezwanie, а fingerprints мають окремий процесуальний режим; сама повна форма не гарантує permit або work authorization.",
        practicalLocator: "Art. 106 ust. 1–5",
        summary:
          "Art. 106 визначає зміст wniosek і спеціальних annexes, документи, wezwanie для їх подання, travel document та fingerprints у справі про temporary residence permit.",
        rules: [
          {
            locator: "Art. 106 ust. 1 pkt 1, 6–8, 10–16",
            explanation:
              "Основна форма містить ідентифікаційні та сімейні дані, історію pobyt і поїздок, кошти, страховку, мету, обмеження свободи, зобов’язання, підпис та oświadczenie про правдивість; pkt 2–5 і 9 — uchylony.",
          },
          {
            locator: "Art. 106 ust. 1a–1b",
            explanation:
              "Для permit i pracę, high qualifications та визначеної роботи через spółka annex подає podmiot powierzający; він охоплює суб’єктів, stanowisko/rodzaj pracy, zawód, місце, підставу, час, оплату, обов’язки, період і oświadczenie про неkaralność.",
          },
          {
            locator: "Art. 106 ust. 1c–1e",
            explanation:
              "Окремі annexes стосуються high qualifications і Blue Card mobility, стажера/волонтера та дослідника: кваліфікацій і попередньої EU mobility, даних організатора або jednostka naukowa та програм мобільності.",
          },
          {
            locator: "Art. 106 ust. 2–2b",
            explanation:
              "Подаються чинний travel document, фотографії та докази обставин; за відсутності доказів wojewoda дає щонайменше 14 днів, а суміщений виклик має строк не коротший за найдовший з пов’язаних строків.",
          },
          {
            locator: "Art. 106 ust. 3–5",
            explanation:
              "Інший документ особи допускається лише у спеціально обґрунтованому випадку неможливості отримати travel document; fingerprints є обов’язковими, а коли їх не можна взяти з вини wojewoda, він призначає строк не менше 7 днів.",
          },
        ],
        legalEffect:
          "Стаття визначає, які відомості та докази орган може перевіряти, і як усуваються неповні матеріали. Вона не є рішенням про legal stay, eligibility permit або work authorization.",
        foreignersCase:
          "Зробіть копію всього formularz і annexes; звірте ПІБ, сім’ю, адреси, 5-річні поїздки, кошти, insurance, cel, паспорт, фото, договори, kwalifikacje та дані podmiot. Ведіть календар wezwanie, подання документів і fingerprints.",
      }),
      reviewedArticle("107", {
        provisionId: "ustawa-o-cudzoziemcach-art-107",
        reviewStatus: "reviewed",
        statuteText:
          "Minister właściwy do spraw wewnętrznych визначає w drodze rozporządzenia wzory основного formularz і annexes за Art. 106, форми wnioski для Art. 139a та Art. 139o, кількість і технічні вимоги до фотографій, wzór stamp, спосіб pobierania fingerprints та закріплення і передавання даних для персоналізації karty pobytu. У розпорядженні враховується ефективність провадження і можливість перевірити przesłanki permit.",
        statuteLocator: "Art. 107 ust. 1 pkt 1–5; ust. 2",
        practicalText:
          "Конкретна форма заяви та annex не випливає лише з Art. 107: потрібно користуватися чинним rozporządzenie. Технічна відповідність форми не доводить матеріальних умов pobyt або права на працю.",
        practicalLocator: "Art. 107 ust. 1–2",
        summary:
          "Art. 107 делегує встановлення форм, фото, stamp, fingerprints і технічного обігу даних для картки pobytu.",
        rules: [
          {
            locator: "Art. 107 ust. 1 pkt 1–3",
            explanation:
              "Розпорядження встановлює форми wnioski/annexes, кількість і параметри фото та wzór stamp про подання temporary residence permit.",
          },
          {
            locator: "Art. 107 ust. 1 pkt 4–5",
            explanation:
              "Воно також визначає спосіб fingerprints і технічне закріплення та передавання даних для персоналізації karty pobytu.",
          },
          {
            locator: "Art. 107 ust. 2",
            explanation:
              "Критеріями є sprawność postępowania і skuteczna weryfikacja przesłanek надання permit.",
          },
        ],
        legalEffect:
          "Стаття створює делегацію для технічного оформлення, але не надає permit, legal stay або права виконувати роботу.",
        foreignersCase:
          "Перед поданням перевірте чинний wzór відповідної заяви й annex, фото, stamp і процедуру fingerprints у розпорядженні. Додайте змістовні докази мети, коштів, страхування та роботи окремо.",
      }),
      reviewedArticle("108", {
        provisionId: "ustawa-o-cudzoziemcach-art-108",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо строк подання wniosek про temporary residence permit дотримано і wniosek не має braków formalnych або їх своєчасно усунуто, wojewoda ставить stamp, а pobyt cudzoziemiec у Польщі вважається legal від подання до дня, коли рішення стане ostateczna. Правило про legal stay не діє під час zawieszenie провадження на заяву сторони.",
        statuteLocator: "Art. 108 ust. 1–2",
        practicalText:
          "Art. 108 створює лише тимчасовий legal-stay ефект за визначених формальних умов. Stamp не є permit, не підтверджує позитивну eligibility і не дає автоматичного prawa do pracy; роботу треба перевіряти за окремою нормою.",
        practicalLocator: "Art. 108 ust. 1 pkt 1–2; ust. 2",
        summary:
          "Art. 108 визначає stamp і legal stay на час розгляду своєчасної та формально належної заяви про temporary residence permit.",
        rules: [
          {
            locator: "Art. 108 ust. 1 pkt 1",
            explanation:
              "Wojewoda ставить у travel document stamp про подання wniosek, якщо строки й formalne вимоги виконані.",
          },
          {
            locator: "Art. 108 ust. 1 pkt 2",
            explanation:
              "Legal stay триває від дня подання до набрання рішенням про permit ostateczna.",
          },
          {
            locator: "Art. 108 ust. 2",
            explanation:
              "За zawieszenie провадження на заяву сторони legal-stay правило з ust. 1 pkt 2 не застосовується.",
          },
        ],
        legalEffect:
          "Стаття легалізує pobyt лише на період і за умовами, прямо названими в ній. Вона не є рішенням про permit і не замінює правову підставу wykonywania pracy.",
        foreignersCase:
          "Збережіть доказ дати подання, stamp, документи про усунення braków та всі рішення про zawieszenie/відновлення. Для роботи окремо перевірте дозвіл, zwolnienie або параметри чинної decyzja.",
      }),
      reviewedArticle("109", {
        provisionId: "ustawa-o-cudzoziemcach-art-109",
        reviewStatus: "reviewed",
        statuteText:
          "Перед наданням temporary residence permit wojewoda запитує Straż Graniczna, Policja, ABW, за потреби konsul та інші органи, чи можуть в’їзд і pobyt cudzoziemiec загрожувати обороні, безпеці держави, безпеці та porządek publiczny. Звичайний строк відповіді — 30 днів, у особливо обґрунтованій справі 60; для Art. 137a — 10/30 днів, а для family reunification з довгостроковою Blue Card mobility — 7/30 dni roboczych. Якщо відповідь не надано в строк, вимога вважається виконаною.",
        statuteLocator: "Art. 109 ust. 1–5",
        practicalText:
          "Це міжвідомча перевірка ризиків, а не самостійний доказ небезпеки й не автоматична відмова. У справі важливі дата запиту, спеціальний вид permit, повідомлення про продовження та те, чи сплив строк без відповіді.",
        practicalLocator: "Art. 109 ust. 1–5",
        summary:
          "Art. 109 встановлює security screening перед temporary residence permit, компетентні органи, строки відповіді, електронний обмін і наслідок мовчання.",
        rules: [
          {
            locator: "Art. 109 ust. 1",
            explanation:
              "Wojewoda запитує визначені органи про ризик для оборони, безпеки держави або publiczny porządek; консул та інші органи залучаються за потреби.",
          },
          {
            locator: "Art. 109 ust. 2–3; ust. 3a",
            explanation:
              "Звичайний строк — 30 днів, у особливому випадку до 60; інформацією можна обмінюватися електронно.",
          },
          {
            locator: "Art. 109 ust. 3b–3e",
            explanation:
              "Для Art. 137a діють 10 днів і до 30 днів, а для family reunification з довгостроковою Blue Card mobility — 7 dni roboczych і до 30 dni roboczych.",
          },
          {
            locator: "Art. 109 ust. 4–5",
            explanation:
              "Непередача інформації в установлені строки означає виконання вимоги; для особи, якій у день подання не виповнилося 13 років, запит з ust. 1 не потрібен.",
          },
        ],
        legalEffect:
          "Art. 109 організує перевірку перед рішенням і визначає процесуальний наслідок пропуску строку органом. Він не дає legal stay, не надає permit і не визначає work authorization.",
        foreignersCase:
          "Ведіть календар: дата wniosek, запити wojewoda, 30/60-, 10/30- або 7/30-денні строки, повідомлення про продовження та отримана відповідь. Для дитини зафіксуйте вік на день подання.",
      }),
      reviewedArticle("110", {
        provisionId: "ustawa-o-cudzoziemcach-art-110",
        reviewStatus: "reviewed",
        statuteText:
          "Art. 110 у тексті редакції Dz.U. 2025 poz. 1079 позначена як `uchylony` і не містить чинного правила.",
        statuteLocator: "Art. 110",
        practicalText:
          "Позначка `uchylony` означає, що з цього запису не можна виводити сучасний обов’язок, умову permit або процедурний строк; для історичного питання потрібна відповідна попередня редакція, а для поточного — інша чинна норма.",
        practicalLocator: "Art. 110",
        summary:
          "Art. 110 скасована (uchylony); у поточному джерелі немає чинного тексту для застосування.",
        rules: [
          {
            locator: "Art. 110",
            explanation:
              "Локальний corpus і PDF містять лише позначення `(uchylony)`.",
          },
        ],
        legalEffect:
          "Art. 110 не є чинною самостійною підставою, обов’язком або процедурним правилом у редакції Dz.U. 2025 poz. 1079.",
        foreignersCase:
          "Не посилайтеся на Art. 110 як на актуальне правило. Якщо документ цитує цю статтю, перевірте дату документа та використайте source reader для пошуку перехідної або чинної замінної норми.",
      }),
      reviewedArticle("111", {
        provisionId: "ustawa-o-cudzoziemcach-art-111",
        reviewStatus: "reviewed",
        statuteText:
          "Якщо інша держава Schengen просить консультацію за art. 28 або 29 rozporządzenia nr 2018/1861, wojewoda, який надав temporary residence permit, або wojewoda першої інстанції, коли дозвіл надав Szef Urzędu у другій інстанції, визначає, чи є підстави його cofnięcie з урахуванням причин SIS-рішення та загроз art. 28 lit. d або art. 29 lit. d. Wojewoda передає KGP інформацію про cofnięcie або відсутність підстав у 10 днів; можливе мотивоване продовження до 12 днів, а KGP передає її іншій державі протягом 14 днів або продовженого строку.",
        statuteLocator: "Art. 111 ust. 1–4",
        practicalText:
          "Консультація не є автоматичним cofnięcie permit: organ оцінює причини та повідомляє результат. Важливо встановити, який wojewoda є компетентним, коли надійшов запит і чи було подано мотивовану заяву про продовження строку.",
        practicalLocator: "Art. 111 ust. 1–4",
        summary:
          "Art. 111 встановлює SIS-консультацію щодо можливого cofnięcie temporary residence permit і строки обміну відповіддю.",
        rules: [
          {
            locator: "Art. 111 ust. 1",
            explanation:
              "Рішення про наявність підстав cofnięcie оцінює wojewoda-видавець або wojewoda першої інстанції після рішення Szef Urzędu.",
          },
          {
            locator: "Art. 111 ust. 2",
            explanation:
              "Інформація про рішення cofnięcie або відсутність підстав передається KGP протягом 10 днів від запиту.",
          },
          {
            locator: "Art. 111 ust. 3",
            explanation:
              "До спливу строку можна через KGP просити мотивоване продовження не більш як на 12 днів; відповідь передається за 2 дні до кінця нового строку.",
          },
          {
            locator: "Art. 111 ust. 4",
            explanation:
              "KGP пересилає інформацію державі Schengen у 14-денний або продовжений строк.",
          },
        ],
        legalEffect:
          "Норма визначає консультаційний та інформаційний механізм навколо можливого cofnięcie permit. Вона сама не скасовує permit, не змінює legal stay і не вирішує право на працю.",
        foreignersCase:
          "Збережіть запит іншої держави, SIS-причини, рішення wojewoda, дату отримання, докази передачі KGP та строки 10/12/14 днів. Перевірте, чи рішення приймав wojewoda першої інстанції або орган-видавець.",
      }),
      reviewedArticle("112", {
        provisionId: "ustawa-o-cudzoziemcach-art-112",
        reviewStatus: "reviewed",
        statuteText:
          "Art. 112 у тексті редакції Dz.U. 2025 poz. 1079 позначена як `uchylony` і не містить чинного правила.",
        statuteLocator: "Art. 112",
        practicalText:
          "Скасований запис не можна використовувати як чинну підставу для надання, cofnięcie або строку temporary residence permit. Для правової оцінки використовуйте чинний текст сусідніх статей і source reader, а історичну редакцію — лише з її датою.",
        practicalLocator: "Art. 112",
        summary:
          "Art. 112 скасована (uchylony); поточна редакція не містить припису, який можна застосувати самостійно.",
        rules: [
          {
            locator: "Art. 112",
            explanation:
              "Локальний corpus і PDF містять лише позначення `(uchylony)`.",
          },
        ],
        legalEffect:
          "Art. 112 не створює чинного обов’язку, умови permit чи процесуального строку в редакції Dz.U. 2025 poz. 1079.",
        foreignersCase:
          "Не будуйте висновок на Art. 112 як на чинній нормі. Перевірте дату цитованого документа і перейдіть до source reader для актуальної норми, що регулює питання.",
      }),
      reviewedArticle("112a", {
        provisionId: "ustawa-o-cudzoziemcach-art-112a",
        reviewStatus: "reviewed",
        statuteText:
          "Рішення про temporary residence permit видається протягом 60 днів; строк починається від останньої з подій — особистого подання/явки, усунення braków formalnych або подання доказів Art. 106 ust. 2 pkt 2 чи безрезультатного спливу строку Art. 106 ust. 2a. Для Art. 139a та Art. 139o відлік прив’язаний до повного wniosek і доказів jednostka przyjmująca. Апеляційне провадження закінчується за 90 днів, а за formalne braki odwołanie строк рахується після їх усунення.",
        statuteLocator: "Art. 112a ust. 1–5",
        practicalText:
          "Це строки завершення провадження, а не правило `мовчазної згоди` чи автоматичного надання permit. Потрібно зафіксувати кожну подію, яка може бути останньою, і відокремити строк органу від legal stay за Art. 108 та права на працю.",
        practicalLocator: "Art. 112a ust. 1–5",
        summary:
          "Art. 112a визначає 60-денний строк першої інстанції, спеціальний момент його початку та 90-денний строк апеляційного провадження.",
        rules: [
          {
            locator: "Art. 112a ust. 1–2",
            explanation:
              "60-денний строк починається з останньої події між особистою процедурою, формально повним wniosek і доказами або безрезультатним спливом строку на їх подання.",
          },
          {
            locator: "Art. 112a ust. 3",
            explanation:
              "Для Art. 139a/139o відлік залежить від повного wniosek jednostka przyjmująca та її доказів або спливу наданого строку.",
          },
          {
            locator: "Art. 112a ust. 4–5",
            explanation:
              "Odwoławcze postępowanie має завершитися за 90 днів; якщо odwołanie має formalne braki, строк починається після їх усунення.",
          },
        ],
        legalEffect:
          "Стаття дисциплінує строки розгляду і визначає, коли вони починаються. Сам сплив строку не є рішенням про permit, legal stay або work authorization.",
        foreignersCase:
          "Зробіть timeline: wniosek, особиста явка, усунення braków, подання доказів, wezwanie Art. 106, odwołanie та усунення його недоліків. Порівняйте календар із 60/90 днями та збережіть докази кожної події.",
      }),
      reviewedArticle("113", {
        provisionId: "ustawa-o-cudzoziemcach-art-113",
        reviewStatus: "reviewed",
        statuteText:
          "Cudzoziemiec, якому надано temporary residence permit, повідомляє wojewoda, який його надав, протягом 15 dni roboczych про припинення причини надання permit. Якщо рішення у другій інстанції надав Szef Urzędu, повідомлення направляється wojewoda першої інстанції.",
        statuteLocator: "Art. 113 ust. 1–2",
        practicalText:
          "Обов’язок виникає через ustanie przyczyny, а не лише через формальну зміну назви роботи чи адреси. Збережіть доказ дати події та отримання повідомлення; невиконання може мати наслідок за Art. 100 ust. 2 або cofnięcie за Art. 101.",
        practicalLocator: "Art. 113 ust. 1–2",
        summary:
          "Art. 113 встановлює 15-денний робочий строк повідомлення wojewoda про припинення причини temporary residence permit.",
        rules: [
          {
            locator: "Art. 113 ust. 1",
            explanation:
              "Адресатом є wojewoda, який надав permit; повідомлення подає cudzoziemiec протягом 15 dni roboczych від ustanie przyczyny.",
          },
          {
            locator: "Art. 113 ust. 2",
            explanation:
              "Якщо permit надав Szef Urzędu у другій інстанції, повідомлення спрямовується wojewoda, який розглядав справу в першій інстанції.",
          },
        ],
        legalEffect:
          "Стаття створює обов’язок повідомлення, але сама не є рішенням про cofnięcie permit і не припиняє автоматично legal stay чи право на працю.",
        foreignersCase:
          "Опишіть, яка саме причина permit припинилася і коли, подайте письмове повідомлення правильному wojewoda не пізніше 15-го робочого дня та збережіть підтвердження доставки.",
      }),
      reviewedArticle("113a", {
        provisionId: "ustawa-o-cudzoziemcach-art-113a",
        reviewStatus: "reviewed",
        statuteText:
          "У провадженні про надання або cofnięcie temporary residence permit стороною є виключно cudzoziemiec, про якого йдеться відповідно в Art. 98 ust. 1 або Art. 101.",
        statuteLocator: "Art. 113a",
        practicalText:
          "Стаття визначає процесуальний статус сторони, а не матеріальну умову permit. Роботодавець, член сім’ї чи інша особа не стає стороною лише через інтерес до результату; це не означає, що їхні документи не можуть бути доказами.",
        practicalLocator: "Art. 113a",
        summary:
          "Art. 113a обмежує коло сторін у провадженні про надання або cofnięcie temporary residence permit самим cudzoziemiec.",
        rules: [
          {
            locator: "Art. 113a",
            explanation:
              "У справах, віднесених до Art. 98 ust. 1 або Art. 101, єдиною стороною є відповідний cudzoziemiec.",
          },
        ],
        legalEffect:
          "Норма визначає, хто користується процесуальними правами сторони та кому адресують рішення. Вона сама не надає permit, legal stay або права на працю.",
        foreignersCase:
          "Перевірте, що вniosek, пояснення, doręczenia та odwołanie оформлені від імені cudzoziemiec; документи роботодавця або сім’ї долучайте як докази без підміни сторони.",
      }),
      reviewedArticle("113b", {
        provisionId: "ustawa-o-cudzoziemcach-art-113b",
        reviewStatus: "reviewed",
        statuteText:
          "Rada Ministrów може визначити w drodze rozporządzenia держави, громадянам яких під час розрахунку місячних коштів для permit за Art. 144, Art. 151 ust. 1, Art. 151b ust. 1, Art. 157a ust. 1 та Art. 157g ust. 1 не віднімають кошти на житло; критерієм є потреби польської міграційної політики.",
        statuteLocator: "Art. 113b",
        practicalText:
          "Це facultative delegacja: сама Art. 113b не називає держави й не змінює розрахунок без відповідного чинного rozporządzenie. Спочатку встановіть громадянство, вид permit і дату застосовної підзаконної норми.",
        practicalLocator: "Art. 113b",
        summary:
          "Art. 113b дозволяє Раді Міністрів спеціально визначити держави для правила про невіднімання витрат на житло у фінансовому критерії окремих permit.",
        rules: [
          {
            locator: "Art. 113b",
            explanation:
              "Розпорядження може охоплювати лише громадян держав, які воно назве, і лише permit за переліченими статтями.",
          },
          {
            locator: "Art. 113b",
            explanation:
              "При застосуванні спеціального правила під час обчислення місячних коштів не віднімають суму, призначену на житло.",
          },
        ],
        legalEffect:
          "Art. 113b лише делегує можливе нормативне уточнення фінансового розрахунку. Вона не надає permit, не легалізує pobyt і не дає права працювати.",
        foreignersCase:
          "Для розрахунку перевірте вид permit, громадянство заявника, чинне rozporządzenie та його дату; окремо зберіть підтвердження доходів і витрат, не припускаючи автоматичне застосування винятку.",
      }),
      reviewedArticle("114", {
        provisionId: "ustawa-o-cudzoziemcach-art-114",
        reviewStatus: "reviewed",
        statuteText:
          "Zezwolenia na pobyt czasowy i pracę надається, якщо cel pobytu — wykonywanie pracy та сукупно є ubezpieczenie/підтвердження лікування, робота не в професії з переліку Art. 31 ust. 3 ustawy про dopuszczalność powierzania pracy, винагорода не нижча за порівнювану роботу та не нижча за мінімальну місячну, незалежно від часу й виду правовідносин; ust. 1 pkt 2, ust. 2, 3 і 3a позначені як uchylony. Для zawodów pożądanych потрібні також кваліфікації; за окремого zwolnienie від work permit умови pkt 3–4 не застосовуються, insurance від роботи може виконати pkt 1, а для кількох podmiot враховується сума винагород.",
        statuteLocator: "Art. 114 ust. 1 pkt 1–5; ust. 1a; ust. 2–5",
        practicalText:
          "Permit i pracę поєднує право перебування з конкретною метою роботи, але не є загальним work authorization: умови decisión, окреме zwolnienie та вимоги regulated profession треба перевіряти окремо. Для висновку потрібні реальна робота, порівнювана оплата, мінімальна зарплата, insurance і кваліфікації, а не лише назва договору.",
        practicalLocator: "Art. 114 ust. 1–1a, ust. 4–5",
        summary:
          "Art. 114 встановлює сукупні materialні умови temporary residence and work permit, виняток для звільнення від work permit і делегацію переліку бажаних професій.",
        rules: [
          {
            locator: "Art. 114 ust. 1 pkt 1, 3–5",
            explanation:
              "Потрібні health insurance або покриття лікування, робота поза переліком Art. 31 ust. 3 (якщо немає винятку), не нижча за порівнювану винагорода і не нижча за мінімальну місячна винагорода.",
          },
          {
            locator: "Art. 114 ust. 1a",
            explanation:
              "Для zawodów pożądanych для польської економіки потрібні кваліфікації та одночасне виконання умов ust. 1 pkt 1, 4 і 5.",
          },
          {
            locator: "Art. 114 ust. 2–3a",
            explanation:
              "Пункти та підпункти, позначені в тексті як uchylony, не використовуються як чинні умови.",
          },
          {
            locator: "Art. 114 ust. 4",
            explanation:
              "Умови ust. 1 pkt 3 і 4 не застосовуються, якщо cudzoziemiec звільнений від вимоги work permit за іншими правилами.",
          },
          {
            locator: "Art. 114 ust. 4a–4b",
            explanation:
              "Insurance від роботи може виконати вимогу pkt 1; для роботи на користь кількох podmiot сума винагород у annexes має досягати порога ust. 1 pkt 5.",
          },
          {
            locator: "Art. 114 ust. 5",
            explanation:
              "Minister właściwy do spraw pracy у porozумінні з міністром економіки може встановити перелік zawodów pożądanych у rozporządzenie.",
          },
        ],
        legalEffect:
          "За відсутності будь-якої необхідної умови permit i pracę не випливає з Art. 114. Навіть наданий permit має межі рішення; він не скасовує окремі вимоги до роботи, професії та podmiot.",
        foreignersCase:
          "Зробіть матрицю `cel pobytu → умова Art. 114 → доказ`: insurance, zawód і перелік, kwalifikacje, порівнювана зарплата, мінімальна зарплата, години, кілька podmiot та можлива підстава zwolnienie від work permit. Зіставте це з annex і майбутньою decyzja.",
      }),
      reviewedArticle("114a", {
        provisionId: "ustawa-o-cudzoziemcach-art-114a",
        reviewStatus: "reviewed",
        statuteText:
          "Minister właściwy do spraw wewnętrznych у porозумінні з міністрами праці та економіки може встановити на календарний рік ліміт permit i pracę за Art. 114 і Art. 126, охопивши окремі województwa, zawody, види umów або види діяльності podmiot. Враховуються потреби ринку, безпека, porządek publiczny та complementarity праці cudzoziemiec до праці громадян Польщі; досягнення ліміту оголошується в Monitor Polski.",
        statuteLocator: "Art. 114a ust. 1–3",
        practicalText:
          "Ліміт можливий лише через відповідне rozporządzenie та оголошення, тому не можна виводити його наявність із самої статті. Для справи перевіряйте рік, województwo, zawód, umowa і діяльність podmiot за чинним актом.",
        practicalLocator: "Art. 114a ust. 1–3",
        summary:
          "Art. 114a створює можливість щорічного категоріального ліміту для permit i pracę та порядок оголошення його досягнення.",
        rules: [
          {
            locator: "Art. 114a ust. 1",
            explanation:
              "Rozporządzenie може встановити ліміти за województwo, професією, видом договору або діяльністю podmiot за класифікацією статистичних правил.",
          },
          {
            locator: "Art. 114a ust. 2",
            explanation:
              "Під час встановлення враховуються labor market, security, public order і принцип complementarity зайнятості cudzoziemiec.",
          },
          {
            locator: "Art. 114a ust. 3",
            explanation:
              "Minister оголошує досягнення лімітів у Monitor Polski шляхом obwieszczenie.",
          },
        ],
        legalEffect:
          "Стаття допускає нормативне кількісне обмеження permit i pracę, але сама не встановлює конкретної квоти й не дає дозволу на pobyt або роботу.",
        foreignersCase:
          "Перевірте чинне rozporządzenie, обwieszczenie Monitor Polski, календарний рік і всі категорії справи. Не змішуйте quota-screening з доказуванням мети, legal stay та умов конкретної роботи.",
      }),
      reviewedArticle("115", {
        provisionId: "ustawa-o-cudzoziemcach-art-115",
        reviewStatus: "reviewed",
        statuteText:
          "Отримання zezwolenia na pobyt czasowy i pracę не звільняє від вимог, встановлених окремими правилами для wykonywanie zawodów regulowanych або діяльності.",
        statuteLocator: "Art. 115",
        practicalText:
          "Permit i pracę та дозвіл/кваліфікація для regulated profession — різні питання. Потрібно назвати конкретну професію або діяльність і знайти окрему вимогу; сам residence permit не підтверджує професійне допущення.",
        practicalLocator: "Art. 115",
        summary:
          "Art. 115 прямо розділяє temporary residence and work permit та вимоги до регульованої професії або діяльності.",
        rules: [
          {
            locator: "Art. 115",
            explanation:
              "Окремі przepisy продовжують діяти навіть після отримання permit i pracę; їхні вимоги треба виконати самостійно.",
          },
        ],
        legalEffect:
          "Permit встановлює pobyt і, у межах рішення, робочий режим, але не скасовує ліцензію, професійне визнання чи інше обов’язкове допущення.",
        foreignersCase:
          "Визначте, чи є stanowisko zawód regulowany або діяльність зі спеціальним допуском, зберіть підтвердження kwalifikacje/licence/registration та порівняйте їх із Art. 118 рішення.",
      }),
      reviewedArticle("116", {
        provisionId: "ustawa-o-cudzoziemcach-art-116",
        reviewStatus: "reviewed",
        statuteText:
          "Окрім Art. 99, wszczęcia postępowania про permit i pracę відмовляють, якщо на день wniosek cudzoziemiec є delegowany працівником іноземного роботодавця, перебуває за міжнародними торговельно-інвестиційними зобов’язаннями, веде діяльність у Польщі, працює в діяльності з переліку Art. 45 ust. 2 work-act, має визначену візу Art. 60 ust. 1, перебуває для туризму/відвідин на візі іншої держави Schengen, користується довгостроковою візою або residence document іншої держави Schengen без mobility чи має zezwolenie na wjazd Art. 32 ust. 1.",
        statuteLocator: "Art. 116 pkt 1–9",
        practicalText:
          "Art. 116 — спеціальний процесуальний bar для permit i pracę, а не materialна відмова після розгляду. Визначальним є статус і підстава перебування саме на день подання; legal stay не означає, що цей тип заяви допустимий, а заборона wszczęcia не вирішує окремо work authorization.",
        practicalLocator: "Art. 116 pkt 1–9",
        summary:
          "Art. 116 перелічує підстави, за яких заяву на temporary residence and work permit не розпочинають розглядати через попередній статус, мету в’їзду або mobility.",
        rules: [
          {
            locator: "Art. 116 pkt 1–4",
            explanation:
              "Перешкодами є delegated worker іноземного роботодавця, treaty categories для trade/investment, prowadzenie działalności gospodarczej або визначена work-act діяльність за Art. 45 ust. 2.",
          },
          {
            locator: "Art. 116 pkt 5–6",
            explanation:
              "Не розпочинають справу за візою для названих у pkt 5 цілей Art. 60 ust. 1 або за Schengen visa іншої держави для туризму чи відвідин сім’ї/друзів.",
          },
          {
            locator: "Art. 116 pkt 7–9",
            explanation:
              "Перешкодами є довгострокова Schengen visa або residence document іншої держави без mobility, а також zezwolenie na wjazd Art. 32 ust. 1.",
          },
        ],
        legalEffect:
          "За умовою Art. 116 орган не починає провадження про permit i pracę; це не є рішенням про відповідність роботи й не надає іншого residence permit або work authorization.",
        foreignersCase:
          "На дату wniosek зберіть візу/карту іншої держави, договір delegowanie, реєстрацію діяльності, фактичну мету, mobility-документи та Art. 32 zezwolenie. Розділіть legal stay від допустимості саме заяви i pracę.",
      }),
      reviewedArticle("117", {
        provisionId: "ustawa-o-cudzoziemcach-art-117",
        reviewStatus: "reviewed",
        statuteText:
          "Окрім Art. 100, permit i pracę відмовляють, коли podmiot powierzający або особа, що ним zarządza/контролює, має перелічені остаточні покарання/вироки, не сплачує внески, не реєструє працівників або має податковий борг; lit. d ust. 1 pkt 1 та ust. 2 lit. c позначені як uchylona. Також відмовляють, якщо cudzoziemiec не має кваліфікацій для zawód regulowany або засуджений за підроблення у пов’язаному провадженні, чи досягнуто річного ліміту Art. 114a.",
        statuteLocator: "Art. 117 pkt 1 lit. a–j; pkt 2 lit. a–c; pkt 3",
        practicalText:
          "Це окремий screening роботодавця/суб’єкта, cudzoziemiec і quota. Не достатньо перевірити лише umowa: потрібні докази статусу podmiot, внесків, podatki, реєстрації, вироків, професійної кваліфікації та ліміту; скасовані lit. d і c не можна застосовувати.",
        practicalLocator: "Art. 117 pkt 1–3",
        summary:
          "Art. 117 містить додаткові обов’язкові підстави відмови у permit i pracę щодо podmiot, cudzoziemiec і досягнутого ліміту.",
        rules: [
          {
            locator: "Art. 117 pkt 1 lit. a–g",
            explanation:
              "Перевіряються повторні або визначені покарання за work-act, вироки за Art. 218–221, 270–273, 275 та 189a Kodeks karny, злочини за ustawa 2012 про нелегальну працю і торгівлю людьми; lit. d uchylona.",
          },
          {
            locator: "Art. 117 pkt 1 lit. h–j",
            explanation:
              "Підставами є невиконання внесків до перелічених фондів, незаявлення працівників до social insurance або податковий борг, крім передбачених законом zwolnienie, odroczenie, raty чи wstrzymanie.",
          },
          {
            locator: "Art. 117 pkt 2 lit. a–c",
            explanation:
              "Cudzoziemiec має мати formalne kwalifikacje та інші умови regulated profession; вирок за Art. 270–275 у пов’язаному провадженні є підставою; lit. c uchylona.",
          },
          {
            locator: "Art. 117 pkt 3",
            explanation:
              "Відмовляють, коли досягнуто ліміт permit i pracę для цього cudzoziemiec за розпорядженням Art. 114a ust. 1.",
          },
        ],
        legalEffect:
          "За встановлення конкретної умови Art. 117 рішення має бути odmowa udzielenia permit i pracę, навіть якщо мета роботи та інші документи виглядають належно. Це не є окремим рішенням про legal stay і не робить іншу роботу законною.",
        foreignersCase:
          "Перевірте за окремими pkt остаточні вироки/покарання, внески та реєстрацію, podatki, статус контролюючих осіб, кваліфікації regulated profession і quota. До кожного висновку додайте офіційний документ і не використовуйте uchylone litera як умову.",
      }),
      reviewedArticle("117a", {
        provisionId: "ustawa-o-cudzoziemcach-art-117a",
        reviewStatus: "reviewed",
        statuteText:
          "Permit i pracę відмовляють, якщо podmiot або pracodawca użytkownik не веде діяльності, що виправдовує зайнятість cudzoziemiec у відповідний період, зокрема має zawieszona działalność, викреслений із реєстру або перебуває в ліквідації; podmiot не має коштів/доходу для трудових зобов’язань; podmiot створений або діє головно для нелегального в’їзду; або факти вказують, що особу наймає неagencja pracy tymczasowej для роботи на користь третьої особи.",
        statuteLocator: "Art. 117a pkt 1–4",
        practicalText:
          "Оцінюється реальна діяльність і організація роботи, не лише назва `outsourcing` чи пункт договору. Особливо треба розрізнити звичайне powierzanie pracy, тимчасове працевлаштування через agencja та фактичне направлення до третьої особи без статусу agencja.",
        practicalLocator: "Art. 117a pkt 1–4",
        summary:
          "Art. 117a встановлює додаткові materialні підстави відмови, пов’язані з діяльністю, фінансуванням та фактичною моделлю роботодавця.",
        rules: [
          {
            locator: "Art. 117a pkt 1",
            explanation:
              "Відмова є обов’язковою, якщо podmiot або pracodawca użytkownik не має діяльності, що виправдовує зайнятість у період, включно з zawieszenie, викресленням або ліквідацією.",
          },
          {
            locator: "Art. 117a pkt 2–3",
            explanation:
              "Перевіряються кошти/джерела доходу для трудових зобов’язань і те, чи не створено podmiot головно для сприяння нелегальному в’їзду.",
          },
          {
            locator: "Art. 117a pkt 4",
            explanation:
              "Підставою є фактична модель, у якій cudzoziemiec працював би на третю особу через суб’єкт, що не є належною agencja pracy tymczasowej.",
          },
        ],
        legalEffect:
          "Встановлена підстава веде до odmowa permit i pracę. Art. 117a не встановлює, що будь-який outsourcing незаконний, але вимагає оцінити фактичних суб’єктів, контроль і правову модель роботи.",
        foreignersCase:
          "Намалюйте схему: хто підписує договір, хто платить, хто керує, де і для кого працює cudzoziemiec, чи є pracodawca użytkownik та чи зареєстрована agencja. Додайте реєстраційні, фінансові й фактичні докази діяльності.",
      }),
      reviewedArticle("117b", {
        provisionId: "ustawa-o-cudzoziemcach-art-117b",
        reviewStatus: "reviewed",
        statuteText:
          "У провадженні про permit i pracę відповідно застосовується Art. 27 ustawy z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom. За цим cross-reference wojewoda враховує у черговості wnioski для визначених у переліку підприємців, повторне zezwolenie тому самому podmiot і cudzoziemiec без нижчих часу/зарплати, професії з переліку та інші заяви.",
        statuteLocator: "Art. 117b; art. 27 ustawy z 20 marca 2025 r.",
        practicalText:
          "Art. 117b не створює окремої materialної умови permit і не гарантує швидшого рішення; він імпортує порядок пріоритетності Art. 27 іншої ustawa. Перевіряйте чинний текст Art. 27, відповідний wykaz і факти повторної заяви.",
        practicalLocator: "Art. 117b",
        summary:
          "Art. 117b відсилає до Art. 27 нової ustawa про powierzanie pracy і робить його порядок черговості відповідним у провадженні про permit i pracę.",
        rules: [
          {
            locator: "Art. 117b",
            explanation:
              "Застосовується відповідно Art. 27 work-act, який розставляє черговість між переліченими підприємцями, повторним permit, zawodami з wykaz і рештою заяв.",
          },
        ],
        legalEffect:
          "Норма впливає на порядок розгляду wnioski, але не надає residence permit, legal stay або work authorization і не скасовує матеріальні умови Art. 114, 117 та 117a.",
        foreignersCase:
          "Визначте категорію заяви за Art. 27, відповідний wykaz, попередній permit, podmiot, cudzoziemiec, wymiar czasu pracy та wynagrodzenie. Не називайте пріоритет доказом позитивного рішення.",
      }),
      reviewedArticle("118", {
        provisionId: "ustawa-o-cudzoziemcach-art-118",
        reviewStatus: "reviewed",
        statuteText:
          "У decyzja про permit i pracę, крім строку дії, зазначають podmiot powierzający (і pracodawca użytkownik для працівника тимчасового), stanowisko/rodzaj pracy, найнижчу винагороду, wymiar czasu pracy та rodzaj umowy; рішення містить pouczenie про Art. 121 ust. 1. Для кількох podmiot умови визначаються окремо. Якщо cudzoziemiec звільнений від work permit, замість цих даних зазначають право працювати за нормою звільнення; для неповного часу або civil contract мінімальну винагороду вказують пропорційно.",
        statuteLocator: "Art. 118 ust. 1–5",
        practicalText:
          "Art. 118 перетворює умови праці на межі рішення. Тому legal stay за permit і право виконувати роботу треба читати окремо: робота поза podmiot, посадою, оплатою, часом чи договором не підтверджується лише наявністю картки pobytu.",
        practicalLocator: "Art. 118 ust. 1–5",
        summary:
          "Art. 118 визначає обов’язковий зміст рішення про temporary residence and work permit та межі роботи за кожним podmiot.",
        rules: [
          {
            locator: "Art. 118 ust. 1 pkt 1–5; ust. 1a",
            explanation:
              "Decyzja містить суб’єкта/користувача, роботу, мінімальну зарплату, години, тип umowa і pouczenie про повідомлення втрати роботи.",
          },
          {
            locator: "Art. 118 ust. 2",
            explanation:
              "За кількох podmiot умови з ust. 1 виписуються окремо для кожного.",
          },
          {
            locator: "Art. 118 ust. 3–4",
            explanation:
              "За звільнення від work permit параметри ust. 1 не вносяться; рішення зазначає право працювати на умовах норми, що є підставою звільнення.",
          },
          {
            locator: "Art. 118 ust. 5",
            explanation:
              "Для неповного часу або civil contract найнижчу оплату вказують пропорційно часу або прогнозованому періоду зобов’язань.",
          },
        ],
        legalEffect:
          "Decyzja визначає конкретний обсяг residence-and-work authorization і його обмеження. Вона не скасовує вимоги regulated profession, а legal stay не слід ототожнювати з необмеженим правом на будь-яку працю.",
        foreignersCase:
          "Порівняйте паспорт і kartа pobytu з кожним рядком decyzja: podmiot, user, stanowisko, зарплата, години, umowa, строк і pouczenie. Перевірте payroll, графік, фактичне місце та модель роботи.",
      }),
      reviewedArticle("119", {
        provisionId: "ustawa-o-cudzoziemcach-art-119",
        reviewStatus: "reviewed",
        statuteText:
          "Зміна або нове permit i pracę не потрібні при зміні siedziba/місця проживання, назви або форми правної podmiot чи pracodawca użytkownik; переході zakład; збільшенні wymiar часу з пропорційною зарплатою; зміні назви stanowisko без зміни обов’язків; або заміні civil contract на umowa o pracę. Podmiot повідомляє письмово wojewoda протягом 15 dni roboczych; після рішення Szef Urzędu — wojewoda першої інстанції.",
        statuteLocator: "Art. 119 ust. 1–3",
        practicalText:
          "Виняток від нової/зміненої decyzja діє лише за точною відповідністю одному з pkt ust. 1. Він не скасовує письмове повідомлення і не охоплює зміну роботодавця, посади по суті, зарплати всупереч умові або іншого фактичного роботодавця.",
        practicalLocator: "Art. 119 ust. 1–3",
        summary:
          "Art. 119 називає вичерпні зміни, для яких не потрібне нове або змінене permit i pracę, але вимагає повідомлення wojewoda.",
        rules: [
          {
            locator: "Art. 119 ust. 1 pkt 1–2",
            explanation:
              "Без зміни permit допускаються організаційні зміни podmiot/user та transfer zakład або його частини до іншого роботодавця.",
          },
          {
            locator: "Art. 119 ust. 1 pkt 3–5",
            explanation:
              "Допускаються лише збільшення часу з пропорційною оплатою, зміна назви без зміни обов’язків або заміна civil contract на umowa o pracę.",
          },
          {
            locator: "Art. 119 ust. 2–3",
            explanation:
              "Podmiot надсилає письмове повідомлення протягом 15 dni roboczych правильному wojewoda; після другої інстанції адресатом є wojewoda першої інстанції.",
          },
        ],
        legalEffect:
          "За умов Art. 119 чинне permit зберігає свої параметри без нової decyzja, але повідомлення є окремим обов’язком. Стаття не робить будь-яку зміну роботи законною поза переліченими випадками.",
        foreignersCase:
          "Порівняйте старі й нові реєстраційні дані, документи transfer, години й оплату, обов’язки та тип договору. Подайте письмове повідомлення до правильного wojewoda в 15 dni roboczych і збережіть доказ.",
      }),
      reviewedArticle("120", {
        provisionId: "ustawa-o-cudzoziemcach-art-120",
        reviewStatus: "reviewed",
        statuteText:
          "Wojewoda за місцем актуального pobyt може в будь-який час на wniosek cudzoziemiec змінити permit i pracę, якщо особа хоче працювати в іншого podmiot, на умовах zwolnienie від work permit, в іншого pracodawca użytkownik або на інших умовах Art. 118 ust. 1 pkt 2–5; строк permit не змінюється. Для pkt 1 відмова є обов’язковою за відсутності insurance, умов podmiot Art. 114, Art. 117, недостатньої зарплати, коротшого періоду роботи або пропуску повідомлення Art. 121; в окремих випадках organ може відмовити через відсутність діяльності/коштів. Сторона — лише cudzoziemiec.",
        statuteLocator: "Art. 120 ust. 1–7",
        practicalText:
          "Зміна permit потрібна для нового суб’єкта, user або істотних параметрів, якщо Art. 119 не дає винятку. Нова umowa або поданий wniosek самі не змінюють стару decyzja і не створюють автоматичного права почати іншу роботу; до зміни перевірте insurance, оплату, строки та повідомлення про втрату роботи.",
        practicalLocator: "Art. 120 ust. 1–7",
        summary:
          "Art. 120 регулює зміну permit i pracę, обов’язкові та факультативні підстави відмови, незмінність строку та статус єдиної сторони.",
        rules: [
          {
            locator: "Art. 120 ust. 1–3",
            explanation:
              "Wojewoda за актуальним місцем pobyt змінює умови за заявою для нового podmiot/user або Art. 118 параметрів; до decyzja застосовують Art. 118, а строк permit не змінюють.",
          },
          {
            locator: "Art. 120 ust. 4",
            explanation:
              "За зміни podmiot обов’язково відмовляють при відсутності insurance, умов Art. 114, перешкод Art. 117, недостатній зарплаті, коротшому періоді роботи або пропущеному Art. 121 повідомленні.",
          },
          {
            locator: "Art. 120 ust. 5",
            explanation:
              "У випадку нового podmiot organ може відмовити, якщо podmiot/user не веде діяльності або не має коштів/джерел доходу для трудових зобов’язань.",
          },
          {
            locator: "Art. 120 ust. 6–7",
            explanation:
              "Для нового user або інших умов можливі відмови через insurance чи невиконання podmiot умов Art. 114 ust. 1 pkt 3–5; стороною є виключно cudzoziemiec.",
          },
        ],
        legalEffect:
          "До рішення про зміну діють параметри чинного permit; Art. 120 не продовжує строк і не легалізує нову роботу автоматично. Позитивна зміна також не скасовує окремі вимоги професії та work authorization.",
        foreignersCase:
          "Визначте, чи зміна підпадає під Art. 119 або потребує Art. 120. Додайте новий annex, umowa, дані podmiot/user, insurance, оплату, години, строк роботи, докази діяльності та підтвердження Art. 121 повідомлення; подавайте від імені cudzoziemiec.",
      }),
      reviewedArticle("120a", {
        provisionId: "ustawa-o-cudzoziemcach-art-120a",
        reviewStatus: "reviewed",
        statuteText:
          "Wniosek про зміну permit i pracę подається cudzoziemiec на formularz із ідентифікаційними та сімейними даними, information про ubezpieczenie та oświadczenie про правдивість під кримінальною відповідальністю. Додаються annex podmiot за Art. 106 ust. 1a та документи, що підтверджують дані й обставини зміни; відповідно застосовуються Art. 106 ust. 2a–2b і Art. 112a ust. 1, 2, 4–5.",
        statuteLocator: "Art. 120a ust. 1–3",
        practicalText:
          "Art. 120a визначає комплект для розгляду зміни, але сама заява не змінює старі умови permit і не дозволяє автоматично почати іншу роботу. Потрібно довести саме новий podmiot/user або нові параметри, а також дотримати wezwanie і строки провадження.",
        practicalLocator: "Art. 120a ust. 1–3",
        summary:
          "Art. 120a встановлює форму, додатки, докази та процесуальні відсилання для wniosek про зміну permit i pracę.",
        rules: [
          {
            locator: "Art. 120a ust. 1 pkt 1–4",
            explanation:
              "Formularz містить необхідні дані cudzoziemiec і сім’ї, health insurance та письмове oświadczenie про правдивість.",
          },
          {
            locator: "Art. 120a ust. 2 pkt 1–2",
            explanation:
              "До wniosek додаються заповнений podmiot annex з Art. 106 ust. 1a та документи для підтвердження даних і причин зміни permit.",
          },
          {
            locator: "Art. 120a ust. 3",
            explanation:
              "До процедури відповідно застосовуються wezwanie за Art. 106 ust. 2a–2b та строки Art. 112a ust. 1, 2, 4–5.",
          },
        ],
        legalEffect:
          "Стаття запускає документований розгляд зміни, але не є новою decyzja і не надає до неї права на іншу працю. Legal stay та чинні параметри роботи визначаються окремо за чинним permit і законом.",
        foreignersCase:
          "Подайте formularz від імені cudzoziemiec, перевірте сімейні дані й insurance, отримайте повний annex podmiot, додайте нову umowa/опис умов і докази зміни. Збережіть підтвердження подання та відповіді на wezwanie.",
      }),
    ]),
  })
