import { useMemo } from "react"
import { useParams, useSearchParams } from "react-router"

import { DocsLayout, type TocItem } from "~/components/layout"
import { getDocument } from "~/data/legal-library"
import { useUrlSelection } from "~/hooks/use-url-selection"

import { KpaArticlesContent, kpaArticlesToc } from "./kpa-articles-content"
import {
  KpaLearningContent,
  kpaLearningContentToc,
} from "./kpa-learning-content"
import { KpaPracticeContent, kpaPracticeToc } from "./kpa-practice-content"
import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "./law-document-navigation"
import {
  type KpaMode,
  type KpaRouteLoaderData,
  type KpaSelection,
  resolveKpaRouteState,
  toKpaSelectionUrl,
} from "../model/kpa-route"
import { KpaNavigation, MobileKpaNavigation } from "./kpa-route-navigation"

export function KpaGuideRoute({
  explanation,
  moduleArticleExplanations,
}: KpaRouteLoaderData) {
  const [searchParams] = useSearchParams()
  const params = useParams<{ moduleId?: string; practiceId?: string }>()
  const state = resolveKpaRouteState({
    params,
    searchParams,
  })
  const kpaDocument = getDocument("kpa")

  const toc = useMemo<readonly TocItem[]>(() => {
    if (state.mode === "articles") return kpaArticlesToc
    if (state.mode === "practice") return kpaPracticeToc
    return kpaLearningContentToc
  }, [state.mode])

  const urlSelection = useUrlSelection<KpaSelection>({
    value: { kind: "mode", value: state.mode },
    to: (selection) =>
      toKpaSelectionUrl({
        selection,
        state,
        searchParams,
      }),
  })

  function changeMode(nextMode: KpaMode) {
    urlSelection.select({ kind: "mode", value: nextMode })
  }

  function changeModule(id: string) {
    urlSelection.select({ kind: "module", value: id })
  }

  function changeArticle(article: string) {
    urlSelection.select({ kind: "article", value: article })
  }

  return (
    <DocsLayout
      navigation={
        state.canonicalLawMode && kpaDocument ? (
          <LawDocumentNavigation
            document={kpaDocument}
            activeSection={state.mode === "practice" ? "practice" : "learning"}
            activeModuleId={state.selectedModule}
            activePracticeId={params.practiceId}
          />
        ) : (
          <KpaNavigation
            mode={state.mode}
            onModeChange={changeMode}
            selectedModule={state.selectedModule}
            onModuleChange={changeModule}
            selectedArticle={state.selectedArticle}
            onArticleChange={changeArticle}
          />
        )
      }
      toc={toc}
    >
      {state.canonicalLawMode && kpaDocument ? (
        <LawDocumentMobileNavigation
          document={kpaDocument}
          activeSection={state.mode === "practice" ? "practice" : "learning"}
          activeModuleId={state.selectedModule}
          activePracticeId={params.practiceId}
        />
      ) : (
        <MobileKpaNavigation
          mode={state.mode}
          onModeChange={changeMode}
          selectedModule={state.selectedModule}
          onModuleChange={changeModule}
        />
      )}

      {state.mode === "learning" ? (
        <KpaLearningContent
          selectedId={state.selectedModule}
          articleExplanations={moduleArticleExplanations}
          onSelectModule={changeModule}
        />
      ) : null}
      {state.mode === "articles" ? (
        <KpaArticlesContent
          selectedArticle={state.selectedArticle}
          explanation={explanation!}
          onSelectArticle={changeArticle}
        />
      ) : null}
      {state.mode === "practice" ? <KpaPracticeContent /> : null}
    </DocsLayout>
  )
}
