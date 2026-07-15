import { annotatedWezwanie, foreignersCaseAlgorithm } from "~/data/kpa-guide-data"

export const kpaPracticeToc = [
  { href: "#practice-overview", label: "Мета практикуму" },
  { href: "#case-algorithm", label: "Алгоритм справи" },
  { href: "#wezwanie-anatomy", label: "Анатомія wezwania" },
  { href: "#practice-check", label: "Самоперевірка" },
]

export function KpaPracticeContent() {
  return (
    <>
      <header id="practice-overview" className="flex scroll-mt-24 flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Практикум KPA</h1>
        <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
          Один робочий алгоритм для справи про легалізацію: від фіксації фактів до відповіді на wezwanie та контролю рішення.
        </p>
      </header>

      <article className="typeset typeset-docs w-full flex-1 pb-16 sm:pb-0">
        <section id="case-algorithm">
          <h2>Алгоритм реальної справи</h2>
          <p>Кожен крок повинен залишити конкретний робочий результат, який можна перевірити в актах.</p>
          <ol>
            {foreignersCaseAlgorithm.map((step) => (
              <li key={step.title}>
                <strong>{step.title.replace(/^\d+\.\s*/, "")}</strong>
                <p>{step.detail}</p>
                <p><em>Результат:</em> {step.output}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="wezwanie-anatomy">
          <h2>Анатомія wezwania</h2>
          <p>Спочатку розділіть юридичне речення на частини, а вже потім підбирайте документи.</p>
          <blockquote lang="pl">{annotatedWezwanie.sample}</blockquote>
          <dl className="not-typeset mt-8 divide-y border-y text-sm">
            {annotatedWezwanie.parts.map((part) => (
              <div key={part.label} className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="font-medium">{part.label}</dt>
                <dd>
                  <p className="font-medium text-foreground" lang="pl">{part.text}</p>
                  <p className="mt-1 leading-6 text-muted-foreground">{part.question}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="practice-check">
          <h2>Самоперевірка перед відповіддю</h2>
          <ul>
            <li>для кожного пункту wezwania визначено факт, який орган хоче встановити;</li>
            <li>матеріальна вимога знайдена в lex specialis, а процесуальна дія — у KPA;</li>
            <li>строк пораховано від юридичної дати doręczenia;</li>
            <li>відповідь має індекс додатків і пояснює зв’язок кожного доказу з умовою;</li>
            <li>неможливість подати документ пояснена до спливу строку з альтернативним доказом.</li>
          </ul>
        </section>
      </article>
    </>
  )
}
