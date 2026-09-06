import { ArrowRight, FileCheck2, Map } from "lucide-react"

import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText, OfficialSourceEntry } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import {
  legalMapChapters,
  legalMapChapterForNode,
  type LegalMapChapter,
} from "~/data/legal-map/journey"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { LegacyLegalNodeGuide } from "~/data/legal-map/node-guide-types"
import { legalNodeGuides } from "~/data/legal-map/node-guides"
import { resolveMapTopicPublication } from "~/data/legal-knowledge"
import { nodeById, type IndexedNode } from "~/data/legal-map/index"
import type { LegalNode } from "~/data/shared/legal-types"

import { descendantNodes, uniqueStatements } from "../model/legal-map-model"

function LinkedNodeRows({
  nodes,
  onSelect,
}: {
  nodes: LegalNode[]
  onSelect: (nodeId: string) => void
}) {
  return (
    <ul data-not-typeset className="not-typeset mt-5 border-y">
      {nodes.map((node) => (
        <li key={node.id} className="border-b last:border-b-0">
          <Button
            type="button"
            variant="ghost"
            onClick={() => onSelect(node.id)}
            className="group h-auto w-full justify-start rounded-none px-0 py-4 text-left whitespace-normal hover:bg-transparent"
          >
            <span className="min-w-0 flex-1">
              <strong className="block text-sm leading-5 font-medium">
                {node.title}
              </strong>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                {legalTextPlainText(node.polish)}
              </span>
            </span>
            <ArrowRight data-icon="inline-end" />
          </Button>
        </li>
      ))}
    </ul>
  )
}

function StatementBlock({
  title,
  items,
}: {
  title: string
  items: LegalTextValue[]
}) {
  if (!items.length) return null

  return (
    <div className="flex flex-col gap-4 py-5">
      <h3 className="m-0 text-base font-medium">{title}</h3>
      {items.map((item) => (
        <p key={legalTextPlainText(item)} className="m-0">
          <LegalText text={item} />
        </p>
      ))}
    </div>
  )
}

export function ModelExplanation({
  node,
  guide,
}: {
  node: IndexedNode
  guide?: LegacyLegalNodeGuide
}) {
  return (
    <div data-not-typeset className="not-typeset mt-6 border-y">
      <StatementBlock
        title="Що регулює"
        items={uniqueStatements(guide?.regulated ?? [node.summary])}
      />
      <StatementBlock
        title="Коли застосовується"
        items={uniqueStatements(guide?.appliesWhen)}
      />
      <StatementBlock
        title="Умови"
        items={uniqueStatements(guide?.conditions)}
      />
      <StatementBlock
        title="Винятки й межі"
        items={uniqueStatements(guide?.exceptions)}
      />
      <StatementBlock
        title="Правовий наслідок"
        items={uniqueStatements(
          guide?.consequences ?? [node.why ?? node.summary]
        )}
      />
    </div>
  )
}

export function LegalNodeContent({
  node,
  onNodeSelect,
  onOverviewSelect,
}: {
  node: IndexedNode
  onNodeSelect: (nodeId: string) => void
  onOverviewSelect: (stageId: LegalMapChapter["id"]) => void
}) {
  const publication = resolveMapTopicPublication(node.id)
  const contentNode: IndexedNode = publication
    ? {
        ...node,
        title: publication.title,
        polish: publication.polish,
        summary: publication.summary,
        sources: [...publication.sources],
      }
    : node
  const stage = legalMapChapterForNode(node.id) ?? legalMapChapters[0]
  const relatedIds = new Set([
    ...descendantNodes(node.children ?? []).map((item) => item.id),
    ...(node.related ?? []),
  ])
  const related = [...relatedIds]
    .map((id) => nodeById.get(id))
    .filter((item): item is IndexedNode => Boolean(item))
  const guide = publication?.guide ?? legalNodeGuides[node.id]
  const article = guide?.kind === "article" ? guide : undefined
  const legacyGuide = guide?.kind === "article" ? undefined : guide
  const introduction = guide?.introduction ?? [contentNode.summary]
  const procedure = uniqueStatements(legacyGuide?.procedure, contentNode.steps)
  const practicalContext = uniqueStatements(
    legacyGuide?.foreignersContext,
    contentNode.why ? [contentNode.why] : undefined
  )

  return (
    <DocumentArticle>
      <DocumentHeader
        id="node-overview"
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">
              Розділ {stage.order} з {legalMapChapters.length}
            </Badge>
            <Badge variant="outline">{stage.title}</Badge>
          </>
        }
      >
        <h1>{contentNode.title}</h1>
        <p className="lead">
          <LegalText text={contentNode.polish} />
        </p>
        {introduction.map((paragraph) => (
          <p key={legalTextPlainText(paragraph)}>
            <LegalText text={paragraph} />
          </p>
        ))}
        <div data-not-typeset className="not-typeset mt-5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOverviewSelect(stage.id)}
          >
            <Map data-icon="inline-start" />
            До розділу карти
          </Button>
        </div>
      </DocumentHeader>

      {article ? (
        article.sections.map((section) => (
          <section key={section.id} id={`node-section-${section.id}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <LegalText text={paragraph} />
              </p>
            ))}
          </section>
        ))
      ) : (
        <>
          <section id="node-model">
            <h2>Правова модель</h2>
            <ModelExplanation node={contentNode} guide={legacyGuide} />
          </section>

          <section id="node-workflow">
            <h2>Як це працює у справі іноземця</h2>
            <StatementBlock
              title="Практичне значення"
              items={practicalContext}
            />
            <StatementBlock title="Послідовність роботи" items={procedure} />
          </section>

          {contentNode.documents?.length || contentNode.checkpoints?.length ? (
            <section id="node-materials">
              <h2>Документи і контроль</h2>
              <p>
                Назва документа сама по собі не доводить виконання умови. У
                справі перевіряйте його зміст, період, автора, форму та зв’язок
                із фактом.
              </p>
              {contentNode.documents?.length ? (
                <div data-not-typeset className="not-typeset mt-6 border-y">
                  {contentNode.documents.map((item) => (
                    <div
                      key={legalTextPlainText(item)}
                      className="flex gap-3 border-b py-4 last:border-b-0"
                    >
                      <FileCheck2 className="mt-0.5 shrink-0 text-muted-foreground" />
                      <p className="text-sm leading-6">
                        <LegalText text={item} />
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
              {contentNode.checkpoints?.length ? (
                <>
                  <h3>Що перевірити у матеріалах справи</h3>
                  <ul>
                    {contentNode.checkpoints.map((item) => (
                      <li key={legalTextPlainText(item)}>
                        <LegalText text={item} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          ) : null}
        </>
      )}

      {related.length ? (
        <section id="node-relations">
          <h2>Пов’язані теми</h2>
          <LinkedNodeRows nodes={related} onSelect={onNodeSelect} />
        </section>
      ) : null}

      <section id="node-regulation">
        <h2>Правова основа й офіційні джерела</h2>
        <p>
          <strong>Локатор у праві:</strong>{" "}
          <LegalText text={contentNode.polish} context="reference-section" />
        </p>
        {contentNode.sources?.length ? (
          <ul data-not-typeset className="not-typeset mt-5 grid gap-4">
            {contentNode.sources.map((source, index) => (
              <li key={`${source.url}-${index}`}>
                {index > 0 ? <Separator className="mb-4" /> : null}
                <OfficialSourceEntry source={source} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Точну редакцію зазначеної норми треба перевірити в офіційному акті.
          </p>
        )}
      </section>
    </DocumentArticle>
  )
}
