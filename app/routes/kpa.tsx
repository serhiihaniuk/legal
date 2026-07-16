import { useLoaderData, type LoaderFunctionArgs } from "react-router"

import { KpaGuideRoute, loadKpaRouteData } from "~/features/law-library"

export async function loader({ request, params }: LoaderFunctionArgs) {
  return loadKpaRouteData({
    request,
    params: {
      moduleId: params.moduleId,
      practiceId: params.practiceId,
    },
  })
}

export default function KpaGuide() {
  const data = useLoaderData<typeof loader>()
  return <KpaGuideRoute {...data} />
}
