import { ArrowUpRight, BookOpenText } from "lucide-react"
import { Link } from "react-router"

import { DocsLayout } from "~/components/layout"
import { LawLibraryNavigation } from "~/features/law-library"
import { Badge } from "~/components/ui/badge"
import {
  getDocumentHomePath,
  listDocuments,
  listProvisions,
} from "~/data/legal-library"
import {
  defineDocumentHeadings,
  DocumentArticle,
  DocumentHeader,
  tableOfContentsFromHeadings,
} from "~/components/patterns/document-content"

const headings = defineDocumentHeadings({
  overview: {
    id: "law-library-overview",
    title: "Бібліотека права",
    tocLabel: "Про бібліотеку",
  },
  documents: { id: "law-library-documents", title: "Правові акти" },
  safety: {
    id: "law-library-safety",
    title: "Як читати цей матеріал",
    tocLabel: "Як перевіряти джерело",
  },
})

const toc = tableOfContentsFromHeadings(headings)

export function meta() {
  return [{ title: "Бібліотека права — Legalizacja" }]
}

export default function LawLibraryRoute() {
  const documents = listDocuments()

  return (
    <DocsLayout navigation={<LawLibraryNavigation />} toc={toc}>
      <DocumentArticle>
        <DocumentHeader
          id={headings.overview.id}
          badges={
            <>
              <Badge variant="secondary">Офіційні тексти</Badge>
              <Badge variant="outline">Локальні PDF</Badge>
            </>
          }
        >
          <h1>{headings.overview.title}</h1>
          <p className="text-lg leading-8">
            Тут зібрані акти, які використовує атлас. Кожна норма веде до
            точного місця в локальній копії офіційного PDF. Пояснення є
            навчальним шаром; для цитування і перевірки завжди відкривайте ELI.
          </p>
        </DocumentHeader>

        <section id={headings.documents.id}>
          <h2>{headings.documents.title}</h2>
          <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
            {documents.map((document) => {
              const provisions = listProvisions(document.id)
              return (
                <Link
                  key={document.id}
                  to={getDocumentHomePath(document.id)}
                  className="group grid gap-2 py-5 text-foreground no-underline sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <span className="grid gap-1">
                    <span className="flex items-center gap-2 font-semibold">
                      <BookOpenText
                        className="size-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                      {document.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {document.citation} · {provisions.length} позицій
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Відкрити
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section id={headings.safety.id}>
          <h2>{headings.safety.title}</h2>
          <p>
            Звіряйте статус акту, пізніші зміни, дату wejścia w życie та
            przepisy przejściowe з датою факту у справі. Однаковий номер статті
            в різних актах не означає однакової норми — внутрішнє посилання
            завжди містить ідентифікатор конкретного акту.
          </p>
          <blockquote>
            Витягнутий текст допомагає знайти норму. Візуальним джерелом
            залишається офіційний PDF, а зовнішнє посилання ELI потрібне для
            перевірки чинності.
          </blockquote>
        </section>
      </DocumentArticle>
    </DocsLayout>
  )
}
