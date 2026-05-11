import { ISkill } from "@/lib/types/ISkill";

export const AWS_SKILLS: ISkill = {
  name: "AWS",
  since: 2022,
  description: "I deploy and manage serverless applications on AWS, including Lambda functions, API Gateways, and SQS queues.",
  subSkills: [
    { name: "Lambda" },
    { name: "API Gateway" },
    { name: "SQS" },
    { name: "S3" },
    { name: "RDS" },
    { name: "EC2" },
    { name: "ECS" },
    { name: "CloudWatch" },
  ],
};
