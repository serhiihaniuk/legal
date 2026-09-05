import type { StudyModule } from "./contracts"
import { defineLegalTextContent } from "../legal-library/legal-text"
import { sourcesTopic } from "./topics/sources"
import { normTopic } from "./topics/norm"
import { kpaTopic } from "./topics/kpa"
import { stayTopic } from "./topics/stay"
import { workTopic } from "./topics/work"
import { evidenceTopic } from "./topics/evidence"
import { remediesTopic } from "./topics/remedies"
import { caseOverviewTopic } from "./topics/capstone"

export type { StudyModule } from "./contracts"

export const studyModules: readonly StudyModule[] = defineLegalTextContent(
  [
    sourcesTopic,
    normTopic,
    kpaTopic,
    stayTopic,
    workTopic,
    evidenceTopic,
    remediesTopic,
    caseOverviewTopic,
  ],
  "study-topics"
)
