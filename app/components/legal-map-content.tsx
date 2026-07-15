import { ArrowRight, CheckCircle2, FileCheck2, Map, Scale } from "lucide-react"

import type { TocItem } from "~/components/docs-layout"
import { LegalText } from "~/components/legal-reference-text"
import { OfficialSourceEntry } from "~/components/official-source"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { legalData } from "~/data/legal-data"
import {
  legalMapJourney,
  legalMapJourneyStageForNode,
  type LegalMapJourneyStage,
} from "~/data/legal-map-journey"
import type { LegalNodeGuide } from "~/data/legal-node-guide-types"
import { legalNodeGuides } from "~/data/legal-node-guides"
import { nodeById, type IndexedNode } from "~/data/legal-index"
import type { LegalNode } from "~/data/legal-types"

export const legalMapOverviewToc: TocItem[] = [
  { href: "#map-overview", label: "Як влаштована карта" },
  ...legalMapJourney.map((stage) => ({
    href: `#stage-${stage.id}`,
    label: `${stage.order}. ${stage.title}`,
  })),
]

export function legalMapNodeToc(node: IndexedNode): TocItem[] {
  return [
    { href: "#node-overview", label: "Що це і де в справі" },
    { href: "#node-model", label: "Правова модель" },
    { href: "#node-workflow", label: "Робота зі справою" },
    ...(node.documents?.length || node.checkpoints?.length
      ? [{ href: "#node-materials", label: "Документи і контроль" }]
      : []),
    ...(node.children?.length || node.related?.length
      ? [{ href: "#node-relations", label: "Пов’язані теми" }]
      : []),
    { href: "#node-regulation", label: "Правова основа" },
  ]
}

function journeyNodes(stage: LegalMapJourneyStage) {
  return stage.nodeIds
    .map((nodeId) => nodeById.get(nodeId))
    .filter((node): node is IndexedNode => Boolean(node))
}

function descendantNodes(
  nodes: LegalNode[],
  depth = 0
): Array<LegalNode & { depth: number }> {
  return nodes.flatMap((node) => [
    { ...node, depth },
    ...descendantNodes(node.children ?? [], depth + 1),
  ])
}

function nodePath(node: IndexedNode) {
  const path: IndexedNode[] = [node]
  let parentId = node.parentId

  while (parentId) {
    const parent = nodeById.get(parentId)
    if (!parent) break
    path.unshift(parent)
    parentId = parent.parentId
  }

  return path
}

function MapNavigationRow({
  stage,
  active,
  onClick,
}: {
  stage: LegalMapJourneyStage
  active?: boolean
  onClick: () => void
}) {
  return (
    <li>
      <Button
        type="button"
        variant={active ? "secondary" : "ghost"}
        onClick={onClick}
        className="h-auto w-full justify-start px-2 py-2 text-left whitespace-normal"
      >
        <span className="w-6 shrink-0 text-xs text-muted-foreground">
          {String(stage.order).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm leading-5">{stage.title}</span>
          <span className="mt-0.5 block text-xs leading-4 text-muted-foreground">
            {stage.nodeIds.length} тем
          </span>
        </span>
      </Button>
    </li>
  )
}

function TopicNavigationRow({
  node,
  active,
  onClick,
}: {
  node: IndexedNode
  active?: boolean
  onClick: () => void
}) {
  return (
    <li>
      <Button
        type="button"
        variant={active ? "secondary" : "ghost"}
        size="sm"
        onClick={onClick}
        className="h-auto w-full justify-start px-2 py-1.5 text-left whitespace-normal"
      >
        <span className="min-w-0 text-xs leading-5">{node.title}</span>
      </Button>
    </li>
  )
}

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
  const selectedStage = legalMapJourney.find(
    (stage) => stage.id === selectedStageId
  )

  return (
    <nav aria-label="Шлях адміністративної справи" className="pb-10">
      <section>
        <p className="px-2 text-xs font-medium text-muted-foreground">
          Шлях справи
        </p>
        <p className="mt-1 px-2 text-xs leading-5 text-muted-foreground">
          Від першої орієнтації до захисту після рішення.
        </p>
        <ol className="mt-2 grid gap-0.5">
          {legalMapJourney.map((stage) => (
            <MapNavigationRow
              key={stage.id}
              stage={stage}
              active={stage.id === selectedStageId}
              onClick={() => onStageSelect(stage.id)}
            />
          ))}
        </ol>
      </section>

      {selectedStage ? (
        <section className="mt-8">
          <p className="px-2 text-xs font-medium text-muted-foreground">
            Теми етапу {selectedStage.order}
          </p>
          <ul className="mt-2 grid gap-0.5">
            {journeyNodes(selectedStage).map((node) => (
              <TopicNavigationRow
                key={node.id}
                node={node}
                active={node.id === selectedNodeId}
                onClick={() => onNodeSelect(node.id)}
              />
            ))}
          </ul>
        </section>
      ) : null}
    </nav>
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

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <label className="grid min-w-0 gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Етап справи
        </span>
        <select
          value={selectedStageId}
          onChange={(event) =>
            onStageSelect(event.target.value as LegalMapJourneyStage["id"])
          }
          className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          {legalMapJourney.map((item) => (
            <option key={item.id} value={item.id}>
              {item.order}. {item.title} · {item.nodeIds.length} тем
            </option>
          ))}
        </select>
      </label>

      <label className="grid min-w-0 gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">Тема</span>
        <select
          value={selectedNodeId ?? ""}
          onChange={(event) => {
            if (event.target.value) onNodeSelect(event.target.value)
            else onOverviewSelect()
          }}
          className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          <option value="">Огляд маршруту</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

function StageTopicRow({
  node,
  onSelect,
}: {
  node: IndexedNode
  onSelect: (nodeId: string) => void
}) {
  return (
    <li className="border-b last:border-b-0">
      <Button
        type="button"
        variant="ghost"
        onClick={() => onSelect(node.id)}
        className="group h-auto w-full justify-start rounded-none px-0 py-4 text-left whitespace-normal hover:bg-transparent"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-sm leading-5 font-medium">
            {node.title}
          </span>
          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
            <LegalText text={node.polish} />
          </span>
          <span className="mt-1.5 block text-sm leading-6 text-muted-foreground">
            <LegalText text={node.summary} />
          </span>
        </span>
        <ArrowRight data-icon="inline-end" />
      </Button>
    </li>
  )
}

export function LegalMapOverview({
  onNodeSelect,
}: {
  onNodeSelect: (nodeId: string) => void
}) {
  return (
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
      <header id="map-overview">
        <div
          data-not-typeset
          className="not-typeset mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">Карта права</Badge>
          <Badge variant="outline">9 етапів</Badge>
          <Badge variant="outline">62 правові теми</Badge>
        </div>
        <h1>Шлях адміністративної справи іноземця</h1>
        <p className="lead">
          Це не каталог законів. Карта показує, яке питання вирішується на
          кожному етапі справи, який результат треба отримати і які правові
          інститути для цього потрібні.
        </p>
        <p>
          Рухайтеся зверху вниз: спочатку факти й поточний статус, потім
          правовий маршрут, право до праці, подання, докази, провадження,
          рішення та захист. KPA, документи й норми про працю з’являються там,
          де вони реально працюють у справі.
        </p>
      </header>

      <section aria-labelledby="map-legend-title">
        <h2 id="map-legend-title">Як читати карту</h2>
        <div
          data-not-typeset
          className="not-typeset mt-6 grid gap-5 border-y py-5 md:grid-cols-3"
        >
          <div className="flex gap-3">
            <Map className="mt-0.5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Питання</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Що саме треба встановити на цьому етапі.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FileCheck2 className="mt-0.5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Результат</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Який робочий матеріал має залишитися після аналізу.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Scale className="mt-0.5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Правові теми</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Норми та інститути, потрібні саме для цього кроку.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map-stages-title">
        <h2 id="map-stages-title">Повний маршрут справи</h2>
        <p>
          Заголовок кожного етапу вже показує його питання, результат і
          кількість тем. Розгорніть етап, щоб побачити пояснені вузли.
        </p>

        <Accordion
          data-not-typeset
          className="not-typeset mt-8 border-y"
          defaultValue={["orientation"]}
          multiple
        >
          {legalMapJourney.map((stage) => {
            const nodes = journeyNodes(stage)

            return (
              <AccordionItem
                key={stage.id}
                id={`stage-${stage.id}`}
                value={stage.id}
                className="scroll-mt-24"
              >
                <AccordionTrigger className="gap-4 py-6 hover:no-underline">
                  <span className="grid min-w-0 flex-1 grid-cols-[2.25rem_minmax(0,1fr)] gap-3 pr-3">
                    <span className="pt-0.5 text-xs text-muted-foreground">
                      {String(stage.order).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <strong className="text-base font-medium">
                          {stage.title}
                        </strong>
                        <Badge variant="outline">{nodes.length} тем</Badge>
                      </span>
                      <span className="mt-2 block text-sm leading-6">
                        <LegalText text={stage.question} />
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-muted-foreground">
                        Результат: <LegalText text={stage.outcome} />
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-[3.25rem]">
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                    <LegalText text={stage.description} />
                  </p>
                  <ol className="mt-4 border-t">
                    {nodes.map((node) => (
                      <StageTopicRow
                        key={node.id}
                        node={node}
                        onSelect={onNodeSelect}
                      />
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </section>
    </article>
  )
}

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

function StatementBlock({ title, items }: { title: string; items: string[] }) {
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
            <li key={item}>
              <LegalText text={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function uniqueStatements(...groups: Array<string[] | undefined>) {
  return [...new Set(groups.flatMap((group) => group ?? []).filter(Boolean))]
}

function ModelExplanation({
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
          <LegalText text={subject.join(" ")} />
        </p>
      ) : null}
      {activation.length ? (
        <p>
          <LegalText text={activation.join(" ")} />
        </p>
      ) : null}
      {boundaryAndEffect.length ? (
        <p>
          <LegalText text={boundaryAndEffect.join(" ")} />
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
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
      <header id="node-overview">
        <div
          data-not-typeset
          className="not-typeset mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">
            Етап {stage.order} з {legalMapJourney.length}
          </Badge>
          <Badge variant="outline">{stage.title}</Badge>
          <Badge variant="outline">
            {group?.shortTitle ?? node.groupTitle}
          </Badge>
        </div>
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
          <p key={paragraph}>
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
      </header>

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
                  key={item}
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
                  <li key={item} className="flex gap-3 text-sm leading-6">
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
          <strong>Локатор у праві:</strong> <LegalText text={node.polish} />
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
    </article>
  )
}

export function resolveLegalMapNode(nodeId?: string) {
  return nodeId ? nodeById.get(nodeId) : undefined
}

export function stageForNode(node?: IndexedNode) {
  return legalMapJourneyStageForNode(node?.id)?.id ?? legalMapJourney[0].id
}
