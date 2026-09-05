import { useId, useMemo } from "react"

import { Button } from "~/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "~/components/ui/combobox"
import { Field, FieldLabel } from "~/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { cn } from "~/lib/utils"
import type { SectionNavigationOption } from "./section-navigation"

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
  const id = useId()
  const items = useMemo(
    () =>
      options.map((option) => ({
        value: option.value,
        label:
          option.selectLabel ??
          (typeof option.label === "string" ? option.label : option.value),
        disabled: option.disabled,
      })),
    [options]
  )
  const selected = items.find((item) => item.value === value) ?? null
  const triggerClassName = cn(
    "h-auto min-h-11 w-full min-w-0 justify-between gap-3 text-left whitespace-normal",
    size === "comfortable" ? "py-3" : "py-2",
    className
  )

  return (
    <Field className="min-w-0 gap-1.5">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {items.length > 7 ? (
        <Combobox
          items={items}
          value={selected}
          itemToStringLabel={(item) => item.label}
          itemToStringValue={(item) => item.value}
          isItemEqualToValue={(item, current) => item.value === current.value}
          onValueChange={(item) => {
            if (item && !item.disabled && item.value !== value) {
              onValueChange(item.value)
            }
          }}
          autoHighlight
        >
          <ComboboxTrigger
            id={id}
            render={<Button variant="outline" className={triggerClassName} />}
          >
            <span className="min-w-0 flex-1 wrap-anywhere">
              {selected?.label ?? "Оберіть розділ"}
            </span>
          </ComboboxTrigger>
          <ComboboxContent className="min-w-0">
            <ComboboxInput
              aria-label={`Фільтр: ${label}`}
              placeholder="Введіть назву…"
              showTrigger={false}
            />
            <ComboboxEmpty>Нічого не знайдено</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem
                  key={item.value}
                  value={item}
                  disabled={item.disabled}
                  className="min-h-11"
                >
                  <span className="min-w-0 wrap-anywhere whitespace-normal">
                    {item.label}
                  </span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      ) : (
        <Select
          items={items}
          value={value}
          onValueChange={(next) => {
            if (next !== null && next !== value) onValueChange(next)
          }}
        >
          <SelectTrigger
            id={id}
            className={cn(
              triggerClassName,
              "data-[size=default]:h-auto *:data-[slot=select-value]:line-clamp-none"
            )}
          >
            <SelectValue
              className="min-w-0 wrap-anywhere whitespace-normal"
              placeholder="Оберіть розділ"
            />
          </SelectTrigger>
          <SelectContent
            align="start"
            alignItemWithTrigger={false}
            className="max-w-(--available-width)"
          >
            <SelectGroup>
              {items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  className="min-h-11"
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </Field>
  )
}
