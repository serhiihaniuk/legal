import { CasePreparationActions } from "./case-preparation-actions"
import { LegalText } from "~/components/references"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import type { CaseGuideDocument } from "~/data/case-guides/types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

import { DocumentStatus } from "./case-guide-shared"

export function DocumentRegister({
  documents: entries,
}: {
  documents: CaseGuideDocument[]
}) {
  const documents = entries.filter((document) => document.kind !== "action")
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
      <CasePreparationActions documents={entries} />
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
