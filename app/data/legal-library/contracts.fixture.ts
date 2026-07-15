import type {
  LegalProvisionReference,
  LegalEditionId,
  LegalProvisionId,
} from "./contracts"

const validKpa: LegalProvisionReference = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-1",
  editionId: "kpa-2025-1691",
}

const validForeignersAct: LegalProvisionReference = {
  kind: "legal-provision",
  documentId: "ustawa-o-cudzoziemcach",
  provisionId: "ustawa-o-cudzoziemcach-art-1",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
}

const kpaEdition: LegalEditionId<"kpa"> = "kpa-2025-1691"
const foreignersProvision: LegalProvisionId<"ustawa-o-cudzoziemcach"> =
  "ustawa-o-cudzoziemcach-art-1"

void validKpa
void validForeignersAct
void kpaEdition
void foreignersProvision

// @ts-expect-error A provision from another document cannot be paired with kpa.
const wrongDocumentProvision: LegalProvisionReference = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "ustawa-o-cudzoziemcach-art-1",
}

// @ts-expect-error An edition from another document cannot be paired with kpa.
const wrongDocumentEdition: LegalProvisionReference = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-1",
  editionId: "ppsa-2026-143",
}

void wrongDocumentProvision
void wrongDocumentEdition
