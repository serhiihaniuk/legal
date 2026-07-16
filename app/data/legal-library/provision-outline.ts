import { kpaArticleSections } from "~/data/legal-library/learning/kpa"

import type { LegalDocumentId, LegalProvision } from "./contracts"

/**
 * Official structural headings used by the provision sidebar.
 *
 * Structural starts are checked against the promoted local official PDFs;
 * long official headings may use a concise learner-facing label without changing scope.
 * The end of each group is derived from the next heading, so navigation does not
 * invent equal-size numerical ranges. KPA keeps its authored chapter projection.
 */
export type ProvisionOutlineDefinition = {
  id: string
  title: string
  start: string
  kind?: "article" | "paragraph" | "annex"
}

export type ProvisionOutlineGroup = ProvisionOutlineDefinition & {
  end: string
  provisions: LegalProvision[]
  firstProvisionId: string
  lastProvisionId: string
}

const statuteOutlines: Partial<
  Record<LegalDocumentId, readonly ProvisionOutlineDefinition[]>
> = {
  "ustawa-o-cudzoziemcach": [
    {
      id: "cudzoziemcy-i",
      title: "Dział I — Przepisy ogólne",
      start: "Art. 1",
    },
    {
      id: "cudzoziemcy-ii",
      title: "Dział II — Szef Urzędu do Spraw Cudzoziemców",
      start: "Art. 16",
    },
    {
      id: "cudzoziemcy-iii",
      title: "Dział III — Przekraczanie granicy",
      start: "Art. 23",
    },
    { id: "cudzoziemcy-iv", title: "Dział IV — Wizy", start: "Art. 58" },
    {
      id: "cudzoziemcy-v",
      title: "Dział V — Zezwolenie na pobyt czasowy. Mobilność",
      start: "Art. 98",
    },
    {
      id: "cudzoziemcy-vi",
      title: "Dział VI — Pobyt stały i rezydent długoterminowy UE",
      start: "Art. 195",
    },
    {
      id: "cudzoziemcy-vii",
      title: "Dział VII — Dokumenty wydawane cudzoziemcom",
      start: "Art. 226",
    },
    {
      id: "cudzoziemcy-viii",
      title: "Dział VIII — Kontrola legalności pobytu i powrót",
      start: "Art. 288",
    },
    {
      id: "cudzoziemcy-ix",
      title: "Dział IX — Zatrzymanie i strzeżone ośrodki",
      start: "Art. 394",
    },
    {
      id: "cudzoziemcy-x",
      title: "Dział X — Rejestry, ewidencja i wykaz cudzoziemców",
      start: "Art. 428",
    },
    {
      id: "cudzoziemcy-xi",
      title: "Dział XI — Odpowiedzialność przewoźnika",
      start: "Art. 459",
    },
    {
      id: "cudzoziemcy-xii",
      title: "Dział XII — Przepisy karne",
      start: "Art. 464",
    },
    {
      id: "cudzoziemcy-xiii",
      title: "Dział XIII — Przepisy przejściowe i końcowe",
      // Articles 466–506 amend other acts and are omitted from the consolidated
      // provision corpus. Art. 507 is the first navigable provision in this dział.
      start: "Art. 507",
    },
  ],
  ppsa: [
    { id: "ppsa-i", title: "Dział I — Przepisy wstępne", start: "Art. 1" },
    { id: "ppsa-ii", title: "Dział II — Strony", start: "Art. 25" },
    {
      id: "ppsa-iii",
      title: "Dział III — Postępowanie przed WSA",
      start: "Art. 45",
    },
    { id: "ppsa-iv", title: "Dział IV — Środki odwoławcze", start: "Art. 173" },
    { id: "ppsa-v", title: "Dział V — Koszty postępowania", start: "Art. 199" },
    {
      id: "ppsa-vi",
      title: "Dział VI — Uchwały Naczelnego Sądu Administracyjnego",
      start: "Art. 264",
    },
    {
      id: "ppsa-vii",
      title: "Dział VII — Wznowienie postępowania",
      start: "Art. 270",
    },
    {
      id: "ppsa-viii",
      title: "Dział VIII — Wykonywanie orzeczeń",
      start: "Art. 286",
    },
    {
      id: "ppsa-ix",
      title: "Dział IX — Odtworzenie zaginionych lub zniszczonych akt",
      start: "Art. 288",
    },
    {
      id: "ppsa-x",
      title: "Dział X — Postępowanie w obrocie zagranicznym",
      start: "Art. 299",
    },
    { id: "ppsa-xi", title: "Dział XI — Przepis końcowy", start: "Art. 301" },
  ],
  "powierzanie-pracy": [
    { id: "praca-1", title: "Rozdział 1 — Przepisy ogólne", start: "Art. 1" },
    {
      id: "praca-2",
      title: "Rozdział 2 — Zezwolenie na pracę dla polskiego podmiotu",
      start: "Art. 26",
    },
    {
      id: "praca-3",
      title: "Rozdział 3 — Zezwolenie związane z pełnieniem funkcji",
      start: "Art. 35",
    },
    {
      id: "praca-4",
      title: "Rozdział 4 — Delegowanie przez podmiot zagraniczny",
      start: "Art. 40",
    },
    { id: "praca-5", title: "Rozdział 5 — Praca sezonowa", start: "Art. 45" },
    {
      id: "praca-6",
      title: "Rozdział 6 — Oświadczenie o powierzeniu pracy",
      start: "Art. 61",
    },
    {
      id: "praca-7",
      title: "Rozdział 7 — Konta i systemy teleinformatyczne",
      start: "Art. 72",
    },
    {
      id: "praca-8",
      title: "Rozdział 8 — Aktywizacja i integracja cudzoziemców",
      start: "Art. 78",
    },
    { id: "praca-9", title: "Rozdział 9 — Przepisy karne", start: "Art. 84" },
    {
      id: "praca-10",
      title: "Rozdział 10 — Zmiany w przepisach",
      start: "Art. 87",
    },
    {
      id: "praca-11",
      title: "Rozdział 11 — Przepisy przejściowe i końcowe",
      start: "Art. 102",
    },
  ],
}

const regulationOutline: readonly ProvisionOutlineDefinition[] = [
  {
    id: "reg-body",
    title: "Przepisy rozporządzenia — formularze i wymagania techniczne",
    start: "§ 1",
    kind: "paragraph",
  },
  {
    id: "reg-annex-1",
    title: "Załącznik nr 1 — Wniosek o pobyt czasowy",
    start: "Załącznik nr 1",
    kind: "annex",
  },
  {
    id: "reg-annex-2",
    title: "Załącznik nr 2",
    start: "Załącznik nr 2",
    kind: "annex",
  },
  {
    id: "reg-annex-3",
    title: "Załącznik nr 3",
    start: "Załącznik nr 3",
    kind: "annex",
  },
  {
    id: "reg-annex-4",
    title: "Załącznik nr 4",
    start: "Załącznik nr 4",
    kind: "annex",
  },
  {
    id: "reg-annex-5",
    title: "Załącznik nr 5",
    start: "Załącznik nr 5",
    kind: "annex",
  },
  {
    id: "reg-annex-6",
    title: "Załącznik nr 6",
    start: "Załącznik nr 6",
    kind: "annex",
  },
  {
    id: "reg-annex-7",
    title: "Załącznik nr 7 — Wniosek z art. 106k",
    start: "Załącznik nr 7",
    kind: "annex",
  },
  {
    id: "reg-annex-8",
    title: "Załącznik nr 8 — Wniosek z art. 106l",
    start: "Załącznik nr 8",
    kind: "annex",
  },
  {
    id: "reg-annex-9",
    title: "Załącznik nr 9 — Formularz zgody",
    start: "Załącznik nr 9",
    kind: "annex",
  },
  {
    id: "reg-annex-10",
    title: "Załącznik nr 10 — Informacja o odciskach",
    start: "Załącznik nr 10",
    kind: "annex",
  },
  {
    id: "reg-annex-11",
    title: "Załącznik nr 11 — Wzór podpisu",
    start: "Załącznik nr 11",
    kind: "annex",
  },
]

const kpaOutline: readonly ProvisionOutlineDefinition[] =
  kpaArticleSections.map((section) => ({
    id: section.id,
    title: `${section.division} · ${section.chapter}`,
    start: `Art. ${section.start}`,
    kind: "article",
  }))

export const provisionOutlines: Partial<
  Record<LegalDocumentId, readonly ProvisionOutlineDefinition[]>
> = {
  kpa: kpaOutline,
  ...statuteOutlines,
  "rozporzadzenie-wniosek-pobyt-czasowy": regulationOutline,
}

function locatorKey(locator: string) {
  return locator.replace(/\s+/gu, " ").trim()
}

function locatorNumber(locator: string) {
  const match = locator.match(/^(?:Art\.|§)\s*(\d+)/u)
  return match ? Number(match[1]) : undefined
}

function resolveOutlineStart(
  definition: ProvisionOutlineDefinition,
  byLocator: ReadonlyMap<string, LegalProvision>,
  ordered: readonly LegalProvision[]
) {
  const exact = byLocator.get(locatorKey(definition.start))
  if (exact) return exact

  // A consolidated text can omit a repealed article that begins an official
  // chapter. In that case navigation starts at the first retained provision
  // with the same or a greater numeric locator.
  const targetNumber = locatorNumber(definition.start)
  if (targetNumber === undefined) return undefined
  return ordered.find((provision) => {
    if (definition.kind && provision.kind !== definition.kind) return false
    const number = locatorNumber(provision.locator)
    return number !== undefined && number >= targetNumber
  })
}

export function getProvisionOutline(
  documentId: LegalDocumentId,
  provisions: readonly LegalProvision[]
): ProvisionOutlineGroup[] {
  const ordered = [...provisions].sort((a, b) => a.order - b.order)
  const byLocator = new Map(
    ordered.map((provision) => [locatorKey(provision.locator), provision])
  )
  const definitions = provisionOutlines[documentId] ?? []

  return definitions.flatMap((definition, index) => {
    const start = resolveOutlineStart(definition, byLocator, ordered)
    if (!start) {
      throw new Error(
        `Unknown provision outline start for ${documentId}: ${definition.start}`
      )
    }
    const nextDefinition = definitions[index + 1]
    const nextStart = nextDefinition
      ? resolveOutlineStart(nextDefinition, byLocator, ordered)
      : undefined
    if (nextDefinition && !nextStart) {
      throw new Error(
        `Unknown provision outline start for ${documentId}: ${nextDefinition.start}`
      )
    }

    const groupProvisions = ordered.filter(
      (provision) =>
        provision.order >= start.order &&
        (!nextStart || provision.order < nextStart.order)
    )
    if (groupProvisions.length === 0) return []

    const last = groupProvisions[groupProvisions.length - 1]
    return [
      {
        ...definition,
        end: last.locator,
        provisions: groupProvisions,
        firstProvisionId: start.id,
        lastProvisionId: last.id,
      },
    ]
  })
}
