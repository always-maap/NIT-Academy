import { Course } from "@/types/Course";
import { ai } from "./ai";
import { algorithmDesign } from "./algorithm-design";
import { constitution } from "./constitution";
import { differentialEquations } from "./differential-equations";
import { english } from "./english";
import { family } from "./family";
import { historyOfImam } from "./history-of-imam";
import { historyOfIslam } from "./history-of-islam";
import { iranRevolution } from "./iran-revolution";
import { islamicThoughts1 } from "./islamic-thoughts-1";
import { islamicThoughts2 } from "./islamic-thoughts-2";
import { os } from "./os";
import { osLab } from "./os-lab";
import { persianLiterature } from "./persian-literature";
import { physics2 } from "./physics-2";
import { probability } from "./probability";
import { quran } from "./quran";
import { signalsAndSystems } from "./signals-and-systems";

export const courses: Record<string, Course> = {
  "physics-2": physics2,
  "differential-equations": differentialEquations,
  probability: probability,

  ai: ai,
  "algorithm-design": algorithmDesign,
  os: os,
  "os-lab": osLab,

  "signals-and-systems": signalsAndSystems,

  "persian-literature": persianLiterature,
  english: english,
  family: family,
  "history-of-islam": historyOfIslam,
  "history-of-imam": historyOfImam,
  quran: quran,
  "islamic-thoughts-1": islamicThoughts1,
  "islamic-thoughts-2": islamicThoughts2,
  "iran-revolution": iranRevolution,
  constitution: constitution,
};
