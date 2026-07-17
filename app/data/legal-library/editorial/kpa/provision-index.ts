import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"

import type { LegalProvisionId } from "../../contracts"

export type KpaEditorialProvision = {
  provisionId: LegalProvisionId<"kpa">
  article: string
}

const currentKpaEdition =
  legalLibraryRegistry.kpa.editions[legalLibraryRegistry.kpa.currentEditionId]

/** Low-level current-edition identity/order projection for KPA article modules. */
export const kpaEditorialProvisionIndex = currentKpaEdition.provisions
  .filter((provision) => provision.kind === "article")
  .sort((left, right) => left.order - right.order)
  .map((provision): KpaEditorialProvision => ({
    provisionId: provision.id as LegalProvisionId<"kpa">,
    article: provision.locator.replace(/^Art\.\s*/u, ""),
  }))
