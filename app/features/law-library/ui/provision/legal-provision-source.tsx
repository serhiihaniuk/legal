import type { ComponentProps } from "react"
import type {
  LegalProvisionSourceSpan,
  LegalProvisionStatus,
} from "~/data/legal-library/contracts"

export type LegalProvisionSourceRow = {
  label: string
  text: string
}

const ARTICLE_LOCATOR_PATTERN =
  /^\s*Art\.\s*\d+[a-z]?(?:\s*[⁰¹²³⁴⁵⁶⁷⁸⁹]+)?\s*\.?\s*/iu
const EXPLICIT_USTEP_LOCATOR_PATTERN = /^\s*ust(?:ęp)?\.?\s*(\d+)\.?\s*/iu
const USTEP_ROW_PATTERN = /(?:^|\n)[ \t]*(\d+)\.[ \t]+/gu

function normalizeSourceLines(sourceText: string) {
  return sourceText
    .replace(/\r\n?/gu, "\n")
    .replace(/(?<=\p{L})-[ \t]*\n[ \t]*(?=\p{Ll})/gu, "")
    .replace(/[ \t]+/gu, " ")
    .replace(/[ \t]*\n[ \t]*/gu, "\n")
    .trim()
}

export function formatProvisionEffectiveDate(effectiveDate: string) {
  const [year, month, day] = effectiveDate.split("-")
  return `${day}.${month}.${year}`
}

/**
 * Normalize only the whitespace and line-wrap artifacts introduced by the
 * source PDF text layer. The PDF remains the authority for legal citation.
 */
export function normalizeLegalProvisionSourceText(sourceText: string) {
  return normalizeSourceLines(sourceText)
    .replace(/\n+/gu, " ")
    .replace(/ {2,}/gu, " ")
    .trim()
}

function stripLeadingProvisionLocator(sourceText: string) {
  const withoutArticle = sourceText.replace(ARTICLE_LOCATOR_PATTERN, "")
  const explicitUstep = withoutArticle.match(EXPLICIT_USTEP_LOCATOR_PATTERN)

  if (!explicitUstep) return withoutArticle

  return `${explicitUstep[1]}. ${withoutArticle.slice(explicitUstep[0].length)}`
}

/**
 * Split an extracted Polish provision into structural ustęp rows. Numbered
 * points such as `1)` are intentionally left in each row's source text.
 */
export function splitLegalProvisionSourceText(
  sourceText: string
): LegalProvisionSourceRow[] {
  const sourceWithoutLocator = stripLeadingProvisionLocator(
    normalizeSourceLines(sourceText)
  )
  const rowMatches = [...sourceWithoutLocator.matchAll(USTEP_ROW_PATTERN)]
  const firstRow = rowMatches[0]

  if (!firstRow || sourceWithoutLocator.slice(0, firstRow.index).trim()) {
    return [
      {
        label: "Текст",
        text: normalizeLegalProvisionSourceText(sourceWithoutLocator),
      },
    ]
  }

  return rowMatches.map((match, index) => {
    const bodyStart = match.index + match[0].length
    const bodyEnd = rowMatches[index + 1]?.index ?? sourceWithoutLocator.length

    return {
      label: `ust. ${match[1]}`,
      text: normalizeLegalProvisionSourceText(
        sourceWithoutLocator.slice(bodyStart, bodyEnd)
      ),
    }
  })
}

export function LegalProvisionSource({
  locator,
  startPdfPage,
  text,
  sourceSpans = [],
  status = "active",
  effectiveDate,
}: {
  locator: string
  startPdfPage: number
  text: string
  sourceSpans?: readonly LegalProvisionSourceSpan[]
  status?: LegalProvisionStatus
  effectiveDate?: string
}) {
  const rows = splitLegalProvisionSourceText(text)
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
      <div className="divide-y">
        {rows.map((row, index) => (
          <div
            key={`${row.label}-${index}`}
            className="grid gap-2 py-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-5"
          >
            <span className="font-mono text-xs text-muted-foreground sm:pt-1">
              {row.label}
            </span>
            <p
              lang="pl"
              className="max-w-prose font-display text-base leading-8 text-foreground"
            >
              {row.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export type LegalProvisionSourceProps = ComponentProps<
  typeof LegalProvisionSource
>
