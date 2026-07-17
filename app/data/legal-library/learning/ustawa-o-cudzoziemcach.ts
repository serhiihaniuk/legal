import { createLegalLearningTextAuthor } from "./legal-text"
import { defineLegalLearningCurriculum } from "./types"

import { entryAndCurrentBasisLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/entry-and-current-basis"
import { temporaryResidencePurposesLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/temporary-residence-purposes"
import { stayAndWorkRightLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/stay-and-work-right"
import { applicationEvidenceProcedureLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/application-evidence-procedure"
import { familyStudyResearchBusinessLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/family-study-research-business"
import { permanentAndEuLongTermResidentLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/permanent-and-eu-long-term-resident"
import { cardsAndDocumentsLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/cards-and-documents"
import { refusalWithdrawalExpiryRemediesLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/refusal-withdrawal-expiry-remedies"
import { returnAndDateSensitiveAnalysisLearningModuleTopic } from "./modules/ustawa-o-cudzoziemcach/return-and-date-sensitive-analysis"
const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

export const foreignersActLearningCurriculum = defineLegalLearningCurriculum({
  documentId: "ustawa-o-cudzoziemcach",
  title: "Ustawa o cudzoziemcach: практичний навчальний маршрут",
  description:
    "Дев’ять модулів для аналізу статусу cudzoziemiec: від wjazd і celu pobytu до документів, засобів захисту та повернення. Спочатку встановлюй факти, потім підставу, доказ, дію і наслідок.",
  modules: [
    entryAndCurrentBasisLearningModuleTopic.body,
    temporaryResidencePurposesLearningModuleTopic.body,
    stayAndWorkRightLearningModuleTopic.body,
    applicationEvidenceProcedureLearningModuleTopic.body,
    familyStudyResearchBusinessLearningModuleTopic.body,
    permanentAndEuLongTermResidentLearningModuleTopic.body,
    cardsAndDocumentsLearningModuleTopic.body,
    refusalWithdrawalExpiryRemediesLearningModuleTopic.body,
    returnAndDateSensitiveAnalysisLearningModuleTopic.body,
  ],
})
