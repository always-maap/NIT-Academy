import Container from "@/components/Container";
import { courses } from "@/db/courses";
import Link from "next/link";
import NoSubject from "./NoSubject";

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

  const course = courses[subjectId as keyof typeof courses];

  return (
    <Container>
      <div className="flex justify-between my-4">
        <div className="flex flex-col bg-black">
          {course.sources.map((source) => (
            <Link href={`/${subjectId}/${source.id}`}>
              <div className="h-[50px] flex items-center border p-2 py-6">
                {source.title}
              </div>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </Container>
  );
}
