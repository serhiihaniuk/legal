import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
  DocsSidebarList,
  DocsSidebarSection,
} from "~/components/layout"
import {
  getEvidenceDocumentPath,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import { documentsForCategory } from "~/data/document-index"
import {
  categories,
  categoryNavigationOptions,
} from "../model/document-catalog-model"
import {
  MobileSectionSelect,
  type SectionNavigationOption,
} from "~/components/patterns/section-navigation"

export function DocumentCatalogNavigation({
  selectedCategory,
  selectedDocumentId,
  onCategorySelect,
  onDocumentSelect: _onDocumentSelect,
}: {
  selectedCategory: EvidenceDocumentCategory | "all"
  selectedDocumentId?: string
  onCategorySelect: (category: EvidenceDocumentCategory | "all") => void
  onDocumentSelect: (documentId: string) => void
}) {
  return (
    <DocsSidebar ariaLabel="Навігація каталогу документів">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <DocsSidebarSection title="Категорії" className="mt-0">
        <DocsSidebarList>
          <DocsSidebarItem
            active={selectedCategory === "all"}
            onClick={() => onCategorySelect("all")}
          >
            Усі документи
          </DocsSidebarItem>
          {categories.map(([id, label]) => {
            const documents = documentsForCategory(id)
            const nested =
              selectedCategory === id ? (
                <div className="ml-3 border-l pl-2">
                  <DocsSidebarList>
                    {documents.map((document) => (
                      <DocsSidebarItem
                        key={document.id}
                        active={selectedDocumentId === document.id}
                        href={getEvidenceDocumentPath(document.id)}
                        size="sm"
                      >
                        <span className="line-clamp-2 text-[0.8rem]">
                          {document.title}
                        </span>
                      </DocsSidebarItem>
                    ))}
                  </DocsSidebarList>
                </div>
              ) : undefined
            return (
              <DocsSidebarItem
                key={id}
                active={selectedCategory === id}
                onClick={() => onCategorySelect(id)}
                nested={nested}
              >
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <span>{label}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {documents.length}
                  </span>
                </span>
              </DocsSidebarItem>
            )
          })}
        </DocsSidebarList>
      </DocsSidebarSection>
    </DocsSidebar>
  )
}

export function MobileDocumentNavigation({
  selectedCategory,
  selectedDocumentId,
  onCategorySelect,
  onDocumentSelect,
  onOverviewSelect,
}: {
  selectedCategory: EvidenceDocumentCategory | "all"
  selectedDocumentId?: string
  onCategorySelect: (category: EvidenceDocumentCategory | "all") => void
  onDocumentSelect: (documentId: string) => void
  onOverviewSelect: () => void
}) {
  const documents = documentsForCategory(selectedCategory)
  const documentNavigationOptions: readonly SectionNavigationOption[] = [
    { value: "", label: "Огляд каталогу" },
    ...documents.map((document) => ({
      value: document.id,
      label: document.title,
    })),
  ]

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <MobileSectionSelect
        label="Категорія"
        value={selectedCategory}
        options={categoryNavigationOptions}
        onValueChange={onCategorySelect}
      />
      <MobileSectionSelect
        label="Документ"
        value={selectedDocumentId ?? ""}
        options={documentNavigationOptions}
        onValueChange={(documentId) => {
          if (documentId) onDocumentSelect(documentId)
          else onOverviewSelect()
        }}
      />
    </div>
  )
}
