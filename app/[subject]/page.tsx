import subjects from "../../db/subjects.json";
import fs from "node:fs/promises";
import path from "node:path";
import Container from "@/components/Container";

export async function generateStaticParams() {
  const slugs: any = [];
  subjects.forEach((category) =>
    category.subjects.forEach((subject) => {
      if (subject.slug === "/signals-and-systems") {
        slugs.push({ subject: subject.slug });
      }
    })
  );
  return slugs;
}

async function getSubject(subject: string) {
  const subjectFile = await fs.readFile(
    path.join(process.cwd(), `./db/subjects/${subject}.json`),
    "utf8"
  );
  const subjectRes = await JSON.parse(subjectFile);
  console.log(subjectRes);

  return subjectRes;
}

export default async function Subject({ params: { subject } }: any) {
  const x: any = await getSubject(subject);

  return (
    <Container>
      lol
      {x.map((z: any) => (
        <div>
          <video src={z.link} controls />
        </div>
      ))}
    </Container>
  );
}
