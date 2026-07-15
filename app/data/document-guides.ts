import {
  createLegalTextAuthor,
  defineLegalTextContent,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/legal-types"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const workLaw = createLegalTextAuthor("powierzanie-pracy")
const kpaLaw = createLegalTextAuthor("kpa")
const FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

export type DocumentGuide = {
  matches: string[]
  displayTitle?: string
  category?:
    | "identity"
    | "procedure"
    | "work"
    | "company"
    | "financial"
    | "evidence"
    | "other"
  documentType?: LegalTextValue
  description: LegalTextValue
  preparedBy: LegalTextValue
  howToObtain?: LegalTextValue[]
  formAndValidity?: LegalTextValue[]
  purpose: LegalTextValue[]
  doesNotProve: LegalTextValue[]
  legalBasis: LegalTextValue[]
  keyChecks: LegalTextValue[]
  relatedDocuments?: string[]
  sources: OfficialSource[]
  verifiedAt: string
}

const OFFICIAL = {
  aliens: {
    label: "Ustawa o cudzoziemcach — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: "Офіційний текст закону; перед використанням перевір редакцію на дату факту.",
  },
  regulation553: {
    label: "Rozporządzenie MSWiA — Dz.U. 2026 poz. 553",
    url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
    note: "Форми заяв і додатків, вимоги до фото та цифрових копій.",
  },
  mosQa: {
    label: "UdSC — MOS pytania i odpowiedzi",
    url: "https://www.gov.pl/web/udsc/mos-qa",
    note: "Офіційні пояснення електронного подання, UPO, паспорта, фото й наступних дій.",
  },
  work: {
    label: "Ustawa o powierzaniu pracy cudzoziemcom — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: "Умови доручення праці, письмова умова та обов’язки роботодавця.",
  },
  kpa: {
    label: "Kodeks postępowania administracyjnego — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Офіційний текст KPA.",
  },
  zus: {
    label: "ZUS — самостійне формування підтверджень",
    url: "https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych",
    note: "Офіційна інструкція щодо електронних підтверджень із даними застрахованої особи.",
  },
  krs: {
    label: "Ministerstwo Sprawiedliwości — отримання інформації з KRS",
    url: "https://www.gov.pl/web/sprawiedliwosc/uzyskiwanie-informacji-z-krs",
    note: "Офіційна інформація про електронні відомості та витяги з KRS.",
  },
  ceidg: {
    label: "Biznes.gov.pl — CEIDG",
    url: "https://biznes.gov.pl/",
    note: "Офіційний державний портал для перевірки підприємців, внесених до CEIDG.",
  },
  crbr: {
    label:
      "Ministerstwo Finansów — Centralny Rejestr Beneficjentów Rzeczywistych",
    url: "https://www.podatki.gov.pl/pozostale/crbr",
    note: "Офіційний реєстр даних про бенефіціарів rzeczywistych.",
  },
  pesel: {
    label: "gov.pl — перевірка власних даних у rejestrze PESEL",
    url: "https://www.gov.pl/web/gov/sprawdz-swoje-dane-w-rejestrze-pesel",
    note: "Офіційна послуга перевірки даних і отримання електронного документа з реєстру PESEL.",
  },
  cukrQa: {
    label: "UdSC — CUKR pytania i odpowiedzi",
    url: "https://www.gov.pl/web/udsc/cukr-QA",
    note: "Офіційні відповіді щодо статусу UKR, подання CUKR та документа pobytowego.",
  },
  payments: {
    label: "UdSC — інформація про opłaty",
    url: "https://www.gov.pl/web/udsc/informacje-o-oplatach",
    note: "Офіційна таблиця opłaty skarbowej у справах cudzoziemców; суму звіряйте з видом заяви.",
  },
  stampFee: {
    label: "Ustawa o opłacie skarbowej — ELI",
    url: "https://eli.gov.pl/eli/DU/2023/2111/ogl",
    note: "Офіційний текст закону про opłatę skarbową та додаток зі ставками і звільненнями.",
  },
  cardFee: {
    label: "Rozporządzenie w sprawie opłat za dokumenty cudzoziemców — ELI",
    url: "https://eli.gov.pl/eli/DU/2022/1583/ogl",
    note: "Офіційні ставки opłaty за видачу або обмін документів cudzoziemców.",
  },
  translatorList: {
    label: "Ministerstwo Sprawiedliwości — lista tłumaczy przysięgłych",
    url: "https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/search.html",
    note: "Офіційний пошук осіб, внесених до списку tłumaczy przysięgłych.",
  },
  cardMos: {
    label: "MOS — karta pobytu",
    url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/dokumenty/dokumenty-op3/karta-pobytu/",
    note: "Офіційна довідка про карту як документ, що підтверджує наданий статус і особу.",
  },
  cardUdsc: {
    label: "UdSC — karta pobytu a dostęp do rynku pracy",
    url: "https://www.gov.pl/web/udsc/karta-pobytu2",
    note: "Офіційне пояснення написів на карті та їх зв’язку з доступом до ринку праці.",
  },
} satisfies Record<string, OfficialSource>

function defineDocumentGuideContent<const T extends readonly DocumentGuide[]>(
  content: T
): T {
  content.forEach((guide, index) => {
    defineLegalTextContent(
      {
        documentType: guide.documentType,
        description: guide.description,
        preparedBy: guide.preparedBy,
        howToObtain: guide.howToObtain,
        formAndValidity: guide.formAndValidity,
        purpose: guide.purpose,
        doesNotProve: guide.doesNotProve,
        legalBasis: guide.legalBasis,
        keyChecks: guide.keyChecks,
        sources: guide.sources.map((source) => source.note),
      },
      `document-guides[${index}]`
    )
  })
  return content
}

export const documentGuides: readonly DocumentGuide[] =
  defineDocumentGuideContent([
    {
      matches: ["załącznik nr 1"],
      description:
        "Структурована частина заяви про pobyt czasowy i pracę, у якій роботодавець офіційно подає дані про суб’єкта та заявлені умови праці.",
      preparedBy:
        "Заповнює podmiot powierzający pracę; підписує особа, яка має право представляти роботодавця, або належний представник.",
      purpose: [
        "Фіксує роботодавця, посаду або вид роботи, вид договору, робочий час і винагороду.",
        foreignersLaw.text`Дає органу структуровані дані для перевірки умов ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}.`,
      ],
      doesNotProve: [
        "Не доводить, що робота фактично виконується саме так.",
        "Не доводить реальність діяльності роботодавця або відсутність outsourcingu pracowniczego.",
      ],
      legalBasis: [
        foreignersLaw.text`${foreignersLaw.article("106", "Art. 106 ust. 2 ustawy o cudzoziemcach")}, ${foreignersLaw.external("art. 106d ustawy o cudzoziemcach", FOREIGNERS_2026_CHANGE_URL)}, ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")} і ${foreignersLaw.article("118", "art. 118 ustawy o cudzoziemcach")}.`,
        regulationLaw.text`${regulationLaw.paragraph("2", "§ 2 ust. 2")} і ${regulationLaw.annex("2")} do rozporządzenia Dz.U. 2026 poz. 553.`,
      ],
      keyChecks: [
        "Хто підписав документ і чи відповідає спосіб представництва KRS/CEIDG.",
        "Чи збігаються роботодавець, посада, час праці, винагорода та дата з umową o pracę.",
        "Чи використана актуальна форма для правильної процедури.",
      ],
      sources: [
        OFFICIAL.aliens,
        OFFICIAL.regulation553,
        {
          label: "UdSC — електронний Załącznik nr 1",
          url: "https://www.gov.pl/web/udsc/informacja-dla-pracodawcow-na-temat-koniecznosci-elektronicznego-podpisywania-zalacznikow-do-wnioskow-o-udzielenie-zezwolenia-na-pobyt-czasowy-i-prace-w-polsce",
          note: "Офіційне пояснення ролі роботодавця та електронного підпису.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["umowa o pracę"],
      description:
        "Договір між працівником і роботодавцем, який визначає вид праці, місце, винагороду, час та дату початку роботи.",
      preparedBy:
        "Підписують працівник і роботодавець через особу, уповноважену до представництва.",
      purpose: [
        "Підтверджує погоджені сторонами умови трудових відносин.",
        regulationLaw.text`Дозволяє зіставити фактичну роботу з ${regulationLaw.annex("1", "Załącznikiem nr 1")}, powiadomieniem або дозволом.`,
      ],
      doesNotProve: [
        "Не доводить фактичну виплату зарплати або виконання роботи.",
        "Не доводить, хто реально керує працівником і чи відсутній outsourcing pracowniczy.",
      ],
      legalBasis: [
        "Kodeks pracy — норми про зміст umowy o pracę та обов’язкові умови договору.",
        workLaw.text`${workLaw.article("5", "Art. 5 ustawy z 20.03.2025 o warunkach dopuszczalności powierzania pracy cudzoziemcom")}.`,
        foreignersLaw.text`У справі pobyt czasowy i pracę — ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}.`,
      ],
      keyChecks: [
        "Сторони, підписант, вид договору, посада, місце, час, винагорода і дата початку.",
        regulationLaw.text`Відповідність ${regulationLaw.annex("1", "Załącznikowi nr 1")} та фактичній організації праці.`,
        "Зрозуміла працівникові мовна версія та належне оформлення змін aneksem.",
      ],
      sources: [
        OFFICIAL.work,
        OFFICIAL.aliens,
        {
          label: "PIP — мовна версія умови з cudzoziemcem",
          url: "https://www.pip.gov.pl/dla-pracodawcow/pytania-i-odpowiedzi/w-jaki-sposob-podmiot-powierzajacy-prace-moze-potwierdzic-ze-cudzoziemiec-posluguje-sie-jezykiem-polskim-i-w-zwiazku-z-tym-nie-ma-obowiazku-przedstawiac-mu-umowy-w-innym-jezyku",
          note: "Офіційне пояснення обов’язку надати зрозумілу версію договору.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["wniosek mos", "електронна заява mos"],
      displayTitle: "Wniosek o zezwolenie na pobyt czasowy w MOS",
      description:
        "Електронна заява формулює żądanie, вид дозволу та дані, на яких заявник будує справу. Вона запускає процедуру, але не замінює докази матеріальних умов.",
      preparedBy:
        "Заповнює і подає заявник у MOS; додатки, призначені для іншого суб’єкта, підписує відповідний суб’єкт.",
      purpose: [
        "Ідентифікує заявника і конкретний вид дозволу.",
        "Фіксує заявлені факти та перелік доданих матеріалів.",
      ],
      doesNotProve: [
        "Сам факт надсилання не означає, що умови дозволу виконані.",
      ],
      legalBasis: [
        foreignersLaw.text`${foreignersLaw.articleRange("105", "107", { start: "Art. 105", end: "107" })} і ${foreignersLaw.external("art. 106c", FOREIGNERS_2026_CHANGE_URL)}–${foreignersLaw.external("106l", FOREIGNERS_2026_CHANGE_URL)} ustawy o cudzoziemcach.`,
        "Форма та технічні вимоги — Dz.U. 2026 poz. 553.",
      ],
      keyChecks: [
        "Правильний вид дозволу та дані, тотожні паспорту.",
        regulationLaw.text`Відповідність договору, ${regulationLaw.annex("1", "Załącznika nr 1")} та інших додатків.`,
        "Збережені PDF, XML і UPO саме надісланої версії.",
      ],
      sources: [OFFICIAL.aliens, OFFICIAL.regulation553, OFFICIAL.mosQa],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "паспорт",
        "дійсний закордонний паспорт",
        "скани всіх сторінок дійсного паспорта",
        "паспорт або документ подорожі",
        "паспорт і фото",
      ],
      displayTitle: "Ważny dokument podróży / закордонний паспорт",
      description:
        "Основний документ для встановлення особи, громадянства і реквізитів документа подорожі. У MOS потрібні цифрові копії всіх сторінок, а оригінал показують органу.",
      preparedBy:
        "Видає компетентний орган держави громадянства; заявник додає цифрові копії та показує оригінал.",
      purpose: ["Підтверджує особу, громадянство та реквізити документа."],
      doesNotProve: [
        "Сам по собі не підтверджує поточну підставу перебування або право працювати.",
      ],
      legalBasis: [
        foreignersLaw.text`${foreignersLaw.external("Art. 106e ustawy o cudzoziemcach", FOREIGNERS_2026_CHANGE_URL)}.`,
        regulationLaw.text`${regulationLaw.paragraph("6", "§ 6")} rozporządzenia Dz.U. 2026 poz. 553.`,
      ],
      keyChecks: [
        "Чинність документа й усі сторінки без обрізання.",
        "Однакове написання даних у паспорті, PESEL, заяві та договорі.",
        "Наявність оригіналу для пред’явлення.",
      ],
      sources: [OFFICIAL.aliens, OFFICIAL.regulation553, OFFICIAL.mosQa],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["upo / urzędowe poświadczenie", "upo та akta sprawy"],
      displayTitle: "UPO — Urzędowe Poświadczenie Odbioru",
      description:
        "Системне підтвердження технічного отримання електронного документа. Його треба зберігати разом із PDF/XML надісланої заяви.",
      preparedBy: "Формує MOS після правильного технічного надсилання.",
      purpose: [
        "Підтверджує технічне прийняття заяви системою та дату надсилання.",
      ],
      doesNotProve: [
        "Не підтверджує формальну або матеріальну правильність заяви й не є позитивним рішенням.",
      ],
      legalBasis: [
        "Електронна процедура MOS; зміст заяви та її додатків регулює ustawa o cudzoziemcach.",
      ],
      keyChecks: [
        "Збережені UPO, PDF і XML тієї самої версії.",
        "Документ не є лише статусом «przesłany» або скриншотом.",
      ],
      sources: [OFFICIAL.mosQa, OFFICIAL.aliens],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["powiadomienie pup"],
      displayTitle: "Powiadomienie o pracy obywatela Ukrainy",
      description:
        "Електронне повідомлення роботодавця до właściwego PUP про доручення роботи громадянину України. Це окремий обов’язок щодо легальності праці.",
      preparedBy: "Подає роботодавець або його представник через praca.gov.pl.",
      purpose: [
        "Фіксує дані роботодавця, працівника і заявлені умови роботи у визначений момент.",
      ],
      doesNotProve: [
        "Не підтверджує законність перебування або фактичну відповідність роботи заявленим умовам.",
      ],
      legalBasis: [
        "Спеціальні правила праці громадян України; редакцію треба звіряти на дату початку або зміни роботи.",
      ],
      keyChecks: [
        "Фактична дата початку, строк подання, дані тотожні umowie, збережене підтвердження wysłania.",
      ],
      sources: [
        {
          label: "Praca.gov.pl — powiadomienie o pracy obywatela Ukrainy",
          url: "https://psz.praca.gov.pl/dla-bezrobotnych-i-poszukujacych-pracy/dla-cudzoziemcow/powierzenie-pracy-ukraina",
          note: "Офіційна інформація про електронне повідомлення.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["wezwanie"],
      displayTitle: "Wezwanie organu",
      description:
        "Офіційне письмо органу, яке вимагає конкретної дії, документа, пояснення або особистої явки у визначеній справі.",
      preparedBy:
        "Видає organ, який веде справу; адресат виконує вимогу або подає обґрунтовану відповідь.",
      purpose: [
        "Повідомляє, що саме, у який спосіб і до якого строку вимагає organ.",
      ],
      doesNotProve: [
        "Не кожне wezwanie означає brak formalny і не кожна вимога автоматично є правомірною.",
      ],
      legalBasis: [
        kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA.`,
        kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")} — усунення формальних недоліків.`,
        foreignersLaw.text`У справах pobytowych також спеціальні ${foreignersLaw.external("art. 106e ustawy o cudzoziemcach", FOREIGNERS_2026_CHANGE_URL)}, ${foreignersLaw.external("art. 106f ustawy o cudzoziemcach", FOREIGNERS_2026_CHANGE_URL)} і ${foreignersLaw.external("art. 106i ustawy o cudzoziemcach", FOREIGNERS_2026_CHANGE_URL)}.`,
      ],
      keyChecks: [
        "Organ, адресат, номер справи, кожне żądanie, правова підстава, строк, спосіб виконання, наслідок і підпис.",
      ],
      sources: [OFFICIAL.kpa, OFFICIAL.aliens],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "підтвердження doręczenia",
        "конверт і awizo",
        "підтвердження e-doręczenia",
      ],
      displayTitle: "Dowód doręczenia",
      description:
        "Доказ способу й юридичної дати вручення листа. Саме з цією датою закон часто пов’язує початок процесуального строку.",
      preparedBy:
        "Залежно від каналу це UPO/UPD, dowód e-Doręczenia, zwrotne potwierdzenie odbioru, koperta або awizo.",
      purpose: [
        "Підтверджує спосіб і дату doręczenia конкретного письма конкретному адресату.",
      ],
      doesNotProve: [
        "Не підтверджує правильність змісту wezwania або decyzji.",
      ],
      legalBasis: [
        kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "Art. 39", end: "49b" })} KPA.`,
      ],
      keyChecks: [
        "Правильний адресат або pełnomocnik, канал, фактична й юридична дата, умови fikcji doręczenia.",
      ],
      sources: [
        OFFICIAL.kpa,
        {
          label: "gov.pl — e-Doręczenia",
          url: "https://www.gov.pl/web/e-doreczenia",
          note: "Офіційний портал електронного вручення.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["pełnomocnictwo"],
      displayTitle: "Pełnomocnictwo",
      description:
        "Документ, яким mocodawca уповноважує конкретну фізичну особу діяти від його імені у визначеному обсязі.",
      preparedBy:
        "Підписує mocodawca; представник долучає оригінал або допустиму засвідчену копію.",
      purpose: [
        "Підтверджує право представника отримувати письма й виконувати дії в межах повноваження.",
      ],
      doesNotProve: [
        "Не дозволяє замінити заявника в особистих діях, які спеціальний закон залишає за ним.",
      ],
      legalBasis: [
        kpaLaw.text`${kpaLaw.articleRange("32", "33", { start: "Art. 32", end: "33" })} KPA.`,
        "Оплата — ustawa o opłacie skarbowej, якщо немає звільнення.",
      ],
      keyChecks: [
        "Особа mocodawcy і представника, підпис, дата, обсяг, форма копії та opłata skarbowa.",
      ],
      sources: [
        OFFICIAL.kpa,
        {
          label: "MOS — osobiste działanie i pełnomocnictwo",
          url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/procedury/osobiste-dzia-anie-i-pe-nomocnictwo/",
          note: "Офіційне пояснення представництва в справах cudzoziemców.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["рішення"],
      displayTitle: "Decyzja administracyjna",
      description:
        "Владне розstrzygnięcie адміністративної справи. Її треба читати як ціле: sentencja, встановлені факти, оцінка доказів, норми, uzasadnienie і pouczenie.",
      preparedBy:
        "Видає właściwy organ; у першій інстанції в типовій справі pobytowej — wojewoda.",
      purpose: [
        "Визначає результат справи, правову підставу, мотиви та спосіб оскарження.",
      ],
      doesNotProve: [
        "Дата рішення не є датою doręczenia, а готовність карти не замінює decyzji.",
      ],
      legalBasis: [
        kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "Art. 104", end: "113" })} KPA та спеціальні норми ${foreignersLaw.document("ustawy o cudzoziemcach")}.`,
      ],
      keyChecks: [
        "Organ, strona, podstawa prawna, rozstrzygnięcie, uzasadnienie faktyczne i prawne, pouczenie, podpis, data doręczenia.",
      ],
      sources: [OFFICIAL.kpa, OFFICIAL.aliens],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "підтвердження zus",
        "страхування/zus за потреби",
        "доказ виплат і zus",
      ],
      displayTitle: "Zaświadczenie / potwierdzenie danych z ZUS",
      category: "work",
      documentType:
        "Електронне підтвердження даних із системи ZUS; конкретний вид документа залежить від факту, який треба довести.",
      description:
        "Документ із ZUS може підтверджувати zgłoszenie do ubezpieczeń, періоди страхування або інші дані, наявні в обліковому записі. Спочатку визначте факт, а потім оберіть відповідне підтвердження — загальна назва «ZUS» недостатня.",
      preparedBy:
        "Дані веде ZUS; застрахована особа або płatnik може сформувати доступне підтвердження у своєму електронному профілі.",
      howToObtain: [
        "Увійти до електронного профілю ZUS і вибрати підтвердження, яке відповідає потрібному факту.",
        "Зберегти повний електронний файл із даними перевірки, а не лише скриншот екрана.",
        "Якщо потрібних даних немає або вони помилкові — звернутися до ZUS чи płatnika перед поданням до organu.",
      ],
      formAndValidity: [
        "Електронний документ перевіряють за реквізитами або механізмом, указаним у самому файлі.",
        "Документ показує стан даних на момент формування; для триваючої умови орган може вимагати актуальніший період.",
      ],
      purpose: [
        "Підтверджує конкретні відомості, які ZUS має щодо страхування або обліку особи.",
        "Допомагає зіставити період роботи, zgłoszenie та інші докази виконання заявлених умов.",
      ],
      doesNotProve: [
        "Не замінює umowy, доказів фактичної виплати винагороди або права перебування.",
        "Сам факт наявності профілю чи одного запису не доводить безперервність страхування за весь потрібний період.",
      ],
      legalBasis: [
        foreignersLaw.text`Вимога залежить від матеріальної умови конкретної процедури; у pobyt czasowy i pracę перевіряйте ${foreignersLaw.article("114", "art. 114 ust. 1 pkt 1 ustawy o cudzoziemcach")}.`,
        "Спосіб отримання підтвердження визначається електронною послугою ZUS.",
      ],
      keyChecks: [
        "Який саме факт і період підтверджує документ.",
        "Особа, płatnik, код zgłoszenia, дати та відсутність розбіжностей з umową і фактичною роботою.",
        "Можливість перевірити походження електронного файла.",
      ],
      relatedDocuments: ["Umowa o pracę", "Załącznik nr 1"],
      sources: [OFFICIAL.zus, OFFICIAL.aliens],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "інформація krs / ceidg",
        "дані krs/ceidg роботодавця",
        "krs/ceidg, повноваження підписанта",
      ],
      displayTitle: "Informacja z KRS albo CEIDG",
      category: "company",
      documentType:
        "Офіційна інформація з державного реєстру про юридичну особу або підприємця.",
      description:
        "KRS і CEIDG — різні реєстри. KRS використовують, зокрема, для spółek і інших зареєстрованих суб’єктів; CEIDG — для підприємців-фізичних осіб. Витяг допомагає встановити актуальні дані суб’єкта та спосіб його представництва.",
      preparedBy:
        "Відомості походять із державного реєстру; користувач завантажує або перевіряє їх в офіційному сервісі.",
      howToObtain: [
        "Спочатку визначити форму роботодавця або контрагента: KRS чи CEIDG.",
        "Знайти суб’єкта за KRS, NIP, REGON або іншими доступними реквізитами.",
        "Зберегти актуальну інформацію та дату перевірки; за потреби долучити документ про додаткове pełnomocnictwo.",
      ],
      formAndValidity: [
        "Електронна інформація відображає стан реєстру на час отримання.",
        "Право підпису оцінюють з урахуванням способу reprezentacji, кількості осіб і можливих повноважень prokurenta або pełnomocnika.",
      ],
      purpose: [
        "Ідентифікує суб’єкта, адресу, номери реєстру та осіб, уповноважених до представництва.",
        "Допомагає перевірити, чи могла конкретна особа підписати umowę, Załącznik nr 1 або pełnomocnictwo.",
      ],
      doesNotProve: [
        "Не доводить фактичне ведення діяльності, фінансову спроможність або реальну організацію праці.",
        "Запис про представництво не підтверджує автентичність конкретного підпису.",
      ],
      legalBasis: [
        "Відомості та спосіб представництва випливають із відповідного державного реєстру і правил для організаційної форми суб’єкта.",
        "У справі cudzoziemca реєстровий документ є доказом факту, а не самостійною матеріальною підставою дозволу.",
      ],
      keyChecks: [
        "Правильний реєстр, статус суб’єкта і дата актуальності.",
        "Назва, NIP/KRS/REGON, адреса та спосіб reprezentacji.",
        "Чи потрібен спільний підпис, prokura або окреме pełnomocnictwo.",
      ],
      relatedDocuments: ["Pełnomocnictwo", "Załącznik nr 1", "Umowa o pracę"],
      sources: [OFFICIAL.krs, OFFICIAL.ceidg],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["інформація з crbr", "krs/crbr і схема powiązań"],
      displayTitle: "Informacja z CRBR i схема powiązań",
      category: "company",
      documentType:
        "Реєстрова інформація про beneficjenta rzeczywistego та окремо підготовлена схема корпоративних зв’язків.",
      description:
        "CRBR показує заявлені дані про beneficjentów rzeczywistych. Схема powiązań — це аналітичний документ, який пояснює зв’язок між компаніями, власниками та особами контролю; її треба будувати на перевірюваних реєстрових даних.",
      preparedBy:
        "Відомості CRBR походять із державного реєстру; схему готує сторона або представник із посиланнями на реєстрові документи.",
      howToObtain: [
        "Знайти суб’єкта в CRBR та зберегти актуальний результат пошуку.",
        "Окремо отримати KRS/CEIDG для кожного релевантного суб’єкта.",
        "На схемі вказати джерело, дату, вид зв’язку та частку або інший механізм контролю.",
      ],
      formAndValidity: [
        "CRBR відображає дані, заявлені до реєстру, на момент перевірки.",
        "Схема не є офіційним витягом: кожен її зв’язок повинен вести до джерела.",
      ],
      purpose: [
        "Допомагає показати власників, контролюючих осіб і зв’язки між суб’єктами.",
        "У спірній моделі співпраці полегшує аналіз, чи пов’язані замовник, виконавець та роботодавець.",
      ],
      doesNotProve: [
        "Не доводить сам по собі outsourcing procesowy або kierownictwo над працівниками.",
        "Не замінює umowy між компаніями, протоколів, рахунків і доказів фактичної організації роботи.",
      ],
      legalBasis: [
        "CRBR регулюється законодавством про przeciwdziałanie praniu pieniędzy; у справі cudzoziemca використовується як джерело фактичних даних.",
        "Юридичне значення powiązań завжди оцінюють разом із матеріальною нормою конкретної справи.",
      ],
      keyChecks: [
        "NIP/KRS суб’єкта, дата перевірки та особи, показані в CRBR.",
        "Чи кожен елемент схеми має документальне джерело.",
        "Чи відділено власність від фактичного kierownictwa і відповідальності за процес.",
      ],
      relatedDocuments: [
        "Informacja z KRS albo CEIDG",
        "Umowa між компаніями й додатки",
      ],
      sources: [OFFICIAL.crbr, OFFICIAL.krs],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["підтвердження opłaty skarbowej", "оплата скарбова за дозвіл"],
      displayTitle: "Dowód opłaty skarbowej za zezwolenie",
      category: "financial",
      documentType:
        "Підтвердження сплати opłaty skarbowej за конкретну адміністративну дію.",
      description:
        "Це доказ платежу, а не універсальна квитанція. Сума, одержувач і призначення залежать від виду заяви; тому не можна переносити ставку з іншої процедури лише через подібну назву справи.",
      preparedBy:
        "Платіж здійснює заявник або інша особа на належний рахунок; підтвердження формує банк або платіжний сервіс.",
      howToObtain: [
        "На сторінці właściwego urzędu або UdSC визначити ставку для точної процедури.",
        "Перевірити одержувача, рахунок, суму й призначення платежу до оплати.",
        "Зберегти повне підтвердження з датою, сумою, даними платника й ідентифікацією справи або заявника.",
      ],
      formAndValidity: [
        "Підтвердження має дозволяти однозначно пов’язати платіж із заявником і видом czynności.",
        "Ставку та можливе zwolnienie перевіряють на дату виникнення обов’язку.",
      ],
      purpose: [
        "Підтверджує здійснення конкретної opłaty у визначеній сумі та даті.",
      ],
      doesNotProve: [
        "Не підтверджує комплектність заяви або виконання матеріальних умов дозволу.",
        "Сплата неправильної суми чи на неправильний рахунок не виконує автоматично належного обов’язку.",
      ],
      legalBasis: [
        "Ustawa o opłacie skarbowej разом із додатком.",
        "Офіційна інформація UdSC про актуальні ставки в справах cudzoziemców.",
      ],
      keyChecks: [
        "Вид заяви, правильна ставка, рахунок, одержувач, дата, призначення й дані заявника.",
      ],
      relatedDocuments: [
        "Wniosek o zezwolenie na pobyt czasowy w MOS",
        "Dowód opłaty za kartę pobytu",
      ],
      sources: [OFFICIAL.stampFee, OFFICIAL.payments],
      verifiedAt: "2026-07-14",
    },
    {
      matches: ["підтвердження opłaty za kartę", "оплата за карту"],
      displayTitle: "Dowód opłaty za wydanie karty pobytu",
      category: "financial",
      documentType:
        "Підтвердження окремої opłaty за виготовлення або видачу документа pobytowego.",
      description:
        "Opłata за картку — інший платіж, ніж opłata skarbowa за розгляд заяви або надання дозволу. Її ставку і момент сплати перевіряють для конкретного виду документа та urzędu.",
      preparedBy:
        "Платіж здійснює особа, якій видається документ, або інший платник; підтвердження формує банк чи платіжний сервіс.",
      howToObtain: [
        "Перевірити на офіційній сторінці urzędu ставку та рахунок для потрібного документа.",
        "Виконати окремий платіж із точним призначенням і даними особи.",
        "Зберегти повне підтвердження для подання або odbioru документа.",
      ],
      formAndValidity: [
        "Сума може залежати від виду документа, ulgi або zwolnienia; її не слід виводити лише з попередньої справи.",
      ],
      purpose: [
        "Підтверджує оплату виготовлення або видачі конкретної карти pobytu.",
      ],
      doesNotProve: [
        "Не є рішенням про надання дозволу і не підтверджує право перебування до його виникнення.",
      ],
      legalBasis: [
        "Rozporządzenie w sprawie opłat pobieranych w Rzeczypospolitej Polskiej od cudzoziemców za wydanie i wymianę dokumentów.",
      ],
      keyChecks: [
        "Вид карти, ставка, можливе zwolnienie, рахунок, призначення, дані особи та дата.",
      ],
      relatedDocuments: [
        "Karta pobytu",
        "Dowód opłaty skarbowej za zezwolenie",
      ],
      sources: [OFFICIAL.cardFee, OFFICIAL.payments],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "підтвердження pesel ukr",
        "активний pesel ukr та історія status ukr",
        "паспорт і pesel ukr",
      ],
      displayTitle: "Potwierdzenie danych PESEL i statusu UKR",
      category: "identity",
      documentType:
        "Електронний або урядовий документ із даними, внесеними до rejestru PESEL; статус UKR є окремою реєстровою ознакою.",
      description:
        "Документ допомагає перевірити дані особи та те, який статус записаний у PESEL на момент отримання. Для CUKR або іншої процедури важлива не лише наявність номера, а конкретний статус, його історія та події, що могли на нього вплинути.",
      preparedBy:
        "Дані веде rejestr PESEL; особа може перевірити власні дані через офіційну електронну послугу або звернутися до urzędu gminy.",
      howToObtain: [
        "Перевірити власні дані через gov.pl / mObywatel або отримати документ у належному urzędzie.",
        "Якщо потрібна історія статусу, окремо встановити періоди, зміни й причини записів.",
        "При розбіжності з паспортом спочатку виправити дані в реєстрі.",
      ],
      formAndValidity: [
        "Документ відображає реєстровий стан на момент формування.",
        "Номер PESEL сам по собі не означає активний status UKR.",
      ],
      purpose: [
        "Підтверджує внесені до PESEL ідентифікаційні дані та, якщо показано, ознаку status UKR.",
        "Допомагає виявити розбіжності між паспортом, заявою та державним реєстром.",
      ],
      doesNotProve: [
        "Не замінює паспорта як dokumentu podróży.",
        "Не доводить автоматично безперервність status UKR або виконання всіх умов CUKR.",
      ],
      legalBasis: [
        "Реєстрові дані PESEL та спеціальні норми щодо obywateli Ukrainy; для CUKR перевіряйте чинну спеціальну процедуру й офіційні пояснення UdSC.",
      ],
      keyChecks: [
        "Ім’я, дата народження, громадянство, номер документа, status UKR, дата перевірки та історія змін.",
      ],
      relatedDocuments: [
        "Ważny dokument podróży / закордонний паспорт",
        "Karta CUKR",
      ],
      sources: [OFFICIAL.pesel, OFFICIAL.cukrQa],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "karta pobytu",
        "карта/документ перебування",
        "карта побиту як документ дозволу",
      ],
      displayTitle: "Karta pobytu",
      category: "identity",
      documentType:
        "Документ pobytowy, який видається після виникнення відповідного статусу або дозволу; не є самим адміністративним рішенням.",
      description:
        "Karta pobytu підтверджує особу та виданий документ pobytowy у межах даних, зазначених на карті. Її треба читати разом із decyzją і нормою, на підставі якої надано дозвіл, особливо коли оцінюється доступ до праці.",
      preparedBy:
        "Видає компетентний organ після виконання умов видачі документа, оплати та, коли потрібно, отримання біометричних даних.",
      howToObtain: [
        "Отримати рішення або іншу підставу для видачі документа.",
        "Виконати вимоги щодо opłaty, фото, відбитків та особистого odbioru, якщо вони застосовні.",
        "При odbiorze перевірити всі надруковані дані та негайно повідомити про помилку.",
      ],
      formAndValidity: [
        "Строк карти і строк самого дозволу треба відрізняти та перевіряти за рішенням і законом.",
        "Напис «dostęp do rynku pracy» не означає однаковий обсяг права працювати в кожному випадку.",
      ],
      purpose: [
        "Підтверджує особу та наявність указаного документа pobytowego під час його чинності.",
      ],
      doesNotProve: [
        "Не замінює decyzji при аналізі умов дозволу.",
        "Не доводить автоматично право працювати для будь-якого роботодавця і на будь-яких умовах.",
      ],
      legalBasis: [
        "Ustawa o cudzoziemcach — норми про dokumenty wydawane cudzoziemcom та спеціальна підстава конкретного дозволу.",
      ],
      keyChecks: [
        "Особа, номер, вид документа, organ wydający, дати, adnotacje та відповідність decyzji.",
      ],
      relatedDocuments: [
        "Decyzja administracyjna",
        "Dowód opłaty za kartę pobytu",
        "Ważny dokument podróży / закордонний паспорт",
      ],
      sources: [OFFICIAL.cardMos, OFFICIAL.cardUdsc, OFFICIAL.aliens],
      verifiedAt: "2026-07-14",
    },
    {
      matches: [
        "tłumaczenie przysięgłe",
        "зрозумілий переклад/версія",
        "tłumaczenie, apostille, legalizacja",
      ],
      displayTitle: "Tłumaczenie przysięgłe і документи іноземною мовою",
      category: "evidence",
      documentType:
        "Переклад, виконаний особою, уповноваженою відповідно до польських правил, або інша допустима мовна версія — залежно від вимоги.",
      description:
        "Не кожна ситуація вимагає tego samego виду перекладу. Для доказу іноземною мовою organ може вимагати tłumaczenie na język polski; для договору з cudzoziemcem окремо діє обов’язок надати зрозумілу мовну версію. Apostille або legalizacja підтверджують походження документа, а не правильність перекладу.",
      preparedBy:
        "Tłumaczenie przysięgłe виконує tłumacz przysięgły; зрозумілу версію договору забезпечує podmiot powierzający pracę.",
      howToObtain: [
        "Встановити, чи потрібний переклад звичайний, przysięgły, чи лише зрозуміла версія договору.",
        "Перевірити перекладача в офіційному списку Ministerstwa Sprawiedliwości.",
        "Передати повний документ із печатками, додатками й зворотними сторонами; зберегти зв’язок перекладу з оригіналом.",
      ],
      formAndValidity: [
        "Переклад повинен охоплювати саме той документ і всі елементи, які мають доказове значення.",
        "Apostille або legalizacja застосовуються лише тоді, коли цього вимагають правила щодо походження документа.",
      ],
      purpose: [
        "Дозволяє organowi прочитати зміст іноземного документа та пов’язати його з оригіналом.",
      ],
      doesNotProve: [
        "Не робить недостовірний або нечинний оригінал правильним.",
        "Не замінює apostille/legalizacji, якщо вони окремо потрібні.",
      ],
      legalBasis: [
        "Мовна форма доказу залежить від процедури та вимог organu.",
        workLaw.text`Для договору з cudzoziemcem — ${workLaw.article("5", "art. 5 ustawy z 20.03.2025 o warunkach dopuszczalności powierzania pracy cudzoziemcom")}.`,
      ],
      keyChecks: [
        "Повнота оригіналу, особа перекладача, мова, номери сторінок, печатки, додатки та потреба apostille/legalizacji.",
      ],
      relatedDocuments: ["Umowa o pracę", "Акти цивільного стану"],
      sources: [
        OFFICIAL.translatorList,
        OFFICIAL.work,
        {
          label: "PIP — мовна версія umowy z cudzoziemcem",
          url: "https://www.pip.gov.pl/dla-pracodawcow/pytania-i-odpowiedzi/w-jaki-sposob-podmiot-powierzajacy-prace-moze-potwierdzic-ze-cudzoziemiec-posluguje-sie-jezykiem-polskim-i-w-zwiazku-z-tym-nie-ma-obowiazku-przedstawiac-mu-umowy-w-innym-jezyku",
          note: "Офіційне пояснення обов’язку надати зрозумілий текст договору.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
  ])
