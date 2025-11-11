import { ANGULAR_SKILLS } from "@/lib/data/FRONTEND_SKILLS/ANGULAR_SKILLS";
import { NEXT_SKILLS } from "@/lib/data/FRONTEND_SKILLS/NEXT_SKILLS";
import { REACT_SKILLS } from "@/lib/data/FRONTEND_SKILLS/REACT_SKILLS";
import { JAVASCRIPT_SKILLS } from "@/lib/data/FRONTEND_SKILLS/JAVASCRIPT_SKILLS";
import { ISkill } from "@/lib/types/ISkill";
import { TYPESCRIPT_SKILLS } from "./TYPESCRIPT_SKILLS";
import { FRONTEND_OTHER_SKILLS } from "./FRONTEND_OTHER_SKILLS";

export const FRONTEND_SKILLS: ISkill = {
  name: "Frontend",
  since: 2018,
  level: 75,
  description:
    "I have extensive experience in frontend development, creating responsive and user-friendly interfaces using modern frameworks and technologies.",
  subSkills: [
    TYPESCRIPT_SKILLS,
    NEXT_SKILLS,
    REACT_SKILLS,
    JAVASCRIPT_SKILLS,
    ANGULAR_SKILLS,
    FRONTEND_OTHER_SKILLS,
  ],
};
