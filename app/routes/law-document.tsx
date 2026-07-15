import { ArrowRight } from "lucide-react"
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router"

import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import { DocsLayout, type TocItem } from "~/components/docs-layout"
import { LegalProvisionSelector } from "~/components/legal-provision-selector"
import { OfficialSourceLink } from "~/components/official-source"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  genericLearningModules,
  getDocumentProvisionPath,
  type GenericLearningModuleId,
  getDocument,
  getEdition,
  listProvisions,
} from "~/data/legal-library"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/official-sources"

const moduleToc: Record<GenericLearningModuleId, readonly TocItem[]> = {
  overview: [
    { href: "#law-module-overview", label: "Про акт" },
    { href: "#law-module-provisions", label: "Норми в акті" },
    { href: "#law-module-check", label: "Що перевірити" },
  ],
  reading: [
    { href: "#law-reading-overview", label: "Логіка читання" },
    { href: "#law-reading-sequence", label: "Послідовність аналізу" },
    { href: "#law-reading-result", label: "Робочий результат" },
  ],
  structure: [
    { href: "#law-structure-overview", label: "Що показує корпус" },
    { href: "#law-structure-kinds", label: "Типи позицій" },
    { href: "#law-structure-limits", label: "Межі огляду" },
  ],
  source: [
    { href: "#law-source-overview", label: "Поточна редакція" },
    { href: "#law-source-metadata", label: "Metadata і PDF" },
    { href: "#law-source-limits", label: "Обмеження" },
  ],
}

const kindLabels: Record<string, string> = {
  article: "article — стаття",
  paragraph: "paragraph — параграф або частина",
  section: "section — секція",
  point: "point — пункт",
  annex: "annex — додаток",
  other: "other — інша адресована позиція",
}

const statusLabels: Record<string, string> = {
  active: "active — активна у корпусі",
  repealed: "repealed — uchylony",
  reserved: "reserved — зарезервована",
  removed: "removed — вилучена",
  unknown: "unknown — статус не встановлено",
}

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  if (document.id === "kpa") {
    throw new Response("KPA uses its authored learning route", { status: 404 })
  }

  const module = genericLearningModules.find(
    (candidate) => candidate.id === params.moduleId
  )
  if (!module) throw new Response("Learning module not found", { status: 404 })

  const edition = getEdition(document.id, document.currentEditionId)
  if (!edition) throw new Response("Legal edition not found", { status: 404 })
  const provisions = listProvisions(document.id)
  const kindCounts = provisions.reduce<Record<string, number>>(
    (counts, provision) => {
      counts[provision.kind] = (counts[provision.kind] ?? 0) + 1
      return counts
    },
    {}
  )
  const statusCounts = provisions.reduce<Record<string, number>>(
    (counts, provision) => {
      counts[provision.status] = (counts[provision.status] ?? 0) + 1
      return counts
    },
    {}
  )

  return {
    document,
    edition,
    provisions,
    moduleId: module.id,
    moduleLabel: module.label,
    kindCounts,
    statusCounts,
    nestedProvisionCount: provisions.filter((provision) => provision.parentId)
      .length,
    sourceLimitations: edition.manifest.legalStatusEvidence?.unresolved ?? [],
  }
}

function ModuleHeader({
  document,
  edition,
  moduleLabel,
  sourceLimitations,
}: {
  document: Awaited<ReturnType<typeof getDocument>>
  edition: NonNullable<Awaited<ReturnType<typeof getEdition>>>
  moduleLabel: string
  sourceLimitations: readonly string[]
}) {
  if (!document) return null
  return (
    <header id="law-module-overview">
      <div data-not-typeset className="mb-3 flex flex-wrap gap-2">
        <Badge variant="secondary">{document.shortName}</Badge>
        <Badge variant="outline">{document.citation}</Badge>
        <Badge variant="outline">{moduleLabel}</Badge>
        {sourceLimitations.length > 0 ? (
          <Badge variant="destructive">потрібна перевірка статусу</Badge>
        ) : null}
      </div>
      <h1>
        {moduleLabel}: {document.title}
      </h1>
      <p className="text-lg leading-8">
        Це навчальний workspace для одного акту. Він відділяє факти корпусу від
        пояснення і веде від питання до перевірюваної норми, доказу та дії.
      </p>
      <p className="text-sm leading-6 text-muted-foreground">
        Редакція корпусу: {edition.editionId} · перевірено{" "}
        {edition.manifest.checkedAt}.
      </p>
    </header>
  )
}

function OverviewModule({
  document,
  edition,
  provisions,
  sourceLimitations,
}: {
  document: Awaited<ReturnType<typeof getDocument>>
  edition: NonNullable<Awaited<ReturnType<typeof getEdition>>>
  provisions: Awaited<ReturnType<typeof listProvisions>>
  sourceLimitations: readonly string[]
}) {
  if (!document) return null
  const firstProvision = provisions[0]
  return (
    <>
      <ModuleHeader
        document={document}
        edition={edition}
        moduleLabel="Про акт"
        sourceLimitations={sourceLimitations}
      />
      <section id="law-module-provisions">
        <h2>Норми в акті</h2>
        <p>
          Офіційний текст поділено на адресовані позиції з точним локатором у
          локальному PDF. Номер без назви акту не є достатнім посиланням на
          право.
        </p>
        <div
          data-not-typeset
          className="not-typeset mt-5 grid gap-4 border-y py-5"
        >
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
                  to={getDocumentProvisionPath(document.id, firstProvision.id)}
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
      <section id="law-module-check">
        <h2>Що це змінює у роботі</h2>
        <p>
          Спочатку зафіксуйте, який акт і яка редакція відповідають даті факту.
          Потім визначте правове питання, знайдіть умови норми та підберіть
          доказ для кожної умови. Лише після цього обирайте дію і перевіряйте
          засіб оскарження.
        </p>
        <dl>
          <div>
            <dt>Акт</dt>
            <dd>{document.title}</dd>
          </div>
          <div>
            <dt>Цитування</dt>
            <dd>{edition.manifest.citation}</dd>
          </div>
          <div>
            <dt>Позицій у поточному корпусі</dt>
            <dd>{provisions.length}</dd>
          </div>
          <div>
            <dt>Сторінок PDF</dt>
            <dd>{edition.manifest.pageCount}</dd>
          </div>
        </dl>
        {sourceLimitations.length > 0 ? (
          <blockquote>
            Автоматичні metadata не підтвердили: {sourceLimitations.join(", ")}.
            Для конкретної справи перевірте статус, amendments, wejście w życie
            та przepisy przejściowe на ELI.
          </blockquote>
        ) : (
          <blockquote>
            Ця сторінка є навчальним шаром і локатором. Для конкретної дати
            справи звірте пізніші зміни та перехідні правила з офіційним ELI.
          </blockquote>
        )}
      </section>
    </>
  )
}

function ReadingModule({
  document,
  edition,
  sourceLimitations,
}: {
  document: Awaited<ReturnType<typeof getDocument>>
  edition: NonNullable<Awaited<ReturnType<typeof getEdition>>>
  sourceLimitations: readonly string[]
}) {
  if (!document) return null
  const sequence = [
    [
      "Fakt",
      "Факти справи: що сталося, коли і які документи це підтверджують.",
    ],
    ["Pojęcie prawne", "Правове поняття, до якого належать ці факти."],
    ["Przepis i jego warunki", "Норма та всі умови, які мають бути виконані."],
    [
      "Dowód dla każdego warunku",
      "Окремий доказ для кожної умови, а не один документ на все.",
    ],
    ["Czynność i termin", "Що зробити, кому подати і до якого строку."],
    ["Skutek", "Яка процедурна або матеріальна зміна настає після дії."],
    [
      "Środek zaskarżenia",
      "Який засіб захисту доступний, якщо рішення або дія помилкові.",
    ],
  ] as const
  return (
    <>
      <ModuleHeader
        document={document}
        edition={edition}
        moduleLabel="Як читати норму"
        sourceLimitations={sourceLimitations}
      />
      <section id="law-reading-overview">
        <h2>Логіка читання</h2>
        <p>
          Не починайте з номера статті. Почніть із факту і питання, яке треба
          вирішити. Текст акту дає правило та його умови; він не замінює
          перевірку доказів, строків і повної редакції.
        </p>
      </section>
      <section id="law-reading-sequence">
        <h2>Послідовність аналізу</h2>
        <div data-not-typeset className="not-typeset divide-y border-y">
          {sequence.map(([term, explanation], index) => (
            <div
              key={term}
              className="grid gap-2 py-4 sm:grid-cols-[2rem_15rem_minmax(0,1fr)] sm:gap-4"
            >
              <span className="text-sm text-muted-foreground tabular-nums">
                {index + 1}.
              </span>
              <strong lang="pl">{term}</strong>
              <p className="text-sm leading-6">{explanation}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="law-reading-result">
        <h2>Робочий результат</h2>
        <p>
          Після читання у вас має залишитися короткий ланцюг: факт → поняття →
          умова норми → доказ → дія і строк → наслідок → засіб оскарження. Якщо
          один елемент порожній, висновок ще потребує перевірки.
        </p>
      </section>
    </>
  )
}

function StructureModule({
  document,
  edition,
  provisions,
  kindCounts,
  statusCounts,
  nestedProvisionCount,
}: {
  document: Awaited<ReturnType<typeof getDocument>>
  edition: NonNullable<Awaited<ReturnType<typeof getEdition>>>
  provisions: Awaited<ReturnType<typeof listProvisions>>
  kindCounts: Record<string, number>
  statusCounts: Record<string, number>
  nestedProvisionCount: number
}) {
  if (!document) return null
  return (
    <>
      <ModuleHeader
        document={document}
        edition={edition}
        moduleLabel="Структура акта"
        sourceLimitations={
          edition.manifest.legalStatusEvidence?.unresolved ?? []
        }
      />
      <section id="law-structure-overview">
        <h2>Що показує корпус</h2>
        <p>
          Нижче лише технічні факти поточної редакції: кількість адресованих
          позицій, їхні типи, статуси та сторінки PDF. Цей огляд не вигадує
          розділів або юридичної ієрархії, якої немає в даних корпусу.
        </p>
        <dl>
          <div>
            <dt>Адресовані позиції</dt>
            <dd>{provisions.length}</dd>
          </div>
          <div>
            <dt>Позиції з parentId</dt>
            <dd>{nestedProvisionCount}</dd>
          </div>
          <div>
            <dt>Сторінок PDF</dt>
            <dd>{edition.manifest.pageCount}</dd>
          </div>
        </dl>
      </section>
      <section id="law-structure-kinds">
        <h2>Типи позицій</h2>
        <div data-not-typeset className="not-typeset divide-y border-y">
          {Object.entries(kindCounts).map(([kind, count]) => (
            <div
              key={kind}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span>{kindLabels[kind] ?? kind}</span>
              <strong className="tabular-nums">{count}</strong>
            </div>
          ))}
        </div>
        <h3>Статуси у витягнутих даних</h3>
        <div data-not-typeset className="not-typeset divide-y border-y">
          {Object.entries(statusCounts).map(([status, count]) => (
            <div
              key={status}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span>{statusLabels[status] ?? status}</span>
              <strong className="tabular-nums">{count}</strong>
            </div>
          ))}
        </div>
      </section>
      <section id="law-structure-limits">
        <h2>Межі цього огляду</h2>
        <blockquote>
          Тип і порядок позицій допомагають орієнтуватися в локальному джерелі.
          Вони самі по собі не доводять змісту норми, її чинності для конкретної
          дати або результату справи. Для цього відкрийте конкретну норму і ELI.
        </blockquote>
      </section>
    </>
  )
}

function SourceModule({
  document,
  edition,
  sourceLimitations,
}: {
  document: Awaited<ReturnType<typeof getDocument>>
  edition: NonNullable<Awaited<ReturnType<typeof getEdition>>>
  sourceLimitations: readonly string[]
}) {
  if (!document) return null
  return (
    <>
      <ModuleHeader
        document={document}
        edition={edition}
        moduleLabel="Редакція і джерело"
        sourceLimitations={sourceLimitations}
      />
      <section id="law-source-overview">
        <h2>Поточна редакція</h2>
        <p>
          Корпус зберігає одну перевірену редакцію як локатор для навчання. Для
          конкретної справи зіставте дату факту з чинністю акту, пізнішими
          змінами та przepisy przejściowe.
        </p>
        <dl>
          <div>
            <dt>Edition ID</dt>
            <dd>
              <code>{edition.editionId}</code>
            </dd>
          </div>
          <div>
            <dt>Цитування</dt>
            <dd>{edition.manifest.citation}</dd>
          </div>
          <div>
            <dt>Стан джерела перевірено</dt>
            <dd>{edition.manifest.checkedAt}</dd>
          </div>
          <div>
            <dt>Legal-state date</dt>
            <dd>{edition.manifest.legalStateDate ?? "не підтверджено"}</dd>
          </div>
        </dl>
      </section>
      <section id="law-source-metadata">
        <h2>Metadata і PDF</h2>
        <dl>
          <div>
            <dt>Сторінок PDF</dt>
            <dd>{edition.manifest.pageCount}</dd>
          </div>
          <div>
            <dt>Текстових сторінок</dt>
            <dd>{edition.manifest.textLayerPageCount}</dd>
          </div>
          <div>
            <dt>Checksum PDF</dt>
            <dd className="font-mono text-xs break-all">
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
      </section>
      <section id="law-source-limits">
        <h2>Обмеження</h2>
        <blockquote>
          Витягнутий текст є locator і навчальною допомогою. Візуальним джерелом
          залишається офіційний PDF, а ELI потрібне для перевірки чинності.
          {sourceLimitations.length > 0
            ? ` Автоматичні metadata не підтвердили: ${sourceLimitations.join(", ")}.`
            : ""}
        </blockquote>
      </section>
    </>
  )
}

export default function LawDocumentLearningRoute() {
  const {
    document,
    edition,
    provisions,
    moduleId,
    moduleLabel,
    kindCounts,
    statusCounts,
    nestedProvisionCount,
    sourceLimitations,
  } = useLoaderData<typeof loader>()
  const toc = moduleToc[moduleId]

  return (
    <DocsLayout
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="learning"
          activeModuleId={moduleId}
        />
      }
      toc={toc}
    >
      <LawDocumentMobileNavigation
        document={document}
        activeSection="learning"
        activeModuleId={moduleId}
      />
      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        {moduleId === "overview" ? (
          <OverviewModule
            document={document}
            edition={edition}
            provisions={provisions}
            sourceLimitations={sourceLimitations}
          />
        ) : null}
        {moduleId === "reading" ? (
          <ReadingModule
            document={document}
            edition={edition}
            sourceLimitations={sourceLimitations}
          />
        ) : null}
        {moduleId === "structure" ? (
          <StructureModule
            document={document}
            edition={edition}
            provisions={provisions}
            kindCounts={kindCounts}
            statusCounts={statusCounts}
            nestedProvisionCount={nestedProvisionCount}
          />
        ) : null}
        {moduleId === "source" ? (
          <SourceModule
            document={document}
            edition={edition}
            sourceLimitations={sourceLimitations}
          />
        ) : null}
      </article>
    </DocsLayout>
  )
}
