import { ArrowLeft, ArrowRight, FileText } from "lucide-react"

import type { TocItem } from "~/components/docs-layout"
import { LegalLink } from "~/components/legal-link"
import { LegalText } from "~/components/legal-reference-text"
import { OfficialSourceLink } from "~/components/official-source"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "~/components/ui/combobox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import type { KpaArticleExplanation } from "~/data/legal-library/editorial/kpa/compat"
import { getEdition, listProvisions } from "~/data/legal-library"
import {
  kpaArticleIndex,
  type KpaArticleEntry,
} from "~/data/legal-library/learning/kpa"

const kpaSource = getEdition("kpa", "kpa-2025-1691")!.manifest
const kpaCorpusProvisionByArticle = new Map(
  listProvisions("kpa").map((provision) => [
    provision.locator.replace(/^Art\.\s*/u, ""),
    provision,
  ])
)

const articleOptions = kpaArticleIndex.map((entry) => ({
  article: entry.article,
  label: `Art. ${entry.article} — ${entry.shortTitle}`,
  chapter: entry.chapter,
}))

export const kpaArticlesToc: TocItem[] = [
  { href: "#article-overview", label: "Огляд статті" },
  { href: "#article-explanation", label: "Що встановлює" },
  { href: "#article-rules", label: "Пояснення § і pkt" },
  { href: "#article-effect", label: "Наслідок у справі" },
  { href: "#article-text", label: "Текст норми" },
  { href: "#article-navigation", label: "Місце в кодексі" },
  { href: "#article-edition", label: "Редакція" },
]

export type KpaArticlesContentProps = {
  selectedArticle: string
  explanation: KpaArticleExplanation
  onSelectArticle: (article: string) => void
}

function ArticleSelector({
  entry,
  onSelectArticle,
}: {
  entry: KpaArticleEntry
  onSelectArticle: (article: string) => void
}) {
  const selectedIndex = kpaArticleIndex.findIndex(
    (article) => article.article === entry.article
  )
  const previous = kpaArticleIndex[selectedIndex - 1]
  const next = kpaArticleIndex[selectedIndex + 1]
  const selectedOption = articleOptions[selectedIndex]

  return (
    <div
      data-not-typeset
      className="not-typeset grid min-w-0 gap-3 border-y py-4"
    >
      <div className="grid min-w-0 gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Стаття KPA · {kpaArticleIndex.length} позицій
        </span>
        <Combobox
          items={articleOptions}
          value={selectedOption}
          onValueChange={(option) => option && onSelectArticle(option.article)}
          itemToStringValue={(option) => option.label}
        >
          <ComboboxInput
            className="w-full"
            placeholder="Введіть номер або тему статті…"
            aria-label="Знайти статтю KPA"
          />
          <ComboboxContent className="min-w-[min(42rem,calc(100vw-2rem))]">
            <ComboboxEmpty>Статтю не знайдено</ComboboxEmpty>
            <ComboboxList>
              {(option) => (
                <ComboboxItem
                  key={option.article}
                  value={option}
                  className="items-start"
                >
                  <span className="grid min-w-0 gap-0.5">
                    <span className="font-medium">{option.label}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {option.chapter}
                    </span>
                  </span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={!previous}
          onClick={() => previous && onSelectArticle(previous.article)}
        >
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          <span className="hidden min-[400px]:inline">
            Art. {previous?.article ?? "—"}
          </span>
          <span className="min-[400px]:hidden">Назад</span>
        </Button>
        <span className="min-w-0 truncate text-center text-xs text-muted-foreground">
          {entry.chapter}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={!next}
          onClick={() => next && onSelectArticle(next.article)}
        >
          <span className="hidden min-[400px]:inline">
            Art. {next?.article ?? "—"}
          </span>
          <span className="min-[400px]:hidden">Далі</span>
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}

export function KpaArticlesContent({
  selectedArticle,
  explanation,
  onSelectArticle,
}: KpaArticlesContentProps) {
  const entry =
    kpaArticleIndex.find((article) => article.article === selectedArticle) ??
    kpaArticleIndex[0]
  const corpusProvision = kpaCorpusProvisionByArticle.get(entry.article)
  const articleText = corpusProvision?.text
  const sourcePage = corpusProvision?.startPdfPage ?? entry.pdfPage
  const localPdfUrl =
    corpusProvision?.canonicalPdfLocator ??
    `${kpaSource.localPdfUrl}#page=${sourcePage}&zoom=page-width`

  return (
    <>
      <ArticleSelector entry={entry} onSelectArticle={onSelectArticle} />

      <header
        id="article-overview"
        className="flex scroll-mt-24 flex-col gap-3 pt-2"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Art. {entry.article} KPA</Badge>
          <Badge variant="outline">PDF s. {entry.pdfPage}</Badge>
          {entry.status === "repealed" ? (
            <Badge variant="destructive">uchylony</Badge>
          ) : (
            <Badge variant="secondary">чинна стаття</Badge>
          )}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {entry.shortTitle}
        </h1>
        <p className="text-sm leading-6 text-pretty text-muted-foreground">
          {entry.division} · {entry.chapter}
        </p>
        <div
          data-not-typeset
          className="not-typeset flex flex-wrap items-center gap-2 pt-1"
        >
          <Dialog>
            <DialogTrigger render={<Button type="button" variant="outline" />}>
              <FileText data-icon="inline-start" aria-hidden="true" />
              Переглянути PDF · s. {sourcePage}
            </DialogTrigger>
            <DialogContent className="h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] !max-w-none grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-lg p-0 sm:h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)]">
              <DialogHeader className="min-w-0 border-b px-4 py-3 pr-14">
                <DialogTitle className="truncate pr-2">
                  KPA · art. {entry.article} · PDF s. {sourcePage}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Локальна копія офіційного PDF, відкрита на сторінці{" "}
                  {sourcePage}.
                </DialogDescription>
              </DialogHeader>
              <iframe
                key={localPdfUrl}
                src={localPdfUrl}
                title={`KPA, art. ${entry.article}, сторінка ${sourcePage}`}
                className="h-full min-h-0 w-full border-0 bg-muted/20"
              />
            </DialogContent>
          </Dialog>
          <OfficialSourceLink
            sourceId="eli-kpa"
            label="Офіційна сторінка ELI"
          />
        </div>
      </header>

      <article className="typeset typeset-docs w-full flex-1 pb-16 sm:pb-0">
        {entry.status === "repealed" ? (
          <blockquote>
            <strong>Uchylony:</strong> у прийнятій у проєкті редакції цей номер
            позначений як скасований. Якщо він є в старому письмі, застосовну
            редакцію треба визначати за датою відповідної дії або рішення.
          </blockquote>
        ) : null}

        <section id="article-explanation">
          <h2>Що встановлює art. {entry.article}</h2>
          <p className="text-lg leading-8 text-foreground">
            <LegalText text={explanation.summary} />
          </p>
        </section>

        <section id="article-rules">
          <h2>Зміст § і pkt</h2>
          {explanation.rules.length > 0 ? (
            <div
              data-not-typeset
              className="not-typeset mt-6 divide-y border-y"
            >
              {explanation.rules.map((rule) => (
                <div
                  key={`${rule.locator}-${rule.explanation}`}
                  className="grid gap-2 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5"
                >
                  <p className="text-sm font-semibold text-foreground">
                    <LegalLink
                      reference={{
                        kind: "legacy-kpa-article",
                        article: entry.article,
                      }}
                    >
                      {rule.locator}
                    </LegalLink>
                  </p>
                  <p className="text-sm leading-6 text-foreground">
                    <LegalText text={rule.explanation} />
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>
              У чинній редакції цей номер не містить правила, яке можна
              застосувати до нової справи.
            </p>
          )}
        </section>

        <section id="article-effect">
          <h2>Що це змінює у справі</h2>
          <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
            <div className="py-5">
              <h3 className="text-sm font-semibold text-foreground">
                Юридичний ефект
              </h3>
              <p className="mt-2 text-sm leading-7 text-foreground">
                <LegalText text={explanation.legalEffect} />
              </p>
            </div>
            <div className="py-5">
              <h3 className="text-sm font-semibold text-foreground">
                У справі іноземця
              </h3>
              <p className="mt-2 text-sm leading-7 text-foreground">
                <LegalText text={explanation.foreignersCase} />
              </p>
            </div>
          </div>
        </section>

        <section id="article-text">
          <h2>Текст art. {entry.article} польською</h2>
          <p>
            Робоче відтворення з редакції
            <strong> {kpaSource.citation}</strong>. Для дослівного цитування
            звірте текст із PDF.
          </p>
          {articleText ? (
            <div
              data-not-typeset
              className="not-typeset mt-6 border-l-2 border-foreground/20 pl-5"
            >
              <p
                lang="pl"
                className="text-sm leading-7 whitespace-pre-line text-foreground"
              >
                {articleText ? <LegalText text={articleText} /> : null}
              </p>
            </div>
          ) : (
            <p>
              Для цієї позиції текст не вдалося надійно зіставити з редакцією
              кодексу.
            </p>
          )}
        </section>

        <section id="article-navigation">
          <h2>Місце статті в кодексі</h2>
          <dl>
            <div>
              <dt>Акт</dt>
              <dd>
                Kodeks postępowania administracyjnego · Dz.U. 2025 poz. 1691
              </dd>
            </div>
            <div>
              <dt>Стаття</dt>
              <dd lang="pl">Art. {entry.article}</dd>
            </div>
            <div>
              <dt>Місце в кодексі</dt>
              <dd>
                {entry.division} · {entry.chapter}
              </dd>
            </div>
            <div>
              <dt>Сторінка PDF</dt>
              <dd>{entry.pdfPage}</dd>
            </div>
            <div>
              <dt>Структура</dt>
              <dd>
                {entry.paragraphCount
                  ? `${entry.paragraphCount} позначених параграфів (§) у статті.`
                  : "У навігаційному індексі не зафіксовано поділу цієї статті на кілька §."}
              </dd>
            </div>
            <div>
              <dt>Сусідні норми</dt>
              <dd>
                {entry.previousArticle
                  ? `Перед нею — art. ${entry.previousArticle}. `
                  : ""}
                {entry.nextArticle
                  ? `Після неї — art. ${entry.nextArticle}.`
                  : ""}
              </dd>
            </div>
          </dl>
        </section>

        <section id="article-edition">
          <h2>Редакція і межі матеріалу</h2>
          <p>
            Навчальний індекс використовує Kodeks postępowania
            administracyjnego, Dz.U. 2025 poz. 1691. Art. {entry.article}{" "}
            починається на сторінці {entry.pdfPage} прийнятого в проєкті PDF.
          </p>
          <blockquote>
            Навчальний індекс показує стан, прийнятий у проєкті на 14.07.2026.
            Перед роботою з реальною справою перевірте статус акта, пізніші
            зміни, дату wejścia w życie та przepisy przejściowe.
          </blockquote>
        </section>
      </article>
    </>
  )
}
