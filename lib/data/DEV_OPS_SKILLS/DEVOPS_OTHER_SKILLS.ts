import { ISkill } from "@/lib/types/ISkill";

export const DEVOPS_OTHER_SKILLS: ISkill = {
  name: "Other",
  description:
    "I managed servers and used deployment tools since I started programming",
  subSkills: [
    { name: "CI/CD" },
    { name: "GitHub Actions" },
    { name: "Turborepo" },
    { name: "esbuild" },
    { name: "Docker" },
    { name: "Railway" },
    { name: "CDN" },
    { name: "SSH" },
  ],
};
