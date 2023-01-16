import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getVideo } from "~/db/subject";
import { refetchRouteData } from "solid-start";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async ([_, id]) => {
      return await getVideo(id);
    },
    { key: ["video", params.video] }
  );
}

export default function Video() {
  refetchRouteData(["video"]);
  const video = useRouteData<typeof routeData>();

  return (
    <div>
      <video src={video()?.storage} controls />
    </div>
  );
}
