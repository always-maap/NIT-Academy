import Container from "@/components/Container";
import AllSources from "@/db/sources.json";
import Link from "next/link";

type Props = {
  params: { subjectId: keyof typeof AllSources };
  children: React.ReactNode;
};

export default function SubjectLayout({
  params: { subjectId },
  children,
}: Props) {
  const subject = AllSources[subjectId];

  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex flex-col">
          {subject.sources.map((source) => (
            <Link href={`/${subjectId}/${source.id}`}>
              <div className="h-[50px] flex items-center border">
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
