import type { TocItem } from "~/components/layout"
import {
  legalMapChapters,
  legalMapChapterForNode,
  legalMapChapterNodes,
  type LegalMapChapter,
} from "~/data/legal-map/journey"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import { nodeById, type IndexedNode } from "~/data/legal-map/index"
import type { LegalNode } from "~/data/shared/legal-types"
import { resolveMapTopicPublication } from "~/data/legal-knowledge"

export const legalMapOverviewToc: TocItem[] = [
  { href: "#map-overview", label: "Що пояснює карта" },
  { href: "#map-connections", label: "Як пов'язані розділи" },
  { href: "#map-example", label: "Приклад із двома документами" },
  ...legalMapChapters.map((stage) => ({
    href: `#stage-${stage.id}`,
    label: `${stage.order}. ${stage.title}`,
  })),
]

export function legalMapNodeToc(node: IndexedNode): TocItem[] {
  const guide = resolveMapTopicPublication(node.id)?.guide
  return [
    { href: "#node-overview", label: "Що це і де в справі" },
    ...(guide?.kind === "article"
      ? guide.sections.map((section) => ({
          href: `#node-section-${section.id}`,
          label: section.title,
        }))
      : [
          { href: "#node-model", label: "Правова модель" },
          { href: "#node-workflow", label: "Робота зі справою" },
          ...(node.documents?.length || node.checkpoints?.length
            ? [{ href: "#node-materials", label: "Документи і контроль" }]
            : []),
        ]),
    ...(node.children?.length || node.related?.length
      ? [{ href: "#node-relations", label: "Пов’язані теми" }]
      : []),
    { href: "#node-regulation", label: "Правова основа" },
  ]
}

export function chapterNodes(stage: LegalMapChapter) {
  return legalMapChapterNodes(stage)
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

export function chapterForNode(node?: IndexedNode) {
  return legalMapChapterForNode(node?.id)?.id ?? legalMapChapters[0].id
}
