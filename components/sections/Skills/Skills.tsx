import Skill from "@/components/sections/Skills/Skill/Skill";
import { SKILLS } from "@/lib/data/ALL_SKILLS";

export default function Skills() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="section-label">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SKILLS.map((skill, i) => (
          <div
            key={i}
            className="rounded-xl shadow-card bg-[hsl(var(--bg-raised))] p-5"
          >
            <Skill skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
