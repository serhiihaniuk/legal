import { Clock3 } from "lucide-react"

import { LegalText } from "~/components/references"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import type {
  CaseGuideDeadline,
  CaseGuideDocument,
} from "~/data/case-guide-types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

import { DocumentStatus } from "./case-guide-shared"

export function DocumentRegister({
  documents,
}: {
  documents: CaseGuideDocument[]
}) {
  if (documents.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        Для цієї розвилки спочатку треба визначити точну підставу. Після цього
        реєстр документів формується з її умов, а не з універсального списку.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6">
      <div className="hidden border-y xl:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[21%]">Документ / дія</TableHead>
              <TableHead className="w-[12%]">Статус</TableHead>
              <TableHead className="w-[23%]">Хто і коли</TableHead>
              <TableHead className="w-[25%]">Що доводить</TableHead>
              <TableHead>Правова роль</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <TableRow
                key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
              >
                <TableCell className="align-top font-medium whitespace-normal">
                  <LegalText text={document.item} context="reference-section" />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <DocumentStatus document={document} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText text={document.owner} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <LegalText text={document.proves} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText text={document.law} context="reference-section" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {documents.map((document) => (
          <article
            key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
            className="py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">
                <LegalText text={document.item} context="reference-section" />
              </h3>
              <DocumentStatus document={document} />
            </div>
            <dl className="mt-3 grid gap-2 text-sm leading-6">
              <div>
                <dt className="inline font-medium">Хто і коли:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={document.owner} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Доводить:</dt>{" "}
                <dd className="inline">
                  <LegalText text={document.proves} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Правова роль:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={document.law} context="reference-section" />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}

export function DeadlineRegister({
  deadlines,
}: {
  deadlines: CaseGuideDeadline[]
}) {
  if (deadlines.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        Точний строк з’явиться лише після вибору конкретної підстави і події,
        яка запускає відлік.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6 divide-y border-y">
      {deadlines.map((deadline) => (
        <article
          key={`${legalTextPlainText(deadline.period)}-${legalTextPlainText(deadline.trigger)}`}
          className="grid gap-4 py-5 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div className="py-2 sm:px-3">
            <Clock3
              aria-hidden="true"
              className="size-5 text-muted-foreground"
            />
            <h3 className="mt-2 text-base font-semibold">
              <LegalText text={deadline.period} />
            </h3>
          </div>
          <div className="grid gap-3 text-sm leading-6">
            <p>
              <strong>Початок відліку:</strong>{" "}
              <span className="text-muted-foreground">
                <LegalText text={deadline.trigger} />
              </span>
            </p>
            <p>
              <LegalText text={deadline.action} />
            </p>
          </div>
          <div className="grid gap-2 text-sm leading-6">
            <p className="border-l-2 border-primary pl-3">
              <strong>Якщо пропустити:</strong>{" "}
              <LegalText text={deadline.consequence} />
            </p>
            <p className="text-xs text-muted-foreground">
              <LegalText text={deadline.law} context="reference-section" />
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
