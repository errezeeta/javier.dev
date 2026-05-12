import { IRole } from "@/components/sections/Experience/Role/Role";

export const ROLES: IRole[] = [
  {
    title: "Software Engineer",
    company: "TrueCold",
    location: "Barcelona, Spain",
    startDate: "2024",
    endDate: "Present",
    description:
      "Early-stage startup · Built the product from MVP to production with paying customers",
    achievements: [
      [
        "Architecture & Platform:",
        "Built a multi-tenant SaaS platform with strict data isolation per account across every query and model.",
        "Designed a monorepo structure (Turborepo + npm workspaces) with 3 apps and 5 shared packages with internal dependencies.",
        "Implemented event-driven architecture with async processing via SQS and a complete audit trail.",
      ],
      [
        "Full-Stack Development:",
        "Developed 18+ API modules with Express 5, Zod validation, and rate limiting with Upstash Redis.",
        "Built 30+ feature modules in Next.js 14 App Router with Server Components and Server Actions.",
        "Created a shared UI component library with shadcn/ui, Radix primitives, and Tailwind CSS.",
        "Integrated external services: IoT sensor providers (Tive, Berlinger), AI-powered OCR (OpenAI GPT-4V), and transactional email (Resend).",
      ],
      [
        "DevOps & Infrastructure:",
        "Set up serverless deployment with AWS Lambda and API Gateway across multiple environments.",
        "Configured CI/CD with GitHub Actions for automated builds, S3 uploads, and Lambda function updates.",
        "Designed a database schema with 50+ models using Prisma, with universal soft-delete and audit logging patterns.",
      ],
      [
        "AI & Automation:",
        "Built an SEO-focused landing page generator using n8n automation pipelines.",
        "Configured the project development harness with skills and tooling for AI-assisted workflows (OpenCode, Claude Code, Copilot Cloud).",
        "Set up a marketing agent (Hermes) using MCP and connectors to automate marketing tasks.",
      ],
    ],
  },
  {
    title: "Software Engineer",
    company: "IEEC - Institut d'Estudis Espacials de Catalunya",
    location: "Barcelona, Spain",
    startDate: "2021",
    endDate: "2023",
    description: "Internship",
    achievements: [
      [
        "Contributed to the Gaia4Sustainability outreach project:",
        "Worked on raising awareness about light pollution and its effects on ecosystems and human life.",
        "Collaborated with cross-disciplinary teams to translate satellite data into accessible outreach materials and demonstrations.",
      ],
      [
        "Developed hardware and firmware for the FreeDSM initiative:",
        "Designed and prototyped an affordable, long-lasting device to measure local irradiance for light-pollution studies.",
        "Integrated sensors, power management and data-logging features to allow distributed deployments and reliable field measurements.",
        "Implemented data validation and calibration routines to enable comparison with Gaia satellite irradiance products.",
      ],
      [
        "Built data infrastructure, modelling and backend services:",
        "Implemented a model that estimates irradiance for a given time and place using astronomical parameters and observational metadata.",
        "Developed Flask-based backends and containerized services (Docker) to collect, store and serve device and model data.",
        "Created pipelines to compare ground measurements with satellite observations and produce metrics for light-pollution analysis and outreach.",
        "Wrote documentation, tests and helped maintain reproducible deployments for field teams.",
      ],
    ],
  },
  {
    title: "Final Degree Project (Thesis)",
    company: "Classpip",
    location: "Barcelona, Spain",
    startDate: "2021",
    endDate: "2021",
    description: "Final degree project",
    achievements: [
      [
        "Collaborated on the Classpip open-source gamification project:",
        "Implemented improvements and new features to support classroom gamification scenarios.",
        "Worked closely with maintainers to submit clean, documented contributions and PRs.",
      ],
      [
        "Designed and implemented a geocaching mode:",
        "Built geolocation-based gameplay using browser/device geolocation APIs and OpenStreetMap services.",
        "Integrated map tiles, marker management and route handling to support location-based challenges.",
      ],
      [
        "Delivered supporting work and thesis documentation:",
        "Implemented front-end logic, UI improvements and performance refinements for the new mode.",
        "Packaged a demo and deployment-ready assets for evaluation by supervisors and users.",
        "Thesis (memory) available at: https://errezeeta.github.io/javier.dev/assets/JRM_thesis.pdf",
      ],
    ],
  },
];
