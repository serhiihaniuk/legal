import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import type { StudyModule } from "~/data/study/plan-data"

export function StudyReadingLinks({
  items,
}: {
  items: StudyModule["reading"]
}) {
  return (
    <nav id="study-reading" aria-labelledby="study-reading-title">
      <h2 id="study-reading-title">Матеріали до теми</h2>
      <ul data-not-typeset className="not-typeset divide-y border-y">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="group flex items-start gap-4 py-4 text-sm no-underline hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className="min-w-0 flex-1">
                <span className="font-medium underline decoration-border underline-offset-4 group-hover:decoration-current">
                  {item.label}
                </span>
                <span className="mt-1 block leading-6 text-muted-foreground">
                  {item.description}
                </span>
              </span>
              <ArrowRight aria-hidden className="mt-0.5 size-4 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
