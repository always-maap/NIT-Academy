import { For } from "solid-js";
import { A, Outlet, useParams, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Container from "~/components/Container";
import { getSubjectVideos } from "~/db/subject";

export function routeData({ params }: any) {
  console.log(params);
  return createServerData$(
    async ([_, slug]) => {
      return await getSubjectVideos(slug);
    },
    { key: () => ["subject", params.subject] }
  );
}

export default function Subject() {
  const params = useParams();
  const videos = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 py-4">
      <Container class="flex justify-between">
        <Outlet />
        <ul>
          <For each={videos()}>
            {(video) => (
              <A href={`/${params.subject}/${video.id}`}>
                <li>{video.title}</li>
              </A>
            )}
          </For>
        </ul>
      </Container>
    </main>
  );
}
