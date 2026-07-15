import type { ReactNode } from "react"
import { Link } from "react-router"

import { LegalReferencePreview } from "~/components/legal-reference-preview"
import {
  legalReferenceTarget,
  type LegalReference,
} from "~/data/legal-references"
import { cn } from "~/lib/utils"

type LegalLinkProps = {
  reference: LegalReference
  children: ReactNode
  className?: string
}

/**
 * Explicit legal reference for authored content. Resolution is type-safe for
 * maintained law/source registries and still fails closed for runtime input.
 */
export function LegalLink({ reference, children, className }: LegalLinkProps) {
  const target = legalReferenceTarget(reference)

  if (!target) return <span className={className}>{children}</span>

  const linkClassName = cn(
    "font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    className
  )

  const trigger = target.external ? (
    <a
      href={target.href}
      target="_blank"
      rel="noreferrer"
      className={linkClassName}
      data-reference-kind={reference.kind}
    >
      {children}
    </a>
  ) : (
    <Link
      to={target.href}
      className={linkClassName}
      data-reference-kind={reference.kind}
    >
      {children}
    </Link>
  )

  return (
    <LegalReferencePreview
      reference={reference}
      trigger={trigger}
      previewLabel={typeof children === "string" ? children : undefined}
    />
  )
}
