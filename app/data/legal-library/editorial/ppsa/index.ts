import type { LegalExplanation } from "../../contracts"
import { ppsaPart00 } from "./part-00"

export const ppsaExplanations = {
  ...ppsaPart00,
} as const satisfies Readonly<Record<string, LegalExplanation<"ppsa">>>
