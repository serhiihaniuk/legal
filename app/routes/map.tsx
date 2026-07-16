import { useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router"

import { DocsLayout } from "~/components/layout"
import {
  LegalMapNavigation,
  LegalMapOverview,
  LegalNodeContent,
  legalMapNodeToc,
  legalMapOverviewToc,
  MobileLegalMapNavigation,
  resolveLegalMapNode,
  stageForNode,
} from "~/features/legal-map"
import type { LegalMapJourneyStage } from "~/data/legal-map-journey"

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

function scrollToStage(stageId: LegalMapJourneyStage["id"]) {
  requestAnimationFrame(() => {
    document
      .getElementById(`stage-${stageId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

export default function MapPage() {
  const navigate = useNavigate()
  const { nodeId } = useParams<{ nodeId?: string }>()
  const selectedNode = resolveLegalMapNode(nodeId)
  const [selectedStageId, setSelectedStageId] = useState<
    LegalMapJourneyStage["id"]
  >(() => stageForNode(selectedNode))

  const currentStageId = selectedNode
    ? stageForNode(selectedNode)
    : selectedStageId
  const toc = useMemo(
    () => (selectedNode ? legalMapNodeToc(selectedNode) : legalMapOverviewToc),
    [selectedNode]
  )

  function selectStage(stageId: LegalMapJourneyStage["id"]) {
    setSelectedStageId(stageId)
    if (selectedNode) {
      navigate("/map")
    }
    scrollToStage(stageId)
  }

  function selectNode(nextNodeId: string) {
    const nextNode = resolveLegalMapNode(nextNodeId)
    if (nextNode) setSelectedStageId(stageForNode(nextNode))
    navigate(`/map/${nextNodeId}`)
    scrollToTop()
  }

  function showOverview(stageId = currentStageId) {
    setSelectedStageId(stageId)
    navigate("/map")
    scrollToStage(stageId)
  }

  return (
    <DocsLayout
      navigation={
        <LegalMapNavigation
          selectedStageId={currentStageId}
          selectedNodeId={selectedNode?.id}
          onStageSelect={selectStage}
          onNodeSelect={selectNode}
        />
      }
      toc={toc}
    >
      <MobileLegalMapNavigation
        selectedStageId={currentStageId}
        selectedNodeId={selectedNode?.id}
        onStageSelect={selectStage}
        onNodeSelect={selectNode}
        onOverviewSelect={() => showOverview()}
      />

      {selectedNode ? (
        <LegalNodeContent
          node={selectedNode}
          onNodeSelect={selectNode}
          onOverviewSelect={showOverview}
        />
      ) : (
        <LegalMapOverview onNodeSelect={selectNode} />
      )}
    </DocsLayout>
  )
}
