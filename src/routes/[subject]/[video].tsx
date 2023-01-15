import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getVideo } from "~/db/subject";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async ([_, id]) => {
      console.log(id);
      const x = await getVideo(id);
      return x;
    },
    { key: ["subject", params.video] }
  );
}

export default function VideoSSS() {
  const video = useRouteData<typeof routeData>();

  return (
    <div>
      <video src={video()?.storage} controls />
    </div>
  );
}
