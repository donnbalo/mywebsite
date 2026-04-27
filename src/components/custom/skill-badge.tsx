import type { Skill } from "@/lib/data";

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-secondary/60 text-foreground/80 border border-border/50 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/20">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
      {skill.name}
    </div>
  );
}

export function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: Skill[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
