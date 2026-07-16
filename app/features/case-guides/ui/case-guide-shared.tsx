import { Badge } from "~/components/ui/badge"
import type { CaseGuideDocument } from "~/data/case-guide-types"

function documentStatusVariant(level: string) {
  if (level === "required") return "default" as const
  if (level === "conditional") return "secondary" as const
  return "outline" as const
}

export function DocumentStatus({ document }: { document: CaseGuideDocument }) {
  return (
    <Badge variant={documentStatusVariant(document.level)}>
      {document.status}
    </Badge>
  )
}

export function documentChecklistHint(document: CaseGuideDocument) {
  if (document.level === "conditional") {
    return "Спочатку зафіксуйте, яка обставина робить документ потрібним. Якщо вона є — перевірте актуальність, форму та зв’язок із конкретною умовою."
  }
  if (document.level === "control") {
    return "Збережіть фінальну версію, дату створення або подання та місце в актах. Це контрольний слід, а не заміна основного доказу."
  }
  if (document.level === "external") {
    return "Перевірте цей обов’язок окремо від pobytowego пакета: відповідальну особу, строк, канал виконання та підтвердження."
  }
  return "Перевірте повноту, чинність на потрібну дату, усі сторінки, підписи та узгодженість даних з рештою пакета."
}
