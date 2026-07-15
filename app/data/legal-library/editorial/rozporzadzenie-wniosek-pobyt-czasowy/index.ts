import type { LegalExplanation, LegalProvisionId } from "../../contracts"

export const temporaryResidenceApplicationExplanations: Readonly<
  Partial<
    Record<
      LegalProvisionId<"rozporzadzenie-wniosek-pobyt-czasowy">,
      LegalExplanation<"rozporzadzenie-wniosek-pobyt-czasowy">
    >
  >
> = {}
