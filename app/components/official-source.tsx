import { ExternalLink } from "lucide-react"

import { LegalText } from "~/components/legal-reference-text"
import { legalReferenceTarget } from "~/data/legal-references"
import {
  getOfficialSource,
  type OfficialSourceId,
} from "~/data/legal-library"
import type { OfficialSource } from "~/data/legal-types"

const officialSourceLabelClassName = "text-sm font-medium"
const officialSourceLinkClassName =
  "inline-flex items-center gap-1.5 text-sm font-medium"

type OfficialSourceLinkProps =
  | {
      sourceId: OfficialSourceId
      label?: string
      url?: never
    }
  | {
      sourceId?: never
      label: string
      url: string
    }

export function OfficialSourceLink(props: OfficialSourceLinkProps) {
  const registeredSource = props.sourceId
    ? getOfficialSource(props.sourceId)
    : undefined
  const label = props.label ?? registeredSource?.label ?? "Офіційне джерело"
  const target = props.sourceId
    ? legalReferenceTarget({
        kind: "official-source",
        sourceId: props.sourceId,
      })
    : legalReferenceTarget({ kind: "external", url: props.url })

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
