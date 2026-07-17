import { buildKnowledgeGraph } from "./dependencies"
import { authoredKnowledgeUnits } from "./generated/units"
import { knowledgeSubjectKey } from "./contracts"

export { authoredKnowledgeUnits }

export const knowledgeUnitById = new Map(
  authoredKnowledgeUnits.map((unit) => [unit.id, unit] as const)
)

export const knowledgeUnitBySubjectKey = new Map(
  authoredKnowledgeUnits.map(
    (unit) => [knowledgeSubjectKey(unit.subject), unit] as const
  )
)

export const authoredKnowledgeGraph = buildKnowledgeGraph(
  authoredKnowledgeUnits
)
