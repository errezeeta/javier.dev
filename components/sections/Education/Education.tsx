import { EDUCATION } from "@/lib/data/EDUCATION";

export default function Education() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Education</h2>
      <div className="rounded-xl shadow-card bg-[hsl(var(--bg-raised))] p-5 sm:p-6">
        <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
          {EDUCATION.degree}
        </h3>
        <p className="text-sm text-[hsl(var(--text-secondary))] mt-0.5">
          {EDUCATION.institution}
        </p>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-[hsl(var(--text-tertiary))] mt-1.5">
          {EDUCATION.since} — {EDUCATION.until}
        </p>
        {EDUCATION.description && (
          <p className="mt-3 text-[0.8125rem] text-[hsl(var(--text-secondary))] leading-relaxed">
            {EDUCATION.description}
          </p>
        )}
      </div>
    </section>
  );
}
