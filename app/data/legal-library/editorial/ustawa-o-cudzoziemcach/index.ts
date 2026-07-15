import type { LegalExplanation } from "../../contracts"
import { foreignersActPart00 } from "./part-00"

export const foreignersActExplanations = {
  ...foreignersActPart00,
} as const satisfies Readonly<
  Record<string, LegalExplanation<"ustawa-o-cudzoziemcach">>
>
