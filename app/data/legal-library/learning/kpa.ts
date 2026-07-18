import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"
import { defineLegalLearningCurriculum } from "./types"

import {
  createLegalTextAuthor,
  defineLegalTextContent,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"

import { kpaSystemLearningModuleTopic } from "./modules/kpa/system"
import { kpaAnatomyLearningModuleTopic } from "./modules/kpa/anatomy"
import { kpaPrinciplesLearningModuleTopic } from "./modules/kpa/principles"
import { kpaAuthorityLearningModuleTopic } from "./modules/kpa/authority"
import { kpaPartyLearningModuleTopic } from "./modules/kpa/party"
import { kpaInitiationLearningModuleTopic } from "./modules/kpa/initiation"
import { kpaFilesEvidenceLearningModuleTopic } from "./modules/kpa/files-evidence"
import { kpaTimeServiceLearningModuleTopic } from "./modules/kpa/time-service"
import { kpaSummonsLearningModuleTopic } from "./modules/kpa/summons"
import { kpaSilenceLearningModuleTopic } from "./modules/kpa/silence"
import { kpaDecisionsLearningModuleTopic } from "./modules/kpa/decisions"
import { kpaAppealLearningModuleTopic } from "./modules/kpa/appeal"
import { kpaDelayLearningModuleTopic } from "./modules/kpa/delay"
import { kpaExtraordinaryLearningModuleTopic } from "./modules/kpa/extraordinary"
import { kpaCourtLearningModuleTopic } from "./modules/kpa/court"
const kpaCorpusProvisions =
  legalLibraryRegistry.kpa.editions[legalLibraryRegistry.kpa.currentEditionId]
    .provisions

const kpaLaw = createLegalTextAuthor("kpa")

export type KpaGuideLevel = "beginner" | "practical" | "advanced"

export type KpaGuideLayer = {
  focus: LegalTextValue
  law: LegalTextValue
  practice: LegalTextValue
  pitfall: LegalTextValue
}

export type KpaGuideQuestion = {
  prompt: LegalTextValue
  answer: LegalTextValue
}

export type KpaGuideModule = {
  id: string
  order: number
  title: string
  polish: string
  articles: LegalTextValue
  outcome: LegalTextValue
  layers: Record<KpaGuideLevel, KpaGuideLayer>
  method: LegalTextValue[]
  checklist: LegalTextValue[]
  questions: KpaGuideQuestion[]
  lesson: KpaGuideLesson
}

export type KpaGuideSource = {
  label: string
  url: string
  note: string
}

export type KpaGuideLesson = {
  paragraphs: LegalTextValue[]
  articles: Array<{
    reference: LegalTextValue
    role: LegalTextValue
  }>
  terms: Array<{
    term: string
    meaning: LegalTextValue
  }>
  caseExample: {
    title: LegalTextValue
    facts: LegalTextValue
    analysis: LegalTextValue
    lesson: LegalTextValue
  }
  findInText: LegalTextValue[]
}

export const kpaGuideLevels: Array<{
  id: KpaGuideLevel
  label: string
  description: string
}> = [
  {
    id: "beginner",
    label: "Початківець",
    description: "Що означає інститут і де він знаходиться в процесі.",
  },
  {
    id: "practical",
    label: "Практика",
    description:
      "Що перевірити в реальній справі та які сліди залишити в актах.",
  },
  {
    id: "advanced",
    label: "Поглиблено",
    description: "Межі норми, винятки та зв’язки з іншими інститутами.",
  },
]

export const kpaGuideModules = defineLegalTextContent(
  [
    kpaSystemLearningModuleTopic.body,
    kpaAnatomyLearningModuleTopic.body,
    kpaPrinciplesLearningModuleTopic.body,
    kpaAuthorityLearningModuleTopic.body,
    kpaPartyLearningModuleTopic.body,
    kpaInitiationLearningModuleTopic.body,
    kpaFilesEvidenceLearningModuleTopic.body,
    kpaTimeServiceLearningModuleTopic.body,
    kpaSummonsLearningModuleTopic.body,
    kpaSilenceLearningModuleTopic.body,
    kpaDecisionsLearningModuleTopic.body,
    kpaAppealLearningModuleTopic.body,
    kpaDelayLearningModuleTopic.body,
    kpaExtraordinaryLearningModuleTopic.body,
    kpaCourtLearningModuleTopic.body,
  ],
  "kpaGuideModules"
) satisfies KpaGuideModule[]

export const foreignersCaseAlgorithm = [
  {
    title: "1. Заморозьте факти й дати",
    detail:
      "Хто заявник, громадянство, підстава перебування, дата подання, місце проживання, робота, зміни після подання, усі doręczenia.",
    output: "Хронологія + реєстр вручень",
  },
  {
    title: "2. Назвіть предмет і lex specialis",
    detail:
      "Який дозвіл/статус проситься, яка фактична головна ціль, які позитивні й негативні умови встановлює ustawa o cudzoziemcach.",
    output: "Матриця матеріальних умов",
  },
  {
    title: "3. Перевірте процесуальну рамку",
    detail:
      "Właściwy organ, strony, pełnomocnik, спосіб wszczęcia, спеціальні відступи від KPA, редакція закону й przepisy przejściowe.",
    output: "Карта процедури",
  },
  {
    title: "4. Побудуйте доказову матрицю",
    detail:
      "До кожної przesłanki додайте факт, доказ, період, джерело, суперечність і те, чого бракує. Окремо відмітьте, що organ може отримати сам.",
    output: "Przesłanka → dowód → ryzyko",
  },
  {
    title: "5. Розберіть wezwanie",
    detail:
      "Класифікуйте кожен пункт: formalny, dowodowy, osobisty, informacyjny. Перевірте підставу, строк, спосіб і наслідок.",
    output: "Таблиця відповіді пункт у пункт",
  },
  {
    title: "6. Контролюйте акти і строки",
    detail: kpaLaw.text`Зберігайте UPO/awizo, просіть доступ до akt, звіряйте ${kpaLaw.article("10", "art. 10")} і 79a, ведіть календар organu та календар strony окремо.`,
    output: "Журнал процесуальних подій",
  },
  {
    title: "7. Прочитайте результат як норму",
    detail:
      "Sentencja → факти → докази → норма → subsumpcja → pouczenie. Для кожної помилки покажіть її вплив на wynik.",
    output: "Карта decyzji й план захисту",
  },
]

export const annotatedWezwanie = {
  sample:
    "Na podstawie art. 50 § 1 KPA wzywa się Stronę do przedłożenia, w terminie 14 dni od dnia doręczenia niniejszego pisma, dokumentów potwierdzających aktualne źródło stabilnego i regularnego dochodu, pod rygorem rozstrzygnięcia sprawy na podstawie zgromadzonego materiału dowodowego.",
  parts: [
    {
      label: "Podstawa",
      text: kpaLaw.text`${kpaLaw.article("50", "art. 50 § 1")} KPA`,
      question:
        "Чи ця норма пояснює право викликати, а матеріальна вимога має окрему підставу в lex specialis?",
    },
    {
      label: "Adresat",
      text: "Strona",
      question: kpaLaw.text`Чи wezwanie вручено стороні/pełnomocnikowi відповідно до ${kpaLaw.article("40", "art. 40")}?`,
    },
    {
      label: "Czynność",
      text: "przedłożenie dokumentów",
      question: "Який конкретний факт має довести кожен документ?",
    },
    {
      label: "Termin",
      text: "14 dni od dnia doręczenia",
      question: kpaLaw.text`Яка юридична дата doręczenia і коли спливає строк за ${kpaLaw.article("57", "art. 57")}?`,
    },
    {
      label: "Zakres",
      text: "aktualne źródło stabilnego i regularnego dochodu",
      question:
        "Який період, критерій і матеріальна норма стоять за словами «aktualne», «stabilne», «regularne»?",
    },
    {
      label: "Skutek",
      text: "rozstrzygnięcie na podstawie zgromadzonego materiału",
      question:
        "Це не те саме, що automatyczne pozostawienie bez rozpoznania. Якого доказу бракуватиме при оцінці по суті?",
    },
  ],
}

export const kpaGuideSources: KpaGuideSource[] = [
  {
    label: "Kodeks postępowania administracyjnego — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Офіційний tekst jednolity: Dz.U. 2025 poz. 1691; сторінка ELI позначає акт як obowiązujący.",
  },
  {
    label: "Офіційний PDF KPA",
    url: "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf",
    note: "Текст статей, на яких побудовано модулі гайда.",
  },
  {
    label: "Prawo o postępowaniu przed sądami administracyjnymi — ELI",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
    note: "Tekst jednolity Dz.U. 2026 poz. 143; для орієнтації щодо WSA. Зміна Dz.U. 2026 poz. 846 набирає чинності 01.10.2026, тобто після дати стану цього гайда.",
  },
  {
    label: "Ponaglenie — Moduł Obsługi Spraw UdSC",
    url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/procedury/ponaglenie/",
    note: "Офіційне практичне пояснення застосування ponaglenia у справах cudzoziemców; не замінює тексту KPA.",
  },
]

export const kpaGuideLegalState = "18.07.2026"

export const KPA_ELI_URL = "https://eli.gov.pl/eli/DU/2025/1691/ogl"
export const KPA_PDF_URL =
  "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf"

export type KpaArticleStatus = "active" | "repealed"

export type KpaArticleEntry = {
  article: string
  shortTitle: string
  division: string
  chapter: string
  keywords: string[]
  status: KpaArticleStatus
  pdfPage: number
  searchToken: string
  paragraphCount: number | null
  previousArticle: string | null
  nextArticle: string | null
  sectionFocus: string
  sectionPractice: string
  editorialStatus: "official-locator"
}

export type KpaArticleSection = {
  id: string
  division: string
  chapter: string
  start: string
  end: string
  learnerFocus: string
  practicalUse: string
  keywords: string[]
}

export const kpaArticleSections: KpaArticleSection[] = [
  {
    id: "i-1",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 1 — Zakres obowiązywania",
    start: "1",
    end: "5",
    learnerFocus:
      "Коли застосовується KPA, які справи охоплює кодекс і де шукати винятки та визначення.",
    practicalUse:
      "Спочатку відділіть матеріальні умови дозволу з ustawy szczególnej від процесуальних правил KPA.",
    keywords: ["zakres", "wyłączenia", "definicje", "RODO"],
  },
  {
    id: "i-2",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 2 — Zasady ogólne",
    start: "6",
    end: "16",
    learnerFocus:
      "Загальні стандарти законності, довіри, інформування, участі сторони, швидкості та інстанційності.",
    practicalUse:
      "Поєднуйте засаду з конкретною дією органу і показуйте, як порушення вплинуло на факти або результат.",
    keywords: ["zasady", "zaufanie", "informowanie", "czynny udział"],
  },
  {
    id: "i-3",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 3 — Organy wyższego stopnia i organy naczelne",
    start: "17",
    end: "18",
    learnerFocus: "Який орган контролює рішення і хто є органом вищого рівня.",
    practicalUse:
      "Перед odwołaniem перевірте lex specialis: саме він може змінити загальну систему органів.",
    keywords: ["organ wyższego stopnia", "organ naczelny"],
  },
  {
    id: "i-4",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 4 — Właściwość organów",
    start: "19",
    end: "23",
    learnerFocus:
      "Компетенція rzeczowa і miejscowa та вирішення спорів між органами.",
    practicalUse:
      "Зафіксуйте норму компетенції, факт територіального зв’язку і доказ цього факту.",
    keywords: ["właściwość", "spór", "organ"],
  },
  {
    id: "i-5",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 5 — Wyłączenie pracownika oraz organu",
    start: "24",
    end: "27a",
    learnerFocus:
      "Коли працівник, член колегіального органу або сам орган не повинен вести справу.",
    practicalUse:
      "Шукайте конкретний конфлікт інтересів і документуйте, хто після wyłączenia має продовжити справу.",
    keywords: ["wyłączenie", "bezstronność", "konflikt interesów"],
  },
  {
    id: "i-6",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 6 — Strona",
    start: "28",
    end: "34",
    learnerFocus:
      "Хто є стороною, хто може її представляти та як оформити повноваження.",
    practicalUse:
      "Відрізняйте фактичну зацікавленість від interesu prawnego і перевіряйте zakres pełnomocnictwa.",
    keywords: ["strona", "pełnomocnik", "przedstawiciel"],
  },
  {
    id: "i-7",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 7 — Załatwianie spraw",
    start: "35",
    end: "38",
    learnerFocus: "Строки розгляду, повідомлення про затримку та ponaglenie.",
    practicalUse:
      "Ведіть календар від wszczęcia, віднімайте законні періоди неврахування і перевіряйте pouczenie про ponaglenie.",
    keywords: ["termin", "bezczynność", "przewlekłość", "ponaglenie"],
  },
  {
    id: "i-8",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 8 — Doręczenia",
    start: "39",
    end: "49b",
    learnerFocus:
      "Кому, куди, коли і з яким наслідком вручається кореспонденція.",
    practicalUse:
      "Дата skutecznego doręczenia запускає строки — збережіть підтвердження і перевірте адресу, представника та fikcję doręczenia.",
    keywords: ["doręczenie", "adres", "awizo", "obwieszczenie"],
  },
  {
    id: "i-9",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 9 — Wezwania",
    start: "50",
    end: "56",
    learnerFocus: "Мета, обов’язкові елементи та спосіб виконання wezwania.",
    practicalUse:
      "Розкладіть wezwanie на: адресат, дія, підстава, строк, форма, наслідок і можливість уточнення.",
    keywords: ["wezwanie", "stawiennictwo", "wyjaśnienia"],
  },
  {
    id: "i-10",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 10 — Terminy",
    start: "57",
    end: "60",
    learnerFocus: "Як рахувати процесуальні строки і коли їх можна поновити.",
    practicalUse:
      "Запишіть подію-початок, одиницю часу, останній день, спосіб подання і доказ своєчасності.",
    keywords: ["termin", "przywrócenie terminu", "obliczanie"],
  },
  {
    id: "ii-1",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 1 — Wszczęcie postępowania",
    start: "61",
    end: "66",
    learnerFocus:
      "Початок справи, podanie, braki formalne та подання до неправильного органу.",
    practicalUse:
      "Не змішуйте brak formalny з недоведенням матеріальної умови; для кожного дефекту перевірте окремий наслідок.",
    keywords: ["wszczęcie", "podanie", "braki formalne", "przekazanie"],
  },
  {
    id: "ii-2",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 2 — Metryki, protokoły i adnotacje",
    start: "66a",
    end: "72",
    learnerFocus: "Як орган фіксує перебіг справи та окремі процесуальні дії.",
    practicalUse:
      "Порівнюйте протокол або adnotację з реальною дією: хто, коли, що сказав і які зауваження внесено.",
    keywords: ["metryka", "protokół", "adnotacja"],
  },
  {
    id: "ii-3",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 3 — Udostępnianie akt",
    start: "73",
    end: "74a",
    learnerFocus: "Право доступу до матеріалів і межі відмови в доступі.",
    practicalUse:
      "Перед позицією або odwołaniem перевірте повний склад akt, зробіть копії та оскаржте формальну відмову.",
    keywords: ["akta", "wgląd", "odpis", "tajemnica"],
  },
  {
    id: "ii-4",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 4 — Dowody",
    start: "75",
    end: "88a",
    learnerFocus: "Допустимість, збирання, участь сторони й оцінка доказів.",
    practicalUse:
      "Для кожної przesłanki створіть рядок: факт → доказ → джерело → суперечності → висновок органу.",
    keywords: ["dowód", "dokument", "świadek", "biegły", "ocena"],
  },
  {
    id: "ii-5",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 5 — Rozprawa",
    start: "89",
    end: "96",
    learnerFocus:
      "Коли потрібна rozprawa, як її підготувати і що можуть робити учасники.",
    practicalUse:
      "До rozprawy сформулюйте спірні факти, питання до свідків і перелік доказів, які треба зіставити.",
    keywords: ["rozprawa", "świadek", "wezwanie"],
  },
  {
    id: "ii-5a",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 5a — Mediacja",
    start: "96a",
    end: "96n",
    learnerFocus:
      "Добровільна, конфіденційна медіація та її процесуальні наслідки.",
    practicalUse:
      "Спочатку перевірте, чи характер справи допускає домовленість і чи результат залишиться в межах закону.",
    keywords: ["mediacja", "mediator", "poufność"],
  },
  {
    id: "ii-6",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 6 — Zawieszenie postępowania",
    start: "97",
    end: "103",
    learnerFocus:
      "Обов’язкове і факультативне zawieszenie, дії під час паузи та вплив на строки.",
    practicalUse:
      "Назвіть точну підставу zawieszenia і перевірте, яка подія дозволяє podjęcie postępowania.",
    keywords: ["zawieszenie", "podjęcie", "termin"],
  },
  {
    id: "ii-7",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 7 — Decyzje",
    start: "104",
    end: "113",
    learnerFocus:
      "Форма завершення справи, елементи decyzji, виконання, доповнення і виправлення.",
    practicalUse:
      "Читайте decyzję у п’яти шарах: орган, rozstrzygnięcie, fakty, prawo, pouczenie.",
    keywords: ["decyzja", "uzasadnienie", "pouczenie", "rygor"],
  },
  {
    id: "ii-8",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 8 — Ugoda",
    start: "114",
    end: "122",
    learnerFocus: "Угода сторін, її форма, затвердження та юридичний ефект.",
    practicalUse:
      "Перевірте допустимість ugody, точний зміст обов’язків і момент, з якого вона стає wykonalna.",
    keywords: ["ugoda", "zatwierdzenie", "wykonalność"],
  },
  {
    id: "ii-8a",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 8a — Milczące załatwienie sprawy",
    start: "122a",
    end: "122h",
    learnerFocus:
      "Коли спеціальний закон дозволяє позитивний результат через мовчання органу.",
    practicalUse:
      "Не припускайте milczenia автоматично: знайдіть пряму норму спеціального закону, строк і доказ його спливу.",
    keywords: ["milczące załatwienie", "zaświadczenie"],
  },
  {
    id: "ii-9",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 9 — Postanowienia",
    start: "123",
    end: "126",
    learnerFocus: "Проміжні процесуальні rozstrzygnięcia та їх форма.",
    practicalUse:
      "Перевірте, чи на конкретне postanowienie прямо передбачене zażalenie або лише контроль разом з decyzją.",
    keywords: ["postanowienie", "zażalenie", "uzasadnienie"],
  },
  {
    id: "ii-10",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 10 — Odwołania",
    start: "127",
    end: "140",
    learnerFocus:
      "Подання, передача, межі розгляду і види рішень органу odwoławczego.",
    practicalUse:
      "Збережіть строк і правильний шлях подання, а zarzuty зв’яжіть із доказами та очікуваним способом вирішення.",
    keywords: ["odwołanie", "organ odwoławczy", "zakaz pogarszania"],
  },
  {
    id: "ii-11",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 11 — Zażalenia",
    start: "141",
    end: "144",
    learnerFocus:
      "Оскарження postanowień лише у випадках, прямо передбачених законом.",
    practicalUse:
      "Спершу знайдіть норму, яка відкриває zażalenie; інакше zarzut збережіть до odwołania від decyzji.",
    keywords: ["zażalenie", "postanowienie"],
  },
  {
    id: "ii-12",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 12 — Wznowienie postępowania",
    start: "145",
    end: "153",
    learnerFocus:
      "Виняткове повторне відкриття остаточно завершеної справи через визначені дефекти.",
    practicalUse:
      "Підставу wznowienia, момент коли про неї дізналися, строк і вплив на результат аналізуйте окремо.",
    keywords: ["wznowienie", "decyzja ostateczna", "termin"],
  },
  {
    id: "ii-13",
    division: "Dział II — Postępowanie",
    chapter:
      "Rozdział 13 — Uchylenie, zmiana oraz stwierdzenie nieważności decyzji",
    start: "154",
    end: "163a",
    learnerFocus:
      "Надзвичайні способи зміни, скасування, nieważności або wygaśnięcia decyzji.",
    practicalUse:
      "Не взаємозамінюйте режими: кожен має іншу підставу, орган, межі та наслідок.",
    keywords: ["nieważność", "uchylenie", "zmiana", "wygaśnięcie"],
  },
  {
    id: "ii-14",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 14 — Postępowanie uproszczone",
    start: "163b",
    end: "163g",
    learnerFocus:
      "Скорочена процедура, якщо її прямо дозволяє спеціальний закон.",
    practicalUse:
      "Перевірте правову підставу trybu uproszczonego, formularz, межі доказів та спрощене uzasadnienie.",
    keywords: ["postępowanie uproszczone", "formularz"],
  },
  {
    id: "iii",
    division: "Dział III — Ubezpieczenia społeczne",
    chapter: "Przepisy szczególne; art. 164–179 (uchylone)",
    start: "180",
    end: "181",
    learnerFocus:
      "Офіційний PDF показує art. 164–179 одним груповим записом «uchylone», без окремих заголовків. Art. 180–181 залишають зв’язок KPA зі спеціальними правилами соціального страхування.",
    practicalUse:
      "Для справ ZUS починайте зі спеціальної процедури, а не переносіть механічно правила справ про pobyt.",
    keywords: ["ubezpieczenia społeczne", "uchylony", "164–179"],
  },
  {
    id: "iv",
    division: "Dział IV — Udział prokuratora",
    chapter: "Udział prokuratora",
    start: "182",
    end: "189",
    learnerFocus:
      "Повноваження prokuratora для охорони законності в адміністративній справі.",
    practicalUse:
      "Відрізняйте sprzeciw prokuratora від засобу оскарження, який належить самій стороні.",
    keywords: ["prokurator", "sprzeciw"],
  },
  {
    id: "iva",
    division: "Dział IVA — Administracyjne kary pieniężne",
    chapter: "Administracyjne kary pieniężne",
    start: "189a",
    end: "189l",
    learnerFocus:
      "Загальні правила адміністративних грошових санкцій: вибір закону, розмір, відступ, строки та ulgi.",
    practicalUse:
      "Перевірте lex specialis, дату порушення, siłę wyższą, przesłanki odstąpienia і передбачені строки давності.",
    keywords: ["kara pieniężna", "przedawnienie", "ulga"],
  },
  {
    id: "v",
    division: "Dział V — uchylony",
    chapter: "Dział uchylony",
    start: "190",
    end: "195",
    learnerFocus: "У чинному тексті весь Dział V позначений як скасований.",
    practicalUse:
      "Не будуйте чинну дію на історичній статті; перевірте актуальний інститут у спеціальному законі та перехідні норми.",
    keywords: ["uchylony"],
  },
  {
    id: "vi",
    division: "Dział VI — uchylony",
    chapter: "Dział uchylony",
    start: "196",
    end: "216",
    learnerFocus: "У чинному тексті весь Dział VI позначений як скасований.",
    practicalUse:
      "Старе посилання в документі перевіряйте за редакцією, що діяла на дату відповідної czynności.",
    keywords: ["uchylony"],
  },
  {
    id: "vii",
    division: "Dział VII — Wydawanie zaświadczeń",
    chapter: "Wydawanie zaświadczeń",
    start: "217",
    end: "220",
    learnerFocus:
      "Коли орган підтверджує факт або правовий стан zaświadczeniem і як оскаржити відмову.",
    practicalUse:
      "Назвіть факт, правову підставу або interes prawny; не вимагайте zaświadczenia там, де орган уже має дані.",
    keywords: ["zaświadczenie", "odmowa", "oświadczenie"],
  },
  {
    id: "viii-1",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 1 — Postanowienia ogólne",
    start: "221",
    end: "226a",
    learnerFocus:
      "Конституційне право skarg і wniosków та загальні правила їх прийняття.",
    practicalUse:
      "Зміст, а не назва письма визначає режим; не підміняйте skargą odwołania у конкретній справі.",
    keywords: ["skarga", "wniosek"],
  },
  {
    id: "viii-2",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 2 — Skargi",
    start: "227",
    end: "240",
    learnerFocus: "Предмет, орган, строк і спосіб розгляду skargi.",
    practicalUse:
      "Спочатку визначте, чи письмо стосується загальної роботи органу, поточної справи або остаточної decyzji.",
    keywords: ["skarga", "właściwość", "zawiadomienie"],
  },
  {
    id: "viii-3",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 3 — Wnioski",
    start: "241",
    end: "247",
    learnerFocus:
      "Wniosek як пропозиція покращити організацію чи правозастосування.",
    practicalUse:
      "Не очікуйте, що wniosek створить індивідуальне право; для конкретної справи використовуйте належний процесуальний засіб.",
    keywords: ["wniosek", "organizacja"],
  },
  {
    id: "viii-4",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 4 — Udział prasy i organizacji społecznych",
    start: "248",
    end: "252",
    learnerFocus:
      "Передання skarg і wniosków пресою або громадською організацією.",
    practicalUse:
      "Перевірте, хто є автором, кому надсилати відповідь і які статті цього розділу скасовані.",
    keywords: ["prasa", "organizacja społeczna"],
  },
  {
    id: "viii-5",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 5 — Przyjmowanie skarg i wniosków",
    start: "253",
    end: "256",
    learnerFocus:
      "Організація прийому, реєстрації та передання skarg і wniosków.",
    practicalUse:
      "Фіксуйте дату і спосіб прийняття; скаргу на працівника має отримати його przełożony.",
    keywords: ["przyjmowanie", "ewidencja"],
  },
  {
    id: "viii-6",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 6 — Nadzór i kontrola",
    start: "257",
    end: "260",
    learnerFocus:
      "Хто контролює систему прийняття та розгляду skarg і wniosków.",
    practicalUse:
      "Цей контроль стосується організації механізму, а не замінює оскарження рішення у вашій справі.",
    keywords: ["nadzór", "kontrola"],
  },
  {
    id: "viiia",
    division: "Dział VIIIA — Europejska współpraca administracyjna",
    chapter: "Europejska współpraca administracyjna",
    start: "260a",
    end: "260g",
    learnerFocus: "Взаємна адміністративна допомога між органами держав ЄС.",
    practicalUse:
      "Перевірте правову підставу обміну, необхідність інформації, конфіденційність та спеціальні правила ЄС.",
    keywords: ["UE", "współpraca", "pomoc"],
  },
  {
    id: "ix",
    division: "Dział IX — Opłaty i koszty postępowania",
    chapter: "Opłaty i koszty",
    start: "261",
    end: "267",
    learnerFocus: "Аванс, розподіл, визначення і стягнення витрат провадження.",
    practicalUse:
      "Відділяйте opłatę за дію від kosztów, спричинених учасником, і перевіряйте можливість zwolnienia.",
    keywords: ["opłata", "koszty", "zwolnienie"],
  },
  {
    id: "x",
    division: "Dział X — Przepisy końcowe",
    chapter: "Przepisy końcowe",
    start: "268",
    end: "269",
    learnerFocus:
      "Уповноваження всередині органу і значення терміна prawomocna decyzja.",
    practicalUse:
      "Перевірте письмове upoważnienie особи, яка підписала акт, та не плутайте ostateczność із prawomocnością.",
    keywords: ["upoważnienie", "prawomocność"],
  },
]

const PARAGRAPH_COUNTS = `2a:3,3:5,5:2,7a:2,8:2,10:3,12:2,13:2,14:6,16:3,21:2,22:3,24:4,25:2,26:3,27:4,30:6,31:7,33:6,34:2,35:6,36:2,37:9,39:4,39³:4,40:5,41:2,42:3,44:4,45a:5,46:10,47:2,48:2,49:2,49b:2,50:3,51:2,54:3,55:2,56:2,57:6,58:3,59:2,61:6,61a:2,63:7,64:2,65:3,66:4,66a:5,67:2,68:2,69:2,72:2,73:5,74:2,75:2,76:3,76a:6,77:4,78:2,79:2,79a:2,81a:2,83:4,84:2,85:2,88:3,89:2,90:3,91:3,94:2,95:2,96a:6,96b:5,96d:2,96e:3,96f:3,96g:2,96j:3,96l:3,96m:3,96n:2,97:7,98:2,100:3,101:3,104:2,105:2,106:6,106a:4,107:5,108:2,109:4,110:2,111:4,113:3,116:2,117:3,118:3,119:3,120:2,122a:2,122c:3,122d:2,122f:5,122h:2,123:2,124:2,125:3,127:5,127a:2,129:3,130:4,132:3,136:4,138:6,139a:2,141:2,145:3,145a:2,145aa:2,145b:2,146:2,148:2,149:4,150:3,151:3,152:2,154:3,156:2,157:3,158:3,159:2,161:5,162:3,163b:3,163c:4,163e:2,180:2,183:2,184:4,185:2,189a:3,189f:3,189g:3,189h:5,189i:2,189j:5,189k:12,189l:4,217:4,218:2,220:5,221:3,223:2,225:2,231:2,232:3,235:2,236:3,237:4,238:2,239:2,242:2,244:2,246:2,248:2,253:5,258:2,259:3,260a:4,260b:4,260c:2,261:4,262:2,263:2,264:3`

const TITLE_SEED = `
1|Сфера справ, які регулює KPA
2|Skargi i wnioski у системі KPA
2a|Інформаційний обов’язок RODO
3|Винятки із застосування KPA
4|Імунітети та міжнародні правила
5|Кодексні визначення
6|Засада законності
7|Обов’язок з’ясувати факти
7a|Сумнів у змісті норми на користь сторони
7b|Співпраця органів
8|Довіра, пропорційність і рівне ставлення
9|Обов’язок інформувати сторону
10|Активна участь сторони
11|Пояснення мотивів органу
12|Швидкість і прості засоби
13|Мирне вирішення та медіація
14|Письмова й електронна форма справи
14a|Оцінювання роботи urzędu
15|Двоінстанційність
16|Остаточність і правомочність decyzji
17|Органи вищого ступеня
18|Органи naczelne
19|Обов’язок перевіряти компетенцію
20|Właściwość rzeczowa
21|Właściwość miejscowa
22|Хто вирішує spór o właściwość
23|Невідкладні дії під час спору
24|Wyłączenie працівника
25|Wyłączenie органу
26|Хто продовжує справу після wyłączenia
27|Wyłączenie члена колегіального органу
27a|Скасована норма про wyłączenie
28|Хто є stroną
29|Хто може бути стороною
30|Здатність сторони та правонаступництво
31|Участь organizacji społecznej
32|Дія через pełnomocnika
33|Форма і межі pełnomocnictwa
34|Представник для відсутньої особи
35|Строки załatwienia sprawy
36|Повідомлення про затримку
37|Ponaglenie: bezczynność і przewlekłość
38|Відповідальність за затримку
39|Основний спосіб doręczenia
39¹|Адресат електронного doręczenia
39²|Скасована норма doręczeń
39³|Видача копії електронного письма
39⁴|Дата електронного doręczenia
40|Doręczenie стороні або представнику
41|Обов’язок повідомити нову адресу
42|Місце doręczenia фізичній особі
43|Doręczenie zastępcze
44|Awizo і fikcja doręczenia
45|Doręczenie організації
45a|Неактуальна адреса юридичної особи
46|Підтвердження отримання
47|Відмова прийняти письмо
48|Особа з невідомим місцем перебування
49|Публічне obwieszczenie
49a|Публічне повідомлення для багатьох сторін
49b|Доступ до змісту публічно оголошеного акта
50|Кого і для чого можна викликати
51|Територіальна межа особистої явки
52|Допомога іншого органу в дії
53|Коли потрібна особиста дія перед органом
54|Обов’язковий зміст wezwania
55|Термінове wezwanie
56|Витрати викликаної особи
57|Обчислення строків
58|Умови przywrócenia terminu
59|Рішення про поновлення строку
60|Тимчасове зупинення виконання
61|Wszczęcie на вимогу або з urzędu
61a|Відмова розпочати справу
62|Спільне провадження кількох сторін
63|Форма і зміст podania
64|Braki formalne podania
65|Передання до właściwego organu
66|Одне podanie — кілька різних справ
66a|Metryka sprawy
67|Коли складається protokół
68|Зміст і підпис protokołu
69|Protokół przesłuchania
70|Письмові показання як додаток
71|Виправлення protokołu
72|Adnotacja замість protokołu
73|Доступ до akt sprawy
74|Обмеження доступу до akt
74a|Доступ до akt і права RODO
75|Відкритий каталог доказів
76|Доказова сила dokumentu urzędowego
76a|Копії та витяги документів
77|Повне збирання матеріалу
78|Wniosek dowodowy сторони
79|Участь у проведенні доказу
79a|Вказання недоведених передумов
80|Вільна оцінка всього матеріалу
81|Факт після можливості висловитися
81a|Фактичний сумнів на користь сторони
82|Хто не може бути свідком
83|Право відмовитися від показань
84|Доказ з opinii biegłego
85|Oględziny
86|Przesłuchanie strony як додатковий доказ
87|Докази перед органом колегіальним
88|Штраф за неявку або відмову
88a|Наслідки для військовослужбовця
89|Коли проводиться rozprawa
90|Підготовка rozprawy
91|Wezwanie на rozprawę
92|Час на підготовку до rozprawy
93|Хто керує rozprawą
93a|Дистанційна участь ув’язненої особи
94|Неявка та відкладення rozprawy
95|Права учасників на rozprawie
96|Порядок і штраф за поведінку
96a|Допустимість і мета mediacji
96b|Пропозиція mediacji та згода
96c|Відсутність згоди зупиняє mediację
96d|Вибір mediatora
96e|Направлення справи до mediacji
96f|Хто може бути mediatorem
96g|Безсторонність mediatora
96h|Передання контактних даних
96i|Доступ mediatora до akt
96j|Конфіденційність mediacji
96k|Завдання mediatora
96l|Оплата mediatora
96m|Protokół z mediacji
96n|Врахування результату mediacji
97|Обов’язкове zawieszenie
98|Zawieszenie на прохання сторони
99|Захист інтересів під час zawieszenia
100|Prejudycjalne питання
101|Postanowienie про zawieszenie або podjęcie
102|Невідкладні дії під час zawieszenia
103|Вплив zawieszenia на строки
104|Decyzja як форма вирішення справи
105|Umorzenie безпредметної справи
106|Позиція іншого органу
106a|Спільне засідання органів
107|Обов’язкові елементи decyzji
108|Rygor natychmiastowej wykonalności
109|Doręczenie або ogłoszenie decyzji
110|Коли орган зв’язаний decyzją
111|Uzupełnienie decyzji
112|Помилкове pouczenie не шкодить стороні
113|Виправлення помилок і wyjaśnienie
114|Допустимість ugody
115|Перед яким органом укладається ugoda
116|Строк на укладення ugody
117|Форма і зміст ugody
118|Затвердження ugody
119|Postanowienie щодо затвердження
120|Коли ugoda стає wykonalna
121|Наслідок затвердженої ugody
121a|Ugoda перед mediatorem
122|Субсидіарне застосування правил decyzji
122a|Коли можливе milczące załatwienie
122b|Умовна дата завершення справи
122c|Момент milczącego załatwienia
122d|Процесуальні винятки при мовчанні
122e|Adnotacja в aktach
122f|Zaświadczenie про milczące załatwienie
122g|Надзвичайні режими після мовчання
122h|Інформація RODO при мовчанні
123|Коли видається postanowienie
124|Елементи postanowienia
125|Doręczenie та uzasadnienie postanowienia
126|Які правила decyzji діють відповідно
127|Право на odwołanie
127a|Zrzeczenie się odwołania
128|Мінімальний зміст odwołania
129|Строк і шлях подання odwołania
130|Вплив odwołania на виконання
131|Повідомлення інших сторін
132|Autokontrola органу першої інстанції
133|Передання odwołania й akt
134|Недопустимість або пропуск строку
135|Зупинення негайного виконання
136|Додаткове доказове провадження
137|Cofnięcie odwołania
138|Види рішень органу odwoławczego
139|Zakaz reformationis in peius
139a|Вказівки після kasacyjnej decyzji
140|Відповідне застосування правил першої інстанції
141|Коли доступне zażalenie
142|Контроль postanowienia в odwołaniu
143|Виконання postanowienia попри zażalenie
144|Правила odwołania для zażalenia
145|Основні підстави wznowienia
145a|Рішення Trybunału Konstytucyjnego
145aa|Рішення Trybunału Sprawiedliwości UE
145b|Судове встановлення порушення рівності
146|Часові межі uchylenia після wznowienia
147|Wznowienie з urzędu або на вимогу
148|Строк і адресат podania o wznowienie
149|Postanowienie про wznowienie
150|Орган, компетентний у wznowieniu
151|Рішення після wznowienia
152|Зупинення виконання під час wznowienia
153|Скасована норма wznowienia
154|Зміна decyzji без набутого права
155|Зміна decyzji з набутим правом
155a|Без milczącego załatwienia
156|Підстави nieważności decyzji
157|Орган і початок справи nieważności
158|Рішення у справі nieważności
159|Зупинення виконання при nieważności
160|Скасована норма про відшкодування
161|Надзвичайне втручання ministra
162|Wygaśnięcie або uchylenie decyzji
163|Зміна decyzji за спеціальною підставою
163a|Без milczącego załatwienia у цих режимах
163b|Коли діє tryb uproszczony
163c|Формуляр і межі żądania
163d|Нові обставини в trybie uproszczonym
163e|Обмежене postępowanie dowodowe
163f|Скорочене uzasadnienie
163g|Оскарження postanowień лише з decyzją
180|KPA у справах ubezpieczeń społecznych
181|Органи odwoławcze в соціальному страхуванні
182|Вимога prokuratora розпочати справу
183|Участь prokuratora в справі
184|Sprzeciw prokuratora
185|Строк розгляду sprzeciwu
186|Провадження після sprzeciwu
187|Зупинення виконання після sprzeciwu
188|Права prokuratora як учасника
189|Співвідношення sprzeciwu і skargi sądowej
189a|Субсидіарність правил про kary
189b|Визначення administracyjnej kary pieniężnej
189c|Застосування м’якшого закону
189d|Фактори розміру kary
189e|Siła wyższa виключає karę
189f|Відступ від накладення kary
189g|Давність накладення kary
189h|Переривання і зупинення давності
189i|Несплачена в строк kara та відсотки
189j|Давність виконання kary
189k|Ulgi на заяву сторони
189l|Ulgi з urzędu
217|Підстави й строк видачі zaświadczenia
217a|Інформація RODO при zaświadczeniu
218|Перевірка фактів для zaświadczenia
219|Відмова у формі postanowienia
220|Заборона вимагати наявні zaświadczenia
221|Право подавати skargi і wnioski
222|Зміст письма важливіший за назву
223|Організація розгляду skarg
224|Значення organów państwowych
225|Захист автора skargi
226|Виконавчі правила розгляду
226a|Інформація RODO у skargach
227|Що може бути предметом skargi
228|Куди подавати skargę
229|Загальна właściwość для skargi
230|Skarga на organizację społeczną
231|Передання skargi компетентному органу
232|Передання skargi нижчому органу
233|Skarga до початку індивідуальної справи
234|Skarga під час поточної справи
235|Skarga після остаточної decyzji
236|Орган для skargi у конкретній справі
237|Строк і контроль rozpatrzenia skargi
238|Зміст відповіді на skargę
239|Повторна безпідставна skarga
240|Skarga поза сферою KPA
241|Предмет wniosku
242|Куди подавати wniosek
243|Передання wniosku
244|Строк розгляду wniosku
245|Повідомлення про затримку
246|Skarga на спосіб розгляду wniosku
247|Відповідне застосування правил skargi
248|Skarga, передана пресою
249|Передання organizacją społeczną
250|Скасована норма про пресу
251|Права редакції після передання
252|Скасована норма цього розділу
253|Організація прийому громадян
254|Реєстрація skarg і wniosków
255|Скасована норма про приймання skarg
256|Skarga на працівника до przełożonego
257|Вищий нагляд у судах
258|Органи нагляду і контролю
259|Періодична оцінка системи
260|Скасована норма нагляду
260a|Надання допомоги органу ЄС
260b|Вимоги до запиту про допомогу
260c|Запит Польщі до іншої держави ЄС
260d|Канал передання інформації
260e|Витрати міжнародної допомоги
260f|Застосування до ширшого кола держав
260g|Перевага спеціальних правил ЄС
261|Аванс на opłaty i koszty
262|Які витрати несе сторона
263|Що входить до kosztów
263a|Ставки для mediatora
264|Postanowienie про розмір kosztów
265|Стягнення несплачених należności
266|Відповідальність за помилкове wezwanie
267|Zwolnienie від витрат
268|Скасована прикінцева норма
268a|Письмове upoważnienie працівника
269|Prawomocna означає ostateczna
`

const kpaCorpusArticles = [...kpaCorpusProvisions]
  .filter((provision) => provision.kind === "article")
  .sort((left, right) => left.order - right.order)

const kpaCorpusArticleByArticle = new Map(
  kpaCorpusArticles.map(
    (provision) =>
      [provision.locator.replace(/^Art\.\s*/u, ""), provision] as const
  )
)

const pageByArticle = new Map(
  kpaCorpusArticles.map(
    (provision) =>
      [
        provision.locator.replace(/^Art\.\s*/u, ""),
        provision.startPdfPage,
      ] as const
  )
)

const paragraphCountByArticle = new Map(
  PARAGRAPH_COUNTS.split(",").map((item) => {
    const [article, count] = item.split(":")
    return [article, Number(count)] as const
  })
)

const titleByArticle = new Map(
  TITLE_SEED.trim()
    .split("\n")
    .map((line) => {
      const [article, title] = line.split("|")
      return [article, title] as const
    })
)

const articleSequence: string[] = kpaCorpusArticles.map((provision) =>
  provision.locator.replace(/^Art\.\s*/u, "")
)

const articleOrder = new Map(
  articleSequence.map((article, index) => [article, index])
)
function sectionFor(article: string) {
  const order = articleOrder.get(article) ?? -1
  return kpaArticleSections.find((section) => {
    const start = articleOrder.get(section.start) ?? -1
    const end = articleOrder.get(section.end) ?? -1
    return order >= start && order <= end
  })
}

function articleNeighbors(article: string) {
  const index = articleOrder.get(article) ?? 0
  return {
    previousArticle: articleSequence[index - 1] ?? null,
    nextArticle: articleSequence[index + 1] ?? null,
  }
}

export const kpaArticleIndex: KpaArticleEntry[] = articleSequence.map(
  (article) => {
    const section = sectionFor(article)
    if (!section) throw new Error(`Missing KPA section for art. ${article}`)
    const status: KpaArticleStatus =
      kpaCorpusArticleByArticle.get(article)?.status === "active"
        ? "active"
        : "repealed"
    const shortTitle =
      status === "repealed"
        ? (titleByArticle.get(article) ??
          `Скасована стаття в ${section.chapter}`)
        : (titleByArticle.get(article) ??
          `Деталь правила: ${section.chapter.replace(/^Rozdział [^—]+— /, "")}`)
    const paragraphCount = paragraphCountByArticle.get(article)
    const neighbors = articleNeighbors(article)

    return {
      article,
      shortTitle,
      division: section.division,
      chapter: section.chapter,
      keywords: [...section.keywords, shortTitle, `art. ${article}`, status],
      status,
      pdfPage: pageByArticle.get(article) ?? 1,
      searchToken: `${kpaCorpusArticleByArticle.get(article)?.locator ?? `Art. ${article}`}.`,
      paragraphCount: paragraphCount ?? null,
      ...neighbors,
      sectionFocus: section.learnerFocus,
      sectionPractice: section.practicalUse,
      editorialStatus: "official-locator",
    }
  }
)

export const KPA_ARTICLE_INDEX_EXPECTED_COUNT = 306

const uniqueArticles = new Set(kpaArticleIndex.map((entry) => entry.article))
const invalidPageEntries = kpaArticleIndex.filter(
  (entry) => entry.pdfPage < 2 || entry.pdfPage > 46
)

if (
  kpaArticleIndex.length !== KPA_ARTICLE_INDEX_EXPECTED_COUNT ||
  uniqueArticles.size !== KPA_ARTICLE_INDEX_EXPECTED_COUNT ||
  invalidPageEntries.length > 0
) {
  throw new Error(
    `Invalid KPA article index: expected ${KPA_ARTICLE_INDEX_EXPECTED_COUNT} unique PDF headings with pages 2–46`
  )
}

export const kpaArticleIndexStats = {
  total: kpaArticleIndex.length,
  active: kpaArticleIndex.filter((entry) => entry.status === "active").length,
  repealed: kpaArticleIndex.filter((entry) => entry.status === "repealed")
    .length,
  verifiedLegalState: "18.07.2026",
  sourceEdition: "Dz.U. 2025 poz. 1691",
}

export type KpaGuideModuleId =
  | "system"
  | "anatomy"
  | "principles"
  | "authority"
  | "party"
  | "initiation"
  | "files-evidence"
  | "time-service"
  | "summons"
  | "silence"
  | "decisions"
  | "appeal"
  | "delay"
  | "extraordinary"
  | "court"

export type KpaGuideModuleArticleMapping = {
  stage: string
  articles: readonly string[]
}

export const kpaGuideModuleArticles = {
  system: {
    stage: "Сфера застосування KPA",
    articles: ["1", "2", "2a", "3", "4", "5"],
  },
  anatomy: {
    stage: "Будова й логіка норми",
    articles: ["5", "7", "54", "107"],
  },
  principles: {
    stage: "Загальні процесуальні стандарти",
    articles: [
      "6",
      "7",
      "7a",
      "7b",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "14a",
      "15",
      "16",
    ],
  },
  authority: {
    stage: "Компетенція та передання справи",
    articles: ["19", "20", "21", "22", "23", "65", "66"],
  },
  party: {
    stage: "Сторона, представництво і doręczenie",
    articles: ["28", "29", "30", "31", "32", "33", "34", "40"],
  },
  initiation: {
    stage: "Wszczęcie та перевірка podania",
    articles: ["61", "61a", "62", "63", "64", "65", "66"],
  },
  "files-evidence": {
    stage: "Доступ до akt і доказове провадження",
    articles: [
      "73",
      "74",
      "74a",
      "75",
      "76",
      "76a",
      "77",
      "78",
      "79",
      "79a",
      "80",
      "81",
      "81a",
    ],
  },
  "time-service": {
    stage: "Строк розгляду, doręczenie і строки сторони",
    articles: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "39¹",
      "39²",
      "39³",
      "39⁴",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "45a",
      "46",
      "47",
      "48",
      "49",
      "49a",
      "49b",
      "57",
      "58",
      "59",
      "60",
    ],
  },
  summons: {
    stage: "Wezwanie та виконання викликаної дії",
    articles: ["50", "51", "52", "53", "54", "55", "56"],
  },
  silence: {
    stage: "Milczące załatwienie sprawy",
    articles: ["122a", "122b", "122c", "122d", "122e", "122f", "122g", "122h"],
  },
  decisions: {
    stage: "Decyzja, її виправлення та postanowienie",
    articles: [
      "104",
      "105",
      "106",
      "106a",
      "107",
      "108",
      "109",
      "110",
      "111",
      "112",
      "113",
      "123",
      "124",
      "125",
      "126",
    ],
  },
  appeal: {
    stage: "Адміністративний контроль decyzji й postanowienia",
    articles: [
      "127",
      "127a",
      "128",
      "129",
      "130",
      "131",
      "132",
      "133",
      "134",
      "135",
      "136",
      "137",
      "138",
      "139",
      "139a",
      "140",
      "141",
      "142",
      "143",
      "144",
    ],
  },
  delay: {
    stage: "Bezczynność, przewlekłość і ponaglenie",
    articles: ["35", "36", "37", "38"],
  },
  extraordinary: {
    stage: "Перегляд остаточної decyzji",
    articles: [
      "145",
      "145a",
      "145aa",
      "145b",
      "146",
      "147",
      "148",
      "149",
      "150",
      "151",
      "152",
      "153",
      "154",
      "155",
      "155a",
      "156",
      "157",
      "158",
      "159",
      "160",
      "161",
      "162",
      "163",
      "163a",
    ],
  },
  court: {
    stage: "Перехід від адміністративного до судового контролю",
    articles: ["16", "127", "127a"],
  },
} satisfies Record<KpaGuideModuleId, KpaGuideModuleArticleMapping>

const knownKpaArticleIds = new Set(
  kpaArticleIndex.map((entry) => entry.article)
)

export const unknownKpaGuideModuleArticleIds = Object.entries(
  kpaGuideModuleArticles
).flatMap(([moduleId, mapping]) =>
  mapping.articles
    .filter((article) => !knownKpaArticleIds.has(article))
    .map((article) => ({ moduleId: moduleId as KpaGuideModuleId, article }))
)

/** Generic legal-library curriculum projected from the authored KPA guide. */
export const kpaLearningCurriculum = defineLegalLearningCurriculum({
  documentId: "kpa",
  title: "KPA — kurs czytania procedury",
  description:
    "Курс іде тим самим шляхом, яким рухається адміністративна справа: від визначення правил до доказів, рішення та контролю.",
  modules: kpaGuideModules.map((module) => ({
    id: module.id,
    order: module.order,
    title: module.title,
    polish: module.polish,
    provisionScope: module.articles,
    outcome: module.outcome,
    caseQuestion: module.questions[0]?.prompt ?? module.outcome,
    placeInWork: module.layers.practical.practice,
    sections: [
      {
        id: `${module.id}-beginner`,
        title: "Початківець",
        paragraphs: [
          module.layers.beginner.focus,
          module.layers.beginner.law,
          module.layers.beginner.practice,
        ],
        questions: module.questions.map((question) => question.prompt),
        warning: module.layers.beginner.pitfall,
      },
      {
        id: `${module.id}-advanced`,
        title: "Поглиблено",
        paragraphs: [
          module.layers.advanced.focus,
          module.layers.advanced.law,
          module.layers.advanced.practice,
        ],
        steps: module.method,
        evidence: module.checklist,
        warning: module.layers.advanced.pitfall,
      },
    ],
    exercise: module.checklist[0] ?? module.outcome,
  })),
})
