import AllSources from "@/db/sources.json";

type Props = {
  params: { subjectId: keyof typeof AllSources };
};

export default function Subject({ params: { subjectId } }: Props) {
  return <div>Please select a source</div>;
}
