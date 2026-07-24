import { LANGUAGES } from "@/lib/data/LANGUAGES";

export default function Languages() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Languages</h2>
      <div className="flex flex-wrap gap-3">
        {LANGUAGES.map((lang, i) => (
          <div
            key={i}
            className="rounded-xl shadow-card bg-[hsl(var(--bg-raised))] px-5 py-3 flex items-baseline gap-3"
          >
            <span className="text-sm font-medium text-[hsl(var(--text-primary))]">
              {lang.name}
            </span>
            <span className="text-[0.8125rem] text-[hsl(var(--text-secondary))]">
              {lang.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
