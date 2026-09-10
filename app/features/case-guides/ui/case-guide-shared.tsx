import type { CaseGuideDocument } from "~/data/case-guides/types"

export function DocumentStatus({ document }: { document: CaseGuideDocument }) {
  return (
    <span className="text-sm leading-6 font-normal text-muted-foreground">
      {document.status}
    </span>
  )
}
