export type Course = {
  title: {
    fa: string;
    en: string;
  };
  callout?: string;
  sources: {
    id: string;
    title: string;
    type: "video" | "note" | "etc";
    url: string;
  }[];
};
