import { CasePreparationActions } from "./case-preparation-actions"
import { LegalLink } from "~/components/references"
import type { CaseGuideStage } from "~/data/case-guides/types"
import { LegalText } from "~/components/references"
import { Checkbox } from "~/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui/field"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { DocumentStatus } from "./case-guide-shared"
import { CaseDocumentReview } from "./case-document-review"
import { CaseStageDisclosure } from "./case-stage-disclosure"

export function CaseStageDocuments({ stage }: { stage: CaseGuideStage }) {
  if (stage.documents.length === 0) return null
  const documents = stage.documents.filter(
    (document) => document.kind !== "action"
  )
  return (
    <>
      <CasePreparationActions documents={stage.documents} />
      {documents.length ? (
        <CaseStageDisclosure
          id={`documents-${stage.id}`}
          title="Документи та докази"
          count={documents.length}
        >
          <FieldSet className="gap-0">
            <FieldLegend className="sr-only">
              Документи етапу «{stage.title}»
            </FieldLegend>
            <FieldGroup className="gap-0 divide-y">
              {documents.map((document, documentIndex) => {
                const checkboxId = `${stage.id}-document-${documentIndex}`

                return (
                  <Field
                    key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
                    orientation="horizontal"
                    className="items-start py-4"
                  >
                    <Checkbox id={checkboxId} className="mt-1" />
                    <FieldContent>
                      <div className="flex flex-wrap items-center gap-2">
                        <FieldLabel htmlFor={checkboxId} className="text-base">
                          <LegalText
                            text={document.item}
                            context="reference-section"
                          />
                        </FieldLabel>
                        <DocumentStatus document={document} />
                      </div>
                      <FieldDescription>
                        <strong className="font-medium text-foreground">
                          Навіщо на цьому етапі:
                        </strong>{" "}
                        <LegalText text={document.proves} />
                      </FieldDescription>
                      <dl className="mt-2 space-y-2 text-sm leading-6">
                        <div>
                          <dt className="inline font-medium">Хто і коли: </dt>
                          <dd className="inline text-muted-foreground">
                            <LegalText text={document.owner} />
                          </dd>
                        </div>
                        <div>
                          <dt className="inline font-medium">Правова роль: </dt>
                          <dd className="inline text-muted-foreground">
                            <LegalText
                              text={document.law}
                              context="reference-section"
                            />
                          </dd>
                        </div>
                      </dl>
                      {document.guidance ? (
                        <p className="text-sm">
                          <LegalLink
                            reference={{
                              kind: "evidence-document",
                              documentId: document.guidance,
                            }}
                          >
                            Як вибрати потрібний документ
                          </LegalLink>
                        </p>
                      ) : null}
                      {document.reviewId ? (
                        <CaseDocumentReview reviewId={document.reviewId} />
                      ) : null}
                    </FieldContent>
                  </Field>
                )
              })}
            </FieldGroup>
          </FieldSet>
        </CaseStageDisclosure>
      ) : null}
    </>
  )
}
