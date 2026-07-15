import type { LegalExplanation, LegalProvisionId } from "../../contracts"

export const powierzaniePracyExplanations: Readonly<
  Partial<
    Record<
      LegalProvisionId<"powierzanie-pracy">,
      LegalExplanation<"powierzanie-pracy">
    >
  >
> = {}
