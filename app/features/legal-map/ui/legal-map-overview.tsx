import { ArrowRight, FileCheck2, Map, Scale } from "lucide-react"

import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { legalMapJourney } from "~/data/legal-map/journey"
import type { IndexedNode } from "~/data/legal-map/index"

import { journeyNodes } from "../model/legal-map-model"

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
    <DocumentArticle>
      <DocumentHeader
        id="map-overview"
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">Карта права</Badge>
            <Badge variant="outline">9 етапів</Badge>
            <Badge variant="outline">62 правові теми</Badge>
          </>
        }
      >
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
      </DocumentHeader>

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
    </DocumentArticle>
  )
}
