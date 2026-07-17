import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export const kpaLaw = createLegalTextAuthor("kpa")
export const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export const workLaw = createLegalTextAuthor("powierzanie-pracy")
export const ppsaLaw = createLegalTextAuthor("ppsa")

export const mapTopicSources = {
  kpa: {
    label: "Kodeks postępowania administracyjnego — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Dz.U. 2025 poz. 1691 · чинний текст KPA",
  },
  aliens: {
    label: "Ustawa o cudzoziemcach — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: "Dz.U. 2025 poz. 1079 · перевіряй разом зі змінами 2025–2026",
  },
  aliensChange: {
    label: "Zmiana ustawy o cudzoziemcach — 2025/2026",
    url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
    note: "Dz.U. 2025 poz. 1794 · значна частина змін діє з 27.04.2026",
  },
  udscVisa: {
    label: "UdSC — Wizy",
    url: "https://www.gov.pl/web/udsc/wizy",
    note: "Офіційне практичне пояснення візових процедур",
  },
  schengen: {
    label: "Kodeks graniczny Schengen — 2016/399",
    url: "https://eur-lex.europa.eu/eli/reg/2016/399/oj",
    note: "Умови перетину зовнішніх кордонів",
  },
  work: {
    label:
      "Ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: "Dz.U. 2025 poz. 621 · чинна з 01.06.2025",
  },
  ppsa: {
    label: "Prawo o postępowaniu przed sądami administracyjnymi — ELI",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
    note: "Dz.U. 2026 poz. 143 · перевіряй застосовну редакцію",
  },
  nsa: {
    label: "Centralna Baza Orzeczeń Sądów Administracyjnych",
    url: "https://orzeczenia.nsa.gov.pl/cbo/query",
    note: "Офіційна навчально-інформаційна база судової практики",
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
} as const satisfies Record<string, OfficialSource>
