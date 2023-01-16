import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Container from "~/components/Container";
import { getSubjects } from "~/db/subject";

export function routeData() {
  return createServerData$(async () => await getSubjects());
}

export default function Home() {
  const subjects = useRouteData<typeof routeData>();

  return (
    <main class="text-gray-700 py-4" dir="rtl">
      <Container>
        <ul>
          <For each={subjects()}>
            {(subject) => (
              <A href={subject.slug}>
                <li>{subject.name}</li>
              </A>
            )}
          </For>
        </ul>
      </Container>
    </main>
  );
}
