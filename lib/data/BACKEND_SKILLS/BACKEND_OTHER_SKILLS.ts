import { ISkill } from "@/lib/types/ISkill";

export const BACKEND_OTHER_SKILLS: ISkill = {
  name: "Other",
  description:
    "I like experimenting with different technologies and frameworks to find the best tool for the job.",
  subSkills: [
    { name: "SQS" },
    { name: "Event-driven" },
    { name: "Git" },
    { name: "Bash" },
    { name: "Rate Limiting" },
  ],
};
