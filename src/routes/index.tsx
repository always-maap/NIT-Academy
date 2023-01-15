import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getSubjects } from "~/db/subject";

export function routeData() {
  return createServerData$(async () => await getSubjects());
}

export default function Home() {
  const subjects = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ul>
        <For each={subjects()}>
          {(subject) => (
            <A href={subject.slug}>
              <li>{subject.name}</li>
            </A>
          )}
        </For>
      </ul>
    </main>
  );
}
