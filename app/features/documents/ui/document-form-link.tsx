import { LegalLink } from "~/components/references"
import { documentFormLinks } from "~/data/document-library/form-links"
import type { EvidenceDocumentId } from "~/data/document-library/contracts"
export function DocumentFormLink({
  documentId,
}: {
  documentId: EvidenceDocumentId
}) {
  const form = documentFormLinks.find((form) => form.documentId === documentId)
  if (!form) return null
  return (
    <p className="border-y py-3 text-sm">
      <LegalLink reference={form.reference}>
        Офіційний формуляр у бібліотеці права
      </LegalLink>
      <span className="mt-1 block text-muted-foreground">{form.label}</span>
    </p>
  )
}
