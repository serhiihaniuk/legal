import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import {
  lawCatalogGuides,
  provisionCountLabel,
} from "~/data/legal-library/catalog-guide"
import {
  getDocument,
  getDocumentHomePath,
  getDocumentProvisionPath,
  listProvisions,
} from "~/data/legal-library"
export function LawCatalogList() {
  return (
    <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
      {lawCatalogGuides.map((guide, index) => {
        const document = getDocument(guide.id)!
        const provisions = listProvisions(guide.id)
        return (
          <article
            id={`law-${guide.id}`}
            key={guide.id}
            className="grid gap-3 py-7 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-5"
          >
            <span
              aria-hidden="true"
              className="pt-1 font-mono text-xs text-muted-foreground"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 lang="pl" className="text-xl font-semibold tracking-tight">
                {document.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {document.citation} ·{" "}
                {provisionCountLabel(
                  provisions.length,
                  guide.id === "rozporzadzenie-wniosek-pobyt-czasowy"
                    ? "mixed"
                    : "article"
                )}
              </p>
              <p className="mt-4 text-base leading-7">{guide.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {guide.description}
              </p>
              <nav
                aria-label={`Відкрити ${document.shortName}`}
                className="mt-4 flex flex-wrap gap-x-6 gap-y-1"
              >
                <Link
                  to={getDocumentProvisionPath(guide.id, provisions[0].id)}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Відкрити акт{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to={getDocumentHomePath(guide.id)}
                  className="inline-flex min-h-11 items-center text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Пояснення українською
                </Link>
              </nav>
              <p className="mt-2 border-l pl-3 text-sm leading-6 text-muted-foreground">
                {guide.boundary}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
