const projects = [
  {
    name: "AI Video Automation Pipeline",
    stack: "n8n · Gemini · YouTube API · Shotstack · SerpAPI",
    description:
      "End-to-end pipeline that generates and publishes YouTube Shorts daily — trend detection, script generation with Gemini, voice synthesis, vertical video rendering, and publishing. Six API integrations working autonomously.",
  },
  {
    name: "Second Brain",
    stack: "Railway · OpenCode · Telegram Bot · LLM Agents · Docker",
    description:
      "Personal knowledge management system with AI agents and Telegram bot interface. Cross-referenced wiki, contextual answer synthesis from stored knowledge.",
  },
  {
    name: "FreeDSM",
    stack: "C · Python · Flask · Docker · ESA Gaia",
    description:
      "Low-cost IoT device for measuring light pollution. Custom firmware, sensor integration, and comparison pipelines against ESA satellite irradiance data. Built at IEEC.",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Projects</h2>

      <div className="space-y-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group rounded-lg shadow-card bg-[hsl(var(--bg-raised))] p-4 sm:p-5"
          >
            <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))]">
              {p.name}
            </h3>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[hsl(var(--text-tertiary))]">
              {p.stack}
            </p>
            <p className="mt-2 text-[0.8125rem] text-[hsl(var(--text-secondary))] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
