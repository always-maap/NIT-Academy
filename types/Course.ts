export type Course = {
  title: {
    fa: string;
    en: string;
  };
  sources: { id: string; title: string; type: "video" | "note"; url: string }[];
};
