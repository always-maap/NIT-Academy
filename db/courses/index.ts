import { differentialEquations } from "./differential-equations";
import { os } from "./os";
import { osLab } from "./os-lab";
import { signalsAndSystems } from "./signals-and-systems";

export const courses = {
  "signals-and-systems": signalsAndSystems,
  "differential-equations": differentialEquations,
  os: os,
  "os-lab": osLab,
};
