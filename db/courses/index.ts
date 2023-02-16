import { Course } from "@/types/Course";
import { differentialEquations } from "./differential-equations";
import { os } from "./os";
import { osLab } from "./os-lab";
import { persianLiterature } from "./persian-literature";
import { probability } from "./probability";
import { signalsAndSystems } from "./signals-and-systems";

export const courses: Record<string, Course> = {
  "differential-equations": differentialEquations,
  probability: probability,

  os: os,
  "os-lab": osLab,

  "signals-and-systems": signalsAndSystems,

  "persian-literature": persianLiterature,
};
