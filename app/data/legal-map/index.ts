import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { legalData } from "~/data/legal-map/data"
import type { LegalNode } from "~/data/shared/legal-types"

export type IndexedNode = LegalNode & {
  groupId: string
  groupTitle: string
  depth: number
  parentId?: string
}

function flattenNode(
  node: LegalNode,
  groupId: string,
  groupTitle: string,
  depth = 0,
  parentId?: string
): IndexedNode[] {
  const indexed: IndexedNode = {
    ...node,
    groupId,
    groupTitle,
    depth,
    parentId,
  }

  return [
    indexed,
    ...(node.children ?? []).flatMap((child) =>
      flattenNode(child, groupId, groupTitle, depth + 1, node.id)
    ),
  ]
}

export const allNodes = legalData.groups.flatMap((group) =>
  group.nodes.flatMap((node) => flattenNode(node, group.id, group.title))
)

export const nodeById = new Map(allNodes.map((node) => [node.id, node]))

export function searchNodes(query: string, groupId: string | null) {
  const normalized = query.trim().toLocaleLowerCase("uk")

  return allNodes.filter((node) => {
    if (groupId && node.groupId !== groupId) return false
    if (!normalized) return true

    const haystack = [
      node.title,
      node.polish,
      node.summary,
      node.why,
      ...(node.documents ?? []),
    ]
      .filter((value): value is NonNullable<typeof value> => Boolean(value))
      .map(legalTextPlainText)
      .join(" ")
      .toLocaleLowerCase("uk")

    return haystack.includes(normalized)
  })
}
