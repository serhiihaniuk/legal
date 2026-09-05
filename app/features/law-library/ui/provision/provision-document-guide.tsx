import { LegalLink } from "~/components/references"
import { documentFormLinks } from "~/data/document-library/form-links"
import type { LegalProvisionReference } from "~/data/legal-library/contracts"
export function ProvisionDocumentGuide({
  reference,
}: {
  reference: LegalProvisionReference
}) {
  const form = documentFormLinks.find(
    (form) =>
      form.reference.documentId === reference.documentId &&
      form.reference.provisionId === reference.provisionId
  )
  if (!form) return null
  return (
    <aside className="my-6 border-y py-4 text-sm">
      <p className="m-0 font-medium">Як підготувати цей документ</p>
      <p className="mt-2 mb-0">
        <LegalLink
          context="provision-page"
          reference={{ kind: "evidence-document", documentId: form.documentId }}
        >
          {form.label}
        </LegalLink>
      </p>
      <p className="mt-2 mb-0 text-muted-foreground">
        Хто заповнює, що перевірити та в яких справах використовується.
      </p>
    </aside>
  )
}
