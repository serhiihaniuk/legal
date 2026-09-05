import { LegalText } from "~/components/references"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
export function ProvisionRuleBreakdown({
  rules,
}: {
  rules: readonly { locator: string; explanation: LegalTextValue }[]
}) {
  if (!rules.length) return null
  return (
    <div>
      <h3>Що означають окремі частини</h3>
      <dl data-not-typeset className="not-typeset mt-5 divide-y border-y">
        {rules.map((rule) => (
          <div
            key={`${rule.locator}-${legalTextPlainText(rule.explanation)}`}
            className="py-4"
          >
            <dt className="mb-2 text-sm font-semibold" lang="pl">
              {rule.locator}
            </dt>
            <dd className="text-sm leading-7">
              <LegalText context="provision-page" text={rule.explanation} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
