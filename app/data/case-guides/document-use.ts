import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type {
  CaseGuideDocument,
  CaseGuideDocumentAction,
  CaseGuideDocumentUse,
} from "./types"

/** Keep the shared document and its action in this stage separate. */
export function documentUse(
  document: CaseGuideDocument,
  action: CaseGuideDocumentAction,
  instruction: LegalTextValue
): CaseGuideDocumentUse {
  if (!legalTextPlainText(instruction).trim()) {
    throw new Error("A stage document use needs an explicit instruction.")
  }
  return { document, action, instruction }
}

export function isCaseGuideDocumentUse(
  entry: CaseGuideDocument | CaseGuideDocumentUse
): entry is CaseGuideDocumentUse {
  return "document" in entry
}

export function unwrapCaseGuideDocument(
  entry: CaseGuideDocument | CaseGuideDocumentUse
): CaseGuideDocument {
  return isCaseGuideDocumentUse(entry) ? entry.document : entry
}
