import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { MemoryRouter } from "react-router"

import { ModelExplanation } from "~/features/legal-map"
import { listEvidenceDocuments } from "~/data/document-library"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import { allNodes } from "~/data/legal-map/index"
import { legalNodeGuides } from "~/data/legal-map/node-guides"
import {
  getEdition,
  listDocuments,
  listEditions,
} from "~/data/legal-library/query"
import {
  getLegalReferencePreview,
  legalReferencePreviewIdentity,
  REFERENCE_PREVIEW_MAX_SUMMARY_LENGTH,
  REFERENCE_PREVIEW_MAX_TITLE_LENGTH,
  type LegalReferencePreview,
} from "~/data/references/reference-previews"
import type { LegalReference } from "~/data/references/legal-references"
import {
  officialSourceRegistry,
  type OfficialSourceId,
} from "~/data/legal-library/references/official-sources"

const statuses = new Set<LegalReferencePreview["status"]>([
  "reviewed",
  "draft",
  "source-only",
])

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

function assertPreview(
  preview: LegalReferencePreview | undefined,
  label: string
): asserts preview is LegalReferencePreview {
  assert(preview, `Unresolved preview: ${label}`)
  assert(
    preview.identity === legalReferencePreviewIdentity(preview.reference),
    `Unstable preview identity: ${label}`
  )
  assert(
    statuses.has(preview.status),
    `Invalid preview status for ${label}: ${preview.status}`
  )
  assert(preview.title.length > 0, `Empty preview title: ${label}`)
  assert(
    preview.title.length <= REFERENCE_PREVIEW_MAX_TITLE_LENGTH,
    `Preview title exceeds bound: ${label}`
  )
  assert(
    preview.summary.length > 0 &&
      preview.summary.length <= REFERENCE_PREVIEW_MAX_SUMMARY_LENGTH,
    `Preview summary exceeds bound: ${label}`
  )
  if (preview.sourceUrl) {
    assert(
      /^https:\/\//u.test(preview.sourceUrl),
      `Preview source is not HTTPS: ${label}`
    )
  }
  if (preview.sourceOnly) {
    assert(
      preview.status === "source-only",
      `Source-only marker disagrees with status: ${label}`
    )
  }
}

async function assertStablePreview(
  reference: LegalReference,
  label: string
): Promise<LegalReferencePreview> {
  const first = await getLegalReferencePreview(reference)
  assertPreview(first, label)
  const second = await getLegalReferencePreview(reference)
  assert(second === first, `Preview cache is not stable: ${label}`)
  return first
}

/**
 * Deterministic coverage fixture for every canonical typed-reference registry.
 * It intentionally opens every preview, so lazy editorial imports are covered
 * without affecting the initial application render.
 */
export async function validateReferencePreviewFixture() {
  const counts = {
    legalDocuments: 0,
    legalProvisions: 0,
    evidenceDocuments: 0,
    mapNodes: 0,
    caseRoutes: 0,
    officialSources: 0,
  }

  const currentProvisionPreviews: LegalReferencePreview[] = []
  for (const document of listDocuments()) {
    counts.legalDocuments += 1
    await assertStablePreview(
      { kind: "legal-document", documentId: document.id },
      `document:${document.id}`
    )
    for (const edition of listEditions(document.id)) {
      assert(
        getEdition(document.id, edition.editionId),
        `Unresolved edition: ${edition.editionId}`
      )
      for (const provisionId of edition.provisionIds) {
        counts.legalProvisions += 1
        const preview = await assertStablePreview(
          {
            kind: "legal-provision",
            documentId: document.id,
            provisionId,
            editionId: edition.editionId,
          } as LegalReference,
          `provision:${document.id}:${edition.editionId}:${provisionId}`
        )
        assert(
          preview.editionId === edition.editionId,
          `Preview edition mismatch: ${document.id}:${provisionId}`
        )
        assert(preview.sourceUrl, `Missing official source: ${document.id}`)
        if (edition.editionId === document.currentEditionId) {
          currentProvisionPreviews.push(preview)
        }
      }
    }
  }

  for (const document of listEvidenceDocuments()) {
    counts.evidenceDocuments += 1
    const preview = await assertStablePreview(
      { kind: "evidence-document", documentId: document.id },
      `evidence:${document.id}`
    )
    assert(preview.purpose?.length, `Missing evidence purpose: ${document.id}`)
    assert(preview.verifiedAt, `Missing evidence verification: ${document.id}`)
  }

  for (const node of allNodes) {
    counts.mapNodes += 1
    await assertStablePreview(
      { kind: "map-node", nodeId: node.id },
      `map:${node.id}`
    )
    const modelMarkup = renderToStaticMarkup(
      createElement(
        MemoryRouter,
        { initialEntries: [`/map/${node.id}`] },
        createElement(ModelExplanation, {
          node,
          guide: legalNodeGuides[node.id],
        })
      )
    )
    assert(
      !modelMarkup.includes("[object Object]"),
      `Structured legal text was coerced in map model: ${node.id}`
    )
  }

  for (const route of caseGuideRoutes) {
    counts.caseRoutes += 1
    const preview = await assertStablePreview(
      { kind: "case-route", routeId: route.id },
      `case:${route.id}`
    )
    assert(preview.title === route.title, `Case title mismatch: ${route.id}`)
    assert(preview.subtitle, `Missing case subtitle: ${route.id}`)
  }

  for (const sourceId of Object.keys(
    officialSourceRegistry
  ) as OfficialSourceId[]) {
    counts.officialSources += 1
    const preview = await assertStablePreview(
      { kind: "official-source", sourceId },
      `source:${sourceId}`
    )
    assert(preview.sourceUrl, `Missing source URL: ${sourceId}`)
    assert(preview.sourceLabel, `Missing source label: ${sourceId}`)
  }

  const external = await assertStablePreview(
    { kind: "external", url: "https://example.com/legal-source" },
    "external:https://example.com/legal-source"
  )
  assert(
    external.status === "source-only",
    "External source must be source-only"
  )
  assert(external.domain === "example.com", "External source domain mismatch")

  const knownAmendment = await assertStablePreview(
    { kind: "external", url: "https://eli.gov.pl/eli/DU/2025/1794/ogl" },
    "external:mos-amendment"
  )
  assert(
    knownAmendment.sourceLabel?.includes("Zmiana ustawy o cudzoziemcach"),
    "Known amendment must reuse canonical authored source metadata"
  )
  assert(
    knownAmendment.summary.includes("27.04.2026"),
    "Known amendment preview must expose its useful canonical source note"
  )

  const reviewed = currentProvisionPreviews.find(
    (preview) => preview.status === "reviewed"
  )
  assert(reviewed, "No reviewed provision preview was found")
  assert(
    !reviewed.sourceOnly && !reviewed.sourceTextExcerpt,
    "Reviewed preview incorrectly uses source-only fallback"
  )
  const draft = currentProvisionPreviews.find(
    (preview) => preview.status === "draft"
  )
  assert(
    !draft,
    "Current editorial coverage must not expose an unreviewed draft preview"
  )

  const sourceOnly = currentProvisionPreviews.find(
    (preview) => preview.status === "source-only"
  )
  assert(
    !sourceOnly,
    "Current provisions must not fall back to source-only previews"
  )

  const unknownMap = await getLegalReferencePreview({
    kind: "map-node",
    nodeId: "unknown-preview-node",
  })
  assert(!unknownMap, "Unknown map reference must fail closed")
  const insecure = await getLegalReferencePreview({
    kind: "external",
    url: "http://example.com/not-https",
  })
  assert(!insecure, "Non-HTTPS external reference must fail closed")
  const malformedHttps = await getLegalReferencePreview({
    kind: "external",
    url: "https://",
  })
  assert(!malformedHttps, "Malformed HTTPS external reference must fail closed")

  return Object.freeze({
    counts,
    reviewed: reviewed.identity,
    draft: null,
    sourceOnly: null,
  })
}
