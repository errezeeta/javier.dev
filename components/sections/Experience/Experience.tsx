import { ROLES } from "@/lib/data/ALL_ROLES";

export default function Experience() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Experience</h2>

      <div className="space-y-6 pl-6 border-l border-[hsl(var(--border-color))]">
        {ROLES.map((role, i) => (
          <div key={i} className="relative timeline-dot">
            {/* Header */}
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
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

            {/* Description tag */}
            {role.description && (
              <p className="text-[0.6875rem] text-[hsl(var(--text-tertiary))] uppercase tracking-wider font-medium mb-3">
                {role.description}
              </p>
            )}

            {/* Achievements */}
            <div className="space-y-2.5">
              {role.achievements.map((group, gi) => (
                <div key={gi}>
                  {group.map((item, ii) => {
                    const isCategory = item.endsWith(":");
                    if (isCategory) {
                      return (
                        <p
                          key={ii}
                          className="text-[0.8125rem] font-semibold text-[hsl(var(--text-primary))] mt-2.5 first:mt-0 mb-1"
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
