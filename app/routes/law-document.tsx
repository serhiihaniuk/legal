import { ArrowRight, BookOpenText, FileText } from "lucide-react"
import {
  Link,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router"

import { DocsLayout } from "~/components/docs-layout"
import { LawLibraryNavigation } from "~/components/law-library-navigation"
import { OfficialSourceLink } from "~/components/official-source"
import { LegalProvisionSelector } from "~/components/legal-provision-selector"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  getDocument,
  getEdition,
  listProvisions,
} from "~/data/legal-library"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/official-sources"

const toc = [
  { href: "#law-document-overview", label: "Про акт" },
  { href: "#law-document-provisions", label: "Норми" },
  { href: "#law-document-learning", label: "Навчання" },
  { href: "#law-document-edition", label: "Редакція і джерело" },
] as const

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  return { documentId: document.id }
}

export default function LawDocumentRoute() {
  const { documentId } = useLoaderData<typeof loader>()
  const document = getDocument(documentId)!
  const edition = getEdition(document.id, document.currentEditionId)!
  const provisions = listProvisions(document.id)
  const firstProvision = provisions[0]
  const sourceLimitations =
    edition.manifest.legalStatusEvidence?.unresolved ?? []

  return (
    <DocsLayout
      navigation={<LawLibraryNavigation selectedDocumentId={document.id} />}
      toc={toc}
    >
      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        <header id="law-document-overview">
          <div data-not-typeset className="mb-3 flex flex-wrap gap-2">
            <Badge variant="secondary">{document.shortName}</Badge>
            <Badge variant="outline">{document.citation}</Badge>
            <Badge variant="outline">{provisions.length} позицій</Badge>
            {sourceLimitations.length > 0 ? (
              <Badge variant="destructive">потрібна перевірка статусу</Badge>
            ) : null}
          </div>
          <h1>{document.title}</h1>
          <p className="text-lg leading-8">
            Офіційний текст поділено на адресовані норми з точним локатором у
            PDF. Пояснення показується лише там, де воно перевірене для цієї
            редакції; інакше сторінка чесно залишається режимом джерела.
          </p>
        </header>

        <section id="law-document-provisions">
          <h2>Відкрити норму</h2>
          <p>
            Виберіть точний locator. Номер без назви акту не є достатнім
            посиланням на право.
          </p>
          <div data-not-typeset className="not-typeset mt-5 grid gap-4 border-y py-5">
            <LegalProvisionSelector
              documentId={document.id}
              documentLabel={document.shortName}
              provisions={provisions}
            />
            {firstProvision ? (
              <Button
                nativeButton={false}
                render={
                  <Link
                    to={`/law/${document.id}/provisions/${firstProvision.id}`}
                  />
                }
                className="w-fit"
              >
                Почати з {firstProvision.locator}
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </section>

        <section id="law-document-learning">
          <h2>Навчальний шар</h2>
          {document.id === "kpa" ? (
            <div data-not-typeset className="not-typeset mt-5 divide-y border-y">
              <Link
                to="/law/kpa/learn/system"
                className="flex items-center justify-between gap-4 py-4 font-medium text-foreground no-underline"
              >
                <span className="inline-flex items-center gap-2">
                  <BookOpenText className="size-4 text-muted-foreground" aria-hidden="true" />
                  Повний курс KPA
                </span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/law/kpa/practice/case-workflow"
                className="flex items-center justify-between gap-4 py-4 font-medium text-foreground no-underline"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="size-4 text-muted-foreground" aria-hidden="true" />
                  Практикум KPA
                </span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <p>
              Для цього акту вже доступні офіційний текст, структура,
              попередня/наступна норма та точна сторінка PDF. Перевірені
              навчальні пояснення додаються окремо і не генеруються автоматично
              з тексту закону.
            </p>
          )}
        </section>

        <section id="law-document-edition">
          <h2>Редакція і джерело</h2>
          <dl>
            <div>
              <dt>Редакція корпусу</dt>
              <dd>{edition.editionId}</dd>
            </div>
            <div>
              <dt>Стан джерела перевірено</dt>
              <dd>{edition.manifest.checkedAt}</dd>
            </div>
            <div>
              <dt>Сторінок PDF</dt>
              <dd>{edition.manifest.pageCount}</dd>
            </div>
            <div>
              <dt>Checksum PDF</dt>
              <dd className="break-all font-mono text-xs">
                {edition.manifest.pdfSha256}
              </dd>
            </div>
          </dl>
          <div data-not-typeset className="not-typeset mt-5">
            <OfficialSourceLink
              sourceId={officialSourceIdByLegalDocument[document.id]}
              label="Офіційна сторінка ELI"
            />
          </div>
          <blockquote>
            Ця редакція є локатором. Для конкретної дати справи перевірте
            пізніші зміни, wejście w życie та przepisy przejściowe на ELI.
            {sourceLimitations.length > 0
              ? ` Автоматичні metadata не підтвердили: ${sourceLimitations.join(", ")}.`
              : ""}
          </blockquote>
        </section>
      </article>
    </DocsLayout>
  )
}
