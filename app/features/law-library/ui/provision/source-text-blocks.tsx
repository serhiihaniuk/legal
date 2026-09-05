import { parseProvisionBlocks } from "./source-text-model"

export function SourceTextBlocks({
  text,
  idPrefix,
  stripLocator = true,
}: {
  text: string
  idPrefix: string
  stripLocator?: boolean
}) {
  return (
    <div className="flex flex-col gap-4 py-5">
      {parseProvisionBlocks(text, stripLocator).map((block) => (
        <div
          key={block.key}
          id={`${idPrefix}-${block.key}`}
          className="flex scroll-mt-24 items-baseline gap-3"
          style={{ paddingInlineStart: `${Math.min(block.depth, 2) * 0.8}rem` }}
        >
          {block.marker && (
            <span
              lang="pl"
              className="w-8 shrink-0 text-sm font-medium text-muted-foreground"
            >
              {block.marker}
            </span>
          )}
          <p
            lang="pl"
            className="min-w-0 flex-1 text-base leading-7 text-foreground"
          >
            {block.text}
          </p>
        </div>
      ))}
    </div>
  )
}
