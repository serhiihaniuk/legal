import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Link, useLoaderData } from "react-router"

import { buttonVariants } from "~/components/ui/button"
import { caseGuideRouteById } from "~/data/case-guides/routes"
import { listEvidenceDocuments } from "~/data/document-library"
import { legalReferenceRegistry } from "~/data/legal-corpus/reference-registry.generated"
import { AtlasIllustration } from "~/features/home"
import "~/features/home/ui/home.css"

const sections = [
  {
    title: "Карта права",
    polish: "Mapa pojęć",
    description: "Побачити, як пов’язані перебування, праця та процедура.",
    href: "/map",
  },
  {
    title: "Бібліотека права",
    polish: "Przepisy i objaśnienia",
    description: "Прочитати норму, її пояснення та офіційний текст.",
    href: "/law",
  },
  {
    title: "Адміністративна процедура",
    polish: "Kodeks postępowania administracyjnego",
    description: "Зрозуміти роль KPA у розгляді справи.",
    href: "/guide/kpa?module=system",
  },
  {
    title: "Документи",
    polish: "Dokumenty i dowody",
    description: "Розібратися, що документ підтверджує і чого не доводить.",
    href: "/documents",
  },
  {
    title: "Гайди по справах",
    polish: "Pobyt i praca",
    description: "Розглянути умови, документи й хід конкретного типу справи.",
    href: "/cases/cukr",
  },
  {
    title: "Путівник по темах",
    polish: "Od czego zacząć",
    description: "Знайти пояснення питання, яке виникло у вашій роботі.",
    href: "/study",
  },
] as const

export function loader() {
  return {
    acts: Object.keys(legalReferenceRegistry).length,
    documents: listEvidenceDocuments().length,
    cases: caseGuideRouteById.size,
  }
}

export function meta() {
  return [
    { title: "Legalizacja · Польське право українською" },
    {
      name: "description",
      content:
        "Пояснення польського права українською для тих, хто працює з легалізацією іноземців. Правові поняття, документи та хід справи.",
    },
  ]
}

export default function Home() {
  const stats = useLoaderData<typeof loader>()

  return (
    <main className="home-atlas mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <section aria-labelledby="home-title" className="home-hero">
        <div className="home-eyebrow flex items-center gap-3">
          <span className="home-mark" aria-hidden="true" />
          <p>Правовий атлас</p>
          <span aria-hidden="true" className="text-border">
            /
          </span>
          <p lang="pl">Legalizacja cudzoziemców</p>
        </div>

        <div className="home-hero-grid">
          <div className="home-intro">
            <h1 id="home-title" className="home-title font-display">
              Польське право.
              <br />
              <span className="text-muted-foreground">Зрозуміле</span>
              <br />
              українською.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Поняття, документи та хід справи. Пояснення для тих, хто працює з
              легалізацією іноземців у Польщі.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Link to="/map" className={buttonVariants({ size: "lg" })}>
                Відкрити карту права
                <ArrowRight data-icon="inline-end" />
              </Link>
              <Link to="/law" className="home-text-link group">
                До бібліотеки
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <figure className="home-figure">
            <AtlasIllustration />
            <figcaption className="flex items-center justify-between gap-4 border-t pt-4 text-xs text-muted-foreground">
              <span>Від окремого факту до розуміння справи</span>
            </figcaption>
          </figure>
        </div>

        <div className="home-colophon flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-b pb-7">
          <a href="#atlas-sections" className="home-text-link group text-xs">
            Знайдіть своє питання
            <ArrowDown
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <dl className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground">
            <div className="flex gap-2">
              <dd className="font-mono text-foreground">
                {stats.acts.toString().padStart(2, "0")}
              </dd>
              <dt>актів права</dt>
            </div>
            <div className="flex gap-2">
              <dd className="font-mono text-foreground">{stats.documents}</dd>
              <dt>документів</dt>
            </div>
            <div className="flex gap-2">
              <dd className="font-mono text-foreground">
                {stats.cases.toString().padStart(2, "0")}
              </dd>
              <dt>типів справ</dt>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="atlas-sections"
        aria-labelledby="atlas-sections-title"
        className="home-directory"
      >
        <div className="home-directory-intro">
          <p className="home-eyebrow">Навігація атласом</p>
          <h2
            id="atlas-sections-title"
            className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            Оберіть розділ
            <br />
            для свого питання.
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            Почніть із потрібної теми. Кожен розділ можна читати окремо та
            повертатися до нього під час роботи.
          </p>
        </div>
        <nav aria-label="Розділи атласу">
          <ol className="border-t">
            {sections.map((section, index) => (
              <li key={section.href} className="border-b">
                <Link to={section.href} className="home-index-link group">
                  <span
                    aria-hidden="true"
                    className="pt-1.5 font-mono text-xs text-muted-foreground"
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {section.title}
                    </h3>
                    <p lang="pl" className="mt-1 text-xs text-muted-foreground">
                      {section.polish}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <footer className="home-footer flex flex-wrap items-end justify-between gap-6 border-t py-8">
        <div>
          <p className="font-display text-2xl tracking-tight">
            Legalizacja<span className="text-muted-foreground">.</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Польські терміни. Українські пояснення.
          </p>
        </div>
        <p className="max-w-xs text-xs leading-6 text-muted-foreground">
          Освітній довідник для роботи з правом.
          <br />
          Офіційні джерела наведено поруч із поясненнями.
        </p>
      </footer>
    </main>
  )
}
