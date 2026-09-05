import layout from "./source-layout.generated.json"
import type { CorpusProvision } from "./contracts"
import type { SourceNoteRange } from "./contracts"

const sourceLayouts: Record<
  string,
  { textHash: string; ranges: SourceNoteRange[] }
> = layout

export function sourceNoteRanges(
  provision: CorpusProvision
): SourceNoteRange[] {
  const entry = sourceLayouts[`${provision.editionId}/${provision.id}`]
  return entry?.textHash === provision.sourceTextHash ? entry.ranges : []
}
