import { LegalLink, LegalText } from "~/components/references"
import type { CaseGuideDocument } from "~/data/case-guides/types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { DocumentStatus } from "./case-guide-shared"
export function CasePreparationActions({
  documents,
}: {
  documents: CaseGuideDocument[]
}) {
  const actions = documents.filter((item) => item.kind === "action")
  if (!actions.length) return null
  return (
    <section className="my-5 border-y py-4">
      <h4 className="mb-3 font-medium">Підготовчі дії</h4>
      <div className="space-y-5">
        {actions.map((action) => (
          <div key={legalTextPlainText(action.item)}>
            <div className="flex flex-wrap items-center gap-2">
              <p className="m-0 font-medium">
                <LegalText text={action.item} />
              </p>
              <DocumentStatus document={action} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <LegalText text={action.owner} />
            </p>
            <p className="mt-1 text-sm">
              <LegalText text={action.proves} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <LegalText text={action.law} />
            </p>
            {action.guidance ? (
              <p className="mt-2 text-sm">
                <LegalLink
                  reference={{
                    kind: "evidence-document",
                    documentId: action.guidance,
                  }}
                >
                  Як підготуватися до подання
                </LegalLink>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
