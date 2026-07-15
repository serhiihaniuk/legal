import { useLoaderData, type LoaderFunctionArgs } from "react-router"

import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import { DocsLayout } from "~/components/docs-layout"
import { Badge } from "~/components/ui/badge"
import {
  genericPracticeModules,
  getDocument,
  getEdition,
  type GenericPracticeId,
} from "~/data/legal-library"

const toc = [
  { href: "#law-practice-overview", label: "Мета практикуму" },
  { href: "#law-practice-checklist", label: "Робочий ланцюг" },
  { href: "#law-practice-safety", label: "Перевірка і межі" },
] as const

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  if (document.id === "kpa") {
    throw new Response("KPA uses its authored practice route", { status: 404 })
  }
  const practice = genericPracticeModules.find(
    (candidate) => candidate.id === params.practiceId
  )
  if (!practice)
    throw new Response("Practice module not found", { status: 404 })
  const edition = getEdition(document.id, document.currentEditionId)
  if (!edition) throw new Response("Legal edition not found", { status: 404 })

  return {
    document,
    edition,
    practiceId: practice.id,
    practiceLabel: practice.label,
  }
}

const workflow = [
  {
    term: "Fakt",
    label: "Факти",
    prompt: "Що сталося, коли, з ким і який факт треба підтвердити?",
  },
  {
    term: "Pojęcie prawne",
    label: "Правове поняття",
    prompt:
      "Яке правове поняття описує ситуацію, не покладаючись лише на назву заяви?",
  },
  {
    term: "Przepis i warunki",
    label: "Норма та умови",
    prompt: "Яка норма застосовується і які окремі умови з неї випливають?",
  },
  {
    term: "Dowód",
    label: "Доказ",
    prompt: "Який документ або інший доказ підтверджує кожну умову?",
  },
  {
    term: "Czynność i termin",
    label: "Дія і строк",
    prompt: "Хто має діяти, перед ким і до якого строку?",
  },
  {
    term: "Skutek",
    label: "Наслідок",
    prompt: "Що зміниться після дії або після пропуску строку?",
  },
  {
    term: "Środek zaskarżenia",
    label: "Засіб оскарження",
    prompt: "Яке odwołanie, zażalenie або інший засіб може бути доступним?",
  },
] as const

export default function LawDocumentPracticeRoute() {
  const { document, edition, practiceId, practiceLabel } =
    useLoaderData<typeof loader>()

  return (
    <DocsLayout
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="practice"
          activePracticeId={practiceId as GenericPracticeId}
        />
      }
      toc={toc}
    >
      <LawDocumentMobileNavigation
        document={document}
        activeSection="practice"
        activePracticeId={practiceId as GenericPracticeId}
      />
      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        <header id="law-practice-overview">
          <div data-not-typeset className="mb-3 flex flex-wrap gap-2">
            <Badge variant="secondary">{document.shortName}</Badge>
            <Badge variant="outline">Практикум</Badge>
            <Badge variant="outline">{edition.manifest.citation}</Badge>
          </div>
          <h1>
            {practiceLabel}: {document.title}
          </h1>
          <p className="text-lg leading-8">
            Побудуйте робочий ланцюг для конкретного факту, не пропускаючи
            умови, докази, строки та засіб захисту. Це нейтральний шаблон
            аналізу, а не автоматичний правовий висновок.
          </p>
        </header>

        <section id="law-practice-checklist">
          <h2>Робочий ланцюг</h2>
          <p>
            Заповнюйте кожен рядок окремо. Якщо відповідь залежить від повного
            тексту акту, дати або практики органу, позначте це як питання для
            перевірки.
          </p>
          <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
            {workflow.map((item, index) => (
              <div
                key={item.term}
                className="grid gap-2 py-4 sm:grid-cols-[2rem_12rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="text-sm text-muted-foreground tabular-nums">
                  {index + 1}.
                </span>
                <strong>
                  <span className="block">{item.label}</span>
                  <span
                    className="text-xs font-normal text-muted-foreground"
                    lang="pl"
                  >
                    {item.term}
                  </span>
                </strong>
                <p className="text-sm leading-6">{item.prompt}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="law-practice-safety">
          <h2>Перевірка і межі</h2>
          <p>
            Порівняйте заповнений ланцюг із поточною редакцією та офіційним PDF.
            Перевірте, чи не змінилися status, wejście w życie та przepisy
            przejściowe. Окремо прочитайте інструкцію в отриманому рішенні або
            wezwanie щодо доступного засобу оскарження.
          </p>
          <blockquote>
            Корпус може показати локатор, тип, статус і текст позиції. Він не
            генерує висновок про право особи, достатність доказів або результат
            справи. Такі питання залежать від повних фактів і перевірки джерел.
          </blockquote>
        </section>
      </article>
    </DocsLayout>
  )
}
