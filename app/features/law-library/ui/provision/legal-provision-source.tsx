import { SourceTextBlocks } from "./source-text-blocks"
import { separateSourceNotes, type SourceNoteRange } from "./source-text-model"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion"
import type { ComponentProps } from "react"
import type {
  LegalProvisionSourceSpan,
  LegalProvisionStatus,
} from "~/data/legal-library/contracts"

export function formatProvisionEffectiveDate(effectiveDate: string) {
  const [year, month, day] = effectiveDate.split("-")
  return `${day}.${month}.${year}`
}

export function LegalProvisionSource({
  locator,
  startPdfPage,
  text,
  sourceSpans = [],
  status = "active",
  effectiveDate,
  noteRanges = [],
  idPrefix = "source",
}: {
  locator: string
  startPdfPage: number
  text: string
  sourceSpans?: readonly LegalProvisionSourceSpan[]
  status?: LegalProvisionStatus
  effectiveDate?: string
  noteRanges?: readonly SourceNoteRange[]
  idPrefix?: string
}) {
  const source = separateSourceNotes(text, noteRanges)
  const amendmentSpans = sourceSpans.filter((span) => span.role === "amendment")
  const baseSpan = sourceSpans.find((span) => span.role === "base")

  return (
    <div
      data-not-typeset
      className="not-typeset mt-6 border-y"
      aria-label="Текст норми з PDF"
    >
      {status === "future" && effectiveDate ? (
        <div
          role="note"
          className="border-b bg-muted/50 py-3 text-sm leading-6"
        >
          <strong>Майбутня норма.</strong> Цей текст ще не є чинною нормою і має
          набрати чинності {formatProvisionEffectiveDate(effectiveDate)}.
        </div>
      ) : null}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b py-3 text-xs">
        <span lang="pl" className="font-mono text-muted-foreground">
          {locator}
        </span>
        <span className="font-mono text-muted-foreground">
          {amendmentSpans.length > 0
            ? "робочий зведений текст: базовий PDF + акт про зміни"
            : `PDF, с. ${startPdfPage}`}
        </span>
      </div>
      {sourceSpans.length > 0 ? (
        <div className="grid gap-2 border-b py-3 text-xs text-muted-foreground">
          {baseSpan ? (
            <p>
              <span className="font-medium text-foreground">
                Базове джерело:
              </span>{" "}
              {baseSpan.locator}
              {baseSpan.startPdfPage
                ? `, PDF, с. ${baseSpan.startPdfPage}`
                : ""}
            </p>
          ) : null}
          {amendmentSpans.map((span) => (
            <p key={`${span.sourceId}-${span.locator}`}>
              <span className="font-medium text-foreground">
                Акт про зміни:
              </span>{" "}
              {span.locator}
              {span.effectiveDate
                ? `, чинний від ${formatProvisionEffectiveDate(
                    span.effectiveDate
                  )}`
                : ""}
            </p>
          ))}
        </div>
      ) : null}
      <SourceTextBlocks text={source.text} idPrefix={idPrefix} />
      {source.notes.length > 0 && (
        <Accordion className="border-t">
          <AccordionItem value="source-notes">
            <AccordionTrigger>
              Примітки та службовий текст PDF · {source.notes.length} стор.
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-6 text-muted-foreground">
                Дрібний текст і позначки зі сторінок джерела. Примітка може
                починатися на попередній сторінці або продовжуватися на
                наступній; повний контекст зберігає PDF.
              </p>
              {source.notes.map((note) => (
                <div key={note.page} className="border-t pt-4">
                  <p className="text-xs text-muted-foreground">
                    PDF, с. {note.page}
                  </p>
                  <SourceTextBlocks
                    stripLocator={false}
                    text={note.text}
                    idPrefix={`${idPrefix}-notes-${note.page}`}
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

export type LegalProvisionSourceProps = ComponentProps<
  typeof LegalProvisionSource
>
