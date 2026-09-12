import { sourceNoteRanges } from "~/data/legal-library/source-layout"
import { ProvisionSourceReader } from "~/features/law-library/ui/provision/provision-source-reader"
import { ProvisionExplanation } from "~/features/law-library/ui/provision/provision-explanation"
import { ProvisionDocumentGuide } from "~/features/law-library/ui/provision/provision-document-guide"
import { ArrowLeft, ArrowRight, FileText } from "lucide-react"
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router"

import { DocsLayout } from "~/components/layout"
import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
  formatProvisionEffectiveDate,
  LegalProvisionSelector,
} from "~/features/law-library"
import { LegalLink, OfficialSourceLink } from "~/components/references"
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
  getNextProvision,
  getPreviousProvision,
  listProvisions,
  parseLegalProvisionReference,
} from "~/data/legal-library"
import { resolveProvisionPublication } from "~/data/legal-knowledge"
import { buildProvisionExplanationView } from "~/features/law-library/model/provision-explanation"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/references/official-sources"
import { DocumentArticle } from "~/components/patterns/document-content"
import { DefinitionRows } from "~/components/patterns/definition-rows"

const toc = [
  { href: "#legal-provision-overview", label: "Огляд норми" },
  { href: "#legal-provision-explanation", label: "Як читати норму" },
  { href: "#legal-provision-claims", label: "Додаткові пояснення" },
  { href: "#legal-provision-source", label: "Текст норми" },
  { href: "#legal-provision-place", label: "Місце в акті" },
] as const

const provisionStatusLabels = {
  active: "чинна",
  future: "майбутня норма",
  repealed: "uchylony — скасована",
  reserved: "зарезервована",
  removed: "вилучена",
  unknown: "статус не визначено",
} as const

export function meta() {
  return [{ title: "Норма — Бібліотека права" }]
}

export async function loader({ params }: LoaderFunctionArgs) {
  const reference = parseLegalProvisionReference({
    kind: "legal-provision",
    documentId: params.documentId,
    provisionId: params.provisionId,
  })
  const publication = await resolveProvisionPublication(reference)
  if (!publication) {
    throw new Response("Legal provision not found", { status: 404 })
  }

  const { document, edition, provision, explanation } = publication
  const previous = getPreviousProvision(document.id, provision.id)
  const next = getNextProvision(document.id, provision.id)

  return {
    document,
    edition,
    provision,
    explanation,
    noteRanges: sourceNoteRanges(provision),
    previous,
    next,
  }
}

export default function LawProvisionRoute() {
  const {
    document,
    edition,
    provision,
    explanation,
    previous,
    next,
    noteRanges,
  } = useLoaderData<typeof loader>()
  const provisions = listProvisions(document.id)
  const reviewedExplanation =
    explanation.status === "reviewed" ? explanation.explanation : undefined
  const explanationView = reviewedExplanation
    ? buildProvisionExplanationView(reviewedExplanation)
    : undefined
  const provisionReference = parseLegalProvisionReference({
    kind: "legal-provision",
    documentId: document.id,
    provisionId: provision.id,
  })
  const previousReference = previous
    ? parseLegalProvisionReference({
        kind: "legal-provision",
        documentId: document.id,
        provisionId: previous.id,
      })
    : undefined
  const nextReference = next
    ? parseLegalProvisionReference({
        kind: "legal-provision",
        documentId: document.id,
        provisionId: next.id,
      })
    : undefined
  const sourceLimitations =
    edition.manifest.legalStatusEvidence?.unresolved ?? []
  const amendmentSourceSpans =
    provision.sourceSpans?.filter((span) => span.role === "amendment") ?? []
  const amendmentSourceIds = new Set(
    amendmentSourceSpans.map((span) => span.sourceId)
  )
  const amendmentSourceMaterials = (
    edition.manifest.sourceMaterials ?? []
  ).filter((source) => amendmentSourceIds.has(source.id))
  const provisionStatusLabel =
    provision.status === "future" && provision.effectiveDate
      ? `${provisionStatusLabels.future} · від ${formatProvisionEffectiveDate(
          provision.effectiveDate
        )}`
      : provisionStatusLabels[provision.status]

  return (
    <DocsLayout
      contentWidth={provision.kind === "annex" ? "wide" : "reading"}
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="provisions"
          currentProvisionId={provision.id}
        />
      }
      toc={
        explanationView?.additionalClaims.length
          ? toc
          : toc.filter((item) => item.href !== "#legal-provision-claims")
      }
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
          <Badge>
            {provisionReference ? (
              <LegalLink
                context="provision-page"
                reference={provisionReference}
              >
                {provision.locator}
              </LegalLink>
            ) : (
              provision.locator
            )}
          </Badge>
          <Badge variant="outline">
            {amendmentSourceSpans.length > 0
              ? "базовий PDF + акт про зміни"
              : `PDF, с. ${provision.startPdfPage}`}
          </Badge>
          <Badge
            variant={
              provision.status === "repealed"
                ? "destructive"
                : provision.status === "future"
                  ? "outline"
                  : "secondary"
            }
          >
            {provisionStatusLabel}
          </Badge>
          <Badge variant="outline">
            {reviewedExplanation ? "перевірене пояснення" : "режим джерела"}
          </Badge>
          {sourceLimitations.length > 0 ? (
            <Badge variant="destructive">
              статус потребує ручної перевірки
            </Badge>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {provision.locator}
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
              {amendmentSourceSpans.length > 0
                ? `Базовий PDF · с. ${provision.startPdfPage}`
                : `Переглянути PDF · с. ${provision.startPdfPage}`}
            </DialogTrigger>
            <DialogContent className="h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] !max-w-none grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-lg p-0 sm:h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)]">
              <DialogHeader className="min-w-0 border-b px-4 py-3 pr-14">
                <DialogTitle className="truncate pr-2">
                  {document.shortName} · {provision.locator} · PDF, с.{" "}
                  {provision.startPdfPage}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Локальна копія офіційного PDF на сторінці{" "}
                  {provision.startPdfPage}.
                </DialogDescription>
                {amendmentSourceMaterials.length > 0 ? (
                  <p className="text-xs text-muted-foreground">
                    Це PDF базового тексту. Робочий текст нижче враховує також
                    PDF акта про зміни.
                  </p>
                ) : null}
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
          {amendmentSourceMaterials.map((source) => (
            <Button
              key={source.id}
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <a
                  href={source.localPdfUrl}
                  aria-label={`Відкрити ${source.citation} у PDF`}
                />
              }
            >
              <FileText data-icon="inline-start" aria-hidden="true" />
              PDF акта про зміни · {source.citation}
            </Button>
          ))}
        </div>
      </header>

      <DocumentArticle>
        {provisionReference ? (
          <ProvisionDocumentGuide reference={provisionReference} />
        ) : null}
        {explanationView ? (
          <ProvisionExplanation view={explanationView} />
        ) : (
          <section id="legal-provision-explanation">
            <h2>Як читати цю норму</h2>
            <blockquote>
              Для цієї норми ще немає пояснення, перевіреного для редакції{" "}
              {edition.manifest.citation}. Нижче доступний польський текст і
              точна сторінка офіційного PDF. Неперевірена чернетка не
              показується як навчальний матеріал.
            </blockquote>
          </section>
        )}
        <section id="legal-provision-source">
          <h2>
            {provision.kind === "annex"
              ? "Оригінал додатка"
              : "Текст норми польською"}
          </h2>
          <p>
            {provision.kind === "annex"
              ? "Читайте додаток у макеті офіційного документа. Текстовий витяг доступний в окремій вкладці."
              : "Робочий витяг із PDF. Для дослівного цитування відкрийте оригінал джерела."}
          </p>
          <ProvisionSourceReader
            key={provision.id}
            pdfUrl={provision.canonicalPdfLocator}
            preferPdf={provision.kind === "annex"}
            idPrefix={provision.id}
            noteRanges={noteRanges}
            locator={provision.locator}
            startPdfPage={provision.startPdfPage}
            text={provision.text}
            sourceSpans={provision.sourceSpans}
            status={provision.status}
            effectiveDate={provision.effectiveDate}
          />
        </section>

        <section id="legal-provision-place">
          <h2>Місце в акті</h2>
          <DefinitionRows
            items={[
              { id: "document", term: "Акт", description: document.title },
              {
                id: "locator",
                term: "Позначення норми",
                description: provisionReference ? (
                  <LegalLink
                    context="provision-page"
                    reference={provisionReference}
                  >
                    {provision.locator}
                  </LegalLink>
                ) : (
                  provision.locator
                ),
                descriptionProps: { lang: "pl" },
              },
              {
                id: "kind",
                term: "Тип",
                description:
                  provision.kind === "annex"
                    ? "Додаток"
                    : provision.kind === "paragraph"
                      ? "Параграф"
                      : "Стаття",
              },
              {
                id: "pages",
                term: "Сторінки PDF",
                description:
                  amendmentSourceSpans.length > 0
                    ? `базовий PDF ${provision.startPdfPage === provision.endPdfPage ? provision.startPdfPage : `${provision.startPdfPage}–${provision.endPdfPage}`} + PDF акта про зміни`
                    : provision.startPdfPage === provision.endPdfPage
                      ? provision.startPdfPage
                      : `${provision.startPdfPage}–${provision.endPdfPage}`,
              },
              {
                id: "previous",
                term: "Попередня норма",
                description:
                  previous && previousReference ? (
                    <LegalLink
                      context="provision-page"
                      reference={previousReference}
                    >
                      {previous.locator}
                    </LegalLink>
                  ) : (
                    "—"
                  ),
              },
              {
                id: "next",
                term: "Наступна норма",
                description:
                  next && nextReference ? (
                    <LegalLink
                      context="provision-page"
                      reference={nextReference}
                    >
                      {next.locator}
                    </LegalLink>
                  ) : (
                    "—"
                  ),
              },
            ]}
          />
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
              ? ` Автоматична перевірка не підтвердила такі відомості про правовий статус: ${sourceLimitations.join(", ")}.`
              : ""}
          </blockquote>
        </section>
      </DocumentArticle>
    </DocsLayout>
  )
}
