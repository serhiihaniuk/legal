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
  legalMapJourney,
  type LegalMapJourneyStage,
} from "~/data/legal-map-journey"

import { journeyNodes } from "../model/legal-map-model"

export function LegalMapNavigation({
  selectedStageId,
  selectedNodeId,
  onStageSelect,
  onNodeSelect,
}: {
  selectedStageId: LegalMapJourneyStage["id"]
  selectedNodeId?: string
  onStageSelect: (stageId: LegalMapJourneyStage["id"]) => void
  onNodeSelect: (nodeId: string) => void
}) {
  return (
    <DocsSidebar ariaLabel="Шлях адміністративної справи">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <div className="px-2">
        <p className="text-xs font-medium text-muted-foreground">Шлях справи</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Від першої орієнтації до захисту після рішення.
        </p>
      </div>
      <DocsSidebarSection title="Етапи справи" className="mt-4">
        <DocsSidebarList ordered>
          {legalMapJourney.map((stage) => {
            const nestedTopics =
              stage.id === selectedStageId ? (
                <ul className="ml-4 border-l pl-2">
                  {journeyNodes(stage).map((node) => (
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
                active={stage.id === selectedStageId}
                onClick={() => onStageSelect(stage.id)}
                ariaPressed={stage.id === selectedStageId}
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
  selectedStageId,
  selectedNodeId,
  onStageSelect,
  onNodeSelect,
  onOverviewSelect,
}: {
  selectedStageId: LegalMapJourneyStage["id"]
  selectedNodeId?: string
  onStageSelect: (stageId: LegalMapJourneyStage["id"]) => void
  onNodeSelect: (nodeId: string) => void
  onOverviewSelect: () => void
}) {
  const stage = legalMapJourney.find((item) => item.id === selectedStageId)
  const nodes = stage ? journeyNodes(stage) : []
  const stageNavigationOptions: readonly SectionNavigationOption<
    LegalMapJourneyStage["id"]
  >[] = legalMapJourney.map((item) => ({
    value: item.id,
    label: item.title,
    selectLabel: `${item.order}. ${item.title} · ${item.nodeIds.length} тем`,
  }))
  const nodeNavigationOptions: readonly SectionNavigationOption[] = [
    { value: "", label: "Огляд маршруту" },
    ...nodes.map((node) => ({ value: node.id, label: node.title })),
  ]

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <MobileSectionSelect
        label="Етап справи"
        value={selectedStageId}
        options={stageNavigationOptions}
        onValueChange={onStageSelect}
      />

      <MobileSectionSelect
        label="Тема"
        value={selectedNodeId ?? ""}
        options={nodeNavigationOptions}
        onValueChange={(nodeId) => {
          if (nodeId) onNodeSelect(nodeId)
          else onOverviewSelect()
        }}
      />
    </div>
  )
}
