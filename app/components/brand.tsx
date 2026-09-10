import { cn } from "~/lib/utils"

export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src="/brand/legalizacja-icon.svg"
        alt=""
        width={132}
        height={237}
        className="h-[1.6em] w-auto shrink-0"
      />
      <span>Legalizacja</span>
    </span>
  )
}
