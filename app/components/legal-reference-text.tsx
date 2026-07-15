import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"
import type { ReactNode } from "react"

import {
  legalReferenceMatches,
  legalReferenceTarget,
  type LegalReference,
} from "~/data/legal-references"
import { cn } from "~/lib/utils"

const referenceLinkClassName =
  "legal-reference-link font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

export function LegalReferenceArrow({
  reference,
  label = "Відкрити посилання",
}: {
  reference: LegalReference
  label?: string
}) {
  const target = legalReferenceTarget(reference)
  if (!target) return null

  const arrow = <ArrowUpRight aria-hidden="true" className="size-3.5" />
  const props = {
    "aria-label": label,
    title: label,
    className: cn(
      referenceLinkClassName,
      "ml-1 inline-flex align-baseline no-underline"
    ),
    "data-reference-kind": reference.kind,
  } as const

  if (target.external) {
    return (
      <a href={target.href} target="_blank" rel="noreferrer" {...props}>
        {arrow}
      </a>
    )
  }

  return (
    <Link to={target.href} {...props}>
      {arrow}
    </Link>
  )
}

export function LegalText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const matches = legalReferenceMatches(text)
  if (matches.length === 0) return <span className={className}>{text}</span>

  let cursor = 0
  const content: ReactNode[] = []

  for (const match of matches) {
    if (match.start > cursor) {
      content.push(text.slice(cursor, match.start))
    }
    content.push(match.label)
    content.push(
      <LegalReferenceArrow
        key={`${match.start}-${match.end}-${match.href}`}
        reference={match.reference}
        label={`Відкрити: ${match.label}`}
      />
    )
    cursor = match.end
  }

  if (cursor < text.length) content.push(text.slice(cursor))

  return <span className={className}>{content}</span>
}
