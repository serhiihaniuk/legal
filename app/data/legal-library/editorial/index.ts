import type {
  LegalDocumentId,
  LegalExplanation,
  LegalProvisionId,
} from "../contracts"

type ExplanationTable = Readonly<Record<string, LegalExplanation>>

const editorialLoaders: Partial<
  Record<LegalDocumentId, () => Promise<ExplanationTable>>
> = {
  "ustawa-o-cudzoziemcach": async () =>
    (await import("./ustawa-o-cudzoziemcach")).foreignersActExplanations,
  ppsa: async () => (await import("./ppsa")).ppsaExplanations,
}

export async function getEditorialExplanation<D extends LegalDocumentId>(
  documentId: D,
  provisionId: LegalProvisionId<D>
): Promise<LegalExplanation<D> | undefined> {
  const loader = editorialLoaders[documentId]
  if (!loader) return undefined
  const explanations = await loader()
  const explanation = explanations[provisionId]
  return explanation?.documentId === documentId
    ? (explanation as LegalExplanation<D>)
    : undefined
}
