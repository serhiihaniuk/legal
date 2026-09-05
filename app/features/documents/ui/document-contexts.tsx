import { LegalReferenceArrow } from "~/components/references"
import type { DocumentCatalogEntry } from "~/data/documents/catalog"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
export function DocumentContexts({
  document,
}: {
  document: DocumentCatalogEntry
}) {
  return (
    <>
      {document.contexts.length || document.caseContexts.length ? (
        <section
          id="document-contexts"
          data-not-typeset
          className="not-typeset"
        >
          <Accordion>
            <AccordionItem value="contexts">
              <AccordionTrigger>
                Де цей матеріал використовується (
                {document.contexts.length + document.caseContexts.length})
              </AccordionTrigger>
              <AccordionContent>
                <ul
                  data-not-typeset
                  className="not-typeset mt-5 divide-y border-y"
                >
                  {document.contexts.map((context) => (
                    <li
                      key={`map-${context.node.id}`}
                      className="flex items-start justify-between gap-4 py-3 text-sm"
                    >
                      <span>
                        <span className="block font-medium">
                          {context.node.title}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          Карта права
                        </span>
                      </span>
                      <LegalReferenceArrow
                        reference={{
                          kind: "map-node",
                          nodeId: context.node.id,
                        }}
                        label={`Відкрити тему карти: ${context.node.title}`}
                      />
                    </li>
                  ))}
                  {document.caseContexts.map((context) => (
                    <li
                      key={`case-${context.routeId}-${legalTextPlainText(context.item)}`}
                      className="flex items-start justify-between gap-4 py-3 text-sm"
                    >
                      <span>
                        <span className="block font-medium">
                          {context.routeTitle}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          Тип справи
                        </span>
                      </span>
                      <LegalReferenceArrow
                        reference={{
                          kind: "case-route",
                          routeId: context.routeId,
                        }}
                        label={`Відкрити тип справи: ${context.routeTitle}`}
                      />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      ) : null}
    </>
  )
}
