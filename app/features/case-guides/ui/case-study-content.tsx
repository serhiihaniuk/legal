import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import { DocumentArticle } from "~/components/patterns/document-content"
import { DefinitionRowGrid } from "~/components/patterns/definition-rows"
import { LegalText, OfficialSourceEntry } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import type { CaseGuideRoute, CaseGuideSource } from "~/data/case-guides/types"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

import { caseStudySectionIds } from "../model/case-study-navigation"
import { CaseStages } from "./case-stages"
import { ConditionsMatrix } from "./conditions-matrix"
import { DeadlineRegister, DocumentRegister } from "./case-registers"

type CaseStudyContentProps = {
  route: CaseGuideRoute
  updatedAt: string
}

function displayDate(value: string) {
  const [year, month, day] = value.split("-")
  return year && month && day ? `${day}.${month}.${year}` : value
}

type DefinitionGridItem = { label: string; value: LegalTextValue }

function definitionRows(items: readonly DefinitionGridItem[]) {
  return items.map((item) => ({
    id: item.label,
    term: item.label,
    description: <LegalText text={item.value} />,
  }))
}

export function CaseStudyContent({ route, updatedAt }: CaseStudyContentProps) {
  return (
    <DocumentArticle>
      <header id={caseStudySectionIds.overview}>
        <div
          data-not-typeset
          className="mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">Повний гайд по справі</Badge>
          <Badge variant="outline">{route.tab}</Badge>
          <span className="text-xs text-muted-foreground">
            Стан права: {displayDate(updatedAt)}
          </span>
        </div>

        <p className="text-sm font-medium text-muted-foreground">
          {route.eyebrow}
        </p>
        <h1>{route.title}</h1>
        <p className="text-muted-foreground">
          <LegalText text={route.subtitle} />
        </p>
        {route.overview.map((paragraph) => (
          <p key={legalTextPlainText(paragraph)}>
            <LegalText text={paragraph} />
          </p>
        ))}

        <blockquote>
          <p>
            <strong>Результат маршруту.</strong>{" "}
            <LegalText text={route.result} />
          </p>
          <p>
            Це навчальний гайд по типовому правовому маршруту. У кожній реальній
            справі потрібно окремо встановити факти, перевірити актуальну
            редакцію норм і зібрати належні докази.
          </p>
        </blockquote>

        <div
          data-not-typeset
          className="mt-6 grid border-y text-sm md:grid-cols-2"
        >
          <div className="py-4 md:pr-5">
            <p className="text-xs font-medium text-muted-foreground">
              Кому підходить
            </p>
            <p className="mt-1 font-medium">
              <LegalText text={route.forWhom} />
            </p>
          </div>
          <div className="border-t py-4 md:border-t-0 md:border-l md:pl-5">
            <p className="text-xs font-medium text-muted-foreground">
              Коли не обирати автоматично
            </p>
            <p className="mt-1 font-medium">
              <LegalText text={route.notFor} />
            </p>
          </div>
        </div>

        <div
          data-not-typeset
          className="mt-5 overflow-hidden rounded-md border text-sm"
        >
          <DefinitionRowGrid items={definitionRows(route.metrics)} />
        </div>
      </header>

      <Separator data-not-typeset />

      <section
        id={caseStudySectionIds.facts}
        aria-labelledby="case-facts-heading"
      >
        <h2 id="case-facts-heading">Факти, які треба встановити у справі</h2>
        <p>
          <LegalText text={route.profile.description} />
        </p>
        <div
          data-not-typeset
          className="mt-5 overflow-hidden rounded-md border text-sm"
        >
          <dl>
            <div className="bg-muted/40 px-4 py-3">
              <dt className="text-xs font-medium text-muted-foreground">
                Профіль маршруту
              </dt>
              <dd className="mt-1 leading-6 font-medium">
                <LegalText text={route.profile.name} />
              </dd>
            </div>
            <DefinitionRowGrid items={definitionRows(route.profile.facts)} />
          </dl>
        </div>
        <aside className="mt-6 border-l-2 border-primary pl-4">
          <p>
            <strong>Що ще треба підтвердити.</strong>{" "}
            <LegalText text={route.profile.assumption} />
          </p>
        </aside>
      </section>

      <section
        id={caseStudySectionIds.choice}
        aria-labelledby="case-choice-heading"
      >
        <h2 id="case-choice-heading">Чому обираємо саме цю підставу</h2>
        <p>
          <LegalText text={route.choice.why} />
        </p>
        <div
          data-not-typeset
          className="mt-6 divide-y border-y text-sm leading-6"
        >
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Найближча альтернатива</h3>
            <p className="text-muted-foreground">
              <LegalText text={route.choice.closestAlternative} />
            </p>
          </div>
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Вирішальний критерій</h3>
            <p className="text-muted-foreground">
              <LegalText text={route.choice.gate} />
            </p>
          </div>
        </div>
      </section>

      <section
        id={caseStudySectionIds.stages}
        aria-labelledby="case-stages-heading"
      >
        <h2 id="case-stages-heading">Справа від першої перевірки до карти</h2>
        <p>
          Нижче — послідовний розбір механізму й робочий список перевірки. На
          кожному етапі видно, що орган або сторона робить, який результат
          потрібен, які документи треба зібрати й де перевірити ризики до
          переходу далі.
        </p>
        <CaseStages stages={route.stages} />
      </section>

      <section
        id={caseStudySectionIds.conditions}
        aria-labelledby="case-conditions-heading"
      >
        <h2 id="case-conditions-heading">Матриця умов маршруту</h2>
        <p>
          Тут правова умова з’єднана з фактом, який треба встановити, доказом і
          ризиком. Саме така матриця показує, чого справді бракує до рішення.
        </p>
        <ConditionsMatrix conditions={route.conditions} />
      </section>

      <section
        id={caseStudySectionIds.registers}
        aria-labelledby="case-registers-heading"
      >
        <h2 id="case-registers-heading">Документи й строки</h2>
        <p>
          Реєстри нижче збирають деталі з етапів в одному місці. Документ
          читається через факт, який він доводить; строк — через подію, яка
          запускає відлік.
        </p>
        <h3>Реєстр документів і доказів</h3>
        <DocumentRegister documents={route.documents} />
        <h3>Реєстр строків і наслідків</h3>
        <DeadlineRegister deadlines={route.deadlines} />
      </section>

      <section
        id={caseStudySectionIds.branches}
        aria-labelledby="case-branches-heading"
      >
        <h2 id="case-branches-heading">Негативні й альтернативні гілки</h2>
        <p>
          Негативна гілка починається не лише з відмови. Нею може бути
          неправильна підстава, формальний недолік, невиконана особиста дія або
          зміна ключового факту під час розгляду.
        </p>
        <div data-not-typeset className="mt-6 divide-y border-y">
          {route.negativeBranches.map((branch) => (
            <article key={branch.title} className="py-5">
              <h3 className="text-base font-semibold">{branch.title}</h3>
              <dl className="mt-3 grid gap-2 text-sm leading-6">
                <div>
                  <dt className="inline font-medium">Тригер:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.trigger} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Наслідок:</dt>{" "}
                  <dd className="inline">
                    <LegalText text={branch.consequence} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Реакція:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.response} />
                  </dd>
                </div>
              </dl>
              {branch.material ? (
                <div className="mt-4">
                  <Button
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    render={<Link to={branch.material.href} />}
                  >
                    {branch.material.label}
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section
        id={caseStudySectionIds.sources}
        aria-labelledby="case-sources-heading"
      >
        <h2 id="case-sources-heading">Офіційні джерела</h2>
        <p>
          Внутрішні матеріали пояснюють механізм, але юридичне твердження завжди
          звіряємо з актуальним офіційним текстом і датою факту.
        </p>
        <ul data-not-typeset className="not-typeset list-none p-0">
          {route.sources.map((source) => (
            <li key={source.url} className="border-t py-5 first:border-t-0">
              <OfficialSourceEntry
                source={source as CaseGuideSource as OfficialSource}
              />
            </li>
          ))}
        </ul>
      </section>
    </DocumentArticle>
  )
}
