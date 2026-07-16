import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

import {
  LegalLink,
  legalLinkVariants,
  type LegalReferenceContext,
} from "./legal-link"
import { LegalReferencePreview } from "./legal-reference-preview"
import type { LegalTextValue } from "~/data/legal-library/legal-text"
import {
  legalReferenceTarget,
  type LegalReference,
} from "~/data/legal-references"
import { cn } from "~/lib/utils"

export function LegalReferenceArrow({
  reference,
  label = "Відкрити посилання",
  context = "reference-section",
}: {
  reference: LegalReference
  label?: string
  context?: LegalReferenceContext
}) {
  const target = legalReferenceTarget(reference)
  if (!target) return null

  const arrow = <ArrowUpRight aria-hidden="true" className="size-3.5" />
  const props = {
    "aria-label": label,
    title: label,
    className: cn(
      legalLinkVariants({ context }),
      "ml-1 inline-flex align-baseline no-underline"
    ),
    "data-reference-kind": reference.kind,
  } as const

  const trigger = target.external ? (
    <a href={target.href} target="_blank" rel="noreferrer" {...props}>
      {arrow}
    </a>
  ) : (
    <Link to={target.href} {...props}>
      {arrow}
    </Link>
  )

  return (
    <LegalReferencePreview
      reference={reference}
      trigger={trigger}
      previewLabel={label}
    />
  )
}

export function LegalText({
  text,
  context = "prose",
  className,
}: {
  text: LegalTextValue
  context?: LegalReferenceContext
  className?: string
}) {
  if (typeof text === "string") return <span className={className}>{text}</span>

  return (
    <span className={className}>
      {text.parts.map((part, index) =>
        "target" in part ? (
          <LegalLink
            key={`${index}-${part.text}`}
            reference={part.target}
            context={context}
          >
            {part.text}
          </LegalLink>
        ) : (
          <span key={`${index}-${part.text}`}>{part.text}</span>
        )
      )}
    </span>
  )
}
