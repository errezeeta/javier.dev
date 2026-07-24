import { ROLES } from "@/lib/data/ALL_ROLES";

export default function Experience() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Experience</h2>

      <div className="space-y-1">
        {ROLES.map((role, i) => (
          <div
            key={i}
            className="group rounded-xl shadow-card bg-[hsl(var(--bg-raised))] p-5 sm:p-6 hover:shadow-[0_0_0_1px_hsl(var(--border-color)),0_2px_4px_hsl(0_0%_0%/0.06),0_6px_12px_-4px_hsl(0_0%_0%/0.06)] transition-shadow duration-300"
          >
            {/* Header row */}
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-base font-semibold text-[hsl(var(--text-primary))]">
                  {role.company}
                </h3>
                <p className="text-sm text-[hsl(var(--text-secondary))] mt-0.5">
                  {role.title}
                </p>
              </div>
              <p className="text-xs text-[hsl(var(--text-tertiary))] tabular-nums whitespace-nowrap font-mono">
                {role.startDate} — {role.endDate}
              </p>
            </div>

            {/* Description */}
            {role.description && (
              <p className="mt-2 text-xs text-[hsl(var(--text-tertiary))] uppercase tracking-wider font-medium">
                {role.description}
              </p>
            )}

            {/* Achievements — grouped by category */}
            <div className="mt-3 space-y-3">
              {role.achievements.map((group, gi) => (
                <div key={gi}>
                  {group.map((item, ii) => {
                    const isCategory = item.endsWith(":");
                    if (isCategory) {
                      return (
                        <p
                          key={ii}
                          className="text-[0.8125rem] font-medium text-[hsl(var(--text-primary))] mt-2 first:mt-0"
                        >
                          {item}
                        </p>
                      );
                    }
                    return (
                      <p
                        key={ii}
                        className="text-[0.8125rem] text-[hsl(var(--text-secondary))] leading-relaxed pl-3.5 relative before:content-['—'] before:absolute before:left-0 before:text-[hsl(var(--text-tertiary))] before:text-[0.6875rem]"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
