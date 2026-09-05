import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import {
  getEvidenceDocumentNavigation,
  getEvidenceDocumentPath,
  type EvidenceDocumentId,
} from "~/data/document-library"
export function DocumentAdjacentNavigation({
  documentId,
}: {
  documentId: EvidenceDocumentId
}) {
  const { previous, next } = getEvidenceDocumentNavigation(documentId)
  return (
    <nav
      data-not-typeset
      aria-label="Попередній і наступний документ"
      className="not-typeset mt-10 grid grid-cols-2 gap-3 border-t pt-6"
    >
      {previous ? (
        <Button
          variant="ghost"
          nativeButton={false}
          className="min-w-0 justify-start"
          render={<Link to={getEvidenceDocumentPath(previous.id)!} />}
        >
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          <span className="min-w-0 truncate">{previous.title}</span>
        </Button>
      ) : (
        <Button variant="ghost" className="min-w-0 justify-start" disabled>
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          Початок
        </Button>
      )}
      {next ? (
        <Button
          variant="ghost"
          nativeButton={false}
          className="min-w-0 justify-end"
          render={<Link to={getEvidenceDocumentPath(next.id)!} />}
        >
          <span className="min-w-0 truncate">{next.title}</span>
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      ) : (
        <Button variant="ghost" className="min-w-0 justify-end" disabled>
          Кінець
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      )}
    </nav>
  )
}
