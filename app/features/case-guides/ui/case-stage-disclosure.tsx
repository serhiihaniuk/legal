import type { ReactNode } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"

export function CaseStageDisclosure({
  id,
  title,
  count,
  children,
}: {
  id: string
  title: string
  count: number
  children: ReactNode
}) {
  return (
    <Accordion>
      <AccordionItem value={id}>
        <AccordionTrigger className="items-center gap-3">
          <span className="flex items-center gap-3">
            {title}
            <Badge variant="outline">{count}</Badge>
          </span>
        </AccordionTrigger>
        <AccordionContent className="pt-1 pb-5 [&_p:not(:last-child)]:mb-0">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
