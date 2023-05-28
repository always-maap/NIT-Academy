import { Course } from "@/types/Course";
import { ai } from "./ai";
import { algorithmDesign } from "./algorithm-design";
import { compiler } from "./compiler";
import { constitution } from "./constitution";
import { dataStructure } from "./data-structure";
import { differentialEquations } from "./differential-equations";
import { electricElectronicCircuits } from "./electric-electronic-circuits";
import { english } from "./english";
import { family } from "./family";
import { historyOfImam } from "./history-of-imam";
import { historyOfIslam } from "./history-of-islam";
import { iranRevolution } from "./iran-revolution";
import { islamicThoughts1 } from "./islamic-thoughts-1";
import { islamicThoughts2 } from "./islamic-thoughts-2";
import { languageDesign } from "./language-design";
import { languageTheory } from "./language-theory";
import { lifeStyle } from "./life-style";
import { linearAlgebra } from "./linear-algebra";
import { nahjAlBalagha } from "./nahj-al-balagha";
import { network } from "./network";
import { os } from "./os";
import { osLab } from "./os-lab";
import { persianLiterature } from "./persian-literature";
import { physics2 } from "./physics-2";
import { probability } from "./probability";
import { quran } from "./quran";
import { research } from "./research";
import { signalsAndSystems } from "./signals-and-systems";
import { informationRetrieval } from "./information-retrieval";
import { networkLab } from "./network-lab";

export const courses: Record<string, Course> = {
  // basic
  "physics-2": physics2,
  "differential-equations": differentialEquations,
  probability: probability,

  // main
  "data-structure": dataStructure,
  ai: ai,
  "algorithm-design": algorithmDesign,
  "electric-electronic-circuits": electricElectronicCircuits,
  research: research,
  os: os,
  "os-lab": osLab,
  network: network,
  "network-lab": networkLab,
  "language-theory": languageTheory,
  compiler: compiler,
  "linear-algebra": linearAlgebra,

  // specialized
  "signals-and-systems": signalsAndSystems,
  "language-design": languageDesign,
  "information-retrieval": informationRetrieval,

  // general
  "persian-literature": persianLiterature,
  english: english,
  family: family,
  "islamic-thoughts-1": islamicThoughts1,
  "islamic-thoughts-2": islamicThoughts2,
  "life-style": lifeStyle,
  "history-of-islam": historyOfIslam,
  "history-of-imam": historyOfImam,
  quran: quran,
  "nahj-al-balagha": nahjAlBalagha,
  "iran-revolution": iranRevolution,
  constitution: constitution,
};
