import type { ComponentProps } from "react"

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
}: {
  locator: string
  startPdfPage: number
  text: string
}) {
  const rows = splitLegalProvisionSourceText(text)

  return (
    <div
      data-not-typeset
      className="not-typeset mt-6 border-y"
      aria-label="Текст норми з PDF"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b py-3 text-xs">
        <span lang="pl" className="font-mono text-muted-foreground">
          {locator}
        </span>
        <span className="font-mono text-muted-foreground">
          PDF s. {startPdfPage}
        </span>
      </div>
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
