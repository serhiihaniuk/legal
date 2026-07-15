import type { ReactNode } from "react"
import { Link } from "react-router"

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
export function LegalLink({
  reference,
  children,
  className,
}: LegalLinkProps) {
  const target = legalReferenceTarget(reference)

  if (!target) return <span className={className}>{children}</span>

  const linkClassName = cn(
    "font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    className
  )

  if (target.external) {
    return (
      <a
        href={target.href}
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={target.href} className={linkClassName}>
      {children}
    </Link>
  )
}
