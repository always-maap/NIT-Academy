import subjects from "@/db/subjects.json";
import AllSources from "@/db/sources.json";
import Container from "@/components/Container";

type Props = {
  params: { subjectId: keyof typeof AllSources; sourceId: string };
};

export default function Source({ params: { subjectId, sourceId } }: Props) {
  const source = AllSources[subjectId].sources.find(
    (src) => src.id === sourceId
  );

  if (!source) {
    return <div>404</div>;
  }

  return (
    <div>
      {source.title}
      <video src={source.url} />
    </div>
  );
}
