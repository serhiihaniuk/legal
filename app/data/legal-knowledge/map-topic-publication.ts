import { nodeById, type IndexedNode } from "~/data/legal-map"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { OfficialSource } from "~/data/shared/legal-types"

import { knowledgeUnitBySubjectKey } from "./registry"
import type { KnowledgeUnit, MapTopicReference } from "./contracts"
import type { LegalMapTopicBody } from "~/data/legal-map/editorial/topics"

export type MapTopicPublicationStatus = "reviewed" | "draft" | "source-only"

type MapTopicSubject = {
  family: "map-topic"
  reference: MapTopicReference
}

export type MapTopicKnowledgeUnit = KnowledgeUnit<
  LegalMapTopicBody,
  MapTopicSubject
>

export type MapTopicPublication = {
  unit: MapTopicKnowledgeUnit
  node: IndexedNode
  title: string
  polish: LegalMapTopicBody["polish"]
  summary: MapTopicKnowledgeUnit["summary"]
  guide: LegalNodeGuide
  sources: readonly OfficialSource[]
  status: MapTopicPublicationStatus
}

function mapTopicStatus(
  reviewStatus: MapTopicKnowledgeUnit["review"]["reviewStatus"]
): MapTopicPublicationStatus {
  if (reviewStatus === "reviewed") return "reviewed"
  if (reviewStatus === "draft") return "draft"
  return "source-only"
}

/** Resolve one authored map topic without changing the map's structural index. */
export function resolveMapTopicPublication(
  nodeId: string
): MapTopicPublication | undefined {
  const node = nodeById.get(nodeId)
  const unit = knowledgeUnitBySubjectKey.get(`map-topic:${nodeId}`)
  if (!node || !unit || unit.subject.family !== "map-topic") return undefined

  const mapUnit = unit as MapTopicKnowledgeUnit
  return {
    unit: mapUnit,
    node,
    title: mapUnit.body.title,
    polish: mapUnit.body.polish,
    summary: mapUnit.summary,
    guide: mapUnit.body.guide,
    sources: mapUnit.body.sources,
    status: mapTopicStatus(mapUnit.review.reviewStatus),
  }
}
