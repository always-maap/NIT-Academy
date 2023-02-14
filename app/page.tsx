"use client";

import Container from "@/components/Container";
import Item from "@/components/Item";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { courseList } from "@/db/course-list";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
          {courseList.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-extrabold my-6">{category.title}</h2>
              <ScrollArea.Root className="lg:h-[80vh] rounded">
                <ScrollArea.Viewport className="w-full h-full rounded">
                  {category.subjects.map((subject) => (
                    <Link key={subject.title.fa} href={subject.slug}>
                      <Item variant={category.variant as any}>
                        {subject.title.fa}
                      </Item>
                    </Link>
                  ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="bg-blackA8" />
              </ScrollArea.Root>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
