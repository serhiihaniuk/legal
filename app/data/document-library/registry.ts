import {
  evidenceDocumentIds,
  type EvidenceDocument,
  type EvidenceDocumentCategory,
  type EvidenceDocumentId,
} from "./contracts"
import { documentGuides } from "./guides"

export const documentCategoryLabels: Record<EvidenceDocumentCategory, string> =
  {
    identity: "Особа і перебування",
    procedure: "Заява і процедура",
    work: "Праця і страхування",
    company: "Компанія та модель співпраці",
    financial: "Оплати й фінанси",
    evidence: "Докази й кореспонденція",
    other: "Інші документи",
  }

export const documentCategoryOrder: readonly EvidenceDocumentCategory[] = [
  "identity",
  "procedure",
  "work",
  "company",
  "financial",
  "evidence",
  "other",
]

export function normalizeEvidenceDocumentAlias(value: string): string {
  return value.trim().toLocaleLowerCase("pl-PL")
}

const guidesById = new Map<
  EvidenceDocumentId,
  (typeof documentGuides)[number]
>()
for (const guide of documentGuides) {
  if (guidesById.has(guide.id)) {
    throw new Error(`Duplicate EvidenceDocumentId: ${guide.id}`)
  }
  guidesById.set(guide.id, guide)
}

const expectedIds = new Set<EvidenceDocumentId>(evidenceDocumentIds)
if (
  guidesById.size !== expectedIds.size ||
  [...expectedIds].some((id) => !guidesById.has(id))
) {
  throw new Error(
    `Document guide IDs do not match the editorial EvidenceDocumentId fixture: ${[
      ...guidesById.keys(),
    ].join(", ")}`
  )
}

const records = documentGuides.map<EvidenceDocument>((guide) => ({
  id: guide.id,
  title: guide.title,
  category: guide.category,
  aliases: guide.aliases,
  guide,
  relatedDocuments: guide.relatedDocuments ?? [],
  sources: guide.sources,
  verifiedAt: guide.verifiedAt,
}))

const aliasOwners = new Map<string, EvidenceDocumentId>()
for (const record of records) {
  for (const alias of [record.title, ...record.aliases]) {
    const normalized = normalizeEvidenceDocumentAlias(alias)
    if (!normalized) throw new Error(`Empty alias for ${record.id}`)
    const owner = aliasOwners.get(normalized)
    if (owner && owner !== record.id) {
      throw new Error(
        `Ambiguous Evidence Document alias ${JSON.stringify(alias)}: ${owner} and ${record.id}`
      )
    }
    aliasOwners.set(normalized, record.id)
  }
  for (const relatedId of record.relatedDocuments) {
    if (!guidesById.has(relatedId)) {
      throw new Error(
        `Unknown related EvidenceDocumentId: ${record.id} -> ${relatedId}`
      )
    }
    if (relatedId === record.id) {
      throw new Error(`Evidence document cannot relate to itself: ${record.id}`)
    }
  }
}

export const evidenceDocumentRegistry = new Map<
  EvidenceDocumentId,
  EvidenceDocument
>(records.map((record) => [record.id, record]))

export const evidenceDocumentAliasRegistry = new Map(
  [...aliasOwners.entries()].map(([alias, id]) => [alias, id] as const)
)
