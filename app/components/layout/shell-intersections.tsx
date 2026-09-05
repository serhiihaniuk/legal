export function ShellIntersections({
  bottom = false,
  edgesOnly = false,
}: {
  bottom?: boolean
  edgesOnly?: boolean
}) {
  return (
    <div
      className="atlas-junctions"
      data-bottom={bottom || undefined}
      aria-hidden="true"
    >
      <span className="atlas-junction-edge-start" />
      {!edgesOnly && <span className="atlas-junction-sidebar" />}
      {!edgesOnly && <span className="atlas-junction-contents" />}
      <span className="atlas-junction-edge-end" />
    </div>
  )
}
