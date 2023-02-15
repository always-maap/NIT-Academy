import { differentialEquations } from "./differential-equations";
import { os } from "./os";
import { osLab } from "./os-lab";
import { probability } from "./probability";
import { signalsAndSystems } from "./signals-and-systems";

export const courses = {
  "differential-equations": differentialEquations,
  probability: probability,

  os: os,
  "os-lab": osLab,

  "signals-and-systems": signalsAndSystems,
};
