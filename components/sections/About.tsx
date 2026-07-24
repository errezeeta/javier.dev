export default function About() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">About</h2>

      <div className="space-y-4 text-[hsl(var(--text-secondary))] text-[0.9375rem] leading-relaxed">
        <p>
          Telematics Engineer from{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            UPC · EETAC Castelldefels
          </strong>
          . I&apos;ve worked across startups, research labs, and open-source —
          always drawn to projects where I can own both the product vision and
          the technical foundation.
        </p>
        <p>
          Currently at{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            TrueCold
          </strong>
          , where I built a multi-tenant SaaS platform from MVP to production.
          Previously at{" "}
          <strong className="text-[hsl(var(--text-primary))] font-medium">
            IEEC
          </strong>
          , developing IoT hardware and data pipelines for ESA&apos;s Gaia
          satellite mission.
        </p>
        <p>
          I write software that lasts — well-typed APIs, thoughtful schemas,
          CI/CD you can trust, and docs people actually read.
        </p>
      </div>
    </section>
  );
}
