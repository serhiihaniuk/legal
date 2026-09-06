import { useEffect, useMemo, useState } from "react"
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
  type LoaderFunctionArgs,
} from "react-router"
import { DocsLayout } from "~/components/layout"
import {
  LegalMapNavigation,
  LegalMapOverview,
  LegalNodeContent,
  legalMapNodeToc,
  legalMapOverviewToc,
  MobileLegalMapNavigation,
  resolveLegalMapNode,
  chapterForNode,
} from "~/features/legal-map"
import {
  legalMapChapterForHash,
  legalMapChapters,
  legalMapCompatibilityDestinations,
  type LegalMapChapterId,
} from "~/data/legal-map/journey"

export function meta() {
  return [{ title: "Карта права — Legalizacja" }]
}

export function loader({ params }: LoaderFunctionArgs) {
  const destination = legalMapCompatibilityDestinations.get(params.nodeId ?? "")
  if (destination) return redirect(destination)
  return null
}

function scrollToChapter(chapterId: LegalMapChapterId) {
  return requestAnimationFrame(() => {
    document
      .getElementById(`stage-${chapterId}`)
      ?.scrollIntoView({ behavior: "auto", block: "start" })
  })
}

export default function MapPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { nodeId } = useParams<{ nodeId?: string }>()
  const selectedNode = resolveLegalMapNode(nodeId)
  const [hydrated, setHydrated] = useState(false)
  // URL fragments are absent from the server request. Match its first render.
  const hashChapter = legalMapChapterForHash(hydrated ? location.hash : "")
  const currentChapterId = selectedNode
    ? chapterForNode(selectedNode)
    : (hashChapter?.id ?? legalMapChapters[0].id)
  const [openChapterIds, setOpenChapterIds] = useState<string[]>([
    currentChapterId,
  ])
  const toc = useMemo(
    () => (selectedNode ? legalMapNodeToc(selectedNode) : legalMapOverviewToc),
    [selectedNode]
  )

  useEffect(() => setHydrated(true), [])

  useEffect(() => {
    if (selectedNode || !hashChapter) return
    setOpenChapterIds((ids) =>
      ids.includes(hashChapter.id) ? ids : [...ids, hashChapter.id]
    )
    const frame = scrollToChapter(hashChapter.id)
    return () => cancelAnimationFrame(frame)
  }, [selectedNode, hashChapter])

  function selectChapter(chapterId: LegalMapChapterId) {
    setOpenChapterIds((ids) =>
      ids.includes(chapterId) ? ids : [...ids, chapterId]
    )
    navigate(`/map#stage-${chapterId}`)
    scrollToChapter(chapterId)
  }

  function selectNode(nextNodeId: string) {
    navigate(`/map/${nextNodeId}`)
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
  }

  return (
    <DocsLayout
      navigation={
        <LegalMapNavigation
          selectedChapterId={currentChapterId}
          selectedNodeId={selectedNode?.id}
          onChapterSelect={selectChapter}
          onNodeSelect={selectNode}
        />
      }
      toc={toc}
    >
      <MobileLegalMapNavigation
        selectedChapterId={currentChapterId}
        selectedNodeId={selectedNode?.id}
        onChapterSelect={selectChapter}
        onNodeSelect={selectNode}
        onOverviewSelect={() => selectChapter(currentChapterId)}
      />
      {selectedNode ? (
        <LegalNodeContent
          node={selectedNode}
          onNodeSelect={selectNode}
          onOverviewSelect={selectChapter}
        />
      ) : (
        <LegalMapOverview
          onNodeSelect={selectNode}
          openChapterIds={openChapterIds}
          onOpenChaptersChange={setOpenChapterIds}
        />
      )}
    </DocsLayout>
  )
}
