import type { EvidenceDocumentId } from "./contracts"

/**
 * Literal allowlist of URLs issued by the former title-hash catalog.
 *
 * Do not derive this map from current titles or aliases: editorial wording may
 * change, while an already-issued compatibility URL must remain stable.
 * Ambiguous historical aliases are intentionally omitted and fail closed.
 */
export const legacyEvidenceDocumentIdMap: ReadonlyMap<
  string,
  EvidenceDocumentId
> = new Map([
  ["dokument-dkt7wd", "employment-annex-1"],
  ["dokument-5ywzrc", "employment-contract"],
  ["dokument-prrcdn", "mos-application"],
  ["dokument-bdoo04", "mos-application"],
  ["dokument-sr6xuy", "passport"],
  ["dokument-1oumdf6", "passport"],
  ["dokument-hwvvzg", "upo"],
  ["dokument-190g4gs", "ukraine-work-notification"],
  ["dokument-1lm224g", "ukraine-work-notification"],
  ["dokument-v2o3a3", "authority-summons"],
  ["dokument-xx1eia", "delivery-proof"],
  ["dokument-sjz6fv", "delivery-proof"],
  ["dokument-15fbvk", "power-of-attorney"],
  ["dokument-1gkke13", "administrative-decision"],
  ["dokument-3mvqob", "zus-confirmation"],
  ["dokument-171054b", "zus-confirmation"],
  ["dokument-1wov153", "business-register-information"],
  ["dokument-1qzzmi2", "business-register-information"],
  ["dokument-1offf8p", "crbr-information"],
  ["dokument-k7hgbb", "crbr-information"],
  ["dokument-16to1w8", "stamp-duty-proof"],
  ["dokument-11iqdcm", "stamp-duty-proof"],
  ["dokument-gr2it6", "stamp-duty-proof"],
  ["dokument-gzpy2f", "residence-card-fee-proof"],
  ["dokument-hpnwma", "residence-card-fee-proof"],
  ["dokument-15vh33", "residence-card-fee-proof"],
  ["dokument-mz27o4", "pesel-ukr-confirmation"],
  ["dokument-hvayme", "pesel-ukr-confirmation"],
  ["dokument-cvwuwl", "residence-card"],
  ["dokument-1ja6gy5", "sworn-translation"],
  ["dokument-1b34b6y", "sworn-translation"],
] as const)
