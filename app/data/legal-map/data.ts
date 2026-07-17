import {
  createLegalTextAuthor,
  defineLegalTextContent,
} from "~/data/legal-library/legal-text"
import type { LegalAtlasData } from "~/data/shared/legal-types"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalTextAuthor("powierzanie-pracy")
const ppsaLaw = createLegalTextAuthor("ppsa")
const _residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const _WORK_REGULATION_URL = "https://eli.gov.pl/eli/DU/2025/1629/ogl"
const TEMPORARY_WORK_URL = "https://eli.gov.pl/eli/DU/2025/236/ogl"
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"
import { LEGAL_STATE_DATE } from "~/data/shared/legal-meta"
import {
  appealMapNode,
  complaintMapNode,
  deadlinesDeliveryMapNode,
  decisionAppealMapNode,
  decisionReadingMapNode,
  decisionWorkflowMapNode,
  evidenceMapNode,
  extraordinaryWsaMapNode,
  inactivityMapNode,
  goalOfStayMapNode,
  initiationMapNode,
  invalidityMapNode,
  kpaPrinciplesMapNode,
  legalAnatomyMapNode,
  organPartyMapNode,
  principleLegalityMapNode,
  principleParticipationMapNode,
  personStatusMapNode,
  principleTrustMapNode,
  principleTwoInstanceMapNode,
  reopeningMapNode,
  sourceCheckMapNode,
  specialVsKpaMapNode,
  startCaseMapNode,
  studyLoopMapNode,
  twoKeysMapNode,
  wezwanieMapNode,
  wezwanieWorkflowMapNode,
  wsaMapNode,
} from "./editorial/topics"

const S = {
  kpa: {
    label: "Kodeks postępowania administracyjnego",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Dz.U. 2025 poz. 1691 · чинний текст KPA",
  },
  aliens: {
    label: "Ustawa o cudzoziemcach",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: "Dz.U. 2025 poz. 1079 · перевіряй разом зі змінами 2025–2026",
  },
  aliensChange: {
    label: "Zmiana ustawy o cudzoziemcach — 2025/2026",
    url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
    note: "Dz.U. 2025 poz. 1794 · значна частина змін діє з 27.04.2026",
  },
  work: {
    label: "Ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: "Dz.U. 2025 poz. 621 · чинна з 01.06.2025",
  },
  workChange: {
    label: "Zmiana zasad powierzania pracy — 2026",
    url: "https://eli.gov.pl/eli/DU/2026/473/ogl",
    note: "Dz.U. 2026 poz. 473 · зміни з 08.07.2026",
  },
  temporary: {
    label: "Ustawa o zatrudnianiu pracowników tymczasowych",
    url: "https://eli.gov.pl/eli/DU/2025/236/ogl",
    note: workLaw.text`${workLaw.external("Art. 1", TEMPORARY_WORK_URL)}–${workLaw.external("2", TEMPORARY_WORK_URL)}: agencja, pracownik tymczasowy, pracodawca użytkownik`,
  },
  labourMarket: {
    label: "Ustawa o rynku pracy i służbach zatrudnienia",
    url: "https://eli.gov.pl/eli/DU/2025/620/ogl",
    note: "Зокрема діяльність agencji zatrudnienia",
  },
  ppsa: {
    label: "Prawo o postępowaniu przed sądami administracyjnymi",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
    note: "Dz.U. 2026 poz. 143 · WSA та NSA",
  },
  nsa: {
    label: "Centralna Baza Orzeczeń Sądów Administracyjnych",
    url: "https://orzeczenia.nsa.gov.pl/cbo/query",
    note: "Офіційна навчально-інформаційна база судової практики",
  },
  udscVisa: {
    label: "UdSC — Wizy",
    url: "https://www.gov.pl/web/udsc/wizy",
    note: "Офіційне практичне пояснення візових процедур",
  },
  udscResident: {
    label: "UdSC — rezydent długoterminowy UE",
    url: "https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2",
    note: "Офіційна інформація для заявника",
  },
  mos: {
    label: "UdSC — Moduł Obsługi Spraw (MOS)",
    url: "https://www.gov.pl/web/udsc/info-mos",
    note: "Електронні процедури перебування з 27.04.2026",
  },
  mosQa: {
    label: "UdSC — MOS pytania i odpowiedzi",
    url: "https://www.gov.pl/web/udsc/mos-qa",
    note: "Офіційні практичні відповіді про подання через MOS",
  },
  edelivery: {
    label: "gov.pl — e-Doręczenia",
    url: "https://www.gov.pl/web/e-doreczenia",
    note: "Практичний портал; правова основа залишається в KPA",
  },
  outsourcing: {
    label: "MRPiPS — stanowisko o outsourcingu (03.04.2026)",
    url: "https://www.senat.gov.pl/gfx/senat/userfiles/_public/k11/komisje/kp/75/2/odp._mrpips_03-04-2026.pdf",
    note: "Офіційне пояснення outsourcingu procesowego та pracowniczego",
  },
  schengen: {
    label: "Kodeks graniczny Schengen — 2016/399",
    url: "https://eur-lex.europa.eu/eli/reg/2016/399/oj",
    note: "Умови перетину зовнішніх кордонів",
  },
  ukraine2026: {
    label: "Ustawa z 23.01.2026 — zmiany dotyczące obywateli Ukrainy",
    url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
    note: "Dz.U. 2026 poz. 203 · спеціальні та перехідні правила з 05.03.2026",
  },
  ukraineSpecialCurrent: {
    label: "Specustawa ukraińska — актуальний текст",
    url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
    note: foreignersLaw.text`${foreignersLaw.external("Art. 42c", UKRAINE_SPECIAL_ACT_URL)}–${foreignersLaw.external("42u", UKRAINE_SPECIAL_ACT_URL)}: умови, процедура та наслідки CUKR`,
  },
  ukraineChanges: {
    label: "UdSC — zmiany zasad pobytu obywateli Ukrainy",
    url: "https://www.gov.pl/web/udsc/zmiany-w-szczegolnych-zasadach-dotyczacych-legalnosci-pobytu-obywateli-ukrainy-na-terytorium-rzeczypospolitej-polskiej",
    note: "Офіційне пояснення доступних дозволів після 05.03.2026",
  },
  cukr: {
    label: "UdSC — procedura CUKR",
    url: "https://www.gov.pl/web/udsc/CUKR-procedura",
    note: "Умови, оплати, строк дії та подання через MOS",
  },
  cukrQa: {
    label: "UdSC — CUKR pytania i odpowiedzi",
    url: "https://www.gov.pl/web/udsc/cukr-QA",
    note: "Офіційні відповіді про подання, отримання карти й обов’язки",
  },
  ukrainianWork: {
    label: "Praca.gov.pl — powiadomienie o pracy obywatela Ukrainy",
    url: "https://psz.praca.gov.pl/web/8188476/powiadomienie-o-podjeciu-pracy-przez-obywatela-ukrainy",
    note: "Обов’язок роботодавця та електронне повідомлення про працевлаштування",
  },
  mosWork: {
    label: "UdSC — elektroniczny załącznik pracodawcy w MOS",
    url: "https://www.gov.pl/web/udsc/informacja-dla-pracodawcow-na-temat-koniecznosci-elektronicznego-podpisywania-zalacznikow-do-wnioskow-o-udzielenie-zezwolenia-na-pobyt-czasowy-i-prace-w-polsce",
    note: "Роль роботодавця та електронний підпис Załącznika nr 1",
  },
  mosWorkQa: {
    label: "MOS — zezwolenie na pobyt czasowy i pracę",
    url: "https://www.mos.cudzoziemcy.gov.pl/baza-pytan-i-odpowiedzi/zezwolenia-pobyt-i-praca/zezwolenie-na-pobyt-czasowy-i-prace/",
    note: "Офіційні практичні відповіді про умови, оплату й строк",
  },
}

export const legalData = {
  updatedAt: LEGAL_STATE_DATE,
  learningRoute: [
    {
      target: "fundament",
      title: "Навчись бачити норму",
      description: "Факт, поняття, умова, доказ і наслідок.",
    },
    {
      target: "kpa",
      title: "Освой хід процедури",
      description: "Від заяви та wezwania до decyzji й odwołania.",
    },
    {
      target: "pobyt",
      title: "Розклади цілі перебування",
      description: "Хто, на якій підставі, з якою реальною метою.",
    },
    {
      target: "praca",
      title: "Додай другий ключ — працю",
      description: "Окремо перевір право перебувати й право працювати.",
    },
    {
      target: "praktyka",
      title: "Тренуйся на документах",
      description: "Wezwania, decyzje, строки, докази й кейси.",
    },
  ],
  caseStudy: {
    profile: {
      name: "Олена · модельна особа",
      subtitle: "Громадянка України, яка живе й працює у Польщі",
      facts: [
        { label: "Перебування", value: "активний PESEL UKR" },
        { label: "Робота", value: "umowa o pracę · pełny etat" },
        { label: "Винагорода", value: "6 500 zł brutto / місяць" },
        {
          label: "Роботодавець",
          value: "польська sp. z o.o., не agencja pracy",
        },
        { label: "Початок роботи", value: "01.07.2026" },
        { label: "Дата аналізу", value: "14.07.2026" },
      ],
      assumption:
        "Для навчального маршруту CUKR припускаємо, що Олена мала активний PESEL UKR 04.06.2025, має безперервний status UKR щонайменше 365 днів і збереже його до видачі карти.",
      baseline:
        "Варіант 0 — поки залишитися на UKR: перебування легальне до 04.03.2027, а робота можлива через своєчасне powiadomienie роботодавця. Це не карта побиту. Якщо PESEL UKR колись видали без пред’явлення документа з фото, дані треба оновити до 31.08.2026.",
    },
    routes: [
      {
        id: "cukr",
        tab: "Маршрут A · CUKR",
        eyebrow: "Спеціальний дозвіл для осіб зі status UKR",
        title: "Karta pobytu CUKR",
        lead: "У нашій моделі це перший маршрут для перевірки. Тут не потрібно доводити працевлаштування: вирішальними є історія та безперервність status UKR.",
        verdict: "Олена відповідає модельним умовам CUKR",
        legalBasis:
          "Art. 42c–42u specustawy ukraińskiej. Заяви приймаються з 04.05.2026 лише через MOS; кінцевий строк подання — 04.03.2027.",
        metrics: [
          { label: "Заява", value: "лише MOS" },
          { label: "Оплати", value: "340 + 100 = 440 zł" },
          { label: "Дозвіл", value: "3 роки" },
          { label: "Ринок праці", value: "без прив’язки до роботодавця" },
        ],
        conditions: [
          "Активний PESEL UKR у день подання заяви.",
          "Активний PESEL UKR був 04.06.2025.",
          "Безперервний status UKR щонайменше 365 днів.",
          "Status UKR залишається активним у день особистого отримання карти.",
        ],
        warning:
          "Подання CUKR припиняє незавершену звичайну справу про pobyt czasowy з силу закону. Якщо у CUKR буде відмова, попередня справа не відновиться автоматично.",
        sources: [S.cukr, S.cukrQa, S.ukraineSpecialCurrent, S.ukraine2026],
        documentRegister: [
          {
            item: "Дійсний закордонний паспорт",
            status: "обов’язково",
            level: "required",
            owner: "Олена · перевірка до MOS і оригінал при odbiorze",
            proves: "Особа та дані документа в реєстрі PESEL",
            law: "Art. 42c, 42g і 42r",
          },
          {
            item: "Активний PESEL UKR та історія status UKR",
            status: "обов’язково",
            level: "required",
            owner: "Працівник легалізації · до подання; organ перевіряє реєстр",
            proves: "UKR зараз, 04.06.2025 і безперервність ≥365 днів",
            law: "Art. 42c",
          },
          {
            item: "Доповнення даних у urząd gminy",
            status: "умовно",
            level: "conditional",
            owner:
              "Олена · перед MOS, якщо бракує паспорта, підпису або відбитків",
            proves: "Повноту даних, без яких MOS не прийме CUKR",
            law: "Перевірка реєстру PESEL / FAQ CUKR",
          },
          {
            item: "Особистий профіль MOS + login.gov.pl",
            status: "обов’язково",
            level: "required",
            owner: "Олена · до заповнення заяви",
            proves: "Особисте подання й можливість електронного підпису",
            law: "Art. 42g; процедура MOS",
          },
          {
            item: "Цифрове фото",
            status: "обов’язково",
            level: "required",
            owner: "Олена · додає в MOS",
            proves: "Дані для персоналізації карти",
            law: "Art. 42g; вимоги UdSC",
          },
          {
            item: "Opłata skarbowa 340 zł",
            status: "обов’язково",
            level: "required",
            owner: "Олена · оплата до подання, доказ у MOS",
            proves: "Виконання фінансової умови провадження",
            law: "Art. 42e і 42s",
          },
          {
            item: "Opłata za kartę 100 zł",
            status: "обов’язково",
            level: "required",
            owner: "Олена · оплата до подання, доказ у MOS",
            proves: "Оплату виготовлення документа",
            law: "Art. 42s",
          },
          {
            item: "UPO + PDF/XML заяви",
            status: "контроль",
            level: "control",
            owner: "Олена / представник · одразу після wysłania",
            proves: "Факт, дату й зміст електронного подання",
            law: "MOS; контроль akt sprawy",
          },
          {
            item: "Powiadomienie PUP про роботу",
            status: "окремий обов’язок",
            level: "external",
            owner: "Роботодавець · до 7 днів від початку роботи",
            proves: "Законність поточної роботи до отримання CUKR",
            law: "Art. 5a ustawy o zatrudnianiu cudzoziemców",
          },
          {
            item: "Підтвердження odbioru карти",
            status: "критично",
            level: "required",
            owner: "Олена · особисто до 60 днів від інформації",
            proves: "Момент виникнення дозволу CUKR",
            law: "Art. 42r",
          },
        ],
        deadlines: [
          {
            period: "до 7 днів",
            trigger: "від фактичного початку роботи",
            action: "Роботодавець подає powiadomienie PUP",
            consequence:
              "Прострочення ставить під ризик законність поточної роботи; CUKR цього не виправляє заднім числом.",
            law: "Art. 5a ustawy o zatrudnianiu cudzoziemców",
          },
          {
            period: "до 04.03.2027",
            trigger: "кінцева дата приймання заяв",
            action: "Надіслати CUKR через MOS",
            consequence:
              "Після цієї дати спеціальний маршрут недоступний, якщо закон не зміниться.",
            law: "Procedura CUKR UdSC",
          },
          {
            period: "180 днів",
            trigger: "від правильної заяви за art. 42g",
            action: "Нормативний строк обробки",
            consequence:
              "Це не гарантія фактичного odbioru; контролюємо повідомлення й akta.",
            law: "Art. 42l",
          },
          {
            period: "понад 30 днів",
            trigger: "одноразовий виїзд до отримання CUKR",
            action: "Не допустити втрати UKR під час очікування",
            consequence:
              "Втрата UKR до odbioru означає невиконання умови CUKR.",
            law: "Правила tymczasowej ochrony + art. 42c",
          },
          {
            period: "14 днів",
            trigger: "від doręczenia odmowy",
            action: "Подати odwołanie через wojewodę",
            consequence:
              "Після пропуску рішення стає остаточним, якщо строк не буде поновлено.",
            law: "Art. 127–129 KPA",
          },
          {
            period: "60 днів",
            trigger: "від інформації про можливість odbioru",
            action: "Особисто отримати карту",
            consequence:
              "Карту анулюють, zezwolenie не виникне, оплати не повернуть.",
            law: "Art. 42r ust. 2",
          },
          {
            period: "15 робочих днів",
            trigger: "від зміни місця проживання після CUKR",
            action: "Повідомити właściwego wojewodę",
            consequence: "Порушення обов’язку власниці CUKR.",
            law: "Art. 42u",
          },
          {
            period: "≥ 6 місяців",
            trigger: "безперервна відсутність у Польщі після CUKR",
            action: "Контролювати тривалість виїзду",
            consequence: "Підстава для cofnięcia zezwolenia CUKR.",
            law: "Art. 42t",
          },
        ],
        exclusions: [
          "Umowa o pracę, ZUS і довідка про дохід не доводять умов CUKR — це документи іншої правової гілки.",
          "Załącznik nr 1 від роботодавця для CUKR не подається.",
          "Окремий візит до wojewody на відбитки не є стандартним етапом CUKR, якщо потрібні дані вже є в реєстрі.",
          "Не називаємо інформацію про готовність карти позитивною decyzją: дозвіл виникає лише при odbiorze.",
        ],
        timeline: [
          {
            when: "До подання",
            title: "Зупинись на статусі, а не на договорі",
            actor: "Олена + працівник легалізації",
            action:
              "Перевіряємо чотири умови CUKR і чи не було подій, що припинили status UKR.",
            documents: [
              "Дійсний закордонний паспорт",
              "Підтвердження PESEL UKR та історії статусу",
              "Дані про перебування й можливі виїзди",
              "Доступ до login.gov.pl",
              "Якщо в реєстрі бракує паспорта, підпису або відбитків — спочатку доповнення даних в urząd gminy",
            ],
            law: "Art. 42c specustawy ukraińskiej + офіційна процедура UdSC",
            result:
              "Якщо хоча б одна умова не виконана, не подаємо CUKR навмання — переходимо до аналізу звичайного дозволу.",
          },
          {
            when: "01–08.07.2026",
            title: "Роботодавець легалізує поточне виконання роботи",
            actor: "Роботодавець",
            action:
              "Подає через praca.gov.pl powiadomienie про доручення роботи громадянці України не пізніше 7 днів від початку роботи.",
            documents: [
              "Umowa o pracę",
              "Дані паспорта та PESEL",
              "Підтвердження wysłania powiadomienia",
            ],
            law: "Спеціальні правила праці громадян України, чинні з 05.03.2026",
            result:
              "Це підтверджує законність поточної роботи, але не є умовою отримання CUKR.",
          },
          {
            when: "День 0",
            title: "Готуємо цифровий пакет",
            actor: "Олена",
            action:
              "Створює особистий обліковий запис MOS, готує цифрове фото та сплачує дві оплати.",
            documents: [
              "Цифрове фото за вимогами",
              "Підтвердження opłaty skarbowej 340 zł",
              "Підтвердження opłaty za kartę 100 zł",
              "Дані з паспорта й PESEL",
            ],
            law: "Офіційна процедура CUKR та FAQ UdSC",
            result:
              "Готовий комплект для електронної заяви; umowa o pracę, ZUS, дохід і Załącznik nr 1 не є умовами CUKR. Оплати при відмові або іншому завершенні не повертаються.",
          },
          {
            when: "День 0",
            title: "Підписуємо й надсилаємо заяву в MOS",
            actor: "Олена особисто",
            action:
              "Заповнює заяву, додає фото й оплати, підписує profilem zaufanym, podpisem osobistym або kwalifikowanym і надсилає.",
            documents: [
              "Електронна заява",
              "Вкладення",
              "UPO — urzędowe poświadczenie odbioru",
              "Збережені PDF/XML заяви",
            ],
            law: "Art. 42g–42i specustawy ukraińskiej; подання CUKR виключно через MOS",
            result:
              "UPO є доказом правильного надсилання. Із поданням незавершена стандартна справа припиняється з силу закону, але до отримання CUKR Олена зберігає UKR.",
          },
          {
            when: "День 0–180",
            title: "Wojewoda перевіряє статус і реєстри",
            actor: "Wojewoda за місцем проживання",
            action:
              "Перевіряє дані в реєстрах і підстави CUKR; за потреби просить усунути недоліки або надати пояснення.",
            documents: [
              "Електронні акти справи",
              "Можливе wezwanie",
              "Відповідь у строк, указаний органом",
            ],
            law: "Art. 42l спеціальної ustawy: 180 днів від правильної заяви; KPA — у невиключеному обсязі",
            result:
              "180 днів — нормативний строк, а не гарантія готової карти. До отримання Олена працює на UKR + powiadomienie; виїзд понад 30 днів може припинити UKR. У типовій повній справі окремого візиту до wojewody для відбитків немає.",
          },
          {
            when: "Негативна гілка",
            title: "Відмову можна оскаржити",
            actor: "Олена + Wojewoda + Szef UdSC",
            action:
              "Якщо wojewoda видає decyzję o odmowie, відлік 14 днів починається від її doręczenia. Odwołanie подається до Szefa UdSC через wojewodę.",
            documents: [
              "Decyzja odmowna з pouczeniem",
              "Доказ дати doręczenia",
              "Odwołanie з аргументами й доказами",
            ],
            law: "Art. 42e specustawy — підстави відмови; art. 127–129 KPA — odwołanie",
            result:
              "Відмова не відновлює звичайну справу, яка припинилася через подання CUKR.",
          },
          {
            when: "Після позитивної перевірки",
            title: "Wojewoda замовляє виготовлення карти",
            actor: "Wojewoda",
            action:
              "Підтверджує виконання умов і передає дані для персоналізації CUKR. На цьому етапі Олена ще не набула спеціального дозволу CUKR.",
            documents: [
              "Інформація про готовність карти",
              "Дійсний паспорт для отримання",
            ],
            law: "Art. 42p–42r specustawy ukraińskiej",
            result:
              "На відміну від звичайної справи, позитивний результат CUKR не виникає через класичну позитивну decyzję — вирішальним буде отримання документа.",
          },
          {
            when: "До 60 днів від повідомлення",
            title: "Особисто отримуємо карту — саме тут виникає CUKR",
            actor: "Олена",
            action:
              "З’являється до urzędu з дійсним паспортом і забирає документ у межах 60 днів від повідомлення.",
            documents: ["Паспорт", "Повідомлення про готовність", "Карта CUKR"],
            law: "Art. 42r specustawy + FAQ CUKR UdSC",
            result:
              "Дозвіл CUKR виникає в день особистого отримання карти й триває до кінця її 3-річної дії. Якщо не забрати її вчасно, документ анулюють, zezwolenie не виникне, оплати не повернуть, а UKR не зміниться на CUKR.",
          },
          {
            when: "Після отримання",
            title: "Контролюємо обов’язки власниці CUKR",
            actor: "Олена",
            action:
              "Повідомляє wojewodę про кожну зміну місця проживання протягом 15 робочих днів і контролює тривалі виїзди.",
            documents: [
              "Підтвердження повідомлення про нову адресу",
              "Історія поїздок",
              "Нова umowa — для трудових справ, але не для зміни CUKR",
            ],
            law: "Art. 42t і 42u specustawy + FAQ CUKR UdSC",
            result:
              "Після CUKR роботодавець не подає powiadomienia PUP. Безперервна відсутність у Польщі щонайменше 6 місяців є підставою для cofnięcia дозволу.",
          },
        ],
      },
      {
        id: "work",
        tab: "Маршрут B · Pobyt i praca",
        eyebrow: "Звичайний єдиний дозвіл на підставі роботи",
        title: "Zezwolenie na pobyt czasowy i pracę",
        lead: "Цей маршрут потрібний, коли CUKR недоступний або свідомо не обирається. Umowa o pracę та зайнятість є центральними доказами мети, але для українця, звільненого від zezwolenia na pracę, decyzja не завжди прив’язує працю до одного роботодавця.",
        verdict: "Можливий маршрут; межі праці читаємо з конкретної decyzji",
        legalBasis:
          "Art. 45 ustawy z 23.01.2026 дозволяє особі зі status UKR подати заяву; матеріальні умови оцінюються за art. 114–126 Ustawy o cudzoziemcach.",
        metrics: [
          { label: "Заява", value: "лише MOS" },
          { label: "Оплати", value: "440 + 100 = 540 zł" },
          { label: "Дозвіл", value: "до 3 років" },
          { label: "Ринок праці", value: "decyzja + підстава звільнення" },
        ],
        conditions: [
          "Мета роботи обґрунтовує перебування в Польщі понад 3 місяці.",
          "Є медичне страхування; при umowa o pracę це зазвичай випливає із соціального страхування.",
          "Місячна винагорода не нижча за чинну мінімальну зарплату незалежно від wymiaru czasu pracy.",
          "Załącznik nr 1 і договір послідовно описують реального роботодавця, посаду, час праці, вид договору та винагороду; орган також може перевіряти реальність діяльності й ризик праці на користь третьої особи.",
        ],
        warning:
          "Надання звичайного дозволу припиняє status UKR. Але для громадян України перехідний режим powiadomienia PUP діє ще 3 роки від 05.03.2026; не вважай автоматично, що кожна decyzja містить одного роботодавця або що через саме надання дозволу треба нове powiadomienie.",
        sources: [
          S.aliens,
          S.ukraine2026,
          S.ukraineChanges,
          S.mosWork,
          S.mosWorkQa,
        ],
        documentRegister: [
          {
            item: "Електронна заява MOS",
            status: "обов’язково",
            level: "required",
            owner: "Олена · заповнює та підписує",
            proves: "Żądanie надання конкретного дозволу й дані заявниці",
            law: "Art. 105–107, 106c–106l",
          },
          {
            item: "Скани всіх сторінок дійсного паспорта",
            status: "обов’язково",
            level: "required",
            owner: "Олена · додає в MOS; оригінал показує особисто",
            proves: "Особу, громадянство, подорожі та штампи",
            law: "Art. 106e; процедура MOS",
          },
          {
            item: "Цифрове фото",
            status: "обов’язково",
            level: "required",
            owner: "Олена · при поданні",
            proves: "Дані для документа",
            law: "Форма wniosku / MOS",
          },
          {
            item: "Załącznik nr 1",
            status: "обов’язково",
            level: "required",
            owner: "Роботодавець · електронно заповнює й підписує",
            proves: "Роботодавця, посаду, договір, час і винагороду",
            law: "Art. 106d; art. 114 і 118",
          },
          {
            item: "Umowa o pracę",
            status: "основний доказ",
            level: "required",
            owner: "Олена + роботодавець · актуальна на момент рішення",
            proves: "Реальну мету перебування, вид і умови зайнятості",
            law: "Art. 114",
          },
          {
            item: "Медичне / соціальне страхування",
            status: "за обставинами",
            level: "conditional",
            owner: "Олена / роботодавець · ZUS або інший належний доказ",
            proves: "Виконання умови страхування",
            law: "Art. 114 ust. 1 pkt 1; ust. 4a",
          },
          {
            item: "KRS/CEIDG, повноваження підписанта",
            status: "перевірка",
            level: "control",
            owner: "Роботодавець · реєстр або додаток, якщо потрібен",
            proves: "Існування podmiotu та право діяти від його імені",
            law: "Контроль reprezentacji",
          },
          {
            item: "Pełnomocnictwo",
            status: "умовно",
            level: "conditional",
            owner: "Той, хто діє через представника",
            proves: "Право представника підписати або вести справу",
            law: "Art. 32–33 KPA + правила MOS",
          },
          {
            item: "Кваліфікації / tłumaczenie przysięgłe",
            status: "умовно",
            level: "conditional",
            owner: "Олена · для регульованої професії або іноземного документа",
            proves: "Право виконувати конкретну професію і зміст доказу",
            law: "Art. 114 + правила доказів",
          },
          {
            item: "Opłata skarbowa 440 zł",
            status: "обов’язково",
            level: "required",
            owner: "Олена · до подання, доказ у MOS",
            proves: "Оплату розгляду заяви",
            law: "Офіційна tabela opłat UdSC",
          },
          {
            item: "Opłata za kartę 100 zł",
            status: "обов’язково",
            level: "required",
            owner: "Олена · доказ у пакеті MOS",
            proves: "Оплату виготовлення карти",
            law: "Офіційна tabela opłat UdSC",
          },
          {
            item: "UPO + PDF/XML і перелік вкладень",
            status: "контроль",
            level: "control",
            owner: "Олена / представник · одразу після wysłania",
            proves: "Дату, зміст і комплект електронного подання",
            law: "MOS; контроль akt sprawy",
          },
          {
            item: "Powiadomienie PUP",
            status: "окремий обов’язок",
            level: "external",
            owner: "Роботодавець · поточна робота і визначені зміни",
            proves: "Законність праці на підставі правил для громадян України",
            law: "Art. 5a + przepisy przejściowe",
          },
          {
            item: "Oryginał паспорта + odciski + wzór podpisu",
            status: "особиста дія",
            level: "required",
            owner: "Олена · на wezwanie не коротше 7 днів",
            proves: "Особу та виконання формальних умов процедури",
            law: "Art. 106e і 106i",
          },
        ],
        deadlines: [
          {
            period: "до 7 днів",
            trigger: "від початку роботи",
            action: "Роботодавець подає powiadomienie PUP",
            consequence:
              "Подання pobytowego wniosku не легалізує попередню або поточну роботу саме по собі.",
            law: "Art. 5a ustawy o zatrudnianiu cudzoziemców",
          },
          {
            period: "мін. 7 днів",
            trigger: "wezwanie до usunięcia braków formalnych",
            action: "Виправити формальні недоліки",
            consequence: "Невиконання → pozostawienie wniosku bez rozpoznania.",
            law: "Art. 64 §2 KPA",
          },
          {
            period: "мін. 7 днів",
            trigger: "wezwanie до особистої явки",
            action: "Паспорт, odciski palców, wzór podpisu",
            consequence:
              "Невиконання правильного wezwania → umorzenie postępowania.",
            law: "Art. 106e і 106i",
          },
          {
            period: "мін. 14 днів",
            trigger: "wezwanie про матеріальні докази",
            action: "Подати документи для умов дозволу",
            consequence:
              "Organ вирішує за наявним матеріалом; недоведена умова може вести до odmowy.",
            law: "Art. 106f",
          },
          {
            period: "60 днів",
            trigger: "після формальної повноти та етапу art. 106f",
            action: "Нормативний строк першої інстанції",
            consequence:
              "Не рахується автоматично від wysłania; фіксуємо момент старту окремо.",
            law: "Art. 112a",
          },
          {
            period: "14 днів",
            trigger: "від doręczenia decyzji odmownej",
            action: "Odwołanie до Szefa UdSC через wojewodę",
            consequence:
              "Пропуск закриває звичайний шлях апеляції, якщо строк не поновлено.",
            law: "Art. 127–129 KPA",
          },
          {
            period: "90 днів",
            trigger: "належно подане odwołanie",
            action: "Нормативний строк другої інстанції",
            consequence:
              "Це строк закону, а не гарантія конкретної календарної дати.",
            law: "Art. 112a ust. 4",
          },
          {
            period: "15 робочих днів",
            trigger: "від втрати роботи",
            action: "Письмово повідомити właściwego wojewodę",
            consequence:
              "Своєчасність має значення для захисного механізму й ризику cofnięcia.",
            law: "Art. 121 і 123",
          },
          {
            period: "до 7 днів",
            trigger: "від визначених змін праці",
            action: "Нове powiadomienie PUP за потреби",
            consequence:
              "Тригери: вид договору, посада/вид роботи, зменшення часу або винагороди.",
            law: "Art. 5a + przepisy przejściowe",
          },
        ],
        exclusions: [
          "Не додаємо весь пакет KRS, ZUS, податків і фінансів роботодавця автоматично: спочатку встановлюємо, яку умову або сумнів він має довести.",
          "Не вважаємо кожне wezwanie brakiem formalnym: art. 64 KPA, art. 106e і art. 106f мають різні строки та наслідки.",
          "Не вважаємо, що decyzja українця завжди прив’язана до одного роботодавця: перевіряємо exemption і treść rozstrzygnięcia за art. 118.",
          "Не подаємо нове powiadomienie PUP лише через саме отримання дозволу, якщо закон не визначає відповідного тригера.",
        ],
        timeline: [
          {
            when: "До подання",
            title: "Перевіряємо два ключі: pobyt + praca",
            actor: "Олена + роботодавець",
            action:
              "Окремо підтверджуємо законність перебування за status UKR і законність роботи через powiadomienie роботодавця.",
            documents: [
              "Паспорт і PESEL UKR",
              "Umowa o pracę",
              "Підтвердження powiadomienia через praca.gov.pl",
              "Перевірка фактичної дати початку роботи",
            ],
            law: "Спеціальні правила для громадян України + art. 114 Ustawy o cudzoziemcach",
            result:
              "Саме подання заяви не виправляє попередню нелегальну роботу і не замінює чинної підстави працювати.",
          },
          {
            when: "День −7 до 0",
            title: "Будуємо матрицю умова → факт → доказ",
            actor: "Працівник легалізації",
            action:
              "Зіставляє кожну умову art. 114 з конкретним фактом і документом; перевіряє узгодженість даних роботодавця.",
            documents: [
              "Umowa o pracę",
              "Дані KRS/CEIDG роботодавця",
              "Інформація про посаду, pełny etat і 6 500 zł brutto",
              "Документи особи, що підписує за spółkę",
              "За потреби pełnomocnictwo",
            ],
            law: "Art. 114 та 118 Ustawy o cudzoziemcach",
            result:
              "До MOS потрапляють однакові дані в договорі, заяві й Załączniku nr 1.",
          },
          {
            when: "День −3 до 0",
            title: "Роботодавець заповнює Załącznik nr 1",
            actor: "Роботодавець / уповноважена особа",
            action:
              "Отримує з MOS посилання, заповнює електронний додаток і підписує його допустимим електронним підписом.",
            documents: [
              "Załącznik nr 1",
              "Podpis zaufany, osobisty або kwalifikowany",
              "Pełnomocnictwo, якщо підписує представник",
            ],
            law: "Електронна процедура MOS з 27.04.2026",
            result:
              "Олена не може правильно завершити свою заяву, доки роботодавець не надішле підписаний додаток.",
          },
          {
            when: "День 0",
            title: "Олена подає заяву через MOS",
            actor: "Олена",
            action:
              "Перевіряє Załącznik nr 1, додає цифрове фото, скани всіх сторінок паспорта, докази та підтвердження оплат 440 zł і 100 zł, підписує й надсилає заяву.",
            documents: [
              "Електронна заява",
              "Załącznik nr 1",
              "Цифрове фото",
              "Скани всіх сторінок дійсного паспорта",
              "Umowa o pracę та потрібні докази",
              "Підтвердження 440 zł і 100 zł",
              "UPO",
            ],
            law: "Art. 105–107 і 106c–106l Ustawy o cudzoziemcach; MOS",
            result:
              "Зберігаємо UPO, PDF/XML і повну копію вкладень як контрольний пакет справи.",
          },
          {
            when: "Після подання",
            title: "Візит: паспорт, відбитки, зразок підпису",
            actor: "Олена + urząd wojewódzki",
            action:
              "На wezwanie зі строком щонайменше 7 днів з’являється особисто, показує оригінал паспорта, здає відбитки пальців і зразок підпису.",
            documents: [
              "Оригінал паспорта",
              "Wezwanie з датою візиту",
              "Оригінали документів, якщо їх просить organ",
            ],
            law: "Art. 106e і 106i Ustawy o cudzoziemcach",
            result:
              "Невиконання правильного wezwania до особистої дії веде до umorzenia postępowania — це не звичайна відмова по суті.",
          },
          {
            when: "У ході справи",
            title: "Не змішуємо три різні wezwania",
            actor: "Олена + працівник легалізації",
            action:
              "Формальні недоліки: мінімум 7 днів. Особиста явка: мінімум 7 днів. Докази матеріальних умов: мінімум 14 днів. Для кожного листа окремо виписуємо żądanie, строк і skutek.",
            documents: [
              "Wezwanie",
              "Таблиця відповідей пункт за пунктом",
              "Доказ для кожної матеріальної умови",
              "Підтвердження подання відповіді",
            ],
            law: "Art. 64 §2 KPA; art. 106e, 106f і 106i Ustawy o cudzoziemcach",
            result:
              "Формальні недоліки без відповіді → pozostawienie bez rozpoznania; невиконана особиста дія → umorzenie; недоведена умова → рішення за наявним матеріалом, часто odmowa.",
          },
          {
            when: "Після комплектності",
            title: "Відраховуємо строк рішення правильно",
            actor: "Wojewoda",
            action:
              "Розглядає матеріальні умови дозволу. Нормативний 60-денний строк рахується після формальної комплектності та подання документів за art. 106f або спливу строку на них, а не від кліку «wyślij».",
            documents: [
              "Комплектні акти",
              "Поточний Załącznik nr 1",
              "За потреби оновлені документи праці",
            ],
            law: "Art. 112a Ustawy o cudzoziemcach",
            result:
              "Дата рішення не гарантується навчальним таймлайном; затримку аналізуємо через спеціальні норми та KPA.",
          },
          {
            when: "Негативна гілка",
            title: "На odwołanie є 14 днів",
            actor: "Олена + Wojewoda + Szef UdSC",
            action:
              "Від decyzji odmownej подаємо odwołanie до Szefa UdSC через wojewodę, який видав рішення.",
            documents: [
              "Decyzja odmowna",
              "Доказ дати doręczenia",
              "Odwołanie",
              "Додаткові докази й zarzuty",
            ],
            law: "Art. 22 ust. 2 Ustawy o cudzoziemcach; art. 127–129 KPA",
            result:
              "Основний строк — 14 днів від doręczenia decyzji; pouczenie перевіряємо разом із KPA. Нормативний строк другої інстанції — 90 днів за art. 112a ust. 4.",
          },
          {
            when: "Після остаточної позитивної decyzji",
            title: "Дозвіл уже виник; читаємо його межі",
            actor: "Олена",
            action:
              "Після набрання рішенням остаточності перевіряє, чи вказані роботодавець, посада, винагорода, час і вид договору, чи — через звільнення від zezwolenia na pracę — записано право працювати на цій підставі.",
            documents: [
              "Ostateczna decyzja",
              "Повідомлення про готовність карти",
              "Карта побиту як документ дозволу",
            ],
            law: "Art. 118 Ustawy o cudzoziemcach",
            result:
              "Звичайний дозвіл виникає з остаточної позитивної decyzji, а карта лише його документує. UKR припиняється. Якщо art. 118 не вписує конкретних умов через звільнення, не вигадуємо прив’язку, якої немає в rozstrzygnięciu.",
          },
          {
            when: "Після отримання карти",
            title: "Контролюємо зміни й втрату роботи",
            actor: "Олена + роботодавець",
            action:
              "Спочатку читаємо rozstrzygnięcie і підставу звільнення від zezwolenia na pracę, потім art. 119–120c. Про втрату роботи повідомляємо właściwego wojewodę письмово протягом 15 робочих днів.",
            documents: [
              "Нова або змінена umowa",
              "Повідомлення про втрату роботи",
              "Заява про зміну дозволу або новий дозвіл — залежно від ситуації",
            ],
            law: "Art. 119–121 Ustawy o cudzoziemcach",
            result:
              "Не вимагаємо зміни дозволу механічно, якщо конкретні умови праці не вписані через exemption. Для powiadomienia PUP перевіряємо тригери: зміна виду договору, посади/виду роботи, зменшення часу або винагороди.",
          },
        ],
      },
    ],
  },
  groups: defineLegalTextContent(
    [
      {
        id: "fundament",
        title: "Основа правового мислення",
        shortTitle: "Основа",
        color: "#587267",
        description:
          "Спочатку класифікуй факти. Лише потім відкривай закон і шукай статтю.",
        nodes: [
          {
            ...startCaseMapNode,
            related: ["legal-anatomy", "person-status", "evidence-matrix"],
          },
          {
            ...legalAnatomyMapNode,
            related: ["special-vs-kpa", "evidence-matrix", "decision-reading"],
          },
          {
            ...specialVsKpaMapNode,
            related: ["kpa-principles", "temporary-common", "work-entry"],
          },
          {
            ...personStatusMapNode,
            related: ["entry-current-basis", "goal-of-stay", "two-keys"],
          },
          {
            ...goalOfStayMapNode,
            related: ["temporary-common", "temporary-goals", "two-keys"],
          },
          {
            ...twoKeysMapNode,
            related: ["entry-current-basis", "work-entry", "pending-stay"],
          },
        ],
      },
      {
        id: "kpa",
        title: "KPA — хід адміністративної справи",
        shortTitle: "KPA",
        color: "#385e72",
        description:
          "Процедурний хребет: organ, strona, doręczenie, termin, dowód, decyzja та контроль.",
        nodes: [
          {
            ...kpaPrinciplesMapNode,
            related: ["evidence", "decision-reading", "inactivity"],
            children: [
              principleLegalityMapNode,
              principleTrustMapNode,
              principleParticipationMapNode,
              principleTwoInstanceMapNode,
            ],
          },
          organPartyMapNode,
          {
            ...initiationMapNode,
            related: ["deadlines-delivery", "wezwanie", "mos-procedure"],
          },
          {
            ...deadlinesDeliveryMapNode,
          },
          {
            ...wezwanieMapNode,
            related: ["evidence", "wezwanie-workflow", "outsourcing-case"],
          },
          {
            ...evidenceMapNode,
            related: [
              "evidence-matrix",
              "decision-reading",
              "outsourcing-case",
            ],
          },
          {
            ...decisionAppealMapNode,
            children: [decisionReadingMapNode, appealMapNode, complaintMapNode],
          },
          {
            ...extraordinaryWsaMapNode,
            children: [reopeningMapNode, invalidityMapNode, wsaMapNode],
          },
        ],
      },
      {
        id: "pobyt",
        title: "Перебування і його цілі",
        shortTitle: "Pobyt",
        color: "#9e6739",
        description:
          "В’їзд, поточна підстава, ціль понад 3 місяці та наслідки зміни життєвої ситуації.",
        nodes: [
          {
            id: "entry-current-basis",
            title: "В’їзд і поточна підстава",
            polish: "wjazd i legalny pobyt",
            summary:
              "Розділяй право в’їзду, право перебування та право повторного в’їзду. Віза C, віза D, ruch bezwizowy та karta pobytu мають різну логіку.",
            why: "Перш ніж готувати нову заяву, треба знати, на якій підставі особа перебуває сьогодні й до якої дати.",
            checkpoints: [
              "Який документ був підставою в’їзду?",
              "Скільки днів використано?",
              "Чи є заборона/відмова?",
              "Чи виїзд під час процедури дозволить повернутися?",
            ],
            documents: [
              "паспорт",
              "віза",
              "штампи/дані перетину",
              "карта pobytu",
              "рішення",
              "довідка про trwającą procedurę",
            ],
            sources: [S.aliens, S.schengen, S.udscVisa],
            children: [
              {
                id: "visa",
                title: "Wiza C / D",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("58", "97", { start: "art. 58", end: "97" })} ustawy o cudzoziemcach`,
                summary:
                  "Перевір rodzaj, cel, okres ważności, liczbę wjazdów, використані дні та те, чи конкретна віза дозволяє працювати.",
                sources: [S.aliens, S.udscVisa],
              },
              {
                id: "visa-free",
                title: "Ruch bezwizowy",
                polish: "90/180",
                summary:
                  "Дозволений короткий pobyt не означає автоматичного права до праці. Рахуй дні в рухомому 180-денному періоді й перевір інші підстави.",
                sources: [S.schengen, S.aliens],
              },
            ],
          },
          {
            id: "mos-procedure",
            title: "Подання через MOS",
            polish: "Moduł Obsługi Spraw · від 27.04.2026",
            summary:
              "З 27 квітня 2026 року заяви на pobyt czasowy, stały та rezydenta UE загалом подаються електронно через MOS, з передбаченими законом винятками.",
            why: "Спосіб подання став частиною юридичної правильності заяви. Паперова форма після цієї дати може не запустити процедуру, якщо не діє виняток.",
            checkpoints: [
              "Яка дата подання?",
              "Чи діє обов’язок MOS або виняток?",
              "Чи додані всі сторінки паспорта, фото й додатки?",
              "Чи заява підписана електронно?",
              "Чи виконано wezwanie до особистої явки?",
            ],
            steps: [
              "Заповни електронну форму.",
              "Додай фото, скани паспорта, докази й оплату.",
              "Підпиши та відправ.",
              "Збережи urzędowe poświadczenie.",
              "Виконай wezwanie: паспорт, odciski, wzór podpisu.",
            ],
            sources: [S.aliensChange, S.mos, S.mosQa],
            related: ["initiation", "pending-stay", "document-matrix"],
          },
          {
            id: "pending-stay",
            title: "Перебування під час процедури",
            polish: foreignersLaw.text`${foreignersLaw.article("108", "art. 108")}, ${foreignersLaw.article("206", "206")}, ${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} ustawy o cudzoziemcach`,
            summary:
              "Вчасно і правильно розпочата процедура може легалізувати перебування до остаточного завершення справи, але не створює автоматично права повторного в’їзду чи нового права до праці.",
            why: "Фраза «має штамп» надто спрощує ситуацію. Завжди окремо перевіряй skuteczność wniosku, pobyt, praca та możliwość powrotu.",
            checkpoints: [
              "Чи заява подана під час легального pobytu?",
              "Чи усунено braki formalne в строк?",
              "Яке право до праці діяло перед поданням?",
              "Чи особа планує виїзд?",
            ],
            sources: [S.aliens, S.work],
            related: ["two-keys", "mos-procedure", "deadlines-delivery"],
          },
          {
            id: "ukraine-routes-2026",
            title: "Україна 2026: UKR → CUKR чи звичайний pobyt",
            polish: "status UKR / karta CUKR / zezwolenie zwykłe",
            summary:
              "Для особи з PESEL UKR спочатку існують три окремі правові варіанти: залишатися на тимчасовому захисті, перейти на CUKR або подати одну з дозволених звичайних заяв. Робота за umowa o pracę не обирає маршрут автоматично.",
            why: "Помилка в цій розвилці змінює умови, документи, момент виникнення дозволу, право до праці та долю status UKR. Подання CUKR також припиняє незавершену стандартну справу.",
            checkpoints: [
              "Чи PESEL UKR активний зараз і був активний 04.06.2025?",
              "Чи status UKR безперервний щонайменше 365 днів?",
              "Чи дані паспорта, підпис і відбитки повні в реєстрі?",
              "Чи вже триває інша справа pobytowa?",
              "Чи клієнт розуміє момент втрати UKR у кожному маршруті?",
            ],
            steps: [
              "Зафіксуй поточний UKR і законність роботи через powiadomienie.",
              "Перевір чотири умови CUKR та ризик припинення іншої справи.",
              foreignersLaw.text`Окремо перевір доступність звичайної заяви за ${foreignersLaw.external("art. 45", FOREIGNERS_2026_CHANGE_URL)} ustawy z 23.01.2026.`,
              "Порівняй момент виникнення права: odbiór CUKR проти ostatecznej decyzji zwykłej.",
              "Обери маршрут лише після письмової матриці наслідків.",
            ],
            documents: [
              "паспорт і дані PESEL",
              "історія status UKR",
              "дати виїздів",
              "powiadomienie PUP",
              "інформація про поточні справи",
              "umowa o pracę — для звичайного маршруту, не для CUKR",
            ],
            sources: [
              S.ukraineSpecialCurrent,
              S.ukraine2026,
              S.cukr,
              S.cukrQa,
              S.ukraineChanges,
            ],
            related: ["stay-work", "mos-procedure", "two-keys"],
            children: [
              {
                id: "ukr-baseline-2026",
                title: "Залишитися на status UKR",
                polish: "tymczasowa ochrona do 04.03.2027",
                summary:
                  "Заява на карту не є обов’язковою лише через umowa o pracę. До 04.03.2027 status UKR може легалізувати перебування, а роботу — powiadomienie роботодавця, якщо всі умови збережені.",
                checkpoints: [
                  "Чи UKR активний?",
                  "Чи не було виїзду понад 30 днів?",
                  "Чи powiadomienie подано в 7-денний строк?",
                  "Чи треба оновити документ із фото до 31.08.2026?",
                ],
                sources: [S.ukraine2026, S.ukrainianWork],
              },
              {
                id: "cukr-route-2026",
                title: "Перейти на CUKR",
                polish: foreignersLaw.text`${foreignersLaw.external("art. 42c", UKRAINE_SPECIAL_ACT_URL)}–${foreignersLaw.external("42u", UKRAINE_SPECIAL_ACT_URL)} specustawy`,
                summary:
                  "Спеціальний трирічний дозвіл без доказування роботи. Подання лише MOS до 04.03.2027; дозвіл виникає в день особистого отримання карти, не з позитивної decyzji.",
                checkpoints: [
                  "Чотири умови status UKR",
                  "Оплати 340 + 100 zł до подання",
                  "Фото й повні дані в PESEL",
                  "Odbiór до 60 днів",
                  "Адреса — повідомлення до 15 робочих днів",
                ],
                sources: [S.ukraineSpecialCurrent, S.cukr, S.cukrQa],
                related: ["ukraine-routes-2026"],
              },
              {
                id: "ukraine-ordinary-2026",
                title: "Подати звичайний pobyt czasowy i pracę",
                polish: foreignersLaw.text`${foreignersLaw.external("art. 45", FOREIGNERS_2026_CHANGE_URL)} Dz.U. 2026 poz. 203 + ${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })}`,
                summary:
                  "Особа з UKR може подати цю заяву завдяки спеціальному винятку, але мусить виконати повні матеріальні умови Ustawy o cudzoziemcach. UKR триває до надання звичайного дозволу.",
                checkpoints: [
                  "MOS і Załącznik nr 1",
                  "Умова роботи понад 3 місяці",
                  "Страхування й мінімальна винагорода",
                  "Три різні види wezwania",
                  "Treść decyzji та exemption від zezwolenia na pracę",
                ],
                sources: [S.ukraine2026, S.aliens, S.mosWork, S.mosWorkQa],
                related: ["stay-work", "ukraine-routes-2026"],
              },
            ],
          },
          {
            id: "temporary-common",
            title: "Pobyt czasowy — спільні правила",
            polish: foreignersLaw.text`${foreignersLaw.articleRange("98", "113a", { start: "art. 98", end: "113a" })} ustawy o cudzoziemcach`,
            summary:
              "Дозвіл на тимчасове перебування пов’язаний із конкретною метою понад 3 місяці й зазвичай надається максимум до 3 років. Спільні статті регулюють початок, відмову, відкликання, organ та процедуру.",
            checkpoints: [
              "Чи мета триває понад 3 місяці?",
              "Чи немає odmowy wszczęcia?",
              "Чи виконано загальні та спеціальні умови?",
              "Який обов’язок повідомлення після зміни підстави?",
            ],
            sources: [S.aliens, S.aliensChange],
            related: ["goal-of-stay", "temporary-goals", "mos-procedure"],
          },
          {
            id: "temporary-goals",
            title: "Головні цілі pobytu czasowego",
            polish: "rozdziały 2–11 ustawy o cudzoziemcach",
            summary:
              "Кожна ціль має власний набір позитивних умов, відмов, документів, обов’язків і правил доступу до праці. Порівнюй їх за однаковим шаблоном.",
            why: "Цілі не мають універсального рейтингу. «Пріоритет» залежить від правдивих фактів і того, яка спеціальна підстава найбільш точно їх охоплює.",
            sources: [S.aliens],
            children: [
              {
                id: "stay-work",
                title: "Pobyt czasowy i praca",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })}`,
                summary: foreignersLaw.text`Єдиний дозвіл, у якому мета перебування випливає з роботи. Аналіз складається з позитивних умов ${foreignersLaw.article("114", "art. 114")}, odmowy wszczęcia ${foreignersLaw.article("116", "art. 116")}, відмов по суті ${foreignersLaw.articleRange("117", "117a", { start: "art. 117", end: "117a" })}, treści decyzji ${foreignersLaw.article("118", "art. 118")} та правил зміни/втрати роботи ${foreignersLaw.articleRange("119", "123", { start: "art. 119", end: "123" })}.`,
                why: foreignersLaw.text`Назва процедури не означає, що кожна decyzja однаково прив’язана до роботодавця. Для особи, звільненої від zezwolenia na pracę, ${foreignersLaw.article("118", "art. 118")} може не вписувати конкретних умов — вирішальне rozstrzygnięcie, а не шаблон.`,
                checkpoints: [
                  "Чи мета роботи обґрунтовує pobyt понад 3 місяці?",
                  "Чи є страхування та мінімальна місячна винагорода?",
                  "Хто реальний роботодавець і хто фактично керує працею?",
                  "Чи podmiot веде реальну діяльність і має засоби виконувати обов’язки?",
                  "Чи діє exemption від zezwolenia na pracę?",
                  "Що саме записано в rozstrzygnięciu decyzji?",
                ],
                steps: [
                  foreignersLaw.text`Розклади ${foreignersLaw.article("114", "art. 114")} на окремі умови й докази.`,
                  "Перевір odmowę wszczęcia до аналізу merits.",
                  "Зістав umowę, Załącznik nr 1 і фактичну організацію праці.",
                  foreignersLaw.text`Оціни ризики ${foreignersLaw.articleRange("117", "117a", { start: "art. 117", end: "117a" })}, зокрема роботу на користь третьої особи.`,
                  "Після decyzji окремо випиши її межі, obowiązki і тригери зміни.",
                ],
                documents: [
                  "wniosek MOS",
                  "Załącznik nr 1",
                  "umowa o pracę",
                  "паспорт і фото",
                  "страхування/ZUS за потреби",
                  "оплати",
                  "докази реальної діяльності або представництва — якщо це спірна умова",
                  "UPO та akta sprawy",
                ],
                sources: [S.aliens, S.work, S.mosWork, S.mosWorkQa],
                related: [
                  "outsourcing-case",
                  "work-entry",
                  "ukraine-ordinary-2026",
                  "mos-procedure",
                ],
              },
              {
                id: "blue-card",
                title: "Niebieska Karta UE",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "art. 127", end: "138" })}`,
                summary:
                  "Підстава для роботи, що вимагає високих кваліфікацій; після реформи 2025 року перевіряй актуальні умови, мобільність і treść decyzji.",
                sources: [S.aliens],
              },
              {
                id: "business-stay",
                title: "Działalność gospodarcza",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "art. 142", end: "143" })}`,
                summary:
                  "Сам факт реєстрації компанії не достатній. Закон перевіряє реальність і результати діяльності або здатність виконати встановлені умови.",
                sources: [S.aliens],
              },
              {
                id: "study-research",
                title: "Studia, badania, staż",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "art. 144", end: "157f" })}`,
                summary:
                  "Окремі підстави для навчання, mobilności studenta, досліджень і стажу; важливі статус установи, мета та достатні засоби.",
                sources: [S.aliens],
              },
              {
                id: "family-stay",
                title: "Rodzina",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "art. 158", end: "169" })}`,
                summary:
                  "Підстави залежать від статусу особи, з якою відбувається połączenie, реальності сімейного зв’язку та виконання спеціальних умов.",
                sources: [S.aliens],
              },
              {
                id: "other-stay",
                title: "Інші обставини",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "art. 170", end: "194" })}`,
                summary:
                  "Окремі режими охоплюють, зокрема, жертв торгівлі людьми, короткотривалі обставини, сезонну роботу та інші підстави.",
                sources: [S.aliens],
              },
            ],
          },
          {
            id: "permanent-resident",
            title: "Pobyt stały та rezydent UE",
            polish: foreignersLaw.text`${foreignersLaw.article("195", "art. 195")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} ustawy o cudzoziemcach`,
            summary: foreignersLaw.text`Це дві різні безстрокові підстави. Pobyt stały залежить від конкретної категорії з ${foreignersLaw.article("195", "art. 195")}, а rezydent UE — головно від п’ятирічного перебування, доходу, страхування та польської мови.`,
            checkpoints: [
              "Яка точна підстава pobytu stałego?",
              "Як рахуються 5 років для rezydenta UE?",
              "Які періоди не зараховуються або рахуються частково?",
              "Чи виконано умови доходу, страхування й мови?",
            ],
            sources: [S.aliens, S.udscResident],
            children: [
              {
                id: "permanent",
                title: "Pobyt stały",
                polish: foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "art. 195", end: "206" })}`,
                summary:
                  "Перевір конкретну категорію, odmowę wszczęcia, odmowę, cofnięcie, właściwość та електронну процедуру.",
                sources: [S.aliens],
              },
              {
                id: "long-term-eu",
                title: "Rezydent długoterminowy UE",
                polish: foreignersLaw.text`${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)}`,
                summary:
                  "Потрібні належно пораховані 5 років, стабільний і регулярний дохід, страхування та підтвердження знання польської мови з урахуванням винятків.",
                sources: [S.aliens, S.udscResident],
              },
            ],
          },
        ],
      },
      {
        id: "praca",
        title: "Право до праці",
        shortTitle: "Praca",
        color: "#7f4c42",
        description:
          "Хто може працювати, на яких умовах і хто фактично відповідає за організацію праці.",
        nodes: [
          {
            id: "work-entry",
            title: "Карта доступу до праці",
            polish: workLaw.text`${workLaw.article("3", "art. 3")} i 6 ustawy z 20.03.2025`,
            summary:
              "Спочатку перевір, чи особа має вільний доступ до ринку праці. Якщо ні — який інструмент потрібен: zezwolenie, oświadczenie, praca sezonowa або інша спеціальна підстава.",
            checkpoints: [
              "Чи статус особи звільняє від дозволу?",
              "Яка підстава pobytu?",
              "Хто доручає роботу?",
              "Який тип і місце роботи?",
              "Чи умови відповідають документу?",
            ],
            steps: [
              "Перевір pobyt.",
              workLaw.text`Перевір ${workLaw.article("3", "art. 3")} — доступ без дозволу.`,
              "Якщо потрібна легалізація — вибери інструмент за видом праці.",
              "Порівняй faktyczne warunki з документом.",
            ],
            sources: [S.work, S.workChange],
            related: ["two-keys", "stay-work", "employer-duties"],
          },
          {
            id: "employer-duties",
            title: "Обов’язки роботодавця",
            polish: workLaw.text`${workLaw.articleRange("4", "5", { start: "art. 4", end: "5" })}, ${workLaw.article("17", "17")}, ${workLaw.articleRange("19", "20", { start: "19", end: "20" })} ustawy z 20.03.2025`,
            summary:
              "Podmiot powierzający pracę перевіряє документ pobytowy, укладає письмову умову, надає зрозумілу версію, зберігає документи та виконує електронні повідомлення.",
            why: "Легальність праці — це не лише отримання дозволу. Фактична umowa, wynagrodzenie, wymiar czasu й обов’язкові повідомлення мають відповідати заявленим умовам.",
            checkpoints: [
              "Чи є копія чинного документа pobytowego?",
              "Чи cudzoziemiec розуміє текст умови?",
              "Чи копію умови подано до системи, коли це потрібно?",
              "Чи повідомлено про початок/перерву/закінчення?",
            ],
            documents: [
              "документ pobytowy",
              "письмова umowa",
              "зрозумілий переклад/версія",
              "електронні підтвердження повідомлень",
              "доказ виплат і ZUS",
            ],
            sources: [S.work, S.workChange],
          },
          {
            id: "work-instruments",
            title: "Інструменти легалізації праці",
            polish: "zezwolenie, oświadczenie, praca sezonowa",
            summary:
              "Різні моделі праці мають окремі процедури. Не використовуй oświadczenie або звичайний дозвіл лише тому, що він знайоміший.",
            sources: [S.work],
            children: [
              {
                id: "work-permit",
                title: "Zezwolenie — polski podmiot",
                polish: workLaw.text`${workLaw.articleRange("26", "34", { start: "art. 26", end: "34" })}`,
                summary:
                  "Процедура для роботи, яку доручає польський суб’єкт; у дозволі фіксуються ключові умови, а стороною справи є роботодавець.",
                sources: [S.work],
              },
              {
                id: "declaration",
                title: "Oświadczenie",
                polish: workLaw.text`${workLaw.articleRange("61", "71", { start: "art. 61", end: "71" })}`,
                summary:
                  "Спрощена електронна процедура лише в межах передбачених законом громадянств, робіт і умов; перевір реєстрацію та фактичний початок.",
                sources: [S.work],
              },
              {
                id: "seasonal",
                title: "Praca sezonowa",
                polish: workLaw.text`${workLaw.articleRange("45", "60", { start: "art. 45", end: "60" })}`,
                summary:
                  "Окремий режим для визначених сезонних видів діяльності; не ототожнюй із будь-якою короткою роботою.",
                sources: [S.work],
              },
              {
                id: "delegation",
                title: "Delegowanie",
                polish: workLaw.text`${workLaw.articleRange("40", "44", { start: "art. 40", end: "44" })}`,
                summary:
                  "Стосується працівника іноземного роботодавця, тимчасово направленого до Польщі в межах transgranicznego świadczenia usług.",
                sources: [S.work],
              },
            ],
          },
          {
            id: "temporary-work",
            title: "Praca tymczasowa",
            polish: "agencja — pracownik tymczasowy — pracodawca użytkownik",
            summary:
              "Працівника наймає agencja pracy tymczasowej, але роботу він виконує на користь і під керівництвом pracodawcy użytkownika. Обидва суб’єкти мають визначені законом ролі.",
            why: "Якщо інша компанія фактично щоденно керує людьми, модель може бути працею tymczasową, навіть якщо договір названо outsourcingiem.",
            checkpoints: [
              "Чи podmiot має право діяти як agencja?",
              "Хто визначає щоденні завдання й контролює їх?",
              "Хто є pracodawcą użytkownikiem?",
              "Чи він зазначений у потрібному документі?",
            ],
            sources: [S.temporary, S.labourMarket, S.work],
            related: ["outsourcing-case", "stay-work"],
          },
          {
            id: "outsourcing-case",
            title: "Кейс: outsourcing procesowy чи працівники",
            polish: workLaw.text`${workLaw.article("13", "art. 13")} ust. 1 pkt 7 ustawy z 20.03.2025`,
            summary:
              "У законі немає однієї магічної договірної формули. Organ оцінює реальний предмет послуги, керівництво працею, відповідальність за результат, спосіб розрахунку та фактичну організацію.",
            why: "Outsourcing procesowy означає самостійну відповідальність виконавця за процес або результат. Надання «рук до праці» під керівництво іншого суб’єкта вказує на outsourcing pracowniczy/pracę tymczasową.",
            checkpoints: [
              "Предметом є результат/процес чи кількість людей?",
              "Хто добирає склад, графік і методи роботи?",
              "Хто дає щоденні polecenia та контролює дисципліну?",
              "Оплата за результат/KPI чи за headcount/godziny?",
              "Хто несе ризик wad, opóźnień і переробки?",
            ],
            steps: [
              "Прочитай предмет умови, SLA/KPI, odbiór і odpowiedzialność.",
              "Намалюй фактичну схему керівництва людьми.",
              "Порівняй umowę з графіками, invoices, protokołami й реальними poleceniami.",
              workLaw.text`Перевір ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 і правила pracy tymczasowej.`,
              "Відповідай на wezwanie узгодженим пакетом доказів, а не одним пунктом договору.",
            ],
            documents: [
              "umowa між компаніями й додатки",
              "SLA/KPI та protokoły odbioru",
              "рахунки за результат",
              "регламенти й polecenia координатора виконавця",
              "графіки",
              "KRS/CRBR і схема powiązań",
              "докази фактичної відповідальності за якість",
            ],
            sources: [S.work, S.aliens, S.temporary, S.outsourcing],
            related: ["wezwanie", "evidence", "temporary-work"],
          },
        ],
      },
      {
        id: "dokumenty",
        title: "Документи й докази",
        shortTitle: "Dokumenty",
        color: "#756b47",
        description:
          "Документ не є метою. Він повинен переконливо доводити конкретну умову закону.",
        nodes: [
          {
            id: "document-matrix",
            title: "Матриця документів",
            polish: "warunek → fakt → dowód",
            summary:
              "Для кожної умови дозволу запиши факт, який має її виконувати, і документ або інший доказ, що цей факт підтверджує.",
            why: "Список документів без зв’язку з нормою створює видимість повноти, але може не доводити найважливішу умову.",
            checkpoints: [
              "Яка стаття створює умову?",
              "Який факт її виконує?",
              "Який документ це підтверджує?",
              "Чи документ актуальний, повний і несуперечливий?",
            ],
            steps: [
              "Розбий статтю на умови.",
              "До кожної умови додай рядок у таблиці.",
              "Познач відсутні або слабкі докази.",
              "Перевір узгодженість дат, назв, сум і ролей.",
              "Додай коротке пояснення складного зв’язку.",
            ],
            sources: [S.kpa, S.aliens],
            related: ["evidence", "evidence-matrix", "wezwanie-workflow"],
          },
          {
            id: "evidence-matrix",
            title: "Формальна й матеріальна повнота",
            polish: "brak formalny ≠ brak przesłanki",
            summary:
              "Формальний недолік заважає заяві отримати правильний хід. Матеріальна нестача означає, що не доведена умова дозволу. Наслідки й спосіб відповіді різні.",
            checkpoints: [
              "Чи без цього елемента podanie не відповідає формі?",
              "Чи йдеться про доказ позитивної умови?",
              "Яку норму й наслідок назвав organ?",
              "Чи można uzupełnić/wyjaśnić доказ?",
            ],
            sources: [S.kpa, S.aliens],
            related: ["initiation", "evidence"],
          },
          {
            id: "document-types",
            title: "Типи доказів у справі",
            polish: "dokument urzędowy, prywatny, oświadczenie, rejestr",
            summary:
              "Використовуй не лише додатки з checklisty. KPA допускає все законне, що допомагає встановити факт: документи, реєстри, пояснення, свідків, експерта, oględziny.",
            documents: [
              "паспорт і документи pobytowe",
              "umowy та aneksy",
              "KRS, CEIDG, CRBR",
              "ZUS і podatki",
              "bank statements і wynagrodzenie",
              "акти цивільного стану",
              "докази навчання/страхування/житла",
              "електронні poświadczenia",
            ],
            sources: [S.kpa, S.aliens],
          },
          {
            id: "foreign-documents",
            title: "Документи з-за кордону",
            polish: "tłumaczenie, apostille, legalizacja",
            summary:
              "Окремо перевір форму, справжність, переклад присяжним перекладачем, apostille/legalizację та актуальність документа. Вимоги залежать від виду документа й міжнародних правил.",
            checkpoints: [
              "Хто видав документ?",
              "Чи потрібен apostille або legalizacja?",
              "Чи потрібен переклад przysięgły?",
              "Чи дані узгоджені з польськими реєстрами?",
            ],
            sources: [S.aliens],
          },
          {
            id: "case-file",
            title: "Akta sprawy і власна хронологія",
            polish: kpaLaw.text`${kpaLaw.articleRange("73", "74a", { start: "art. 73", end: "74a" })} KPA`,
            summary:
              "Сторона має право переглядати akta, робити нотатки й копії також після завершення справи, з передбаченими законом обмеженнями.",
            why: "Без повного матеріалу неможливо зрозуміти, що organ уже знає, яких доказів бракує та на чому може побудувати рішення.",
            steps: [
              "Замов доступ до akt.",
              "Зроби індекс документів і хронологію.",
              "Познач документи organu та strony.",
              "Порівняй akta з переліком умов і wezwania.",
            ],
            sources: [S.kpa],
          },
        ],
      },
      {
        id: "praktyka",
        title: "Практичний робочий алгоритм",
        shortTitle: "Практика",
        color: "#6d526d",
        description:
          "Однакова дисципліна аналізу для wezwania, decyzji, строку або нового кейсу.",
        nodes: [
          {
            ...wezwanieWorkflowMapNode,
            related: ["wezwanie", "deadlines-delivery", "document-matrix"],
          },
          {
            ...decisionWorkflowMapNode,
            related: ["decision-reading", "appeal", "case-file"],
          },
          {
            ...inactivityMapNode,
            related: ["deadlines-delivery", "wsa"],
          },
          sourceCheckMapNode,
          {
            ...studyLoopMapNode,
            related: ["legal-anatomy", "source-check", "wezwanie-workflow"],
          },
        ],
      },
    ],
    "legalData.groups"
  ),
} satisfies LegalAtlasData
