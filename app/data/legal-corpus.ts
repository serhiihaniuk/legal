import kpaManifestJson from "~/data/legal-corpus/kpa-2025-1691/manifest.json"

export type LegalSourceManifest = {
  id: string
  shortName: string
  title: string
  citation: string
  officialPageUrl: string
  metadataUrl: string
  pdfUrl: string
  checkedAt: string
  localPdfUrl: string
  pageCount: number
  textLayerPageCount: number
  detectedArticleCount: number
  pdfSha256: string
  builtAt: string
  eli: {
    identifier: string
    status: string
    inForce: string
    legalStatusDate: string
    textHTML: boolean
    textPDF: boolean
  }
}

const kpaManifest = kpaManifestJson as LegalSourceManifest

const legalSourceManifests: Record<string, LegalSourceManifest> = {
  [kpaManifest.id]: kpaManifest,
}

export function getLegalSourceManifest(documentId: string | undefined) {
  return documentId ? legalSourceManifests[documentId] : undefined
}
