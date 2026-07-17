import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export const kpaLaw = createLegalTextAuthor("kpa")
export const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export const workLaw = createLegalTextAuthor("powierzanie-pracy")
export const ppsaLaw = createLegalTextAuthor("ppsa")
export const residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

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
  workChange: {
    label: "Zmiana zasad powierzania pracy — 2026",
    url: "https://eli.gov.pl/eli/DU/2026/473/ogl",
    note: "Dz.U. 2026 poz. 473 · зміни з 08.07.2026",
  },
  temporaryWork: {
    label: "Ustawa o zatrudnianiu pracowników tymczasowych",
    url: "https://eli.gov.pl/eli/DU/2025/236/ogl",
    note: "Agencja, pracownik tymczasowy, pracodawca użytkownik",
  },
  labourMarket: {
    label: "Ustawa o rynku pracy i służbach zatrudnienia",
    url: "https://eli.gov.pl/eli/DU/2025/620/ogl",
    note: "Зокрема діяльність agencji zatrudnienia",
  },
  outsourcing: {
    label: "MRPiPS — stanowisko o outsourcingu (03.04.2026)",
    url: "https://www.senat.gov.pl/gfx/senat/userfiles/_public/k11/komisje/kp/75/2/odp._mrpips_03-04-2026.pdf",
    note: "Офіційне пояснення outsourcingu procesowego та pracowniczego",
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
  ukraine2026: {
    label: "Ustawa z 23.01.2026 — zmiany dotyczące obywateli Ukrainy",
    url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
    note: "Dz.U. 2026 poz. 203 · спеціальні та перехідні правила з 05.03.2026",
  },
  ukraineSpecialCurrent: {
    label: "Specustawa ukraińska — актуальний текст",
    url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
    note: "Умови, процедура та наслідки CUKR",
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
} as const satisfies Record<string, OfficialSource>
