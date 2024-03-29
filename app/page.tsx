import Container from "@/components/Container";
import Item from "@/components/Item";
import Link from "next/link";
import { courseList } from "@/db/course-list";
import { ScrollArea } from "@/components/ui/ScrollArea";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
          {courseList.map((category) => (
            <div key={category.title}>
              <h2 className="my-6 text-2xl font-extrabold">{category.title}</h2>
              <ScrollArea className="lg:h-[78vh] rounded">
                {category.subjects.map((subject) => (
                  <Link key={subject.title} href={subject.slug}>
                    <Item variant={category.variant as any}  available={subject.slug !== ""}>
                      {subject.title}
                    </Item>
                  </Link>
                ))}
              </ScrollArea>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
