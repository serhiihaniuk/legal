import { CaseReferenceDisclosure } from "./case-reference-disclosure"
import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { ConditionsMatrix } from "./conditions-matrix"
import { DocumentRegister } from "./case-registers"
import { DeadlineRegister } from "./case-deadline-register"

export function CaseReferenceSections({ route }: { route: CaseGuideRoute }) {
  return (
    <>
      <CaseReferenceDisclosure
        key={`${route.id}-conditions`}
        id={caseStudySectionIds.conditions}
        title="Матриця умов маршруту"
      >
        <p>
          Тут правова умова з’єднана з фактом, який треба встановити, доказом і
          ризиком. Саме така матриця показує, чого справді бракує до рішення.
        </p>
        <ConditionsMatrix conditions={route.conditions} />
      </CaseReferenceDisclosure>
      <CaseReferenceDisclosure
        key={`${route.id}-registers`}
        id={caseStudySectionIds.registers}
        title="Документи й строки"
      >
        <p>
          Реєстри нижче збирають деталі з етапів в одному місці. Документ
          читається через факт, який він доводить; строк — через подію, яка
          запускає відлік.
        </p>
        <h3>Реєстр документів і доказів</h3>
        <DocumentRegister documents={route.documents} />
        <h3 id="case-deadlines">Строки за ходом справи</h3>
        <DeadlineRegister deadlines={route.deadlines} stages={route.stages} />
      </CaseReferenceDisclosure>
    </>
  )
}
