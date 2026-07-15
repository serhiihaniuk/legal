import { caseGuideRouteById } from "~/data/case-guide-routes"
import type { CaseGuideRouteId } from "~/data/case-guide-types"
import { documentById } from "~/data/document-index"
import { kpaArticleIndex } from "~/data/kpa-article-index"
import type {
  LegalDocumentReference,
  LegalProvisionReference,
} from "~/data/legal-library/contracts"
import {
  getOfficialSource,
  type OfficialSourceReference,
} from "~/data/legal-library/official-sources"
import {
  isRegisteredLegalProvisionId,
  resolveRegisteredLegalHref,
} from "~/data/legal-library/reference-registry"
import { nodeById } from "~/data/legal-index"

export type LegalReference =
  | LegalDocumentReference
  | LegalProvisionReference
  | OfficialSourceReference
  | { kind: "legacy-kpa-article"; article: string }
  | { kind: "document"; documentId: string }
  | { kind: "map-node"; nodeId: string }
  | { kind: "case-route"; routeId: CaseGuideRouteId }
  | { kind: "external"; url: string }

export type LegalReferenceTarget = {
  reference: LegalReference
  href: string
  external?: boolean
}

const superscriptDigits: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
}

function kpaProvisionId(article: string) {
  const normalized = article.toLocaleLowerCase("pl-PL")
  const base = normalized.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/u, "")
  const suffix = normalized.slice(base.length)
  const key = suffix
    ? `${base}-${[...suffix].map((digit) => superscriptDigits[digit]).join("-")}`
    : base
  const candidate = `kpa-art-${key}`
  return isRegisteredLegalProvisionId("kpa", candidate)
    ? candidate
    : undefined
}

const kpaProvisionIdByArticle = new Map(
  kpaArticleIndex.flatMap((entry) => {
    const provisionId = kpaProvisionId(entry.article)
    return provisionId
      ? [[entry.article.toLocaleLowerCase("pl-PL"), provisionId] as const]
      : []
  })
)

export function articleHref(article: string) {
  const provisionId = kpaProvisionIdByArticle.get(
    article.toLocaleLowerCase("pl-PL")
  )
  return provisionId
    ? `/law/kpa/provisions/${encodeURIComponent(provisionId)}`
    : "/law/kpa"
}

export function legalReferenceTarget(
  reference: LegalReference
): LegalReferenceTarget | undefined {
  switch (reference.kind) {
    case "legal-document":
    case "legal-provision": {
      const href = resolveRegisteredLegalHref(reference)
      return href ? { reference, href } : undefined
    }
    case "official-source": {
      const source = getOfficialSource(reference.sourceId)
      return source
        ? { reference, href: source.url, external: true }
        : undefined
    }
    case "legacy-kpa-article":
      return kpaArticleIndex.some(
        (entry) => entry.article === reference.article
      )
        ? { reference, href: articleHref(reference.article) }
        : undefined
    case "document":
      return documentById.has(reference.documentId)
        ? { reference, href: `/documents/${reference.documentId}` }
        : undefined
    case "map-node":
      return nodeById.has(reference.nodeId)
        ? { reference, href: `/map/${reference.nodeId}` }
        : undefined
    case "case-route":
      return caseGuideRouteById.has(reference.routeId)
        ? { reference, href: `/cases/${reference.routeId}` }
        : undefined
    case "external":
      return /^https:\/\//u.test(reference.url)
        ? { reference, href: reference.url, external: true }
        : undefined
  }
}
