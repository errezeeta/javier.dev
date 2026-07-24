import { LANGUAGES } from "@/lib/data/LANGUAGES";

export default function Languages() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
        Languages
      </h2>
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        {LANGUAGES.map((lang, i) => (
          <div key={i} className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-[hsl(var(--text-primary))]">
              {lang.name}
            </span>
            <span className="text-sm text-[hsl(var(--text-secondary))]">
              {lang.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
