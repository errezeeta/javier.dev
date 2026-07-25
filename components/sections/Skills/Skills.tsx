import { ISkill } from "@/lib/types/ISkill";

export default function Skills() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS.map((skill, i) => (
          <div key={i} className="rounded-lg shadow-card bg-[hsl(var(--bg-raised))] p-4 sm:p-5">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: ISkill }) {
  const years = skill.since ? new Date().getFullYear() - skill.since : 0;
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))]">
          {skill.name}
        </h3>
        {years > 0 && (
          <span className="text-[0.625rem] font-mono text-[hsl(var(--text-tertiary))] tabular-nums">
            {years}y
          </span>
        )}
      </div>
      <p className="text-[0.75rem] text-[hsl(var(--text-secondary))] leading-relaxed">
        {skill.description}
      </p>
      {skill.subSkills && skill.subSkills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {skill.subSkills.map((sub, si) => (
            <span key={si} className="skill-tag">
              {sub.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Inline data — avoids import issues
const SKILLS: ISkill[] = [
  {
    name: "Backend",
    since: 2017,
    description:
      "TypeScript is my primary language. I build typed APIs with Express 5, Zod validation, Prisma ORM, and event-driven architectures with SQS.",
    subSkills: [
      { name: "TypeScript", since: 2017, description: "" },
      { name: "Node.js", since: 2018, description: "" },
      { name: "Express 5", since: 2019, description: "" },
      { name: "Prisma", since: 2022, description: "" },
      { name: "Zod", since: 2023, description: "" },
      { name: "SQS", since: 2024, description: "" },
      { name: "Python / Flask", since: 2019, description: "" },
      { name: "Go", since: 2021, description: "" },
    ],
  },
  {
    name: "Frontend",
    since: 2017,
    description:
      "Frontend is my primary focus. I build complex, responsive applications with Next.js 14, Server Components, and modern UI libraries.",
    subSkills: [
      { name: "Next.js 14", since: 2020, description: "" },
      { name: "React", since: 2020, description: "" },
      { name: "Angular", since: 2019, description: "" },
      { name: "shadcn/ui", since: 2023, description: "" },
      { name: "Tailwind CSS", since: 2022, description: "" },
      { name: "Radix", since: 2023, description: "" },
      { name: "React Hook Form", since: 2023, description: "" },
      { name: "Playwright", since: 2023, description: "" },
    ],
  },
  {
    name: "Cloud & DevOps",
    since: 2019,
    description:
      "I deploy on AWS with serverless architecture and automate everything with CI/CD.",
    subSkills: [
      { name: "AWS Lambda", since: 2024, description: "" },
      { name: "API Gateway", since: 2024, description: "" },
      { name: "S3 / RDS", since: 2023, description: "" },
      { name: "SQS", since: 2024, description: "" },
      { name: "Docker", since: 2019, description: "" },
      { name: "GitHub Actions", since: 2022, description: "" },
      { name: "Turborepo", since: 2024, description: "" },
    ],
  },
  {
    name: "AI & Automation",
    since: 2023,
    description:
      "I integrate AI into products and automate workflows end-to-end.",
    subSkills: [
      { name: "GPT-4V / OCR", since: 2023, description: "" },
      { name: "n8n", since: 2024, description: "" },
      { name: "Claude Code", since: 2025, description: "" },
      { name: "OpenCode", since: 2025, description: "" },
      { name: "MCP", since: 2025, description: "" },
    ],
  },
];
