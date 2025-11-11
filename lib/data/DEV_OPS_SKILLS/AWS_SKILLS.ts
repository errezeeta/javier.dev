import { ISkill } from "@/lib/types/ISkill";

export const AWS_SKILLS: ISkill = {
  name: "AWS",
  since: 2022,
  description: "I've hosted websites and containers using AWS",
  subSkills: [
    { name: "EC2" },
    { name: "ECS" },
    { name: "S3" },
    { name: "RDS" },
    { name: "Lambda" },
    { name: "Amplify" },
    { name: "Cloudfront" },
  ],
};
