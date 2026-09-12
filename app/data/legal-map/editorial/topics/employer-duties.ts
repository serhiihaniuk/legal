import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import { foreignersLaw, workLaw as law } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const foreignersUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf"
const transitionUrl =
  "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf"
const contractChangeUrl = "https://eli.gov.pl/eli/DU/2026/734/ogl"
const contractLaunchUrl =
  "https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038"
const permitLaunchUrl =
  "https://www.gov.pl/attachment/745cc004-b156-4c03-a19a-ae071b579952"
const declarationLaunchUrl =
  "https://www.gov.pl/attachment/3f96f9df-8924-4ec3-83bd-157f7d1533c2"
const oldApplicationsUrl =
  "https://www.gov.pl/web/uw-mazowiecki/od-1-czerwca-2026-r-nowa-funkcjonalnosc-na-pracagovpl---elektronizacja-procedur-informacyjnych"
const declarationFormsUrl =
  "https://tarnow.praca.gov.pl/-/wazne-zmiany-dla-pracodawcow-zatrudniajacych-cudzoziemcow-od-1-czerwca-2026-roku"
const servicesUrl =
  "https://www.praca.gov.pl/eurzad/html/pomoc/zatrudnianie_cudzoziemcow.htm"
const workReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const

export const employerDutiesTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:employer-duties",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "employer-duties" },
    },
    summary:
      "Роботодавець перевіряє перебування і право до конкретної роботи, оформляє зрозумілий письмовий договір та виконує його умови. Подальше повідомлення залежить від підстави праці й події: одна дата завершення роботи може вимагати різних документів і мати різні наслідки.",
    claims: [
      {
        id: "employer-obligations",
        kind: "statute-text",
        text: law.text`${law.article("4")} і ${law.article("5")} розрізняють перевірку перебування, письмовий договір, зрозумілий працівникові текст та переклад договору іноземною мовою. Спеціальні обов'язки щодо дозволу й oświadczenia визначають ${law.article("17")} та ${law.article("68")}.`,
        basis: [{ reference: workReference, locator: "Art. 4–5, 17, 68" }],
      },
      {
        id: "employer-event-notifications",
        kind: "statute-text",
        text: law.text`Повідомлення за ${law.article("19")} і ${law.article("20")} про роботу на підставі zezwolenia має інші події та строки, ніж повідомлення за ${law.article("70")} щодо oświadczenia. Повідомлення про остаточний непочаток або раннє завершення за другим режимом спричиняє unieważnienie wpisu z mocy prawa, тобто запис втрачає чинність у силу закону.`,
        basis: [
          {
            reference: workReference,
            locator: "Art. 19–20; art. 70 ust. 1–2, 5",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: {
      title: "Обов’язки роботодавця",
      polish: law.text`${law.articleRange("4", "5")}, ${law.articleRange("17", "20")}, ${law.article("33")}, ${law.articleRange("68", "70")}`,
      documents: [
        documents.text`${documents.document("declaration-start-notification", "PSZ-PPPC про початок роботи")}: подане 3 липня щодо фактичного початку роботи B 1 липня. Це окрема дія після передання договору.`,
        documents.text`${documents.document("declaration-end-notification", "PSZ-PZPC про раннє завершення")}: подане 17 серпня щодо завершення роботи B 15 серпня. Повідомлення про непочаток для нього не потрібне, оскільки він фактично працював.`,
        documents.text`${documents.document("work-permit-end-notification", "ZC-PZPC про завершення роботи")}: подане для працівника A в прикладі, оскільки до кінця його дозволу лишилося понад два місяці. ZC-PNPC про непочаток і ZC-PPPC про перерву для цього факту не подають.`,
        documents.text`${documents.document("work-permit", "Zezwolenie na pracę")}: дозволені умови роботи працівника A в прикладі. Для B підставою є зареєстроване oświadczenie, тому окремого такого дозволу для нього не додають.`,
        documents.text`${documents.document("passport", "Паспорт")} і, у вибраному нижче прикладі, ${documents.document("visa", "національна віза для праці")}: особа, строк та підстава перебування. В інших ситуаціях перевіряють відповідний документ або статус, а не шукають візу в кожній справі.`,
        documents.text`${documents.document("employment-contract", "Umowa o pracę")}: конкретно обраний трудовий договір. Зрозумілий письмовий виклад його змісту не тотожний ${documents.document("sworn-translation", "перекладу tłumacza przysięgłego")}, який потрібен для зберігання польського перекладу договору, укладеного іноземною мовою.`,
        documents.text`${documents.document("registered-work-declaration", "Зареєстроване oświadczenie")}: підстава та дозволені умови роботи. Повідомлення про фактичний початок або завершення є окремими документами.`,
        documents.text`${documents.document("payroll-statement", "Розрахунок зарплати")}, ${documents.document("bank-statement", "виписка з виконаною виплатою")} та ${documents.document("zus-rca", "іменний звіт ZUS RCA")}: різні відомості про розрахунок, рух коштів і заявлені страхові бази.`,
        documents.text`${documents.document("dispatch-proof", "Підтвердження подання")}: дата й адресат конкретного повідомлення. Зберігається разом із самим поданим повідомленням.`,
      ],
      sources: [
        {
          label: "PUP Tarnów: форми для нових і старіших записів",
          url: declarationFormsUrl,
          note: "Перевірено 12.09.2026 пояснення про повідомлення й форми для записів до 01.06.2026. Це технічна інструкція; обов’язки та наслідки встановлює закон. Інші додатки, згадані на цій сторінці, тут не визначаються.",
        },
        {
          label: "Mazowiecki UW: спосіб повідомлення для старіших заяв",
          url: oldApplicationsUrl,
          note: "Перевірено 12.09.2026. Вказівка органу окремо описує повідомлення за дозволами, пов'язаними із заявами до кінця 2025 року. Це обмеження технічного обслуговування та місцева інструкція щодо способу подання, не нова подія чи строк зі статті 19.",
        },
        {
          label: "Обов'язки за законом про працю іноземців",
          url: workUrl,
          note: law.text`Перевірено 12.09.2026 ${law.articleRange("4", "5a")}, ${law.articleRange("17", "20")}, ${law.article("22")}, ${law.article("33")}, ${law.articleRange("68", "70")} та технічний перехід за ${law.article("109")}. Перевірка стосується цієї теми.`,
        },
        {
          label: "Назви чинних електронних послуг praca.gov.pl",
          url: servicesUrl,
          note: "Офіційна довідка називає PGP-UZC, нові повідомлення ZC та PSZ і окремо старі форми. Назва послуги не визначає, чи виник обов'язок у конкретній справі.",
        },
        {
          label: "Запуск передання копій договорів у 2025 році",
          url: contractLaunchUrl,
          note: "Комунікат від 28.05.2025, poz. 15: компонент для дозволів wojewody з 01.08.2025, для oświadczeń та сезонних дозволів з 01.07.2025.",
        },
        {
          label: "Зміна закону про передання договору у 2026 році",
          url: contractChangeUrl,
          note: law.text`Зміна ${law.article("17")} і ${law.article("68")} чинна з 20.06.2026. Закон окремо регулює впровадження системи договорів; його ухвалення не засвідчує запуск усіх нових функцій eUmowy.`,
        },
        {
          label: "Запуск трьох повідомлень щодо дозволу на працю",
          url: permitLaunchUrl,
          note: law.text`Комунікат від 29.04.2026, poz. 7, запускає повідомлення за ${law.article("19")} з 01.06.2026. Його предмет не охоплює повідомлень за ${law.article("18")} і ${law.article("33")}.`,
        },
        {
          label: "Запуск повідомлення про остаточний непочаток або завершення",
          url: declarationLaunchUrl,
          note: law.text`Комунікат від 29.04.2026, poz. 8: компонент ${law.article("70", "art. 70 ust. 2–3")} працює з 01.06.2026.`,
        },
        {
          label: "Повідомлення у справі про pobyt czasowy i pracę",
          url: foreignersUrl,
          note: foreignersLaw.text`${foreignersLaw.article("119", "Art. 119 ust. 2")} та ${foreignersLaw.article("121")}: окремі обов'язки роботодавця й іноземця, включно з різницею між календарними та робочими днями.`,
        },
        {
          label: "Перехідні правила праці громадян України",
          url: transitionUrl,
          note: law.text`${law.external("Art. 40–41", transitionUrl)} зберігають визначені попередні повідомлення та поширюють відповідне застосування ${law.article("5a")} на визначену групу законно перебуваючих громадян України протягом трьох років від 05.03.2026.`,
        },
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "Podmiot powierzający pracę означає суб'єкта, який доручає роботу. Це може бути роботодавець за umową o pracę або сторона іншого дозволеного договору. Його обов'язки починаються перед допуском людини до роботи й тривають після її завершення.",
          "Спочатку встановлюють, на якій підставі людина фактично працює. Дозвіл на працю, зареєстроване oświadczenie, спеціальне powiadomienie та незалежне звільнення від дозволу створюють різні обов'язки. Наявність ще одного документа в папці не означає, що всі режими треба виконувати одночасно.",
        ],
        sections: [
          {
            id: "before-work",
            title: "Перед допуском до роботи потрібні два окремі висновки",
            paragraphs: [
              documents.text`${documents.document("passport", "Паспорт")} встановлює особу. ${documents.document("visa", "Віза")} або відповідний інший документ дозволяє перевірити перебування. Потім роботодавець окремо визначає право до запропонованої роботи: потрібний дозвіл, зареєстроване oświadczenie, спеціальне повідомлення чи встановлене законом звільнення. Строк перебування і строк дозволеної роботи можуть закінчуватися в різні дні.`,
              law.text`${law.article("4", "Art. 4 ust. 2–4")} вимагає показати чинний документ перебування перед початком роботи та зберігати його копію; роботодавець може вимагати пред'явлення також під час роботи. Виняток у ${law.article("4", "art. 4 ust. 5")} стосується лише категорій ${law.article("3", "art. 3 ust. 1 pkt 1–5")}. Його не можна поширювати на всіх осіб із вільним доступом до праці, зокрема на власника польського pobytu stałego.`,
              law.text`Строк зберігання за ${law.article("4", "art. 4 ust. 6")} охоплює час роботи та два роки від кінця календарного року, в якому правовідносини припинилися або закінчилися, якщо інші норми не встановлюють довшого строку. Наприклад, завершення у серпні 2026 року веде до кінця 2028 року за цим правилом. Це не дозвіл тоді знищити всю кадрову та зарплатну документацію: для неї можуть діяти інші строки. Копії й дані треба захищати від неналежного використання.`,
            ],
          },
          {
            id: "contract-and-language",
            title:
              "Договір, зрозумілий текст і копія для органу мають різні функції",
            paragraphs: [
              law.text`${law.article("5")} вимагає письмового договору до початку роботи, з окремим винятком для корпоративних функцій, названих у ${law.article("6", "art. 6 ust. 1 pkt 2")}. Якщо договір польською, а людина не володіє польською, перед підписанням їй письмово надають зміст зрозумілою мовою та зберігають цей текст. Усної розмови недостатньо.`,
              documents.text`Коли сам договір складено іноземною мовою, роботодавець зберігає його ${documents.document("sworn-translation", "польський переклад tłumacza przysięgłego")}, внесеного до списку Ministra Sprawiedliwości. Це інший обов'язок, ніж надати працівникові зрозумілий зміст польського договору. Для такого зрозумілого тексту ${law.article("5")} не встановлює загальної вимоги перекладу саме присяжним перекладачем.`,
              law.text`Окремо ${law.article("5", "art. 5 ust. 4")} вимагає письмової інформації зрозумілою мовою про право вступати до związków zawodowych. Правило охоплює перелічені трудові, кооперативні та цивільні відносини, зокрема umowę zlecenia. Наявність перекладу договору сама по собі не підтверджує, що цю інформацію надано.`,
              law.text`Якщо робота спирається на zezwolenie, договір має відображати його умови; якщо на зареєстроване oświadczenie, умови беруть із запису. За ${law.article("17", "art. 17 ust. 1 pkt 2")} та ${law.article("68", "art. 68 ust. 1 pkt 2")} польський договір або його польську копію передають відповідному органу до початку роботи. Для дозволу це орган, який його видав, для oświadczenia це орган, який здійснив реєстрацію. Корпоративні функції мають окремі виключення у ${law.article("17", "art. 17 ust. 2")}; для umowy o pomocy przy zbiorach закон передбачає окремий строк.`,
              "Перевірена послуга передання копії називається Przekazanie kopii Umowy z Cudzoziemcem (PGP-UZC). Вона використана в прикладі нижче. Чинний закон також називає передання договору через систему обслуговування договорів. Це не підстава вважати, що кожна нова функція eUmowy вже доступна: спосіб передання треба співвіднести з фактично доступною офіційною послугою.",
              documents.text`Працівникові передають відповідне рішення або ${documents.document("registered-work-declaration", "зареєстроване oświadczenie")}; копія договору для органу цього не замінює. Так само ${documents.document("dispatch-proof", "квитанція передання копії")} доводить подання, але не підтверджує фактичної виплати зарплати або правильності всіх умов.`,
            ],
          },
          {
            id: "permit-events",
            title:
              "Для дозволу на працю важлива конкретна зміна або тривалість перерви",
            paragraphs: [
              documents.text`Суб'єкт, якому видано ${documents.document("work-permit", "zezwolenie na pracę")}, повідомляє орган, що його видав. Для звичайного дозволу польського роботодавця це wojewoda. За ${law.article("19")} подіями є непочаток роботи протягом двох місяців від початкової дати чинності дозволу, перерва понад два місяці або завершення роботи більш як за два місяці до закінчення дозволу. ${law.article("20")} дає сім днів від настання відповідної обставини. Перший день звичайної роботи не створює окремого повідомлення про початок за цим приписом.`,
              documents.text`В офіційній довідці ці три послуги названо ${documents.document("work-permit-non-start-notification", "Powiadomienie o niepodjęciu pracy przez cudzoziemca (ZC-PNPC)")}, ${documents.document("work-permit-interruption-notification", "Powiadomienie o przerwie w pracy cudzoziemca (ZC-PPPC)")} та ${documents.document("work-permit-end-notification", "Powiadomienie o zakończeniu pracy przez cudzoziemca (ZC-PZPC)")}. Роботодавець обирає послугу за фактом, який уже настав. Копія договору, надіслана перед роботою, не замінює жодного з цих повідомлень.`,
              law.text`Отримання інформації про ці обставини є підставою для uchylenia zezwolenia, скасування дозволу органом, за ${law.article("22", "art. 22 ust. 1 pkt 6")}. Для непочатку або перерви ${law.article("22", "art. 22 ust. 3")} передбачає виняток: wojewoda має отримати повідомлення з причинами та заявою, що дозвіл буде використано за призначенням. Тоді саме ця підстава скасування не застосовується. Порожнє повідомлення лише з датою цього не забезпечує. Виняток не охоплює раннього завершення роботи за ${law.article("19", "art. 19 pkt 3")} і не усуває інших можливих підстав скасування.`,
              law.text`Зміни, названі в ${law.article("18")}, можуть не вимагати нового дозволу: наприклад, зміна назви чи правової форми суб'єкта, перехід закладу праці або зміна назви посади без зміни обов'язків. Водночас про них треба повідомити орган у семиденний строк. Відсутність потреби в новому дозволі не означає відсутності повідомлення.`,
              law.text`Інша ситуація в ${law.article("33", "art. 33 ust. 1")}: доручення іншої роботи або іншої посади польським суб'єктом максимум на 30 днів у календарному році потребує повідомлення wojewody заздалегідь і збереження решти передбачених умов. Повідомлення через сім днів після переведення не виконує умови попереднього повідомлення. Інші винятки щодо зміни часу роботи чи переходу від цивільного договору до трудового перевіряють за ${law.article("33", "art. 33 ust. 2")}; сам новий договір не дозволяє довільно змінити всі умови.`,
              law.text`Для способу подання слід враховувати технічний перехід за ${law.article("109")}. Комунікат про запуск з 01.06.2026 прямо охоплює повідомлення за ${law.article("19")}. Дату заяви, за якою видано дозвіл, теж перевіряють. ${law.external("Mazowiecki UW", oldApplicationsUrl)} окремо описує спосіб повідомлення для заяв, поданих до кінця 2025 року; дату видачі дозволу не слід підміняти датою заяви. Для такої справи застосовують чинні вказівки органу, що видав дозвіл. Цей комунікат не підтверджує окремий запуск для ${law.article("18", "art. 18 ust. 2")} чи ${law.article("33", "art. 33 ust. 1")}. Для цих двох дій перевіряють чинні вказівки органу, який видав дозвіл; відсутність знайденої назви форми не зупиняє строку і не скасовує обов'язку. Не слід підміняти повідомлення довільною формою про завершення роботи.`,
            ],
          },
          {
            id: "other-instruments",
            title:
              "Oświadczenie, спеціальне powiadomienie та дозвіл на перебування мають власні строки",
            paragraphs: [
              documents.text`За ${law.article("70", "art. 70 ust. 1")} польський суб'єкт, чиє oświadczenie зареєстровано, повідомляє відповідного starostę про фактичний початок роботи протягом семи днів від початку. Послуга називається ${documents.document("declaration-start-notification", "Powiadomienie o podjęciu pracy przez cudzoziemca (PSZ-PPPC)")}. Якщо робота не почалася, подають ${documents.document("declaration-non-start-notification", "Powiadomienie o niepodjęciu pracy przez cudzoziemca (PSZ-PNPC)")} протягом 14 днів від дати початку, записаної в ewidencji. Це не строк від довільної дати, яку роботодавець обговорив із працівником.`,
              documents.text`Тимчасово не почати й остаточно відмовитися від початку є різними фактами. Якщо людина вже не почне роботу або завершила її раніше зареєстрованої дати, ${law.article("70", "art. 70 ust. 2")} передбачає ${documents.document("declaration-end-notification", "Powiadomienie, że cudzoziemiec zakończył pracę lub nie podejmie pracy (PSZ-PZPC)")}. Тут закон не встановлює числового строку в сім чи 14 днів. Саме це повідомлення спричиняє unieważnienie wpisu z mocy prawa за ${law.article("70", "art. 70 ust. 5")}: запис втрачає чинність у силу закону, без потреби в окремому рішенні про це. Звичайне повідомлення про затримку початку такого наслідку не має.`,
              law.text`Дата запису впливає на вибір форми. ${law.external("PUP Tarnów", declarationFormsUrl)} описує попередні форми для записів до 01.06.2026; їх не замінюють довільно схожою новою послугою. Це питання технічного обслуговування, а не інші строки за старим законом: ${law.article("103", "art. 103 ust. 3")} поширює цей закон також на oświadczenia, зареєстровані за попередніми правилами. Для старішого запису спосіб подання звіряють із чинною інструкцією свого PUP.`,
              documents.text`${documents.document("ukraine-work-notification", "Powiadomienie o powierzeniu pracy cudzoziemcowi")} (PSZ-PPWPU) за ${law.article("5a")} стосується окремого режиму. Польський роботодавець подає його до PUP за своїм місцезнаходженням або постійним місцем проживання протягом семи днів від фактичного початку. Для повторного повідомлення ${law.article("5a", "art. 5a ust. 5 pkt 1")} прямо називає зміну виду договору з громадянином України. ${law.article("5a", "Пункти 2–4")} окремо охоплюють зміну посади чи виду роботи, зменшення зазначеного в повідомленні часу або кількості годин та зниження вказаної в ньому місячної чи погодинної ставки. Строк для перелічених подій становить сім днів від зміни. Формулювання про громадянина України в першому пункті не слід поширювати на інші громадянства лише через загальне охоплення тимчасового захисту. Не кожна зміна даних є такою подією.`,
              law.text`${law.article("5a")} безпосередньо регулює тимчасовий захист. ${law.external("Art. 41 ustawy z 23.01.2026", transitionUrl)} поширює відповідне застосування на законно перебуваючих громадян України без такого захисту протягом трьох років від 05.03.2026. ${law.external("Art. 40", transitionUrl)} зберігає визначені попередні повідомлення. Сам факт зміни закону не означає, що для кожного вже працюючого громадянина України потрібне нове повідомлення.`,
              foreignersLaw.text`Zezwolenie na pobyt czasowy i pracę не є звичайним zezwoleniem na pracę з попереднього розділу. ${foreignersLaw.article("119", "Art. 119 ust. 2")} дає роботодавцеві 15 робочих днів для визначених змін, а ${foreignersLaw.article("121", "art. 121 ust. 4")} дає роботодавцеві, названому в дозволі, 15 календарних днів для повідомлення про втрату роботи. Власний обов'язок іноземця за ${foreignersLaw.article("121", "art. 121 ust. 1")} має строк 15 робочих днів. Адресатом є відповідний wojewoda, з окремим правилом для дозволу, виданого в другій інстанції. Повідомлення роботодавця і дія працівника потребують окремої перевірки.`,
            ],
          },
          {
            id: "conditions-and-records",
            title:
              "Під час роботи перевіряють виконання умов, а не лише наявність повідомлень",
            paragraphs: [
              law.text`${law.article("17")} та ${law.article("68")} пов'язують фактичну працю з умовами дозволу або зареєстрованого oświadczenia. Треба зберігати належну винагороду, враховувати застосовні підвищення мінімумів і передбачене пропорційне підвищення оплати при збільшенні часу роботи. Зміна, яка виходить за дозволений виняток, потребує належної нової підстави; повідомлення саме по собі її не створює.`,
              law.text`Роботодавець інформує іноземця про дії у провадженні щодо дозволу за ${law.article("17", "art. 17 ust. 1 pkt 6")}. Якщо встановлено порушення зазначених у законі обов'язків, ${law.article("17", "art. 17 ust. 4")} і ${law.article("68", "art. 68 ust. 2")} вимагають невідкладно їх виконати. Усунення порушення не означає, що попереднього невиконання не було.`,
              documents.text`${documents.document("payroll-statement", "Розрахунок зарплати")} показує нарахування, відрахування й суму до виплати. ${documents.document("bank-statement", "Банківська виписка з виконаним переказом")} показує рух коштів. Сума в розрахунку не доводить, що її вже сплачено. ${documents.document("zus-rca", "ZUS RCA")} показує заявлені бази та внески за відповідний звітний період, а не факт перерахування зарплати на особистий рахунок. Звітний місяць і місяць, за який нарахована зарплата, можуть не збігатися.`,
              documents.text`Якщо питання стосується поточного медичного страхування конкретної людини, потрібні відомості про її ${documents.document("zus-health-registration", "актуальне zgłoszenie до страхування")}. ${documents.document("zus-no-arrears", "Zaświadczenie o niezaleganiu w opłacaniu składek")} відповідає на інше питання, про заборгованість платника. Воно не замінює персонального підтвердження страхування або доказу виплати зарплати. Ці документи обирають за фактом, який треба пояснити, а не додають усі до кожного повідомлення.`,
              law.text`Органам контролю надають запитані документи відповідно до закону. Невиплачена винагорода за вже виконану роботу залишається боргом: ${law.article("17", "art. 17 ust. 5")} і ${law.article("68", "art. 68 ust. 3")} прямо передбачають виплату заборгованості. Завершення роботи або повідомлення про нього не погашає цей борг. Відповідальність за порушення оцінюють за конкретним складом ${law.article("84")}, а не за самим фактом, що в папці бракує довільного документа.`,
            ],
          },
          {
            id: "completed-events",
            title: "Одна дата завершення, два різні повідомлення",
            paragraphs: [
              "У кадровому записі треба поєднати подію, її дату, правову підставу роботи й фактичне подання. Тоді видно, чому однакова дата звільнення двох працівників привела до різних дій.",
            ],
            example: {
              title: "Завершення роботи 15 серпня 2026 року",
              facts: [
                "Умовна польська компанія A найняла двох громадян Молдови на umowy o pracę. Обидва мали чинні національні візи для праці, що охоплювали весь розглянутий період, і не мали незалежного звільнення від дозволу. Заяву про дозвіл для A подано в лютому 2026 року. У червні 2026 року, до 29 червня, для працівника A видано звичайний дозвіл wojewody, а для працівника B зареєстровано oświadczenie. Обидва документи передбачали роботу з 1 липня до 31 грудня 2026 року.",
                "29 червня працівники перед підписанням польських трудових договорів отримали письмовий зміст зрозумілою їм румунською мовою та письмову інформацію про право вступати до профспілок. Підписані договори відповідали дозволеним умовам. Того самого дня польські копії передано через PGP-UZC: для A до органу, який видав дозвіл, для B до starosty, який зареєстрував oświadczenie.",
                "Обидва почали роботу 1 липня. Початок роботи B повідомлено 3 липня. Трудові відносини з обома припинилися 15 серпня; роботодавець подав відповідні повідомлення 17 серпня. Нижче показано завершені події, перевірені станом на 12 вересня 2026 року.",
              ],
              sample: {
                kind: "table",
                title: "Фрагмент польського робочого реєстру подій",
                note: "Вигаданий заповнений запис для пояснення. Це не форма органу. Ідентифікатори працівників, справ, адреси та номери квитанцій опущено.",
                columns: [
                  "Zdarzenie",
                  "Pracownik A: zezwolenie na pracę",
                  "Pracownik B: oświadczenie",
                ],
                rows: [
                  {
                    id: "contract-copy",
                    cells: [
                      "29.06.2026: podpisanie umowy i przekazanie kopii",
                      "PGP-UZC do wojewody, który wydał zezwolenie. Zachowano polską umowę, tekst rumuński oraz potwierdzenie przekazania.",
                      "PGP-UZC do starosty, który dokonał wpisu. Zachowano polską umowę, tekst rumuński oraz potwierdzenie przekazania.",
                    ],
                  },
                  {
                    id: "actual-start",
                    cells: [
                      "01.07.2026: faktyczny początek pracy",
                      law.text`Brak osobnego zgłoszenia rozpoczęcia na podstawie ${law.article("19")}. Zachowano ewidencję rzeczywistej pracy.`,
                      "03.07.2026: wysłano Powiadomienie o podjęciu pracy przez cudzoziemca (PSZ-PPPC). Zachowano treść i potwierdzenie złożenia.",
                    ],
                  },
                  {
                    id: "end-record",
                    cells: [
                      "15.08.2026: zakończenie pracy",
                      "Koniec pracy ponad dwa miesiące przed 31.12.2026, datą końca ważności zezwolenia.",
                      "Koniec pracy przed 31.12.2026, datą zakończenia wpisaną do ewidencji oświadczeń.",
                    ],
                  },
                  {
                    id: "end-notification",
                    cells: [
                      "17.08.2026: złożone powiadomienia",
                      "Powiadomienie o zakończeniu pracy przez cudzoziemca (ZC-PZPC). Adresat: wojewoda, który wydał zezwolenie. Wskazana data zakończenia: 15.08.2026.",
                      "Powiadomienie, że cudzoziemiec zakończył pracę lub nie podejmie pracy (PSZ-PZPC). Adresat: starosta, który dokonał wpisu. Wskazana data zakończenia: 15.08.2026.",
                    ],
                  },
                  {
                    id: "recorded-result",
                    cells: [
                      "Stan dokumentacji na 12.09.2026",
                      "Zachowano złożone ZC-PZPC i osobne potwierdzenie złożenia z 17.08.2026. Zgłoszenie nastąpiło w ciągu siedmiu dni od zakończenia pracy.",
                      law.text`Zachowano złożone PSZ-PZPC i osobne potwierdzenie złożenia z 17.08.2026. Powiadomienie powoduje unieważnienie wpisu z mocy prawa zgodnie z ${law.article("70", "art. 70 ust. 5")}.`,
                    ],
                  },
                ],
              },
              reasoning: [
                "Подія в обох працівників однакова, але її значення різне. Для A перевірено відстань від фактичного завершення до кінця дозволу. Для B важливе раннє завершення щодо зареєстрованого періоду, без умови двох місяців. Тому роботодавець подав два різні повідомлення двом відповідним органам.",
                law.text`Щодо B не використано PSZ-PNPC: людина справді працювала, а не затрималася з початком. Повідомлення PSZ-PZPC має наслідок, прямо встановлений ${law.article("70", "art. 70 ust. 5")}. Для A раннє завершення становить підставу скасування за ${law.article("22", "art. 22 ust. 1 pkt 6")}; виняток для непочатку або перерви тут не застосовується. Водночас сама квитанція ZC-PZPC не є рішенням про uchylenie zezwolenia і не доводить, що орган уже ухвалив таке рішення.`,
                documents.text`У справі збережено кожне подане повідомлення та його ${documents.document("dispatch-proof", "підтвердження подання")}. Окремо залишилися договори, мовні тексти, інформація про профспілки та докази фактичної роботи. Зарплатні розрахунки й виплати оцінюють за власними документами; повідомлення про завершення нічого не говорить про відсутність боргу.`,
              ],
              conclusion:
                "Роботодавець зафіксував фактичний початок і завершення та виконав належні повідомлення. Запис oświadczenia B втратив чинність унаслідок повідомлення про завершення. Для A підтверджено своєчасне подання, без приписування органу неотриманого рішення. Жодне з цих повідомлень не встановлює подальшого права перебування або роботи в іншого роботодавця.",
            },
          },
        ],
      }),
    },
  })

export default employerDutiesTopic

export const employerDutiesMapNode: LegalNode = {
  id: "employer-duties",
  title: employerDutiesTopic.body.title,
  polish: employerDutiesTopic.body.polish,
  summary: employerDutiesTopic.summary,
  documents: [...(employerDutiesTopic.body.documents ?? [])],
  sources: [...employerDutiesTopic.body.sources],
}
