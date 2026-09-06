import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
  DocsSidebarList,
  DocsSidebarSection,
} from "~/components/layout"
import {
  MobileSectionSelect,
  type SectionNavigationOption,
} from "~/components/patterns/section-navigation"
import {
  legalMapChapters,
  type LegalMapChapter,
} from "~/data/legal-map/journey"

import { chapterNodes } from "../model/legal-map-model"

export function LegalMapNavigation({
  selectedChapterId,
  selectedNodeId,
  onChapterSelect,
  onNodeSelect,
}: {
  selectedChapterId: LegalMapChapter["id"]
  selectedNodeId?: string
  onChapterSelect: (stageId: LegalMapChapter["id"]) => void
  onNodeSelect: (nodeId: string) => void
}) {
  return (
    <DocsSidebar ariaLabel="Зміст карти права">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <div className="px-2">
        <p className="text-xs font-medium text-muted-foreground">Карта права</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Поняття, правила та їхні зв'язки у справі іноземця.
        </p>
      </div>
      <DocsSidebarSection title="Розділи карти" className="mt-4">
        <DocsSidebarList ordered>
          {legalMapChapters.map((stage) => {
            const nestedTopics =
              stage.id === selectedChapterId ? (
                <ul className="ml-4 border-l pl-2">
                  {chapterNodes(stage).map((node) => (
                    <DocsSidebarItem
                      key={node.id}
                      active={node.id === selectedNodeId}
                      onClick={() => onNodeSelect(node.id)}
                      className="min-h-8 px-2 py-1 text-xs leading-5"
                      ariaPressed={node.id === selectedNodeId}
                    >
                      {node.title}
                    </DocsSidebarItem>
                  ))}
                </ul>
              ) : null
            return (
              <DocsSidebarItem
                key={stage.id}
                active={stage.id === selectedChapterId}
                onClick={() => onChapterSelect(stage.id)}
                ariaPressed={stage.id === selectedChapterId}
                className="min-h-11 items-start px-2 py-2"
                nested={nestedTopics}
              >
                <span className="flex min-w-0 gap-2">
                  <span className="w-6 shrink-0 text-xs text-muted-foreground">
                    {String(stage.order).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm leading-5">
                      {stage.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-4 text-muted-foreground">
                      {stage.nodeIds.length} тем
                    </span>
                  </span>
                </span>
              </DocsSidebarItem>
            )
          })}
        </DocsSidebarList>
      </DocsSidebarSection>
    </DocsSidebar>
  )
}

export function MobileLegalMapNavigation({
  selectedChapterId,
  selectedNodeId,
  onChapterSelect,
  onNodeSelect,
  onOverviewSelect,
}: {
  selectedChapterId: LegalMapChapter["id"]
  selectedNodeId?: string
  onChapterSelect: (stageId: LegalMapChapter["id"]) => void
  onNodeSelect: (nodeId: string) => void
  onOverviewSelect: () => void
}) {
  const stage = legalMapChapters.find((item) => item.id === selectedChapterId)
  const nodes = stage ? chapterNodes(stage) : []
  const stageNavigationOptions: readonly SectionNavigationOption<
    LegalMapChapter["id"]
  >[] = legalMapChapters.map((item) => ({
    value: item.id,
    label: item.title,
    selectLabel: `${item.order}. ${item.title} · ${item.nodeIds.length} тем`,
  }))
  const nodeNavigationOptions: readonly SectionNavigationOption[] = [
    { value: "map-overview", label: "Зміст карти" },
    ...nodes.map((node) => ({ value: node.id, label: node.title })),
  ]

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <MobileSectionSelect
        label="Розділ карти"
        value={selectedChapterId}
        options={stageNavigationOptions}
        onValueChange={onChapterSelect}
      />

      <MobileSectionSelect
        label="Тема"
        value={selectedNodeId ?? "map-overview"}
        options={nodeNavigationOptions}
        onValueChange={(nodeId) => {
          if (nodeId !== "map-overview") onNodeSelect(nodeId)
          else onOverviewSelect()
        }}
      />
    </div>
  )
}
