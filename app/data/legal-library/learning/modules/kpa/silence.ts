import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")
const documents = createEvidenceDocumentTextAuthor()
const kpaUrl = "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf"
const packagedGoodsUrl =
  "https://eli.gov.pl/api/acts/DU/2022/2255/text/U/D20222255Lj.pdf"
const enablingAmendmentUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1168/text/O/D20251168.pdf"

const moduleContent: KpaGuideModule = {
  id: "silence",
  order: 10,
  title: "Мовчазне вирішення",
  polish: "Milczące załatwienie sprawy",
  legalState: "23.09.2026",
  articles: kpaLaw.text`${kpaLaw.articleRange("122a", "122h", { start: "Art. 122a", end: "122h KPA" })} та спеціальна норма, яка допускає мовчазне вирішення`,
  outcome:
    "Milczące załatwienie sprawy є способом вирішення, який закон пов'язує з відсутністю визначеної дії органу в належний строк. Він працює лише для спеціально передбачених справ. Тривале очікування рішення про перебування саме по собі не надає дозволу. Дата мовчазного результату, запис у матеріалах і пізніше видана довідка є різними подіями.",
  layers: {
    beginner: {
      focus: "Відсутність листа й мовчазне вирішення не є одним фактом.",
      law: kpaLaw.text`${kpaLaw.article("122a", "Art. 122a § 1")} вимагає спеціальної норми для цього способу вирішення. Загальний строк роботи органу такої норми не замінює.`,
      practice:
        "Правове значення має визначена законом відсутність дії органу, а не лише порожня поштова скринька заявника.",
      pitfall:
        "Мовчання у звичайній справі про дозвіл не можна назвати згодою за аналогією з іншою процедурою.",
    },
    practical: {
      focus:
        "Строк залежить від спеціальної норми та подій у конкретній справі.",
      law: kpaLaw.text`${kpaLaw.article("122b")} визначає юридично значущу дію органу, ${kpaLaw.article("122c")} початок і момент наслідку, а ${kpaLaw.article("122d", "art. 122d § 2")} вплив зупинення провадження.`,
      practice:
        "Доказ належного подання, відомості про дії органу та наступна довідка пояснюють різні частини хронології.",
      pitfall:
        "Дата, коли сторона одержала відмовний лист, не завжди є датою, яка вирішує, чи орган діяв вчасно.",
    },
    advanced: {
      focus:
        "Підтвердження мовчазного результату і його перегляд мають власні правила.",
      law: kpaLaw.text`${kpaLaw.article("122f")} регулює довідку та zażalenie на відповідне postanowienie; ${kpaLaw.article("122g")} передбачає відповідне застосування названих механізмів перегляду.`,
      practice:
        "Дата видачі довідки не замінює дату мовчазного вирішення, яку ця довідка підтверджує.",
      pitfall:
        "Відсутність звичайної позитивної decyzji не робить результат недоторканним і не створює універсального odwołania від мовчання.",
    },
  },
  method: [],
  checklist: [],
  questions: [],
  lesson: {
    paragraphs: [],
    sections: [
      {
        id: "special-provision-and-two-forms",
        title: "Спеціальна норма надає мовчанню правове значення",
        paragraphs: [
          kpaLaw.text`Milczące załatwienie sprawy означає вирішення справи без звичайного позитивного рішення внаслідок умов, визначених законом. За ${kpaLaw.article("122a", "art. 122a § 1 KPA")} такий спосіб можливий лише тоді, коли його допускає спеціальний припис. Саме він визначає вид справи, для якого мовчання може мати наслідок. Сплив строку з ${kpaLaw.article("35", "art. 35")} не створює цього дозволу.`,
          kpaLaw.text`${kpaLaw.article("122a", "Art. 122a § 2")} розрізняє два механізми. Milczące zakończenie postępowania виникає за визначених умов, коли орган не видає decyzji або postanowienia, що завершує провадження. Milcząca zgoda стосується відсутності sprzeciwu, заперечення органу у формі decyzji. Обидва механізми пов'язані з повним урахуванням вимоги сторони, але дія, яка могла б запобігти такому результату, є різною.`,
          "Слово sprzeciw тут позначає акт органу проти заявленої вимоги. Воно не означає скаргу сторони на рішення іншого органу. Так само повідомлення про стан розгляду не стає запереченням лише тому, що його надіслав орган.",
          "Bezczynność є іншою ситуацією: справа не вирішена у належний строк, а закон не надав цій бездіяльності наслідку мовчазного вирішення. Для захисту від затримки враховують правила конкретної процедури. Очікування decyzji pobytowej саме по собі не надає дозволу й не замінює правової підстави перебування.",
        ],
      },
      {
        id: "period-and-organ-action",
        title: "Неодержаний лист ще не доводить бездіяльності органу",
        paragraphs: [
          kpaLaw.text`За загальним правилом ${kpaLaw.article("122a", "art. 122a § 2")} ідеться про місяць від вручення вимоги сторони компетентному органу, якщо спеціальна норма не встановила іншого строку. Тому дата підписання заяви не є достатнім початком розрахунку. Окремо мають бути встановлені належне подання, компетентний орган та застосовний строк.`,
          documents.text`${kpaLaw.article("122b")} спеціально визначає день видання відповідної decyzji чи postanowienia або внесення sprzeciwu. Для поштового способу це передбачене нормою відправлення за підтвердженням через operatora pocztowego. Для вручення працівниками органу чи іншими уповноваженими особами це вручення під розписку. Для випадку з ${kpaLaw.article("39-1", "art. 39¹")} це введення акта до інформаційної системи. ${documents.document("dispatch-proof", "Доказ відправлення")} та ${documents.document("delivery-proof", "доказ вручення")} тому можуть фіксувати різні дні.`,
          kpaLaw.text`Якщо належне відправлення акта відбулося в останній день і відповідає ${kpaLaw.article("122b")}, пізніше отримання адресатом саме не створює мовчазного результату. Зворотне також важливо: внутрішня дата підписання не замінює жодної названої нормою події. Потрібен запис про реальну дію з конкретним актом.`,
          kpaLaw.text`Поштове правило для дії органу в ${kpaLaw.article("122b", "art. 122b pkt 1")} називає operatora pocztowego. Його не слід переписувати за вужчим правилом ${kpaLaw.article("57", "art. 57 § 5 pkt 2")} про збереження строку подання стороною. Це різні адресовані різним учасникам приписи.`,
        ],
      },
      {
        id: "result-and-changed-period",
        title: "Коли виникає результат і що змінює перебіг строку",
        paragraphs: [
          kpaLaw.text`${kpaLaw.article("122c", "Art. 122c § 1")} пов'язує мовчазне вирішення з днем після спливу строку для відповідного акта органу. Останній день, коли орган ще може діяти, і перший день мовчазного результату не збігаються. Ця ж норма передбачає окремий випадок: якщо орган до спливу строку повідомив сторону про відсутність заперечення, наслідок виникає в день вручення такого повідомлення. Це попереднє повідомлення, а не довідка про вже здійснене мовчазне вирішення.`,
          kpaLaw.text`Якщо подання не відповідає встановленим вимогам або потрібно уточнити зміст самої вимоги, ${kpaLaw.article("122c", "art. 122c § 2")} відсилає до ${kpaLaw.article("64")}. Період для мовчазного вирішення тоді йде від усунення недоліків або уточнення. Це не просте додавання залишку попереднього часу після паузи. Водночас сама назва листа wezwanie ще не доводить, що йдеться саме про ці недоліки чи необхідне уточнення.`,
          kpaLaw.text`Інший механізм діє при zawieszeniu postępowania, зупиненні провадження. За ${kpaLaw.article("122d", "art. 122d § 2")} воно зупиняє перебіг цього строку. Звичайне повідомлення, що працівник зайнятий або документ ще готують, не є автоматично таким зупиненням.`,
          kpaLaw.text`Після скасування рішення з переданням справи на новий розгляд за ${kpaLaw.article("138", "art. 138 § 2")} застосовується ще одна початкова подія. ${kpaLaw.article("122c", "Art. 122c § 3")} рахує строк від вручення органу першої інстанції матеріалів справи разом із цим рішенням. Дата, коли сторона одержала копію рішення за оскарженням, не замінює повернення матеріалів органові.`,
        ],
      },
      {
        id: "annotation-and-certificate",
        title: "Як орган фіксує і підтверджує мовчазне вирішення",
        paragraphs: [
          kpaLaw.text`За ${kpaLaw.article("122e")} орган уміщує в матеріалах adnotację про мовчазне вирішення, зазначаючи зміст результату та його правову підставу. Це службовий запис у справі. Приватна таблиця заявника може пояснити його розрахунок, але не стає цією adnotacją.`,
          documents.text`На прохання сторони ${kpaLaw.article("122f", "art. 122f § 1–2")} передбачає видачу zaświadczenia o milczącym załatwieniu sprawy або відмову в ньому у формі ${documents.document("procedural-order", "postanowienia")}. На це postanowienie належить ${documents.document("procedural-complaint", "zażalenie")}. Довідка підтверджує, яку справу і коли вирішено мовчазно. Саме її пізніше замовлення не пересуває вже встановленої дати результату.`,
          kpaLaw.text`${kpaLaw.article("122f", "Art. 122f § 3")} вимагає вказати орган і сторону або сторони, дату видачі, правову підставу, зміст вирішення, окрему дату мовчазного вирішення, pouczenie про zażalenie та належний підпис уповноваженого працівника. Дві дати потрібні тому, що довідку можуть видати вже після настання підтверджуваного наслідку. Назва «zaświadczenie» без змісту не встановлює, що саме воно підтверджує.`,
          kpaLaw.text`Довідку вручають усім сторонам справи за ${kpaLaw.article("122f", "art. 122f § 4")}. У неврегульованій частині ${kpaLaw.article("122f", "§ 5 цієї статті")} відсилає до Działu VII KPA. Зокрема, ${kpaLaw.article("217", "art. 217 § 3")} передбачає видачу без зайвої затримки, не пізніше семи днів. Цей строк стосується довідки, а не нового семиденного очікування для виникнення самого мовчазного результату.`,
          "Цей документ не є довідкою про подання заяви на перебування, доказом відправлення заяви або звичайною інформацією про відкриту справу. Однакове слово zaświadczenie не робить їх взаємозамінними.",
        ],
      },
      {
        id: "actual-enabling-rule-and-control",
        title: "Реальна спеціальна підстава та межі результату",
        paragraphs: [
          kpaLaw.text`Приклад нижче використовує ${kpaLaw.external("art. 26 ust. 7 ustawy o towarach paczkowanych", packagedGoodsUrl)}. Він стосується внесення до реєстру знака, який ідентифікує виробника butelek miarowych, мірних пляшок. Реєстр веде Prezes Głównego Urzędu Miar, керівник GUM. Норма встановлює 14 днів від отримання zgłoszenia, повідомлення виробника, та називає відсутність повідомлення, передбаченого ${kpaLaw.external("art. 26 ust. 3", packagedGoodsUrl)}, або decyzji, зазначеної в ${kpaLaw.article("122a", "art. 122a § 2 pkt 1 KPA")}. Це конкретна підстава milczącego zakończenia, а не загальне правило про будь-яку реєстрацію.`,
          kpaLaw.text`Цю норму додано ${kpaLaw.external("art. 3 ustawy z 25 lipca 2025 r., Dz.U. poz. 1168", enablingAmendmentUrl)}. Вона діє від 26 лютого 2026 року; для раніше розпочатих і незавершених реєстраційних проваджень ${kpaLaw.external("art. 9 цієї зміни", enablingAmendmentUrl)} зберіг попередні правила. У прикладі обрано нову справу вересня 2026 року, тож старий режим на неї не переноситься.`,
          kpaLaw.text`Мовчазний результат не виключає подальшого контролю. ${kpaLaw.article("122g")} передбачає відповідне застосування розділів 12 і 13 Działu II, зокрема правил про wznowienie postępowania, відновлення провадження, та stwierdzenie nieważności, встановлення недійсності. Для такого застосування норма також приймає, що наслідок видання остаточної decyzji виник у межах чотирнадцяти днів від спливу строку, на який посилається ${kpaLaw.article("122c", "art. 122c § 1")}. Це окрема правова конструкція; вона не замінює дату мовчазного вирішення датою видачі довідки.`,
          kpaLaw.text`За ${kpaLaw.article("122d", "art. 122d § 1")} у цьому режимі не застосовують ${kpaLaw.article("10")} та ${kpaLaw.article("79a")}. З цього не випливає, що можна ігнорувати всіх інших учасників або не вручати їм довідку. Окремо ${kpaLaw.article("122h")} вимагає публічно надати визначені відомості про обробку персональних даних і зберігає обов'язок передати їх при першій дії, зверненій до сторони.`,
          "Межа позитивного результату визначається конкретною вимогою. Внесення ідентифікаційного знака не підтверджує виконання всіх правил виробництва. Так само сам механізм цього реєстру нічого не вирішує щодо перебування або роботи іноземця.",
        ],
      },
    ],
    articles: [
      {
        reference: kpaLaw.text`${kpaLaw.article("122a", "Art. 122a")}`,
        role: "Спеціальна підстава, дві форми мовчазного вирішення та застосовний строк.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.articleRange("122b", "122d", { start: "Art. 122b", end: "122d" })}`,
        role: "Дія органу, момент наслідку, уточнення, новий розгляд і зупинення провадження.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.articleRange("122e", "122f", { start: "Art. 122e", end: "122f" })}`,
        role: "Службова adnotacja, запитана довідка, її зміст і оскарження відповідного postanowienia.",
      },
      {
        reference: kpaLaw.text`${kpaLaw.articleRange("122g", "122h", { start: "Art. 122g", end: "122h" })}`,
        role: "Відповідне застосування механізмів перегляду та спеціальне інформування про персональні дані.",
      },
    ],
    terms: [
      {
        term: "milczące zakończenie postępowania",
        meaning:
          "Мовчазне завершення за відсутності у належний строк рішення або постанови, що завершує провадження, якщо спеціальна норма допускає цей механізм.",
      },
      {
        term: "milcząca zgoda",
        meaning:
          "Мовчазна згода за відсутності своєчасного sprzeciwu органу у формі рішення в процедурі, де закон передбачає такий наслідок.",
      },
      {
        term: "adnotacja o milczącym załatwieniu sprawy",
        meaning:
          "Запис органу в матеріалах, який указує зміст мовчазного вирішення і його правову підставу.",
      },
      {
        term: "zaświadczenie o milczącym załatwieniu sprawy",
        meaning:
          "Довідка, яку на прохання сторони видають у спеціальному порядку, щоб підтвердити зміст і дату мовчазного вирішення.",
      },
    ],
    caseExample: {
      title: "Довідка від 22 вересня підтверджує результат від 16 вересня",
      facts:
        "Умовний виробник мірних пляшок є єдиною стороною нової справи про реєстрацію його ідентифікаційного знака. Повне й однозначне zgłoszenie, що відповідає вимогам закону, надійшло компетентному Prezesowi GUM 1 вересня 2026 року. Не було недоліків, уточнення, зупинення або повернення справи з оскарження. Упродовж наступних 14 днів орган не здійснив ані повідомлення про недоліки, передбаченого спеціальною нормою, ані дії з актом, що завершує провадження. Це встановлені факти вигаданих матеріалів, а не висновок лише з того, що заявник не одержав листа.",
      sample: {
        kind: "table",
        title: "Завершене зіставлення подання, наслідку й довідки",
        note: "Вигаданий робочий запис польською. Не є формою GUM, реальним реєстровим записом або повною довідкою. Зображення знака, реквізити виробника й підписи не відтворено.",
        columns: ["Документ або подія", "Дата й зміст", "Значення"],
        rows: [
          {
            id: "complete-notification",
            cells: [
              "Zgłoszenie i potwierdzenie jego otrzymania",
              "01.09.2026: Prezes GUM otrzymał kompletne zgłoszenie znaku identyfikacyjnego producenta.",
              "Ustalono właściwy organ oraz zdarzenie rozpoczynające obliczenie szczególnego terminu.",
            ],
          },
          {
            id: "period-end",
            cells: [
              "Przebieg sprawy do końca 15.09.2026",
              kpaLaw.text`Nie dokonano zawiadomienia z ${kpaLaw.external("art. 26 ust. 3", packagedGoodsUrl)} ani czynności z aktem kończącym postępowanie w rozumieniu ${kpaLaw.article("122b", "art. 122b KPA")}. Nie było zawieszenia.`,
              "Pierwszy liczony dzień to 02.09; czternasty to 15.09, wtorek. Brak listu u strony nie był jedyną podstawą ustalenia.",
            ],
          },
          {
            id: "silent-result",
            cells: [
              "Milczące załatwienie i adnotacja w aktach",
              "16.09.2026: sprawa wpisu znaku została załatwiona milcząco, z uwzględnieniem żądania w całości. Organ odnotował treść rozstrzygnięcia i podstawę prawną.",
              "Skutek nastąpił następnego dnia po upływie terminu. Adnotacja jest zapisem organu, nie notatką producenta.",
            ],
          },
          {
            id: "certificate-request",
            cells: [
              "Wniosek o zaświadczenie",
              kpaLaw.text`17.09.2026: strona zwróciła się o zaświadczenie na podstawie ${kpaLaw.article("122f", "art. 122f KPA")}.`,
              "Wniosek dotyczył potwierdzenia już załatwionej sprawy, nie nowego rozstrzygnięcia o wpisie.",
            ],
          },
          {
            id: "issued-certificate",
            cells: [
              "Zaświadczenie wydane w drodze postanowienia",
              "22.09.2026: wydano i doręczono jedynej stronie zaświadczenie. Data wydania: 22.09.2026. Data milczącego załatwienia: 16.09.2026.",
              "Dokument potwierdza wskazany rezultat. Nie przenosi daty załatwienia na dzień swojego wydania i nie potwierdza wszystkich obowiązków producenta.",
            ],
          },
        ],
      },
      analysis: documents.text`Спеціальна підстава міститься в ${kpaLaw.external("art. 26 ust. 7 ustawy o towarach paczkowanych", packagedGoodsUrl)}, а не у тривалості очікування. ${documents.document("dispatch-proof", "Підтвердження належного подання")} пов'язує повне zgłoszenie з отриманням 1 вересня. За ${kpaLaw.article("57", "art. 57 § 1 і § 4 KPA")} 14 днів закінчуються 15 вересня без перенесення. Відсутність відповідних дій органу встановлено з урахуванням ${kpaLaw.article("122b")}. Тому ${kpaLaw.article("122c", "art. 122c § 1")} пов'язує наслідок із 16 вересня. ${kpaLaw.article("122e")} пояснює запис у матеріалах, а ${kpaLaw.article("122f")} пізнішу довідку з двома різними датами.`,
      lesson:
        "Станом на 22 вересня виробник має довідку, яка підтверджує мовчазне вирішення конкретної реєстраційної справи 16 вересня. Результат уже настав за спеціальною нормою; довідка його засвідчила. Приклад не встановлює права почати будь-яку виробничу діяльність і не надає дозволу на перебування.",
    },
    findInText: [],
  },
}

export const kpaSilenceLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:silence",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "silence",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: kpaLaw.text`Механізм мовчазного вирішення за ${kpaLaw.articleRange("122a", "122h", { start: "art. 122a", end: "122h" })} та допоміжними правилами обчислення й довідок перевірено за ${kpaLaw.external("офіційним текстом KPA", kpaUrl)} станом на 23.09.2026. Це не підтвердження мовчазного порядку для кожної справи про перебування.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 57 § 1 i § 4; 122a–122h; 217 § 3",
          },
        ],
      },
      {
        id: "actual-enabling-provision",
        kind: "statute-text",
        text: kpaLaw.text`Приклад реєстрації знака спирається на ${kpaLaw.external("art. 26 ust. 7 ustawy o towarach paczkowanych", packagedGoodsUrl)}, чинний від 26.02.2026 за ${kpaLaw.external("Dz.U. 2025 poz. 1168", enablingAmendmentUrl)}. Перевірено саме цю підставу й перехідну межу; ширший порядок виробництва не є предметом пояснення.`,
        basis: [
          {
            reference: { kind: "external", url: packagedGoodsUrl },
            locator: "Art. 24–26; art. 28 as the limit of the result",
          },
          {
            reference: { kind: "external", url: enablingAmendmentUrl },
            locator: "Art. 3, 9 i 11",
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

export default kpaSilenceLearningModuleTopic
