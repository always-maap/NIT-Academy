import { Course } from "@/types/Course";

export const family: Course = {
  title: {
    fa: "دانش خانواده و جمعیت",
    en: "family",
  },
  callout: "طبق تجربه خلاصه درس به تنهایی برای کسب نمره کامل کافی نیست.",
  sources: [
    {
      id: "1",
      title: "کتاب مرجع درس",
      type: "note",
      url: "https://nitacademy.s3.ir-thr-at1.arvanstorage.ir/family/family.pdf",
    },
    {
      id: "2",
      title: "خلاصه درس",
      type: "note",
      url: "https://nitacademy.s3.ir-thr-at1.arvanstorage.ir/family/summary.pdf",
    },
  ],
};
