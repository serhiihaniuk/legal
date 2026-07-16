import { cva } from "class-variance-authority"
import type { ReactNode } from "react"

import { DocsSidebarItem, DocsSidebarList } from "~/components/layout"
import { cn } from "~/lib/utils"

export type SectionNavigationOption<Value extends string = string> = {
  value: Value
  label: ReactNode
  selectLabel?: string
  disabled?: boolean
}

const numberedNavigationItemVariants = cva(
  "grid min-h-10 w-full grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-2 rounded-md border border-transparent px-2 py-2 text-left text-navigation font-medium hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none data-[active=true]:border-accent data-[active=true]:bg-accent"
)

export function SectionNavigationList<Value extends string>({
  options,
  value,
  onValueChange,
  ordered = false,
  variant = "sidebar",
  itemClassName,
  renderOption,
}: {
  options: readonly SectionNavigationOption<Value>[]
  value: Value
  onValueChange: (value: Value) => void
  ordered?: boolean
  variant?: "sidebar" | "numbered"
  itemClassName?: string
  renderOption?: (
    option: SectionNavigationOption<Value>,
    index: number
  ) => ReactNode
}) {
  if (variant === "numbered") {
    const List = ordered ? "ol" : "ul"
    return (
      <List className="mt-2 grid gap-0.5">
        {options.map((option, index) => (
          <li key={option.value}>
            <button
              type="button"
              disabled={option.disabled}
              data-active={value === option.value}
              aria-pressed={value === option.value}
              onClick={() => onValueChange(option.value)}
              className={cn(numberedNavigationItemVariants(), itemClassName)}
            >
              {renderOption?.(option, index) ?? option.label}
            </button>
          </li>
        ))}
      </List>
    )
  }

  return (
    <DocsSidebarList ordered={ordered}>
      {options.map((option, index) => (
        <DocsSidebarItem
          key={option.value}
          active={value === option.value}
          disabled={option.disabled}
          onClick={() => onValueChange(option.value)}
          ariaPressed={value === option.value}
          className={itemClassName}
        >
          {renderOption?.(option, index) ?? option.label}
        </DocsSidebarItem>
      ))}
    </DocsSidebarList>
  )
}

const mobileSectionSelectVariants = cva(
  "w-full min-w-0 rounded-md border bg-background px-3 text-sm",
  {
    variants: {
      size: {
        compact: "h-9",
        comfortable:
          "h-10 border-input shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      },
    },
    defaultVariants: {
      size: "compact",
    },
  }
)

export function MobileSectionSelect<Value extends string>({
  label,
  value,
  options,
  onValueChange,
  size = "compact",
  className,
}: {
  label: string
  value: Value
  options: readonly SectionNavigationOption<Value>[]
  onValueChange: (value: Value) => void
  size?: "compact" | "comfortable"
  className?: string
}) {
  return (
    <label className="grid min-w-0 gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(event) => onValueChange(event.target.value as Value)}
        aria-label={label}
        className={cn(mobileSectionSelectVariants({ size }), className)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.selectLabel ??
              (typeof option.label === "string" ? option.label : option.value)}
          </option>
        ))}
      </select>
    </label>
  )
}
