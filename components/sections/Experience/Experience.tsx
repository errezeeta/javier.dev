import { ROLES } from "@/lib/data/ALL_ROLES";

export default function Experience() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--text-tertiary))] mb-5">
        Experience
      </h2>

      <div className="space-y-8">
        {ROLES.map((role, i) => (
          <div key={i} className="group">
            {/* Header */}
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
                  {role.company}
                </h3>
                <p className="text-sm text-[hsl(var(--text-secondary))]">
                  {role.title}
                </p>
              </div>
              <p className="text-xs text-[hsl(var(--text-tertiary))] tabular-nums whitespace-nowrap">
                {role.startDate} — {role.endDate}
              </p>
            </div>

            {/* Description */}
            {role.description && (
              <p className="mt-1 text-sm text-[hsl(var(--text-tertiary))]">
                {role.description}
              </p>
            )}

            {/* Achievements */}
            <ul className="mt-3 space-y-2">
              {role.achievements.flat().map((item, j) => (
                <li
                  key={j}
                  className={`text-sm leading-relaxed pl-4 relative ${
                    item.endsWith(":")
                      ? "font-medium text-[hsl(var(--text-primary))] mt-3 first:mt-0 pl-0"
                      : "text-[hsl(var(--text-secondary))] before:content-['—'] before:absolute before:left-0 before:text-[hsl(var(--text-tertiary))]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
