import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { LegalReferencePreview } from "./legal-reference-preview"
import {
  legalReferenceTarget,
  type LegalReference,
} from "~/data/legal-references"
import { cn } from "~/lib/utils"

export const legalLinkVariants = cva(
  "font-medium text-inherit underline decoration-muted-foreground/45 underline-offset-4 hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      context: {
        prose: "",
        "reference-section": "",
        "provision-page": "",
      },
    },
    defaultVariants: {
      context: "prose",
    },
  }
)

export type LegalReferenceContext = NonNullable<
  VariantProps<typeof legalLinkVariants>["context"]
>

export type LegalLinkProps = {
  reference: LegalReference
  children: ReactNode
  context?: LegalReferenceContext
  className?: string
}

/**
 * Explicit legal reference for authored content. Resolution is type-safe for
 * maintained law/source registries and still fails closed for runtime input.
 */
export function LegalLink({
  reference,
  children,
  context = "prose",
  className,
}: LegalLinkProps) {
  const target = legalReferenceTarget(reference)

  if (!target) return <span className={className}>{children}</span>

  const linkClassName = cn(legalLinkVariants({ context }), className)

  const trigger = target.external ? (
    <a
      href={target.href}
      target="_blank"
      rel="noreferrer"
      className={linkClassName}
      data-reference-kind={reference.kind}
      data-reference-context={context}
    >
      {children}
    </a>
  ) : (
    <Link
      to={target.href}
      className={linkClassName}
      data-reference-kind={reference.kind}
      data-reference-context={context}
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
