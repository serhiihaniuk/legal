import type { LegalExplanation } from "../../contracts"
import { foreignersActPart00 } from "./part-00"
import { foreignersActPart01a } from "./part-01a"
import { foreignersActPart01b } from "./part-01b"
import { foreignersActPart02 } from "./part-02"
import { foreignersActPart03 } from "./part-03"
import { foreignersActPart04 } from "./part-04"
import { foreignersActPart05 } from "./part-05"
import { foreignersActPart06 } from "./part-06"
import { foreignersActPart07a } from "./part-07a"
import { foreignersActPart07b1 } from "./part-07b1"
import { foreignersActPart07b2a } from "./part-07b2a"
import { foreignersActPart07b2b } from "./part-07b2b"
import { foreignersActPart08 } from "./part-08"
import { foreignersActPart09 } from "./part-09"
import { foreignersActPart10 } from "./part-10"
import { foreignersActPart11 } from "./part-11"
import { foreignersActPart12 } from "./part-12"
import { foreignersActPart13a1 } from "./part-13a1"
import { foreignersActPart13a2 } from "./part-13a2"
import { foreignersActPart13b } from "./part-13b"

export const foreignersActExplanations = {
  ...foreignersActPart00,
  ...foreignersActPart01a,
  ...foreignersActPart01b,
  ...foreignersActPart02,
  ...foreignersActPart03,
  ...foreignersActPart04,
  ...foreignersActPart05,
  ...foreignersActPart06,
  ...foreignersActPart07a,
  ...foreignersActPart07b1,
  ...foreignersActPart07b2a,
  ...foreignersActPart07b2b,
  ...foreignersActPart08,
  ...foreignersActPart09,
  ...foreignersActPart10,
  ...foreignersActPart11,
  ...foreignersActPart12,
  ...foreignersActPart13a1,
  ...foreignersActPart13a2,
  ...foreignersActPart13b,
} as const satisfies Readonly<
  Record<string, LegalExplanation<"ustawa-o-cudzoziemcach">>
>
