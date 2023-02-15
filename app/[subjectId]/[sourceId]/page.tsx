import { courses } from "@/db/courses";
import NoSubject from "../NoSubject";
import NoSource from "./NoSource";

type Props = {
  params: { subjectId: string; sourceId: string };
};

export default function Source({ params: { subjectId, sourceId } }: Props) {
  if (!Object.hasOwn(courses, subjectId)) {
    return <NoSubject />;
  }

  const source = courses[subjectId as keyof typeof courses]?.sources.find(
    (src) => src.id === sourceId
  );

  if (!source) {
    return <NoSource />;
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
