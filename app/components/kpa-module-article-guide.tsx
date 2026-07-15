import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { KpaArticleExplanation } from "~/data/kpa-article-explanations/types"
import { kpaArticleIndex } from "~/data/kpa-article-index"

type KpaModuleArticleGuideProps = {
  explanations: KpaArticleExplanation[]
}

function formatRuleCount(count: number) {
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} структурних пунктів`
  }

  const lastDigit = count % 10

  if (lastDigit === 1) {
    return `${count} структурний пункт`
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} структурні пункти`
  }

  return `${count} структурних пунктів`
}

export function KpaModuleArticleGuide({
  explanations,
}: KpaModuleArticleGuideProps) {
  const firstArticle = explanations[0]?.article

  return (
    <section
      aria-labelledby="kpa-article-guide-title"
      data-not-typeset
      className="not-typeset flex flex-col gap-8"
    >
      <header className="flex max-w-3xl flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          {explanations.length}{" "}
          {explanations.length === 1 ? "стаття" : "статей"} у цьому модулі
        </p>
        <h2
          id="kpa-article-guide-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Стаття за статтею
        </h2>
        <p className="text-base leading-7 text-muted-foreground">
          Відкрийте статтю, щоб побачити її реальні структурні частини,
          процесуальний наслідок і значення для адміністративної справи
          іноземця.
        </p>
      </header>

      <Accordion
        multiple
        defaultValue={firstArticle ? [`article-${firstArticle}`] : []}
        className="border-y"
      >
        {explanations.map((explanation) => {
          const entry = kpaArticleIndex.find(
            (article) => article.article === explanation.article
          )

          return (
            <AccordionItem
              key={explanation.article}
              value={`article-${explanation.article}`}
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="grid min-w-0 flex-1 gap-2 pr-5 text-left sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5">
                  <span className="font-mono text-sm font-medium text-foreground">
                    art. {explanation.article} KPA
                  </span>
                  <span className="grid gap-1">
                    <span className="text-sm leading-6 font-medium text-foreground sm:text-base">
                      {entry?.shortTitle ?? explanation.summary}
                    </span>
                    <span className="text-sm leading-6 font-normal text-muted-foreground">
                      {explanation.summary}
                    </span>
                  </span>
                  <span className="text-xs leading-6 font-normal whitespace-nowrap text-muted-foreground">
                    {formatRuleCount(explanation.rules.length)}
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-7">
                <div className="flex max-w-4xl flex-col gap-7 pt-2 sm:pl-32">
                  <section
                    aria-labelledby={`article-${explanation.article}-summary`}
                  >
                    <h3
                      id={`article-${explanation.article}-summary`}
                      className="text-sm font-semibold"
                    >
                      Що встановлює стаття
                    </h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {explanation.summary}
                    </p>
                  </section>

                  <section
                    aria-labelledby={`article-${explanation.article}-rules`}
                  >
                    <h3
                      id={`article-${explanation.article}-rules`}
                      className="text-sm font-semibold"
                    >
                      Структура норми
                    </h3>
                    {explanation.rules.length > 0 ? (
                      <ol className="mt-3 flex flex-col border-y">
                        {explanation.rules.map((rule, index) => (
                          <li
                            key={`${explanation.article}-${rule.locator}-${index}`}
                            className="flex gap-4 py-4 not-last:border-b"
                          >
                            <span
                              aria-hidden="true"
                              className="font-mono text-sm text-muted-foreground"
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex min-w-0 flex-col gap-1">
                              <p className="text-sm font-semibold">
                                {rule.locator}
                              </p>
                              <p className="text-base leading-7 text-muted-foreground">
                                {rule.explanation}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="mt-2 text-base leading-7 text-muted-foreground">
                        Стаття не містить чинних структурних пунктів.
                      </p>
                    )}
                  </section>

                  <section
                    aria-labelledby={`article-${explanation.article}-effect`}
                    className="border-t pt-6"
                  >
                    <h3
                      id={`article-${explanation.article}-effect`}
                      className="text-sm font-semibold"
                    >
                      Правовий наслідок
                    </h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {explanation.legalEffect}
                    </p>
                  </section>

                  <section
                    aria-labelledby={`article-${explanation.article}-foreigners-case`}
                    className="border-t pt-6"
                  >
                    <h3
                      id={`article-${explanation.article}-foreigners-case`}
                      className="text-sm font-semibold"
                    >
                      Значення у справі іноземця
                    </h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {explanation.foreignersCase}
                    </p>
                  </section>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}
