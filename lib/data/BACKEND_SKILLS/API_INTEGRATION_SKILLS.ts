import { ISkill } from "@/lib/types/ISkill";

export const API_INTEGRATION_SKILLS: ISkill = {
  name: "API integrations",
  since: 2018,
  description:
    "I integrate external services into applications, including IoT sensor providers, AI services, email delivery, and webhook systems.",
  subSkills: [
    { name: "IoT Sensors" },
    { name: "OpenAI" },
    { name: "Resend" },
    { name: "Svix" },
    { name: "PostHog" },
    { name: "SerpAPI" },
    { name: "YouTube API" },
  ],
};
