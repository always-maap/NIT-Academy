"use client";

import { courses } from "@/db/courses";
import { useState } from "react";
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
    <div>
      <h2 className="text-2xl font-extrabold mb-4">
        {course.title.fa} - {source.title}
      </h2>
      {source.type === "note" ? (
        <object data={source.url} type="application/pdf"></object>
      ) : (
        <video className="w-full" src={source.url} controls />
      )}
    </div>
  );
}
