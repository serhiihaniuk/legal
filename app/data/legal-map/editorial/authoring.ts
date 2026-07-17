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
} as const satisfies Record<string, OfficialSource>
