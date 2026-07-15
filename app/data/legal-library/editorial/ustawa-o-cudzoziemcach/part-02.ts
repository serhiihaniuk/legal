import { defineEditorialPart } from "../define-editorial-part"
import type { LegalProvisionId } from "../../contracts"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

/**
 * Draft editorial notes for the next visa-law slice.
 *
 * The article text in the promoted corpus remains the controlling source. These
 * notes deliberately identify the locator and the questions to verify instead
 * of turning an unreviewed draft into a legal conclusion.
 */
function draftEntry(
  provisionId: ForeignersActProvisionId,
  article: string,
  focus: string,
) {
  return {
    provisionId,
    reviewStatus: "draft" as const,
    claims: [
      {
        kind: "statute-text" as const,
        text: `${article} у виданні corpus є первинним локатором правила про ${focus}; цей draft не додає умов, яких немає в офіційному тексті.`,
        sourceLocator: article,
      },
    ],
    summary: `${article} потрібно читати як частину візового блоку ustawa o cudzoziemcach: він стосується ${focus}. Точний зміст, ustęp, punkt та статус (зокрема позначка uchylony) слід перевірити безпосередньо в офіційному corpus.`,
    rules: [
      {
        locator: article,
        explanation: `Спочатку звірте повний текст ${article}, усі ustęp і punkt та внутрішні odwołania. Не виводьте правило лише з назви статті, номера або загального опису ${focus}.`,
      },
    ],
    legalEffect: `Правовий наслідок залежить від точного тексту ${article}, його статусу у виданні та фактів справи; цей запис є draft і не стверджує автоматичного права, обов’язку чи відмови.`,
    foreignersCase: `У справі іноземця відкрийте ${article} у відповідній редакції, випишіть польські терміни (wiza Schengen, wiza krajowa, якщо вони є в тексті), перевірте винятки й дати та лише після цього зіставляйте норму з документами та фактичним перебуванням.`,
  }
}

export const foreignersActPart02 = defineEditorialPart<
  "ustawa-o-cudzoziemcach"
>({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    draftEntry("ustawa-o-cudzoziemcach-art-46", "Art. 46", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-47", "Art. 47", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-48", "Art. 48", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-49", "Art. 49", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-50", "Art. 50", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-51", "Art. 51", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-52", "Art. 52", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-53", "Art. 53", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-54", "Art. 54", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-55", "Art. 55", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-55a", "Art. 55a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-55b", "Art. 55b", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-56", "Art. 56", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-57", "Art. 57", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-58", "Art. 58", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-59", "Art. 59", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-61", "Art. 61", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-62", "Art. 62", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-63", "Art. 63", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-64", "Art. 64", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-64a", "Art. 64a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-65", "Art. 65", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-66", "Art. 66", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-66a", "Art. 66a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-67", "Art. 67", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-68", "Art. 68", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-69", "Art. 69", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-70", "Art. 70", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-70a", "Art. 70a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-71", "Art. 71", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-72", "Art. 72", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-72a", "Art. 72a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-73", "Art. 73", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-74", "Art. 74", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-74a", "Art. 74a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-74b", "Art. 74b", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-75", "Art. 75", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-76", "Art. 76", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-77", "Art. 77", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-77a", "Art. 77a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-77b", "Art. 77b", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-77c", "Art. 77c", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-78", "Art. 78", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-79", "Art. 79", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-79a", "Art. 79a", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-79b", "Art. 79b", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-80", "Art. 80", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-81", "Art. 81", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-82", "Art. 82", "видачу або умови wiza"),
    draftEntry("ustawa-o-cudzoziemcach-art-83", "Art. 83", "видачу або умови wiza"),
  ],
})
