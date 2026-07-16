import type { TocItem } from "~/components/layout"
import {
  legalMapJourney,
  legalMapJourneyStageForNode,
  type LegalMapJourneyStage,
} from "~/data/legal-map-journey"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import { nodeById, type IndexedNode } from "~/data/legal-index"
import type { LegalNode } from "~/data/legal-types"

export const legalMapOverviewToc: TocItem[] = [
  { href: "#map-overview", label: "Як влаштована карта" },
  ...legalMapJourney.map((stage) => ({
    href: `#stage-${stage.id}`,
    label: `${stage.order}. ${stage.title}`,
  })),
]

export function legalMapNodeToc(node: IndexedNode): TocItem[] {
  return [
    { href: "#node-overview", label: "Що це і де в справі" },
    { href: "#node-model", label: "Правова модель" },
    { href: "#node-workflow", label: "Робота зі справою" },
    ...(node.documents?.length || node.checkpoints?.length
      ? [{ href: "#node-materials", label: "Документи і контроль" }]
      : []),
    ...(node.children?.length || node.related?.length
      ? [{ href: "#node-relations", label: "Пов’язані теми" }]
      : []),
    { href: "#node-regulation", label: "Правова основа" },
  ]
}

export function journeyNodes(stage: LegalMapJourneyStage) {
  return stage.nodeIds
    .map((nodeId) => nodeById.get(nodeId))
    .filter((node): node is IndexedNode => Boolean(node))
}

export function descendantNodes(
  nodes: LegalNode[],
  depth = 0
): Array<LegalNode & { depth: number }> {
  return nodes.flatMap((node) => [
    { ...node, depth },
    ...descendantNodes(node.children ?? [], depth + 1),
  ])
}

export function nodePath(node: IndexedNode) {
  const path: IndexedNode[] = [node]
  let parentId = node.parentId

  while (parentId) {
    const parent = nodeById.get(parentId)
    if (!parent) break
    path.unshift(parent)
    parentId = parent.parentId
  }

  return path
}

export function uniqueStatements(
  ...groups: Array<LegalTextValue[] | undefined>
) {
  const unique = new globalThis.Map<string, LegalTextValue>()
  for (const item of groups.flatMap((group) => group ?? []).filter(Boolean)) {
    unique.set(legalTextPlainText(item), item)
  }
  return [...unique.values()]
}

export function resolveLegalMapNode(nodeId?: string) {
  return nodeId ? nodeById.get(nodeId) : undefined
}

export function stageForNode(node?: IndexedNode) {
  return legalMapJourneyStageForNode(node?.id)?.id ?? legalMapJourney[0].id
}
