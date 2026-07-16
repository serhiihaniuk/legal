import { useCallback, useState, type ReactElement } from "react"

import { Badge } from "~/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import { Separator } from "~/components/ui/separator"
import {
  getLegalReferencePreview,
  legalReferencePreviewIdentity,
  type LegalReferencePreview,
} from "~/data/reference-previews"
import type { LegalReference } from "~/data/legal-references"
import { cn } from "~/lib/utils"

const statusLabels: Record<LegalReferencePreview["status"], string> = {
  reviewed: "Перевірений коментар",
  draft: "Редакційний матеріал",
  "source-only": "Лише джерело",
}

export type LegalReferencePreviewProps = {
  reference: LegalReference
  trigger: ReactElement
  previewLabel?: string
  className?: string
}

function PreviewBody({
  preview,
  displayTitle,
}: {
  preview: LegalReferencePreview
  displayTitle?: string
}) {
  const title = displayTitle?.trim() || preview.title
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {preview.label ? (
            <p className="text-navigation-meta font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              {preview.label}
            </p>
          ) : null}
          <p className="leading-5 font-semibold">{title}</p>
        </div>
        <Badge variant="outline" className="shrink-0 text-micro">
          {statusLabels[preview.status]}
        </Badge>
      </div>
      {preview.subtitle ? (
        <p className="text-xs leading-4 text-muted-foreground">
          {preview.subtitle}
        </p>
      ) : null}
      <p className="text-xs leading-5">{preview.summary}</p>
      {preview.sourceOnly ? (
        <p className="border-l-2 border-border pl-2 text-[0.7rem] leading-4 text-muted-foreground">
          Картка показує лише канонічні дані джерела, без перевіреного
          редакційного тлумачення.
        </p>
      ) : null}
      {preview.purpose?.length ? (
        <div className="flex flex-col gap-1 pt-1 text-xs leading-4">
          <Separator />
          <p className="font-medium">Мета документа</p>
          <p className="text-muted-foreground">{preview.purpose[0]}</p>
        </div>
      ) : null}
      {preview.editionId ||
      preview.sourceEditionId ||
      preview.legalStateDate ||
      preview.verifiedAt ? (
        <dl className="grid gap-1 pt-1 text-navigation-meta leading-4 text-muted-foreground">
          <Separator />
          {preview.editionId ? (
            <div className="flex justify-between gap-3">
              <dt>Видання</dt>
              <dd className="text-right">{preview.editionId}</dd>
            </div>
          ) : null}
          {preview.sourceEditionId ? (
            <div className="flex justify-between gap-3">
              <dt>Перевірено для</dt>
              <dd className="text-right">{preview.sourceEditionId}</dd>
            </div>
          ) : null}
          {preview.legalStateDate ? (
            <div className="flex justify-between gap-3">
              <dt>Стан права</dt>
              <dd className="text-right">{preview.legalStateDate}</dd>
            </div>
          ) : null}
          {preview.verifiedAt ? (
            <div className="flex justify-between gap-3">
              <dt>Перевірено</dt>
              <dd className="text-right">{preview.verifiedAt}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
      {preview.sourceUrl ? (
        <div className="flex flex-col gap-2 pt-1">
          <Separator />
          <p className="truncate pt-1 text-navigation-meta font-medium text-muted-foreground">
            Джерело: {preview.sourceLabel ?? preview.sourceUrl}
          </p>
        </div>
      ) : null}
    </div>
  )
}

/**
 * One lazy, accessible preview for a typed authored reference. The trigger is
 * supplied as a real Link/anchor so navigation and external target semantics
 * remain untouched; Base UI merges its focus/hover props through `render`.
 */
export function LegalReferencePreview({
  reference,
  trigger,
  previewLabel,
  className,
}: LegalReferencePreviewProps) {
  const identity = legalReferencePreviewIdentity(reference)
  const [loadState, setLoadState] = useState<{
    identity: string
    loading: boolean
    resolved: boolean
    preview?: LegalReferencePreview
  }>(() => ({ identity, loading: false, resolved: false }))
  const currentState = loadState.identity === identity ? loadState : undefined
  const preview = currentState?.preview
  const loading = currentState?.loading ?? false

  const loadPreview = useCallback(() => {
    setLoadState((state) => {
      if (state.identity === identity && (state.loading || state.resolved)) {
        return state
      }
      return { identity, loading: true, resolved: false }
    })
    void getLegalReferencePreview(reference).then((result) => {
      setLoadState((state) =>
        state.identity === identity
          ? { identity, loading: false, resolved: true, preview: result }
          : state
      )
    })
  }, [identity, reference])

  return (
    <HoverCard
      onOpenChange={(open) => {
        if (open) loadPreview()
      }}
    >
      <HoverCardTrigger render={trigger} className={cn("inline", className)} />
      <HoverCardContent
        className="w-[min(22rem,calc(100vw-2rem))]"
        aria-label="Попередній перегляд посилання"
      >
        {loading && !preview ? (
          <p className="text-xs text-muted-foreground">Завантаження…</p>
        ) : preview ? (
          <PreviewBody preview={preview} displayTitle={previewLabel} />
        ) : (
          <p className="text-xs text-muted-foreground">
            Попередній перегляд недоступний.
          </p>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}
