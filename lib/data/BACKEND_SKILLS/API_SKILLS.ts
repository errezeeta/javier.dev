import { ISkill } from "@/lib/types/ISkill";

export const API_SKILLS: ISkill = {
  name: "Api Development",
  since: 2018,
  description:
    "I build robust APIs with Express 5, Zod validation, and OpenAPI documentation. I have experience with REST, GraphQL, and event-driven architectures.",
  subSkills: [
    { name: "REST API" },
    { name: "Express" },
    { name: "Zod" },
    { name: "GraphQL" },
    { name: "OpenAPI/Swagger" },
    { name: "NestJS" },
    { name: "FastAPI" },
  ],
};
