import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router"

import type { TocItem } from "~/components/docs-layout"
import {
  LegalReferenceArrow,
  LegalText,
} from "~/components/legal-reference-text"
import { OfficialSourceEntry } from "~/components/official-source"
import {
  DocsSidebar,
  DocsSidebarBackLink,
  DocsSidebarItem,
  DocsSidebarList,
  DocsSidebarSection,
} from "~/components/docs-sidebar-navigation"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  documentCategoryLabels,
  getEvidenceDocument,
  getEvidenceDocumentNavigation,
  getEvidenceDocumentPath,
  listEvidenceDocumentCategories,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import {
  documentCatalog,
  documentsForCategory,
  type DocumentCatalogEntry,
} from "~/data/document-index"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

export const documentCatalogToc: TocItem[] = [
  { href: "#documents-overview", label: "Що є в каталозі" },
  { href: "#documents-list", label: "Усі документи" },
]

export function documentDetailToc(document: DocumentCatalogEntry): TocItem[] {
  return [
    { href: "#document-overview", label: "Що це за документ" },
    ...(document.guide?.howToObtain?.length
      ? [{ href: "#document-obtain", label: "Як отримати або підготувати" }]
      : []),
    { href: "#document-purpose", label: "Роль і межі доказу" },
    { href: "#document-elements", label: "Як перевіряти" },
    ...(document.contexts.length || document.caseContexts.length
      ? [{ href: "#document-contexts", label: "Де використовується" }]
      : []),
    { href: "#document-regulation", label: "Правове регулювання" },
    { href: "#document-sources", label: "Офіційні джерела" },
  ]
}

const categories = listEvidenceDocumentCategories().map(
  (id) => [id, documentCategoryLabels[id]] as [EvidenceDocumentCategory, string]
)

function pluralizeUkrainian(
  count: number,
  forms: [one: string, few: string, many: string]
) {
  const lastTwo = count % 100
  const last = count % 10

  if (last === 1 && lastTwo !== 11) return `${count} ${forms[0]}`
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `${count} ${forms[1]}`
  }
  return `${count} ${forms[2]}`
}

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

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <DocsSidebarBackLink to="/">На головну</DocsSidebarBackLink>
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Категорія
        </span>
        <select
          value={selectedCategory}
          onChange={(event) =>
            onCategorySelect(
              event.target.value as EvidenceDocumentCategory | "all"
            )
          }
          className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          <option value="all">Усі документи</option>
          {categories.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Документ
        </span>
        <select
          value={selectedDocumentId ?? ""}
          onChange={(event) => {
            if (event.target.value) onDocumentSelect(event.target.value)
            else onOverviewSelect()
          }}
          className="h-9 w-full min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          <option value="">Огляд каталогу</option>
          {documents.map((document) => (
            <option key={document.id} value={document.id}>
              {document.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export function DocumentCatalogOverview({
  category,
  onDocumentSelect,
}: {
  category: EvidenceDocumentCategory | "all"
  onDocumentSelect: (documentId: string) => void
}) {
  const documents = documentsForCategory(category)

  return (
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
      <header id="documents-overview">
        <div data-not-typeset className="not-typeset mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary">Документи</Badge>
          <Badge variant="outline">
            {pluralizeUkrainian(documentCatalog.length, [
              "сторінка",
              "сторінки",
              "сторінок",
            ])}
          </Badge>
        </div>
        <h1>Каталог документів і доказів</h1>
        <p className="lead">
          Тут зібрані редакційно підготовлені сторінки документів: хто готує
          документ, що він доводить, чого не доводить, як його перевіряти та з
          якою нормою зіставляти.
        </p>
      </header>

      <section id="documents-list">
        <h2>Документи в цій категорії</h2>
        <p>
          Категорію змінюйте в лівій навігації. На мобільному екрані
          використовуйте компактні списки над матеріалом.
        </p>
        <ol data-not-typeset className="not-typeset mt-6 divide-y border-y">
          {documents.map((document, index) => (
            <li key={document.id}>
              <button
                type="button"
                onClick={() => onDocumentSelect(document.id)}
                className="group grid w-full grid-cols-[2rem_minmax(0,1fr)_auto] gap-3 py-5 text-left"
              >
                <span className="text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-medium break-words">
                    {document.title}
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {documentCategoryLabels[document.category]}
                  </span>
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}

export function DocumentDetailContent({
  document,
  onDocumentSelect: _onDocumentSelect,
}: {
  document: DocumentCatalogEntry
  onDocumentSelect: (documentId: string) => void
}) {
  const relatedDocuments = document.relatedDocuments.flatMap((documentId) => {
    const related = getEvidenceDocument(documentId)
    return related ? [{ entry: related }] : []
  })
  const { previous, next } = getEvidenceDocumentNavigation(document.id)

  return (
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
      <header id="document-overview">
        <div data-not-typeset className="not-typeset mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary">Документ</Badge>
          <Badge variant="outline">
            {documentCategoryLabels[document.category]}
          </Badge>
        </div>
        <h1>{document.title}</h1>
        <p className="lead">
          <LegalText
            text={
              document.guide?.description ??
              "Окрема довідка про роль документа в матеріалах атласу та його зв’язок із правовими умовами конкретної справи."
            }
          />
        </p>
        {document.guide?.documentType ? (
          <p>
            <strong>Тип документа:</strong>{" "}
            <LegalText text={document.guide.documentType} />
          </p>
        ) : null}
        {document.guide ? (
          <p>
            <strong>Хто готує або видає:</strong>{" "}
            <LegalText text={document.guide.preparedBy} />
          </p>
        ) : null}
      </header>

      {document.guide?.howToObtain?.length ? (
        <section id="document-obtain">
          <h2>Як отримати або підготувати</h2>
          <ol>
            {document.guide.howToObtain.map((item) => (
              <li key={legalTextPlainText(item)}>
                <LegalText text={item} />
              </li>
            ))}
          </ol>
          {document.guide.formAndValidity?.length ? (
            <>
              <h3>Форма, актуальність і строк</h3>
              <ul>
                {document.guide.formAndValidity.map((item) => (
                  <li key={legalTextPlainText(item)}>
                    <LegalText text={item} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ) : null}

      <section id="document-purpose">
        <h2>Роль документа і межі доказу</h2>
        {document.guide ? (
          <>
            <h3>Що підтверджує або для чого потрібний</h3>
            <ul>
              {document.guide.purpose.map((item) => (
                <li key={legalTextPlainText(item)}>
                  <LegalText text={item} />
                </li>
              ))}
            </ul>
            <h3>Чого сам по собі не доводить</h3>
            <ul>
              {document.guide.doesNotProve.map((item) => (
                <li key={legalTextPlainText(item)}>
                  <LegalText text={item} />
                </li>
              ))}
            </ul>
          </>
        ) : document.caseContexts.length ? (
          <ul>
            {document.caseContexts.map((context) => (
              <li key={`${context.routeId}-${context.proves}`}>
                <strong>{context.routeTitle}:</strong>{" "}
                <LegalText text={context.proves} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Значення залежить від правової умови. Нижче перелічені теми, у яких
            документ використовується, та норми, з якими його треба зіставити.
          </p>
        )}
      </section>

      <section id="document-elements">
        <h2>Як перевіряти цей документ</h2>
        <ol>
          {(document.guide?.keyChecks ?? []).map((item) => (
            <li key={legalTextPlainText(item)}>
              <LegalText text={item} />
            </li>
          ))}
        </ol>
        {relatedDocuments.length ? (
          <>
            <h3>З чим звірити</h3>
            <p>
              Ці документи перевіряють разом: дані, дати, сторони й заявлені
              умови не повинні суперечити одне одному.
            </p>
            <ul data-not-typeset className="not-typeset mt-5 divide-y border-y">
              {relatedDocuments.map(({ entry }) => (
                <li key={entry.id} className="py-3">
                  <span className="group flex items-start justify-between gap-4 text-left text-sm font-medium">
                    {entry.title}
                    <LegalReferenceArrow
                      reference={{
                        kind: "evidence-document",
                        documentId: entry.id,
                      }}
                      label={`Відкрити документ: ${entry.title}`}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      {document.contexts.length || document.caseContexts.length ? (
        <section id="document-contexts">
          <h2>Де цей документ використовується</h2>
          <p>
            Це контекстні переходи до тем і типів справ. Вони не змінюють
            канонічну назву або правову роль документа.
          </p>
          <ul data-not-typeset className="not-typeset mt-5 divide-y border-y">
            {document.contexts.map((context) => (
              <li
                key={`map-${context.node.id}`}
                className="flex items-start justify-between gap-4 py-3 text-sm"
              >
                <span>
                  <span className="block font-medium">
                    {context.node.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Карта права
                  </span>
                </span>
                <LegalReferenceArrow
                  reference={{ kind: "map-node", nodeId: context.node.id }}
                  label={`Відкрити тему карти: ${context.node.title}`}
                />
              </li>
            ))}
            {document.caseContexts.map((context) => (
              <li
                key={`case-${context.routeId}-${legalTextPlainText(context.item)}`}
                className="flex items-start justify-between gap-4 py-3 text-sm"
              >
                <span>
                  <span className="block font-medium">
                    {context.routeTitle}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Тип справи
                  </span>
                </span>
                <LegalReferenceArrow
                  reference={{ kind: "case-route", routeId: context.routeId }}
                  label={`Відкрити тип справи: ${context.routeTitle}`}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section id="document-regulation">
        <h2>Правове регулювання</h2>
        <p>
          Назва документа сама по собі не створює вимогу. Спочатку визначте
          умову або процесуальну дію, а потім перевірте точну правову основу.
        </p>
        {document.guide ? (
          <ul>
            {document.guide.legalBasis.map((item) => (
              <li key={legalTextPlainText(item)}>
                <LegalText text={item} />
              </li>
            ))}
          </ul>
        ) : null}
        {document.guide ? (
          <p className="text-sm text-muted-foreground">
            Редакційна перевірка правової основи: {document.guide.verifiedAt}.
          </p>
        ) : null}
      </section>

      <section id="document-sources">
        <h2>Офіційні джерела</h2>
        {document.sources.length ? (
          <ul data-not-typeset className="not-typeset mt-5 grid gap-3">
            {document.sources.map((source) => (
              <li key={source.url} className="min-w-0 border-l pl-4">
                <OfficialSourceEntry source={source} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Для цієї позиції ще не додано окремого офіційного джерела.
            Використовуйте пов’язані теми карти, але не трактуйте приклад справи
            як правову підставу.
          </p>
        )}
      </section>

      <nav
        data-not-typeset
        aria-label="Попередній і наступний документ"
        className="not-typeset mt-10 flex items-center justify-between gap-3 border-t pt-6"
      >
        {previous ? (
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link to={getEvidenceDocumentPath(previous.id)!} />}
          >
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            <span className="line-clamp-1">{previous.title}</span>
          </Button>
        ) : (
          <Button variant="ghost" disabled>
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            Початок
          </Button>
        )}
        {next ? (
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link to={getEvidenceDocumentPath(next.id)!} />}
          >
            <span className="line-clamp-1">{next.title}</span>
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        ) : (
          <Button variant="ghost" disabled>
            Кінець
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        )}
      </nav>
    </article>
  )
}
