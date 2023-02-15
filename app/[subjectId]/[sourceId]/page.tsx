import { courses } from "@/db/courses";

type Props = {
  params: { subjectId: string; sourceId: string };
};

export default function Source({ params: { subjectId, sourceId } }: Props) {
  if (!Object.hasOwn(courses, subjectId)) {
    return <div>lol</div>;
  }

  const source = courses[subjectId as keyof typeof courses]?.sources.find(
    (src) => src.id === sourceId
  );

  if (!source) {
    return <div>404</div>;
  }

  return (
    <div>
      {source.title}
      {source.type === "note" ? (
        <object
          data={source.url}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
      ) : (
        <video src={source.url} controls />
      )}
    </div>
  );
}
