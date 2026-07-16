import type {
  LegalDocumentId,
  LegalExplanation,
  LegalProvisionId,
} from "../contracts"

type ExplanationTable = Readonly<Record<string, LegalExplanation>>

const editorialLoaders: Partial<
  Record<LegalDocumentId, () => Promise<ExplanationTable>>
> = {
  kpa: async () => (await import("./kpa")).loadKpaExplanations(),
  "ustawa-o-cudzoziemcach": async () =>
    (await import("./ustawa-o-cudzoziemcach")).foreignersActExplanations,
  ppsa: async () => (await import("./ppsa")).ppsaExplanations,
  "powierzanie-pracy": async () =>
    (await import("./powierzanie-pracy")).powierzaniePracyExplanations,
  "rozporzadzenie-wniosek-pobyt-czasowy": async () =>
    (await import("./rozporzadzenie-wniosek-pobyt-czasowy"))
      .temporaryResidenceApplicationExplanations,
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
