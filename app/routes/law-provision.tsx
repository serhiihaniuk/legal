import { ArrowLeft, ArrowRight, FileText } from "lucide-react"
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router"

import { DocsLayout } from "~/components/docs-layout"
import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import { LegalProvisionSelector } from "~/components/legal-provision-selector"
import { OfficialSourceLink } from "~/components/official-source"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import {
  getDocument,
  getEdition,
  getExplanation,
  getNextProvision,
  getPreviousProvision,
  getProvision,
  listProvisions,
} from "~/data/legal-library"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/official-sources"

const toc = [
  { href: "#legal-provision-overview", label: "Огляд норми" },
  { href: "#legal-provision-explanation", label: "Пояснення" },
  { href: "#legal-provision-source", label: "Текст норми" },
  { href: "#legal-provision-place", label: "Місце в акті" },
  { href: "#legal-provision-edition", label: "Редакція" },
] as const

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  const edition = getEdition(document.id, document.currentEditionId)
  const provision = getProvision(document.id, params.provisionId)
  if (!edition || !provision) {
    throw new Response("Legal provision not found", { status: 404 })
  }
  const [explanation] = await Promise.all([
    getExplanation({
      kind: "legal-provision",
      documentId: document.id,
      provisionId: provision.id,
    }),
  ])
  const previous = getPreviousProvision(document.id, provision.id)
  const next = getNextProvision(document.id, provision.id)

  return {
    document,
    edition,
    provision,
    explanation,
    previous,
    next,
  }
}

export default function LawProvisionRoute() {
  const { document, edition, provision, explanation, previous, next } =
    useLoaderData<typeof loader>()
  const provisions = listProvisions(document.id)
  const reviewedExplanation =
    explanation.status === "reviewed" ? explanation.explanation : undefined
  const sourceLimitations =
    edition.manifest.legalStatusEvidence?.unresolved ?? []

  return (
    <DocsLayout
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="provisions"
          currentProvisionId={provision.id}
        />
      }
      toc={toc}
    >
      <LawDocumentMobileNavigation
        document={document}
        activeSection="provisions"
        currentProvisionId={provision.id}
      />
      <div
        data-not-typeset
        className="not-typeset grid min-w-0 gap-3 border-y py-4"
      >
        <LegalProvisionSelector
          documentId={document.id}
          documentLabel={document.shortName}
          provisions={provisions}
          selectedProvisionId={provision.id}
        />
        <div className="flex items-center justify-between gap-2">
          {previous ? (
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={
                <Link to={`/law/${document.id}/provisions/${previous.id}`} />
              }
            >
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              {previous.locator}
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled>
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Початок
            </Button>
          )}
          {next ? (
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link to={`/law/${document.id}/provisions/${next.id}`} />}
            >
              {next.locator}
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled>
              Кінець
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>

      <header id="legal-provision-overview" className="grid gap-3 pt-2">
        <div className="flex flex-wrap gap-2">
          <Badge>{provision.locator}</Badge>
          <Badge variant="outline">PDF s. {provision.startPdfPage}</Badge>
          {provision.status === "repealed" ? (
            <Badge variant="destructive">uchylony</Badge>
          ) : (
            <Badge variant="secondary">{provision.status}</Badge>
          )}
          <Badge variant="outline">
            {reviewedExplanation ? "перевірене пояснення" : "режим джерела"}
          </Badge>
          {sourceLimitations.length > 0 ? (
            <Badge variant="destructive">неповні metadata статусу</Badge>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {provision.locator} · {document.shortName}
        </h1>
        <p className="text-sm leading-6 text-muted-foreground">
          {document.title} · {edition.manifest.citation}
        </p>
        <div
          data-not-typeset
          className="not-typeset flex flex-wrap items-center gap-3"
        >
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              <FileText data-icon="inline-start" aria-hidden="true" />
              Переглянути PDF · s. {provision.startPdfPage}
            </DialogTrigger>
            <DialogContent className="h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] !max-w-none grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-lg p-0 sm:h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)]">
              <DialogHeader className="min-w-0 border-b px-4 py-3 pr-14">
                <DialogTitle className="truncate pr-2">
                  {document.shortName} · {provision.locator} · PDF s.{" "}
                  {provision.startPdfPage}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Локальна копія офіційного PDF на сторінці{" "}
                  {provision.startPdfPage}.
                </DialogDescription>
              </DialogHeader>
              <iframe
                key={provision.canonicalPdfLocator}
                src={provision.canonicalPdfLocator}
                title={`${document.shortName}, ${provision.locator}, сторінка ${provision.startPdfPage}`}
                className="h-full min-h-0 w-full border-0 bg-muted/20"
              />
            </DialogContent>
          </Dialog>
          <OfficialSourceLink
            sourceId={officialSourceIdByLegalDocument[document.id]}
            label="Офіційна сторінка ELI"
          />
        </div>
      </header>

      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        <section id="legal-provision-explanation">
          <h2>Що встановлює ця норма</h2>
          {reviewedExplanation ? (
            <>
              <p className="text-lg leading-8">{reviewedExplanation.summary}</p>
              {reviewedExplanation.rules.length > 0 ? (
                <div
                  data-not-typeset
                  className="not-typeset mt-6 divide-y border-y"
                >
                  {reviewedExplanation.rules.map((rule) => (
                    <div
                      key={`${rule.locator}-${rule.explanation}`}
                      className="grid gap-2 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5"
                    >
                      <strong className="text-sm">{rule.locator}</strong>
                      <p className="text-sm leading-6">{rule.explanation}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              <h3>Що це змінює у справі</h3>
              <p>{reviewedExplanation.legalEffect}</p>
              <p>{reviewedExplanation.foreignersCase}</p>
            </>
          ) : (
            <blockquote>
              Для цієї норми ще немає пояснення, перевіреного для редакції{" "}
              {edition.editionId}. Нижче доступний витягнутий польський текст і
              точна сторінка офіційного PDF. Не підміняйте ними перевірку
              чинності та перехідних правил.
            </blockquote>
          )}
        </section>

        <section id="legal-provision-source">
          <h2>Текст норми польською</h2>
          <p>
            Робочий витяг із PDF. Для дослівного цитування відкрийте сторінку
            джерела вище.
          </p>
          <div
            data-not-typeset
            className="not-typeset mt-6 border-l-2 border-foreground/20 pl-5"
          >
            <p lang="pl" className="text-sm leading-7 whitespace-pre-line">
              {provision.text}
            </p>
          </div>
        </section>

        <section id="legal-provision-place">
          <h2>Місце в акті</h2>
          <dl>
            <div>
              <dt>Акт</dt>
              <dd>{document.title}</dd>
            </div>
            <div>
              <dt>Locator</dt>
              <dd lang="pl">{provision.locator}</dd>
            </div>
            <div>
              <dt>Тип</dt>
              <dd>{provision.kind}</dd>
            </div>
            <div>
              <dt>Сторінки PDF</dt>
              <dd>
                {provision.startPdfPage === provision.endPdfPage
                  ? provision.startPdfPage
                  : `${provision.startPdfPage}–${provision.endPdfPage}`}
              </dd>
            </div>
            <div>
              <dt>Попередня норма</dt>
              <dd>{previous?.locator ?? "—"}</dd>
            </div>
            <div>
              <dt>Наступна норма</dt>
              <dd>{next?.locator ?? "—"}</dd>
            </div>
          </dl>
        </section>

        <section id="legal-provision-edition">
          <h2>Редакція і межі матеріалу</h2>
          <p>
            Джерело корпусу: {edition.manifest.citation}. Перевірено{" "}
            {edition.manifest.checkedAt}. Ідентифікатор редакції:{" "}
            <code>{edition.editionId}</code>.
          </p>
          <blockquote>
            Навіть незмінений текст статті може мати інший ефект через пізнішу
            норму, orzecznictwo або przepis przejściowy. Для конкретної справи
            зіставте джерело з датою факту.
            {sourceLimitations.length > 0
              ? ` Автоматичні metadata не підтвердили: ${sourceLimitations.join(", ")}.`
              : ""}
          </blockquote>
        </section>
      </article>
    </DocsLayout>
  )
}
