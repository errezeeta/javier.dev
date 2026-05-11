import { ISkill } from "@/lib/types/ISkill";

export const NEXT_SKILLS: ISkill = {
  name: "Next.js",
  since: 2022,
  description:
    "Next.js is my go-to framework. I build full-stack applications with Server Components, Server Actions, and the App Router.",
  subSkills: [
    { name: "App Router" },
    { name: "Server Components" },
    { name: "Server Actions" },
    { name: "shadcn/ui" },
    { name: "Tailwind CSS" },
    { name: "Radix" },
    { name: "Zod" },
    { name: "React Hook Form" },
  ],
};
