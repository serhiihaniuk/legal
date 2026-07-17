import { LegalText } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import type { CaseGuideCondition } from "~/data/case-guides/types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

function conditionStatusLabel(status: CaseGuideCondition["status"]) {
  if (status === "confirmed") return "підтверджено"
  if (status === "conditional") return "залежить від підстави"
  return "перевірити"
}

export function ConditionsMatrix({
  conditions,
}: {
  conditions: CaseGuideCondition[]
}) {
  if (conditions.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        У цій вкладці спочатку обирається точна спеціальна підстава. Лише після
        цього можна скласти коректну матрицю умов.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6">
      <div className="hidden border-y xl:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[22%]">Умова</TableHead>
              <TableHead className="w-[22%]">Факт у справі</TableHead>
              <TableHead className="w-[22%]">Доказ</TableHead>
              <TableHead className="w-[14%]">Стан</TableHead>
              <TableHead>Ризик / норма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conditions.map((condition) => (
              <TableRow
                key={`${legalTextPlainText(condition.condition)}-${legalTextPlainText(condition.law)}`}
              >
                <TableCell className="align-top font-medium whitespace-normal">
                  <LegalText text={condition.condition} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <LegalText text={condition.modelFact} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText
                    text={condition.evidence}
                    context="reference-section"
                  />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <Badge
                    variant={
                      condition.status === "confirmed" ? "secondary" : "outline"
                    }
                  >
                    {conditionStatusLabel(condition.status)}
                  </Badge>
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <p>
                    <LegalText text={condition.risk} />
                  </p>
                  <p className="mt-2 text-xs">
                    <LegalText
                      text={condition.law}
                      context="reference-section"
                    />
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {conditions.map((condition) => (
          <article
            key={`${legalTextPlainText(condition.condition)}-${legalTextPlainText(condition.law)}`}
            className="py-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-semibold">
                <LegalText text={condition.condition} />
              </h3>
              <Badge
                variant={
                  condition.status === "confirmed" ? "secondary" : "outline"
                }
              >
                {conditionStatusLabel(condition.status)}
              </Badge>
            </div>
            <dl className="mt-3 grid gap-2 text-sm leading-6">
              <div>
                <dt className="inline font-medium">Факт:</dt>{" "}
                <dd className="inline">
                  <LegalText text={condition.modelFact} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Доказ:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText
                    text={condition.evidence}
                    context="reference-section"
                  />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Ризик:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={condition.risk} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Норма:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={condition.law} context="reference-section" />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}
