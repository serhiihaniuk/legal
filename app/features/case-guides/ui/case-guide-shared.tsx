import { Badge } from "~/components/ui/badge"
import type { CaseGuideDocument } from "~/data/case-guides/types"

function documentStatusVariant(level: string) {
  if (level === "required") return "default" as const
  if (level === "conditional") return "secondary" as const
  return "outline" as const
}

export function DocumentStatus({ document }: { document: CaseGuideDocument }) {
  return (
    <Badge
      variant={documentStatusVariant(document.level)}
      className="h-auto max-w-full whitespace-normal"
    >
      {document.status}
    </Badge>
  )
}
