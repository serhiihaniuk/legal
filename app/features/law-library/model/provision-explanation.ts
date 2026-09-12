import type { LegalExplanation } from "~/data/legal-library/contracts"

type Claim = LegalExplanation["claims"][number]

export function buildProvisionExplanationView(explanation: LegalExplanation) {
  const summaryClaims: Claim[] = []
  const caseClaims: Claim[] = []
  const additionalClaims: Claim[] = []
  const summary = JSON.stringify(explanation.summary)
  const example = JSON.stringify(explanation.foreignersCase)

  for (const claim of explanation.claims) {
    // Compare the complete authored value, including reference destinations.
    // Equal visible words with different sources must remain separate.
    const text = JSON.stringify(claim.text)
    if (text === summary) summaryClaims.push(claim)
    else if (text === example) caseClaims.push(claim)
    else additionalClaims.push(claim)
  }

  return { explanation, summaryClaims, caseClaims, additionalClaims }
}

export type ProvisionExplanationView = ReturnType<
  typeof buildProvisionExplanationView
>
