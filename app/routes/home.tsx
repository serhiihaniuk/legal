import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Link, useLoaderData } from "react-router"

import { buttonVariants } from "~/components/ui/button"
import { Brand } from "~/components/brand"
import { caseGuideRouteById } from "~/data/case-guides/routes"
import { listEvidenceDocuments } from "~/data/document-library"
import { legalReferenceRegistry } from "~/data/legal-corpus/reference-registry.generated"
import { HomeParticles } from "~/features/home"
import homeStyles from "~/features/home/ui/home.css?url"
import type { Route } from "./+types/home"

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: homeStyles },
]

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
    <main className="home-page">
      <section aria-labelledby="home-title" className="home-hero">
        <HomeParticles />
        <div className="home-hero-content">
          <p className="home-brand">
            <Brand />
          </p>
          <h1 id="home-title" className="home-title">
            Польське право.
            <br />
            Зрозуміле українською.
          </h1>
          <p className="home-description">
            Поняття, документи та хід справи. <br className="hidden sm:block" />
            Для тих, хто працює з легалізацією іноземців у Польщі.
          </p>
          <div className="home-hero-actions">
            <Link
              to="/map"
              className={buttonVariants({ size: "lg", className: "home-pill" })}
            >
              Відкрити карту права <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              to="/law"
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
                className: "home-pill",
              })}
            >
              До бібліотеки <ArrowUpRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
        <a href="#atlas-sections" className="home-scroll-link">
          Знайдіть своє питання{" "}
          <ArrowDown aria-hidden="true" className="size-4" />
        </a>
      </section>

      <div className="home-body">
        <section
          id="atlas-sections"
          aria-labelledby="atlas-sections-title"
          className="home-explore"
        >
          <div className="home-explore-intro">
            <p className="home-eyebrow">Усередині атласу</p>
            <h2 id="atlas-sections-title">Оберіть, з чого почати.</h2>
            <p className="home-explore-description">
              Знайдіть норму, розберіть документ або пройдіть шлях конкретної
              справи. Кожен розділ можна читати окремо й повертатися до нього
              під час роботи.
            </p>
            <dl className="home-stats">
              <div>
                <dd>{stats.acts}</dd>
                <dt>актів права</dt>
              </div>
              <div>
                <dd>{stats.documents}</dd>
                <dt>документів</dt>
              </div>
              <div>
                <dd>{stats.cases}</dd>
                <dt>типів справ</dt>
              </div>
            </dl>
          </div>
          <nav aria-label="Розділи атласу">
            <ol className="home-index">
              {sections.map((section, index) => (
                <li key={section.href}>
                  <Link to={section.href} className="home-index-link group">
                    <span aria-hidden="true" className="home-index-number">
                      0{index + 1}
                    </span>
                    <div>
                      <h3>{section.title}</h3>
                      <p lang="pl" className="home-index-polish">
                        {section.polish}
                      </p>
                      <p className="home-index-description">
                        {section.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="home-index-arrow size-5"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </section>
        <footer className="home-end">
          <div>
            <Link to="/" className="home-end-brand">
              <Brand />
            </Link>
            <p>Польські терміни. Українські пояснення.</p>
          </div>
          <p>
            Освітній довідник для роботи з правом.
            <br />
            Офіційні джерела наведено поруч із поясненнями.
          </p>
        </footer>
      </div>
    </main>
  )
}
