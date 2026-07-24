export default function About() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-4">
        About
      </h2>

      <div className="space-y-4 text-[hsl(var(--text-secondary))] leading-relaxed">
        <p>
          I studied Telematics Engineering at{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            UPC · EETAC Castelldefels
          </strong>
          . Since then, I&apos;ve worked across startups, research labs, and
          open-source — always drawn to projects where I can shape both the
          product and the technology underneath it.
        </p>

        <p>
          Right now I&apos;m at{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            TrueCold
          </strong>
          , an early-stage startup where I built the platform from MVP to
          production. Before that, at{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            IEEC
          </strong>{" "}
          I worked on IoT devices and data pipelines for ESA&apos;s Gaia
          satellite mission.
        </p>

        <p>
          I care about writing software that lasts — well-typed APIs, thoughtful
          database schemas, CI/CD that doesn&apos;t break, and documentation
          people actually read. I&apos;m equally comfortable in a Node.js
          backend, a Next.js frontend, or an AWS console.
        </p>
      </div>
    </section>
  );
}
