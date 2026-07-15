export const officialSourceRegistry = {
  "eli-kpa": {
    label: "Kodeks postępowania administracyjnego — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
  },
  "eli-ustawa-o-cudzoziemcach": {
    label: "Ustawa o cudzoziemcach — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
  },
  "eli-powierzanie-pracy": {
    label: "Ustawa o powierzaniu pracy cudzoziemcom — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
  },
  "eli-ppsa": {
    label: "Prawo o postępowaniu przed sądami administracyjnymi — ELI",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
  },
  "udsc-mos-qa": {
    label: "UdSC — MOS pytania i odpowiedzi",
    url: "https://www.gov.pl/web/udsc/mos-qa",
  },
} as const

export type OfficialSourceId = keyof typeof officialSourceRegistry

export type OfficialSourceReference = {
  kind: "official-source"
  sourceId: OfficialSourceId
}

export function isOfficialSourceId(value: unknown): value is OfficialSourceId {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(officialSourceRegistry, value)
  )
}

export function getOfficialSource(sourceId: unknown) {
  if (!isOfficialSourceId(sourceId)) return undefined
  const source = officialSourceRegistry[sourceId]
  return /^https:\/\//u.test(source.url) ? source : undefined
}
