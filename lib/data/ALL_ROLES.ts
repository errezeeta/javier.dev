import { IRole } from "@/components/sections/Experience/Role/Role";

export const ROLES: IRole[] = [
  {
    title: "Software Engineer",
    company: "TrueCold",
    location: "Barcelona, Spain",
    startDate: "2024",
    endDate: "Present",
    description: "",
    achievements: [
      [
        "Built and optimized a complex cold chain tracking system:",
        "Implemented persistent table views with URL-based state management across 9+ data tables (materials, inventory, deliveries, carriers, sensors, etc.).",
        "Built reusable table components with server-side pagination, filtering, and sorting using TanStack Table.",
      ],
      [
        "Architected and maintained a scalable monorepo structure:",
        "Designed a Turborepo-based monorepo with multiple apps (backoffice, truecold-app, truecold-api, server) and shared packages.",
        "Built shared packages for database queries, UI components, type definitions, email service, and logging.",
        "Implemented consistent TypeScript configuration and ESLint rules across the entire codebase.",
        "Developed complex database queries with Prisma handling relations, aggregations, and dynamic filtering.",
        "Created authentication flows and role-based permission systems.",
        "Built dashboard interfaces for inventory management, sensor monitoring, and delivery tracking.",
        "Integrated real-time temperature monitoring with TOR (Time Out of Range) calculations and alerts.",
      ],
      [
        "Enhanced developer experience and code quality",
        "Worked through complex Prisma ORM limitations (e.g., complex relations) and implemented workarounds.",
        "Applied performance optimizations.",
        "Fixed critical UX issues.",
        "Maintained clean separation between server and client components in Next.js 14 App Router.",
        "Implemented sophisticated URL parameter synchronization for stateful UI components.",
        "Debugged and resolved TypeScript type issues across a large codebase.",
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
