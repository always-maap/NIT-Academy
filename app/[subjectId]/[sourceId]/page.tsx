import { courses } from "@/db/courses";
import { RxDownload } from "react-icons/rx";

export async function generateStaticParams({
  params: { subjectId },
}: {
  params: { subjectId: string };
}) {
  return courses[subjectId].sources.map((s) => ({
    sourceId: s.id,
  }));
}

export const dynamicParams = false;

type Props = {
  params: { subjectId: string; sourceId: string };
};

export default function Source({ params: { subjectId, sourceId } }: Props) {
  const course = courses[subjectId];
  const source = course?.sources.find((src) => src.id === sourceId);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">
          {course.title.fa} - {source!.title}
        </h2>

        <a
          className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-lg font-extrabold"
          href={source!.url}
          download
        >
          دانلود
          <RxDownload strokeWidth={1} />
        </a>
      </div>
      {source!.type === "note" ? (
        <object
          className="w-full h-4/5"
          data={source!.url}
          type="application/pdf"
        ></object>
      ) : (
        <video className="w-full" src={source!.url} controls />
      )}
      <div className="flex justify-end my-4">
        <a
          className="md:hidden flex items-center gap-2 border px-4 py-2 rounded-lg font-extrabold"
          href={source!.url}
          download
        >
          دانلود
          <RxDownload strokeWidth={1} />
        </a>
      </div>
    </>
  );
}
