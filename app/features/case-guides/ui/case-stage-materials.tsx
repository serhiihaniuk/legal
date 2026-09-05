import type { CaseGuideStage } from "~/data/case-guides/types"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

export function CaseStageMaterials({ stage }: { stage: CaseGuideStage }) {
  if (stage.materials.length === 0) return null

  return (
    <nav
      aria-label={`Пов’язані матеріали до етапу «${stage.title}»`}
      className="text-sm"
      data-not-typeset
    >
      <p className="text-xs text-muted-foreground">Далі за темою</p>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        {stage.materials.map((material) => (
          <li key={`${stage.id}-${material.href}`}>
            <Link
              to={material.href}
              className="inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {material.label}
              <ArrowRight aria-hidden="true" className="size-3.5 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
