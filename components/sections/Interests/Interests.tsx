import { INTERESTS } from "@/lib/data/INTERESTS";

export default function Interests() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
        Interests
      </h2>
      <div className="flex flex-wrap gap-2">
        {INTERESTS.map((interest, i) => (
          <span
            key={i}
            className="inline-flex text-xs px-2.5 py-1 rounded-md border border-[hsl(var(--border))] text-[hsl(var(--text-secondary))] bg-[hsl(var(--bg-elevated))]"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
