import { LegalText } from "~/components/references"
import type { CaseGuideDeadline } from "~/data/case-guides/types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

export function CaseDeadlineList({
  deadlines,
  headingLevel = 4,
}: {
  deadlines: CaseGuideDeadline[]
  headingLevel?: 4 | 5
}) {
  const Heading = headingLevel === 5 ? "h5" : "h4"
  return (
    <ul data-not-typeset className="not-typeset divide-y">
      {deadlines.map((deadline) => (
        <li
          key={`${legalTextPlainText(deadline.period)}-${legalTextPlainText(deadline.trigger)}`}
          className="py-5 first:pt-4 last:pb-4"
        >
          <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(6rem,12rem)] sm:gap-6">
            <Heading className="text-base leading-6 font-medium">
              <LegalText text={deadline.action} />
            </Heading>
            <p className="text-sm leading-6 font-semibold tabular-nums sm:text-right">
              <LegalText text={deadline.period} />
            </p>
          </div>
          <dl className="mt-3 space-y-2 text-sm leading-6">
            <div>
              <dt className="inline text-muted-foreground">Відлік: </dt>
              <dd className="inline">
                <LegalText text={deadline.trigger} />
              </dd>
            </div>
            <div>
              <dt className="inline text-muted-foreground">Що це означає: </dt>
              <dd className="inline">
                <LegalText text={deadline.consequence} />
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            <LegalText text={deadline.law} context="reference-section" />
          </p>
        </li>
      ))}
    </ul>
  )
}
