import { useId, useMemo, useState } from "react"
import { Link } from "react-router"
import { ListTree } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "~/components/ui/combobox"
import { Field, FieldLabel, FieldDescription } from "~/components/ui/field"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "~/components/ui/sheet"
import type { LegalDocumentId, LegalProvision } from "~/data/legal-library"
import { getDocumentProvisionPath } from "~/data/legal-library"
import { getProvisionOutline } from "~/data/legal-library/navigation/provision-outline"
import { provisionCountLabel } from "~/data/legal-library/catalog-guide"
import { formatProvisionEffectiveDate } from "./legal-provision-source"

export function LegalProvisionSelector({
  documentId,
  documentLabel,
  provisions,
  selectedProvisionId,
}: {
  documentId: LegalDocumentId
  documentLabel: string
  provisions: readonly LegalProvision[]
  selectedProvisionId?: string
}) {
  const groups = useMemo(
    () => getProvisionOutline(documentId, provisions),
    [documentId, provisions]
  )
  const currentGroup =
    groups.find((group) =>
      group.provisions.some((provision) => provision.id === selectedProvisionId)
    ) ?? groups[0]
  const [open, setOpen] = useState(false)
  const [groupId, setGroupId] = useState(currentGroup?.id ?? "")
  const group = groups.find((group) => group.id === groupId) ?? currentGroup
  const selected = provisions.find(
    (provision) => provision.id === selectedProvisionId
  )
  const selectId = useId()
  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        if (value) setGroupId(currentGroup?.id ?? "")
        setOpen(value)
      }}
    >
      <div className="grid gap-2">
        <p className="text-xs text-muted-foreground">{documentLabel}</p>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              className="h-auto min-h-11 w-full justify-between text-left whitespace-normal"
            />
          }
        >
          <span>{selected?.locator ?? "Обрати положення акта"}</span>
          <span className="ml-3 inline-flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
            Покажчик <ListTree className="size-4" aria-hidden="true" />
          </span>
        </SheetTrigger>
      </div>
      <SheetContent className="!w-full !max-w-xl gap-0">
        <SheetHeader className="shrink-0 border-b pr-14">
          <SheetTitle>Покажчик акта</SheetTitle>
          <SheetDescription>{documentLabel}</SheetDescription>
        </SheetHeader>
        <Field className="shrink-0 border-b p-4">
          <FieldLabel htmlFor={selectId}>Розділ або додаток</FieldLabel>
          <Combobox
            items={groups}
            value={group ?? null}
            onValueChange={(nextGroup) => {
              if (nextGroup) setGroupId(nextGroup.id)
            }}
            itemToStringLabel={(item) => item.title}
            itemToStringValue={(item) => item.id}
            isItemEqualToValue={(item, value) => item.id === value.id}
            autoHighlight
          >
            <ComboboxInput
              id={selectId}
              className="min-h-11 w-full"
              placeholder="Назва розділу або додатка…"
            />
            <ComboboxContent>
              <ComboboxEmpty>Розділ не знайдено</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem
                    key={item.id}
                    value={item}
                    className="min-h-11 items-start"
                  >
                    <span className="min-w-0 whitespace-normal">
                      {item.title}
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <FieldDescription>
            {provisionCountLabel(
              group?.provisions.length ?? 0,
              group?.kind ?? "article"
            )}
          </FieldDescription>
        </Field>
        <nav
          aria-label="Положення вибраного розділу"
          className="min-h-0 overflow-y-auto p-4"
        >
          <ul className="divide-y">
            {group?.provisions.map((provision) => (
              <li key={provision.id}>
                <Link
                  onClick={() => setOpen(false)}
                  to={getDocumentProvisionPath(documentId, provision.id)}
                  aria-current={
                    provision.id === selectedProvisionId ? "page" : undefined
                  }
                  className="flex min-h-12 items-center justify-between gap-4 px-3 py-3 text-sm hover:bg-muted aria-[current=page]:bg-muted aria-[current=page]:font-semibold"
                >
                  <span>
                    {provision.locator}
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {provision.status === "repealed"
                        ? "Скасовано (uchylony)"
                        : provision.status === "future"
                          ? `Майбутня норма${provision.effectiveDate ? " від " + formatProvisionEffectiveDate(provision.effectiveDate) : ""}`
                          : provision.status === "removed"
                            ? "Вилучено"
                            : provision.status === "reserved"
                              ? "Зарезервовано"
                              : ""}
                    </span>
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    PDF, с. {provision.startPdfPage}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
