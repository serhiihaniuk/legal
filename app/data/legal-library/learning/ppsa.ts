import { defineLegalLearningCurriculum } from "./types"

import { scopeLearningModuleTopic } from "./modules/ppsa/scope"
import { admissibilityLearningModuleTopic } from "./modules/ppsa/admissibility"
import { partiesAndFileLearningModuleTopic } from "./modules/ppsa/parties-and-file"
import { reviewAndSuspensionLearningModuleTopic } from "./modules/ppsa/review-and-suspension"
import { judgmentsAndEffectsLearningModuleTopic } from "./modules/ppsa/judgments-and-effects"
import { cassationAndNsaLearningModuleTopic } from "./modules/ppsa/cassation-and-nsa"
import { executionAndCostsLearningModuleTopic } from "./modules/ppsa/execution-and-costs"

export const ppsaLearningCurriculum = defineLegalLearningCurriculum<"ppsa">({
  documentId: "ppsa",
  title: "PPSA: від skargi до виконання",
  description:
    "Практичний курс про судовий контроль administracji publicznej у справах іноземців: від класифікації проблеми до наслідків рішення.",
  modules: [
    scopeLearningModuleTopic.body,
    admissibilityLearningModuleTopic.body,
    partiesAndFileLearningModuleTopic.body,
    reviewAndSuspensionLearningModuleTopic.body,
    judgmentsAndEffectsLearningModuleTopic.body,
    cassationAndNsaLearningModuleTopic.body,
    executionAndCostsLearningModuleTopic.body,
  ],
})
