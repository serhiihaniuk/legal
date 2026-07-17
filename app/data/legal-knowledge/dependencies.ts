import type {
  KnowledgeClaim,
  KnowledgeSourceReference,
  KnowledgeUnit,
  KnowledgeUnitSubject,
} from "./contracts"
import { knowledgeSubjectKey } from "./contracts"

export type KnowledgeGraphUnit = {
  id: string
  subject: KnowledgeUnitSubject
  subjectKey: string
}

export type KnowledgeDependencyOrigin =
  | {
      kind: "claim-basis"
      claimIndex: number
      claimId?: string
      basisIndex: number
    }
  | {
      kind: "relationship"
      relationshipIndex: number
      relationshipKind: string
    }

export type KnowledgeDependencyStatus = "unit" | "source" | "unresolved"

export type KnowledgeDependency = {
  fromUnitId: string
  fromSubjectKey: string
  targetKey: string
  target: KnowledgeSourceReference | KnowledgeUnitSubject
  origin: KnowledgeDependencyOrigin
  status: KnowledgeDependencyStatus
  targetUnitId?: string
}

export type KnowledgeGraphDiagnostic =
  | {
      code: "duplicate-unit-id" | "duplicate-subject"
      unitIds: readonly string[]
      key: string
    }
  | {
      code: "unresolved-reference"
      fromUnitId: string
      targetKey: string
      origin: KnowledgeDependencyOrigin
    }
  | {
      code: "dependency-cycle"
      unitIds: readonly string[]
    }

export type KnowledgeInboundDependencies = {
  unitId: string
  dependencies: readonly KnowledgeDependency[]
}

export type KnowledgeGraph = {
  units: readonly KnowledgeGraphUnit[]
  outbound: readonly KnowledgeDependency[]
  inbound: readonly KnowledgeInboundDependencies[]
  diagnostics: readonly KnowledgeGraphDiagnostic[]
}

/**
 * Stable key for a typed reference emitted by a claim or family body.
 * Family subjects and their public reference shapes intentionally share keys,
 * so a migrated map/case/evidence unit can become a dependency target without
 * adding a second hand-maintained alias list.
 */
export function knowledgeReferenceKey(
  reference: KnowledgeSourceReference | KnowledgeUnitSubject
): string {
  if ("family" in reference) return knowledgeSubjectKey(reference)

  switch (reference.kind) {
    case "legal-document":
      return `source:legal-document:${reference.documentId}`
    case "legal-provision":
      return `source:legal-provision:${reference.documentId}:${reference.provisionId}:${reference.editionId ?? "current"}`
    case "official-source":
      return `source:official-source:${reference.sourceId}`
    case "evidence-document":
      return `evidence-document:${reference.documentId}`
    case "map-node":
      return `map-topic:${reference.nodeId}`
    case "case-route":
      return `case-guide:${reference.routeId}`
    case "external":
      return `source:external:${reference.url}`
  }
}

function isSourceReference(reference: KnowledgeSourceReference): boolean {
  return (
    reference.kind === "legal-document" ||
    reference.kind === "legal-provision" ||
    reference.kind === "official-source" ||
    reference.kind === "external"
  )
}

function compareStrings(left: string, right: string): number {
  return left.localeCompare(right, "en")
}

function dependencySortKey(dependency: KnowledgeDependency): string {
  const origin =
    dependency.origin.kind === "claim-basis"
      ? `claim:${dependency.origin.claimIndex}:${dependency.origin.basisIndex}`
      : `relationship:${dependency.origin.relationshipIndex}`
  return `${dependency.fromUnitId}:${origin}:${dependency.targetKey}`
}

function diagnosticSortKey(diagnostic: KnowledgeGraphDiagnostic): string {
  switch (diagnostic.code) {
    case "duplicate-unit-id":
    case "duplicate-subject":
      return `${diagnostic.code}:${diagnostic.key}`
    case "unresolved-reference":
      return `${diagnostic.code}:${diagnostic.fromUnitId}:${diagnostic.targetKey}`
    case "dependency-cycle":
      return `${diagnostic.code}:${diagnostic.unitIds.join(",")}`
  }
}

function buildCycleDiagnostics(
  units: readonly KnowledgeGraphUnit[],
  dependencies: readonly KnowledgeDependency[]
): KnowledgeGraphDiagnostic[] {
  const unitIds = new Set(units.map((unit) => unit.id))
  const outgoing = new Map<string, string[]>()
  for (const dependency of dependencies) {
    if (dependency.status !== "unit" || !dependency.targetUnitId) continue
    if (!unitIds.has(dependency.fromUnitId)) continue
    const targets = outgoing.get(dependency.fromUnitId) ?? []
    if (!targets.includes(dependency.targetUnitId)) {
      targets.push(dependency.targetUnitId)
      targets.sort(compareStrings)
    }
    outgoing.set(dependency.fromUnitId, targets)
  }

  const state = new Map<string, "visiting" | "visited">()
  const stack: string[] = []
  const cycles = new Set<string>()

  function visit(unitId: string): void {
    if (state.get(unitId) === "visited") return
    if (state.get(unitId) === "visiting") {
      const cycleStart = stack.indexOf(unitId)
      const cycle = stack.slice(cycleStart)
      const normalized = [...cycle].sort(compareStrings)
      cycles.add(normalized.join("\u0000"))
      return
    }

    state.set(unitId, "visiting")
    stack.push(unitId)
    for (const targetId of outgoing.get(unitId) ?? []) visit(targetId)
    stack.pop()
    state.set(unitId, "visited")
  }

  for (const unit of [...units].sort((left, right) =>
    compareStrings(left.id, right.id)
  )) {
    visit(unit.id)
  }

  return [...cycles].sort(compareStrings).map((key) => ({
    code: "dependency-cycle" as const,
    unitIds: key.split("\u0000").sort(compareStrings),
  }))
}

function dependencyFromClaim(
  unit: KnowledgeGraphUnit,
  claim: KnowledgeClaim,
  claimIndex: number,
  basisIndex: number,
  basis: KnowledgeClaim["basis"][number],
  unitsBySubject: ReadonlyMap<string, KnowledgeGraphUnit>
): KnowledgeDependency {
  const targetKey = knowledgeReferenceKey(basis.reference)
  const targetUnit = unitsBySubject.get(targetKey)
  const status: KnowledgeDependencyStatus = targetUnit
    ? "unit"
    : isSourceReference(basis.reference)
      ? "source"
      : "unresolved"

  return {
    fromUnitId: unit.id,
    fromSubjectKey: knowledgeSubjectKey(unit.subject),
    targetKey,
    target: basis.reference,
    origin: {
      kind: "claim-basis",
      claimIndex,
      ...(claim.id ? { claimId: claim.id } : {}),
      basisIndex,
    },
    status,
    ...(targetUnit ? { targetUnitId: targetUnit.id } : {}),
  }
}

/**
 * Derive outbound and inbound dependency edges from the typed envelope.
 * Claim bases may point at immutable legal/official sources; typed map, case,
 * and evidence references resolve to authored units as those families migrate.
 */
export function buildKnowledgeGraph(
  units: readonly KnowledgeUnit<unknown>[]
): KnowledgeGraph {
  const graphUnits = units
    .map((unit) => ({
      id: unit.id,
      subject: unit.subject,
      subjectKey: knowledgeSubjectKey(unit.subject),
    }))
    .sort((left, right) => compareStrings(left.id, right.id))

  const diagnostics: KnowledgeGraphDiagnostic[] = []
  const ids = new Map<string, string[]>()
  const subjects = new Map<string, string[]>()
  for (const unit of graphUnits) {
    ids.set(unit.id, [...(ids.get(unit.id) ?? []), unit.id])
    subjects.set(unit.subjectKey, [
      ...(subjects.get(unit.subjectKey) ?? []),
      unit.id,
    ])
  }
  for (const [key, unitIds] of ids) {
    if (unitIds.length > 1) {
      diagnostics.push({ code: "duplicate-unit-id", unitIds, key })
    }
  }
  for (const [key, unitIds] of subjects) {
    if (unitIds.length > 1) {
      diagnostics.push({ code: "duplicate-subject", unitIds, key })
    }
  }

  const unitsBySubject = new Map<string, KnowledgeGraphUnit>()
  for (const unit of graphUnits) {
    if (!unitsBySubject.has(unit.subjectKey)) {
      unitsBySubject.set(unit.subjectKey, unit)
    }
  }
  const unitsById = new Map<string, KnowledgeUnit<unknown>>()
  for (const unit of units) {
    if (!unitsById.has(unit.id)) unitsById.set(unit.id, unit)
  }

  const dependencies: KnowledgeDependency[] = []
  for (const graphUnit of graphUnits) {
    const unit = unitsById.get(graphUnit.id)
    if (!unit) continue

    unit.claims.forEach((claim, claimIndex) => {
      claim.basis.forEach((basis, basisIndex) => {
        const dependency = dependencyFromClaim(
          graphUnit,
          claim,
          claimIndex,
          basisIndex,
          basis,
          unitsBySubject
        )
        dependencies.push(dependency)
        if (dependency.status === "unresolved") {
          diagnostics.push({
            code: "unresolved-reference",
            fromUnitId: dependency.fromUnitId,
            targetKey: dependency.targetKey,
            origin: dependency.origin,
          })
        }
      })
    })

    unit.relationships.forEach((relationship, relationshipIndex) => {
      const targetKey = knowledgeReferenceKey(relationship.target)
      const targetUnit = unitsBySubject.get(targetKey)
      const dependency: KnowledgeDependency = {
        fromUnitId: graphUnit.id,
        fromSubjectKey: graphUnit.subjectKey,
        targetKey,
        target: relationship.target,
        origin: {
          kind: "relationship",
          relationshipIndex,
          relationshipKind: relationship.kind,
        },
        status: targetUnit ? "unit" : "unresolved",
        ...(targetUnit ? { targetUnitId: targetUnit.id } : {}),
      }
      dependencies.push(dependency)
      if (dependency.status === "unresolved") {
        diagnostics.push({
          code: "unresolved-reference",
          fromUnitId: dependency.fromUnitId,
          targetKey: dependency.targetKey,
          origin: dependency.origin,
        })
      }
    })
  }

  const sortedDependencies = dependencies.sort((left, right) =>
    compareStrings(dependencySortKey(left), dependencySortKey(right))
  )
  const inboundByUnit = new Map<string, KnowledgeDependency[]>()
  for (const dependency of sortedDependencies) {
    if (dependency.status !== "unit" || !dependency.targetUnitId) continue
    const inbound = inboundByUnit.get(dependency.targetUnitId) ?? []
    inbound.push(dependency)
    inboundByUnit.set(dependency.targetUnitId, inbound)
  }
  const inbound = [...inboundByUnit.entries()]
    .sort(([left], [right]) => compareStrings(left, right))
    .map(([unitId, inboundDependencies]) => ({
      unitId,
      dependencies: inboundDependencies,
    }))

  diagnostics.push(...buildCycleDiagnostics(graphUnits, sortedDependencies))

  return {
    units: graphUnits,
    outbound: sortedDependencies,
    inbound,
    diagnostics: diagnostics.sort((left, right) =>
      compareStrings(diagnosticSortKey(left), diagnosticSortKey(right))
    ),
  }
}
