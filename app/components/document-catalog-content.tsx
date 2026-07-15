import { ArrowRight, ExternalLink } from "lucide-react"

import type { TocItem } from "~/components/docs-layout"
import { Badge } from "~/components/ui/badge"
import {
  documentCatalog,
  documentEntryForTitle,
  documentsForCategory,
  documentCategoryLabels,
  type DocumentCatalogEntry,
  type DocumentCategory,
} from "~/data/document-index"

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
    { href: "#document-regulation", label: "Правове регулювання" },
    { href: "#document-sources", label: "Офіційні джерела" },
  ]
}

const categories = Object.entries(documentCategoryLabels) as Array<
  [DocumentCategory, string]
>

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
  onDocumentSelect,
}: {
  selectedCategory: DocumentCategory | "all"
  selectedDocumentId?: string
  onCategorySelect: (category: DocumentCategory | "all") => void
  onDocumentSelect: (documentId: string) => void
}) {
  const documents = documentsForCategory(selectedCategory)

  return (
    <nav aria-label="Навігація каталогу документів" className="pb-10">
      <section>
        <p className="px-2 text-xs font-medium text-muted-foreground">
          Категорії
        </p>
        <ul className="mt-2 grid gap-0.5">
          <li>
            <button
              type="button"
              data-active={selectedCategory === "all"}
              onClick={() => onCategorySelect("all")}
              className="flex min-h-8 w-full items-center rounded-md px-2 py-1 text-left text-[0.8rem] font-medium hover:bg-accent data-[active=true]:bg-accent"
            >
              Усі документи
            </button>
          </li>
          {categories.map(([id, label]) => (
            <li key={id}>
              <button
                type="button"
                data-active={selectedCategory === id}
                onClick={() => onCategorySelect(id)}
                className="flex min-h-8 w-full items-center rounded-md px-2 py-1 text-left text-[0.8rem] font-medium hover:bg-accent data-[active=true]:bg-accent"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <p className="px-2 text-xs font-medium text-muted-foreground">
          {pluralizeUkrainian(documents.length, [
            "позиція",
            "позиції",
            "позицій",
          ])}
        </p>
        <ul className="mt-2 grid gap-0.5">
          {documents.map((document) => (
            <li key={document.id}>
              <button
                type="button"
                data-active={selectedDocumentId === document.id}
                onClick={() => onDocumentSelect(document.id)}
                className="flex min-h-8 w-full items-center rounded-md px-2 py-1 text-left text-[0.8rem] font-medium hover:bg-accent data-[active=true]:bg-accent"
              >
                <span className="line-clamp-2">{document.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export function MobileDocumentNavigation({
  selectedCategory,
  selectedDocumentId,
  onCategorySelect,
  onDocumentSelect,
  onOverviewSelect,
}: {
  selectedCategory: DocumentCategory | "all"
  selectedDocumentId?: string
  onCategorySelect: (category: DocumentCategory | "all") => void
  onDocumentSelect: (documentId: string) => void
  onOverviewSelect: () => void
}) {
  const documents = documentsForCategory(selectedCategory)

  return (
    <div className="grid min-w-0 gap-3 lg:hidden">
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Категорія
        </span>
        <select
          value={selectedCategory}
          onChange={(event) =>
            onCategorySelect(event.target.value as DocumentCategory | "all")
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
  category: DocumentCategory | "all"
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
  onDocumentSelect,
}: {
  document: DocumentCatalogEntry
  onDocumentSelect: (documentId: string) => void
}) {
  const relatedDocuments = (document.guide?.relatedDocuments ?? []).map(
    (title) => ({
      title,
      entry: documentEntryForTitle(title),
    })
  )

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
          {document.guide?.description ??
            "Окрема довідка про роль документа в матеріалах атласу та його зв’язок із правовими умовами конкретної справи."}
        </p>
        {document.guide?.documentType ? (
          <p>
            <strong>Тип документа:</strong> {document.guide.documentType}
          </p>
        ) : null}
        {document.guide ? (
          <p>
            <strong>Хто готує або видає:</strong> {document.guide.preparedBy}
          </p>
        ) : null}
      </header>

      {document.guide?.howToObtain?.length ? (
        <section id="document-obtain">
          <h2>Як отримати або підготувати</h2>
          <ol>
            {document.guide.howToObtain.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          {document.guide.formAndValidity?.length ? (
            <>
              <h3>Форма, актуальність і строк</h3>
              <ul>
                {document.guide.formAndValidity.map((item) => (
                  <li key={item}>{item}</li>
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
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Чого сам по собі не доводить</h3>
            <ul>
              {document.guide.doesNotProve.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : document.caseContexts.length ? (
          <ul>
            {document.caseContexts.map((context) => (
              <li key={`${context.routeId}-${context.proves}`}>
                <strong>{context.routeTitle}:</strong> {context.proves}
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
            <li key={item}>{item}</li>
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
              {relatedDocuments.map(({ title, entry }) => (
                <li key={title} className="py-3">
                  {entry ? (
                    <button
                      type="button"
                      onClick={() => onDocumentSelect(entry.id)}
                      className="group flex w-full items-start justify-between gap-4 text-left text-sm font-medium"
                    >
                      {entry.title}
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ) : (
                    <span className="text-sm font-medium">{title}</span>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <section id="document-regulation">
        <h2>Правове регулювання</h2>
        <p>
          Назва документа сама по собі не створює вимогу. Спочатку визначте
          умову або процесуальну дію, а потім перевірте точну правову основу.
        </p>
        {document.guide ? (
          <ul>
            {document.guide.legalBasis.map((item) => (
              <li key={item}>{item}</li>
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
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    {source.label} <ExternalLink className="size-3.5" />
                  </a>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {source.note}
                  </p>
                </div>
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
    </article>
  )
}
