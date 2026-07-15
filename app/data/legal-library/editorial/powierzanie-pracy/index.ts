import type { LegalExplanation } from "../../contracts"
import { powierzaniePracyPart01a } from "./part-01a"
import { powierzaniePracyPart01b } from "./part-01b"
import { powierzaniePracyPart02 } from "./part-02"
import { powierzaniePracyPart03 } from "./part-03"

export const powierzaniePracyExplanations = {
  ...powierzaniePracyPart01a,
  ...powierzaniePracyPart01b,
  ...powierzaniePracyPart02,
  ...powierzaniePracyPart03,
} as const satisfies Readonly<
  Record<string, LegalExplanation<"powierzanie-pracy">>
>
