import Container from "@/components/Container";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { courses } from "@/db/courses";
import Link from "next/link";
import NoSubject from "./NoSubject";
import Source from "./Source";

export async function generateStaticParams() {
  const courseList = Object.keys(courses);

  return courseList.map((c) => ({ subjectId: c }));
}

export const dynamicParams = false;

type Props = {
  params: { subjectId: string };
  children: React.ReactNode;
};

export default function SubjectLayout({
  params: { subjectId },
  children,
}: Props) {
  if (!Object.hasOwn(courses, subjectId)) {
    return <NoSubject />;
  }

  const course = courses[subjectId];

  return (
    <Container>
      <div className="flex flex-col-reverse xl:flex-row justify-between gap-8 my-4">
        <ScrollArea className="xl:h-[80vh] shrink-0">
          <div className="flex flex-col xl:w-[275px] w-full rounded bg-black">
            {course.sources.map((source) => (
              <Link href={`/${subjectId}/${source.id}`}>
                <Source title={source.title} type={source.type} />
              </Link>
            ))}
          </div>
        </ScrollArea>
        <div className="grow">{children}</div>
      </div>
    </Container>
  );
}
