import type { LegalExplanation } from "../../contracts"
import { temporaryResidenceApplicationPart01 } from "./part-01"

export const temporaryResidenceApplicationExplanations = {
  ...temporaryResidenceApplicationPart01,
} as const satisfies Readonly<
  Record<
    string,
    LegalExplanation<"rozporzadzenie-wniosek-pobyt-czasowy">
  >
>
