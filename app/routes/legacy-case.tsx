import { Navigate, useParams } from "react-router"

export default function LegacyCasePage() {
  const { routeId = "cukr" } = useParams()

  return <Navigate replace to={`/cases/${routeId}`} />
}
