import { ExternalLink } from "lucide-react"

import { LegalText } from "~/components/legal-reference-text"
import { legalReferenceTarget } from "~/data/legal-references"
import type { OfficialSource } from "~/data/legal-types"

const officialSourceLabelClassName = "text-sm font-medium"
const officialSourceLinkClassName =
  "inline-flex items-center gap-1.5 text-sm font-medium"

type OfficialSourceLinkProps = Pick<OfficialSource, "label" | "url">

export function OfficialSourceLink({ label, url }: OfficialSourceLinkProps) {
  const target = legalReferenceTarget({ kind: "external", url })

  if (!target) {
    return <span className={officialSourceLabelClassName}>{label}</span>
  }

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noreferrer"
      className={officialSourceLinkClassName}
    >
      {label}
      <ExternalLink className="size-3.5" aria-hidden="true" />
    </a>
  )
}

export function OfficialSourceEntry({ source }: { source: OfficialSource }) {
  return (
    <div>
      <OfficialSourceLink label={source.label} url={source.url} />
      <p className="mt-1 text-xs leading-5 text-muted-foreground">
        <LegalText text={source.note} />
      </p>
    </div>
  )
}
