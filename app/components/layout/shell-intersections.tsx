export function ShellIntersections({ bottom = false }: { bottom?: boolean }) {
  return (
    <div
      className="atlas-junctions"
      data-bottom={bottom || undefined}
      aria-hidden="true"
    >
      <span className="atlas-junction-edge-start" />
      <span className="atlas-junction-sidebar" />
      <span className="atlas-junction-contents" />
      <span className="atlas-junction-edge-end" />
    </div>
  )
}
