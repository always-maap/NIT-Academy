export type Subject = {
  id: string;
  name: string;
  slug: string;
  professor: string;
  category: Category;
};

enum Category {
  GENERAL,
  BASIC,
  SPECIALIZED,
}
