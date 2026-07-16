import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "~/lib/utils"

const documentArticleVariants = cva(
  "typeset typeset-docs w-full pb-16 sm:pb-0",
  {
    variants: {
      width: {
        default: "",
        grow: "flex-1",
      },
    },
    defaultVariants: {
      width: "default",
    },
  }
)

const documentBadgeRowVariants = cva("not-typeset mb-3 flex flex-wrap gap-2", {
  variants: {
    align: {
      start: "",
      center: "items-center",
    },
  },
  defaultVariants: {
    align: "start",
  },
})

export function DocumentArticle({
  className,
  width,
  ...props
}: ComponentProps<"article"> & VariantProps<typeof documentArticleVariants>) {
  return (
    <article
      className={cn(documentArticleVariants({ width }), className)}
      {...props}
    />
  )
}

export function DocumentHeader({
  badges,
  badgeAlign,
  children,
  ...props
}: ComponentProps<"header"> & {
  badges?: ReactNode
  badgeAlign?: VariantProps<typeof documentBadgeRowVariants>["align"]
}) {
  return (
    <header {...props}>
      {badges ? (
        <div
          data-not-typeset
          className={documentBadgeRowVariants({ align: badgeAlign })}
        >
          {badges}
        </div>
      ) : null}
      {children}
    </header>
  )
}

export type DocumentHeading = {
  id: string
  title: string
  tocLabel?: string
  depth?: 2 | 3 | 4
}

export function defineDocumentHeadings<
  const T extends Record<string, DocumentHeading>,
>(headings: T): T {
  return headings
}

export function tableOfContentsFromHeadings(
  headings: Record<string, DocumentHeading>
) {
  return Object.values(headings).map((heading) => ({
    href: `#${heading.id}`,
    label: heading.tocLabel ?? heading.title,
    ...(heading.depth ? { depth: heading.depth } : {}),
  }))
}
