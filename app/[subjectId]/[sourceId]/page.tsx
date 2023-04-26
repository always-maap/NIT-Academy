"use client";

import { courses } from "@/db/courses";
import { RxDownload } from "react-icons/rx";
import NoSubject from "../NoSubject";
import NoSource from "./NoSource";

type Props = {
  params: { subjectId: string; sourceId: string };
};

export default function Source({ params: { subjectId, sourceId } }: Props) {
  if (!Object.hasOwn(courses, subjectId)) {
    return <NoSubject />;
  }

  const course = courses[subjectId];
  const source = course?.sources.find((src) => src.id === sourceId);

  if (!source) {
    return <NoSource />;
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">
          {course.title.fa} - {source.title}
        </h2>

        <a
          className="flex items-center gap-2 border px-4 py-2 rounded-lg font-extrabold"
          href={source.url}
          download
        >
          دانلود
          <RxDownload strokeWidth={1} />
        </a>
      </div>
      {source.type === "note" ? (
        <object
          className="w-full h-4/5"
          data={source.url}
          type="application/pdf"
        ></object>
      ) : (
        <video className="w-full" src={source.url} controls />
      )}
    </>
  );
}
