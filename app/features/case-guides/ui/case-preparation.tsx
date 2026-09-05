import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { LegalText } from "~/components/references"

export function CasePreparation({ route }: { route: CaseGuideRoute }) {
  return (
    <>
      <section
        id={caseStudySectionIds.facts}
        aria-labelledby="case-facts-heading"
      >
        <h2 id="case-facts-heading">Факти, які треба встановити у справі</h2>
        <div data-not-typeset className="mt-6">
          <p className="text-xs font-medium text-muted-foreground">
            Ситуація, яку розбираємо
          </p>
          <h3 className="mt-2 text-lg leading-snug font-medium">
            {route.profile.name}
          </h3>
          <p className="mt-3 leading-7">
            <LegalText text={route.profile.description} />
          </p>
          <dl className="mt-6 divide-y border-y">
            {route.profile.facts.map((fact) => (
              <div key={fact.label} className="py-5">
                <dt className="text-sm font-medium">{fact.label}</dt>
                <dd className="mt-2 leading-7">
                  <LegalText text={fact.value} />
                  {fact.explanation && (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      <LegalText text={fact.explanation} />
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            <LegalText text={route.profile.assumption} />
          </p>
        </div>
      </section>
      <section
        id={caseStudySectionIds.choice}
        aria-labelledby="case-choice-heading"
      >
        <h2 id="case-choice-heading">Чому обираємо саме цю підставу</h2>
        <p>
          <LegalText text={route.choice.why} />
        </p>
        <h3>Що відрізняє цю підставу від найближчої альтернативи</h3>
        <p>
          <LegalText text={route.choice.closestAlternative} />
        </p>
        <p>
          <strong>Вирішальний критерій. </strong>
          <LegalText text={route.choice.gate} />
        </p>
        <div data-not-typeset className="mt-6 border-t pt-5">
          <h3 className="text-sm font-medium">Орієнтири для ведення справи</h3>
          <dl className="mt-3 space-y-2 text-sm leading-6">
            {route.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="inline text-muted-foreground">
                  {metric.label}:{" "}
                </dt>
                <dd className="inline">
                  <LegalText text={metric.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
