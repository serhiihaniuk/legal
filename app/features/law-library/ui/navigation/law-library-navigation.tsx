import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import {
  getDocument,
  getDocumentProvisionPath,
  listProvisions,
} from "~/data/legal-library"
import { lawCatalogGuides } from "~/data/legal-library/catalog-guide"
export function LawLibraryNavigation() {
  return (
    <nav aria-label="Правові акти" className="pb-10">
      <p className="px-2 text-xs font-medium text-muted-foreground">
        Бібліотека права
      </p>
      <ul className="mt-3 grid gap-2">
        {lawCatalogGuides.map((guide) => {
          const document = getDocument(guide.id)!
          return (
            <li key={guide.id}>
              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={
                  <Link
                    to={getDocumentProvisionPath(
                      guide.id,
                      listProvisions(document.id)[0].id
                    )}
                  />
                }
                className="h-auto min-h-11 w-full justify-start px-2 py-2 text-left whitespace-normal"
              >
                <span className="grid min-w-0 gap-1">
                  <span lang="pl" className="text-sm font-medium">
                    {document.shortName}
                  </span>
                  <span className="text-xs leading-5 text-muted-foreground">
                    {guide.title}
                  </span>
                </span>
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
