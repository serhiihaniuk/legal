import { Link } from "react-router"

import { Button } from "~/components/ui/button"
import { getDocumentHomePath, listDocuments } from "~/data/legal-library"

export function LawLibraryNavigation() {
  const documents = listDocuments()

  return (
    <nav aria-label="Правові акти" className="pb-10">
      <p className="px-2 text-xs font-medium text-muted-foreground">
        Бібліотека права
      </p>
      <ul className="mt-2 grid gap-1">
        {documents.map((document) => (
          <li key={document.id}>
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link to={getDocumentHomePath(document.id)} />}
              className="h-auto min-h-10 w-full justify-start px-2 py-2 text-left whitespace-normal"
            >
              <span className="grid min-w-0 gap-0.5">
                <span className="text-sm font-medium">
                  {document.shortName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {document.citation}
                </span>
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
