const projects = [
  {
    name: "AI Video Automation Pipeline",
    url: null,
    stack: "n8n · Gemini · YouTube API · Shotstack · SerpAPI",
    description:
      "End-to-end pipeline that generates and publishes YouTube Shorts daily — trending topic detection, script generation, voice synthesis, video rendering, and publishing. Six API integrations working together autonomously.",
  },
  {
    name: "Second Brain",
    url: null,
    stack: "Railway · OpenCode · Telegram Bot · LLM Agents · Docker",
    description:
      "Personal knowledge management system backed by LLM agents. Telegram bot interface, cross-referenced wiki, and contextual answer synthesis from stored knowledge.",
  },
  {
    name: "FreeDSM",
    url: null,
    stack: "C · Python · Flask · Docker · ESA Gaia",
    description:
      "Low-cost IoT device for measuring light pollution. Custom firmware, sensor integration, Flask backends, and comparison pipelines against ESA satellite irradiance data. Built at IEEC.",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
        Projects
      </h2>

      <div className="space-y-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--bg-elevated))] p-4 hover:border-[hsl(var(--text-tertiary))] transition-colors"
          >
            <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))]">
              {p.name}
            </h3>
            <p className="mt-0.5 text-xs text-[hsl(var(--text-tertiary))] font-mono">
              {p.stack}
            </p>
            <p className="mt-2 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
