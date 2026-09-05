import { CaseReferenceDisclosure } from "./case-reference-disclosure"
import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { OfficialSourceEntry } from "~/components/references"

export function CaseOfficialSources({ route }: { route: CaseGuideRoute }) {
  return (
    <>
      <CaseReferenceDisclosure
        key={`${route.id}-sources`}
        id={caseStudySectionIds.sources}
        title="Офіційні джерела"
      >
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
      </CaseReferenceDisclosure>
    </>
  )
}
