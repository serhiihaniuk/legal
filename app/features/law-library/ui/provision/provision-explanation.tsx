import { LegalText } from "~/components/references"
import type { LegalExplanation } from "~/data/legal-library/contracts"
import type { ProvisionExplanationView } from "../../model/provision-explanation"
import { ProvisionRuleBreakdown } from "./provision-rule-breakdown"

const claimKindLabels = {
  "statute-text": "За текстом припису",
  "official-guidance": "Офіційне роз'яснення",
  "case-law": "Orzecznictwo",
  "practical-inference": "Практичний висновок",
} as const

function ClaimSources({ claims }: { claims: LegalExplanation["claims"] }) {
  if (!claims.length) return null
  return (
    <ul
      data-not-typeset
      className="not-typeset my-2 list-none space-y-1 p-0 text-xs text-muted-foreground"
    >
      {claims.map((claim, index) => (
        <li key={index}>
          {claimKindLabels[claim.kind]}
          {claim.sourceLocator ? ` · ${claim.sourceLocator}` : null}
        </li>
      ))}
    </ul>
  )
}

export function ProvisionExplanation({
  view,
}: {
  view: ProvisionExplanationView
}) {
  const { explanation, summaryClaims, caseClaims, additionalClaims } = view
  return (
    <>
      <section id="legal-provision-explanation">
        <h2>Як читати цю норму</h2>
        <p className="text-xs text-muted-foreground">
          Стан права в поясненні: {explanation.legalStateDate} · Перевірено:{" "}
          {explanation.verifiedAt}
        </p>
        <ClaimSources claims={summaryClaims} />
        <p className="text-lg leading-8">
          <LegalText context="provision-page" text={explanation.summary} />
        </p>
        <ProvisionRuleBreakdown rules={explanation.rules} />
        <h3>Правовий наслідок</h3>
        <p>
          <LegalText context="provision-page" text={explanation.legalEffect} />
        </p>
        <h3>Місце у справі іноземця</h3>
        <ClaimSources claims={caseClaims} />
        <p>
          <LegalText
            context="provision-page"
            text={explanation.foreignersCase}
          />
        </p>
      </section>
      {additionalClaims.length ? (
        <section id="legal-provision-claims">
          <h2>Додаткові пояснення та їхні джерела</h2>
          {additionalClaims.map((claim, index) => (
            <div key={index}>
              <ClaimSources claims={[claim]} />
              <p>
                <LegalText context="provision-page" text={claim.text} />
              </p>
            </div>
          ))}
        </section>
      ) : null}
    </>
  )
}
