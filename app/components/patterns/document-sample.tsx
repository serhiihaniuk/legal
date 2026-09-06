import { useId } from "react"
import { LegalText } from "~/components/references"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import type { DocumentSample as Sample } from "~/data/document-library"

export function DocumentSample({ sample }: { sample: Sample }) {
  const titleId = useId()
  return (
    <figure data-not-typeset className="not-typeset my-6 min-w-0 border-y">
      <figcaption className="flex flex-col gap-1 py-3">
        <span id={titleId} className="text-sm font-medium">
          {sample.title}
        </span>
        <span className="text-xs leading-5 text-muted-foreground">
          {sample.note}
        </span>
      </figcaption>
      {sample.kind === "table" ? (
        <div
          role="region"
          aria-labelledby={titleId}
          // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Keyboard users must be able to scroll the table horizontally.
          tabIndex={0}
          className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-ring [&_[data-slot=table-container]]:overflow-visible"
        >
          <Table
            className="min-w-[32rem] table-fixed"
            aria-labelledby={titleId}
          >
            <TableHeader>
              <TableRow>
                {sample.columns.map((column) => (
                  <TableHead
                    key={column}
                    scope="col"
                    className="align-top whitespace-normal"
                  >
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sample.rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell, index) => (
                    <TableCell
                      key={sample.columns[index]}
                      className="align-top leading-6 whitespace-normal"
                    >
                      <LegalText context="reference-section" text={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div
          lang={sample.language}
          className="flex flex-col gap-4 border-t px-4 py-6 text-sm leading-7 sm:px-6"
        >
          {sample.paragraphs.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </figure>
  )
}
