import { createLegalLearningTextAuthor } from "./legal-text"
import { defineLegalLearningCurriculum } from "./types"

import { roleOfRegulationLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/role-of-regulation"
import { chooseFormLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/choose-form"
import { consistentFieldsLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/consistent-fields"
import { formVersusProofLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/form-versus-proof"
import { submissionAuditLearningModuleTopic } from "./modules/rozporzadzenie-wniosek-pobyt-czasowy/submission-audit"
const regulationLaw = createLegalLearningTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

export const temporaryResidenceApplicationLearningCurriculum =
  defineLegalLearningCurriculum({
    documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
    title: "Як працювати з wnioskiem про pobyt czasowy",
    description:
      "Курс вчить читати rozporządzenie і wzory formularzy як інструкцію до форми, не підміняючи ними матеріальні умови ustawy o cudzoziemcach.",
    modules: [
      roleOfRegulationLearningModuleTopic.body,
      chooseFormLearningModuleTopic.body,
      consistentFieldsLearningModuleTopic.body,
      formVersusProofLearningModuleTopic.body,
      submissionAuditLearningModuleTopic.body,
    ],
  })
