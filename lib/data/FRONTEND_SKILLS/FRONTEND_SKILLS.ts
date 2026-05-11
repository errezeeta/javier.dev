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
  level: 85,
  description:
    "Frontend is my primary focus. I build complex, responsive applications with Next.js 14, Server Components, and modern UI libraries.",
  subSkills: [
    TYPESCRIPT_SKILLS,
    NEXT_SKILLS,
    REACT_SKILLS,
    JAVASCRIPT_SKILLS,
    ANGULAR_SKILLS,
    FRONTEND_OTHER_SKILLS,
  ],
};
