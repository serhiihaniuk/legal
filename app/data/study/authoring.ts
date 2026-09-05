import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export const kpa = createLegalTextAuthor("kpa")
export const foreigners = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export const work = createLegalTextAuthor("powierzanie-pracy")
export const ppsa = createLegalTextAuthor("ppsa")

export const studySources = {
  kpa: {
    label: "KPA, Dz.U. 2025 poz. 1691",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Офіційна публікація кодексу й пов’язані документи.",
  },
  foreigners: {
    label: "Ustawa o cudzoziemcach, Dz.U. 2025 poz. 1079",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
    note: "Умови дозволів і спеціальні правила розгляду справ іноземців.",
  },
  work: {
    label: "Powierzanie pracy cudzoziemcom, Dz.U. 2025 poz. 621",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
    note: "Правові підстави праці та обов’язки особи, яка доручає роботу.",
  },
  ppsa: {
    label: "PPSA, Dz.U. 2026 poz. 143",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
    note: "Порядок звернення до адміністративного суду.",
  },
} satisfies Record<string, OfficialSource>
