import type { LegalExplanation } from "../../contracts"
import { ppsaPart00 } from "./part-00"
import { ppsaPart01 } from "./part-01"
import { ppsaPart02 } from "./part-02"
import { ppsaPart03 } from "./part-03"
import { ppsaPart04 } from "./part-04"
import { ppsaPart05 } from "./part-05"
import { ppsaPart06a } from "./part-06a"
import { ppsaPart06b } from "./part-06b"
import { ppsaPart07a } from "./part-07a"
import { ppsaPart07b } from "./part-07b"

export const ppsaExplanations = {
  ...ppsaPart00,
  ...ppsaPart01,
  ...ppsaPart02,
  ...ppsaPart03,
  ...ppsaPart04,
  ...ppsaPart05,
  ...ppsaPart06a,
  ...ppsaPart06b,
  ...ppsaPart07a,
  ...ppsaPart07b,
} as const satisfies Readonly<Record<string, LegalExplanation<"ppsa">>>
