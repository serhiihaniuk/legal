import { ArrowUpRight, BookOpenText } from "lucide-react"
import { Link } from "react-router"

import { DocsLayout } from "~/components/docs-layout"
import { LawLibraryNavigation } from "~/components/law-library-navigation"
import { Badge } from "~/components/ui/badge"
import { listDocuments, listProvisions } from "~/data/legal-library"

const toc = [
  { href: "#law-library-overview", label: "Про бібліотеку" },
  { href: "#law-library-documents", label: "Правові акти" },
  { href: "#law-library-safety", label: "Як перевіряти джерело" },
] as const

export default function LawLibraryRoute() {
  const documents = listDocuments()

  return (
    <DocsLayout navigation={<LawLibraryNavigation />} toc={toc}>
      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        <header id="law-library-overview">
          <div data-not-typeset className="mb-3 flex flex-wrap gap-2">
            <Badge variant="secondary">Офіційні тексти</Badge>
            <Badge variant="outline">Локальні PDF</Badge>
          </div>
          <h1>Бібліотека права</h1>
          <p className="text-lg leading-8">
            Тут зібрані акти, які використовує атлас. Кожна норма веде до
            точного місця в локальній копії офіційного PDF. Пояснення є
            навчальним шаром; для цитування і перевірки завжди відкривайте ELI.
          </p>
        </header>

        <section id="law-library-documents">
          <h2>Правові акти</h2>
          <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
            {documents.map((document) => {
              const provisions = listProvisions(document.id)
              return (
                <Link
                  key={document.id}
                  to={`/law/${document.id}`}
                  className="group grid gap-2 py-5 text-foreground no-underline sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <span className="grid gap-1">
                    <span className="flex items-center gap-2 font-semibold">
                      <BookOpenText className="size-4 text-muted-foreground" aria-hidden="true" />
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

        <section id="law-library-safety">
          <h2>Як читати цей матеріал</h2>
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
      </article>
    </DocsLayout>
  )
}
