import { useRef } from "react"
import { useNavigate } from "react-router"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "~/components/ui/combobox"
import type { LegalDocumentId, LegalProvision } from "~/data/legal-library"
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
  const navigate = useNavigate()
  const anchorRef = useRef<HTMLDivElement>(null)
  const options = provisions.map((provision) => ({
    id: provision.id,
    label: `${provision.locator}${
      provision.status === "repealed"
        ? " — uchylony"
        : provision.status === "future" && provision.effectiveDate
          ? ` — майбутня норма від ${formatProvisionEffectiveDate(
              provision.effectiveDate
            )}`
          : ""
    }`,
    kind: provision.kind,
    page: provision.startPdfPage,
  }))
  const selectedOption = options.find(
    (option) => option.id === selectedProvisionId
  )

  return (
    <div className="grid min-w-0 gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">
        Норма в {documentLabel} · {provisions.length} позицій
      </span>
      <Combobox
        items={options}
        value={selectedOption ?? null}
        onValueChange={(option) => {
          if (option) {
            navigate(`/law/${documentId}/provisions/${option.id}`)
          }
        }}
        itemToStringValue={(option) => option.label}
      >
        <div ref={anchorRef}>
          <ComboboxInput
            className="w-full"
            placeholder="Введіть локатор або номер…"
            aria-label={`Знайти норму в ${documentLabel}`}
          />
        </div>
        <ComboboxContent
          anchor={anchorRef}
          className="!w-(--anchor-width) !max-w-(--anchor-width) !min-w-(--anchor-width)"
        >
          <ComboboxEmpty>Норму не знайдено</ComboboxEmpty>
          <ComboboxList>
            {(option) => (
              <ComboboxItem
                key={option.id}
                value={option}
                className="items-start"
              >
                <span className="grid min-w-0 gap-0.5">
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {option.kind} · PDF, с. {option.page}
                  </span>
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
