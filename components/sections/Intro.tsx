export default function Intro() {
  return (
    <section className="Intro flex flex-col items-center w-full pt-8 md:pt-16">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium mb-6 print:hidden">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Open to work
      </div>

      {/* Name with gradient effect */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center">
        <span className="gradient-text">Javier Ramirez</span>
      </h1>

      {/* Title */}
      <div className="mt-4 text-xl md:text-2xl text-muted-foreground font-light text-center">
        Full-Stack Software Engineer
      </div>

      {/* Tagline */}
      <p className="mt-3 text-sm md:text-base text-muted-foreground/70 max-w-lg text-center leading-relaxed">
        Building SaaS products from MVP to production.
        Next.js · TypeScript · AWS · AI Automation.
      </p>

      {/* Quick stats */}
      <div className="flex gap-6 mt-6 text-xs text-muted-foreground print:hidden">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground">3+</span> years exp.
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground">B2</span> English (FCE)
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground">ES</span> Barcelona
        </div>
      </div>

      {/* Print-only website */}
      {process.env.NEXT_PUBLIC_WEBSITE_URL ? (
        <div className="items-center gap-2 hidden print:flex mt-2">
          <a
            href={process.env.NEXT_PUBLIC_WEBSITE_URL}
            target="_blank"
            className="text-sm text-muted-foreground"
          >
            {process.env.NEXT_PUBLIC_WEBSITE_URL.replace("https://", "")}
          </a>
        </div>
      ) : null}
    </section>
  );
}
