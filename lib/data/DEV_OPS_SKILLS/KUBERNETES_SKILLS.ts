import { ISkill } from "@/lib/types/ISkill";

export const KUBERNETES_SKILLS: ISkill = {
  name: "Docker",
  since: 2019,
  description:
    "I have set up and maintained multiple Docker containers from scratch.",
  subSkills: [
    { name: "Docker" },
    { name: "Docker Compose" },
    { name: "DockerHub" },
  ],
};
