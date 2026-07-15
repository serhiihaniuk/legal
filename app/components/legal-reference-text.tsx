import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

import { LegalLink } from "~/components/legal-link"
import type { LegalTextValue } from "~/data/legal-library/legal-text"
import {
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
  text: LegalTextValue
  className?: string
}) {
  if (typeof text === "string") return <span className={className}>{text}</span>

  return (
    <span className={className}>
      {text.parts.map((part, index) =>
        "target" in part ? (
          <LegalLink key={`${index}-${part.text}`} reference={part.target}>
            {part.text}
          </LegalLink>
        ) : (
          <span key={`${index}-${part.text}`}>{part.text}</span>
        )
      )}
    </span>
  )
}
