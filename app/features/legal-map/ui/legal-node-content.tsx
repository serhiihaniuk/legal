import { ArrowRight, CheckCircle2, FileCheck2, Map } from "lucide-react"

import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText, OfficialSourceEntry } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { legalData } from "~/data/legal-data"
import {
  legalMapJourney,
  legalMapJourneyStageForNode,
  type LegalMapJourneyStage,
} from "~/data/legal-map-journey"
import {
  joinLegalText,
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { LegalNodeGuide } from "~/data/legal-node-guide-types"
import { legalNodeGuides } from "~/data/legal-node-guides"
import { nodeById, type IndexedNode } from "~/data/legal-index"
import type { LegalNode } from "~/data/legal-types"

import {
  descendantNodes,
  nodePath,
  uniqueStatements,
} from "../model/legal-map-model"

function LinkedNodeRows({
  nodes,
  onSelect,
}: {
  nodes: Array<LegalNode & { depth?: number }>
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
            style={{ paddingInlineStart: `${(node.depth ?? 0) * 1.25}rem` }}
          >
            <span className="min-w-0 flex-1">
              <strong className="block text-sm leading-5 font-medium">
                {node.title}
              </strong>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                <LegalText text={node.polish} />
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
    <div className="grid gap-3 border-b py-5 last:border-b-0 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
      <h3 className="m-0 text-sm font-medium">{title}</h3>
      {items.length === 1 ? (
        <p className="m-0">
          <LegalText text={items[0]} />
        </p>
      ) : (
        <ul className="m-0">
          {items.map((item) => (
            <li key={legalTextPlainText(item)}>
              <LegalText text={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function ModelExplanation({
  node,
  guide,
}: {
  node: IndexedNode
  guide?: LegalNodeGuide
}) {
  const subject = uniqueStatements(guide?.regulated ?? [node.summary])
  const activation = uniqueStatements(guide?.appliesWhen, guide?.conditions)
  const boundaryAndEffect = uniqueStatements(
    guide?.exceptions,
    guide?.consequences ?? [node.why ?? node.summary]
  )

  return (
    <div>
      {subject.length ? (
        <p>
          <LegalText text={joinLegalText(subject, " ")} />
        </p>
      ) : null}
      {activation.length ? (
        <p>
          <LegalText text={joinLegalText(activation, " ")} />
        </p>
      ) : null}
      {boundaryAndEffect.length ? (
        <p>
          <LegalText text={joinLegalText(boundaryAndEffect, " ")} />
        </p>
      ) : null}
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
  onOverviewSelect: (stageId: LegalMapJourneyStage["id"]) => void
}) {
  const group = legalData.groups.find((item) => item.id === node.groupId)
  const stage = legalMapJourneyStageForNode(node.id) ?? legalMapJourney[0]
  const path = nodePath(node)
  const children = descendantNodes(node.children ?? [])
  const related = (node.related ?? [])
    .map((id) => nodeById.get(id))
    .filter((item): item is IndexedNode => Boolean(item))
  const guide = legalNodeGuides[node.id]
  const introduction = guide?.introduction ?? [node.summary]
  const procedure = uniqueStatements(guide?.procedure, node.steps)
  const practicalContext = uniqueStatements(
    guide?.foreignersContext,
    node.why ? [node.why] : undefined
  )

  return (
    <DocumentArticle>
      <DocumentHeader
        id="node-overview"
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">
              Етап {stage.order} з {legalMapJourney.length}
            </Badge>
            <Badge variant="outline">{stage.title}</Badge>
            <Badge variant="outline">
              {group?.shortTitle ?? node.groupTitle}
            </Badge>
          </>
        }
      >
        <p
          data-not-typeset
          className="not-typeset mb-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground"
        >
          {path.map((item, index) => (
            <span key={item.id}>
              {index > 0 ? (
                <span aria-hidden="true" className="mr-2">
                  /
                </span>
              ) : null}
              {item.title}
            </span>
          ))}
        </p>
        <h1>{node.title}</h1>
        <p className="lead">
          <LegalText text={node.polish} />
        </p>
        {introduction.map((paragraph) => (
          <p key={legalTextPlainText(paragraph)}>
            <LegalText text={paragraph} />
          </p>
        ))}
        <div data-not-typeset className="not-typeset mt-6 border-y py-5">
          <p className="text-xs font-medium text-muted-foreground">
            Питання етапу
          </p>
          <p className="mt-2 text-sm leading-6">
            <LegalText text={stage.question} />
          </p>
          <p className="mt-4 text-xs font-medium text-muted-foreground">
            Результат етапу
          </p>
          <p className="mt-2 text-sm leading-6">
            <LegalText text={stage.outcome} />
          </p>
        </div>
        <div data-not-typeset className="not-typeset mt-5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOverviewSelect(stage.id)}
          >
            <Map data-icon="inline-start" />
            Показати етап на карті
          </Button>
        </div>
      </DocumentHeader>

      <section id="node-model">
        <h2>Правова модель</h2>
        <ModelExplanation node={node} guide={guide} />
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
      </section>

      <section id="node-workflow">
        <h2>Як це працює у справі іноземця</h2>
        <StatementBlock title="Практичне значення" items={practicalContext} />
        <StatementBlock title="Послідовність роботи" items={procedure} />
      </section>

      {node.documents?.length || node.checkpoints?.length ? (
        <section id="node-materials">
          <h2>Документи і контроль</h2>
          <p>
            Назва документа сама по собі не доводить виконання умови. У справі
            перевіряйте його зміст, період, автора, форму та зв’язок із фактом.
          </p>
          {node.documents?.length ? (
            <div data-not-typeset className="not-typeset mt-6 border-y">
              {node.documents.map((item) => (
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
          {node.checkpoints?.length ? (
            <>
              <h3>Що перевірити у матеріалах справи</h3>
              <ul data-not-typeset className="not-typeset mt-4 grid gap-3">
                {node.checkpoints.map((item) => (
                  <li
                    key={legalTextPlainText(item)}
                    className="flex gap-3 text-sm leading-6"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-muted-foreground" />
                    <span>
                      <LegalText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ) : null}

      {children.length || related.length ? (
        <section id="node-relations">
          <h2>Пов’язані теми</h2>
          <p>
            Ці переходи продовжують або уточнюють тему. Вони є навігацією по
            карті, а не окремими посиланнями всередині навчального тексту.
          </p>
          {children.length ? (
            <>
              <h3>Деталізація цього інституту</h3>
              <LinkedNodeRows nodes={children} onSelect={onNodeSelect} />
            </>
          ) : null}
          {related.length ? (
            <>
              <h3>Суміжні інститути</h3>
              <LinkedNodeRows nodes={related} onSelect={onNodeSelect} />
            </>
          ) : null}
        </section>
      ) : null}

      <section id="node-regulation">
        <h2>Правова основа й офіційні джерела</h2>
        <p>
          <strong>Локатор у праві:</strong>{" "}
          <LegalText text={node.polish} context="reference-section" />
        </p>
        {node.sources?.length ? (
          <ul data-not-typeset className="not-typeset mt-5 grid gap-4">
            {node.sources.map((source, index) => (
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
