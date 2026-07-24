import { EDUCATION } from "@/lib/data/EDUCATION";

export default function Education() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
        Education
      </h2>
      <div>
        <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
          {EDUCATION.degree}
        </h3>
        <p className="text-sm text-[hsl(var(--text-secondary))]">
          {EDUCATION.institution}
        </p>
        <p className="text-xs text-[hsl(var(--text-tertiary))] mt-1">
          {EDUCATION.since} — {EDUCATION.until}
        </p>
        {EDUCATION.description && (
          <p className="mt-2 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
            {EDUCATION.description}
          </p>
        )}
      </div>
    </section>
  );
}
