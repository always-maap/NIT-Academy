import Container from "@/components/Container";
import { courses } from "@/db/courses";
import Link from "next/link";
import NoSubject from "./NoSubject";
import Source from "./Source";

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
        <div className="flex flex-col bg-black w-full xl:w-[275px] h-[80vh] overflow-y-auto shrink-0">
          {course.sources.map((source) => (
            <Link href={`/${subjectId}/${source.id}`}>
              <Source title={source.title} type={source.type} />
            </Link>
          ))}
        </div>
        <div className="grow">{children}</div>
      </div>
    </Container>
  );
}
