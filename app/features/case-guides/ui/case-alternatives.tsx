import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { LegalText } from "~/components/references"
import { Button } from "~/components/ui/button"

export function CaseAlternatives({ route }: { route: CaseGuideRoute }) {
  return (
    <>
      <section
        id={caseStudySectionIds.branches}
        aria-labelledby="case-branches-heading"
      >
        <h2 id="case-branches-heading">Негативні й альтернативні гілки</h2>
        <p>
          Негативна гілка починається не лише з відмови. Нею може бути
          неправильна підстава, формальний недолік, невиконана особиста дія або
          зміна ключового факту під час розгляду.
        </p>
        <div data-not-typeset className="mt-6 divide-y border-y">
          {route.negativeBranches.map((branch) => (
            <article key={branch.title} className="py-5">
              <h3 className="text-base font-semibold">{branch.title}</h3>
              <dl className="mt-3 grid gap-2 text-sm leading-6">
                <div>
                  <dt className="inline font-medium">Тригер:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.trigger} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Наслідок:</dt>{" "}
                  <dd className="inline">
                    <LegalText text={branch.consequence} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Реакція:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.response} />
                  </dd>
                </div>
              </dl>
              {branch.material ? (
                <div className="mt-4">
                  <Button
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    render={<Link to={branch.material.href} />}
                  >
                    {branch.material.label}
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
