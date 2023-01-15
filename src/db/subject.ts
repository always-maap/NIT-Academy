import { db } from ".";

export async function getSubjects() {
  return await db.subject.findMany();
}

export async function getSubjectVideos(slug: string) {
  return await db.subject.findFirst({ where: { slug } }).videos();
}

export async function getVideo(id: string) {
  return await db.video.findFirst({ where: { id } });
}
