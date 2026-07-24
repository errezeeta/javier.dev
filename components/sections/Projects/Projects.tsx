import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AI Video Automation Pipeline",
    stack: "n8n · Gemini · YouTube API · Shotstack · SerpAPI",
    description:
      "End-to-end automated pipeline generating and publishing YouTube Shorts daily. Fetches trending topics via SerpAPI, generates scripts with Gemini, synthesizes voice with Google TTS, renders vertical video with Shotstack, and publishes to YouTube — fully automating the content creation lifecycle with 6+ API integrations.",
    link: null,
  },
  {
    name: "Second Brain — AI-Powered Knowledge Vault",
    stack: "Railway · OpenCode · Telegram Bot · LLM Agents · Docker",
    description:
      "Personal knowledge management system with AI agents, Telegram bot interface, and containerized deployment on Railway. Uses LLM agents for ingesting sources, maintaining a cross-referenced wiki, and synthesizing answers from stored knowledge.",
    link: null,
  },
  {
    name: "FreeDSM — IoT Light-Pollution Monitor",
    stack: "C/C++ · Sensors · Firmware · Python · Flask · Docker",
    description:
      "Affordable, long-lasting IoT device measuring local irradiance for light-pollution studies. Integrated sensors, power management, data-logging, and comparison pipelines with ESA Gaia satellite data. Built at IEEC.",
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="Projects flex flex-col items-center gap-5 print:gap-4 w-full">
      <h2 className="text-2xl font-bold print:text-xl">Projects</h2>
      <div className="grid gap-4 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col gap-1.5 p-4 rounded-xl border border-border hover-card hover:border-primary/20 hover:bg-secondary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-md font-bold print:text-md">
                {project.name}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors print:hidden"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              {project.stack}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
