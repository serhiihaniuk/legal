import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export const workLaw = createLegalTextAuthor("powierzanie-pracy")
export const kpaLaw = createLegalTextAuthor("kpa")
export const FOREIGNERS_MOS_AMENDMENT_URL =
  "https://eli.gov.pl/eli/DU/2025/1794/ogl"

export const documentSources = {
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
    note: "Офіційна таблиця opłaty skarbowej у справах іноземців; суму звіряйте з видом заяви.",
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
} as const satisfies Record<string, OfficialSource>
