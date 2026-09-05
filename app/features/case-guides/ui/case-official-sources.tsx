import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { OfficialSourceEntry } from "~/components/references"

export function CaseOfficialSources({ route }: { route: CaseGuideRoute }) {
  return (
    <>
      <section
        id={caseStudySectionIds.sources}
        aria-labelledby="case-sources-heading"
      >
        <h2 id="case-sources-heading">Офіційні джерела</h2>
        <p>
          Внутрішні матеріали пояснюють механізм, але юридичне твердження завжди
          звіряємо з актуальним офіційним текстом і датою факту.
        </p>
        <ul data-not-typeset className="not-typeset list-none p-0">
          {route.sources.map((source) => (
            <li key={source.url} className="border-t py-5 first:border-t-0">
              <OfficialSourceEntry source={source} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
