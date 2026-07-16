import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "~/lib/utils"

export type DefinitionRow = {
  id: string
  term: ReactNode
  description: ReactNode
  termProps?: HTMLAttributes<HTMLElement>
  descriptionProps?: HTMLAttributes<HTMLElement>
}

export function DefinitionRows({ items }: { items: readonly DefinitionRow[] }) {
  return (
    <dl>
      {items.map((item) => (
        <div key={item.id}>
          <dt {...item.termProps}>{item.term}</dt>
          <dd {...item.descriptionProps}>{item.description}</dd>
        </div>
      ))}
    </dl>
  )
}

export function DefinitionRowGrid({
  items,
}: {
  items: readonly DefinitionRow[]
}) {
  return (
    <dl>
      {Array.from({ length: Math.ceil(items.length / 2) }, (_, rowIndex) => {
        const rowItems = items.slice(rowIndex * 2, rowIndex * 2 + 2)

        return (
          <div
            key={rowIndex}
            className={cn(
              "grid sm:grid-cols-2 sm:divide-x",
              rowIndex > 0 && "border-t"
            )}
          >
            {rowItems.map((item) => (
              <div key={item.id} className="px-4 py-3">
                <dt
                  {...item.termProps}
                  className={cn(
                    "text-xs font-medium text-muted-foreground",
                    item.termProps?.className
                  )}
                >
                  {item.term}
                </dt>
                <dd
                  {...item.descriptionProps}
                  className={cn(
                    "mt-1 leading-6 font-medium",
                    item.descriptionProps?.className
                  )}
                >
                  {item.description}
                </dd>
              </div>
            ))}
          </div>
        )
      })}
    </dl>
  )
}
